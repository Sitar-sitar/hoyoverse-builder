import { uiDictionary } from "@/content/ui";
import React from "react";
import { BookOpen } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { useDisplayVariant } from "@/contexts/DisplaySettingsContext";

const shortcutText = uiDictionary({
  "label": "ui.components_PublicCatalogShortcut.dictionary1.label"
});

export default function PublicCatalogShortcut() {
  const [location] = useLocation();
  const { language } = useLanguage();
  // 案 E-1 の共通ヘッダーに図鑑への導線があるため、unified のときは固定ボタンを出さない（設計 §4.4 E-1）。
  const chromeVariant = useDisplayVariant("siteChrome");
  if (location !== "/" || chromeVariant === "unified") return null;

  const label = shortcutText[language].label;

  return (
    <Link
      href="/characters"
      className="fixed bottom-5 left-5 z-40 inline-flex min-h-11 items-center gap-2 border border-stone-900 bg-stone-50 px-3 py-2 text-[10px] font-semibold text-stone-900 shadow-lg transition-colors hover:bg-stone-900 hover:text-stone-50 sm:bottom-6 sm:left-6"
    >
      <BookOpen className="h-4 w-4" />
      {label}
    </Link>
  );
}
