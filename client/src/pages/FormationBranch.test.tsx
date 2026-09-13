// @vitest-environment jsdom
import { LanguageProvider } from "@/contexts/LanguageContext";
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import CharacterCatalog from "./CharacterCatalog";
import Home from "./Home";

/** C2・C3: 表示キー partyFormation の分岐。算出は既存経路のまま、表示と図鑑の選択だけが変わることを確かめる。 */

const text = (value: string) => ({ ja: value, en: value, "zh-CN": value });
const option = (id: string, rank: 1 | 2, title: string, targetChanges: unknown[]) => ({
  id, rank, title: text(title),
  members: [{ name: text("エレン"), role: text("主力") }, { name: text("ライカン"), role: text("支援") }, { name: text("ソウカク"), role: text("支援") }],
  synergy: [text(`${title}の相性`)], targetChanges, targetSummary: text(`${title}の要約`),
  gameVersion: "3.1", dataAsOf: "2026-08-25", updatedAt: "2026-08-26",
  sourceLabel: text("公開ガイド"), sourceUrl: `https://example.com/${id}`, communitySources: [],
});
const change = (key: string, label: string, goal: number) => ({ key, label: text(label), unit: "%", targets: { "厳選": goal + 20, "目標": goal, "妥協": goal - 10 }, reason: text(`${label}の理由`) });
const partySet = {
  gameVersion: "3.1", dataAsOf: "2026-08-25", updatedAt: "2026-08-26",
  options: [option("raise", 1, "引上げ", [change("critDmg", "会心ダメージ", 160), change("critRate", "会心率", 80)]), option("plain", 2, "標準", [])],
};

const lookupResult = {
  player: { uid: "1300000001", name: "検証用", level: 60 },
  cached: false,
  fetchedAt: "2026-09-13T08:00:00.000Z",
  characters: [{
    id: "eren", name: "エレン", level: 60, rank: 1, portrait: null, element: "氷", elementColor: null, path: "強攻",
    lightCone: null, relics: [], allStats: [],
    guide: { headline: "検証用", relicSet: "—", planarSet: "—", mainStats: [] },
    comparisons: [
      { key: "critDmg", label: "会心ダメージ", unit: "%", current: 131.6, currentDisplay: "131.6%", targets: { "厳選": 180, "目標": 150, "妥協": 130 }, achieved: { "厳選": false, "目標": false, "妥協": true } },
      { key: "critRate", label: "会心率", unit: "%", current: 72, currentDisplay: "72%", targets: { "厳選": 85, "目標": 75, "妥協": 65 }, achieved: { "厳選": false, "目標": false, "妥協": true } },
    ],
    recommendations: [], equipmentActions: [],
    partyRecommendations: partySet,
    // 凸の目標補正は PT の後に適用され、同じキーでは凸が優先される（既存の契約）。
    constellations: { rankLabel: text("心象映画"), acquiredRank: 1, dataStatus: "preparing", gameVersion: "3.1", dataAsOf: "2026-08-25", updatedAt: "2026-08-25", sourceLabel: text("公開ガイド"), sourceUrl: "https://example.com/m", effects: [], activeTargetChanges: [change("critRate", "会心率", 70)] },
  }],
};

const reference = (name: string, goal: number) => ({
  game: "zzz", name, status: "reviewed", batch: 3,
  guide: { headline: `${name}の検証`, relicSet: "—", planarSet: "—", mainStats: [], targets: [{ key: "critDmg", label: "会心ダメージ", unit: "%", targets: { "厳選": goal + 30, "目標": goal, "妥協": goal - 20 } }] },
  partyRecommendations: partySet,
  constellations: { rankLabel: text("心象映画"), acquiredRank: 0, dataStatus: "preparing", effects: [] },
});

const mocks = vi.hoisted(() => ({ variants: {} as Record<string, string> }));
vi.mock("@/contexts/DisplaySettingsContext", () => ({ useDisplayVariant: (key: string) => mocks.variants[key] ?? "legacy" }));
vi.mock("@/lib/uidHistory", () => ({ isValidUidForGame: () => true, loadLastUid: () => "", saveLastUid: () => undefined }));
vi.mock("@/lib/trpc", () => ({
  trpc: {
    build: {
      lookup: { useQuery: (_input: unknown, options: { enabled?: boolean }) => ({ data: options.enabled ? lookupResult : undefined, isFetching: false, error: null }) },
      referenceCatalog: { useQuery: () => ({ data: { total: 2, reviewed: 2, games: { hsr: [], genshin: [], zzz: [{ game: "zzz", name: "エレン", status: "reviewed", batch: 3 }, { game: "zzz", name: "ライカン", status: "reviewed", batch: 3 }] } }, isLoading: false }) },
      reference: { useQuery: (input: { name: string }) => ({ data: input.name === "ライカン" ? reference("ライカン", 120) : reference("エレン", 150), isFetching: false, error: null }) },
    },
  },
}));

