import { records as batch29 } from "./constellationBatch29";
import { records } from "./constellationBatch17";
import { records as curated } from "./constellationCurated";
import { records as batch23 } from "./constellationBatch23";
import { records as batch28 } from "./constellationBatch28";
import { canonicalSources } from "./catalog";
import { contentFields, requiredContentRef } from "../shared/content/walk";
import type { ConstellationAuthoring } from "../shared/content/constellationAuthoring";
import type { BoundTextRef } from "../shared/content/teamAuthoring";
import type { TextRef, CoverageSection } from "../shared/content/types";
const ignore = (_value: unknown): TextRef[] => [];
const sources = new Set(canonicalSources.map(source => source.id));
function ref(value: BoundTextRef): TextRef[] {
  requiredContentRef(value);
  contentFields(value, {
    kind: ignore,
    id: ignore,
    variables: value => {
      if (value && Object.keys(value).length)
        throw new Error("Unexpected constellation variables");
      return [];
    },
  });
  if (!sources.has(value.id))
    throw new Error("Unknown constellation text reference");
  return [value];
}
export function constellationRefs(record: ConstellationAuthoring): TextRef[] {
  return contentFields(record, {
    entryId: ignore,
    identities: ignore,
    legacyIdentities: ignore,
    data: data =>
      contentFields(data, {
        gameVersion: ignore,
        dataAsOf: ignore,
        updatedAt: ignore,
        sourceLabel: ref,
        sourceUrl: ignore,
        effects: effects =>
          effects.flatMap(effect =>
            contentFields(effect, {
              level: ignore,
              name: ref,
              description: ref,
              caution: value => (value ? ref(value) : []),
              targetChanges: values =>
                (values ?? []).flatMap(value =>
                  contentFields(value, {
                    key: ignore,
                    label: ref,
                    unit: ignore,
                    targets: targets =>
                      contentFields(targets, {
                        厳選: ignore,
                        目標: ignore,
                        妥協: ignore,
                      }),
                    reason: ref,
                  })
                ),
            })
          ),
      }),
  });
}
export function validateConstellations(values: ConstellationAuthoring[]) {
  const ids = new Set<string>();
  const identities = new Set<string>();
  for (const record of values) {
    if (
      !/^constellation\.(batch17|batch23|batch28|batch29|curated)\.entry\d+$/.test(
        record.entryId
      ) ||
      ids.has(record.entryId)
    )
      throw new Error("Invalid constellation entry ID");
    ids.add(record.entryId);
    if (!record.identities.length)
      throw new Error("Unbound constellation entry");
    for (const identity of record.identities) {
      const confirmed = /^(hsr|genshin|zzz):\d+(?:-\d+)?$/.test(identity);
      if (
        identities.has(identity) ||
        (!confirmed && !record.legacyIdentities?.[identity]?.trim())
      )
        throw new Error("Invalid constellation identity");
      if (confirmed && record.legacyIdentities?.[identity])
        throw new Error("Confirmed identity cannot be legacy");
      identities.add(identity);
    }
    if (
      Object.keys(record.legacyIdentities ?? {}).some(
        identity => !record.identities.includes(identity)
      )
    )
      throw new Error("Unknown legacy constellation identity");
    for (const effect of record.data.effects)
      for (const change of effect.targetChanges ?? []) {
        if (
          JSON.stringify(Object.keys(change.targets).sort()) !==
            JSON.stringify(["厳選", "目標", "妥協"].sort()) ||
          Object.values(change.targets).some(
            value => typeof value !== "number" || !Number.isFinite(value)
          )
        )
          throw new Error("Invalid constellation target values");
        if (!["", "%"].includes(change.unit))
          throw new Error("Invalid constellation target unit");
      }
    if (
      record.data.effects.length !== 6 ||
      record.data.effects.some((effect, index) => effect.level !== index + 1)
    )
      throw new Error("Invalid constellation level order");
    for (const date of [record.data.dataAsOf, record.data.updatedAt])
      if (!/^\d{4}-\d{2}-\d{2}$/.test(date))
        throw new Error("Invalid constellation date");
    if (!record.data.gameVersion || !/^https:\/\//.test(record.data.sourceUrl))
      throw new Error("Invalid constellation evidence");
    constellationRefs(record);
  }
}
export const constellationRecords = [...records, ...curated, ...batch23, ...batch28, ...batch29];
export function unresolvedConstellationIdentities() {
  return constellationRecords
    .flatMap(record =>
      Object.entries(record.legacyIdentities ?? {}).map(
        ([identity, reason]) => ({ entryId: record.entryId, identity, reason })
      )
    )
    .sort((a, b) => a.entryId.localeCompare(b.entryId));
}
export function constellationSections(): CoverageSection[] {
  validateConstellations(constellationRecords);
  return constellationRecords.map(record => ({
    id: record.entryId,
    audience: "public",
    visibility: "active",
    section: {
      status: "registered",
      data: constellationRefs(record),
      evidence: record.data.sourceUrl,
    },
  }));
}
