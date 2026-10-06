import { afterAll, beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import express from "express";
import { initTRPC } from "@trpc/server";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { request, type Server } from "node:http";
import type { AddressInfo } from "node:net";
import { z } from "zod";
import { applyBodyParsers, REQUEST_BODY_LIMIT_BYTES, TRPC_MAX_BATCH_SIZE } from "./bodyLimits";

let server: Server;
let baseUrl: string;
const resolve = vi.fn(() => "ok");
const context = vi.fn(() => ({}));
const t = initTRPC.create();
const router = t.router({ echo: t.procedure.input(z.object({ text: z.string() })).mutation(resolve), read: t.procedure.query(resolve) });
beforeAll(async () => {
  const app = express();
  applyBodyParsers(app);
  app.use("/api/trpc", createExpressMiddleware({ router, createContext: context, maxBodySize: REQUEST_BODY_LIMIT_BYTES, maxBatchSize: TRPC_MAX_BATCH_SIZE, allowMethodOverride: true }));
  server = await new Promise<Server>(done => { const s = app.listen(0, "127.0.0.1", () => done(s)); });
  baseUrl = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
});
beforeEach(() => { resolve.mockClear(); context.mockClear(); });
afterAll(async () => { server.closeAllConnections(); await new Promise<void>(done => server.close(() => done())); });
const post = (body: BodyInit, type?: string) => fetch(`${baseUrl}/api/trpc/echo`, { method: "POST", body, headers: type ? { "Content-Type": type } : {} });
describe("tRPC input resource boundaries", () => {
  it.each(["application/octet-stream", "application/x-www-form-urlencoded", "text/plain"])("rejects %s before context and resolver", async type => {
    expect((await post("a".repeat(512 * 1024), type)).status).toBe(415);
    expect(context).not.toHaveBeenCalled(); expect(resolve).not.toHaveBeenCalled();
  });
  it("rejects oversized multipart before parsing", async () => {
    const body = new FormData(); body.set("text", "a".repeat(512 * 1024));
    expect((await post(body)).status).toBe(415);
    expect(context).not.toHaveBeenCalled(); expect(resolve).not.toHaveBeenCalled();
  });
  it("accepts JSON at the exact byte limit, rejects one byte more", async () => {
    const overhead = Buffer.byteLength(JSON.stringify({ text: "" }));
    const body = JSON.stringify({ text: "a".repeat(REQUEST_BODY_LIMIT_BYTES - overhead) });
    expect((await post(body, "application/json; charset=utf-8")).status).toBe(200);
    resolve.mockClear(); context.mockClear();
    expect((await post(body.replace('"}', 'a"}'), "application/json")).status).toBe(413);
    expect(context).not.toHaveBeenCalled(); expect(resolve).not.toHaveBeenCalled();
  });
  it("rejects chunked JSON without Content-Length", async () => {
    const status = await new Promise<number>(done => {
      const req = request(`${baseUrl}/api/trpc/echo`, { method: "POST", headers: { "Content-Type": "application/json" } }, res => { res.resume(); res.on("end", () => done(res.statusCode!)); });
      req.write('{"text":"'); for (let i = 0; i < 9; i++) req.write("a".repeat(32 * 1024)); req.end('"}');
    });
    expect(status).toBe(413); expect(context).not.toHaveBeenCalled(); expect(resolve).not.toHaveBeenCalled();
  });
  it("preserves GET and POST queries", async () => {
    expect((await fetch(`${baseUrl}/api/trpc/read`)).status).toBe(200);
    expect((await fetch(`${baseUrl}/api/trpc/read`, { method: "POST", headers: { "Content-Type": "application/json" }, body: "{}" })).status).toBe(200);
  });
  it("accepts the batch limit and rejects excess before execution", async () => {
    const url = (n: number) => `${baseUrl}/api/trpc/${Array(n).fill("read").join(",")}?batch=1`;
    expect((await fetch(url(TRPC_MAX_BATCH_SIZE))).status).toBe(200);
    expect(resolve).toHaveBeenCalledTimes(TRPC_MAX_BATCH_SIZE); resolve.mockClear();
    expect((await fetch(url(TRPC_MAX_BATCH_SIZE + 1))).status).toBe(400); expect(resolve).not.toHaveBeenCalled();
  });
});
