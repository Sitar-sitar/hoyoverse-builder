import { test } from "node:test";
import assert from "node:assert/strict";
import { waitProductionApi } from "./wait-production-api.mjs";
const revision = "a".repeat(40),
  old = "b".repeat(40);
const health = (
  sha = revision,
  extra = {},
  cors = "https://sitar-sitar.github.io"
) =>
  new Response(
    JSON.stringify({
      ok: true,
      revision: sha,
      maintenance: false,
      migrationPreview: false,
      ...extra,
    }),
    { headers: { "access-control-allow-origin": cors } }
  );
function run(responses, extra = {}) {
  let time = 0,
    calls = 0;
  return waitProductionApi({
    baseUrl: "https://example.com",
    revision,
    timeoutMs: 30,
    intervalMs: 10,
    now: () => time,
    sleep: async ms => {
      time += ms;
    },
    fetcher: async () => {
      const response = responses[Math.min(calls++, responses.length - 1)];
      if (response instanceof Error) throw response;
      return response.clone();
    },
    log: () => {},
    ...extra,
  });
}
test("old revision then expected revision", () => run([health(old), health()]));
test("5xx and network retry", () =>
  run([new Response("", { status: 503 }), new Error("offline"), health()]));
test("deadline preserves old deployment", () =>
  assert.rejects(run([health(old)]), /deadline/));
for (const [name, response] of [
  ["maintenance", health(revision, { maintenance: true })],
  ["preview", health(revision, { migrationPreview: true })],
  ["revision", health("broken")],
  ["cors", health(revision, {}, "*")],
  ["json", new Response("bad")],
  ["ok", health(revision, { ok: false })],
])
  test(`rejects ${name}`, () => assert.rejects(run([response])));
test("pre-publication check rejects superseding SHA immediately", () =>
  assert.rejects(
    run([health(old), health()], { checkOnce: true }),
    /changed before publication/
  ));
test("pre-publication check rejects network failure immediately", () =>
  assert.rejects(
    run([new Error("offline"), health()], { checkOnce: true }),
    /unavailable before publication/
  ));
test("response after deadline cannot succeed", () =>
  assert.rejects(
    run([health()], {
      now: (() => {
        let calls = 0;
        return () => (++calls < 4 ? 0 : 31);
      })(),
    }),
    /deadline/
  ));
test("fractional monotonic clock still supplies an integer HTTP timeout", () => {
  let time = 0;
  return run([health()], {
    checkOnce: true,
    timeoutMs: 5000,
    now: () => (time += 0.125),
  });
});
test("validates expected SHA before requests", () =>
  assert.rejects(run([health()], { revision: "short" }), /full SHA/));
