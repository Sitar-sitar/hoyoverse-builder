import {createLegacyTexts as createGuideTemplateTexts} from "./content/legacyTexts";
import {sources as guideTemplateSources} from "../content/ja/guides/buildAdvisor_templates";
const _guideTemplates=createGuideTemplateTexts(guideTemplateSources,{},{});
import { createLegacyTexts } from "./content/legacyTexts";
import { sources as _sources } from "../content/ja/guides/buildAdvisor";
import { records as _en } from "../content/translations/en/buildAdvisor";
import { records as _zh } from "../content/translations/zh-CN/buildAdvisor";
const _content = createLegacyTexts(_sources, _en, _zh);
import { TRPCError } from "@trpc/server";
import { FIELD_TO_COMPONENT, FIELD_TO_STAT_KEY, fetchEnkaPayload, isEnkaResultComplete } from "./enkaFallback";
import { generatedHsrGuide } from "./individualGuides";
import { guideMetadataFor } from "./characterGuideMetadata";
import { partyRecommendationsFor, type PartyRecommendationSet } from "./partyRecommendations";
import { resolveCharacterIdentity, type CharacterIdentity } from "./characterIdentity";
import { constellationProfileFor, type ConstellationProfile } from "./characterConstellations";

export type TierName = "厳選" | "目標" | "妥協";
export type StatKey = "critRate" | "critDmg" | "speed" | "attack" | "attackPercent" | "breakEffect" | "effectHitRate" | "effectRes" | "hp" | "hpPercent" | "defense" | "defPercent" | "energyRecharge" | "elementalMastery" | "anomalyMastery" | "anomalyProficiency" | "impact" | "penRatio" | "energyRegen";

type RawRecord = Record<string, unknown>;

export type TargetStatDefinition = {
  key: StatKey;
  label: string;
  unit: "%" | "";
  targets: Record<TierName, number>;
};

export type GuideDefinition = {
  headline: string;
  relicSet: string;
  planarSet: string;
  mainStats: Array<{ slot: string; value: string }>;
  targets: TargetStatDefinition[];
  targetContext?: string;
  dataAsOf?: string;
  updatedAt?: string;
  sourceLabel?: string;
  profileId?: string;
};

export const GUIDE_DATASET_STATUS = {
  dataAsOf: "2026-08-18",
  updatedAt: "2026-08-18",
  sourceLabels: {
    hsr: "KQM・StarDB・Game8の公開ビルド情報を照合",
    genshin: "GameWith・Game8の公開ビルド情報を照合",
    zzz: "Prydwen・公開エージェントデータを照合",
  },
} as const;

export function withGuideMetadata(game: "hsr" | "genshin" | "zzz", guide: GuideDefinition, characterName?: string): GuideDefinition {
  const record = guideMetadataFor(game, characterName);
  return {
    ...guide,
    dataAsOf: guide.dataAsOf ?? record.dataAsOf,
    updatedAt: guide.updatedAt ?? record.updatedAt,
    sourceLabel: guide.sourceLabel ?? record.sourceLabel,
    profileId: guide.profileId ?? record.profileId ?? `curated:${characterName ?? "individual"}`,
  };
}

export type StatComparison = TargetStatDefinition & {
  current: number | null;
  currentDisplay: string;
  achieved: Record<TierName, boolean | null>;
};

export type PriorityRecommendation = {
  key: StatKey;
  label: string;
  unit: "" | "%";
  current: number;
  target: number;
  deficit: number;
  priority: "最優先" | "優先" | "次点";
  rationale: string;
};

export type EquipmentAction = {
  recommendationKey: StatKey;
  statLabel: string;
  action: "主ステータスを変更" | "サブステータスを厳選";
  slot: string;
  /** "specific": slot は実在の部位。"any": 部位を特定しない（どの部位でもよいサブステータス厳選）。 */
  slotScope: "specific" | "any";
  equippedName: string | null;
  currentMain: string | null;
  desiredStat: string;
  reason: string;
};

/**
 * 表示桁より細かい浮動小数点誤差だけを吸収する許容差。
 * EP回復効率の基礎込み換算 `(1 + 0.194) * 100` は 119.39999999999999 になり、表示は「119.4%」でも
 * 素の `>=` では目標 119.4 に未達となる。目標値の桁で丸めると 0.1939（=119.39）まで達成になってしまうため、
 * 丸めではなく固定の許容差で吸収する。
 */
const COMPARISON_EPSILON = 1e-9;

/** 達成判定と不足抽出で共通に使う比較。誤差だけを吸収し、本物の未達（0.01 以上の差）は未達のままにする。 */
export function meetsTarget(current: number, target: number): boolean {
  return current >= target - COMPARISON_EPSILON;
}

/** 目標までの不足量を表示する。丸めて 0 になる不足を「達成済み」に見せない。 */
function deficitText(deficit: number, unit: "" | "%"): string {
  const digits = unit === "%" ? 1 : 0;
  const rounded = Number(deficit.toFixed(digits));
  if (rounded === 0) return `あと ${(10 ** -digits).toFixed(digits)}${unit}未満`;
  return `あと ${deficit.toFixed(digits)}${unit}`;
}

/** 公開プロフィールで計測できる値を、目標水準までの相対不足量で優先表示する。 */
export function priorityRecommendations(comparisons: StatComparison[]): PriorityRecommendation[] {
  return comparisons
    .filter((comparison): comparison is StatComparison & { current: number } => comparison.current !== null && !meetsTarget(comparison.current, comparison.targets["目標"]))
    .map((comparison) => {
      const target = comparison.targets["目標"];
      const deficit = target - comparison.current;
      const severity = deficit / Math.max(target, 1);
      const priority: PriorityRecommendation["priority"] = severity >= 0.25 ? "最優先" : severity >= 0.1 ? "優先" : "次点";
      return {
        key: comparison.key,
        label: comparison.label,
        unit: comparison.unit,
        current: comparison.current,
        target,
        deficit,
        priority,
        rationale: _guideTemplates.ja("guide.legacy.buildAdvisor_templates.b00001",{v0:target,v1:comparison.unit,v2:deficitText(deficit, comparison.unit)}),
      };
    })
    .sort((left, right) => (right.deficit / Math.max(right.target, 1)) - (left.deficit / Math.max(left.target, 1)))
    .slice(0, 3);
}

type RelicForAction = { name: string; slot?: string; main: { name: string; display: string } | null };

const STAT_MAIN_LABELS: Record<StatKey, string[]> = {
  critRate: ["会心率"], critDmg: ["会心ダメ"], speed: ["速度"], attack: ["攻撃力"], attackPercent: ["攻撃力"], breakEffect: ["撃破特効"],
  effectHitRate: ["効果命中"], effectRes: ["効果抵抗"], hp: ["HP"], hpPercent: ["HP"], defense: ["防御力"], defPercent: ["防御力"],
  energyRecharge: ["元素チャージ", "EP回復", "エネルギー"], elementalMastery: ["元素熟知"], anomalyMastery: ["異常マスタリー"], anomalyProficiency: ["異常掌握"], impact: ["衝撃力"], penRatio: ["貫通"], energyRegen: ["エネルギー"],
};

function guideFamily(guide: GuideDefinition): "hsr" | "genshin" | "zzz" {
  const slots = guide.mainStats.map((entry) => entry.slot).join(" ");
  if (/時計|杯|冠/.test(slots)) return "genshin";
  if (/(^|\s)(IV|V|VI)(\s|$)/.test(slots)) return "zzz";
  return "hsr";
}

/**
 * そのゲームでサブステータスとして出現しうる StatKey。
 * ガイドが主ステータス欄を持たないステータスは「部位を問わずサブで伸ばす」と案内するが、
 * サブに出ないステータスでは実行不可能な助言になるため、ここで切り分ける。
 * HSR: StarRailRes relic_sub_affixes.json のサブ12種（SPRatioBase＝EP回復効率は含まれない）。
 * ZZZ: ディスクのサブは全部位共通で、貫通率・属性ダメージ・異常掌握・衝撃力・エネルギー自動回復はメイン専用。
 */
const SUBSTAT_CAPABLE_KEYS: Record<"hsr" | "genshin" | "zzz", ReadonlySet<StatKey>> = {
  hsr: new Set<StatKey>(["hp", "hpPercent", "attack", "attackPercent", "defense", "defPercent", "speed", "critRate", "critDmg", "breakEffect", "effectHitRate", "effectRes"]),
  genshin: new Set<StatKey>(["hp", "hpPercent", "attack", "attackPercent", "defense", "defPercent", "critRate", "critDmg", "elementalMastery", "energyRecharge"]),
  zzz: new Set<StatKey>(["hp", "hpPercent", "attack", "attackPercent", "defense", "defPercent", "critRate", "critDmg", "anomalyMastery"]),
};

/**
 * 装備アクションで「こうしたい」と示す主ステータス名。
 * ZZZ のディスク IV〜VI が持てる HP・防御力は割合だけなので、実数表記（「HP」「防御力」）を提案しない。
 * 原神・HSR は従来どおり STAT_MAIN_LABELS の先頭を使う。
 */
const ZZZ_DESIRED_STAT_LABELS: Partial<Record<StatKey, string>> = { hp: "HP%", hpPercent: "HP%", defense: "防御力%", defPercent: "防御力%" };
/** 同じキーでもゲームで呼び名が違うもの。STAT_MAIN_LABELS の先頭は照合用の語なので、提案文にそのまま使えない。 */
const DESIRED_STAT_LABELS_BY_FAMILY: Partial<Record<StatKey, Partial<Record<"hsr" | "genshin" | "zzz", string>>>> = {
  energyRecharge: { hsr: "EP回復効率", genshin: "元素チャージ効率" },
};

function desiredStatLabel(family: "hsr" | "genshin" | "zzz", key: StatKey): string | undefined {
  if (family === "zzz" && ZZZ_DESIRED_STAT_LABELS[key]) return ZZZ_DESIRED_STAT_LABELS[key];
  return DESIRED_STAT_LABELS_BY_FAMILY[key]?.[family];
}

/** 部位を特定しないときに返す既定ラベル（日本語）。画面は slotScope で言語別の語へ差し替える。 */
const ALL_SLOTS_LABEL = "全部位";

function normalizedSlot(slot: string) {
  const normalized = slot.replace("時の砂", "時計").replace("空の杯", "杯").replace("理の冠", "冠").replace("ドライバディスク ", "").trim();
  return ({ IV: "4", V: "5", VI: "6" } as Record<string, string>)[normalized] ?? normalized;
}

function mainStatMatchesGuide(currentMain: string | null, guideValue: string | undefined, labels: string[]) {
  if (!currentMain) return false;
  const current = currentMain.replace("ボーナス", "");
  return labels.some((label) => current.includes(label)) || Boolean(guideValue && (guideValue.includes(current) || current.includes(guideValue.replace("%", ""))));
}

/** 未達ステータスを、公開プロフィール上の装備部位と主・サブステータスの具体的な見直しへ変換する。 */
export function equipmentActionsFor(guide: GuideDefinition, relics: RelicForAction[], recommendations: PriorityRecommendation[]): EquipmentAction[] {
  const family = guideFamily(guide);
  return recommendations.flatMap((recommendation): EquipmentAction[] => {
    const labels = STAT_MAIN_LABELS[recommendation.key];
    const desiredStat = desiredStatLabel(family, recommendation.key) ?? labels[0] ?? recommendation.label;
    const configuredSlots = guide.mainStats.filter((entry) => labels.some((label) => entry.value.includes(label))).map((entry) => entry.slot);

    // ガイドがこのステータスを主ステータスに指定していない＝主ステータスは別の目的で埋まっている。
    // 部位を選んで上書きを促すと、出典で裏づけた推奨を崩す（全251名の計測で、既定部位を使う75件すべてが衝突していた）。
    if (!configuredSlots.length) {
      if (!SUBSTAT_CAPABLE_KEYS[family].has(recommendation.key)) return [];
      return [{
        recommendationKey: recommendation.key, statLabel: recommendation.label, action: "サブステータスを厳選",
        slot: ALL_SLOTS_LABEL, slotScope: "any", equippedName: null, currentMain: null, desiredStat,
        reason: _guideTemplates.ja("guide.legacy.buildAdvisor_templates.b00002",{v0:desiredStat}),
      }];
    }

    const slot = configuredSlots[0];
    const equipped = relics.find((relic) => normalizedSlot(relic.slot ?? relic.name) === normalizedSlot(slot)) ?? null;
    const currentMain = equipped?.main?.name ?? null;
    const guideValue = guide.mainStats.find((entry) => normalizedSlot(entry.slot) === normalizedSlot(slot))?.value;
    const mainMatches = mainStatMatchesGuide(currentMain, guideValue, labels);
    const action: EquipmentAction["action"] = mainMatches ? "サブステータスを厳選" : "主ステータスを変更";
    return [{
      recommendationKey: recommendation.key, statLabel: recommendation.label, action, slot, slotScope: "specific",
      equippedName: equipped?.name ?? null, currentMain, desiredStat,
      reason: mainMatches
        ? _guideTemplates.ja("guide.legacy.buildAdvisor_templates.b00003",{v0:slot,v1:String(currentMain),v2:desiredStat})
        : _guideTemplates.ja("guide.legacy.buildAdvisor_templates.b00004",{v0:slot,v1:currentMain ? `は現在${currentMain}` : "",v2:desiredStat,v3:equipped?.name ?? "装備"}),
    }];
  });
}

export type CharacterProfile = {
  id: string;
  identity: CharacterIdentity;
  name: string;
  level: number | null;
  rank: number | null;
  portrait: string | null;
  element: string;
  elementColor: string | null;
  path: string;
  lightCone: {
    name: string;
    level: number | null;
    rank: number | null;
    icon: string | null;
  } | null;
  relics: Array<{
    id: string;
    name: string;
    slot?: string;
    setName: string;
    level: number | null;
    icon: string | null;
    main: { name: string; display: string } | null;
    subs: Array<{ name: string; display: string }>;
  }>;
  allStats: Array<{ name: string; display: string; icon: string | null }>;
  statsNote?: string;
  statsStatus?: "final" | "unavailable";
  guide: GuideDefinition;
  comparisons: StatComparison[];
  recommendations: PriorityRecommendation[];
  equipmentActions: EquipmentAction[];
  partyRecommendations: PartyRecommendationSet;
  constellations: ConstellationProfile;
};

export type BuildLookupResult = {
  player: { uid: string; name: string; level: number | null };
  characters: CharacterProfile[];
  dataSource?: "MiHoMo" | "Enka";
  cached: boolean;
  cacheExpiresAt: string;
  fetchedAt: string;
};

const DAMAGE_TARGETS: TargetStatDefinition[] = [
  { key: "critRate", label: _content.ja("guide.legacy.buildAdvisor.b00001"), unit: "%", targets: { "厳選": 85, "目標": 75, "妥協": 65 } },
  { key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b00002"), unit: "%", targets: { "厳選": 180, "目標": 150, "妥協": 120 } },
  { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00003"), unit: "", targets: { "厳選": 134, "目標": 134, "妥協": 120 } },
  { key: "attackPercent", label: _content.ja("guide.legacy.buildAdvisor.b00004"), unit: "%", targets: { "厳選": 70, "目標": 55, "妥協": 40 } },
];

const SUPPORT_TARGETS: TargetStatDefinition[] = [
  { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00005"), unit: "", targets: { "厳選": 160, "目標": 145, "妥協": 134 } },
  { key: "effectRes", label: _content.ja("guide.legacy.buildAdvisor.b00006"), unit: "%", targets: { "厳選": 45, "目標": 30, "妥協": 20 } },
  { key: "hpPercent", label: _content.ja("guide.legacy.buildAdvisor.b00007"), unit: "%", targets: { "厳選": 45, "目標": 32, "妥協": 20 } },
];

const BREAK_TARGETS: TargetStatDefinition[] = [
  { key: "breakEffect", label: _content.ja("guide.legacy.buildAdvisor.b00008"), unit: "%", targets: { "厳選": 360, "目標": 300, "妥協": 240 } },
  { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00009"), unit: "", targets: { "厳選": 154, "目標": 150, "妥協": 145 } },
  { key: "attackPercent", label: _content.ja("guide.legacy.buildAdvisor.b00010"), unit: "%", targets: { "厳選": 45, "目標": 35, "妥協": 25 } },
];

const DOT_TARGETS: TargetStatDefinition[] = [
  { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00011"), unit: "", targets: { "厳選": 160, "目標": 147, "妥協": 134 } },
  { key: "attackPercent", label: _content.ja("guide.legacy.buildAdvisor.b00012"), unit: "%", targets: { "厳選": 90, "目標": 75, "妥協": 60 } },
  { key: "effectHitRate", label: _content.ja("guide.legacy.buildAdvisor.b00013"), unit: "%", targets: { "厳選": 40, "目標": 30, "妥協": 20 } },
];

function damageGuide(headline: string, relicSet: string, planarSet: string, targets = DAMAGE_TARGETS): GuideDefinition {
  return { headline, relicSet, planarSet, mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00014"), value: _content.ja("guide.legacy.buildAdvisor.b00015") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00016"), value: _content.ja("guide.legacy.buildAdvisor.b00017") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00018"), value: _content.ja("guide.legacy.buildAdvisor.b00019") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00020"), value: _content.ja("guide.legacy.buildAdvisor.b00021") }], targets };
}

function supportGuide(headline: string, relicSet: string, planarSet: string, targets = SUPPORT_TARGETS): GuideDefinition {
  return { headline, relicSet, planarSet, mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00022"), value: _content.ja("guide.legacy.buildAdvisor.b00023") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00024"), value: _content.ja("guide.legacy.buildAdvisor.b00025") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00026"), value: _content.ja("guide.legacy.buildAdvisor.b00027") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00028"), value: _content.ja("guide.legacy.buildAdvisor.b00029") }], targets };
}

