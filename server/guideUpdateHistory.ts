import { batchHistoryTemplates, profileHistoryEvent, staticHistoryEvents } from "./content/history";
import { batchIdFor } from "./characterBatches";
import { CHARACTER_GUIDE_CATALOG, type CatalogGameId } from "./characterGuideCatalog";
import { CHARACTER_GUIDE_METADATA } from "./characterGuideMetadata";
import { characterUpdateLedger } from "./characterUpdateLedger";
import { historyUpdatedAt, linkEventFor, linkRecordsFor, mergeLinkEvents } from "./parties/linkRecords";

export type GuideUpdateEvent = {
  date: string;
  scope: "site" | "character";
  title: string;
  summary: string;
  changes: string[];
  rationale: string;
  games: CatalogGameId[];
};

const CURRENT_BASELINE = "2026-08-18";

const staticEvents = staticHistoryEvents();
const SITE_EVENTS: GuideUpdateEvent[] = staticEvents.siteEvents;

const CHARACTER_CHANGE_EVENTS: Partial<Record<CatalogGameId, Record<string, GuideUpdateEvent[]>>> = staticEvents.characterEvents;

type BatchEventTemplate = { date: string; title: string; summary: (name: string) => string; changes: string[]; rationale: string };

/** バッチ別の個別更新イベント。第1〜17バッチ（第15バッチを含む）をここに持つ。 */
const BATCH_EVENT_TEMPLATES: Record<number, BatchEventTemplate> = batchHistoryTemplates();

function batchEventFor(game: CatalogGameId, name: string): GuideUpdateEvent | undefined {
  const id = batchIdFor(game, name);
  const template = id === null ? undefined : BATCH_EVENT_TEMPLATES[id];
  if (!template) return undefined;
  return { date: template.date, scope: "character", title: template.title, summary: template.summary(name), changes: template.changes, rationale: template.rationale, games: [game] };
}

function buildGuideUpdateHistory() {
  const games: CatalogGameId[] = ["hsr", "genshin", "zzz"];
  const characters = games.flatMap((game) => CHARACTER_GUIDE_CATALOG[game].map((name) => {
    const metadata = CHARACTER_GUIDE_METADATA[game][name];
    const batchEvent = batchEventFor(game, name);
    // PT 連動の履歴は追記専用の変更記録から作る（現在の参照からは作らない）。設計 §4.7
    const links = linkRecordsFor(game, name);
    const baseEvents: GuideUpdateEvent[] = [
      ...(CHARACTER_CHANGE_EVENTS[game]?.[name] ?? []),
      ...(batchEvent ? [batchEvent] : []),
      profileHistoryEvent(game, metadata.updatedAt, metadata.profileId),
    ];
    return {
      game,
      name,
      profileId: metadata.profileId,
      dataAsOf: metadata.dataAsOf,
      updatedAt: historyUpdatedAt(metadata.updatedAt, links),
      sourceLabel: links.length > 0 ? `${metadata.sourceLabel} / ${links.map(({ def }) => def.sourceNote).join(" / ")}` : metadata.sourceLabel,
      events: mergeLinkEvents(baseEvents, links.map((entry) => linkEventFor(game, name, entry))),
    };
  }));
  return { currentBaseline: CURRENT_BASELINE, siteEvents: SITE_EVENTS, characters, updateLedger: characterUpdateLedger() };
}

let cachedHistory: ReturnType<typeof buildGuideUpdateHistory> | undefined;

/**
 * 更新履歴は静的計算のため、プロセス内で1度だけ組み立てて共有する。
 * 呼び出し側は結果を読み取るだけで書き換えない（第15バッチの API 境界上書きは 2026-09-10 に撤去済み）。
 */
export function guideUpdateHistory() {
  return (cachedHistory ??= buildGuideUpdateHistory());
}
