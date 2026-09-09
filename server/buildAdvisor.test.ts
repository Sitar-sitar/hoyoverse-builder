import { describe, expect, it, vi } from "vitest";
import { equipmentActionsFor, guideFor, lookupUidBuild, lookupWithFallback, UidResponseCache, normalizeMihomoPayload, priorityRecommendations, withGuideMetadata } from "./buildAdvisor";
import { normalizeEnkaPayload } from "./enkaFallback";
import { CHARACTER_GUIDE_CATALOG, HSR_RUNTIME_PATHS, ZZZ_RUNTIME_PROFESSIONS } from "./characterGuideCatalog";
import { CHARACTER_GUIDE_METADATA, guideMetadataFor } from "./characterGuideMetadata";
import { expectedProfileFor } from "./expectedGuideProfiles";
import { generatedGenshinGuide, generatedZzzGuide } from "./individualGuides";

// StarRailRes properties.json の実データ抜粋（field/ratio/percent の意味は本家スキーマに準拠）。
const HSR_TEST_PROPERTIES: Record<string, Record<string, unknown>> = {
  HPDelta: { type: "HPDelta", name: "HP", field: "hp", ratio: false, percent: false, order: 39 },
  HPAddedRatio: { type: "HPAddedRatio", name: "HP", field: "hp", ratio: true, percent: true, order: 40 },
  AttackDelta: { type: "AttackDelta", name: "攻撃力", field: "atk", ratio: false, percent: false, order: 42 },
  AttackAddedRatio: { type: "AttackAddedRatio", name: "攻撃力", field: "atk", ratio: true, percent: true, order: 43 },
  DefenceDelta: { type: "DefenceDelta", name: "防御力", field: "def", ratio: false, percent: false, order: 45 },
  DefenceAddedRatio: { type: "DefenceAddedRatio", name: "防御力", field: "def", ratio: true, percent: true, order: 46 },
  SpeedDelta: { type: "SpeedDelta", name: "速度", field: "spd", ratio: false, percent: false, order: 57 },
  SpeedAddedRatio: { type: "SpeedAddedRatio", name: "速度", field: "spd", ratio: true, percent: true, order: 100 },
  CriticalChanceBase: { type: "CriticalChanceBase", name: "会心率", field: "crit_rate", ratio: false, percent: true, order: 15 },
  // field="" の集計済み表示専用タイプ（StarRailRes実データでは光円錐の_flat.propsに0埋めで含まれることがある）。
  CriticalChance: { type: "CriticalChance", name: "会心率", field: "", ratio: false, percent: false, order: 5 },
  CriticalDamageBase: { type: "CriticalDamageBase", name: "会心ダメージ", field: "crit_dmg", ratio: false, percent: true, order: 16 },
  BreakDamageAddedRatioBase: { type: "BreakDamageAddedRatioBase", name: "撃破特効", field: "break_dmg", ratio: false, percent: true, order: 8 },
  StatusProbabilityBase: { type: "StatusProbabilityBase", name: "効果命中", field: "effect_hit", ratio: false, percent: true, order: 20 },
  StatusResistanceBase: { type: "StatusResistanceBase", name: "効果抵抗", field: "effect_res", ratio: false, percent: true, order: 21 },
  SPRatioBase: { type: "SPRatioBase", name: "EP回復効率", field: "sp_rate", ratio: false, percent: true, order: 19 },
  ElationDamageAddedRatioBase: { type: "ElationDamageAddedRatioBase", name: "愉悦度", field: "elation_dmg", ratio: false, percent: true, order: 23 },
};

