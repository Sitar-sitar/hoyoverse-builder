import ts from "typescript";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import type { SourceText } from "../../shared/content/types";
import { renderSources } from "./adopt";
const fields = new Set([
  "headline",
  "targetContext",
  "label",
  "reason",
  "description",
  "sourceLabel",
  "summary",
  "rationale",
]);
export function adoptGuideTemplates(target: string, moduleName: string) {
  const config = ts.readConfigFile(resolve("tsconfig.json"), ts.sys.readFile);
  const options = ts.parseJsonConfigFileContent(
    config.config,
    ts.sys,
    process.cwd()
  ).options;
  const program = ts.createProgram([target], { ...options, noEmit: true }),
    checker = program.getTypeChecker(),
    ast = program.getSourceFile(target);
  if (!ast) throw new Error("Guide source unavailable");
  const text = readFileSync(target, "utf8"),
    sources: SourceText[] = [],
    mapping: Array<{
      id: string;
      field: string;
      originalStart: number;
      bindings: Record<string, string>;
    }> = [],
    edits: Array<{ start: number; end: number; value: string }> = [];
  function visit(node: ts.Node) {
    if (
      ts.isTemplateExpression(node) &&
      /[\u3040-\u30ff\u3400-\u9fff]/.test(
        node.head.text +
          node.templateSpans.map(span => span.literal.text).join("")
      )
    ) {
      let parent: ts.Node | undefined = node.parent;
      while (
        parent &&
        !ts.isPropertyAssignment(parent) &&
        !ts.isVariableDeclaration(parent) &&
        !ts.isReturnStatement(parent)
      ) {
        if (
          ts.isCallExpression(parent) &&
          ts.isIdentifier(parent.expression) &&
          parent.expression.text === "t"
        )
          return;
        parent = parent.parent;
      }
      if (
        parent &&
        ts.isPropertyAssignment(parent) &&
        (ts.isIdentifier(parent.name) || ts.isStringLiteral(parent.name)) &&
        fields.has(parent.name.text)
      ) {
        const id =
          `guide.legacy.${moduleName}.b${String(sources.length + 1).padStart(5, "0")}` as const;
        const placeholders: Record<string, "string" | "number"> = {},
          bindings: Record<string, string> = {};
        let template = node.head.text;
        node.templateSpans.forEach((span, index) => {
          const type = checker.getTypeAtLocation(span.expression),
            parts = type.isUnion() ? type.types : [type];
          const string = parts.every(type =>
              Boolean(type.flags & ts.TypeFlags.StringLike)
            ),
            number = parts.every(type =>
              Boolean(type.flags & ts.TypeFlags.NumberLike)
            );
          const nullableString =
            parts.some(type => Boolean(type.flags & ts.TypeFlags.StringLike)) &&
            parts.every(type =>
              Boolean(
                type.flags &
                  (ts.TypeFlags.StringLike |
                    ts.TypeFlags.Null |
                    ts.TypeFlags.Undefined)
              )
            );
          if (!string && !number && !nullableString)
            throw new Error(
              `Unsupported template variable type: ${moduleName}:${span.expression.getText(ast)}`
            );
          const key = `v${index}`;
          placeholders[key] = number ? "number" : "string";
          bindings[key] =
            nullableString && !string
              ? `String(${span.expression.getText(ast)})`
              : span.expression.getText(ast);
          template += `{${key}}` + span.literal.text;
        });
        sources.push({
          id,
          ja: template,
          context: `${moduleName}: ${parent.name.text}; preserved guide template with compiler-checked variables`,
          audience: "public",
          placeholders,
          dependencies: [],
          protectedTokens: [
            ...new Set(
              template
                .replace(/\{[A-Za-z][A-Za-z0-9_]*\}/g, "")
                .match(/\d+(?:[.,]\d+)*/g) ?? []
            ),
          ],
        });
        mapping.push({
          id,
          field: parent.name.text,
          originalStart: node.getStart(ast),
          bindings,
        });
        edits.push({
          start: node.getStart(ast),
          end: node.end,
          value: `_guideTemplates.ja(${JSON.stringify(id)},{${Object.entries(
            bindings
          )
            .map(([key, expression]) => `${key}:${expression}`)
            .join(",")}})`,
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
      `import {createLegacyTexts as createGuideTemplateTexts} from "./content/legacyTexts";\nimport {sources as guideTemplateSources} from "../content/ja/guides/${moduleName}";\nconst _guideTemplates=createGuideTemplateTexts(guideTemplateSources,{},{});\n` +
      migrated;
  const parsed = ts.createSourceFile(
    "guide.ts",
    migrated,
    ts.ScriptTarget.Latest,
    true
  ) as ts.SourceFile & { parseDiagnostics: readonly ts.Diagnostic[] };
  if (parsed.parseDiagnostics.length)
    throw new Error("Guide template migration syntax invalid");
  return { sources, mapping, migrated };
}
export function adoptGuideTemplatesMain(args: string[]) {
  if (
    !["individualGuides", "buildAdvisor", "gameProviders"].includes(args[0]!) ||
    args.length > 2 ||
    (args[1] && args[1] !== "--write")
  )
    throw new Error(
      "Usage: adopt-guide-templates individualGuides|buildAdvisor|gameProviders [--write]"
    );
  const moduleName = `${args[0]}_templates`,
    target = resolve(`server/${args[0]}.ts`),
    result = adoptGuideTemplates(target, moduleName);
  if (args[1] === "--write" && result.sources.length) {
    const outputs: [string, string][] = [
      [`content/ja/guides/${moduleName}.ts`, renderSources(result.sources)],
      ...(["en", "zh-CN"] as const).map(
        language =>
          [
            `content/translations/${language}/${moduleName}.ts`,
            'import type {TranslationRecord} from "../../../shared/content/types";\nexport const records:Record<string,TranslationRecord>={};\n',
          ] as [string, string]
      ),
      [
        `content/coverage/${moduleName}.migration.json`,
        JSON.stringify(result.mapping, null, 2) + "\n",
      ],
    ];
    for (const [file] of outputs)
      if (existsSync(resolve(file)))
        throw new Error("Guide template output already exists");
    for (const [file, body] of outputs)
      writeFileSync(resolve(file), body, { flag: "wx" });
    writeFileSync(target, result.migrated);
  }
  console.log(
    `guide templates: ${moduleName}, ${result.sources.length} sources; no translation`
  );
}
if (
  process.argv[1] &&
  pathToFileURL(resolve(process.argv[1])).href === import.meta.url
) {
  try {
    adoptGuideTemplatesMain(process.argv.slice(2));
  } catch (error) {
    console.error(
      error instanceof Error ? error.message : "Template migration failed"
    );
    process.exitCode = 1;
  }
}
