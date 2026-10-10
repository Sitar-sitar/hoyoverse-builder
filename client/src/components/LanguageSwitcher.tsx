import { LANGUAGE_LABELS, useLanguage } from "@/contexts/LanguageContext";
import ThemeToggle from "@/components/ThemeToggle";
import React from "react";

export default function LanguageSwitcher({ dark = false }: { dark?: boolean }) {
  const { language, enabledLanguages, setLanguage, t } = useLanguage();
  // 案 E-2: テーマ切替は言語切替の隣に置く（切り替えられない画面では何も描かない）。
  return <>{enabledLanguages.length > 1 && <div className="flex shrink-0 gap-1" role="group" aria-label={t("language")}>
    {enabledLanguages.map((item) => <button key={item} type="button" onClick={() => setLanguage(item)} aria-pressed={language === item} className={`min-h-7 border px-2 text-[9px] font-semibold transition-colors ${language === item ? (dark ? "border-amber-200 bg-amber-200 text-stone-900" : "border-stone-900 bg-stone-900 text-stone-50") : (dark ? "border-amber-100/50 text-amber-100 hover:bg-amber-100/10" : "border-stone-300 text-stone-600 hover:bg-stone-200")}`}>{LANGUAGE_LABELS[item]}</button>)}
  </div>}<ThemeToggle /></>;
}
