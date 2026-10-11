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
  function value(node: ts.Expression): any {
    if (ts.isStringLiteral(node)) return node.text;
    if (ts.isNumericLiteral(node)) return Number(node.text);
    if (node.kind === ts.SyntaxKind.TrueKeyword) return true;
    if (node.kind === ts.SyntaxKind.FalseKeyword) return false;
    if (node.kind === ts.SyntaxKind.NullKeyword) return null;
    if (ts.isArrayLiteralExpression(node)) return node.elements.map(value);
    if (ts.isObjectLiteralExpression(node))
      return Object.fromEntries(
        node.properties.map(property => {
          if (
            !ts.isPropertyAssignment(property) ||
            !(
              ts.isIdentifier(property.name) ||
              ts.isStringLiteral(property.name)
            )
          )
            throw new Error("Unclassified team property");
          return [property.name.text, value(property.initializer)];
        })
      );
    if (
      ts.isCallExpression(node) &&
      node.expression.getText(ast) === "_content.localized" &&
      node.arguments.length === 1 &&
      ts.isStringLiteral(node.arguments[0]!)
    )
      return { kind: "textRef", id: node.arguments[0]!.text };
    throw new Error("Unclassified team authoring expression");
  }
  const declaration = ast.statements
    .filter(ts.isVariableStatement)
    .flatMap(statement => statement.declarationList.declarations)
    .find(
      item =>
        ts.isIdentifier(item.name) && item.name.text === `BATCH${batch}_TEAMS`
    );
  if (!declaration?.initializer)
    throw new Error("Team migration target missing");
  const records: TeamAuthoring[] = value(declaration.initializer);
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
    ![25, 26, 27].includes(batch) ||
    args.length > 2 ||
    (args[1] && args[1] !== "--write")
  )
    throw new Error("Usage: adopt-teams 25|26|27 [--write]");
  const target = resolve(`server/parties/batch${batch}Teams.ts`),
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
      `import {teams} from "../../content/teamBatch${batch}";\nimport {projectTeams} from "../content/teams";\nexport const BATCH${batch}_TEAMS=projectTeams(teams);\n`
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
