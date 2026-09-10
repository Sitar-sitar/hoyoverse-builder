import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { spawn, type ChildProcess } from "node:child_process";
import { request } from "node:http";
import { gunzipSync } from "node:zlib";
import path from "node:path";

/**
 * 応答圧縮の回帰ゲート（設計: docs/修正設計書_更新履歴APIの転送量削減_2026-09-10.md D2）。
 * 圧縮はミドルウェアの並びが変わると黙って無効化されるため、index.ts を実際に起動して
 * CORS・圧縮・tRPC を通した本物の応答を検査する。
 */

const ROOT = path.resolve(import.meta.dirname, "..", "..");
const PAGES_ORIGIN = "https://sitar-sitar.github.io";
const HISTORY_PATH = "/api/trpc/build.guideHistory?input=%7B%7D";

let server: ChildProcess;
let port: number;

type RawResponse = { status: number; headers: Record<string, string | string[] | undefined>; body: Buffer };

function get(pathname: string, headers: Record<string, string>): Promise<RawResponse> {
  return new Promise((resolve, reject) => {
    // node:http は自動で解凍しないため、受信したバイト列（転送量）をそのまま測れる。
    const req = request({ host: "127.0.0.1", port, path: pathname, headers }, (res) => {
      const chunks: Buffer[] = [];
      res.on("data", (chunk: Buffer) => chunks.push(chunk));
      res.on("end", () => resolve({ status: res.statusCode ?? 0, headers: res.headers, body: Buffer.concat(chunks) }));
    });
    req.on("error", reject);
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

describe("API 応答の圧縮", () => {
  it("更新履歴は gzip で返り、転送量が無圧縮の1割未満になる", async () => {
    const plain = await get(HISTORY_PATH, {});
    const gzip = await get(HISTORY_PATH, { "Accept-Encoding": "gzip" });

    expect(gzip.status).toBe(200);
    expect(gzip.headers["content-encoding"]).toBe("gzip");
    expect(gzip.body.length).toBeLessThan(plain.body.length / 10);
    // 解凍すれば無圧縮の応答と1バイトも違わない（応答の JSON は不変）。
    expect(gunzipSync(gzip.body).equals(plain.body)).toBe(true);
  });

  it("Accept-Encoding の無い要求には従来どおり無圧縮で返す", async () => {
    const plain = await get(HISTORY_PATH, {});
    expect(plain.status).toBe(200);
    expect(plain.headers["content-encoding"]).toBeUndefined();
    const body = JSON.parse(plain.body.toString("utf8"));
    expect(body.result.data.json.characters.length).toBeGreaterThan(0);
  });

  it("Pages からの要求で CORS を壊さず、Vary を上書きせずに Accept-Encoding を追記する", async () => {
    const res = await get(HISTORY_PATH, { "Accept-Encoding": "gzip", Origin: PAGES_ORIGIN });
    expect(res.headers["access-control-allow-origin"]).toBe(PAGES_ORIGIN);
    expect(res.headers["content-encoding"]).toBe("gzip");
    const vary = String(res.headers.vary ?? "").toLowerCase();
    // tRPC が付ける trpc-accept を残したまま追記されること。
    // `Vary: Origin` の維持は corsVary.test.ts が検査する（修正設計書_tRPC応答のVary_Origin欠落_2026-09-11.md）。
    expect(vary).toContain("trpc-accept");
    expect(vary).toContain("accept-encoding");
  });

  it("1KB 未満の応答は圧縮しない（既定の閾値）", async () => {
    const res = await get("/api/health", { "Accept-Encoding": "gzip" });
    expect(res.status).toBe(200);
    expect(res.headers["content-encoding"]).toBeUndefined();
  });
});
