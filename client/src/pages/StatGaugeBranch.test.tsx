// @vitest-environment jsdom
import { LanguageProvider } from "@/contexts/LanguageContext";
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Home from "./Home";

/** A2・A3: 表示キー statGauge の分岐。算出はページの既存経路のまま、表示だけが変わることを確かめる。 */

const text = (value: string) => ({ ja: value, en: value, "zh-CN": value });
const partyOption = (id: string, rank: 1 | 2, title: string, targetChanges: unknown[]) => ({
  id, rank, title: text(title),
  members: [{ name: text("エレン"), role: text("主力") }, { name: text("ライカン"), role: text("支援") }],
  synergy: [text(`${title}の相性`)], targetChanges, targetSummary: text(`${title}の目標`),
  gameVersion: "3.1", dataAsOf: "2026-08-25", updatedAt: "2026-08-25",
  sourceLabel: text("公開ガイド"), sourceUrl: `https://example.com/${id}`, communitySources: [],
});

const lookupResult = {
  player: { uid: "1300000001", name: "検証用", level: 60 },
  cached: false,
  fetchedAt: "2026-09-13T08:00:00.000Z",
  characters: [{
    id: "eren", name: "エレン", level: 60, rank: 0, portrait: null, element: "氷", elementColor: null, path: "強攻",
    lightCone: null, relics: [], allStats: [{ name: "会心ダメージ", display: "131.6%", icon: null }],
    guide: { headline: "会心ダメージを強化する。", relicSet: "—", planarSet: "—", mainStats: [], targetContext: "開幕時の画面値を基準にする。", dataAsOf: "2026-08-25", updatedAt: "2026-08-25", sourceLabel: "公開ガイド" },
    comparisons: [{ key: "critDmg", label: "会心ダメージ", unit: "%", current: 131.6, currentDisplay: "131.6%", targets: { "厳選": 180, "目標": 150, "妥協": 130 }, achieved: { "厳選": false, "目標": false, "妥協": true } }],
    recommendations: [],
    equipmentActions: [{ recommendationKey: "critDmg", statLabel: "会心ダメージ", action: "主ステータスを変更", slot: "IV", equippedName: "ドライバディスク 4", currentMain: "HP%", desiredStat: "会心ダメ", reason: "IVをHP%から会心ダメージへ変える。" }],
    partyRecommendations: {
      gameVersion: "3.1", dataAsOf: "2026-08-25", updatedAt: "2026-08-25",
      options: [
        partyOption("raise", 1, "会心・引上げ", [{ key: "critDmg", label: text("会心ダメージ"), unit: "%", targets: { "厳選": 190, "目標": 160, "妥協": 140 }, reason: text("編成で会心ダメージの要求が上がる。") }]),
        partyOption("plain", 2, "標準", []),
      ],
    },
  }],
};

const mocks = vi.hoisted(() => ({ variants: {} as Record<string, string> }));
vi.mock("@/contexts/DisplaySettingsContext", () => ({ useDisplayVariant: (key: string) => mocks.variants[key] ?? "legacy" }));
vi.mock("@/lib/uidHistory", () => ({ isValidUidForGame: () => true, loadLastUid: () => "", saveLastUid: () => undefined }));
vi.mock("@/lib/trpc", () => ({
  trpc: { build: { lookup: { useQuery: (_input: unknown, options: { enabled?: boolean }) => ({ data: options.enabled ? lookupResult : undefined, isFetching: false, error: null }) } } },
}));

const lookup = () => {
  window.history.replaceState({}, "", "/?game=zzz&uid=1300000001&character=eren");
  render(<LanguageProvider><Home /></LanguageProvider>);
  fireEvent.click(screen.getByRole("button", { name: "照会する" }));
};

describe("表示キー statGauge の分岐（UID照会）", () => {
  beforeEach(() => {
    window.localStorage.setItem("starrail-build-advisor.language", "ja");
    mocks.variants = {};
  });
  afterEach(() => cleanup());

  it("A3 legacy では現行の表と強化カードを出し、ゲージは出さない", () => {
    lookup();
    expect(screen.getAllByRole("table").length).toBeGreaterThan(0);
    expect(screen.queryByTestId("stat-gauge")).toBeNull();
    expect(screen.queryByTestId("upgrade-priorities")).toBeNull();
    expect(screen.getByText("目標 160% まであと 28.4%")).toBeTruthy();
    expect(screen.getByText("IV：会心ダメ")).toBeTruthy();
  });

  it("A3 gauge では表を出さず、強化提案の順位・不足量・理由は現行と同じ文言で出す", () => {
    mocks.variants = { statGauge: "gauge" };
    lookup();
    expect(screen.queryAllByRole("table")).toHaveLength(0);
    expect(screen.getByTestId("stat-gauge")).toBeTruthy();
    const upgrades = screen.getByTestId("upgrade-priorities");
    expect(within(upgrades).getByText("目標 160% まであと 28.4%")).toBeTruthy();
    expect(within(upgrades).getByText("-28.4%")).toBeTruthy();
    const details = upgrades.querySelector("details")!;
    expect(details.open).toBe(false);
    expect(details.querySelector("summary")?.textContent).toContain("IV：会心ダメ");
    // データ基準日・出典・個別の前提は既存の外枠に残る。
    expect(screen.getByText("開幕時の画面値を基準にする。")).toBeTruthy();
    expect(screen.getByText("ガイド基準日", { exact: false }).parentElement?.textContent).toContain("2026-08-25 JST");
  });

  it("A2 推奨PTの目標変更をゲージへ反映し、PTを切り替えるとゲージも更新する", () => {
    mocks.variants = { statGauge: "gauge" };
    lookup();
    const row = () => screen.getByTestId("stat-gauge-row-critDmg");
    expect(within(within(row()).getByTestId("stat-gauge-tier-目標")).getByText("160%")).toBeTruthy();
    expect(within(within(row()).getByTestId("stat-gauge-tier-目標")).getByText("変更前 150%")).toBeTruthy();
    expect(within(row()).getAllByTestId("stat-gauge-base-mark")).toHaveLength(3);
    expect(screen.getByTestId("stat-gauge-tier").textContent).toBe("妥協未満");

    fireEvent.click(screen.getByRole("button", { name: /標準/ }));
    expect(within(within(row()).getByTestId("stat-gauge-tier-目標")).getByText("150%")).toBeTruthy();
    expect(within(row()).queryAllByTestId("stat-gauge-base-mark")).toHaveLength(0);
    expect(screen.getByTestId("stat-gauge-tier").textContent).toBe("妥協");
    expect(within(screen.getByTestId("upgrade-priorities")).getByText("目標 150% まであと 18.4%")).toBeTruthy();
  });
});
