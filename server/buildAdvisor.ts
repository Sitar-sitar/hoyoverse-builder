import {createLegacyTexts as createremainingDisplaysTexts} from "./content/legacyTexts";
import {sources as remainingDisplaysSources} from "../content/ja/guides/buildAdvisor_remainingDisplays";
const _remainingDisplays = createremainingDisplaysTexts(remainingDisplaysSources, {}, {});
import {createLegacyTexts as createequipmentLabelsTexts} from "./content/legacyTexts";
import {sources as equipmentLabelsSources} from "../content/ja/guides/buildAdvisor_equipmentLabels";
const _equipmentLabels = createequipmentLabelsTexts(equipmentLabelsSources, {}, {});
import { errorMessage } from "./content/errors";
import { sources as finalLabelSources } from "../content/ja/guides/buildAdvisor_finalLabels";
const _finalLabels = createequipmentLabelsTexts(finalLabelSources, {}, {});
import {createLegacyTexts as createproviderComparisonTexts} from "./content/legacyTexts";
import {sources as providerComparisonSources} from "../content/ja/guides/buildAdvisor_providerComparison";
const _providerComparison = createproviderComparisonTexts(providerComparisonSources, {}, {});
import {createLegacyTexts as createProviderDisplayTexts} from "./content/legacyTexts";
import {sources as providerDisplaySources} from "../content/ja/guides/buildAdvisor_providerDisplay";
const _providerDisplay = createProviderDisplayTexts(providerDisplaySources, {}, {});
import {records as guideRecords} from "../content/guideDefinitions_hsr";
import {projectGuideRegistry} from "./content/guides";
import {createLegacyTexts as createGuideTemplateTexts} from "./content/legacyTexts";
import {sources as guideTemplateSources} from "../content/ja/guides/buildAdvisor_templates";
const _guideTemplates=createGuideTemplateTexts(guideTemplateSources,{},{});
import { createLegacyTexts } from "./content/legacyTexts";
import { sources as _sources } from "../content/ja/guides/buildAdvisor";
import { records as _en } from "../content/translations/en/buildAdvisor";
import { records as _zh } from "../content/translations/zh-CN/buildAdvisor";
const _content = createLegacyTexts(_sources, _en, _zh);
import { TRPCError } from "@trpc/server";
import { runWithLookupCapacity } from "./_core/lookupCapacity";
import { readBoundedText, UID_BODY_LIMIT_BYTES } from "./_core/boundedBody";
import { FIELD_TO_COMPONENT, FIELD_TO_STAT_KEY, fetchEnkaPayload, isEnkaResultComplete } from "./enkaFallback";
import { generatedHsrGuide } from "./individualGuides";
import { guideMetadataFor } from "./characterGuideMetadata";
import {projectGuideMetadataDefaults} from "./content/guideMetadata";
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