describe("MiHoMoデータ正規化", () => {
  it("公開キャラクターの装備と目標達成度を表示モデルに変換する", () => {
    const data = normalizeMihomoPayload({
      player: { uid: "800000001", nickname: "テスト開拓者", level: 70 },
      characters: [{
        id: "1310", name: "ホタル", level: 80, rank: 1,
        portrait: "https://example.com/firefly.png", path: { name: "壊滅" }, element: { name: "炎", color: "#dc553a" },
        light_cone: { name: "夢が帰り着く場所", level: 80, rank: 1, icon: "https://example.com/cone.png" },
        properties: [
          { field: "speed", name: "速度", value: 154, display: "154", percent: false },
          { field: "break_dmg", name: "撃破特効", value: 2.4, display: "240.0%", percent: true },
          { field: "attack_added_ratio", name: "攻撃力%", value: 0.5, display: "50.0%", percent: true },
        ],
        relics: [{ id: "1", name: "鉄騎", set_name: "鉄騎の執行者", level: 15, icon: "https://example.com/relic.png", main_affix: { name: "攻撃力%", value: 0.4, display: "43.2%", percent: true }, sub_affix: [] }],
      }],
    });

    expect(data.player.name).toBe("テスト開拓者");
    expect(data.characters[0]?.relics).toHaveLength(1);
    expect(data.characters[0]?.guide.relicSet).toContain("鉄騎");
    expect(data.characters[0]?.comparisons.find((item) => item.key === "speed")?.achieved["目標"]).toBe(true);
    expect(data.characters[0]?.comparisons.find((item) => item.key === "breakEffect")?.current).toBe(240);
    expect(data.characters[0]?.equipmentActions.find((action) => action.recommendationKey === "breakEffect")).toMatchObject({ slot: "連結縄", action: "主ステータスを変更" });
  });

  it("MiHoMoが絶対値・割合ステータスへ同一nameを返す場合（StarRailRes properties.json実データ相当）、現在のステータス欄でラベルが重複しない", () => {
    // 実データ: AttackAddedRatio/AttackDelta、HPAddedRatio/HPDeltaはいずれもMiHoMoの`name`が
    // 絶対値・割合で同一（例:「攻撃力」「HP」）であり、`percent`フラグのみが両者を区別する。
    const data = normalizeMihomoPayload({
      player: { uid: "800000009", nickname: "テスト開拓者" },
      characters: [{
        id: "1310", name: "ホタル", level: 80, rank: 1, path: { name: "壊滅" }, element: { name: "炎" },
        properties: [
          { field: "hp", name: "HP", value: 1800, display: "1800", percent: false },
          { field: "hp", name: "HP", value: 0.082, display: "8.2%", percent: true },
          { field: "atk", name: "攻撃力", value: 390, display: "390", percent: false },
          { field: "atk", name: "攻撃力", value: 0.233, display: "23.3%", percent: true },
          { field: "crit_rate", name: "会心率", value: 0.65, display: "65.0%", percent: true },
        ],
        relics: [],
      }],
    });

    const allStats = data.characters[0]?.allStats ?? [];
    expect(allStats.filter((stat) => stat.name === "HP")).toEqual([{ name: "HP", display: "1800", icon: null }]);
    expect(allStats.filter((stat) => stat.name === "HP%")).toEqual([{ name: "HP%", display: "8.2%", icon: null }]);
    expect(allStats.filter((stat) => stat.name === "攻撃力")).toEqual([{ name: "攻撃力", display: "390", icon: null }]);
    expect(allStats.filter((stat) => stat.name === "攻撃力%")).toEqual([{ name: "攻撃力%", display: "23.3%", icon: null }]);
    // 重複のない単独ステータス（会心率）は不要な%付与をしない。
    expect(allStats.filter((stat) => stat.name === "会心率")).toEqual([{ name: "会心率", display: "65.0%", icon: null }]);
  });

  it("主要キャラクターには個別の遺物推奨定義を適用する", () => {
    const data = normalizeMihomoPayload({
      player: { uid: "800000002", nickname: "テスト開拓者" },
      characters: [{
        id: "1308", name: "黄泉", path: { name: "虚無" }, element: { name: "雷" }, properties: [], relics: [],
      }],
    });

    expect(data.characters[0]?.guide.relicSet).toBe("死水に潜る先駆者 ×4");
    expect(data.characters[0]?.guide.mainStats.find((stat) => stat.slot === "胴体")?.value).toContain("会心率");
  });

  it("第1バッチHSR4名は最新の個別目標を返し、ロール共通値へ戻らない", () => {
    const guides = Object.fromEntries([
      ["ホタル", guideFor("ホタル", "壊滅")],
      ["アグライア", guideFor("アグライア", "記憶")],
      ["アナイクス", guideFor("アナイクス", "知恵")],
      ["キャストリス", guideFor("キャストリス", "記憶")],
    ]);

    expect(guides["ホタル"]?.targets.map((target) => target.key)).toEqual(["breakEffect", "speed", "attackPercent"]);
    expect(guides["アグライア"]?.targets.map((target) => target.key)).toEqual(["critRate", "critDmg", "speed"]);
    expect(guides["アナイクス"]?.targets.map((target) => target.key)).toEqual(["critRate", "critDmg", "speed", "attack"]);
    expect(guides["アナイクス"]?.targets.find((target) => target.key === "critRate")?.targets["目標"]).toBe(80);
    expect(guides["キャストリス"]?.mainStats.find((stat) => stat.slot === "脚部")?.value).toBe("HP%");
    Object.values(guides).forEach((guide) => {
      expect(guide?.dataAsOf).toBe("2026-08-25");
      expect(guide?.sourceLabel).toContain("Game8");
      expect(guide?.targetContext).toBeTruthy();
    });
  });

  it("HSR取得元の開拓者名称マクロをID別実装ラベルへ正規化する", () => {
    const data = normalizeMihomoPayload({
      player: { uid: "800000004", nickname: "テスト開拓者" },
      characters: [{ id: "8005", name: "{NICKNAME}", portrait: "https://example.com/trailblazer.png", path: { name: "調和" }, element: { name: "虚数" }, properties: [], relics: [] }],
    });

    expect(data.characters[0]).toMatchObject({
      name: "開拓者（虚数・調和）",
      identity: { key: "hsr:8005", variantOf: "開拓者", resolution: "curated-id-map" },
      portrait: "https://example.com/trailblazer.png",
    });
    expect(data.characters[0]?.guide.targetContext).toContain("開拓者（虚数・調和）");
  });

  it("未監査キャラクターには汎用プロファイルを維持し、個別更新済みの丹恒には個別データ時点を付与する", () => {
    const data = normalizeMihomoPayload({
      player: { uid: "800000003", nickname: "テスト開拓者" },
      characters: [
        { id: "1002", name: "丹恒", path: { name: "巡狩" }, element: { name: "風" }, properties: [], relics: [] },
        { id: "1211", name: "白露", path: { name: "豊穣" }, element: { name: "雷" }, properties: [], relics: [] },
      ],
    });
    const byName = Object.fromEntries(data.characters.map((character) => [character.name, character]));

    expect(byName["丹恒"]?.guide.targetContext).toContain("丹恒専用");
    expect(byName["白露"]?.comparisons.map((comparison) => comparison.key)).toEqual(["speed", "effectRes", "hpPercent"]);
    expect(byName["丹恒"]?.guide.dataAsOf).toBe("2026-08-11");
    expect(byName["白露"]?.guide.sourceLabel).toContain("KQM");
  });
});

