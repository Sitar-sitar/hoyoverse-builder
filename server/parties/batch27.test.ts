import { describe, expect, it } from "vitest";
import { BATCH27_TEAMS } from "./batch27Teams";
import { backlogLinks, teamStoreIssues } from "./linkStatus";
import { PARTY_LINK_RECORDS, linkRecordsFor } from "./linkRecords";
import { partyRecommendationsFor } from "./resolve";
import { partyAppearancesFor } from "./appearances";

describe("第27バッチの固定構成と条件", () => {
  it("起点の旧6案を現行出典の6共有構成へ置換する", () => {
    expect(BATCH27_TEAMS.map(team => team.members.map(member => member.name.ja))).toEqual([
      ["アベンチュリン・波と戯れる夏", "不死途", "ロビン・夏空の歌", "ヒアンシー"],
      ["セイバー", "ギルガメッシュ", "ロビン・夏空の歌", "フォフォ"],
      ["アグライア", "ロビン・夏空の歌", "キュレネ", "ヒアンシー"],
      ["クラレッタ", "ノルムー", "リナ"],
      ["クラレッタ", "クレタ", "リナ"],
      ["クラレッタ", "アンビー", "ニコ"],
    ]);
    expect(teamStoreIssues()).toEqual([]);
    expect(backlogLinks()).toEqual([]);
    for (const team of BATCH27_TEAMS) for (const member of team.members)
      expect(member.targetChanges ?? []).toEqual([]);
  });

  it("ポテンシャルとEP条件を三言語で残す", () => {
    for (const lang of ["ja", "en", "zh-CN"] as const) {
      expect(BATCH27_TEAMS[3]!.synergy[0]![lang]).toMatch(/ポテンシャル|Potential|潜能/);
      expect(BATCH27_TEAMS[4]!.synergy[0]![lang]).toMatch(/クレタ|Koleda|珂蕾妲/);
      expect(BATCH27_TEAMS[4]!.synergy[0]![lang]).toMatch(/リナ|Rina|丽娜/);
      expect(BATCH27_TEAMS[2]!.synergy[0]![lang]).toMatch(/EP|Energy|能量/);
    }
    expect(JSON.stringify(BATCH27_TEAMS)).not.toContain("Caesar");
  });

  it("本人ガイドで一致した関連4名に採用し、採用しない参加者は別欄へ出す", () => {
    for (const [game, owner, suffix] of [
      ["hsr", "セイバー", "team-hsr-ロビン・夏空の歌-b27-2"],
      ["hsr", "ギルガメッシュ", "team-hsr-ロビン・夏空の歌-b27-2"],
      ["hsr", "アグライア", "team-hsr-ロビン・夏空の歌-b27-3"],
      ["zzz", "クレタ", "team-zzz-クラレッタ-b27-2"],
    ] as const) {
      const options = partyRecommendationsFor(game, owner).options;
      expect(options).toHaveLength(3);
      expect(options[0]!.id).toBe(`${suffix}@${owner}`);
      expect(options[0]!.members[0]!.name.ja).toBe(owner);
      expect(partyAppearancesFor(game, owner).some(card => card.teamId === suffix)).toBe(false);
      expect(linkRecordsFor(game, owner)[0]!.record.batch).toBe(27);
    }
    expect(partyAppearancesFor("zzz", "リナ").map(card => card.teamId)).toEqual([
      "team-zzz-クラレッタ-b27-1", "team-zzz-クラレッタ-b27-2",
    ]);
    expect(PARTY_LINK_RECORDS.filter(record => record.batch === 27)).toHaveLength(6);
  });
});
