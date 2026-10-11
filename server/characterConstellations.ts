import { createLegacyTexts as createHelperTexts } from "./content/legacyTexts";
import { sources as helperSources } from "../content/ja/guides/characterConstellations_helpers";
import { records as helperEn } from "../content/translations/en/characterConstellations_helpers";
import { records as helperZh } from "../content/translations/zh-CN/characterConstellations_helpers";
const _helperContent = createHelperTexts(helperSources, helperEn, helperZh);
import { createLegacyTexts } from "./content/legacyTexts";
import { sources as _sources } from "../content/ja/guides/characterConstellations";
import { records as _en } from "../content/translations/en/characterConstellations";
import { records as _zh } from "../content/translations/zh-CN/characterConstellations";
const _content = createLegacyTexts(_sources, _en, _zh);
import type { CharacterIdentity } from "./characterIdentity";
import type { StatKey, TierName } from "./buildAdvisor";
import { BATCH_17_CONSTELLATIONS } from "./batch17ConstellationData.generated";
import { ACTIVE_CATALOG_IDENTITIES } from "./fixtures/identityCatalogSnapshot";
import { BATCH23_GENSHIN_CONSTELLATIONS } from "./batch23GenshinData";

export type LocalizedText = { ja: string; en: string; "zh-CN": string };
export type ConstellationTargetChange = {
  key: StatKey;
  label: LocalizedText;
  unit: "%" | "";
  targets: Record<TierName, number>;
  reason: LocalizedText;
};
export type ConstellationEffect = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  name: LocalizedText;
  description: LocalizedText;
  targetChanges?: ConstellationTargetChange[];
  caution?: LocalizedText;
};
export type ConstellationProfile = {
  rankLabel: LocalizedText;
  acquiredRank: number;
  dataStatus: "curated" | "preparing";
  gameVersion: string;
  dataAsOf: string;
  updatedAt: string;
  sourceLabel: LocalizedText;
  sourceUrl: string;
  effects: ConstellationEffect[];
  activeTargetChanges: ConstellationTargetChange[];
};

const t = (ja: string, en: string, zh: string): LocalizedText => ({ ja, en, "zh-CN": zh });
const target = (key: StatKey, ja: string, en: string, zh: string, unit: "%" | "", strict: number, goal: number, baseline: number, reasonJa: string, reasonEn: string, reasonZh: string): ConstellationTargetChange => ({ key, label: t(ja, en, zh), unit, targets: { "厳選": strict, "目標": goal, "妥協": baseline }, reason: t(reasonJa, reasonEn, reasonZh) });
function effect(
  level: 1 | 2 | 3 | 4 | 5 | 6,
  jaName: string,
  enName: string,
  zhNameOrJa: string,
  jaOrEn: string,
  enOrZh: string,
  zhOrOptions?: string | Pick<ConstellationEffect, "targetChanges" | "caution">,
  maybeOptions: Pick<ConstellationEffect, "targetChanges" | "caution"> = {},
): ConstellationEffect {
  const shorthand = typeof zhOrOptions !== "string";
  const zhName = shorthand
    ? jaName.replaceAll("命ノ星座", "命之座").replaceAll("心象映画", "心象电影")
    : zhNameOrJa;
  const ja = shorthand ? zhNameOrJa : jaOrEn;
  const en = shorthand ? jaOrEn : enOrZh;
  const zh = shorthand ? enOrZh : zhOrOptions;
  const options = (shorthand ? zhOrOptions : maybeOptions) ?? {};
  return { level, name: t(jaName, enName, zhName), description: t(ja, en, zh), ...options };
}

type CuratedEntry = Omit<ConstellationProfile, "rankLabel" | "acquiredRank" | "dataStatus" | "activeTargetChanges">;

