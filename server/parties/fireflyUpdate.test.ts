import { describe, expect, it } from "vitest";
import { appRouter } from "../routers";
import { BATCH26_TEAMS } from "./batch26Teams";
import { linkRecordsFor } from "./linkRecords";
import { partyRecommendationsFor, resolvePartySet } from "./resolve";
import { TEAM_STORE } from "./teamStore";

describe("ホタルのみの推奨PT更新", () => {
  it("最終図鑑APIで条件を分けた3案を返し、旧速度補正を使わない", async () => {
    const caller = appRouter.createCaller({ user: null, req: {}, res: {} } as never);
    const result = await caller.build.reference({ game: "hsr", name: "ホタル" });
    const set = partyRecommendationsFor("hsr", "ホタル");
    expect(JSON.stringify(result)).toContain("team-hsr-ホタル-b26-1");
    expect(set.options.map(x => x.members.map(m => m.name.ja))).toEqual([
      ["ホタル", "ダリア", "帰忘の流離人", "霊砂"],
      ["ホタル", "ダリア", "帰忘の流離人", "ルアン・メェイ"],
      ["ホタル", "ルアン・メェイ", "開拓者（調和）", "ギャラガー"],
    ]);
    expect(set.updatedAt).toBe("2026-10-07");
    expect(set.options.every(x => x.targetChanges.length === 0)).toBe(true);
    expect(set.options[1]!.synergy[0]!.ja).toContain("長期戦");
    expect(linkRecordsFor("hsr", "ホタル")[0]!.record.removed).toEqual(["firefly-superbreak", "firefly-fugue", "firefly-accessible"]);
  });

  it("同じ共有編成の順位・採否をキャラ別に設定できる", () => {
    const [sustain, damage] = BATCH26_TEAMS;
    const parties = {
      "hsr:ホタル": { refs: [{ team: sustain!.id }, { team: damage!.id }] },
      "hsr:ルアン・メェイ": { refs: [{ team: damage!.id }] },
    };
    expect(resolvePartySet("hsr", "ホタル", TEAM_STORE, parties).options.find(x => x.id === damage!.id)?.rank).toBe(2);
    expect(resolvePartySet("hsr", "ルアン・メェイ", TEAM_STORE, parties).options[0]).toMatchObject({ rank: 1, targetChanges: [] });
    parties["hsr:ホタル"].refs = [{ team: sustain!.id }];
    expect(resolvePartySet("hsr", "ホタル", TEAM_STORE, parties).options).toHaveLength(1);
    expect(resolvePartySet("hsr", "ルアン・メェイ", TEAM_STORE, parties).options[0]!.members[0]!.name.ja).toBe("ルアン・メェイ");
  });
});
