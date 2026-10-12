import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { createHash } from "node:crypto";
import ts from "typescript";
import { canonicalSources, canonicalTranslations } from "../../content/catalog";
import {
  beginLegacyTextCapture,
  capturedLegacyTextRef,
  createLegacyTexts,
} from "../../server/content/legacyTexts";
import type { Team, LocalizedText } from "../../server/parties/types";
import type {
  TeamAuthoring,
  BoundTextRef,
} from "../../shared/content/teamAuthoring";
import type {
  SourceText,
  TextId,
  TranslationRecord,
} from "../../shared/content/types";
import { renderSources } from "./adopt";

export function materializeLegacyTeams(
  teams: Team[],
  identify: (game: Team["game"], name: string) => string | undefined,
  provenance: (
    value: object
  ) => BoundTextRef | undefined = capturedLegacyTextRef,
  namespace = "team.legacy.master"
) {
  if (!/^team\.[A-Za-z0-9_.]+$/.test(namespace)) throw new Error("Invalid team capture namespace");
  const sources: SourceText[] = [];
  const translations: Record<
    "en" | "zh-CN",
    Record<string, TranslationRecord>
  > = { en: {}, "zh-CN": {} };
  const mapping: {
    teamId: string;
    field: string;
    ref: BoundTextRef;
    kind: "existing" | "captured";
  }[] = [];
  const sourceMap = new Map(
    canonicalSources.map(source => [source.id, source])
  );
  const candidates = new Map<string, TextId[]>();
  for (const source of canonicalSources) {
    if (Object.keys(source.placeholders).length) continue;
    const en = canonicalTranslations.en[source.id],
      zh = canonicalTranslations["zh-CN"][source.id];
    if (!en || !zh) continue;
    const tuple = JSON.stringify([source.ja, en.text, zh.text]);
    candidates.set(tuple, [...(candidates.get(tuple) ?? []), source.id]);
  }
  const names = new Map<string, BoundTextRef>();
  function reference(
    text: LocalizedText,
    team: Team,
    field: string
  ): BoundTextRef {
    const original = provenance(text);
    const matches = candidates.get(
      JSON.stringify([text.ja, text.en, text["zh-CN"]])
    );
    let ref =
      original ??
      (matches?.length === 1
        ? { kind: "textRef" as const, id: matches[0] }
        : undefined);
    const nameKey = field.endsWith(".name")
      ? JSON.stringify([team.game, text.ja, text.en, text["zh-CN"]])
      : undefined;
    ref ??= nameKey ? names.get(nameKey) : undefined;
    if (!ref) {
      const id = `${namespace}.b${String(sources.length + 1).padStart(5, "0")}` as TextId;
      if (sourceMap.has(id)) throw new Error("Captured source ID already exists");
      const source: SourceText = {
        id,
        ja: text.ja,
        context: `${team.game} legacy Team ${team.id}: ${field}; exact existing display text, no translation or identity inference`,
        audience: "public",
        placeholders: {},
        dependencies: [],
        protectedTokens: [...new Set(text.ja.match(/\d+(?:[.,]\d+)*/g) ?? [])],
      };
      sources.push(source);
      sourceMap.set(id, source);
      for (const language of ["en", "zh-CN"] as const)
        translations[language][id] = {
          text: text[language],
          sourceHash: null,
          origin: "legacy",
          review: "pending",
        };
      ref = { kind: "textRef", id };
    }
    if (nameKey) names.set(nameKey, ref);
    mapping.push({
      teamId: team.id,
      field,
      ref,
      kind: original || matches?.length === 1 ? "existing" : "captured",
    });
    return ref;
  }
  function walk(value: unknown, team: Team, path: string): unknown {
    if (Array.isArray(value))
      return value.map((item, index) => walk(item, team, `${path}.${index}`));
    if (!value || typeof value !== "object") return value;
    const obj = value as Record<string, unknown>;
    if (
      Object.keys(obj).length === 3 &&
      ["ja", "en", "zh-CN"].every(key => typeof obj[key] === "string")
    )
      return reference(value as LocalizedText, team, path);
    return Object.fromEntries(
      Object.entries(obj).map(([key, item]) => [
        key,
        walk(item, team, path ? `${path}.${key}` : key),
      ])
    );
  }
  const records = teams.map(team => {
    const record = walk(team, team, "") as TeamAuthoring;
    record.synergy = (record.synergy as unknown as BoundTextRef[]).map(
      (text, index) => ({
        blockId: `team.legacy.${team.id}.paragraph${index + 1}`,
        text,
      })
    );
    for (let index = 0; index < record.members.length; index++) {
      const member = record.members[index];
      const name = team.members[index].name.ja;
      const sourceId = identify(team.game, name);
      member.identityKey = sourceId
        ? `${team.game}:${sourceId}`
        : `legacy:${team.game}:${name}`;
      member.identityResolution = sourceId ? "confirmed" : "legacy";
      if (!sourceId)
        member.identityReason =
          "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant";
    }
    return record;
  });
  // Verify every generated ref against the full untouched old model, including
  // key order and legacy language strings, before any authoring file is written.
  const texts = createLegacyTexts(
    [...canonicalSources, ...sources],
    { ...canonicalTranslations.en, ...translations.en },
    { ...canonicalTranslations["zh-CN"], ...translations["zh-CN"] }
  );
  function project(value: unknown): unknown {
    if (Array.isArray(value)) return value.map(project);
    if (!value || typeof value !== "object") return value;
    if ("kind" in value && value.kind === "textRef")
      return texts.localized(
        (value as BoundTextRef).id,
        (value as BoundTextRef).variables
      );
    return Object.fromEntries(
      Object.entries(value)
        .filter(
          ([key]) =>
            !["identityKey", "identityResolution", "identityReason"].includes(
              key
            )
        )
        .map(([key, item]) => [
          key,
          project(
            key === "synergy"
              ? (item as TeamAuthoring["synergy"]).map(block => block.text)
              : item
          ),
        ])
    );
  }
  if (JSON.stringify(records.map(project)) !== JSON.stringify(teams))
    throw new Error("Legacy team reconstruction differs");
  return { records, sources, translations, mapping };
}

