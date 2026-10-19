import { readFile, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import superjson from "superjson";
import { characterReferenceCatalog, characterReferenceFor } from "../../server/characterReference";
import { withCatalogPresentation, withPresentation } from "../../server/content/presentation";
import { contentManifest } from "../../server/content/repository";
import { digest, RELEASE_GAMES, validateDescriptor } from "../release-contract.mjs";

/**
 * forward モードの Pages artifact へ公開版descriptor（release.json）を生成する。
 * `scripts/pages.mjs --verify` で API 一致を確認し artifact を組み立てた後、upload 前に実行する。
 * 設計: docs/修正設計書_運用安定化と保守性改善_2026-10-19.md §5.7
 */

const root = fileURLToPath(new URL("../../", import.meta.url));
// 固定パス。任意パスへの書込引数は持たない。
export const ARTIFACT_DIRECTORY = path.join(root, "dist/pages-artifact");

/** API が返す値と同じ形（superjson の json 部分を JSON 往復した値）にそろえる。 */
function wireJson(value: unknown) {
  return JSON.parse(JSON.stringify(superjson.serialize(value).json));
}

export function releaseDescriptor(revision: string) {
  if (!/^[0-9a-f]{40}$/.test(revision)) throw new Error("A full release SHA is required");
  const catalog = characterReferenceCatalog();
  const probes = RELEASE_GAMES.map(game => {
    const name = catalog.games[game]?.[0]?.name;
    if (typeof name !== "string" || !name.trim()) throw new Error(`Release probe missing for ${game}`);
    const reference = characterReferenceFor(game, name);
    if (!reference) throw new Error(`Release probe has no reference for ${game}`);
    return { game, name, referenceDigest: digest(wireJson(withPresentation(reference))) };
  });
  if (new Set(probes.map(probe => `${probe.game}:${probe.name}`)).size !== probes.length) throw new Error("Duplicate release probe");
  return validateDescriptor({
    schemaVersion: 1,
    revision,
    contentRevision: contentManifest().contentRevision,
    mode: "forward",
    catalogDigest: digest(wireJson(withCatalogPresentation(catalog))),
    probes,
  });
}

/** CLI からは固定の artifact だけを対象にする。`directory` は試験で一時ディレクトリを渡すためだけに使う。 */
export async function writeReleaseDescriptor(env: NodeJS.ProcessEnv = process.env, directory = ARTIFACT_DIRECTORY) {
  const file = path.join(directory, "release.json");
  // forward 以外は descriptor を生成せず、以前の release.json を artifact に残さない。
  if (env.HOYOVERSE_PAGES_MODE !== "forward") {
    await rm(file, { force: true });
    return null;
  }
  if (!(await stat(directory).catch(() => null))?.isDirectory()) throw new Error("Pages artifact is missing");
  const descriptor = releaseDescriptor(env.GITHUB_SHA ?? "");
  await writeFile(file, `${JSON.stringify(descriptor, null, 2)}\n`);
  validateDescriptor(JSON.parse(await readFile(file, "utf8")));
  return descriptor;
}

if (process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url) {
  writeReleaseDescriptor().then(descriptor => {
    console.log(descriptor ? `Release descriptor ready (${descriptor.revision})` : "Release descriptor skipped (not forward)");
  }).catch(error => {
    console.error(error instanceof Error ? error.message : "Release descriptor failed");
    process.exitCode = 1;
  });
}
