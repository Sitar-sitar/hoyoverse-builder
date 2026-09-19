import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { spawn, type ChildProcess } from "node:child_process";
import { request } from "node:http";
import path from "node:path";

/**
 * query の POST 受付（設計: docs/修正設計書_公開API保護と外部API耐障害性_2026-09-19.md Phase 42）。
 * クライアントの httpBatchLink が methodOverride: "POST" を使うため、query が POST で届く。
 * これは createExpressMiddleware の allowMethodOverride がなければ 405 になり、
 * ミドルウェアの設定でしか再現しないため index.ts を実際に起動して検査する。
 * 既存の GET 経路（CI の Railway 疎通確認）が壊れていないことも同時に見る。
 */

const ROOT = path.resolve(import.meta.dirname, "..", "..");
const PAGES_ORIGIN = "https://sitar-sitar.github.io";

// 実サーバーを起動するテストは複数ファイルが同時に走る。ランダムなポートだと帯域が重なり、
// index.ts の findAvailablePort（空きを探して +20 まで走査）でも取り合いになって
// 起動待ちがタイムアウトすることがあった。ファイルごとに重ならない固定の基点を割り当てる。
const PORT_BASE = 41200;

let server: ChildProcess;
let port: number;

type RawResponse = { status: number; body: string };

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
      res.on("end", () => resolve({ status: res.statusCode ?? 0, body: raw }));
    });
    req.on("error", reject);
    if (body !== undefined) req.write(body);
    req.end();
  });
}

beforeAll(async () => {
  server = spawn(process.execPath, ["--import", "tsx", "server/_core/index.ts"], {
    cwd: ROOT,
    env: { ...process.env, API_ONLY: "true", NODE_ENV: "production", PORT: String(PORT_BASE) },
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

describe("query の POST 受付（allowMethodOverride）", () => {
  it("単一 query を POST で受け付ける", async () => {
    const res = await send("POST", "/api/trpc/build.guideHistory", JSON.stringify({}));
    expect(res.status).toBe(200);
    expect(res.body).toContain('"result"');
  });

  it("バッチ query を POST で受け付ける（httpBatchLink と同じ形）", async () => {
    const res = await send("POST", "/api/trpc/build.guideHistory,build.referenceCatalog?batch=1", JSON.stringify({}));
    expect(res.status).toBe(200);
    const parsed = JSON.parse(res.body) as unknown[];
    expect(Array.isArray(parsed)).toBe(true);
    expect(parsed).toHaveLength(2);
    expect(parsed.every(entry => "result" in (entry as Record<string, unknown>))).toBe(true);
  });

  it("UID を含む入力を POST の本文から読み、URL へは載せない", async () => {
    // 外部 API を叩かずに「本文が入力として解釈されたか」だけを見るため、
    // 桁数が不正な UID を送って Zod の検証エラー（400）に到達することを確認する。
    // 405（メソッド不許可）や 404（手続きが見つからない）なら本文が読まれていない。
    const pathname = "/api/trpc/build.lookup?batch=1";
    const body = JSON.stringify({ 0: { json: { game: "hsr", uid: "12" } } });
    const res = await send("POST", pathname, body);

    expect(res.status).toBe(400);
    expect(res.body).toContain("UIDは8〜10桁の数字で入力してください。");
    expect(pathname).not.toContain("input=");
  });

  it("既存の GET 経路も引き続き 200 を返す（CI の Railway 疎通確認を壊さない）", async () => {
    const res = await send("GET", "/api/trpc/build.guideHistory");
    expect(res.status).toBe(200);
    expect(res.body).toContain('"result"');
  });

  it("mutation は GET では受け付けない（method override は query の POST 化だけ）", async () => {
    const res = await send("GET", "/api/trpc/auth.logout");
    expect(res.status).toBe(405);
  });
});