const GUIDE_OVERRIDES: Record<string, GuideDefinition> = {
  "ホタル": {
    headline: _content.ja("guide.legacy.buildAdvisor.b00030"),
    relicSet: _content.ja("guide.legacy.buildAdvisor.b00031"),
    planarSet: _content.ja("guide.legacy.buildAdvisor.b00032"),
    mainStats: [
      { slot: _content.ja("guide.legacy.buildAdvisor.b00033"), value: _content.ja("guide.legacy.buildAdvisor.b00034") },
      { slot: _content.ja("guide.legacy.buildAdvisor.b00035"), value: _content.ja("guide.legacy.buildAdvisor.b00036") },
      { slot: _content.ja("guide.legacy.buildAdvisor.b00037"), value: _content.ja("guide.legacy.buildAdvisor.b00038") },
      { slot: _content.ja("guide.legacy.buildAdvisor.b00039"), value: _content.ja("guide.legacy.buildAdvisor.b00040") },
    ],
    targets: BREAK_TARGETS,
    targetContext: _content.ja("guide.legacy.buildAdvisor.b00041"),
    dataAsOf: "2026-08-25",
    updatedAt: "2026-08-25",
    sourceLabel: _content.ja("guide.legacy.buildAdvisor.b00042"),
  },
  "カフカ": {
    headline: _content.ja("guide.legacy.buildAdvisor.b00043"),
    relicSet: _content.ja("guide.legacy.buildAdvisor.b00044"),
    planarSet: _content.ja("guide.legacy.buildAdvisor.b00045"),
    mainStats: [
      { slot: _content.ja("guide.legacy.buildAdvisor.b00046"), value: _content.ja("guide.legacy.buildAdvisor.b00047") },
      { slot: _content.ja("guide.legacy.buildAdvisor.b00048"), value: _content.ja("guide.legacy.buildAdvisor.b00049") },
      { slot: _content.ja("guide.legacy.buildAdvisor.b00050"), value: _content.ja("guide.legacy.buildAdvisor.b00051") },
      { slot: _content.ja("guide.legacy.buildAdvisor.b00052"), value: _content.ja("guide.legacy.buildAdvisor.b00053") },
    ],
    targets: DOT_TARGETS,
  },
  "銀狼": {
    headline: _content.ja("guide.legacy.buildAdvisor.b00054"),
    relicSet: _content.ja("guide.legacy.buildAdvisor.b00055"),
    planarSet: _content.ja("guide.legacy.buildAdvisor.b00056"),
    mainStats: [
      { slot: _content.ja("guide.legacy.buildAdvisor.b00057"), value: _content.ja("guide.legacy.buildAdvisor.b00058") },
      { slot: _content.ja("guide.legacy.buildAdvisor.b00059"), value: _content.ja("guide.legacy.buildAdvisor.b00060") },
      { slot: _content.ja("guide.legacy.buildAdvisor.b00061"), value: _content.ja("guide.legacy.buildAdvisor.b00062") },
      { slot: _content.ja("guide.legacy.buildAdvisor.b00063"), value: _content.ja("guide.legacy.buildAdvisor.b00064") },
    ],
    targets: [
      { key: "effectHitRate", label: _content.ja("guide.legacy.buildAdvisor.b00065"), unit: "%", targets: { "厳選": 96, "目標": 85, "妥協": 70 } },
      { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00066"), unit: "", targets: { "厳選": 160, "目標": 145, "妥協": 134 } },
      { key: "effectRes", label: _content.ja("guide.legacy.buildAdvisor.b00067"), unit: "%", targets: { "厳選": 40, "目標": 30, "妥協": 20 } },
    ],
  },
  "御空": {"relicSet":_content.ja("guide.legacy.buildAdvisor.b00068"),"planarSet":_content.ja("guide.legacy.buildAdvisor.b00069"),"mainStats":[{"slot":_content.ja("guide.legacy.buildAdvisor.b00070"),"value":_content.ja("guide.legacy.buildAdvisor.b00071")},{"slot":_content.ja("guide.legacy.buildAdvisor.b00072"),"value":_content.ja("guide.legacy.buildAdvisor.b00073")},{"slot":_content.ja("guide.legacy.buildAdvisor.b00074"),"value":_content.ja("guide.legacy.buildAdvisor.b00075")},{"slot":_content.ja("guide.legacy.buildAdvisor.b00076"),"value":_content.ja("guide.legacy.buildAdvisor.b00077")}],"targets":[{"key":"speed","label":_content.ja("guide.legacy.buildAdvisor.b00078"),"unit":"","targets":{"厳選":161,"目標":145,"妥協":134}},{"key":"effectRes","label":_content.ja("guide.legacy.buildAdvisor.b00079"),"unit":"%","targets":{"厳選":45,"目標":30,"妥協":20}},{"key":"hpPercent","label":_content.ja("guide.legacy.buildAdvisor.b00080"),"unit":"%","targets":{"厳選":45,"目標":32,"妥協":20}}],"profileId":"curated:batch15:yukong","headline":_content.ja("guide.legacy.buildAdvisor.b00081"),"targetContext":_content.ja("guide.legacy.buildAdvisor.b00082"),"dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.ja("guide.legacy.buildAdvisor.b00083")},
  "長夜月": {"relicSet":_content.ja("guide.legacy.buildAdvisor.b00084"),"planarSet":_content.ja("guide.legacy.buildAdvisor.b00085"),"mainStats":[{"slot":_content.ja("guide.legacy.buildAdvisor.b00086"),"value":_content.ja("guide.legacy.buildAdvisor.b00087")},{"slot":_content.ja("guide.legacy.buildAdvisor.b00088"),"value":_content.ja("guide.legacy.buildAdvisor.b00089")},{"slot":_content.ja("guide.legacy.buildAdvisor.b00090"),"value":_content.ja("guide.legacy.buildAdvisor.b00091")},{"slot":_content.ja("guide.legacy.buildAdvisor.b00092"),"value":_content.ja("guide.legacy.buildAdvisor.b00093")}],"targets":[{"key":"critRate","label":_content.ja("guide.legacy.buildAdvisor.b00094"),"unit":"%","targets":{"厳選":85,"目標":75,"妥協":65}},{"key":"critDmg","label":_content.ja("guide.legacy.buildAdvisor.b00095"),"unit":"%","targets":{"厳選":200,"目標":170,"妥協":140}},{"key":"hpPercent","label":_content.ja("guide.legacy.buildAdvisor.b00096"),"unit":"%","targets":{"厳選":65,"目標":50,"妥協":35}}],"profileId":"curated:batch15-evernight","headline":_content.ja("guide.legacy.buildAdvisor.b00097"),"targetContext":_content.ja("guide.legacy.buildAdvisor.b00098"),"dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.ja("guide.legacy.buildAdvisor.b00099")},
  "停雲": {"relicSet":_content.ja("guide.legacy.buildAdvisor.b00100"),"planarSet":_content.ja("guide.legacy.buildAdvisor.b00101"),"mainStats":[{"slot":_content.ja("guide.legacy.buildAdvisor.b00102"),"value":_content.ja("guide.legacy.buildAdvisor.b00103")},{"slot":_content.ja("guide.legacy.buildAdvisor.b00104"),"value":_content.ja("guide.legacy.buildAdvisor.b00105")},{"slot":_content.ja("guide.legacy.buildAdvisor.b00106"),"value":_content.ja("guide.legacy.buildAdvisor.b00107")},{"slot":_content.ja("guide.legacy.buildAdvisor.b00108"),"value":_content.ja("guide.legacy.buildAdvisor.b00109")}],"targets":[{"key":"speed","label":_content.ja("guide.legacy.buildAdvisor.b00110"),"unit":"","targets":{"厳選":161,"目標":145,"妥協":134}},{"key":"effectRes","label":_content.ja("guide.legacy.buildAdvisor.b00111"),"unit":"%","targets":{"厳選":45,"目標":30,"妥協":20}},{"key":"hpPercent","label":_content.ja("guide.legacy.buildAdvisor.b00112"),"unit":"%","targets":{"厳選":45,"目標":32,"妥協":20}}],"profileId":"curated:batch15:tingyun","headline":_content.ja("guide.legacy.buildAdvisor.b00113"),"targetContext":_content.ja("guide.legacy.buildAdvisor.b00114"),"dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.ja("guide.legacy.buildAdvisor.b00115")},
  "白露": {"relicSet":_content.ja("guide.legacy.buildAdvisor.b00116"),"planarSet":_content.ja("guide.legacy.buildAdvisor.b00117"),"mainStats":[{"slot":_content.ja("guide.legacy.buildAdvisor.b00118"),"value":_content.ja("guide.legacy.buildAdvisor.b00119")},{"slot":_content.ja("guide.legacy.buildAdvisor.b00120"),"value":_content.ja("guide.legacy.buildAdvisor.b00121")},{"slot":_content.ja("guide.legacy.buildAdvisor.b00122"),"value":_content.ja("guide.legacy.buildAdvisor.b00123")},{"slot":_content.ja("guide.legacy.buildAdvisor.b00124"),"value":_content.ja("guide.legacy.buildAdvisor.b00125")}],"targets":[{"key":"speed","label":_content.ja("guide.legacy.buildAdvisor.b00126"),"unit":"","targets":{"厳選":160,"目標":145,"妥協":134}},{"key":"effectRes","label":_content.ja("guide.legacy.buildAdvisor.b00127"),"unit":"%","targets":{"厳選":45,"目標":30,"妥協":20}},{"key":"hpPercent","label":_content.ja("guide.legacy.buildAdvisor.b00128"),"unit":"%","targets":{"厳選":50,"目標":35,"妥協":25}}],"profileId":"curated:batch15:bailu","headline":_content.ja("guide.legacy.buildAdvisor.b00129"),"targetContext":_content.ja("guide.legacy.buildAdvisor.b00130"),"dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.ja("guide.legacy.buildAdvisor.b00131")},
  "緋英": {"relicSet":_content.ja("guide.legacy.buildAdvisor.b00132"),"planarSet":_content.ja("guide.legacy.buildAdvisor.b00133"),"mainStats":[{"slot":_content.ja("guide.legacy.buildAdvisor.b00134"),"value":_content.ja("guide.legacy.buildAdvisor.b00135")},{"slot":_content.ja("guide.legacy.buildAdvisor.b00136"),"value":_content.ja("guide.legacy.buildAdvisor.b00137")},{"slot":_content.ja("guide.legacy.buildAdvisor.b00138"),"value":_content.ja("guide.legacy.buildAdvisor.b00139")},{"slot":_content.ja("guide.legacy.buildAdvisor.b00140"),"value":_content.ja("guide.legacy.buildAdvisor.b00141")}],"targets":[{"key":"critRate","label":_content.ja("guide.legacy.buildAdvisor.b00142"),"unit":"%","targets":{"厳選":80,"目標":70,"妥協":60}},{"key":"critDmg","label":_content.ja("guide.legacy.buildAdvisor.b00143"),"unit":"%","targets":{"厳選":230,"目標":200,"妥協":180}},{"key":"speed","label":_content.ja("guide.legacy.buildAdvisor.b00144"),"unit":"","targets":{"厳選":143,"目標":134,"妥協":120}},{"key":"attackPercent","label":_content.ja("guide.legacy.buildAdvisor.b00145"),"unit":"%","targets":{"厳選":75,"目標":60,"妥協":45}}],"profileId":"curated:batch15:hiei","headline":_content.ja("guide.legacy.buildAdvisor.b00146"),"targetContext":_content.ja("guide.legacy.buildAdvisor.b00147"),"dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.ja("guide.legacy.buildAdvisor.b00148")},
  "彦卿": {"relicSet":_content.ja("guide.legacy.buildAdvisor.b00149"),"planarSet":_content.ja("guide.legacy.buildAdvisor.b00150"),"mainStats":[{"slot":_content.ja("guide.legacy.buildAdvisor.b00151"),"value":_content.ja("guide.legacy.buildAdvisor.b00152")},{"slot":_content.ja("guide.legacy.buildAdvisor.b00153"),"value":_content.ja("guide.legacy.buildAdvisor.b00154")},{"slot":_content.ja("guide.legacy.buildAdvisor.b00155"),"value":_content.ja("guide.legacy.buildAdvisor.b00156")},{"slot":_content.ja("guide.legacy.buildAdvisor.b00157"),"value":_content.ja("guide.legacy.buildAdvisor.b00158")}],"targets":[{"key":"critRate","label":_content.ja("guide.legacy.buildAdvisor.b00159"),"unit":"%","targets":{"厳選":85,"目標":75,"妥協":65}},{"key":"critDmg","label":_content.ja("guide.legacy.buildAdvisor.b00160"),"unit":"%","targets":{"厳選":200,"目標":170,"妥協":140}},{"key":"speed","label":_content.ja("guide.legacy.buildAdvisor.b00161"),"unit":"","targets":{"厳選":143,"目標":134,"妥協":120}},{"key":"attackPercent","label":_content.ja("guide.legacy.buildAdvisor.b00162"),"unit":"%","targets":{"厳選":75,"目標":60,"妥協":45}}],"profileId":"curated:batch15:yanqing","headline":_content.ja("guide.legacy.buildAdvisor.b00163"),"targetContext":_content.ja("guide.legacy.buildAdvisor.b00164"),"dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.ja("guide.legacy.buildAdvisor.b00165")},
};

const ROLE_GUIDES: Record<string, GuideDefinition> = {
  "調和": {
    headline: _content.ja("guide.legacy.buildAdvisor.b00166"),
    relicSet: _content.ja("guide.legacy.buildAdvisor.b00167"),
    planarSet: _content.ja("guide.legacy.buildAdvisor.b00168"),
    mainStats: [
      { slot: _content.ja("guide.legacy.buildAdvisor.b00169"), value: _content.ja("guide.legacy.buildAdvisor.b00170") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00171"), value: _content.ja("guide.legacy.buildAdvisor.b00172") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00173"), value: _content.ja("guide.legacy.buildAdvisor.b00174") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00175"), value: _content.ja("guide.legacy.buildAdvisor.b00176") },
    ],
    targets: SUPPORT_TARGETS,
  },
  "虚無": {
    headline: _content.ja("guide.legacy.buildAdvisor.b00177"),
    relicSet: _content.ja("guide.legacy.buildAdvisor.b00178"),
    planarSet: _content.ja("guide.legacy.buildAdvisor.b00179"),
    mainStats: [
      { slot: _content.ja("guide.legacy.buildAdvisor.b00180"), value: _content.ja("guide.legacy.buildAdvisor.b00181") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00182"), value: _content.ja("guide.legacy.buildAdvisor.b00183") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00184"), value: _content.ja("guide.legacy.buildAdvisor.b00185") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00186"), value: _content.ja("guide.legacy.buildAdvisor.b00187") },
    ],
    targets: DOT_TARGETS,
  },
  "豊穣": {
    headline: _content.ja("guide.legacy.buildAdvisor.b00188"),
    relicSet: _content.ja("guide.legacy.buildAdvisor.b00189"),
    planarSet: _content.ja("guide.legacy.buildAdvisor.b00190"),
    mainStats: [
      { slot: _content.ja("guide.legacy.buildAdvisor.b00191"), value: _content.ja("guide.legacy.buildAdvisor.b00192") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00193"), value: _content.ja("guide.legacy.buildAdvisor.b00194") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00195"), value: _content.ja("guide.legacy.buildAdvisor.b00196") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00197"), value: _content.ja("guide.legacy.buildAdvisor.b00198") },
    ],
    targets: SUPPORT_TARGETS,
  },
  "存護": {
    headline: _content.ja("guide.legacy.buildAdvisor.b00199"),
    relicSet: _content.ja("guide.legacy.buildAdvisor.b00200"),
    planarSet: _content.ja("guide.legacy.buildAdvisor.b00201"),
    mainStats: [
      { slot: _content.ja("guide.legacy.buildAdvisor.b00202"), value: _content.ja("guide.legacy.buildAdvisor.b00203") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00204"), value: _content.ja("guide.legacy.buildAdvisor.b00205") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00206"), value: _content.ja("guide.legacy.buildAdvisor.b00207") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00208"), value: _content.ja("guide.legacy.buildAdvisor.b00209") },
    ],
    targets: [
      { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00210"), unit: "", targets: { "厳選": 150, "目標": 134, "妥協": 120 } },
      { key: "defPercent", label: _content.ja("guide.legacy.buildAdvisor.b00211"), unit: "%", targets: { "厳選": 80, "目標": 60, "妥協": 45 } },
      { key: "effectRes", label: _content.ja("guide.legacy.buildAdvisor.b00212"), unit: "%", targets: { "厳選": 45, "目標": 30, "妥協": 20 } },
    ],
  },
};

Object.assign(GUIDE_OVERRIDES, {
  "黄泉": { headline: _content.ja("guide.legacy.buildAdvisor.b00213"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00214"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00215"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00216"), value: _content.ja("guide.legacy.buildAdvisor.b00217") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00218"), value: _content.ja("guide.legacy.buildAdvisor.b00219") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00220"), value: _content.ja("guide.legacy.buildAdvisor.b00221") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00222"), value: _content.ja("guide.legacy.buildAdvisor.b00223") }], targets: [{ key: "critRate", label: _content.ja("guide.legacy.buildAdvisor.b00224"), unit: "%", targets: { "厳選": 80, "目標": 70, "妥協": 60 } }, { key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b00225"), unit: "%", targets: { "厳選": 190, "目標": 160, "妥協": 140 } }, { key: "attack", label: _content.ja("guide.legacy.buildAdvisor.b00226"), unit: "", targets: { "厳選": 3500, "目標": 3200, "妥協": 3000 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00227"), unit: "", targets: { "厳選": 135, "目標": 101, "妥協": 100 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b00228"), dataAsOf: "2026-08-26", updatedAt: "2026-08-26", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b00229") },
  "ゼーレ": damageGuide("再現性のある連続行動へ、会心の安定感を優先する。", "星の如く輝く天才 ×4", "サルソットの出陣 ×2"),
  "景元": damageGuide("神君の追撃を伸ばすため、会心と攻撃力を整える。", "灰燼を燃やし尽くす大公 ×4", "サルソットの出陣 ×2"),
  "姫子": {"headline":_content.ja("guide.legacy.buildAdvisor.b00230"),"relicSet":_content.ja("guide.legacy.buildAdvisor.b00231"),"planarSet":_content.ja("guide.legacy.buildAdvisor.b00232"),"mainStats":[{"slot":_content.ja("guide.legacy.buildAdvisor.b00233"),"value":_content.ja("guide.legacy.buildAdvisor.b00234")},{"slot":_content.ja("guide.legacy.buildAdvisor.b00235"),"value":_content.ja("guide.legacy.buildAdvisor.b00236")},{"slot":_content.ja("guide.legacy.buildAdvisor.b00237"),"value":_content.ja("guide.legacy.buildAdvisor.b00238")},{"slot":_content.ja("guide.legacy.buildAdvisor.b00239"),"value":_content.ja("guide.legacy.buildAdvisor.b00240")}],"targets":[{"key":"critRate","label":_content.ja("guide.legacy.buildAdvisor.b00241"),"unit":"%","targets":{"厳選":75,"目標":65,"妥協":55}},{"key":"critDmg","label":_content.ja("guide.legacy.buildAdvisor.b00242"),"unit":"%","targets":{"厳選":160,"目標":130,"妥協":110}},{"key":"speed","label":_content.ja("guide.legacy.buildAdvisor.b00243"),"unit":"","targets":{"厳選":134,"目標":134,"妥協":120}},{"key":"attackPercent","label":_content.ja("guide.legacy.buildAdvisor.b00244"),"unit":"%","targets":{"厳選":70,"目標":55,"妥協":40}},{"key":"attack","label":_content.ja("guide.legacy.buildAdvisor.b00245"),"unit":"","targets":{"厳選":3600,"目標":3000,"妥協":2700}}],"dataAsOf":"2026-09-05","targetContext":_content.ja("guide.legacy.buildAdvisor.b00246"),"updatedAt":"2026-09-05","sourceLabel":_content.ja("guide.legacy.buildAdvisor.b00247"),"profileId":"curated:batch15:himeko"},
  "Dr.レイシオ": damageGuide("単体への追加攻撃を最大化する、会心重視の設計。", "荒海を歩む旅人 ×4", "サルソットの出陣 ×2"),
  "トパーズ＆カブ": damageGuide("追加攻撃の頻度と火力を、会心と攻撃力で支える。", "灰燼を燃やし尽くす大公 ×4", "サルソットの出陣 ×2"),
  "飲月": damageGuide("強化通常攻撃の一撃を、会心比率で磨き上げる。", "荒海を歩む旅人 ×4", "ルサカの海中世界 ×2"),
  "刃": { headline: _content.ja("guide.legacy.buildAdvisor.b00248"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00249"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00250"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00251"), value: _content.ja("guide.legacy.buildAdvisor.b00252") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00253"), value: _content.ja("guide.legacy.buildAdvisor.b00254") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00255"), value: _content.ja("guide.legacy.buildAdvisor.b00256") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00257"), value: _content.ja("guide.legacy.buildAdvisor.b00258") }], targets: [{ key: "critRate", label: _content.ja("guide.legacy.buildAdvisor.b00259"), unit: "%", targets: { "厳選": 85, "目標": 75, "妥協": 65 } }, { key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b00260"), unit: "%", targets: { "厳選": 190, "目標": 160, "妥協": 130 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00261"), unit: "", targets: { "厳選": 134, "目標": 134, "妥協": 120 } }, { key: "hpPercent", label: _content.ja("guide.legacy.buildAdvisor.b00262"), unit: "%", targets: { "厳選": 55, "目標": 45, "妥協": 35 } }] },
  "ブートヒル": { headline: _content.ja("guide.legacy.buildAdvisor.b00263"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00264"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00265"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00266"), value: _content.ja("guide.legacy.buildAdvisor.b00267") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00268"), value: _content.ja("guide.legacy.buildAdvisor.b00269") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00270"), value: _content.ja("guide.legacy.buildAdvisor.b00271") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00272"), value: _content.ja("guide.legacy.buildAdvisor.b00273") }], targets: [{ key: "breakEffect", label: _content.ja("guide.legacy.buildAdvisor.b00274"), unit: "%", targets: { "厳選": 240, "目標": 200, "妥協": 180 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00275"), unit: "", targets: { "厳選": 160, "目標": 145, "妥協": 135 } }, { key: "critRate", label: _content.ja("guide.legacy.buildAdvisor.b00276"), unit: "%", targets: { "厳選": 55, "目標": 45, "妥協": 40 } }, { key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b00277"), unit: "%", targets: { "厳選": 70, "目標": 50, "妥協": 40 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b00278"), dataAsOf: "2026-08-26", updatedAt: "2026-08-26", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b00279") },
  "ルアン・メェイ": { headline: _content.ja("guide.legacy.buildAdvisor.b00280"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00281"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00282"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00283"), value: _content.ja("guide.legacy.buildAdvisor.b00284") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00285"), value: _content.ja("guide.legacy.buildAdvisor.b00286") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00287"), value: _content.ja("guide.legacy.buildAdvisor.b00288") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00289"), value: _content.ja("guide.legacy.buildAdvisor.b00290") }], targets: [{ key: "breakEffect", label: _content.ja("guide.legacy.buildAdvisor.b00291"), unit: "%", targets: { "厳選": 180, "目標": 160, "妥協": 140 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00292"), unit: "", targets: { "厳選": 145, "目標": 134, "妥協": 120 } }, { key: "effectRes", label: _content.ja("guide.legacy.buildAdvisor.b00293"), unit: "%", targets: { "厳選": 40, "目標": 30, "妥協": 20 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b00294"), dataAsOf: "2026-08-25", updatedAt: "2026-08-25", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b00295") },
  "花火": supportGuide("会心ダメージと高速行動で、主力アタッカーを引き上げる。", "仮想空間を漫遊するメッセンジャー ×4", "折れた竜骨 ×2", [{ key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b00296"), unit: "%", targets: { "厳選": 230, "目標": 200, "妥協": 170 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00297"), unit: "", targets: { "厳選": 161, "目標": 160, "妥協": 145 } }, { key: "effectRes", label: _content.ja("guide.legacy.buildAdvisor.b00298"), unit: "%", targets: { "厳選": 40, "目標": 30, "妥協": 20 } }]),
  "ブローニャ": supportGuide("行動順の最適化を最優先に、耐久を添える。", "仮想空間を漫遊するメッセンジャー ×4", "折れた竜骨 ×2"),
  "符玄": { headline: _content.ja("guide.legacy.buildAdvisor.b00299"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00300"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00301"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00302"), value: _content.ja("guide.legacy.buildAdvisor.b00303") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00304"), value: _content.ja("guide.legacy.buildAdvisor.b00305") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00306"), value: _content.ja("guide.legacy.buildAdvisor.b00307") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00308"), value: _content.ja("guide.legacy.buildAdvisor.b00309") }], targets: SUPPORT_TARGETS },
  "アベンチュリン": { headline: _content.ja("guide.legacy.buildAdvisor.b00310"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00311"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00312"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00313"), value: _content.ja("guide.legacy.buildAdvisor.b00314") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00315"), value: _content.ja("guide.legacy.buildAdvisor.b00316") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00317"), value: _content.ja("guide.legacy.buildAdvisor.b00318") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00319"), value: _content.ja("guide.legacy.buildAdvisor.b00320") }], targets: [{ key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00321"), unit: "", targets: { "厳選": 134, "目標": 134, "妥協": 120 } }, { key: "defPercent", label: _content.ja("guide.legacy.buildAdvisor.b00322"), unit: "%", targets: { "厳選": 90, "目標": 70, "妥協": 50 } }, { key: "effectRes", label: _content.ja("guide.legacy.buildAdvisor.b00323"), unit: "%", targets: { "厳選": 40, "目標": 30, "妥協": 20 } }] },
  "フォフォ": supportGuide("回復と必殺技回転を安定させる、速度中心の構成。", "仮想空間を漫遊するメッセンジャー ×2 / 流雲無痕の過客 ×2", "折れた竜骨 ×2"),
  "ギャラガー": { headline: _content.ja("guide.legacy.buildAdvisor.b00324"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00325"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00326"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00327"), value: _content.ja("guide.legacy.buildAdvisor.b00328") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00329"), value: _content.ja("guide.legacy.buildAdvisor.b00330") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00331"), value: _content.ja("guide.legacy.buildAdvisor.b00332") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00333"), value: _content.ja("guide.legacy.buildAdvisor.b00334") }], targets: [{ key: "breakEffect", label: _content.ja("guide.legacy.buildAdvisor.b00335"), unit: "%", targets: { "厳選": 180, "目標": 150, "妥協": 120 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00336"), unit: "", targets: { "厳選": 160, "目標": 145, "妥協": 134 } }, { key: "effectRes", label: _content.ja("guide.legacy.buildAdvisor.b00337"), unit: "%", targets: { "厳選": 40, "目標": 30, "妥協": 20 } }] },
  "キャストリス": { headline: _content.ja("guide.legacy.buildAdvisor.b00338"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00339"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00340"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00341"), value: _content.ja("guide.legacy.buildAdvisor.b00342") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00343"), value: _content.ja("guide.legacy.buildAdvisor.b00344") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00345"), value: _content.ja("guide.legacy.buildAdvisor.b00346") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00347"), value: _content.ja("guide.legacy.buildAdvisor.b00348") }], targets: [{ key: "critRate", label: _content.ja("guide.legacy.buildAdvisor.b00349"), unit: "%", targets: { "厳選": 80, "目標": 70, "妥協": 60 } }, { key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b00350"), unit: "%", targets: { "厳選": 220, "目標": 180, "妥協": 150 } }, { key: "hp", label: _content.ja("guide.legacy.buildAdvisor.b00351"), unit: "", targets: { "厳選": 10000, "目標": 8500, "妥協": 7500 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b00352"), dataAsOf: "2026-08-25", updatedAt: "2026-08-25", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b00353") },
  "アグライア": { headline: _content.ja("guide.legacy.buildAdvisor.b00354"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00355"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00356"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00357"), value: _content.ja("guide.legacy.buildAdvisor.b00358") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00359"), value: _content.ja("guide.legacy.buildAdvisor.b00360") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00361"), value: _content.ja("guide.legacy.buildAdvisor.b00362") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00363"), value: _content.ja("guide.legacy.buildAdvisor.b00364") }], targets: [{ key: "critRate", label: _content.ja("guide.legacy.buildAdvisor.b00365"), unit: "%", targets: { "厳選": 85, "目標": 75, "妥協": 65 } }, { key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b00366"), unit: "%", targets: { "厳選": 190, "目標": 160, "妥協": 130 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00367"), unit: "", targets: { "厳選": 160, "目標": 134, "妥協": 120 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b00368"), dataAsOf: "2026-08-25", updatedAt: "2026-08-25", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b00369") },
  "アナイクス": { headline: _content.ja("guide.legacy.buildAdvisor.b00370"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00371"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00372"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00373"), value: _content.ja("guide.legacy.buildAdvisor.b00374") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00375"), value: _content.ja("guide.legacy.buildAdvisor.b00376") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00377"), value: _content.ja("guide.legacy.buildAdvisor.b00378") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00379"), value: _content.ja("guide.legacy.buildAdvisor.b00380") }], targets: [{ key: "critRate", label: _content.ja("guide.legacy.buildAdvisor.b00381"), unit: "%", targets: { "厳選": 100, "目標": 80, "妥協": 70 } }, { key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b00382"), unit: "%", targets: { "厳選": 150, "目標": 120, "妥協": 100 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00383"), unit: "", targets: { "厳選": 135, "目標": 134, "妥協": 120 } }, { key: "attack", label: _content.ja("guide.legacy.buildAdvisor.b00384"), unit: "", targets: { "厳選": 2800, "目標": 2500, "妥協": 2200 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b00385"), dataAsOf: "2026-08-25", updatedAt: "2026-08-25", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b00386") },
  "飛霄": { headline: _content.ja("guide.legacy.buildAdvisor.b00387"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00388"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00389"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00390"), value: _content.ja("guide.legacy.buildAdvisor.b00391") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00392"), value: _content.ja("guide.legacy.buildAdvisor.b00393") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00394"), value: _content.ja("guide.legacy.buildAdvisor.b00395") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00396"), value: _content.ja("guide.legacy.buildAdvisor.b00397") }], targets: [{ key: "critRate", label: _content.ja("guide.legacy.buildAdvisor.b00398"), unit: "%", targets: { "厳選": 90, "目標": 80, "妥協": 70 } }, { key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b00399"), unit: "%", targets: { "厳選": 180, "目標": 140, "妥協": 120 } }, { key: "attack", label: _content.ja("guide.legacy.buildAdvisor.b00400"), unit: "", targets: { "厳選": 3400, "目標": 2900, "妥協": 2600 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00401"), unit: "", targets: { "厳選": 160, "目標": 134, "妥協": 120 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b00402"), dataAsOf: "2026-08-25", updatedAt: "2026-08-25", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b00403") },
  "雲璃": damageGuide("反撃の一撃を安定させるため、会心と攻撃力を優先する。", "灰燼を燃やし尽くす大公 ×4", "自転が止まったサルソット ×2"),
  "霊砂": { headline: _content.ja("guide.legacy.buildAdvisor.b00404"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00405"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00406"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00407"), value: _content.ja("guide.legacy.buildAdvisor.b00408") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00409"), value: _content.ja("guide.legacy.buildAdvisor.b00410") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00411"), value: _content.ja("guide.legacy.buildAdvisor.b00412") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00413"), value: _content.ja("guide.legacy.buildAdvisor.b00414") }], targets: [{ key: "breakEffect", label: _content.ja("guide.legacy.buildAdvisor.b00415"), unit: "%", targets: { "厳選": 170, "目標": 140, "妥協": 120 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00416"), unit: "", targets: { "厳選": 160, "目標": 160, "妥協": 145 } }, { key: "attack", label: _content.ja("guide.legacy.buildAdvisor.b00417"), unit: "", targets: { "厳選": 3000, "目標": 2700, "妥協": 2400 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b00418"), dataAsOf: "2026-08-26", updatedAt: "2026-08-26", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b00419") },
  "椒丘": { headline: _content.ja("guide.legacy.buildAdvisor.b00420"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00421"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00422"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00423"), value: _content.ja("guide.legacy.buildAdvisor.b00424") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00425"), value: _content.ja("guide.legacy.buildAdvisor.b00426") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00427"), value: _content.ja("guide.legacy.buildAdvisor.b00428") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00429"), value: _content.ja("guide.legacy.buildAdvisor.b00430") }], targets: [{ key: "effectHitRate", label: _content.ja("guide.legacy.buildAdvisor.b00431"), unit: "%", targets: { "厳選": 178, "目標": 160, "妥協": 140 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00432"), unit: "", targets: { "厳選": 160, "目標": 145, "妥協": 134 } }, { key: "effectRes", label: _content.ja("guide.legacy.buildAdvisor.b00433"), unit: "%", targets: { "厳選": 40, "目標": 30, "妥協": 20 } }] },
  "ブラックスワン": { headline: _content.ja("guide.legacy.buildAdvisor.b00434"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00435"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00436"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00437"), value: _content.ja("guide.legacy.buildAdvisor.b00438") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00439"), value: _content.ja("guide.legacy.buildAdvisor.b00440") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00441"), value: _content.ja("guide.legacy.buildAdvisor.b00442") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00443"), value: _content.ja("guide.legacy.buildAdvisor.b00444") }], targets: [{ key: "effectHitRate", label: _content.ja("guide.legacy.buildAdvisor.b00445"), unit: "%", targets: { "厳選": 150, "目標": 120, "妥協": 100 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00446"), unit: "", targets: { "厳選": 160, "目標": 147, "妥協": 134 } }, { key: "attackPercent", label: _content.ja("guide.legacy.buildAdvisor.b00447"), unit: "%", targets: { "厳選": 90, "目標": 75, "妥協": 60 } }] },
  "サンデー": { headline: _content.ja("guide.legacy.buildAdvisor.b00448"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00449"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00450"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00451"), value: _content.ja("guide.legacy.buildAdvisor.b00452") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00453"), value: _content.ja("guide.legacy.buildAdvisor.b00454") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00455"), value: _content.ja("guide.legacy.buildAdvisor.b00456") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00457"), value: _content.ja("guide.legacy.buildAdvisor.b00458") }], targets: [{ key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b00459"), unit: "%", targets: { "厳選": 220, "目標": 200, "妥協": 180 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00460"), unit: "", targets: { "厳選": 160, "目標": 134, "妥協": 120 } }, { key: "effectRes", label: _content.ja("guide.legacy.buildAdvisor.b00461"), unit: "%", targets: { "厳選": 40, "目標": 30, "妥協": 20 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b00462"), dataAsOf: "2026-08-26", updatedAt: "2026-08-26", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b00463") },
  "ロビン": { headline: _content.ja("guide.legacy.buildAdvisor.b00464"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00465"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00466"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00467"), value: _content.ja("guide.legacy.buildAdvisor.b00468") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00469"), value: _content.ja("guide.legacy.buildAdvisor.b00470") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00471"), value: _content.ja("guide.legacy.buildAdvisor.b00472") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00473"), value: _content.ja("guide.legacy.buildAdvisor.b00474") }], targets: [{ key: "attack", label: _content.ja("guide.legacy.buildAdvisor.b00475"), unit: "", targets: { "厳選": 4300, "目標": 4000, "妥協": 3600 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00476"), unit: "", targets: { "厳選": 134, "目標": 120, "妥協": 110 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b00477"), dataAsOf: "2026-08-25", updatedAt: "2026-08-25", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b00478") },
  "クラーラ": { headline: _content.ja("guide.legacy.buildAdvisor.b00479"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00480"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00481"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00482"), value: _content.ja("guide.legacy.buildAdvisor.b00483") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00484"), value: _content.ja("guide.legacy.buildAdvisor.b00485") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00486"), value: _content.ja("guide.legacy.buildAdvisor.b00487") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00488"), value: _content.ja("guide.legacy.buildAdvisor.b00489") }], targets: [{ key: "critRate", label: _content.ja("guide.legacy.buildAdvisor.b00490"), unit: "%", targets: { "厳選": 85, "目標": 75, "妥協": 65 } }, { key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b00491"), unit: "%", targets: { "厳選": 190, "目標": 160, "妥協": 130 } }, { key: "attackPercent", label: _content.ja("guide.legacy.buildAdvisor.b00492"), unit: "%", targets: { "厳選": 100, "目標": 85, "妥協": 70 } }] },
  "サフェル": { headline: _content.ja("guide.legacy.buildAdvisor.b00493"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00494"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00495"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00496"), value: _content.ja("guide.legacy.buildAdvisor.b00497") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00498"), value: _content.ja("guide.legacy.buildAdvisor.b00499") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00500"), value: _content.ja("guide.legacy.buildAdvisor.b00501") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00502"), value: _content.ja("guide.legacy.buildAdvisor.b00503") }], targets: [{ key: "critRate", label: _content.ja("guide.legacy.buildAdvisor.b00504"), unit: "%", targets: { "厳選": 85, "目標": 75, "妥協": 65 } }, { key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b00505"), unit: "%", targets: { "厳選": 200, "目標": 170, "妥協": 140 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00506"), unit: "", targets: { "厳選": 160, "目標": 134, "妥協": 120 } }, { key: "attackPercent", label: _content.ja("guide.legacy.buildAdvisor.b00507"), unit: "%", targets: { "厳選": 75, "目標": 60, "妥協": 45 } }] },
  "マダム・ヘルタ": { headline: _content.ja("guide.legacy.buildAdvisor.b00508"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00509"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00510"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00511"), value: _content.ja("guide.legacy.buildAdvisor.b00512") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00513"), value: _content.ja("guide.legacy.buildAdvisor.b00514") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00515"), value: _content.ja("guide.legacy.buildAdvisor.b00516") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00517"), value: _content.ja("guide.legacy.buildAdvisor.b00518") }], targets: [{ key: "critRate", label: _content.ja("guide.legacy.buildAdvisor.b00519"), unit: "%", targets: { "厳選": 85, "目標": 75, "妥協": 65 } }, { key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b00520"), unit: "%", targets: { "厳選": 220, "目標": 180, "妥協": 150 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00521"), unit: "", targets: { "厳選": 143, "目標": 134, "妥協": 120 } }, { key: "attackPercent", label: _content.ja("guide.legacy.buildAdvisor.b00522"), unit: "%", targets: { "厳選": 80, "目標": 65, "妥協": 50 } }] },
});