describe("UIDキャッシュ", () => {
  it("TTLの有効期限内だけ値を返し、期限後に破棄する", () => {
    const cache = new UidResponseCache<string>();
    cache.set("800000001", "cached", 1_000, 100);
    expect(cache.get("800000001", 1_099)).toBe("cached");
    expect(cache.get("800000001", 1_100)).toBeNull();
  });

  // get() は期限切れを読んだ時点で削除するため、掃除の有無は「読み取り前の保持件数」でしか観測できない。
  it("閾値を超えたset時に期限切れエントリを掃除し、有効エントリだけを残す", () => {
    const cache = new UidResponseCache<string>();
    for (let i = 0; i < 300; i += 1) cache.set(`expired-${i}`, `v${i}`, 1, 0);
    cache.set("alive", "kept", 60_000, 2);

    expect(cache.size).toBe(1);
    expect(cache.get("alive", 3)).toBe("kept");
    expect(cache.get("expired-0", 3)).toBeNull();
  });

  it("閾値以下では掃除せず、有効エントリを保持し続ける", () => {
    const cache = new UidResponseCache<string>();
    for (let i = 0; i < 10; i += 1) cache.set(`uid-${i}`, `v${i}`, 60_000, 0);

    expect(cache.size).toBe(10);
  });

  it("掃除の期限境界は expiresAt <= now で、未期限のエントリは消さない", () => {
    const cache = new UidResponseCache<string>();
    for (let i = 0; i < 300; i += 1) cache.set(`old-${i}`, `v${i}`, 10, 0);
    cache.set("edge", "kept", 10, 10);

    expect(cache.size).toBe(1);
    expect(cache.get("edge", 15)).toBe("kept");
  });
});

