import ts from "typescript";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import type { SourceText, TranslationRecord } from "../../shared/content/types";
import { renderSources } from "./adopt";

export function adoptPartyHelpers(text: string) {
  const ast = ts.createSourceFile(
    "batch24Teams.ts",
    text,
    ts.ScriptTarget.Latest,
    true
  );
  const sources: SourceText[] = [],
    translations: {
      en: Record<string, TranslationRecord>;
      "zh-CN": Record<string, TranslationRecord>;
    } = { en: {}, "zh-CN": {} };
  const edits: Array<{ start: number; end: number; value: string }> = [],
    mapping: Array<{ id: string; originalStart: number; field: string }> = [];
  function register(
    values: string[],
    node: ts.Node,
    field: string,
    template = false
  ) {
    const id =
      `guide.legacy.parties_batch24Helpers.b${String(sources.length + 1).padStart(5, "0")}` as const;
    sources.push({
      id,
      ja: values[0]!,
      context: `batch24 ${field}; preserved existing helper output`,
      audience: "public",
      placeholders: template ? { v0: "string" } : {},
      dependencies: [],
      protectedTokens: [...new Set(values[0]!.match(/\d+(?:[.,]\d+)*/g) ?? [])],
    });
    for (const [language, index] of [
      ["en", 1],
      ["zh-CN", 2],
    ] as const)
      translations[language][id] = {
        text: values[index]!,
        sourceHash: null,
        origin: "legacy",
        review: "pending",
      };
    mapping.push({ id, originalStart: node.getStart(ast), field });
    return id;
  }
  function visit(node: ts.Node) {
    if (ts.isCallExpression(node) && ts.isIdentifier(node.expression)) {
      if (
        node.expression.text === "m" &&
        node.arguments.length === 4 &&
        node.arguments.every(ts.isStringLiteral)
      ) {
        const args = node.arguments as unknown as readonly ts.StringLiteral[];
        const name = register(
          [args[0]!.text, args[0]!.text, args[0]!.text],
          node,
          "member name"
        );
        const role = register(
          args.slice(1).map(arg => arg.text),
          node,
          "member role"
        );
        edits.push({
          start: node.getStart(ast),
          end: node.end,
          value: `({name:_partyHelper.localized(${JSON.stringify(name)}),role:_partyHelper.localized(${JSON.stringify(role)})})`,
        });
        return;
      }
      if (
        node.expression.text === "t" &&
        node.arguments.length === 3 &&
        node.arguments.every(ts.isTemplateExpression)
      ) {
        const args =
          node.arguments as unknown as readonly ts.TemplateExpression[];
        if (
          args.some(
            arg =>
              arg.templateSpans.length !== 1 ||
              arg.templateSpans[0]!.expression.getText(ast) !== "secondaryDate"
          )
        )
          throw new Error("Unclassified party helper template");
        const id = register(
          args.map(
            arg => arg.head.text + "{v0}" + arg.templateSpans[0]!.literal.text
          ),
          node,
          "secondary source label",
          true
        );
        edits.push({
          start: node.getStart(ast),
          end: node.end,
          value: `_partyHelper.localized(${JSON.stringify(id)},{v0:secondaryDate})`,
        });
        return;
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(ast);
  let migrated = text;
  for (const edit of edits.sort((a, b) => b.start - a.start))
    migrated =
      migrated.slice(0, edit.start) + edit.value + migrated.slice(edit.end);
  if (sources.length)
    migrated =
      'import {sources as helperSources} from "../../content/ja/guides/parties_batch24Helpers";\nimport {records as helperEn} from "../../content/translations/en/parties_batch24Helpers";\nimport {records as helperZh} from "../../content/translations/zh-CN/parties_batch24Helpers";\n' +
      migrated.replace(
        "const _content = createLegacyTexts(_sources, _en, _zh);",
        "const _content = createLegacyTexts(_sources, _en, _zh);\nconst _partyHelper=createLegacyTexts(helperSources,helperEn,helperZh);"
      );
  const parsed = ts.createSourceFile(
    "migrated.ts",
    migrated,
    ts.ScriptTarget.Latest,
    true
  ) as ts.SourceFile & { parseDiagnostics: readonly ts.Diagnostic[] };
  if (parsed.parseDiagnostics.length)
    throw new Error(
      "Migrated party helper has syntax errors; no files written"
    );
  return { sources, translations, mapping, migrated };
}
export function adoptPartyHelpersMain(args: string[]) {
  if (args.length > 1 || (args[0] && args[0] !== "--write"))
    throw new Error("Usage: adopt-party-helpers [--write]");
  const target = resolve("server/parties/batch24Teams.ts"),
    result = adoptPartyHelpers(readFileSync(target, "utf8"));
  if (args[0] === "--write" && result.sources.length) {
    const outputs: [string, string][] = [
      [
        "content/ja/guides/parties_batch24Helpers.ts",
        renderSources(result.sources),
      ],
      ...(["en", "zh-CN"] as const).map(
        language =>
          [
            `content/translations/${language}/parties_batch24Helpers.ts`,
            'import type {TranslationRecord} from "../../../shared/content/types";\nexport const records:Record<string,TranslationRecord>=' +
              JSON.stringify(result.translations[language], null, 2) +
              ";\n",
          ] as [string, string]
      ),
      [
        "content/coverage/parties_batch24Helpers.migration.json",
        JSON.stringify(result.mapping, null, 2) + "\n",
      ],
    ];
    for (const [file] of outputs)
      if (existsSync(resolve(file)))
        throw new Error("Party helper output already exists");
    for (const [file, body] of outputs)
      writeFileSync(resolve(file), body, { flag: "wx" });
    writeFileSync(target, result.migrated);
  }
  console.log(
    `party helpers: ${result.sources.length} source texts; no translation`
  );
}
if (
  process.argv[1] &&
  pathToFileURL(resolve(process.argv[1])).href === import.meta.url
) {
  try {
    adoptPartyHelpersMain(process.argv.slice(2));
  } catch (error) {
    console.error(
      error instanceof Error ? error.message : "Party helper adoption failed"
    );
    process.exitCode = 1;
  }
}
