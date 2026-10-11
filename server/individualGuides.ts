import {createLegacyTexts as createGuideTemplateTexts} from "./content/legacyTexts";
import {sources as guideTemplateSources} from "../content/ja/guides/individualGuides_templates";
const _guideTemplates=createGuideTemplateTexts(guideTemplateSources,{},{});
import { createLegacyTexts } from "./content/legacyTexts";
import { sources as _sources } from "../content/ja/guides/individualGuides";
import { records as _en } from "../content/translations/en/individualGuides";
import { records as _zh } from "../content/translations/zh-CN/individualGuides";
const _content = createLegacyTexts(_sources, _en, _zh);
import type { GuideDefinition, TargetStatDefinition } from "./buildAdvisor";
import { HSR_PATH_LABELS } from "./characterGuideCatalog";

type GameId = "hsr" | "genshin" | "zzz";
export type ProfileId = "crit" | "dot" | "break" | "support" | "sustain" | "tank" | "hp" | "def" | "em" | "anomaly" | "stun" | "rupture";
type HsrProfileId = Exclude<ProfileId, "em" | "anomaly" | "stun" | "rupture">;
type GenshinProfileId = Extract<ProfileId, "crit" | "hp" | "def" | "em" | "support" | "sustain">;
type ZzzProfileId = Extract<ProfileId, "crit" | "anomaly" | "stun" | "support" | "tank" | "rupture" | "def">;

const target = (key: TargetStatDefinition["key"], label: string, unit: "%" | "", strict: number, goal: number, base: number): TargetStatDefinition => ({ key, label, unit, targets: { "厳選": strict, "目標": goal, "妥協": base } });
const hsrMain = (value: string): GuideDefinition["mainStats"] => [{ slot: _content.ja("guide.legacy.individualGuides.b00001"), value: _content.ja("guide.legacy.individualGuides.b00002") }, { slot: _content.ja("guide.legacy.individualGuides.b00003"), value: _content.ja("guide.legacy.individualGuides.b00004") }, { slot: _content.ja("guide.legacy.individualGuides.b00005"), value: _content.ja("guide.legacy.individualGuides.b00006") }, { slot: _content.ja("guide.legacy.individualGuides.b00007"), value }];
const giMain = (clock: string, cup = "元素ダメージ", crown = "会心率 / 会心ダメージ"): GuideDefinition["mainStats"] => [{ slot: _content.ja("guide.legacy.individualGuides.b00008"), value: clock }, { slot: _content.ja("guide.legacy.individualGuides.b00009"), value: cup }, { slot: _content.ja("guide.legacy.individualGuides.b00010"), value: crown }];
const zzzMain = (iv: string, v: string, vi: string): GuideDefinition["mainStats"] => [{ slot: _content.ja("guide.legacy.individualGuides.b00011"), value: iv }, { slot: _content.ja("guide.legacy.individualGuides.b00012"), value: v }, { slot: _content.ja("guide.legacy.individualGuides.b00013"), value: vi }];

