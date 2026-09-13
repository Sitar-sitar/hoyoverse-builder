// @vitest-environment jsdom
import { LanguageProvider } from "@/contexts/LanguageContext";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import CharacterCatalog from "./CharacterCatalog";
import Home from "./Home";

/** T8: 表示キー progressionStepper の分岐。legacy では現行の凸セクション、stepper では縦タイムラインを出す。 */

const text = (value: string) => ({ ja: value, en: value, "zh-CN": value });
const constellations = {
  rankLabel: { ja: "心象映画", en: "Mindscape Cinema", "zh-CN": "心象电影" },
  acquiredRank: 2,
  dataStatus: "curated",
  gameVersion: "3.1",
  dataAsOf: "2026-08-25",
  updatedAt: "2026-08-25",
  sourceLabel: text("公開ガイド"),
  sourceUrl: "https://example.com/guide",
  effects: [1, 2, 3, 4, 5, 6].map((level) => ({ level, name: text(`映画${level}`), description: text(`映画${level}の効果。`) })),
  activeTargetChanges: [],
};

const lookupResult = {
  player: { uid: "1300000001", name: "検証用", level: 60 },
  cached: false,
  fetchedAt: "2026-09-13T08:00:00.000Z",
  characters: [{
    id: "miyabi", name: "星見雅", level: 60, rank: 2, portrait: null, element: "氷", elementColor: null, path: "強攻",
    lightCone: null, relics: [], allStats: [], comparisons: [], recommendations: [], equipmentActions: [],
    guide: { headline: "検証用", relicSet: "—", planarSet: "—", mainStats: [] },
    constellations,
  }],
};

const reference = {
  game: "zzz", name: "星見雅", status: "reviewed", batch: 3,
  guide: { headline: "検証用", relicSet: "—", planarSet: "—", mainStats: [], targets: [] },
  partyRecommendations: { gameVersion: "3.1", dataAsOf: "2026-08-25", updatedAt: "2026-08-25", options: [] },
  constellations,
};

const mocks = vi.hoisted(() => ({ variant: "legacy" }));

vi.mock("@/contexts/DisplaySettingsContext", () => ({ useDisplayVariant: () => mocks.variant }));
vi.mock("@/lib/uidHistory", () => ({ isValidUidForGame: () => true, loadLastUid: () => "", saveLastUid: () => undefined }));
vi.mock("@/lib/trpc", () => ({
  trpc: {
    build: {
      lookup: { useQuery: (_input: unknown, options: { enabled?: boolean }) => ({ data: options.enabled ? lookupResult : undefined, isFetching: false, error: null }) },
      referenceCatalog: { useQuery: () => ({ data: { total: 1, reviewed: 1, games: { hsr: [], genshin: [], zzz: [{ game: "zzz", name: "星見雅", status: "reviewed", batch: 3 }] } }, isLoading: false }) },
      reference: { useQuery: () => ({ data: reference, isFetching: false, error: null }) },
    },
  },
}));

describe("T8 凸セクションの表示分岐", () => {
  beforeEach(() => {
    window.localStorage.setItem("starrail-build-advisor.language", "ja");
  });
  afterEach(() => cleanup());

  describe("UID照会", () => {
    const lookup = () => {
      window.history.replaceState({}, "", "/?game=zzz&uid=1300000001&character=miyabi");
      render(<LanguageProvider><Home /></LanguageProvider>);
      fireEvent.click(screen.getByRole("button", { name: "照会する" }));
    };

    it("legacy では解放済みカードと未解放の折りたたみを出す", () => {
      mocks.variant = "legacy";
      lookup();
      expect(screen.getByText("解放済み / 心象映画 1")).toBeTruthy();
      expect(screen.getByText("未解放の効果を表示")).toBeTruthy();
      expect(screen.queryByTestId("progression-stepper")).toBeNull();
    });

    it("stepper では縦タイムラインを出し、現行のカードは出さない", () => {
      mocks.variant = "stepper";
      lookup();
      expect(screen.getByTestId("progression-stepper").dataset.symbol).toBe("film");
      expect(screen.getByRole("tab", { selected: true }).textContent).toContain("心象映画 3 / 次に解放");
      expect(screen.queryByText("未解放の効果を表示")).toBeNull();
      expect(screen.getByRole("heading", { name: "凸効果・目標補正" })).toBeTruthy();
    });
  });

  describe("キャラ図鑑", () => {
    const openCatalog = () => {
      window.history.replaceState({}, "", "/characters?game=zzz&character=星見雅");
      render(<LanguageProvider><CharacterCatalog /></LanguageProvider>);
    };

    it("legacy では6段のカードを出す", () => {
      mocks.variant = "legacy";
      openCatalog();
      expect(screen.getByText("映画6の効果。")).toBeTruthy();
      expect(screen.queryByTestId("progression-stepper")).toBeNull();
    });

    it("stepper では縦タイムラインを出し、1段目を選ぶ", () => {
      mocks.variant = "stepper";
      openCatalog();
      expect(screen.getByTestId("progression-stepper")).toBeTruthy();
      expect(screen.getByRole("tab", { selected: true }).textContent).toContain("心象映画 1");
      expect(screen.queryByText("映画6の効果。")).toBeNull();
    });
  });
});