const SOURCE = {
  hsr: { gameVersion: "4.4", sourceLabel: _content.localized("guide.legacy.characterConstellations.b00001"), sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/437263" },
  genshin: { gameVersion: "7.0", sourceLabel: _content.localized("guide.legacy.characterConstellations.b00002"), sourceUrl: "https://game8.co/games/Genshin-Impact/archives/Furina-Best-Builds" },
  zzz: { gameVersion: "3.1", sourceLabel: _content.localized("guide.legacy.characterConstellations.b00003"), sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/436881" },
} as const;

const CURATED: Record<string, CuratedEntry> = {
  ...BATCH23_GENSHIN_CONSTELLATIONS,
  // 第20バッチ（2026-09-24）: アベンチュリン・波と戯れる夏。名称・本文とも StarRailRes の公式ゲームデータ（日本語・英語・中国語）。
  // 星魂1の全属性耐性貫通+24%は公開プロフィールの比較項目に無く、他は戦闘中・条件付きのため targetChanges は全段で空。
  "hsr:1513": { ...SOURCE.hsr, gameVersion: "4.5", sourceUrl: "https://game8.jp/houkaistarrail/794467", sourceLabel: _content.localized("guide.legacy.characterConstellations.b00004"), dataAsOf: "2026-09-24", updatedAt: "2026-09-24", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00001"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00002")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00003"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00004")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00005"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00006")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00007"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00008")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00009"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00010")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00011"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00012")),
  ] },
  // 第21バッチ（2026-09-28）: パール。名称・本文とも StarRailRes の公式ゲームデータ（日本語・英語・中国語）。
  // 星魂1の愉悦度上昇・2の愉悦ダメージ増加・6の耐性貫通はいずれも戦闘中・条件付きで、公開プロフィールの比較項目に無いため targetChanges は全段で空。
  "hsr:1503": { ...SOURCE.hsr, gameVersion: "4.6", sourceUrl: "https://game8.jp/houkaistarrail/759885", sourceLabel: _content.localized("guide.legacy.characterConstellations.b00005"), dataAsOf: "2026-09-28", updatedAt: "2026-09-28", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00013"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00014")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00015"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00016")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00017"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00018")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00019"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00020")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00021"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00022")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00023"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00024")),
  ] },
  // 第20バッチ（2026-09-24）: ニコ・シーシィアの心象映画を補完。日本語は Game8・GameWith の2出典が全6段一致、
  // 英語名・英語本文は Game8 英語版。中国語は日本語本文からの訳（公式中国語名は未照合）。
  // 公開プロフィールへ加算できる無条件の固定値は無いため targetChanges は全段で空。
  "zzz:1031": {
    ...SOURCE.zzz, gameVersion: "3.2", sourceUrl: "https://game8.jp/zenless/607758", sourceLabel: _content.localized("guide.legacy.characterConstellations.b00006"), dataAsOf: "2026-09-24", updatedAt: "2026-09-24", effects: [
      effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00025"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00026")),
      effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00027"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00028")),
      effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00029"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00030")),
      effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00031"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00032")),
      effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00033"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00034")),
      effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00035"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00036")),
    ],
  },
  "zzz:1521": {
    ...SOURCE.zzz, gameVersion: "3.2", sourceUrl: "https://game8.jp/zenless/760629", sourceLabel: _content.localized("guide.legacy.characterConstellations.b00007"), dataAsOf: "2026-09-24", updatedAt: "2026-09-24", effects: [
      effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00037"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00038")),
      effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00039"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00040")),
      effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00041"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00042")),
      effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00043"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00044")),
      effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00045"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00046")),
      effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00047"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00048")),
    ],
  },
  // 第19バッチ（2026-09-13）: クラレッタ。日本語名は Game8 日本語版を採り、Game8 英語版の
  // 心象映画名（Bloodstained Chronicle ほか）と対応することを確認した。効果本文は Game8・GameWith の2出典が一致。
  // 公開プロフィールへ加算できる無条件の固定値は無いため targetChanges は全段で空。
  "zzz:1611": {
    ...SOURCE.zzz, gameVersion: "3.2", dataAsOf: "2026-09-12", updatedAt: "2026-09-13", effects: [
      effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00049"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00050")),
      effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00051"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00052")),
      effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00053"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00054")),
      effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00055"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00056")),
      effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00057"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00058")),
      effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00059"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00060")),
    ],
  },
  "hsr:1310": {
    ...SOURCE.hsr, dataAsOf: "2026-08-25", updatedAt: "2026-08-25", effects: [
      effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00061"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00062")),
      effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00063"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00064")),
      effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00065"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00066")),
      effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00067"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00068")),
      effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00069"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00070")),
      effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00071"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00072")),
    ],
  },
  "hsr:1402": {
    ...SOURCE.hsr, sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/485982", dataAsOf: "2026-08-25", updatedAt: "2026-08-25", effects: [
      effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00073"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00074")),
      effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00075"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00076")),
      effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00077"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00078")),
      effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00079"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00080")),
      effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00081"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00082")),
      effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00083"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00084")),
    ],
  },
  "hsr:1405": {
    ...SOURCE.hsr, sourceUrl: "https://www.icy-veins.com/honkai-star-rail/anaxa-profile", dataAsOf: "2026-08-25", updatedAt: "2026-08-25", effects: [
      effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00085"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00086")),
      effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00087"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00088")),
      effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00089"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00090")),
      effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00091"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00092")),
      effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00093"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00094")),
      effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00095"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00096")),
    ],
  },
  "hsr:1407": {
    ...SOURCE.hsr, sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/486305", dataAsOf: "2026-08-25", updatedAt: "2026-08-25", effects: [
      effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00097"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00098")),
      effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00099"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00100")),
      effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00101"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00102")),
      effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00103"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00104")),
      effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00105"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00106")),
      effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00107"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00108")),
    ],
  },
  "hsr:1309": {
    ...SOURCE.hsr, sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/Robin-Best-Builds", dataAsOf: "2026-08-25", updatedAt: "2026-08-25", effects: [
      effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00109"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00110")),
      effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00111"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00112")),
      effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00113"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00114")),
      effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00115"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00116")),
      effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00117"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00118")),
      effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00119"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00120")),
    ],
  },
  "hsr:1303": {
    ...SOURCE.hsr, sourceUrl: "https://www.prydwen.gg/star-rail/characters/ruan-mei", dataAsOf: "2026-08-25", updatedAt: "2026-08-25", effects: [
      effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00121"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00122")),
      effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00123"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00124")),
      effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00125"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00126")),
      effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00127"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00128")),
      effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00129"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00130")),
      effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00131"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00132")),
    ],
  },
  "hsr:1220": {
    ...SOURCE.hsr, sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/462222", dataAsOf: "2026-08-25", updatedAt: "2026-08-25", effects: [
      effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00133"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00134")),
      effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00135"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00136")),
      effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00137"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00138")),
      effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00139"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00140")),
      effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00141"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00142")),
      effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00143"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00144")),
    ],
  },
  "genshin:楓原万葉": {
    ...SOURCE.genshin, sourceUrl: "https://game8.co/games/Genshin-Impact/archives/332826", dataAsOf: "2026-08-25", updatedAt: "2026-08-25", effects: [
      effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00145"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00146")),
      effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00147"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00148"), { targetChanges: [target("elementalMastery", ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00149"), "", 800, 650, 500, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00150"))] }),
      effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00151"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00152")),
      effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00153"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00154")),
      effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00155"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00156")),
      effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00157"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00158")),
    ],
  },
  "genshin:ベネット": {
    ...SOURCE.genshin, sourceUrl: "https://game8.co/games/Genshin-Impact/archives/Bennett-Best-Builds", dataAsOf: "2026-08-25", updatedAt: "2026-08-25", effects: [
      effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00159"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00160")),
      effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00161"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00162")),
      effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00163"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00164")),
      effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00165"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00166")),
      effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00167"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00168")),
      effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00169"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00170"), { caution: _content.localized("guide.legacy.characterConstellations.b00008") }),
    ],
  },
  "genshin:フリーナ": {
    ...SOURCE.genshin, dataAsOf: "2026-08-25", updatedAt: "2026-08-25", effects: [
      effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00171"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00172")),
      effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00173"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00174")),
      effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00175"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00176")),
      effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00177"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00178")),
      effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00179"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00180")),
      effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00181"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00182")),
    ],
  },
  "genshin:10000103": {
    ...SOURCE.genshin, sourceUrl: "https://game8.co/games/Genshin-Impact/archives/461997", dataAsOf: "2026-08-25", updatedAt: "2026-08-25", effects: [
      effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00183"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00184")),
      effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00185"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00186")),
      effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00187"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00188")),
      effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00189"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00190")),
      effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00191"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00192")),
      effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00193"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00194")),
    ],
  },
  "genshin:10000096": {
    ...SOURCE.genshin, sourceUrl: "https://gamewith.net/genshin-impact/article/show/30553", dataAsOf: "2026-08-25", updatedAt: "2026-08-25", effects: [
      effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00195"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00196")),
      effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00197"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00198")),
      effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00199"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00200")),
      effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00201"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00202")),
      effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00203"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00204")),
      effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00205"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00206")),
    ],
  },
  "genshin:10000087": {
    ...SOURCE.genshin, sourceUrl: "https://gamewith.net/genshin-impact/article/show/39683", dataAsOf: "2026-08-25", updatedAt: "2026-08-25", effects: [
      effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00207"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00208")),
      effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00209"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00210")),
      effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00211"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00212")),
      effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00213"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00214")),
      effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00215"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00216")),
      effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00217"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00218")),
    ],
  },
  "genshin:10000060": {
    ...SOURCE.genshin, sourceUrl: "https://gamewith.net/genshin-impact/article/show/33289", dataAsOf: "2026-08-25", updatedAt: "2026-08-25", effects: [
      effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00219"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00220")),
      effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00221"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00222")),
      effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00223"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00224")),
      effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00225"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00226")),
      effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00227"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00228")),
      effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00229"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00230")),
    ],
  },
  "zzz:1091": {
    ...SOURCE.zzz, dataAsOf: "2026-08-25", updatedAt: "2026-08-25", effects: [
      effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00231"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00232")),
      effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00233"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00234"), { targetChanges: [target("critRate", ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00235"), "%", 65, 55, 45, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00236"))] }),
      effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00237"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00238")),
      effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00239"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00240")),
      effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00241"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00242")),
      effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00243"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00244")),
    ],
  },
  "zzz:1411": {
    ...SOURCE.zzz, sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/527726", dataAsOf: "2026-08-25", updatedAt: "2026-08-25", effects: [
      effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00245"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00246")),
      effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00247"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00248")),
      effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00249"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00250")),
      effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00251"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00252")),
      effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00253"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00254")),
      effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00255"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00256")),
    ],
  },
  "zzz:1221": {
    ...SOURCE.zzz, sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/474448", dataAsOf: "2026-08-25", updatedAt: "2026-08-25", effects: [
      effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00257"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00258")),
      effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00259"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00260")),
      effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00261"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00262")),
      effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00263"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00264")),
      effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00265"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00266")),
      effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00267"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00268")),
    ],
  },
  "zzz:1311": {
    ...SOURCE.zzz, sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/490842", dataAsOf: "2026-08-25", updatedAt: "2026-08-25", effects: [
      effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00269"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00270")),
      effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00271"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00272")),
      effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00273"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00274")),
      effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00275"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00276")),
      effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00277"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00278")),
      effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00279"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00280")),
    ],
  },
  "zzz:1161": {
    ...SOURCE.zzz, sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/474509", dataAsOf: "2026-08-25", updatedAt: "2026-08-25", effects: [
      effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00281"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00282")),
      effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00283"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00284")),
      effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00285"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00286")),
      effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00287"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00288")),
      effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00289"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00290")),
      effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00291"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00292")),
    ],
  },
  "zzz:1581": {
    ...SOURCE.zzz, sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/588854", dataAsOf: "2026-08-25", updatedAt: "2026-08-25", effects: [
      effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00293"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00294")),
      effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00295"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00296")),
      effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00297"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00298")),
      effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00299"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00300")),
      effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00301"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00302")),
      effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00303"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00304")),
    ],
  },
  "hsr:1313": {
    ...SOURCE.hsr, sourceUrl: "https://www.prydwen.gg/star-rail/characters/sunday", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
      effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00305"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00306")),
      effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00307"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00308")),
      effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00309"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00310")),
      effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00311"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00312")),
      effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00313"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00314")),
      effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00315"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00316")),
    ],
  },
  "hsr:1315": {
    ...SOURCE.hsr, sourceUrl: "https://www.prydwen.gg/star-rail/characters/boothill", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
      effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00317"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00318")),
      effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00319"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00320")),
      effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00321"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00322")),
      effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00323"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00324")),
      effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00325"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00326")),
      effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00327"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00328")),
    ],
  },
  "hsr:1308": {
    ...SOURCE.hsr, sourceUrl: "https://www.prydwen.gg/star-rail/characters/acheron", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
      effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00329"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00330")),
      effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00331"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00332")),
      effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00333"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00334")),
      effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00335"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00336")),
      effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00337"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00338")),
      effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00339"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00340")),
    ],
  },
  "hsr:1222": {
    ...SOURCE.hsr, sourceUrl: "https://gamewith.jp/houkaistarrail/article/show/457049", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
      effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00341"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00342")),
      effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00343"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00344")),
      effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00345"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00346")),
      effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00347"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00348")),
      effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00349"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00350")),
      effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00351"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00352")),
    ],
  },
  "genshin:10000052": {
    ...SOURCE.genshin, sourceUrl: "https://game8.co/games/Genshin-Impact/archives/337161", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
      effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00353"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00354")),
      effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00355"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00356")),
      effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00357"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00358")),
      effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00359"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00360")),
      effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00361"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00362")),
      effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00363"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00364")),
    ],
  },
  "genshin:10000073": {
    ...SOURCE.genshin, sourceUrl: "https://game8.co/games/Genshin-Impact/archives/Nahida-Best-Builds", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
      effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00365"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00366")),
      effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00367"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00368")),
      effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00369"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00370")),
      effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00371"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00372")),
      effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00373"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00374")),
      effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00375"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00376")),
    ],
  },
  "genshin:10000030": {
    ...SOURCE.genshin, sourceUrl: "https://game8.co/games/Genshin-Impact/archives/305858", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
      effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00377"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00378")),
      effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00379"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00380")),
      effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00381"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00382")),
      effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00383"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00384")),
      effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00385"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00386")),
      effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00387"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00388")),
    ],
  },
  "zzz:1331": {
    ...SOURCE.zzz, sourceUrl: "https://game8.jp/zenless/673769", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
      effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00389"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00390")),
      effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00391"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00392")),
      effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00393"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00394")),
      effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00395"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00396")),
      effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00397"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00398")),
      effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00399"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00400")),
    ],
  },
  "zzz:1261": {
    ...SOURCE.zzz, sourceUrl: "https://game8.jp/zenless/625565", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
      effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00401"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00402")),
      effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00403"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00404")),
      effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00405"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00406")),
      effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00407"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00408")),
      effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00409"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00410")),
      effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00411"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00412")),
    ],
  },
  "zzz:1191": {
    ...SOURCE.zzz, sourceUrl: "https://game8.jp/zenless/607800", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
      effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00413"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00414")),
      effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00415"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00416")),
      effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00417"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00418")),
      effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00419"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00420")),
      effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00421"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00422")),
      effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00423"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00424")),
    ],
  },
  "hsr:1304": {
    ...SOURCE.hsr, sourceUrl: "https://www.prydwen.gg/star-rail/characters/aventurine", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
      effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00425"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00426")),
      effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00427"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00428")),
      effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00429"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00430")),
      effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00431"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00432")),
      effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00433"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00434")),
      effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00435"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00436")),
    ],
  },
  "hsr:1112": {
    ...SOURCE.hsr, sourceUrl: "https://www.prydwen.gg/star-rail/characters/topaz", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
      effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00437"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00438")),
      effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00439"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00440")),
      effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00441"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00442")),
      effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00443"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00444")),
      effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00445"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00446")),
      effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00447"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00448")),
    ],
  },
  "hsr:1306": {
    ...SOURCE.hsr, sourceUrl: "https://www.prydwen.gg/star-rail/characters/sparkle", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
      effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00449"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00450")),
      effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00451"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00452")),
      effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00453"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00454")),
      effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00455"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00456")),
      effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00457"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00458")),
      effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00459"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00460")),
    ],
  },
  "hsr:1213": {
    ...SOURCE.hsr, sourceUrl: "https://www.prydwen.gg/star-rail/characters/imbibitor-lunae", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
      effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00461"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00462")),
      effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00463"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00464")),
      effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00465"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00466")),
      effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00467"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00468")),
      effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00469"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00470")),
      effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00471"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00472")),
    ],
  },
  "genshin:10000078": {
    ...SOURCE.genshin, sourceUrl: "https://game8.co/games/Genshin-Impact/archives/383712", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
      effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00473"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00474")),
      effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00475"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00476")),
      effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00477"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00478")),
      effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00479"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00480")),
      effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00481"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00482")),
      effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00483"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00484")),
    ],
  },
  "genshin:10000046": {
    ...SOURCE.genshin, sourceUrl: "https://game8.co/games/Genshin-Impact/archives/314347", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
      effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00485"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00486")),
      effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00487"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00488")),
      effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00489"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00490")),
      effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00491"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00492")),
      effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00493"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00494")),
      effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00495"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00496")),
    ],
  },
  "genshin:10000065": {
    ...SOURCE.genshin, sourceUrl: "https://game8.co/games/Genshin-Impact/archives/346199", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
      effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00497"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00498")),
      effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00499"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00500")),
      effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00501"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00502")),
      effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00503"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00504")),
      effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00505"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00506")),
      effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00507"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00508")),
    ],
  },
  "zzz:1271": {
    ...SOURCE.zzz, sourceUrl: "https://www.prydwen.gg/zenless/characters/seth", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
      effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00509"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00510")),
      effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00511"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00512")),
      effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00513"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00514")),
      effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00515"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00516")),
      effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00517"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00518")),
      effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00519"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00520")),
    ],
  },
  "zzz:1281": {
    ...SOURCE.zzz, sourceUrl: "https://www.prydwen.gg/zenless/characters/piper", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
      effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00521"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00522")),
      effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00523"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00524")),
      effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00525"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00526")),
      effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00527"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00528")),
      effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00529"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00530")),
      effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00531"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00532")),
    ],
  },
  "zzz:1131": {
    ...SOURCE.zzz, sourceUrl: "https://www.prydwen.gg/zenless/characters/soukaku", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
      effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00533"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00534")),
      effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00535"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00536")),
      effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00537"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00538")),
      effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00539"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00540")),
      effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00541"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00542")),
      effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00543"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00544")),
    ],
  },
  // 第15バッチ（2026-09-05）。旧 server/batch15Constellations.ts から source ID キーで移設。
  "hsr:1207": {"gameVersion":"4.5","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.characterConstellations.b00009"),"sourceUrl":"https://game8.jp/houkaistarrail/526440","effects":[{"level":1,"name":_content.localized("guide.legacy.characterConstellations.b00010"),"description":_content.localized("guide.legacy.characterConstellations.b00011"),"caution":_content.localized("guide.legacy.characterConstellations.b00012")},{"level":2,"name":_content.localized("guide.legacy.characterConstellations.b00013"),"description":_content.localized("guide.legacy.characterConstellations.b00014"),"caution":_content.localized("guide.legacy.characterConstellations.b00015")},{"level":3,"name":_content.localized("guide.legacy.characterConstellations.b00016"),"description":_content.localized("guide.legacy.characterConstellations.b00017"),"caution":_content.localized("guide.legacy.characterConstellations.b00018")},{"level":4,"name":_content.localized("guide.legacy.characterConstellations.b00019"),"description":_content.localized("guide.legacy.characterConstellations.b00020"),"caution":_content.localized("guide.legacy.characterConstellations.b00021")},{"level":5,"name":_content.localized("guide.legacy.characterConstellations.b00022"),"description":_content.localized("guide.legacy.characterConstellations.b00023"),"caution":_content.localized("guide.legacy.characterConstellations.b00024")},{"level":6,"name":_content.localized("guide.legacy.characterConstellations.b00025"),"description":_content.localized("guide.legacy.characterConstellations.b00026"),"caution":_content.localized("guide.legacy.characterConstellations.b00027")}]},
  "hsr:1001": {"gameVersion":"4.5","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.characterConstellations.b00028"),"sourceUrl":"https://game8.jp/houkaistarrail/524695","effects":[{"level":1,"name":_content.localized("guide.legacy.characterConstellations.b00029"),"description":_content.localized("guide.legacy.characterConstellations.b00030"),"caution":_content.localized("guide.legacy.characterConstellations.b00031")},{"level":2,"name":_content.localized("guide.legacy.characterConstellations.b00032"),"description":_content.localized("guide.legacy.characterConstellations.b00033"),"caution":_content.localized("guide.legacy.characterConstellations.b00034")},{"level":3,"name":_content.localized("guide.legacy.characterConstellations.b00035"),"description":_content.localized("guide.legacy.characterConstellations.b00036"),"caution":_content.localized("guide.legacy.characterConstellations.b00037")},{"level":4,"name":_content.localized("guide.legacy.characterConstellations.b00038"),"description":_content.localized("guide.legacy.characterConstellations.b00039"),"caution":_content.localized("guide.legacy.characterConstellations.b00040")},{"level":5,"name":_content.localized("guide.legacy.characterConstellations.b00041"),"description":_content.localized("guide.legacy.characterConstellations.b00042"),"caution":_content.localized("guide.legacy.characterConstellations.b00043")},{"level":6,"name":_content.localized("guide.legacy.characterConstellations.b00044"),"description":_content.localized("guide.legacy.characterConstellations.b00045"),"caution":_content.localized("guide.legacy.characterConstellations.b00046")}]},
  "hsr:1413": {"gameVersion":"4.5","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.characterConstellations.b00047"),"sourceUrl":"https://game8.jp/houkaistarrail/708951","effects":[{"level":1,"name":_content.localized("guide.legacy.characterConstellations.b00048"),"description":_content.localized("guide.legacy.characterConstellations.b00049"),"caution":_content.localized("guide.legacy.characterConstellations.b00050")},{"level":2,"name":_content.localized("guide.legacy.characterConstellations.b00051"),"description":_content.localized("guide.legacy.characterConstellations.b00052"),"caution":_content.localized("guide.legacy.characterConstellations.b00053")},{"level":3,"name":_content.localized("guide.legacy.characterConstellations.b00054"),"description":_content.localized("guide.legacy.characterConstellations.b00055"),"caution":_content.localized("guide.legacy.characterConstellations.b00056")},{"level":4,"name":_content.localized("guide.legacy.characterConstellations.b00057"),"description":_content.localized("guide.legacy.characterConstellations.b00058"),"caution":_content.localized("guide.legacy.characterConstellations.b00059")},{"level":5,"name":_content.localized("guide.legacy.characterConstellations.b00060"),"description":_content.localized("guide.legacy.characterConstellations.b00061"),"caution":_content.localized("guide.legacy.characterConstellations.b00062")},{"level":6,"name":_content.localized("guide.legacy.characterConstellations.b00063"),"description":_content.localized("guide.legacy.characterConstellations.b00064"),"caution":_content.localized("guide.legacy.characterConstellations.b00065")}]},
  "hsr:1202": {"gameVersion":"4.5","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.characterConstellations.b00066"),"sourceUrl":"https://game8.jp/houkaistarrail/524678","effects":[{"level":1,"name":_content.localized("guide.legacy.characterConstellations.b00067"),"description":_content.localized("guide.legacy.characterConstellations.b00068"),"caution":_content.localized("guide.legacy.characterConstellations.b00069")},{"level":2,"name":_content.localized("guide.legacy.characterConstellations.b00070"),"description":_content.localized("guide.legacy.characterConstellations.b00071"),"caution":_content.localized("guide.legacy.characterConstellations.b00072")},{"level":3,"name":_content.localized("guide.legacy.characterConstellations.b00073"),"description":_content.localized("guide.legacy.characterConstellations.b00074"),"caution":_content.localized("guide.legacy.characterConstellations.b00075")},{"level":4,"name":_content.localized("guide.legacy.characterConstellations.b00076"),"description":_content.localized("guide.legacy.characterConstellations.b00077"),"caution":_content.localized("guide.legacy.characterConstellations.b00078")},{"level":5,"name":_content.localized("guide.legacy.characterConstellations.b00079"),"description":_content.localized("guide.legacy.characterConstellations.b00080"),"caution":_content.localized("guide.legacy.characterConstellations.b00081")},{"level":6,"name":_content.localized("guide.legacy.characterConstellations.b00082"),"description":_content.localized("guide.legacy.characterConstellations.b00083"),"caution":_content.localized("guide.legacy.characterConstellations.b00084")}]},
  "hsr:1211": {"gameVersion":"4.5","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.characterConstellations.b00085"),"sourceUrl":"https://game8.jp/houkaistarrail/523995","effects":[{"level":1,"name":_content.localized("guide.legacy.characterConstellations.b00086"),"description":_content.localized("guide.legacy.characterConstellations.b00087"),"caution":_content.localized("guide.legacy.characterConstellations.b00088")},{"level":2,"name":_content.localized("guide.legacy.characterConstellations.b00089"),"description":_content.localized("guide.legacy.characterConstellations.b00090"),"caution":_content.localized("guide.legacy.characterConstellations.b00091")},{"level":3,"name":_content.localized("guide.legacy.characterConstellations.b00092"),"description":_content.localized("guide.legacy.characterConstellations.b00093"),"caution":_content.localized("guide.legacy.characterConstellations.b00094")},{"level":4,"name":_content.localized("guide.legacy.characterConstellations.b00095"),"description":_content.localized("guide.legacy.characterConstellations.b00096"),"caution":_content.localized("guide.legacy.characterConstellations.b00097")},{"level":5,"name":_content.localized("guide.legacy.characterConstellations.b00098"),"description":_content.localized("guide.legacy.characterConstellations.b00099"),"caution":_content.localized("guide.legacy.characterConstellations.b00100")},{"level":6,"name":_content.localized("guide.legacy.characterConstellations.b00101"),"description":_content.localized("guide.legacy.characterConstellations.b00102"),"caution":_content.localized("guide.legacy.characterConstellations.b00103")}]},
  "hsr:1505": {"gameVersion":"4.5","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.characterConstellations.b00104"),"sourceUrl":"https://game8.jp/houkaistarrail/756941","effects":[{"level":1,"name":_content.localized("guide.legacy.characterConstellations.b00105"),"description":_content.localized("guide.legacy.characterConstellations.b00106"),"caution":_content.localized("guide.legacy.characterConstellations.b00107")},{"level":2,"name":_content.localized("guide.legacy.characterConstellations.b00108"),"description":_content.localized("guide.legacy.characterConstellations.b00109"),"caution":_content.localized("guide.legacy.characterConstellations.b00110")},{"level":3,"name":_content.localized("guide.legacy.characterConstellations.b00111"),"description":_content.localized("guide.legacy.characterConstellations.b00112"),"caution":_content.localized("guide.legacy.characterConstellations.b00113")},{"level":4,"name":_content.localized("guide.legacy.characterConstellations.b00114"),"description":_content.localized("guide.legacy.characterConstellations.b00115"),"caution":_content.localized("guide.legacy.characterConstellations.b00116")},{"level":5,"name":_content.localized("guide.legacy.characterConstellations.b00117"),"description":_content.localized("guide.legacy.characterConstellations.b00118"),"caution":_content.localized("guide.legacy.characterConstellations.b00119")},{"level":6,"name":_content.localized("guide.legacy.characterConstellations.b00120"),"description":_content.localized("guide.legacy.characterConstellations.b00121"),"caution":_content.localized("guide.legacy.characterConstellations.b00122")}]},
  "hsr:1209": {"gameVersion":"4.5","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.characterConstellations.b00123"),"sourceUrl":"https://game8.jp/houkaistarrail/524675","effects":[{"level":1,"name":_content.localized("guide.legacy.characterConstellations.b00124"),"description":_content.localized("guide.legacy.characterConstellations.b00125"),"caution":_content.localized("guide.legacy.characterConstellations.b00126")},{"level":2,"name":_content.localized("guide.legacy.characterConstellations.b00127"),"description":_content.localized("guide.legacy.characterConstellations.b00128"),"caution":_content.localized("guide.legacy.characterConstellations.b00129")},{"level":3,"name":_content.localized("guide.legacy.characterConstellations.b00130"),"description":_content.localized("guide.legacy.characterConstellations.b00131"),"caution":_content.localized("guide.legacy.characterConstellations.b00132")},{"level":4,"name":_content.localized("guide.legacy.characterConstellations.b00133"),"description":_content.localized("guide.legacy.characterConstellations.b00134"),"caution":_content.localized("guide.legacy.characterConstellations.b00135")},{"level":5,"name":_content.localized("guide.legacy.characterConstellations.b00136"),"description":_content.localized("guide.legacy.characterConstellations.b00137"),"caution":_content.localized("guide.legacy.characterConstellations.b00138")},{"level":6,"name":_content.localized("guide.legacy.characterConstellations.b00139"),"description":_content.localized("guide.legacy.characterConstellations.b00140"),"caution":_content.localized("guide.legacy.characterConstellations.b00141")}]},
  "hsr:1003": {"gameVersion":"4.5","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.characterConstellations.b00142"),"sourceUrl":"https://game8.jp/houkaistarrail/524693","effects":[{"level":1,"name":_content.localized("guide.legacy.characterConstellations.b00143"),"description":_content.localized("guide.legacy.characterConstellations.b00144"),"caution":_content.localized("guide.legacy.characterConstellations.b00145")},{"level":2,"name":_content.localized("guide.legacy.characterConstellations.b00146"),"description":_content.localized("guide.legacy.characterConstellations.b00147"),"caution":_content.localized("guide.legacy.characterConstellations.b00148")},{"level":3,"name":_content.localized("guide.legacy.characterConstellations.b00149"),"description":_content.localized("guide.legacy.characterConstellations.b00150"),"caution":_content.localized("guide.legacy.characterConstellations.b00151")},{"level":4,"name":_content.localized("guide.legacy.characterConstellations.b00152"),"description":_content.localized("guide.legacy.characterConstellations.b00153"),"caution":_content.localized("guide.legacy.characterConstellations.b00154")},{"level":5,"name":_content.localized("guide.legacy.characterConstellations.b00155"),"description":_content.localized("guide.legacy.characterConstellations.b00156"),"caution":_content.localized("guide.legacy.characterConstellations.b00157")},{"level":6,"name":_content.localized("guide.legacy.characterConstellations.b00158"),"description":_content.localized("guide.legacy.characterConstellations.b00159"),"caution":_content.localized("guide.legacy.characterConstellations.b00160")}]},
  "genshin:10000016": {"gameVersion":"7.0","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.characterConstellations.b00161"),"sourceUrl":"https://game8.jp/genshin/352605","effects":[{"level":1,"name":_content.localized("guide.legacy.characterConstellations.b00162"),"description":_content.localized("guide.legacy.characterConstellations.b00163"),"caution":_content.localized("guide.legacy.characterConstellations.b00164")},{"level":2,"name":_content.localized("guide.legacy.characterConstellations.b00165"),"description":_content.localized("guide.legacy.characterConstellations.b00166"),"caution":_content.localized("guide.legacy.characterConstellations.b00167")},{"level":3,"name":_content.localized("guide.legacy.characterConstellations.b00168"),"description":_content.localized("guide.legacy.characterConstellations.b00169"),"caution":_content.localized("guide.legacy.characterConstellations.b00170")},{"level":4,"name":_content.localized("guide.legacy.characterConstellations.b00171"),"description":_content.localized("guide.legacy.characterConstellations.b00172"),"caution":_content.localized("guide.legacy.characterConstellations.b00173")},{"level":5,"name":_content.localized("guide.legacy.characterConstellations.b00174"),"description":_content.localized("guide.legacy.characterConstellations.b00175"),"caution":_content.localized("guide.legacy.characterConstellations.b00176")},{"level":6,"name":_content.localized("guide.legacy.characterConstellations.b00177"),"description":_content.localized("guide.legacy.characterConstellations.b00178"),"caution":_content.localized("guide.legacy.characterConstellations.b00179")}]},
  "genshin:10000123": {"gameVersion":"7.0","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.characterConstellations.b00180"),"sourceUrl":"https://game8.jp/genshin/707122","effects":[{"level":1,"name":_content.localized("guide.legacy.characterConstellations.b00181"),"description":_content.localized("guide.legacy.characterConstellations.b00182"),"caution":_content.localized("guide.legacy.characterConstellations.b00183")},{"level":2,"name":_content.localized("guide.legacy.characterConstellations.b00184"),"description":_content.localized("guide.legacy.characterConstellations.b00185"),"caution":_content.localized("guide.legacy.characterConstellations.b00186")},{"level":3,"name":_content.localized("guide.legacy.characterConstellations.b00187"),"description":_content.localized("guide.legacy.characterConstellations.b00188"),"caution":_content.localized("guide.legacy.characterConstellations.b00189")},{"level":4,"name":_content.localized("guide.legacy.characterConstellations.b00190"),"description":_content.localized("guide.legacy.characterConstellations.b00191"),"caution":_content.localized("guide.legacy.characterConstellations.b00192")},{"level":5,"name":_content.localized("guide.legacy.characterConstellations.b00193"),"description":_content.localized("guide.legacy.characterConstellations.b00194"),"caution":_content.localized("guide.legacy.characterConstellations.b00195")},{"level":6,"name":_content.localized("guide.legacy.characterConstellations.b00196"),"description":_content.localized("guide.legacy.characterConstellations.b00197"),"caution":_content.localized("guide.legacy.characterConstellations.b00198")}]},
  "genshin:10000050": {"gameVersion":"7.0","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.characterConstellations.b00199"),"sourceUrl":"https://game8.jp/genshin/395527","effects":[{"level":1,"name":_content.localized("guide.legacy.characterConstellations.b00200"),"description":_content.localized("guide.legacy.characterConstellations.b00201"),"caution":_content.localized("guide.legacy.characterConstellations.b00202")},{"level":2,"name":_content.localized("guide.legacy.characterConstellations.b00203"),"description":_content.localized("guide.legacy.characterConstellations.b00204"),"caution":_content.localized("guide.legacy.characterConstellations.b00205")},{"level":3,"name":_content.localized("guide.legacy.characterConstellations.b00206"),"description":_content.localized("guide.legacy.characterConstellations.b00207"),"caution":_content.localized("guide.legacy.characterConstellations.b00208")},{"level":4,"name":_content.localized("guide.legacy.characterConstellations.b00209"),"description":_content.localized("guide.legacy.characterConstellations.b00210"),"caution":_content.localized("guide.legacy.characterConstellations.b00211")},{"level":5,"name":_content.localized("guide.legacy.characterConstellations.b00212"),"description":_content.localized("guide.legacy.characterConstellations.b00213"),"caution":_content.localized("guide.legacy.characterConstellations.b00214")},{"level":6,"name":_content.localized("guide.legacy.characterConstellations.b00215"),"description":_content.localized("guide.legacy.characterConstellations.b00216"),"caution":_content.localized("guide.legacy.characterConstellations.b00217")}]},
  "genshin:10000068": {"gameVersion":"7.0","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.characterConstellations.b00218"),"sourceUrl":"https://game8.jp/genshin/466770","effects":[{"level":1,"name":_content.localized("guide.legacy.characterConstellations.b00219"),"description":_content.localized("guide.legacy.characterConstellations.b00220"),"caution":_content.localized("guide.legacy.characterConstellations.b00221")},{"level":2,"name":_content.localized("guide.legacy.characterConstellations.b00222"),"description":_content.localized("guide.legacy.characterConstellations.b00223"),"caution":_content.localized("guide.legacy.characterConstellations.b00224")},{"level":3,"name":_content.localized("guide.legacy.characterConstellations.b00225"),"description":_content.localized("guide.legacy.characterConstellations.b00226"),"caution":_content.localized("guide.legacy.characterConstellations.b00227")},{"level":4,"name":_content.localized("guide.legacy.characterConstellations.b00228"),"description":_content.localized("guide.legacy.characterConstellations.b00229"),"caution":_content.localized("guide.legacy.characterConstellations.b00230")},{"level":5,"name":_content.localized("guide.legacy.characterConstellations.b00231"),"description":_content.localized("guide.legacy.characterConstellations.b00232"),"caution":_content.localized("guide.legacy.characterConstellations.b00233")},{"level":6,"name":_content.localized("guide.legacy.characterConstellations.b00234"),"description":_content.localized("guide.legacy.characterConstellations.b00235"),"caution":_content.localized("guide.legacy.characterConstellations.b00236")}]},
  "genshin:10000091": {"gameVersion":"7.0","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.characterConstellations.b00237"),"sourceUrl":"https://game8.jp/genshin/539458","effects":[{"level":1,"name":_content.localized("guide.legacy.characterConstellations.b00238"),"description":_content.localized("guide.legacy.characterConstellations.b00239"),"caution":_content.localized("guide.legacy.characterConstellations.b00240")},{"level":2,"name":_content.localized("guide.legacy.characterConstellations.b00241"),"description":_content.localized("guide.legacy.characterConstellations.b00242"),"caution":_content.localized("guide.legacy.characterConstellations.b00243")},{"level":3,"name":_content.localized("guide.legacy.characterConstellations.b00244"),"description":_content.localized("guide.legacy.characterConstellations.b00245"),"caution":_content.localized("guide.legacy.characterConstellations.b00246")},{"level":4,"name":_content.localized("guide.legacy.characterConstellations.b00247"),"description":_content.localized("guide.legacy.characterConstellations.b00248"),"caution":_content.localized("guide.legacy.characterConstellations.b00249")},{"level":5,"name":_content.localized("guide.legacy.characterConstellations.b00250"),"description":_content.localized("guide.legacy.characterConstellations.b00251"),"caution":_content.localized("guide.legacy.characterConstellations.b00252")},{"level":6,"name":_content.localized("guide.legacy.characterConstellations.b00253"),"description":_content.localized("guide.legacy.characterConstellations.b00254"),"caution":_content.localized("guide.legacy.characterConstellations.b00255")}]},
  "genshin:10000070": {"gameVersion":"7.0","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.characterConstellations.b00256"),"sourceUrl":"https://game8.jp/genshin/468761","effects":[{"level":1,"name":_content.localized("guide.legacy.characterConstellations.b00257"),"description":_content.localized("guide.legacy.characterConstellations.b00258"),"caution":_content.localized("guide.legacy.characterConstellations.b00259")},{"level":2,"name":_content.localized("guide.legacy.characterConstellations.b00260"),"description":_content.localized("guide.legacy.characterConstellations.b00261"),"caution":_content.localized("guide.legacy.characterConstellations.b00262")},{"level":3,"name":_content.localized("guide.legacy.characterConstellations.b00263"),"description":_content.localized("guide.legacy.characterConstellations.b00264"),"caution":_content.localized("guide.legacy.characterConstellations.b00265")},{"level":4,"name":_content.localized("guide.legacy.characterConstellations.b00266"),"description":_content.localized("guide.legacy.characterConstellations.b00267"),"caution":_content.localized("guide.legacy.characterConstellations.b00268")},{"level":5,"name":_content.localized("guide.legacy.characterConstellations.b00269"),"description":_content.localized("guide.legacy.characterConstellations.b00270"),"caution":_content.localized("guide.legacy.characterConstellations.b00271")},{"level":6,"name":_content.localized("guide.legacy.characterConstellations.b00272"),"description":_content.localized("guide.legacy.characterConstellations.b00273"),"caution":_content.localized("guide.legacy.characterConstellations.b00274")}]},
  "genshin:10000122": {"gameVersion":"7.0","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.characterConstellations.b00275"),"sourceUrl":"https://game8.jp/genshin/707118","effects":[{"level":1,"name":_content.localized("guide.legacy.characterConstellations.b00276"),"description":_content.localized("guide.legacy.characterConstellations.b00277"),"caution":_content.localized("guide.legacy.characterConstellations.b00278")},{"level":2,"name":_content.localized("guide.legacy.characterConstellations.b00279"),"description":_content.localized("guide.legacy.characterConstellations.b00280"),"caution":_content.localized("guide.legacy.characterConstellations.b00281")},{"level":3,"name":_content.localized("guide.legacy.characterConstellations.b00282"),"description":_content.localized("guide.legacy.characterConstellations.b00283"),"caution":_content.localized("guide.legacy.characterConstellations.b00284")},{"level":4,"name":_content.localized("guide.legacy.characterConstellations.b00285"),"description":_content.localized("guide.legacy.characterConstellations.b00286"),"caution":_content.localized("guide.legacy.characterConstellations.b00287")},{"level":5,"name":_content.localized("guide.legacy.characterConstellations.b00288"),"description":_content.localized("guide.legacy.characterConstellations.b00289"),"caution":_content.localized("guide.legacy.characterConstellations.b00290")},{"level":6,"name":_content.localized("guide.legacy.characterConstellations.b00291"),"description":_content.localized("guide.legacy.characterConstellations.b00292"),"caution":_content.localized("guide.legacy.characterConstellations.b00293")}]},
  "genshin:10000034": {"gameVersion":"7.0","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.characterConstellations.b00294"),"sourceUrl":"https://game8.jp/genshin/352610","effects":[{"level":1,"name":_content.localized("guide.legacy.characterConstellations.b00295"),"description":_content.localized("guide.legacy.characterConstellations.b00296"),"caution":_content.localized("guide.legacy.characterConstellations.b00297")},{"level":2,"name":_content.localized("guide.legacy.characterConstellations.b00298"),"description":_content.localized("guide.legacy.characterConstellations.b00299"),"caution":_content.localized("guide.legacy.characterConstellations.b00300")},{"level":3,"name":_content.localized("guide.legacy.characterConstellations.b00301"),"description":_content.localized("guide.legacy.characterConstellations.b00302"),"caution":_content.localized("guide.legacy.characterConstellations.b00303")},{"level":4,"name":_content.localized("guide.legacy.characterConstellations.b00304"),"description":_content.localized("guide.legacy.characterConstellations.b00305"),"caution":_content.localized("guide.legacy.characterConstellations.b00306")},{"level":5,"name":_content.localized("guide.legacy.characterConstellations.b00307"),"description":_content.localized("guide.legacy.characterConstellations.b00308"),"caution":_content.localized("guide.legacy.characterConstellations.b00309")},{"level":6,"name":_content.localized("guide.legacy.characterConstellations.b00310"),"description":_content.localized("guide.legacy.characterConstellations.b00311"),"caution":_content.localized("guide.legacy.characterConstellations.b00312")}]},
  "zzz:1021": {"gameVersion":"3.1","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.characterConstellations.b00313"),"sourceUrl":"https://game8.jp/zenless/607805","effects":[{"level":1,"name":_content.localized("guide.legacy.characterConstellations.b00314"),"description":_content.localized("guide.legacy.characterConstellations.b00315"),"caution":_content.localized("guide.legacy.characterConstellations.b00316")},{"level":2,"name":_content.localized("guide.legacy.characterConstellations.b00317"),"description":_content.localized("guide.legacy.characterConstellations.b00318"),"caution":_content.localized("guide.legacy.characterConstellations.b00319")},{"level":3,"name":_content.localized("guide.legacy.characterConstellations.b00320"),"description":_content.localized("guide.legacy.characterConstellations.b00321"),"caution":_content.localized("guide.legacy.characterConstellations.b00322")},{"level":4,"name":_content.localized("guide.legacy.characterConstellations.b00323"),"description":_content.localized("guide.legacy.characterConstellations.b00324"),"caution":_content.localized("guide.legacy.characterConstellations.b00325")},{"level":5,"name":_content.localized("guide.legacy.characterConstellations.b00326"),"description":_content.localized("guide.legacy.characterConstellations.b00327"),"caution":_content.localized("guide.legacy.characterConstellations.b00328")},{"level":6,"name":_content.localized("guide.legacy.characterConstellations.b00329"),"description":_content.localized("guide.legacy.characterConstellations.b00330"),"caution":_content.localized("guide.legacy.characterConstellations.b00331")}]},
  "zzz:1471": {"gameVersion":"3.1","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.characterConstellations.b00332"),"sourceUrl":"https://game8.jp/zenless/723895","effects":[{"level":1,"name":_content.localized("guide.legacy.characterConstellations.b00333"),"description":_content.localized("guide.legacy.characterConstellations.b00334"),"caution":_content.localized("guide.legacy.characterConstellations.b00335")},{"level":2,"name":_content.localized("guide.legacy.characterConstellations.b00336"),"description":_content.localized("guide.legacy.characterConstellations.b00337"),"caution":_content.localized("guide.legacy.characterConstellations.b00338")},{"level":3,"name":_content.localized("guide.legacy.characterConstellations.b00339"),"description":_content.localized("guide.legacy.characterConstellations.b00340"),"caution":_content.localized("guide.legacy.characterConstellations.b00341")},{"level":4,"name":_content.localized("guide.legacy.characterConstellations.b00342"),"description":_content.localized("guide.legacy.characterConstellations.b00343"),"caution":_content.localized("guide.legacy.characterConstellations.b00344")},{"level":5,"name":_content.localized("guide.legacy.characterConstellations.b00345"),"description":_content.localized("guide.legacy.characterConstellations.b00346"),"caution":_content.localized("guide.legacy.characterConstellations.b00347")},{"level":6,"name":_content.localized("guide.legacy.characterConstellations.b00348"),"description":_content.localized("guide.legacy.characterConstellations.b00349"),"caution":_content.localized("guide.legacy.characterConstellations.b00350")}]},
  "zzz:1431": {"gameVersion":"3.1","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.characterConstellations.b00351"),"sourceUrl":"https://game8.jp/zenless/682698","effects":[{"level":1,"name":_content.localized("guide.legacy.characterConstellations.b00352"),"description":_content.localized("guide.legacy.characterConstellations.b00353"),"caution":_content.localized("guide.legacy.characterConstellations.b00354")},{"level":2,"name":_content.localized("guide.legacy.characterConstellations.b00355"),"description":_content.localized("guide.legacy.characterConstellations.b00356"),"caution":_content.localized("guide.legacy.characterConstellations.b00357")},{"level":3,"name":_content.localized("guide.legacy.characterConstellations.b00358"),"description":_content.localized("guide.legacy.characterConstellations.b00359"),"caution":_content.localized("guide.legacy.characterConstellations.b00360")},{"level":4,"name":_content.localized("guide.legacy.characterConstellations.b00361"),"description":_content.localized("guide.legacy.characterConstellations.b00362"),"caution":_content.localized("guide.legacy.characterConstellations.b00363")},{"level":5,"name":_content.localized("guide.legacy.characterConstellations.b00364"),"description":_content.localized("guide.legacy.characterConstellations.b00365"),"caution":_content.localized("guide.legacy.characterConstellations.b00366")},{"level":6,"name":_content.localized("guide.legacy.characterConstellations.b00367"),"description":_content.localized("guide.legacy.characterConstellations.b00368"),"caution":_content.localized("guide.legacy.characterConstellations.b00369")}]},
  "zzz:1421": {"gameVersion":"3.1","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.characterConstellations.b00370"),"sourceUrl":"https://game8.jp/zenless/682680","effects":[{"level":1,"name":_content.localized("guide.legacy.characterConstellations.b00371"),"description":_content.localized("guide.legacy.characterConstellations.b00372"),"caution":_content.localized("guide.legacy.characterConstellations.b00373")},{"level":2,"name":_content.localized("guide.legacy.characterConstellations.b00374"),"description":_content.localized("guide.legacy.characterConstellations.b00375"),"caution":_content.localized("guide.legacy.characterConstellations.b00376")},{"level":3,"name":_content.localized("guide.legacy.characterConstellations.b00377"),"description":_content.localized("guide.legacy.characterConstellations.b00378"),"caution":_content.localized("guide.legacy.characterConstellations.b00379")},{"level":4,"name":_content.localized("guide.legacy.characterConstellations.b00380"),"description":_content.localized("guide.legacy.characterConstellations.b00381"),"caution":_content.localized("guide.legacy.characterConstellations.b00382")},{"level":5,"name":_content.localized("guide.legacy.characterConstellations.b00383"),"description":_content.localized("guide.legacy.characterConstellations.b00384"),"caution":_content.localized("guide.legacy.characterConstellations.b00385")},{"level":6,"name":_content.localized("guide.legacy.characterConstellations.b00386"),"description":_content.localized("guide.legacy.characterConstellations.b00387"),"caution":_content.localized("guide.legacy.characterConstellations.b00388")}]},
};

