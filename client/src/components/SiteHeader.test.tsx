// @vitest-environment jsdom
import { LanguageProvider } from "@/contexts/LanguageContext";
import CharacterCatalog from "@/pages/CharacterCatalog";
import GuideHistory from "@/pages/GuideHistory";
import Home from "@/pages/Home";
import TranslationFeedback from "@/pages/TranslationFeedback";
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Router } from "wouter";
import PublicCatalogShortcut from "./PublicCatalogShortcut";
import SiteHeader from "./SiteHeader";

/** E1a・E1b: 表示キー siteChrome の分岐。公開4画面のヘッダーと固定ショートカット、ゲーム別アクセントの範囲を確かめる。 */

const BASE = "/hoyoverse-builder";
const idle = { data: undefined, isLoading: false, isFetching: false, isError: false, error: null, refetch: () => undefined };
const mocks = vi.hoisted(() => ({ variants: {} as Record<string, string> }));
vi.mock("@/contexts/DisplaySettingsContext", () => ({ useDisplayVariant: (key: string) => mocks.variants[key] ?? "legacy" }));
vi.mock("@/lib/uidHistory", () => ({ isValidUidForGame: () => false, loadLastUid: () => "", saveLastUid: () => undefined }));
vi.mock("@/lib/trpc", () => ({
  trpc: {
    build: {
      lookup: { useQuery: () => idle },
      referenceCatalog: { useQuery: () => ({ ...idle, data: { total: 0, reviewed: 0, games: { hsr: [], genshin: [], zzz: [] } } }) },
      reference: { useQuery: () => idle },
      guideHistory: { useQuery: () => ({ ...idle, data: { currentBaseline: "2026-09-15", characters: [], siteEvents: [], updateLedger: { total: 0, reviewed: 0, pending: 0, nextBatch: { id: 1, names: [] }, criteria: "" } } }) },
    },
    feedback: { submit: { useMutation: () => ({ mutate: () => undefined, isPending: false }) } },
  },
}));

const pages = [
  { path: "/", search: "?game=genshin", Page: Home, current: "UID照会", game: "genshin" },
  { path: "/characters", search: "?game=zzz", Page: CharacterCatalog, current: "キャラ図鑑", game: "zzz" },
  { path: "/updates", search: "", Page: GuideHistory, current: "更新履歴", game: undefined },
  { path: "/feedback", search: "?source=/updates", Page: TranslationFeedback, current: "翻訳フィードバック", game: undefined },
] as const;

function renderAt(path: string, search: string, node: React.ReactNode) {
  window.history.replaceState({}, "", `${BASE}${path}${search}`);
  return render(<LanguageProvider><Router base={BASE}>{node}</Router></LanguageProvider>);
}

describe("表示キー siteChrome の分岐", () => {
  beforeEach(() => {
    window.localStorage.setItem("starrail-build-advisor.language", "ja");
    mocks.variants = {};
  });
  afterEach(() => cleanup());

  it("E1a unified は公開4画面で共通ヘッダーの現在地を示し、リンクは Pages の base を保ち、管理者は /admin へ向かう", () => {
    mocks.variants = { siteChrome: "unified" };
    for (const { path, search, Page, current } of pages) {
      const view = renderAt(path, search, <Page />);
      const nav = within(screen.getByTestId("site-header")).getByRole("navigation", { name: "サイト内の移動" });
      const links = within(nav).getAllByRole("link");
      expect(links.filter((link) => link.getAttribute("aria-current") === "page").map((link) => link.textContent)).toEqual([current]);
      expect(links.every((link) => link.getAttribute("href")!.startsWith(`${BASE}/`))).toBe(true);
      expect(within(nav).getByRole("link", { name: "管理者" }).getAttribute("href")).toBe(`${BASE}/admin`);
      view.unmount();
    }
  });

  it("E1a legacy は4画面とも従来のヘッダーのままで、共通ヘッダーもゲーム属性も付かない", () => {
    for (const { path, search, Page } of pages) {
      const view = renderAt(path, search, <Page />);
      expect(screen.queryByTestId("site-header")).toBeNull();
      expect(document.querySelector("[data-game]")).toBeNull();
      view.unmount();
    }
  });

  it("E1a 1024px 未満のメニューは開閉でき、Escape で閉じてボタンへフォーカスを戻し、項目を選ぶと閉じる", () => {
    renderAt("/updates", "", <SiteHeader activePage="updates" />);
    const button = screen.getByRole("button", { name: "メニューを開く" });
    const nav = screen.getByRole("navigation", { hidden: true });
    expect(button.getAttribute("aria-controls")).toBe(nav.id);
    expect(button.getAttribute("aria-expanded")).toBe("false");
    fireEvent.click(button);
    expect(button.getAttribute("aria-expanded")).toBe("true");
    expect(button.getAttribute("aria-label")).toBe("メニューを閉じる");
    const link = within(nav).getByRole("link", { name: "キャラ図鑑" });
    link.focus();
    fireEvent.keyDown(link, { key: "Escape" });
    expect(button.getAttribute("aria-expanded")).toBe("false");
    expect(document.activeElement).toBe(button);
    fireEvent.click(button);
    fireEvent.click(within(nav).getByRole("link", { name: "キャラ図鑑" }));
    expect(button.getAttribute("aria-expanded")).toBe("false");
  });

  it("E1b 固定の図鑑ショートカットは unified のときだけ消える", () => {
    const legacy = renderAt("/", "", <PublicCatalogShortcut />);
    expect(screen.getByRole("link", { name: /キャラ図鑑（UID不要）/ })).toBeTruthy();
    legacy.unmount();
    mocks.variants = { siteChrome: "unified" };
    renderAt("/", "", <PublicCatalogShortcut />);
    expect(screen.queryByRole("link", { name: /キャラ図鑑（UID不要）/ })).toBeNull();
  });

  it("E1b ゲームを変えるとアクセントの範囲のゲームが変わり、中立ページには付かない", () => {
    mocks.variants = { siteChrome: "unified" };
    const view = renderAt("/", "?game=genshin", <Home />);
    const frame = () => document.querySelector("[data-site-chrome='unified']")!;
    expect(frame().getAttribute("data-game")).toBe("genshin");
    expect(screen.getByTestId("site-header-game").textContent).toBe("GI / 原神");
    fireEvent.click(screen.getByRole("button", { name: "ZZZ" }));
    expect(frame().getAttribute("data-game")).toBe("zzz");
    expect(screen.getByTestId("site-header-game").textContent).toBe("ZZZ / ゼンレスゾーンゼロ");
    expect(document.body.hasAttribute("data-game")).toBe(false);
    view.unmount();

    for (const { path, search, Page } of pages.slice(2)) {
      const neutral = renderAt(path, search, <Page />);
      expect(document.querySelector("[data-game]")).toBeNull();
      expect(screen.queryByTestId("site-header-game")).toBeNull();
      neutral.unmount();
    }
  });
});
