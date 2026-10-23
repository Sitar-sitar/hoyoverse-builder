/**
 * 失敗ログの秘匿出力。area・codeは固定値の列挙だけを受け付け、例外からは既知の値と完全一致した
 * name・codeだけを出す。message・stack・SQL・URL・上流本文・任意オブジェクトはconsoleへ渡さない。
 * 設計: docs/修正設計書_セキュリティ残課題P2P3_2026-10-20.md §5.6
 */

const LOG_CODES = {
  Database: ["connect_failed", "upsert_user_failed", "save_feedback_failed"],
  Analytics: ["record_lookup_failed", "load_dashboard_failed"],
  DisplaySettings: ["load_public_failed", "load_admin_failed", "save_failed"],
  Feedback: ["store_failed", "list_failed", "update_failed"],
  GitHubAdminAuth: ["exchange_failed"],
} as const;

export type LogArea = keyof typeof LOG_CODES;
export type LogCode<A extends LogArea> = (typeof LOG_CODES)[A][number];

const KNOWN_ERROR_NAMES = new Set(["Error", "TRPCError", "AbortError", "TimeoutError", "TypeError", "SyntaxError", "DatabaseConfigError", "OAuthRequestError", "BodyLimitError"]);
const KNOWN_ERROR_CODES = new Set([
  // tRPC
  "PARSE_ERROR", "BAD_REQUEST", "INTERNAL_SERVER_ERROR", "UNAUTHORIZED", "FORBIDDEN", "NOT_FOUND", "METHOD_NOT_SUPPORTED", "TIMEOUT",
  "CONFLICT", "PRECONDITION_FAILED", "PAYLOAD_TOO_LARGE", "TOO_MANY_REQUESTS", "CLIENT_CLOSED_REQUEST", "BAD_GATEWAY", "SERVICE_UNAVAILABLE", "GATEWAY_TIMEOUT",
  // network / mysql2
  "ECONNREFUSED", "ECONNRESET", "ETIMEDOUT", "PROTOCOL_CONNECTION_LOST", "ER_DUP_ENTRY", "ER_LOCK_DEADLOCK", "ER_LOCK_WAIT_TIMEOUT",
]);

function read(error: unknown, key: "name" | "code" | "message"): unknown {
  try {
    return error && typeof error === "object" ? (error as Record<string, unknown>)[key] : undefined;
  } catch {
    return undefined;
  }
}

/** 例外を既知の値だけへ変換する。未知・取得不能は"unknown"。 */
export function describeError(error: unknown): { name: string; code: string } {
  const name = read(error, "name");
  const code = read(error, "code");
  const message = read(error, "message");
  return {
    name: typeof name === "string" && KNOWN_ERROR_NAMES.has(name) ? name : "unknown",
    // mysql2はプール枯渇をcodeなしのmessageで返す。messageの値そのものは出さず、固定コードへ変換する。
    code: typeof code === "string" && KNOWN_ERROR_CODES.has(code) ? code : message === "No connections available." ? "pool_exhausted" : "unknown",
  };
}

export function formatFailure<A extends LogArea>(area: A, code: LogCode<A>, error?: unknown, detail?: { status?: number }): string {
  const parts = [`[${area}] ${code}`];
  if (error !== undefined) {
    const described = describeError(error);
    parts.push(`error=${described.name}`, `errorCode=${described.code}`);
  }
  if (detail?.status !== undefined && Number.isInteger(detail.status)) parts.push(`status=${detail.status}`);
  return parts.join(" ");
}

/** 1行の固定形式で出力する。整形中の想定外の例外でもlogger自体は失敗しない。 */
export function logFailure<A extends LogArea>(area: A, code: LogCode<A>, error?: unknown, options: { level?: "error" | "warn"; status?: number } = {}) {
  let line: string;
  try {
    line = formatFailure(area, code, error, { status: options.status });
  } catch {
    line = `[${String(area)}] ${String(code)}`;
  }
  (options.level === "warn" ? console.warn : console.error)(line);
}
