import { records as hsr } from "./guideDefinitions_hsr";
import { records as providers } from "./guideDefinitions_providers";
import { records as profiles } from "./guideDefinitions_profiles";
import { records as batch17 } from "./guideDefinitions_batch17";
import { records as batch23 } from "./guideDefinitions_batch23";
import { canonicalSources } from "./catalog";
import {
  contentFields,
  guideRefs,
  requiredContentRef,
} from "../shared/content/walk";
import type { GuideAuthoringRecord } from "../shared/content/guideAuthoring";
import { GUIDE_PROFILE_IDS } from "../shared/content/guideAuthoring";
import type { CoverageSection, TextRef } from "../shared/content/types";
import type { BoundTextRef } from "../shared/content/teamAuthoring";
import { formatContentText } from "../shared/content/format";

const ignore = (_value: unknown): TextRef[] => [];
const sources = new Set(canonicalSources.map(source => source.id));
const sourceMap = new Map(canonicalSources.map(source => [source.id, source]));
export const guideRecords = [
  ...hsr,
  ...providers,
  ...profiles,
  ...batch17,
  ...batch23,
];
export function validateGuides(records: GuideAuthoringRecord[]) {
  const ids = new Set<string>(),
    lookups = new Set<string>();
  const shape = (actual: string[], expected: string[]) => {
    if (
      JSON.stringify([...actual].sort()) !==
      JSON.stringify([...expected].sort())
    )
      throw new Error("Guide legacy shape differs");
  };
  for (const record of records) {
    const refs = contentFields(record, {
      guideId: ignore,
      game: ignore,
      lookupKey: ignore,
      lookupKind: ignore,
      factory: value =>
        value
          ? contentFields(value, {
              context: requiredContentRef,
              label: requiredContentRef,
              headlineBindings: value =>
                contentFields(value, { v0: ignore, v1: ignore }),
              contextBindings: value => contentFields(value, { v0: ignore }),
            })
          : [],
      content: guideRefs,
      equipmentLegacy: values =>
        values.flatMap(value =>
          contentFields(value, {
            recommendationId: ignore,
            identityKey: ignore,
            reason: ignore,
          })
        ),
      mainStatLegacy: values =>
        values.flatMap(value =>
          contentFields(value, {
            slotKey: ignore,
            statOptions: ignore,
            reason: ignore,
          })
        ),
      metadata: value =>
        contentFields(value, {
          dataAsOf: ignore,
          updatedAt: ignore,
          profileId: ignore,
        }),
      legacyShape: value =>
        contentFields(value, {
          fields: ignore,
          mainStatFields: ignore,
          targetFields: ignore,
          tierFields: ignore,
        }),
    });
    if (
      !/^guide\.authoring\.guideDefinitions_(hsr|providers|profiles|batch17|batch23)\.b\d{5}$/.test(
        record.guideId
      ) ||
      ids.has(record.guideId) ||
      lookups.has(record.lookupKey) ||
      record.guideId !== record.content.guideId ||
      !["hsr", "genshin", "zzz"].includes(record.game) ||
      !["name", "sourceId", "profile"].includes(record.lookupKind)
    )
      throw new Error("Invalid guide identity");
    ids.add(record.guideId);
    lookups.add(record.lookupKey);
    for (const ref of refs) {
      contentFields(ref as BoundTextRef, {
        kind: ignore,
        id: ignore,
        variables: ignore,
      });
      if (!sources.has(ref.id)) throw new Error("Unknown guide text reference");
      if (
        !record.factory ||
        ![record.content.headline.id, record.factory.context.id].includes(
          ref.id
        )
      ) {
        const source = sourceMap.get(ref.id)!;
        formatContentText(
          source.id,
          source.ja,
          source.placeholders,
          (ref as BoundTextRef).variables
        );
      }
    }
    const content = record.content;
    if ((record.lookupKind === "profile") !== Boolean(record.factory))
      throw new Error("Guide factory policy differs");
    if (
      record.factory &&
      (record.factory.headlineBindings.v0 !== "name" ||
        record.factory.headlineBindings.v1 !== "label" ||
        record.factory.contextBindings.v0 !== "name")
    )
      throw new Error("Guide factory bindings differ");
    if (record.factory) {
      for (const [ref, expected] of [
        [content.headline, { v0: "string", v1: "string" }],
        [record.factory.context, { v0: "string" }],
        [record.factory.label, {}],
      ] as const)
        if (
          JSON.stringify(sourceMap.get(ref.id)?.placeholders) !==
          JSON.stringify(expected)
        )
          throw new Error("Guide factory placeholder contract differs");
    }
    const expectedIdentity =
      record.lookupKind === "sourceId"
        ? `${record.game}:${record.lookupKey.slice(record.lookupKey.indexOf(":") + 1)}`
        : `legacy:${record.game}:${record.guideId}`;
    if (content.identityKey !== expectedIdentity)
      throw new Error("Guide lookup identity differs");
    shape(record.legacyShape.fields, [
      ...(record.factory ? [] : ["headline"]),
      "relicSet",
      "planarSet",
      "mainStats",
      "targets",
      ...(content.targetContext ? ["targetContext"] : []),
      ...(content.sourceLabels.length ? ["sourceLabel"] : []),
      ...Object.keys(record.metadata),
    ]);
    if (
      content.sourceLabels.length > 1 ||
      content.equipmentRecommendations.length !== 2 ||
      record.equipmentLegacy.length !== 2
    )
      throw new Error("Guide equipment or source shape differs");
    content.equipmentRecommendations.forEach((item, index) => {
      const field = index === 0 ? "relicSet" : "planarSet",
        legacy = record.equipmentLegacy[index];
      if (
        item.recommendationId !== `${record.guideId}.${field}` ||
        item.order !== index + 1 ||
        item.sets.length ||
        legacy.recommendationId !== item.recommendationId ||
        legacy.identityKey !== `legacy:equipment:${item.recommendationId}` ||
        !legacy.reason.trim()
      )
        throw new Error("Invalid unresolved guide equipment");
    });
    if (
      record.mainStatLegacy.length !== content.mainStatPreferences.length ||
      record.legacyShape.mainStatFields.length !==
        content.mainStatPreferences.length ||
      record.legacyShape.targetFields.length !==
        content.targetDefinitions.length ||
      record.legacyShape.tierFields.length !== content.targetDefinitions.length
    )
      throw new Error("Guide array shape differs");
    content.mainStatPreferences.forEach((item, index) => {
      const legacy = record.mainStatLegacy[index];
      shape(record.legacyShape.mainStatFields[index], ["slot", "value"]);
      if (
        item.slotKey !== `legacy:${item.slotLabel.id}` ||
        JSON.stringify(item.statOptions) !==
          JSON.stringify([`legacy:${item.value.id}`]) ||
        legacy.slotKey !== item.slotKey ||
        JSON.stringify(legacy.statOptions) !==
          JSON.stringify(item.statOptions) ||
        !legacy.reason.trim()
      )
        throw new Error("Invalid unresolved guide main-stat");
    });
    content.targetDefinitions.forEach((item, index) => {
      shape(record.legacyShape.targetFields[index], [
        "key",
        "label",
        "unit",
        "targets",
      ]);
      shape(record.legacyShape.tierFields[index], ["厳選", "目標", "妥協"]);
      if (
        !item.key ||
        !["", "%"].includes(item.unit) ||
        ![item.strict, item.goal, item.base].every(Number.isFinite)
      )
        throw new Error("Invalid guide target");
    });
    for (const [key, value] of Object.entries(record.metadata)) {
      if (
        typeof value !== "string" ||
        !value.trim() ||
        (key !== "profileId" && !/^\d{4}-\d{2}-\d{2}$/.test(value))
      )
        throw new Error("Invalid guide metadata");
    }
  }
}
export function guideSections(): CoverageSection[] {
  validateGuides(guideRecords);
  validateGuideProfiles(profiles);
  return guideRecords.flatMap(record => [
    {
      id: record.guideId,
      audience: "public" as const,
      visibility: "active" as const,
      section: {
        status: "registered" as const,
        data: [
          ...guideRefs(record.content),
          ...(record.factory
            ? [record.factory.context, record.factory.label]
            : []),
        ].map(ref => ({ kind: "textRef" as const, id: ref.id })),
        evidence: "Lossless migration of existing guide definitions",
      },
    },
    ...record.content.equipmentRecommendations.flatMap(item =>
      (["reason", "alternatives"] as const).map(field => ({
        id: `${item.recommendationId}.${field}`,
        audience: "public" as const,
        visibility: "planned" as const,
        section: item[field],
      }))
    ),
  ]);
}
export function validateGuideProfiles(values: GuideAuthoringRecord[]) {
  validateGuides(values);
  const expected = Object.entries(GUIDE_PROFILE_IDS)
    .flatMap(([game, ids]) => ids.map(id => `${game}:${id}`))
    .sort();
  const actual = values
    .map(record => {
      const registry = {
        hsr: "HSR_PROFILES",
        genshin: "GI_PROFILES",
        zzz: "ZZZ_PROFILES",
      }[record.game];
      if (
        record.lookupKind !== "profile" ||
        !record.lookupKey.startsWith(`${registry}:`)
      )
        throw new Error("Guide profile registry differs");
      return `${record.game}:${record.lookupKey.slice(registry.length + 1)}`;
    })
    .sort();
  if (JSON.stringify(actual) !== JSON.stringify(expected))
    throw new Error("Missing or unexpected guide profile");
}
export function unresolvedGuideFields() {
  return guideRecords
    .map(record => ({
      guideId: record.guideId,
      ...(record.lookupKind === "name"
        ? {
            identity: {
              lookupKey: record.lookupKey,
              identityKey: record.content.identityKey,
              reason:
                "Existing name-based selection is preserved; canonical source IDs have not been independently reconciled",
            },
          }
        : {}),
      equipment: record.equipmentLegacy,
      mainStats: record.mainStatLegacy,
    }))
    .sort((a, b) => a.guideId.localeCompare(b.guideId));
}
