import type { GuideAuthoringRecord } from "../../shared/content/guideAuthoring";
import type { GuideDefinition } from "../buildAdvisor";
import { guideRefs } from "../../shared/content/walk";
import { canonicalSources, canonicalTranslations } from "../../content/catalog";
import { createLegacyTexts } from "./legacyTexts";
import { validateGuides } from "../../content/guides";
import type { TextRef } from "../../shared/content/types";
import type { BoundTextRef } from "../../shared/content/teamAuthoring";

const texts = createLegacyTexts(
  canonicalSources,
  canonicalTranslations.en,
  canonicalTranslations["zh-CN"]
);
const knownSources = new Set(canonicalSources.map(source => source.id));
const ja = (ref: TextRef) => texts.ja(ref.id, (ref as BoundTextRef).variables);

/** Preserve the previous serialization order as well as all calculation values. */
function projectGuideProjection(
  record: GuideAuthoringRecord
): Omit<GuideDefinition, "headline"> & { headline?: string } {
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
      slot: ja(stat.slotLabel),
      value: ja(stat.value),
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
      label: ja(target.label),
      unit: target.unit,
      targets: ordered(record.legacyShape.tierFields[index], {
        厳選: target.strict,
        目標: target.goal,
        妥協: target.base,
      }),
    });
  });
  return ordered(record.legacyShape.fields, {
    ...(record.factory ? {} : { headline: ja(content.headline) }),
    relicSet: ja(content.equipmentRecommendations[0].description),
    planarSet: ja(content.equipmentRecommendations[1].description),
    mainStats,
    targets,
    ...(content.targetContext
      ? { targetContext: ja(content.targetContext) }
      : {}),
    ...(content.sourceLabels.length
      ? { sourceLabel: ja(content.sourceLabels[0]) }
      : {}),
    ...record.metadata,
  }) as Omit<GuideDefinition, "headline"> & { headline?: string };
}

export function projectGuide(record: GuideAuthoringRecord): GuideDefinition {
  if (record.factory)
    throw new Error("Guide factory needs a generated owner binding");
  return projectGuideProjection(record) as GuideDefinition;
}
export function projectGuideProfile(
  record: GuideAuthoringRecord
): Omit<GuideDefinition, "headline"> {
  if (!record.factory) throw new Error("Missing guide factory");
  return projectGuideProjection(record);
}

export function projectGuideProfileRegistry(
  records: GuideAuthoringRecord[],
  registry: string
): Record<string, Omit<GuideDefinition, "headline">> {
  validateGuides(records);
  return Object.fromEntries(
    records
      .filter(record => record.lookupKey.startsWith(`${registry}:`))
      .map(record => {
        if (!record.factory) throw new Error("Missing guide factory");
        return [
          record.lookupKey.slice(registry.length + 1),
          projectGuideProfile(record),
        ];
      })
  );
}

export function projectGeneratedGuide(
  records: GuideAuthoringRecord[],
  registry: string,
  profileId: string,
  name: string
): GuideDefinition {
  const record = records.find(
    record => record.lookupKey === `${registry}:${profileId}`
  );
  if (!record?.factory) throw new Error("Unknown guide factory profile");
  const profile = projectGuideProfile(record);
  return {
    ...profile,
    profileId,
    headline: texts.ja(record.content.headline.id, {
      v0: name,
      v1: texts.ja(record.factory.label.id),
    }),
    targetContext:
      profile.targetContext ??
      texts.ja(record.factory.context.id, { v0: name }),
  };
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
