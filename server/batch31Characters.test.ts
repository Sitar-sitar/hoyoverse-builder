import { afterEach, describe, expect, it, vi } from "vitest";
import type { TrpcContext } from "./_core/context";
import { appRouter } from "./routers";
import { resolveCharacterIdentity } from "./characterIdentity";
import { teamStoreIssues, uncoveredLinks } from "./parties/linkStatus";

vi.mock("./db", () => ({ recordLookupAnalyticsEvent: vi.fn().mockResolvedValue(undefined) }));

const caller = appRouter.createCaller({
  req: { headers: {}, socket: { remoteAddress: "127.31.0.1" } },
  res: { setHeader: vi.fn() },
  user: null,
} as unknown as TrpcContext);

function json(value: unknown) {
  return new Response(JSON.stringify(value), {
    headers: { "content-type": "application/json" },
  });
}

afterEach(() => vi.unstubAllGlobals());

describe("第31バッチの図鑑とUID診断", () => {
  it.each(["MiHoMo", "Enka"] as const)("星神★アッハの%s経路で公開値と個別ガイドを返す", async (provider) => {
    const uid = provider === "MiHoMo" ? "831000001" : "831000002";
    vi.stubGlobal("fetch", vi.fn(async (input: string | URL | Request) => {
      const url = String(input);
      if (url.includes("api.mihomo.me")) {
        if (provider === "Enka") return new Response(null, { status: 503 });
        return json({
          player: { uid },
          characters: [{ id: "1511", rank: 2, name: "Aeon ★ Aha",
            path: { name: "愉悦" }, element: { name: "量子" },
            statistics: [{ field: "spd", name: "速度", value: 149 }] }],
        });
      }
      if (url.includes("/api/hsr/uid/")) {
        return json({ uid, detailInfo: { avatarDetailList: [{ avatarId: 1511, rank: 2 }] } });
      }
      if (url.endsWith(".json")) return json({});
      throw new Error(`Unexpected fixture request: ${url}`);
    }));

    const { characters: [character] } = await caller.build.lookup({ game: "hsr", uid });
    const reference = await caller.build.reference({ game: "hsr", name: "星神★アッハ" });
    expect(character?.identity?.key).toBe("hsr:1511");
    expect(character?.element).toBe("量子");
    expect(character?.guide).toEqual(reference.guide);
    expect(character?.comparisons).toMatchObject([{
      key: "speed", current: provider === "MiHoMo" ? 149 : null,
      targets: { 厳選: 166, 目標: 150, 妥協: 125 },
    }]);
    expect(character?.constellations?.effects.map(effect => effect.level)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(character?.constellations?.activeTargetChanges).toEqual([]);
    expect(character?.partyRecommendations).toEqual(reference.partyRecommendations);
    expect(reference.partyRecommendations.options[0]?.members.map(member => member.name.ja))
      .toEqual(["星神★アッハ", "銀狼Lv.999", "爻光", "パール"]);
  });

  it("セヴェリアンは風・強攻のガイドを返し、音動機条件付き目標を比較表に流さない", async () => {
    const uid = "131000003";
    vi.stubGlobal("fetch", vi.fn(async (input: string | URL | Request) => {
      const url = String(input);
      if (url.endsWith(".json")) return json({});
      if (url.includes("/api/zzz/uid/")) return json({ uid, PlayerInfo: { ShowcaseDetail: {
        AvatarList: [{ Id: 1631, Level: 60, TalentLevel: 2, EquippedList: [] }],
      } } });
      throw new Error(`Unexpected fixture request: ${url}`);
    }));

    const { characters: [character] } = await caller.build.lookup({ game: "zzz", uid });
    const reference = await caller.build.reference({ game: "zzz", name: "セヴェリアン" });
    expect(character?.identity?.key).toBe("zzz:1631");
    expect(character?.portrait).toContain("IconRole1631.png");
    expect(character?.element).toBe("風");
    expect(character?.path).toBe("強攻");
    expect(character?.guide).toEqual(reference.guide);
    expect(character?.guide.targetContext).toContain("80.2%");
    expect(character?.comparisons).toEqual([]);
    expect(character?.constellations?.effects.map(effect => effect.level)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(character?.constellations?.activeTargetChanges).toEqual([]);
    expect(character?.partyRecommendations).toEqual(reference.partyRecommendations);
    expect(reference.partyRecommendations.options.map(team => team.members.length)).toEqual([3, 3, 3]);
  });

  it("同名の別IDを新キャラとして扱わず、編成の採否を記録する", () => {
    expect(resolveCharacterIdentity("hsr", "99999", "星神★アッハ").resolved).toBe(false);
    expect(resolveCharacterIdentity("zzz", "99999", "セヴェリアン").resolved).toBe(false);
    expect(teamStoreIssues()).toEqual([]);
    expect(uncoveredLinks()).toEqual([]);
  });
});
