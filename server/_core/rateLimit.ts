import { createHmac, randomBytes } from "node:crypto";
import net from "node:net";
import type { Request, Response } from "express";

/**
 * 公開 API のレート制限（設計: docs/修正設計書_公開API保護と外部API耐障害性_2026-09-19.md Phase 43）。
 * 固定ウィンドウの計数だけを行い、外部依存は増やさない。
 * `express-rate-limit` は tRPC middleware 層で使えず、procedure 別の上限を実現できないため採用しない。
 */

export type RateLimitRule = { windowMs: number; max: number };
export type RateLimitVerdict = { allowed: boolean; retryAfterSeconds: number };

export type RateLimiter = {
  consume(key: string, now?: number): RateLimitVerdict;
  /** 保持中のバケット数。上限が効いていることをテストから観測するために公開する。 */
  readonly size: number;
};

/** レート制限そのものがメモリ枯渇の経路にならないよう、バケット数にも上限を置く。 */
const DEFAULT_MAX_ENTRIES = 10_000;

type Bucket = { count: number; resetAt: number };

/** 期限切れを先に掃除し、それでも超えていれば挿入順（＝古い順）に捨てる。 */
function evict(buckets: Map<string, Bucket>, maxEntries: number, now: number) {
  if (buckets.size <= maxEntries) return;
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) buckets.delete(key);
  }
  while (buckets.size > maxEntries) {
    const oldest = buckets.keys().next();
    if (oldest.done) break;
    buckets.delete(oldest.value);
  }
}

export function createRateLimiter(rule: RateLimitRule, maxEntries = DEFAULT_MAX_ENTRIES): RateLimiter {
  const buckets = new Map<string, Bucket>();

  return {
    get size() {
      return buckets.size;
    },
    consume(key: string, now = Date.now()): RateLimitVerdict {
      const current = buckets.get(key);
      const bucket: Bucket = current && current.resetAt > now
        ? current
        : { count: 0, resetAt: now + rule.windowMs };

      bucket.count += 1;
      // 末尾へ入れ直して「最後に使われた順」を保ち、あふれたときに古いものから捨てられるようにする。
      buckets.delete(key);
      buckets.set(key, bucket);
      evict(buckets, maxEntries, now);

      return {
        allowed: bucket.count <= rule.max,
        retryAfterSeconds: Math.max(1, Math.ceil((bucket.resetAt - now) / 1000)),
      };
    },
  };
}

/**
 * クライアント IP の確定。
 * Railway は client remote IP を `X-Real-IP` で渡す。Railway 実行時のみこれを信頼し、
 * それ以外の環境では偽装できるヘッダーを一切信頼せず socket address を使う。
 * レート制限のためだけに `app.set("trust proxy", 1)` を入れて Express 全体の挙動を変えることはしない。
 */
let warnedAboutMissingRealIp = false;

export function clientIpFromRequest(req: Request): string {
  if (process.env.RAILWAY_PROJECT_ID) {
    const header = req.headers["x-real-ip"];
    const candidate = (Array.isArray(header) ? header[0] : header ?? "").trim();
    if (net.isIP(candidate) > 0) return candidate;
    if (!warnedAboutMissingRealIp) {
      warnedAboutMissingRealIp = true;
      // IP・UID・トークンは本文へ出さない。
      console.warn("[RateLimit] Railway 実行中に X-Real-IP を取得できなかったため、socket address で判定します。");
    }
  }
  return req.socket?.remoteAddress ?? "unknown";
}

/** テスト専用。`X-Real-IP` 欠落の警告が1回だけであることを検査するために状態を戻す。 */
export function resetClientIpWarningForTests() {
  warnedAboutMissingRealIp = false;
}

/**
 * UID をレート制限のキーにするが、平文では持たない。
 * 鍵はプロセス起動ごとに生成し永続化しない（再起動で計数がリセットされる点は許容する）。
 */
const RATE_LIMIT_SALT = randomBytes(32);

export function rateLimitKeyForUid(uid: string): string {
  return createHmac("sha256", RATE_LIMIT_SALT).update(uid).digest("hex").slice(0, 16);
}

/** バッチ内で複数 operation が制限された場合に備え、`Retry-After` は最長値を残す。 */
export function applyRetryAfter(res: Response, seconds: number) {
  const current = Number(res.getHeader("Retry-After") ?? 0);
  if (!Number.isFinite(current) || seconds > current) {
    res.setHeader("Retry-After", String(seconds));
  }
}