Object.assign(GUIDE_OVERRIDES, {
  "アベンチュリン": { headline: _content.ja("guide.legacy.buildAdvisor.b00523"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00524"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00525"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00526"), value: _content.ja("guide.legacy.buildAdvisor.b00527") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00528"), value: _content.ja("guide.legacy.buildAdvisor.b00529") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00530"), value: _content.ja("guide.legacy.buildAdvisor.b00531") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00532"), value: _content.ja("guide.legacy.buildAdvisor.b00533") }], targets: [{ key: "defense", label: _content.ja("guide.legacy.buildAdvisor.b00534"), unit: "", targets: { "厳選": 4300, "目標": 4000, "妥協": 3700 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00535"), unit: "", targets: { "厳選": 143, "目標": 134, "妥協": 120 } }, { key: "effectRes", label: _content.ja("guide.legacy.buildAdvisor.b00536"), unit: "%", targets: { "厳選": 40, "目標": 30, "妥協": 20 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b00537"), dataAsOf: "2026-08-26", updatedAt: "2026-08-26", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b00538") },
  "トパーズ&カブ": { headline: _content.ja("guide.legacy.buildAdvisor.b00539"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00540"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00541"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00542"), value: _content.ja("guide.legacy.buildAdvisor.b00543") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00544"), value: _content.ja("guide.legacy.buildAdvisor.b00545") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00546"), value: _content.ja("guide.legacy.buildAdvisor.b00547") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00548"), value: _content.ja("guide.legacy.buildAdvisor.b00549") }], targets: [{ key: "critRate", label: _content.ja("guide.legacy.buildAdvisor.b00550"), unit: "%", targets: { "厳選": 90, "目標": 80, "妥協": 70 } }, { key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b00551"), unit: "%", targets: { "厳選": 170, "目標": 150, "妥協": 140 } }, { key: "attack", label: _content.ja("guide.legacy.buildAdvisor.b00552"), unit: "", targets: { "厳選": 2800, "目標": 2500, "妥協": 2100 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00553"), unit: "", targets: { "厳選": 143, "目標": 134, "妥協": 120 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b00554"), dataAsOf: "2026-08-26", updatedAt: "2026-08-26", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b00555") },
  "花火": { headline: _content.ja("guide.legacy.buildAdvisor.b00556"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00557"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00558"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00559"), value: _content.ja("guide.legacy.buildAdvisor.b00560") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00561"), value: _content.ja("guide.legacy.buildAdvisor.b00562") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00563"), value: _content.ja("guide.legacy.buildAdvisor.b00564") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00565"), value: _content.ja("guide.legacy.buildAdvisor.b00566") }], targets: [{ key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b00567"), unit: "%", targets: { "厳選": 230, "目標": 200, "妥協": 180 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00568"), unit: "", targets: { "厳選": 200, "目標": 184, "妥協": 168 } }, { key: "effectRes", label: _content.ja("guide.legacy.buildAdvisor.b00569"), unit: "%", targets: { "厳選": 40, "目標": 30, "妥協": 20 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b00570"), dataAsOf: "2026-08-26", updatedAt: "2026-08-26", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b00571") },
  "丹恒・飲月": { headline: _content.ja("guide.legacy.buildAdvisor.b00572"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00573"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00574"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00575"), value: _content.ja("guide.legacy.buildAdvisor.b00576") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00577"), value: _content.ja("guide.legacy.buildAdvisor.b00578") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00579"), value: _content.ja("guide.legacy.buildAdvisor.b00580") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00581"), value: _content.ja("guide.legacy.buildAdvisor.b00582") }], targets: [{ key: "critRate", label: _content.ja("guide.legacy.buildAdvisor.b00583"), unit: "%", targets: { "厳選": 85, "目標": 75, "妥協": 70 } }, { key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b00584"), unit: "%", targets: { "厳選": 165, "目標": 145, "妥協": 140 } }, { key: "attack", label: _content.ja("guide.legacy.buildAdvisor.b00585"), unit: "", targets: { "厳選": 2600, "目標": 2500, "妥協": 2200 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00586"), unit: "", targets: { "厳選": 134, "目標": 102, "妥協": 102 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b00587"), dataAsOf: "2026-08-26", updatedAt: "2026-08-26", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b00588") },
});

