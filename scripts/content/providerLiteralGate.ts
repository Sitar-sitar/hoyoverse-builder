import ts from "typescript";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import registry from "../../content/coverage/provider-literals.v1.json";

export function providerLiterals(text: string, file: string) {
  const ast = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true);
  const entries: { file: string; line: number; literal: string; fingerprint: string }[] = [];
  function visit(node: ts.Node) {
    if ((ts.isStringLiteralLike(node) || ts.isTemplateExpression(node)) && /[\u3040-\u30ff\u3400-\u9fff]/.test(node.getText(ast))) {
      const literal = node.getText(ast);
      const context = node.parent.getText(ast).replace(/\s+/g, " ");
      entries.push({ file, line: ast.getLineAndCharacterOfPosition(node.getStart(ast)).line + 1, literal,
        fingerprint: createHash("sha256").update(context).digest("hex") });
      if (ts.isTemplateExpression(node)) return;
    }
    ts.forEachChild(node, visit);
  }
  visit(ast);
  return entries;
}

/** Fixed reviewed occurrences only: new literals and changed contexts require review. */
export function compareProviderLiterals(actual: ReturnType<typeof providerLiterals>, expected = registry.entries) {
  const counts = new Map<string, number>();
  const key = (entry: { file: string; literal: string; fingerprint: string }) => JSON.stringify([entry.file, entry.literal, entry.fingerprint]);
  for (const entry of actual) counts.set(key(entry), (counts.get(key(entry)) ?? 0) + 1);
  const issues: string[] = [];
  for (const entry of expected) {
    if (!entry.reason || !entry.withdrawal) issues.push(`Unexplained exclusion: ${entry.file}`);
    const found = counts.get(key(entry)) ?? 0;
    if (found !== entry.count) issues.push(`Changed provider literal: ${entry.file}:${entry.literal}`);
    counts.delete(key(entry));
  }
  for (const entry of counts.keys()) issues.push(`Unregistered provider literal: ${entry}`);
  return issues;
}

export function checkProviderLiteralGate(root = resolve(".")) {
  const entries = registry.files.flatMap(file => providerLiterals(readFileSync(resolve(root, file), "utf8"), file));
  const issues = compareProviderLiterals(entries);
  if (issues.length) throw new Error(issues.join("\n"));
  return { files: registry.files, reviewedOccurrences: entries.length, policy: "Fixed computation keys, localized enums, normalization, identity matching and operational logs; no display prose exclusions" };
}