describe("MiHoMoからEnkaへのフォールバック", () => {
  it("主系統の取得に失敗した場合、代替系統の正常な結果を返す", async () => {
    const result = await lookupWithFallback(
      async () => { throw new Error("MiHoMo 502"); },
      async () => ({ source: "Enka", characterCount: 8, firstCharacter: "遠坂凛" }),
    );

    expect(result).toEqual({ source: "Enka", characterCount: 8, firstCharacter: "遠坂凛" });
  });

  it("UID照会の実経路でMiHoMo障害後にEnkaのキャラクター情報を返す", async () => {
    vi.stubGlobal("fetch", vi.fn(async (input: string | URL) => {
      const url = String(input);
      if (url.includes("api.mihomo.me")) return new Response("<!DOCTYPE html><title>502</title>", { status: 502, headers: { "content-type": "text/html" } });
      if (url.includes("enka.network/api/hsr/uid")) return new Response(JSON.stringify({ uid: "999000001", detailInfo: { nickname: "Fallback", avatarDetailList: [{ avatarId: 1310, level: 80, promotion: 0, equipment: { tid: 23061, level: 80, rank: 1 }, relicList: [{ tid: 1, type: 1, level: 15, _flat: { setID: 108, props: [{ type: "SpeedDelta", value: 8.9 }] } }] }] } }), { headers: { "content-type": "application/json" } });
      if (url.endsWith("characters.json")) return new Response(JSON.stringify({ "1310": { name: "ホタル", element: "Fire", path: "Warrior" } }), { headers: { "content-type": "application/json" } });
      if (url.endsWith("light_cones.json")) return new Response(JSON.stringify({ "23061": { name: "テスト光円錐" } }), { headers: { "content-type": "application/json" } });
      if (url.endsWith("relic_sets.json")) return new Response(JSON.stringify({ "108": { name: "テスト遺物セット" } }), { headers: { "content-type": "application/json" } });
      if (url.endsWith("character_promotions.json")) return new Response(JSON.stringify({ "1310": { values: [{ hp: { base: 900, step: 56 }, atk: { base: 55, step: 3 }, def: { base: 50, step: 3 }, spd: { base: 104, step: 0 }, crit_rate: { base: 0.05 }, crit_dmg: { base: 0.5 } }] } }), { headers: { "content-type": "application/json" } });
      if (url.endsWith("character_skill_trees.json")) return new Response(JSON.stringify({ "0": {} }), { headers: { "content-type": "application/json" } });
      if (url.endsWith("light_cone_promotions.json")) return new Response(JSON.stringify({ "23061": { values: [{ hp: { base: 40, step: 6 }, atk: { base: 15, step: 2 }, def: { base: 12, step: 2 } }] } }), { headers: { "content-type": "application/json" } });
      if (url.endsWith("light_cone_ranks.json")) return new Response(JSON.stringify({ "23061": { properties: [[], [], [], [], []] } }), { headers: { "content-type": "application/json" } });
      if (url.endsWith("properties.json")) return new Response(JSON.stringify(HSR_TEST_PROPERTIES), { headers: { "content-type": "application/json" } });
      return new Response(JSON.stringify({}), { headers: { "content-type": "application/json" } });
    }));

    try {
      const result = await lookupUidBuild("999000001");
      expect(result.dataSource).toBe("Enka");
      expect(result.characters[0]).toMatchObject({ name: "ホタル", path: "壊滅", element: "炎" });
      expect(result.characters[0]?.lightCone?.name).toBe("テスト光円錐");
      expect(result.characters[0]?.relics[0]?.setName).toBe("テスト遺物セット");
      expect(result.characters[0]?.statsStatus).toBe("final");
      expect(result.characters[0]?.comparisons.find((item) => item.label === "速度")?.current).toBe(112.9);
    } finally {
      vi.unstubAllGlobals();
    }
  });
});

