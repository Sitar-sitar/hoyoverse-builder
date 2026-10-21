import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { TRPCError } from "@trpc/server";
import { EMPTY_STATIC_INDEX, getStaticIndex, resetStaticIndexForTests } from "./enkaFallback";
import { lookupUidBuild } from "./buildAdvisor";
import { lookupGameBuild } from "./gameProviders";
import { errorMessage } from "./content/errors";
import { HSR_STATIC_FILE_LIMIT_BYTES, UID_BODY_LIMIT_BYTES } from "./_core/boundedBody";

/**
 * HSR静的データのsingle-flightと上流本文上限の経路（設計: docs/修正設計書_セキュリティ残課題P2P3_2026-10-20.md §5.2・§8 B）。
 */

const DAY = 24 * 60 * 60 * 1000;
const json = (body: unknown, headers: Record<string, string> = {}) => new Response(JSON.stringify(body), { headers: { "content-type": "application/json", ...headers } });
/** 本文を作らずに上限超過を宣言する応答（Content-Lengthによる早期拒否の経路）。 */
const oversized = (bytes: number) => new Response("{}", { headers: { "content-type": "application/json", "content-length": String(bytes) } });

function deferred<T>() {
  let resolve!: (value: T) => void;
  const promise = new Promise<T>(done => { resolve = done; });
  return { promise, resolve };
}