const HSR_PROFILES: Record<HsrProfileId, Omit<GuideDefinition, "headline">> = {
  crit: { relicSet: _content.ja("guide.legacy.individualGuides.b00014"), planarSet: _content.ja("guide.legacy.individualGuides.b00015"), mainStats: hsrMain("攻撃力%"), targets: [target("critRate", "会心率", "%", 85, 75, 65), target("critDmg", "会心ダメ", "%", 200, 170, 140), target("speed", "速度", "", 143, 134, 120), target("attackPercent", "攻撃力%", "%", 75, 60, 45)] },
  dot: { relicSet: _content.ja("guide.legacy.individualGuides.b00016"), planarSet: _content.ja("guide.legacy.individualGuides.b00017"), mainStats: [{ slot: _content.ja("guide.legacy.individualGuides.b00018"), value: _content.ja("guide.legacy.individualGuides.b00019") }, { slot: _content.ja("guide.legacy.individualGuides.b00020"), value: _content.ja("guide.legacy.individualGuides.b00021") }, { slot: _content.ja("guide.legacy.individualGuides.b00022"), value: _content.ja("guide.legacy.individualGuides.b00023") }, { slot: _content.ja("guide.legacy.individualGuides.b00024"), value: _content.ja("guide.legacy.individualGuides.b00025") }], targets: [target("effectHitRate", "効果命中", "%", 120, 90, 67), target("speed", "速度", "", 160, 147, 134), target("attackPercent", "攻撃力%", "%", 90, 75, 60)] },
  break: { relicSet: _content.ja("guide.legacy.individualGuides.b00026"), planarSet: _content.ja("guide.legacy.individualGuides.b00027"), mainStats: [{ slot: _content.ja("guide.legacy.individualGuides.b00028"), value: _content.ja("guide.legacy.individualGuides.b00029") }, { slot: _content.ja("guide.legacy.individualGuides.b00030"), value: _content.ja("guide.legacy.individualGuides.b00031") }, { slot: _content.ja("guide.legacy.individualGuides.b00032"), value: _content.ja("guide.legacy.individualGuides.b00033") }, { slot: _content.ja("guide.legacy.individualGuides.b00034"), value: _content.ja("guide.legacy.individualGuides.b00035") }], targets: [target("breakEffect", "撃破特効", "%", 300, 240, 180), target("speed", "速度", "", 160, 150, 145), target("attackPercent", "攻撃力%", "%", 60, 45, 30)] },
  support: { relicSet: _content.ja("guide.legacy.individualGuides.b00036"), planarSet: _content.ja("guide.legacy.individualGuides.b00037"), mainStats: [{ slot: _content.ja("guide.legacy.individualGuides.b00038"), value: _content.ja("guide.legacy.individualGuides.b00039") }, { slot: _content.ja("guide.legacy.individualGuides.b00040"), value: _content.ja("guide.legacy.individualGuides.b00041") }, { slot: _content.ja("guide.legacy.individualGuides.b00042"), value: _content.ja("guide.legacy.individualGuides.b00043") }, { slot: _content.ja("guide.legacy.individualGuides.b00044"), value: _content.ja("guide.legacy.individualGuides.b00045") }], targets: [target("speed", "速度", "", 161, 145, 134), target("effectRes", "効果抵抗", "%", 45, 30, 20), target("hpPercent", "HP%", "%", 45, 32, 20)] },
  sustain: { relicSet: _content.ja("guide.legacy.individualGuides.b00046"), planarSet: _content.ja("guide.legacy.individualGuides.b00047"), mainStats: [{ slot: _content.ja("guide.legacy.individualGuides.b00048"), value: _content.ja("guide.legacy.individualGuides.b00049") }, { slot: _content.ja("guide.legacy.individualGuides.b00050"), value: _content.ja("guide.legacy.individualGuides.b00051") }, { slot: _content.ja("guide.legacy.individualGuides.b00052"), value: _content.ja("guide.legacy.individualGuides.b00053") }, { slot: _content.ja("guide.legacy.individualGuides.b00054"), value: _content.ja("guide.legacy.individualGuides.b00055") }], targets: [target("speed", "速度", "", 160, 145, 134), target("effectRes", "効果抵抗", "%", 45, 30, 20), target("hpPercent", "HP%", "%", 50, 35, 25)] },
  tank: { relicSet: _content.ja("guide.legacy.individualGuides.b00056"), planarSet: _content.ja("guide.legacy.individualGuides.b00057"), mainStats: [{ slot: _content.ja("guide.legacy.individualGuides.b00058"), value: _content.ja("guide.legacy.individualGuides.b00059") }, { slot: _content.ja("guide.legacy.individualGuides.b00060"), value: _content.ja("guide.legacy.individualGuides.b00061") }, { slot: _content.ja("guide.legacy.individualGuides.b00062"), value: _content.ja("guide.legacy.individualGuides.b00063") }, { slot: _content.ja("guide.legacy.individualGuides.b00064"), value: _content.ja("guide.legacy.individualGuides.b00065") }], targets: [target("speed", "速度", "", 150, 134, 120), target("defPercent", "防御力%", "%", 90, 70, 50), target("effectRes", "効果抵抗", "%", 45, 30, 20)] },
  hp: { relicSet: _content.ja("guide.legacy.individualGuides.b00066"), planarSet: _content.ja("guide.legacy.individualGuides.b00067"), mainStats: [{ slot: _content.ja("guide.legacy.individualGuides.b00068"), value: _content.ja("guide.legacy.individualGuides.b00069") }, { slot: _content.ja("guide.legacy.individualGuides.b00070"), value: _content.ja("guide.legacy.individualGuides.b00071") }, { slot: _content.ja("guide.legacy.individualGuides.b00072"), value: _content.ja("guide.legacy.individualGuides.b00073") }, { slot: _content.ja("guide.legacy.individualGuides.b00074"), value: _content.ja("guide.legacy.individualGuides.b00075") }], targets: [target("critRate", "会心率", "%", 85, 75, 65), target("critDmg", "会心ダメ", "%", 200, 170, 140), target("hpPercent", "HP%", "%", 65, 50, 35)] },
  def: { relicSet: _content.ja("guide.legacy.individualGuides.b00076"), planarSet: _content.ja("guide.legacy.individualGuides.b00077"), mainStats: [{ slot: _content.ja("guide.legacy.individualGuides.b00078"), value: _content.ja("guide.legacy.individualGuides.b00079") }, { slot: _content.ja("guide.legacy.individualGuides.b00080"), value: _content.ja("guide.legacy.individualGuides.b00081") }, { slot: _content.ja("guide.legacy.individualGuides.b00082"), value: _content.ja("guide.legacy.individualGuides.b00083") }, { slot: _content.ja("guide.legacy.individualGuides.b00084"), value: _content.ja("guide.legacy.individualGuides.b00085") }], targets: [target("defPercent", "防御力%", "%", 100, 80, 60), target("critRate", "会心率", "%", 75, 65, 55), target("critDmg", "会心ダメ", "%", 180, 150, 120)] },
};

