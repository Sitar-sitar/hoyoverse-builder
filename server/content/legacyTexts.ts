import type { SourceText, TextId, TranslationRecord } from "../../shared/content/types";
import { indexCatalog, japaneseText } from "./catalog";

/** Japanese computation compatibility and unchanged legacy language projection. */
export function createLegacyTexts(sources: SourceText[], en: Record<string, TranslationRecord>, zh: Record<string, TranslationRecord>) {
  const index = indexCatalog({ schemaVersion: 1, sources, translations: { en, "zh-CN": zh }, aliases: [], sections: [] });
  if (index.issues.length) throw new Error("Invalid canonical legacy content");
  const ja = (id: TextId, variables: Record<string, string | number> = {}) => japaneseText(index, { kind: "textRef", id }, variables);
  return {
    ja,
    triple(id: TextId): [string, string, string] {
      const english = en[id];
      const chinese = zh[id];
      if (!english || !chinese) throw new Error(`Legacy translation missing: ${id}`);
      return [ja(id), english.text, chinese.text];
    },
    localized(id: TextId) {
      const english = en[id];
      const chinese = zh[id];
      if (!english || !chinese) throw new Error(`Legacy translation missing: ${id}`);
      return { ja: ja(id), en: english.text, "zh-CN": chinese.text };
    },
  };
}