beforeEach(() => {
  vi.spyOn(console, "warn").mockImplementation(() => {});
  vi.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe("getStaticIndex のsingle-flight", () => {
  beforeEach(() => resetStaticIndexForTests());

  it("cold時の同時呼出しは8ファイルを1回だけ取得し、全員が同じ結果を受け取る", async () => {
    const gate = deferred<void>();
    const fetchMock = vi.fn(async () => { await gate.promise; return json({ "1001": { name: "テスト" } }); });
    vi.stubGlobal("fetch", fetchMock);
    const callers = Array.from({ length: 5 }, () => getStaticIndex());
    gate.resolve();
    const results = await Promise.all(callers);
    expect(fetchMock).toHaveBeenCalledTimes(8);
    expect(new Set(results).size).toBe(1);
    expect(Object.keys(results[0]!.characters)).toContain("1001");
  });

  it("期限切れ時の同時更新も1回にまとめ、成功後はcacheを使う", async () => {
    vi.useFakeTimers({ toFake: ["Date"] });
    vi.setSystemTime(new Date("2026-10-20T00:00:00Z"));
    const fetchMock = vi.fn(async () => json({ "1001": { name: "旧" } }));
    vi.stubGlobal("fetch", fetchMock);
    await getStaticIndex();
    vi.setSystemTime(Date.now() + DAY + 1);
    fetchMock.mockImplementation(async () => json({ "1002": { name: "新" } }));
    const results = await Promise.all([getStaticIndex(), getStaticIndex(), getStaticIndex()]);
    expect(fetchMock).toHaveBeenCalledTimes(16);
    expect(results.every(result => "1002" in result.characters)).toBe(true);
    await getStaticIndex();
    expect(fetchMock).toHaveBeenCalledTimes(16);
  });

  it("失敗時は全待機者がLKG/EMPTYを受け取り、抑止中は取得せず、60秒後に新しく取得する", async () => {
    vi.useFakeTimers({ toFake: ["Date"] });
    vi.setSystemTime(new Date("2026-10-20T00:00:00Z"));
    const fetchMock = vi.fn(async () => { throw new Error("down"); });
    vi.stubGlobal("fetch", fetchMock);
    const results = await Promise.all([getStaticIndex(), getStaticIndex()]);
    expect(results).toEqual([EMPTY_STATIC_INDEX, EMPTY_STATIC_INDEX]);
    expect(fetchMock).toHaveBeenCalledTimes(8);

    vi.setSystemTime(Date.now() + 59_000);
    await getStaticIndex();
    expect(fetchMock).toHaveBeenCalledTimes(8);

    vi.setSystemTime(Date.now() + 2_000);
    fetchMock.mockImplementation(async () => json({ "1001": { name: "回復" } }));
    expect(Object.keys((await getStaticIndex()).characters)).toContain("1001");
    expect(fetchMock).toHaveBeenCalledTimes(16);
  });

  it("LKGは7日以内なら使い、7日を超えたらEMPTYにする", async () => {
    vi.useFakeTimers({ toFake: ["Date"] });
    const start = new Date("2026-10-20T00:00:00Z").getTime();
    vi.setSystemTime(start);
    const fetchMock = vi.fn(async () => json({ "1001": { name: "テスト" } }));
    vi.stubGlobal("fetch", fetchMock);
    const fresh = await getStaticIndex();
    fetchMock.mockImplementation(async () => { throw new Error("down"); });
    vi.setSystemTime(start + 7 * DAY);
    await expect(getStaticIndex()).resolves.toBe(fresh);
    vi.setSystemTime(start + 7 * DAY + 61_000);
    await expect(getStaticIndex()).resolves.toEqual(EMPTY_STATIC_INDEX);
  });
});

describe("上限超過時の経路", () => {
  beforeEach(() => resetStaticIndexForTests());

  it("HSR静的の1ファイル超過は静的取得の失敗としてEMPTYになる", async () => {
    vi.stubGlobal("fetch", vi.fn(async (input: string | URL) => String(input).endsWith("character_skill_trees.json") ? oversized(HSR_STATIC_FILE_LIMIT_BYTES + 1) : json({ "1001": { name: "テスト" } })));
    await expect(getStaticIndex()).resolves.toEqual(EMPTY_STATIC_INDEX);
  });

  it("HSR静的のbundle合計超過も失敗としてEMPTYになる（各ファイルは上限内）", async () => {
    const chunk = "x".repeat(3 * 1024 * 1024);
    vi.stubGlobal("fetch", vi.fn(async () => new Response(`{"1001":{"name":"${chunk}"}}`, { headers: { "content-type": "application/json" } })));
    await expect(getStaticIndex()).resolves.toEqual(EMPTY_STATIC_INDEX);
  });

  it("MiHoMo UIDの超過は主取得の失敗としてEnkaへfallbackする", async () => {
    const urls: string[] = [];
    vi.stubGlobal("fetch", vi.fn(async (input: string | URL) => {
      const url = String(input); urls.push(url);
      if (url.includes("api.mihomo.me")) return oversized(UID_BODY_LIMIT_BYTES + 1);
      if (url.includes("enka.network/api/hsr/uid")) return json({ detailInfo: { avatarDetailList: [] } });
      return json({});
    }));
    const error = await lookupUidBuild("900000101").catch(e => e);
    expect(urls.some(url => url.includes("enka.network/api/hsr/uid"))).toBe(true);
    expect(error).toBeInstanceOf(TRPCError);
  });

  it("Enka UID（HSR）の超過は上流障害として返し、再fallbackしない", async () => {
    vi.stubGlobal("fetch", vi.fn(async (input: string | URL) => {
      const url = String(input);
      if (url.includes("api.mihomo.me")) return new Response("<html>", { status: 502, headers: { "content-type": "text/html" } });
      if (url.includes("enka.network/api/hsr/uid")) return oversized(UID_BODY_LIMIT_BYTES + 1);
      return json({});
    }));
    const error = await lookupUidBuild("900000102").catch(e => e);
    expect(error).toMatchObject({ code: "BAD_GATEWAY", message: errorMessage("public.serviceUnavailable") });
  });

  it("原神UIDの超過は既存のpublic.serviceUnavailableで返す", async () => {
    vi.stubGlobal("fetch", vi.fn(async (input: string | URL) => String(input).includes("/api/uid/") ? oversized(UID_BODY_LIMIT_BYTES + 1) : json({})));
    const error = await lookupGameBuild("genshin", "900000103").catch(e => e);
    expect(error).toMatchObject({ code: "BAD_GATEWAY", message: errorMessage("public.serviceUnavailable") });
  });

  it("本文の読取り中に期限が来たら打ち切る（HSR静的5秒）", async () => {
    vi.useFakeTimers({ toFake: ["setTimeout", "clearTimeout"] });
    vi.stubGlobal("fetch", vi.fn(async (_input: string | URL, init?: RequestInit) => new Response(new ReadableStream({
      start(controller) { init?.signal?.addEventListener("abort", () => controller.error(new DOMException("aborted", "AbortError"))); },
    }), { headers: { "content-type": "application/json" } })));
    const pending = getStaticIndex();
    await vi.advanceTimersByTimeAsync(5_000);
    await expect(pending).resolves.toEqual(EMPTY_STATIC_INDEX);
  });
});
