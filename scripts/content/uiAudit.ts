import ts from "typescript";
import { readdirSync, readFileSync } from "node:fs";
import { relative, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { displayTextNodes, DISPLAY_ATTRIBUTES } from "./uiDisplayFlow";

export type UiLiteral = {
  file: string;
  line: number;
  kind: "jsx" | "attribute" | "literal" | "template";
  text: string;
  site: string;
  parent: string;
};
const japanese = /[\u3040-\u30ff\u3400-\u9fff]/;

/** Inventory literal bypasses, including dictionaries/constants and dynamic templates.
 * This deliberately does not silently exempt existing literals. The inventory is
 * migration work, not a claim that the remaining UI satisfies the release gate.
 */
export function auditUiText(
  text: string,
  file: string,
  options: {
    sourceFile?: ts.SourceFile;
    resolveImport?: (
      from: ts.SourceFile,
      module: string
    ) => ts.SourceFile | undefined;
    seen?: WeakSet<ts.Node>;
  } = {}
): UiLiteral[] {
  const ast =
    options.sourceFile ??
    ts.createSourceFile(
      file,
      text,
      ts.ScriptTarget.Latest,
      true,
      file.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS
    );
  const findings: UiLiteral[] = [];
  const seen = options.seen ?? new WeakSet<ts.Node>();
  function add(
    node: ts.Node,
    value: string,
    kind: UiLiteral["kind"],
    display = false
  ) {
    if (seen.has(node)) return;
    const owner = node.getSourceFile();
    if (
      !japanese.test(value) &&
      ts.isPropertyAssignment(node.parent) &&
      node.parent.name === node
    )
      return;
    if (
      !display &&
      ts.isCallExpression(node.parent) &&
      ts.isIdentifier(node.parent.expression) &&
      ["t", "uiText", "uiFormat", "uiLocalized", "resolveUiText"].includes(
        node.parent.expression.text
      )
    )
      return;
    let localizedDictionary = false;
    for (
      let parent: ts.Node | undefined = node.parent;
      parent && !ts.isVariableDeclaration(parent);
      parent = parent.parent
    ) {
      if (
        ts.isPropertyAssignment(parent) &&
        [
          "ja",
          "en",
          "zh-CN",
          "title",
          "label",
          "description",
          "caption",
          "message",
          "placeholder",
        ].includes(parent.name.getText(owner).replace(/^["']|["']$/g, ""))
      )
        localizedDictionary = true;
    }
    if (
      !japanese.test(value) &&
      !(
        (display ||
          kind === "jsx" ||
          kind === "attribute" ||
          localizedDictionary) &&
        /[A-Za-z]/.test(value) &&
        (display || !/^ui\./.test(value))
      )
    )
      return;
    let scope: ts.Node | undefined = node.parent;
    while (
      scope &&
      !ts.isVariableDeclaration(scope) &&
      !ts.isTypeAliasDeclaration(scope) &&
      !ts.isFunctionDeclaration(scope)
    )
      scope = scope.parent;
    const site =
      scope && "name" in scope && scope.name
        ? (scope.name as ts.Node).getText(owner)
        : "module";
    seen.add(node);
    findings.push({
      file: owner.fileName,
      line: owner.getLineAndCharacterOfPosition(node.getStart(owner)).line + 1,
      kind,
      text: value,
      site,
      parent: node.parent.getText(owner),
    });
  }
  function visit(node: ts.Node) {
    if (ts.isJsxText(node)) add(node, node.text.trim(), "jsx");
    else if (
      ts.isStringLiteral(node) ||
      ts.isNoSubstitutionTemplateLiteral(node)
    ) {
      if (
        !ts.isJsxAttribute(node.parent) ||
        DISPLAY_ATTRIBUTES.has(node.parent.name.getText(ast))
      )
        add(
          node,
          node.text,
          ts.isJsxAttribute(node.parent) ? "attribute" : "literal"
        );
    } else if (ts.isTemplateExpression(node)) {
      const value =
        node.head.text +
        node.templateSpans.map(span => "${…}" + span.literal.text).join("");
      add(node, value, "template");
    }
    ts.forEachChild(node, visit);
  }
  visit(ast);
  for (const node of displayTextNodes(ast, options.resolveImport)) {
    if (ts.isTemplateExpression(node))
      add(
        node,
        node.head.text +
          node.templateSpans.map(span => "${…}" + span.literal.text).join(""),
        "template",
        true
      );
    else if (
      ts.isStringLiteral(node) ||
      ts.isNoSubstitutionTemplateLiteral(node)
    )
      add(
        node,
        node.text,
        ts.isJsxAttribute(node.parent) ? "attribute" : "literal",
        true
      );
  }
  return findings;
}

export function uiFiles(root = resolve("client/src")): string[] {
  const files: string[] = [];
  function walk(directory: string) {
    for (const entry of readdirSync(directory, { withFileTypes: true }).sort(
      (a, b) => a.name.localeCompare(b.name)
    )) {
      const path = resolve(directory, entry.name);
      if (entry.isDirectory()) {
        if (entry.name !== "content") walk(path);
      } else if (
        /\.tsx?$/.test(entry.name) &&
        !/\.(test|spec)\./.test(entry.name)
      )
        files.push(path);
    }
  }
  walk(root);
  return files;
}
export function uiAudit(root = resolve("client/src")): UiLiteral[] {
  const files = uiFiles(root);
  const sources = new Map(
    files.map(file => {
      const name = relative(root, file).replace(/\\/g, "/");
      return [
        name,
        ts.createSourceFile(
          name,
          readFileSync(file, "utf8"),
          ts.ScriptTarget.Latest,
          true,
          file.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS
        ),
      ];
    })
  );
  const seen = new WeakSet<ts.Node>();
  const resolveImport = (from: ts.SourceFile, module: string) => {
    const path = module.startsWith("@/")
      ? module.slice(2)
      : module.startsWith(".")
        ? relative(root, resolve(root, from.fileName, "..", module)).replace(
            /\\/g,
            "/"
          )
        : undefined;
    return path
      ? (sources.get(`${path}.tsx`) ??
          sources.get(`${path}.ts`) ??
          sources.get(`${path}/index.tsx`) ??
          sources.get(`${path}/index.ts`))
      : undefined;
  };
  return [...sources].flatMap(([name, sourceFile]) =>
    auditUiText(sourceFile.text, name, { sourceFile, seen, resolveImport })
  );
}

if (
  process.argv[1] &&
  pathToFileURL(resolve(process.argv[1])).href === import.meta.url
) {
  console.log(JSON.stringify(uiAudit(), null, 2));
}
