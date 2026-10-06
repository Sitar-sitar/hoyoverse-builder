import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import vm from "node:vm";
import {
  apiUrl,
  buildPlan,
  verifyApi,
  redirectTarget,
  redirectHtml,
  assembleArtifact,
  spaRoutes,
  LEGACY_BASE,
  NEXT_BASE,
  ROUTES,
} from "./pages.mjs";
const env = {
  HOYOVERSE_PAGES_MODE: "parallel",
  HOYOVERSE_API_BASE_URL: "https://legacy.example",
  HOYOVERSE_NORTHFLANK_API_BASE_URL: "https://next.example",
};
test("reject invalid URL and mode inputs before building", () => {
  for (const value of [
    undefined,
    "",
    "http://a.test",
    "https://u:p@a.test",
    "https://a.test/path",
    "https://a.test?q=1",
    "https://a.test#x",
    "https://a.test:8000",
  ])
    assert.throws(() => apiUrl(value));
  assert.equal(apiUrl("https://a.test/"), "https://a.test");
  assert.throws(() => buildPlan({}));
  assert.throws(() => buildPlan({ ...env, HOYOVERSE_PAGES_MODE: "unknown" }));
});
test("only require the APIs used by each mode", () => {
  assert.equal(
    buildPlan({
      HOYOVERSE_PAGES_MODE: "legacy",
      HOYOVERSE_API_BASE_URL: env.HOYOVERSE_API_BASE_URL,
    }).plans.length,
    1
  );
  assert.equal(
    buildPlan({
      HOYOVERSE_PAGES_MODE: "rollback",
      HOYOVERSE_API_BASE_URL: env.HOYOVERSE_API_BASE_URL,
    }).plans.length,
    1
  );
  assert.equal(
    buildPlan({
      HOYOVERSE_PAGES_MODE: "forward",
      HOYOVERSE_NORTHFLANK_API_BASE_URL: env.HOYOVERSE_NORTHFLANK_API_BASE_URL,
    }).plans[0].preview,
    false
  );
  assert.deepEqual(
    buildPlan(env).plans.map(p => p.preview),
    [false, true]
  );
});
test("reject maintenance, different revision, preview mismatch, CORS and RPC errors", async () => {
  const plan = buildPlan(env).plans[1];
  const revision = "a".repeat(40);
  const health = {
    ok: true,
    revision,
    maintenance: false,
    migrationPreview: true,
  };
  const response = (body, cors = "https://sitar-sitar.github.io") =>
    new Response(JSON.stringify(body), {
      headers: { "access-control-allow-origin": cors },
    });
  const fetcher = h => async url =>
    response(url.endsWith("health") ? h : { result: { data: { json: {} } } });
  await verifyApi(plan, revision, fetcher(health));
  for (const bad of [
    { ...health, maintenance: true },
    { ...health, revision: "b".repeat(40) },
    { ...health, migrationPreview: false },
  ])
    await assert.rejects(verifyApi(plan, revision, fetcher(bad)));
  await assert.rejects(
    verifyApi(plan, revision, async () =>
      response(health, "https://other.test")
    )
  );
  await assert.rejects(
    verifyApi(plan, revision, async url =>
      response(url.endsWith("health") ? health : { error: {} })
    )
  );
});
test("redirect only exact known paths, strip query/fragment, and avoid loops", () => {
  for (const route of ROUTES)
    for (const suffix of ["", "/"]) {
      const pathname = `${LEGACY_BASE}${route}`.replace(/\/$/, "") + suffix;
      assert.equal(
        redirectTarget(pathname, LEGACY_BASE, NEXT_BASE),
        `${NEXT_BASE}${route}${route ? "/" : ""}`
      );
    }
  for (const unknown of [
    `${NEXT_BASE}admin`,
    `${NEXT_BASE}unknown`,
    `${LEGACY_BASE}unknown`,
    `${LEGACY_BASE}404.html`,
    `${LEGACY_BASE}%61dmin`,
  ])
    assert.equal(redirectTarget(unknown, LEGACY_BASE, NEXT_BASE), null);
  const html = redirectHtml(LEGACY_BASE, NEXT_BASE, "admin");
  const script = html.match(/<script>(.*?)<\/script>/s)[1];
  let target;
  vm.runInNewContext(script, {
    location: {
      pathname: `${LEGACY_BASE}admin`,
      search: "?uid=secret",
      hash: "#admin_exchange_code=secret",
      replace: value => {
        target = value;
      },
    },
  });
  assert.equal(target, `${NEXT_BASE}admin/`);
});
test("four artifacts have every route and isolated assets; parallel 404 picks one SPA", async () => {
  const directory = await mkdtemp(path.join(os.tmpdir(), "hb-pages-test-"));
  try {
    for (const [name, base] of [
      ["legacy", LEGACY_BASE],
      ["next", NEXT_BASE],
    ]) {
      await mkdir(path.join(directory, name, "assets"), { recursive: true });
      await writeFile(
        path.join(directory, name, "index.html"),
        `<html><head></head><body><script src="${base}assets/app.js"></script></body></html>`
      );
      await writeFile(path.join(directory, name, "assets/app.js"), name);
      await spaRoutes(path.join(directory, name));
    }
    for (const mode of ["legacy", "parallel", "forward", "rollback"]) {
      const dest = path.join(directory, mode + "-artifact");
      await mkdir(dest);
      await assembleArtifact(
        dest,
        mode,
        path.join(directory, "legacy"),
        path.join(directory, "next")
      );
      for (const route of ROUTES)
        assert.ok(await readFile(path.join(dest, route, "index.html")));
      if (mode !== "legacy")
        for (const route of ROUTES)
          assert.ok(
            await readFile(path.join(dest, "app", route, "index.html"))
          );
      if (mode === "parallel") {
        assert.equal(
          await readFile(path.join(dest, "assets/app.js"), "utf8"),
          "legacy"
        );
        assert.equal(
          await readFile(path.join(dest, "app/assets/app.js"), "utf8"),
          "next"
        );
        const html = await readFile(path.join(dest, "404.html"), "utf8");
        const script = html.match(/<script>(.*?)<\/script>/s)[1];
        for (const [pathname, base] of [
          [`${NEXT_BASE}unknown`, NEXT_BASE],
          [`${LEGACY_BASE}unknown`, LEGACY_BASE],
        ]) {
          let rendered;
          vm.runInNewContext(script, {
            location: { pathname },
            document: {
              open() {},
              write(h) {
                rendered = h;
              },
              close() {},
            },
          });
          assert.ok(rendered.includes(`${base}assets/app.js`));
        }
      }
      if (mode === "forward")
        assert.ok(
          !(
            await readFile(path.join(dest, "admin/index.html"), "utf8")
          ).includes("assets/app.js")
        );
    }
  } finally {
    if (path.dirname(directory) !== path.resolve(os.tmpdir()) || !path.basename(directory).startsWith("hb-pages-test-")) throw new Error("Unsafe test cleanup path");
    await rm(directory, { recursive: true, force: true });
  }
});