const partySection = () => screen.getByRole("heading", { name: /おすすめPT編成|推奨PT/ }).closest("section")!;
const selectedTab = () => within(partySection()).getAllByRole("tab").find((tab) => tab.getAttribute("aria-selected") === "true")!;

describe("表示キー partyFormation の分岐", () => {
  beforeEach(() => {
    window.localStorage.setItem("starrail-build-advisor.language", "ja");
    mocks.variants = {};
  });
  afterEach(() => cleanup());

  describe("UID照会", () => {
    const lookup = () => {
      window.history.replaceState({}, "", "/?game=zzz&uid=1300000001&character=eren");
      render(<LanguageProvider><Home /></LanguageProvider>);
      fireEvent.click(screen.getByRole("button", { name: "照会する" }));
    };

    it("C3 legacy は従来の切替ボタンと2列カードで、タブの役割を持たない", () => {
      lookup();
      const section = partySection();
      expect(within(section).queryAllByRole("tab")).toHaveLength(0);
      expect(within(section).getAllByRole("button", { pressed: true })).toHaveLength(1);
      expect(within(section).queryByTestId("party-formation")).toBeNull();
    });

    it("C2 formation の案を切り替えると達成ゲージも更新し、同じキーは凸の補正が優先されたまま", () => {
      mocks.variants = { partyFormation: "formation", statGauge: "gauge" };
      lookup();
      const goalOf = (key: string) => within(within(screen.getByTestId(`stat-gauge-row-${key}`)).getByTestId("stat-gauge-tier-目標")).getAllByText(/%$/)[0].textContent;
      expect(selectedTab().textContent).toContain("引上げ");
      expect(within(partySection()).getAllByRole("tab")).toHaveLength(2);
      expect(goalOf("critDmg")).toBe("160%");
      expect(goalOf("critRate")).toBe("70%");
      // 基礎目標は凸や PT の影響を受けない比較前の値。
      const summaries = [...partySection().querySelectorAll("[data-testid='party-formation-targets'] summary")].map((summary) => summary.textContent);
      expect(summaries).toEqual(["会心ダメージ 基礎目標 150% → 編成目標 160%", "会心率 基礎目標 75% → 編成目標 80%"]);

      fireEvent.click(within(partySection()).getByRole("tab", { name: /標準/ }));
      expect(selectedTab().textContent).toContain("標準");
      expect(goalOf("critDmg")).toBe("150%");
      expect(goalOf("critRate")).toBe("70%");
    });
  });

  describe("キャラ図鑑", () => {
    const openCatalog = () => {
      window.history.replaceState({}, "", "/characters?game=zzz&character=エレン");
      render(<LanguageProvider><CharacterCatalog /></LanguageProvider>);
    };
    const baseGoalCell = () => within(screen.getByRole("table")).getAllByRole("row")[1].querySelectorAll("td")[2].textContent;

    it("C3 legacy は全案の一覧のままで、タブを持たない", () => {
      openCatalog();
      const section = partySection();
      expect(within(section).queryAllByRole("tab")).toHaveLength(0);
      expect(within(section).getAllByText(/^PLAN \d$/)).toHaveLength(2);
    });

    it("C2 formation で案を選んでも基礎目標は変わらず、キャラクターを変えると先頭の案へ戻る", () => {
      mocks.variants = { partyFormation: "formation" };
      openCatalog();
      expect(selectedTab().textContent).toContain("引上げ");
      expect(baseGoalCell()).toBe("150%");

      fireEvent.click(within(partySection()).getByRole("tab", { name: /標準/ }));
      expect(selectedTab().textContent).toContain("標準");
      expect(baseGoalCell()).toBe("150%");

      fireEvent.click(within(screen.getByRole("complementary")).getByRole("button", { name: /ライカン/ }));
      expect(screen.getByRole("heading", { level: 2, name: "ライカン" })).toBeTruthy();
      expect(selectedTab().textContent).toContain("引上げ");
      expect(baseGoalCell()).toBe("120%");
      const summary = partySection().querySelector("[data-testid='party-formation-targets'] summary")?.textContent;
      expect(summary).toBe("会心ダメージ 基礎目標 120% → 編成目標 160%");
    });
  });
});
