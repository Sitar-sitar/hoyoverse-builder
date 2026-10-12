import ts from "typescript";
import { readdirSync, readFileSync } from "node:fs";
import { resolve, relative } from "node:path";

export type SourceUse = { file: string; line: number; role: "authoring" | "runtime" };

/** Literal references are evidence of use, never proof of runtime reachability. */
export function literalSourceUses(text: string, file: string, ids: Set<string>) {
  const ast = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true,
    file.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS);
  const found: Array<{ id: string } & SourceUse> = [];
  const visit = (node: ts.Node) => {
    if (ts.isStringLiteralLike(node) && ids.has(node.text)) {
      found.push({ id: node.text, file,
        line: ast.getLineAndCharacterOfPosition(node.getStart(ast)).line + 1,
        role: file.startsWith("content/") ? "authoring" : "runtime" });
    }
    ts.forEachChild(node, visit);
  };
  visit(ast);
  return found;
}

export function sourceUsageReport(ids: Set<string>, root = resolve(".")) {
  const uses = new Map<string, SourceUse[]>();
  const scan = (directory: string) => {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const path = resolve(directory, entry.name);
      const file = relative(root, path).replace(/\\/g, "/");
      if (entry.isDirectory()) {
        if (!file.startsWith("content/ja") && !file.startsWith("content/translations") &&
            !file.startsWith("content/coverage")) scan(path);
      } else if (/\.tsx?$/.test(file) && !/\.(test|generated)\.tsx?$/.test(file) &&
          file !== "content/catalog.ts" && file !== "client/src/content/manifest.ts") {
        for (const { id, ...use } of literalSourceUses(readFileSync(path, "utf8"), file, ids)) {
          const list = uses.get(id) ?? [];
          list.push(use); uses.set(id, list);
        }
      }
    }
  };
  for (const directory of ["content", "server", "client/src"]) scan(resolve(root, directory));
  const entries = [...ids].sort().map(id => ({ id, uses: uses.get(id) ?? [],
    classification: uses.has(id) ? "literal-reference-found" : "usage-unresolved" }));
  return { method: "TypeScript AST literal references; dynamic references require review",
    policy: "Keep every original and legacy translation; unresolved usage is not retirement evidence",
    referenced: entries.filter(entry => entry.uses.length).length,
    unresolved: entries.filter(entry => !entry.uses.length).length, entries };
}
