import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

export const LEGACY_BASE = "/hoyoverse-builder/";
export const NEXT_BASE = `${LEGACY_BASE}app/`;
export const ROUTES = [
  "",
  "characters",
  "updates",
  "feedback",
  "admin",
  "admin/feedback",
  "admin/display",
];
const origin = "https://sitar-sitar.github.io";
const root = fileURLToPath(new URL("../", import.meta.url));

export function apiUrl(value) {
  if (!value || value !== value.trim())
    throw new Error("API base URL is required");
  const url = new URL(value);
  if (
    url.protocol !== "https:" ||
    url.username ||
    url.password ||
    url.pathname !== "/" ||
    url.search ||
    url.hash ||
    url.port
  )
    throw new Error("API base URL must be a plain HTTPS origin");
  return url.origin;
}

export function buildPlan(env) {
  const mode = env.HOYOVERSE_PAGES_MODE;
  if (!["legacy", "parallel", "forward", "rollback"].includes(mode))
    throw new Error(
      "HOYOVERSE_PAGES_MODE must be legacy, parallel, forward or rollback"
    );
  const plans = [];
  if (mode !== "forward")
    plans.push({
      base: LEGACY_BASE,
      output: "dist/pages-legacy",
      api: apiUrl(env.HOYOVERSE_API_BASE_URL),
      preview: false,
    });
  if (mode === "parallel" || mode === "forward")
    plans.push({
      base: NEXT_BASE,
      output: "dist/pages-next",
      api: apiUrl(env.HOYOVERSE_NORTHFLANK_API_BASE_URL),
      preview: mode === "parallel",
    });
  return { mode, plans };
}

export async function verifyApi(plan, revision, fetcher = fetch) {
  if (!/^[a-f0-9]{40}$/.test(revision ?? ""))
    throw new Error("A full release SHA is required");
  const request = async endpoint => {
    const response = await fetcher(`${plan.api}${endpoint}`, {
      headers: { Origin: origin },
      redirect: "error",
      signal: AbortSignal.timeout(15000),
    });
    if (
      !response.ok ||
      response.headers.get("access-control-allow-origin") !== origin
    )
      throw new Error("API HTTP/CORS gate failed");
    return response.json();
  };
  const health = await request("/api/health");
  if (
    health.ok !== true ||
    health.maintenance !== false ||
    health.revision !== revision ||
    health.migrationPreview !== plan.preview
  )
    throw new Error("API revision/maintenance/preview gate failed");
  const rpc = await request("/api/trpc/build.guideHistory");
  if (!rpc?.result?.data || rpc.error)
    throw new Error("guideHistory RPC gate failed");
}

export function redirectTarget(pathname, from, to) {
  const normalized = pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  if (
    from === LEGACY_BASE &&
    (pathname === NEXT_BASE.slice(0, -1) || pathname.startsWith(NEXT_BASE))
  )
    return null;
  const route = ROUTES.find(
    route => normalized === `${from}${route}`.replace(/\/$/, "")
  );
  return route === undefined ? null : `${to}${route}${route ? "/" : ""}`;
}

export function redirectHtml(from, to, route) {
  const target = route === undefined ? to : `${to}${route}${route ? "/" : ""}`;
  return `<!doctype html><html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>サイトの移転 / Site moved</title><link rel="canonical" href="${origin}${target}"></head><body><p>移転先を開く / Open the current site / 打开当前网站</p><a href="${target}">${origin}${target}</a><script>const resolve=${redirectTarget.toString()};const ROUTES=${JSON.stringify(ROUTES)};const LEGACY_BASE=${JSON.stringify(LEGACY_BASE)};const NEXT_BASE=${JSON.stringify(NEXT_BASE)};const target=resolve(location.pathname,${JSON.stringify(from)},${JSON.stringify(to)});if(target)location.replace(target);</script></body></html>`;
}

