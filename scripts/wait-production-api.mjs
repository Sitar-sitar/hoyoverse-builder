import { performance } from "node:perf_hooks";
import { pathToFileURL } from "node:url";

export async function waitProductionApi({
  baseUrl,
  revision,
  origin = "https://sitar-sitar.github.io",
  timeoutMs = 600000,
  intervalMs = 10000,
  checkOnce = false,
  fetcher = fetch,
  now = () => performance.now(),
  sleep = ms => new Promise(resolve => setTimeout(resolve, ms)),
  log = console.log,
}) {
  if (!/^[0-9a-f]{40}$/.test(revision ?? ""))
    throw new Error("Expected revision must be a full SHA");
  const url = new URL("/api/health", baseUrl);
  if (url.protocol !== "https:" && url.hostname !== "127.0.0.1")
    throw new Error("Invalid API URL");
  const start = now();
  while (now() - start < timeoutMs) {
    let response;
    try {
      response = await fetcher(url, {
        headers: { Origin: origin },
        signal: AbortSignal.timeout(
          Math.min(5000, Math.max(1, timeoutMs - (now() - start)))
        ),
      });
    } catch {
      log("API transport pending");
    }
    if (response) {
      if (response.status >= 500) log(`API pending: HTTP ${response.status}`);
      else {
        if (response.status !== 200)
          throw new Error(`API rejected: HTTP ${response.status}`);
        let health;
        try {
          health = await response.json();
        } catch {
          throw new Error("Invalid health JSON");
        }
        if (
          !health ||
          !/^[0-9a-f]{40}$/.test(health.revision ?? "") ||
          health.ok !== true ||
          health.maintenance !== false ||
          health.migrationPreview !== false
        )
          throw new Error("Invalid health contract");
        if (response.headers.get("access-control-allow-origin") !== origin)
          throw new Error("Invalid Pages CORS");
        if (now() - start >= timeoutMs) break;
        if (health.revision === revision) {
          log(`API ready: ${revision}`);
          return;
        }
        if (checkOnce)
          throw new Error("API revision changed before publication");
        log("API previous revision pending");
      }
    }
    if (checkOnce) throw new Error("API unavailable before publication");
    const remaining = timeoutMs - (now() - start);
    if (remaining <= 0) break;
    await sleep(Math.min(intervalMs, remaining));
  }
  throw new Error("API deployment deadline exceeded");
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  if (process.env.HOYOVERSE_PAGES_MODE !== "forward") process.exit(0);
  waitProductionApi({
    baseUrl: process.env.HOYOVERSE_NORTHFLANK_API_BASE_URL,
    revision: process.env.GITHUB_SHA,
    ...(process.argv.includes("--check-once")
      ? { timeoutMs: 5000, checkOnce: true }
      : {}),
  }).catch(error => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
