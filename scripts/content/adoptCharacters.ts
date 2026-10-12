import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { CHARACTER_GUIDE_CATALOG } from "../../server/characterGuideCatalog";
import { catalogSourceIdFor } from "../../server/characterConstellations";
import { SKILL_COLLECTION_REASON, SKILL_REQUIRED_KINDS } from "../../content/coverage/skillRequirements";
import type { CharacterContent, Game } from "../../shared/content/domains";
import type { SourceText } from "../../shared/content/types";

export function adoptCharacterRecords(game: Game, names: readonly string[], sourceId: (name: string) => string | null) {
  const sources: SourceText[] = [];
  const records: Array<CharacterContent & { order: number }> = names.map((name, order) => {
    const identity = sourceId(name);
    if (!identity) throw new Error(`Unresolved character identity: ${game}:${name}`);
    const id = `character.${game}.${identity}.name` as const;
    sources.push({ id, ja: name, context: `${game} character ${identity}: Japanese catalog name; distinct variants retain distinct source IDs`, audience: "public", placeholders: {}, dependencies: [], protectedTokens: [] });
    return { identityKey: `${game}:${identity}`, game, order: order + 1, name: { kind: "textRef", id },
      elementKey: null, roleKey: null,
      introduction: { status: "notCollected", reason: "独立した紹介文が未登録", requiredKinds: ["introduction"] },
      skills: { status: "notCollected", reason: SKILL_COLLECTION_REASON, requiredKinds: [...SKILL_REQUIRED_KINDS[game]] } };
  });
  if (new Set(records.map(record => record.identityKey)).size !== records.length) throw new Error("Duplicate character identity");
  return { sources, records };
}
export function adoptCharactersMain(args: string[]) {
  if (args.length > 1 || (args[0] && args[0] !== "--write")) throw new Error("Usage: adopt-characters [--write]");
  const outputs: [string, string][] = [];
  for (const game of ["hsr", "genshin", "zzz"] as const) {
    const data = adoptCharacterRecords(game, CHARACTER_GUIDE_CATALOG[game], name => catalogSourceIdFor(game, name) ?? null);
    outputs.push([`content/ja/characters/${game}.ts`, `import type { SourceText } from "../../../shared/content/types";\nimport type { CharacterContent } from "../../../shared/content/domains";\nexport const sources: SourceText[] = ${JSON.stringify(data.sources, null, 2)};\nexport const records: Array<CharacterContent & {order:number}> = ${JSON.stringify(data.records, null, 2)};\n`]);
    for (const language of ["en", "zh-CN"]) outputs.push([`content/translations/${language}/characters_${game}.ts`, 'import type { TranslationRecord } from "../../../shared/content/types";\nexport const records: Record<string, TranslationRecord> = {};\n']);
  }
  if (args[0] === "--write") {
    for (const [file] of outputs) if (existsSync(resolve(file))) throw new Error(`Character output exists: ${file}`);
    for (const [file, body] of outputs) { mkdirSync(dirname(resolve(file)), { recursive: true }); writeFileSync(resolve(file), body, { flag: "wx" }); }
  }
  console.log(`character authoring: ${CHARACTER_GUIDE_CATALOG.hsr.length + CHARACTER_GUIDE_CATALOG.genshin.length + CHARACTER_GUIDE_CATALOG.zzz.length} records; no translations collected`);
}
if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  try { adoptCharactersMain(process.argv.slice(2)); } catch (error) { console.error(error instanceof Error ? error.message : "Character adoption failed"); process.exitCode = 1; }
}
