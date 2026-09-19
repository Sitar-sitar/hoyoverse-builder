import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { createTimedLoader } from "./gameProviders";
import { EMPTY_STATIC_INDEX, getStaticIndex, resetStaticIndexForTests } from "./enkaFallback";

/**
 * 静的カタログの耐障害性（設計: docs/修正設計書_公開API保護と外部API耐障害性_2026-09-19.md §4 Phase 44）。
 * 原神・ZZZ は createTimedLoader、HSR は getStaticIndex がそれぞれ担う。
 * どちらも「外部障害中に毎リクエスト外部を叩かない」ことが要件なので、取得関数の呼び出し回数を数える。
 */

const DAY = 24 * 60 * 60 * 1000;
const START = new Date("2026-09-19T00:00:00.000Z").getTime();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(START);
  vi.spyOn(console, "warn").mockImplementation(() => {});
});

afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
});

describe("原神・ZZZ の静的カタログ（createTimedLoader）", () => {
  it("初回は取得し、TTL 内は取得関数を再実行しない", async () => {
    const load = vi.fn().mockResolvedValue("v1");
    const loader = createTimedLoader("test", load);

    await expect(loader()).resolves.toBe("v1");
    vi.setSystemTime(START + 23 * 60 * 60 * 1000);
    await expect(loader()).resolves.toBe("v1");
    expect(load).toHaveBeenCalledTimes(1);
  });

  it("TTL 切れ後の再取得に成功したらキャッシュと直近正常データを更新する", async () => {
    const load = vi.fn().mockResolvedValueOnce("v1").mockResolvedValueOnce("v2");
    const loader = createTimedLoader("test", load);

    await loader();
    vi.setSystemTime(START + DAY + 1);
    await expect(loader()).resolves.toBe("v2");
    expect(load).toHaveBeenCalledTimes(2);
  });

  it("TTL 切れ後の再取得に失敗したら直近正常データを返す", async () => {
    const load = vi.fn().mockResolvedValueOnce("v1").mockRejectedValueOnce(new Error("down"));
    const loader = createTimedLoader("test", load);

    await loader();
    vi.setSystemTime(START + DAY + 1);
    await expect(loader()).resolves.toBe("v1");
  });

  it("直近正常データがある場合、失敗後 60 秒は外部取得せず即座に返す", async () => {
    const load = vi.fn().mockResolvedValueOnce("v1").mockRejectedValue(new Error("down"));
    const loader = createTimedLoader("test", load);

    await loader();
    vi.setSystemTime(START + DAY + 1);
    await loader();
    expect(load).toHaveBeenCalledTimes(2);

    vi.setSystemTime(START + DAY + 30_000);
    await expect(loader()).resolves.toBe("v1");
    vi.setSystemTime(START + DAY + 59_000);
    await expect(loader()).resolves.toBe("v1");
    expect(load).toHaveBeenCalledTimes(2);
  });

  it("直近正常データが無い場合も、失敗後 60 秒は外部取得せず直前のエラーを返す", async () => {
    const failure = new Error("down");
    const load = vi.fn().mockRejectedValue(failure);
    const loader = createTimedLoader("test", load);

    await expect(loader()).rejects.toBe(failure);
    expect(load).toHaveBeenCalledTimes(1);

    vi.setSystemTime(START + 30_000);
    await expect(loader()).rejects.toBe(failure);
    vi.setSystemTime(START + 59_000);
    await expect(loader()).rejects.toBe(failure);
    expect(load).toHaveBeenCalledTimes(1);
  });

  it("60 秒経過後は再試行し、成功すれば抑止を解除する", async () => {
    const load = vi.fn().mockRejectedValueOnce(new Error("down")).mockResolvedValueOnce("v1");
    const loader = createTimedLoader("test", load);

    await expect(loader()).rejects.toThrow("down");
    vi.setSystemTime(START + 60_000);
    await expect(loader()).resolves.toBe("v1");
    expect(load).toHaveBeenCalledTimes(2);

    // 成功したので以後は TTL キャッシュが効く。
    vi.setSystemTime(START + 60_000 + 1_000);
    await expect(loader()).resolves.toBe("v1");
    expect(load).toHaveBeenCalledTimes(2);
  });

  it("直近正常データが 7 日を超えていたら使わずエラーにする", async () => {
    const load = vi.fn().mockResolvedValueOnce("v1").mockRejectedValue(new Error("down"));
    const loader = createTimedLoader("test", load);

    await loader();
    vi.setSystemTime(START + 7 * DAY + 1);
    await expect(loader()).rejects.toThrow("down");
  });

  it("同時アクセスでも取得関数は 1 回しか呼ばれない", async () => {
    let release: (value: string) => void = () => {};
    const load = vi.fn().mockImplementation(() => new Promise<string>(resolve => { release = resolve; }));
    const loader = createTimedLoader("test", load);

    const first = loader();
    const second = loader();
    release("v1");

    await expect(first).resolves.toBe("v1");
    await expect(second).resolves.toBe("v1");
    expect(load).toHaveBeenCalledTimes(1);
  });
});

describe("HSR の静的データ（getStaticIndex）", () => {
  const okResponse = () => new Response(JSON.stringify({ "1001": { name: "テスト" } }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });

  beforeEach(() => {
    resetStaticIndexForTests();
  });

  it("取得に失敗したあと 60 秒は外部へ取りに行かず、直近正常バンドルを返す", async () => {
    const fetchMock = vi.fn().mockImplementation(() => Promise.resolve(okResponse()));
    vi.stubGlobal("fetch", fetchMock);

    const fresh = await getStaticIndex();
    expect(Object.keys(fresh.characters)).toContain("1001");
    const callsAfterSuccess = fetchMock.mock.calls.length;
    expect(callsAfterSuccess).toBeGreaterThan(0);

    // TTL を切らし、以後は失敗させる。
    fetchMock.mockImplementation(() => Promise.reject(new Error("down")));
    vi.setSystemTime(START + DAY + 1);
    await expect(getStaticIndex()).resolves.toEqual(fresh);
    const callsAfterFailure = fetchMock.mock.calls.length;
    expect(callsAfterFailure).toBeGreaterThan(callsAfterSuccess);

    vi.setSystemTime(START + DAY + 59_000);
    await expect(getStaticIndex()).resolves.toEqual(fresh);
    expect(fetchMock.mock.calls.length).toBe(callsAfterFailure);

    vi.unstubAllGlobals();
  });

  it("直近正常バンドルが無い場合も 60 秒は再取得せず、既存仕様どおり空の索引を返す", async () => {
    const fetchMock = vi.fn().mockImplementation(() => Promise.reject(new Error("down")));
    vi.stubGlobal("fetch", fetchMock);

    await expect(getStaticIndex()).resolves.toEqual(EMPTY_STATIC_INDEX);
    const calls = fetchMock.mock.calls.length;
    expect(calls).toBeGreaterThan(0);

    vi.setSystemTime(START + 59_000);
    await expect(getStaticIndex()).resolves.toEqual(EMPTY_STATIC_INDEX);
    expect(fetchMock.mock.calls.length).toBe(calls);

    vi.setSystemTime(START + 60_000);
    await expect(getStaticIndex()).resolves.toEqual(EMPTY_STATIC_INDEX);
    expect(fetchMock.mock.calls.length).toBeGreaterThan(calls);

    vi.unstubAllGlobals();
  });
});