Object.assign(GUIDE_OVERRIDES, {
  "Dr.レイシオ": { headline: _content.ja("guide.legacy.buildAdvisor.b00589"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00590"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00591"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00592"), value: _content.ja("guide.legacy.buildAdvisor.b00593") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00594"), value: _content.ja("guide.legacy.buildAdvisor.b00595") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00596"), value: _content.ja("guide.legacy.buildAdvisor.b00597") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00598"), value: _content.ja("guide.legacy.buildAdvisor.b00599") }], targets: [{ key: "critRate", label: _content.ja("guide.legacy.buildAdvisor.b00600"), unit: "%", targets: { "厳選": 80, "目標": 70, "妥協": 60 } }, { key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b00601"), unit: "%", targets: { "厳選": 170, "目標": 150, "妥協": 140 } }, { key: "attack", label: _content.ja("guide.legacy.buildAdvisor.b00602"), unit: "", targets: { "厳選": 2900, "目標": 2600, "妥協": 2300 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00603"), unit: "", targets: { "厳選": 143, "目標": 134, "妥協": 120 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b00604"), dataAsOf: "2026-08-26", updatedAt: "2026-08-26", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b00605") },
  "カフカ": { headline: _content.ja("guide.legacy.buildAdvisor.b00606"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00607"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00608"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00609"), value: _content.ja("guide.legacy.buildAdvisor.b00610") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00611"), value: _content.ja("guide.legacy.buildAdvisor.b00612") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00613"), value: _content.ja("guide.legacy.buildAdvisor.b00614") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00615"), value: _content.ja("guide.legacy.buildAdvisor.b00616") }], targets: [{ key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00617"), unit: "", targets: { "厳選": 170, "目標": 160, "妥協": 156 } }, { key: "effectHitRate", label: _content.ja("guide.legacy.buildAdvisor.b00618"), unit: "%", targets: { "厳選": 90, "目標": 75, "妥協": 67 } }, { key: "attack", label: _content.ja("guide.legacy.buildAdvisor.b00619"), unit: "", targets: { "厳選": 3000, "目標": 2500, "妥協": 2300 } }, { key: "energyRecharge", label: _content.ja("guide.legacy.buildAdvisor.b00620"), unit: "%", targets: { "厳選": 119.4, "目標": 119.4, "妥協": 100 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b00621"), dataAsOf: "2026-08-26", updatedAt: "2026-08-26", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b00622") },
  "ブラックスワン": { headline: _content.ja("guide.legacy.buildAdvisor.b00623"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00624"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00625"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00626"), value: _content.ja("guide.legacy.buildAdvisor.b00627") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00628"), value: _content.ja("guide.legacy.buildAdvisor.b00629") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00630"), value: _content.ja("guide.legacy.buildAdvisor.b00631") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00632"), value: _content.ja("guide.legacy.buildAdvisor.b00633") }], targets: [{ key: "effectHitRate", label: _content.ja("guide.legacy.buildAdvisor.b00634"), unit: "%", targets: { "厳選": 130, "目標": 120, "妥協": 100 } }, { key: "attack", label: _content.ja("guide.legacy.buildAdvisor.b00635"), unit: "", targets: { "厳選": 3900, "目標": 3600, "妥協": 3200 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00636"), unit: "", targets: { "厳選": 160, "目標": 143, "妥協": 135 } }, { key: "hp", label: _content.ja("guide.legacy.buildAdvisor.b00637"), unit: "", targets: { "厳選": 3400, "目標": 3000, "妥協": 2800 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b00638"), dataAsOf: "2026-08-26", updatedAt: "2026-08-26", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b00639") },
  "鏡流": { headline: _content.ja("guide.legacy.buildAdvisor.b00640"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00641"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00642"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00643"), value: _content.ja("guide.legacy.buildAdvisor.b00644") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00645"), value: _content.ja("guide.legacy.buildAdvisor.b00646") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00647"), value: _content.ja("guide.legacy.buildAdvisor.b00648") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00649"), value: _content.ja("guide.legacy.buildAdvisor.b00650") }], targets: [{ key: "hp", label: _content.ja("guide.legacy.buildAdvisor.b00651"), unit: "", targets: { "厳選": 7000, "目標": 6000, "妥協": 5500 } }, { key: "critRate", label: _content.ja("guide.legacy.buildAdvisor.b00652"), unit: "%", targets: { "厳選": 50, "目標": 45, "妥協": 40 } }, { key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b00653"), unit: "%", targets: { "厳選": 180, "目標": 150, "妥協": 130 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00654"), unit: "", targets: { "厳選": 135, "目標": 96, "妥協": 96 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b00655"), dataAsOf: "2026-08-26", updatedAt: "2026-08-26", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b00656") },
});

Object.assign(GUIDE_OVERRIDES, {
  "ブローニャ": { headline: _content.ja("guide.legacy.buildAdvisor.b00657"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00658"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00659"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00660"), value: _content.ja("guide.legacy.buildAdvisor.b00661") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00662"), value: _content.ja("guide.legacy.buildAdvisor.b00663") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00664"), value: _content.ja("guide.legacy.buildAdvisor.b00665") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00666"), value: _content.ja("guide.legacy.buildAdvisor.b00667") }], targets: [{ key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b00668"), unit: "%", targets: { "厳選": 180, "目標": 150, "妥協": 120 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00669"), unit: "", targets: { "厳選": 160, "目標": 134, "妥協": 120 } }, { key: "effectRes", label: _content.ja("guide.legacy.buildAdvisor.b00670"), unit: "%", targets: { "厳選": 45, "目標": 30, "妥協": 20 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b00671"), dataAsOf: "2026-08-26", updatedAt: "2026-08-26", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b00672") },
  "銀狼": { headline: _content.ja("guide.legacy.buildAdvisor.b00673"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00674"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00675"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00676"), value: _content.ja("guide.legacy.buildAdvisor.b00677") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00678"), value: _content.ja("guide.legacy.buildAdvisor.b00679") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00680"), value: _content.ja("guide.legacy.buildAdvisor.b00681") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00682"), value: _content.ja("guide.legacy.buildAdvisor.b00683") }], targets: [{ key: "effectHitRate", label: _content.ja("guide.legacy.buildAdvisor.b00684"), unit: "%", targets: { "厳選": 96, "目標": 67, "妥協": 67 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00685"), unit: "", targets: { "厳選": 170, "目標": 160, "妥協": 145 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b00686"), dataAsOf: "2026-08-26", updatedAt: "2026-08-26", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b00687") },
  "符玄": { headline: _content.ja("guide.legacy.buildAdvisor.b00688"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00689"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00690"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00691"), value: _content.ja("guide.legacy.buildAdvisor.b00692") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00693"), value: _content.ja("guide.legacy.buildAdvisor.b00694") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00695"), value: _content.ja("guide.legacy.buildAdvisor.b00696") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00697"), value: _content.ja("guide.legacy.buildAdvisor.b00698") }], targets: [{ key: "hp", label: _content.ja("guide.legacy.buildAdvisor.b00699"), unit: "", targets: { "厳選": 8000, "目標": 7000, "妥協": 6500 } }, { key: "defense", label: _content.ja("guide.legacy.buildAdvisor.b00700"), unit: "", targets: { "厳選": 1600, "目標": 1500, "妥協": 1400 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00701"), unit: "", targets: { "厳選": 143, "目標": 134, "妥協": 120 } }, { key: "effectRes", label: _content.ja("guide.legacy.buildAdvisor.b00702"), unit: "%", targets: { "厳選": 40, "目標": 30, "妥協": 20 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b00703"), dataAsOf: "2026-08-26", updatedAt: "2026-08-26", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b00704") },
  "羅刹": { headline: _content.ja("guide.legacy.buildAdvisor.b00705"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00706"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00707"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00708"), value: _content.ja("guide.legacy.buildAdvisor.b00709") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00710"), value: _content.ja("guide.legacy.buildAdvisor.b00711") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00712"), value: _content.ja("guide.legacy.buildAdvisor.b00713") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00714"), value: _content.ja("guide.legacy.buildAdvisor.b00715") }], targets: [{ key: "attack", label: _content.ja("guide.legacy.buildAdvisor.b00716"), unit: "", targets: { "厳選": 2800, "目標": 2400, "妥協": 2000 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00717"), unit: "", targets: { "厳選": 143, "目標": 135, "妥協": 120 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b00718"), dataAsOf: "2026-08-26", updatedAt: "2026-08-26", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b00719") },
});

Object.assign(GUIDE_OVERRIDES, {
  "アーチャー": { headline: _content.ja("guide.legacy.buildAdvisor.b00720"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00721"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00722"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00723"), value: _content.ja("guide.legacy.buildAdvisor.b00724") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00725"), value: _content.ja("guide.legacy.buildAdvisor.b00726") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00727"), value: _content.ja("guide.legacy.buildAdvisor.b00728") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00729"), value: _content.ja("guide.legacy.buildAdvisor.b00730") }], targets: [{ key: "critRate", label: _content.ja("guide.legacy.buildAdvisor.b00731"), unit: "%", targets: { "厳選": 100, "目標": 100, "妥協": 90 } }, { key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b00732"), unit: "%", targets: { "厳選": 150, "目標": 120, "妥協": 100 } }, { key: "attack", label: _content.ja("guide.legacy.buildAdvisor.b00733"), unit: "", targets: { "厳選": 3000, "目標": 2600, "妥協": 2300 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b00734"), dataAsOf: "2026-08-26", updatedAt: "2026-08-26", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b00735") },
  "アーラン": { headline: _content.ja("guide.legacy.buildAdvisor.b00736"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00737"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00738"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00739"), value: _content.ja("guide.legacy.buildAdvisor.b00740") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00741"), value: _content.ja("guide.legacy.buildAdvisor.b00742") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00743"), value: _content.ja("guide.legacy.buildAdvisor.b00744") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00745"), value: _content.ja("guide.legacy.buildAdvisor.b00746") }], targets: [{ key: "critRate", label: _content.ja("guide.legacy.buildAdvisor.b00747"), unit: "%", targets: { "厳選": 70, "目標": 60, "妥協": 50 } }, { key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b00748"), unit: "%", targets: { "厳選": 140, "目標": 120, "妥協": 100 } }, { key: "attack", label: _content.ja("guide.legacy.buildAdvisor.b00749"), unit: "", targets: { "厳選": 2800, "目標": 2500, "妥協": 2400 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00750"), unit: "", targets: { "厳選": 143, "目標": 135, "妥協": 134 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b00751"), dataAsOf: "2026-08-26", updatedAt: "2026-08-26", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b00752") },
  "アスター": { headline: _content.ja("guide.legacy.buildAdvisor.b00753"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00754"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00755"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00756"), value: _content.ja("guide.legacy.buildAdvisor.b00757") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00758"), value: _content.ja("guide.legacy.buildAdvisor.b00759") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00760"), value: _content.ja("guide.legacy.buildAdvisor.b00761") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00762"), value: _content.ja("guide.legacy.buildAdvisor.b00763") }], targets: [{ key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00764"), unit: "", targets: { "厳選": 160, "目標": 134, "妥協": 120 } }, { key: "hp", label: _content.ja("guide.legacy.buildAdvisor.b00765"), unit: "", targets: { "厳選": 4500, "目標": 3800, "妥協": 3400 } }, { key: "defense", label: _content.ja("guide.legacy.buildAdvisor.b00766"), unit: "", targets: { "厳選": 1200, "目標": 1000, "妥協": 850 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b00767"), dataAsOf: "2026-08-26", updatedAt: "2026-08-26", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b00768") },
  "アルジェンティ": { headline: _content.ja("guide.legacy.buildAdvisor.b00769"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00770"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00771"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00772"), value: _content.ja("guide.legacy.buildAdvisor.b00773") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00774"), value: _content.ja("guide.legacy.buildAdvisor.b00775") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00776"), value: _content.ja("guide.legacy.buildAdvisor.b00777") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00778"), value: _content.ja("guide.legacy.buildAdvisor.b00779") }], targets: [{ key: "critRate", label: _content.ja("guide.legacy.buildAdvisor.b00780"), unit: "%", targets: { "厳選": 80, "目標": 60, "妥協": 50 } }, { key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b00781"), unit: "%", targets: { "厳選": 180, "目標": 150, "妥協": 130 } }, { key: "attack", label: _content.ja("guide.legacy.buildAdvisor.b00782"), unit: "", targets: { "厳選": 3000, "目標": 2500, "妥協": 2200 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00783"), unit: "", targets: { "厳選": 143, "目標": 134, "妥協": 110 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b00784"), dataAsOf: "2026-08-26", updatedAt: "2026-08-26", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b00785") },
});

