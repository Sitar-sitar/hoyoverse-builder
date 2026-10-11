import ts from "typescript";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import type { HistoryContent } from "../../shared/content/domains";
import type { TextRef } from "../../shared/content/types";

export function adoptHistoryBatches(text: string) {
  const ast = ts.createSourceFile(
    "history.ts",
    text,
    ts.ScriptTarget.Latest,
    true
  );
  const declaration = ast.statements
    .filter(ts.isVariableStatement)
    .flatMap(statement => statement.declarationList.declarations)
    .find(
      item =>
        ts.isIdentifier(item.name) && item.name.text === "BATCH_EVENT_TEMPLATES"
    );
  if (
    !declaration?.initializer ||
    !ts.isObjectLiteralExpression(declaration.initializer)
  )
    throw new Error("History batch targets differ");
  function ref(node: ts.Expression): TextRef {
    if (
      !ts.isCallExpression(node) ||
      node.expression.getText(ast) !== "_content.ja" ||
      node.arguments.length !== 1 ||
      !ts.isStringLiteral(node.arguments[0]!)
    )
      throw new Error("Unclassified history reference");
    return { kind: "textRef", id: node.arguments[0]!.text as TextRef["id"] };
  }
  const records = declaration.initializer.properties.map(property => {
    if (
      !ts.isPropertyAssignment(property) ||
      !ts.isNumericLiteral(property.name) ||
      !ts.isObjectLiteralExpression(property.initializer)
    )
      throw new Error("Unclassified history batch");
    const batch = Number(property.name.text);
    const fields = Object.fromEntries(
      property.initializer.properties.map(field => {
        if (!ts.isPropertyAssignment(field) || !ts.isIdentifier(field.name))
          throw new Error("Unclassified batch field");
        return [field.name.text, field.initializer];
      })
    );
    if (
      JSON.stringify(Object.keys(fields).sort()) !==
      JSON.stringify(
        ["date", "title", "summary", "changes", "rationale"].sort()
      )
    )
      throw new Error("Unclassified history batch field");
    const summary = fields.summary!;
    if (
      !ts.isArrowFunction(summary) ||
      summary.parameters.length !== 1 ||
      !ts.isIdentifier(summary.parameters[0]!.name) ||
      !ts.isCallExpression(summary.body) ||
      summary.body.expression.getText(ast) !== "_content.ja" ||
      summary.body.arguments.length !== 2 ||
      !ts.isStringLiteral(summary.body.arguments[0]!) ||
      !ts.isObjectLiteralExpression(summary.body.arguments[1]!)
    )
      throw new Error("Unclassified history template");
    const bindings = summary.body.arguments[1]!.properties;
    if (
      bindings.length !== 1 ||
      !ts.isPropertyAssignment(bindings[0]!) ||
      !ts.isIdentifier(bindings[0]!.name) ||
      bindings[0]!.name.text !== "v0" ||
      !ts.isIdentifier(bindings[0]!.initializer) ||
      bindings[0]!.initializer.text !== summary.parameters[0]!.name.text
    )
      throw new Error("Unclassified history template binding");
    if (
      !ts.isStringLiteral(fields.date!) ||
      !ts.isArrayLiteralExpression(fields.changes!)
    )
      throw new Error("Invalid history date/changes");
    const content: HistoryContent = {
      eventId: `history.batch.${batch}`,
      date: fields.date!.text,
      title: ref(fields.title!),
      summary: {
        kind: "textRef",
        id: summary.body.arguments[0]!.text as TextRef["id"],
      },
      changes: fields.changes!.elements.map(node => {
        const text = ref(node);
        return { blockId: `history.block.${text.id}`, text };
      }),
      rationale: ref(fields.rationale!),
    };
    return {
      batch,
      content,
      summaryBindings: { v0: "characterName" as const },
    };
  });
  const migrated =
    'import { batchHistoryTemplates } from "./content/history";\n' +
    text.slice(0, declaration.initializer.getStart(ast)) +
    "batchHistoryTemplates()" +
    text.slice(declaration.initializer.end);
  return { records, migrated };
}
export function adoptHistoryBatchesMain(args: string[]) {
  if (args.length > 1 || (args[0] && args[0] !== "--write"))
    throw new Error("Usage: adopt-history-batches [--write]");
  const target = resolve("server/guideUpdateHistory.ts"),
    output = resolve("content/historyBatches.ts");
  const result = adoptHistoryBatches(readFileSync(target, "utf8"));
  if (args[0] === "--write") {
    if (existsSync(output))
      throw new Error("History batch authority already exists");
    writeFileSync(
      output,
      'import type {HistoryBatchRecord} from "../shared/content/domains";\nexport const historyBatches:HistoryBatchRecord[]=' +
        JSON.stringify(result.records, null, 2) +
        ";\n",
      { flag: "wx" }
    );
    writeFileSync(target, result.migrated);
  }
  console.log(
    `history authoring: ${result.records.length} fixed batch templates; no translation`
  );
}
if (
  process.argv[1] &&
  pathToFileURL(resolve(process.argv[1])).href === import.meta.url
) {
  try {
    adoptHistoryBatchesMain(process.argv.slice(2));
  } catch (error) {
    console.error(
      error instanceof Error ? error.message : "History adoption failed"
    );
    process.exitCode = 1;
  }
}