Object.assign(CURATED, {
  "hsr:1305": { ...SOURCE.hsr, sourceUrl: "https://www.prydwen.gg/star-rail/characters/dr-ratio", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00545"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00546")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00547"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00548")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00549"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00550")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00551"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00552")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00553"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00554")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00555"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00556")),
  ] },
  "hsr:1005": { ...SOURCE.hsr, sourceUrl: "https://www.prydwen.gg/star-rail/characters/kafka", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00557"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00558")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00559"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00560")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00561"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00562")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00563"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00564")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00565"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00566")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00567"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00568")),
  ] },
  "hsr:1307": { ...SOURCE.hsr, sourceUrl: "https://www.prydwen.gg/star-rail/characters/black-swan", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00569"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00570")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00571"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00572")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00573"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00574")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00575"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00576")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00577"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00578")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00579"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00580")),
  ] },
  "hsr:1212": { ...SOURCE.hsr, sourceUrl: "https://www.prydwen.gg/star-rail/characters/jingliu", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00581"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00582")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00583"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00584")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00585"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00586")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00587"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00588")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00589"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00590")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00591"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00592")),
  ] },
  "genshin:10000025": { ...SOURCE.genshin, sourceUrl: "https://game8.co/games/Genshin-Impact/archives/297531", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00593"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00594")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00595"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00596")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00597"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00598")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00599"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00600")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00601"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00602")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00603"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00604")),
  ] },
  "genshin:10000023": { ...SOURCE.genshin, sourceUrl: "https://game8.co/games/Genshin-Impact/archives/297530", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00605"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00606")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00607"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00608")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00609"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00610")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00611"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00612")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00613"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00614")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00615"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00616")),
  ] },
  "genshin:10000031": { ...SOURCE.genshin, sourceUrl: "https://game8.co/games/Genshin-Impact/archives/297524", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00617"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00618")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00619"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00620")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00621"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00622")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00623"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00624")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00625"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00626")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00627"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00628")),
  ] },
  "zzz:1181": { ...SOURCE.zzz, sourceUrl: "https://www.prydwen.gg/zenless/characters/grace-howard", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00629"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00630")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00631"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00632")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00633"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00634")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00635"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00636")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00637"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00638")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00639"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00640")),
  ] },
  "zzz:1171": { ...SOURCE.zzz, sourceUrl: "https://www.prydwen.gg/zenless/characters/burnice", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00641"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00642")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00643"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00644")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00645"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00646")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00647"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00648")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00649"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00650")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00651"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00652")),
  ] },
  "zzz:1151": { ...SOURCE.zzz, sourceUrl: "https://www.prydwen.gg/zenless/characters/lucy", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00653"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00654")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00655"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00656")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00657"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00658")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00659"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00660")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00661"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00662")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00663"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00664")),
  ] },
});

