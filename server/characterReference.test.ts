import { describe, expect, it } from "vitest";
import { characterReferenceCatalog, characterReferenceFor } from "./characterReference";
import { routeMismatches } from "./auditRules";
import { HSR_RUNTIME_PATHS } from "./characterGuideCatalog";
import { catalogSourceIdFor } from "./characterConstellations";

describe("character reference catalog", () => {
  it("全251キャラクターをゲーム別に公開する（第18バッチで HSR 3名を追加）", () => {
    const catalog = characterReferenceCatalog();
    expect(catalog.total).toBe(251);
    expect(catalog.reviewed).toBe(251);
    expect(catalog.pending).toBe(0);
    expect(catalog.games.hsr).toHaveLength(84);
    expect(catalog.games.genshin).toHaveLength(109);
    expect(catalog.games.zzz).toHaveLength(58);
  });

  it.each([
    ["hsr", "長夜月"],
    ["zzz", "葉瞬光"],
  ] as const)("第15バッチ %s:%s は専用ガイド・3PT・6段階凸を返す", (game, name) => {
    const reference = characterReferenceFor(game, name);
    expect(reference).not.toBeNull();
    expect(reference?.status).toBe("reviewed");
    expect(reference?.batch).toBe(15);
    expect(reference?.guide.updatedAt).toBe("2026-09-05");
    expect(reference?.guide.dataAsOf).toBe("2026-09-05");
    expect(reference?.partyRecommendations.options).toHaveLength(3);
    expect(reference?.constellations.dataStatus).toBe("curated");
    expect(reference?.constellations.effects).toHaveLength(6);
  });

  it("通常キャラクターもUIDなしで推奨情報を返す", () => {
    const reference = characterReferenceFor("hsr", "ホタル");
    expect(reference?.guide.headline).toBeTruthy();
    expect(reference?.guide.mainStats.length).toBeGreaterThan(0);
    expect(reference?.partyRecommendations.options.length).toBeGreaterThan(0);
  });

  it("カタログ外の名前は返さない", () => {
    expect(characterReferenceFor("hsr", "存在しないキャラ")).toBeNull();
  });
});

describe("図鑑の凸データ（R8 の再現テスト）", () => {
  it("第1〜14バッチのキャラクターも図鑑で curated の凸を返す", () => {
    for (const [game, name] of [["hsr", "ホタル"], ["zzz", "星見雅"]] as const) {
      const reference = characterReferenceFor(game, name);
      expect(reference?.constellations.dataStatus).toBe("curated");
      expect(reference?.constellations.effects).toHaveLength(6);
    }
  });

  it("凸データ未登録のキャラクターは preparing のまま効果を捏造しない", () => {
    const reference = characterReferenceFor("zzz", "ニコ");
    expect(reference?.constellations.dataStatus).toBe("preparing");
    expect(reference?.constellations.effects).toEqual([]);
  });
});

describe("第18バッチで追加した HSR 3名", () => {
  const added = [
    { name: "千冶・刃", sourceId: "1507", path: "Warlock", firstEidolon: "死するまで、この身は成らず", partyNames: [["千冶・刃", "不死途", "トリビー", "ヒアンシー"], ["千冶・刃", "黄泉", "サフェル", "ヒアンシー"], ["千冶・刃", "姫子・旅立ち", "ヴェルト", "フォフォ"]] },
    { name: "姫子・旅立ち", sourceId: "1510", path: "Mage", firstEidolon: "道と呼ばれるものこそ開拓", partyNames: [["姫子・旅立ち", "ロビン・夏空の歌", "ヴェルト", "フォフォ"], ["姫子・旅立ち", "サンデー", "ロビン・夏空の歌", "丹恒・騰荒"], ["姫子・旅立ち", "開拓者（記憶）", "ルアン・メェイ", "フォフォ"]] },
    { name: "ロビン・夏空の歌", sourceId: "1512", path: "Memory", firstEidolon: "群れを離れた夏の鳥", partyNames: [["ロビン・夏空の歌", "長夜月", "キュレネ", "ヒアンシー"], ["ロビン・夏空の歌", "不死途", "千冶・刃", "ヒアンシー"], ["ロビン・夏空の歌", "セイバー", "ギルガメッシュ", "フォフォ"]] },
  ] as const;

  it.each(added)("$name は第18バッチの精査済みとして、個別ガイド・出典の実名PT・確認済みIDの6段階星魂を返す", ({ name, sourceId, path, firstEidolon, partyNames }) => {
    const reference = characterReferenceFor("hsr", name);
    expect(reference).not.toBeNull();
    expect(reference?.status).toBe("reviewed");
    expect(reference?.batch).toBe(18);
    expect(HSR_RUNTIME_PATHS[name]).toBe(path);
    // 図鑑は名前から確認済み source ID を引いて凸・ガイドを解決する。推測した ID ではなく取得元スナップショット由来であること。
    expect(catalogSourceIdFor("hsr", name)).toBe(sourceId);
    expect(reference?.guide.profileId).toBe(`curated:batch18:hsr:${name}`);
    expect(reference?.guide.targets.length).toBeGreaterThan(0);
    expect(reference?.guide.targetContext).toContain("公開プロフィールへ加算しない");
    expect(reference?.partyRecommendations.options.map((option) => option.members.map((member) => member.name.ja))).toEqual(partyNames);
    reference?.partyRecommendations.options.forEach((option) => expect(option.targetChanges).toEqual([]));
    expect(reference?.constellations.dataStatus).toBe("curated");
    expect(reference?.constellations.effects.map((effect) => effect.level)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(reference?.constellations.effects[0]?.name.ja).toBe(firstEidolon);
    expect(reference?.constellations.activeTargetChanges).toEqual([]);
  });

  it("メインステータスの推奨が出典間で割れる値は目標に入れない（姫子・旅立ちの攻撃力、ロビン・夏空の歌のHP）", () => {
    expect(characterReferenceFor("hsr", "姫子・旅立ち")?.guide.targets.map((target) => target.key)).toEqual(["critRate", "speed", "critDmg"]);
    expect(characterReferenceFor("hsr", "ロビン・夏空の歌")?.guide.targets.map((target) => target.key)).toEqual(["speed", "critRate", "critDmg"]);
  });

  it("星魂の段階ごとの上昇スキルは公式ゲームデータどおり（姫子・旅立ちは3で必殺技・通常攻撃、5で戦闘スキル・天賦）", () => {
    const effects = characterReferenceFor("hsr", "姫子・旅立ち")!.constellations.effects;
    expect(effects[2]?.description.ja).toBe("必殺技のLv.+2、最大Lv.15まで。通常攻撃のLv.+1、最大Lv.10まで。");
    expect(effects[4]?.description.ja).toBe("戦闘スキルのLv.+2、最大Lv.15まで。天賦のLv.+2、最大Lv.15まで。");
  });

  it("図鑑と UID 照会で同じガイド・推奨PT・凸を返す（経路不一致0件）", () => {
    expect(routeMismatches()).toEqual([]);
  });
});
