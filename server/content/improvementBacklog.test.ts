import { describe, expect, it, vi } from "vitest";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { backlogMarkdown, buildBacklog, parseBaseline, type BacklogInput } from "./improvementBacklog";
import { backlogMain, collectBacklogInput } from "../../scripts/content/improvementBacklog";
import { contentRepository } from "./repository";
import { reportCoverage } from "./coverage";
import { externalNameReport } from "../../content/externalNames";

/**
 * 情報不足の作業一覧（設計: docs/修正設計書_運用安定化と保守性改善_2026-10-19.md §5.6・§8.1）。
 */

const fixture = (overrides: Partial<BacklogInput> = {}): BacklogInput => ({
  sourceRevision: "a".repeat(40),
  sourceDirty: false,
  contentRevision: "c".repeat(64),
  notCollected: [
    { id: "character.hsr.1001.skills", visibility: "planned", reason: "skills|missing\nline", requiredKinds: ["normal"] },
    { id: "character.genshin.2002.introduction", visibility: "active", reason: "intro", requiredKinds: ["introduction"] },
    { id: "guide.authoring.mod.b1.relicSet.reason", visibility: "planned", reason: "reason", requiredKinds: ["adoptionReason"] },
    { id: "guide.authoring.mod.b2.weapon.alternatives", visibility: "planned", reason: "alt", requiredKinds: ["alternatives"] },
    { id: "guide.authoring.mod.b3.weapon.reason", visibility: "planned", reason: "legacy", requiredKinds: ["adoptionReason"] },
  ],
  externalBoundaries: [
    { id: "external.zzz.characters.name", game: "zzz", field: "characters.name", source: "server/gameProviders.ts: normalizeZzzPayload", policy: "unresolved", reason: "x" },
    { id: "external.zzz.player.name", game: "zzz", field: "player.name", source: "server/gameProviders.ts: normalizeZzzPayload", policy: "user-value", reason: "x" },
  ],
  characters: [
    { identityKey: "hsr:1001", game: "hsr", ownerModule: "content/ja/characters/hsr.ts" },
    { identityKey: "genshin:2002", game: "genshin", ownerModule: "content/ja/characters/genshin.ts" },
  ],
  guides: [
    { guideId: "guide.authoring.mod.b1", game: "hsr", identityKey: "hsr:1001", ownerModule: "content/guideDefinitions_hsr.ts", recommendationIds: ["guide.authoring.mod.b1.relicSet"] },
    { guideId: "guide.authoring.mod.b2", game: "zzz", identityKey: "legacy:zzz:guide.authoring.mod.b2", ownerModule: "content/guideDefinitions_providers.ts", recommendationIds: ["guide.authoring.mod.b2.weapon"] },
    { guideId: "guide.authoring.mod.b3", game: "genshin", identityKey: "legacy:genshin:guide.authoring.mod.b3", ownerModule: "content/guideDefinitions_providers.ts", recommendationIds: ["guide.authoring.mod.b3.weapon"] },
  ],
  translations: { en: { missing: 1 } },
  otherUnresolved: { unresolvedTeamMembers: 2 },
  ...overrides,
});