Object.assign(GUIDE_OVERRIDES, {
  "ヴェルト": { headline: _content.ja("guide.legacy.buildAdvisor.b00786"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00787"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00788"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00789"), value: _content.ja("guide.legacy.buildAdvisor.b00790") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00791"), value: _content.ja("guide.legacy.buildAdvisor.b00792") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00793"), value: _content.ja("guide.legacy.buildAdvisor.b00794") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00795"), value: _content.ja("guide.legacy.buildAdvisor.b00796") }], targets: [{ key: "attack", label: _content.ja("guide.legacy.buildAdvisor.b00797"), unit: "", targets: { "厳選": 2800, "目標": 2500, "妥協": 2200 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00798"), unit: "", targets: { "厳選": 143, "目標": 135, "妥協": 120 } }, { key: "effectHitRate", label: _content.ja("guide.legacy.buildAdvisor.b00799"), unit: "%", targets: { "厳選": 100, "目標": 80, "妥協": 60 } }, { key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b00800"), unit: "%", targets: { "厳選": 150, "目標": 120, "妥協": 100 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b00801"), dataAsOf: "2026-08-26", updatedAt: "2026-08-26", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b00802") },
  "ギャラガー": { headline: _content.ja("guide.legacy.buildAdvisor.b00803"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00804"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00805"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00806"), value: _content.ja("guide.legacy.buildAdvisor.b00807") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00808"), value: _content.ja("guide.legacy.buildAdvisor.b00809") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00810"), value: _content.ja("guide.legacy.buildAdvisor.b00811") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00812"), value: _content.ja("guide.legacy.buildAdvisor.b00813") }], targets: [{ key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00814"), unit: "", targets: { "厳選": 160, "目標": 143, "妥協": 134 } }, { key: "breakEffect", label: _content.ja("guide.legacy.buildAdvisor.b00815"), unit: "%", targets: { "厳選": 150, "目標": 120, "妥協": 60 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b00816"), dataAsOf: "2026-08-26", updatedAt: "2026-08-26", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b00817") },
  "キュレネ": { headline: _content.ja("guide.legacy.buildAdvisor.b00818"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00819"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00820"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00821"), value: _content.ja("guide.legacy.buildAdvisor.b00822") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00823"), value: _content.ja("guide.legacy.buildAdvisor.b00824") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00825"), value: _content.ja("guide.legacy.buildAdvisor.b00826") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00827"), value: _content.ja("guide.legacy.buildAdvisor.b00828") }], targets: [{ key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00829"), unit: "", targets: { "厳選": 200, "目標": 180, "妥協": 160 } }, { key: "hp", label: _content.ja("guide.legacy.buildAdvisor.b00830"), unit: "", targets: { "厳選": 4500, "目標": 4000, "妥協": 3600 } }, { key: "critRate", label: _content.ja("guide.legacy.buildAdvisor.b00831"), unit: "%", targets: { "厳選": 60, "目標": 50, "妥協": 40 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b00832"), dataAsOf: "2026-08-26", updatedAt: "2026-08-26", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b00833") },
  "ギルガメッシュ": { headline: _content.ja("guide.legacy.buildAdvisor.b00834"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00835"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00836"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00837"), value: _content.ja("guide.legacy.buildAdvisor.b00838") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00839"), value: _content.ja("guide.legacy.buildAdvisor.b00840") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00841"), value: _content.ja("guide.legacy.buildAdvisor.b00842") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00843"), value: _content.ja("guide.legacy.buildAdvisor.b00844") }], targets: [{ key: "attack", label: _content.ja("guide.legacy.buildAdvisor.b00845"), unit: "", targets: { "厳選": 3000, "目標": 2800, "妥協": 2600 } }, { key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b00846"), unit: "%", targets: { "厳選": 150, "目標": 120, "妥協": 100 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b00847"), dataAsOf: "2026-08-26", updatedAt: "2026-08-26", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b00848") },
});

const DEFAULT_GUIDE: GuideDefinition = {
  headline: _content.ja("guide.legacy.buildAdvisor.b00849"),
  relicSet: _content.ja("guide.legacy.buildAdvisor.b00850"),
  planarSet: _content.ja("guide.legacy.buildAdvisor.b00851"),
  mainStats: [
    { slot: _content.ja("guide.legacy.buildAdvisor.b00852"), value: _content.ja("guide.legacy.buildAdvisor.b00853") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00854"), value: _content.ja("guide.legacy.buildAdvisor.b00855") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00856"), value: _content.ja("guide.legacy.buildAdvisor.b00857") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00858"), value: _content.ja("guide.legacy.buildAdvisor.b00859") },
  ],
  targets: DAMAGE_TARGETS,
};

function asRecord(value: unknown): RawRecord {
  return value && typeof value === "object" && !Array.isArray(value) ? value as RawRecord : {};
}

function asArray(value: unknown): unknown[] {
  return Array.isArray(value) ? value : [];
}

function text(value: unknown, fallback = ""): string {
  return typeof value === "string" ? value : typeof value === "number" ? String(value) : fallback;
}

function nullableNumber(value: unknown): number | null {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

function isPercentStat(stat: RawRecord): boolean {
  return stat.percent === true || text(stat.field).includes("ratio");
}

function statDisplay(stat: RawRecord): string {
  const shown = text(stat.display);
  if (shown) return shown;
  const value = nullableNumber(stat.value);
  if (value === null) return "—";
  const percent = isPercentStat(stat);
  return percent ? `${(value <= 1 ? value * 100 : value).toFixed(1)}%` : value.toFixed(0);
}

Object.assign(GUIDE_OVERRIDES, {
  "クラーラ": { headline: _content.ja("guide.legacy.buildAdvisor.b00860"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00861"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00862"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00863"), value: _content.ja("guide.legacy.buildAdvisor.b00864") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00865"), value: _content.ja("guide.legacy.buildAdvisor.b00866") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00867"), value: _content.ja("guide.legacy.buildAdvisor.b00868") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00869"), value: _content.ja("guide.legacy.buildAdvisor.b00870") }], targets: [{ key: "critRate", label: _content.ja("guide.legacy.buildAdvisor.b00871"), unit: "%", targets: { "厳選": 85, "目標": 75, "妥協": 65 } }, { key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b00872"), unit: "%", targets: { "厳選": 190, "目標": 160, "妥協": 130 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b00873"), dataAsOf: "2026-08-21", updatedAt: "2026-08-26", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b00874") },
  "ケリュドラ": { headline: _content.ja("guide.legacy.buildAdvisor.b00875"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00876"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00877"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00878"), value: _content.ja("guide.legacy.buildAdvisor.b00879") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00880"), value: _content.ja("guide.legacy.buildAdvisor.b00881") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00882"), value: _content.ja("guide.legacy.buildAdvisor.b00883") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00884"), value: _content.ja("guide.legacy.buildAdvisor.b00885") }], targets: [{ key: "attack", label: _content.ja("guide.legacy.buildAdvisor.b00886"), unit: "", targets: { "厳選": 4300, "目標": 4000, "妥協": 3600 } }, { key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b00887"), unit: "%", targets: { "厳選": 180, "目標": 160, "妥協": 140 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00888"), unit: "", targets: { "厳選": 160, "目標": 134, "妥協": 120 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b00889"), dataAsOf: "2026-08-26", updatedAt: "2026-08-26", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b00890") },
  "サフェル": { headline: _content.ja("guide.legacy.buildAdvisor.b00891"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00892"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00893"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00894"), value: _content.ja("guide.legacy.buildAdvisor.b00895") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00896"), value: _content.ja("guide.legacy.buildAdvisor.b00897") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00898"), value: _content.ja("guide.legacy.buildAdvisor.b00899") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00900"), value: _content.ja("guide.legacy.buildAdvisor.b00901") }], targets: [{ key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00902"), unit: "", targets: { "厳選": 180, "目標": 170, "妥協": 160 } }, { key: "effectHitRate", label: _content.ja("guide.legacy.buildAdvisor.b00903"), unit: "%", targets: { "厳選": 50, "目標": 39, "妥協": 30 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b00904"), dataAsOf: "2026-08-26", updatedAt: "2026-08-26", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b00905") },
  "サンポ": { headline: _content.ja("guide.legacy.buildAdvisor.b00906"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00907"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00908"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00909"), value: _content.ja("guide.legacy.buildAdvisor.b00910") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00911"), value: _content.ja("guide.legacy.buildAdvisor.b00912") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00913"), value: _content.ja("guide.legacy.buildAdvisor.b00914") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00915"), value: _content.ja("guide.legacy.buildAdvisor.b00916") }], targets: [{ key: "effectHitRate", label: _content.ja("guide.legacy.buildAdvisor.b00917"), unit: "%", targets: { "厳選": 80, "目標": 67, "妥協": 60 } }, { key: "attack", label: _content.ja("guide.legacy.buildAdvisor.b00918"), unit: "", targets: { "厳選": 3000, "目標": 2600, "妥協": 2300 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00919"), unit: "", targets: { "厳選": 160, "目標": 135, "妥協": 120 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b00920"), dataAsOf: "2026-08-14", updatedAt: "2026-08-26", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b00921") },
  "セイバー": { headline: _content.ja("guide.legacy.buildAdvisor.b00922"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00923"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00924"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00925"), value: _content.ja("guide.legacy.buildAdvisor.b00926") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00927"), value: _content.ja("guide.legacy.buildAdvisor.b00928") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00929"), value: _content.ja("guide.legacy.buildAdvisor.b00930") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00931"), value: _content.ja("guide.legacy.buildAdvisor.b00932") }], targets: [{ key: "critRate", label: _content.ja("guide.legacy.buildAdvisor.b00933"), unit: "%", targets: { "厳選": 80, "目標": 70, "妥協": 50 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00934"), unit: "", targets: { "厳選": 143, "目標": 134, "妥協": 120 } }, { key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b00935"), unit: "%", targets: { "厳選": 200, "目標": 170, "妥協": 140 } }, { key: "attack", label: _content.ja("guide.legacy.buildAdvisor.b00936"), unit: "", targets: { "厳選": 2700, "目標": 2400, "妥協": 2200 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b00937"), dataAsOf: "2026-08-26", updatedAt: "2026-08-26", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b00938") },
  "セイレンス": { headline: _content.ja("guide.legacy.buildAdvisor.b00939"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00940"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00941"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00942"), value: _content.ja("guide.legacy.buildAdvisor.b00943") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00944"), value: _content.ja("guide.legacy.buildAdvisor.b00945") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00946"), value: _content.ja("guide.legacy.buildAdvisor.b00947") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00948"), value: _content.ja("guide.legacy.buildAdvisor.b00949") }], targets: [{ key: "effectHitRate", label: _content.ja("guide.legacy.buildAdvisor.b00950"), unit: "%", targets: { "厳選": 140, "目標": 120, "妥協": 100 } }, { key: "attack", label: _content.ja("guide.legacy.buildAdvisor.b00951"), unit: "", targets: { "厳選": 3600, "目標": 3300, "妥協": 3000 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00952"), unit: "", targets: { "厳選": 160, "目標": 134, "妥協": 120 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b00953"), dataAsOf: "2026-08-26", updatedAt: "2026-08-26", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b00954") },
  // 第18バッチ（2026-09-11）: 第10バッチで PT・星魂だけ精査され個別ガイドが役割共通値のままだった2名。根拠は docs/batch-18-research-notes.md 区分1。
  "ジェイド": { headline: _content.ja("guide.legacy.buildAdvisor.b00955"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00956"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00957"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00958"), value: _content.ja("guide.legacy.buildAdvisor.b00959") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00960"), value: _content.ja("guide.legacy.buildAdvisor.b00961") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00962"), value: _content.ja("guide.legacy.buildAdvisor.b00963") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00964"), value: _content.ja("guide.legacy.buildAdvisor.b00965") }], targets: [{ key: "critRate", label: _content.ja("guide.legacy.buildAdvisor.b00966"), unit: "%", targets: { "厳選": 90, "目標": 85, "妥協": 85 } }, { key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b00967"), unit: "%", targets: { "厳選": 123, "目標": 111, "妥協": 111 } }, { key: "attack", label: _content.ja("guide.legacy.buildAdvisor.b00968"), unit: "", targets: { "厳選": 3190, "目標": 3090, "妥協": 3090 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b00969"), dataAsOf: "2026-08-26", updatedAt: "2026-09-11", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b00970") },
  "ジェパード": { headline: _content.ja("guide.legacy.buildAdvisor.b00971"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00972"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00973"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00974"), value: _content.ja("guide.legacy.buildAdvisor.b00975") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00976"), value: _content.ja("guide.legacy.buildAdvisor.b00977") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00978"), value: _content.ja("guide.legacy.buildAdvisor.b00979") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00980"), value: _content.ja("guide.legacy.buildAdvisor.b00981") }], targets: [{ key: "effectHitRate", label: _content.ja("guide.legacy.buildAdvisor.b00982"), unit: "%", targets: { "厳選": 50, "目標": 50, "妥協": 50 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b00983"), dataAsOf: "2026-08-21", updatedAt: "2026-09-11", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b00984") },
  // 第18バッチ（2026-09-11）でカタログへ追加した HSR 3名。根拠は docs/batch-18-research-notes.md 区分2。
  "千冶・刃": { headline: _content.ja("guide.legacy.buildAdvisor.b00985"), relicSet: _content.ja("guide.legacy.buildAdvisor.b00986"), planarSet: _content.ja("guide.legacy.buildAdvisor.b00987"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b00988"), value: _content.ja("guide.legacy.buildAdvisor.b00989") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00990"), value: _content.ja("guide.legacy.buildAdvisor.b00991") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00992"), value: _content.ja("guide.legacy.buildAdvisor.b00993") }, { slot: _content.ja("guide.legacy.buildAdvisor.b00994"), value: _content.ja("guide.legacy.buildAdvisor.b00995") }], targets: [{ key: "critRate", label: _content.ja("guide.legacy.buildAdvisor.b00996"), unit: "%", targets: { "厳選": 80, "目標": 80, "妥協": 80 } }, { key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b00997"), unit: "%", targets: { "厳選": 120, "目標": 96, "妥協": 96 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00998"), unit: "", targets: { "厳選": 141, "目標": 141, "妥協": 138 } }, { key: "hp", label: _content.ja("guide.legacy.buildAdvisor.b00999"), unit: "", targets: { "厳選": 7000, "目標": 6800, "妥協": 5000 } }, { key: "effectHitRate", label: _content.ja("guide.legacy.buildAdvisor.b01000"), unit: "%", targets: { "厳選": 67, "目標": 67, "妥協": 67 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b01001"), dataAsOf: "2026-09-11", updatedAt: "2026-09-11", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b01002") },
  "姫子・旅立ち": { headline: _content.ja("guide.legacy.buildAdvisor.b01003"), relicSet: _content.ja("guide.legacy.buildAdvisor.b01004"), planarSet: _content.ja("guide.legacy.buildAdvisor.b01005"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b01006"), value: _content.ja("guide.legacy.buildAdvisor.b01007") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01008"), value: _content.ja("guide.legacy.buildAdvisor.b01009") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01010"), value: _content.ja("guide.legacy.buildAdvisor.b01011") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01012"), value: _content.ja("guide.legacy.buildAdvisor.b01013") }], targets: [{ key: "critRate", label: _content.ja("guide.legacy.buildAdvisor.b01014"), unit: "%", targets: { "厳選": 100, "目標": 100, "妥協": 100 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b01015"), unit: "", targets: { "厳選": 134, "目標": 134, "妥協": 134 } }, { key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b01016"), unit: "%", targets: { "厳選": 90, "目標": 70, "妥協": 70 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b01017"), dataAsOf: "2026-09-11", updatedAt: "2026-09-11", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b01018") },
  "ロビン・夏空の歌": { headline: _content.ja("guide.legacy.buildAdvisor.b01019"), relicSet: _content.ja("guide.legacy.buildAdvisor.b01020"), planarSet: _content.ja("guide.legacy.buildAdvisor.b01021"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b01022"), value: _content.ja("guide.legacy.buildAdvisor.b01023") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01024"), value: _content.ja("guide.legacy.buildAdvisor.b01025") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01026"), value: _content.ja("guide.legacy.buildAdvisor.b01027") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01028"), value: _content.ja("guide.legacy.buildAdvisor.b01029") }], targets: [{ key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b01030"), unit: "", targets: { "厳選": 150, "目標": 142, "妥協": 142 } }, { key: "critRate", label: _content.ja("guide.legacy.buildAdvisor.b01031"), unit: "%", targets: { "厳選": 50, "目標": 50, "妥協": 50 } }, { key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b01032"), unit: "%", targets: { "厳選": 75, "目標": 60, "妥協": 60 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b01033"), dataAsOf: "2026-09-11", updatedAt: "2026-09-11", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b01034") },
  // 第20バッチ（2026-09-24）: Ver.4.5後半で実装。根拠は docs/batch-20-research-notes.md。
  "アベンチュリン・波と戯れる夏": { headline: _content.ja("guide.legacy.buildAdvisor.b01035"), relicSet: _content.ja("guide.legacy.buildAdvisor.b01036"), planarSet: _content.ja("guide.legacy.buildAdvisor.b01037"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b01038"), value: _content.ja("guide.legacy.buildAdvisor.b01039") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01040"), value: _content.ja("guide.legacy.buildAdvisor.b01041") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01042"), value: _content.ja("guide.legacy.buildAdvisor.b01043") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01044"), value: _content.ja("guide.legacy.buildAdvisor.b01045") }], targets: [{ key: "critRate", label: _content.ja("guide.legacy.buildAdvisor.b01046"), unit: "%", targets: { "厳選": 100, "目標": 100, "妥協": 100 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b01047"), unit: "", targets: { "厳選": 168, "目標": 160, "妥協": 154 } }, { key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b01048"), unit: "%", targets: { "厳選": 140, "目標": 130, "妥協": 110 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b01049"), dataAsOf: "2026-09-24", updatedAt: "2026-09-24", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b01050") },
  // 第21バッチ（2026-09-28）: Ver.4.6で実装。根拠は docs/batch-21-research-notes.md。
  "パール": { headline: _content.ja("guide.legacy.buildAdvisor.b01051"), relicSet: _content.ja("guide.legacy.buildAdvisor.b01052"), planarSet: _content.ja("guide.legacy.buildAdvisor.b01053"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b01054"), value: _content.ja("guide.legacy.buildAdvisor.b01055") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01056"), value: _content.ja("guide.legacy.buildAdvisor.b01057") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01058"), value: _content.ja("guide.legacy.buildAdvisor.b01059") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01060"), value: _content.ja("guide.legacy.buildAdvisor.b01061") }], targets: [{ key: "defense", label: _content.ja("guide.legacy.buildAdvisor.b01062"), unit: "", targets: { "厳選": 3600, "目標": 3600, "妥協": 2400 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b01063"), unit: "", targets: { "厳選": 174, "目標": 173, "妥協": 157 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b01064"), dataAsOf: "2026-09-28", updatedAt: "2026-09-28", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b01065") },
});

