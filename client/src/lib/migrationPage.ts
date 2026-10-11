import { uiLocalized } from "@/content/ui";
export const NEXT_PAGES_BASE = "/hoyoverse-builder/app/";
export const LEGACY_SITE_URL =
  "https://sitar-sitar.github.io/hoyoverse-builder/";
export const isNextPages = import.meta.env.BASE_URL === NEXT_PAGES_BASE;
export const isMigrationPreview =
  import.meta.env.VITE_MIGRATION_PREVIEW === "true";

export function scopedStorageKey(
  key: string,
  base = import.meta.env.BASE_URL
): string {
  return base === NEXT_PAGES_BASE ? `${key}:${NEXT_PAGES_BASE}` : key;
}

export function canSubmitPreviewFeedback(
  preview: boolean,
  role: string | undefined
): boolean {
  return !preview || role === "admin";
}

export const migrationNotice = uiLocalized("ui.migration.notice");
