import { describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({ lookup: vi.fn(), analytics: vi.fn().mockResolvedValue(undefined) }));
vi.mock("../gameProviders", async (original) => ({ ...(await original<typeof import("../gameProviders")>()), lookupGameBuild: mocks.lookup }));
vi.mock("../db", () => ({ recordLookupAnalyticsEvent: mocks.analytics }));

import { normalizeMihomoPayload } from "../buildAdvisor";
import { catalogSourceIdFor } from "../characterConstellations";
import { appRouter } from "../routers";
import { BATCH24_TEAMS } from "./batch24Teams";
import { CHARACTER_PARTIES } from "./characterParties";
import { INITIAL_PARTY_REFS } from "./initialRefs";
import { PARTY_LINK_RECORDS } from "./linkRecords";
import { rosterKey, teamStoreIssues, uncoveredLinks } from "./linkStatus";
import { partyRecommendationsFor } from "./resolve";
import { TEAM_STORE } from "./teamStore";

const owners = ["パール", "アベンチュリン・波と戯れる夏", "緋英", "火花", "爻光", "不死途", "千冶・刃", "ヒアンシー", "ロビン・夏空の歌"];
let nextIp = 1;
const caller = () => appRouter.createCaller({
  req: { headers: {}, socket: { remoteAddress: `203.0.113.${nextIp++}` } },
  res: { getHeader: () => undefined, setHeader: () => {} }, user: null,
} as never);

describe("第24バッチ共有化の最終API応答", () => {
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
    const uid = await api.build.lookup({ game: "hsr", uid: `80000000${owners.indexOf(name)}` });
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
    expect(entry.events.some((event) => event.title.includes("第24バッチ"))).toBe(true);
    expect(entry.events[0]!.changes).toContain("ビルド・装備・凸・公開現在値は変更しない");
  });

  it("緋英の重複を1マスタへ統合し、旧3案の除外を初期参照から追跡できる", () => {
    const p2 = BATCH24_TEAMS[1]!;
    expect(TEAM_STORE.teams.filter((team) => rosterKey("hsr", team.members) === rosterKey("hsr", p2.members))).toHaveLength(1);
    expect(partyRecommendationsFor("hsr", "緋英").options.map((option) => option.id)).toEqual([`${p2.id}@緋英`]);
    expect(INITIAL_PARTY_REFS["hsr:緋英"]).toEqual(["batch15-hsr-緋英-1", "batch15-hsr-緋英-2", "batch15-hsr-緋英-3"]);
    const record = PARTY_LINK_RECORDS.find((entry) => entry.batch === 24 && entry.owner === "緋英")!;
    expect(record.removed).toEqual(INITIAL_PARTY_REFS["hsr:緋英"]);
    expect(record.added).toEqual([p2.id]);
    expect(teamStoreIssues()).toEqual([]);
  });

  it("採用しない参加者にも再確認できる見送りを残し、通常アベンチュリン・銀狼へ混入しない", () => {
    const a2 = BATCH24_TEAMS[3]!;
    for (const name of ["爻光", "ヒアンシー"]) {
      const entry = CHARACTER_PARTIES[`hsr:${name}`]!;
      expect(entry.refs?.some((ref) => ref.team === a2.id)).toBe(false);
      expect(entry.skipped).toContainEqual(expect.objectContaining({ team: a2.id, checkedAt: "2026-10-03" }));
    }
    expect(uncoveredLinks()).toEqual([]);
    for (const name of ["アベンチュリン", "銀狼"]) {
      expect(partyRecommendationsFor("hsr", name).options.some((option) => option.id.includes("-b24-"))).toBe(false);
    }
  });
});
