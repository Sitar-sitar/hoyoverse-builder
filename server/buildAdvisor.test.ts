import { describe, expect, it, vi } from "vitest";
import { equipmentActionsFor, guideFor, lookupUidBuild, lookupWithFallback, UidResponseCache, normalizeMihomoPayload, priorityRecommendations, withGuideMetadata, type GuideDefinition, type PriorityRecommendation, type StatKey } from "./buildAdvisor";
import { normalizeEnkaPayload } from "./enkaFallback";
import { CHARACTER_GUIDE_CATALOG, HSR_RUNTIME_PATHS, ZZZ_RUNTIME_PROFESSIONS } from "./characterGuideCatalog";
import { CHARACTER_GUIDE_METADATA, guideMetadataFor } from "./characterGuideMetadata";
import { expectedProfileFor } from "./expectedGuideProfiles";
import { generatedGenshinGuide, generatedZzzGuide } from "./individualGuides";
import { genshinGuide, zzzGuide } from "./gameProviders";

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
        // MiHoMo は戦闘外の最終値を statistics で返す（properties は加算分のみ）。
        statistics: [
          { field: "spd", name: "速度", value: 154, display: "154", percent: false },
          { field: "break_dmg", name: "撃破特効", value: 2.4, display: "240.0%", percent: true },
        ],
        properties: [
          { field: "spd", name: "速度", value: 24, display: "24", percent: false },
          { field: "break_dmg", name: "撃破特効", value: 2.4, display: "240.0%", percent: true },
          { field: "atk", name: "攻撃力", value: 0.5, display: "50.0%", percent: true },
        ],
        relics: [{ id: "1", name: "鉄騎", set_name: "鉄騎の執行者", level: 15, icon: "https://example.com/relic.png", main_affix: { name: "攻撃力%", value: 0.4, display: "43.2%", percent: true }, sub_affix: [] }],
      }],
    });

    expect(data.player.name).toBe("テスト開拓者");
    expect(data.characters[0]?.relics).toHaveLength(1);
    expect(data.characters[0]?.guide.relicSet).toContain("鉄騎");
    expect(data.characters[0]?.statsStatus).toBe("final");
    expect(data.characters[0]?.comparisons.find((item) => item.key === "speed")?.achieved["目標"]).toBe(true);
    expect(data.characters[0]?.comparisons.find((item) => item.key === "breakEffect")?.current).toBe(240);
    expect(data.characters[0]?.equipmentActions.find((action) => action.recommendationKey === "breakEffect")).toMatchObject({ slot: "連結縄", action: "主ステータスを変更" });
  });

  // 再現テスト（2026-09-12）: 初期実装は加算分だけの properties を表示・比較に使っており、
  // 速度・会心・攻撃力が実際の最終値より低く出ていた（本番の緋英で速度34、最終値は138）。
  const hiei = (overrides: Record<string, unknown> = {}) => ({
    id: "1415", name: "緋英", level: 80, rank: 0, path: { name: "愉悦" }, element: { name: "炎" },
    attributes: [
      { field: "hp", name: "基礎HP", value: 2000, percent: false },
      { field: "atk", name: "基礎攻撃力", value: 1372, percent: false },
      { field: "def", name: "基礎防御力", value: 800, percent: false },
      { field: "spd", name: "速度", value: 104, percent: false },
      { field: "crit_rate", name: "会心率", value: 0.05, percent: true },
      { field: "crit_dmg", name: "会心ダメージ", value: 0.5, percent: true },
    ],
    additions: [
      { field: "hp", name: "HP", value: 950, percent: false },
      { field: "atk", name: "攻撃力", value: 711, percent: false },
      { field: "def", name: "防御力", value: 160, percent: false },
      { field: "spd", name: "速度", value: 34, percent: false },
      { field: "crit_rate", name: "会心率", value: 0.562, percent: true },
      { field: "crit_dmg", name: "会心ダメージ", value: 1.53, percent: true },
    ],
    statistics: [
      { field: "hp", name: "基礎HP", value: 2950, display: "2950", percent: false },
      { field: "atk", name: "基礎攻撃力", value: 2083, display: "2083", percent: false },
      { field: "def", name: "基礎防御力", value: 960, display: "960", percent: false },
      { field: "spd", name: "速度", value: 138, display: "138", percent: false },
      { field: "crit_rate", name: "会心率", value: 0.612, display: "61.2%", percent: true },
      { field: "crit_dmg", name: "会心ダメージ", value: 2.03, display: "203.0%", percent: true },
    ],
    properties: [
      { field: "spd", name: "速度", value: 34, display: "34", percent: false },
      { field: "atk", name: "攻撃力", value: 0.63, display: "63.0%", percent: true },
      { field: "hp", name: "HP", value: 0.12, display: "12.0%", percent: true },
      { field: "def", name: "防御力", value: 0.2, display: "20.0%", percent: true },
    ],
    relics: [],
    ...overrides,
  });

  const profileOf = (character: Record<string, unknown>) => normalizeMihomoPayload({ player: { uid: "800000010" }, characters: [character] }).characters[0];
  const currentOf = (character: Record<string, unknown>, key: string) => profileOf(character)?.comparisons.find((item) => item.key === key)?.current ?? null;

  it("表示と比較に、加算分ではなく戦闘外の最終値（statistics）を使う", () => {
    const profile = profileOf(hiei());
    expect(profile?.statsStatus).toBe("final");
    // 修正前は properties の 34（遺物ぶん）で比較していた。
    expect(currentOf(hiei(), "speed")).toBe(138);
    expect(profile?.allStats.find((stat) => stat.name === "速度")?.display).toBe("138");
    // 基礎5%・50%を含む最終値になる（修正前は 56.2% / 153.0%）。
    expect(currentOf(hiei(), "critRate")).toBeCloseTo(61.2, 5);
    expect(currentOf(hiei(), "critDmg")).toBeCloseTo(203, 5);
  });

  it("割合キーと最終の実数を取り違えず、未取得だったキーにも値が入る", () => {
    const profile = profileOf(hiei());
    // 割合キーは properties の割合項目の合計と一致する。
    expect(currentOf(hiei(), "attackPercent")).toBeCloseTo(63, 5);
    // attack は割合ではなく最終の実数で表示・比較する（修正前は「63.0%」に当たっていた）。
    expect(profile?.allStats.find((stat) => stat.name === "攻撃力")?.display).toBe("2083");
    // アスターは速度・HP・防御力を目標に持つ。hp / defense は修正前、正規表現が当たらず常に「未取得」だった。
    const aster = profileOf(hiei({ id: "1009", name: "アスター" }));
    expect(aster?.comparisons.find((item) => item.key === "hp")?.current).toBe(2950);
    expect(aster?.comparisons.find((item) => item.key === "defense")?.current).toBe(960);
    expect(aster?.comparisons.every((item) => item.current !== null)).toBe(true);
  });

  it("statistics が無くても attributes と additions の合算で同じ最終値になる", () => {
    const { statistics: _statistics, ...withoutStatistics } = hiei() as Record<string, unknown>;
    expect(currentOf(withoutStatistics, "speed")).toBe(138);
    expect(currentOf(withoutStatistics, "critRate")).toBeCloseTo(61.2, 5);
  });

  it("最終値を作れないときは properties へ戻らず比較を保留する", () => {
    const { statistics: _s, attributes: _a, additions: _d, ...onlyProperties } = hiei() as Record<string, unknown>;
    const profile = profileOf(onlyProperties);
    expect(profile?.statsStatus).toBe("unavailable");
    expect(profile?.allStats).toEqual([]);
    expect(profile?.comparisons.every((item) => item.current === null && item.currentDisplay === "未取得")).toBe(true);
    expect(profile?.recommendations).toEqual([]);
  });

  it("最終値の表示ラベルは「基礎HP」ではなく「HP」にする", () => {
    const names = profileOf(hiei())?.allStats.map((stat) => stat.name) ?? [];
    expect(names).toContain("HP");
    expect(names).toContain("攻撃力");
    expect(names).toContain("防御力");
    expect(names.some((name) => name.startsWith("基礎"))).toBe(false);
  });

  // DR-01: 基礎100%込みの換算 (1 + 0.194) * 100 は 119.39999999999999 になる。
  // 表示は119.4%なので、素の >= で未達にしてはならない。一方 0.1939（119.39）は未達のままにする。
  const kafkaWithSpRate = (spRate: number | null) => hiei({
    id: "1005", name: "カフカ",
    statistics: [
      { field: "spd", name: "速度", value: 160, percent: false },
      { field: "atk", name: "基礎攻撃力", value: 2600, percent: false },
      { field: "effect_hit", name: "効果命中", value: 0.8, percent: true },
      ...(spRate === null ? [] : [{ field: "sp_rate", name: "EP回復効率", value: spRate, percent: true }]),
    ],
  });
  const energyOf = (spRate: number | null) => profileOf(kafkaWithSpRate(spRate))?.comparisons.find((item) => item.key === "energyRecharge");

  it("EP回復効率を基礎100%込みで表示・比較し、境界の丸め誤差で未達にしない", () => {
    expect(energyOf(0.194)?.current).toBeCloseTo(119.4, 5);
    expect(energyOf(0.194)?.currentDisplay).toBe("119.4%");
    expect(energyOf(0.194)?.achieved["目標"]).toBe(true);
    expect(profileOf(kafkaWithSpRate(0.194))?.recommendations.some((item) => item.key === "energyRecharge")).toBe(false);
    expect(profileOf(kafkaWithSpRate(0.194))?.allStats.find((stat) => stat.name === "EP回復効率")?.display).toBe("119.4%");
  });

  it("わずかに低い 0.1939 は未達のままで、不足を「あと 0.0%」と表示しない", () => {
    expect(energyOf(0.1939)?.current).toBeCloseTo(119.39, 5);
    expect(energyOf(0.1939)?.achieved["目標"]).toBe(false);
    const deficit = profileOf(kafkaWithSpRate(0.1939))?.recommendations.find((item) => item.key === "energyRecharge");
    expect(deficit?.rationale).toContain("あと 0.1%未満");
    expect(deficit?.rationale).not.toContain("あと 0.0%");
  });

  it("sp_rate が無ければ EP回復効率は基礎の100%になり、目標に未達となる", () => {
    expect(energyOf(null)?.current).toBe(100);
    expect(energyOf(null)?.achieved["目標"]).toBe(false);
    // 妥協水準（100）はちょうど達成になる。
    expect(energyOf(null)?.achieved["妥協"]).toBe(true);
  });

  it("カフカのEP回復効率の目標は基礎込みの119.4 / 119.4 / 100で、他の目標は変えない", () => {
    const guide = guideFor("カフカ", "虚無");
    const energy = guide.targets.find((target) => target.key === "energyRecharge");
    expect(energy?.targets).toEqual({ "厳選": 119.4, "目標": 119.4, "妥協": 100 });
    expect(guide.targets.find((target) => target.key === "speed")?.targets).toEqual({ "厳選": 170, "目標": 160, "妥協": 156 });
    expect(guide.targets.find((target) => target.key === "effectHitRate")?.targets).toEqual({ "厳選": 90, "目標": 75, "妥協": 67 });
    expect(guide.targets.find((target) => target.key === "attack")?.targets).toEqual({ "厳選": 3000, "目標": 2500, "妥協": 2300 });
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
    // 白露は第15バッチで個別ガイドを持つため、基準日の共通出典ではなく第15バッチの出典を返す（2026-09-10 の正規化）。
    expect(byName["白露"]?.guide.sourceLabel).toContain("白露ビルド・星魂情報");
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

  // DR-05（自動レビュー 2026-09-12）: MiHoMo が 200 を返しても最終ステータスを作れない場合、
  // それを成功として返すと Enka が一度も試されず、全員「未取得」の結果が TTL 中キャッシュされる。
  it("MiHoMoが最終ステータスを持たない応答を返した場合、Enkaフォールバックを試しキャッシュしない", async () => {
    const mihomoPayloadWithoutFinals = {
      player: { uid: "999000002", nickname: "テスト開拓者" },
      characters: [{
        id: "1310", name: "ホタル", level: 80, rank: 1, path: { name: "壊滅" }, element: { name: "炎" },
        // statistics / attributes / additions のいずれも無い（加算分だけ）。
        properties: [{ field: "spd", name: "速度", value: 34, display: "34", percent: false }],
        relics: [],
      }],
    };
    vi.stubGlobal("fetch", vi.fn(async (input: string | URL) => {
      const url = String(input);
      if (url.includes("api.mihomo.me")) return new Response(JSON.stringify(mihomoPayloadWithoutFinals), { headers: { "content-type": "application/json" } });
      if (url.includes("enka.network/api/hsr/uid")) return new Response(JSON.stringify({ uid: "999000002", detailInfo: { nickname: "Fallback", avatarDetailList: [{ avatarId: 1310, level: 80, promotion: 0, equipment: { tid: 23061, level: 80, rank: 1 }, relicList: [{ tid: 1, type: 1, level: 15, _flat: { setID: 108, props: [{ type: "SpeedDelta", value: 8.9 }] } }] }] } }), { headers: { "content-type": "application/json" } });
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
      const result = await lookupUidBuild("999000002");
      // 修正前は dataSource: "MiHoMo" のまま全員「未取得」でキャッシュされていた。
      expect(result.dataSource).toBe("Enka");
      expect(result.characters[0]?.statsStatus).toBe("final");
      // 2回目の照会でも MiHoMo の不完全な結果がキャッシュから返らない。
      const again = await lookupUidBuild("999000002");
      expect(again.dataSource).toBe("Enka");
    } finally {
      vi.unstubAllGlobals();
    }
  });
});

describe("Enkaフォールバック正規化", () => {
  it("生データの公開キャラクターと遺物を表示モデルへ変換する", () => {
    const data = normalizeEnkaPayload({
      uid: "800000001",
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
        expect(CHARACTER_GUIDE_METADATA[game][name]).toMatchObject({ profileId: expect.any(String), dataAsOf: expect.stringMatching(/^2026-(05-31|06-05|07-31|08-(11|13|14|18|19|21|24|25|26|27)|09-(01|05|07|08|11))$/), updatedAt: expect.stringMatching(/^2026-(08-(18|25|26|27)|09-(05|07|08|11))$/) });
      });
    });
    CHARACTER_GUIDE_CATALOG.hsr.forEach((name, index) => {
      const profileId = hsrGuides[index]?.profileId;
      // 個別精査で固有プロファイルを持つキャラクター（第15バッチなど curated:* 接頭辞）はロール分類と一致しない。
      if (profileId?.startsWith("curated:")) return;
      expect(profileId).toBe(expectedProfileFor("hsr", name));
    });
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

describe("装備提案の部位選択（Phase E）", () => {
  const guideWith = (mainStats: Array<{ slot: string; value: string }>): GuideDefinition => ({
    headline: "テスト", relicSet: "テストセット ×4", planarSet: "テスト", mainStats, targets: [],
  });
  const deficit = (key: StatKey, label: string, unit: "" | "%" = ""): PriorityRecommendation =>
    ({ key, label, unit, current: 0, target: 100, deficit: 100, priority: "最優先", rationale: "テスト" });

  // シーザーの現行ガイド（IV=会心、V=物理/貫通、VI=衝撃力）。hp と defense の主ステータス欄を持たない。
  const caesarGuide = guideWith([{ slot: "IV", value: "会心率 / 会心ダメージ" }, { slot: "V", value: "物理属性ダメージ / 貫通率" }, { slot: "VI", value: "衝撃力" }]);

  it("再現テスト: 主ステータス欄が無い目標が同じ部位へ相反する変更を出さない", () => {
    const actions = equipmentActionsFor(caesarGuide, [], [deficit("hp", "HP"), deficit("defense", "防御力")]);
    // 修正前は hp も defense も既定部位の先頭（IV）を指し、「IV を HP へ」「IV を 防御力へ」を同時に返していた。
    expect(actions).toHaveLength(2);
    expect(actions.every((action) => action.action === "サブステータスを厳選")).toBe(true);
    expect(actions.every((action) => action.slotScope === "any")).toBe(true);
    expect(actions.some((action) => action.action === "主ステータスを変更")).toBe(false);
    expect(new Set(actions.map((action) => action.slot))).toEqual(new Set(["全部位"]));
  });

  it("ガイドの主ステータス方針を壊す提案を出さない（セス・蒼角・潘引壺の形）", () => {
    const attackGuide = guideWith([{ slot: "IV", value: "攻撃力%" }, { slot: "V", value: "攻撃力%" }, { slot: "VI", value: "異常掌握 / エネルギー自動回復" }]);
    const actions = equipmentActionsFor(attackGuide, [], [deficit("hp", "HP")]);
    expect(actions[0]).toMatchObject({ action: "サブステータスを厳選", slotScope: "any" });
    expect(actions[0]?.currentMain).toBeNull();
  });

  it("HSR・原神でも同じ扱いになる（ファイノン・符玄・アルハイゼンの形）", () => {
    const hsrGuide = guideWith([{ slot: "胴体", value: "会心率 / 会心ダメ" }, { slot: "脚部", value: "速度" }, { slot: "次元界オーブ", value: "量子属性ダメージ" }, { slot: "連結縄", value: "攻撃力%" }]);
    expect(equipmentActionsFor(hsrGuide, [], [deficit("hp", "HP"), deficit("defense", "防御力")]).every((action) => action.slotScope === "any")).toBe(true);
    const giGuide = guideWith([{ slot: "時計", value: "元素熟知 / 攻撃力%" }, { slot: "杯", value: "草元素ダメージ" }, { slot: "冠", value: "会心率" }]);
    expect(equipmentActionsFor(giGuide, [], [deficit("energyRecharge", "元素チャージ効率", "%")])[0]).toMatchObject({ slotScope: "any" });
  });

  it("ガイドが主ステータス欄を持つ場合は従来どおり部位を指す（ベンの形）", () => {
    const benGuide = guideWith([{ slot: "IV", value: "防御力% / 会心ダメージ" }, { slot: "V", value: "防御力%" }, { slot: "VI", value: "防御力% / エネルギー自動回復" }]);
    const actions = equipmentActionsFor(benGuide, [], [deficit("defense", "防御力")]);
    expect(actions[0]).toMatchObject({ slot: "IV", slotScope: "specific", action: "主ステータスを変更" });
  });

  it("サブステータスに存在しないステータスには装備アクションを出さない（E4）", () => {
    // ZZZ: 衝撃力・異常掌握・エネルギー自動回復・貫通率はディスクのメイン専用。
    // （シーザーのガイドは VI に衝撃力を持つので、4キーとも欄が無いガイドで確かめる）
    const zzzNoMainOnly = guideWith([{ slot: "IV", value: "会心率" }, { slot: "V", value: "電気属性ダメージ" }, { slot: "VI", value: "攻撃力%" }]);
    for (const key of ["impact", "anomalyProficiency", "energyRegen", "penRatio"] as StatKey[]) {
      expect(equipmentActionsFor(zzzNoMainOnly, [], [deficit(key, key)])).toEqual([]);
    }
    // HSR: EP回復効率は連結縄のメイン専用（ガイドに欄が無い形を作る）。
    const hsrNoRope = guideWith([{ slot: "胴体", value: "会心率" }, { slot: "脚部", value: "速度" }, { slot: "次元界オーブ", value: "攻撃力%" }, { slot: "連結縄", value: "攻撃力%" }]);
    expect(equipmentActionsFor(hsrNoRope, [], [deficit("energyRecharge", "EP回復効率", "%")])).toEqual([]);
    // 一方、サブで伸ばせるキーは従来どおり提案する。
    expect(equipmentActionsFor(caesarGuide, [], [deficit("hp", "HP")])).toHaveLength(1);
  });

  it("ZZZ では実数ではなく割合の主ステータスを希望する（D7）", () => {
    const zzzCases: Array<[StatKey, string]> = [["hp", "HP%"], ["hpPercent", "HP%"], ["defense", "防御力%"], ["defPercent", "防御力%"]];
    for (const [key, expected] of zzzCases) {
      expect(equipmentActionsFor(caesarGuide, [], [deficit(key, key)])[0]?.desiredStat).toBe(expected);
    }
    // 原神・HSR の同じ4キーは従来の表記のまま。
    const giGuide = guideWith([{ slot: "時計", value: "HP%" }, { slot: "杯", value: "炎元素ダメージ" }, { slot: "冠", value: "会心率" }]);
    expect(equipmentActionsFor(giGuide, [], [deficit("hp", "HP")])[0]).toMatchObject({ slot: "時計", desiredStat: "HP" });
    const hsrGuide = guideWith([{ slot: "胴体", value: "防御力%" }, { slot: "脚部", value: "速度" }, { slot: "次元界オーブ", value: "防御力%" }, { slot: "連結縄", value: "防御力%" }]);
    expect(equipmentActionsFor(hsrGuide, [], [deficit("defense", "防御力")])[0]).toMatchObject({ slot: "胴体", desiredStat: "防御力" });
    // EP回復効率は照合用の語（「元素チャージ」）ではなく、そのゲームの呼び名で提案する。
    const kafkaRope = guideWith([{ slot: "胴体", value: "効果命中" }, { slot: "脚部", value: "速度" }, { slot: "次元界オーブ", value: "雷属性ダメージ" }, { slot: "連結縄", value: "EP回復効率 / 攻撃力%" }]);
    expect(equipmentActionsFor(kafkaRope, [], [deficit("energyRecharge", "EP回復効率", "%")])[0]).toMatchObject({ slot: "連結縄", desiredStat: "EP回復効率" });
    const giRope = guideWith([{ slot: "時計", value: "元素チャージ効率" }, { slot: "杯", value: "水元素ダメージ" }, { slot: "冠", value: "会心率" }]);
    expect(equipmentActionsFor(giRope, [], [deficit("energyRecharge", "元素チャージ効率", "%")])[0]).toMatchObject({ slot: "時計", desiredStat: "元素チャージ効率" });
  });

  it("全251名のガイドで、推奨主ステータスを別の値へ変えるよう促す提案が0件になる", () => {
    const conflicts: string[] = [];
    for (const [game, names] of Object.entries(CHARACTER_GUIDE_CATALOG) as Array<[string, string[]]>) {
      for (const name of names) {
        const guide = game === "hsr"
          ? guideFor(name, HSR_RUNTIME_PATHS[name] ?? "")
          : game === "genshin"
            ? genshinGuide(name)
            : zzzGuide(name, ZZZ_RUNTIME_PROFESSIONS[name] ?? "Attack");
        const recommendations = guide.targets.map((target) => deficit(target.key, target.label, target.unit));
        for (const action of equipmentActionsFor(guide, [], recommendations)) {
          if (action.slotScope !== "specific" || action.action !== "主ステータスを変更") continue;
          const guideValue = guide.mainStats.find((entry) => entry.slot === action.slot)?.value ?? "";
          // 部位はガイドが対象ステータスを指定しているものだけを選ぶので、必ずガイド値に含まれる。
          if (!guideValue.includes(action.desiredStat.replace("%", ""))) conflicts.push(`${game}:${name}:${action.slot}:${action.desiredStat}`);
        }
      }
    }
    expect(conflicts).toEqual([]);
  });
});

describe("Enka経路の遺物サブ・セット効果（Phase D）", () => {
  const STATIC = {
    characters: { "1310": { name: "ホタル", element: "Fire", path: "Warrior" } },
    lightCones: {},
    relicSets: {
      "108": { name: "テスト2セット", properties: [[{ type: "CriticalDamageBase", value: 0.16 }], []] },
      "109": { name: "テスト4セット", properties: [[{ type: "SpeedAddedRatio", value: 0.06 }], [{ type: "SpeedAddedRatio", value: -0.08 }]] },
      "110": { name: "条件付きのみ", properties: [[], []] },
    },
    characterPromotions: { "1310": { values: [{ hp: { base: 900, step: 56 }, atk: { base: 55, step: 3 }, def: { base: 50, step: 3 }, spd: { base: 100, step: 0 }, crit_rate: { base: 0.05 }, crit_dmg: { base: 0.5 } }] } },
    characterSkillTrees: { "0": {} },
    lightConePromotions: {},
    lightConeRanks: {},
    properties: HSR_TEST_PROPERTIES,
  };

  const payloadWith = (relicList: unknown[]) => ({
    uid: "800000011",
    detailInfo: { nickname: "テスト", avatarDetailList: [{ avatarId: 1310, level: 80, promotion: 0, relicList }] },
  });
  const relic = (setID: string, type: number, props: Array<{ type: string; value: number }>) =>
    ({ tid: Number(`6108${type}`), type, level: 15, _flat: { setID, props } });

  const statOf = (data: ReturnType<typeof normalizeEnkaPayload>, name: string) =>
    data.characters[0]?.allStats.find((stat) => stat.name === name)?.display ?? "—";

  it("再現テスト: 遺物サブの会心率・会心ダメージが合算される（E1）", () => {
    // Enka はメインに Base 付き、サブに Base なしの型を使う。後者は properties.json の field が空で、
    // 修正前は合算から丸ごと落ち、表示も「会心率 0」になっていた。
    const withSubs = normalizeEnkaPayload(payloadWith([
      relic("110", 1, [{ type: "HPDelta", value: 705.6 }, { type: "CriticalChance", value: 0.09072 }, { type: "CriticalDamage", value: 0.2268 }]),
    ]), STATIC);
    const withoutSubs = normalizeEnkaPayload(payloadWith([
      relic("110", 1, [{ type: "HPDelta", value: 705.6 }]),
    ]), STATIC);

    expect(statOf(withSubs, "会心率")).toBe("14.1%");   // 基礎5% + サブ9.072%
    expect(statOf(withoutSubs, "会心率")).toBe("5.0%");
    expect(statOf(withSubs, "会心ダメ")).toBe("72.7%");  // 基礎50% + サブ22.68%
    // サブの表示も百分率になる（修正前は実数扱いで「0」）。
    expect(withSubs.characters[0]?.relics[0]?.subs.map((sub) => sub.display)).toEqual(["9.1%", "22.7%"]);
  });

  it("効果命中・効果抵抗・撃破特効・EP回復効率のサブも合算される（E1）", () => {
    const data = normalizeEnkaPayload(payloadWith([
      relic("110", 1, [{ type: "HPDelta", value: 1 }, { type: "StatusProbability", value: 0.1 }, { type: "StatusResistance", value: 0.2 }, { type: "BreakDamageAddedRatio", value: 0.3 }, { type: "SPRatio", value: 0.05 }]),
    ]), STATIC);
    expect(statOf(data, "効果命中")).toBe("10.0%");
    expect(statOf(data, "効果抵抗")).toBe("20.0%");
    expect(statOf(data, "撃破特効")).toBe("30.0%");
    expect(statOf(data, "EP回復効率")).toBe("105.0%");
  });

  it("再現テスト: 遺物セット効果の無条件分が乗る（E2）", () => {
    const one = normalizeEnkaPayload(payloadWith([relic("108", 1, [{ type: "HPDelta", value: 1 }])]), STATIC);
    const two = normalizeEnkaPayload(payloadWith([
      relic("108", 1, [{ type: "HPDelta", value: 1 }]), relic("108", 2, [{ type: "HPDelta", value: 1 }]),
    ]), STATIC);
    // 1個では乗らず、2個そろって初めて2セット効果（会心ダメージ+16%）が乗る。
    expect(statOf(one, "会心ダメ")).toBe("50.0%");
    expect(statOf(two, "会心ダメ")).toBe("66.0%");
  });

  it("4セットでは2セット分も累積し、マイナスの効果も符号どおりに効く（E2）", () => {
    const twoPiece = normalizeEnkaPayload(payloadWith([
      relic("109", 1, [{ type: "HPDelta", value: 1 }]), relic("109", 2, [{ type: "HPDelta", value: 1 }]),
    ]), STATIC);
    const fourPiece = normalizeEnkaPayload(payloadWith([
      relic("109", 1, [{ type: "HPDelta", value: 1 }]), relic("109", 2, [{ type: "HPDelta", value: 1 }]),
      relic("109", 3, [{ type: "HPDelta", value: 1 }]), relic("109", 4, [{ type: "HPDelta", value: 1 }]),
    ]), STATIC);
    // 基礎速度100。2セットは +6%、4セットは +6% と -8% の累積で -2%。
    expect(statOf(twoPiece, "速度")).toBe("106.0");
    expect(statOf(fourPiece, "速度")).toBe("98.0");
  });

  it("条件付き効果しか持たないセット（properties が空）は乗らない（E2）", () => {
    const data = normalizeEnkaPayload(payloadWith([
      relic("110", 1, [{ type: "HPDelta", value: 1 }]), relic("110", 2, [{ type: "HPDelta", value: 1 }]),
    ]), STATIC);
    expect(statOf(data, "速度")).toBe("100.0");
    expect(statOf(data, "会心ダメ")).toBe("50.0%");
  });

  it("セットを解決できないときは比較を保留する（fail closed）", () => {
    const data = normalizeEnkaPayload(payloadWith([
      relic("999", 1, [{ type: "HPDelta", value: 1 }]),
    ]), STATIC);
    expect(data.characters[0]?.statsStatus).toBe("unavailable");
    expect(data.characters[0]?.comparisons.every((comparison) => comparison.current === null)).toBe(true);
  });
});
