import ts from "typescript";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import type { GuideAuthoringRecord } from "../../shared/content/guideAuthoring";
import type { SourceText, TextRef } from "../../shared/content/types";
import { renderSources } from "./adopt";

export function decodeGuideDefinitions(
  text: string,
  moduleName: string,
  registries: Record<
    string,
    { game: GuideAuthoringRecord["game"]; kind: "name" | "sourceId" }
  >
) {
  const ast = ts.createSourceFile(
    "guides.ts",
    text,
    ts.ScriptTarget.Latest,
    true
  );
  const constants = new Map<string, ts.Expression>();
  const helpers = new Map<string, ts.FunctionDeclaration | ts.ArrowFunction>();
  for (const statement of ast.statements) {
    if (ts.isFunctionDeclaration(statement) && statement.name)
      helpers.set(statement.name.text, statement);
    if (ts.isVariableStatement(statement))
      for (const declaration of statement.declarationList.declarations)
        if (ts.isIdentifier(declaration.name) && declaration.initializer) {
          if (ts.isArrowFunction(declaration.initializer))
            helpers.set(declaration.name.text, declaration.initializer);
          else constants.set(declaration.name.text, declaration.initializer);
        }
  }
  const sources: SourceText[] = [];
  const records: GuideAuthoringRecord[] = [];
  const edits: Array<{ start: number; end: number; value: string }> = [];
  const mapping: Array<{
    guideId: string;
    registry: string;
    lookupKey: string;
  }> = [];
  const display = new Set([
    "headline",
    "relicSet",
    "planarSet",
    "slot",
    "value",
    "label",
    "targetContext",
    "sourceLabel",
  ]);
  function ref(value: unknown, context: string): TextRef {
    if (
      value &&
      typeof value === "object" &&
      "kind" in value &&
      value.kind === "textRef"
    )
      return value as TextRef;
    if (typeof value !== "string" || !value.trim())
      throw new Error("Missing guide display text");
    const id =
      `guide.legacy.${moduleName}.b${String(sources.length + 1).padStart(5, "0")}` as const;
    sources.push({
      id,
      ja: value,
      context,
      audience: "public",
      placeholders: {},
      dependencies: [],
      protectedTokens: [...new Set(value.match(/\d+(?:[.,]\d+)*/g) ?? [])],
    });
    return { kind: "textRef", id };
  }
  function key(node: ts.PropertyName) {
    if (
      ts.isIdentifier(node) ||
      ts.isStringLiteral(node) ||
      ts.isNumericLiteral(node)
    )
      return node.text;
    throw new Error("Unsupported guide field");
  }
  function value(
    node: ts.Expression,
    environment: Record<string, unknown> = {},
    stack: string[] = []
  ): any {
    if (ts.isAsExpression(node) || ts.isParenthesizedExpression(node))
      return value(node.expression, environment, stack);
    if (ts.isIdentifier(node)) {
      if (Object.hasOwn(environment, node.text)) return environment[node.text];
      const expression = constants.get(node.text);
      if (expression) {
        if (stack.includes(node.text)) throw new Error("Cyclic guide constant");
        return value(expression, environment, [...stack, node.text]);
      }
    }
    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node))
      return node.text;
    if (ts.isNumericLiteral(node)) return Number(node.text);
    if (
      ts.isPrefixUnaryExpression(node) &&
      node.operator === ts.SyntaxKind.MinusToken &&
      ts.isNumericLiteral(node.operand)
    )
      return -Number(node.operand.text);
    if (ts.isArrayLiteralExpression(node))
      return node.elements.flatMap(item =>
        ts.isSpreadElement(item)
          ? value(item.expression, environment, stack)
          : [value(item, environment, stack)]
      );
    if (ts.isObjectLiteralExpression(node)) {
      const result: Record<string, unknown> = {};
      const explicit = new Set<string>();
      for (const prop of node.properties) {
        if (ts.isSpreadAssignment(prop)) {
          Object.assign(result, value(prop.expression, environment, stack));
          continue;
        }
        const name = ts.isShorthandPropertyAssignment(prop)
          ? prop.name.text
          : ts.isPropertyAssignment(prop)
            ? key(prop.name)
            : undefined;
        if (!name || explicit.has(name))
          throw new Error("Duplicate or unsupported guide field");
        explicit.add(name);
        result[name] = value(
          ts.isShorthandPropertyAssignment(prop)
            ? prop.name
            : (prop as ts.PropertyAssignment).initializer,
          environment,
          stack
        );
      }
      return result;
    }
    if (
      ts.isCallExpression(node) &&
      ts.isPropertyAccessExpression(node.expression) &&
      node.expression.name.text === "ja" &&
      ["_content", "_guideTemplates"].includes(
        node.expression.expression.getText(ast)
      )
    ) {
      if (node.arguments.length !== 1 || !ts.isStringLiteral(node.arguments[0]))
        throw new Error("Unsupported guide text binding");
      return { kind: "textRef", id: node.arguments[0].text };
    }
    if (
      ts.isCallExpression(node) &&
      ts.isIdentifier(node.expression) &&
      helpers.has(node.expression.text)
    ) {
      const helper = helpers.get(node.expression.text)!;
      if (stack.includes(node.expression.text))
        throw new Error("Cyclic guide helper");
      if (node.arguments.length > helper.parameters.length)
        throw new Error("Guide helper arguments differ");
      const local = { ...environment };
      helper.parameters.forEach((parameter, index) => {
        if (!ts.isIdentifier(parameter.name))
          throw new Error("Unsupported guide parameter");
        const argument = node.arguments[index] ?? parameter.initializer;
        if (!argument) throw new Error("Missing guide helper argument");
        local[parameter.name.text] = value(argument, environment, stack);
      });
      const body = helper.body;
      if (!body) throw new Error("Missing guide helper body");
      if (ts.isBlock(body)) {
        if (
          body.statements.length !== 1 ||
          !ts.isReturnStatement(body.statements[0]) ||
          !body.statements[0].expression
        )
          throw new Error("Unsupported guide helper body");
        return value(body.statements[0].expression, local, [
          ...stack,
          node.expression.text,
        ]);
      }
      return value(body, local, [...stack, node.expression.text]);
    }
    throw new Error(`Unsupported guide expression: ${node.kind}`);
  }
  for (const [registry, policy] of Object.entries(registries)) {
    const dictionary: Record<string, any> = {};
    let declaration: ts.VariableDeclaration | undefined;
    for (const statement of ast.statements) {
      if (ts.isVariableStatement(statement))
        for (const item of statement.declarationList.declarations)
          if (item.name.getText(ast) === registry && item.initializer) {
            declaration = item;
            Object.assign(dictionary, value(item.initializer));
          }
      if (
        ts.isExpressionStatement(statement) &&
        ts.isCallExpression(statement.expression)
      ) {
        const call = statement.expression;
        if (
          call.expression.getText(ast) === "Object.assign" &&
          call.arguments[0]?.getText(ast) === registry
        ) {
          if (call.arguments.length !== 2)
            throw new Error("Unsupported guide assignment");
          Object.assign(dictionary, value(call.arguments[1]));
          edits.push({
            start: statement.getStart(ast),
            end: statement.end,
            value: "",
          });
        }
      }
    }
    if (!declaration?.initializer)
      throw new Error(`Missing guide registry ${registry}`);
    edits.push({
      start: declaration.initializer.getStart(ast),
      end: declaration.initializer.end,
      value: `projectGuideRegistry(guideRecords, ${JSON.stringify(registry)})`,
    });
    for (const [lookupKey, raw] of Object.entries(dictionary)) {
      if (
        Object.keys(raw).some(
          key =>
            !display.has(key) &&
            ![
              "mainStats",
              "targets",
              "dataAsOf",
              "updatedAt",
              "profileId",
            ].includes(key)
        )
      )
        throw new Error("Unclassified guide definition field");
      const guideId = `guide.authoring.${moduleName}.b${String(records.length + 1).padStart(5, "0")}`;
      const refs = Object.fromEntries(
        Object.entries(raw)
          .filter(([key]) => display.has(key))
          .map(([key, text]) => [
            key,
            ref(text, `${policy.game} ${guideId}: ${key}`),
          ])
      );
      const equipmentLegacy: GuideAuthoringRecord["equipmentLegacy"] = [];
      const equipmentRecommendations = (["relicSet", "planarSet"] as const).map(
        (field, index) => {
          const recommendationId = `${guideId}.${field}`;
          equipmentLegacy.push({
            recommendationId,
            identityKey: `legacy:equipment:${recommendationId}`,
            reason:
              "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts",
          });
          return {
            recommendationId,
            order: index + 1,
            sets: [],
            description: refs[field],
            reason: {
              status: "notCollected" as const,
              reason: "Separate adoption reasons have not been collected",
              requiredKinds: ["adoptionReason"],
            },
            alternatives: {
              status: "notCollected" as const,
              reason:
                "Separate alternative equipment definitions have not been collected",
              requiredKinds: ["alternatives"],
            },
          };
        }
      );
      const mainStatLegacy: GuideAuthoringRecord["mainStatLegacy"] = [];
      const mainStatPreferences = raw.mainStats.map(
        (stat: any, index: number) => {
          if (Object.keys(stat).some(key => !["slot", "value"].includes(key)))
            throw new Error("Unclassified guide main-stat field");
          const slotLabel = ref(
              stat.slot,
              `${policy.game} ${guideId} main-stat slot ${index + 1}`
            ),
            value = ref(
              stat.value,
              `${policy.game} ${guideId} main-stat value ${index + 1}`
            );
          const slotKey = `legacy:${slotLabel.id}`,
            statOptions = [`legacy:${value.id}`];
          mainStatLegacy.push({
            slotKey,
            statOptions,
            reason:
              "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys",
          });
          return { slotKey, statOptions, slotLabel, value };
        }
      );
      const targetDefinitions = raw.targets.map(
        (target: any, index: number) => {
          if (
            Object.keys(target).some(
              key => !["key", "label", "unit", "targets"].includes(key)
            ) ||
            Object.keys(target.targets).some(
              key => !["厳選", "目標", "妥協"].includes(key)
            )
          )
            throw new Error("Unclassified guide target field");
          return {
            key: target.key,
            label: ref(
              target.label,
              `${policy.game} ${guideId} target label ${index + 1}`
            ),
            unit: target.unit,
            strict: target.targets.厳選,
            goal: target.targets.目標,
            base: target.targets.妥協,
          };
        }
      );
      records.push({
        guideId,
        game: policy.game,
        lookupKey: `${registry}:${lookupKey}`,
        lookupKind: policy.kind,
        content: {
          guideId,
          identityKey:
            policy.kind === "sourceId"
              ? `${policy.game}:${lookupKey}`
              : `legacy:${policy.game}:${guideId}`,
          headline: refs.headline,
          equipmentRecommendations,
          mainStatPreferences,
          targetDefinitions,
          ...(refs.targetContext ? { targetContext: refs.targetContext } : {}),
          sourceLabels: refs.sourceLabel ? [refs.sourceLabel] : [],
        },
        equipmentLegacy,
        mainStatLegacy,
        metadata: Object.fromEntries(
          Object.entries(raw).filter(([key]) =>
            ["dataAsOf", "updatedAt", "profileId"].includes(key)
          )
        ),
        legacyShape: {
          fields: Object.keys(raw),
          mainStatFields: raw.mainStats.map(Object.keys),
          targetFields: raw.targets.map(Object.keys),
          tierFields: raw.targets.map((target: any) =>
            Object.keys(target.targets)
          ),
        },
      });
      mapping.push({ guideId, registry, lookupKey });
    }
  }
  let migrated = text;
  for (const edit of edits.sort((a, b) => b.start - a.start))
    migrated =
      migrated.slice(0, edit.start) + edit.value + migrated.slice(edit.end);
  return { records, sources, mapping, migrated };
}
if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(resolve(process.argv[1])).href
) {
  const module = process.argv[2];
  const targets: Record<
    string,
    { path: string; registries: Parameters<typeof decodeGuideDefinitions>[2] }
  > = {
    hsr: {
      path: "server/buildAdvisor.ts",
      registries: {
        GUIDE_OVERRIDES: { game: "hsr", kind: "name" },
        GUIDE_OVERRIDES_BY_SOURCE_ID: { game: "hsr", kind: "sourceId" },
      },
    },
    providers: {
      path: "server/gameProviders.ts",
      registries: {
        GI_GUIDE_OVERRIDES: { game: "genshin", kind: "name" },
        ZZZ_CHARACTER_GUIDES: { game: "zzz", kind: "name" },
      },
    },
  };
  const target = targets[module];
  if (
    !target ||
    process.argv.length > 4 ||
    (process.argv[3] !== undefined && process.argv[3] !== "--write")
  )
    throw new Error("Usage: adopt-guide-definitions hsr|providers [--write]");
  const moduleName = `guideDefinitions_${module}`;
  const output = `content/${moduleName}.ts`;
  if (existsSync(resolve(output)))
    throw new Error("Guide authoring already exists");
  const result = decodeGuideDefinitions(
    readFileSync(resolve(target.path), "utf8"),
    moduleName,
    target.registries
  );
  if (process.argv[3] === "--write") {
    writeFileSync(
      resolve(output),
      `import type {GuideAuthoringRecord} from "../shared/content/guideAuthoring";\nexport const records:GuideAuthoringRecord[]=${JSON.stringify(result.records, null, 2)};\n`,
      { flag: "wx" }
    );
    writeFileSync(
      resolve(`content/ja/guides/${moduleName}.ts`),
      renderSources(result.sources),
      { flag: "wx" }
    );
    for (const language of ["en", "zh-CN"])
      writeFileSync(
        resolve(`content/translations/${language}/${moduleName}.ts`),
        'import type {TranslationRecord} from "../../../shared/content/types";\nexport const records:Record<string,TranslationRecord>={};\n',
        { flag: "wx" }
      );
    writeFileSync(
      resolve(`content/coverage/${moduleName}.migration.json`),
      JSON.stringify(result.mapping, null, 2) + "\n",
      { flag: "wx" }
    );
    writeFileSync(
      resolve(target.path),
      `import {records as guideRecords} from "../content/${moduleName}";\nimport {projectGuideRegistry} from "./content/guides";\n` +
        result.migrated
    );
  }
  console.log(
    `guide definitions ${module}: ${result.records.length}, captured literals: ${result.sources.length}`
  );
}
