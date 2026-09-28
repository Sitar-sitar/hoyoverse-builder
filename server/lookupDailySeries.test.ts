import { describe, expect, it } from "vitest";
import { buildDailyLookupSeries, jstDayIndex, jstDateFromDayIndex, MAX_DAILY_WINDOW_DAYS, resolveDailyWindow } from "./lookupDailySeries";

describe("lookup daily series", () => {
  it("buckets timestamps by JST calendar day", () => {
    // 2026-08-24T15:00Z は JST 2026-08-25 00:00。
    expect(jstDateFromDayIndex(jstDayIndex(new Date("2026-08-24T14:59:59.999Z")))).toBe("2026-08-24");
    expect(jstDateFromDayIndex(jstDayIndex(new Date("2026-08-24T15:00:00.000Z")))).toBe("2026-08-25");
  });

  it("defaults to the last 30 JST days and caps long ranges", () => {
    const now = new Date("2026-09-28T03:00:00.000Z");
    const window = resolveDailyWindow({}, now);
    expect(window.endDay - window.startDay + 1).toBe(30);
    expect(jstDateFromDayIndex(window.endDay)).toBe("2026-09-28");

    const filtered = resolveDailyWindow({ startAt: new Date("2026-07-31T15:00:00.000Z"), endAt: new Date("2026-08-25T14:59:59.999Z") }, now);
    expect(jstDateFromDayIndex(filtered.startDay)).toBe("2026-08-01");
    expect(jstDateFromDayIndex(filtered.endDay)).toBe("2026-08-25");

    const long = resolveDailyWindow({ startAt: new Date("2020-01-01T00:00:00.000Z") }, now);
    expect(long.endDay - long.startDay + 1).toBe(MAX_DAILY_WINDOW_DAYS);
  });

  it("fills missing days with zero and merges per-game rows, newest first", () => {
    const start = jstDayIndex(new Date("2026-08-01T00:00:00.000+09:00"));
    const series = buildDailyLookupSeries([
      { dayIndex: String(start), game: "hsr", totalLookups: "2", cacheHits: "1" },
      { dayIndex: start, game: "zzz", totalLookups: 3, cacheHits: 3 },
      { dayIndex: start + 2, game: "genshin", totalLookups: 1, cacheHits: 0 },
      { dayIndex: start + 10, game: "genshin", totalLookups: 9, cacheHits: 0 },
    ], { startDay: start, endDay: start + 2 });

    expect(series).toEqual([
      { date: "2026-08-03", totalLookups: 1, cacheHits: 0, byGame: { hsr: 0, genshin: 1, zzz: 0 } },
      { date: "2026-08-02", totalLookups: 0, cacheHits: 0, byGame: { hsr: 0, genshin: 0, zzz: 0 } },
      { date: "2026-08-01", totalLookups: 5, cacheHits: 4, byGame: { hsr: 2, genshin: 0, zzz: 3 } },
    ]);
  });
});
