import ts from "typescript";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import type { SourceText } from "../../shared/content/types";

/** Deliberately bounded adoption: JSX text/attributes and named display constants.
 * Comparisons, type literals, object keys and computation dictionaries are not
 * candidates. No translation record is fabricated for Japanese-only text.
 */
export function adoptUiLiterals(text: string, moduleName: string, displayConstants: readonly string[] = []) {
  const audience = /Admin/.test(moduleName) ? "admin" : "public";
  const ast = ts.createSourceFile(moduleName + ".tsx", text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const resolverName = /\b(?:const|let|function)\s+uiText\b/.test(text) ? "resolveUiText" : "uiText";
  const sources: SourceText[] = [];
  const edits: { start: number; end: number; value: string }[] = [];
  const mapping: { id: string; start: number; kind: string }[] = [];
  function register(node: ts.Node, value: string, kind: "jsx" | "attribute" | "constant") {
    if (!/[\u3040-\u30ff\u3400-\u9fff]/.test(value) && !(kind !== "constant" && /[A-Za-z]/.test(value))) return;
    const id = `ui.${moduleName}.literal${sources.length + 1}` as const;
    sources.push({ id, ja: value, context: `${moduleName} ${kind} display text`, audience, placeholders: {}, dependencies: [], protectedTokens: [] });
    const call = `${resolverName}(${JSON.stringify(id)})`;
    mapping.push({ id, start: node.getStart(ast), kind });
    edits.push({ start: kind === "jsx" ? node.pos : node.getStart(ast), end: node.end, value: kind === "constant" ? call : `{${call}}` });
  }
  function visit(node: ts.Node, displayConstant = false) {
    if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name)) displayConstant = displayConstants.includes(node.name.text);
    if (ts.isJsxText(node)) {
      // TypeScript applies JSX whitespace folding; preserve the visible value.
      const lines = node.text.replace(/\r/g, "").split("\n");
      const value = lines.map((line, index) => {
        let normalized = line.replace(/\t/g, " ");
        if (index > 0) normalized = normalized.replace(/^ +/, "");
        if (index < lines.length - 1) normalized = normalized.replace(/ +$/, "");
        return normalized;
      }).filter(Boolean).join(" ");
      register(node, value, "jsx");
    } else if (ts.isStringLiteral(node)) {
      if (ts.isJsxAttribute(node.parent) && ["title", "placeholder", "alt", "aria-label", "aria-description", "label", "detail", "description", "caption"].includes(node.parent.name.getText(ast))) register(node, node.text, "attribute");
      else if ((displayConstant || displayConstants.includes("*")) && !ts.isLiteralTypeNode(node.parent) && !(ts.isPropertyAssignment(node.parent) && node.parent.name === node)) register(node, node.text, "constant");
    }
    ts.forEachChild(node, child => visit(child, displayConstant));
  }
  visit(ast);
  let migrated = text;
  for (const edit of edits.sort((a, b) => b.start - a.start)) migrated = migrated.slice(0, edit.start) + edit.value + migrated.slice(edit.end);
  if (sources.length && !/import\s*\{[^}]*\buiText\b[^}]*\}\s*from\s*["']@\/content\/ui(?:\.admin)?["']/.test(migrated)) migrated = `import { ${resolverName === "uiText" ? "uiText" : "uiText as resolveUiText"} } from "@/content/${audience === "admin" ? "ui.admin" : "ui"}";\n` + migrated;
  return { sources, mapping, migrated };
}

export function adoptUiLiteralsMain(args: string[]) {
  const [path, batch, ...options] = args;
  if (!path || !/^(?:pages|components|lib)(?:\/[A-Za-z][A-Za-z0-9_-]*)+\.tsx?$/.test(path) || !batch || !/^[a-z][a-z0-9]*$/.test(batch)) throw new Error("Usage: adopt-ui-literals path batch [--write] [displayConstant ...]");
  const target = resolve("client/src", path);
  const moduleName = path.replace(/\.tsx?$/, "").replace(/\//g, "_") + "_" + batch;
  const result = adoptUiLiterals(readFileSync(target, "utf8"), moduleName, options.filter(option => option !== "--write"));
  if (options.includes("--write") && result.sources.length) {
    const outputs: [string, string][] = [
      [`content/ja/ui/${moduleName}.ts`, `import type { SourceText } from "../../../shared/content/types";\nexport const sources: SourceText[] = ${JSON.stringify(result.sources, null, 2)};\n`],
      ...["en", "zh-CN"].map(language => [`content/translations/${language}/ui_${moduleName}.ts`, 'import type { TranslationRecord } from "../../../shared/content/types";\nexport const records: Record<string, TranslationRecord> = {};\n'] as [string, string]),
      [`content/coverage/ui_${moduleName}.migration.json`, JSON.stringify(result.mapping, null, 2) + "\n"],
    ];
    for (const [file] of outputs) if (existsSync(resolve(file))) throw new Error(`UI source exists: ${file}`);
    for (const [file, body] of outputs) { mkdirSync(dirname(resolve(file)), { recursive: true }); writeFileSync(resolve(file), body, { flag: "wx" }); }
    writeFileSync(target, result.migrated);
  }
  console.log(JSON.stringify({ moduleName, sourceCount: result.sources.length }));
}
if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  try { adoptUiLiteralsMain(process.argv.slice(2)); } catch (error) { console.error(error instanceof Error ? error.message : "UI literal adoption failed"); process.exitCode = 1; }
}
