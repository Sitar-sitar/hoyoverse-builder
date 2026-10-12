import ts from "typescript";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { createHash } from "node:crypto";
import { beginLegacyTextCapture } from "../../server/content/legacyTexts";
import { materializeLegacyTeams } from "./adoptLegacyTeams";
import { renderSources } from "./adopt";
import {
  GENERIC_OWNER,
  GENERIC_PROFILES,
} from "../../shared/content/genericTeamAuthoring";
import type { GenericTeamRecipe } from "../../shared/content/genericTeamAuthoring";
import type { Team } from "../../server/parties/types";
import type {
  PartyGameId,
  PartyRecommendation,
} from "../../server/parties/types";
import type { BoundTextRef } from "../../shared/content/teamAuthoring";

export async function adoptGenericTeamsMain(args: string[]) {
  if (args.length > 1 || (args[0] && args[0] !== "--write"))
    throw new Error("Usage: adopt-generic-teams [--write]");
  const paths = [
    "content/teamGeneric.ts",
    "content/ja/guides/parties_genericMaster.ts",
    "content/translations/en/parties_genericMaster.ts",
    "content/translations/zh-CN/parties_genericMaster.ts",
    "content/coverage/genericTeams.migration.json",
    "content/coverage/genericTeams.baseline.json",
  ];
  if (paths.some(path => existsSync(resolve(path))))
    throw new Error("Generic team authoring already exists");
  const target = resolve("server/parties/genericLegacyCatalog.ts");
  const text = readFileSync(target, "utf8");
  const ast = ts.createSourceFile(
    "generic.ts",
    text,
    ts.ScriptTarget.Latest,
    true
  );
  const profile = ast.statements.find(
    statement =>
      ts.isTypeAliasDeclaration(statement) &&
      statement.name.text === "GenericProfile"
  );
  if (
    !profile ||
    !ts.isTypeAliasDeclaration(profile) ||
    !ts.isUnionTypeNode(profile.type)
  )
    throw new Error("Missing generic profile contract");
  const names = profile.type.types.map(type => {
    if (!ts.isLiteralTypeNode(type) || !ts.isStringLiteral(type.literal))
      throw new Error("Unsupported generic profile kind");
    return type.literal.text;
  });
  if (JSON.stringify(names) !== JSON.stringify(GENERIC_PROFILES))
    throw new Error("Generic profile kinds changed");
  const classifier = ast.statements.find(
    statement =>
      ts.isFunctionDeclaration(statement) &&
      statement.name?.text === "genericProfileFor"
  );
  if (!classifier) throw new Error("Missing generic profile classifier");
  const factory = ast.statements.find(
    statement =>
      ts.isFunctionDeclaration(statement) &&
      statement.name?.text === "genericOptionsFor"
  );
  if (
    !factory ||
    !ts.isFunctionDeclaration(factory) ||
    factory.parameters.length !== 3 ||
    factory.parameters[2].name.getText(ast) !== "migrationProfile"
  )
    throw new Error("Missing migration-only profile override");
  const stop = beginLegacyTextCapture();
  try {
    const [{ genericOptionsFor }, { toLegacyTeam }, { catalogSourceIdFor }] =
      await Promise.all([
        import("../../server/parties/genericLegacyCatalog"),
        import("../../server/parties/teamStore"),
        import("../../server/characterConstellations"),
      ]);
    const oldFactory = genericOptionsFor as (
      game: PartyGameId,
      owner: string,
      profile: GenericTeamRecipe["profile"]
    ) => PartyRecommendation[];
    const old: Team[] = [];
    const metadata: Array<{
      game: Team["game"];
      profile: GenericTeamRecipe["profile"];
      rank: 1 | 2 | 3;
      recipeId: string;
    }> = [];
    for (const game of ["hsr", "genshin", "zzz"] as const)
      for (const profile of GENERIC_PROFILES) {
        for (const option of oldFactory(game, GENERIC_OWNER, profile)) {
          const recipeId = `team.generic.${game}.${profile}.${option.rank}`;
          const team = toLegacyTeam(game, GENERIC_OWNER, option);
          team.id = recipeId;
          old.push(team);
          metadata.push({ game, profile, rank: option.rank, recipeId });
        }
      }
    const result = materializeLegacyTeams(
      old,
      catalogSourceIdFor,
      undefined,
      "team.generic.master"
    );
    const baseline = (["hsr", "genshin", "zzz"] as const).flatMap(game =>
      GENERIC_PROFILES.flatMap(profile =>
        ["fixture <>&{name}", "fixture日本語", ""].map(owner => ({
          game,
          profile,
          owner,
          options: oldFactory(game, owner, profile),
        }))
      )
    );
    // Generalize only the existing opaque owner-name passthrough. No generated
    // prose or translations: old t(name,name,name) becomes an explicit binding.
    const ownerSources = result.sources.filter(
      source => source.ja === GENERIC_OWNER
    );
    if (ownerSources.length !== 3)
      throw new Error("Unexpected owner name source count");
    for (const source of ownerSources) {
      if (
        result.translations.en[source.id].text !== GENERIC_OWNER ||
        result.translations["zh-CN"][source.id].text !== GENERIC_OWNER
      )
        throw new Error("Owner translation passthrough differs");
      source.ja = "{owner}";
      source.placeholders = { owner: "string" };
      source.context =
        "Opaque external character name supplied by the existing generic team factory; preserve input without translation or inferred identity";
      source.protectedTokens = [];
      for (const language of ["en", "zh-CN"] as const)
        result.translations[language][source.id].text = "{owner}";
    }
    const ownerIds = new Set(ownerSources.map(source => source.id));
    const records: GenericTeamRecipe[] = result.records.map((team, index) => {
      const ownerBindings: GenericTeamRecipe["ownerBindings"] = [];
      function walk(value: unknown, path: string) {
        if (Array.isArray(value)) {
          value.forEach((item, index) => walk(item, `${path}.${index}`));
          return;
        }
        if (!value || typeof value !== "object") return;
        if ("kind" in value && value.kind === "textRef") {
          const ref = value as BoundTextRef;
          if (ownerIds.has(ref.id)) ref.variables = { owner: GENERIC_OWNER };
          for (const [variable, binding] of Object.entries(ref.variables ?? {}))
            if (binding === GENERIC_OWNER)
              ownerBindings.push({ path, variable });
          return;
        }
        Object.entries(value).forEach(([key, item]) =>
          walk(item, path ? `${path}.${key}` : key)
        );
      }
      walk(team, "");
      const ownerMemberIndexes = old[index].members.flatMap((member, index) =>
        member.name.ja === GENERIC_OWNER ? [index] : []
      );
      if (ownerMemberIndexes.length !== 1 || ownerBindings.length !== 3)
        throw new Error("Unexpected generic owner binding layout");
      return { ...metadata[index], team, ownerBindings, ownerMemberIndexes };
    });
    if (args[0] === "--write") {
      writeFileSync(
        resolve(paths[0]),
        `import type {GenericTeamRecipe} from "../shared/content/genericTeamAuthoring";\nexport const recipes:GenericTeamRecipe[]=${JSON.stringify(records, null, 2)};\n`,
        { flag: "wx" }
      );
      writeFileSync(resolve(paths[1]), renderSources(result.sources), {
        flag: "wx",
      });
      for (const [index, language] of [
        [2, "en"],
        [3, "zh-CN"],
      ] as const)
        writeFileSync(
          resolve(paths[index]),
          `import type {TranslationRecord} from "../../../shared/content/types";\nexport const records:Record<string,TranslationRecord>=${JSON.stringify(result.translations[language], null, 2)};\n`,
          { flag: "wx" }
        );
      const hash = (value: unknown) =>
        createHash("sha256").update(JSON.stringify(value)).digest("hex");
      writeFileSync(
        resolve(paths[4]),
        JSON.stringify(
          {
            schemaVersion: 1,
            migrationId: "generic-team-authoring-v1",
            inputDigest: hash(old),
            outputDigest: hash(records),
            mapping: result.mapping,
          },
          null,
          2
        ) + "\n",
        { flag: "wx" }
      );
      writeFileSync(
        resolve(paths[5]),
        JSON.stringify(baseline, null, 2) + "\n",
        { flag: "wx" }
      );
      writeFileSync(
        target,
        `/** Generic recipes and display fields live in content/teamGeneric.ts. */\nimport {HSR_RUNTIME_PATHS,ZZZ_RUNTIME_PROFESSIONS} from "../characterGuideCatalog";\nimport {genshinProfileIdFor,hsrProfileIdFor,zzzProfileIdFor} from "../individualGuides";\nimport type {PartyGameId,PartyRecommendation} from "./types";\nimport type {GenericProfile} from "../../shared/content/genericTeamAuthoring";\nimport {genericTeamOptions} from "../content/genericTeams";\n${text.slice(classifier.getStart(ast), classifier.end)}\nexport function genericOptionsFor(game:PartyGameId,name:string):PartyRecommendation[]{return genericTeamOptions(game,name,genericProfileFor(game,name));}\n`
      );
    }
    console.log(
      `generic team recipes: ${records.length}, captured texts: ${result.sources.length}`
    );
  } finally {
    stop();
  }
}
if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(resolve(process.argv[1])).href
)
  await adoptGenericTeamsMain(process.argv.slice(2));
