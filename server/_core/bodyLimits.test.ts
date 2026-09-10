import { afterAll, beforeAll, describe, expect, it } from "vitest";
import express from "express";
import type { AddressInfo } from "net";
import type { Server } from "http";
import { REQUEST_BODY_LIMIT, applyBodyParsers } from "./bodyLimits";

let server: Server;
let baseUrl: string;

beforeAll(async () => {
  const app = express();
  applyBodyParsers(app);
  app.post("/api/echo", (req, res) => res.status(200).json({ size: JSON.stringify(req.body).length }));
  app.post("/echo", (req, res) => res.status(200).json({ ok: true }));

  server = await new Promise<Server>((resolve) => {
    const listening = app.listen(0, "127.0.0.1", () => resolve(listening));
  });
  baseUrl = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
});

afterAll(async () => {
  await new Promise<void>((resolve) => server.close(() => resolve()));
});

const postJson = (path: string, body: string) =>
  fetch(`${baseUrl}${path}`, { method: "POST", headers: { "Content-Type": "application/json" }, body });

/** フィードバック投稿の最悪ケース（zod 上限 4,055 文字を 3 バイト文字で埋めた程度）を模した本文。 */
const worstCaseFeedback = JSON.stringify({ notes: "あ".repeat(11_000) });

describe("リクエストボディ上限", () => {
  it("上限は 256kb（テンプレート既定の 50mb ではない）", () => {
    expect(REQUEST_BODY_LIMIT).toBe("256kb");
  });

  it("フィードバック投稿の最悪ケース相当（約32KB）は通る", async () => {
    expect(Buffer.byteLength(worstCaseFeedback)).toBeGreaterThan(32 * 1024);
    const res = await postJson("/api/echo", worstCaseFeedback);
    expect(res.status).toBe(200);
  });

  it("上限超過は /api 配下で JSON の 413 を返す", async () => {
    const res = await postJson("/api/echo", JSON.stringify({ notes: "a".repeat(512 * 1024) }));
    expect(res.status).toBe(413);
    expect(res.headers.get("content-type")).toContain("application/json");
    await expect(res.json()).resolves.toEqual({ error: "payload_too_large", limit: "256kb" });
  });

  it("/api 以外の上限超過は JSON 化しない（既定のまま）", async () => {
    const res = await postJson("/echo", JSON.stringify({ notes: "a".repeat(512 * 1024) }));
    expect(res.status).toBe(413);
    expect(res.headers.get("content-type") ?? "").not.toContain("application/json");
  });
});
