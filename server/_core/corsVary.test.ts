import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { spawn, type ChildProcess } from "node:child_process";
import { request } from "node:http";
import path from "node:path";

/**
 * CORS の `Vary: Origin` の回帰ゲート（設計: docs/修正設計書_tRPC応答のVary_Origin欠落_2026-09-11.md D3）。
 * tRPC は応答ヘッダーの `vary: trpc-accept` を setHeader で書き、先に CORS が付けた `Vary: Origin` を消す。
 * この上書きはミドルウェアの並びと tRPC の書き込み順でしか再現しないため、index.ts を実際に起動して検査する。
 */

const ROOT = path.resolve(import.meta.dirname, "..", "..");
const PAGES_ORIGIN = "https://sitar-sitar.github.io";
const OTHER_ORIGIN = "https://example.invalid";
const HISTORY_PATH = "/api/trpc/build.guideHistory?input=%7B%7D";

let server: ChildProcess;
let port: number;

type RawResponse = { status: number; headers: Record<string, string | string[] | undefined> };

function send(method: string, pathname: string, headers: Record<string, string>): Promise<RawResponse> {
  return new Promise((resolve, reject) => {
    const req = request({ host: "127.0.0.1", port, method, path: pathname, headers }, (res) => {
      res.resume();
      res.on("end", () => resolve({ status: res.statusCode ?? 0, headers: res.headers }));
    });
    req.on("error", reject);
    req.end();
  });
}

function varyTokens(res: RawResponse): string[] {
  return String(res.headers.vary ?? "")
    .split(",")
    .map(token => token.trim().toLowerCase())
    .filter(Boolean);
}

beforeAll(async () => {
  server = spawn(process.execPath, ["--import", "tsx", "server/_core/index.ts"], {
    cwd: ROOT,
    env: { ...process.env, API_ONLY: "true", NODE_ENV: "production", PORT: String(40000 + Math.floor(Math.random() * 10000)) },
    stdio: ["ignore", "pipe", "pipe"],
  });
  port = await new Promise<number>((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("API サーバーが起動しなかった")), 60_000);
    server.stdout!.on("data", (chunk: Buffer) => {
      const match = chunk.toString().match(/Server running on http:\/\/0\.0\.0\.0:(\d+)\//);
      if (match) {
        clearTimeout(timer);
        resolve(Number(match[1]));
      }
    });
    server.on("exit", (code) => reject(new Error(`API サーバーが終了した（code ${code}）`)));
  });
}, 90_000);

afterAll(() => {
  server?.kill();
});

describe("CORS の Vary: Origin", () => {
  it("Pages からの tRPC 応答は ACAO を返し、Vary に trpc-accept と Origin の両方を持つ", async () => {
    const res = await send("GET", HISTORY_PATH, { Origin: PAGES_ORIGIN });
    expect(res.status).toBe(200);
    expect(res.headers["access-control-allow-origin"]).toBe(PAGES_ORIGIN);
    expect(varyTokens(res)).toEqual(expect.arrayContaining(["trpc-accept", "origin"]));
  });

  it("圧縮した tRPC 応答は trpc-accept・Origin・Accept-Encoding を重複なく持つ", async () => {
    const res = await send("GET", HISTORY_PATH, { Origin: PAGES_ORIGIN, "Accept-Encoding": "gzip" });
    expect(res.headers["content-encoding"]).toBe("gzip");
    const tokens = varyTokens(res);
    expect(tokens).toEqual(expect.arrayContaining(["trpc-accept", "origin", "accept-encoding"]));
    expect(new Set(tokens).size).toBe(tokens.length);
  });

  it("tRPC のエラー応答でも Vary に Origin がある", async () => {
    const res = await send("GET", "/api/trpc/build.doesNotExist", { Origin: PAGES_ORIGIN });
    expect(res.status).toBe(404);
    expect(res.headers["access-control-allow-origin"]).toBe(PAGES_ORIGIN);
    expect(varyTokens(res)).toContain("origin");
  });

  it("許可していない要求元には ACAO を返さないが、Vary には Origin がある", async () => {
    const res = await send("GET", HISTORY_PATH, { Origin: OTHER_ORIGIN });
    expect(res.headers["access-control-allow-origin"]).toBeUndefined();
    expect(varyTokens(res)).toContain("origin");
  });

  it("tRPC 以外の経路（ヘルスチェック・preflight）も Vary に Origin を持つ", async () => {
    const health = await send("GET", "/api/health", { Origin: PAGES_ORIGIN });
    expect(health.status).toBe(200);
    expect(varyTokens(health)).toContain("origin");

    const preflight = await send("OPTIONS", HISTORY_PATH, {
      Origin: PAGES_ORIGIN,
      "Access-Control-Request-Method": "GET",
    });
    expect(preflight.status).toBe(204);
    expect(preflight.headers["access-control-allow-origin"]).toBe(PAGES_ORIGIN);
    expect(varyTokens(preflight)).toContain("origin");
  });
});
