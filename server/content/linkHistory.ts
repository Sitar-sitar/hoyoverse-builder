import {
  linkHistoryRecords,
  validateLinkHistory,
} from "../../content/linkHistory";
import { sources } from "../../content/ja/guides/parties_linkRecords";
import { records as en } from "../../content/translations/en/parties_linkRecords";
import { records as zh } from "../../content/translations/zh-CN/parties_linkRecords";
import type { PartyLinkBatch } from "../parties/types";
import { createLegacyTexts } from "./legacyTexts";
const texts = createLegacyTexts(sources, en, zh);
export function projectLinkHistory(): Record<number, PartyLinkBatch> {
  validateLinkHistory(linkHistoryRecords);
  return Object.fromEntries(
    linkHistoryRecords.map(record => [
      record.batch,
      {
        batch: record.batch,
        date: record.date,
        updatedAt: record.updatedAt,
        sourceNote: texts.ja(record.sourceNote.id),
        title: texts.ja(record.title.id),
        summary: (name, input) =>
          texts.ja(record.summary.id, {
            v0: name,
            v1: input.added.length,
            ...(record.summaryBindings.v2 ? { v2: input.removed.length } : {}),
          }),
        changes: record.changes.map(block => texts.ja(block.text.id)),
        rationale: texts.ja(record.rationale.id),
      } satisfies PartyLinkBatch,
    ])
  );
}
