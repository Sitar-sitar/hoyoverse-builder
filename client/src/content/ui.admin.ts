import { UI_TEXT, UI_VARIABLES } from "./ui.admin.generated";
import { formatContentText } from "@shared/content/format";

export function uiFormat(id: string, variables: Record<string, string | number>) {
  const entry = UI_TEXT[id];
  if (!entry) throw new Error("Unknown admin UI content reference");
  return formatContentText(id, entry.ja, UI_VARIABLES[id] ?? {}, variables);
}

export function uiText(id: string): string {
  const entry = UI_TEXT[id];
  if (!entry) throw new Error("Unknown admin UI content reference");
  return entry.ja;
}

export function uiDictionary<T extends Record<string, string>>(refs: T): { [L in "ja" | "en" | "zh-CN"]: { [K in keyof T]: string } } {
  const languages = ["ja", "en", "zh-CN"] as const;
  const resolved = Object.fromEntries(languages.map(language => [language, Object.fromEntries(Object.entries(refs).map(([key, id]) => {
    const entry = UI_TEXT[id];
    if (!entry) throw new Error("Unknown admin UI content reference");
    return [key, entry[language]];
  }))]));
  return resolved as { [L in "ja" | "en" | "zh-CN"]: { [K in keyof T]: string } };
}
