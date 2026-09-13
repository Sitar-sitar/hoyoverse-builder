// @vitest-environment jsdom
import { trpc } from "@/lib/trpc";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { httpLink } from "@trpc/client";
import React from "react";
import superjson from "superjson";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  DISPLAY_CACHE_STORAGE_KEY,
  DISPLAY_INITIAL_WAIT_MS,
  DISPLAY_PREVIEW_STORAGE_KEY,
  DISPLAY_REFETCH_INTERVAL_MS,
  DisplaySettingsProvider,
  useDisplaySettings,
} from "./DisplaySettingsContext";

type Deferred<T> = { promise: Promise<T>; resolve: (value: T) => void; reject: (error: unknown) => void };
function deferred<T>(): Deferred<T> {
  let resolve!: (value: T) => void;
  let reject!: (error: unknown) => void;
  const promise = new Promise<T>((res, rej) => { resolve = res; reject = rej; });
  return { promise, resolve, reject };
}

type Handler = () => Promise<unknown>;
let displayHandler: Handler;
let authHandler: Handler;

function trpcResponse(value: unknown) {
  const body = { result: { data: superjson.serialize(value) } };
  return new Response(JSON.stringify(body), { status: 200, headers: { "content-type": "application/json" } });
}

const fetchMock = vi.fn(async (input: RequestInfo | URL) => {
  const url = String(input);
  const handler = url.includes("display.settings") ? displayHandler : url.includes("auth.me") ? authHandler : null;
  if (!handler) throw new Error(`unexpected request ${url}`);
  return trpcResponse(await handler());
});

function Probe() {
  const settings = useDisplaySettings();
  return (
    <div>
      <p data-testid="state" data-ready={String(settings.ready)} data-variant={settings.variants.progressionStepper} data-preview={String(settings.previewActive)} />
      <button type="button" onClick={() => settings.setPreview({ progressionStepper: "stepper" })}>set-preview</button>
      <button type="button" onClick={settings.clearPreview}>clear-preview</button>
    </div>
  );
}

function renderProvider() {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retryDelay: 0 } } });
  const client = trpc.createClient({ links: [httpLink({ url: "http://localhost/api/trpc", transformer: superjson, fetch: fetchMock as typeof fetch })] });
  return render(
    <trpc.Provider client={client} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <DisplaySettingsProvider><Probe /></DisplaySettingsProvider>
      </QueryClientProvider>
    </trpc.Provider>,
  );
}

const flush = (ms = 0) => act(async () => { await vi.advanceTimersByTimeAsync(ms); });
const state = () => screen.getByTestId("state");
const saveCache = (variants: Record<string, string>, savedAt = Date.now()) =>
  localStorage.setItem(DISPLAY_CACHE_STORAGE_KEY, JSON.stringify({ savedAt, variants }));

