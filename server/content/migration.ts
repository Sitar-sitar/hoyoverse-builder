import type { ContentCatalog, SourceText, TextId, TextRef } from "../../shared/content/types";
import { indexCatalog, japaneseText } from "./catalog";
import { contentDigest } from "./hash";

type Json = null | boolean | number | string | Json[] | { [key: string]: Json };
export type MigrationMapping = { legacyPath: string; id: TextId; localized: boolean };
export type MigrationCandidate = {
  schemaVersion: 1; migrationId: "legacy-preflight-v1";
  inputDigest: string; outputDigest: string;
  catalog: ContentCatalog; mapping: MigrationMapping[]; projection: Json;
  exclusions: { legacyPath: string; reason: string }[];
};

// This boundary is deliberately finite. New API fields require explicit classification.
const keys = new Set("acquiredRank activeTargetChanges batch byGame catalog caution changes characters checkedAt communitySources constellations criteria currentBaseline dataAsOf dataStatus date description effects entries events game gameVersion games genshin guide headline history hsr id introduction key label ledger level mainStats members name names nextBatch note options origin partyAppearances partyRecommendations pending planarSet planned profileId rank rankLabel rationale reason reference relicSet requiredKinds reviewed role scope siteEvents skills slot sourceLabel sourceRevision sourceUrl status summary synergy targetChanges targetContext targetSummary targets teamId title total uidConstellations uidGuide unit unresolved updateLedger updatedAt url value zzz 厳選 妥協 目標".split(" "));
const display = new Set("name headline relicSet planarSet slot value label targetContext sourceLabel rankLabel caution description title summary rationale note origin criteria reason role".split(" "));
const textArrays = new Set(["changes", "names"]);
const metadata = new Set("key game status unit dataAsOf updatedAt profileId gameVersion id sourceUrl url checkedAt dataStatus sourceRevision teamId currentBaseline date scope games requiredKinds unresolved".split(" "));
const isObject = (value: Json): value is { [key: string]: Json } => Boolean(value) && typeof value === "object" && !Array.isArray(value);

/** Offline, lossless preflight only. Does not replace any runtime authoring source. */
export function migrateCandidate(input: unknown): MigrationCandidate {
  // JSON roundtrip also makes the exact serialized API boundary explicit.
  const original = JSON.parse(JSON.stringify(input)) as Json;
  const sources: SourceText[] = [];
  const mapping: MigrationMapping[] = [];
  const exclusions: MigrationCandidate["exclusions"] = [];
  const translations: ContentCatalog["translations"] = { en: {}, "zh-CN": {} };

  function register(value: string | Record<string, Json>, path: string): TextRef {
    // Allocated once in a candidate's persisted mapping; never a production ID algorithm.
    const id = `guide.legacy.preflight.m${String(mapping.length + 1).padStart(6, "0")}` as TextId;
    const localized = typeof value !== "string";
    const ja = localized ? value.ja : value;
    if (typeof ja !== "string" || !ja.trim()) throw new Error(`Empty Japanese source: ${path}`);
    sources.push({ id, ja, context: `Legacy API migration boundary: ${path}`, audience: "public",
      placeholders: {}, dependencies: [], protectedTokens: [...new Set(ja.match(/\d+(?:[.,]\d+)*/g) ?? [])] });
    mapping.push({ legacyPath: path, id, localized });
    if (localized) for (const language of ["en", "zh-CN"] as const) {
      if (typeof value[language] !== "string") throw new Error(`Invalid legacy translation: ${path}.${language}`);
      translations[language][id] = { text: value[language], sourceHash: null, review: "pending", origin: "legacy" };
    }
    return { kind: "textRef", id };
  }

  function visit(value: Json, path: string, field: string): Json {
    if (typeof value === "string") {
      // Collection bookkeeping is not player-facing text.
      if (path.includes(".planned.") || metadata.has(field)) {
        exclusions.push({ legacyPath: path, reason: path.includes(".planned.") ? "information collection metadata" : "compatibility identifier, date, URL, unit or enum" });
        return value;
      }
      if (!display.has(field) && !textArrays.has(field)) throw new Error(`Unclassified string: ${path}`);
      if (!value.trim()) {
        exclusions.push({ legacyPath: path, reason: "empty optional legacy field; preserved without claiming registered content" });
        return value;
      }
      return register(value, path);
    }
    if (Array.isArray(value)) return value.map((entry, index) => visit(entry, `${path}[${index}]`, field));
    if (!isObject(value)) return value;
    if ("ja" in value) {
      const actual = Object.keys(value).sort();
      if (JSON.stringify(actual) !== JSON.stringify(["en", "ja", "zh-CN"])) throw new Error(`Unknown localized field: ${path}`);
      return register(value, path);
    }
    return Object.fromEntries(Object.entries(value).map(([key, entry]) => {
      if (!keys.has(key)) throw new Error(`Unclassified field: ${path}.${key}`);
      return [key, visit(entry, `${path}.${key}`, key)];
    }));
  }

  const projection = visit(original, "root", "root");
  const catalog: ContentCatalog = { schemaVersion: 1, sources, translations, aliases: [], sections: [
    { id: "legacy.preflight", audience: "public", visibility: "active", section: {
      status: "registered", data: sources.map(source => ({ kind: "textRef", id: source.id })), evidence: "offline legacy API baseline" } },
  ] };
  const index = indexCatalog(catalog);
  if (index.issues.length) throw new Error("Invalid migration catalog");
  const partial = { schemaVersion: 1 as const, migrationId: "legacy-preflight-v1" as const,
    inputDigest: contentDigest(original), catalog, mapping, projection, exclusions };
  const candidate = { ...partial, outputDigest: contentDigest(partial) };
  if (contentDigest(legacyProjection(candidate)) !== candidate.inputDigest) throw new Error("Migration changed legacy API content");
  return candidate;
}

/** Reconstructs every original string, language record, number and array position. */
export function legacyProjection(candidate: MigrationCandidate): Json {
  const index = indexCatalog(candidate.catalog);
  if (index.issues.length) throw new Error("Invalid projection catalog");
  const mappings = new Map(candidate.mapping.map(entry => [entry.id, entry]));
  if (mappings.size !== candidate.mapping.length) throw new Error("Duplicate migration mapping");
  function project(value: Json): Json {
    if (Array.isArray(value)) return value.map(project);
    if (!isObject(value)) return value;
    if (value.kind === "textRef") {
      const id = value.id as TextId;
      const entry = mappings.get(id);
      if (!entry) throw new Error(`Missing migration mapping: ${id}`);
      const ja = japaneseText(index, { kind: "textRef", id });
      if (!entry.localized) return ja;
      const en = candidate.catalog.translations.en[id];
      const zh = candidate.catalog.translations["zh-CN"][id];
      if (!en || !zh) throw new Error(`Missing preserved translation: ${id}`);
      return { ja, en: en.text, "zh-CN": zh.text };
    }
    return Object.fromEntries(Object.entries(value).map(([key, entry]) => [key, project(entry)]));
  }
  return project(candidate.projection);
}
