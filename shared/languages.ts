export const APP_LANGUAGES = ["ja", "en", "zh-CN"] as const;
export type AppLanguage = typeof APP_LANGUAGES[number];
export const DEFAULT_ENABLED_LANGUAGES: AppLanguage[] = ["ja"];
export const LANGUAGE_SETTINGS_KEY = "enabledLanguages";

/** 日本語は常時有効。不明・壊れた設定では翻訳を公開しない。 */
export function normalizeEnabledLanguages(value: unknown): AppLanguage[] {
  if (!Array.isArray(value) || !value.includes("ja") || value.some(item => !APP_LANGUAGES.includes(item))) {
    return [...DEFAULT_ENABLED_LANGUAGES];
  }
  return APP_LANGUAGES.filter(language => value.includes(language));
}
