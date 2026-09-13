// @vitest-environment jsdom
import { LanguageProvider } from "@/contexts/LanguageContext";
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import React from "react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import ProgressionStepper, { type ProgressionProfile } from "./ProgressionStepper";

const text = (value: string) => ({ ja: value, en: value, "zh-CN": value });

function profile(overrides: Partial<ProgressionProfile> = {}): ProgressionProfile {
  return {
    rankLabel: { ja: "星魂", en: "Eidolon", "zh-CN": "星魂" },
    acquiredRank: 2,
    dataStatus: "curated",
    gameVersion: "3.6",
    dataAsOf: "2026-09-13",
    updatedAt: "2026-09-13",
    sourceLabel: text("公開ガイド"),
    sourceUrl: "https://example.com/guide",
    effects: [1, 2, 3, 4, 5, 6].map((level) => ({
      level,
      name: text(`効果${level}`),
      description: text(`効果${level}の説明。`),
      ...(level === 3 ? { targetChanges: [{ key: "speed", label: text("速度"), unit: "", targets: { "厳選": 150, "目標": 140, "妥協": 130 }, reason: text("星魂3で行動回数が増える。") }] } : {}),
      ...(level === 2 ? { caution: text("戦闘中の条件付き効果。") } : {}),
    })),
    ...overrides,
  };
}

const renderStepper = (props: Partial<React.ComponentProps<typeof ProgressionStepper>> = {}) => render(
  <LanguageProvider>
    <ProgressionStepper game="hsr" tone="dark" mode="lookup" profile={profile()} resetKey="hsr:1" emptyText="準備中です。" footnoteLabels={{ version: "対応バージョン", asOf: "基準日", updated: "最終更新日", source: "効果の参照" }} {...props} />
  </LanguageProvider>,
);
const selectedTab = () => screen.getAllByRole("tab").find((tab) => tab.getAttribute("aria-selected") === "true");

describe("T7 ProgressionStepper（縦のタイムライン）", () => {
  beforeEach(() => window.localStorage.setItem("starrail-build-advisor.language", "ja"));
  afterEach(() => cleanup());

  it("UID照会では次に解放する段を初期選択し、解放状態と目標変更を示す", () => {
    renderStepper();
    const list = screen.getByRole("tablist");
    expect(list.getAttribute("aria-orientation")).toBe("vertical");
    expect(screen.getAllByRole("tab")).toHaveLength(6);
    expect(selectedTab()?.textContent).toContain("星魂 3 / 次に解放");
    expect(screen.getByText("星魂 1 / 解放済み")).toBeTruthy();
    expect(screen.getByText("星魂 6 / 未解放")).toBeTruthy();

    const panel = screen.getByRole("tabpanel");
    expect(panel.getAttribute("aria-labelledby")).toBe(selectedTab()?.id);
    expect(within(panel).getByText("この段で変わる目標")).toBeTruthy();
    expect(within(panel).getByText("速度 目標 140")).toBeTruthy();
    expect(within(screen.getByTestId("progression-node-3")).getByText("目標変更あり")).toBeTruthy();
    expect(screen.getByText("対応バージョン")).toBeTruthy();
  });

  it("選択中の段だけが tab 順に入り、上下キー・Home・End で移動する", () => {
    renderStepper({ footnoteLabels: undefined });
    const list = screen.getByRole("tablist");
    expect(screen.getAllByRole("tab").filter((tab) => tab.tabIndex === 0)).toHaveLength(1);

    fireEvent.keyDown(list, { key: "ArrowDown" });
    expect(selectedTab()?.textContent).toContain("星魂 4");
    expect(document.activeElement).toBe(selectedTab());
    fireEvent.keyDown(list, { key: "Home" });
    expect(selectedTab()?.textContent).toContain("星魂 1");
    fireEvent.keyDown(list, { key: "ArrowUp" });
    expect(selectedTab()?.textContent).toContain("星魂 1");
    fireEvent.keyDown(list, { key: "End" });
    expect(selectedTab()?.textContent).toContain("星魂 6");
  });

  it("未解放の段を選んでも詳細を見るだけで、解放状態は変わらない", () => {
    renderStepper();
    fireEvent.click(screen.getByRole("tab", { name: /星魂 5/ }));
    const panel = screen.getByRole("tabpanel");
    expect(within(panel).getByText("効果5の説明。")).toBeTruthy();
    expect(within(panel).getByText("星魂 5 / 未解放")).toBeTruthy();
    expect(screen.getAllByRole("tab")[2].textContent).toContain("星魂 3 / 次に解放");
    expect(screen.getAllByRole("tab").filter((tab) => tab.textContent?.includes("解放済み"))).toHaveLength(2);
  });

  it("6段すべて解放済みなら6を選び、図鑑では解放状態を出さずに1を選ぶ", () => {
    renderStepper({ profile: profile({ acquiredRank: 6 }) });
    expect(selectedTab()?.textContent).toContain("星魂 6 / 解放済み");
    cleanup();

    renderStepper({ mode: "catalog", tone: "light", footnoteLabels: undefined });
    expect(selectedTab()?.textContent).toContain("星魂 1");
    expect(screen.queryByText(/解放済み|次に解放|未解放/)).toBeNull();
    expect(screen.queryByText("対応バージョン")).toBeNull();
  });

  it("表示中のキャラクターが変わったら初期選択へ戻す", () => {
    const view = renderStepper();
    fireEvent.click(screen.getByRole("tab", { name: /星魂 6/ }));
    expect(selectedTab()?.textContent).toContain("星魂 6");
    view.rerender(
      <LanguageProvider>
        <ProgressionStepper game="hsr" tone="dark" mode="lookup" profile={profile({ acquiredRank: 0 })} resetKey="hsr:2" emptyText="準備中です。" />
      </LanguageProvider>,
    );
    expect(selectedTab()?.textContent).toContain("星魂 1 / 次に解放");
  });

  it("準備中は段を操作不可にし、準備中の文言を出す", () => {
    renderStepper({ profile: profile({ dataStatus: "preparing", effects: [] }) });
    const tabs = screen.getAllByRole("tab");
    expect(tabs).toHaveLength(6);
    expect(tabs.every((tab) => (tab as HTMLButtonElement).disabled)).toBe(true);
    expect(within(screen.getByRole("tabpanel")).getByText("準備中です。")).toBeTruthy();
    expect(screen.queryByText("対応バージョン")).toBeNull();
  });

  it("注意書きを詳細に出す", () => {
    renderStepper({ profile: profile({ acquiredRank: 1 }) });
    expect(within(screen.getByRole("tabpanel")).getByText("戦闘中の条件付き効果。")).toBeTruthy();
  });

  it.each([["hsr", "star"], ["genshin", "constellation"], ["zzz", "film"]] as const)("%s ではゲーム別の記号（%s）を使う", (game, symbol) => {
    renderStepper({ game });
    expect(screen.getByTestId("progression-stepper").dataset.symbol).toBe(symbol);
    expect(screen.getByTestId("progression-node-1").querySelector("svg")).toBeTruthy();
  });
});
