import { DISPLAY_VARIANTS, LEGACY_VARIANT, isKnownDisplayVariant, sanitizeDisplaySettings, type DisplayVariants } from "@shared/displayVariants";
import { getDisplaySettingRows, upsertDisplaySettings } from "./db";

/**
 * 表示設定のキャッシュ・検証・fail-safe（設計: docs/実装設計書_表示デザインの管理画面切替_2026-09-13.md §4.2.2）。
 */

export const DISPLAY_SETTINGS_CACHE_TTL_MS = 60_000;

export type PublicDisplaySettings = { variants: DisplayVariants; source: "database" | "default" };
export type AdminDisplaySettingEntry = { key: string; variant: string; updatedAt: string | null };

let cache: { variants: DisplayVariants; expiresAt: number } | null = null;
// 破棄のたびに進める。破棄より前に始まった読み取りの結果でキャッシュを埋め直さないため（U10）。
let generation = 0;

export function invalidateDisplaySettingsCache() {
  generation += 1;
  cache = null;
}

/** 公開用。例外を投げず、DB 未接続・取得失敗は全キー legacy（空のスナップショット）を返す（D5）。 */
export async function readPublicDisplaySettings(): Promise<PublicDisplaySettings> {
  if (cache && cache.expiresAt > Date.now()) return { variants: cache.variants, source: "database" };
  const startedGeneration = generation;
  try {
    const rows = await getDisplaySettingRows();
    const sanitized = sanitizeDisplaySettings(Object.fromEntries(rows.map((row) => [row.settingKey, row.variant])));
    const variants = Object.fromEntries(Object.entries(sanitized).filter(([, variant]) => variant !== LEGACY_VARIANT));
    if (startedGeneration === generation) {
      cache = { variants, expiresAt: Date.now() + DISPLAY_SETTINGS_CACHE_TTL_MS };
    }
    return { variants, source: "database" };
  } catch (error) {
    console.error("[DisplaySettings] Failed to load display settings:", error);
    return { variants: {}, source: "default" };
  }
}

/** 管理用。登録表の全キーを返す。取得失敗は呼び出し側へ投げる（全キー現行と誤表示しないため）。 */
export async function readAdminDisplaySettings(): Promise<{ entries: AdminDisplaySettingEntry[] }> {
  const rows = await getDisplaySettingRows();
  const byKey = new Map(rows.map((row) => [row.settingKey, row]));
  return {
    entries: DISPLAY_VARIANTS.map((definition) => {
      const row = byKey.get(definition.key);
      const valid = row && isKnownDisplayVariant(definition.key, row.variant);
      return {
        key: definition.key,
        variant: valid ? row.variant : LEGACY_VARIANT,
        updatedAt: row?.updatedAt ? new Date(row.updatedAt).toISOString() : null,
      };
    }),
  };
}

/**
 * 保存してキャッシュを破棄し、最新の公開値を返す。保存の失敗だけを例外にする。
 * 保存後の再読み取りに失敗した場合は source: "default" になり、クライアントは「保存成功・再取得失敗」として扱う（U09）。
 */
export async function publishDisplaySettings(changes: Array<{ key: string; variant: string }>): Promise<PublicDisplaySettings> {
  await upsertDisplaySettings(changes);
  invalidateDisplaySettingsCache();
  return readPublicDisplaySettings();
}
