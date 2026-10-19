import { afterAll, beforeAll, describe, expect, it } from "vitest";
import express from "express";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import type { Server } from "node:http";
import type { AddressInfo } from "node:net";
import { mkdtemp, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { appRouter } from "./routers";
import { releaseDescriptor, writeReleaseDescriptor } from "../scripts/content/releaseManifest";
import { catalogPath, digest, referencePath, trpcData } from "../scripts/release-contract.mjs";

/**
 * 公開版descriptorの生成（設計: docs/修正設計書_運用安定化と保守性改善_2026-10-19.md §5.7・§8.1 release）。
 * 期待digestが実際の tRPC HTTP 応答と一致することを、本番と同じ router・transformer で確かめる。
 */

const SHA = "0123456789abcdef0123456789abcdef01234567";
let server: Server;
let baseUrl: string;
let directory: string;

beforeAll(async () => {
  const app = express();
  app.use("/api/trpc", createExpressMiddleware({ router: appRouter, createContext: ({ req, res }) => ({ req, res, user: null }) as never }));
  server = await new Promise<Server>(done => { const s = app.listen(0, "127.0.0.1", () => done(s)); });
  baseUrl = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
  directory = await mkdtemp(path.join(tmpdir(), "release-artifact-"));
});

afterAll(async () => {
  server.closeAllConnections();
  await new Promise<void>(done => server.close(() => done()));
  await rm(directory, { recursive: true, force: true });
});

describe("releaseDescriptor", () => {
  it("3ゲームの実在probeを持ち、期待digestが実際のtRPC応答と一致する", async () => {
    const descriptor = releaseDescriptor(SHA);
    expect(descriptor.revision).toBe(SHA);
    expect(descriptor.probes.map(probe => probe.game)).toEqual(["hsr", "genshin", "zzz"]);
    const read = async (pathname: string) => digest(trpcData(await (await fetch(`${baseUrl}${pathname}`)).json()));
    expect(await read(catalogPath())).toBe(descriptor.catalogDigest);
    for (const probe of descriptor.probes) expect(await read(referencePath(probe.game, probe.name))).toBe(probe.referenceDigest);
  });

  it("SHA不正を拒否し、生成時刻・secret・本文を含めない", () => {
    expect(() => releaseDescriptor("abc")).toThrow();
    expect(() => releaseDescriptor(SHA.toUpperCase())).toThrow();
    const text = JSON.stringify(releaseDescriptor(SHA));
    expect(Object.keys(JSON.parse(text)).sort()).toEqual(["catalogDigest", "contentRevision", "mode", "probes", "revision", "schemaVersion"]);
    expect(text.length).toBeLessThan(1024);
  });
});

describe("writeReleaseDescriptor", () => {
  it("forward では artifact 直下へ release.json だけを書く", async () => {
    const descriptor = await writeReleaseDescriptor({ HOYOVERSE_PAGES_MODE: "forward", GITHUB_SHA: SHA }, directory);
    expect(descriptor?.revision).toBe(SHA);
    expect(await readdir(directory)).toEqual(["release.json"]);
    expect(JSON.parse(await readFile(path.join(directory, "release.json"), "utf8"))).toEqual(descriptor);
  });

  it.each(["legacy", "parallel", "rollback"])("%s では生成せず、以前の release.json も残さない", async mode => {
    await writeFile(path.join(directory, "release.json"), "{}");
    expect(await writeReleaseDescriptor({ HOYOVERSE_PAGES_MODE: mode, GITHUB_SHA: SHA }, directory)).toBeNull();
    expect(await readdir(directory)).not.toContain("release.json");
  });

  it("対象SHAが不明・artifactが無い場合は成功扱いにしない", async () => {
    await expect(writeReleaseDescriptor({ HOYOVERSE_PAGES_MODE: "forward" }, directory)).rejects.toThrow();
    await expect(writeReleaseDescriptor({ HOYOVERSE_PAGES_MODE: "forward", GITHUB_SHA: SHA }, path.join(directory, "missing"))).rejects.toThrow("Pages artifact is missing");
  });
});
