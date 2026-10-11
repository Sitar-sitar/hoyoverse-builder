import { describe, expect, it } from "vitest";
import { mkdtempSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { adoptGuideTemplates } from "../../scripts/content/adoptGuideTemplates";
import { createLegacyTexts } from "./legacyTexts";
describe("compiler checked guide templates", () => {
  it("preserves nullable interpolation and numeric variables while excluding internal logs", () => {
    const dir = mkdtempSync(join(tmpdir(), "guide-templates-")),
      file = join(dir, "fixture.ts");
    try {
      writeFileSync(
        file,
        "export function guide(label:string|null,n:number){console.warn(`内部ログ${label}`);return {headline:`方針${label}:${n}個を維持。`};}"
      );
      const result = adoptGuideTemplates(file, "fixture_templates");
      expect(result.sources).toHaveLength(1);
      expect(result.sources[0]!.placeholders).toEqual({
        v0: "string",
        v1: "number",
      });
      expect(result.sources[0]!.protectedTokens).toEqual([]);
      expect(result.mapping[0]!.bindings).toEqual({
        v0: "String(label)",
        v1: "n",
      });
      expect(
        createLegacyTexts(result.sources, {}, {}).ja(result.sources[0]!.id, {
          v0: String(null),
          v1: 2,
        })
      ).toBe("方針null:2個を維持。");
      expect(
        createLegacyTexts(result.sources, {}, {}).ja(result.sources[0]!.id, {
          v0: "名前",
          v1: 2,
        })
      ).toBe("方針名前:2個を維持。");
      writeFileSync(file, result.migrated);
      expect(adoptGuideTemplates(file, "fixture_templates").sources).toEqual(
        []
      );
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });
  it("rejects object-valued interpolation rather than silently changing its type", () => {
    const dir = mkdtempSync(join(tmpdir(), "guide-templates-")),
      file = join(dir, "fixture.ts");
    try {
      writeFileSync(
        file,
        "export function guide(label:{name:string}){return {headline:`方針${label}を維持。`};}"
      );
      expect(() => adoptGuideTemplates(file, "fixture_templates")).toThrow(
        "Unsupported template variable type"
      );
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });
});
