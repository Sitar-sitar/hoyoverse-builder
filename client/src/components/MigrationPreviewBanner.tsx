import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  isMigrationPreview,
  LEGACY_SITE_URL,
  migrationNotice,
} from "@/lib/migrationPage";

export default function MigrationPreviewBanner() {
  const { language } = useLanguage();
  if (!isMigrationPreview) return null;
  return (
    <aside
      aria-label={migrationNotice[language]}
      className="border-b border-amber-400 bg-amber-100 px-4 py-3 text-center text-sm leading-6 text-stone-900"
    >
      <a href={LEGACY_SITE_URL} className="underline underline-offset-4">
        {migrationNotice[language]}
      </a>
    </aside>
  );
}
