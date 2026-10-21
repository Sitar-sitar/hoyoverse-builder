/**
 * migration Job から本番DBへの読み取り専用の接続確認（SEC-06 / AC-SEC06）。
 * Job と同じ起動前検証（validateDatabaseConfig）を通し、CA検証付きTLSで接続して SELECT 1 と
 * 接続のTLS版だけを読む。書き込み・migrationはしない。URL・認証情報・CA・生の例外は出力しない。
 *
 * 実行（Job の1回限りのCMD上書き）: node node_modules/tsx/dist/cli.mjs scripts/db-readonly-check.ts
 * 設計: docs/修正設計書_セキュリティ残課題P2P3_2026-10-20.md §9 AC-SEC06
 */
import mysql from "mysql2/promise";
import { DatabaseConfigError, databaseConnection, validateDatabaseConfig } from "../server/_core/databaseConnection";

async function main() {
  const config = validateDatabaseConfig();
  if (!config) throw new DatabaseConfigError("database_url_missing");
  const connection = await mysql.createConnection({ ...databaseConnection(config.url), connectTimeout: 10_000 });
  try {
    const [[row]] = await connection.query("SELECT 1 AS ok") as unknown as [[{ ok: number }]];
    const [[tls]] = await connection.query("SHOW SESSION STATUS LIKE 'Ssl_version'") as unknown as [[{ Value?: string } | undefined]];
    console.log(`DB_CHECK_OK connection_ok=${row.ok} tls=${tls?.Value || "none"} ca_verified=${config.ca ? "yes" : "no"} node_env=${process.env.NODE_ENV ?? ""} revision=${process.env.APP_REVISION ?? ""}`);
  } finally {
    await connection.end();
  }
}

main().catch(error => {
  const code = error instanceof DatabaseConfigError ? error.code : (error as { code?: unknown })?.code;
  console.error(`DB_CHECK_FAILED:${typeof code === "string" && /^[A-Za-z0-9_]+$/.test(code) ? code : "unknown"}`);
  process.exit(1);
});
