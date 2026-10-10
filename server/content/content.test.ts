import { describe, expect, it } from "vitest";
import type { ContentCatalog, SourceText, TranslationRecord } from "../../shared/content/types";
import { indexCatalog, japaneseText, textRef } from "./catalog";
import { exportCandidates, readiness, reportCoverage, sourceIssues, translationState } from "./coverage";
import { sourceHash } from "./hash";
import { parseCatalog } from "./schema";
import { baselineDigests, baselineMatches, collectBaseline } from "../../scripts/content/baseline";
import { readFileSync } from "node:fs";

const source = (overrides: Partial<SourceText> = {}): SourceText => ({
  id: "guide.hsr.1310.core.headline", ja: "速度{value}を目標にする。", context: "HSR/公開ビルドの方針",
  audience: "public", placeholders: { value: "number" }, dependencies: [], protectedTokens: [], ...overrides,
});
const approved = (original: SourceText, text = "Target {value} SPD."): TranslationRecord => ({
  text, sourceHash: sourceHash(original), review: "approved", origin: "reviewed", reviewedAt: "2026-10-10T00:00:00Z",
});
const catalog = (original = source()): ContentCatalog => ({
  schemaVersion: 1, sources: [original], translations: { en: {}, "zh-CN": {} }, aliases: [],
  sections: [{ id: "guide.hsr.1310", audience: "public", visibility: "active", section: { status: "registered", data: [textRef(original.id)], evidence: "existing guide" } }],
});

describe("source revision and translation state", () => {
  it("detects Japanese/context/variable/dependency changes and preserves significant whitespace", () => {
    const original = source();
    for (const changed of [source({ ja: "速度{value}以上を目標にする。" }), source({ context: "HSR/戦闘中" }),
      source({ placeholders: { value: "string" } }), source({ dependencies: [{ id: "term.hsr.speed", contractVersion: "2" }] }),
      source({ ja: original.ja + " " })]) expect(sourceHash(changed)).not.toBe(sourceHash(original));
    expect(sourceHash(source({ ja: "速度\r\n{value}" }))).toBe(sourceHash(source({ ja: "速度\n{value}" })));
  });
  it("is independent of insertion order and file paths", () => {
    const a = source({ placeholders: { name: "string", count: "number" }, dependencies: [{ id: "term.hsr.a", contractVersion: "1" }, { id: "term.hsr.b", contractVersion: "2" }] });
    const b = { ...a, placeholders: { count: "number" as const, name: "string" as const }, dependencies: [...a.dependencies].reverse() };
    expect(sourceHash(a)).toBe(sourceHash(b));
  });
  it("never stamps legacy translations as current or approved", () => {
    const original = source();
    const legacy: TranslationRecord = { text: "Target {value} SPD.", sourceHash: null, review: "pending", origin: "legacy" };
    expect(translationState(original, legacy).state).toBe("stale");
    expect(legacy.sourceHash).toBeNull();
    expect(translationState(original, undefined).state).toBe("missing");
    expect(translationState(original, { ...legacy, text: " " }).state).toBe("missing");
    expect(translationState(original, { ...approved(original), review: "pending" }).state).toBe("pending");
    expect(translationState(original, approved(original)).state).toBe("approved");
    expect(translationState(source({ context: "changed" }), approved(original)).state).toBe("stale");
  });
  it("rejects dropped/repeated placeholders, protected numbers and unsupported approvals", () => {
    const original = source({ ja: "速度{value}、持続5秒。", protectedTokens: ["5"] });
    expect(translationState(original, approved(original, "Target SPD for 5 seconds.")).state).toBe("invalid");
    expect(translationState(original, approved(original, "{value} {value} SPD for 5 seconds.")).state).toBe("invalid");
    expect(translationState(original, approved(original, "{value} SPD for 6 seconds.")).state).toBe("invalid");
    expect(translationState(original, { ...approved(original, "{value} SPD for 5 seconds."), reviewedAt: undefined }).state).toBe("invalid");
    expect(sourceIssues(source({ placeholders: {} })).map(issue => issue.code)).toContain("source-placeholders");
  });
  it("requires an explicit reason for identical terms", () => {
    const hp = source({ id: "term.hsr.hp", ja: "HP", placeholders: {} });
    expect(translationState(hp, approved(hp, "HP")).state).toBe("invalid");
    const permitted = { ...hp, sameTextAllowed: { reason: "Common stat abbreviation" } };
    expect(translationState(permitted, approved(permitted, "HP")).state).toBe("approved");
  });
});

