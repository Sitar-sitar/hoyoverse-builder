import { afterEach, describe, expect, it, vi } from "vitest";
import type { TrpcContext } from "./_core/context";
vi.mock("./db", () => ({
  recordLookupAnalyticsEvent: vi.fn().mockResolvedValue(undefined),
}));
import { appRouter } from "./routers";
import { BATCH30_CHARACTER_METADATA } from "../content/characterBatch30";
import {
  normalizeGenshinPayload,
  genshinGuide,
} from "./gameProviders";
import { constellationProfileFor } from "./characterConstellations";
import { resolveCharacterIdentity } from "./characterIdentity";
import { teamStoreIssues, uncoveredLinks } from "./parties/linkStatus";
import { characterUpdateLedger } from "./characterUpdateLedger";

const caller = appRouter.createCaller({
  req: { headers: {}, socket: { remoteAddress: "127.30.0.1" } },
  res: { setHeader: vi.fn() },
  user: null,
} as unknown as TrpcContext);
const giPayload = (id: string, rank: number, uid = "829000001") => ({
  uid,
  playerInfo: { nickname: "Fixture", level: 60 },
  avatarInfoList: [
    {
      avatarId: Number(id),
      propMap: { "4001": { val: 90 } },
      talentIdList: Array.from({ length: rank }, (_, i) => i + 1),
      fightPropMap: {
        "20": 0.55,
        "22": 1.8,
        "23": 1.6,
        "28": 80,
        "2000": 18000,
        "2001": 1900,
        "2002": 2100,
      },
      equipList: [],
    },
  ],
});
afterEach(() => vi.unstubAllGlobals());

