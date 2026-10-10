import type { CharacterContent, ConstellationContent, GuideContent, HistoryContent, TeamContent } from "../../shared/content/domains";
import type { Section, TextRef } from "../../shared/content/types";

type FieldVisitors<T> = { [K in keyof T]-?: (value: T[K]) => TextRef[] };
const ignore = (_value: unknown): TextRef[] => [];
const ref = (value: TextRef): TextRef[] => {
  if (!value || value.kind !== "textRef" || typeof value.id !== "string") throw new Error("Display text needs an explicit TextRef");
  return [value];
};
const optionalRef = (value: TextRef | undefined): TextRef[] => value ? [value] : [];

/** Exhaustive field handlers are required at compile time; extra runtime keys fail. */
function fields<T extends object>(value: T, visitors: FieldVisitors<T>): TextRef[] {
  for (const key of Object.keys(value)) if (!Object.hasOwn(visitors, key)) throw new Error(`Unclassified content field: ${key}`);
  return (Object.keys(visitors) as Array<keyof T>).flatMap(key => visitors[key](value[key]));
}

function section<T>(value: Section<T[]>, visit: (entry: T) => TextRef[]): TextRef[] {
  switch (value.status) {
    case "registered":
      if (!value.data.length || !value.evidence.trim()) throw new Error("Registered content needs data and evidence");
      return fields(value, { status: ignore, evidence: ignore, data: entries => entries.flatMap(visit) });
    case "notCollected":
      if (!value.reason.trim() || !value.requiredKinds.length) throw new Error("Uncollected content needs reason and expectations");
      return fields(value, { status: ignore, reason: ignore, requiredKinds: ignore });
    case "notApplicable":
      if (!value.reason.trim() || !value.evidence.trim()) throw new Error("Inapplicable content needs reason and evidence");
      return fields(value, { status: ignore, reason: ignore, evidence: ignore });
    default: {
      const exhaustive: never = value;
      throw new Error(`Unknown content section: ${String(exhaustive)}`);
    }
  }
}

export function characterRefs(value: CharacterContent): TextRef[] {
  return fields(value, {
    identityKey: ignore, game: ignore, name: ref, elementKey: ignore, roleKey: ignore,
    introduction: value => section(value, ref),
    skills: value => section(value, skill => fields(skill, {
      skillId: ignore, kind: ignore, order: ignore, name: ref, description: ref,
      effects: effects => effects.flatMap(effect => fields(effect, {
        effectId: ignore, condition: optionalRef,
        values: value => section(value, entry => fields(entry, { level: ignore, value: ignore, unit: ignore, scalingKey: ignore })),
      })),
      notes: value => section(value, ref), sourceUrls: ignore,
    })),
  });
}

export function guideRefs(value: GuideContent): TextRef[] {
  return fields(value, {
    guideId: ignore, identityKey: ignore, headline: ref,
    equipmentRecommendations: values => values.flatMap(item => fields(item, {
      recommendationId: ignore, order: ignore,
      sets: values => values.flatMap(item => fields(item, { identityKey: ignore, pieces: ignore })), description: ref,
      reason: value => section(value, ref), alternatives: value => section(value, ref),
    })),
    mainStatPreferences: values => values.flatMap(item => fields(item, { slotKey: ignore, statOptions: ignore, slotLabel: ref, value: ref })),
    targetDefinitions: values => values.flatMap(item => fields(item, { key: ignore, label: ref, unit: ignore, strict: ignore, goal: ignore, base: ignore })),
    targetContext: optionalRef, sourceLabels: values => values.flatMap(ref),
  });
}

export function teamRefs(value: TeamContent): TextRef[] {
  return fields(value, {
    teamId: ignore, game: ignore, title: ref,
    members: values => values.flatMap(item => fields(item, { identityKey: ignore, name: ref, role: ref })),
    synergy: values => values.flatMap(item => fields(item, { blockId: ignore, text: ref })),
    targetSummary: ref,
    changes: values => values.flatMap(item => fields(item, { key: ignore, label: ref, reason: ref })),
    sources: values => values.flatMap(item => fields(item, { sourceId: ignore, label: ref, note: optionalRef, url: ignore })),
  });
}

export function constellationRefs(value: ConstellationContent): TextRef[] {
  return fields(value, {
    identityKey: ignore, rankLabel: ref, sourceLabel: ref,
    effects: values => values.flatMap(item => fields(item, {
      level: ignore, name: ref, description: ref, caution: optionalRef,
      changes: values => values.flatMap(item => fields(item, { key: ignore, label: ref, reason: ref })),
    })),
  });
}

export function historyRefs(value: HistoryContent): TextRef[] {
  return fields(value, {
    eventId: ignore, date: ignore, title: ref, summary: ref,
    changes: values => values.flatMap(item => fields(item, { blockId: ignore, text: ref })), rationale: ref,
  });
}
