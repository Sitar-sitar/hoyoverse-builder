import { afterAll, beforeAll, describe, expect, it } from "vitest";
import express from "express";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { spawn } from "node:child_process";
import { connect, createServer, type Server } from "node:net";
import type { AddressInfo } from "node:net";
import type { Server as HttpServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { allowedOrigins, CorsConfigError, isMutationOriginAllowed, PRODUCTION_PAGES_ORIGIN } from "./allowedOrigins";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { PRODUCTION_DB_TEST_ENV } from "./fixtures/productionDbEnv";

/**
 * 本番の許可Origin制約と、Cookieを持つmutationのOrigin検証（設計: docs/修正設計書_セキュリティ残課題P2P3_2026-10-20.md §5.4・§8 D）。
 */

const COOKIE = "app_session_id=some-session-token";
const BEARER = "Bearer some-admin-bearer";

describe("allowedOrigins", () => {
  it("productionでは正式Pages以外の追加を拒否し、developmentでは許可する", () => {
    expect([...allowedOrigins({ NODE_ENV: "production" })]).toEqual([PRODUCTION_PAGES_ORIGIN]);
    expect([...allowedOrigins({ NODE_ENV: "production", CORS_ORIGINS: PRODUCTION_PAGES_ORIGIN })]).toEqual([PRODUCTION_PAGES_ORIGIN]);
    expect(() => allowedOrigins({ NODE_ENV: "production", CORS_ORIGINS: "http://localhost:5173" })).toThrow(CorsConfigError);
    expect(() => allowedOrigins({ NODE_ENV: "production", CORS_ORIGINS: `${PRODUCTION_PAGES_ORIGIN}, https://evil.example` })).toThrow(CorsConfigError);
    expect(allowedOrigins({ NODE_ENV: "development", CORS_ORIGINS: "http://localhost:5173" }).has("http://localhost:5173")).toBe(true);
  });

  it("Cookieが無ければOriginを問わず、Cookieがあれば許可Originだけを通す", () => {
    const origins = new Set([PRODUCTION_PAGES_ORIGIN]);
    expect(isMutationOriginAllowed({ cookie: undefined, origin: undefined }, origins)).toBe(true);
    expect(isMutationOriginAllowed({ cookie: "other=1", origin: "https://evil.example" }, origins)).toBe(true);
    expect(isMutationOriginAllowed({ cookie: COOKIE, origin: PRODUCTION_PAGES_ORIGIN }, origins)).toBe(true);
    for (const origin of [undefined, "null", "https://evil.example", `${PRODUCTION_PAGES_ORIGIN}/`]) {
      expect(isMutationOriginAllowed({ cookie: COOKIE, origin }, origins)).toBe(false);
    }
  });
});

describe("tRPC経由のOrigin検証", () => {
  let server: HttpServer;
  let baseUrl: string;
  beforeAll(async () => {
    const app = express();
    app.use(express.json());
    app.use("/api/trpc", createExpressMiddleware({ router: appRouter, allowMethodOverride: true, createContext }));
    server = await new Promise<HttpServer>(done => { const s = app.listen(0, "127.0.0.1", () => done(s)); });
    baseUrl = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
  });
  afterAll(async () => { server.closeAllConnections(); await new Promise<void>(done => server.close(() => done())); });

  async function call(path: string, headers: Record<string, string>, body: unknown = { 0: { json: null } }) {
    const response = await fetch(`${baseUrl}/api/trpc/${path}?batch=1`, { method: "POST", headers: { "Content-Type": "application/json", ...headers }, body: JSON.stringify(body) });
    const payload = await response.json() as Array<{ result?: unknown; error?: { json: { data: { code: string } } } }>;
    return { payload, setCookie: response.headers.get("set-cookie") };
  }
  const logout = (headers: Record<string, string>) => call("auth.logout", headers);

  const credentials: Array<[string, Record<string, string>, boolean]> = [
    ["Cookieのみ", { Cookie: COOKIE }, true],
    ["Bearerのみ", { Authorization: BEARER }, false],
    ["CookieとBearer", { Cookie: COOKIE, Authorization: BEARER }, true],
    ["Cookie＋任意のBearer", { Cookie: COOKIE, Authorization: "Bearer x" }, true],
    ["無効Cookie＋有効形式のBearer", { Cookie: "app_session_id=invalid", Authorization: BEARER }, true],
  ];
  const origins: Array<[string, Record<string, string>, boolean]> = [
    ["Origin欠落", {}, false],
    ["Origin null", { Origin: "null" }, false],
    ["許可外Origin", { Origin: "https://evil.example" }, false],
    ["許可Origin", { Origin: PRODUCTION_PAGES_ORIGIN }, true],
  ];
  for (const [credName, credHeaders, cookieGuarded] of credentials) {
    for (const [originName, originHeaders, originAllowed] of origins) {
      const allowed = !cookieGuarded || originAllowed;
      it(`logout: ${credName} × ${originName} → ${allowed ? "実行" : "拒否"}`, async () => {
        const { payload, setCookie } = await logout({ ...credHeaders, ...originHeaders });
        if (allowed) {
          expect(payload[0]?.result).toBeTruthy();
          if (cookieGuarded) expect(setCookie).toContain("app_session_id=");
        } else {
          expect(payload[0]?.error?.json.data.code).toBe("FORBIDDEN");
          // resolverが実行されていない（Cookie削除の応答ヘッダが無い）。
          expect(setCookie).toBeNull();
        }
      });
    }
  }

  it("Cookieと許可外Originでも、POSTで送るqueryは従来どおり処理する", async () => {
    const { payload } = await call("auth.me", { Cookie: COOKIE, Origin: "https://evil.example" });
    expect(payload[0]?.error).toBeUndefined();
  });

  it("複数mutationのbatchでは各operationがtRPCのbatch envelopeで個別に拒否される", async () => {
    const { payload, setCookie } = await call("auth.logout,auth.logout", { Cookie: COOKIE, Origin: "https://evil.example" }, { 0: { json: null }, 1: { json: null } });
    expect(payload).toHaveLength(2);
    expect(payload.map(item => item.error?.json.data.code)).toEqual(["FORBIDDEN", "FORBIDDEN"]);
    expect(setCookie).toBeNull();
  });

  it("queryとmutationの混在batchはtRPCが全体を拒否し、mutationは実行されない", async () => {
    const response = await fetch(`${baseUrl}/api/trpc/auth.me,auth.logout?batch=1`, { method: "POST", headers: { "Content-Type": "application/json", Cookie: COOKIE, Origin: "https://evil.example" }, body: JSON.stringify({ 0: { json: null }, 1: { json: null } }) });
    expect(response.status).toBe(400);
    expect(response.headers.get("set-cookie")).toBeNull();
  });

  it("Cookieの無い公開mutationはOriginを問わない", async () => {
    const { payload } = await logout({ Origin: "https://evil.example" });
    expect(payload[0]?.result).toBeTruthy();
  });
});

describe("起動前検証", () => {
  const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
  it("productionで余分なCORS_ORIGINSがあればポートを開かず終了1、ログは固定コードだけ", async () => {
    const port = await new Promise<number>(done => { const probe: Server = createServer().listen(0, "127.0.0.1", () => { const p = (probe.address() as AddressInfo).port; probe.close(() => done(p)); }); });
    const result = await new Promise<{ code: number | null; output: string }>(done => {
      const child = spawn(process.execPath, ["--import", "tsx", "server/_core/index.ts"], {
        cwd: root,
        env: { ...process.env, ...PRODUCTION_DB_TEST_ENV, NODE_ENV: "production", API_ONLY: "true", PORT: String(port), CLIENT_IP_SOURCE: "socket", CORS_ORIGINS: "https://evil.example" },
        stdio: ["ignore", "pipe", "pipe"],
      });
      let output = "";
      child.stdout.on("data", chunk => { output += chunk; });
      child.stderr.on("data", chunk => { output += chunk; });
      child.on("exit", code => done({ code, output }));
    });
    expect(result.code).toBe(1);
    expect(result.output).toContain("[CORS] Invalid configuration: cors_origin_not_allowed");
    expect(result.output).not.toContain("evil.example");
    const listening = await new Promise<boolean>(done => { const socket = connect(port, "127.0.0.1"); socket.on("connect", () => { socket.destroy(); done(true); }); socket.on("error", () => done(false)); });
    expect(listening).toBe(false);
  }, 60_000);
});
