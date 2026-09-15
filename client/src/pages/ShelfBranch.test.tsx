// @vitest-environment jsdom
import { LanguageProvider } from "@/contexts/LanguageContext";
import { act, cleanup, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import React from "react";
import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import CharacterCatalog from "./CharacterCatalog";

/** B1〜B3: 表示キー catalogShelf の分岐。図鑑の選択・URL・フォーカスと、C/D との組み合わせを確かめる。 */

const text = (value: string) => ({ ja: value, en: value, "zh-CN": value });
const party = {
  gameVersion: "3.1", dataAsOf: "2026-08-25", updatedAt: "2026-08-26",
  options: [{
    id: "plan", rank: 1, title: text("標準"),
    members: [{ name: text("エレン"), role: text("主力") }, { name: text("ライカン"), role: text("支援") }, { name: text("ソウカク"), role: text("支援") }],
    synergy: [text("相性")], targetChanges: [], targetSummary: text("要約"), gameVersion: "3.1", dataAsOf: "2026-08-25", updatedAt: "2026-08-26",
    sourceLabel: text("公開ガイド"), sourceUrl: "https://example.com/plan", communitySources: [],
  }],
};
const reference = (name: string, withTargets = true) => ({
  game: "zzz", name, status: "reviewed", batch: 3,
  guide: {
    headline: `${name}の検証`, relicSet: "—", planarSet: "—", mainStats: [], sourceLabel: "検証用の出典", updatedAt: "2026-09-01",
    targets: withTargets ? [{ key: "critDmg", label: "会心ダメージ", unit: "%", targets: { "厳選": 180, "目標": 150, "妥協": 130 } }] : [],
  },
  partyRecommendations: party,
  constellations: { rankLabel: text("心象映画"), acquiredRank: 0, dataStatus: "preparing", effects: [] },
});
const catalogData = {
  total: 4, reviewed: 3,
  games: {
    hsr: [{ game: "hsr", name: "ホタル", status: "reviewed", batch: 5 }],
    genshin: [],
    zzz: [
      { game: "zzz", name: "エレン", status: "reviewed", batch: 3 },
      { game: "zzz", name: "ライカン", status: "pending", batch: null },
      { game: "zzz", name: "ソウカク", status: "reviewed", batch: 12 },
    ],
  },
};

type RefMode = "ok" | "empty-targets" | "loading" | "error" | "missing";
const mocks = vi.hoisted(() => ({
  variants: {} as Record<string, string>,
  catalog: { data: undefined as unknown, isSuccess: false, isError: false, isLoading: false, refetch: (() => undefined) as () => unknown },
  refMode: "ok" as RefMode,
  refEnabled: [] as string[],
  refRefetch: (() => undefined) as () => unknown,
}));
vi.mock("@/contexts/DisplaySettingsContext", () => ({ useDisplayVariant: (key: string) => mocks.variants[key] ?? "legacy" }));
vi.mock("@/lib/trpc", () => ({
  trpc: {
    build: {
      referenceCatalog: { useQuery: () => mocks.catalog },
      reference: {
        useQuery: (input: { name: string }, options: { enabled?: boolean }) => {
          const idle = { data: undefined, error: null, isFetching: false, isLoading: false, refetch: mocks.refRefetch };
          if (!options.enabled) return idle;
          mocks.refEnabled.push(input.name);
          if (mocks.refMode === "loading") return { ...idle, isFetching: true, isLoading: true };
          if (mocks.refMode === "error") return { ...idle, error: { message: "取得失敗" } };
          if (mocks.refMode === "missing") return { ...idle, data: null };
          return { ...idle, data: reference(input.name, mocks.refMode === "ok") };
        },
      },
    },
  },
}));

const ready = () => ({ data: catalogData, isSuccess: true, isError: false, isLoading: false, refetch: vi.fn() });
const renderCatalog = (url: string) => {
  window.history.replaceState({}, "", url);
  return render(<LanguageProvider><CharacterCatalog /></LanguageProvider>);
};
const dialog = () => screen.queryByRole("dialog");
const cardNames = () => within(screen.getByTestId("catalog-shelf-cards")).getAllByRole("button").map((button) => button.getAttribute("data-shelf-card"));
const params = () => new URLSearchParams(window.location.search);

describe("表示キー catalogShelf の分岐", () => {
  beforeAll(() => { Element.prototype.scrollIntoView = vi.fn(); });
  beforeEach(() => {
    window.localStorage.setItem("starrail-build-advisor.language", "ja");
    mocks.variants = { catalogShelf: "shelf" };
    mocks.catalog = ready();
    mocks.refMode = "ok";
    mocks.refEnabled = [];
    mocks.refRefetch = vi.fn();
  });
  afterEach(() => cleanup());

  it("B1 character なしは未選択でシートを開かず、詳細を取得しない", () => {
    renderCatalog("/characters?game=zzz");
    expect(cardNames()).toEqual(["エレン", "ライカン", "ソウカク"]);
    expect(dialog()).toBeNull();
    expect(mocks.refEnabled).toHaveLength(0);
    expect(params().has("character")).toBe(false);
  });

  it("B1 正しい直リンクは選択状態でシートを開き、不正な直リンクは URL から消して案内を出す", () => {
    const valid = renderCatalog("/characters?game=zzz&character=ソウカク");
    expect(screen.getByRole("dialog", { name: "ソウカク" })).toBeTruthy();
    valid.unmount();

    renderCatalog("/characters?game=zzz&character=存在しない&ref=x#top");
    expect(dialog()).toBeNull();
    expect(screen.getByRole("status").textContent).toBe("該当キャラクターが見つかりません。");
    expect(params().has("character")).toBe(false);
    expect(params().get("game")).toBe("zzz");
    expect(params().get("ref")).toBe("x");
    expect(window.location.hash).toBe("#top");
  });

  it("B1 一覧の取得中は不正と断定せず、失敗時は再試行できる", () => {
    mocks.catalog = { data: undefined, isSuccess: false, isError: false, isLoading: true, refetch: vi.fn() };
    const loading = renderCatalog("/characters?game=zzz&character=存在しない");
    expect(screen.queryByRole("status")).toBeNull();
    expect(params().get("character")).toBe("存在しない");
    loading.unmount();

    const refetch = vi.fn();
    mocks.catalog = { data: undefined, isSuccess: false, isError: true, isLoading: false, refetch };
    renderCatalog("/characters?game=zzz");
    expect(screen.getByText("キャラクター一覧を取得できませんでした。")).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "再試行" }));
    expect(refetch).toHaveBeenCalledTimes(1);
  });

  it("B1 精査状態・バッチ・名前の AND 絞り込みと 0件、バッチ順の並び", () => {
    renderCatalog("/characters?game=zzz");
    fireEvent.change(screen.getByLabelText("並び順"), { target: { value: "batch" } });
    expect(cardNames()).toEqual(["ソウカク", "エレン", "ライカン"]);
    expect([...(screen.getByLabelText("バッチ") as HTMLSelectElement).options].map((option) => option.value)).toEqual(["all", "12", "3"]);
    fireEvent.change(screen.getByLabelText("精査状態"), { target: { value: "reviewed" } });
    fireEvent.change(screen.getByLabelText("バッチ"), { target: { value: "3" } });
    expect(cardNames()).toEqual(["エレン"]);
    fireEvent.change(screen.getByPlaceholderText("キャラクター名を検索"), { target: { value: "ソウ" } });
    expect(within(screen.getByTestId("catalog-shelf-cards")).queryAllByRole("button")).toHaveLength(0);
    expect(screen.getByText("一致するキャラクターがありません。")).toBeTruthy();
  });

  it("B2 カードで開いて閉じると character だけを消し、開いたカードへフォーカスを戻す。検索・絞り込みでは詳細を変えない", async () => {
    renderCatalog("/characters?game=zzz&ref=x");
    fireEvent.click(screen.getByRole("button", { name: /エレン/ }));
    expect(params().get("character")).toBe("エレン");
    fireEvent.change(screen.getByPlaceholderText("キャラクター名を検索"), { target: { value: "ソウ" } });
    expect(screen.getByRole("dialog", { name: "エレン" })).toBeTruthy();
    fireEvent.change(screen.getByPlaceholderText("キャラクター名を検索"), { target: { value: "" } });

    fireEvent.click(within(dialog()!).getByRole("button", { name: "閉じる" }));
    expect(dialog()).toBeNull();
    expect(params().has("character")).toBe(false);
    expect(params().get("ref")).toBe("x");
    await waitFor(() => expect(document.activeElement?.getAttribute("data-shelf-card")).toBe("エレン"));

    fireEvent.click(screen.getByRole("button", { name: /ソウカク/ }));
    fireEvent.keyDown(dialog()!, { key: "Escape" });
    expect(dialog()).toBeNull();
    await waitFor(() => expect(document.activeElement?.getAttribute("data-shelf-card")).toBe("ソウカク"));
  });

  it("B2 直リンクで開いた詳細や、開いたカードが絞り込みで消えた場合は、検索入力へフォーカスを戻す", async () => {
    const direct = renderCatalog("/characters?game=zzz&character=ライカン");
    fireEvent.click(within(dialog()!).getByRole("button", { name: "閉じる" }));
    await waitFor(() => expect(document.activeElement).toBe(screen.getByPlaceholderText("キャラクター名を検索")));
    direct.unmount();

    renderCatalog("/characters?game=zzz");
    fireEvent.click(screen.getByRole("button", { name: /エレン/ }));
    fireEvent.change(screen.getByPlaceholderText("キャラクター名を検索"), { target: { value: "ソウ" } });
    fireEvent.click(within(dialog()!).getByRole("button", { name: "閉じる" }));
    await waitFor(() => expect(document.activeElement).toBe(screen.getByPlaceholderText("キャラクター名を検索")));
  });

  it("B2 ゲーム変更はシートを閉じて選択・検索・絞り込みをリセットし、並び順は保つ", async () => {
    renderCatalog("/characters?game=zzz&character=エレン");
    fireEvent.change(screen.getByLabelText("並び順"), { target: { value: "batch" } });
    fireEvent.change(screen.getByLabelText("精査状態"), { target: { value: "pending" } });
    fireEvent.change(screen.getByPlaceholderText("キャラクター名を検索"), { target: { value: "ラ" } });
    fireEvent.click(screen.getByRole("button", { name: "HSR", hidden: true }));
    expect(dialog()).toBeNull();
    expect((screen.getByLabelText("精査状態") as HTMLSelectElement).value).toBe("all");
    expect((screen.getByPlaceholderText("キャラクター名を検索") as HTMLInputElement).value).toBe("");
    expect((screen.getByLabelText("並び順") as HTMLSelectElement).value).toBe("batch");
    expect(cardNames()).toEqual(["ホタル"]);
    expect(params().get("game")).toBe("hsr");
    expect(params().has("character")).toBe(false);
  });

  it("B2 legacy↔shelf の切替は有効な選択を引き継ぎ、shelf で未選択なら legacy は先頭を選ぶ", async () => {
    mocks.variants = {};
    const view = renderCatalog("/characters?game=zzz&character=ソウカク");
    expect(screen.getByRole("heading", { level: 2, name: "ソウカク" })).toBeTruthy();
    mocks.variants = { catalogShelf: "shelf" };
    view.rerender(<LanguageProvider><CharacterCatalog /></LanguageProvider>);
    expect(screen.getByRole("dialog", { name: "ソウカク" })).toBeTruthy();
    fireEvent.click(within(dialog()!).getByRole("button", { name: "閉じる" }));
    mocks.variants = {};
    view.rerender(<LanguageProvider><CharacterCatalog /></LanguageProvider>);
    expect(dialog()).toBeNull();
    expect(screen.getByRole("heading", { level: 2, name: "エレン" })).toBeTruthy();
    expect(params().get("character")).toBe("エレン");
  });

  it("B2 詳細の読込中・失敗（同じ query の再試行）・対象なしをシート内に出す", async () => {
    mocks.refMode = "loading";
    const loading = renderCatalog("/characters?game=zzz&character=エレン");
    expect(within(dialog()!).getByText("読み込み中")).toBeTruthy();
    loading.unmount();

    mocks.refMode = "error";
    const failed = renderCatalog("/characters?game=zzz&character=エレン");
    fireEvent.click(within(dialog()!).getByRole("button", { name: "再試行" }));
    expect(mocks.refRefetch).toHaveBeenCalledTimes(1);
    failed.unmount();

    mocks.refMode = "missing";
    renderCatalog("/characters?game=zzz&character=エレン");
    expect(within(dialog()!).getByText("このキャラクターの詳細はありません。")).toBeTruthy();
  });

  describe("B3 shelf × formation / stepper", () => {
    for (const [formation, stepper] of [["legacy", "legacy"], ["formation", "legacy"], ["legacy", "stepper"], ["formation", "stepper"]] as const) {
      it(`隊列=${formation}・凸=${stepper}: 詳細は1つだけで、4つのジャンプ・出典・空の目標・準備中を保つ`, () => {
        mocks.variants = { catalogShelf: "shelf", partyFormation: formation, progressionStepper: stepper };
        mocks.refMode = "empty-targets";
        renderCatalog("/characters?game=zzz&character=エレン");
        const sheet = dialog()!;
        expect(document.querySelectorAll("#catalog-section-build")).toHaveLength(1);
        expect(sheet.querySelector("#catalog-section-build")).not.toBeNull();
        const jumps = within(within(sheet).getByRole("navigation", { name: "詳細の項目へ移動" })).getAllByRole("button");
        expect(jumps.map((button) => button.textContent)).toEqual(["推奨ビルド", "ステータス", "推奨PT", "凸"]);
        act(() => { fireEvent.click(jumps[3]); });
        expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
        expect(sheet.textContent).toContain("情報基準: 検証用の出典");
        expect(sheet.textContent).toContain("固定の数値目標は設定していません");
        expect(sheet.textContent).toContain("6段階効果データは準備中です");
        expect(within(sheet).queryAllByRole("tab").length > 0).toBe(formation === "formation" || stepper === "stepper");
      });
    }
  });
});
