import type { GuideAuthoringRecord } from "../../shared/content/guideAuthoring";
import type { GuideDefinition } from "../buildAdvisor";
import { guideRefs } from "../../shared/content/walk";
import { canonicalSources, canonicalTranslations } from "../../content/catalog";
import { createLegacyTexts } from "./legacyTexts";
import { validateGuides } from "../../content/guides";

const texts = createLegacyTexts(
  canonicalSources,
  canonicalTranslations.en,
  canonicalTranslations["zh-CN"]
);
const knownSources = new Set(canonicalSources.map(source => source.id));

/** Preserve the previous serialization order as well as all calculation values. */
export function projectGuide(record: GuideAuthoringRecord): GuideDefinition {
  const content = record.content;
  for (const ref of guideRefs(content)) {
    if (!knownSources.has(ref.id))
      throw new Error("Unknown guide text reference");
  }
  if (record.guideId !== content.guideId)
    throw new Error("Guide identity differs");
  if (content.equipmentRecommendations.length !== 2)
    throw new Error("Legacy guide equipment shape differs");
  const ordered = (keys: string[], fields: Record<string, unknown>) => {
    if (
      new Set(keys).size !== keys.length ||
      keys.some(key => !Object.hasOwn(fields, key))
    )
      throw new Error("Unknown or duplicate guide projection field");
    return Object.fromEntries(keys.map(key => [key, fields[key]]));
  };
  if (
    record.legacyShape.mainStatFields.length !==
      content.mainStatPreferences.length ||
    record.legacyShape.targetFields.length !==
      content.targetDefinitions.length ||
    record.legacyShape.tierFields.length !== content.targetDefinitions.length
  )
    throw new Error("Guide projection array shape differs");
  const mainStats = content.mainStatPreferences.map((stat, index) =>
    ordered(record.legacyShape.mainStatFields[index], {
      slot: texts.ja(stat.slotLabel.id),
      value: texts.ja(stat.value.id),
    })
  );
  const targets = content.targetDefinitions.map((target, index) => {
    if (
      ![target.strict, target.goal, target.base].every(Number.isFinite) ||
      !["", "%"].includes(target.unit)
    )
      throw new Error("Invalid guide target values");
    return ordered(record.legacyShape.targetFields[index], {
      key: target.key,
      label: texts.ja(target.label.id),
      unit: target.unit,
      targets: ordered(record.legacyShape.tierFields[index], {
        厳選: target.strict,
        目標: target.goal,
        妥協: target.base,
      }),
    });
  });
  return ordered(record.legacyShape.fields, {
    headline: texts.ja(content.headline.id),
    relicSet: texts.ja(content.equipmentRecommendations[0].description.id),
    planarSet: texts.ja(content.equipmentRecommendations[1].description.id),
    mainStats,
    targets,
    ...(content.targetContext
      ? { targetContext: texts.ja(content.targetContext.id) }
      : {}),
    ...(content.sourceLabels.length
      ? { sourceLabel: texts.ja(content.sourceLabels[0].id) }
      : {}),
    ...record.metadata,
  }) as GuideDefinition;
}

export function projectGuideRegistry(
  records: GuideAuthoringRecord[],
  registry: string
): Record<string, GuideDefinition> {
  validateGuides(records);
  const result: Record<string, GuideDefinition> = {};
  for (const record of records) {
    if (!record.lookupKey.startsWith(`${registry}:`)) continue;
    const key = record.lookupKey.slice(registry.length + 1);
    if (!key || Object.hasOwn(result, key))
      throw new Error("Duplicate or empty guide lookup key");
    result[key] = projectGuide(record);
  }
  return result;
}