Object.assign(CURATED, {
  "hsr:1101": { ...SOURCE.hsr, sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/405750", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00665"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00666")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00667"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00668")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00669"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00670")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00671"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00672")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00673"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00674")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00675"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00676")),
  ] },
  "hsr:1006": { ...SOURCE.hsr, sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/405757", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00677"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00678")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00679"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00680")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00681"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00682")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00683"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00684")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00685"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00686")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00687"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00688")),
  ] },
  "hsr:1208": { ...SOURCE.hsr, sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/405760", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00689"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00690")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00691"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00692")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00693"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00694")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00695"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00696")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00697"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00698")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00699"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00700")),
  ] },
  "hsr:1203": { ...SOURCE.hsr, sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/405764", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00701"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00702")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00703"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00704")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00705"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00706")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00707"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00708")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00709"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00710")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00711"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00712")),
  ] },
  "genshin:10000082": { ...SOURCE.genshin, sourceUrl: "https://game8.co/games/Genshin-Impact/archives/314348", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00713"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00714")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00715"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00716")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00717"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00718")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00719"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00720")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00721"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00722")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00723"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00724")),
  ] },
  "genshin:10000058": { ...SOURCE.genshin, sourceUrl: "https://game8.co/games/Genshin-Impact/archives/327533", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00725"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00726")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00727"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00728")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00729"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00730")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00731"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00732")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00733"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00734")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00735"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00736")),
  ] },
  "genshin:10000049": { ...SOURCE.genshin, sourceUrl: "https://game8.co/games/Genshin-Impact/archives/333497", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00737"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00738")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00739"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00740")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00741"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00742")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00743"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00744")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00745"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00746")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00747"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00748")),
  ] },
  "zzz:1071": { ...SOURCE.zzz, sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/464303", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00749"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00750")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00751"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00752")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00753"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00754")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00755"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00756")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00757"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00758")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00759"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00760")),
  ] },
  "zzz:1211": { ...SOURCE.zzz, sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/436876", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00761"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00762")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00763"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00764")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00765"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00766")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00767"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00768")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00769"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00770")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00771"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00772")),
  ] },
  "zzz:1251": { ...SOURCE.zzz, sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/460407", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00773"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00774")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00775"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00776")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00777"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00778")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00779"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00780")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00781"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00782")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00783"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00784")),
  ] },
});

