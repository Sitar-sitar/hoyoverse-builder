import { describe, expect, it } from "vitest";
import { characterReferenceCatalog, characterReferenceFor } from "./characterReference";
import { routeMismatches } from "./auditRules";
import { HSR_RUNTIME_PATHS } from "./characterGuideCatalog";
import { catalogSourceIdFor } from "./characterConstellations";

describe("character reference catalog", () => {
  it("全253キャラクターをゲーム別に公開する（第20バッチで HSR アベンチュリン・波と戯れる夏を追加）", () => {
    const catalog = characterReferenceCatalog();
    expect(catalog.total).toBe(253);
    expect(catalog.reviewed).toBe(253);
    expect(catalog.pending).toBe(0);
    expect(catalog.games.hsr).toHaveLength(85);
    expect(catalog.games.genshin).toHaveLength(109);
    expect(catalog.games.zzz).toHaveLength(59);
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
    // ピュロイスは2出典とも6段目が「未公開／不明」のため登録を見送っている（docs/batch-20-research-notes.md）。
    const reference = characterReferenceFor("zzz", "ピュロイス");
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

describe("第20バッチ", () => {
  it("アベンチュリン・波と戯れる夏は確認済みID（hsr:1513）の個別ガイド・一致2案のPT・公式6段階星魂を返す", () => {
    const name = "アベンチュリン・波と戯れる夏";
    const reference = characterReferenceFor("hsr", name);
    expect(reference?.status).toBe("reviewed");
    expect(reference?.batch).toBe(20);
    expect(HSR_RUNTIME_PATHS[name]).toBe("Elation");
    expect(catalogSourceIdFor("hsr", name)).toBe("1513");
    // 基礎のアベンチュリン（hsr:1304・存護）とは別データのまま。
    expect(catalogSourceIdFor("hsr", "アベンチュリン")).toBe("1304");
    expect(characterReferenceFor("hsr", "アベンチュリン")?.batch).not.toBe(20);
    expect(reference?.guide.profileId).toBe(`curated:batch20:hsr:${name}`);
    // 厳選は Game8、目標・妥協は GameWith の理想/実用。愉悦キャリー編成の会心率90%（爻光の光円錐前提）は採らない。
    expect(reference?.guide.targets.map((target) => [target.key, target.targets])).toEqual([
      ["critRate", { "厳選": 100, "目標": 100, "妥協": 100 }],
      ["speed", { "厳選": 168, "目標": 160, "妥協": 154 }],
      ["critDmg", { "厳選": 140, "目標": 130, "妥協": 110 }],
    ]);
    expect(reference?.guide.targetContext).toContain("公開プロフィールへ加算しない");
    expect(reference?.partyRecommendations.options.map((option) => option.members.map((member) => member.name.ja))).toEqual([
      [name, "不死途", "千冶・刃", "ヒアンシー"],
      [name, "ロビン・夏空の歌", "爻光", "ヒアンシー"],
    ]);
    reference?.partyRecommendations.options.forEach((option) => expect(option.targetChanges).toEqual([]));
    const constellations = reference!.constellations;
    expect(constellations.dataStatus).toBe("curated");
    expect(constellations.effects.map((effect) => effect.level)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(constellations.effects[0]?.name).toEqual({ ja: "休日はチップの代わり", en: "A Holiday on the Line", "zh-CN": "抵作筹码的假日" });
    expect(constellations.effects[2]?.description.ja).toBe("戦闘スキルのLv.+2、最大Lv.15まで。天賦のLv.+2、最大Lv.15まで。愉悦スキルのLv.+1、最大Lv.15まで。");
    expect(constellations.effects.every((effect) => (effect.targetChanges ?? []).length === 0)).toBe(true);
    expect(constellations.activeTargetChanges).toEqual([]);
  });

  it.each([
    { name: "ニコ", sourceId: "1031", first: "加圧式強装弾", firstEn: "Supercharged Bomb", sixth: "侵蝕力場" },
    { name: "シーシィア", sourceId: "1521", first: "根無し草とエモノ", firstEn: "Traveler and Prey", sixth: "お家と六分街" },
  ])("$name の心象映画を確認済みID（zzz:$sourceId）で全6段返し、公開値へ加算しない", ({ name, sourceId, first, firstEn, sixth }) => {
    expect(catalogSourceIdFor("zzz", name)).toBe(sourceId);
    const constellations = characterReferenceFor("zzz", name)!.constellations;
    expect(constellations.dataStatus).toBe("curated");
    expect(constellations.acquiredRank).toBe(0);
    expect(constellations.effects.map((effect) => effect.level)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(constellations.effects[0]?.name.ja).toBe(first);
    expect(constellations.effects[0]?.name.en).toBe(firstEn);
    expect(constellations.effects[5]?.name.ja).toBe(sixth);
    expect(constellations.effects.every((effect) => (effect.targetChanges ?? []).length === 0)).toBe(true);
    expect(constellations.activeTargetChanges).toEqual([]);
  });

  it("本文が揃わない凸は登録しない（アーロイ＝凸なし、コロンビーナ＝正規IDが取得元に無い、ピュロイス＝6段目未公開）", () => {
    for (const [game, name] of [["genshin", "アーロイ"], ["genshin", "コロンビーナ"], ["zzz", "ピュロイス"]] as const) {
      const constellations = characterReferenceFor(game, name)!.constellations;
      expect(constellations.dataStatus).toBe("preparing");
      expect(constellations.effects).toEqual([]);
    }
  });
});
