import { afterAll, beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import { createHash, randomBytes } from "node:crypto";
import mysql from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";
import { migrate } from "drizzle-orm/mysql2/migrator";
import { MySqlDialect } from "drizzle-orm/mysql-core";
import type { SQL } from "drizzle-orm";

/**
 * 交換コードの同時消費を実MySQLで検証する（設計: docs/修正設計書_セキュリティ残課題P2P3_2026-10-20.md §5.5・§8 E、U-5）。
 * 隔離MySQLの接続先を RACE_TEST_DATABASE_URL で渡したときだけ実行する（CIでは未実行＝NOT_TESTED扱い）。
 * 誤って共有DBへ向けないよう、接続先はループバックかつDB名が _test で終わるものに限る。
 */
const url = process.env.RACE_TEST_DATABASE_URL;

const dbMocks = vi.hoisted(() => ({ getDb: vi.fn(), upsertUser: vi.fn(), getUserByOpenId: vi.fn() }));
vi.mock("./db", async importOriginal => ({ ...(await importOriginal<typeof import("./db")>()), ...dbMocks }));

import { registerGitHubAdminAuthRoutes } from "./_core/githubAdminAuth";

const ADMIN_ID = "12345";
const dialect = new MySqlDialect();

function assertIsolated(raw: string) {
  const parsed = new URL(raw);
  if (!["127.0.0.1", "localhost", "[::1]"].includes(parsed.hostname) || !parsed.pathname.endsWith("_test")) {
    throw new Error("RACE_TEST_DATABASE_URL must point to a loopback database whose name ends with _test");
  }
}

/** n件のSELECTが揃うまで各SELECTの戻りを止め、全員がSELECT済みの状態からUPDATEへ進ませる。 */
function createBarrier(parties: number) {
  let arrived = 0;
  let release!: () => void;
  const gate = new Promise<void>(done => { release = done; });
  return async () => {
    arrived += 1;
    if (arrived === parties) release();
    await gate;
  };
}

describe.skipIf(!url)("交換コードの同時消費（隔離MySQL）", () => {
  let pool: mysql.Pool;
  let barrier: (() => Promise<void>) | null = null;
  const connectionIds: number[] = [];
  let ipSeq = 0;

  beforeAll(async () => {
    assertIsolated(url!);
    pool = mysql.createPool({ uri: url!, connectionLimit: 4 });
    const database = drizzle(pool);
    await migrate(database, { migrationsFolder: "./drizzle" });
    dbMocks.getDb.mockResolvedValue({
      // 実ドライバ・実SQLのまま、SELECTの直後に同期点を挟む。各要求はpoolの別接続で実行される。
      execute: async (query: SQL) => {
        const isSelect = dialect.sqlToQuery(query).sql.trimStart().startsWith("SELECT");
        const connection = await pool.getConnection();
        try {
          const [[{ id }]] = await connection.query("SELECT CONNECTION_ID() AS id") as unknown as [[{ id: number }]];
          if (isSelect) connectionIds.push(id);
          const result = await drizzle(connection).execute(query);
          if (isSelect && barrier) await barrier();
          return result;
        } finally {
          connection.release();
        }
      },
    });
  });
  afterAll(async () => {
    await pool?.query("DELETE FROM admin_auth_exchange_codes WHERE githubId = ?", [ADMIN_ID]);
    await pool?.end();
  });
  beforeEach(() => {
    process.env.ADMIN_SESSION_SECRET = "test-only-admin-session-secret-0123456789";
    process.env.ADMIN_GITHUB_IDS = ADMIN_ID;
    process.env.CLIENT_IP_SOURCE = "socket";
    barrier = null;
    connectionIds.length = 0;
  });

  async function insertCode(expiresInSeconds: number) {
    const code = randomBytes(32).toString("base64url");
    const hash = createHash("sha256").update(code, "utf8").digest("hex");
    await pool.query(
      "INSERT INTO admin_auth_exchange_codes (codeHash, githubId, login, expiresAt, createdAt) VALUES (?, ?, 'admin', NOW() + INTERVAL ? SECOND, NOW())",
      [hash, ADMIN_ID, expiresInSeconds],
    );
    return { code, hash };
  }

  async function exchange(code: string) {
    const handlers: Record<string, (req: unknown, res: unknown) => Promise<void>> = {};
    registerGitHubAdminAuthRoutes({ get: () => {}, post: (path: string, h: never) => { handlers[path] = h; } } as never);
    let status = 0;
    let body: unknown;
    const res = { setHeader: () => {}, status: (s: number) => { status = s; return res; }, json: (b: unknown) => { body = b; } };
    await handlers["/api/auth/github/exchange"]!({ body: { code }, headers: {}, socket: { remoteAddress: `10.1.0.${++ipSeq % 250}` } }, res);
    return { status, body };
  }

  it("初回は成功し、同じコードの2回目は401", async () => {
    const { code } = await insertCode(60);
    expect((await exchange(code)).status).toBe(200);
    expect((await exchange(code)).status).toBe(401);
  });

  it("期限切れは401、期限内は200", async () => {
    expect((await exchange((await insertCode(-1)).code)).status).toBe(401);
    expect((await exchange((await insertCode(2)).code)).status).toBe(200);
  });

  it("別接続の2要求が両方SELECT済みの状態から同時にUPDATEすると、ちょうど1件だけ成功する（20回）", async () => {
    for (let round = 0; round < 20; round += 1) {
      const { code, hash } = await insertCode(60);
      barrier = createBarrier(2);
      connectionIds.length = 0;
      const results = await Promise.all([exchange(code), exchange(code)]);
      barrier = null;
      // 両要求ともSELECTでは未使用の行を見ており、別々のMySQL接続で実行された。
      expect(connectionIds).toHaveLength(2);
      expect(new Set(connectionIds).size).toBe(2);
      expect(results.map(r => r.status).sort()).toEqual([200, 401]);
      expect(results.filter(r => typeof (r.body as { token?: unknown })?.token === "string")).toHaveLength(1);
      const [[row]] = await pool.query("SELECT usedAt FROM admin_auth_exchange_codes WHERE codeHash = ?", [hash]) as unknown as [[{ usedAt: Date | null }]];
      expect(row.usedAt).not.toBeNull();
    }
  });
});
