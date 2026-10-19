import { readFileSync } from "node:fs";
import { X509Certificate } from "node:crypto";

/**
 * DB設定の不備は固定コードだけを持つ例外にする。URL・認証情報・CAのpathや本文、生の解析例外は載せない。
 * 設計: docs/修正設計書_運用安定化と保守性改善_2026-10-19.md §5.5
 */
export type DatabaseConfigErrorCode =
  | "database_url_missing"
  | "database_url_invalid"
  | "database_url_scheme_invalid"
  | "database_url_host_missing"
  | "database_url_database_missing"
  | "database_url_query_forbidden"
  | "database_ca_missing"
  | "database_ca_unreadable"
  | "database_ca_invalid";

export class DatabaseConfigError extends Error {
  constructor(readonly code: DatabaseConfigErrorCode) {
    super(code);
    this.name = "DatabaseConfigError";
  }
}

type ConfigEnv = { readonly [key: string]: string | undefined };
type ReadText = (path: string) => string;

const readText: ReadText = path => readFileSync(path, "utf8");

/** CA bundle を読み、含まれる全PEM証明書を構文解析する。信頼・ホスト名の検証は接続時のTLSへ委ねる。 */
function readCaBundle(path: string, read: ReadText) {
  let text: string;
  try {
    text = read(path);
  } catch {
    throw new DatabaseConfigError("database_ca_unreadable");
  }
  const blocks = text.match(/-----BEGIN CERTIFICATE-----[\s\S]+?-----END CERTIFICATE-----/g) ?? [];
  if (!blocks.length) throw new DatabaseConfigError("database_ca_invalid");
  for (const block of blocks) {
    try {
      new X509Certificate(block);
    } catch {
      throw new DatabaseConfigError("database_ca_invalid");
    }
  }
  return text;
}

/**
 * 起動前の設定検証。APIは listen 前、Job（drizzle.config.ts）は設定生成前に呼ぶ。
 * DB URL未設定の development/test は従来どおりDBなしで動かすため null を返す。
 */
export function validateDatabaseConfig(env: ConfigEnv = process.env, read: ReadText = readText): { url: string; ca: string | null } | null {
  const production = env.NODE_ENV === "production";
  const caFile = env.DATABASE_SSL_CA_FILE?.trim() || "";
  const ca = caFile ? readCaBundle(caFile, read) : null;
  const url = env.DATABASE_URL?.trim() || "";
  if (!url) {
    if (production) throw new DatabaseConfigError("database_url_missing");
    return null;
  }
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    throw new DatabaseConfigError("database_url_invalid");
  }
  if (parsed.protocol !== "mysql:") throw new DatabaseConfigError("database_url_scheme_invalid");
  if (!parsed.hostname) throw new DatabaseConfigError("database_url_host_missing");
  if (!decodeURIComponent(parsed.pathname.slice(1))) throw new DatabaseConfigError("database_url_database_missing");
  // TLS や待機設定を URL から上書きさせない。drizzle.config.ts は query を捨てるため API との非対称も防ぐ。
  if (production && parsed.search) throw new DatabaseConfigError("database_url_query_forbidden");
  if (production && !ca) throw new DatabaseConfigError("database_ca_missing");
  return { url, ca };
}

/** Shared by mysql2 runtime and drizzle-kit; CA verification is never disabled. */
export function databaseConnection(url: string, env: ConfigEnv = process.env, read: ReadText = readText) {
  const caFile = env.DATABASE_SSL_CA_FILE?.trim();
  if (!caFile) return { uri: url };
  return { uri: url, ssl: { ca: readCaBundle(caFile, read), rejectUnauthorized: true } };
}
