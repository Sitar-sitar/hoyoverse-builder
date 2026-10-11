import { linkHistoryRecords } from "./linkHistoryRecords";
import { sources } from "./ja/guides/parties_linkRecords";
import type { LinkHistoryContent } from "../shared/content/linkHistory";
import type { TextRef, CoverageSection } from "../shared/content/types";
import {
  contentFields,
  requiredContentRef as ref,
} from "../shared/content/walk";
export { linkHistoryRecords };
const ignore = (_value: unknown): TextRef[] => [];
export function linkHistoryRefs(value: LinkHistoryContent): TextRef[] {
  return contentFields(value, {
    batch: ignore,
    date: ignore,
    updatedAt: ignore,
    sourceNote: ref,
    title: ref,
    summary: ref,
    summaryBindings: value =>
      contentFields(value, { v0: ignore, v1: ignore, v2: ignore }),
    changes: values =>
      values.flatMap(value =>
        contentFields(value, { blockId: ignore, text: ref })
      ),
    rationale: ref,
  });
}
export function validateLinkHistory(records: LinkHistoryContent[]) {
  const ids = new Set<number>(),
    sourceMap = new Map(sources.map(source => [source.id, source]));
  for (const record of records) {
    if (
      !Number.isInteger(record.batch) ||
      record.batch <= 0 ||
      ids.has(record.batch) ||
      [record.date, record.updatedAt].some(
        date => !Number.isFinite(Date.parse(date))
      )
    )
      throw new Error("Invalid link history batch/date");
    const bindings = record.summaryBindings;
    if (
      bindings.v0 !== "characterName" ||
      bindings.v1 !== "addedCount" ||
      (bindings.v2 !== undefined && bindings.v2 !== "removedCount")
    )
      throw new Error("Invalid link history bindings");
    const expected = {
      v0: "string",
      v1: "number",
      ...(bindings.v2 ? { v2: "number" } : {}),
    };
    const actual = sourceMap.get(record.summary.id)?.placeholders;
    if (
      !actual ||
      Object.keys(actual).length !== Object.keys(expected).length ||
      Object.entries(expected).some(([key, type]) => actual[key] !== type)
    )
      throw new Error("Link history placeholder contract differs");
    if (
      !record.changes.length ||
      new Set(record.changes.map(block => block.blockId)).size !==
        record.changes.length ||
      record.changes.some(block => !block.blockId.trim())
    )
      throw new Error("Invalid link history blocks");
    if (linkHistoryRefs(record).some(ref => !sourceMap.has(ref.id)))
      throw new Error("Unknown link history reference");
    ids.add(record.batch);
  }
}
export function linkHistorySections(): CoverageSection[] {
  validateLinkHistory(linkHistoryRecords);
  return linkHistoryRecords.map(record => ({
    id: `history.partyLink.batch.${record.batch}`,
    audience: "public",
    visibility: "active",
    section: {
      status: "registered",
      evidence: "append-only party link history template authority",
      data: linkHistoryRefs(record),
    },
  }));
}
