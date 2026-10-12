import ts from "typescript";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import type {
  HistoryContent,
  HistoryRecord,
} from "../../shared/content/domains";
import type { TextRef } from "../../shared/content/types";

/** Decode only literal data and already migrated Japanese refs; never evaluate source. */
export function adoptHistoryRecords(text: string) {
  const ast = ts.createSourceFile(
    "history.ts",
    text,
    ts.ScriptTarget.Latest,
    true
  );
  function value(node: ts.Expression): any {
    if (ts.isStringLiteral(node)) return node.text;
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
            throw new Error("Unsupported history property");
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
    throw new Error("Unclassified history expression");
  }
  const records: HistoryRecord[] = [];
  const edits: { start: number; end: number; replacement: string }[] = [];
  function record(raw: any, characterName?: string) {
    if (
      JSON.stringify(Object.keys(raw).sort()) !==
      JSON.stringify(
        [
          "date",
          "scope",
          "title",
          "summary",
          "changes",
          "rationale",
          "games",
        ].sort()
      )
    )
      throw new Error("Unclassified history event field");
    const title = raw.title as TextRef;
    if (title?.kind !== "textRef")
      throw new Error("History title must be a reference");
    const content: HistoryContent = {
      eventId: `history.event.${title.id}`,
      date: raw.date,
      title,
      summary: raw.summary,
      changes: raw.changes.map((ref: TextRef) => ({
        blockId: `history.block.${ref.id}`,
        text: ref,
      })),
      rationale: raw.rationale,
    };
    records.push({
      content,
      scope: raw.scope,
      games: raw.games,
      legacyFieldOrder: Object.keys(raw) as HistoryRecord["legacyFieldOrder"],
      ...(characterName ? { characterName } : {}),
    });
  }
  for (const statement of ast.statements) {
    if (!ts.isVariableStatement(statement)) continue;
    for (const declaration of statement.declarationList.declarations) {
      if (!ts.isIdentifier(declaration.name) || !declaration.initializer)
        continue;
      if (declaration.name.text === "SITE_EVENTS") {
        value(declaration.initializer).forEach((event: any) => record(event));
        edits.push({
          start: declaration.initializer.getStart(ast),
          end: declaration.initializer.end,
          replacement: "staticHistoryEvents().siteEvents",
        });
      } else if (declaration.name.text === "CHARACTER_CHANGE_EVENTS") {
        const games = value(declaration.initializer);
        for (const entries of Object.values(games) as any[])
          for (const [name, events] of Object.entries(entries))
            (events as any[]).forEach(event => record(event, name));
        edits.push({
          start: declaration.initializer.getStart(ast),
          end: declaration.initializer.end,
          replacement: "staticHistoryEvents().characterEvents",
        });
      }
    }
  }
  if (edits.length !== 2 || !records.length)
    throw new Error("History migration targets differ");
  let migrated = text;
  for (const edit of edits.sort((a, b) => b.start - a.start))
    migrated =
      migrated.slice(0, edit.start) +
      edit.replacement +
      migrated.slice(edit.end);
  migrated =
    'import { staticHistoryEvents } from "./content/history";\n' + migrated;
  return { records, migrated };
}
export function adoptHistoryRecordsMain(args: string[]) {
  if (args.length > 1 || (args[0] && args[0] !== "--write"))
    throw new Error("Usage: adopt-history-records [--write]");
  const target = resolve("server/guideUpdateHistory.ts"),
    output = resolve("content/historyRecords.ts");
  const result = adoptHistoryRecords(readFileSync(target, "utf8"));
  if (args[0] === "--write") {
    if (existsSync(output)) throw new Error("History authority already exists");
    writeFileSync(
      output,
      'import type { HistoryRecord } from "../shared/content/domains";\nexport const historyRecords: HistoryRecord[] = ' +
        JSON.stringify(result.records, null, 2) +
        ";\n",
      { flag: "wx" }
    );
    writeFileSync(target, result.migrated);
  }
  console.log(
    `history authoring: ${result.records.length} fixed events; no translation`
  );
}
if (
  process.argv[1] &&
  pathToFileURL(resolve(process.argv[1])).href === import.meta.url
) {
  try {
    adoptHistoryRecordsMain(process.argv.slice(2));
  } catch (error) {
    console.error(
      error instanceof Error ? error.message : "History adoption failed"
    );
    process.exitCode = 1;
  }
}
