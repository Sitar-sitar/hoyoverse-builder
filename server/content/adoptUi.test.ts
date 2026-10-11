import { describe, expect, it } from "vitest";
import { adoptUi } from "../../scripts/content/adoptUi";
import { uiDictionary } from "../../client/src/content/ui";

describe("UI dictionary canonical migration", () => {
  it("preserves languages and stable field keys, handles const assertions and typed placeholders", () => {
    const text = 'const copy={ja:{title:"画面",count:"{count}件"},en:{title:"Screen",count:"{count} items"},"zh-CN":{title:"画面旧译",count:"{count}项"}} as const;';
    const result = adoptUi(text, "pages_Test");
    expect(result.sources.map(source => source.id)).toEqual(["ui.pages_Test.dictionary1.count", "ui.pages_Test.dictionary1.title"]);
    expect(result.sources[0]!.placeholders).toEqual({ count: "number" });
    expect(result.translations.en[result.sources[1]!.id]).toEqual({ text: "Screen", sourceHash: null, review: "pending", origin: "legacy" });
    expect(result.migrated).not.toContain("as const");
    expect(result.migrated).not.toContain('title:"画面"');
    expect(adoptUi(result.migrated, "pages_Test").sources).toHaveLength(0);
  });

  it("rejects mismatched dictionary keys and unknown UI references", () => {
    expect(() => adoptUi('const copy={ja:{a:"本文"},en:{b:"Text"},"zh-CN":{a:"旧译"}};', "pages_Test")).toThrow("keys differ");
    expect(() => uiDictionary({ title: "ui.unknown" })).toThrow("Unknown UI content reference");
  });

  it("resolves an actual migrated dictionary without carrying authoring metadata", () => {
    const dictionary = uiDictionary({ title: "ui.pages_CharacterCatalog.dictionary1.title" });
    expect(dictionary.ja.title).toBe("キャラ図鑑");
    expect(dictionary.en.title.length).toBeGreaterThan(0);
    expect(Object.keys(dictionary)).toEqual(["ja", "en", "zh-CN"]);
    expect(JSON.stringify(dictionary)).not.toContain("sourceHash");
  });
});
