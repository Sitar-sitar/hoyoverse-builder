import { useLanguage } from "@/contexts/LanguageContext";
import { useOptionalTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";
import React from "react";

/** 案 E-2 のテーマ切替。有効テーマを切り替えられる画面でだけ表示する（設計 §4.4 E-2）。 */
export default function ThemeToggle() {
  const { theme, toggleTheme, switchable } = useOptionalTheme();
  const { t } = useLanguage();
  if (!switchable || !toggleTheme) return null;
  const dark = theme === "dark";
  return (
    <button type="button" onClick={toggleTheme} aria-pressed={dark} aria-label={t("themeDark")} title={t("themeDark")} className="inline-flex min-h-7 shrink-0 items-center gap-1 border border-stone-300 px-2 text-[11px] font-semibold text-stone-600 transition-colors hover:bg-stone-200">
      {dark ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
      <span>{dark ? t("themeDarkOn") : t("themeLightOn")}</span>
    </button>
  );
}