describe("Enkaフォールバック正規化", () => {
  it("生データの公開キャラクターと遺物を表示モデルへ変換する", () => {
    const data = normalizeEnkaPayload({
      uid: "806071233",
      detailInfo: {
        nickname: "したーる", level: 70,
        avatarDetailList: [{ avatarId: 1310, level: 80, rank: 1, equipment: { tid: 23061, level: 80, rank: 1 }, relicList: [{ tid: 61081, type: 1, level: 15, _flat: { setID: 108, props: [{ type: "HPDelta", value: 705.6 }, { type: "SpeedDelta", value: 8.9 }, { type: "CriticalChanceBase", value: 0.02916 }, { type: "CriticalChance", value: 0 }] } }] }, { avatarId: 1506, level: 80, rank: 0, relicList: [] }],
      },
    }, {
      characters: { "1310": { name: "ホタル", element: "Fire", path: "Warrior" }, "1506": { name: "銀狼LV.999", element: "Imaginary", path: "Elation" } },
      lightCones: { "23061": { name: "Flickering Stars" } },
      relicSets: { "108": { name: "星の如く輝く天才" } },
      characterPromotions: { "1310": { values: [{ hp: { base: 900, step: 56 }, atk: { base: 55, step: 3 }, def: { base: 50, step: 3 }, spd: { base: 104, step: 0 }, crit_rate: { base: 0.05 }, crit_dmg: { base: 0.5 } }] } },
      characterSkillTrees: {},
      lightConePromotions: { "23061": { values: [{ hp: { base: 40, step: 6 }, atk: { base: 15, step: 2 }, def: { base: 12, step: 2 } }] } },
      lightConeRanks: { "23061": { properties: [[], [], [], [], []] } },
      properties: HSR_TEST_PROPERTIES,
    });

    expect(data.player.name).toBe("したーる");
    expect(data.characters[0]?.name).toBe("ホタル");
    expect(data.characters[0]?.path).toBe("壊滅");
    expect(data.characters[0]?.lightCone?.name).toBe("Flickering Stars");
    expect(data.characters[0]?.relics[0]?.setName).toBe("星の如く輝く天才");
    expect(data.characters[0]?.relics[0]?.main?.display).toBe("706");
    expect(data.characters[0]?.statsStatus).toBe("final");
    expect(data.characters[0]?.allStats.find((stat) => stat.name === "会心率")?.display).toBe("7.9%");
    // field="" の集計済み表示専用タイプ（実データで観測された `CriticalChance:0` 等）は、個別加算値として
    // 二重表示・0埋め表示されてはならない（本番検証で発見した回帰）。
    expect(data.characters[0]?.allStats.filter((stat) => stat.name === "会心率")).toHaveLength(1);
    expect(data.characters[0]?.comparisons.map((item) => item.key)).toEqual(["breakEffect", "speed", "attackPercent"]);
    expect(data.characters[0]?.guide.targetContext).toContain("ホタル専用");
    expect(data.characters[0]?.comparisons.find((item) => item.label === "速度")?.current).toBe(112.9);
    expect(data.characters[1]).toMatchObject({ id: "1506", name: "銀狼Lv.999", element: "虚数", path: "歓楽", identity: { key: "hsr:1506", variantOf: "銀狼", resolution: "curated-id-map" } });
    expect(data.characters[1]?.guide.targetContext).toContain("銀狼Lv.999");
    expect(data.characters[1]?.guide.targetContext).not.toContain("銀狼専用");
    // 静的なキャラクター基礎値（character_promotions）が欠落している場合、名称等は解決できる範囲で表示しつつ、最終値の算出は保留する。
    expect(data.characters[1]?.statsStatus).toBe("unavailable");
    expect(data.characters[1]?.allStats).toEqual([]);
    expect(data.characters[1]?.comparisons.every((item) => item.current === null)).toBe(true);

    const unresolved = normalizeEnkaPayload({ detailInfo: { avatarDetailList: [{ avatarId: 1310, level: 80, equipment: { tid: 99999, level: 80 }, relicList: [{ tid: 1, type: 1, level: 0, _flat: { setID: 99999, props: [] } }] }] } }, { characters: { "1310": { name: "ホタル", element: "Fire", path: "Warrior" } }, lightCones: {}, relicSets: {}, characterPromotions: {}, characterSkillTrees: {}, lightConePromotions: {}, lightConeRanks: {}, properties: {} });
    expect(unresolved.characters[0]?.lightCone?.name).toBe("未解決（ID: 99999）");
    expect(unresolved.characters[0]?.relics[0]?.setName).toBe("未解決（ID: 99999）");
    expect(unresolved.characters[0]?.statsStatus).toBe("unavailable");
  });

  it("キャラクターのレベル別基礎値・軌跡の要求レベル・遺物の割合と固定値を正しく合成する（hsr:1502 実データ相当）", () => {
    const staticData = {
      characters: { "1502": { name: "爻光", element: "Physical", path: "Elation" } },
      lightCones: {},
      relicSets: {},
      characterPromotions: { "1502": { values: [{ hp: { base: 574.464, step: 8.448 }, atk: { base: 215.424, step: 3.168 }, def: { base: 302.94, step: 4.455 }, spd: { base: 101, step: 0 }, crit_rate: { base: 0.05, step: 0 }, crit_dmg: { base: 0.5, step: 0 } }, { hp: { base: 574.464, step: 8.448 }, atk: { base: 215.424, step: 3.168 }, def: { base: 302.94, step: 4.455 }, spd: { base: 101, step: 0 }, crit_rate: { base: 0.05, step: 0 }, crit_dmg: { base: 0.5, step: 0 } }, { hp: { base: 574.464, step: 8.448 }, atk: { base: 215.424, step: 3.168 }, def: { base: 302.94, step: 4.455 }, spd: { base: 101, step: 0 }, crit_rate: { base: 0.05, step: 0 }, crit_dmg: { base: 0.5, step: 0 } }, { hp: { base: 574.464, step: 8.448 }, atk: { base: 215.424, step: 3.168 }, def: { base: 302.94, step: 4.455 }, spd: { base: 101, step: 0 }, crit_rate: { base: 0.05, step: 0 }, crit_dmg: { base: 0.5, step: 0 } }, { hp: { base: 574.464, step: 8.448 }, atk: { base: 215.424, step: 3.168 }, def: { base: 302.94, step: 4.455 }, spd: { base: 101, step: 0 }, crit_rate: { base: 0.05, step: 0 }, crit_dmg: { base: 0.5, step: 0 } }, { hp: { base: 574.464, step: 8.448 }, atk: { base: 215.424, step: 3.168 }, def: { base: 302.94, step: 4.455 }, spd: { base: 101, step: 0 }, crit_rate: { base: 0.05, step: 0 }, crit_dmg: { base: 0.5, step: 0 } }, { hp: { base: 574.464, step: 8.448 }, atk: { base: 215.424, step: 3.168 }, def: { base: 302.94, step: 4.455 }, spd: { base: 101, step: 0 }, crit_rate: { base: 0.05, step: 0 }, crit_dmg: { base: 0.5, step: 0 } }] } },
      // StarRailRes character_skill_trees.json（1502）実データより：Point09/Point18 は共に max_level=1 の会心率軌跡。
      characterSkillTrees: {
        "1502201": { levels: [{ promotion: 0, level: 1, properties: [{ type: "CriticalChanceBase", value: 0.027 }] }] },
        "1502210": { levels: [{ promotion: 0, level: 80, properties: [{ type: "CriticalChanceBase", value: 0.053 }] }] },
      },
      lightConePromotions: {},
      lightConeRanks: {},
      properties: HSR_TEST_PROPERTIES,
    };

    // レベル80: 要求レベル80の軌跡（会心率+5.3%）も含めて解放済みとして加算する。
    const atLevel80 = normalizeEnkaPayload({ detailInfo: { avatarDetailList: [{ avatarId: 1502, level: 80, promotion: 6, rank: 0, skillTreeList: [{ pointId: 1502201, level: 1 }, { pointId: 1502210, level: 1 }], relicList: [] }] } }, staticData);
    const character80 = atLevel80.characters[0]!;
    expect(character80.statsStatus).toBe("final");
    // hp = 574.464 + 8.448 * 79 ≒ 1241.86 / attack ≒ 465.70 / defense ≒ 654.89 / speed = 101
    expect(character80.allStats.find((stat) => stat.name === "HP")?.display).toBe("1242");
    expect(character80.allStats.find((stat) => stat.name === "攻撃力")?.display).toBe("466");
    expect(character80.allStats.find((stat) => stat.name === "防御力")?.display).toBe("655");
    expect(character80.allStats.find((stat) => stat.name === "速度")?.display).toBe("101.0");
    // 会心率 = 基準5% + Point09(2.7%) + Point18(5.3%、要求Lv80) = 13.0%
    expect(character80.allStats.find((stat) => stat.name === "会心率")?.display).toBe("13.0%");

    // レベル79: 要求レベル80のPoint18は未解放のため、会心率へ加算されない（旧実装のレベル比較バグの再発防止）。
    const atLevel79 = normalizeEnkaPayload({ detailInfo: { avatarDetailList: [{ avatarId: 1502, level: 79, promotion: 6, rank: 0, skillTreeList: [{ pointId: 1502201, level: 1 }, { pointId: 1502210, level: 1 }], relicList: [] }] } }, staticData);
    const character79 = atLevel79.characters[0]!;
    expect(character79.statsStatus).toBe("final");
    expect(character79.allStats.find((stat) => stat.name === "会心率")?.display).toBe("7.7%");
  });
});

