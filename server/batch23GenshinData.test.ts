import { afterEach, describe, expect, it, vi } from "vitest";
import type { TrpcContext } from "./_core/context";

vi.mock("./db", () => ({ recordLookupAnalyticsEvent: vi.fn().mockResolvedValue(undefined) }));

import { appRouter } from "./routers";
import { genshinGuide, normalizeGenshinPayload } from "./gameProviders";
import { constellationProfileFor } from "./characterConstellations";
import { resolveCharacterIdentity } from "./characterIdentity";
import { BATCH23_GENSHIN_CHARACTERS } from "./batch23GenshinData";
import { routeMismatches } from "./auditRules";

const caller = appRouter.createCaller({
  req: { headers: {}, socket: { remoteAddress: "127.23.0.1" } },
  res: { setHeader: vi.fn() }, user: null,
} as unknown as TrpcContext);
const cases = [
  ["10000143", "ヴェスナ", "風", "片手剣", "攻撃力%", "紅血の証", "20%"],
  ["10000140", "ヴォジャニーツァ", "水", "法器", "HP%", "千岩牢固", "0.8%"],
] as const;
const payloadFor = (id: string, rank: number, uid = "800000023") => ({
  uid, playerInfo: { nickname: "Fixture", level: 60 },
  avatarInfoList: [{ avatarId: Number(id), propMap: { "4001": { val: 90 } },
    talentIdList: Array.from({ length: rank }, (_, i) => i + 1),
    fightPropMap: { "20": 0.55, "22": 1.8, "23": 1.1, "28": 80, "2000": 42000, "2001": 1800, "2002": 700 },
    equipList: [],
  }],
});

afterEach(() => vi.unstubAllGlobals());

describe("第23バッチ・原神 Ver.7.1 の図鑑と最終API返却", () => {
  it.each(cases)("%s %s はEnkaメタデータ欠落時も確認済み個別データを返す", async (id, name, element, weapon, main, relic, effectValue) => {
    const payload = payloadFor(id, 3, `823${id.slice(-6)}`);
    const before = structuredClone(payload);
    vi.stubGlobal("fetch", vi.fn(async (input: string | URL | Request) => {
      const url = String(input);
      if (url.endsWith("/characters.json") || url.endsWith("/loc.json")) return new Response("{}", { headers: { "content-type": "application/json" } });
      if (url.includes(`/api/uid/${payload.uid}`)) return new Response(JSON.stringify(payload), { headers: { "content-type": "application/json" } });
      throw Error(`Unexpected fixture request: ${url}`);
    }));
    const result = await caller.build.lookup({ game: "genshin", uid: payload.uid });
    const character = result.characters[0]!;
    const reference = await caller.build.reference({ game: "genshin", name });
    expect(character.identity?.key).toBe(`genshin:${id}`);
    expect(character.name).toBe(name);
    expect([character.element, character.path]).toEqual([element, weapon]);
    expect(character.portrait).toContain(BATCH23_GENSHIN_CHARACTERS[id].sideIcon);
    expect(character.guide).toEqual(reference.guide);
    expect(character.guide.profileId).toBe(`curated:batch23:genshin:${name}`);
    expect(character.guide.relicSet).toContain(relic);
    expect(character.guide.mainStats.slice(0, 2).map((stat) => stat.value)).toEqual([main, main]);
    expect(character.guide.targets).toEqual([]);
    expect(character.comparisons).toEqual([]);
    expect(character.recommendations).toEqual([]);
    expect(character.partyRecommendations).toEqual(reference.partyRecommendations);
    expect(character.constellations?.dataStatus).toBe("curated");
    expect(character.constellations?.effects).toEqual(reference.constellations.effects);
    expect(character.constellations?.effects[0].description.ja).toContain(effectValue);
    expect(character.constellations?.acquiredRank).toBe(3);
    expect(character.constellations?.activeTargetChanges).toEqual([]);
    expect(payload).toEqual(before);
    const withoutConstellations = normalizeGenshinPayload(payloadFor(id, 0), { characters: {}, loc: {} }).characters[0]!;
    expect(character.allStats).toEqual(withoutConstellations.allStats);
    const history = await caller.build.guideHistory();
    const entry = history.characters.find((item) => item.game === "genshin" && item.name === name)!;
    expect(entry.profileId).toBe(character.guide.profileId);
    expect(entry.updatedAt).toBe("2026-10-01");
    expect(entry.events.some((event) => event.title.startsWith("第23バッチ"))).toBe(true);
    expect(reference.batch).toBe(23);
    for (const option of character.partyRecommendations!.options) {
      expect(option.members).toHaveLength(4);
      expect(option.members.some((member) => member.name.ja === name)).toBe(true);
      expect(option.targetChanges).toEqual([]);
      expect(option.gameVersion).toBe("7.1");
      expect(option.updatedAt).toBe("2026-10-01");
      expect(option.members.every((member) => member.role.en && member.role["zh-CN"])).toBe(true);
    }
  });

  it.each(cases)("%s %s の同名別ID・別ゲーム・派生・未解決IDへ誤適用しない", (id, name) => {
    const wrong = resolveCharacterIdentity("genshin", "19999999", name);
    const character = normalizeGenshinPayload(payloadFor("19999999", 6), {
      characters: { "19999999": { NameTextMapHash: 1 } }, loc: { ja: { "1": name } },
    }).characters[0]!;
    expect(character.guide.profileId).toBeUndefined();
    expect(character.guide.targets).toEqual([]);
    expect(character.partyRecommendations?.options).toEqual([]);
    expect(constellationProfileFor(wrong, 6).dataStatus).toBe("preparing");
    expect(constellationProfileFor(resolveCharacterIdentity("hsr", id, name), 6).dataStatus).toBe("preparing");
    expect(genshinGuide(name, { ...resolveCharacterIdentity("genshin", id), variantOf: "別実装" }).profileId).toBeUndefined();
    expect(genshinGuide(name, { ...resolveCharacterIdentity("genshin", id), resolved: false }).profileId).toBeUndefined();
    expect(constellationProfileFor({ ...resolveCharacterIdentity("genshin", id), resolved: false }, 6).dataStatus).toBe("preparing");
    expect(constellationProfileFor({ ...resolveCharacterIdentity("genshin", id), variantOf: "別実装" }, 6).dataStatus).toBe("preparing");
  });

  it.each(cases)("%s %s の全6段とランク境界を維持する", (id) => {
    for (const rank of [null, -1, 0, 3, 6, 99]) {
      const profile = constellationProfileFor(resolveCharacterIdentity("genshin", id), rank);
      expect(profile.effects.map((effect) => effect.level)).toEqual([1, 2, 3, 4, 5, 6]);
      expect(profile.acquiredRank).toBe(Math.max(0, Math.min(6, rank ?? 0)));
      expect(profile.activeTargetChanges).toEqual([]);
      for (const effect of profile.effects) {
        expect(new Set(Object.values(effect.name)).size).toBe(3);
        expect(Object.values(effect.description).every((text) => text.length > 10 && !text.includes("**"))).toBe(true);
      }
    }
  });

  it("図鑑と正規化の経路不一致がない", () => expect(routeMismatches()).toEqual([]));
});
