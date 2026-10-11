import ts from "typescript";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import type { SourceText, TranslationRecord } from "../../shared/content/types";

type Language = "ja" | "en" | "zh-CN";
const languages: Language[] = ["ja", "en", "zh-CN"];
const keyOf = (node: ts.PropertyName) => ts.isIdentifier(node) || ts.isStringLiteral(node) ? node.text : null;
function literalObject(node: ts.ObjectLiteralExpression): Record<string, string> | null {
  const values: Record<string, string> = {};
  for (const property of node.properties) {
    if (!ts.isPropertyAssignment(property) || !ts.isStringLiteral(property.initializer)) return null;
    const key = keyOf(property.name);
    if (!key || key in values) return null;
    values[key] = property.initializer.text;
  }
  return values;
}
export function adoptUi(text: string, moduleName: string) {
  const ast = ts.createSourceFile(moduleName + ".tsx", text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const sources: SourceText[] = [];
  const translations: Record<"en" | "zh-CN", Record<string, TranslationRecord>> = { en: {}, "zh-CN": {} };
  const edits: { start: number; end: number; replacement: string }[] = [];
  let dictionary = 0;
  function registerGroups(node: ts.Node, groups: Partial<Record<Language, Record<string, string>>>, selection?: string, field?: string) {
    const keys = Object.keys(groups.ja!).sort();
    if (languages.some(language => JSON.stringify(Object.keys(groups[language]!).sort()) !== JSON.stringify(keys))) throw new Error(`UI dictionary keys differ: ${moduleName}`);
    const refs: Record<string, string> = {};
    dictionary++;
    for (const key of keys) {
      const id = `ui.${moduleName}.dictionary${dictionary}.${key}` as const;
      const ja = groups.ja![key]!;
      const placeholders = Object.fromEntries([...ja.matchAll(/\{([A-Za-z][A-Za-z0-9_]*)\}/g)].map(match => [match[1]!, /count|value|level/.test(match[1]!) ? "number" as const : "string" as const]));
      sources.push({ id, ja, context: `${moduleName} UI dictionary field ${key}`, audience: /Admin/.test(moduleName) ? "admin" : "public", placeholders, dependencies: [], protectedTokens: [] });
      for (const language of ["en", "zh-CN"] as const) translations[language][id] = { text: groups[language]![key]!, sourceHash: null, origin: "legacy", review: "pending" };
      refs[key] = id;
    }
    edits.push({ start: node.getStart(ast), end: ts.isAsExpression(node.parent) && node.parent.type.getText(ast) === "const" ? node.parent.end : node.end,
      replacement: `uiDictionary(${JSON.stringify(refs, null, 2)})${selection ? `[${selection}]` : ""}${field ? `.${field}` : ""}` });
  }
  function visit(node: ts.Node) {
    if (ts.isConditionalExpression(node) && ts.isConditionalExpression(node.whenFalse) && ts.isBinaryExpression(node.condition) && ts.isBinaryExpression(node.whenFalse.condition)) {
      const first = node.condition;
      const second = node.whenFalse.condition;
      if (first.operatorToken.kind === ts.SyntaxKind.EqualsEqualsEqualsToken && second.operatorToken.kind === ts.SyntaxKind.EqualsEqualsEqualsToken &&
          ts.isIdentifier(first.left) && first.left.getText(ast) === second.left.getText(ast) &&
          ts.isStringLiteral(first.right) && languages.includes(first.right.text as Language) && ts.isStringLiteral(second.right) && languages.includes(second.right.text as Language) && first.right.text !== second.right.text &&
          ts.isStringLiteral(node.whenTrue) && ts.isStringLiteral(node.whenFalse.whenTrue) && ts.isStringLiteral(node.whenFalse.whenFalse)) {
        const firstLanguage = first.right.text;
        const secondLanguage = second.right.text;
        const remaining = languages.find(language => language !== firstLanguage && language !== secondLanguage)!;
        const groups = { [first.right.text]: { text: node.whenTrue.text },
          [second.right.text]: { text: node.whenFalse.whenTrue.text },
          [remaining]: { text: node.whenFalse.whenFalse.text } };
        registerGroups(node, groups, first.left.getText(ast), "text"); return;
      }
      if (first.operatorToken.kind === ts.SyntaxKind.EqualsEqualsEqualsToken && second.operatorToken.kind === ts.SyntaxKind.EqualsEqualsEqualsToken &&
          ts.isIdentifier(first.left) && first.left.getText(ast) === second.left.getText(ast) &&
          ts.isStringLiteral(first.right) && first.right.text === "ja" && ts.isStringLiteral(second.right) && second.right.text === "zh-CN" &&
          ts.isObjectLiteralExpression(node.whenTrue) && ts.isObjectLiteralExpression(node.whenFalse.whenTrue) && ts.isObjectLiteralExpression(node.whenFalse.whenFalse)) {
        const ja = literalObject(node.whenTrue), zh = literalObject(node.whenFalse.whenTrue), en = literalObject(node.whenFalse.whenFalse);
        if (ja && zh && en) { registerGroups(node, { ja, en, "zh-CN": zh }, first.left.getText(ast)); return; }
      }
    }
    if (ts.isObjectLiteralExpression(node) && node.properties.length === 3) {
      const groups: Partial<Record<Language, Record<string, string>>> = {};
      for (const property of node.properties) if (ts.isPropertyAssignment(property) && ts.isObjectLiteralExpression(property.initializer)) {
        const key = keyOf(property.name);
        if (languages.includes(key as Language)) {
          const value = literalObject(property.initializer);
          if (value) groups[key as Language] = value;
        }
      }
      if (languages.every(language => groups[language])) {
        registerGroups(node, groups);
        return;
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(ast);
  let migrated = text;
  for (const edit of edits.sort((a, b) => b.start - a.start)) migrated = migrated.slice(0, edit.start) + edit.replacement + migrated.slice(edit.end);
  const helper = /Admin/.test(moduleName) ? "ui.admin" : "ui";
  if (sources.length && !/import\s*\{[^}]*\buiDictionary\b[^}]*\}\s*from\s*["']@\/content\/ui(?:\.admin)?["']/.test(migrated)) migrated = `import { uiDictionary } from "@/content/${helper}";\n` + migrated;
  return { sources, translations, migrated };
}
export function adoptUiMain(args: string[]) {
  const write = args.includes("--write");
  const batchIndex = args.indexOf("--batch");
  const batch = batchIndex >= 0 ? args[batchIndex + 1] : undefined;
  if (!args[0] || (batchIndex >= 0 && (!batch || !/^[a-z][a-z0-9]*$/.test(batch))) || args.slice(1).some((arg, index) => arg !== "--write" && arg !== "--batch" && index + 1 !== batchIndex + 1)) throw new Error("Usage: content:adopt-ui <relative-tsx-path> [--batch name] [--write]");
  const path = args[0]!;
  if (!/^(?:pages|contexts|components|lib)(?:\/[A-Za-z][A-Za-z0-9]*)+\.tsx?$/.test(path)) throw new Error("Invalid UI module path");
  const moduleName = path.replace(/\.tsx?$/, "").replace(/\//g, "_") + (batch ? `_${batch}` : "");
  const target = resolve("client/src", path);
  const result = adoptUi(readFileSync(target, "utf8"), moduleName);
  if (write && result.sources.length) {
    const outputs = [
      [`content/ja/ui/${moduleName}.ts`, `import type { SourceText } from "../../../shared/content/types";\nexport const sources: SourceText[] = ${JSON.stringify(result.sources, null, 2)};\n`],
      ...(["en", "zh-CN"] as const).map(language => [`content/translations/${language}/ui_${moduleName}.ts`, `import type { TranslationRecord } from "../../../shared/content/types";\nexport const records: Record<string, TranslationRecord> = ${JSON.stringify(result.translations[language], null, 2)};\n`]),
    ];
    for (const [file] of outputs) if (existsSync(resolve(file!))) throw new Error(`UI source exists: ${file}`);
    for (const [file, body] of outputs) { mkdirSync(dirname(resolve(file!)), { recursive: true }); writeFileSync(resolve(file!), body!, { flag: "wx" }); }
    writeFileSync(target, result.migrated);
  }
  console.log(JSON.stringify({ moduleName, sourceCount: result.sources.length }));
}
if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  try { adoptUiMain(process.argv.slice(2)); } catch (error) { console.error(error instanceof Error ? error.message : "UI adoption failed"); process.exitCode = 1; }
}
