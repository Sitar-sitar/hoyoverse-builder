import ts from "typescript";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

/** Literal decoder for the old additive registry, including its explicit overrides. */
export function decodeCuratedConstellations(text: string, batchText: string) {
  const overrides: { identity: string; assignment: number }[] = [];
  function decoder(source: string, bindings: Record<string, unknown>) {
    const ast = ts.createSourceFile(
      "registry.ts",
      source,
      ts.ScriptTarget.Latest,
      true
    );
    function key(node: ts.PropertyName): string {
      if (
        ts.isStringLiteral(node) ||
        ts.isNumericLiteral(node) ||
        ts.isIdentifier(node)
      )
        return node.text;
      throw new Error("Unsupported constellation key");
    }
    function reference(node: ts.Expression, helper: string, method: string) {
      if (
        !ts.isCallExpression(node) ||
        !ts.isPropertyAccessExpression(node.expression) ||
        node.expression.expression.getText(ast) !== helper ||
        node.expression.name.text !== method ||
        node.arguments.length !== 1 ||
        !ts.isStringLiteral(node.arguments[0])
      )
        throw new Error("Unsupported constellation ref");
      return { kind: "textRef", id: node.arguments[0].text };
    }
    function triple(node: ts.Expression) {
      if (!ts.isSpreadElement(node))
        throw new Error("Expected explicit migrated text group");
      return reference(node.expression, "_helperContent", "triple");
    }
    function value(node: ts.Expression): unknown {
      if (ts.isAsExpression(node)) return value(node.expression);
      if (ts.isStringLiteral(node)) return node.text;
      if (ts.isNumericLiteral(node)) return Number(node.text);
      if (
        ts.isPrefixUnaryExpression(node) &&
        node.operator === ts.SyntaxKind.MinusToken &&
        ts.isNumericLiteral(node.operand)
      )
        return -Number(node.operand.text);
      if (ts.isIdentifier(node) && Object.hasOwn(bindings, node.text))
        return bindings[node.text];
      if (
        ts.isPropertyAccessExpression(node) &&
        ts.isIdentifier(node.expression) &&
        Object.hasOwn(bindings, node.expression.text)
      ) {
        const record = bindings[node.expression.text] as Record<
          string,
          unknown
        >;
        if (!Object.hasOwn(record, node.name.text))
          throw new Error("Unknown constellation metadata key");
        return record[node.name.text];
      }
      if (ts.isArrayLiteralExpression(node)) return node.elements.map(value);
      if (ts.isObjectLiteralExpression(node)) {
        const result: Record<string, unknown> = {};
        const explicit = new Set<string>();
        for (const prop of node.properties) {
          if (ts.isSpreadAssignment(prop)) {
            Object.assign(result, value(prop.expression));
            continue;
          }
          if (!ts.isPropertyAssignment(prop))
            throw new Error("Unsupported constellation property");
          const name = key(prop.name);
          if (explicit.has(name))
            throw new Error("Duplicate explicit constellation field");
          explicit.add(name);
          result[name] = value(prop.initializer);
        }
        return result;
      }
      if (ts.isCallExpression(node) && ts.isIdentifier(node.expression)) {
        const args = node.arguments;
        if (
          node.expression.text === "effect" &&
          (args.length === 3 || args.length === 4)
        )
          return {
            level: value(args[0]),
            name: triple(args[1]),
            description: triple(args[2]),
            ...(args[3] ? (value(args[3]) as object) : {}),
          };
        if (node.expression.text === "target" && args.length === 7)
          return {
            key: value(args[0]),
            label: triple(args[1]),
            unit: value(args[2]),
            targets: {
              厳選: value(args[3]),
              目標: value(args[4]),
              妥協: value(args[5]),
            },
            reason: triple(args[6]),
          };
      }
      return reference(node, "_content", "localized");
    }
    return { ast, value };
  }
  const batchDecoder = decoder(batchText, {});
  let batch: Record<string, unknown> | undefined;
  let batchSpan: { start: number; end: number } | undefined;
  for (const statement of batchDecoder.ast.statements)
    if (ts.isVariableStatement(statement)) {
      for (const declaration of statement.declarationList.declarations)
        if (
          declaration.name.getText(batchDecoder.ast) ===
            "BATCH23_GENSHIN_CONSTELLATIONS" &&
          declaration.initializer
        ) {
          batch = batchDecoder.value(declaration.initializer) as Record<
            string,
            unknown
          >;
          batchSpan = {
            start: declaration.initializer.getStart(batchDecoder.ast),
            end: declaration.initializer.end,
          };
        }
    }
  if (!batch || !batchSpan)
    throw new Error("Missing batch constellation registry");
  const bindings: Record<string, unknown> = {
    BATCH23_GENSHIN_CONSTELLATIONS: batch,
  };
  const decoded = decoder(text, bindings);
  const curated: Record<string, unknown> = {};
  const edits: { start: number; end: number; value: string }[] = [];
  let assignment = 0;
  function merge(values: Record<string, unknown>) {
    assignment++;
    for (const [identity, data] of Object.entries(values)) {
      if (Object.hasOwn(curated, identity))
        overrides.push({ identity, assignment });
      curated[identity] = data;
    }
  }
  for (const statement of decoded.ast.statements) {
    if (ts.isVariableStatement(statement))
      for (const declaration of statement.declarationList.declarations) {
        if (!declaration.initializer) continue;
        const name = declaration.name.getText(decoded.ast);
        if (name === "SOURCE")
          bindings.SOURCE = decoded.value(declaration.initializer);
        if (name === "CURATED") {
          merge(
            decoded.value(declaration.initializer) as Record<string, unknown>
          );
          edits.push({
            start: declaration.initializer.getStart(decoded.ast),
            end: declaration.initializer.end,
            value: "projectConstellations(curatedRecords)",
          });
        }
      }
    if (
      ts.isExpressionStatement(statement) &&
      ts.isCallExpression(statement.expression)
    ) {
      const call = statement.expression;
      if (
        call.expression.getText(decoded.ast) === "Object.assign" &&
        call.arguments[0]?.getText(decoded.ast) === "CURATED"
      ) {
        if (call.arguments.length !== 2)
          throw new Error("Unsupported constellation assignment");
        merge(decoded.value(call.arguments[1]) as Record<string, unknown>);
        edits.push({
          start: statement.getStart(decoded.ast),
          end: statement.end,
          value: "",
        });
      }
    }
  }
  if (!assignment) throw new Error("Missing curated registry");
  const makeRecords = (values: Record<string, unknown>, namespace: string) =>
    Object.entries(values).map(([identity, data], index) => ({
      entryId: `constellation.${namespace}.entry${String(index + 1).padStart(5, "0")}`,
      identities: [identity],
      ...(!/^(hsr|genshin|zzz):\d+(?:-\d+)?$/.test(identity)
        ? {
            legacyIdentities: {
              [identity]:
                "Existing name fallback; source ID not inferred during migration",
            },
          }
        : {}),
      data,
    }));
  // Batch 23 remains a separately shared registry, rather than copied into curated authority.
  for (const identity of Object.keys(batch)) {
    if (JSON.stringify(curated[identity]) !== JSON.stringify(batch[identity]))
      throw new Error(
        "Batch constellation override needs an explicit disposition"
      );
    delete curated[identity];
  }
  let migrated = text;
  for (const edit of edits.sort((a, b) => b.start - a.start))
    migrated =
      migrated.slice(0, edit.start) + edit.value + migrated.slice(edit.end);
  migrated =
    `import { records as curatedRecords } from "../content/constellationCurated";\nimport { projectConstellations } from "./content/constellations";\n` +
    migrated;
  migrated = migrated.replace(
    "projectConstellations(curatedRecords)",
    "{ ...BATCH23_GENSHIN_CONSTELLATIONS, ...projectConstellations(curatedRecords) }"
  );
  return {
    records: makeRecords(curated, "curated"),
    batchRecords: makeRecords(batch, "batch23"),
    migrated,
    batchMigrated:
      `import { records as constellationRecords } from "../content/constellationBatch23";\nimport { projectConstellations } from "./content/constellations";\n` +
      batchText.slice(0, batchSpan.start) +
      "projectConstellations(constellationRecords)" +
      batchText.slice(batchSpan.end),
    overrides,
  };
}
if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(resolve(process.argv[1])).href
) {
  const target = resolve("server/characterConstellations.ts");
  const batchTarget = resolve("server/batch23GenshinData.ts");
  const outputs = [
    "content/constellationCurated.ts",
    "content/constellationBatch23.ts",
    "content/coverage/curatedConstellations.migration.json",
  ];
  if (outputs.some(path => existsSync(resolve(path))))
    throw new Error("Curated constellation authority already exists");
  const result = decodeCuratedConstellations(
    readFileSync(target, "utf8"),
    readFileSync(batchTarget, "utf8")
  );
  if (process.argv.includes("--write")) {
    for (const [path, records] of [
      [outputs[0], result.records],
      [outputs[1], result.batchRecords],
    ] as const)
      writeFileSync(
        resolve(path),
        `import type { ConstellationAuthoring } from "../shared/content/constellationAuthoring";\nexport const records: ConstellationAuthoring[] = ${JSON.stringify(records, null, 2)};\n`,
        { flag: "wx" }
      );
    writeFileSync(
      resolve(outputs[2]),
      JSON.stringify(
        {
          overrides: result.overrides,
          identities: result.records.map(record => ({
            entryId: record.entryId,
            identities: record.identities,
          })),
        },
        null,
        2
      ) + "\n",
      { flag: "wx" }
    );
    writeFileSync(target, result.migrated);
    writeFileSync(batchTarget, result.batchMigrated);
  }
  console.log(
    `curated constellation records: ${result.records.length}, batch 23: ${result.batchRecords.length}, historical overrides: ${result.overrides.length}`
  );
}
