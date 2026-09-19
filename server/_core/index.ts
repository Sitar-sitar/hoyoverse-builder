import "dotenv/config";
import compression from "compression";
import express, { type Express } from "express";
import { createServer } from "http";
import net from "net";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { applyBodyParsers } from "./bodyLimits";
import { applyRetryAfter, clientIpFromRequest, createRateLimiter } from "./rateLimit";
import { registerStorageProxy } from "./storageProxy";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { registerGitHubAdminAuthRoutes } from "./githubAdminAuth";
import { serveStatic, setupVite } from "./vite";

const DEFAULT_CORS_ORIGINS = ["https://sitar-sitar.github.io"];

function configureCors(app: Express) {
  const configuredOrigins = (process.env.CORS_ORIGINS ?? "")
    .split(",")
    .map(origin => origin.trim())
    .filter(Boolean);
  const allowedOrigins = new Set([...DEFAULT_CORS_ORIGINS, ...configuredOrigins]);

  app.use((req, res, next) => {
    // ACAO の有無と値は Origin で決まるため、許可済みかどうかに関係なく常に宣言する。
    // tRPC の応答では tRPC が Vary を上書きするので、createExpressMiddleware の responseMeta でも付ける。
    res.vary("Origin");
    const origin = req.headers.origin;
    if (origin && allowedOrigins.has(origin)) {
      res.setHeader("Access-Control-Allow-Origin", origin);
      res.setHeader("Access-Control-Allow-Credentials", "true");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    }

    if (req.method === "OPTIONS") {
      res.sendStatus(204);
      return;
    }

    next();
  });
}

/**
 * 非 tRPC の `/api` に対する粗い IP 上限（設計: docs/修正設計書_公開API保護と外部API耐障害性_2026-09-19.md Phase 43(B)）。
 * `/api/trpc` はここでは扱わない。Express から通常 JSON の 429 を返すと httpBatchLink が期待する
 * バッチ形式を壊すため、tRPC の上限は tRPC middleware の中で TRPCError として返す。
 * `/api/health` は Railway のヘルスチェック（railway.toml の healthcheckPath）なので除外する。
 * OPTIONS は configureCors が 204 で返すためここへは来ないが、並び替えに備えて明示的に外す。
 */
const nonTrpcApiLimiter = createRateLimiter({ windowMs: 60_000, max: 120 });

function configureNonTrpcApiRateLimit(app: Express) {
  app.use((req, res, next) => {
    if (req.method === "OPTIONS") return next();
    if (!req.path.startsWith("/api")) return next();
    if (req.path === "/api/health" || req.path.startsWith("/api/trpc")) return next();

    const verdict = nonTrpcApiLimiter.consume(clientIpFromRequest(req));
    if (verdict.allowed) return next();

    applyRetryAfter(res, verdict.retryAfterSeconds);
    res.status(429).json({ error: "Too Many Requests" });
  });
}

function isPortAvailable(port: number): Promise<boolean> {
  return new Promise(resolve => {
    const server = net.createServer();
    server.listen(port, () => {
      server.close(() => resolve(true));
    });
    server.on("error", () => resolve(false));
  });
}

async function findAvailablePort(startPort: number = 3000): Promise<number> {
  for (let port = startPort; port < startPort + 20; port++) {
    if (await isPortAvailable(port)) {
      return port;
    }
  }
  throw new Error(`No available port found starting from ${startPort}`);
}

async function startServer() {
  const app = express();
  const server = createServer(app);
  const apiOnly = process.env.API_ONLY === "true";

  app.disable("x-powered-by");
  configureCors(app);
  // CORS の後・本文解析の前に置く。濫用時に不要な本文解析をしない。
  configureNonTrpcApiRateLimit(app);

  // 応答を gzip/deflate/br で圧縮する。更新履歴は無圧縮だと 400KB 超（設計: docs/修正設計書_更新履歴APIの転送量削減_2026-09-10.md）。
  // 回帰テスト server/_core/compression.test.ts が実サーバーでこの並びを確認する。
  app.use(compression());
  applyBodyParsers(app);

  app.get("/api/health", (_req, res) => {
    res.status(200).json({ ok: true, service: "hoyoverse-builder-api" });
  });

  // GitHub App administrator login must be available on the public Railway API
  // because the production frontend is hosted separately on GitHub Pages.
  registerGitHubAdminAuthRoutes(app);

  // Manus-specific routes are only needed by the original full-stack runtime.
  // Keep legacy OAuth/storage code unloaded entirely in API-only deployments.
  if (!apiOnly) {
    registerStorageProxy(app);
    const { registerOAuthRoutes } = await import("./oauth");
    registerOAuthRoutes(app);
  }

  app.use(
    "/api/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext,
      // query を POST でも受け付ける。クライアントの httpBatchLink が methodOverride: "POST" を使うため
      // UID が GET の URL へ載らなくなる（設計: docs/修正設計書_公開API保護と外部API耐障害性_2026-09-19.md Phase 42）。
      // GET は禁止されないので、CI の build.guideHistory 疎通確認（GET）はそのまま通る。
      allowMethodOverride: true,
      // tRPC は既定の vary を setHeader で書き、CORS の Vary: Origin を消す。Headers インスタンスなら追記される
      // （素のオブジェクトだと既定の vary を置き換える）。設計: docs/修正設計書_tRPC応答のVary_Origin欠落_Phase41_2026-09-15.md
      responseMeta: () => ({ headers: new Headers({ vary: "Origin" }) }),
    })
  );

  if (process.env.NODE_ENV === "development" && !apiOnly) {
    await setupVite(app, server);
  } else if (!apiOnly) {
    serveStatic(app);
  } else {
    app.get("/", (_req, res) => {
      res.status(200).json({
        ok: true,
        service: "hoyoverse-builder-api",
        health: "/api/health",
        trpc: "/api/trpc",
        adminAuth: "/api/auth/github",
      });
    });
  }

  const preferredPort = parseInt(process.env.PORT || "3000");
  const port = await findAvailablePort(preferredPort);

  if (port !== preferredPort) {
    console.log(`Port ${preferredPort} is busy, using port ${port} instead`);
  }

  server.listen(port, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${port}/`);
  });
}

startServer().catch(console.error);
