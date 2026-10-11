import type { PresentationDTO } from "../../shared/content/presentation";
import { contentManifest } from "./repository";
import { catalogSourceIdFor } from "../characterConstellations";

let revision: string | undefined;
function japanese(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(japanese);
  if (!value || typeof value !== "object") return value;
  const record = value as Record<string, unknown>;
  if (typeof record.ja === "string" && typeof record.en === "string" && typeof record["zh-CN"] === "string" && Object.keys(record).length === 3) return record.ja;
  return Object.fromEntries(Object.entries(record).map(([key, entry]) => [key, japanese(entry)]));
}
const fields = ["name", "guide", "constellations", "partyRecommendations", "partyAppearances", "statsNote"] as const;
function project<T extends object>(value: T, selectedFields: readonly string[], identityKey: string | null): T & { presentation: PresentationDTO } {
  const record = value as Record<string, unknown>;
  if (!identityKey && typeof record.name === "string" && ["hsr", "genshin", "zzz"].includes(String(record.game))) {
    const game = record.game as "hsr" | "genshin" | "zzz";
    const sourceId = catalogSourceIdFor(game, record.name);
    if (sourceId) identityKey = `${game}:${sourceId}`;
  }
  const display = Object.fromEntries(selectedFields.filter(field => field in record).map(field => [field, japanese(record[field])]));
  return { ...value, presentation: {
    schemaVersion: 1, contentRevision: revision ??= contentManifest().contentRevision, language: "ja", identityKey,
    information: { introduction: "notCollected", skills: "notCollected" }, display,
  } };
}
export function withPresentation<T extends object>(value: T, identityKey: string | null = null) {
  return project(value, fields, identityKey);
}
export function withCatalogPresentation<T extends object>(value: T) {
  return project(value, ["games"], null);
}
export function withHistoryPresentation<T extends object>(value: T) {
  return project(value, ["siteEvents", "characters", "updateLedger"], null);
}
/** Projection after cache read; cached Japanese computation data remains unchanged. */
export function withLookupPresentation<T extends { characters: Array<{ identity?: { key: string } }> }>(value: T) {
  return { ...value, characters: value.characters.map(character => withPresentation(character, character.identity?.key ?? null)) };
}
