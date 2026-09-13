// @vitest-environment jsdom
import { LanguageProvider } from "@/contexts/LanguageContext";
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import React from "react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  StatGauge,
  UpgradePriorities,
  changedBaseTargets,
  gaugeMaximum,
  gaugePercent,
  summarizeComparisons,
  type GaugeComparison,
  type GaugeTier,
} from "./StatGauge";

type Achieved = Record<GaugeTier, boolean | null>;
function comparison(key: string, current: number | null, targets: [number, number, number], achieved?: Achieved, unit = "%"): GaugeComparison {
  const [baseline, goal, strict] = targets;
  const byValue = (target: number) => current === null ? null : current >= target;
  return {
    key,
    label: key,
    unit,
    current,
    currentDisplay: current === null ? "未取得" : `${current}${unit}`,
    targets: { "妥協": baseline, "目標": goal, "厳選": strict },
    achieved: achieved ?? { "妥協": byValue(baseline), "目標": byValue(goal), "厳選": byValue(strict) },
  };
}

const tierLabel = (tier: GaugeTier) => tier;
const renderGauge = (props: Partial<React.ComponentProps<typeof StatGauge>> = {}) => render(
  <LanguageProvider>
    <StatGauge comparisons={[]} baseComparisons={[]} statsUnavailable={false} tierLabel={tierLabel} {...props} />
  </LanguageProvider>,
);
const leftPercent = (element: Element) => Number.parseFloat((element as HTMLElement).style.left);

