import { describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({ lookup: vi.fn(), analytics: vi.fn().mockResolvedValue(undefined) }));
vi.mock("../gameProviders", async (original) => ({ ...(await original<typeof import("../gameProviders")>()), lookupGameBuild: mocks.lookup }));
vi.mock("../db", () => ({ recordLookupAnalyticsEvent: mocks.analytics }));

import { normalizeMihomoPayload } from "../buildAdvisor";
import { catalogSourceIdFor } from "../characterConstellations";
import { appRouter } from "../routers";
import { BATCH25_TEAMS } from "./batch25Teams";
import { CHARACTER_PARTIES } from "./characterParties";
import { INITIAL_PARTY_REFS } from "./initialRefs";
import { PARTY_LINK_RECORDS } from "./linkRecords";
import { rosterKey, teamStoreIssues, uncoveredLinks } from "./linkStatus";
import { partyRecommendationsFor } from "./resolve";
import { TEAM_STORE } from "./teamStore";

const owners = ["千冶・刃", "姫子・旅立ち", "不死途", "トリビー", "黄泉", "サフェル", "ヴェルト", "フォフォ", "ロビン・夏空の歌", "サンデー", "丹恒・騰荒", "ルアン・メェイ"];
let nextIp = 1;
const caller = () => appRouter.createCaller({
  req: { headers: {}, socket: { remoteAddress: `203.0.114.${nextIp++}` } },
  res: { getHeader: () => undefined, setHeader: () => {} }, user: null,
} as never);

describe("第25バッチ共有化の最終API応答", () => {
  it.each(owners)("%sのUID経路・図鑑・履歴が一致し、公開現在値を変更しない", async (name) => {
    const values = [
      { field: "hp", name: "HP", value: 3000, percent: false },
      { field: "atk", name: "攻撃力", value: 2500, percent: false },
      { field: "def", name: "防御力", value: 3600, percent: false },
      { field: "spd", name: "速度", value: 174, percent: false },
      { field: "crit_rate", name: "会心率", value: 0.6, percent: true },
      { field: "crit_dmg", name: "会心ダメージ", value: 2, percent: true },
    ];
    const source = normalizeMihomoPayload({ player: { nickname: "fixture", level: 70 }, characters: [{
      id: catalogSourceIdFor("hsr", name), name, level: 80, rank: 0,
      path: { name: "愉悦" }, element: { name: "氷" }, attributes: values, properties: [], statistics: values,
    }] });
    const result = { ...source, cached: false, fetchedAt: "2026-10-03T03:00:00.000Z", cacheExpiresAt: "2026-10-03T03:01:00.000Z" };
    const originalStats = structuredClone(result.characters[0]!.allStats);
    mocks.lookup.mockResolvedValue(result);
    const api = caller();
    const uid = await api.build.lookup({ game: "hsr", uid: String(800100000 + owners.indexOf(name)) });
    const reference = await api.build.reference({ game: "hsr", name });
    const character = uid.characters[0]!;
    expect(character.identity.sourceId).toBe(catalogSourceIdFor("hsr", name));
    expect(character.partyRecommendations).toEqual(reference.partyRecommendations);
    expect(character.guide).toEqual(reference.guide);
    expect(character.allStats).toEqual(originalStats);
    for (const comparison of character.comparisons) {
      const stat = originalStats.find((entry) => entry.key === comparison.key);
      if (stat) expect(comparison.current).toBeCloseTo(stat.value, 8);
    }
    expect(character.partyRecommendations.options.every((option) => option.targetChanges.length === 0)).toBe(true);
    const history = await api.build.guideHistory();
    const entry = history.characters.find((item) => item.game === "hsr" && item.name === name)!;
    expect(entry.updatedAt).toBe(name === "ロビン・夏空の歌" ? "2026-10-09" : "2026-10-03");
    expect(entry.events.some((event) => event.title.includes("第25バッチ"))).toBe(true);
    expect(entry.events[0]!.changes).toContain("ビルド・装備・凸・公開現在値は変更しない");
  });

  it("千冶・刃と不死途の同構成を1マスタへ統合し、初期参照と過去記録を維持する", () => {
    const team = BATCH25_TEAMS[0]!;
    expect(TEAM_STORE.teams.filter((entry) => rosterKey("hsr", entry.members) === rosterKey("hsr", team.members))).toHaveLength(1);
    expect(INITIAL_PARTY_REFS["hsr:千冶・刃"]).toEqual(["curated-hsr-千冶・刃-1", "curated-hsr-千冶・刃-2", "curated-hsr-千冶・刃-3"]);
    expect(PARTY_LINK_RECORDS.find((r) => r.batch === 24 && r.owner === "千冶・刃")!.removed).toEqual(["curated-hsr-千冶・刃-3"]);
    expect(PARTY_LINK_RECORDS.find((r) => r.batch === 25 && r.owner === "千冶・刃")!.removed).toEqual(["curated-hsr-千冶・刃-1", "curated-hsr-千冶・刃-2"]);
    expect(teamStoreIssues()).toEqual([]);
    expect(uncoveredLinks()).toEqual([]);
  });

  it("出典の異なる回復・支援枠を混同せず、数値補正を追加しない", () => {
    expect(BATCH25_TEAMS[3]!.members.map((m) => m.name.ja)).toEqual(["姫子・旅立ち", "ロビン・夏空の歌", "ヴェルト", "フォフォ"]);
    expect(BATCH25_TEAMS[3]!.sourceUrl).toBe("https://gamewith.jp/houkaistarrail/article/show/561096");
    expect(BATCH25_TEAMS[3]!.communitySources[0]!.status).toBe("watching");
    expect(BATCH25_TEAMS[4]!.members.map((m) => m.name.ja)).toEqual(["姫子・旅立ち", "サンデー", "ロビン・夏空の歌", "丹恒・騰荒"]);
    for (const team of BATCH25_TEAMS) for (const lang of ["ja", "en", "zh-CN"] as const) {
      expect(team.synergy[0]![lang]).toBeTruthy();
      expect(team.members.every((m) => Boolean(m.role[lang]))).toBe(true);
      expect(team.members.every((m) => !m.targetChanges?.length)).toBe(true);
    }
  });

  it("3枠から外す案に根拠を残し、通常形態と別ゲームへ混入しない", () => {
    for (const name of ["姫子・旅立ち", "ヒアンシー", "フォフォ", "ロビン・夏空の歌"]) {
      const entry = CHARACTER_PARTIES[`hsr:${name}`]!;
      expect(entry.refs!.length).toBeLessThanOrEqual(3);
      expect(entry.skipped!.some((skip) => skip.team.includes("-b25-") && skip.checkedAt === "2026-10-03" && skip.sourceUrl.startsWith("https://"))).toBe(true);
    }
    for (const name of ["刃", "姫子", "ロビン", "丹恒", "アベンチュリン"]) {
      expect(partyRecommendationsFor("hsr", name).options.some((option) => option.id.includes("-b25-"))).toBe(false);
    }
    expect(partyRecommendationsFor("genshin", "雷電将軍").options.some((option) => option.id.includes("-b25-"))).toBe(false);
  });
});