export async function spaRoutes(directory) {
  const html = await readFile(path.join(directory, "index.html"), "utf8");
  for (const route of ROUTES.filter(Boolean)) {
    await mkdir(path.join(directory, route), { recursive: true });
    await writeFile(path.join(directory, route, "index.html"), html);
  }
  await writeFile(path.join(directory, "404.html"), html);
}

async function writeRedirects(directory, from, to) {
  for (const route of ROUTES) {
    await mkdir(path.join(directory, route), { recursive: true });
    await writeFile(
      path.join(directory, route, "index.html"),
      redirectHtml(from, to, route)
    );
  }
  await writeFile(path.join(directory, "404.html"), redirectHtml(from, to));
}

export async function assembleArtifact(directory, mode, legacy, next) {
  if (mode !== "forward") await cp(legacy, directory, { recursive: true });
  if (mode === "parallel" || mode === "forward")
    await cp(next, path.join(directory, "app"), { recursive: true });
  if (mode === "forward")
    await writeRedirects(directory, LEGACY_BASE, NEXT_BASE);
  if (mode === "rollback")
    await writeRedirects(path.join(directory, "app"), NEXT_BASE, LEGACY_BASE);
  if (mode === "parallel") {
    // Pages has one root 404. Pick the correct SPA without carrying tokens across bases.
    const oldHtml = await readFile(path.join(directory, "index.html"), "utf8");
    const nextHtml = await readFile(
      path.join(directory, "app/index.html"),
      "utf8"
    );
    const code = `const next=location.pathname===${JSON.stringify(NEXT_BASE.slice(0, -1))}||location.pathname.startsWith(${JSON.stringify(NEXT_BASE)});const html=next?${JSON.stringify(nextHtml).replaceAll("<", "\\u003c")}:${JSON.stringify(oldHtml).replaceAll("<", "\\u003c")};document.open();document.write(html);document.close();`;
    await writeFile(
      path.join(directory, "404.html"),
      `<!doctype html><html><head><meta charset="utf-8"><meta name="robots" content="noindex"></head><body><script>${code}</script><noscript><a href="${LEGACY_BASE}">Current site</a> / <a href="${NEXT_BASE}">Preview site</a></noscript></body></html>`
    );
  }
}

async function main() {
  const { mode, plans } = buildPlan(process.env);
  const app = await readFile(path.join(root, "client/src/App.tsx"), "utf8");
  const declared = [...app.matchAll(/path=\{"([^"}]+)"\}/g)]
    .map(match => match[1].slice(1))
    .filter(route => route !== "404");
  if (declared.some(route => !ROUTES.includes(route)))
    throw new Error("A client route is missing from the Pages route manifest");
  if (process.argv.includes("--verify")) {
    for (const plan of plans) await verifyApi(plan, process.env.GITHUB_SHA);
  }
  for (const plan of plans) {
    const result = spawnSync(
      process.execPath,
      [
        path.join(root, "node_modules/vite/bin/vite.js"),
        "build",
        "--config",
        "vite.pages.config.ts",
      ],
      {
        cwd: root,
        stdio: "inherit",
        env: {
          ...process.env,
          PAGES_BASE_PATH: plan.base,
          PAGES_OUTPUT_DIR: plan.output,
          VITE_API_BASE_URL: plan.api,
          VITE_MIGRATION_PREVIEW: String(plan.preview),
        },
      }
    );
    if (result.status !== 0) throw new Error("Pages build failed");
    await spaRoutes(path.join(root, plan.output));
  }
  // Fixed destination inside this repository; never accept an output path from the caller.
  const directory = path.join(root, "dist/pages-artifact");
  if (path.dirname(directory) !== path.join(root, "dist"))
    throw new Error("Unsafe artifact directory");
  await rm(directory, { recursive: true, force: true });
  await mkdir(directory, { recursive: true });
  await assembleArtifact(
    directory,
    mode,
    path.join(root, "dist/pages-legacy"),
    path.join(root, "dist/pages-next")
  );
  console.log(`Pages artifact ready (${mode})`);
}

if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
)
  main().catch(error => {
    console.error(error.message);
    process.exitCode = 1;
  });
