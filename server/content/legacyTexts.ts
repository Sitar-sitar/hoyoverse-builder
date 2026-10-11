import type {
  SourceText,
  TextId,
  TranslationRecord,
} from "../../shared/content/types";
import { indexCatalog, japaneseText } from "./catalog";
import { formatContentText } from "../../shared/content/format";
import type { BoundTextRef } from "../../shared/content/teamAuthoring";
let capturing = false;
const captured = new WeakMap<object, BoundTextRef>();
/** Migration-only provenance capture, disabled in normal API execution. */
export function beginLegacyTextCapture() {
  if (capturing) throw new Error("Legacy text capture already active");
  capturing = true;
  return () => {
    capturing = false;
  };
}
export function capturedLegacyTextRef(value: object) {
  return captured.get(value);
}

/** Japanese computation compatibility and unchanged legacy language projection. */
export function createLegacyTexts(
  sources: SourceText[],
  en: Record<string, TranslationRecord>,
  zh: Record<string, TranslationRecord>
) {
  const index = indexCatalog({
    schemaVersion: 1,
    sources,
    translations: { en, "zh-CN": zh },
    aliases: [],
    sections: [],
  });
  if (index.issues.length) throw new Error("Invalid canonical legacy content");
  const ja = (id: TextId, variables: Record<string, string | number> = {}) =>
    japaneseText(index, { kind: "textRef", id }, variables);
  return {
    ja,
    triple(id: TextId): [string, string, string] {
      const english = en[id];
      const chinese = zh[id];
      if (!english || !chinese)
        throw new Error(`Legacy translation missing: ${id}`);
      return [ja(id), english.text, chinese.text];
    },
    localized(id: TextId, variables: Record<string, string | number> = {}) {
      const english = en[id];
      const chinese = zh[id];
      if (!english || !chinese)
        throw new Error(`Legacy translation missing: ${id}`);
      const placeholders = index.resolve(id)!.placeholders;
      const legacy = (text: string) =>
        Object.keys(placeholders).length
          ? formatContentText(id, text, placeholders, variables)
          : text;
      const result = {
        ja: ja(id, variables),
        en: legacy(english.text),
        "zh-CN": legacy(chinese.text),
      };
      if (capturing)
        captured.set(result, {
          kind: "textRef",
          id,
          ...(Object.keys(variables).length
            ? { variables: { ...variables } }
            : {}),
        });
      return result;
    },
  };
}
