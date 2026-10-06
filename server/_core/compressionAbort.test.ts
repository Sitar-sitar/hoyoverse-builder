import { afterAll, beforeAll, expect, it } from "vitest";
import { createRequire } from "node:module";
import { get, type Server } from "node:http";
import type { AddressInfo } from "node:net";
import express from "express";
const require = createRequire(import.meta.url);
const zlib = require("node:zlib");
const original = Object.getOwnPropertyDescriptor(zlib, "createGzip")!;
let stream: import("node:zlib").Gzip | undefined;
let server: Server;
beforeAll(async () => {
  Object.defineProperty(zlib, "createGzip", { ...original, value: (...args: unknown[]) => { stream = original.value(...args); return stream; } });
  const compression = require("compression");
  const app = express(); app.use(compression());
  app.get("/stream", (_req, res) => {
    res.setHeader("Content-Type", "text/plain");
    const timer = setInterval(() => { res.write("a".repeat(4096)); res.flush(); }, 10);
    res.on("close", () => clearInterval(timer));
  });
  server = await new Promise<Server>(done => { const s = app.listen(0, "127.0.0.1", () => done(s)); });
});
afterAll(async () => { Object.defineProperty(zlib, "createGzip", original); server.closeAllConnections(); await new Promise<void>(done => server.close(() => done())); });
it("destroys the native compression stream when the response is interrupted", async () => {
  await new Promise<void>((done, fail) => {
    const req = get(`http://127.0.0.1:${(server.address() as AddressInfo).port}/stream`, { headers: { "Accept-Encoding": "gzip" } }, res => {
      res.once("data", () => {
        expect(stream).toBeDefined();
        const timer = setTimeout(() => fail(new Error("Compression stream was not closed")), 2000);
        stream!.once("close", () => { clearTimeout(timer); done(); });
        res.destroy();
      });
    }); req.on("error", fail);
  });
  expect(stream!.destroyed).toBe(true);
});
