import { afterEach, describe, expect, it, vi } from "vitest";
import type { TrpcContext } from "./_core/context";

vi.mock("./db", () => ({ recordLookupAnalyticsEvent: vi.fn().mockResolvedValue(undefined) }));

import { appRouter } from "./routers";
import { normalizeGenshinPayload } from "./gameProviders";
import { catalogSourceIdFor } from "./characterConstellations";
import { partyRecommendationsFor } from "./partyRecommendations";
import { CHARACTER_GUIDE_CATALOG } from "./characterGuideCatalog";

const owners = ["ファルザン", "ディオナ", "スカーク", "フリーナ", "エスコフィエ"] as const;
// 既存キャラの取得元IDは実際の図鑑解決表から取得。新キャラ側のfixtureとは独立したworkerで検査する。
const catalog = {
  characters: Object.fromEntries(owners.map((name, index) => [catalogSourceIdFor("genshin", name)!, { NameTextMapHash: index + 1 }])),
  loc: { ja: Object.fromEntries(owners.map((name, index) => [index + 1, name])) },
};
const payloadFor = (id: string, rank: number) => ({
  uid: `834${id.slice(-6)}`, playerInfo: { nickname: "Fixture", level: 60 },
  avatarInfoList: [{ avatarId: Number(id), propMap: { "4001": { val: 90 } },
    talentIdList: Array.from({ length: rank }, (_, i) => i + 1),
    fightPropMap: { "20": 0.55, "22": 1.8, "23": 1.1, "28": 80, "2000": 42000, "2001": 1800, "2002": 700 },
    equipList: [],
  }],
});
afterEach(() => vi.unstubAllGlobals());

describe("第23バッチ・既存キャラ側の推奨PT更新", () => {
  it.each(owners)("%s側の新キャラ編成が最終UID応答・図鑑・履歴へ届く", async (name) => {
    const id = catalogSourceIdFor("genshin", name)!;
    expect(id).toMatch(/^10000\d+$/);
    const payload = payloadFor(id, 3);
    const before = structuredClone(payload);
    vi.stubGlobal("fetch", vi.fn(async (input: string | URL | Request) => {
      const url = String(input);
      const data = url.endsWith("/characters.json") ? catalog.characters
        : url.endsWith("/loc.json") ? catalog.loc
        : url.includes(`/api/uid/${payload.uid}`) ? payload : undefined;
      if (!data) throw Error(`Unexpected fixture request: ${url}`);
      return new Response(JSON.stringify(data), { headers: { "content-type": "application/json" } });
    }));
    const caller = appRouter.createCaller({
      req: { headers: {}, socket: { remoteAddress: `127.23.1.${owners.indexOf(name) + 1}` } },
      res: { setHeader: vi.fn() }, user: null,
    } as unknown as TrpcContext);
    const result = await caller.build.lookup({ game: "genshin", uid: payload.uid });
    const character = result.characters[0]!;
    const reference = await caller.build.reference({ game: "genshin", name });
    expect(character.name).toBe(name);
    expect(character.identity?.key).toBe(`genshin:${id}`);
    expect(character.guide).toEqual(reference.guide);
    expect(character.partyRecommendations).toEqual(reference.partyRecommendations);
    expect(character.partyRecommendations).toMatchObject({ gameVersion: "7.1", dataAsOf: "2026-09-29", updatedAt: "2026-10-01" });
    const options = character.partyRecommendations!.options;
    expect(options.map((option) => option.rank)).toEqual([1, 2, 3]);
    expect(new Set(options.map((option) => option.members.map((member) => member.name.ja).sort().join(","))).size).toBe(3);
    const added = options.filter((option) => option.id.includes("batch23"));
    expect(added).toHaveLength(name === "ファルザン" ? 2 : 1);
    for (const option of added) {
      expect(option.members[0].name.ja).toBe(name);
      expect(option.members).toHaveLength(4);
      expect(option.targetChanges).toEqual([]);
      expect(option.updatedAt).toBe("2026-10-01");
      expect(option.sourceUrl).toMatch(/game8.jp\/genshin\/81723[78]$/);
      expect(option.members.every((member) => member.role.en && member.role["zh-CN"])).toBe(true);
    }
    expect(payload).toEqual(before);
    expect(character.allStats).toEqual(normalizeGenshinPayload(payloadFor(id, 0), catalog).characters[0]!.allStats);
    const history = await caller.build.guideHistory();
    const entry = history.characters.find((item) => item.game === "genshin" && item.name === name)!;
    expect(entry.updatedAt).toBe("2026-10-01");
    expect(character.guide.updatedAt).not.toBe("2026-10-01");
    expect(entry.dataAsOf).toBe(character.guide.dataAsOf);
    expect(entry.profileId).toBe(character.guide.profileId);
    expect(entry.events[0].title).toBe("第23バッチ追補：新キャラ入りの推奨PTを登録");
    expect(reference.batch).not.toBe(23);
  });

  it("新キャラの各編成は参加する既存カタログキャラ側でも同じ4名で参照できる", () => {
    const newNames = ["ヴェスナ", "ヴォジャニーツァ"];
    for (const name of newNames) {
      for (const option of partyRecommendationsFor("genshin", name).options) {
        const roster = option.members.map((member) => member.name.ja).sort();
        for (const member of option.members) {
          if (member.name.ja === name || newNames.includes(member.name.ja)) continue;
          if (!CHARACTER_GUIDE_CATALOG.genshin.some((entry) => entry === member.name.ja)) {
            expect(member.name.ja).toBe("オデット");
            continue;
          }
          expect(partyRecommendationsFor("genshin", member.name.ja).options.some((inverse) =>
            inverse.members.map((entry) => entry.name.ja).sort().join(",") === roster.join(",")
          ), `${name} → ${member.name.ja}`).toBe(true);
        }
      }
    }
  });
});
