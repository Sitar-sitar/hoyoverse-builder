import ts from "typescript";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import type { LinkHistoryContent } from "../../shared/content/linkHistory";
export function adoptLinkHistory(text: string) {
  const ast = ts.createSourceFile(
    "linkRecords.ts",
    text,
    ts.ScriptTarget.Latest,
    true
  );
  const declaration = ast.statements
    .filter(ts.isVariableStatement)
    .flatMap(statement => statement.declarationList.declarations)
    .find(
      item =>
        ts.isIdentifier(item.name) && item.name.text === "PARTY_LINK_BATCHES"
    );
  if (
    !declaration?.initializer ||
    !ts.isObjectLiteralExpression(declaration.initializer)
  )
    throw new Error("Link history target differs");
  function value(node: ts.Expression): any {
    if (ts.isStringLiteral(node)) return node.text;
    if (ts.isNumericLiteral(node)) return Number(node.text);
    if (ts.isArrayLiteralExpression(node)) return node.elements.map(value);
    if (ts.isObjectLiteralExpression(node))
      return Object.fromEntries(
        node.properties.map(property => {
          if (
            !ts.isPropertyAssignment(property) ||
            !(
              ts.isIdentifier(property.name) ||
              ts.isStringLiteral(property.name)
            )
          )
            throw new Error("Unclassified link history field");
          return [property.name.text, value(property.initializer)];
        })
      );
    if (
      ts.isCallExpression(node) &&
      node.expression.getText(ast) === "_content.ja" &&
      node.arguments.length === 1 &&
      ts.isStringLiteral(node.arguments[0]!)
    )
      return { kind: "textRef", id: node.arguments[0]!.text };
    if (
      ts.isArrowFunction(node) &&
      node.parameters.length === 2 &&
      ts.isIdentifier(node.parameters[0]!.name) &&
      node.parameters[0]!.name.text === "name" &&
      ts.isIdentifier(node.parameters[1]!.name) &&
      node.parameters[1]!.name.text === "record" &&
      ts.isCallExpression(node.body) &&
      node.body.expression.getText(ast) === "_content.ja" &&
      node.body.arguments.length === 2 &&
      ts.isStringLiteral(node.body.arguments[0]!) &&
      ts.isObjectLiteralExpression(node.body.arguments[1]!)
    ) {
      const bindings = Object.fromEntries(
        node.body.arguments[1]!.properties.map(property => {
          if (
            !ts.isPropertyAssignment(property) ||
            !ts.isIdentifier(property.name)
          )
            throw new Error("Unclassified link history binding");
          const key = property.name.text,
            expression = property.initializer.getText(ast);
          const expected: Record<string, [string, string]> = {
            v0: ["name", "characterName"],
            v1: ["record.added.length", "addedCount"],
            v2: ["record.removed.length", "removedCount"],
          };
          if (expected[key]?.[0] !== expression)
            throw new Error("Unknown link history variable");
          return [key, expected[key]![1]];
        })
      );
      return {
        ref: { kind: "textRef", id: node.body.arguments[0]!.text },
        bindings,
      };
    }
    throw new Error("Unclassified link history expression");
  }
  const records: LinkHistoryContent[] = declaration.initializer.properties.map(
    property => {
      if (
        !ts.isPropertyAssignment(property) ||
        !ts.isNumericLiteral(property.name)
      )
        throw new Error("Invalid link history batch key");
      const data = value(property.initializer);
      if (
        data.batch !== Number(property.name.text) ||
        JSON.stringify(Object.keys(data).sort()) !==
          JSON.stringify(
            [
              "batch",
              "date",
              "updatedAt",
              "sourceNote",
              "title",
              "summary",
              "changes",
              "rationale",
            ].sort()
          )
      )
        throw new Error("Link history fields differ");
      return {
        ...data,
        summary: data.summary.ref,
        summaryBindings: data.summary.bindings,
        changes: data.changes.map((ref: any) => ({
          blockId: `history.link.block.${ref.id}`,
          text: ref,
        })),
      };
    }
  );
  return {
    records,
    migrated:
      'import {projectLinkHistory} from "../content/linkHistory";\n' +
      text.slice(0, declaration.initializer.getStart(ast)) +
      "projectLinkHistory()" +
      text.slice(declaration.initializer.end),
  };
}
export function adoptLinkHistoryMain(args: string[]) {
  if (args.length > 1 || (args[0] && args[0] !== "--write"))
    throw new Error("Usage: adopt-link-history [--write]");
  const target = resolve("server/parties/linkRecords.ts"),
    output = resolve("content/linkHistoryRecords.ts"),
    result = adoptLinkHistory(readFileSync(target, "utf8"));
  if (args[0] === "--write") {
    if (existsSync(output)) throw new Error("Link history authority exists");
    writeFileSync(
      output,
      'import type {LinkHistoryContent} from "../shared/content/linkHistory";\nexport const linkHistoryRecords:LinkHistoryContent[]=' +
        JSON.stringify(result.records, null, 2) +
        ";\n",
      { flag: "wx" }
    );
    writeFileSync(target, result.migrated);
  }
  console.log(
    `link history: ${result.records.length} batch templates; no translation`
  );
}
if (
  process.argv[1] &&
  pathToFileURL(resolve(process.argv[1])).href === import.meta.url
) {
  try {
    adoptLinkHistoryMain(process.argv.slice(2));
  } catch (error) {
    console.error(
      error instanceof Error ? error.message : "Link history migration failed"
    );
    process.exitCode = 1;
  }
}