Object.assign(CURATED, {
  "hsr:1015": { ...SOURCE.hsr, sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/519877", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00785"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00786")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00787"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00788")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00789"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00790")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00791"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00792")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00793"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00794")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00795"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00796")),
  ] },
  "hsr:1008": { ...SOURCE.hsr, sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/405754", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00797"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00798")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00799"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00800")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00801"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00802")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00803"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00804")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00805"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00806")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00807"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00808")),
  ] },
  "hsr:1009": { ...SOURCE.hsr, sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/405743", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00809"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00810")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00811"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00812")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00813"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00814")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00815"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00816")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00817"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00818")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00819"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00820")),
  ] },
  "hsr:1302": { ...SOURCE.hsr, sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/428046", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00821"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00822")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00823"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00824")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00825"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00826")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00827"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00828")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00829"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00830")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00831"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00832")),
  ] },
  "genshin:10000121": { ...SOURCE.genshin, sourceUrl: "https://game8.co/games/Genshin-Impact/archives/537903", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00833"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00834")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00835"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00836")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00837"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00838")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00839"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00840")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00841"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00842")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00843"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00844")),
  ] },
  "genshin:10000038": { ...SOURCE.genshin, sourceUrl: "https://game8.co/games/Genshin-Impact/archives/312182", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00845"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00846")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00847"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00848")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00849"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00850")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00851"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00852")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00853"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00854")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00855"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00856")),
  ] },
  "zzz:1041": { ...SOURCE.zzz, sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/436882", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00857"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00858")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00859"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00860")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00861"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00862")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00863"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00864")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00865"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00866")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00867"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00868")),
  ] },
  "zzz:1461": { ...SOURCE.zzz, sourceUrl: "https://www.prydwen.gg/zenless/characters/seed", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00869"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00870")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00871"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00872")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00873"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00874")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00875"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00876")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00877"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00878")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00879"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00880")),
  ] },
  "zzz:1361": { ...SOURCE.zzz, sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/495167", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00881"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00882")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00883"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00884")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00885"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00886")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00887"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00888")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00889"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00890")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00891"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00892")),
  ] },
  "hsr:1004": { ...SOURCE.hsr, sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/405763", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00893"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00894")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00895"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00896")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00897"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00898")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00899"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00900")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00901"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00902")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00903"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00904")),
  ] },
  "hsr:1301": { ...SOURCE.hsr, sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/437255", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00905"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00906")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00907"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00908")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00909"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00910")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00911"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00912")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00913"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00914")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00915"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00916")),
  ] },
  "hsr:1415": { ...SOURCE.hsr, sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/541348", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00917"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00918")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00919"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00920")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00921"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00922")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00923"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00924")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00925"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00926")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00927"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00928")),
  ] },
  "hsr:1509": { ...SOURCE.hsr, sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/601941", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00929"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00930")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00931"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00932")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00933"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00934")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00935"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00936")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00937"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00938")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00939"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00940")),
  ] },
  "genshin:10000021": { ...SOURCE.genshin, sourceUrl: "https://game8.co/games/Genshin-Impact/archives/297535", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00941"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00942")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00943"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00944")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00945"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00946")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00947"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00948")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00949"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00950")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00951"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00952")),
  ] },
  "genshin:10000110": { ...SOURCE.genshin, sourceUrl: "https://game8.co/games/Genshin-Impact/archives/345881", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00953"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00954")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00955"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00956")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00957"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00958")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00959"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00960")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00961"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00962")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00963"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00964")),
  ] },
  "genshin:10000116": { ...SOURCE.genshin, sourceUrl: "https://game8.co/games/Genshin-Impact/archives/531360", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00965"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00966")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00967"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00968")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00969"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00970")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00971"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00972")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00973"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00974")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00975"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00976")),
  ] },
  "zzz:1381": { ...SOURCE.zzz, sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/495109", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00977"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00978")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00979"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00980")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00981"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00982")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00983"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00984")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00985"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00986")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00987"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00988")),
  ] },
  "zzz:1501": { ...SOURCE.zzz, sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/572601", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00989"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00990")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00991"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00992")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00993"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00994")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00995"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00996")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00997"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00998")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b00999"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01000")),
  ] },
  "zzz:1401": { ...SOURCE.zzz, sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/527839", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01001"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01002")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01003"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01004")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01005"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01006")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01007"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01008")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01009"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01010")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01011"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01012")),
  ] },
});

Object.assign(CURATED, {
  "hsr:1107": { ...SOURCE.hsr, sourceUrl: "https://game8.jp/houkaistarrail/524682", dataAsOf: "2026-08-21", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01013"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01014")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01015"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01016")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01017"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01018")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01019"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01020")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01021"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01022")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01023"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01024")),
  ] },
  "hsr:1412": { ...SOURCE.hsr, sourceUrl: "https://game8.jp/houkaistarrail/698898", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01025"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01026")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01027"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01028")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01029"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01030")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01031"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01032")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01033"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01034")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01035"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01036")),
  ] },
  "hsr:1406": { ...SOURCE.hsr, sourceUrl: "https://game8.jp/houkaistarrail/678974", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01037"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01038")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01039"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01040")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01041"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01042")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01043"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01044")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01045"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01046")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01047"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01048")),
  ] },
  "hsr:1108": { ...SOURCE.hsr, sourceUrl: "https://game8.jp/houkaistarrail/524681", dataAsOf: "2026-08-11", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01049"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01050")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01051"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01052")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01053"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01054")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01055"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01056")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01057"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01058")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01059"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01060")),
  ] },
});

const LABELS: Record<CharacterIdentity["game"], LocalizedText> = {
  hsr: _content.localized("guide.legacy.characterConstellations.b00389"),
  genshin: _content.localized("guide.legacy.characterConstellations.b00390"),
  zzz: _content.localized("guide.legacy.characterConstellations.b00391"),
};

Object.assign(CURATED, {
  "genshin:10000113": { ...SOURCE.genshin, sourceUrl: "https://game8.jp/genshin/639101", dataAsOf: "2026-08-24", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01061"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01062")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01063"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01064")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01065"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01066")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01067"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01068")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01069"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01070")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01071"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01072")),
  ] },
  "genshin:10000111": { ...SOURCE.genshin, sourceUrl: "https://game8.jp/genshin/669311", dataAsOf: "2026-08-13", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01073"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01074")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01075"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01076")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01077"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01078")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01079"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01080")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01081"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01082")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01083"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01084")),
  ] },
  "genshin:10000022": { ...SOURCE.genshin, sourceUrl: "https://game8.jp/genshin/352607", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01085"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01086")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01087"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01088")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01089"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01090")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01091"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01092")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01093"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01094")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01095"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01096")),
  ] },
});

Object.assign(CURATED, {
  "zzz:1111": { ...SOURCE.zzz, sourceUrl: "https://game8.jp/zenless/607797", dataAsOf: "2026-08-19", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01097"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01098")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01099"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01100")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01101"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01102")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01103"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01104")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01105"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01106")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01107"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01108")),
  ] },
  "zzz:1011": { ...SOURCE.zzz, sourceUrl: "https://game8.jp/zenless/607757", dataAsOf: "2026-06-05", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01109"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01110")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01111"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01112")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01113"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01114")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01115"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01116")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01117"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01118")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01119"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01120")),
  ] },
  "zzz:1321": { ...SOURCE.zzz, sourceUrl: "https://game8.jp/zenless/658501", dataAsOf: "2026-08-19", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01121"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01122")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01123"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01124")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01125"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01126")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01127"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01128")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01129"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01130")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01131"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01132")),
  ] },
});

Object.assign(CURATED, {
  "hsr:1014": { ...SOURCE.hsr, sourceUrl: "https://game8.jp/houkaistarrail/686759", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01133"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01134")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01135"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01136")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01137"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01138")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01139"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01140")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01141"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01142")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01143"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01144")),
  ] },
  "hsr:1410": { ...SOURCE.hsr, sourceUrl: "https://game8.jp/houkaistarrail/698610", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01145"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01146")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01147"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01148")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01149"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01150")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01151"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01152")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01153"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01154")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01155"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01156")),
  ] },
});

Object.assign(CURATED, {
  "hsr:1314": { ...SOURCE.hsr, sourceUrl: "https://game8.jp/houkaistarrail/605745", dataAsOf: "2026-08-11", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01157"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01158")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01159"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01160")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01161"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01162")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01163"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01164")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01165"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01166")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01167"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01168")),
  ] },
  "hsr:1104": { ...SOURCE.hsr, sourceUrl: "https://game8.jp/houkaistarrail/524685", dataAsOf: "2026-08-21", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01169"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01170")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01171"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01172")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01173"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01174")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01175"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01176")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01177"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01178")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01179"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01180")),
  ] },
});

