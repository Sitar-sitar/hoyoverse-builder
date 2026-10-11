import { existsSync, linkSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { baselineDigests, baselineMatches, collectBaseline } from "./baseline";
import { legacyProjection, migrateCandidate, type MigrationCandidate } from "../../server/content/migration";
import { contentDigest } from "../../server/content/hash";

/** Single-file atomic staging. A different prior candidate is never overwritten. */
export function stageCandidate(candidate: MigrationCandidate, target: string): "created" | "unchanged" {
  const { outputDigest, ...payload } = candidate;
  if (contentDigest(payload) !== outputDigest || contentDigest(legacyProjection(candidate)) !== candidate.inputDigest) {
    throw new Error("Migration candidate failed integrity verification");
  }
  const serialized = JSON.stringify(candidate, null, 2) + "\n";
  if (existsSync(target)) {
    if (readFileSync(target, "utf8").replace(/\r\n/g, "\n") !== serialized) throw new Error("Migration candidate differs; preserve it and review the input changes");
    return "unchanged";
  }
  const temporary = `${target}.partial`;
  if (existsSync(temporary)) throw new Error("Partial migration exists; inspect it before retrying");
  let created = false;
  try {
    writeFileSync(temporary, serialized, { encoding: "utf8", flag: "wx" });
    created = true;
    // Exclusive publication: unlike rename on POSIX this cannot replace a racing writer.
    linkSync(temporary, target);
  } finally {
    if (created && existsSync(temporary)) rmSync(temporary);
  }
  return "created";
}

export function migrateMain(args: string[]) {
  if (args.length > 1 || args.some(arg => !["--dry-run", "--write"].includes(arg))) throw new Error("Usage: content:migrate [--dry-run|--write]");
  const baseline = collectBaseline();
  const savedBaseline = readFileSync(resolve("content/coverage/baseline.v1.json"), "utf8");
  if (!baselineMatches(savedBaseline, JSON.stringify(baselineDigests(baseline), null, 2) + "\n")) {
    throw new Error("Migration baseline changed; review compatibility before staging");
  }
  const candidate = migrateCandidate(baseline);
  let action = "dry-run";
  if (args[0] === "--write") {
    // Staging is separate from content/ja: this is not authoritative migration yet.
    const directory = resolve("tmp/content-migration");
    mkdirSync(directory, { recursive: true });
    action = stageCandidate(candidate, resolve(directory, "legacy-preflight.v1.json"));
  }
  console.log(JSON.stringify({ action, migrationId: candidate.migrationId,
    characterCount: baseline.characters.length, sourceCount: candidate.catalog.sources.length,
    legacyTranslationCount: Object.values(candidate.catalog.translations).reduce((sum, records) => sum + Object.keys(records).length, 0),
    inputDigest: candidate.inputDigest, outputDigest: candidate.outputDigest,
    runtimeConnected: false, canonicalMigrationComplete: false }));
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  try { migrateMain(process.argv.slice(2)); } catch (error) { console.error(error instanceof Error ? error.message : "Migration failed"); process.exitCode = 1; }
}
