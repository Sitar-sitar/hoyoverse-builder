import express, { type Express, type NextFunction, type Request, type Response } from "express";

/**
 * 受け付けるリクエストボディの上限。
 *
 * 本アプリがボディを読むのは `POST /api/trpc/feedback.submit`（zod 上限から最悪でも 32KB 弱）と
 * `POST /api/auth/github/exchange`（一時コード約100バイト）だけ。256kb はその約8倍で、
 * tRPC の httpBatchLink が複数ミューテーションをまとめても余裕がある。
 * 設計: docs/修正設計書_リクエストボディ上限の縮小_2026-09-10.md
 */
export const REQUEST_BODY_LIMIT = "256kb";

/** 上限超過が JSON で返るべきパス。tRPC クライアントは JSON 以外をパースできない。 */
const JSON_ERROR_PREFIX = "/api";

function isPayloadTooLarge(err: unknown): boolean {
  return typeof err === "object" && err !== null && (err as { type?: string }).type === "entity.too.large";
}

/**
 * ボディパーサと、上限超過時の 413 応答を登録する。
 * `index.ts` は末尾で startServer() を実行しテストから import できないため、ここへ切り出している。
 */
export function applyBodyParsers(app: Express) {
  app.use(express.json({ limit: REQUEST_BODY_LIMIT }));
  app.use(express.urlencoded({ limit: REQUEST_BODY_LIMIT, extended: true }));

  app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
    if (!isPayloadTooLarge(err) || !req.path.startsWith(JSON_ERROR_PREFIX)) {
      next(err);
      return;
    }
    res.status(413).json({ error: "payload_too_large", limit: REQUEST_BODY_LIMIT });
  });
}
