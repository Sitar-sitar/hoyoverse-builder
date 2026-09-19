import { NOT_ADMIN_ERR_MSG, UNAUTHED_ERR_MSG } from '@shared/const';
import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";
import type { TrpcContext } from "./context";
import { hasGitHubAdminAllowlist, isGitHubAdminOpenIdAllowed } from "./githubAdminAuth";
import { applyRetryAfter, clientIpFromRequest, createRateLimiter, type RateLimiter, type RateLimitRule } from "./rateLimit";

const t = initTRPC.context<TrpcContext>().create({
  transformer: superjson,
});

export const router = t.router;

/**
 * tRPC のレート制限（設計: docs/修正設計書_公開API保護と外部API耐障害性_2026-09-19.md Phase 43(C)）。
 * Express 層から `/api/trpc` へ通常 JSON の 429 を返すと httpBatchLink が期待するバッチ形式を壊すため、
 * tRPC の上限は必ず tRPC middleware の中で判定し、TRPCError として返す。
 * httpBatchLink は複数 operation を1リクエストへまとめるので、HTTP リクエスト単位ではなく
 * operation 単位で数える。
 */
export const TOO_MANY_REQUESTS_MESSAGE = "リクエストが集中しています。しばらく待ってから再度お試しください。";

const globalApiLimiter = createRateLimiter({ windowMs: 60_000, max: 120 });

/** 上限を超えていれば `Retry-After` を付けて TRPCError を投げる。 */
export function enforceRateLimit(ctx: TrpcContext, limiter: RateLimiter, key: string, message = TOO_MANY_REQUESTS_MESSAGE) {
  const verdict = limiter.consume(key);
  if (verdict.allowed) return;
  applyRetryAfter(ctx.res, verdict.retryAfterSeconds);
  throw new TRPCError({ code: "TOO_MANY_REQUESTS", message });
}

/** procedure 別の上限を組み立てるための入口。定義は各 router 側に置く。 */
export function createProcedureRateLimiter(rule: RateLimitRule): RateLimiter {
  return createRateLimiter(rule);
}

const globalApiRateLimit = t.middleware(async opts => {
  const { ctx, next } = opts;
  enforceRateLimit(ctx, globalApiLimiter, `trpc:ip:${clientIpFromRequest(ctx.req)}`);
  return next();
});

// 全 procedure がこの土台を通る。個別上限は各 procedure の `.input(...)` の後に足す。
const baseProcedure = t.procedure.use(globalApiRateLimit);

export const publicProcedure = baseProcedure;

const requireUser = t.middleware(async opts => {
  const { ctx, next } = opts;

  if (!ctx.user) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: UNAUTHED_ERR_MSG });
  }

  return next({
    ctx: {
      ...ctx,
      user: ctx.user,
    },
  });
});

export const protectedProcedure = baseProcedure.use(requireUser);

const requireAdmin = t.middleware(async opts => {
  const { ctx, next } = opts;
  const requiresGitHubAllowlist = hasGitHubAdminAllowlist();
  const allowlisted = ctx.user ? isGitHubAdminOpenIdAllowed(ctx.user.openId) : false;

  if (!ctx.user || ctx.user.role !== 'admin' || (requiresGitHubAllowlist && !allowlisted)) {
    throw new TRPCError({ code: "FORBIDDEN", message: NOT_ADMIN_ERR_MSG });
  }

  return next({
    ctx: {
      ...ctx,
      user: ctx.user,
    },
  });
});

export const adminProcedure = baseProcedure.use(requireAdmin);
