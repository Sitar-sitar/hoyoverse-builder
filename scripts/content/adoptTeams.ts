import ts from "typescript";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { canonicalSources } from "../../content/catalog";
import { catalogSourceIdFor } from "../../server/characterConstellations";
import type { TeamAuthoring } from "../../shared/content/teamAuthoring";

export function adoptTeams(text: string, batch: number) {
  const ast = ts.createSourceFile(
    "teams.ts",
    text,
    ts.ScriptTarget.Latest,
    true
  );
  const helpers = new Map<string, ts.ArrowFunction | ts.FunctionDeclaration>();
  const constants = new Map<string, ts.Expression>();
  for (const statement of ast.statements) {
    if (ts.isFunctionDeclaration(statement) && statement.name)
      helpers.set(statement.name.text, statement);
    if (ts.isVariableStatement(statement))
      for (const declaration of statement.declarationList.declarations)
        if (
          ts.isIdentifier(declaration.name) &&
          declaration.initializer &&
          ts.isArrowFunction(declaration.initializer)
        )
          helpers.set(declaration.name.text, declaration.initializer);
  }
  for (const statement of ast.statements)
    if (ts.isVariableStatement(statement))
      for (const declaration of statement.declarationList.declarations)
        if (
          ts.isIdentifier(declaration.name) &&
          declaration.initializer &&
          !ts.isArrowFunction(declaration.initializer)
        )
          constants.set(declaration.name.text, declaration.initializer);
  function value(
    node: ts.Expression,
    environment: Record<string, unknown> = {}
  ): any {
    if (ts.isParenthesizedExpression(node))
      return value(node.expression, environment);
    if (ts.isIdentifier(node) && Object.hasOwn(environment, node.text))
      return environment[node.text];
    if (ts.isIdentifier(node) && constants.has(node.text))
      return value(constants.get(node.text)!, environment);
    if (ts.isTemplateExpression(node))
      return (
        node.head.text +
        node.templateSpans
          .map(
            span =>
              String(value(span.expression, environment)) + span.literal.text
          )
          .join("")
      );
    if (ts.isStringLiteral(node)) return node.text;
    if (ts.isNumericLiteral(node)) return Number(node.text);
    if (node.kind === ts.SyntaxKind.TrueKeyword) return true;
    if (node.kind === ts.SyntaxKind.FalseKeyword) return false;
    if (node.kind === ts.SyntaxKind.NullKeyword) return null;
    if (ts.isArrayLiteralExpression(node))
      return node.elements.map(item => value(item, environment));
    if (ts.isObjectLiteralExpression(node))
      return Object.fromEntries(
        node.properties.map(property => {
          if (ts.isShorthandPropertyAssignment(property))
            return [property.name.text, value(property.name, environment)];
          if (
            !ts.isPropertyAssignment(property) ||
            !(
              ts.isIdentifier(property.name) ||
              ts.isStringLiteral(property.name)
            )
          )
            throw new Error("Unclassified team property");
          return [property.name.text, value(property.initializer, environment)];
        })
      );
    if (
      ts.isCallExpression(node) &&
      ts.isIdentifier(node.expression) &&
      node.expression.text === "member"
    ) {
      if (
        node.arguments.length !== 2 ||
        !node.arguments.every(ts.isSpreadElement)
      )
        throw new Error("Unclassified team member arguments");
      const refs = node.arguments.map(argument => {
        const call = (argument as ts.SpreadElement).expression;
        if (
          !ts.isCallExpression(call) ||
          call.expression.getText(ast) !== "_content.triple" ||
          call.arguments.length !== 1 ||
          !ts.isStringLiteral(call.arguments[0]!)
        )
          throw new Error("Unclassified team member reference");
        return { kind: "textRef", id: call.arguments[0]!.text };
      });
      return { name: refs[0], role: refs[1] };
    }
    if (
      ts.isCallExpression(node) &&
      ["_content.localized", "_partyHelper.localized"].includes(
        node.expression.getText(ast)
      ) &&
      [1, 2].includes(node.arguments.length) &&
      ts.isStringLiteral(node.arguments[0]!)
    )
      return {
        kind: "textRef",
        id: node.arguments[0]!.text,
        ...(node.arguments[1]
          ? { variables: value(node.arguments[1], environment) }
          : {}),
      };
    if (
      ts.isCallExpression(node) &&
      ts.isIdentifier(node.expression) &&
      helpers.has(node.expression.text)
    ) {
      const helper = helpers.get(node.expression.text)!;
      if (helper.parameters.length !== node.arguments.length)
        throw new Error("Team helper parameter mismatch");
      const local = { ...environment };
      helper.parameters.forEach((parameter, index) => {
        if (!ts.isIdentifier(parameter.name))
          throw new Error("Unclassified team helper parameter");
        local[parameter.name.text] = value(node.arguments[index]!, environment);
      });
      const body = helper.body;
      if (!body) throw new Error("Team helper body missing");
      if (ts.isBlock(body)) {
        if (
          body.statements.length !== 1 ||
          !ts.isReturnStatement(body.statements[0]!) ||
          !body.statements[0]!.expression
        )
          throw new Error("Unclassified team helper body");
        return value(body.statements[0]!.expression, local);
      }
      return value(body, local);
    }
    throw new Error("Unclassified team authoring expression");
  }
  const declaration = ast.statements
    .filter(ts.isVariableStatement)
    .flatMap(statement => statement.declarationList.declarations)
    .find(
      item =>
        ts.isIdentifier(item.name) &&
        item.name.text ===
          (batch === 23 ? "SHARED_TEAMS" : `BATCH${batch}_TEAMS`)
    );
  if (!declaration?.initializer)
    throw new Error("Team migration target missing");
  let initializer = declaration.initializer;
  if (batch === 23) {
    if (!ts.isArrayLiteralExpression(initializer))
      throw new Error("Shared team array required");
    for (const entry of initializer.elements.filter(ts.isSpreadElement))
      if (
        ![
          "BATCH24_TEAMS",
          "BATCH25_TEAMS",
          "BATCH26_TEAMS",
          "BATCH27_TEAMS",
        ].includes(entry.expression.getText(ast))
      )
        throw new Error("Unclassified shared team batch reference");
    initializer = ts.factory.createArrayLiteralExpression(
      initializer.elements.filter(entry => !ts.isSpreadElement(entry))
    );
  }
  const records: TeamAuthoring[] = value(initializer);
  for (const team of records)
    team.synergy = (
      team.synergy as unknown as { kind: "textRef"; id: string }[]
    ).map(ref => ({
      blockId: `team.block.${ref.id}`,
      text: ref as TeamAuthoring["synergy"][number]["text"],
    }));
  for (const team of records)
    for (const member of team.members) {
      const name = canonicalSources.find(
        source => source.id === member.name.id
      )?.ja;
      const sourceId = name && catalogSourceIdFor(team.game, name);
      if (!name)
        throw new Error(`Unknown team name reference: ${member.name.id}`);
      member.identityKey = sourceId
        ? `${team.game}:${sourceId}`
        : `legacy:${team.game}:${name}`;
      member.identityResolution = sourceId ? "confirmed" : "legacy";
      if (!sourceId)
        member.identityReason =
          "Existing team member name has no single confirmed catalog identity; preserve the name without guessing a variant or source ID";
    }
  return records;
}
export function adoptTeamsMain(args: string[]) {
  const batch = Number(args[0]);
  if (
    ![23, 24, 25, 26, 27].includes(batch) ||
    args.length > 2 ||
    (args[1] && args[1] !== "--write")
  )
    throw new Error("Usage: adopt-teams 23|24|25|26|27 [--write]");
  const target = resolve(
      batch === 23
        ? "server/parties/sharedTeams.ts"
        : `server/parties/batch${batch}Teams.ts`
    ),
    output = resolve(`content/teamBatch${batch}.ts`);
  const records = adoptTeams(readFileSync(target, "utf8"), batch);
  if (args[1] === "--write") {
    if (existsSync(output)) throw new Error("Team authority already exists");
    writeFileSync(
      output,
      'import type {TeamAuthoring} from "../shared/content/teamAuthoring";\nexport const teams:TeamAuthoring[]=' +
        JSON.stringify(records, null, 2) +
        ";\n",
      { flag: "wx" }
    );
    writeFileSync(
      target,
      batch === 23
        ? `import {teams} from "../../content/teamBatch23";\nimport {projectTeams} from "../content/teams";\nimport {BATCH27_TEAMS} from "./batch27Teams";\nimport {BATCH24_TEAMS} from "./batch24Teams";\nimport {BATCH25_TEAMS} from "./batch25Teams";\nimport {BATCH26_TEAMS} from "./batch26Teams";\nexport const SHARED_TEAMS=[...BATCH27_TEAMS,...BATCH24_TEAMS,...BATCH25_TEAMS,...BATCH26_TEAMS,...projectTeams(teams)];\n`
        : `import {teams} from "../../content/teamBatch${batch}";\nimport {projectTeams} from "../content/teams";\nexport const BATCH${batch}_TEAMS=projectTeams(teams);\n`
    );
  }
  console.log(
    `team authoring: batch ${batch}, ${records.length} teams; no translation`
  );
}
if (
  process.argv[1] &&
  pathToFileURL(resolve(process.argv[1])).href === import.meta.url
) {
  try {
    adoptTeamsMain(process.argv.slice(2));
  } catch (error) {
    console.error(
      error instanceof Error ? error.message : "Team adoption failed"
    );
    process.exitCode = 1;
  }
}
