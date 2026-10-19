import { uiFormat, uiText } from "@/content/ui";

/**
 * 推奨PT・凸による目標補正と未達ステータスの優先強化提案（純粋計算）。Home から移動しただけで計算は変えない。
 * 設計: docs/修正設計書_運用安定化と保守性改善_2026-10-19.md §5.9（F-1）
 */

export type TierName = "厳選" | "目標" | "妥協";
export type LocalizedText = { ja: string; en: string; "zh-CN": string };
export type Comparison = { key: string; label: string; unit: string; current: number | null; currentDisplay: string; targets: Record<TierName, number>; achieved: Record<TierName, boolean | null> };
export type PriorityRecommendation = { key: string; label: string; unit: string; current: number; target: number; deficit: number; priority: "最優先" | "優先" | "次点"; rationale: string };
export type PartyTargetChange = { key: string; label: LocalizedText; unit: "%" | ""; targets: Record<TierName, number>; reason: LocalizedText };
export type StatLine = { name: string; display: string; icon: string | null };

export const localText = (text: LocalizedText, language: "ja" | "en" | "zh-CN") => text[language];
const statNameForPartyKey: Record<string, string> = { critRate: "会心率", critDmg: "会心ダメージ", speed: "速度", attack: "攻撃力", attackPercent: "攻撃力%", breakEffect: "撃破特効", effectHitRate: "効果命中", effectRes: "効果抵抗", hp: "HP", hpPercent: "HP%", defense: "防御力", defPercent: "防御力%", energyRecharge: "元素チャージ効率", elementalMastery: "元素熟知", anomalyMastery: "異常マスタリー", impact: "衝撃力", penRatio: "貫通率", energyRegen: "エネルギー自動回復" };

export function partyAdjustedComparisons(base: Comparison[], stats: StatLine[], changes: PartyTargetChange[], language: "ja" | "en" | "zh-CN"): Comparison[] {
  if (!changes.length) return base;
  const byKey = new Map(changes.map((change) => [change.key, change]));
  const adjusted = base.map((comparison) => {
    const change = byKey.get(comparison.key);
    if (!change) return comparison;
    return { ...comparison, label: localText(change.label, language), unit: change.unit, targets: change.targets, achieved: {
      "厳選": comparison.current === null ? null : meetsTarget(comparison.current, change.targets["厳選"]),
      "目標": comparison.current === null ? null : meetsTarget(comparison.current, change.targets["目標"]),
      "妥協": comparison.current === null ? null : meetsTarget(comparison.current, change.targets["妥協"]),
    } };
  });
  const existing = new Set(base.map((comparison) => comparison.key));
  changes.filter((change) => !existing.has(change.key)).forEach((change) => {
    const stat = stats.find((item) => item.name === statNameForPartyKey[change.key]);
    const parsed = stat ? Number.parseFloat(stat.display.replace(/,/g, "")) : Number.NaN;
    const current = Number.isFinite(parsed) ? parsed : null;
    adjusted.push({ key: change.key, label: localText(change.label, language), unit: change.unit, current, currentDisplay: stat?.display ?? uiText("ui.home.stats.unavailable"), targets: change.targets, achieved: {
      "厳選": current === null ? null : meetsTarget(current, change.targets["厳選"]),
      "目標": current === null ? null : meetsTarget(current, change.targets["目標"]),
      "妥協": current === null ? null : meetsTarget(current, change.targets["妥協"]),
    } });
  });
  return adjusted;
}

/**
 * 表示桁より細かい浮動小数点誤差だけを吸収する許容差（サーバーの meetsTarget と同値）。
 * EP回復効率の基礎込み換算 (1 + 0.194) * 100 は 119.39999999999999 になり、素の >= では目標 119.4 に未達となる。
 */
export const COMPARISON_EPSILON = 1e-9;
export const meetsTarget = (current: number, target: number) => current >= target - COMPARISON_EPSILON;

/** 目標までの不足量。丸めて 0 になる不足を「達成済み」に見せない。 */
export function deficitText(deficit: number, unit: string, language: "ja" | "en" | "zh-CN") {
  const digits = unit === "%" ? 1 : 0;
  const under = Number(deficit.toFixed(digits)) === 0;
  return uiFormat(under ? "ui.home.deficit.under" : "ui.home.deficit.amount", {
    amount: under ? (10 ** -digits).toFixed(digits) : deficit.toFixed(digits), unit,
  }, language);
}

export function recommendationsFromComparisons(comparisons: Comparison[], language: "ja" | "en" | "zh-CN"): PriorityRecommendation[] {
  return comparisons
    .filter((comparison): comparison is Comparison & { current: number } => comparison.current !== null && !meetsTarget(comparison.current, comparison.targets["目標"]))
    .map((comparison) => {
      const target = comparison.targets["目標"];
      const deficit = target - comparison.current;
      const severity = deficit / Math.max(target, 1);
      const priority: PriorityRecommendation["priority"] = severity >= 0.25 ? "最優先" : severity >= 0.1 ? "優先" : "次点";
      return {
        key: comparison.key, label: comparison.label, unit: comparison.unit, current: comparison.current, target, deficit,
        priority,
        rationale: uiFormat("ui.home.recommendation.target", { target, unit: comparison.unit, deficit: deficitText(deficit, comparison.unit, language) }, language),
      };
    })
    .sort((left, right) => (right.deficit / Math.max(right.target, 1)) - (left.deficit / Math.max(left.target, 1)))
    .slice(0, 3);
}
