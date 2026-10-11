import ts from "typescript";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import type { SourceText, TranslationRecord } from "../../shared/content/types";
import { createLegacyTexts } from "../../server/content/legacyTexts";

const fieldNames = new Set(["headline", "relicSet", "planarSet", "targetContext", "sourceLabel", "slot", "value", "label"]);
export function renderSources(sources: SourceText[]) {
  const blocks = Array.from({ length: Math.ceil(sources.length / 100) }, (_, index) => sources.slice(index * 100, (index + 1) * 100));
  return `import type { SourceText } from "../../../shared/content/types";\n` +
    blocks.map((block, index) => `const block${index}: SourceText[] = ${JSON.stringify(block, null, 2)};\n`).join("\n") +
    `export const sources: SourceText[] = [${blocks.map((_, index) => `...block${index}`).join(", ")}];\n`;
}
export function adoptModule(text: string, moduleName: string, depth = 0) {
  if (!/^[A-Za-z][A-Za-z0-9_]*$/.test(moduleName)) throw new Error("Invalid module name");
  const ast = ts.createSourceFile(`${moduleName}.ts`, text, ts.ScriptTarget.Latest, true);
  const sources: SourceText[] = [];
  const translations: Record<"en" | "zh-CN", Record<string, TranslationRecord>> = { en: {}, "zh-CN": {} };
  const mapping: { id: string; field: string; originalStart: number }[] = [];
  const edits: { start: number; end: number; replacement: string }[] = [];
  const propertyName = (node: ts.PropertyName) => ts.isIdentifier(node) || ts.isStringLiteral(node) ? node.text : null;
  function register(ja: string, node: ts.Node, field: string, localized?: Record<string, string>, span?: {start: number; end: number}) {
    const id = `guide.legacy.${moduleName}.b${String(sources.length + 1).padStart(5, "0")}` as const;
    sources.push({ id, ja, context: `${moduleName}: ${field}; preserved legacy display field`, audience: "public", placeholders: {}, dependencies: [],
      protectedTokens: [...new Set(ja.match(/\d+(?:[.,]\d+)*/g) ?? [])] });
    mapping.push({ id, field, originalStart: node.getStart(ast) });
    if (localized) for (const language of ["en", "zh-CN"] as const) translations[language][id] = {
      text: localized[language]!, sourceHash: null, origin: "legacy", review: "pending",
    };
    edits.push({ start: span?.start ?? node.getStart(ast), end: span?.end ?? node.end,
      replacement: `${span ? "..." : ""}_content.${span ? "triple" : localized ? "localized" : "ja"}(${JSON.stringify(id)})` });
  }
  function visit(node: ts.Node) {
    if (ts.isCallExpression(node) && ts.isIdentifier(node.expression)) {
      const name = node.expression.text;
      if (name === "t" && node.arguments.length === 3 && node.arguments.every(ts.isStringLiteral)) {
        const args = node.arguments as unknown as readonly ts.StringLiteral[];
        register(args[0]!.text, node, "localized call", { ja: args[0]!.text, en: args[1]!.text, "zh-CN": args[2]!.text });
        return;
      }
      if (name === "member" && node.arguments.length === 6 && node.arguments.every(ts.isStringLiteral)) {
        const args = node.arguments as unknown as readonly ts.StringLiteral[];
        for (const start of [0, 3]) register(args[start]!.text, args[start]!, start ? "member role" : "member name",
          { ja: args[start]!.text, en: args[start + 1]!.text, "zh-CN": args[start + 2]!.text },
          { start: args[start]!.getStart(ast), end: args[start + 2]!.end });
        return;
      }
    }
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
  const up = "../".repeat(depth);
  if (sources.length) migrated = `import { createLegacyTexts } from "${depth ? up : "./"}content/legacyTexts";\nimport { sources as _sources } from "${up}../content/ja/guides/${moduleName}";\nimport { records as _en } from "${up}../content/translations/en/${moduleName}";\nimport { records as _zh } from "${up}../content/translations/zh-CN/${moduleName}";\nconst _content = createLegacyTexts(_sources, _en, _zh);\n` + migrated;
  return { migrated, sources, translations, mapping };
}

export function adoptMain(args: string[]) {
  if (args.length < 1 || args.length > 2 || (args[1] && args[1] !== "--write")) throw new Error("Usage: content:adopt <moduleName> [--write]");
  const modulePath = args[0]!;
  if (!/^[A-Za-z][A-Za-z0-9]*(?:\/[A-Za-z][A-Za-z0-9]*)*(?:\.generated)?$/.test(modulePath)) throw new Error("Invalid module path");
  const moduleName = modulePath.replace(/[/.]/g, "_");
  const target = resolve(`server/${modulePath}.ts`);
  const result = adoptModule(readFileSync(target, "utf8"), moduleName, modulePath.split("/").length - 1);
  if (args[1] === "--write" && result.sources.length) {
    const outputs = [
      [`content/ja/guides/${moduleName}.ts`, renderSources(result.sources)],
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