Object.assign(CURATED, {
  "genshin:10000112": { ...SOURCE.genshin, sourceUrl: "https://game8.jp/genshin/678671", dataAsOf: "2026-08-13", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01181"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01182")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01183"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01184")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01185"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01186")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01187"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01188")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01189"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01190")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01191"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01192")),
  ] },
  "genshin:10000099": { ...SOURCE.genshin, sourceUrl: "https://game8.jp/genshin/574298", dataAsOf: "2026-08-13", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01193"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01194")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01195"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01196")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01197"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01198")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01199"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01200")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01201"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01202")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01203"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01204")),
  ] },
});

Object.assign(CURATED, {
  "zzz:1051": { ...SOURCE.zzz, sourceUrl: "https://gamewith.jp/zenless/514877", dataAsOf: "2026-08-26", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01205"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01206")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01207"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01208")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01209"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01210")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01211"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01212")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01213"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01214")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01215"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01216")),
  ] },
});

Object.assign(CURATED, {
  "zzz:1561": { ...SOURCE.zzz, sourceUrl: "https://www.prydwen.gg/zenless/characters/velina", dataAsOf: "2026-08-19", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01217"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01218")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01219"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01220")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01221"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01222")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01223"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01224")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01225"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01226")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01227"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01228")),
  ] },
});

Object.assign(CURATED, {
  "genshin:10000051": { ...SOURCE.genshin, sourceUrl: "https://game8.jp/genshin/383079", dataAsOf: "2026-08-13", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01229"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01230")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01231"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01232")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01233"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01234")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01235"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01236")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01237"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01238")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01239"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01240")),
  ] },
});

Object.assign(CURATED, {
  "zzz:1301": { ...SOURCE.zzz, sourceUrl: "https://gamewith.jp/zenless/511491", dataAsOf: "2026-08-25", updatedAt: "2026-08-26", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01241"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01242")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01243"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01244")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01245"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01246")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01247"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01248")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01249"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01250")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01251"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01252")),
  ] },
});

Object.assign(CURATED, {
  "hsr:1103": { ...SOURCE.hsr, sourceUrl: "https://game8.jp/houkaistarrail/524686", dataAsOf: "2026-08-21", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01253"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01254")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01255"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01256")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01257"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01258")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01259"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01260")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01261"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01262")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01263"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01264")),
  ] },
  "hsr:1102": { ...SOURCE.hsr, sourceUrl: "https://game8.jp/houkaistarrail/524687", dataAsOf: "2026-08-21", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01265"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01266")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01267"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01268")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01269"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01270")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01271"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01272")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01273"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01274")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01275"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01276")),
  ] },
  "hsr:1321": { ...SOURCE.hsr, sourceUrl: "https://game8.jp/houkaistarrail/732480", dataAsOf: "2026-08-27", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01277"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01278")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01279"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01280")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01281"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01282")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01283"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01284")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01285"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01286")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01287"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01288")),
  ] },
  "hsr:1403": { ...SOURCE.hsr, sourceUrl: "https://game8.jp/houkaistarrail/662211", dataAsOf: "2026-08-27", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01289"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01290")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01291"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01292")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01293"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01294")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01295"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01296")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01297"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01298")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01299"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01300")),
  ] },
  "hsr:1105": { ...SOURCE.hsr, sourceUrl: "https://game8.jp/houkaistarrail/524684", dataAsOf: "2026-08-21", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01301"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01302")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01303"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01304")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01305"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01306")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01307"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01308")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01309"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01310")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01311"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01312")),
  ] },
  "hsr:1409": { ...SOURCE.hsr, sourceUrl: "https://game8.jp/houkaistarrail/677023", dataAsOf: "2026-08-27", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01313"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01314")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01315"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01316")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01317"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01318")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01319"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01320")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01321"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01322")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01323"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01324")),
  ] },
  "hsr:1408": { ...SOURCE.hsr, sourceUrl: "https://game8.jp/houkaistarrail/666526", dataAsOf: "2026-05-31", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01325"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01326")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01327"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01328")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01329"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01330")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01331"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01332")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01333"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01334")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01335"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01336")),
  ] },
  "hsr:1217": { ...SOURCE.hsr, sourceUrl: "https://game8.jp/houkaistarrail/556584", dataAsOf: "2026-08-19", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01337"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01338")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01339"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01340")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01341"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01342")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01343"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01344")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01345"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01346")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01347"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01348")),
  ] },
});

Object.assign(CURATED, {
  "genshin:10000105": { ...SOURCE.genshin, sourceUrl: "https://game8.jp/genshin/624946", dataAsOf: "2026-08-13", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01349"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01350")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01351"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01352")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01353"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01354")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01355"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01356")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01357"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01358")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01359"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01360")),
  ] },
  "genshin:10000081": { ...SOURCE.genshin, sourceUrl: "https://game8.co/games/Genshin-Impact/archives/Kaveh-Best-Builds", dataAsOf: "2026-08-12", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01361"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01362")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01363"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01364")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01365"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01366")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01367"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01368")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01369"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01370")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01371"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01372")),
  ] },
  "genshin:10000015": { ...SOURCE.genshin, sourceUrl: "https://game8.jp/genshin/352603", dataAsOf: "2026-08-13", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01373"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01374")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01375"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01376")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01377"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01378")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01379"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01380")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01381"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01382")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01383"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01384")),
  ] },
});

Object.assign(CURATED, {
  "genshin:10000100": { ...SOURCE.genshin, sourceUrl: "https://game8.jp/genshin/622963", dataAsOf: "2026-08-13", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01385"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01386")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01387"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01388")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01389"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01390")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01391"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01392")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01393"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01394")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01395"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01396")),
  ] },
  "genshin:10000101": { ...SOURCE.genshin, sourceUrl: "https://game8.jp/genshin/622965", dataAsOf: "2026-08-13", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01397"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01398")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01399"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01400")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01401"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01402")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01403"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01404")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01405"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01406")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01407"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01408")),
  ] },
  "genshin:10000072": { ...SOURCE.genshin, sourceUrl: "https://game8.jp/genshin/475655", dataAsOf: "2026-08-13", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01409"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01410")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01411"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01412")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01413"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01414")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01415"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01416")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01417"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01418")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01419"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01420")),
  ] },
});

Object.assign(CURATED, {
  "zzz:1061": { ...SOURCE.zzz, sourceUrl: "https://game8.jp/zenless/607798", dataAsOf: "2026-08-19", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01421"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01422")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01423"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01424")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01425"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01426")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01427"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01428")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01429"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01430")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01431"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01432")),
  ] },
  "zzz:1101": { ...SOURCE.zzz, sourceUrl: "https://game8.jp/zenless/607803", dataAsOf: "2026-07-31", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01433"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01434")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01435"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01436")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01437"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01438")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01439"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01440")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01441"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01442")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01443"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01444")),
  ] },
  "zzz:1591": { ...SOURCE.zzz, sourceUrl: "https://gamewith.jp/zenless/560635", dataAsOf: "2026-08-26", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01445"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01446")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01447"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01448")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01449"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01450")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01451"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01452")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01453"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01454")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01455"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01456")),
  ] },
  "zzz:1531": { ...SOURCE.zzz, sourceUrl: "https://gamewith.jp/zenless/551848", dataAsOf: "2026-08-27", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01457"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01458")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01459"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01460")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01461"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01462")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01463"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01464")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01465"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01466")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01467"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01468")),
  ] },
  "zzz:1481": { ...SOURCE.zzz, sourceUrl: "https://gamewith.jp/zenless/522882", dataAsOf: "2026-08-26", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01469"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01470")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01471"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01472")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01473"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01474")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01475"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01476")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01477"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01478")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01479"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01480")),
  ] },
});

Object.assign(CURATED, {
  "hsr:1109": { ...SOURCE.hsr, sourceUrl: "https://game8.jp/houkaistarrail/524680", dataAsOf: "2026-08-11", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01481"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01482")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01483"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01484")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01485"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01486")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01487"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01488")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01489"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01490")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01491"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01492")),
  ] },
  "hsr:1106": { ...SOURCE.hsr, sourceUrl: "https://game8.jp/houkaistarrail/524683", dataAsOf: "2026-08-21", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01493"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01494")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01495"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01496")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01497"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01498")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01499"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01500")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01501"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01502")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01503"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01504")),
  ] },
  "hsr:1013": { ...SOURCE.hsr, sourceUrl: "https://game8.jp/houkaistarrail/524689", dataAsOf: "2026-08-11", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01505"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01506")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01507"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01508")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01509"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01510")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01511"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01512")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01513"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01514")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01515"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01516")),
  ] },
  "hsr:1401": { ...SOURCE.hsr, sourceUrl: "https://game8.jp/houkaistarrail/654345", dataAsOf: "2026-08-25", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01517"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01518")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01519"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01520")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01521"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01522")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01523"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01524")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01525"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01526")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01527"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01528")),
  ] },
  "hsr:1312": { ...SOURCE.hsr, sourceUrl: "https://game8.jp/houkaistarrail/582412", dataAsOf: "2026-08-21", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01529"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01530")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01531"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01532")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01533"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01534")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01535"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01536")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01537"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01538")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01539"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01540")),
  ] },
  "hsr:1404": { ...SOURCE.hsr, sourceUrl: "https://game8.jp/houkaistarrail/662245", dataAsOf: "2026-08-11", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01541"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01542")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01543"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01544")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01545"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01546")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01547"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01548")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01549"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01550")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01551"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01552")),
  ] },
  "hsr:1223": { ...SOURCE.hsr, sourceUrl: "https://game8.jp/houkaistarrail/626982", dataAsOf: "2026-08-21", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01553"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01554")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01555"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01556")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01557"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01558")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01559"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01560")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01561"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01562")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01563"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01564")),
  ] },
  "hsr:1110": { ...SOURCE.hsr, sourceUrl: "https://game8.jp/houkaistarrail/539919", dataAsOf: "2026-08-11", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01565"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01566")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01567"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01568")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01569"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01570")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01571"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01572")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01573"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01574")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01575"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01576")),
  ] },
  "genshin:10000029": { ...SOURCE.genshin, sourceUrl: "https://game8.jp/genshin/352608", dataAsOf: "2026-08-13", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01577"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01578")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01579"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01580")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01581"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01582")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01583"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01584")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01585"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01586")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01587"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01588")),
  ] },
  "genshin:10000098": { ...SOURCE.genshin, sourceUrl: "https://game8.jp/genshin/539444", dataAsOf: "2026-08-13", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01589"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01590")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01591"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01592")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01593"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01594")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01595"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01596")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01597"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01598")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01599"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01600")),
  ] },
  "genshin:10000067": { ...SOURCE.genshin, sourceUrl: "https://game8.jp/genshin/466765", dataAsOf: "2026-08-13", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01601"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01602")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01603"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01604")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01605"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01606")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01607"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01608")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01609"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01610")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01611"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01612")),
  ] },
  "genshin:10000055": { ...SOURCE.genshin, sourceUrl: "https://game8.jp/genshin/395529", dataAsOf: "2026-08-13", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01613"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01614")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01615"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01616")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01617"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01618")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01619"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01620")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01621"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01622")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01623"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01624")),
  ] },
  "genshin:10000095": { ...SOURCE.genshin, sourceUrl: "https://game8.jp/genshin/539463", dataAsOf: "2026-08-13", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01625"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01626")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01627"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01628")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01629"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01630")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01631"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01632")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01633"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01634")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01635"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01636")),
  ] },
  "zzz:1571": { ...SOURCE.zzz, sourceUrl: "https://game8.jp/zenless/760639", dataAsOf: "2026-08-27", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01637"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01638")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01639"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01640")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01641"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01642")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01643"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01644")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01645"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01646")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01647"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01648")),
  ] },
  "zzz:1291": { ...SOURCE.zzz, sourceUrl: "https://game8.jp/zenless/666110", dataAsOf: "2026-07-31", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01649"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01650")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01651"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01652")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01653"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01654")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01655"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01656")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01657"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01658")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01659"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01660")),
  ] },
  "zzz:1081": { ...SOURCE.zzz, sourceUrl: "https://game8.jp/zenless/607806", dataAsOf: "2026-06-05", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01661"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01662")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01663"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01664")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01665"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01666")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01667"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01668")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01669"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01670")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01671"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01672")),
  ] },
  "zzz:1351": { ...SOURCE.zzz, sourceUrl: "https://game8.jp/zenless/665675", dataAsOf: "2026-07-31", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01673"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01674")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01675"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01676")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01677"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01678")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01679"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01680")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01681"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01682")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01683"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01684")),
  ] },
  "hsr:1111": { ...SOURCE.hsr, sourceUrl: "https://game8.jp/houkaistarrail/529689", dataAsOf: "2026-08-11", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01685"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01686")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01687"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01688")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01689"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01690")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01691"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01692")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01693"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01694")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01695"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01696")),
  ] },
  "hsr:1221": { ...SOURCE.hsr, sourceUrl: "https://game8.jp/houkaistarrail/613642", dataAsOf: "2026-08-11", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01697"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01698")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01699"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01700")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01701"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01702")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01703"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01704")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01705"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01706")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01707"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01708")),
  ] },
  "hsr:1508": { ...SOURCE.hsr, sourceUrl: "https://game8.jp/houkaistarrail/785266", dataAsOf: "2026-08-27", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01709"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01710")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01711"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01712")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01713"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01714")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01715"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01716")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01717"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01718")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01719"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01720")),
  ] },
  "hsr:1501": { ...SOURCE.hsr, sourceUrl: "https://game8.jp/houkaistarrail/754095", dataAsOf: "2026-08-27", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01721"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01722")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01723"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01724")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01725"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01726")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01727"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01728")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01729"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01730")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01731"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01732")),
  ] },
  "hsr:1215": { ...SOURCE.hsr, sourceUrl: "https://game8.jp/houkaistarrail/557338", dataAsOf: "2026-08-11", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01733"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01734")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01735"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01736")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01737"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01738")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01739"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01740")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01741"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01742")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01743"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01744")),
  ] },
  "hsr:1225": { ...SOURCE.hsr, sourceUrl: "https://game8.jp/houkaistarrail/643244", dataAsOf: "2026-08-19", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01745"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01746")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01747"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01748")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01749"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01750")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01751"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01752")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01753"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01754")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01755"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01756")),
  ] },
  "hsr:1204": { ...SOURCE.hsr, sourceUrl: "https://game8.jp/houkaistarrail/524677", dataAsOf: "2026-08-21", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01757"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01758")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01759"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01760")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01761"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01762")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01763"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01764")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01765"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01766")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01767"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01768")),
  ] },
  "hsr:1210": { ...SOURCE.hsr, sourceUrl: "https://game8.jp/houkaistarrail/545409", dataAsOf: "2026-08-21", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01769"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01770")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01771"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01772")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01773"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01774")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01775"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01776")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01777"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01778")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01779"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01780")),
  ] },
  "genshin:10000107": { ...SOURCE.genshin, sourceUrl: "https://game8.jp/genshin/624939", dataAsOf: "2026-08-27", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01781"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01782")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01783"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01784")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01785"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01786")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01787"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01788")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01789"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01790")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01791"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01792")),
  ] },
  "genshin:10000088": { ...SOURCE.genshin, sourceUrl: "https://game8.jp/genshin/527370", dataAsOf: "2026-08-13", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01793"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01794")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01795"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01796")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01797"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01798")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01799"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01800")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01801"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01802")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01803"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01804")),
  ] },
  "genshin:10000090": { ...SOURCE.genshin, sourceUrl: "https://game8.jp/genshin/574300", dataAsOf: "2026-08-13", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01805"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01806")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01807"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01808")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01809"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01810")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01811"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01812")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01813"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01814")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01815"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01816")),
  ] },
  "genshin:10000003": { ...SOURCE.genshin, sourceUrl: "https://game8.jp/genshin/352599", dataAsOf: "2026-08-13", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01817"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01818")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01819"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01820")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01821"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01822")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01823"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01824")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01825"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01826")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01827"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01828")),
  ] },
  "genshin:10000114": { ...SOURCE.genshin, sourceUrl: "https://game8.jp/genshin/366282", dataAsOf: "2026-08-13", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01829"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01830")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01831"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01832")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01833"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01834")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01835"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01836")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01837"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01838")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01839"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01840")),
  ] },
  "genshin:10000043": { ...SOURCE.genshin, sourceUrl: "https://game8.jp/genshin/352613", dataAsOf: "2026-08-14", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01841"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01842")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01843"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01844")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01845"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01846")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01847"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01848")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01849"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01850")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01851"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01852")),
  ] },
  "zzz:1541": { ...SOURCE.zzz, sourceUrl: "https://game8.jp/zenless/760627", dataAsOf: "2026-08-27", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01853"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01854")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01855"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01856")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01857"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01858")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01859"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01860")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01861"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01862")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01863"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01864")),
  ] },
  "zzz:1121": { ...SOURCE.zzz, sourceUrl: "https://game8.jp/zenless/607796", dataAsOf: "2026-08-19", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01865"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01866")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01867"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01868")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01869"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01870")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01871"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01872")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01873"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01874")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01875"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01876")),
  ] },
  "zzz:1141": { ...SOURCE.zzz, sourceUrl: "https://game8.jp/zenless/607802", dataAsOf: "2026-06-05", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01877"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01878")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01879"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01880")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01881"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01882")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01883"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01884")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01885"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01886")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01887"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01888")),
  ] },
  "zzz:1451": { ...SOURCE.zzz, sourceUrl: "https://game8.jp/zenless/712532", dataAsOf: "2026-07-31", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01889"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01890")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01891"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01892")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01893"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01894")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01895"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01896")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01897"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01898")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01899"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01900")),
  ] },
  "zzz:1371": { ...SOURCE.zzz, sourceUrl: "https://game8.jp/zenless/681363", dataAsOf: "2026-08-27", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01901"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01902")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01903"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01904")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01905"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01906")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01907"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01908")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01909"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01910")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01911"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01912")),
  ] },
  "zzz:1391": { ...SOURCE.zzz, sourceUrl: "https://game8.jp/zenless/676195", dataAsOf: "2026-07-10", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01913"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01914")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01915"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01916")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01917"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01918")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01919"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01920")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01921"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01922")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01923"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01924")),
  ] },
});

