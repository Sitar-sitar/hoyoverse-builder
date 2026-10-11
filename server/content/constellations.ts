import { validateConstellations } from "../../content/constellations";
import { canonicalSources, canonicalTranslations } from "../../content/catalog";
import type {
  ConstellationAuthoring,
  Batch17ConstellationEntry,
} from "../../shared/content/constellationAuthoring";
import type { TextRef } from "../../shared/content/types";
import { createLegacyTexts } from "./legacyTexts";
const texts = createLegacyTexts(
  canonicalSources,
  canonicalTranslations.en,
  canonicalTranslations["zh-CN"]
);
function project(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(project);
  if (!value || typeof value !== "object") return value;
  if ("kind" in value && value.kind === "textRef")
    return texts.localized((value as TextRef).id);
  return Object.fromEntries(
    Object.entries(value).map(([key, item]) => [key, project(item)])
  );
}
export function projectConstellations(
  records: ConstellationAuthoring[]
): Record<string, Batch17ConstellationEntry> {
  validateConstellations(records);
  const result: Record<string, Batch17ConstellationEntry> = {};
  for (const record of records) {
    const entry = project(record.data) as Batch17ConstellationEntry;
    for (const identity of record.identities) result[identity] = entry;
  }
  return result;
}
