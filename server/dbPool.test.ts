import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createServer as createMysqlServer } from "mysql2";
import { createServer as createTcpServer, type Server as TcpServer } from "node:net";
import type { AddressInfo } from "node:net";
import { createDbPool, DB_POOL_OPTIONS } from "./db";

/**
 * DBプール待機の廃止（設計: docs/修正設計書_運用安定化と保守性改善_2026-10-19.md §5.4・§8.1）。
 * 本番DBは使わず、mysql2 の疑似サーバーで接続上限と非待機を再現する。
 */

let mysqlServer: ReturnType<typeof createMysqlServer>;
let mysqlUrl: string;
let silentServer: TcpServer;
let silentUrl: string;

beforeAll(async () => {
  let connectionId = 0;
  mysqlServer = createMysqlServer(connection => {
    connection.serverHandshake({
      protocolVersion: 10,
      serverVersion: "8.0.0-test",
      connectionId: ++connectionId,
      statusFlags: 2,
      characterSet: 8,
      capabilityFlags: 0xffffff & ~0x800, // CLIENT_SSL を名乗らない
    } as never);
    connection.on("query", () => {
      connection.writeTextResult([{ ok: 1 }], [{ name: "ok", columnType: 8 } as never]);
    });
    connection.on("error", () => {});
  });
  await new Promise<void>(done => mysqlServer.listen(0, "127.0.0.1", () => done()));
  const mysqlPort = ((mysqlServer as unknown as { _server: TcpServer })._server.address() as AddressInfo).port;
  mysqlUrl = `mysql://test:test@127.0.0.1:${mysqlPort}/test`;

  // TCPは受け付けるがハンドシェイクを返さないサーバー（接続確立の期限を確認する）。
  silentServer = createTcpServer(socket => { socket.on("error", () => {}); });
  await new Promise<void>(done => silentServer.listen(0, "127.0.0.1", () => done()));
  silentUrl = `mysql://test:test@127.0.0.1:${(silentServer.address() as AddressInfo).port}/test`;
});

afterAll(async () => {
  await new Promise<void>(done => mysqlServer.close(() => done()));
  silentServer.close();
});

describe("DBプールの非待機", () => {
  it("明示した接続オプションを使う", () => {
    expect(DB_POOL_OPTIONS).toEqual({ connectionLimit: 10, waitForConnections: false, queueLimit: 0, connectTimeout: 10_000 });
  });

  it("接続10本を保持中の11件目は待たずに失敗し、1本解放後は成功する", async () => {
    const pool = createDbPool(mysqlUrl).promise();
    try {
      const held = await Promise.all(Array.from({ length: 10 }, () => pool.getConnection()));
      const started = Date.now();
      await expect(pool.getConnection()).rejects.toThrow("No connections available.");
      expect(Date.now() - started).toBeLessThan(500);

      held.pop()!.release();
      const again = await pool.getConnection();
      again.release();
      held.forEach(connection => connection.release());
    } finally {
      await pool.end();
    }
  });

  it("接続確立は10秒で打ち切る", async () => {
    const pool = createDbPool(silentUrl).promise();
    const started = Date.now();
    try {
      await expect(pool.getConnection()).rejects.toMatchObject({ code: "ETIMEDOUT" });
      const elapsed = Date.now() - started;
      expect(elapsed).toBeGreaterThanOrEqual(9_000);
      expect(elapsed).toBeLessThan(13_000);
    } finally {
      await pool.end().catch(() => {});
    }
  }, 20_000);
});