Object.assign(CURATED, {
  "hsr:1205": { ...SOURCE.hsr, sourceUrl: "https://game8.jp/houkaistarrail/526502", dataAsOf: "2026-08-11", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01925"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01926")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01927"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01928")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01929"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01930")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01931"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01932")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01933"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01934")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01935"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01936")),
  ] },
  "hsr:1201": { ...SOURCE.hsr, sourceUrl: "https://game8.jp/houkaistarrail/524679", dataAsOf: "2026-08-11", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01937"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01938")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01939"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01940")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01941"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01942")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01943"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01944")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01945"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01946")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01947"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01948")),
  ] },
  "hsr:1214": { ...SOURCE.hsr, sourceUrl: "https://game8.jp/houkaistarrail/573091", dataAsOf: "2026-08-11", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01949"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01950")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01951"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01952")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01953"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01954")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01955"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01956")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01957"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01958")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01959"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01960")),
  ] },
  "hsr:1206": { ...SOURCE.hsr, sourceUrl: "https://game8.jp/houkaistarrail/524676", dataAsOf: "2026-08-11", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01961"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01962")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01963"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01964")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01965"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01966")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01967"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01968")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01969"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01970")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01971"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01972")),
  ] },
  "hsr:1002": { ...SOURCE.hsr, sourceUrl: "https://game8.jp/houkaistarrail/524694", dataAsOf: "2026-08-11", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01973"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01974")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01975"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01976")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01977"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01978")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01979"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01980")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01981"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01982")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01983"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01984")),
  ] },
  "hsr:1414": { ...SOURCE.hsr, sourceUrl: "https://game8.jp/houkaistarrail/709109", dataAsOf: "2026-08-27", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01985"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01986")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01987"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01988")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01989"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01990")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01991"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01992")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01993"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01994")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01995"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01996")),
  ] },
});

Object.assign(CURATED, {
  "genshin:10000097": { ...SOURCE.genshin, sourceUrl: "https://game8.jp/genshin/604468", dataAsOf: "2026-08-13", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01997"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01998")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b01999"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02000")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02001"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02002")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02003"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02004")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02005"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02006")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02007"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02008")),
  ] },
  "genshin:10000071": { ...SOURCE.genshin, sourceUrl: "https://game8.jp/genshin/464157", dataAsOf: "2026-08-27", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02009"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02010")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02011"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02012")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02013"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02014")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02015"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02016")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02017"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02018")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02019"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02020")),
  ] },
  "genshin:10000115": { ...SOURCE.genshin, sourceUrl: "https://game8.jp/genshin/678676", dataAsOf: "2026-08-13", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02021"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02022")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02023"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02024")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02025"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02026")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02027"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02028")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02029"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02030")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02031"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02032")),
  ] },
  "genshin:10000033": { ...SOURCE.genshin, sourceUrl: "https://game8.jp/genshin/358211", dataAsOf: "2026-08-25", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02033"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02034")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02035"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02036")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02037"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02038")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02039"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02040")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02041"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02042")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02043"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02044")),
  ] },
});

Object.assign(CURATED, {
  "genshin:10000104": { ...SOURCE.genshin, sourceUrl: "https://game8.jp/genshin/624943", dataAsOf: "2026-08-13", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02045"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02046")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02047"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02048")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02049"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02050")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02051"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02052")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02053"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02054")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02055"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02056")),
  ] },
  "genshin:10000039": { ...SOURCE.genshin, sourceUrl: "https://game8.jp/genshin/358215", dataAsOf: "2026-08-27", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02057"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02058")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02059"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02060")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02061"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02062")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02063"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02064")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02065"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02066")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02067"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02068")),
  ] },
  "genshin:10000079": { ...SOURCE.genshin, sourceUrl: "https://game8.jp/genshin/468760", dataAsOf: "2026-08-13", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02069"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02070")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02071"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02072")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02073"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02074")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02075"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02076")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02077"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02078")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02079"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02080")),
  ] },
  "genshin:10000069": { ...SOURCE.genshin, sourceUrl: "https://game8.jp/genshin/466622", dataAsOf: "2026-08-13", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02081"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02082")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02083"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02084")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02085"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02086")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02087"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02088")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02089"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02090")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02091"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02092")),
  ] },
});

Object.assign(CURATED, {
  "zzz:1441": { ...SOURCE.zzz, sourceUrl: "https://game8.jp/zenless/695655", dataAsOf: "2026-06-05", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02093"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02094")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02095"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02096")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02097"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02098")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02099"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02100")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02101"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02102")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02103"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02104")),
  ] },
  "zzz:1241": { ...SOURCE.zzz, sourceUrl: "https://game8.jp/zenless/609201", dataAsOf: "2026-06-05", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02105"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02106")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02107"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02108")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02109"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02110")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02111"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02112")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02113"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02114")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02115"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02116")),
  ] },
  "zzz:1341": { ...SOURCE.zzz, sourceUrl: "https://game8.jp/zenless/682685", dataAsOf: "2026-08-26", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02117"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02118")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02119"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02120")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02121"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02122")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02123"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02124")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02125"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02126")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02127"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02128")),
  ] },
  "zzz:1491": { ...SOURCE.zzz, sourceUrl: "https://game8.jp/zenless/754094", dataAsOf: "2026-08-27", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02129"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02130")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02131"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02132")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02133"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02134")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02135"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02136")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02137"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02138")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02139"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02140")),
  ] },
  "zzz:1201": { ...SOURCE.zzz, sourceUrl: "https://game8.jp/zenless/651182", dataAsOf: "2026-08-27", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02141"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02142")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02143"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02144")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02145"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02146")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02147"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02148")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02149"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02150")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02151"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02152")),
  ] },
  "zzz:1511": { ...SOURCE.zzz, sourceUrl: "https://game8.jp/zenless/758209", dataAsOf: "2026-08-27", updatedAt: "2026-08-27", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02153"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02154")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02155"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02156")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02157"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02158")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02159"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02160")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02161"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02162")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02163"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02164")),
  ] },
});

export function constellationProfileFor(identity: CharacterIdentity, rank: number | null): ConstellationProfile {
  const blockedAddition = Boolean(BATCH23_GENSHIN_CONSTELLATIONS[identity.key]) && (!identity.resolved || Boolean(identity.variantOf));
  const entry = blockedAddition ? undefined : CURATED[identity.key] ?? BATCH_17_CONSTELLATIONS[identity.key] ?? CURATED[`${identity.game}:${identity.displayName}`];
  const acquiredRank = Math.max(0, Math.min(6, rank ?? 0));
  if (!entry) {
    const source = SOURCE[identity.game];
    return { rankLabel: LABELS[identity.game], acquiredRank, dataStatus: "preparing", ...source, dataAsOf: "2026-08-25", updatedAt: "2026-08-25", effects: [], activeTargetChanges: [] };
  }
  return {
    ...entry,
    rankLabel: LABELS[identity.game],
    acquiredRank,
    dataStatus: "curated",
    activeTargetChanges: entry.effects.filter((item) => item.level <= acquiredRank).flatMap((item) => item.targetChanges ?? []),
  };
}

