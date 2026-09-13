import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import React from "react";

/**
 * 案 A: 目標マトリクスを達成ゲージで、次の強化を開閉式の装備提案付きで表示する
 * （設計: docs/実装設計書_表示デザインの管理画面切替_2026-09-13.md §4.4 A、G-A 確定）。
 * 比較・目標・優先順はページが計算済みの値をそのまま使い、ここでは表示用の集計と座標だけを計算する（D6 例外2・U17）。
 */

export type GaugeTier = "厳選" | "目標" | "妥協";
export const GAUGE_TIERS: GaugeTier[] = ["妥協", "目標", "厳選"];
const TIERS_HIGH_TO_LOW: GaugeTier[] = ["厳選", "目標", "妥協"];

export type GaugeComparison = {
  key: string;
  label: string;
  unit: string;
  current: number | null;
  currentDisplay: string;
  targets: Record<GaugeTier, number>;
  achieved: Record<GaugeTier, boolean | null>;
};

export type GaugeRecommendation = {
  key: string;
  label: string;
  unit: string;
  current: number;
  target: number;
  deficit: number;
  priority: "最優先" | "優先" | "次点";
  rationale: string;
};

export type GaugeEquipmentAction = {
  recommendationKey: string;
  action: "主ステータスを変更" | "サブステータスを厳選";
  slot: string;
  slotScope?: "specific" | "any";
  desiredStat: string;
};

export type GaugeSummary =
  | { kind: "unavailable" }
  | { kind: "empty" }
  | { kind: "ready"; metTarget: number; total: number; tier: GaugeTier | "below" | "pending" };

/** 全体の到達（U15）。未取得を含むと判定保留、0件と算出不能は指定文言に回す。 */
export function summarizeComparisons(comparisons: GaugeComparison[], statsUnavailable: boolean): GaugeSummary {
  if (statsUnavailable) return { kind: "unavailable" };
  if (!comparisons.length) return { kind: "empty" };
  const metTarget = comparisons.filter((comparison) => comparison.achieved["目標"] === true).length;
  const pending = comparisons.some((comparison) =>
    comparison.current === null || !Number.isFinite(comparison.current) || GAUGE_TIERS.some((tier) => comparison.achieved[tier] === null));
  if (pending) return { kind: "ready", metTarget, total: comparisons.length, tier: "pending" };
  const tier = TIERS_HIGH_TO_LOW.find((candidate) => comparisons.every((comparison) => comparison.achieved[candidate] === true));
  return { kind: "ready", metTarget, total: comparisons.length, tier: tier ?? "below" };
}

/** ゲージの右端（U16）。現在値と旧新の全ティアの有限値の最大×1.1。0以下・有限値なしは1。 */
export function gaugeMaximum(values: Array<number | null | undefined>) {
  const finite = values.filter((value): value is number => typeof value === "number" && Number.isFinite(value));
  const max = finite.length ? Math.max(...finite) : 0;
  return max > 0 ? max * 1.1 : 1;
}

/** 座標だけを 0〜100% に収める。数値そのものは変えない。 */
export function gaugePercent(value: number, maximum: number) {
  if (!Number.isFinite(value) || !Number.isFinite(maximum) || maximum <= 0) return 0;
  return Math.min(100, Math.max(0, (value / maximum) * 100));
}

/** 変更前の目標と差があるときだけ、旧目標を返す。新しく加わったキーは null。 */
export function changedBaseTargets(comparison: GaugeComparison, baseComparisons: GaugeComparison[]) {
  const base = baseComparisons.find((item) => item.key === comparison.key);
  if (!base) return null;
  return GAUGE_TIERS.some((tier) => base.targets[tier] !== comparison.targets[tier]) ? base.targets : null;
}

type StatGaugeProps = {
  comparisons: GaugeComparison[];
  baseComparisons: GaugeComparison[];
  statsUnavailable: boolean;
  tierLabel: (tier: GaugeTier) => string;
};