describe("第30バッチ・2名の図鑑と最終API返却", () => {
  it.each(Object.entries(BATCH30_CHARACTER_METADATA))(
    "%s は確認済みID・個別ガイド・凸・履歴を返す",
    async (id, entry) => {
      const payload = giPayload(id, 3, `830${id.slice(-6)}`);
      const before = structuredClone(payload);
      vi.stubGlobal(
        "fetch",
        vi.fn(async (input: string | URL | Request) => {
          const url = String(input);
          if (url.endsWith(".json"))
            return new Response("{}", {
              headers: { "content-type": "application/json" },
            });
          if (url.includes(`/api/uid/${payload.uid}`))
            return new Response(JSON.stringify(payload), {
              headers: { "content-type": "application/json" },
            });
          throw Error(`Unexpected fixture request: ${url}`);
        })
      );
      const character = (
        await caller.build.lookup({ game: "genshin", uid: payload.uid })
      ).characters[0]!;
      const reference = await caller.build.reference({
        game: "genshin",
        name: entry.name,
      });
      expect(character.identity?.key).toBe(`genshin:${id}`);
      expect(character.name).toBe(entry.name);
      expect(character.portrait).toContain(entry.sideIcon);
      expect(character.element).not.toBe("");
      expect(character.guide).toEqual(reference.guide);
      expect(character.guide.profileId).toBe(
        `curated:batch30:genshin:${entry.name}`
      );
      expect(character.guide.targets).toEqual([]);
      expect(character.comparisons).toEqual([]);
      expect(character.recommendations).toEqual([]);
      expect(character.partyRecommendations).toEqual(
        reference.partyRecommendations
      );
      expect(character.partyRecommendations!.options.length).toBeGreaterThan(0);
      for (const team of character.partyRecommendations!.options) {
        expect(team.members).toHaveLength(4);
        expect(team.members.some(m => m.name.ja === entry.name)).toBe(true);
        expect(team.targetChanges).toEqual([]);
      }
      expect(character.constellations?.dataStatus).toBe("curated");
      expect(character.constellations?.effects).toEqual(
        reference.constellations.effects
      );
      expect(character.constellations?.effects.map(e => e.level)).toEqual([
        1, 2, 3, 4, 5, 6,
      ]);
      expect(character.constellations?.activeTargetChanges).toEqual([]);
      expect(character.allStats).toEqual(
        normalizeGenshinPayload(giPayload(id, 0), { characters: {}, loc: {} })
          .characters[0]!.allStats
      );
      expect(payload).toEqual(before);
      const history = (await caller.build.guideHistory()).characters.find(
        c => c.game === "genshin" && c.name === entry.name
      )!;
      expect(history.profileId).toBe(character.guide.profileId);
      expect(history.events.some(e => e.title.startsWith("第30バッチ"))).toBe(
        true
      );
      expect(reference.batch).toBe(30);
    }
  );
  it.each(Object.entries(BATCH30_CHARACTER_METADATA))(
    "%s の同名別ID・別ゲーム・派生には適用しない",
    (id, entry) => {
      const wrong = resolveCharacterIdentity("genshin", "19999999", entry.name);
      expect(genshinGuide(entry.name, wrong).profileId).toBeUndefined();
      expect(
        genshinGuide(entry.name, {
          ...resolveCharacterIdentity("genshin", id),
          variantOf: entry.name,
        }).profileId
      ).toBeUndefined();
      expect(
        genshinGuide(entry.name, {
          ...resolveCharacterIdentity("genshin", id),
          resolved: false,
        }).profileId
      ).toBeUndefined();
      expect(
        genshinGuide(
          entry.name,
          resolveCharacterIdentity("zzz", id, entry.name)
        ).profileId
      ).toBeUndefined();
      const character = normalizeGenshinPayload(giPayload("19999999", 6), {
        characters: { "19999999": { NameTextMapHash: 1 } },
        loc: { ja: { "1": entry.name } },
      }).characters[0]!;
      expect(character.guide.targets).toEqual([]);
      expect(character.partyRecommendations?.options).toEqual([]);
      expect(character.constellations?.dataStatus).toBe("preparing");
      expect(
        constellationProfileFor(
          { ...resolveCharacterIdentity("genshin", id), variantOf: entry.name },
          6
        ).dataStatus
      ).toBe("preparing");
    }
  );
  it("ミティヤ・バレリーの雷元素・武器種と凸の数値・条件を省略しない", () => {
    const mitya = constellationProfileFor(resolveCharacterIdentity("genshin", "10000136"), 6);
    const valeriy = constellationProfileFor(resolveCharacterIdentity("genshin", "10000137"), 6);
    expect(mitya.effects[0]!.name.ja).toBe("欠落の痕跡を追う観察者");
    expect(mitya.effects[0]!.description.ja).toContain("会心ダメージ+40%");
    expect(mitya.effects[0]!.description.ja).toContain("8秒ごとに1回のみ");
    expect(mitya.effects[1]!.description.ja).toContain("元素熟知+234");
    expect(valeriy.effects[5]!.name.ja).toBe("敵陣をも貫く威厳");
    expect(valeriy.effects[0]!.description.ja).toContain("最大15まで");
    expect(valeriy.effects[3]!.description.ja).toContain("最大104");
    for (const profile of [mitya, valeriy]) {
      for (const effect of profile.effects) expect(effect.description.ja).not.toMatch(/\*\*|<color|\{LINK/);
    }
    expect(BATCH30_CHARACTER_METADATA["10000136"]).toMatchObject({ element: "Electric", weaponType: "WEAPON_CATALYST" });
    expect(BATCH30_CHARACTER_METADATA["10000137"]).toMatchObject({ element: "Electric", weaponType: "WEAPON_SWORD_ONE_HAND" });
  });
  it("270名の台帳と編成採否に漏れがない", () => {
    const ledger = characterUpdateLedger();
    expect(ledger).toMatchObject({ total: 272, reviewed: 272, pending: 0, nextBatch: { id: 32, names: [] } });
    expect(ledger.byGame.genshin).toEqual({ total: 123, reviewed: 123, pending: 0 });
    expect(teamStoreIssues()).toEqual([]);
    expect(uncoveredLinks()).toEqual([]);
  });
});
