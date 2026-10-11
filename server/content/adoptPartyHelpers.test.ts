import { describe, expect, it } from "vitest";
import ts from "typescript";
import { adoptPartyHelpers } from "../../scripts/content/adoptPartyHelpers";
import { createLegacyTexts } from "./legacyTexts";
describe("party helper authoring", () => {
  it("preserves names and legacy template values without creating translations", () => {
    const fixture =
      'const _content = createLegacyTexts(_sources, _en, _zh); const pearl=()=>m("名前","役割","old role","旧角色"); const label=t(`資料（${secondaryDate}更新）`,`Source (${secondaryDate})`,`资料（${secondaryDate}）`);';
    const result = adoptPartyHelpers(fixture);
    expect(result.sources).toHaveLength(3);
    const syntax = ts.createSourceFile(
      "result.ts",
      result.migrated,
      ts.ScriptTarget.Latest,
      true
    ) as ts.SourceFile & { parseDiagnostics: unknown[] };
    expect(syntax.parseDiagnostics).toEqual([]);
    expect(adoptPartyHelpers(result.migrated).sources).toEqual([]);
    const texts = createLegacyTexts(
      result.sources,
      result.translations.en,
      result.translations["zh-CN"]
    );
    expect(texts.localized(result.sources[0]!.id)).toEqual({
      ja: "名前",
      en: "名前",
      "zh-CN": "名前",
    });
    expect(
      texts.localized(result.sources[2]!.id, { v0: "2026-10-02" })
    ).toEqual({
      ja: "資料（2026-10-02更新）",
      en: "Source (2026-10-02)",
      "zh-CN": "资料（2026-10-02）",
    });
    for (const language of ["en", "zh-CN"] as const)
      for (const record of Object.values(result.translations[language]))
        expect(record).toMatchObject({
          sourceHash: null,
          review: "pending",
          origin: "legacy",
        });
    expect(() => texts.localized(result.sources[2]!.id, { v0: 2 })).toThrow(
      "Invalid content variable"
    );
  });
  it("rejects a template whose binding differs rather than guessing its meaning", () => {
    expect(() =>
      adoptPartyHelpers(
        "const label=t(`資料${date}`,`Source ${date}`,`资料${date}`);"
      )
    ).toThrow("Unclassified party helper template");
  });
});