describe("A1 全体の到達と異常系", () => {
  beforeEach(() => window.localStorage.setItem("starrail-build-advisor.language", "ja"));
  afterEach(() => cleanup());

  it("全件が満たす最上位のティアを返し、分子は目標を満たす件数だけを数える", () => {
    expect(summarizeComparisons([comparison("a", 200, [130, 150, 180]), comparison("b", 90, [60, 70, 80])], false))
      .toEqual({ kind: "ready", metTarget: 2, total: 2, tier: "厳選" });
    expect(summarizeComparisons([comparison("a", 160, [130, 150, 180]), comparison("b", 90, [60, 70, 80])], false))
      .toEqual({ kind: "ready", metTarget: 2, total: 2, tier: "目標" });
    expect(summarizeComparisons([comparison("a", 140, [130, 150, 180]), comparison("b", 90, [60, 70, 80])], false))
      .toEqual({ kind: "ready", metTarget: 1, total: 2, tier: "妥協" });
    expect(summarizeComparisons([comparison("a", 100, [130, 150, 180]), comparison("b", 90, [60, 70, 80])], false))
      .toEqual({ kind: "ready", metTarget: 1, total: 2, tier: "below" });
  });

  it("未取得や判定できない値が1件でもあれば判定保留にする", () => {
    expect(summarizeComparisons([comparison("a", null, [130, 150, 180]), comparison("b", 90, [60, 70, 80])], false))
      .toMatchObject({ kind: "ready", tier: "pending", metTarget: 1, total: 2 });
    expect(summarizeComparisons([comparison("a", 200, [130, 150, 180], { "妥協": true, "目標": null, "厳選": true })], false))
      .toMatchObject({ tier: "pending", metTarget: 0 });
  });

  it("算出不能は保留の文言、0件は未登録の文言を出し、0 / 0 を表示しない", () => {
    renderGauge({ statsUnavailable: true, comparisons: [comparison("a", 200, [130, 150, 180])] });
    expect(screen.getByTestId("stat-gauge-message").textContent).toContain("最終ステータスを算出できないため");
    expect(screen.queryByTestId("stat-gauge-met")).toBeNull();
    cleanup();

    renderGauge({ comparisons: [] });
    expect(screen.getByTestId("stat-gauge-message").textContent).toContain("比較可能な固定目標値が登録されていません");
    expect(screen.queryByText("0 / 0")).toBeNull();
  });

  it("全体の到達と件数を文字で表示する", () => {
    renderGauge({ comparisons: [comparison("a", null, [130, 150, 180]), comparison("b", 90, [60, 70, 80])] });
    expect(screen.getByTestId("stat-gauge-met").textContent).toBe("1 / 2");
    expect(screen.getByTestId("stat-gauge-tier").textContent).toBe("判定保留");
    expect(within(screen.getByTestId("stat-gauge-row-a")).getByTestId("stat-gauge-current").textContent).toContain("未取得");
    expect(within(screen.getByTestId("stat-gauge-row-a")).queryByTestId("stat-gauge-marker")).toBeNull();
  });

  it("ゲージの右端は現在値と旧新の全目標の最大×1.1で、0以下や非有限値でも NaN を出さない", () => {
    expect(gaugeMaximum([100, 150, null, Number.NaN, 200])).toBeCloseTo(220);
    expect(gaugeMaximum([0, -5])).toBe(1);
    expect(gaugeMaximum([])).toBe(1);
    expect(gaugePercent(Number.NaN, 10)).toBe(0);
    expect(gaugePercent(5, 0)).toBe(0);
    expect(gaugePercent(50, 10)).toBe(100);
  });

  it("旧目標が新目標より高くても、全目印と現在値が範囲内に収まる", () => {
    const current = comparison("speed", 150, [120, 134, 143], undefined, "");
    const base = comparison("speed", 150, [150, 160, 175], undefined, "");
    renderGauge({ comparisons: [current], baseComparisons: [base] });
    const row = screen.getByTestId("stat-gauge-row-speed");
    const marks = [...within(row).getAllByTestId("stat-gauge-mark"), ...within(row).getAllByTestId("stat-gauge-base-mark"), within(row).getByTestId("stat-gauge-marker")];
    expect(marks).toHaveLength(7);
    for (const mark of marks) {
      const left = leftPercent(mark);
      expect(Number.isFinite(left)).toBe(true);
      expect(left).toBeGreaterThanOrEqual(0);
      expect(left).toBeLessThanOrEqual(100);
    }
    // 右端は旧厳選175×1.1。旧厳選の目印は100%未満に描かれる。
    expect(Math.max(...within(row).getAllByTestId("stat-gauge-base-mark").map(leftPercent))).toBeCloseTo((175 / 192.5) * 100);
    expect(within(row).getByTestId("stat-gauge-bar").getAttribute("aria-hidden")).toBe("true");
  });
});

describe("A2 目標の変更と達成の受け渡し", () => {
  beforeEach(() => window.localStorage.setItem("starrail-build-advisor.language", "ja"));
  afterEach(() => cleanup());

  it("変更前と差があるキーだけ旧目標を点線と文字で示し、新しく加わったキーには出さない", () => {
    const changed = comparison("critDmg", 131.6, [140, 160, 190]);
    const added = comparison("speed", 120, [110, 120, 130], undefined, "");
    const unchanged = comparison("critRate", 70, [60, 70, 80]);
    const base = [comparison("critDmg", 131.6, [130, 150, 180]), comparison("critRate", 70, [60, 70, 80])];
    expect(changedBaseTargets(changed, base)).toEqual({ "妥協": 130, "目標": 150, "厳選": 180 });
    expect(changedBaseTargets(added, base)).toBeNull();
    expect(changedBaseTargets(unchanged, base)).toBeNull();

    renderGauge({ comparisons: [changed, added, unchanged], baseComparisons: base });
    const changedRow = screen.getByTestId("stat-gauge-row-critDmg");
    expect(within(changedRow).getAllByTestId("stat-gauge-base-mark")).toHaveLength(3);
    expect(within(within(changedRow).getByTestId("stat-gauge-tier-目標")).getByText("変更前 150%")).toBeTruthy();
    expect(within(screen.getByTestId("stat-gauge-row-speed")).queryAllByTestId("stat-gauge-base-mark")).toHaveLength(0);
    expect(within(screen.getByTestId("stat-gauge-row-critRate")).queryAllByTestId("stat-gauge-base-mark")).toHaveLength(0);
  });

  it("達成状態はページが渡した achieved をそのまま表示し、ゲージ側で再判定しない", () => {
    // 表示桁より細かい誤差を許容するページ側の判定（119.39999999999999 >= 119.4）を尊重する。
    const nearBoundary = comparison("energyRegen", 119.39999999999999, [110, 119.4, 130], { "妥協": true, "目標": true, "厳選": false });
    renderGauge({ comparisons: [nearBoundary] });
    const goal = screen.getByTestId("stat-gauge-tier-目標");
    expect(within(goal).getByText("達成")).toBeTruthy();
    expect(screen.getByTestId("stat-gauge-met").textContent).toBe("1 / 1");
    expect(screen.getByTestId("stat-gauge-tier").textContent).toBe("目標");
  });
});