describe("DisplaySettingsProvider", () => {
  beforeEach(() => {
    vi.useFakeTimers({ toFake: ["setTimeout", "clearTimeout", "setInterval", "clearInterval", "Date"] });
    vi.setSystemTime(new Date("2026-09-13T08:00:00.000Z"));
    localStorage.clear();
    sessionStorage.clear();
    fetchMock.mockClear();
    displayHandler = async () => ({ variants: {}, source: "database" });
    authHandler = async () => null;
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  describe("T9 公開値とキャッシュ（DR-01）", () => {
    it("古い stepper キャッシュがあっても、取得に成功した空の公開値では legacy に戻る", async () => {
      saveCache({ progressionStepper: "stepper" });
      const response = deferred<unknown>();
      displayHandler = () => response.promise;
      renderProvider();

      expect(state().dataset.ready).toBe("true");
      expect(state().dataset.variant).toBe("stepper");

      response.resolve({ variants: {}, source: "database" });
      await flush();
      expect(state().dataset.variant).toBe("legacy");
      expect(JSON.parse(localStorage.getItem(DISPLAY_CACHE_STORAGE_KEY)!).variants).toEqual({});
    });

    it("未知の値は legacy、取得失敗は legacy（キャッシュへ戻らない）", async () => {
      displayHandler = async () => ({ variants: { progressionStepper: "hexagon" }, source: "database" });
      renderProvider();
      await flush();
      expect(state().dataset.variant).toBe("legacy");
      cleanup();

      saveCache({ progressionStepper: "stepper" });
      displayHandler = async () => { throw new TypeError("network down"); };
      renderProvider();
      await flush();
      await flush();
      expect(state().dataset.ready).toBe("true");
      expect(state().dataset.variant).toBe("legacy");
    });

    it("期限切れ・破損したキャッシュは使わない", async () => {
      const response = deferred<unknown>();
      displayHandler = () => response.promise;
      saveCache({ progressionStepper: "stepper" }, Date.now() - 25 * 60 * 60 * 1000);
      renderProvider();
      expect(state().dataset.ready).toBe("false");
      expect(state().dataset.variant).toBe("legacy");
      cleanup();

      localStorage.setItem(DISPLAY_CACHE_STORAGE_KEY, "{broken");
      renderProvider();
      expect(state().dataset.ready).toBe("false");
    });
  });

  describe("T10 初回表示の待機（U11）", () => {
    it("キャッシュ無しでは 600ms 直前まで待ち、直後に legacy で描き、その後の成功応答を適用する", async () => {
      const response = deferred<unknown>();
      displayHandler = () => response.promise;
      renderProvider();

      await flush(DISPLAY_INITIAL_WAIT_MS - 1);
      expect(state().dataset.ready).toBe("false");
      await flush(1);
      expect(state().dataset.ready).toBe("true");
      expect(state().dataset.variant).toBe("legacy");

      response.resolve({ variants: { progressionStepper: "stepper" }, source: "database" });
      await flush();
      expect(state().dataset.variant).toBe("stepper");
      expect(state().dataset.ready).toBe("true");
    });

    it("600ms より前に取得できれば、その値で待機を解く", async () => {
      displayHandler = async () => ({ variants: { progressionStepper: "stepper" }, source: "database" });
      renderProvider();
      await flush(100);
      expect(state().dataset.ready).toBe("true");
      expect(state().dataset.variant).toBe("stepper");
    });
  });

  it("T11 再マウントせずに時間を進めると、公開値の変更を取得して表示が変わる（DR-02）", async () => {
    renderProvider();
    await flush();
    expect(state().dataset.variant).toBe("legacy");

    displayHandler = async () => ({ variants: { progressionStepper: "stepper" }, source: "database" });
    await flush(DISPLAY_REFETCH_INTERVAL_MS);
    // 再取得は間隔の終端で始まるため、応答の反映まで少し進める。
    await flush(100);
    expect(state().dataset.variant).toBe("stepper");

    displayHandler = async () => ({ variants: {}, source: "database" });
    await flush(DISPLAY_REFETCH_INTERVAL_MS);
    // 再取得は間隔の終端で始まるため、応答の反映まで少し進める。
    await flush(100);
    expect(state().dataset.variant).toBe("legacy");
  });

  describe("T12 プレビュー（U04・U05）", () => {
    it("管理者は同じタブで setPreview / clearPreview が即時に反映される", async () => {
      authHandler = async () => ({ id: 1, openId: "owner", role: "admin", name: "owner" });
      renderProvider();
      await flush();

      fireEvent.click(screen.getByText("set-preview"));
      expect(state().dataset.variant).toBe("stepper");
      expect(state().dataset.preview).toBe("true");
      expect(JSON.parse(sessionStorage.getItem(DISPLAY_PREVIEW_STORAGE_KEY)!)).toEqual({ progressionStepper: "stepper" });

      fireEvent.click(screen.getByText("clear-preview"));
      expect(state().dataset.variant).toBe("legacy");
      expect(state().dataset.preview).toBe("false");
      expect(sessionStorage.getItem(DISPLAY_PREVIEW_STORAGE_KEY)).toBeNull();
    });

    it("非管理者と確定したら保存済みのプレビューを破棄し、適用もしない", async () => {
      sessionStorage.setItem(DISPLAY_PREVIEW_STORAGE_KEY, JSON.stringify({ progressionStepper: "stepper" }));
      authHandler = async () => ({ id: 2, openId: "viewer", role: "user", name: "viewer" });
      renderProvider();
      expect(state().dataset.variant).not.toBe("stepper");
      await flush();
      expect(state().dataset.variant).toBe("legacy");
      expect(sessionStorage.getItem(DISPLAY_PREVIEW_STORAGE_KEY)).toBeNull();
    });

    it("認証の取得中は、保存済みのプレビューを消さない", async () => {
      sessionStorage.setItem(DISPLAY_PREVIEW_STORAGE_KEY, JSON.stringify({ progressionStepper: "stepper" }));
      authHandler = () => new Promise(() => undefined);
      renderProvider();
      await flush(5_000);
      expect(state().dataset.preview).toBe("false");
      expect(sessionStorage.getItem(DISPLAY_PREVIEW_STORAGE_KEY)).not.toBeNull();
    });
  });

  it.each(["getItem", "setItem", "removeItem"] as const)("T13 storage の %s が例外でも、認証フックと Provider が描画できる（DR-04）", async (method) => {
    sessionStorage.setItem(DISPLAY_PREVIEW_STORAGE_KEY, JSON.stringify({ progressionStepper: "stepper" }));
    vi.spyOn(Storage.prototype, method).mockImplementation(() => { throw new DOMException("blocked", "SecurityError"); });
    authHandler = async () => ({ id: 2, openId: "viewer", role: "user", name: "viewer" });
    renderProvider();
    await flush();
    await flush(DISPLAY_INITIAL_WAIT_MS);
    expect(state().dataset.ready).toBe("true");
    expect(state().dataset.variant).toBe("legacy");
    fireEvent.click(screen.getByText("clear-preview"));
    expect(state().dataset.variant).toBe("legacy");
  });
});
