import { historyRecords } from "./historyRecords";
import { historyBatches } from "./historyBatches";
import {
  historyProfileTemplate,
  type HistoryProfileTemplate,
} from "./historyProfile";
import { sources } from "./ja/guides/guideUpdateHistory";
import type {
  HistoryRecord,
  HistoryBatchRecord,
} from "../shared/content/domains";
import type { SourceText, CoverageSection } from "../shared/content/types";
import { historyRefs } from "../shared/content/walk";
export { historyRecords };
export { historyBatches };
export { historyProfileTemplate };
export function profileHistoryRefs(
  value: HistoryProfileTemplate,
  texts: SourceText[] = sources
) {
  if (
    JSON.stringify(Object.keys(value).sort()) !==
      JSON.stringify(
        [
          "templateId",
          "dateSource",
          "title",
          "summary",
          "summaryBindings",
          "changes",
          "rationale",
        ].sort()
      ) ||
    value.templateId !== "history.character.profile" ||
    value.dateSource !== "characterMetadata.updatedAt"
  )
    throw new Error("Invalid history profile template");
  if (
    JSON.stringify(value.summaryBindings) !==
      JSON.stringify({ v0: "profileId" }) ||
    JSON.stringify(
      texts.find(source => source.id === value.summary.id)?.placeholders
    ) !== JSON.stringify({ v0: "string" })
  )
    throw new Error("Invalid history profile binding");
  if (
    !value.changes.length ||
    new Set(value.changes.map(block => block.blockId)).size !==
      value.changes.length ||
    value.changes.some(block => !block.blockId.trim())
  )
    throw new Error("Invalid history profile blocks");
  const refs = historyRefs({
    eventId: value.templateId,
    date: "runtime",
    title: value.title,
    summary: value.summary,
    changes: value.changes,
    rationale: value.rationale,
  });
  if (refs.some(ref => !texts.some(source => source.id === ref.id)))
    throw new Error("Unknown history profile reference");
  return refs;
}

export function validateHistoryBatches(
  records: HistoryBatchRecord[],
  texts: SourceText[]
) {
  const ids = new Set<number>();
  const sourceMap = new Map(texts.map(source => [source.id, source]));
  for (const record of records) {
    if (
      JSON.stringify(Object.keys(record).sort()) !==
      JSON.stringify(["batch", "content", "summaryBindings"])
    )
      throw new Error("Unclassified history batch field");
    if (
      !Number.isInteger(record.batch) ||
      record.batch <= 0 ||
      ids.has(record.batch) ||
      record.content.eventId !== `history.batch.${record.batch}`
    )
      throw new Error("Invalid history batch ID");
    if (
      JSON.stringify(record.summaryBindings) !==
        JSON.stringify({ v0: "characterName" }) ||
      JSON.stringify(sourceMap.get(record.content.summary.id)?.placeholders) !==
        JSON.stringify({ v0: "string" })
    )
      throw new Error("Invalid history summary binding contract");
    // All other fields are static Japanese refs; only summary accepts the typed name variable.
    if (historyRefs(record.content).some(ref => !sourceMap.has(ref.id)))
      throw new Error("Unknown history batch reference");
    if (
      !Number.isFinite(Date.parse(record.content.date)) ||
      !record.content.changes.length ||
      new Set(record.content.changes.map(block => block.blockId)).size !==
        record.content.changes.length ||
      record.content.changes.some(block => !block.blockId.trim())
    )
      throw new Error("Invalid history batch date/blocks");
    if (
      historyRefs(record.content)
        .filter(ref => ref.id !== record.content.summary.id)
        .some(ref => Object.keys(sourceMap.get(ref.id)!.placeholders).length)
    )
      throw new Error("Unexpected history static placeholder");
    ids.add(record.batch);
  }
}

export function validateHistoryRecords(
  records: HistoryRecord[],
  texts: SourceText[]
) {
  const ids = new Set<string>();
  const sourceIds = new Set(texts.map(source => source.id));
  for (const record of records) {
    const expected = [
      "content",
      "scope",
      "games",
      "legacyFieldOrder",
      ...(record.characterName !== undefined ? ["characterName"] : []),
    ].sort();
    if (JSON.stringify(Object.keys(record).sort()) !== JSON.stringify(expected))
      throw new Error("Unclassified history record field");
    if (
      !["site", "character"].includes(record.scope) ||
      !record.games.length ||
      new Set(record.games).size !== record.games.length ||
      record.games.some(game => !["hsr", "genshin", "zzz"].includes(game))
    )
      throw new Error("Invalid history scope/games");
    if (
      record.scope === "character"
        ? !record.characterName?.trim() || record.games.length !== 1
        : record.characterName !== undefined
    )
      throw new Error("Invalid history character metadata");
    if (
      JSON.stringify([...record.legacyFieldOrder].sort()) !==
      JSON.stringify(
        [
          "date",
          "scope",
          "title",
          "summary",
          "changes",
          "rationale",
          "games",
        ].sort()
      )
    )
      throw new Error("Invalid history compatibility field order");
    const event = record.content;
    if (!event.eventId.trim() || ids.has(event.eventId))
      throw new Error("Duplicate or empty history event ID");
    if (!Number.isFinite(Date.parse(event.date)))
      throw new Error("Invalid history date");
    if (
      !event.changes.length ||
      new Set(event.changes.map(block => block.blockId)).size !==
        event.changes.length ||
      event.changes.some(block => !block.blockId.trim())
    )
      throw new Error("Invalid history block ID");
    if (historyRefs(event).some(ref => !sourceIds.has(ref.id)))
      throw new Error("Unknown history source reference");
    ids.add(event.eventId);
  }
}
export function historySections(): CoverageSection[] {
  validateHistoryRecords(historyRecords, sources);
  validateHistoryBatches(historyBatches, sources);
  return [...historyRecords, ...historyBatches]
    .map(record => ({
      id: record.content.eventId,
      audience: "public" as const,
      visibility: "active" as const,
      section: {
        status: "registered" as const,
        evidence: "preserved history event/template authority",
        data: historyRefs(record.content),
      },
    }))
    .concat([
      {
        id: historyProfileTemplate.templateId,
        audience: "public",
        visibility: "active",
        section: {
          status: "registered",
          evidence: "preserved character baseline template",
          data: profileHistoryRefs(historyProfileTemplate),
        },
      },
    ]);
}
