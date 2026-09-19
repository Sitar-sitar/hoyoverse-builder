import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { Request, Response } from "express";
import {
  applyRetryAfter,
  clientIpFromRequest,
  createRateLimiter,
  rateLimitKeyForUid,
  resetClientIpWarningForTests,
} from "./rateLimit";

/** 設計: docs/修正設計書_公開API保護と外部API耐障害性_2026-09-19.md Phase 43 */

const req = (options: { headers?: Record<string, string | string[]>; remoteAddress?: string }) => ({
  headers: options.headers ?? {},
  socket: { remoteAddress: options.remoteAddress },
}) as unknown as Request;

describe("固定ウィンドウのレート制限", () => {
  it("上限までは許可し、超えた分だけ拒否する", () => {
    const limiter = createRateLimiter({ windowMs: 60_000, max: 3 });
    const now = 1_000_000;

    expect(limiter.consume("a", now).allowed).toBe(true);
    expect(limiter.consume("a", now).allowed).toBe(true);
    expect(limiter.consume("a", now).allowed).toBe(true);
    expect(limiter.consume("a", now).allowed).toBe(false);
  });

  it("ウィンドウが経過すると再び許可する", () => {
    const limiter = createRateLimiter({ windowMs: 60_000, max: 1 });
    const now = 1_000_000;

    expect(limiter.consume("a", now).allowed).toBe(true);
    expect(limiter.consume("a", now + 59_999).allowed).toBe(false);
    expect(limiter.consume("a", now + 60_000).allowed).toBe(true);
  });

  it("キーが違えば独立して判定する", () => {
    const limiter = createRateLimiter({ windowMs: 60_000, max: 1 });
    const now = 1_000_000;

    expect(limiter.consume("a", now).allowed).toBe(true);
    expect(limiter.consume("a", now).allowed).toBe(false);
    expect(limiter.consume("b", now).allowed).toBe(true);
  });

  it("Retry-After はウィンドウの残り秒数で、1秒を下回らない", () => {
    const limiter = createRateLimiter({ windowMs: 60_000, max: 1 });
    const now = 1_000_000;

    limiter.consume("a", now);
    expect(limiter.consume("a", now).retryAfterSeconds).toBe(60);
    expect(limiter.consume("a", now + 30_000).retryAfterSeconds).toBe(30);
    expect(limiter.consume("a", now + 59_999).retryAfterSeconds).toBe(1);
  });

  it("バケット数が上限を超えない（期限切れを先に掃除し、足りなければ古い順に捨てる）", () => {
    const limiter = createRateLimiter({ windowMs: 60_000, max: 100 }, 4);
    const now = 1_000_000;

    for (let i = 0; i < 50; i++) limiter.consume(`key-${i}`, now);
    expect(limiter.size).toBe(4);
  });

  it("期限切れのバケットが先に捨てられる", () => {
    const limiter = createRateLimiter({ windowMs: 1_000, max: 100 }, 2);
    const now = 1_000_000;

    limiter.consume("old-1", now);
    limiter.consume("old-2", now);
    // ウィンドウ経過後に新しいキーを入れると、期限切れの2件が掃除される。
    limiter.consume("fresh", now + 2_000);
    expect(limiter.size).toBe(1);
  });
});

describe("クライアント IP の確定", () => {
  const warn = vi.spyOn(console, "warn").mockImplementation(() => {});

  beforeEach(() => {
    resetClientIpWarningForTests();
    warn.mockClear();
  });

  afterEach(() => {
    delete process.env.RAILWAY_PROJECT_ID;
  });

  it("Railway 実行時は妥当な X-Real-IP を採用し、X-Forwarded-For は無視する", () => {
    process.env.RAILWAY_PROJECT_ID = "proj";
    const ip = clientIpFromRequest(req({
      headers: { "x-real-ip": "203.0.113.7", "x-forwarded-for": "198.51.100.9, 203.0.113.7" },
      remoteAddress: "10.0.0.1",
    }));
    expect(ip).toBe("203.0.113.7");
  });

  it("Railway 実行時に X-Real-IP が欠落・不正なら socket address へ戻し、警告は1回だけ出す", () => {
    process.env.RAILWAY_PROJECT_ID = "proj";

    expect(clientIpFromRequest(req({ remoteAddress: "10.0.0.1" }))).toBe("10.0.0.1");
    expect(clientIpFromRequest(req({ headers: { "x-real-ip": "not-an-ip" }, remoteAddress: "10.0.0.2" }))).toBe("10.0.0.2");
    expect(warn).toHaveBeenCalledTimes(1);
    expect(String(warn.mock.calls[0][0])).not.toContain("10.0.0.1");
  });

  it("Railway 以外では X-Real-IP も X-Forwarded-For も信頼しない", () => {
    const ip = clientIpFromRequest(req({
      headers: { "x-real-ip": "203.0.113.7", "x-forwarded-for": "198.51.100.9" },
      remoteAddress: "10.0.0.1",
    }));
    expect(ip).toBe("10.0.0.1");
  });

  it("socket address も取れないときは固定のキーへ落とす", () => {
    expect(clientIpFromRequest(req({}))).toBe("unknown");
  });
});

describe("UID のレート制限キー", () => {
  it("UID の平文を含まず、同じ UID では安定し、違う UID では変わる", () => {
    const key = rateLimitKeyForUid("800000000");

    expect(key).not.toContain("800000000");
    expect(key).toMatch(/^[0-9a-f]{16}$/);
    expect(rateLimitKeyForUid("800000000")).toBe(key);
    expect(rateLimitKeyForUid("800000001")).not.toBe(key);
  });
});

describe("Retry-After の付与", () => {
  const res = () => {
    const headers = new Map<string, string>();
    return {
      headers,
      getHeader: (name: string) => headers.get(name),
      setHeader: (name: string, value: string) => headers.set(name, value),
    };
  };

  it("未設定なら設定する", () => {
    const target = res();
    applyRetryAfter(target as unknown as Response, 30);
    expect(target.headers.get("Retry-After")).toBe("30");
  });

  it("バッチ内で複数が制限されたときは最長値を残す", () => {
    const target = res();
    applyRetryAfter(target as unknown as Response, 30);
    applyRetryAfter(target as unknown as Response, 10);
    expect(target.headers.get("Retry-After")).toBe("30");
    applyRetryAfter(target as unknown as Response, 45);
    expect(target.headers.get("Retry-After")).toBe("45");
  });
});
