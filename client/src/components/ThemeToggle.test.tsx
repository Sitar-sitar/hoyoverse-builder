// @vitest-environment jsdom
import { LanguageProvider } from "@/contexts/LanguageContext";
import { THEME_STORAGE_KEY, useTheme } from "@/contexts/ThemeContext";
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeGate } from "../App";
import LanguageSwitcher from "./LanguageSwitcher";

/** E2a・E2b: 表示キー colorTheme。好みと有効テーマの分離、切り替えられる画面、ダーク配色のコントラストを確かめる。 */

const mocks = vi.hoisted(() => ({ variants: {} as Record<string, string> }));
vi.mock("@/contexts/DisplaySettingsContext", () => ({ useDisplayVariant: (key: string) => mocks.variants[key] ?? "legacy" }));
vi.mock("@/_core/hooks/useAuth", () => ({ useAuth: () => ({ isAuthenticated: false, loading: false }) }));

function Probe() {
  const { theme, preference, switchable } = useTheme();
  return <p data-testid="probe">{theme}/{preference}/{String(switchable)}</p>;
}

function setup(path: string) {
  const location = memoryLocation({ path, record: true });
  const view = render(
    <LanguageProvider>
      <Router hook={location.hook}>
        <ThemeGate><LanguageSwitcher /><Probe /></ThemeGate>
      </Router>
    </LanguageProvider>,
  );
  const rerender = () => view.rerender(
    <LanguageProvider>
      <Router hook={location.hook}>
        <ThemeGate><LanguageSwitcher /><Probe /></ThemeGate>
      </Router>
    </LanguageProvider>,
  );
  return { ...view, navigate: (to: string) => act(() => location.navigate(to)), rerender };
}
const probe = () => screen.getByTestId("probe").textContent;
const toggle = () => screen.queryByRole("button", { name: "ダークテーマ" });
const isDark = () => document.documentElement.classList.contains("dark");

