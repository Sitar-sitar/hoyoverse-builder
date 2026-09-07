import { describe, expect, it } from "vitest";
import { guideFor } from "./buildAdvisor";
import { constellationProfileFor } from "./characterConstellations";
import { guideMetadataFor } from "./characterGuideMetadata";
import { characterReferenceFor } from "./characterReference";
import { genshinGuide, normalizeGenshinPayload } from "./gameProviders";
import { partyRecommendationsFor } from "./partyRecommendations";

const BATCH16_DATE = "2026-09-07";

const identity = (game: "hsr" | "genshin" | "zzz", sourceId: string, displayName: string) => ({
  game,
  sourceId,
  key: `${game}:${sourceId}` as const,
  displayName,
  variantOf: null,
  resolved: true,
  resolution: "provider" as const,
});

const hsrTargets = [
  identity("hsr", "1504", "不死途"),
  identity("hsr", "1317", "乱破"),
  identity("hsr", "1218", "椒丘"),
  identity("hsr", "1502", "爻光"),
];

const genshinTargets = [
  identity("genshin", "10000014", "バーバラ"),
  identity("genshin", "10000076", "ファルザン"),
  identity("genshin", "10000085", "フレミネ"),
  identity("genshin", "10000080", "ミカ"),
  identity("genshin", "10000041", "モナ"),
  identity("genshin", "10000077", "ヨォーヨ"),
  identity("genshin", "10000119", "ラウマ"),
  identity("genshin", "10000006", "リサ"),
  identity("genshin", "10000084", "リネ"),
  identity("genshin", "10000083", "リネット"),
  identity("genshin", "10000074", "レイラ"),
  identity("genshin", "10000106", "マーヴィカ"),
  identity("genshin", "10000102", "ムアラニ"),
  identity("genshin", "10000120", "フリンズ"),
  identity("genshin", "10000124", "ヤフォダ"),
  identity("genshin", "10000086", "リオセスリ"),
];

const batch16 = [...hsrTargets, ...genshinTargets];

const hsrPathFor: Record<string, string> = { 不死途: "巡狩", 乱破: "知恵", 椒丘: "虚無", 爻光: "愉悦" };

