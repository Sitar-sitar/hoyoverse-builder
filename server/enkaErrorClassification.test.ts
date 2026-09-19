import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { TRPCError } from "@trpc/server";
import { fetchEnkaPayload, resetStaticIndexForTests } from "./enkaFallback";

/**
 * Enka フォールバックのエラー分類（設計: docs/修正設計書_公開API保護と外部API耐障害性_2026-09-19.md §4 Phase 45-1）。
 * 失敗応答で静的カタログを取りに行かないことが本 Phase の主目的なので、
 * 静的データ用の fetch が呼ばれていないことを URL で判別して確認する。
 */

const STATIC_HOST = "raw.githubusercontent.com";
const ENKA_HOST = "enka.network";

type FetchCall = { url: string };

function stubFetch(enkaResponse: () => Promise<Response>) {
  const calls: FetchCall[] = [];
  const fetchMock = vi.fn().mockImplementation(async (input: RequestInfo | URL) => {
    const url = String(input);
    calls.push({ url });
    if (url.includes(ENKA_HOST)) return enkaResponse();
    // 静的データ側。ここへ到達したかどうかが検査対象。
    return new Response(JSON.stringify({ "1001": { name: "テスト" } }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  });
  vi.stubGlobal("fetch", fetchMock);
  return {
    staticCalls: () => calls.filter(call => call.url.includes(STATIC_HOST)).length,
  };
}

async function classify(promise: Promise<unknown>) {
  const error = await promise.then(() => null, (cause: unknown) => cause);
  expect(error).toBeInstanceOf(TRPCError);
  const trpcError = error as TRPCError;
  return { code: trpcError.code, message: trpcError.message };
}

beforeEach(() => {
  resetStaticIndexForTests();
  vi.spyOn(console, "warn").mockImplementation(() => {});
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

const jsonResponse = (status: number, body: unknown) => new Response(JSON.stringify(body), {
  status,
  headers: { "content-type": "application/json" },
});

const htmlResponse = (status: number) => new Response("<!DOCTYPE html><title>error</title>", {
  status,
  headers: { "content-type": "text/html" },
});

describe("失敗応答の分類（静的カタログを取りに行かない）", () => {
  it("404（JSON）は NOT_FOUND", async () => {
    const probe = stubFetch(async () => jsonResponse(404, { detail: "not found" }));
    expect(await classify(fetchEnkaPayload("800000000"))).toEqual({
      code: "NOT_FOUND",
      message: "公開中のキャラクターが見つかりません。ゲーム内の巡星ビザ設定をご確認ください。",
    });
    expect(probe.staticCalls()).toBe(0);
  });

  it("404（HTML）も NOT_FOUND として扱う（従来は BAD_GATEWAY だった）", async () => {
    const probe = stubFetch(async () => htmlResponse(404));
    expect((await classify(fetchEnkaPayload("800000000"))).code).toBe("NOT_FOUND");
    expect(probe.staticCalls()).toBe(0);
  });

  it("429 は TOO_MANY_REQUESTS", async () => {
    const probe = stubFetch(async () => jsonResponse(429, {}));
    expect(await classify(fetchEnkaPayload("800000000"))).toEqual({
      code: "TOO_MANY_REQUESTS",
      message: "照会が集中しています。数分後に再度お試しください。",
    });
    expect(probe.staticCalls()).toBe(0);
  });

  it("500 は BAD_GATEWAY で、外部障害だと分かる文言にする", async () => {
    const probe = stubFetch(async () => jsonResponse(500, {}));
    expect(await classify(fetchEnkaPayload("800000000"))).toEqual({
      code: "BAD_GATEWAY",
      message: "外部データサービスが一時的に応答していません。数分後に再度お試しください。",
    });
    expect(probe.staticCalls()).toBe(0);
  });

  it("HTML の 502 も BAD_GATEWAY", async () => {
    const probe = stubFetch(async () => htmlResponse(502));
    expect((await classify(fetchEnkaPayload("800000000"))).code).toBe("BAD_GATEWAY");
    expect(probe.staticCalls()).toBe(0);
  });

  it("その他の非 2xx（403 など）は BAD_GATEWAY", async () => {
    const probe = stubFetch(async () => jsonResponse(403, {}));
    expect(await classify(fetchEnkaPayload("800000000"))).toEqual({
      code: "BAD_GATEWAY",
      message: "外部データサービスから正常な応答を取得できませんでした。数分後に再度お試しください。",
    });
    expect(probe.staticCalls()).toBe(0);
  });

  it("通信断・タイムアウトは BAD_GATEWAY（従来どおりの文言）", async () => {
    const probe = stubFetch(async () => { throw new Error("aborted"); });
    expect(await classify(fetchEnkaPayload("800000000"))).toEqual({
      code: "BAD_GATEWAY",
      message: "公開データサービスへ接続できませんでした。数分後に再度お試しください。",
    });
    expect(probe.staticCalls()).toBe(0);
  });

  it("HTTP 200 でも本文が JSON でなければ BAD_GATEWAY で、静的カタログを取りに行かない", async () => {
    const probe = stubFetch(async () => new Response("<!DOCTYPE html>", { status: 200, headers: { "content-type": "text/html" } }));
    expect(await classify(fetchEnkaPayload("800000000"))).toEqual({
      code: "BAD_GATEWAY",
      message: "外部データサービスが一時的に応答していません。数分後に再度お試しください。",
    });
    expect(probe.staticCalls()).toBe(0);
  });
});

describe("成功応答", () => {
  it("HTTP 200 で公開キャラクターが 0 件なら NOT_FOUND（空の結果を返さない）", async () => {
    stubFetch(async () => jsonResponse(200, { detailInfo: { avatarDetailList: [] } }));
    expect((await classify(fetchEnkaPayload("800000000"))).code).toBe("NOT_FOUND");
  });

  it("Content-Type が欠けていても本文が JSON なら従来どおり処理する", async () => {
    stubFetch(async () => new Response(JSON.stringify({ detailInfo: { avatarDetailList: [] } }), { status: 200 }));
    // Content-Type を必須にしていないので、JSON parse まで進んで 0 件判定へ到達する。
    expect((await classify(fetchEnkaPayload("800000000"))).code).toBe("NOT_FOUND");
  });
});
