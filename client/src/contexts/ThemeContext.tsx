import React, { createContext, useContext, useEffect, useState } from "react";

/**
 * テーマの好み（利用者が選んだ値）と有効テーマ（実際に描く値）を分けて持つ
 * （設計: docs/実装設計書_表示デザインの管理画面切替_2026-09-13.md §4.4 E-2、DR-03・U25）。
 * - 有効テーマは switchable のときだけ好みに従い、それ以外は light。
 * - 好みは利用者が切り替えたときだけ保存し、legacy や管理画面へ移っても上書きしない。
 */

export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

interface ThemeContextType {
  /** 有効テーマ */
  theme: Theme;
  /** 保存済みの好み */
  preference: Theme;
  toggleTheme?: () => void;
  switchable: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/** 保存値を light / dark に検証する。読めない・不正値は light。 */
export function readThemePreference(): Theme {
  try {
    return window.localStorage.getItem(THEME_STORAGE_KEY) === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
}

function writeThemePreference(theme: Theme) {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // 保存できない環境でも、このタブの中では切り替えを続ける。
  }
}

interface ThemeProviderProps {
  children: React.ReactNode;
  switchable?: boolean;
}

export function ThemeProvider({ children, switchable = false }: ThemeProviderProps) {
  const [preference, setPreference] = useState<Theme>(readThemePreference);
  const theme: Theme = switchable ? preference : "light";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = switchable
    ? () => {
        setPreference((previous) => {
          const next = previous === "light" ? "dark" : "light";
          writeThemePreference(next);
          return next;
        });
      }
    : undefined;

  return (
    <ThemeContext.Provider value={{ theme, preference, toggleTheme, switchable }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}

/** Provider の外（単体テストなど）では light・切替なしとして扱う。 */
export function useOptionalTheme(): ThemeContextType {
  return useContext(ThemeContext) ?? { theme: "light", preference: "light", switchable: false };
}