const GI_PROFILES: Record<GenshinProfileId, Omit<GuideDefinition, "headline">> = {
  crit: { relicSet: _content.ja("guide.legacy.individualGuides.b00086"), planarSet: _content.ja("guide.legacy.individualGuides.b00087"), mainStats: giMain("攻撃力% / 元素熟知"), targets: [target("critRate", "会心率", "%", 85, 75, 65), target("critDmg", "会心ダメージ", "%", 220, 180, 150), target("energyRecharge", "元素チャージ効率", "%", 160, 130, 115)] },
  hp: { relicSet: _content.ja("guide.legacy.individualGuides.b00088"), planarSet: _content.ja("guide.legacy.individualGuides.b00089"), mainStats: giMain("HP% / 元素チャージ効率", "HP% / 元素ダメージ"), targets: [target("hp", "HP", "", 45000, 38000, 32000), target("critRate", "会心率", "%", 80, 70, 60), target("energyRecharge", "元素チャージ効率", "%", 220, 180, 150)] },
  def: { relicSet: _content.ja("guide.legacy.individualGuides.b00090"), planarSet: _content.ja("guide.legacy.individualGuides.b00091"), mainStats: giMain("防御力%", "岩元素ダメージ / 防御力%"), targets: [target("defense", "防御力", "", 2800, 2400, 2000), target("critRate", "会心率", "%", 80, 70, 60), target("critDmg", "会心ダメージ", "%", 220, 180, 150)] },
  em: { relicSet: _content.ja("guide.legacy.individualGuides.b00092"), planarSet: _content.ja("guide.legacy.individualGuides.b00093"), mainStats: giMain("元素熟知", "元素熟知", "元素熟知"), targets: [target("elementalMastery", "元素熟知", "", 1000, 800, 650), target("energyRecharge", "元素チャージ効率", "%", 190, 160, 140)] },
  support: { relicSet: _content.ja("guide.legacy.individualGuides.b00094"), planarSet: _content.ja("guide.legacy.individualGuides.b00095"), mainStats: giMain("元素チャージ効率", "HP% / 攻撃力%", "会心率 / 与える治癒効果"), targets: [target("energyRecharge", "元素チャージ効率", "%", 250, 200, 170), target("hp", "HP", "", 35000, 28000, 23000)] },
  sustain: { relicSet: _content.ja("guide.legacy.individualGuides.b00096"), planarSet: _content.ja("guide.legacy.individualGuides.b00097"), mainStats: giMain("HP% / 元素チャージ効率", "HP%", "HP% / 与える治癒効果"), targets: [target("hp", "HP", "", 45000, 38000, 30000), target("energyRecharge", "元素チャージ効率", "%", 220, 180, 150)] },
};

