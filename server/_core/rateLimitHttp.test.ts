import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { spawn, type ChildProcess } from "node:child_process";
import { request } from "node:http";
import path from "node:path";

/**
 * Express 層のレート制限（設計: docs/修正設計書_公開API保護と外部API耐障害性_2026-09-19.md Phase 43(B)(D)）。
 * ミドルウェアの並びと除外条件でしか再現しないため、index.ts を実際に起動して検査する。
 *
 * 注意: この検査はすべて 127.0.0.1 から出るため、非 tRPC `/api` の 120回/分バケットを共有する。
 * 共有バケットを使い切る検査は必ず最後に置く。
 */

const ROOT = path.resolve(import.meta.dirname, "..", "..");
const PAGES_ORIGIN = "https://sitar-sitar.github.io";

let server: ChildProcess;
let port: number;

type RawResponse = { status: number; headers: Record<string, string | string[] | undefined>; body: string };

function send(method: string, pathname: string, body?: string): Promise<RawResponse> {
  return new Promise((resolve, reject) => {
    const headers: Record<string, string> = { Origin: PAGES_ORIGIN };
    if (body !== undefined) {
      headers["Content-Type"] = "application/json";
      headers["Content-Length"] = String(Buffer.byteLength(body));
    }
    const req = request({ host: "127.0.0.1", port, method, path: pathname, headers }, (res) => {
      let raw = "";
      res.setEncoding("utf8");
      res.on("data", (chunk: string) => { raw += chunk; });
      res.on("end", () => resolve({ status: res.statusCode ?? 0, headers: res.headers, body: raw }));
    });
    req.on("error", reject);
    if (body !== undefined) req.write(body);
    req.end();
  });
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

describe("レート制限の除外", () => {
  it("/api/health は何回叩いても 429 にならない（Railway のヘルスチェック）", async () => {
    for (let i = 0; i < 150; i++) {
      const res = await send("GET", "/api/health");
      expect(res.status).toBe(200);
    }
  }, 60_000);

  it("CORS プリフライト（OPTIONS）は数えず 204 のまま返す", async () => {
    for (let i = 0; i < 150; i++) {
      const res = await send("OPTIONS", "/api/trpc/build.guideHistory");
      expect(res.status).toBe(204);
    }
  }, 60_000);
});

describe("/api/auth/github/exchange の個別上限", () => {
  it("IP あたり 1 分 10 回を超えると JSON の 429 と Retry-After を返す", async () => {
    const body = JSON.stringify({ code: "x" });
    const statuses: number[] = [];
    let limited: RawResponse | null = null;

    for (let i = 0; i < 11; i++) {
      const res = await send("POST", "/api/auth/github/exchange", body);
      statuses.push(res.status);
      if (res.status === 429) limited = res;
    }

    // 上限までは交換コードの形式検査（400）へ到達し、11 回目で 429 になる。
    expect(statuses.slice(0, 10)).toEqual(Array(10).fill(400));
    expect(statuses[10]).toBe(429);
    expect(limited).not.toBeNull();
    expect(String(limited!.headers["content-type"])).toContain("application/json");
    expect(JSON.parse(limited!.body)).toEqual({ error: "Too Many Requests" });
    expect(Number(limited!.headers["retry-after"])).toBeGreaterThan(0);
    expect(limited!.headers["access-control-allow-origin"]).toBe(PAGES_ORIGIN);
  }, 30_000);
});

describe("/api/trpc は Express 層の粗い上限を通らない", () => {
  it("tRPC へ大量に投げても Express の素の JSON 429 は返らず、tRPC のエンベロープを保つ", async () => {
    for (let i = 0; i < 40; i++) {
      const res = await send("GET", "/api/trpc/build.guideHistory");
      expect(res.status).toBe(200);
      // Express の限界に当たっていたら `{"error":"Too Many Requests"}` になる。
      expect(res.body).not.toContain('"error":"Too Many Requests"');
      expect(res.body).toContain('"result"');
    }
  }, 60_000);
});

// 共有バケットを使い切るので最後に置く。
describe("非 tRPC の /api の粗い上限", () => {
  it("上限を超えると JSON の 429 と Retry-After を返し、CORS ヘッダーは維持する", async () => {
    let limited: RawResponse | null = null;

    for (let i = 0; i < 200 && !limited; i++) {
      const res = await send("GET", "/api/not-a-real-route");
      if (res.status === 429) limited = res;
    }

    expect(limited).not.toBeNull();
    expect(String(limited!.headers["content-type"])).toContain("application/json");
    expect(JSON.parse(limited!.body)).toEqual({ error: "Too Many Requests" });
    expect(Number(limited!.headers["retry-after"])).toBeGreaterThan(0);
    expect(limited!.headers["access-control-allow-origin"]).toBe(PAGES_ORIGIN);
    expect(String(limited!.headers.vary ?? "").toLowerCase()).toContain("origin");
  }, 60_000);

  it("非 tRPC が上限に達していても /api/health と /api/trpc は通る", async () => {
    expect((await send("GET", "/api/health")).status).toBe(200);
    expect((await send("GET", "/api/trpc/build.guideHistory")).status).toBe(200);
  });
});
