import { afterAll, afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import express from "express";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import type { Server } from "node:http";
import type { AddressInfo } from "node:net";
import { TRPCError } from "@trpc/server";
import { activeLookupCount, LOOKUP_CAPACITY, runWithLookupCapacity } from "./lookupCapacity";
import { lookupGameBuild } from "../gameProviders";
import { appRouter } from "../routers";

/**
 * 新規UID照会作業の8枠（設計: docs/修正設計書_運用安定化と保守性改善_2026-10-19.md §5.2・§8.1）。
 */

function deferred<T = void>() {
  let resolve!: (value: T) => void;
  let reject!: (error: unknown) => void;
  const promise = new Promise<T>((res, rej) => { resolve = res; reject = rej; });
  return { promise, resolve, reject };
}

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe("runWithLookupCapacity", () => {
  it("8件を保持し9件目は作業を呼ばずにSERVICE_UNAVAILABLEで拒否する", async () => {
    const gates = Array.from({ length: LOOKUP_CAPACITY }, () => deferred());
    const running = gates.map(gate => runWithLookupCapacity(() => gate.promise));
    expect(activeLookupCount()).toBe(LOOKUP_CAPACITY);

    const ninth = vi.fn(async () => "never");
    const rejected = runWithLookupCapacity(ninth);
    await expect(rejected).rejects.toMatchObject({ code: "SERVICE_UNAVAILABLE" });
    expect(ninth).not.toHaveBeenCalled();
    expect(activeLookupCount()).toBe(LOOKUP_CAPACITY);

    gates.forEach(gate => gate.resolve());
    await Promise.all(running);
    expect(activeLookupCount()).toBe(0);
  });

  it("成功・reject・同期throwのいずれでも1回だけ解放し、次の作業を受理する", async () => {
    await expect(runWithLookupCapacity(async () => "ok")).resolves.toBe("ok");
    await expect(runWithLookupCapacity(async () => { throw new Error("upstream"); })).rejects.toThrow("upstream");
    await expect(runWithLookupCapacity(() => { throw new Error("sync"); })).rejects.toThrow("sync");
    expect(activeLookupCount()).toBe(0);

    const gates = Array.from({ length: LOOKUP_CAPACITY }, () => deferred());
    const running = gates.map(gate => runWithLookupCapacity(() => gate.promise));
    expect(activeLookupCount()).toBe(LOOKUP_CAPACITY);
    gates.forEach(gate => gate.resolve());
    await Promise.all(running);
    expect(activeLookupCount()).toBe(0);
  });

  it("30反復後もactiveが残らない", async () => {
    for (let i = 0; i < 30; i++) {
      const tasks = Array.from({ length: LOOKUP_CAPACITY + 1 }, (_, n) => runWithLookupCapacity(async () => {
        if (n % 2) throw new Error("fail");
        return n;
      }).catch(() => null));
      await Promise.all(tasks);
    }
    expect(activeLookupCount()).toBe(0);
  });
});

describe("UID照会経路の枠", () => {
  /** 上流のUID取得だけを止める。静的データ等は空JSONで即時に返し、正規化を失敗させて枠を解放させる。 */
  function stubHangingUpstream() {
    const uidGate = deferred();
    const calls: string[] = [];
    vi.stubGlobal("fetch", vi.fn(async (input: string | URL | Request) => {
      const url = String(input instanceof Request ? input.url : input);
      calls.push(url);
      if (url.includes("/api/uid/") || url.includes("/api/zzz/uid/") || url.includes("api.mihomo.me") || url.includes("/api/hsr/uid/")) {
        await uidGate.promise;
        return new Response("<!DOCTYPE html>", { status: 502, headers: { "content-type": "text/html" } });
      }
      return new Response("{}", { headers: { "content-type": "application/json" } });
    }));
    return { uidGate, calls };
  }

  it("3ゲーム混在で8新規作業を保持し、9件目は上流・fallbackを起動せずに拒否する", async () => {
    vi.spyOn(console, "warn").mockImplementation(() => {});
    vi.spyOn(console, "error").mockImplementation(() => {});
    const { uidGate, calls } = stubHangingUpstream();
    const games = ["hsr", "genshin", "zzz"] as const;
    const held = Array.from({ length: LOOKUP_CAPACITY }, (_, n) => lookupGameBuild(games[n % 3]!, `70000010${n}`).catch(error => error));
    expect(activeLookupCount()).toBe(LOOKUP_CAPACITY);

    // 同じUIDの照会は既存の in-flight を共有し、追加の枠を使わない。
    const shared = lookupGameBuild("hsr", "700000100").catch(error => error);
    expect(activeLookupCount()).toBe(LOOKUP_CAPACITY);

    const before = calls.length;
    const ninth = await lookupGameBuild("hsr", "700000199").catch(error => error);
    expect(ninth).toBeInstanceOf(TRPCError);
    expect(ninth.code).toBe("SERVICE_UNAVAILABLE");
    // MiHoMo も Enka fallback も呼ばれていない。
    expect(calls.slice(before).some(url => url.includes("700000199"))).toBe(false);

    uidGate.resolve();
    await Promise.all([...held, shared]);
    expect(activeLookupCount()).toBe(0);
  });

  it("容量拒否の後は同じUIDを改めて照会できる（拒否Promiseをin-flightに残さない）", async () => {
    vi.spyOn(console, "warn").mockImplementation(() => {});
    vi.spyOn(console, "error").mockImplementation(() => {});
    const gates = Array.from({ length: LOOKUP_CAPACITY }, () => deferred());
    const running = gates.map(gate => runWithLookupCapacity(() => gate.promise));
    const rejected = await lookupGameBuild("genshin", "700000201").catch(error => error);
    expect(rejected.code).toBe("SERVICE_UNAVAILABLE");
    gates.forEach(gate => gate.resolve());
    await Promise.all(running);

    const { uidGate } = stubHangingUpstream();
    const retry = lookupGameBuild("genshin", "700000201").catch(error => error);
    expect(activeLookupCount()).toBe(1);
    uidGate.resolve();
    const result = await retry;
    expect(result.code).not.toBe("SERVICE_UNAVAILABLE");
    expect(activeLookupCount()).toBe(0);
  });
});

describe("混合batchでの巻き添え防止", () => {
  let server: Server;
  let baseUrl: string;
  beforeAll(async () => {
    const app = express();
    app.use(express.json());
    app.use("/api/trpc", createExpressMiddleware({
      router: appRouter,
      allowMethodOverride: true,
      createContext: ({ req, res }) => ({ req, res, user: null }) as never,
    }));
    server = await new Promise<Server>(done => { const s = app.listen(0, "127.0.0.1", () => done(s)); });
    baseUrl = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
  });
  afterAll(async () => { server.closeAllConnections(); await new Promise<void>(done => server.close(() => done())); });

  it("枠不足のlookupだけがtRPCエラーになり、同じbatchの図鑑取得は成功する", async () => {
    const gates = Array.from({ length: LOOKUP_CAPACITY }, () => deferred());
    const running = gates.map(gate => runWithLookupCapacity(() => gate.promise));
    try {
      const body = JSON.stringify({ 0: { json: { game: "hsr", uid: "700000301" } }, 1: { json: null } });
      const response = await fetch(`${baseUrl}/api/trpc/build.lookup,build.referenceCatalog?batch=1`, { method: "POST", headers: { "Content-Type": "application/json" }, body });
      const payload = await response.json() as Array<{ result?: { data: { json: { games?: unknown } } }; error?: { json: { data: { code: string } } } }>;
      expect(payload).toHaveLength(2);
      expect(payload[0]?.error?.json.data.code).toBe("SERVICE_UNAVAILABLE");
      expect(payload[1]?.result?.data.json.games).toBeTruthy();
    } finally {
      gates.forEach(gate => gate.resolve());
      await Promise.all(running);
    }
  });
});
