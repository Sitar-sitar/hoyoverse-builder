import { describe, expect, it, vi } from "vitest";
import { TRPCError } from "@trpc/server";

/**
 * procedure 別・全体のレート制限が router へ配線されていることの検査
 * （設計: docs/修正設計書_公開API保護と外部API耐障害性_2026-09-19.md Phase 43(C)）。
 * 外部 API と DB は叩かず、middleware の判定だけを見る。
 * リミッタはモジュール単位のシングルトンなので、各ケースは別の IP を使って独立させる。
 */

const mocks = vi.hoisted(() => ({
  lookupGameBuild: vi.fn(),
  createTranslationFeedback: vi.fn(),
  recordLookupAnalyticsEvent: vi.fn(),
}));

vi.mock("./gameProviders", () => ({ lookupGameBuild: mocks.lookupGameBuild }));
vi.mock("./db", () => ({
  createTranslationFeedback: mocks.createTranslationFeedback,
  recordLookupAnalyticsEvent: mocks.recordLookupAnalyticsEvent,
  getLookupAnalyticsDashboard: vi.fn(),
  listTranslationFeedback: vi.fn(),
  updateTranslationFeedbackStatus: vi.fn(),
}));

import { appRouter } from "./routers";

mocks.lookupGameBuild.mockResolvedValue({ characters: [], cached: false, fetchedAt: "", cacheExpiresAt: "", dataSource: "MiHoMo" });
mocks.createTranslationFeedback.mockResolvedValue(undefined);
mocks.recordLookupAnalyticsEvent.mockResolvedValue(undefined);

type FakeResponse = { headers: Map<string, string> };

function contextFor(ip: string) {
  const headers = new Map<string, string>();
  const res: FakeResponse = { headers };
  return {
    ctx: {
      req: { headers: {}, socket: { remoteAddress: ip } },
      res: {
        getHeader: (name: string) => headers.get(name),
        setHeader: (name: string, value: string) => headers.set(name, value),
      },
      user: null,
    } as never,
    res,
  };
}

const uid = (n: number) => String(800_000_000 + n);

async function expectTooManyRequests(promise: Promise<unknown>) {
  const error = await promise.then(() => null, (cause: unknown) => cause);
  expect(error).toBeInstanceOf(TRPCError);
  expect((error as TRPCError).code).toBe("TOO_MANY_REQUESTS");
  return error as TRPCError;
}

describe("build.lookup のレート制限", () => {
  it("同一 UID は 1 分に 6 回まで。7 回目は TOO_MANY_REQUESTS で外部取得へ進まない", async () => {
    const { ctx, res } = contextFor("198.51.100.1");
    const caller = appRouter.createCaller(ctx);
    mocks.lookupGameBuild.mockClear();

    for (let i = 0; i < 6; i++) {
      await caller.build.lookup({ game: "hsr", uid: uid(1) });
    }
    expect(mocks.lookupGameBuild).toHaveBeenCalledTimes(6);

    const error = await expectTooManyRequests(caller.build.lookup({ game: "hsr", uid: uid(1) }));
    expect(error.message).toBe("照会が集中しています。数分後に再度お試しください。");
    expect(mocks.lookupGameBuild).toHaveBeenCalledTimes(6);
    expect(Number(res.headers.get("Retry-After"))).toBeGreaterThan(0);
  });

  it("UID が違えば独立して数える", async () => {
    const { ctx } = contextFor("198.51.100.2");
    const caller = appRouter.createCaller(ctx);

    for (let i = 0; i < 6; i++) await caller.build.lookup({ game: "hsr", uid: uid(2) });
    await expectTooManyRequests(caller.build.lookup({ game: "hsr", uid: uid(2) }));

    await expect(caller.build.lookup({ game: "hsr", uid: uid(3) })).resolves.toBeDefined();
  });

  it("同じ UID でもゲームが違えばキーを共有しない", async () => {
    const { ctx } = contextFor("198.51.100.3");
    const caller = appRouter.createCaller(ctx);

    for (let i = 0; i < 6; i++) await caller.build.lookup({ game: "hsr", uid: uid(4) });
    await expectTooManyRequests(caller.build.lookup({ game: "hsr", uid: uid(4) }));

    await expect(caller.build.lookup({ game: "genshin", uid: uid(4) })).resolves.toBeDefined();
  });

  it("UID を散らしても IP あたり 1 分 20 回で止まる", async () => {
    const { ctx } = contextFor("198.51.100.4");
    const caller = appRouter.createCaller(ctx);

    for (let i = 0; i < 20; i++) {
      await caller.build.lookup({ game: "hsr", uid: uid(100 + i) });
    }
    await expectTooManyRequests(caller.build.lookup({ game: "hsr", uid: uid(200) }));
  });

  it("IP の上限は IP ごとに独立している", async () => {
    const first = appRouter.createCaller(contextFor("198.51.100.5").ctx);
    const second = appRouter.createCaller(contextFor("198.51.100.6").ctx);

    for (let i = 0; i < 20; i++) await first.build.lookup({ game: "hsr", uid: uid(300 + i) });
    await expectTooManyRequests(first.build.lookup({ game: "hsr", uid: uid(400) }));

    await expect(second.build.lookup({ game: "hsr", uid: uid(400) })).resolves.toBeDefined();
  });

  it("UID の上限は IP をまたいで共有する（同一 UID への集中を止めるため）", async () => {
    const first = appRouter.createCaller(contextFor("198.51.100.7").ctx);
    const second = appRouter.createCaller(contextFor("198.51.100.8").ctx);

    for (let i = 0; i < 6; i++) await first.build.lookup({ game: "hsr", uid: uid(6) });
    await expectTooManyRequests(second.build.lookup({ game: "hsr", uid: uid(6) }));
  });
});

describe("feedback.submit のレート制限", () => {
  const payload = {
    feedbackType: "improvement",
    locale: "ja",
    pagePath: "/characters",
    suggestedText: "表記を揃えてほしい",
  } as const;

  it("IP あたり 10 分 5 回まで。6 回目は保存へ進まない", async () => {
    const { ctx } = contextFor("198.51.100.20");
    const caller = appRouter.createCaller(ctx);
    mocks.createTranslationFeedback.mockClear();

    for (let i = 0; i < 5; i++) await caller.feedback.submit(payload);
    expect(mocks.createTranslationFeedback).toHaveBeenCalledTimes(5);

    const error = await expectTooManyRequests(caller.feedback.submit(payload));
    expect(error.message).toBe("送信が集中しています。しばらく待ってから再度お試しください。");
    expect(mocks.createTranslationFeedback).toHaveBeenCalledTimes(5);
  });
});

describe("tRPC 全体のレート制限", () => {
  it("procedure をまたいで operation 単位に数え、1 分 120 回で止まる", async () => {
    const { ctx } = contextFor("198.51.100.30");
    const caller = appRouter.createCaller(ctx);

    for (let i = 0; i < 120; i++) await caller.build.guideHistory();
    await expectTooManyRequests(caller.build.guideHistory());
    // 別 procedure でも同じ IP のバケットを共有する。
    await expectTooManyRequests(caller.display.settings());
  });
});