describe("strict structure and coverage", () => {
  it("rejects unknown fields and falsely registered empty information", () => {
    expect(() => parseCatalog({ ...catalog(), extra: true })).toThrow();
    const input = catalog();
    input.sections[0]!.section = { status: "registered", data: [], evidence: "none" };
    expect(() => parseCatalog(input)).toThrow();
    expect(() => parseCatalog({ ...catalog(), translations: { en: {}, "zh-CN": {}, "zh-TW": {} } })).toThrow();
  });
  it("detects duplicates, unknown references and cyclic aliases", () => {
    const input = catalog();
    input.sources.push(source());
    input.aliases = [{ from: "ui.a", to: "ui.b" }, { from: "ui.b", to: "ui.a" }];
    input.sections.push({ id: "missing", audience: "public", visibility: "active", section: { status: "registered", data: [textRef("ui.missing")], evidence: "fixture" } });
    expect(indexCatalog(input).issues.map(issue => issue.code)).toEqual(expect.arrayContaining(["duplicate-source", "invalid-alias", "unknown-reference"]));
  });
  it("does not omit a second paragraph or a related-team section", () => {
    const input = catalog();
    const extra = source({ id: "team.shared.synergy.second", ja: "追加説明", placeholders: {} });
    input.sources.push(extra);
    input.sections.push({ id: "related-team", audience: "public", visibility: "active", section: { status: "registered", data: [textRef(extra.id)], evidence: "shared team" } });
    input.translations.en[input.sources[0]!.id] = approved(input.sources[0]!);
    const report = readiness(indexCatalog(input), "en", "public");
    expect(report.ready).toBe(false);
    expect(report.incomplete.map(entry => entry.id)).toContain(extra.id);
  });
  it("reports planned skills as uncollected and gates them when activated", () => {
    const input = catalog();
    input.translations.en[source().id] = approved(source());
    input.sections.push({ id: "skills.hsr.1310", audience: "public", visibility: "planned", section: { status: "notCollected", reason: "Not researched", requiredKinds: ["skill", "ultimate"] } });
    expect(reportCoverage(indexCatalog(input)).information.notCollected).toHaveLength(1);
    expect(readiness(indexCatalog(input), "en", "public").ready).toBe(true);
    input.sections[1]!.visibility = "active";
    expect(readiness(indexCatalog(input), "en", "public").missingSections).toContain("skills.hsr.1310");
  });
  it("detects a removed section rather than shrinking the coverage denominator", () => {
    const expected = [{ id: "skills.hsr.1310", audience: "public" as const, visibility: "planned" as const }];
    expect(indexCatalog(catalog(), expected).issues.map(issue => issue.code)).toContain("missing-section");
    const input = catalog();
    input.sections.push({ ...expected[0]!, visibility: "active", section: { status: "notCollected", reason: "unknown", requiredKinds: ["skill"] } });
    expect(indexCatalog(input, expected).issues.map(issue => issue.code)).toContain("section-policy-mismatch");
  });
  it("rejects unassigned content and admin text in public sections", () => {
    const input = catalog();
    input.sources.push(source({ id: "ui.admin.secret", audience: "admin" }));
    expect(readiness(indexCatalog(input), "en", "admin").unassigned).toEqual(["ui.admin.secret"]);
    input.sections[0]!.section = { status: "registered", data: [textRef("ui.admin.secret")], evidence: "wrong audience" };
    expect(indexCatalog(input).issues.map(issue => issue.code)).toContain("audience-mismatch");
  });
  it("never reports an empty catalog ready and rejects a cross-game reference", () => {
    const empty = { ...catalog(), sources: [], sections: [] };
    expect(readiness(indexCatalog(empty), "en", "public").ready).toBe(false);
    const input = catalog();
    input.sections[0]!.id = "guide.genshin.1";
    expect(indexCatalog(input).issues.map(issue => issue.code)).toContain("game-mismatch");
  });
  it("exports only incomplete items deterministically with shared impact locations", () => {
    const input = catalog();
    input.sections.push({ ...input.sections[0]!, id: "second-view" });
    const index = indexCatalog(input);
    expect(exportCandidates(index, "en")[0]!.usedBy).toEqual(["guide.hsr.1310", "second-view"]);
    expect(exportCandidates(index, "en")).toEqual(exportCandidates(index, "en"));
  });
  it("formats Japanese without silently dropping or coercing typed variables", () => {
    const index = indexCatalog(catalog());
    expect(japaneseText(index, textRef(source().id), { value: 150 })).toBe("速度150を目標にする。");
    expect(() => japaneseText(index, textRef(source().id), {})).toThrow();
    expect(() => japaneseText(index, textRef(source().id), { value: "150" })).toThrow();
    expect(() => japaneseText(index, textRef(source().id), { value: NaN })).toThrow();
    expect(() => japaneseText(indexCatalog(catalog(source({ placeholders: {} }))), textRef(source().id), {})).toThrow("Invalid Japanese template");
  });
});

describe("Japanese API baseline", () => {
  it("accepts Git CRLF conversion but not a changed digest", () => {
    expect(baselineMatches('{"digest":"a"}\r\n', '{"digest":"a"}\n')).toBe(true);
    expect(baselineMatches('{"digest":"b"}\r\n', '{"digest":"a"}\n')).toBe(false);
  });
  it("matches every catalog/reference/UID guide/constellation/team appearance and history digest", () => {
    const baseline = JSON.parse(readFileSync("content/coverage/baseline.v1.json", "utf8"));
    expect(baselineDigests()).toEqual(baseline);
    const changed = collectBaseline();
    changed.characters[0]!.reference.guide = { ...changed.characters[0]!.reference.guide, headline: "different" };
    expect(baselineDigests(changed)).not.toEqual(baseline);
  });
});