describe("全キャラクターガイドの網羅性", () => {
  it("収集済みの全キャラクター一覧に個別プロファイル・基準日・参照範囲を割り当てる", () => {
    const hsrGuides = CHARACTER_GUIDE_CATALOG.hsr.map((name) => guideFor(name, HSR_RUNTIME_PATHS[name] ?? ""));
    const genshinGuides = CHARACTER_GUIDE_CATALOG.genshin.map((name) => withGuideMetadata("genshin", generatedGenshinGuide(name), name));
    const zzzGuides = CHARACTER_GUIDE_CATALOG.zzz.map((name) => withGuideMetadata("zzz", generatedZzzGuide(name, ZZZ_RUNTIME_PROFESSIONS[name] ?? ""), name));

    expect(CHARACTER_GUIDE_CATALOG.dataAsOf).toBe("2026-08-18");
    expect(Object.keys(HSR_RUNTIME_PATHS)).toHaveLength(CHARACTER_GUIDE_CATALOG.hsr.length);
    expect(Object.keys(ZZZ_RUNTIME_PROFESSIONS)).toHaveLength(CHARACTER_GUIDE_CATALOG.zzz.length);
    expect(hsrGuides).toHaveLength(CHARACTER_GUIDE_CATALOG.hsr.length);
    expect(genshinGuides).toHaveLength(CHARACTER_GUIDE_CATALOG.genshin.length);
    expect(zzzGuides).toHaveLength(CHARACTER_GUIDE_CATALOG.zzz.length);
    const guideRecords = [
      ...CHARACTER_GUIDE_CATALOG.hsr.map((name, index) => ({ game: "hsr" as const, name, guide: hsrGuides[index]! })),
      ...CHARACTER_GUIDE_CATALOG.genshin.map((name, index) => ({ game: "genshin" as const, name, guide: genshinGuides[index]! })),
      ...CHARACTER_GUIDE_CATALOG.zzz.map((name, index) => ({ game: "zzz" as const, name, guide: zzzGuides[index]! })),
    ];
    guideRecords.forEach(({ game, name, guide }) => {
      const metadata = guideMetadataFor(game, name);
      expect(guide.targets.length > 0 || guide.targetContext.includes("数値閾値") || guide.targetContext.includes("推測で登録しない")).toBe(true);
      expect(guide.profileId).toBeTruthy();
      expect(guide.dataAsOf).toBe(metadata.dataAsOf);
      expect(guide.updatedAt).toBe(metadata.updatedAt);
      expect(guide.sourceLabel).toBeTruthy();
      expect(guide.targetContext).not.toContain("未登録");
    });
    (Object.keys(CHARACTER_GUIDE_METADATA) as Array<keyof typeof CHARACTER_GUIDE_METADATA>).forEach((game) => {
      expect(Object.keys(CHARACTER_GUIDE_METADATA[game])).toHaveLength(CHARACTER_GUIDE_CATALOG[game].length);
      CHARACTER_GUIDE_CATALOG[game].forEach((name) => {
        expect(CHARACTER_GUIDE_METADATA[game][name]).toMatchObject({ profileId: expect.any(String), dataAsOf: expect.stringMatching(/^2026-(05-31|06-05|07-31|08-(11|13|14|18|19|21|24|25|26|27)|09-(01|07|08))$/), updatedAt: expect.stringMatching(/^2026-(08-(18|25|26|27)|09-(07|08))$/) });
      });
    });
    CHARACTER_GUIDE_CATALOG.hsr.forEach((name, index) => expect(hsrGuides[index]?.profileId).toBe(expectedProfileFor("hsr", name)));
    CHARACTER_GUIDE_CATALOG.genshin.forEach((name, index) => expect(genshinGuides[index]?.profileId).toBe(expectedProfileFor("genshin", name)));
    CHARACTER_GUIDE_CATALOG.zzz.forEach((name, index) => expect(zzzGuides[index]?.profileId).toBe(expectedProfileFor("zzz", name)));
  });
});