Object.assign(GUIDE_OVERRIDES, {
  "セーバル": { headline: _content.ja("guide.legacy.buildAdvisor.b01066"), relicSet: _content.ja("guide.legacy.buildAdvisor.b01067"), planarSet: _content.ja("guide.legacy.buildAdvisor.b01068"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b01069"), value: _content.ja("guide.legacy.buildAdvisor.b01070") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01071"), value: _content.ja("guide.legacy.buildAdvisor.b01072") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01073"), value: _content.ja("guide.legacy.buildAdvisor.b01074") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01075"), value: _content.ja("guide.legacy.buildAdvisor.b01076") }], targets: [{ key: "attack", label: _content.ja("guide.legacy.buildAdvisor.b01077"), unit: "", targets: { "厳選": 2600, "目標": 2400, "妥協": 2200 } }, { key: "critRate", label: _content.ja("guide.legacy.buildAdvisor.b01078"), unit: "%", targets: { "厳選": 75, "目標": 70, "妥協": 65 } }, { key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b01079"), unit: "%", targets: { "厳選": 150, "目標": 140, "妥協": 130 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b01080"), unit: "", targets: { "厳選": 143, "目標": 134, "妥協": 120 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b01081"), dataAsOf: "2026-08-27", updatedAt: "2026-08-27", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b01082") },
  "ゼーレ": { headline: _content.ja("guide.legacy.buildAdvisor.b01083"), relicSet: _content.ja("guide.legacy.buildAdvisor.b01084"), planarSet: _content.ja("guide.legacy.buildAdvisor.b01085"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b01086"), value: _content.ja("guide.legacy.buildAdvisor.b01087") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01088"), value: _content.ja("guide.legacy.buildAdvisor.b01089") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01090"), value: _content.ja("guide.legacy.buildAdvisor.b01091") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01092"), value: _content.ja("guide.legacy.buildAdvisor.b01093") }], targets: [{ key: "critRate", label: _content.ja("guide.legacy.buildAdvisor.b01094"), unit: "%", targets: { "厳選": 90, "目標": 80, "妥協": 70 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b01095"), unit: "", targets: { "厳選": 143, "目標": 132, "妥協": 120 } }, { key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b01096"), unit: "%", targets: { "厳選": 180, "目標": 160, "妥協": 140 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b01097"), dataAsOf: "2026-08-27", updatedAt: "2026-08-27", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b01098") },
  "ダリア": { headline: _content.ja("guide.legacy.buildAdvisor.b01099"), relicSet: _content.ja("guide.legacy.buildAdvisor.b01100"), planarSet: _content.ja("guide.legacy.buildAdvisor.b01101"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b01102"), value: _content.ja("guide.legacy.buildAdvisor.b01103") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01104"), value: _content.ja("guide.legacy.buildAdvisor.b01105") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01106"), value: _content.ja("guide.legacy.buildAdvisor.b01107") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01108"), value: _content.ja("guide.legacy.buildAdvisor.b01109") }], targets: [{ key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b01110"), unit: "", targets: { "厳選": 145, "目標": 134, "妥協": 120 } }, { key: "breakEffect", label: _content.ja("guide.legacy.buildAdvisor.b01111"), unit: "%", targets: { "厳選": 200, "目標": 150, "妥協": 120 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b01112"), dataAsOf: "2026-08-27", updatedAt: "2026-08-27", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b01113") },
  "トリビー": { headline: _content.ja("guide.legacy.buildAdvisor.b01114"), relicSet: _content.ja("guide.legacy.buildAdvisor.b01115"), planarSet: _content.ja("guide.legacy.buildAdvisor.b01116"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b01117"), value: _content.ja("guide.legacy.buildAdvisor.b01118") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01119"), value: _content.ja("guide.legacy.buildAdvisor.b01120") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01121"), value: _content.ja("guide.legacy.buildAdvisor.b01122") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01123"), value: _content.ja("guide.legacy.buildAdvisor.b01124") }], targets: [{ key: "critRate", label: _content.ja("guide.legacy.buildAdvisor.b01125"), unit: "%", targets: { "厳選": 75, "目標": 68, "妥協": 60 } }, { key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b01126"), unit: "%", targets: { "厳選": 180, "目標": 160, "妥協": 140 } }, { key: "hp", label: _content.ja("guide.legacy.buildAdvisor.b01127"), unit: "", targets: { "厳選": 5500, "目標": 5000, "妥協": 4500 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b01128"), unit: "", targets: { "厳選": 136, "目標": 95, "妥協": 95 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b01129"), dataAsOf: "2026-08-27", updatedAt: "2026-08-27", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b01130") },
  "ナターシャ": { headline: _content.ja("guide.legacy.buildAdvisor.b01131"), relicSet: _content.ja("guide.legacy.buildAdvisor.b01132"), planarSet: _content.ja("guide.legacy.buildAdvisor.b01133"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b01134"), value: _content.ja("guide.legacy.buildAdvisor.b01135") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01136"), value: _content.ja("guide.legacy.buildAdvisor.b01137") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01138"), value: _content.ja("guide.legacy.buildAdvisor.b01139") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01140"), value: _content.ja("guide.legacy.buildAdvisor.b01141") }], targets: [{ key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b01142"), unit: "", targets: { "厳選": 134, "目標": 120, "妥協": 110 } }, { key: "effectRes", label: _content.ja("guide.legacy.buildAdvisor.b01143"), unit: "%", targets: { "厳選": 40, "目標": 30, "妥協": 20 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b01144"), dataAsOf: "2026-08-27", updatedAt: "2026-08-27", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b01145") },
  "ヒアンシー": { headline: _content.ja("guide.legacy.buildAdvisor.b01146"), relicSet: _content.ja("guide.legacy.buildAdvisor.b01147"), planarSet: _content.ja("guide.legacy.buildAdvisor.b01148"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b01149"), value: _content.ja("guide.legacy.buildAdvisor.b01150") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01151"), value: _content.ja("guide.legacy.buildAdvisor.b01152") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01153"), value: _content.ja("guide.legacy.buildAdvisor.b01154") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01155"), value: _content.ja("guide.legacy.buildAdvisor.b01156") }], targets: [{ key: "hp", label: _content.ja("guide.legacy.buildAdvisor.b01157"), unit: "", targets: { "厳選": 5000, "目標": 4300, "妥協": 4000 } }, { key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b01158"), unit: "%", targets: { "厳選": 140, "目標": 120, "妥協": 100 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b01159"), unit: "", targets: { "厳選": 180, "目標": 160, "妥協": 134 } }, { key: "effectRes", label: _content.ja("guide.legacy.buildAdvisor.b01160"), unit: "%", targets: { "厳選": 40, "目標": 32, "妥協": 20 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b01161"), dataAsOf: "2026-08-27", updatedAt: "2026-08-27", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b01162") },
  "ファイノン": { headline: _content.ja("guide.legacy.buildAdvisor.b01163"), relicSet: _content.ja("guide.legacy.buildAdvisor.b01164"), planarSet: _content.ja("guide.legacy.buildAdvisor.b01165"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b01166"), value: _content.ja("guide.legacy.buildAdvisor.b01167") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01168"), value: _content.ja("guide.legacy.buildAdvisor.b01169") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01170"), value: _content.ja("guide.legacy.buildAdvisor.b01171") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01172"), value: _content.ja("guide.legacy.buildAdvisor.b01173") }], targets: [{ key: "attack", label: _content.ja("guide.legacy.buildAdvisor.b01174"), unit: "", targets: { "厳選": 2600, "目標": 2400, "妥協": 2200 } }, { key: "hp", label: _content.ja("guide.legacy.buildAdvisor.b01175"), unit: "", targets: { "厳選": 3600, "目標": 3200, "妥協": 3000 } }, { key: "defense", label: _content.ja("guide.legacy.buildAdvisor.b01176"), unit: "", targets: { "厳選": 1100, "目標": 1000, "妥協": 900 } }, { key: "critRate", label: _content.ja("guide.legacy.buildAdvisor.b01177"), unit: "%", targets: { "厳選": 100, "目標": 95, "妥協": 90 } }, { key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b01178"), unit: "%", targets: { "厳選": 180, "目標": 170, "妥協": 160 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b01179"), dataAsOf: "2026-08-27", updatedAt: "2026-08-27", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b01180") },
  "フォフォ": { headline: _content.ja("guide.legacy.buildAdvisor.b01181"), relicSet: _content.ja("guide.legacy.buildAdvisor.b01182"), planarSet: _content.ja("guide.legacy.buildAdvisor.b01183"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b01184"), value: _content.ja("guide.legacy.buildAdvisor.b01185") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01186"), value: _content.ja("guide.legacy.buildAdvisor.b01187") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01188"), value: _content.ja("guide.legacy.buildAdvisor.b01189") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01190"), value: _content.ja("guide.legacy.buildAdvisor.b01191") }], targets: [{ key: "hp", label: _content.ja("guide.legacy.buildAdvisor.b01192"), unit: "", targets: { "厳選": 7000, "目標": 6500, "妥協": 6000 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b01193"), unit: "", targets: { "厳選": 143, "目標": 134, "妥協": 120 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b01194"), dataAsOf: "2026-08-27", updatedAt: "2026-08-27", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b01195") },
});

Object.assign(GUIDE_OVERRIDES, {
  "フック": { headline: _content.ja("guide.legacy.buildAdvisor.b01196"), relicSet: _content.ja("guide.legacy.buildAdvisor.b01197"), planarSet: _content.ja("guide.legacy.buildAdvisor.b01198"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b01199"), value: _content.ja("guide.legacy.buildAdvisor.b01200") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01201"), value: _content.ja("guide.legacy.buildAdvisor.b01202") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01203"), value: _content.ja("guide.legacy.buildAdvisor.b01204") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01205"), value: _content.ja("guide.legacy.buildAdvisor.b01206") }], targets: [{ key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b01207"), unit: "", targets: { "厳選": 143, "目標": 135, "妥協": 120 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b01208"), dataAsOf: "2026-08-11", updatedAt: "2026-08-27", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b01209") },
  "ペラ": { headline: _content.ja("guide.legacy.buildAdvisor.b01210"), relicSet: _content.ja("guide.legacy.buildAdvisor.b01211"), planarSet: _content.ja("guide.legacy.buildAdvisor.b01212"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b01213"), value: _content.ja("guide.legacy.buildAdvisor.b01214") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01215"), value: _content.ja("guide.legacy.buildAdvisor.b01216") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01217"), value: _content.ja("guide.legacy.buildAdvisor.b01218") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01219"), value: _content.ja("guide.legacy.buildAdvisor.b01220") }], targets: [{ key: "effectHitRate", label: _content.ja("guide.legacy.buildAdvisor.b01221"), unit: "%", targets: { "厳選": 80, "目標": 67, "妥協": 60 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b01222"), unit: "", targets: { "厳選": 143, "目標": 134, "妥協": 120 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b01223"), dataAsOf: "2026-08-21", updatedAt: "2026-08-27", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b01224") },
  "ヘルタ": { headline: _content.ja("guide.legacy.buildAdvisor.b01225"), relicSet: _content.ja("guide.legacy.buildAdvisor.b01226"), planarSet: _content.ja("guide.legacy.buildAdvisor.b01227"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b01228"), value: _content.ja("guide.legacy.buildAdvisor.b01229") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01230"), value: _content.ja("guide.legacy.buildAdvisor.b01231") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01232"), value: _content.ja("guide.legacy.buildAdvisor.b01233") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01234"), value: _content.ja("guide.legacy.buildAdvisor.b01235") }], targets: [], targetContext: _content.ja("guide.legacy.buildAdvisor.b01236"), dataAsOf: "2026-08-11", updatedAt: "2026-08-27", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b01237") },
  "マダム・ヘルタ": { headline: _content.ja("guide.legacy.buildAdvisor.b01238"), relicSet: _content.ja("guide.legacy.buildAdvisor.b01239"), planarSet: _content.ja("guide.legacy.buildAdvisor.b01240"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b01241"), value: _content.ja("guide.legacy.buildAdvisor.b01242") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01243"), value: _content.ja("guide.legacy.buildAdvisor.b01244") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01245"), value: _content.ja("guide.legacy.buildAdvisor.b01246") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01247"), value: _content.ja("guide.legacy.buildAdvisor.b01248") }], targets: [{ key: "critRate", label: _content.ja("guide.legacy.buildAdvisor.b01249"), unit: "%", targets: { "厳選": 100, "目標": 100, "妥協": 88 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b01250"), unit: "", targets: { "厳選": 143, "目標": 134, "妥協": 120 } }, { key: "attack", label: _content.ja("guide.legacy.buildAdvisor.b01251"), unit: "", targets: { "厳選": 3200, "目標": 2800, "妥協": 2600 } }, { key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b01252"), unit: "%", targets: { "厳選": 160, "目標": 120, "妥協": 100 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b01253"), dataAsOf: "2026-08-25", updatedAt: "2026-08-27", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b01254") },
  "ミーシャ": { headline: _content.ja("guide.legacy.buildAdvisor.b01255"), relicSet: _content.ja("guide.legacy.buildAdvisor.b01256"), planarSet: _content.ja("guide.legacy.buildAdvisor.b01257"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b01258"), value: _content.ja("guide.legacy.buildAdvisor.b01259") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01260"), value: _content.ja("guide.legacy.buildAdvisor.b01261") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01262"), value: _content.ja("guide.legacy.buildAdvisor.b01263") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01264"), value: _content.ja("guide.legacy.buildAdvisor.b01265") }], targets: [], targetContext: _content.ja("guide.legacy.buildAdvisor.b01266"), dataAsOf: "2026-08-21", updatedAt: "2026-08-27", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b01267") },
  "モーディス": { headline: _content.ja("guide.legacy.buildAdvisor.b01268"), relicSet: _content.ja("guide.legacy.buildAdvisor.b01269"), planarSet: _content.ja("guide.legacy.buildAdvisor.b01270"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b01271"), value: _content.ja("guide.legacy.buildAdvisor.b01272") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01273"), value: _content.ja("guide.legacy.buildAdvisor.b01274") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01275"), value: _content.ja("guide.legacy.buildAdvisor.b01276") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01277"), value: _content.ja("guide.legacy.buildAdvisor.b01278") }], targets: [], targetContext: _content.ja("guide.legacy.buildAdvisor.b01279"), dataAsOf: "2026-08-11", updatedAt: "2026-08-27", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b01280") },
  "モゼ": { headline: _content.ja("guide.legacy.buildAdvisor.b01281"), relicSet: _content.ja("guide.legacy.buildAdvisor.b01282"), planarSet: _content.ja("guide.legacy.buildAdvisor.b01283"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b01284"), value: _content.ja("guide.legacy.buildAdvisor.b01285") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01286"), value: _content.ja("guide.legacy.buildAdvisor.b01287") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01288"), value: _content.ja("guide.legacy.buildAdvisor.b01289") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01290"), value: _content.ja("guide.legacy.buildAdvisor.b01291") }], targets: [], targetContext: _content.ja("guide.legacy.buildAdvisor.b01292"), dataAsOf: "2026-08-21", updatedAt: "2026-08-27", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b01293") },
  "リンクス": { headline: _content.ja("guide.legacy.buildAdvisor.b01294"), relicSet: _content.ja("guide.legacy.buildAdvisor.b01295"), planarSet: _content.ja("guide.legacy.buildAdvisor.b01296"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b01297"), value: _content.ja("guide.legacy.buildAdvisor.b01298") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01299"), value: _content.ja("guide.legacy.buildAdvisor.b01300") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01301"), value: _content.ja("guide.legacy.buildAdvisor.b01302") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01303"), value: _content.ja("guide.legacy.buildAdvisor.b01304") }], targets: [], targetContext: _content.ja("guide.legacy.buildAdvisor.b01305"), dataAsOf: "2026-08-11", updatedAt: "2026-08-27", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b01306") },
});

