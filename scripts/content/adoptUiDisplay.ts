import ts from "typescript";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { displayTextNodes } from "./uiDisplayFlow";
import type { SourceText } from "../../shared/content/types";

export function adoptUiDisplay(
  text: string,
  moduleName: string,
  excludeSites: readonly string[] = [],
  excludeTexts: readonly string[] = []
) {
  if (!/^[A-Za-z][A-Za-z0-9_]*$/.test(moduleName))
    throw new Error("Invalid UI display module name");
  const ast = ts.createSourceFile(
    moduleName + ".tsx",
    text,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX
  );
  const sources: SourceText[] = [],
    edits: Array<{ start: number; end: number; value: string }> = [],
    mapping: Array<{ id: string; start: number }> = [];
  const audience = /Admin/.test(moduleName) ? "admin" : "public";
  const modulePath = `@/content/${audience === "admin" ? "ui.admin" : "ui"}`;
  let resolver = "uiText";
  for (const statement of ast.statements)
    if (
      ts.isImportDeclaration(statement) &&
      ts.isStringLiteral(statement.moduleSpecifier) &&
      statement.moduleSpecifier.text === modulePath &&
      statement.importClause?.namedBindings &&
      ts.isNamedImports(statement.importClause.namedBindings)
    )
      for (const binding of statement.importClause.namedBindings.elements)
        if ((binding.propertyName?.text ?? binding.name.text) === "uiText")
          resolver = binding.name.text;
  if (resolver === "uiText" && /\b(?:const|let|function)\s+uiText\b/.test(text))
    resolver = "resolveUiText";
  for (const node of [...displayTextNodes(ast)].sort(
    (a, b) => a.getStart(ast) - b.getStart(ast)
  )) {
    let owner: ts.Node | undefined = node.parent;
    while (
      owner &&
      !ts.isVariableDeclaration(owner) &&
      !ts.isFunctionDeclaration(owner)
    )
      owner = owner.parent;
    const site =
      owner && "name" in owner && owner.name
        ? (owner.name as ts.Node).getText(ast)
        : "module";
    if (excludeSites.includes(site)) continue;
    if (
      !(
        ts.isStringLiteral(node) ||
        ts.isNoSubstitutionTemplateLiteral(node) ||
        ts.isTemplateExpression(node)
      )
    )
      continue;
    if (
      (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) &&
      (/^ui\./.test(node.text) || excludeTexts.includes(node.text))
    )
      continue;
    if (
      edits.some(
        edit => node.getStart(ast) >= edit.start && node.end <= edit.end
      )
    )
      throw new Error(
        "Nested display literals need explicit adoption before their surrounding template"
      );
    let value = ts.isTemplateExpression(node) ? node.head.text : node.text;
    const placeholders: SourceText["placeholders"] = {},
      variables: Record<string, string> = {};
    // Preserve JavaScript interpolation's string conversion, including nullable
    // values. Do not infer a numeric type from a property name such as copy.batch.
    if (ts.isTemplateExpression(node))
      node.templateSpans.forEach((span, index) => {
        const key = `v${index}`,
          expression = span.expression.getText(ast);
        placeholders[key] = "string";
        variables[key] = `String(${expression})`;
        value += `{${key}}` + span.literal.text;
      });
    if (!/[A-Za-z\u3040-\u30ff\u3400-\u9fff]/.test(value)) continue;
    const id = `ui.${moduleName}.display${sources.length + 1}` as const;
    sources.push({
      id,
      ja: value,
      context: `${moduleName}: existing JSX display value in ${site}`,
      audience,
      placeholders,
      dependencies: [],
      protectedTokens: [],
    });
    const call = Object.keys(variables).length
      ? `uiFormat(${JSON.stringify(id)}, {${Object.entries(variables)
          .map(([key, expression]) => `${key}:${expression}`)
          .join(",")}})`
      : `${resolver}(${JSON.stringify(id)})`;
    edits.push({
      start: node.getStart(ast),
      end: node.end,
      value: ts.isJsxAttribute(node.parent) ? `{${call}}` : call,
    });
    mapping.push({ id, start: node.getStart(ast) });
  }
  let migrated = text;
  for (const edit of edits.sort((a, b) => b.start - a.start))
    migrated =
      migrated.slice(0, edit.start) + edit.value + migrated.slice(edit.end);
  if (sources.length) {
    const hasImport = (name: string) =>
      ast.statements.some(
        statement =>
          ts.isImportDeclaration(statement) &&
          ts.isStringLiteral(statement.moduleSpecifier) &&
          statement.moduleSpecifier.text === modulePath &&
          statement.importClause?.namedBindings &&
          ts.isNamedImports(statement.importClause.namedBindings) &&
          statement.importClause.namedBindings.elements.some(
            binding =>
              (binding.propertyName?.text ?? binding.name.text) === name
          )
      );
    const imports = [
      ...(hasImport("uiText")
        ? []
        : [resolver === "uiText" ? "uiText" : "uiText as resolveUiText"]),
      ...(Object.values(sources).some(
        source => Object.keys(source.placeholders).length
      ) && !hasImport("uiFormat")
        ? ["uiFormat"]
        : []),
    ];
    if (imports.length)
      migrated =
        `import {${imports.join(",")}} from ${JSON.stringify(modulePath)};\n` +
        migrated;
  }
  return { sources, mapping, migrated };
}
export function adoptUiDisplayMain(args: string[]) {
  const [path, batch, ...options] = args;
  if (
    !path ||
    !/^(?:pages|components|lib)(?:\/[A-Za-z][A-Za-z0-9_-]*)+\.tsx?$/.test(
      path
    ) ||
    !batch ||
    !/^[a-z][a-z0-9]*$/.test(batch) ||
    options.some(
      option =>
        option !== "--write" &&
        !/^(?:site|text):[A-Za-z][A-Za-z0-9]*$/.test(option)
    )
  )
    throw new Error(
      "Usage: adopt-ui-display path batch [--write] [site:Name|text:Value ...]"
    );
  const target = resolve("client/src", path),
    moduleName = path.replace(/\.tsx?$/, "").replace(/\//g, "_") + "_" + batch;
  const result = adoptUiDisplay(
    readFileSync(target, "utf8"),
    moduleName,
    options
      .filter(value => value.startsWith("site:"))
      .map(value => value.slice(5)),
    options
      .filter(value => value.startsWith("text:"))
      .map(value => value.slice(5))
  );
  if (options.includes("--write") && result.sources.length) {
    const outputs: [[string, string], ...[string, string][]] = [
      [
        `content/ja/ui/${moduleName}.ts`,
        `import type {SourceText} from "../../../shared/content/types";\nexport const sources:SourceText[]=${JSON.stringify(result.sources, null, 2)};\n`,
      ],
      ...["en", "zh-CN"].map(
        language =>
          [
            `content/translations/${language}/ui_${moduleName}.ts`,
            'import type {TranslationRecord} from "../../../shared/content/types";\nexport const records:Record<string,TranslationRecord>={};\n',
          ] as [string, string]
      ),
      [
        `content/coverage/ui_${moduleName}.migration.json`,
        JSON.stringify(result.mapping, null, 2) + "\n",
      ],
    ];
    if (outputs.some(([path]) => existsSync(resolve(path))))
      throw new Error("UI display authoring already exists");
    for (const [path, body] of outputs)
      writeFileSync(resolve(path), body, { flag: "wx" });
    writeFileSync(target, result.migrated);
  }
  console.log(`UI display ${moduleName}: ${result.sources.length} values`);
}
if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(resolve(process.argv[1])).href
)
  adoptUiDisplayMain(process.argv.slice(2));
