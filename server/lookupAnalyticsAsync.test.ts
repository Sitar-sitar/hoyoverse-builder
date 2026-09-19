import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

/**
 * Analytics を照会応答から切り離す（設計: docs/修正設計書_公開API保護と外部API耐障害性_2026-09-19.md §4 Phase 46-1）。
 * 記録は匿名のベストエフォートであり、成否も応答時間も照会へ影響させない。
 */

const mocks = vi.hoisted(() => ({
  lookupGameBuild: vi.fn(),
  recordLookupAnalyticsEvent: vi.fn(),
}));

vi.mock("./gameProviders", () => ({ lookupGameBuild: mocks.lookupGameBuild }));
vi.mock("./db", () => ({
  recordLookupAnalyticsEvent: mocks.recordLookupAnalyticsEvent,
  createTranslationFeedback: vi.fn(),
  getLookupAnalyticsDashboard: vi.fn(),
  listTranslationFeedback: vi.fn(),
  updateTranslationFeedbackStatus: vi.fn(),
}));

import { appRouter } from "./routers";

const lookupResult = { characters: [], cached: false, fetchedAt: "", cacheExpiresAt: "", dataSource: "MiHoMo" };

// レート制限はモジュール単位のシングルトンなので、ケースごとに別の IP を使う。
let nextIp = 1;
const caller = () => appRouter.createCaller({
  req: { headers: {}, socket: { remoteAddress: `203.0.113.${nextIp++}` } },
  res: { getHeader: () => undefined, setHeader: () => {} },
  user: null,
} as never);

beforeEach(() => {
  mocks.lookupGameBuild.mockResolvedValue(lookupResult);
  mocks.recordLookupAnalyticsEvent.mockReset();
  vi.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("build.lookup と Analytics の分離", () => {
  it("記録に成功する場合はゲームとキャッシュ有無だけを渡す（UID は渡さない）", async () => {
    mocks.recordLookupAnalyticsEvent.mockResolvedValue(undefined);

    await expect(caller().build.lookup({ game: "hsr", uid: "800000001" })).resolves.toEqual(lookupResult);
    expect(mocks.recordLookupAnalyticsEvent).toHaveBeenCalledWith("hsr", false);
    expect(mocks.recordLookupAnalyticsEvent.mock.calls[0]).not.toContain("800000001");
  });

  it("記録が失敗しても照会は成功したまま返る", async () => {
    mocks.recordLookupAnalyticsEvent.mockRejectedValue(new Error("db down"));

    await expect(caller().build.lookup({ game: "genshin", uid: "800000002" })).resolves.toEqual(lookupResult);
  });

  it("記録の reject を握りつぶし、unhandledRejection にしない", async () => {
    const unhandled = vi.fn();
    process.on("unhandledRejection", unhandled);
    mocks.recordLookupAnalyticsEvent.mockRejectedValue(new Error("db down"));

    await caller().build.lookup({ game: "zzz", uid: "80000003" });
    // マイクロタスクとイベントループを一巡させ、未処理の reject が報告されないことを確認する。
    await new Promise(resolve => setTimeout(resolve, 10));

    expect(unhandled).not.toHaveBeenCalled();
    process.off("unhandledRejection", unhandled);
  });

  it("記録が返ってこなくても照会応答を待たせない", async () => {
    // 解決も棄却もしない Promise。await していたらここで止まる。
    mocks.recordLookupAnalyticsEvent.mockReturnValue(new Promise(() => {}));

    await expect(caller().build.lookup({ game: "hsr", uid: "800000004" })).resolves.toEqual(lookupResult);
  }, 5_000);
});