Object.assign(GUIDE_OVERRIDES, {
  "ルカ": { headline: _content.ja("guide.legacy.buildAdvisor.b01307"), relicSet: _content.ja("guide.legacy.buildAdvisor.b01308"), planarSet: _content.ja("guide.legacy.buildAdvisor.b01309"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b01310"), value: _content.ja("guide.legacy.buildAdvisor.b01311") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01312"), value: _content.ja("guide.legacy.buildAdvisor.b01313") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01314"), value: _content.ja("guide.legacy.buildAdvisor.b01315") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01316"), value: _content.ja("guide.legacy.buildAdvisor.b01317") }], targets: [{ key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b01318"), unit: "", targets: { "厳選": 155, "目標": 148, "妥協": 148 } }, { key: "attack", label: _content.ja("guide.legacy.buildAdvisor.b01319"), unit: "", targets: { "厳選": 2900, "目標": 2770, "妥協": 2770 } }, { key: "effectHitRate", label: _content.ja("guide.legacy.buildAdvisor.b01320"), unit: "%", targets: { "厳選": 75, "目標": 75, "妥協": 75 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b01321"), dataAsOf: "2026-08-26", updatedAt: "2026-08-27", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b01322") },
  "雲璃": { headline: _content.ja("guide.legacy.buildAdvisor.b01323"), relicSet: _content.ja("guide.legacy.buildAdvisor.b01324"), planarSet: _content.ja("guide.legacy.buildAdvisor.b01325"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b01326"), value: _content.ja("guide.legacy.buildAdvisor.b01327") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01328"), value: _content.ja("guide.legacy.buildAdvisor.b01329") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01330"), value: _content.ja("guide.legacy.buildAdvisor.b01331") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01332"), value: _content.ja("guide.legacy.buildAdvisor.b01333") }], targets: [{ key: "critRate", label: _content.ja("guide.legacy.buildAdvisor.b01334"), unit: "%", targets: { "厳選": 80, "目標": 80, "妥協": 80 } }, { key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b01335"), unit: "%", targets: { "厳選": 180, "目標": 156, "妥協": 156 } }, { key: "attack", label: _content.ja("guide.legacy.buildAdvisor.b01336"), unit: "", targets: { "厳選": 3500, "目標": 3400, "妥協": 3400 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b01337"), dataAsOf: "2026-08-26", updatedAt: "2026-08-27", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b01338") },
  "遠坂凛": { headline: _content.ja("guide.legacy.buildAdvisor.b01339"), relicSet: _content.ja("guide.legacy.buildAdvisor.b01340"), planarSet: _content.ja("guide.legacy.buildAdvisor.b01341"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b01342"), value: _content.ja("guide.legacy.buildAdvisor.b01343") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01344"), value: _content.ja("guide.legacy.buildAdvisor.b01345") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01346"), value: _content.ja("guide.legacy.buildAdvisor.b01347") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01348"), value: _content.ja("guide.legacy.buildAdvisor.b01349") }], targets: [{ key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b01350"), unit: "", targets: { "厳選": 140, "目標": 140, "妥協": 140 } }, { key: "critRate", label: _content.ja("guide.legacy.buildAdvisor.b01351"), unit: "%", targets: { "厳選": 100, "目標": 90, "妥協": 90 } }, { key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b01352"), unit: "%", targets: { "厳選": 150, "目標": 150, "妥協": 150 } }, { key: "attack", label: _content.ja("guide.legacy.buildAdvisor.b01353"), unit: "", targets: { "厳選": 2000, "目標": 2000, "妥協": 2000 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b01354"), dataAsOf: "2026-08-27", updatedAt: "2026-08-27", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b01355") },
  "火花": { headline: _content.ja("guide.legacy.buildAdvisor.b01356"), relicSet: _content.ja("guide.legacy.buildAdvisor.b01357"), planarSet: _content.ja("guide.legacy.buildAdvisor.b01358"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b01359"), value: _content.ja("guide.legacy.buildAdvisor.b01360") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01361"), value: _content.ja("guide.legacy.buildAdvisor.b01362") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01363"), value: _content.ja("guide.legacy.buildAdvisor.b01364") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01365"), value: _content.ja("guide.legacy.buildAdvisor.b01366") }], targets: [{ key: "critRate", label: _content.ja("guide.legacy.buildAdvisor.b01367"), unit: "%", targets: { "厳選": 100, "目標": 100, "妥協": 100 } }, { key: "attack", label: _content.ja("guide.legacy.buildAdvisor.b01368"), unit: "", targets: { "厳選": 3600, "目標": 3600, "妥協": 3600 } }, { key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b01369"), unit: "%", targets: { "厳選": 180, "目標": 180, "妥協": 180 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b01370"), dataAsOf: "2026-08-27", updatedAt: "2026-08-27", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b01371") },
  "寒鴉": { headline: _content.ja("guide.legacy.buildAdvisor.b01372"), relicSet: _content.ja("guide.legacy.buildAdvisor.b01373"), planarSet: _content.ja("guide.legacy.buildAdvisor.b01374"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b01375"), value: _content.ja("guide.legacy.buildAdvisor.b01376") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01377"), value: _content.ja("guide.legacy.buildAdvisor.b01378") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01379"), value: _content.ja("guide.legacy.buildAdvisor.b01380") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01381"), value: _content.ja("guide.legacy.buildAdvisor.b01382") }], targets: [{ key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b01383"), unit: "", targets: { "厳選": 160, "目標": 160, "妥協": 160 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b01384"), dataAsOf: "2026-08-26", updatedAt: "2026-08-27", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b01385") },
  "帰忘の流離人": { headline: _content.ja("guide.legacy.buildAdvisor.b01386"), relicSet: _content.ja("guide.legacy.buildAdvisor.b01387"), planarSet: _content.ja("guide.legacy.buildAdvisor.b01388"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b01389"), value: _content.ja("guide.legacy.buildAdvisor.b01390") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01391"), value: _content.ja("guide.legacy.buildAdvisor.b01392") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01393"), value: _content.ja("guide.legacy.buildAdvisor.b01394") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01395"), value: _content.ja("guide.legacy.buildAdvisor.b01396") }], targets: [{ key: "effectHitRate", label: _content.ja("guide.legacy.buildAdvisor.b01397"), unit: "%", targets: { "厳選": 67, "目標": 67, "妥協": 67 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b01398"), unit: "", targets: { "厳選": 145, "目標": 145, "妥協": 145 } }, { key: "breakEffect", label: _content.ja("guide.legacy.buildAdvisor.b01399"), unit: "%", targets: { "厳選": 150, "目標": 150, "妥協": 150 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b01400"), dataAsOf: "2026-08-26", updatedAt: "2026-08-27", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b01401") },
  "景元": { headline: _content.ja("guide.legacy.buildAdvisor.b01402"), relicSet: _content.ja("guide.legacy.buildAdvisor.b01403"), planarSet: _content.ja("guide.legacy.buildAdvisor.b01404"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b01405"), value: _content.ja("guide.legacy.buildAdvisor.b01406") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01407"), value: _content.ja("guide.legacy.buildAdvisor.b01408") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01409"), value: _content.ja("guide.legacy.buildAdvisor.b01410") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01411"), value: _content.ja("guide.legacy.buildAdvisor.b01412") }], targets: [{ key: "critRate", label: _content.ja("guide.legacy.buildAdvisor.b01413"), unit: "%", targets: { "厳選": 70, "目標": 70, "妥協": 70 } }, { key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b01414"), unit: "%", targets: { "厳選": 140, "目標": 140, "妥協": 140 } }, { key: "attack", label: _content.ja("guide.legacy.buildAdvisor.b01415"), unit: "", targets: { "厳選": 2500, "目標": 2500, "妥協": 2500 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b01416"), unit: "", targets: { "厳選": 135, "目標": 135, "妥協": 135 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b01417"), dataAsOf: "2026-08-26", updatedAt: "2026-08-27", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b01418") },
  "桂乃芬": { headline: _content.ja("guide.legacy.buildAdvisor.b01419"), relicSet: _content.ja("guide.legacy.buildAdvisor.b01420"), planarSet: _content.ja("guide.legacy.buildAdvisor.b01421"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b01422"), value: _content.ja("guide.legacy.buildAdvisor.b01423") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01424"), value: _content.ja("guide.legacy.buildAdvisor.b01425") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01426"), value: _content.ja("guide.legacy.buildAdvisor.b01427") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01428"), value: _content.ja("guide.legacy.buildAdvisor.b01429") }], targets: [{ key: "effectHitRate", label: _content.ja("guide.legacy.buildAdvisor.b01430"), unit: "%", targets: { "厳選": 67, "目標": 67, "妥協": 67 } }, { key: "attack", label: _content.ja("guide.legacy.buildAdvisor.b01431"), unit: "", targets: { "厳選": 2400, "目標": 2400, "妥協": 2400 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b01432"), unit: "", targets: { "厳選": 135, "目標": 135, "妥協": 135 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b01433"), dataAsOf: "2026-08-26", updatedAt: "2026-08-27", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b01434") },
});

Object.assign(GUIDE_OVERRIDES, {
  "刃": { headline: _content.ja("guide.legacy.buildAdvisor.b01435"), relicSet: _content.ja("guide.legacy.buildAdvisor.b01436"), planarSet: _content.ja("guide.legacy.buildAdvisor.b01437"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b01438"), value: _content.ja("guide.legacy.buildAdvisor.b01439") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01440"), value: _content.ja("guide.legacy.buildAdvisor.b01441") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01442"), value: _content.ja("guide.legacy.buildAdvisor.b01443") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01444"), value: _content.ja("guide.legacy.buildAdvisor.b01445") }], targets: [{ key: "critRate", label: _content.ja("guide.legacy.buildAdvisor.b01446"), unit: "%", targets: { "厳選": 84, "目標": 64, "妥協": 64 } }, { key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b01447"), unit: "%", targets: { "厳選": 180, "目標": 160, "妥協": 160 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b01448"), unit: "", targets: { "厳選": 135, "目標": 135, "妥協": 135 } }, { key: "hp", label: _content.ja("guide.legacy.buildAdvisor.b01449"), unit: "", targets: { "厳選": 7000, "目標": 6500, "妥協": 6500 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b01450"), dataAsOf: "2026-08-26", updatedAt: "2026-08-27", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b01451") },
  "青雀": { headline: _content.ja("guide.legacy.buildAdvisor.b01452"), relicSet: _content.ja("guide.legacy.buildAdvisor.b01453"), planarSet: _content.ja("guide.legacy.buildAdvisor.b01454"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b01455"), value: _content.ja("guide.legacy.buildAdvisor.b01456") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01457"), value: _content.ja("guide.legacy.buildAdvisor.b01458") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01459"), value: _content.ja("guide.legacy.buildAdvisor.b01460") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01461"), value: _content.ja("guide.legacy.buildAdvisor.b01462") }], targets: [{ key: "critRate", label: _content.ja("guide.legacy.buildAdvisor.b01463"), unit: "%", targets: { "厳選": 70, "目標": 70, "妥協": 70 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b01464"), dataAsOf: "2026-08-11", updatedAt: "2026-08-27", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b01465") },
  "雪衣": { headline: _content.ja("guide.legacy.buildAdvisor.b01466"), relicSet: _content.ja("guide.legacy.buildAdvisor.b01467"), planarSet: _content.ja("guide.legacy.buildAdvisor.b01468"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b01469"), value: _content.ja("guide.legacy.buildAdvisor.b01470") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01471"), value: _content.ja("guide.legacy.buildAdvisor.b01472") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01473"), value: _content.ja("guide.legacy.buildAdvisor.b01474") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01475"), value: _content.ja("guide.legacy.buildAdvisor.b01476") }], targets: [{ key: "critRate", label: _content.ja("guide.legacy.buildAdvisor.b01477"), unit: "%", targets: { "厳選": 70, "目標": 50, "妥協": 50 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b01478"), unit: "", targets: { "厳選": 145, "目標": 145, "妥協": 145 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b01479"), dataAsOf: "2026-08-11", updatedAt: "2026-08-27", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b01480") },
  "素裳": { headline: _content.ja("guide.legacy.buildAdvisor.b01481"), relicSet: _content.ja("guide.legacy.buildAdvisor.b01482"), planarSet: _content.ja("guide.legacy.buildAdvisor.b01483"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b01484"), value: _content.ja("guide.legacy.buildAdvisor.b01485") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01486"), value: _content.ja("guide.legacy.buildAdvisor.b01487") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01488"), value: _content.ja("guide.legacy.buildAdvisor.b01489") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01490"), value: _content.ja("guide.legacy.buildAdvisor.b01491") }], targets: [], targetContext: _content.ja("guide.legacy.buildAdvisor.b01492"), dataAsOf: "2026-08-11", updatedAt: "2026-08-27", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b01493") },
  "丹恒": { headline: _content.ja("guide.legacy.buildAdvisor.b01494"), relicSet: _content.ja("guide.legacy.buildAdvisor.b01495"), planarSet: _content.ja("guide.legacy.buildAdvisor.b01496"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b01497"), value: _content.ja("guide.legacy.buildAdvisor.b01498") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01499"), value: _content.ja("guide.legacy.buildAdvisor.b01500") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01501"), value: _content.ja("guide.legacy.buildAdvisor.b01502") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01503"), value: _content.ja("guide.legacy.buildAdvisor.b01504") }], targets: [], targetContext: _content.ja("guide.legacy.buildAdvisor.b01505"), dataAsOf: "2026-08-11", updatedAt: "2026-08-27", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b01506") },
  "丹恒・騰荒": { headline: _content.ja("guide.legacy.buildAdvisor.b01507"), relicSet: _content.ja("guide.legacy.buildAdvisor.b01508"), planarSet: _content.ja("guide.legacy.buildAdvisor.b01509"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b01510"), value: _content.ja("guide.legacy.buildAdvisor.b01511") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01512"), value: _content.ja("guide.legacy.buildAdvisor.b01513") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01514"), value: _content.ja("guide.legacy.buildAdvisor.b01515") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01516"), value: _content.ja("guide.legacy.buildAdvisor.b01517") }], targets: [{ key: "attack", label: _content.ja("guide.legacy.buildAdvisor.b01518"), unit: "", targets: { "厳選": 3500, "目標": 3000, "妥協": 3000 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b01519"), unit: "", targets: { "厳選": 140, "目標": 136, "妥協": 110 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b01520"), dataAsOf: "2026-08-27", updatedAt: "2026-08-27", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b01521") },
});

