/**
 * server/fixtures/identityCatalogSnapshot.ts を公開メタデータから再生成する。
 *
 * 使い方（リポジトリ直下から）:
 *   corepack pnpm exec tsx scripts/audit/refresh-identity-snapshot.mjs           # 差分表示のみ（ファイルは変えない）
 *   corepack pnpm exec tsx scripts/audit/refresh-identity-snapshot.mjs --write   # 書き換える（実行後に corepack pnpm test が必須）
 *
 * 保持するフィールドは game / sourceId / providerName / portrait の4つ（設計書 §4.1.4）。
 * element / weaponType の追加は、原神の同役割候補を出さない決定（§10-2）で不要になったため行わない。
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const args = process.argv.slice(2);
const write = args.includes("--write");
const repo = process.cwd();
const fixturePath = join(repo, "server", "fixtures", "identityCatalogSnapshot.ts");
const load = (relative) => import(pathToFileURL(join(repo, relative)).href);

const ENDPOINTS = {
  hsr: "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/index_new/jp/characters.json",
  genshinCharacters: "https://api.enka.network/store/characters.json",
  genshinLoc: "https://api.enka.network/store/loc.json",
  zzzAvatars: "https://api.enka.network/store/zzz/avatars.json",
  zzzLocs: "https://api.enka.network/store/zzz/locs.json",
};

/** 名前・画像が空の原神レコードは取得元の欠番のため除外する（現行スナップショットの方針を維持）。 */
const EXCLUDED_EMPTY_GENSHIN = (entry) => !entry.providerName || !entry.portrait;

async function fetchJson(url) {
  const response = await fetch(url, { headers: { "User-Agent": "hoyoverse-identity-refresh/1.0 (personal-use)" } });
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return response.json();
}

async function collect() {
  const rows = [];
  const [hsr, giCharacters, giLoc, zzzAvatars, zzzLocs] = await Promise.all([
    fetchJson(ENDPOINTS.hsr),
    fetchJson(ENDPOINTS.genshinCharacters),
    fetchJson(ENDPOINTS.genshinLoc),
    fetchJson(ENDPOINTS.zzzAvatars),
    fetchJson(ENDPOINTS.zzzLocs),
  ]);

  for (const [sourceId, entry] of Object.entries(hsr)) {
    const providerName = String(entry?.name ?? "");
    if (!providerName) continue;
    rows.push({ game: "hsr", sourceId, providerName, portrait: `https://enka.network/ui/hsr/SpriteOutput/AvatarRoundIcon/Avatar/${sourceId}.png` });
  }

  const giJa = giLoc?.ja ?? {};
  for (const [sourceId, entry] of Object.entries(giCharacters)) {
    const providerName = String(giJa[String(entry?.NameTextMapHash ?? "")] ?? "");
    const icon = String(entry?.SideIconName ?? "");
    const portrait = icon ? `https://enka.network/ui/${icon.replace("_Side", "")}.png` : "";
    const row = { game: "genshin", sourceId, providerName, portrait };
    if (EXCLUDED_EMPTY_GENSHIN(row) || /^\{.*\}$/.test(providerName)) continue;
    rows.push(row);
  }

  const zzzJa = zzzLocs?.ja ?? {};
  for (const [sourceId, entry] of Object.entries(zzzAvatars)) {
    const providerName = String(zzzJa[String(entry?.Name ?? "")] ?? "");
    if (!providerName) continue;
    rows.push({ game: "zzz", sourceId, providerName, portrait: String(entry?.Image ?? "") });
  }
  return rows;
}

const current = (await load("server/fixtures/identityCatalogSnapshot.ts")).ACTIVE_CATALOG_IDENTITIES;
const currentByKey = new Map(current.map((entry) => [`${entry.game}:${entry.sourceId}`, entry]));

let remote;
try {
  remote = await collect();
} catch (error) {
  console.error(`公開メタデータを取得できなかったため中断する: ${error.message}`);
  process.exit(2);
}
const remoteByKey = new Map(remote.map((entry) => [`${entry.game}:${entry.sourceId}`, entry]));

const added = remote.filter((entry) => !currentByKey.has(`${entry.game}:${entry.sourceId}`));
const removed = current.filter((entry) => !remoteByKey.has(`${entry.game}:${entry.sourceId}`));
const renamed = remote
  .map((entry) => ({ entry, before: currentByKey.get(`${entry.game}:${entry.sourceId}`) }))
  .filter(({ entry, before }) => before && before.providerName !== entry.providerName);

console.log(`# identity スナップショット差分（現行 ${current.length}件 / 取得 ${remote.length}件）`);
console.log("");
console.log(`## 新しいID（${added.length}件）`);
if (added.length === 0) console.log("- なし");
for (const entry of added) {
  // 既存カタログ名を含む名称は派生（衣装・お試し・別実装）候補として分ける。
  const kind = current.some((known) => known.game === entry.game && entry.providerName.includes(known.providerName)) ? "派生候補" : "新規候補";
  console.log(`- [${kind}] ${entry.game}:${entry.sourceId} ${entry.providerName}`);
}
console.log("");
console.log(`## 改名（${renamed.length}件）`);
if (renamed.length === 0) console.log("- なし");
for (const { entry, before } of renamed) console.log(`- ${entry.game}:${entry.sourceId} ${before.providerName} → ${entry.providerName}`);
console.log("");
console.log(`## 取得元から消えたID（${removed.length}件）`);
if (removed.length === 0) console.log("- なし");
for (const entry of removed) console.log(`- ${entry.game}:${entry.sourceId} ${entry.providerName}`);

if (!write) {
  console.log("");
  console.log("（差分表示のみ。書き換えるには --write を付ける。書き換え後は corepack pnpm test を必ず実行する）");
  process.exit(0);
}

const source = readFileSync(fixturePath, "utf8");
const header = source.slice(0, source.indexOf("export const ACTIVE_CATALOG_IDENTITIES"));
const body = `export const ACTIVE_CATALOG_IDENTITIES: CatalogIdentityFixture[] = ${JSON.stringify(remote)};\n`;
writeFileSync(fixturePath, header + body, "utf8");
console.log("");
console.log(`書き換えた: ${fixturePath}（${remote.length}件）`);
console.log("次に corepack pnpm test を実行して索引テストが通ることを確認する。");