describe("第16バッチ20名の個別ガイド", () => {
  it("対象はHSR 4名・原神16名の計20名", () => {
    expect(hsrTargets).toHaveLength(4);
    expect(genshinTargets).toHaveLength(16);
    expect(batch16).toHaveLength(20);
  });

  it("HSR4名へロール共通値ではない個別の公開プロフィール目標を返す", () => {
    const fushito = guideFor("不死途", "巡狩");
    expect(fushito.targets.map((target) => target.key)).toEqual(["critRate"]);
    expect(fushito.targets[0]?.targets).toEqual({ 厳選: 100, 目標: 100, 妥協: 100 });
    expect(fushito.relicSet).toContain("灰燼を燃やし尽くす大公");

    const rappa = guideFor("乱破", "知恵");
    expect(rappa.targets.find((target) => target.key === "breakEffect")?.targets["目標"]).toBe(250);
    expect(rappa.targets.find((target) => target.key === "speed")?.targets["目標"]).toBe(160);
    expect(rappa.targets.find((target) => target.key === "attack")?.targets["目標"]).toBe(3400);
    // Game8 の「戦闘中」到達値（攻撃力3200・速度145）は公開値の目標に採用しない。
    expect(rappa.targets.some((target) => target.targets["妥協"] === 3200 || target.targets["妥協"] === 145)).toBe(false);

    const jiaoqiu = guideFor("椒丘", "虚無");
    expect(jiaoqiu.targets.find((target) => target.key === "effectHitRate")?.targets["目標"]).toBe(140);
    expect(jiaoqiu.targets.find((target) => target.key === "speed")?.targets["妥協"]).toBe(160);

    const yaoguang = guideFor("爻光", "愉悦");
    expect(yaoguang.targets.find((target) => target.key === "critRate")?.targets).toEqual({ 厳選: 72, 目標: 62, 妥協: 52 });
    expect(yaoguang.targets.find((target) => target.key === "critDmg")?.targets).toEqual({ 厳選: 163, 目標: 145, 妥協: 140 });

    hsrTargets.forEach(({ displayName }) => {
      const guide = guideFor(displayName, hsrPathFor[displayName]!);
      expect(guide.targetContext).toContain("公開プロフィール");
      expect(guide.dataAsOf).toBe(guideMetadataFor("hsr", displayName).dataAsOf);
      expect(guide.updatedAt).toBe(BATCH16_DATE);
    });
  });

  it("原神16名の目標を公開プロフィール正規化経路で解決し、根拠外の数値を足さない", () => {
    const avatar = (avatarId: number) => ({ avatarId, propMap: { "4001": { val: 90 } }, talentIdList: [1, 2], fightPropMap: { "20": 0.7, "22": 1.5, "23": 2, "28": 400, "2000": 50000, "2001": 2500, "2002": 900 }, equipList: [] });
    const ids = genshinTargets.map((target) => Number(target.sourceId));
    const names = genshinTargets.map((target) => target.displayName);
    const payload = normalizeGenshinPayload({ uid: "618285856", playerInfo: { nickname: "テスト旅人", level: 60 }, avatarInfoList: ids.map(avatar) }, {
      characters: Object.fromEntries(ids.map((id, index) => [`${id}`, { NameTextMapHash: index + 1, Element: "Wind", WeaponType: "WEAPON_BOW", SideIconName: `UI_B16_${id}` }])),
      loc: { ja: Object.fromEntries(names.map((name, index) => [`${index + 1}`, name])) },
    });
    const gi = Object.fromEntries(payload.characters.map((character) => [character.name, character]));

    expect(gi["ファルザン"]?.comparisons.find((comparison) => comparison.key === "energyRecharge")?.targets).toEqual({ 厳選: 250, 目標: 250, 妥協: 200 });
    expect(gi["モナ"]?.comparisons.find((comparison) => comparison.key === "energyRecharge")?.targets["目標"]).toBe(200);
    expect(gi["ラウマ"]?.comparisons.find((comparison) => comparison.key === "elementalMastery")?.targets["目標"]).toBe(800);
    expect(gi["ラウマ"]?.comparisons.find((comparison) => comparison.key === "energyRecharge")?.targets["目標"]).toBe(170);
    expect(gi["リネット"]?.comparisons.find((comparison) => comparison.key === "energyRecharge")?.targets).toEqual({ 厳選: 200, 目標: 200, 妥協: 180 });
    expect(gi["フリンズ"]?.comparisons.find((comparison) => comparison.key === "attack")?.targets["目標"]).toBe(2000);

    // 出典に数値の明示がないキャラクターは比較表を空にする（水準差を創作しない）。
    ["バーバラ", "フレミネ", "ミカ", "ヨォーヨ", "リサ", "リネ", "レイラ", "マーヴィカ", "ムアラニ", "ヤフォダ", "リオセスリ"].forEach((name) => {
      expect(gi[name]?.comparisons).toEqual([]);
    });

    // 公開値そのものはガイド適用で増減しない。
    expect(gi["マーヴィカ"]?.allStats.some((stat) => stat.key === "critRate" && stat.value > 70)).toBe(false);
  });

  it("確認済みsource IDで6段階の凸を解決し、効果を公開値へ加算しない", () => {
    batch16.forEach((character) => {
      const profile = constellationProfileFor(character, 99);
      expect(profile.dataStatus).toBe("curated");
      expect(profile.acquiredRank).toBe(6);
      expect(profile.effects.map((effect) => effect.level)).toEqual([1, 2, 3, 4, 5, 6]);
      expect(profile.effects.every((effect) => effect.description.ja.length > 0)).toBe(true);
      expect(profile.activeTargetChanges).toEqual([]);
      expect(profile.updatedAt).toBe(BATCH16_DATE);
    });
    // 未解放ランクでも6段階の説明を保持し、解放済みだけを有効化する。
    const rank0 = constellationProfileFor(identity("genshin", "10000120", "フリンズ"), 0);
    expect(rank0.effects).toHaveLength(6);
    expect(rank0.activeTargetChanges).toEqual([]);
  });

  it("同名前方一致・お試し実装・未登録IDへ誤適用しない", () => {
    const lyney = constellationProfileFor(identity("genshin", "10000084", "リネ"), 6);
    const lynette = constellationProfileFor(identity("genshin", "10000083", "リネット"), 6);
    expect(lyney.effects).not.toEqual(lynette.effects);
    expect(lyney.effects[0]?.name.ja).toBe("奇想天外の芸当");
    expect(lynette.effects[0]?.name.ja).toBe("流影幻視の冷刃");
    // マーヴィカ（お試し）の別IDは個別データの対象外。
    expect(constellationProfileFor(identity("genshin", "10000901", "マーヴィカ（お試し）"), 6).dataStatus).toBe("preparing");
    expect(constellationProfileFor(identity("hsr", "999999", "不死途"), 6).dataStatus).toBe("preparing");
  });

  it("本人を含む根拠付きの最大3案を返し、パーティ補正を公開値へ加算しない", () => {
    batch16.forEach(({ game, displayName }) => {
      const parties = partyRecommendationsFor(game, displayName);
      expect(parties.options.length).toBeGreaterThan(0);
      expect(parties.options.length).toBeLessThanOrEqual(3);
      expect(parties.options.every((option) => option.members[0]?.name.ja === displayName)).toBe(true);
      expect(parties.options.every((option) => option.targetChanges.length === 0)).toBe(true);
      expect(parties.options.every((option) => option.members.length === 4)).toBe(true);
      expect(parties.options.every((option) => option.communitySources.every((source) => source.checkedAt === BATCH16_DATE))).toBe(true);
      expect(parties.updatedAt).toBe(BATCH16_DATE);
      expect(guideMetadataFor(game, displayName).updatedAt).toBe(BATCH16_DATE);
    });
    // 出典が4名固定の第3案を示さないキャラクターは案を創作せず2案で確定する。
    expect(partyRecommendationsFor("genshin", "フリンズ").options).toHaveLength(2);
    expect(partyRecommendationsFor("genshin", "ヤフォダ").options).toHaveLength(2);
    expect(partyRecommendationsFor("hsr", "不死途").options[0]?.members.map((member) => member.name.ja)).toEqual(["不死途", "千冶・刃", "トリビー", "ヒアンシー"]);
    expect(partyRecommendationsFor("genshin", "バーバラ").options[0]?.members[0]?.name.ja).toBe("バーバラ");
  });

  it("図鑑（UID不要）経路でもUID照会と同じ個別データを返す", () => {
    batch16.forEach(({ game, displayName }) => {
      const reference = characterReferenceFor(game, displayName);
      expect(reference).not.toBeNull();
      expect(reference?.status).toBe("reviewed");
      expect(reference?.batch).toBe(16);
      expect(reference?.guide.updatedAt).toBe(BATCH16_DATE);
      expect(reference?.guide.targetContext).toContain(displayName);
      expect(reference?.constellations.dataStatus).toBe("curated");
      expect(reference?.constellations.effects).toHaveLength(6);
      expect(reference?.partyRecommendations.options.every((option) => option.members[0]?.name.ja === displayName)).toBe(true);
      const lookupGuide = game === "hsr" ? guideFor(displayName, hsrPathFor[displayName]!) : genshinGuide(displayName);
      expect(reference?.guide.targets).toEqual(lookupGuide.targets);
      expect(reference?.guide.relicSet).toBe(lookupGuide.relicSet);
      expect(reference?.guide.headline).toBe(lookupGuide.headline);
      // 自動生成ガイドへのフォールバックではなく、精査済みの個別ビルドが返ること。
      expect(reference?.guide.relicSet).not.toContain("公開ビルドに基づく");
      expect(reference?.partyRecommendations.options.map((option) => option.members.map((member) => member.name.ja)))
        .toEqual(partyRecommendationsFor(game, displayName).options.map((option) => option.members.map((member) => member.name.ja)));
    });
  });
});