export function StatGauge({ comparisons, baseComparisons, statsUnavailable, tierLabel }: StatGaugeProps) {
  const { t } = useLanguage();
  const summary = summarizeComparisons(comparisons, statsUnavailable);

  if (summary.kind === "unavailable") {
    return <p data-testid="stat-gauge-message" className="mt-6 border-l-2 border-amber-800 pl-3 text-sm leading-6 text-stone-700">{t("comparisonPending")}</p>;
  }
  if (summary.kind === "empty") {
    return <p data-testid="stat-gauge-message" className="mt-6 border-l-2 border-amber-800 pl-3 text-sm leading-6 text-stone-700">{t("noRegisteredTargets")}</p>;
  }

  const tierText = summary.tier === "pending" ? t("gaugePending") : summary.tier === "below" ? t("gaugeBelowBaseline") : tierLabel(summary.tier);
  const stateText = (value: boolean | null) => value === true ? t("gaugeAchieved") : value === false ? t("gaugeNotAchieved") : t("gaugeUnknown");

  return (
    <div className="mt-6" data-testid="stat-gauge">
      <dl className="flex flex-wrap gap-x-6 gap-y-2 border-y border-stone-300 py-3 text-sm">
        <div className="flex items-baseline gap-2">
          <dt className="detail-mono text-[11px] text-stone-500">{t("gaugeTargetsMet")}</dt>
          <dd className="font-serif text-lg font-semibold text-stone-900" data-testid="stat-gauge-met">{summary.metTarget} / {summary.total}</dd>
        </div>
        <div className="flex items-baseline gap-2">
          <dt className="detail-mono text-[11px] text-stone-500">{t("gaugeOverallTier")}</dt>
          <dd className="font-serif text-lg font-semibold text-stone-900" data-testid="stat-gauge-tier">{tierText}</dd>
        </div>
      </dl>

      <ul className="mt-2 divide-y divide-stone-200" aria-label={t("gaugeListLabel")}>
        {comparisons.map((comparison) => {
          const baseTargets = changedBaseTargets(comparison, baseComparisons);
          const hasCurrent = comparison.current !== null && Number.isFinite(comparison.current);
          const maximum = gaugeMaximum([
            hasCurrent ? comparison.current : null,
            ...GAUGE_TIERS.map((tier) => comparison.targets[tier]),
            ...(baseTargets ? GAUGE_TIERS.map((tier) => baseTargets[tier]) : []),
          ]);
          const currentPercent = hasCurrent ? gaugePercent(comparison.current as number, maximum) : null;
          return (
            <li key={comparison.key} className="py-4" data-testid={`stat-gauge-row-${comparison.key}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p className="font-serif text-base font-semibold text-stone-900">{comparison.label}</p>
                <p className="text-sm font-semibold text-stone-900" data-testid="stat-gauge-current">
                  <span className="detail-mono mr-2 text-[11px] font-normal text-stone-500">{t("current")}</span>
                  {hasCurrent ? comparison.currentDisplay : t("gaugeMissing")}
                </p>
              </div>

              <div aria-hidden="true" className="relative mt-3 h-3 border border-stone-300 bg-stone-100" data-testid="stat-gauge-bar">
                {currentPercent !== null && (
                  <span className="absolute inset-y-0 left-0 bg-amber-800/25" style={{ width: `${currentPercent}%` }} />
                )}
                {baseTargets && GAUGE_TIERS.map((tier) => (
                  <span
                    key={`base-${tier}`}
                    data-testid="stat-gauge-base-mark"
                    className="absolute -inset-y-1 border-l-2 border-dotted border-stone-400"
                    style={{ left: `${gaugePercent(baseTargets[tier], maximum)}%` }}
                  />
                ))}
                {GAUGE_TIERS.map((tier) => (
                  <span
                    key={tier}
                    data-testid="stat-gauge-mark"
                    className={cn("absolute -inset-y-1 border-l-2", tier === "厳選" ? "border-stone-900" : tier === "目標" ? "border-amber-800" : "border-stone-500")}
                    style={{ left: `${gaugePercent(comparison.targets[tier], maximum)}%` }}
                  />
                ))}
                {currentPercent !== null && (
                  <span
                    data-testid="stat-gauge-marker"
                    className="absolute -inset-y-1.5 w-1 -translate-x-1/2 bg-stone-950"
                    style={{ left: `${currentPercent}%` }}
                  />
                )}
              </div>

              <div className="mt-2 grid grid-cols-3 gap-2 text-[11px] leading-4">
                {GAUGE_TIERS.map((tier) => {
                  const achieved = comparison.achieved[tier];
                  return (
                    <div key={tier} className="min-w-0" data-testid={`stat-gauge-tier-${tier}`}>
                      <p className="detail-mono text-stone-500">{tierLabel(tier)}</p>
                      <p className="font-semibold text-stone-900">{comparison.targets[tier]}{comparison.unit}</p>
                      <p className={cn(achieved === false ? "text-rose-800" : achieved === true ? "text-emerald-800" : "text-stone-500")}>{stateText(achieved)}</p>
                      {baseTargets && baseTargets[tier] !== comparison.targets[tier] && (
                        <p className="text-stone-500">{t("gaugeBaseTarget")} {baseTargets[tier]}{comparison.unit}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

type UpgradePrioritiesProps<R extends GaugeRecommendation, A extends GaugeEquipmentAction> = {
  recommendations: R[];
  equipmentActions: A[];
  statsUnavailable: boolean;
  hasComparisons: boolean;
  rationale: (item: R) => string;
  priorityLabel: (priority: R["priority"]) => string;
  actionLabel: (action: A["action"]) => string;
  actionSlotLabel: (action: A) => string;
  actionReason: (action: A) => string;
};

/** 次の強化。順位・不足量・理由は既存の算出結果をそのまま出し、装備提案だけを初期閉の details にする。 */
export function UpgradePriorities<R extends GaugeRecommendation, A extends GaugeEquipmentAction>({ recommendations, equipmentActions, statsUnavailable, hasComparisons, rationale, priorityLabel, actionLabel, actionSlotLabel, actionReason }: UpgradePrioritiesProps<R, A>) {
  const { t } = useLanguage();
  if (statsUnavailable) {
    return <p className="mt-5 border-l-2 border-amber-800 pl-3 text-sm leading-6 text-stone-700">{t("comparisonPending")}</p>;
  }
  if (!recommendations.length) {
    return <p className={cn("mt-5 border-l-2 pl-3 text-sm leading-6 text-stone-700", hasComparisons ? "border-emerald-800" : "border-amber-800")}>{t(hasComparisons ? "allTargetsMet" : "noRegisteredTargets")}</p>;
  }
  return (
    <ol className="mt-6 grid gap-3 md:grid-cols-3" data-testid="upgrade-priorities">
      {recommendations.map((item, index) => {
        const digits = item.unit === "%" ? 1 : 0;
        const equipmentAction = equipmentActions.find((action) => action.recommendationKey === item.key);
        return (
          <li key={item.key} className="min-w-0 border border-amber-900/30 bg-stone-50/80 p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="detail-mono text-[11px] text-amber-800">{String(index + 1).padStart(2, "0")} / {priorityLabel(item.priority)}</p>
              <span className="text-xs font-semibold text-rose-800">-{item.deficit.toFixed(digits)}{item.unit}</span>
            </div>
            <h4 className="mt-3 font-serif text-xl font-semibold">{item.label}</h4>
            <p className="mt-2 text-xs leading-5 text-stone-600">{t("current")} {item.current.toFixed(digits)}{item.unit}　→　{t("target")} {item.target}{item.unit}</p>
            <p className="mt-2 text-xs leading-5 text-stone-700">{rationale(item)}</p>
            {equipmentAction && (
              <details className="mt-4 border-t border-amber-900/20 pt-3">
                <summary className="cursor-pointer text-sm font-semibold text-stone-900">
                  <span className="detail-mono mr-2 text-[11px] font-normal text-amber-800">{t("equipmentAction")} / {actionLabel(equipmentAction.action)}</span>
                  {actionSlotLabel(equipmentAction)}：{equipmentAction.desiredStat}
                </summary>
                <p className="mt-2 text-[11px] leading-5 text-stone-600">{actionReason(equipmentAction)}</p>
              </details>
            )}
          </li>
        );
      })}
    </ol>
  );
}