// 第16バッチ：HSR 4名の星魂。公式の英語・中国語の星魂名は未確認のため、名称は日本語のみ確定とし
// en/zh には汎用ラベルを置く。効果本文は出典の記載を翻訳したもの。
Object.assign(CURATED, {
  // 第18バッチ（2026-09-11）でカタログへ追加した HSR 3名。本文は StarRailRes の公式ゲームデータ（jp/en/cn）から取得（docs/batch-18-research-notes.md 区分2）。
  "hsr:1507": { ...SOURCE.hsr, gameVersion: "4.4", sourceUrl: "https://game8.jp/houkaistarrail/776920", sourceLabel: _content.localized("guide.legacy.characterConstellations.b00392"), dataAsOf: "2026-09-11", updatedAt: "2026-09-11", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02165"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02166")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02167"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02168")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02169"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02170")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02171"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02172")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02173"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02174")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02175"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02176")),
  ] },
  "hsr:1510": { ...SOURCE.hsr, gameVersion: "4.4", sourceUrl: "https://game8.jp/houkaistarrail/784730", sourceLabel: _content.localized("guide.legacy.characterConstellations.b00393"), dataAsOf: "2026-09-11", updatedAt: "2026-09-11", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02177"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02178")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02179"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02180")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02181"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02182")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02183"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02184")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02185"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02186")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02187"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02188")),
  ] },
  "hsr:1512": { ...SOURCE.hsr, gameVersion: "4.5", sourceUrl: "https://game8.jp/houkaistarrail/794388", sourceLabel: _content.localized("guide.legacy.characterConstellations.b00394"), dataAsOf: "2026-09-11", updatedAt: "2026-09-11", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02189"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02190")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02191"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02192")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02193"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02194")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02195"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02196")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02197"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02198")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02199"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02200")),
  ] },
  "hsr:1504": { ...SOURCE.hsr, gameVersion: "4.5", sourceUrl: "https://game8.jp/houkaistarrail/756950", sourceLabel: _content.localized("guide.legacy.characterConstellations.b00395"), dataAsOf: "2026-09-07", updatedAt: "2026-09-07", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02201"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02202")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02203"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02204")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02205"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02206")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02207"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02208")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02209"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02210")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02211"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02212")),
  ] },
  "hsr:1317": { ...SOURCE.hsr, gameVersion: "4.5", sourceUrl: "https://gamewith.jp/houkaistarrail/article/show/461572", sourceLabel: _content.localized("guide.legacy.characterConstellations.b00396"), dataAsOf: "2026-08-26", updatedAt: "2026-09-07", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02213"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02214")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02215"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02216")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02217"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02218")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02219"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02220")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02221"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02222")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02223"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02224")),
  ] },
  "hsr:1218": { ...SOURCE.hsr, gameVersion: "4.5", sourceUrl: "https://game8.jp/houkaistarrail/613886", sourceLabel: _content.localized("guide.legacy.characterConstellations.b00397"), dataAsOf: "2026-08-21", updatedAt: "2026-09-07", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02225"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02226")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02227"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02228")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02229"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02230")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02231"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02232")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02233"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02234")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02235"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02236")),
  ] },
  "hsr:1502": { ...SOURCE.hsr, gameVersion: "4.5", sourceUrl: "https://game8.jp/houkaistarrail/754019", sourceLabel: _content.localized("guide.legacy.characterConstellations.b00398"), dataAsOf: "2026-09-07", updatedAt: "2026-09-07", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02237"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02238")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02239"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02240")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02241"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02242")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02243"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02244")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02245"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02246")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02247"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02248")),
  ] },
});

// 第16バッチ：原神16名の命ノ星座。公式の英語・中国語の星座名は未確認のため、名称は日本語のみ確定とし
// en/zh には汎用ラベルを置く。効果本文は出典の記載を要約・翻訳したもの。
Object.assign(CURATED, {
  "genshin:10000014": { ...SOURCE.genshin, gameVersion: "7.0", sourceUrl: "https://game8.jp/genshin/352604", sourceLabel: _content.localized("guide.legacy.characterConstellations.b00399"), dataAsOf: "2026-08-13", updatedAt: "2026-09-07", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02249"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02250")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02251"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02252")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02253"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02254")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02255"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02256")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02257"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02258")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02259"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02260")),
  ] },
  "genshin:10000076": { ...SOURCE.genshin, gameVersion: "7.0", sourceUrl: "https://game8.jp/genshin/491546", sourceLabel: _content.localized("guide.legacy.characterConstellations.b00400"), dataAsOf: "2026-08-13", updatedAt: "2026-09-07", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02261"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02262")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02263"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02264")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02265"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02266")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02267"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02268")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02269"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02270")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02271"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02272")),
  ] },
  "genshin:10000085": { ...SOURCE.genshin, gameVersion: "7.0", sourceUrl: "https://game8.jp/genshin/539448", sourceLabel: _content.localized("guide.legacy.characterConstellations.b00401"), dataAsOf: "2026-08-13", updatedAt: "2026-09-07", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02273"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02274")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02275"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02276")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02277"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02278")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02279"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02280")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02281"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02282")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02283"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02284")),
  ] },
  "genshin:10000080": { ...SOURCE.genshin, gameVersion: "7.0", sourceUrl: "https://game8.jp/genshin/481407", sourceLabel: _content.localized("guide.legacy.characterConstellations.b00402"), dataAsOf: "2026-08-13", updatedAt: "2026-09-07", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02285"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02286")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02287"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02288")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02289"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02290")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02291"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02292")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02293"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02294")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02295"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02296")),
  ] },
  "genshin:10000041": { ...SOURCE.genshin, gameVersion: "7.0", sourceUrl: "https://game8.jp/genshin/352614", sourceLabel: _content.localized("guide.legacy.characterConstellations.b00403"), dataAsOf: "2026-08-13", updatedAt: "2026-09-07", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02297"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02298")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02299"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02300")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02301"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02302")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02303"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02304")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02305"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02306")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02307"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02308")),
  ] },
  "genshin:10000077": { ...SOURCE.genshin, gameVersion: "7.0", sourceUrl: "https://game8.jp/genshin/366248", sourceLabel: _content.localized("guide.legacy.characterConstellations.b00404"), dataAsOf: "2026-08-13", updatedAt: "2026-09-07", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02309"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02310")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02311"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02312")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02313"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02314")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02315"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02316")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02317"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02318")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02319"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02320")),
  ] },
  "genshin:10000119": { ...SOURCE.genshin, gameVersion: "7.0", sourceUrl: "https://game8.jp/genshin/706878", sourceLabel: _content.localized("guide.legacy.characterConstellations.b00405"), dataAsOf: "2026-08-13", updatedAt: "2026-09-07", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02321"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02322")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02323"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02324")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02325"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02326")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02327"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02328")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02329"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02330")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02331"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02332")),
  ] },
  "genshin:10000006": { ...SOURCE.genshin, gameVersion: "7.0", sourceUrl: "https://game8.jp/genshin/352602", sourceLabel: _content.localized("guide.legacy.characterConstellations.b00406"), dataAsOf: "2026-08-13", updatedAt: "2026-09-07", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02333"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02334")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02335"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02336")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02337"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02338")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02339"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02340")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02341"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02342")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02343"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02344")),
  ] },
  "genshin:10000084": { ...SOURCE.genshin, gameVersion: "7.0", sourceUrl: "https://game8.jp/genshin/464305", sourceLabel: _content.localized("guide.legacy.characterConstellations.b00407"), dataAsOf: "2026-08-13", updatedAt: "2026-09-07", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02345"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02346")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02347"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02348")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02349"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02350")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02351"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02352")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02353"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02354")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02355"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02356")),
  ] },
  "genshin:10000083": { ...SOURCE.genshin, gameVersion: "7.0", sourceUrl: "https://game8.jp/genshin/539443", sourceLabel: _content.localized("guide.legacy.characterConstellations.b00408"), dataAsOf: "2026-08-13", updatedAt: "2026-09-07", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02357"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02358")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02359"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02360")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02361"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02362")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02363"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02364")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02365"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02366")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02367"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02368")),
  ] },
  "genshin:10000074": { ...SOURCE.genshin, gameVersion: "7.0", sourceUrl: "https://game8.jp/genshin/483607", sourceLabel: _content.localized("guide.legacy.characterConstellations.b00409"), dataAsOf: "2026-08-13", updatedAt: "2026-09-07", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02369"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02370")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02371"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02372")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02373"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02374")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02375"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02376")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02377"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02378")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02379"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02380")),
  ] },
  "genshin:10000106": { ...SOURCE.genshin, gameVersion: "7.0", sourceUrl: "https://game8.jp/genshin/614760", sourceLabel: _content.localized("guide.legacy.characterConstellations.b00410"), dataAsOf: "2026-09-07", updatedAt: "2026-09-07", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02381"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02382")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02383"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02384")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02385"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02386")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02387"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02388")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02389"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02390")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02391"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02392")),
  ] },
  "genshin:10000102": { ...SOURCE.genshin, gameVersion: "7.0", sourceUrl: "https://game8.jp/genshin/622964", sourceLabel: _content.localized("guide.legacy.characterConstellations.b00411"), dataAsOf: "2026-08-13", updatedAt: "2026-09-07", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02393"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02394")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02395"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02396")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02397"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02398")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02399"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02400")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02401"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02402")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02403"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02404")),
  ] },
  "genshin:10000120": { ...SOURCE.genshin, gameVersion: "7.0", sourceUrl: "https://game8.jp/genshin/707119", sourceLabel: _content.localized("guide.legacy.characterConstellations.b00412"), dataAsOf: "2026-09-01", updatedAt: "2026-09-07", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02405"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02406")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02407"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02408")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02409"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02410")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02411"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02412")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02413"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02414")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02415"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02416")),
  ] },
  "genshin:10000124": { ...SOURCE.genshin, gameVersion: "7.0", sourceUrl: "https://game8.jp/genshin/707117", sourceLabel: _content.localized("guide.legacy.characterConstellations.b00413"), dataAsOf: "2026-08-13", updatedAt: "2026-09-07", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02417"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02418")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02419"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02420")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02421"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02422")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02423"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02424")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02425"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02426")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02427"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02428")),
  ] },
  "genshin:10000086": { ...SOURCE.genshin, gameVersion: "7.0", sourceUrl: "https://game8.jp/genshin/539460", sourceLabel: _content.localized("guide.legacy.characterConstellations.b00414"), dataAsOf: "2026-09-07", updatedAt: "2026-09-07", effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02429"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02430")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02431"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02432")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02433"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02434")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02435"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02436")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02437"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02438")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02439"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02440")),
  ] },
});

/**
 * 図鑑（UID不要）でカタログ名から凸を引くための索引。値は公開メタデータで確認済みの source ID。
 * UID照会経路は取得元の source ID をそのまま使うため、この索引を経由しない。
 * お試し実装・派生実装（例 genshin:10000901 マーヴィカ（お試し））はカタログ名を持たないため、
 * 名前一致で誤適用されることはない。
 */
/**
 * 同名で複数の source ID がある基礎実装の採用ID。派生ID（"-" 付きの旅人元素別、お試し実装）は索引に入れない。
 * 三月なのか: 1001（存護。1224 は巡狩の別実装）/ 旅人: 10000005（10000007 は性別違いで同一データ）/ イネファ: 10000116（10000903 はお試し）
 */
const CATALOG_SOURCE_ID_TIEBREAK: Record<string, string> = { "hsr:三月なのか": "1001", "genshin:旅人": "10000005", "genshin:コロンビーナ": "10000125", "genshin:イネファ": "10000116" };

// 第22バッチ（2026-09-29）: コロンビーナ（原神 Ver.7.1、水・法器、正規ID 10000125）。名称・本文は AnimeGameData 由来の genshin-db（日本語・英語・中国語）で、Game8・GameWith の2026-09-29更新ガイドと全6段の日本語本文が一致。
// Enka の 10000904 は炎・香菱アイコン流用のプレースホルダーのため対象にしない。効果は戦闘中・条件付きのため targetChanges は全段で空。
Object.assign(CURATED, {
  "genshin:10000125": { ...SOURCE.genshin, gameVersion: "7.1", dataAsOf: "2026-09-29", updatedAt: "2026-09-29", sourceUrl: "https://game8.jp/genshin/466953", sourceLabel: _content.localized("guide.legacy.characterConstellations.b00415"), effects: [
    effect(1, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02441"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02442")),
    effect(2, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02443"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02444")),
    effect(3, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02445"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02446")),
    effect(4, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02447"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02448")),
    effect(5, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02449"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02450")),
    effect(6, ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02451"), ..._helperContent.triple("guide.legacy.characterConstellations_helpers.b02452")),
  ] },
});

/**
 * 図鑑（UID不要）でカタログ名から凸を引くための索引。公開メタデータのスナップショットから機械的に作る。
 * UID照会経路は取得元の source ID をそのまま使うため、この索引を経由しない。
 */
const CATALOG_NAME_TO_SOURCE_ID: Record<string, string> = (() => {
  const index: Record<string, string> = {};
  for (const entry of ACTIVE_CATALOG_IDENTITIES) {
    if (entry.sourceId.includes("-")) continue;
    const key = entry.game + ":" + entry.providerName;
    if (!(key in index)) index[key] = entry.sourceId;
  }
  return { ...index, ...CATALOG_SOURCE_ID_TIEBREAK };
})();

/**
 * カタログ名（図鑑）に対応する確認済み source ID。索引に無ければ undefined。
 * 図鑑は凸だけでなく個別ガイドの解決でも同じ ID を使う（同名で複数実装がある場合の取り違えを防ぐため）。
 */
export function catalogSourceIdFor(game: CharacterIdentity["game"], name: string): string | undefined {
  return CATALOG_NAME_TO_SOURCE_ID[`${game}:${name}`];
}

/** カタログ名（図鑑）から凸プロフィールを返す。ID索引に無い名前は従来の名前フォールバックへ委ねる。 */
export function constellationProfileForCatalogName(game: CharacterIdentity["game"], name: string, rank: number | null): ConstellationProfile {
  const sourceId = CATALOG_NAME_TO_SOURCE_ID[`${game}:${name}`];
  const identity: CharacterIdentity = sourceId
    ? { game, sourceId, key: `${game}:${sourceId}`, displayName: name, variantOf: null, resolved: true, resolution: "curated-id-map" }
    : { game, sourceId: name, key: `${game}:${name}`, displayName: name, variantOf: null, resolved: true, resolution: "provider" };
  return constellationProfileFor(identity, rank);
}
