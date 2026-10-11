import ts from "typescript";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import type { SourceText, TranslationRecord } from "../../shared/content/types";
import { createLegacyTexts } from "../../server/content/legacyTexts";

const fieldNames = new Set(["headline", "relicSet", "planarSet", "targetContext", "sourceLabel", "slot", "value", "label"]);
export function adoptModule(text: string, moduleName: string) {
  if (!/^[A-Za-z][A-Za-z0-9]*$/.test(moduleName)) throw new Error("Invalid module name");
  const ast = ts.createSourceFile(`${moduleName}.ts`, text, ts.ScriptTarget.Latest, true);
  const sources: SourceText[] = [];
  const translations: Record<"en" | "zh-CN", Record<string, TranslationRecord>> = { en: {}, "zh-CN": {} };
  const mapping: { id: string; field: string; originalStart: number }[] = [];
  const edits: { start: number; end: number; replacement: string }[] = [];
  const propertyName = (node: ts.PropertyName) => ts.isIdentifier(node) || ts.isStringLiteral(node) ? node.text : null;
  function register(ja: string, node: ts.Node, field: string, localized?: Record<string, string>) {
    const id = `guide.legacy.${moduleName}.b${String(sources.length + 1).padStart(5, "0")}` as const;
    sources.push({ id, ja, context: `${moduleName}: ${field}; preserved legacy display field`, audience: "public", placeholders: {}, dependencies: [],
      protectedTokens: [...new Set(ja.match(/\d+(?:[.,]\d+)*/g) ?? [])] });
    mapping.push({ id, field, originalStart: node.getStart(ast) });
    if (localized) for (const language of ["en", "zh-CN"] as const) translations[language][id] = {
      text: localized[language]!, sourceHash: null, origin: "legacy", review: "pending",
    };
    edits.push({ start: node.getStart(ast), end: node.end, replacement: `_content.${localized ? "localized" : "ja"}(${JSON.stringify(id)})` });
  }
  function visit(node: ts.Node) {
    if (ts.isObjectLiteralExpression(node)) {
      const properties = node.properties;
      const values: Record<string, string> = {};
      for (const property of properties) if (ts.isPropertyAssignment(property) && ts.isStringLiteral(property.initializer)) {
        const key = propertyName(property.name);
        if (key) values[key] = property.initializer.text;
      }
      if (properties.length === 3 && Object.keys(values).sort().join(",") === "en,ja,zh-CN") {
        register(values.ja!, node, ts.isPropertyAssignment(node.parent) ? propertyName(node.parent.name) ?? "localized" : "localized paragraph", values);
        return;
      }
    }
    if (ts.isPropertyAssignment(node) && ts.isStringLiteral(node.initializer)) {
      const field = propertyName(node.name);
      if (field && fieldNames.has(field) && node.initializer.text.trim()) {
        register(node.initializer.text, node.initializer, field);
        return;
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(ast);
  createLegacyTexts(sources, translations.en, translations["zh-CN"]);
  let migrated = text;
  for (const edit of edits.sort((a, b) => b.start - a.start)) migrated = migrated.slice(0, edit.start) + edit.replacement + migrated.slice(edit.end);
  if (sources.length) migrated = `import { createLegacyTexts } from "./content/legacyTexts";\nimport { sources as _sources } from "../content/ja/guides/${moduleName}";\nimport { records as _en } from "../content/translations/en/${moduleName}";\nimport { records as _zh } from "../content/translations/zh-CN/${moduleName}";\nconst _content = createLegacyTexts(_sources, _en, _zh);\n` + migrated;
  return { migrated, sources, translations, mapping };
}

export function adoptMain(args: string[]) {
  if (args.length < 1 || args.length > 2 || (args[1] && args[1] !== "--write")) throw new Error("Usage: content:adopt <moduleName> [--write]");
  const moduleName = args[0]!;
  if (!/^[A-Za-z][A-Za-z0-9]*$/.test(moduleName)) throw new Error("Invalid module name");
  const target = resolve(`server/${moduleName}.ts`);
  const result = adoptModule(readFileSync(target, "utf8"), moduleName);
  if (args[1] === "--write" && result.sources.length) {
    const outputs = [
      [`content/ja/guides/${moduleName}.ts`, `import type { SourceText } from "../../../shared/content/types";\nexport const sources: SourceText[] = ${JSON.stringify(result.sources, null, 2)};\n`],
      ...(["en", "zh-CN"] as const).map(language => [`content/translations/${language}/${moduleName}.ts`, `import type { TranslationRecord } from "../../../shared/content/types";\nexport const records: Record<string, TranslationRecord> = ${JSON.stringify(result.translations[language], null, 2)};\n`]),
      [`content/coverage/${moduleName}.migration.json`, JSON.stringify(result.mapping, null, 2) + "\n"],
    ];
    for (const [path] of outputs) if (existsSync(resolve(path!))) throw new Error(`Canonical output already exists: ${path}`);
    // Source remains unchanged until all catalog files have been written.
    for (const [path, body] of outputs) { mkdirSync(dirname(resolve(path!)), { recursive: true }); writeFileSync(resolve(path!), body!, { flag: "wx" }); }
    writeFileSync(target, result.migrated);
  }
  console.log(JSON.stringify({ moduleName, sourceCount: result.sources.length, write: args[1] === "--write" }));
}
if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  try { adoptMain(process.argv.slice(2)); } catch (error) { console.error(error instanceof Error ? error.message : "Adoption failed"); process.exitCode = 1; }
}