const guideMetadataDefaults = projectGuideMetadataDefaults();
export const GUIDE_DATASET_STATUS = {
  dataAsOf: "2026-08-18",
  updatedAt: "2026-08-18",
  sourceLabels: {
    hsr: guideMetadataDefaults.hsr.sourceLabel,
    genshin: guideMetadataDefaults.genshin.sourceLabel,
    zzz: guideMetadataDefaults.zzz.sourceLabel,
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
  if (rounded === 0) return _remainingDisplays.ja("guide.remainingDisplays.buildAdvisor.b00001", {v0:String((10 ** -digits).toFixed(digits)),v1:String(unit)});
  return _remainingDisplays.ja("guide.remainingDisplays.buildAdvisor.b00002", {v0:String(deficit.toFixed(digits)),v1:String(unit)});
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
  critRate: [_remainingDisplays.ja("guide.remainingDisplays.buildAdvisor.b00003")], critDmg: [_remainingDisplays.ja("guide.remainingDisplays.buildAdvisor.b00004")], speed: [_remainingDisplays.ja("guide.remainingDisplays.buildAdvisor.b00005")], attack: [_remainingDisplays.ja("guide.remainingDisplays.buildAdvisor.b00006")], attackPercent: [_remainingDisplays.ja("guide.remainingDisplays.buildAdvisor.b00007")], breakEffect: [_remainingDisplays.ja("guide.remainingDisplays.buildAdvisor.b00008")],
  effectHitRate: [_remainingDisplays.ja("guide.remainingDisplays.buildAdvisor.b00009")], effectRes: [_remainingDisplays.ja("guide.remainingDisplays.buildAdvisor.b00010")], hp: [_remainingDisplays.ja("guide.remainingDisplays.buildAdvisor.b00011")], hpPercent: [_remainingDisplays.ja("guide.remainingDisplays.buildAdvisor.b00012")], defense: [_remainingDisplays.ja("guide.remainingDisplays.buildAdvisor.b00013")], defPercent: [_remainingDisplays.ja("guide.remainingDisplays.buildAdvisor.b00014")],
  energyRecharge: [_remainingDisplays.ja("guide.remainingDisplays.buildAdvisor.b00015"), _remainingDisplays.ja("guide.remainingDisplays.buildAdvisor.b00016"), _remainingDisplays.ja("guide.remainingDisplays.buildAdvisor.b00017")], elementalMastery: [_remainingDisplays.ja("guide.remainingDisplays.buildAdvisor.b00018")], anomalyMastery: [_remainingDisplays.ja("guide.remainingDisplays.buildAdvisor.b00019")], anomalyProficiency: [_remainingDisplays.ja("guide.remainingDisplays.buildAdvisor.b00020")], impact: [_remainingDisplays.ja("guide.remainingDisplays.buildAdvisor.b00021")], penRatio: [_remainingDisplays.ja("guide.remainingDisplays.buildAdvisor.b00022")], energyRegen: [_remainingDisplays.ja("guide.remainingDisplays.buildAdvisor.b00023")],
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
const ZZZ_DESIRED_STAT_LABELS: Partial<Record<StatKey, string>> = { hp: _equipmentLabels.ja("guide.equipmentLabels.buildAdvisor.b00001"), hpPercent: _equipmentLabels.ja("guide.equipmentLabels.buildAdvisor.b00002"), defense: _equipmentLabels.ja("guide.equipmentLabels.buildAdvisor.b00003"), defPercent: _equipmentLabels.ja("guide.equipmentLabels.buildAdvisor.b00004") };
/** 同じキーでもゲームで呼び名が違うもの。STAT_MAIN_LABELS の先頭は照合用の語なので、提案文にそのまま使えない。 */
const DESIRED_STAT_LABELS_BY_FAMILY: Partial<Record<StatKey, Partial<Record<"hsr" | "genshin" | "zzz", string>>>> = {
  energyRecharge: { hsr: _equipmentLabels.ja("guide.equipmentLabels.buildAdvisor.b00005"), genshin: _equipmentLabels.ja("guide.equipmentLabels.buildAdvisor.b00006") },
};

function desiredStatLabel(family: "hsr" | "genshin" | "zzz", key: StatKey): string | undefined {
  if (family === "zzz" && ZZZ_DESIRED_STAT_LABELS[key]) return ZZZ_DESIRED_STAT_LABELS[key];
  return DESIRED_STAT_LABELS_BY_FAMILY[key]?.[family];
}

/** 部位を特定しないときに返す既定ラベル（日本語）。画面は slotScope で言語別の語へ差し替える。 */
const ALL_SLOTS_LABEL = _equipmentLabels.ja("guide.equipmentLabels.buildAdvisor.b00007");

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
        : _guideTemplates.ja("guide.legacy.buildAdvisor_templates.b00004",{v0:slot,v1:currentMain ? _remainingDisplays.ja("guide.remainingDisplays.buildAdvisor.b00024", {v0:String(currentMain)}) : "",v2:desiredStat,v3:equipped?.name ?? _providerDisplay.ja("guide.providerDisplay.buildAdvisor.b00001")}),
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





const BREAK_TARGETS: TargetStatDefinition[] = [
  { key: "breakEffect", label: _content.ja("guide.legacy.buildAdvisor.b00008"), unit: "%", targets: { "厳選": 360, "目標": 300, "妥協": 240 } },
  { key: "speed", label: _content.ja("guide.legacy.buildAdvisor.b00009"), unit: "", targets: { "厳選": 154, "目標": 150, "妥協": 145 } },
  { key: "attackPercent", label: _content.ja("guide.legacy.buildAdvisor.b00010"), unit: "%", targets: { "厳選": 45, "目標": 35, "妥協": 25 } },
];







const GUIDE_OVERRIDES: Record<string, GuideDefinition> = projectGuideRegistry(guideRecords, "GUIDE_OVERRIDES");

















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













/**
 * 同名で複数の実装がある HSR キャラクターの個別ガイド。名前キーの GUIDE_OVERRIDES より優先する。
 * 例: 三月なのかは存護（1001）と巡狩（1224）が同じ providerName で公開されるため、名前キーでは区別できない。
 */
const GUIDE_OVERRIDES_BY_SOURCE_ID: Record<string, GuideDefinition> = projectGuideRegistry(guideRecords, "GUIDE_OVERRIDES_BY_SOURCE_ID");

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

const MIHOMO_FINAL_STATS_NOTE = _providerDisplay.ja("guide.providerDisplay.buildAdvisor.b00002");
const MIHOMO_UNAVAILABLE_NOTE = _providerDisplay.ja("guide.providerDisplay.buildAdvisor.b00003");

const MIHOMO_FINAL_LABELS: Record<string, string> = {
  hp: _finalLabels.ja("guide.buildAdvisor.finalLabel.hp"),
  atk: _finalLabels.ja("guide.buildAdvisor.finalLabel.atk"),
  def: _finalLabels.ja("guide.buildAdvisor.finalLabel.def"),
  spd: _finalLabels.ja("guide.buildAdvisor.finalLabel.spd"),
};

/**
 * MiHoMoの画像は StarRailRes 相対のパス（`icon/...`・`image/...`）で返る。そのまま返すと公開サイト基準で404になるため、
 * StarRailRes の絶対URLへ変換する。https の絶対URLはそのまま、それ以外の形式（http:・data:・プロトコル相対・`..`等）は捨てる。
 * 設計: docs/修正設計書_HSR_MiHoMo画像URL_2026-10-20.md
 */
const MIHOMO_ASSET_BASE = "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/";
const MIHOMO_RELATIVE_ASSET = /^[A-Za-z0-9_\-][A-Za-z0-9_\-./]*$/;
export function mihomoAssetUrl(value: unknown): string | null {
  if (typeof value !== "string" || !value) return null;
  if (value.startsWith("https://")) return value;
  if (!MIHOMO_RELATIVE_ASSET.test(value) || value.includes("..")) return null;
  return `${MIHOMO_ASSET_BASE}${value}`;
}

/** 最終値の一覧を「現在のステータス」として並べる。`statistics` の「基礎HP」等は中身が最終値なので表示名を直す。 */
function finalAllStatsFor(finals: RawRecord[]): CharacterProfile["allStats"] {
  return finals
    .map((stat) => {
      const field = text(stat.field);
      const name = MIHOMO_FINAL_LABELS[field] ?? text(stat.name);
      const value = nullableNumber(stat.value);
      const display = field === "sp_rate" && value !== null ? `${((1 + value) * 100).toFixed(1)}%` : statDisplay(stat);
      return { name, display, icon: mihomoAssetUrl(stat.icon) };
    })
    .filter((stat) => stat.name);
}

function comparisonFromValue(target: TargetStatDefinition, current: number | null): StatComparison {
  return {
    ...target,
    current,
    currentDisplay: current === null ? _providerComparison.ja("guide.providerComparison.buildAdvisor.b00001") : target.unit === "%" ? `${current.toFixed(1)}%` : current.toFixed(0),
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
  const hsrSlots = [_providerDisplay.ja("guide.providerDisplay.buildAdvisor.b00004"), _providerDisplay.ja("guide.providerDisplay.buildAdvisor.b00005"), _providerDisplay.ja("guide.providerDisplay.buildAdvisor.b00006"), _providerDisplay.ja("guide.providerDisplay.buildAdvisor.b00007"), _providerDisplay.ja("guide.providerDisplay.buildAdvisor.b00008"), _providerDisplay.ja("guide.providerDisplay.buildAdvisor.b00009")];
  const relics = asArray(source.relics).map((entry, index) => {
    const relic = asRecord(entry);
    const main = asRecord(relic.main_affix ?? relic.mainAffix);
    return {
      id: text(relic.id, `${name}-relic-${index}`),
      name: text(relic.name, _providerDisplay.ja("guide.providerDisplay.buildAdvisor.b00010")),
      slot: hsrSlots[index] ?? text(relic.type ?? relic.slot),
      setName: text(relic.set_name ?? relic.setName),
      level: nullableNumber(relic.level),
      icon: mihomoAssetUrl(relic.icon),
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
    portrait: mihomoAssetUrl(source.portrait ?? source.preview ?? source.icon),
    element: text(element.name),
    elementColor: text(element.color) || null,
    path: text(path.name),
    lightCone: Object.keys(lightCone).length ? {
      name: text(lightCone.name, _providerDisplay.ja("guide.providerDisplay.buildAdvisor.b00011")),
      level: nullableNumber(lightCone.level),
      rank: nullableNumber(lightCone.rank),
      icon: mihomoAssetUrl(lightCone.icon),
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
      name: text(player.nickname ?? player.name, _providerDisplay.ja("guide.providerDisplay.buildAdvisor.b00012")),
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
    // 上限超過は主取得の失敗としてcatchで扱われ、lookupWithFallbackがEnkaへfallbackする。
    const rawBody = await readBoundedText(response, { maxBytes: UID_BODY_LIMIT_BYTES });
    const payload: unknown = contentType.toLowerCase().includes("application/json")
      ? JSON.parse(rawBody || "{}")
      : {};
    if (!response.ok || !contentType.toLowerCase().includes("application/json") || asRecord(payload).detail) {
      const detail = text(asRecord(payload).detail, errorMessage("public.mihomoUnavailable"));
      const message = response.status === 429
        ? errorMessage("public.busy")
        : response.status >= 500 || !contentType.toLowerCase().includes("application/json")
          ? errorMessage("public.serviceUnavailable")
          : detail;
      throw new TRPCError({ code: response.status === 404 ? "NOT_FOUND" : "BAD_GATEWAY", message });
    }
    const normalized = normalizeMihomoPayload(payload);
    if (!normalized.characters.length) {
      throw new TRPCError({ code: "NOT_FOUND", message: errorMessage("public.hsrNotFound") });
    }
    // 最終ステータスを1名も作れない応答は「不完全な主取得元」として扱い、Enka フォールバックへ回す。
    // これを成功として返すと、静的データから最終値を算出できる Enka が一度も試されないまま
    // 全員「未取得」の結果が TTL 中キャッシュされてしまう（Enka 側の isEnkaResultComplete と同じ考え方）。
    if (normalized.characters.every((character) => character.statsStatus === "unavailable")) {
      throw new TRPCError({ code: "BAD_GATEWAY", message: errorMessage("public.finalUnavailable") });
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
    throw new TRPCError({ code: "BAD_GATEWAY", message: errorMessage("public.unreachable"), cause: error });
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
  // 枠は fallback 全体の外側で取る。内側で枠不足を投げると lookupWithFallback が Enka へ誤って fallback する。
  const request = runWithLookupCapacity(() => lookupWithFallback(() => requestMihomo(uid), () => requestEnka(uid))).finally(() => inFlightLookups.delete(uid));
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
