import {
  historyRecords,
  validateHistoryRecords,
  historyBatches,
  validateHistoryBatches,
  historyProfileTemplate,
  profileHistoryRefs,
} from "../../content/history";
import { sources } from "../../content/ja/guides/guideUpdateHistory";
import { records as en } from "../../content/translations/en/guideUpdateHistory";
import { records as zh } from "../../content/translations/zh-CN/guideUpdateHistory";
import { createLegacyTexts } from "./legacyTexts";
import type { GuideUpdateEvent } from "../guideUpdateHistory";
import type { Game } from "../../shared/content/domains";
const texts = createLegacyTexts(sources, en, zh);

/** Fixed authoring IDs stay internal; old event fields and ordering are unchanged. */
export function staticHistoryEvents() {
  validateHistoryRecords(historyRecords, sources);
  const siteEvents: GuideUpdateEvent[] = [];
  const characterEvents: Partial<
    Record<Game, Record<string, GuideUpdateEvent[]>>
  > = {};
  for (const record of historyRecords) {
    const event = record.content;
    const fields: GuideUpdateEvent = {
      date: event.date,
      scope: record.scope,
      games: [...record.games],
      title: texts.ja(event.title.id),
      summary: texts.ja(event.summary.id),
      changes: event.changes.map(block => texts.ja(block.text.id)),
      rationale: texts.ja(event.rationale.id),
    };
    const projected = Object.fromEntries(
      record.legacyFieldOrder.map(key => [key, fields[key]])
    ) as GuideUpdateEvent;
    if (record.scope === "site") siteEvents.push(projected);
    else {
      const byName = (characterEvents[record.games[0]!] ??= {});
      (byName[record.characterName!] ??= []).push(projected);
    }
  }
  return { siteEvents, characterEvents };
}

export function batchHistoryTemplates() {
  validateHistoryBatches(historyBatches, sources);
  return Object.fromEntries(
    historyBatches.map(record => {
      const event = record.content;
      return [
        record.batch,
        {
          date: event.date,
          title: texts.ja(event.title.id),
          summary: (name: string) => texts.ja(event.summary.id, { v0: name }),
          changes: event.changes.map(block => texts.ja(block.text.id)),
          rationale: texts.ja(event.rationale.id),
        },
      ];
    })
  );
}
export function profileHistoryEvent(
  game: Game,
  date: string,
  profileId: string
): GuideUpdateEvent {
  profileHistoryRefs(historyProfileTemplate);
  const value = historyProfileTemplate;
  return {
    date,
    scope: "character",
    title: texts.ja(value.title.id),
    summary: texts.ja(value.summary.id, { v0: profileId }),
    changes: value.changes.map(block => texts.ja(block.text.id)),
    rationale: texts.ja(value.rationale.id),
    games: [game],
  };
}
