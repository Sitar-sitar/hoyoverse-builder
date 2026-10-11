import ts from "typescript";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import type { SourceText, TranslationRecord } from "../../shared/content/types";
import { renderSources } from "./adopt";

/** Preserve the effect overload's existing name fallback, then freeze both
 * localized groups as explicit refs. This does not translate the fallback.
 */
export function adoptHelpers(
  text: string,
  moduleName: string,
  mode: "constellation" | "party" = "constellation"
) {
  const ast = ts.createSourceFile(
    moduleName + ".ts",
    text,
    ts.ScriptTarget.Latest,
    true
  );
  const sources: SourceText[] = [];
  const translations: Record<
    "en" | "zh-CN",
    Record<string, TranslationRecord>
  > = { en: {}, "zh-CN": {} };
  const edits: { start: number; end: number; value: string }[] = [];
  const mapping: { id: string; originalStart: number; field: string }[] = [];
  function register(
    values: [string, string, string],
    node: ts.Node,
    field: string
  ) {
    const id =
      `guide.legacy.${moduleName}.b${String(sources.length + 1).padStart(5, "0")}` as const;
    sources.push({
      id,
      ja: values[0],
      context: `${moduleName} ${field}`,
      audience: "public",
      placeholders: {},
      dependencies: [],
      protectedTokens: [...new Set(values[0].match(/\d+(?:[.,]\d+)*/g) ?? [])],
    });
    for (const [language, value] of [
      ["en", values[1]],
      ["zh-CN", values[2]],
    ] as const)
      translations[language][id] = {
        text: value,
        sourceHash: null,
        origin: "legacy",
        review: "pending",
      };
    mapping.push({ id, originalStart: node.getStart(ast), field });
    return `..._helperContent.triple(${JSON.stringify(id)})`;
  }
  function strings(
    nodes: readonly ts.Expression[]
  ): nodes is readonly ts.StringLiteral[] {
    return nodes.every(ts.isStringLiteral);
  }
  function visit(node: ts.Node) {
    if (ts.isCallExpression(node) && ts.isIdentifier(node.expression)) {
      const args = node.arguments;
      if (
        mode === "constellation" &&
        node.expression.text === "effect" &&
        args.length >= 6 &&
        strings(args.slice(1, 6))
      ) {
        const explicit = args[6] && ts.isStringLiteral(args[6]);
        if (explicit || args.length <= 7) {
          const nameJa = (args[1] as ts.StringLiteral).text;
          const nameEn = (args[2] as ts.StringLiteral).text;
          const nameZh = explicit
            ? (args[3] as ts.StringLiteral).text
            : nameJa
                .replaceAll("命ノ星座", "命之座")
                .replaceAll("心象映画", "心象电影");
          const offset = explicit ? 4 : 3;
          const description = args.slice(
            offset,
            offset + 3
          ) as unknown as readonly ts.StringLiteral[];
          if (strings(description)) {
            const name = register(
              [nameJa, nameEn, nameZh],
              args[1]!,
              "effect name"
            );
            const body = register(
              description.map(value => value.text) as [string, string, string],
              args[offset]!,
              "effect description"
            );
            edits.push({
              start: args[1]!.getStart(ast),
              end: args[offset - 1]!.end,
              value: name,
            });
            edits.push({
              start: args[offset]!.getStart(ast),
              end: args[offset + 2]!.end,
              value: body,
            });
            // Options can contain other calls, so still visit their AST separately.
            for (const option of args.slice(offset + 3)) visit(option);
            return;
          }
        }
      }
      if (
        node.expression.text === (mode === "party" ? "change" : "target") &&
        args.length === 11 &&
        strings(args.slice(1, 4)) &&
        strings(args.slice(8, 11))
      ) {
        for (const [offset, field] of [
          [1, "target label"],
          [8, "target reason"],
        ] as const) {
          const group = args.slice(
            offset,
            offset + 3
          ) as unknown as readonly ts.StringLiteral[];
          edits.push({
            start: group[0]!.getStart(ast),
            end: group[2]!.end,
            value: register(
              group.map(value => value.text) as [string, string, string],
              group[0]!,
              field
            ),
          });
        }
        return;
      }
      if (
        mode === "party" &&
        ((node.expression.text === "plan" && [4, 5].includes(args.length)) ||
          (["ownMember", "roleMember"].includes(node.expression.text) &&
            args.length === 4)) &&
        strings(args.slice(1, 4))
      ) {
        const group = args.slice(
          1,
          4
        ) as unknown as readonly ts.StringLiteral[];
        edits.push({
          start: group[0]!.getStart(ast),
          end: group[2]!.end,
          value: register(
            group.map(value => value.text) as [string, string, string],
            group[0]!,
            node.expression.text === "plan" ? "plan synergy" : "member role"
          ),
        });
        for (const option of args.slice(4)) visit(option);
        return;
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(ast);
  let migrated = text;
  const sorted = edits.sort((a, b) => b.start - a.start);
  for (let index = 1; index < sorted.length; index++)
    if (sorted[index]!.end > sorted[index - 1]!.start)
      throw new Error("Overlapping helper migration edits");
  for (const edit of sorted)
    migrated =
      migrated.slice(0, edit.start) + edit.value + migrated.slice(edit.end);
  const prefix = mode === "party" ? "../" : "./",
    contentPrefix = mode === "party" ? "../../" : "../";
  if (sources.length)
    migrated =
      `import { createLegacyTexts as createHelperTexts } from "${prefix}content/legacyTexts";\nimport { sources as helperSources } from "${contentPrefix}content/ja/guides/${moduleName}";\nimport { records as helperEn } from "${contentPrefix}content/translations/en/${moduleName}";\nimport { records as helperZh } from "${contentPrefix}content/translations/zh-CN/${moduleName}";\nconst _helperContent = createHelperTexts(helperSources, helperEn, helperZh);\n` +
      migrated;
  const parsed = ts.createSourceFile(
    moduleName + ".ts",
    migrated,
    ts.ScriptTarget.Latest,
    true
  ) as ts.SourceFile & { parseDiagnostics: readonly ts.Diagnostic[] };
  if (parsed.parseDiagnostics.length)
    throw new Error(
      "Migrated helper source has syntax errors; no files written"
    );
  return { sources, translations, mapping, migrated };
}
export function adoptHelpersMain(args: string[]) {
  if (
    !["characterConstellations", "legacyCatalog"].includes(args[0]!) ||
    args.length > 2 ||
    (args[1] && args[1] !== "--write")
  )
    throw new Error(
      "Usage: adopt-helpers characterConstellations|legacyCatalog [--write]"
    );
  const party = args[0] === "legacyCatalog";
  const moduleName = party
    ? "parties_legacyCatalog_helpers"
    : "characterConstellations_helpers";
  const target = resolve(
    party
      ? "server/parties/legacyCatalog.ts"
      : "server/characterConstellations.ts"
  );
  const result = adoptHelpers(
    readFileSync(target, "utf8"),
    moduleName,
    party ? "party" : "constellation"
  );
  if (args[1] === "--write" && result.sources.length) {
    const outputs: [string, string][] = [
      [`content/ja/guides/${moduleName}.ts`, renderSources(result.sources)],
      ...(["en", "zh-CN"] as const).map(
        language =>
          [
            `content/translations/${language}/${moduleName}.ts`,
            `import type { TranslationRecord } from "../../../shared/content/types";\nexport const records: Record<string, TranslationRecord> = ${JSON.stringify(result.translations[language], null, 2)};\n`,
          ] as [string, string]
      ),
      [
        `content/coverage/${moduleName}.migration.json`,
        JSON.stringify(result.mapping, null, 2) + "\n",
      ],
    ];
    for (const [file] of outputs)
      if (existsSync(resolve(file)))
        throw new Error(`Canonical output exists: ${file}`);
    for (const [file, body] of outputs) {
      mkdirSync(dirname(resolve(file)), { recursive: true });
      writeFileSync(resolve(file), body, { flag: "wx" });
    }
    writeFileSync(target, result.migrated);
  }
  console.log(
    JSON.stringify({ moduleName, sourceCount: result.sources.length })
  );
}
if (
  process.argv[1] &&
  pathToFileURL(resolve(process.argv[1])).href === import.meta.url
) {
  try {
    adoptHelpersMain(process.argv.slice(2));
  } catch (error) {
    console.error(
      error instanceof Error ? error.message : "Helper adoption failed"
    );
    process.exitCode = 1;
  }
}
