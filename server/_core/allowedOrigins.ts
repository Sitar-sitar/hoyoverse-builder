import { parse as parseCookieHeader } from "cookie";
import { COOKIE_NAME } from "@shared/const";

/**
 * 許可Originの一覧と、Cookieを持つ状態変更のOrigin判定。CORS応答とtRPCの検証で同じ規則を使う。
 * 設計: docs/修正設計書_セキュリティ残課題P2P3_2026-10-20.md §5.4
 */

export const PRODUCTION_PAGES_ORIGIN = "https://sitar-sitar.github.io";

export class CorsConfigError extends Error {
  readonly code = "cors_origin_not_allowed";
  constructor() {
    super("cors_origin_not_allowed");
    this.name = "CorsConfigError";
  }
}

type OriginEnv = { readonly [key: string]: string | undefined };

/** productionでは正式Pages以外のOriginを`CORS_ORIGINS`へ追加できない（listen前に検証する）。developmentは追加可。 */
export function allowedOrigins(env: OriginEnv = process.env): Set<string> {
  const configured = (env.CORS_ORIGINS ?? "").split(",").map(origin => origin.trim()).filter(Boolean);
  if (env.NODE_ENV === "production" && configured.some(origin => origin !== PRODUCTION_PAGES_ORIGIN)) throw new CorsConfigError();
  return new Set([PRODUCTION_PAGES_ORIGIN, ...configured]);
}

/** 管理session Cookieが要求に含まれるか（有効・無効は問わない）。 */
export function hasSessionCookie(cookieHeader: string | undefined): boolean {
  if (!cookieHeader) return false;
  return parseCookieHeader(cookieHeader)[COOKIE_NAME] !== undefined;
}

/**
 * Cookieを持つmutationだけOriginを要求する。Bearerヘッダの有無では免除しない（Cookieが先に認証に使われるため）。
 * Origin欠落・"null"・許可外は拒否。Cookieが無い要求（Bearerのみ・未認証）とqueryは対象外。
 */
export function isMutationOriginAllowed(input: { cookie: string | undefined; origin: string | undefined }, origins: Set<string> = allowedOrigins()): boolean {
  if (!hasSessionCookie(input.cookie)) return true;
  return typeof input.origin === "string" && origins.has(input.origin);
}
