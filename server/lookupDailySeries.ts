/**
 * 照会ログを JST の暦日ごとに並べる純粋関数群。
 * DB 側では UNIX_TIMESTAMP を基準に「JST のエポック日番号」で集計するため、
 * セッションのタイムゾーン設定に左右されない。
 */

export type DailyLookupGame = "hsr" | "genshin" | "zzz";

export type DailyLookupRow = {
  dayIndex: number | string;
  game: DailyLookupGame;
  totalLookups: number | string;
  cacheHits: number | string;
};

export type DailyLookupPoint = {
  date: string;
  totalLookups: number;
  cacheHits: number;
  byGame: Record<DailyLookupGame, number>;
};

const JST_OFFSET_MS = 9 * 60 * 60 * 1000;
const DAY_MS = 24 * 60 * 60 * 1000;

/** 日別推移の既定表示日数（開始日未指定時）。 */
export const DEFAULT_DAILY_WINDOW_DAYS = 30;
/** 1 回の応答に含める最大日数。長期間指定でも応答サイズを抑える。 */
export const MAX_DAILY_WINDOW_DAYS = 366;

export const jstDayIndex = (date: Date) => Math.floor((date.getTime() + JST_OFFSET_MS) / DAY_MS);

export const jstDateFromDayIndex = (dayIndex: number) => new Date(dayIndex * DAY_MS).toISOString().slice(0, 10);

/** 日別集計の対象範囲（JST エポック日番号, 両端含む）を決める。 */
export function resolveDailyWindow(filters: { startAt?: Date; endAt?: Date }, now: Date = new Date()) {
  const endDay = jstDayIndex(filters.endAt ?? now);
  const requestedStart = filters.startAt ? jstDayIndex(filters.startAt) : endDay - (DEFAULT_DAILY_WINDOW_DAYS - 1);
  const startDay = Math.max(requestedStart, endDay - (MAX_DAILY_WINDOW_DAYS - 1));
  return { startDay, endDay };
}

/** 集計行を日付順（新しい順）に並べ、照会のない日も 0 件で埋める。 */
export function buildDailyLookupSeries(rows: DailyLookupRow[], window: { startDay: number; endDay: number }): DailyLookupPoint[] {
  const byDay = new Map<number, DailyLookupPoint>();
  for (let day = window.endDay; day >= window.startDay; day -= 1) {
    byDay.set(day, { date: jstDateFromDayIndex(day), totalLookups: 0, cacheHits: 0, byGame: { hsr: 0, genshin: 0, zzz: 0 } });
  }
  for (const row of rows) {
    const point = byDay.get(Number(row.dayIndex));
    if (!point) continue;
    const total = Number(row.totalLookups ?? 0);
    point.totalLookups += total;
    point.cacheHits += Number(row.cacheHits ?? 0);
    point.byGame[row.game] += total;
  }
  return Array.from(byDay.values());
}