const ZZZ_PROFILES: Record<ZzzProfileId, Omit<GuideDefinition, "headline">> = {
  crit: { relicSet: _content.ja("guide.legacy.individualGuides.b00098"), planarSet: _content.ja("guide.legacy.individualGuides.b00099"), mainStats: zzzMain("会心率 / 会心ダメージ", "属性ダメージ / 貫通率", "攻撃力%"), targets: [target("critRate", "会心率", "%", 80, 70, 60), target("critDmg", "会心ダメージ", "%", 200, 160, 130), target("attack", "攻撃力", "", 3000, 2700, 2400)] },
  anomaly: { relicSet: _content.ja("guide.legacy.individualGuides.b00100"), planarSet: _content.ja("guide.legacy.individualGuides.b00101"), mainStats: zzzMain("異常マスタリー", "属性ダメージ / 攻撃力%", "異常掌握 / 異常マスタリー"), targets: [target("anomalyMastery", "異常マスタリー", "", 420, 360, 300), target("attack", "攻撃力", "", 3000, 2700, 2400)] },
  stun: { relicSet: _content.ja("guide.legacy.individualGuides.b00102"), planarSet: _content.ja("guide.legacy.individualGuides.b00103"), mainStats: zzzMain("会心率 / 攻撃力%", "属性ダメージ / 攻撃力%", "衝撃力"), targets: [target("impact", "衝撃力", "", 190, 175, 160), target("attack", "攻撃力", "", 2600, 2300, 2000)] },
  support: { relicSet: _content.ja("guide.legacy.individualGuides.b00104"), planarSet: _content.ja("guide.legacy.individualGuides.b00105"), mainStats: zzzMain("攻撃力% / HP%", "攻撃力% / HP%", "エネルギー自動回復"), targets: [target("attack", "攻撃力", "", 3600, 3200, 2800), target("energyRegen", "エネルギー自動回復", "", 1.8, 1.2, 0.8)] },
  tank: { relicSet: _content.ja("guide.legacy.individualGuides.b00106"), planarSet: _content.ja("guide.legacy.individualGuides.b00107"), mainStats: zzzMain("HP% / 防御力%", "HP% / 防御力%", "HP% / 攻撃力%"), targets: [target("hpPercent", "HP%", "%", 55, 40, 30), target("attack", "攻撃力", "", 2400, 2100, 1800)] },
  rupture: { relicSet: _content.ja("guide.legacy.individualGuides.b00108"), planarSet: _content.ja("guide.legacy.individualGuides.b00109"), mainStats: zzzMain("会心率 / 会心ダメージ", "属性ダメージ / HP%", "HP% / 攻撃力%"), targets: [target("critRate", "会心率", "%", 80, 70, 60), target("critDmg", "会心ダメージ", "%", 200, 160, 130), target("hpPercent", "HP%", "%", 50, 35, 25)] },
  // 鋭御（Armorer）はスキルダメージを防御力で計算するため、原神の防御力アタッカーと同じ def を流用する。
  // 役割共通の数値目標は出典で裏づけた根拠が無いため登録しない（推測しない）。
  def: { relicSet: _content.ja("guide.legacy.individualGuides.b00110"), planarSet: _content.ja("guide.legacy.individualGuides.b00111"), mainStats: zzzMain("会心率 / 会心ダメージ", "属性ダメージ / 貫通率", "防御力%"), targets: [], targetContext: _content.ja("guide.legacy.individualGuides.b00112") },
};

