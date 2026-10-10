import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { CHARACTER_GUIDE_CATALOG, HSR_RUNTIME_PATHS, ZZZ_RUNTIME_PROFESSIONS } from "../../server/characterGuideCatalog";
import { characterReferenceCatalog, characterReferenceFor } from "../../server/characterReference";
import { catalogSourceIdFor, constellationProfileFor } from "../../server/characterConstellations";
import { guideFor } from "../../server/buildAdvisor";
import { genshinGuide, zzzGuide } from "../../server/gameProviders";
import { characterUpdateLedger } from "../../server/characterUpdateLedger";
import { guideUpdateHistory } from "../../server/guideUpdateHistory";
import { contentDigest } from "../../server/content/hash";
import { SKILL_REQUIRED_KINDS, SKILL_COLLECTION_REASON } from "../../content/coverage/skillRequirements";
import type { CharacterIdentity } from "../../server/characterIdentity";

export const BASELINE_SOURCE_REVISION = "dbd66e80141d4c4922bf95eaa413420ae692d679";
const games = ["hsr", "genshin", "zzz"] as const;

/** Offline API-facing baseline. No UID, player records, network, translation or mutation. */
export function collectBaseline() {
  const identities = new Set<string>();
  const unresolved: string[] = [];
  const characters = games.flatMap(game => CHARACTER_GUIDE_CATALOG[game].map(name => {
    const sourceId = catalogSourceIdFor(game, name);
    const key = sourceId ? `${game}:${sourceId}` : `legacy:${game}:${name}`;
    if (identities.has(key)) throw new Error(`Duplicate catalog identity: ${key}`);
    identities.add(key);
    if (!sourceId) unresolved.push(key);
    const identity: CharacterIdentity = { game, sourceId: sourceId ?? name, key: `${game}:${sourceId ?? name}`,
      displayName: name, variantOf: null, resolved: Boolean(sourceId), resolution: sourceId ? "curated-id-map" : "unresolved" };
    const reference = characterReferenceFor(game, name);
    if (!reference) throw new Error(`Catalog reference missing: ${game}:${name}`);
    const guide = game === "hsr" ? guideFor(name, HSR_RUNTIME_PATHS[name] ?? "", identity)
      : game === "genshin" ? genshinGuide(name) : zzzGuide(name, ZZZ_RUNTIME_PROFESSIONS[name] ?? "Attack");
    return { key, game, name, reference, uidGuide: guide,
      uidConstellations: [0, 6].map(rank => constellationProfileFor(identity, rank)),
      planned: {
        introduction: { status: "notCollected" as const, reason: "独立した紹介文が未登録", requiredKinds: ["introduction"] },
        skills: { status: "notCollected" as const, reason: SKILL_COLLECTION_REASON, requiredKinds: [...SKILL_REQUIRED_KINDS[game]] },
      },
    };
  }));
  return { sourceRevision: BASELINE_SOURCE_REVISION, characters, unresolved,
    catalog: characterReferenceCatalog(), ledger: characterUpdateLedger(), history: guideUpdateHistory() };
}

export function baselineDigests(data = collectBaseline()) {
  return {
    schemaVersion: 1,
    sourceRevision: data.sourceRevision,
    characterCount: data.characters.length,
    unresolved: data.unresolved,
    sections: { catalog: contentDigest(data.catalog), ledger: contentDigest(data.ledger), history: contentDigest(data.history) },
    characters: Object.fromEntries(data.characters.map(entry => [entry.key, {
      reference: contentDigest(entry.reference),
      guide: contentDigest(entry.uidGuide),
      constellations: contentDigest(entry.uidConstellations),
    }])),
  };
}

/** Git's Windows CRLF conversion must not invalidate the data digests. */
export function baselineMatches(saved: string, current: string) {
  return saved.replace(/\r\n?/g, "\n") === current.replace(/\r\n?/g, "\n");
}

export function baselineMain(args: string[]) {
  if (args.length !== 1 || !["snapshot", "compare"].includes(args[0]!)) throw new Error("Usage: content:baseline snapshot|compare");
  const target = resolve("content/coverage/baseline.v1.json");
  const current = JSON.stringify(baselineDigests(), null, 2) + "\n";
  if (args[0] === "snapshot") {
    if (existsSync(target)) {
      if (!baselineMatches(readFileSync(target, "utf8"), current)) throw new Error("Baseline exists and differs; never overwrite it automatically");
    } else {
      mkdirSync(dirname(target), { recursive: true });
      writeFileSync(target, current, "utf8");
    }
  } else if (!existsSync(target) || !baselineMatches(readFileSync(target, "utf8"), current)) {
    throw new Error("Japanese API baseline differs or is missing");
  }
  console.log(`content baseline: ${args[0]} passed; ${collectBaseline().characters.length} characters`);
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  try { baselineMain(process.argv.slice(2)); } catch (error) { console.error(error instanceof Error ? error.message : "Baseline failed"); process.exitCode = 1; }
}
