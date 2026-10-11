import { UI_TEXT } from "./ui.generated";

export function uiDictionary<T extends Record<string, string>>(refs: T): { [L in "ja" | "en" | "zh-CN"]: { [K in keyof T]: string } } {
  const languages = ["ja", "en", "zh-CN"] as const;
  const resolved = Object.fromEntries(languages.map(language => [language, Object.fromEntries(Object.entries(refs).map(([key, id]) => {
    const entry = UI_TEXT[id];
    if (!entry) throw new Error("Unknown UI content reference");
    return [key, entry[language]];
  }))]));
  return resolved as { [L in "ja" | "en" | "zh-CN"]: { [K in keyof T]: string } };
}
