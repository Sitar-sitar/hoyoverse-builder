import { describe, expect, it } from "vitest";
import { guideFor } from "./buildAdvisor";
import { constellationProfileFor } from "./characterConstellations";
import { guideMetadataFor } from "./characterGuideMetadata";
import { guideUpdateHistory } from "./guideUpdateHistory";
import { partyRecommendationsFor } from "./partyRecommendations";

const identity = (game: "hsr" | "genshin" | "zzz", sourceId: string, displayName: string) => ({
  game,
  sourceId,
  key: `${game}:${sourceId}` as const,
  displayName,
  variantOf: null,
  resolved: true,
  resolution: "provider" as const,
});

const profiles = [
  identity("hsr", "1314", "ジェイド"), identity("hsr", "1104", "ジェパード"), identity("hsr", "1014", "セイバー"), identity("hsr", "1410", "セイレンス"),
  identity("genshin", "10000051", "エウルア"), identity("genshin", "10000112", "エスコフィエ"), identity("genshin", "10000099", "エミリエ"),
  identity("zzz", "1051", "イドリー"), identity("zzz", "1561", "ヴェリナ"), identity("zzz", "1301", "オルペウス&「鬼火」"),
];

describe("第10バッチの個別ガイド", () => {
  it("HSR4名を個別の公開プロフィール比較ガイドとして返す", () => {
    const saber = guideFor("セイバー", "壊滅");
    const seirens = guideFor("セイレンス", "虚無");
    expect(saber.targets.find((target) => target.key === "speed")?.targets["目標"]).toBe(134);
    expect(seirens.targets.find((target) => target.key === "effectHitRate")?.targets["目標"]).toBe(120);
    ["ジェイド", "ジェパード", "セイバー", "セイレンス"].forEach((name) => {
      expect(guideFor(name, name === "ジェイド" ? "知恵" : name === "ジェパード" ? "存護" : name === "セイバー" ? "壊滅" : "虚無").targetContext).toContain("公開プロフィール");
    });
  });

  it("全10名を実ソースIDで6段階の凸へ解決し、戦闘中効果を目標補正にしない", () => {
    profiles.forEach((character) => {
      const profile = constellationProfileFor(character, 6);
      expect(profile.dataStatus).toBe("curated");
      expect(profile.effects.map((effect) => effect.level)).toEqual([1, 2, 3, 4, 5, 6]);
      expect(profile.activeTargetChanges).toEqual([]);
      expect(profile.updatedAt).toBe("2026-08-26");
    });
    expect(constellationProfileFor(identity("zzz", "1381", "0号・アンビー"), 6).effects).toHaveLength(6);
  });

  it("全10名へ本人を含む最大3案の更新日付きPTを返し、パーティ補正を公開値へ加算しない", () => {
    profiles.forEach(({ game, displayName }) => {
      const parties = partyRecommendationsFor(game, displayName);
      expect(parties.options).toHaveLength(3);
      expect(parties.options.every((option) => option.members.some((member) => member.name.ja === displayName))).toBe(true);
      expect(parties.options.every((option) => option.targetChanges.length === 0)).toBe(true);
      expect(parties.updatedAt).toBe(displayName === "ジェイド" || displayName === "ジェパード" ? "2026-09-11" : "2026-08-26");
      // ジェイド・ジェパードは第18バッチ（2026-09-11）で個別ガイドを登録し、メタデータを更新した（台帳上は第10バッチのまま）。
      expect(guideMetadataFor(game, displayName).updatedAt).toBe(displayName === "ジェイド" || displayName === "ジェパード" ? "2026-09-11" : "2026-08-26");
    });
    const history = guideUpdateHistory();
    const updated = history.characters.filter((character) => profiles.some((profile) => profile.game === character.game && profile.displayName === character.name));
    expect(updated).toHaveLength(10);
    expect(updated.every((character) => character.events.some((event) => event.title.includes("第10バッチ")))).toBe(true);
  });
});

describe("第18バッチで登録した第10バッチ2名の個別ガイド", () => {
  it("ジェイドは出典の2水準だけを使い、ロール共通値に戻らない", () => {
    const jade = guideFor("ジェイド", "知恵");
    const value = (key: string) => jade.targets.find((target) => target.key === key)?.targets;
    expect(jade.relicSet).toBe("灰燼を燃やし尽くす大公 ×4");
    expect(value("critRate")).toEqual({ "厳選": 90, "目標": 85, "妥協": 85 });
    expect(value("critDmg")).toEqual({ "厳選": 123, "目標": 111, "妥協": 111 });
    expect(value("attack")).toEqual({ "厳選": 3190, "目標": 3090, "妥協": 3090 });
    // 速度は数値の明示が無いため比較しない。
    expect(value("speed")).toBeUndefined();
    expect(jade.targetContext).toContain("公開プロフィールへ加算しない");
  });

  it("ジェパードは明示値のある効果命中だけを同値3水準で比較する", () => {
    const gepard = guideFor("ジェパード", "存護");
    expect(gepard.relicSet).toBe("星の光を隠した隠者 ×4");
    expect(gepard.targets).toEqual([{ key: "effectHitRate", label: "効果命中", unit: "%", targets: { "厳選": 50, "目標": 50, "妥協": 50 } }]);
  });

  it("推奨PTは出典の実名編成で、本人を含み、補正を持たない", () => {
    const jade = partyRecommendationsFor("hsr", "ジェイド");
    const gepard = partyRecommendationsFor("hsr", "ジェパード");
    expect(jade.options.map((option) => option.members.map((member) => member.name.ja))).toEqual([
      ["ジェイド", "マダム・ヘルタ", "トリビー", "ヒアンシー"],
      ["ジェイド", "ヘルタ", "ロビン", "アベンチュリン"],
      ["ジェイド", "クラーラ", "開拓者（記憶）", "ギャラガー"],
    ]);
    expect(gepard.options.map((option) => option.members.map((member) => member.name.ja))).toEqual([
      ["ジェパード", "彦卿", "停雲", "ペラ"],
      ["ジェパード", "黄泉", "椒丘", "ペラ"],
      ["ジェパード", "姫子・旅立ち", "トリビー", "ヴェルト"],
    ]);
    [...jade.options, ...gepard.options].forEach((option) => expect(option.targetChanges).toEqual([]));
  });

  it("更新履歴に第18バッチの個別イベントが残り、第10バッチのイベントも消えない", () => {
    const history = guideUpdateHistory();
    ["ジェイド", "ジェパード"].forEach((name) => {
      const events = history.characters.find((character) => character.game === "hsr" && character.name === name)!.events;
      expect(events.some((event) => event.title === "第18バッチ：個別ビルドを登録" && event.date.startsWith("2026-09-11"))).toBe(true);
      expect(events.some((event) => event.title.includes("第10バッチ"))).toBe(true);
      expect(guideMetadataFor("hsr", name).profileId).toBe(`curated:batch18:hsr:${name}`);
    });
  });
});
