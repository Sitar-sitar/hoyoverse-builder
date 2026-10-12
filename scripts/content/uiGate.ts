import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { uiAudit, uiFiles, type UiLiteral } from "./uiAudit";
import ts from "typescript";

export type UiException = { fingerprint: string; file: string; site: string; text: string; count: number; reason: string; withdrawal: string };
export function literalFingerprint(item: UiLiteral) {
  return createHash("sha256").update(JSON.stringify([item.file, item.site, item.kind, item.text, item.parent.replace(/\r\n/g, "\n")])).digest("hex");
}
export function uiGateIssues(findings: UiLiteral[], exceptions: UiException[]) {
  const counts = new Map<string, number>();
  for (const finding of findings) { const key = literalFingerprint(finding); counts.set(key, (counts.get(key) ?? 0) + 1); }
  const allowed = new Set<string>();
  const issues: string[] = [];
  for (const exception of exceptions) {
    if (allowed.has(exception.fingerprint) || !exception.reason.trim() || !exception.withdrawal.trim() || !Number.isInteger(exception.count) || exception.count < 1) issues.push(`Invalid UI exception: ${exception.file}:${exception.site}`);
    allowed.add(exception.fingerprint);
    if ((counts.get(exception.fingerprint) ?? 0) !== exception.count) issues.push(`UI exception changed or obsolete: ${exception.file}:${exception.site}`);
  }
  for (const finding of findings) if (!allowed.has(literalFingerprint(finding))) issues.push(`UI text bypass: ${finding.file}:${finding.line}:${finding.kind}`);
  return issues;
}
export function uiReferenceIssues(text: string, file: string, sourceIds: ReadonlySet<string>) {
  const ast = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true, file.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS);
  const issues: string[] = [];
  const resolvers = new Map<string, string>();
  function visit(node: ts.Node) {
    if (ts.isImportDeclaration(node) && ts.isStringLiteral(node.moduleSpecifier)) {
      if (/ui(?:\.admin)?\.generated/.test(node.moduleSpecifier.text)) issues.push(`UI generated data bypass: ${file}`);
      if (/@\/content\/ui(?:\.admin)?$/.test(node.moduleSpecifier.text) && node.importClause?.namedBindings && ts.isNamedImports(node.importClause.namedBindings)) {
        for (const binding of node.importClause.namedBindings.elements) resolvers.set(binding.name.text, binding.propertyName?.text ?? binding.name.text);
      }
    }
    if (ts.isCallExpression(node) && ts.isIdentifier(node.expression) && resolvers.has(node.expression.text)) {
      const helper = resolvers.get(node.expression.text)!;
      const first = node.arguments[0];
      let refs: ts.Expression[] = [];
      if (helper === "uiDictionary" && first && ts.isObjectLiteralExpression(first)) refs = first.properties.flatMap(property => ts.isPropertyAssignment(property) ? [property.initializer] : []);
      else if (helper !== "uiDictionary" && first) refs = [first];
      // Conditional refs may choose between a fixed pair of known templates.
      function validate(ref: ts.Expression) {
        if (ts.isConditionalExpression(ref)) { validate(ref.whenTrue); validate(ref.whenFalse); }
        else if (!ts.isStringLiteral(ref) || !sourceIds.has(ref.text)) issues.push(`Unknown or dynamic UI reference: ${file}`);
      }
      if (!refs.length) issues.push(`UI reference must be explicit: ${file}`);
      refs.forEach(validate);
    }
    ts.forEachChild(node, visit);
  }
  visit(ast); return issues;
}
export function checkUiGate(sourceIds?: ReadonlySet<string>) {
  const exceptions = JSON.parse(readFileSync(resolve("content/coverage/ui.exceptions.v1.json"), "utf8")) as UiException[];
  const issues = uiGateIssues(uiAudit(), exceptions);
  if (sourceIds) for (const file of uiFiles()) issues.push(...uiReferenceIssues(readFileSync(file, "utf8"), file, sourceIds));
  if (issues.length) throw new Error(issues.join("\n"));
  return { exceptions: exceptions.length, legacyCompatibility: exceptions.filter(entry => entry.withdrawal.startsWith("Legacy display")) };
}
