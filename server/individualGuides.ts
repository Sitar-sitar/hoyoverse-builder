import { records as guideRecords } from "../content/guideDefinitions_profiles";
import { projectGeneratedGuide } from "./content/guides";

import type { GuideDefinition } from "./buildAdvisor";
import { HSR_PATH_LABELS } from "./characterGuideCatalog";
import type { GUIDE_PROFILE_IDS } from "../shared/content/guideAuthoring";

export type ProfileId =
  (typeof GUIDE_PROFILE_IDS)[keyof typeof GUIDE_PROFILE_IDS][number];
type HsrProfileId = (typeof GUIDE_PROFILE_IDS.hsr)[number];
type GenshinProfileId = (typeof GUIDE_PROFILE_IDS.genshin)[number];
type ZzzProfileId = (typeof GUIDE_PROFILE_IDS.zzz)[number];

const GENS_HIT_REACTION = new Set([
  "楓原万葉",
  "スクロース",
  "ウェンティ",
  "早柚",
  "夢見月瑞希",
  "ナヒーダ",
  "久岐忍",
  "雷主人公",
]);
const GENS_HP = new Set([
  "胡桃",
  "夜蘭",
  "フリーナ",
  "ヌヴィレット",
  "ニィロウ",
  "鍾離",
  "珊瑚宮心海",
  "白朮",
  "シグウィン",
  "キャンディス",
  "トーマ",
  "ディシア",
  "レイラ",
  "シャルロット",
  "ダリア",
]);
const GENS_DEF = new Set([
  "荒瀧一斗",
  "千織",
  "アルベド",
  "ノエル",
  "雲菫",
  "ゴロー",
  "シロネン",
  "カチーナ",
]);
const GENS_SUPPORT = new Set([
  "ベネット",
  "九条裟羅",
  "ファルザン",
  "オロルン",
  "イアンサ",
  "藍硯",
  "ヨォーヨ",
  "コレイ",
  "ディオナ",
  "バーバラ",
  "七七",
  "ドリー",
]);
const HSR_DOT = new Set([
  "カフカ",
  "ブラックスワン",
  "サンポ",
  "ルカ",
  "桂乃芬",
  "セイレンス",
  "ヒーゼル",
  "ダリア",
]);
const HSR_BREAK = new Set([
  "ホタル",
  "ブートヒル",
  "乱破",
  "帰忘の流離人",
  "ルアン・メェイ",
  "ギャラガー",
  "霊砂",
]);
const HSR_HP = new Set([
  "刃",
  "キャストリス",
  "モーディス",
  "ヒアンシー",
  "長夜月",
]);
const HSR_DEF = new Set(["アベンチュリン"]);
const HSR_SUSTAIN = new Set([
  "白露",
  "羅刹",
  "フォフォ",
  "リンクス",
  "ナターシャ",
  "ジェパード",
  "符玄",
  "丹恒・騰荒",
]);

/** HSR のロール分類。ガイド生成（generatedHsrGuide）とメタデータの期待プロファイル（expectedProfileFor）で同じ判定を使う。 */
export function hsrProfileIdFor(name: string, path: string): HsrProfileId {
  const normalizedPath = HSR_PATH_LABELS[path] ?? path;
  return HSR_DOT.has(name)
    ? "dot"
    : HSR_BREAK.has(name)
      ? "break"
      : HSR_HP.has(name)
        ? "hp"
        : HSR_DEF.has(name)
          ? "def"
          : HSR_SUSTAIN.has(name)
            ? "sustain"
            : normalizedPath === "調和" || normalizedPath === "記憶"
              ? "support"
              : normalizedPath === "存護"
                ? "tank"
                : "crit";
}

/** 原神のロール分類。 */
export function genshinProfileIdFor(name: string): GenshinProfileId {
  return GENS_HIT_REACTION.has(name)
    ? "em"
    : GENS_HP.has(name)
      ? "hp"
      : GENS_DEF.has(name)
        ? "def"
        : GENS_SUPPORT.has(name)
          ? "support"
          : "crit";
}

/** ZZZ のロール分類。特性（profession）だけで決まる。 */
export function zzzProfileIdFor(profession: string): ZzzProfileId {
  return profession === "Anomaly"
    ? "anomaly"
    : profession === "Stun"
      ? "stun"
      : profession === "Support"
        ? "support"
        : profession === "Defense"
          ? "tank"
          : profession === "Rupture"
            ? "rupture"
            : profession === "Armorer"
              ? "def"
              : "crit";
}

export function generatedHsrGuide(name: string, path: string): GuideDefinition {
  return projectGeneratedGuide(
    guideRecords,
    "HSR_PROFILES",
    hsrProfileIdFor(name, path),
    name
  );
}

export function generatedGenshinGuide(name: string): GuideDefinition {
  return projectGeneratedGuide(
    guideRecords,
    "GI_PROFILES",
    genshinProfileIdFor(name),
    name
  );
}

export function generatedZzzGuide(
  name: string,
  profession: string
): GuideDefinition {
  return projectGeneratedGuide(
    guideRecords,
    "ZZZ_PROFILES",
    zzzProfileIdFor(profession),
    name
  );
}