Object.assign(GUIDE_OVERRIDES, {
  "不死途": { headline: _content.ja("guide.legacy.buildAdvisor.b01522"), relicSet: _content.ja("guide.legacy.buildAdvisor.b01523"), planarSet: _content.ja("guide.legacy.buildAdvisor.b01524"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b01525"), value: _content.ja("guide.legacy.buildAdvisor.b01526") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01527"), value: _content.ja("guide.legacy.buildAdvisor.b01528") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01529"), value: _content.ja("guide.legacy.buildAdvisor.b01530") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01531"), value: _content.ja("guide.legacy.buildAdvisor.b01532") }], targets: [{ key: "critRate", label: _content.ja("guide.legacy.buildAdvisor.b01533"), unit: "%", targets: { "厳選": 100, "目標": 100, "妥協": 100 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b01534"), dataAsOf: "2026-09-07", updatedAt: "2026-09-07", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b01535") },
  "乱破": { headline: _content.ja("guide.legacy.buildAdvisor.b01536"), relicSet: _content.ja("guide.legacy.buildAdvisor.b01537"), planarSet: _content.ja("guide.legacy.buildAdvisor.b01538"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b01539"), value: _content.ja("guide.legacy.buildAdvisor.b01540") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01541"), value: _content.ja("guide.legacy.buildAdvisor.b01542") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01543"), value: _content.ja("guide.legacy.buildAdvisor.b01544") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01545"), value: _content.ja("guide.legacy.buildAdvisor.b01546") }], targets: [{ key: "breakEffect", label: _content.ja("guide.legacy.buildAdvisor.b01547"), unit: "%", targets: { "厳選": 250, "目標": 250, "妥協": 250 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b01548"), unit: "", targets: { "厳選": 160, "目標": 160, "妥協": 160 } }, { key: "attack", label: _content.ja("guide.legacy.buildAdvisor.b01549"), unit: "", targets: { "厳選": 3400, "目標": 3400, "妥協": 3400 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b01550"), dataAsOf: "2026-08-26", updatedAt: "2026-09-07", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b01551") },
  "椒丘": { headline: _content.ja("guide.legacy.buildAdvisor.b01552"), relicSet: _content.ja("guide.legacy.buildAdvisor.b01553"), planarSet: _content.ja("guide.legacy.buildAdvisor.b01554"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b01555"), value: _content.ja("guide.legacy.buildAdvisor.b01556") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01557"), value: _content.ja("guide.legacy.buildAdvisor.b01558") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01559"), value: _content.ja("guide.legacy.buildAdvisor.b01560") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01561"), value: _content.ja("guide.legacy.buildAdvisor.b01562") }], targets: [{ key: "effectHitRate", label: _content.ja("guide.legacy.buildAdvisor.b01563"), unit: "%", targets: { "厳選": 140, "目標": 140, "妥協": 140 } }, { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b01564"), unit: "", targets: { "厳選": 160, "目標": 160, "妥協": 160 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b01565"), dataAsOf: "2026-08-21", updatedAt: "2026-09-07", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b01566") },
  "爻光": { headline: _content.ja("guide.legacy.buildAdvisor.b01567"), relicSet: _content.ja("guide.legacy.buildAdvisor.b01568"), planarSet: _content.ja("guide.legacy.buildAdvisor.b01569"), mainStats: [{ slot: _content.ja("guide.legacy.buildAdvisor.b01570"), value: _content.ja("guide.legacy.buildAdvisor.b01571") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01572"), value: _content.ja("guide.legacy.buildAdvisor.b01573") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01574"), value: _content.ja("guide.legacy.buildAdvisor.b01575") }, { slot: _content.ja("guide.legacy.buildAdvisor.b01576"), value: _content.ja("guide.legacy.buildAdvisor.b01577") }], targets: [{ key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b01578"), unit: "", targets: { "厳選": 160, "目標": 160, "妥協": 160 } }, { key: "critRate", label: _content.ja("guide.legacy.buildAdvisor.b01579"), unit: "%", targets: { "厳選": 72, "目標": 62, "妥協": 52 } }, { key: "critDmg", label: _content.ja("guide.legacy.buildAdvisor.b01580"), unit: "%", targets: { "厳選": 163, "目標": 145, "妥協": 140 } }], targetContext: _content.ja("guide.legacy.buildAdvisor.b01581"), dataAsOf: "2026-09-07", updatedAt: "2026-09-07", sourceLabel: _content.ja("guide.legacy.buildAdvisor.b01582") },
});

/**
 * 同名で複数の実装がある HSR キャラクターの個別ガイド。名前キーの GUIDE_OVERRIDES より優先する。
 * 例: 三月なのかは存護（1001）と巡狩（1224）が同じ providerName で公開されるため、名前キーでは区別できない。
 */
const GUIDE_OVERRIDES_BY_SOURCE_ID: Record<string, GuideDefinition> = {
  "1001": {"relicSet":_content.ja("guide.legacy.buildAdvisor.b01583"),"planarSet":_content.ja("guide.legacy.buildAdvisor.b01584"),"mainStats":[{"slot":_content.ja("guide.legacy.buildAdvisor.b01585"),"value":_content.ja("guide.legacy.buildAdvisor.b01586")},{"slot":_content.ja("guide.legacy.buildAdvisor.b01587"),"value":_content.ja("guide.legacy.buildAdvisor.b01588")},{"slot":_content.ja("guide.legacy.buildAdvisor.b01589"),"value":_content.ja("guide.legacy.buildAdvisor.b01590")},{"slot":_content.ja("guide.legacy.buildAdvisor.b01591"),"value":_content.ja("guide.legacy.buildAdvisor.b01592")}],"targets":[{"key":"speed","label":_content.ja("guide.legacy.buildAdvisor.b01593"),"unit":"","targets":{"厳選":150,"目標":134,"妥協":120}},{"key":"defPercent","label":_content.ja("guide.legacy.buildAdvisor.b01594"),"unit":"%","targets":{"厳選":90,"目標":70,"妥協":50}},{"key":"effectRes","label":_content.ja("guide.legacy.buildAdvisor.b01595"),"unit":"%","targets":{"厳選":45,"目標":30,"妥協":20}},{"key":"effectHitRate","label":_content.ja("guide.legacy.buildAdvisor.b01596"),"unit":"%","targets":{"厳選":60,"目標":50,"妥協":40}}],"profileId":"curated:batch15:march-preservation","headline":_content.ja("guide.legacy.buildAdvisor.b01597"),"targetContext":_content.ja("guide.legacy.buildAdvisor.b01598"),"dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.ja("guide.legacy.buildAdvisor.b01599")},
};

export function guideFor(name: string, path: string, identity?: Pick<CharacterIdentity, "variantOf" | "sourceId">): GuideDefinition {
  const bySourceId = identity?.sourceId ? GUIDE_OVERRIDES_BY_SOURCE_ID[identity.sourceId] : undefined;
  const individualGuide = bySourceId ?? (identity?.variantOf ? undefined : GUIDE_OVERRIDES[name]);
  if (individualGuide) {
    const sourceDataAsOf = ({ "セーバル": "2026-08-21", "ゼーレ": "2026-08-21", "ナターシャ": "2026-08-21", "ファイノン": "2026-05-31", "フォフォ": "2026-08-19" } as Record<string, string>)[name];
    return withGuideMetadata("hsr", { ...individualGuide, dataAsOf: sourceDataAsOf ?? individualGuide.dataAsOf, targetContext: individualGuide.targetContext ?? _guideTemplates.ja("guide.legacy.buildAdvisor_templates.b00005",{v0:name}) }, name);
  }
  return withGuideMetadata("hsr", generatedHsrGuide(name, path), name);
}

/**
 * MiHoMo `sr_info_parsed` は戦闘外の最終値を `statistics`（= `attributes` + `additions`）で返す。
 * 初期実装は加算分だけの `properties` を表示・比較に使っていたため、速度・会心・攻撃力が実際の値とずれていた。
 * `statistics` が無い応答では `attributes` と `additions` を field ごとに合算して同じ最終値を作る。
 */
function finalStatsOf(source: RawRecord): RawRecord[] | null {
  const statistics = asArray(source.statistics).map(asRecord).filter((stat) => text(stat.field) || text(stat.name));
  if (statistics.length) return statistics;
  const attributes = asArray(source.attributes).map(asRecord);
  const additions = asArray(source.additions).map(asRecord);
  if (!attributes.length && !additions.length) return null;
  const summed = new Map<string, RawRecord>();
  for (const stat of [...attributes, ...additions]) {
    const key = text(stat.field) || text(stat.name);
    if (!key) continue;
    const value = nullableNumber(stat.value) ?? 0;
    const previous = summed.get(key);
    // display は合算後に一致しなくなるため持ち越さない（statDisplay が value から組み立てる）。
    if (previous) previous.value = (nullableNumber(previous.value) ?? 0) + value;
    else summed.set(key, { field: text(stat.field), name: text(stat.name), value, percent: stat.percent === true, icon: stat.icon });
  }
  return summed.size ? [...summed.values()] : null;
}

/** EP回復効率は基礎100%込みで扱う（ゲーム内・Enka 経路の表記に合わせる）。MiHoMo の `sp_rate` は上乗せ分のみ。 */
const HSR_BASE_ENERGY_RECHARGE = 100;

/** 最終値と `properties` の割合項目から、目標比較に使う StatKey → 数値の表を作る。 */
function mihomoStatValues(finals: RawRecord[], properties: RawRecord[]): Partial<Record<StatKey, number>> {
  const values: Partial<Record<StatKey, number>> = { energyRecharge: HSR_BASE_ENERGY_RECHARGE };
  for (const stat of finals) {
    const field = text(stat.field);
    const value = nullableNumber(stat.value);
    if (value === null) continue;
    const component = FIELD_TO_COMPONENT[field];
    if (component) { values[component] = value; continue; }
    const statKey = FIELD_TO_STAT_KEY[field];
    if (!statKey) continue;
    values[statKey] = statKey === "energyRecharge" ? (1 + value) * 100 : value * 100;
  }
  // statistics には割合の項目が無いため、Enka 経路と同じ「割合ボーナスの合計」を properties から作る。
  const percentKeys: Record<string, StatKey> = { hp: "hpPercent", atk: "attackPercent", def: "defPercent" };
  for (const [field, key] of Object.entries(percentKeys)) {
    const total = properties
      .filter((property) => text(property.field) === field && property.percent === true)
      .reduce((sum, property) => sum + (nullableNumber(property.value) ?? 0), 0);
    values[key] = total * 100;
  }
  return values;
}

const MIHOMO_FINAL_STATS_NOTE = "公開中のキャラクター・光円錐・遺物・軌跡を合算した戦闘外の最終値です。戦闘中・条件付き効果は含みません。";
const MIHOMO_UNAVAILABLE_NOTE = "最終ステータスを取得できないため、目標比較を保留しています。数分後に再度お試しください。";

const MIHOMO_FINAL_LABELS: Record<string, string> ={ hp: "HP", atk: "攻撃力", def: "防御力", spd: "速度" };

/** 最終値の一覧を「現在のステータス」として並べる。`statistics` の「基礎HP」等は中身が最終値なので表示名を直す。 */
function finalAllStatsFor(finals: RawRecord[]): CharacterProfile["allStats"] {
  return finals
    .map((stat) => {
      const field = text(stat.field);
      const name = MIHOMO_FINAL_LABELS[field] ?? text(stat.name);
      const value = nullableNumber(stat.value);
      const display = field === "sp_rate" && value !== null ? `${((1 + value) * 100).toFixed(1)}%` : statDisplay(stat);
      return { name, display, icon: text(stat.icon) || null };
    })
    .filter((stat) => stat.name);
}

function comparisonFromValue(target: TargetStatDefinition, current: number | null): StatComparison {
  return {
    ...target,
    current,
    currentDisplay: current === null ? "未取得" : target.unit === "%" ? `${current.toFixed(1)}%` : current.toFixed(0),
    achieved: {
      "厳選": current === null ? null : meetsTarget(current, target.targets["厳選"]),
      "目標": current === null ? null : meetsTarget(current, target.targets["目標"]),
      "妥協": current === null ? null : meetsTarget(current, target.targets["妥協"]),
    },
  };
}

function parseCharacter(source: RawRecord): CharacterProfile {
  const path = asRecord(source.path);
  const element = asRecord(source.element);
  const lightCone = asRecord(source.light_cone ?? source.lightCone);
  const properties = asArray(source.properties).map(asRecord);
  const identity = resolveCharacterIdentity("hsr", text(source.id, "unknown"), text(source.name));
  const name = identity.displayName;
  const guide = guideFor(name, text(path.name), identity);
  const hsrSlots = ["頭部", "手部", "胴体", "脚部", "次元界オーブ", "連結縄"];
  const relics = asArray(source.relics).map((entry, index) => {
    const relic = asRecord(entry);
    const main = asRecord(relic.main_affix ?? relic.mainAffix);
    return {
      id: text(relic.id, `${name}-relic-${index}`),
      name: text(relic.name, "遺物"),
      slot: hsrSlots[index] ?? text(relic.type ?? relic.slot),
      setName: text(relic.set_name ?? relic.setName),
      level: nullableNumber(relic.level),
      icon: text(relic.icon) || null,
      main: Object.keys(main).length ? { name: text(main.name), display: statDisplay(main) } : null,
      subs: asArray(relic.sub_affix ?? relic.subAffix).map(asRecord).map((sub) => ({ name: text(sub.name), display: statDisplay(sub) })),
    };
  });

  // 最終値を作れないときは properties（加算分だけ）へ戻らず、比較を保留する（誤った数字で比べない）。
  const finals = finalStatsOf(source);
  const values = finals ? mihomoStatValues(finals, properties) : {};
  const comparisons = guide.targets.map((target) => comparisonFromValue(target, finals ? values[target.key] ?? null : null));
  const recommendations = priorityRecommendations(comparisons);
  return {
    id: identity.sourceId,
    identity,
    name,
    level: nullableNumber(source.level),
    rank: nullableNumber(source.rank),
    portrait: text(source.portrait ?? source.preview ?? source.icon) || null,
    element: text(element.name),
    elementColor: text(element.color) || null,
    path: text(path.name),
    lightCone: Object.keys(lightCone).length ? {
      name: text(lightCone.name, "光円錐"),
      level: nullableNumber(lightCone.level),
      rank: nullableNumber(lightCone.rank),
      icon: text(lightCone.icon) || null,
    } : null,
    relics,
    allStats: finals ? finalAllStatsFor(finals) : [],
    statsStatus: finals ? "final" : "unavailable",
    statsNote: finals ? MIHOMO_FINAL_STATS_NOTE : MIHOMO_UNAVAILABLE_NOTE,
    guide,
    comparisons,
    recommendations,
    equipmentActions: equipmentActionsFor(guide, relics, recommendations),
    partyRecommendations: partyRecommendationsFor("hsr", name),
    constellations: constellationProfileFor(identity, nullableNumber(source.rank)),
  };
}

export function normalizeMihomoPayload(payload: unknown): Omit<BuildLookupResult, "cached" | "cacheExpiresAt" | "fetchedAt"> {
  const root = asRecord(payload);
  const player = asRecord(root.player);
  return {
    player: {
      uid: text(player.uid ?? root.uid),
      name: text(player.nickname ?? player.name, "開拓者"),
      level: nullableNumber(player.level),
    },
    characters: asArray(root.characters).map(asRecord).map(parseCharacter),
  };
}

/** set 時にこの件数を超えていたら期限切れエントリを掃除する（常駐プロセスでの無制限増加を防ぐ）。 */
/**
 * 1 キャッシュあたりの上限（設計: docs/修正設計書_公開API保護と外部API耐障害性_2026-09-19.md §4 Phase 47）。
 * このクラスは HSR・原神・ZZZ の3インスタンスで使うため、全体では最大 768 件になる。
 * 期限切れを掃除するだけでは、全件が有効な間は無制限に増えていた。
 */
const CACHE_MAX_ENTRIES = 256;

export class UidResponseCache<T> {
  private cache = new Map<string, { value: T; expiresAt: number }>();

  /** 保持中のエントリ数（期限切れを含む）。掃除と追い出しが効いていることをテストから観測するために公開する。 */
  get size(): number {
    return this.cache.size;
  }

  /** 期限切れを先に捨て、それでも上限を超える分は最後に使われたのが古い順に捨てる。 */
  private evict(now: number) {
    if (this.cache.size <= CACHE_MAX_ENTRIES) return;
    for (const [entryKey, entry] of this.cache) {
      if (entry.expiresAt <= now) this.cache.delete(entryKey);
    }
    while (this.cache.size > CACHE_MAX_ENTRIES) {
      const oldest = this.cache.keys().next();
      if (oldest.done) break;
      this.cache.delete(oldest.value);
    }
  }

  getEntry(key: string, now = Date.now()): { value: T; expiresAt: number } | null {
    const entry = this.cache.get(key);
    if (!entry || entry.expiresAt <= now) {
      this.cache.delete(key);
      return null;
    }
    // 読み取りも「使った」とみなして末尾へ動かす。Map は挿入順を保つので、
    // 先頭が最後に使われたのが最も古いエントリになる。
    this.cache.delete(key);
    this.cache.set(key, entry);
    return entry;
  }

  get(key: string, now = Date.now()): T | null {
    return this.getEntry(key, now)?.value ?? null;
  }

  set(key: string, value: T, ttlMs: number, now = Date.now()): number {
    const expiresAt = now + ttlMs;
    // Map.set は既存キーの更新では挿入順を変えないため、必ず消してから入れ直す。
    this.cache.delete(key);
    this.cache.set(key, { value, expiresAt });
    this.evict(now);
    return expiresAt;
  }
}

const lookupCache = new UidResponseCache<Omit<BuildLookupResult, "cached" | "cacheExpiresAt" | "fetchedAt">>();
const inFlightLookups = new Map<string, Promise<BuildLookupResult>>();
const FALLBACK_TTL_MS = 4 * 60 * 1000;
// リバースプロキシの要求上限内で Enka フォールバックを必ず試行できるよう、主取得には短い予算を割り当てる。
const MIHOMO_PRIMARY_TIMEOUT_MS = 6_000;

function ttlFromPayload(payload: unknown): number {
  const ttlSeconds = nullableNumber(asRecord(payload).ttl);
  if (ttlSeconds === null) return FALLBACK_TTL_MS;
  return Math.max(60_000, Math.min(ttlSeconds * 1000, 10 * 60 * 1000));
}

async function requestMihomo(uid: string): Promise<BuildLookupResult> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), MIHOMO_PRIMARY_TIMEOUT_MS);
  try {
    const response = await fetch(`https://api.mihomo.me/sr_info_parsed/${encodeURIComponent(uid)}?lang=jp`, {
      headers: { "User-Agent": "Star-Rail-Build-Advisor/1.0 (personal-use)" },
      signal: controller.signal,
    });
    const contentType = response.headers.get("content-type") ?? "";
    const rawBody = await response.text();
    const payload: unknown = contentType.toLowerCase().includes("application/json")
      ? JSON.parse(rawBody || "{}")
      : {};
    if (!response.ok || !contentType.toLowerCase().includes("application/json") || asRecord(payload).detail) {
      const detail = text(asRecord(payload).detail, "データを取得できませんでした。");
      const message = response.status === 429
        ? "照会が集中しています。数分後に再度お試しください。"
        : response.status >= 500 || !contentType.toLowerCase().includes("application/json")
          ? "外部データサービスが一時的に応答していません。数分後に再度お試しください。"
          : detail;
      throw new TRPCError({ code: response.status === 404 ? "NOT_FOUND" : "BAD_GATEWAY", message });
    }
    const normalized = normalizeMihomoPayload(payload);
    if (!normalized.characters.length) {
      throw new TRPCError({ code: "NOT_FOUND", message: "公開中のキャラクターが見つかりません。ゲーム内の巡星ビザ設定をご確認ください。" });
    }
    // 最終ステータスを1名も作れない応答は「不完全な主取得元」として扱い、Enka フォールバックへ回す。
    // これを成功として返すと、静的データから最終値を算出できる Enka が一度も試されないまま
    // 全員「未取得」の結果が TTL 中キャッシュされてしまう（Enka 側の isEnkaResultComplete と同じ考え方）。
    if (normalized.characters.every((character) => character.statsStatus === "unavailable")) {
      throw new TRPCError({ code: "BAD_GATEWAY", message: "最終ステータスを取得できませんでした。少し時間を置いて再試行してください。" });
    }
    const withSource = { ...normalized, dataSource: "MiHoMo" as const };
    const fetchedAt = new Date().toISOString();
    // 一部のキャラクターだけ最終値が欠けている結果は、再取得で回復し得るためキャッシュへ入れない。
    if (normalized.characters.some((character) => character.statsStatus === "unavailable")) {
      return { ...withSource, cached: false, fetchedAt, cacheExpiresAt: fetchedAt };
    }
    const expiresAt = lookupCache.set(uid, withSource, ttlFromPayload(payload));
    return { ...withSource, cached: false, fetchedAt, cacheExpiresAt: new Date(expiresAt).toISOString() };
  } catch (error) {
    if (error instanceof TRPCError) throw error;
    throw new TRPCError({ code: "BAD_GATEWAY", message: "外部データサービスへ接続できませんでした。少し時間を置いて再試行してください。", cause: error });
  } finally {
    clearTimeout(timeout);
  }
}

async function requestEnka(uid: string): Promise<BuildLookupResult> {
  const fallback = await fetchEnkaPayload(uid);
  const withSource = { ...fallback.data, dataSource: "Enka" as const };
  const fetchedAt = new Date().toISOString();
  // 静的データ欠落等で最終ステータスを算出できないキャラクターを含む結果は、
  // 再取得すれば回復し得るため通常のUIDキャッシュへ保存しない（不完全な値をTTL中固定しない）。
  if (!isEnkaResultComplete(fallback.data)) {
    return { ...withSource, cached: false, fetchedAt, cacheExpiresAt: fetchedAt };
  }
  const expiresAt = lookupCache.set(uid, withSource, fallback.ttlSeconds === null ? FALLBACK_TTL_MS : Math.max(60_000, Math.min(fallback.ttlSeconds * 1000, 10 * 60 * 1000)));
  return { ...withSource, cached: false, fetchedAt, cacheExpiresAt: new Date(expiresAt).toISOString() };
}

export async function lookupUidBuild(uid: string): Promise<BuildLookupResult> {
  const cached = lookupCache.getEntry(uid);
  if (cached) {
    const now = new Date();
    return { ...cached.value, cached: true, fetchedAt: now.toISOString(), cacheExpiresAt: new Date(cached.expiresAt).toISOString() };
  }
  const pending = inFlightLookups.get(uid);
  if (pending) return pending;
  const request = lookupWithFallback(() => requestMihomo(uid), () => requestEnka(uid)).finally(() => inFlightLookups.delete(uid));
  inFlightLookups.set(uid, request);
  return request;
}

export async function lookupWithFallback<T>(primary: () => Promise<T>, fallback: () => Promise<T>): Promise<T> {
  try {
    return await primary();
  } catch {
    return fallback();
  }
}