describe("A3 次の強化", () => {
  const recommendations = [
    { key: "critDmg", label: "会心ダメージ", unit: "%", current: 131.6, target: 150, deficit: 18.4, priority: "優先" as const, rationale: "目標 150% まであと 18.4%" },
    { key: "speed", label: "速度", unit: "", current: 120, target: 134, deficit: 14, priority: "次点" as const, rationale: "目標 134 まであと 14" },
  ];
  const equipmentActions = [{ recommendationKey: "critDmg", action: "主ステータスを変更" as const, slot: "IV", desiredStat: "会心ダメ", reason: "IV を会心ダメへ変える。" }];
  const renderUpgrades = (props: { recommendations?: typeof recommendations; statsUnavailable?: boolean; hasComparisons?: boolean } = {}) => render(
    <LanguageProvider>
      <UpgradePriorities
        recommendations={recommendations}
        equipmentActions={equipmentActions}
        statsUnavailable={false}
        hasComparisons
        rationale={(item) => item.rationale}
        priorityLabel={(priority) => priority}
        actionLabel={(action) => action}
        actionSlotLabel={(action) => action.slot}
        actionReason={(action) => action.reason}
        {...props}
      />
    </LanguageProvider>,
  );

  beforeEach(() => window.localStorage.setItem("starrail-build-advisor.language", "ja"));
  afterEach(() => cleanup());

  it("順位・不足量・理由を渡された順で出し、装備提案は初期閉の details で開ける", () => {
    renderUpgrades();
    const items = within(screen.getByTestId("upgrade-priorities")).getAllByRole("listitem");
    expect(items.map((item) => item.querySelector("h4")?.textContent)).toEqual(["会心ダメージ", "速度"]);
    expect(within(items[0]).getByText("-18.4%")).toBeTruthy();
    expect(within(items[0]).getByText("目標 150% まであと 18.4%")).toBeTruthy();
    expect(within(items[1]).getByText("-14")).toBeTruthy();

    const details = items[0].querySelector("details")!;
    expect(details.open).toBe(false);
    expect(details.querySelector("summary")?.textContent).toContain("IV：会心ダメ");
    fireEvent.click(details.querySelector("summary")!);
    details.open = true;
    expect(within(details).getByText("IV を会心ダメへ変える。")).toBeTruthy();
    expect(items[1].querySelector("details")).toBeNull();
  });

  it("算出不能・全達成・未登録では現行と同じ文言を出す", () => {
    renderUpgrades({ statsUnavailable: true });
    expect(screen.getByText(/最終ステータスを算出できないため/)).toBeTruthy();
    cleanup();
    renderUpgrades({ recommendations: [] });
    expect(screen.getByText(/すべて目標水準に到達しています/)).toBeTruthy();
    cleanup();
    renderUpgrades({ recommendations: [], hasComparisons: false });
    expect(screen.getByText(/比較可能な固定目標値が登録されていません/)).toBeTruthy();
  });
});