describe("未達ステータスの優先強化提案", () => {
  it("目標水準までの相対不足が大きい項目を優先し、未取得値は提案から除外する", () => {
    const recommendations = priorityRecommendations([
      { key: "critRate", label: "会心率", unit: "%", current: 55, currentDisplay: "55.0%", targets: { "厳選": 85, "目標": 75, "妥協": 65 }, achieved: { "厳選": false, "目標": false, "妥協": false } },
      { key: "speed", label: "速度", unit: "", current: 128, currentDisplay: "128", targets: { "厳選": 160, "目標": 134, "妥協": 120 }, achieved: { "厳選": false, "目標": false, "妥協": true } },
      { key: "attack", label: "攻撃力", unit: "", current: null, currentDisplay: "未取得", targets: { "厳選": 3000, "目標": 2800, "妥協": 2500 }, achieved: { "厳選": null, "目標": null, "妥協": null } },
    ]);
    expect(recommendations).toHaveLength(2);
    expect(recommendations[0]).toMatchObject({ key: "critRate", priority: "最優先", deficit: 20 });
    expect(recommendations[1]).toMatchObject({ key: "speed", priority: "次点", deficit: 6 });
  });

  it("装備部位の主ステータス変更とサブステータス厳選を、現在の装備に応じて分けて提案する", () => {
    const guide = guideFor("黄泉", "虚無");
    const actions = equipmentActionsFor(guide, [
      { name: "遺物 3", slot: "胴体", main: { name: "HP%", display: "43.2%" } },
      { name: "遺物 4", slot: "脚部", main: { name: "速度", display: "25" } },
    ], [
      { key: "critDmg", label: "会心ダメ", unit: "%", current: 120, target: 150, deficit: 30, priority: "優先", rationale: "不足" },
      { key: "speed", label: "速度", unit: "", current: 120, target: 134, deficit: 14, priority: "優先", rationale: "不足" },
    ]);

    expect(actions[0]).toMatchObject({ slot: "胴体", action: "主ステータスを変更", desiredStat: "会心ダメ" });
    expect(actions[1]).toMatchObject({ slot: "脚部", action: "サブステータスを厳選", desiredStat: "速度" });
  });
});
