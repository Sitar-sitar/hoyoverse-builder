import { describe, expect, it } from "vitest";
import { BATCH28_TEAMS } from "./batch28Teams";
import { teamStoreIssues, uncoveredLinks } from "./linkStatus";
import { PARTY_LINK_RECORDS } from "./linkRecords";
import { partyRecommendationsFor } from "./resolve";
import { partyAppearancesFor } from "./appearances";
import { zzzGuide } from "../gameProviders";
import { constellationProfileForCatalogName } from "../characterConstellations";

describe("第28バッチ（ZZZ フィオニー）", () => {
  it("実名3名の共有編成3案を本人の表示3枠として登録し、補正を持たない", () => {
    expect(BATCH28_TEAMS.map(team => team.members.map(member => member.name.ja))).toEqual([
      ["フィオニー", "レミエール", "ヴェリナ"],
      ["フィオニー", "ヴェリナ", "浮波柚葉"],
      ["フィオニー", "パイパー", "ルーシー"],
    ]);
    expect(BATCH28_TEAMS[0]!.members[0]!.name).toEqual({ ja: "フィオニー", en: "Phoenix", "zh-CN": "菲欧妮" });
    expect(partyRecommendationsFor("zzz", "フィオニー").options.map(option => option.id)).toEqual(
      BATCH28_TEAMS.map(team => team.id)
    );
    for (const team of BATCH28_TEAMS) for (const member of team.members)
      expect(member.targetChanges ?? []).toEqual([]);
    expect(teamStoreIssues()).toEqual([]);
    expect(uncoveredLinks()).toEqual([]);
    // 初回登録は initialRefs.ts だけで、変更記録を書かない。
    expect(PARTY_LINK_RECORDS.some(record => record.batch === 28)).toBe(false);
  });

  it("参加者は表示3枠を変えず、見送った共有編成を図鑑の別欄に出す", () => {
    for (const [owner, ids] of [
      ["ヴェリナ", ["team-zzz-フィオニー-b28-1", "team-zzz-フィオニー-b28-2"]],
      ["レミエール", ["team-zzz-フィオニー-b28-1"]],
      ["浮波柚葉", ["team-zzz-フィオニー-b28-2"]],
      ["パイパー", ["team-zzz-フィオニー-b28-3"]],
      ["ルーシー", ["team-zzz-フィオニー-b28-3"]],
    ] as const) {
      expect(partyRecommendationsFor("zzz", owner).options.some(option => option.id.includes("フィオニー"))).toBe(false);
      expect(partyAppearancesFor("zzz", owner).map(card => card.id)).toEqual(ids.map(id => `${id}@${owner}`));
    }
  });

  it("開幕異常掌握の3水準だけを公開比較し、心象映画6段は補正なしで解決する", () => {
    const guide = zzzGuide("フィオニー", "Anomaly");
    expect(guide.targets).toEqual([
      { key: "anomalyProficiency", label: "異常掌握", unit: "", targets: { "厳選": 255, "目標": 209, "妥協": 155 } },
    ]);
    expect(guide.profileId).toBe("curated:batch28:zzz:フィオニー");
    const profile = constellationProfileForCatalogName("zzz", "フィオニー", 6);
    expect(profile.dataStatus).toBe("curated");
    expect(profile.effects.map(effect => effect.level)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(profile.effects[3]!.description.ja).toContain("600%");
    expect(profile.activeTargetChanges).toEqual([]);
  });
});
