import ts from "typescript";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

/** Decode only the already migrated literal batch. Never evaluate source code. */
export function decodeConstellations(text: string) {
  const ast = ts.createSourceFile(
    "batch.ts",
    text,
    ts.ScriptTarget.Latest,
    true
  );
  const entries = new Map<string, Record<string, unknown>>();
  const aliases: Record<string, string[]> = {};
  let names: string[] = [];
  function ref(node: ts.Expression, helper: string, method: string) {
    if (
      !ts.isCallExpression(node) ||
      !ts.isPropertyAccessExpression(node.expression) ||
      node.expression.expression.getText(ast) !== helper ||
      node.expression.name.text !== method ||
      node.arguments.length !== 1 ||
      !ts.isStringLiteral(node.arguments[0])
    )
      throw new Error("Unsupported constellation reference");
    return { kind: "textRef", id: node.arguments[0].text };
  }
  function value(node: ts.Expression): unknown {
    if (ts.isStringLiteral(node)) return node.text;
    if (ts.isNumericLiteral(node)) return Number(node.text);
    if (ts.isArrayLiteralExpression(node))
      return node.elements.map(item => value(item));
    if (ts.isObjectLiteralExpression(node))
      return Object.fromEntries(
        node.properties.map(prop => {
          if (!ts.isPropertyAssignment(prop))
            throw new Error("Unsupported constellation property");
          return [prop.name.getText(ast), value(prop.initializer)];
        })
      );
    if (
      ts.isCallExpression(node) &&
      node.expression.getText(ast) === "effect"
    ) {
      const [level, name, description] = node.arguments;
      if (
        node.arguments.length !== 3 ||
        !ts.isSpreadElement(name) ||
        !ts.isSpreadElement(description)
      )
        throw new Error("Unsupported constellation effect");
      return {
        level: value(level),
        name: ref(name.expression, "_helperContent", "triple"),
        description: ref(description.expression, "_helperContent", "triple"),
      };
    }
    return ref(node, "_content", "localized");
  }
  for (const statement of ast.statements) {
    if (!ts.isVariableStatement(statement)) continue;
    for (const declaration of statement.declarationList.declarations) {
      const name = declaration.name.getText(ast);
      if (!declaration.initializer) continue;
      if (/^entry\d+$/.test(name))
        entries.set(
          name,
          value(declaration.initializer) as Record<string, unknown>
        );
      if (name === "BATCH_17_CHARACTER_NAMES") {
        const expression = ts.isAsExpression(declaration.initializer)
          ? declaration.initializer.expression
          : declaration.initializer;
        names = value(expression) as string[];
      }
      if (name === "BATCH_17_CONSTELLATIONS") {
        if (!ts.isObjectLiteralExpression(declaration.initializer))
          throw new Error("Unsupported alias dictionary");
        for (const prop of declaration.initializer.properties) {
          if (
            !ts.isPropertyAssignment(prop) ||
            !ts.isStringLiteral(prop.name) ||
            !ts.isIdentifier(prop.initializer)
          )
            throw new Error("Unsupported constellation alias");
          (aliases[prop.initializer.text] ??= []).push(prop.name.text);
        }
      }
    }
  }
  if (
    !entries.size ||
    !names.length ||
    Object.keys(aliases).some(key => !entries.has(key))
  )
    throw new Error("Incomplete constellation batch");
  const records = [...entries].map(([id, data]) => {
    if (!aliases[id]?.length) throw new Error("Unbound constellation entry");
    return {
      entryId: `constellation.batch17.${id}`,
      identities: aliases[id],
      data,
    };
  });
  return { records, names };
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(resolve(process.argv[1])).href
) {
  const target = resolve("server/batch17ConstellationData.generated.ts");
  const output = resolve("content/constellationBatch17.ts");
  if (existsSync(output))
    throw new Error("Constellation authority already exists");
  const decoded = decodeConstellations(readFileSync(target, "utf8"));
  if (process.argv.includes("--write")) {
    writeFileSync(
      output,
      `import type { ConstellationAuthoring } from "../shared/content/constellationAuthoring";\nexport const records: ConstellationAuthoring[] = ${JSON.stringify(decoded.records, null, 2)};\n`,
      { flag: "wx" }
    );
    writeFileSync(
      target,
      `/** Compatibility projection. Authoring lives in content/constellationBatch17.ts. */\nimport { records } from "../content/constellationBatch17";\nimport { projectConstellations } from "./content/constellations";\nexport type { Batch17ConstellationEntry } from "../shared/content/constellationAuthoring";\nexport const BATCH_17_CHARACTER_NAMES = ${JSON.stringify(decoded.names, null, 2)} as const;\nexport const BATCH_17_CONSTELLATIONS = projectConstellations(records);\n`
    );
  }
  console.log(`constellation entries: ${decoded.records.length}`);
}