export async function adoptLegacyTeamsMain(args: string[]) {
  if (args.length > 1 || (args[0] && args[0] !== "--write"))
    throw new Error("Usage: adopt-legacy-teams [--write]");
  const outputs = [
    "content/teamLegacy.ts",
    "content/ja/guides/parties_legacyMaster.ts",
    "content/translations/en/parties_legacyMaster.ts",
    "content/translations/zh-CN/parties_legacyMaster.ts",
    "content/coverage/legacyTeams.migration.json",
    "server/parties/genericLegacyCatalog.ts",
  ];
  if (outputs.some(path => existsSync(resolve(path))))
    throw new Error("Legacy team authoring already exists");
  const stop = beginLegacyTextCapture();
  try {
    const [{ legacyTeams }, { LEGACY_PARTY_KEYS }, { catalogSourceIdFor }] =
      await Promise.all([
        import("../../server/parties/teamStore"),
        import("../../server/parties/legacyCatalog"),
        import("../../server/characterConstellations"),
      ]);
    const old = legacyTeams();
    const result = materializeLegacyTeams(old, catalogSourceIdFor);
    const oldText = readFileSync(
      resolve("server/parties/legacyCatalog.ts"),
      "utf8"
    );
    const ast = ts.createSourceFile(
      "legacy.ts",
      oldText,
      ts.ScriptTarget.Latest,
      true
    );
    const retained = new Set([
      "_helperContent",
      "_content",
      "_partyHelper",
      "change",
      "GAME_PARTY_DATASET",
      "sourceFor",
      "communitySourcesFor",
      "option",
      "ownMember",
      "roleMember",
    ]);
    const functionNames = new Set([
      "option",
      "genericProfileFor",
      "genericTargetChanges",
      "genericMembers",
      "genericOptionsFor",
    ]);
    const pieces = ast.statements
      .filter(
        statement =>
          ts.isImportDeclaration(statement) ||
          (ts.isTypeAliasDeclaration(statement) &&
            statement.name.text === "GenericProfile") ||
          (ts.isFunctionDeclaration(statement) &&
            functionNames.has(statement.name?.text ?? "")) ||
          (ts.isVariableStatement(statement) &&
            statement.declarationList.declarations.some(declaration =>
              retained.has(declaration.name.getText(ast))
            ))
      )
      .map(statement => oldText.slice(statement.getFullStart(), statement.end));
    const generic = pieces.join("\n") + "\nexport {genericOptionsFor};\n";
    const hash = (value: unknown) =>
      createHash("sha256").update(JSON.stringify(value)).digest("hex");
    if (args[0] === "--write") {
      writeFileSync(
        resolve(outputs[0]),
        `import type {TeamAuthoring} from "../shared/content/teamAuthoring";\nexport const teams:TeamAuthoring[]=${JSON.stringify(result.records, null, 2)};\n`,
        { flag: "wx" }
      );
      writeFileSync(resolve(outputs[1]), renderSources(result.sources), {
        flag: "wx",
      });
      for (const [index, language] of [
        [2, "en"],
        [3, "zh-CN"],
      ] as const)
        writeFileSync(
          resolve(outputs[index]),
          `import type {TranslationRecord} from "../../../shared/content/types";\nexport const records:Record<string,TranslationRecord>=${JSON.stringify(result.translations[language], null, 2)};\n`,
          { flag: "wx" }
        );
      writeFileSync(
        resolve(outputs[4]),
        JSON.stringify(
          {
            schemaVersion: 1,
            migrationId: "legacy-team-authoring-v1",
            inputDigest: hash(old),
            outputDigest: hash(result.records),
            mapping: result.mapping,
          },
          null,
          2
        ) + "\n",
        { flag: "wx" }
      );
      writeFileSync(resolve(outputs[5]), generic, { flag: "wx" });
      writeFileSync(
        resolve("server/parties/legacyCatalog.ts"),
        `/** Compatibility boundary. Definitions live in content/teamLegacy.ts. */\nimport {teams} from "../../content/teamLegacy";\nimport {projectTeams} from "../content/teams";\nimport type {PartyGameId,PartyRecommendation} from "./types";\nexport {genericOptionsFor} from "./genericLegacyCatalog";\nconst projected=projectTeams(teams);\nexport const LEGACY_PARTY_KEYS:readonly string[]=${JSON.stringify(LEGACY_PARTY_KEYS)};\nexport function legacyOptionsFor(game:PartyGameId,name:string):PartyRecommendation[]|undefined {\nconst records=projected.filter(team=>team.game===game&&team.origin===name);\nif(!records.length)return undefined;\nreturn records.map(team=>({id:team.id,rank:team.originOrder as 1|2|3,title:team.title,members:team.members.map(({targetChanges,...member})=>member),synergy:team.synergy,targetChanges:team.members.find(member=>member.name.ja===name)?.targetChanges??[],targetSummary:team.targetSummary,gameVersion:team.gameVersion,dataAsOf:team.dataAsOf,updatedAt:team.updatedAt,sourceLabel:team.sourceLabel,sourceUrl:team.sourceUrl,communitySources:team.communitySources}));\n}\n`
      );
    }
    console.log(
      `legacy team authoring: ${result.records.length} teams, ${result.sources.length} additionally captured texts`
    );
  } finally {
    stop();
  }
}
if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(resolve(process.argv[1])).href
)
  await adoptLegacyTeamsMain(process.argv.slice(2));