describe("buildBacklog（合成fixture）", () => {
  it("active不足→外部名称→planned不足の優先順で、game・category・subjectId（null末尾）・keyの順に並べる", () => {
    const { items } = buildBacklog(fixture());
    expect(items.map(row => [row.priority, row.key])).toEqual([
      [1, "information:character.genshin.2002.introduction"],
      [2, "external:external.zzz.characters.name"],
      [3, "information:guide.authoring.mod.b3.weapon.reason"],
      [3, "information:character.hsr.1001.skills"],
      [3, "information:guide.authoring.mod.b1.relicSet.reason"],
      [3, "information:guide.authoring.mod.b2.weapon.alternatives"],
    ]);
  });

  it("帰属: 実在キャラは解決し、legacy は game だけ残してキャラ帰属を推測しない", () => {
    const rows = new Map(buildBacklog(fixture()).items.map(row => [row.key, row]));
    expect(rows.get("information:guide.authoring.mod.b1.relicSet.reason")).toMatchObject({ game: "hsr", subjectId: "1001", identityKey: "hsr:1001", category: "guide.equipment.reason", ownerModule: "content/guideDefinitions_hsr.ts" });
    expect(rows.get("information:guide.authoring.mod.b2.weapon.alternatives")).toMatchObject({ game: "zzz", subjectId: null, identityKey: null, category: "guide.equipment.alternatives" });
    expect(rows.get("external:external.zzz.characters.name")).toMatchObject({ ownerModule: "server/gameProviders.ts", visibility: null, requiredKinds: [] });
    expect(rows.has("external:external.zzz.player.name")).toBe(false);
  });

  it("入力を逆順にしても出力は同じ（null行同士もkeyで固定）", () => {
    const base = fixture();
    const reversed = fixture({ notCollected: [...base.notCollected].reverse(), guides: [...base.guides].reverse(), externalBoundaries: [...base.externalBoundaries].reverse() });
    expect(JSON.stringify(buildBacklog(reversed))).toBe(JSON.stringify(buildBacklog(base)));
  });

  it("baselineとの差分: 同一なら0件、追加・削除・意味変更を各1件、出力順やSHAだけの違いはchangedにしない", () => {
    const current = buildBacklog(fixture());
    const same = buildBacklog(fixture({ sourceRevision: "b".repeat(40) }), JSON.stringify({ ...current, items: [...current.items].reverse() }));
    expect(same.delta).toEqual({ added: [], removed: [], changed: [] });

    const previousItems = current.items
      .filter(row => row.key !== "information:character.hsr.1001.skills")
      .map(row => row.key === "information:guide.authoring.mod.b3.weapon.reason" ? { ...row, reason: "old reason" } : row);
    previousItems.push({ ...current.items[0]!, key: "information:gone.section" });
    const delta = buildBacklog(fixture(), { schemaVersion: 1, items: previousItems }).delta!;
    expect(delta.added.map(row => row.key)).toEqual(["information:character.hsr.1001.skills"]);
    expect(delta.removed.map(row => row.key)).toEqual(["information:gone.section"]);
    expect(delta.changed.map(row => [row.key, row.reason])).toEqual([["information:guide.authoring.mod.b3.weapon.reason", "legacy"]]);
  });

  it("壊れたJSON・別schema・重複keyのbaselineを拒否する", () => {
    const row = buildBacklog(fixture()).items[0]!;
    expect(() => parseBaseline("{")).toThrow("baseline_invalid_json");
    expect(() => parseBaseline({ schemaVersion: 2, items: [] })).toThrow("baseline_schema_mismatch");
    expect(() => parseBaseline({ schemaVersion: 1, items: [{ ...row, extra: 1 }] })).toThrow("baseline_schema_mismatch");
    expect(() => parseBaseline({ schemaVersion: 1, items: [row, row] })).toThrow("baseline_duplicate_key");
  });

  it("Markdownは全件を出し、区切り文字と改行をescapeする", () => {
    const backlog = buildBacklog(fixture());
    const markdown = backlogMarkdown(backlog);
    const tableRows = markdown.split("\n").filter(line => line.startsWith("| information:") || line.startsWith("| external:"));
    expect(tableRows).toHaveLength(backlog.items.length);
    expect(markdown).toContain("skills\\|missing<br>line");
  });
});

describe("現行データでの一覧", () => {
  const input = collectBacklogInput();
  const backlog = buildBacklog(input);

  it("report の情報未収集全件と未解決外部名称全件を単位別に再現し、重複がない", () => {
    const report = reportCoverage(contentRepository());
    const informationKeys = backlog.items.filter(row => row.key.startsWith("information:")).map(row => row.key.slice("information:".length)).sort();
    expect(informationKeys).toEqual(report.information.notCollected.map(entry => entry.id).sort());
    expect(backlog.summary.information.total).toBe(report.information.notCollected.length);
    expect(backlog.summary.externalNames.total).toBe(externalNameReport().unresolvedCount);
    expect(new Set(backlog.items.map(row => row.key)).size).toBe(backlog.items.length);
    // 2026-10-19 時点の現行値（設計 §3.2）1,644 に、第28バッチのフィオニー（キャラ2・装備4）を加えた値。
    expect(backlog.summary.information.total).toBe(1650);
    expect(backlog.summary.externalNames.total).toBe(30);
  });

  it("guide.authoring は name/profile の両 record から game を解決し、帰属不明も行を落とさない", () => {
    const guideRows = backlog.items.filter(row => row.category.startsWith("guide.equipment."));
    expect(guideRows.every(row => row.game !== null)).toBe(true);
    expect(backlog.summary.attributionNulls.game).toBe(0);
    expect(backlog.summary.attributionNulls.identityKey).toBe(guideRows.filter(row => row.identityKey === null).length);
    const profileIds = new Set(input.guides.filter(guide => guide.ownerModule.endsWith("_profiles.ts")).flatMap(guide => guide.recommendationIds));
    expect(guideRows.some(row => [...profileIds].some(id => row.key.startsWith(`information:${id}.`)))).toBe(true);
  });

  it("ownerModule は実在するパスだけを指す", () => {
    const root = resolve(__dirname, "../..");
    const modules = new Set(backlog.items.map(row => row.ownerModule).filter((value): value is string => value !== null));
    expect(modules.size).toBeGreaterThan(0);
    for (const module of modules) expect(existsSync(resolve(root, module)), module).toBe(true);
  });

  it("CLI: 正常出力は終了0、不正引数は終了1", () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    let written = "";
    expect(backlogMain(["--format", "json"], text => { written = text; })).toBe(0);
    expect(JSON.parse(written).schemaVersion).toBe(1);
    expect(backlogMain(["--format", "csv"], () => {})).toBe(1);
    expect(backlogMain([], () => {})).toBe(1);
    expect(backlogMain(["--format", "json", "--baseline", resolve(__dirname, "missing-baseline.json")], () => {})).toBe(1);
    vi.restoreAllMocks();
  });
});