const GENS_HIT_REACTION = new Set(["楓原万葉", "スクロース", "ウェンティ", "早柚", "夢見月瑞希", "ナヒーダ", "久岐忍", "雷主人公"]);
const GENS_HP = new Set(["胡桃", "夜蘭", "フリーナ", "ヌヴィレット", "ニィロウ", "鍾離", "珊瑚宮心海", "白朮", "シグウィン", "キャンディス", "トーマ", "ディシア", "レイラ", "シャルロット", "ダリア"]);
const GENS_DEF = new Set(["荒瀧一斗", "千織", "アルベド", "ノエル", "雲菫", "ゴロー", "シロネン", "カチーナ"]);
const GENS_SUPPORT = new Set(["ベネット", "九条裟羅", "ファルザン", "オロルン", "イアンサ", "藍硯", "ヨォーヨ", "コレイ", "ディオナ", "バーバラ", "七七", "ドリー"]);
const HSR_DOT = new Set(["カフカ", "ブラックスワン", "サンポ", "ルカ", "桂乃芬", "セイレンス", "ヒーゼル", "ダリア"]);
const HSR_BREAK = new Set(["ホタル", "ブートヒル", "乱破", "帰忘の流離人", "ルアン・メェイ", "ギャラガー", "霊砂"]);
const HSR_HP = new Set(["刃", "キャストリス", "モーディス", "ヒアンシー", "長夜月"]);
const HSR_DEF = new Set(["アベンチュリン"]);
const HSR_SUSTAIN = new Set(["白露", "羅刹", "フォフォ", "リンクス", "ナターシャ", "ジェパード", "符玄", "丹恒・騰荒"]);

/** HSR のロール分類。ガイド生成（generatedHsrGuide）とメタデータの期待プロファイル（expectedProfileFor）で同じ判定を使う。 */
export function hsrProfileIdFor(name: string, path: string): HsrProfileId {
  const normalizedPath = HSR_PATH_LABELS[path] ?? path;
  return HSR_DOT.has(name) ? "dot" : HSR_BREAK.has(name) ? "break" : HSR_HP.has(name) ? "hp" : HSR_DEF.has(name) ? "def" : HSR_SUSTAIN.has(name) ? "sustain" : normalizedPath === "調和" || normalizedPath === "記憶" ? "support" : normalizedPath === "存護" ? "tank" : "crit";
}

/** 原神のロール分類。 */
export function genshinProfileIdFor(name: string): GenshinProfileId {
  return GENS_HIT_REACTION.has(name) ? "em" : GENS_HP.has(name) ? "hp" : GENS_DEF.has(name) ? "def" : GENS_SUPPORT.has(name) ? "support" : "crit";
}

/** ZZZ のロール分類。特性（profession）だけで決まる。 */
export function zzzProfileIdFor(profession: string): ZzzProfileId {
  return profession === "Anomaly" ? "anomaly" : profession === "Stun" ? "stun" : profession === "Support" ? "support" : profession === "Defense" ? "tank" : profession === "Rupture" ? "rupture" : profession === "Armorer" ? "def" : "crit";
}

function copyProfile(name: string, profileId: string, profile: Omit<GuideDefinition, "headline">, label: string): GuideDefinition {
  return { ...profile, profileId, headline: _guideTemplates.ja("guide.legacy.individualGuides_templates.b00001",{v0:name,v1:label}) };
}

export function generatedHsrGuide(name: string, path: string): GuideDefinition {
  const profileId = hsrProfileIdFor(name, path);
  return { ...copyProfile(name, profileId, HSR_PROFILES[profileId], "個別ビルド方針"), targetContext: _guideTemplates.ja("guide.legacy.individualGuides_templates.b00002",{v0:name}) };
}

export function generatedGenshinGuide(name: string): GuideDefinition {
  const profileId = genshinProfileIdFor(name);
  return { ...copyProfile(name, profileId, GI_PROFILES[profileId], "個別ビルド方針"), targetContext: _guideTemplates.ja("guide.legacy.individualGuides_templates.b00003",{v0:name}) };
}

export function generatedZzzGuide(name: string, profession: string): GuideDefinition {
  const profileId = zzzProfileIdFor(profession);
  const profile = ZZZ_PROFILES[profileId];
  // プロファイル固有の説明（目標を置かない理由など）があれば、共通文で上書きしない。
  return { ...copyProfile(name, profileId, profile, "個別ビルド方針"), targetContext: profile.targetContext ?? _guideTemplates.ja("guide.legacy.individualGuides_templates.b00004",{v0:name}) };
}
