import { records } from "./constellationBatch17";
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
      !/^constellation\.batch17\.entry\d+$/.test(record.entryId) ||
      ids.has(record.entryId)
    )
      throw new Error("Invalid constellation entry ID");
    ids.add(record.entryId);
    if (!record.identities.length)
      throw new Error("Unbound constellation entry");
    for (const identity of record.identities) {
      if (!/^genshin:\d+(?:-\d+)?$/.test(identity) || identities.has(identity))
        throw new Error("Invalid constellation identity");
      identities.add(identity);
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
export function constellationSections(): CoverageSection[] {
  validateConstellations(records);
  return records.map(record => ({
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
