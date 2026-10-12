import { records, defaults } from "./guideMetadata";
import { characterRecords } from "./characters";
import { canonicalSources } from "./catalog";
import { contentFields, requiredContentRef } from "../shared/content/walk";
import type {
  GuideMetadataAuthoring,
  GuideMetadataFields,
} from "../shared/content/guideMetadataAuthoring";
import type { Game } from "../shared/content/domains";
import type { CoverageSection, TextRef } from "../shared/content/types";
const ignore = (_value: unknown): TextRef[] => [];
const sources = new Map(canonicalSources.map(source => [source.id, source]));
const metadataKeys = ["profileId", "dataAsOf", "updatedAt", "sourceLabel"];
export { records as guideMetadataRecords, defaults as guideMetadataDefaults };
function metadataRefs(value: GuideMetadataFields): TextRef[] {
  const refs = contentFields(value, {
    profileId: ignore,
    dataAsOf: ignore,
    updatedAt: ignore,
    sourceLabel: requiredContentRef,
    legacyFieldOrder: ignore,
  });
  if (
    typeof value.profileId !== "string" ||
    !value.profileId.trim() ||
    JSON.stringify([...value.legacyFieldOrder].sort()) !==
      JSON.stringify([...metadataKeys].sort())
  )
    throw new Error("Invalid guide metadata profile or shape");
  for (const date of [value.dataAsOf, value.updatedAt])
    if (
      typeof date !== "string" ||
      !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
      !Number.isFinite(Date.parse(date)) ||
      new Date(date).toISOString().slice(0, 10) !== date
    )
      throw new Error("Invalid guide metadata date");
  for (const ref of refs) {
    contentFields(ref, { kind: ignore, id: ignore });
    const source = sources.get(ref.id);
    if (
      !ref.id.startsWith("guide.legacy.metadataMaster.") ||
      !source ||
      source.audience !== "public" ||
      Object.keys(source.placeholders).length
    )
      throw new Error("Invalid guide metadata source label");
  }
  return refs;
}
export function validateGuideMetadata(
  values: GuideMetadataAuthoring[],
  fallbacks: Record<Game, GuideMetadataFields>
) {
  const expected = new Map(
    characterRecords.map(record => [record.identityKey, record])
  );
  const seen = new Set<string>();
  for (const record of values) {
    const refs = contentFields(record, {
      identityKey: ignore,
      game: ignore,
      name: requiredContentRef,
      profileId: ignore,
      dataAsOf: ignore,
      updatedAt: ignore,
      sourceLabel: requiredContentRef,
      legacyFieldOrder: ignore,
    });
    for (const ref of refs) contentFields(ref, { kind: ignore, id: ignore });
    const character = expected.get(record.identityKey);
    if (
      !character ||
      seen.has(record.identityKey) ||
      record.game !== character.game ||
      record.name.id !== character.name.id
    )
      throw new Error("Guide metadata character identity differs");
    seen.add(record.identityKey);
    const {
      identityKey: _identityKey,
      game: _game,
      name: _name,
      ...fields
    } = record;
    metadataRefs(fields);
  }
  if (seen.size !== expected.size)
    throw new Error("Missing character guide metadata");
  if (
    JSON.stringify(Object.keys(fallbacks).sort()) !==
    JSON.stringify(["genshin", "hsr", "zzz"])
  )
    throw new Error("Missing guide metadata fallback game");
  for (const fields of Object.values(fallbacks)) metadataRefs(fields);
}
export function guideMetadataSections(): CoverageSection[] {
  validateGuideMetadata(records, defaults);
  return [
    ...records.map(record => ({
      id: `guide.metadata.${record.identityKey.replace(":", ".")}`,
      audience: "public" as const,
      visibility: "active" as const,
      section: {
        status: "registered" as const,
        data: [record.name, record.sourceLabel],
        evidence: "Lossless migration of existing character update metadata",
      },
    })),
    ...Object.entries(defaults).map(([game, fields]) => ({
      id: `guide.metadata.${game}.fallback`,
      audience: "public" as const,
      visibility: "active" as const,
      section: {
        status: "registered" as const,
        data: [fields.sourceLabel],
        evidence: "Existing unknown-character metadata fallback",
      },
    })),
  ];
}
