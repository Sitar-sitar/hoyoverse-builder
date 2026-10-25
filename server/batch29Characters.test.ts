import { afterEach, describe, expect, it, vi } from "vitest";
import type { TrpcContext } from "./_core/context";
vi.mock("./db", () => ({
  recordLookupAnalyticsEvent: vi.fn().mockResolvedValue(undefined),
}));
import { appRouter } from "./routers";
import {
  BATCH29_CHARACTER_METADATA,
  BATCH29_ZZZ_CHARACTER,
} from "../content/characterBatch29";
import {
  normalizeGenshinPayload,
  normalizeZzzPayload,
  genshinGuide,
  zzzGuide,
} from "./gameProviders";
import { constellationProfileFor } from "./characterConstellations";
import { resolveCharacterIdentity } from "./characterIdentity";
import { teamStoreIssues, uncoveredLinks } from "./parties/linkStatus";
import { characterUpdateLedger } from "./characterUpdateLedger";

const caller = appRouter.createCaller({
  req: { headers: {}, socket: { remoteAddress: "127.29.0.1" } },
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
const zzzPayload = (id: string, rank: number) => ({
  uid: "129000001",
  PlayerInfo: {
    SocialDetail: { ProfileDetail: { NickName: "Fixture" } },
    ShowcaseDetail: {
      AvatarList: [
        { Id: Number(id), Level: 60, TalentLevel: rank, EquippedList: [] },
      ],
    },
  },
});
const emptyZzz = {
  avatars: {},
  locs: {},
  weapons: {},
  equipments: {},
  property: {},
};
afterEach(() => vi.unstubAllGlobals());

describe("第29バッチ・11名の図鑑と最終API返却", () => {
  it.each(Object.entries(BATCH29_CHARACTER_METADATA))(
    "%s は確認済みID・個別ガイド・凸・履歴を返す",
    async (id, entry) => {
      const payload = giPayload(id, 3, `829${id.slice(-6)}`);
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
        `curated:batch29:genshin:${entry.name}`
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
      expect(history.events.some(e => e.title.startsWith("第29バッチ"))).toBe(
        true
      );
      expect(reference.batch).toBe(29);
    }
  );
  it.each(Object.entries(BATCH29_CHARACTER_METADATA))(
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
  it("ロクシーの風・撃破を復元し、戦闘中の会心率100%を公開値に加算しない", async () => {
    const payload = zzzPayload("1621", 2);
    const before = structuredClone(payload);
    vi.stubGlobal(
      "fetch",
      vi.fn(async (input: string | URL | Request) => {
        const url = String(input);
        if (url.endsWith(".json"))
          return new Response("{}", {
            headers: { "content-type": "application/json" },
          });
        if (url.includes("/api/zzz/uid/129000001/"))
          return new Response(JSON.stringify(payload), {
            headers: { "content-type": "application/json" },
          });
        throw Error(`Unexpected fixture request: ${url}`);
      })
    );
    const character = (
      await caller.build.lookup({ game: "zzz", uid: "129000001" })
    ).characters[0]!;
    const reference = await caller.build.reference({
      game: "zzz",
      name: BATCH29_ZZZ_CHARACTER.name,
    });
    expect([character.name, character.element, character.path]).toEqual([
      "ロクシー",
      "風",
      "撃破",
    ]);
    expect(character.identity?.key).toBe("zzz:1621");
    expect(character.guide).toEqual(reference.guide);
    expect(character.guide.profileId).toBe("curated:batch29:zzz:ロクシー");
    expect(character.guide.targets).toEqual([]);
    expect(character.guide.targetContext).toContain("戦闘時");
    expect(character.comparisons).toEqual([]);
    expect(character.constellations?.effects).toHaveLength(6);
    expect(character.constellations?.effects[1].description.ja).toContain(
      "0.6秒"
    );
    expect(character.partyRecommendations).toEqual(
      reference.partyRecommendations
    );
    expect(character.constellations?.activeTargetChanges).toEqual([]);
    expect(character.allStats).toEqual(
      normalizeZzzPayload(zzzPayload("1621", 0), emptyZzz).characters[0]!
        .allStats
    );
    expect(payload).toEqual(before);
    const wrong = resolveCharacterIdentity("zzz", "1999", "ロクシー");
    expect(zzzGuide("ロクシー", "Stun", wrong).profileId).toBeUndefined();
    const alias = normalizeZzzPayload(zzzPayload("1999", 6), {
      ...emptyZzz,
      avatars: {
        "1999": {
          Name: "alias",
          ProfessionType: "Stun",
          ElementTypes: ["Wind"],
        },
      },
      locs: { ja: { alias: "ロクシー" } },
    }).characters[0]!;
    expect(alias.guide.profileId).toBeUndefined();
    expect(alias.partyRecommendations?.options).toEqual([]);
    expect(alias.constellations?.dataStatus).toBe("preparing");
  });
  it("268名の台帳と編成採否に漏れがない", () => {
    const ledger = characterUpdateLedger();
    expect(ledger).toMatchObject({
      total: 268,
      reviewed: 268,
      pending: 0,
      nextBatch: { id: 30, names: [] },
    });
    expect(ledger.byGame).toEqual({
      hsr: { total: 86, reviewed: 86, pending: 0 },
      genshin: { total: 121, reviewed: 121, pending: 0 },
      zzz: { total: 61, reviewed: 61, pending: 0 },
    });
    expect(teamStoreIssues()).toEqual([]);
    expect(uncoveredLinks()).toEqual([]);
  });
});