describe("表示キー colorTheme の分岐", () => {
  beforeEach(() => {
    window.localStorage.clear();
    window.localStorage.setItem("starrail-build-advisor.language", "ja");
    document.documentElement.classList.remove("dark");
    mocks.variants = {};
  });
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("E2a legacy はライト固定で切替を出さず、保存済みの dark も上書きしない", () => {
    window.localStorage.setItem(THEME_STORAGE_KEY, "dark");
    setup("/");
    expect(toggle()).toBeNull();
    expect(probe()).toBe("light/dark/false");
    expect(isDark()).toBe(false);
    expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe("dark");
  });

  it("E2a 保存値は light / dark だけを受け付け、不正値と storage 例外は light", () => {
    mocks.variants = { colorTheme: "switchable" };
    window.localStorage.setItem(THEME_STORAGE_KEY, "dark");
    const saved = setup("/characters");
    expect(probe()).toBe("dark/dark/true");
    expect(isDark()).toBe(true);
    saved.unmount();

    window.localStorage.setItem(THEME_STORAGE_KEY, "system");
    const invalid = setup("/characters");
    expect(probe()).toBe("light/light/true");
    invalid.unmount();

    // 言語の保存は別の機能なので、テーマの保存キーだけを失敗させる。
    const getItem = Storage.prototype.getItem;
    const setItem = Storage.prototype.setItem;
    vi.spyOn(Storage.prototype, "getItem").mockImplementation(function (this: Storage, key: string) { if (key === THEME_STORAGE_KEY) throw new Error("blocked"); return getItem.call(this, key); });
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(function (this: Storage, key: string, value: string) { if (key === THEME_STORAGE_KEY) throw new Error("blocked"); return setItem.call(this, key, value); });
    setup("/updates");
    expect(probe()).toBe("light/light/true");
    fireEvent.click(toggle()!);
    expect(probe()).toBe("dark/dark/true");
    expect(isDark()).toBe(true);
  });

  it("E2a 初期はライト。切り替えたときだけ保存し、公開4画面で好みを保つ", () => {
    mocks.variants = { colorTheme: "switchable" };
    const view = setup("/");
    expect(probe()).toBe("light/light/true");
    expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBeNull();
    fireEvent.click(toggle()!);
    expect(toggle()!.getAttribute("aria-pressed")).toBe("true");
    expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe("dark");
    for (const path of ["/characters", "/updates", "/feedback"]) {
      view.navigate(path);
      expect(probe()).toBe("dark/dark/true");
      expect(toggle()).not.toBeNull();
    }
  });

  it("E2a 管理画面・404 はライト固定で切替を出さず、公開画面へ戻ると好みの dark に戻る", () => {
    mocks.variants = { colorTheme: "switchable" };
    window.localStorage.setItem(THEME_STORAGE_KEY, "dark");
    const view = setup("/");
    expect(isDark()).toBe(true);
    for (const path of ["/admin", "/admin/display", "/admin/feedback", "/404", "/unknown"]) {
      view.navigate(path);
      expect(probe()).toBe("light/dark/false");
      expect(isDark()).toBe(false);
      expect(toggle()).toBeNull();
    }
    view.navigate("/updates");
    expect(probe()).toBe("dark/dark/true");
    expect(isDark()).toBe(true);
    expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe("dark");
  });

  it("E2a 公開が legacy に戻る・プレビュー終了・ログアウトで公開値が legacy なら light、再び switchable なら好みを戻す（再マウントなし）", () => {
    mocks.variants = { colorTheme: "switchable" };
    const view = setup("/");
    fireEvent.click(toggle()!);
    const probeNode = screen.getByTestId("probe");
    expect(isDark()).toBe(true);

    mocks.variants = {};
    view.rerender();
    expect(probe()).toBe("light/dark/false");
    expect(isDark()).toBe(false);
    expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe("dark");

    mocks.variants = { colorTheme: "switchable" };
    view.rerender();
    expect(probe()).toBe("dark/dark/true");
    expect(screen.getByTestId("probe")).toBe(probeNode);
  });

  it("E2b ダーク配色の本文は 4.5:1、UI の境界は 3:1 以上（G-E2 の確定値と置き換えた色）", () => {
    const css = readFileSync(resolve(__dirname, "../index.css"), "utf8");
    const block = css.slice(css.indexOf(".dark {"), css.indexOf(".dark [data-surface"));
    const token = (name: string) => {
      const match = block.match(new RegExp(`--${name}:\\s*(#[0-9a-f]{6})`));
      if (!match) throw new Error(name);
      return match[1];
    };
    const luminance = (hex: string) => {
      const [r, g, b] = [1, 3, 5].map((index) => parseInt(hex.slice(index, index + 2), 16) / 255).map((channel) => (channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4));
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };
    const ratio = (a: string, b: string) => {
      const [light, dark] = [luminance(token(a)), luminance(token(b))].sort((x, y) => y - x);
      return (light + 0.05) / (dark + 0.05);
    };
    const text: Array<[string, string]> = [
      ["foreground", "background"], ["card-foreground", "card"], ["muted-foreground", "muted"], ["primary-foreground", "primary"],
      ["color-stone-900", "color-stone-50"], ["color-stone-700", "color-stone-100"], ["color-stone-600", "color-stone-100"], ["color-stone-500", "color-stone-100"], ["color-stone-500", "color-stone-50"],
      ["color-amber-800", "color-stone-50"], ["color-amber-800", "color-amber-50"], ["color-emerald-800", "color-stone-50"], ["color-rose-800", "color-rose-50"], ["color-rose-700", "color-stone-50"],
      ["color-stone-50", "color-stone-900"], ["color-white", "color-emerald-800"], ["color-stone-50", "color-amber-900"],
    ];
    for (const [fg, bg] of text) expect(ratio(fg, bg), `${fg} / ${bg}`).toBeGreaterThanOrEqual(4.5);
    const borders: Array<[string, string]> = [["border", "background"], ["color-stone-300", "color-stone-50"], ["color-stone-400", "color-stone-100"], ["color-amber-800", "color-stone-50"], ["ring", "background"]];
    for (const [line, bg] of borders) expect(ratio(line, bg), `${line} / ${bg}`).toBeGreaterThanOrEqual(3);
    expect(css).toContain(".dark body { background-image: none; }");
  });
});
