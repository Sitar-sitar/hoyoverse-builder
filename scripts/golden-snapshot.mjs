/**
 * キャラクターデータ API 面のゴールデンスナップショット。
 *
 * 使い方（リポジトリ直下から。TypeScript を直接 import するため tsx 経由で実行する）:
 *   corepack pnpm exec tsx scripts/golden-snapshot.mjs snapshot            # tmp/golden/baseline.json を書き出す
 *   corepack pnpm exec tsx scripts/golden-snapshot.mjs compare             # 現在値と baseline を比較（差分があれば exit 1）
 *   corepack pnpm exec tsx scripts/golden-snapshot.mjs compare --refresh catalogConstellations,referenceConstellations
 *                                                                          # 指定セクションだけ比較を省略し、比較後に baseline を更新する
 *   corepack pnpm exec tsx scripts/golden-snapshot.mjs check-r8            # 図鑑の凸が UID照会経路と一致するかを検査（R8 の受入判定）
 *   corepack pnpm exec tsx scripts/golden-snapshot.mjs compare --allow hsr:御空,genshin:ノエル
 *                                                                          # 指定キャラクターのキーだけ差分を許容する（データ更新の締め用）
 *
 * 目的: リファクタリング前後で公開 API が返すキャラクターデータ（台帳・履歴・図鑑・推奨PT・凸・
 * メタデータ・ガイド）が 1 バイトも変わっていないことを機械的に確認する。外部ネットワークは使わない。
 * このファイルは import されても副作用を持たない（CLI は main() に閉じ、直接実行時だけ動く）。
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const GAMES = ["hsr", "genshin", "zzz"];
const load = (relative) => import(pathToFileURL(resolve(relative)).href);
const stable = (value) => JSON.stringify(value);

/** 同名複数IDは「派生ID（"-" 付き）を除いた最初の出現」を採用し、基礎実装の採用IDだけ明示で上書きする。 */
const CATALOG_SOURCE_ID_TIEBREAK = { "hsr:三月なのか": "1001", "genshin:旅人": "10000005", "genshin:イネファ": "10000116" };

function sourceIdIndex(identities) {
  const index = new Map();
  for (const entry of identities.ACTIVE_CATALOG_IDENTITIES) {
    if (String(entry.sourceId).includes("-")) continue;
    const key = `${entry.game}:${entry.providerName}`;
    if (!index.has(key)) index.set(key, String(entry.sourceId));
  }
  for (const [key, sourceId] of Object.entries(CATALOG_SOURCE_ID_TIEBREAK)) index.set(key, sourceId);
  return index;
}

const identityFrom = (index, game, name) => {
  const sourceId = index.get(`${game}:${name}`) ?? name;
  return { game, sourceId, key: `${game}:${sourceId}`, displayName: name, variantOf: null, resolved: true, resolution: "provider" };
};

export async function collect() {
  const [catalog, ledgerModule, historyModule, referenceModule, partyModule, constellationModule, identities, metadataModule, profilesModule, buildAdvisor, providers] = await Promise.all([
    load("server/characterGuideCatalog.ts"),
    load("server/characterUpdateLedger.ts"),
    load("server/guideUpdateHistory.ts"),
    load("server/characterReference.ts"),
    load("server/partyRecommendations.ts"),
    load("server/characterConstellations.ts"),
    load("server/fixtures/identityCatalogSnapshot.ts"),
    load("server/characterGuideMetadata.ts"),
    load("server/expectedGuideProfiles.ts"),
    load("server/buildAdvisor.ts"),
    load("server/gameProviders.ts"),
  ]);
  const { CHARACTER_GUIDE_CATALOG, HSR_RUNTIME_PATHS, ZZZ_RUNTIME_PROFESSIONS } = catalog;
  const names = GAMES.flatMap((game) => CHARACTER_GUIDE_CATALOG[game].map((name) => ({ game, name, key: `${game}:${name}` })));
  const index = sourceIdIndex(identities);
  const byKey = (fn) => Object.fromEntries(names.map((entry) => [entry.key, fn(entry)]));
  const references = byKey((entry) => referenceModule.characterReferenceFor(entry.game, entry.name));

  return {
    ledger: ledgerModule.characterUpdateLedger(),
    history: historyModule.guideUpdateHistory(),
    referenceCatalog: referenceModule.characterReferenceCatalog(),
    // 図鑑応答は「凸以外」と「凸」に分けて保持する。R8 で許可する差分は referenceConstellations だけで、
    // referenceCore（guide / partyRecommendations / status / batch）は R8 でも一致必須にする。
    referenceCore: Object.fromEntries(Object.entries(references).map(([key, value]) => {
      if (value === null || value === undefined) return [key, null];
      const { constellations, ...rest } = value;
      return [key, rest];
    })),
    referenceConstellations: Object.fromEntries(Object.entries(references).map(([key, value]) => [key, value?.constellations ?? null])),
    parties: byKey((entry) => partyModule.partyRecommendationsFor(entry.game, entry.name)),
    idConstellations: byKey((entry) => [0, 6].map((rank) => constellationModule.constellationProfileFor(identityFrom(index, entry.game, entry.name), rank))),
    catalogConstellations: byKey((entry) => [0, 6].map((rank) => constellationModule.constellationProfileForCatalogName(entry.game, entry.name, rank))),
    metadata: metadataModule.CHARACTER_GUIDE_METADATA,
    expectedProfiles: byKey((entry) => profilesModule.expectedProfileFor(entry.game, entry.name)),
    guides: byKey((entry) => entry.game === "hsr"
      ? buildAdvisor.guideFor(entry.name, HSR_RUNTIME_PATHS[entry.name] ?? "")
      : entry.game === "genshin"
        ? providers.genshinGuide(entry.name)
        : providers.zzzGuide(entry.name, ZZZ_RUNTIME_PROFESSIONS[entry.name] ?? "Attack")),
  };
}

/**
 * R8 の受入判定。図鑑（characterReferenceFor）が返す凸が、UID照会経路と同じ解決結果
 * （第15バッチの上書きは 2026-09-10 に撤去済みのため常に ID 経路）と一致するかを全248名で検査する。
 */
export async function checkR8() {
  const [catalog, referenceModule, constellationModule, identities] = await Promise.all([
    load("server/characterGuideCatalog.ts"),
    load("server/characterReference.ts"),
    load("server/characterConstellations.ts"),
    load("server/fixtures/identityCatalogSnapshot.ts"),
  ]);
  const index = sourceIdIndex(identities);
  const mismatches = [];
  const notCurated = [];
  const unresolvedNames = [];
  let total = 0;
  for (const game of GAMES) {
    for (const name of catalog.CHARACTER_GUIDE_CATALOG[game]) {
      total += 1;
      const key = `${game}:${name}`;
      if (!index.has(key)) unresolvedNames.push(key);
      const actual = referenceModule.characterReferenceFor(game, name)?.constellations ?? null;
      const expected = constellationModule.constellationProfileFor(identityFrom(index, game, name), 0);
      if (stable(actual) !== stable(expected)) mismatches.push(key);
      if (actual?.dataStatus !== "curated") notCurated.push(key);
    }
  }
  return { total, mismatches, notCurated, unresolvedNames };
}

async function main() {
  const args = process.argv.slice(2);
  const mode = args[0];
  const opt = (name) => {
    const at = args.indexOf(`--${name}`);
    return at >= 0 ? args[at + 1] : undefined;
  };
  const baselinePath = resolve(opt("out") ?? "tmp/golden/baseline.json");
  const refresh = new Set((opt("refresh") ?? "").split(",").filter(Boolean));
  // データ更新の締めで「更新した名前だけが変わったか」を見るためのキー単位の許容リスト。
  const allow = new Set((opt("allow") ?? "").split(",").map((entry) => entry.trim()).filter(Boolean));

  if (mode === "snapshot") {
    const sections = await collect();
    mkdirSync(dirname(baselinePath), { recursive: true });
    writeFileSync(baselinePath, JSON.stringify(sections), "utf8");
    console.log(`snapshot: ${baselinePath} (${Object.keys(sections).join(", ")})`);
    return;
  }

  if (mode === "check-r8") {
    const report = await checkR8();
    const reportPath = resolve(opt("report") ?? "tmp/golden/r8-check.json");
    mkdirSync(dirname(reportPath), { recursive: true });
    writeFileSync(reportPath, JSON.stringify(report, null, 2), "utf8");
    console.log(`check-r8: total ${report.total} / catalog-id mismatch ${report.mismatches.length} / not curated ${report.notCurated.length} / name unresolved ${report.unresolvedNames.length}`);
    console.log(`mismatch(head): ${report.mismatches.slice(0, 10).join(", ") || "(none)"}`);
    console.log(`not curated: ${report.notCurated.length <= 10 ? report.notCurated.join(", ") || "(none)" : `${report.notCurated.slice(0, 10).join(", ")} ほか`}`);
    console.log(`report: ${reportPath}`);
    process.exit(report.mismatches.length === 0 ? 0 : 1);
  }

  if (mode !== "compare") {
    console.error("usage: golden-snapshot.mjs <snapshot|compare|check-r8> [--out <path>] [--refresh <section,...>] [--allow <game:name,...>] [--report <path>]");
    process.exit(2);
  }

  if (!existsSync(baselinePath)) {
    console.error(`baseline が無い: ${baselinePath}（先に snapshot を実行する）`);
    process.exit(2);
  }
  const baseline = JSON.parse(readFileSync(baselinePath, "utf8"));
  const current = await collect();
  const failures = [];
  for (const section of Object.keys(current)) {
    if (refresh.has(section)) {
      console.log(`skip (refresh): ${section}`);
      continue;
    }
    if (!(section in baseline)) {
      failures.push(`${section}: baseline に無い`);
      continue;
    }
    if (stable(current[section]) === stable(baseline[section])) {
      console.log(`ok: ${section}`);
      continue;
    }
    const detail = [];
    const keyed = current[section] && typeof current[section] === "object" && !Array.isArray(current[section]);
    if (keyed) {
      for (const key of new Set([...Object.keys(current[section]), ...Object.keys(baseline[section] ?? {})])) {
        if (stable(current[section][key]) !== stable(baseline[section]?.[key])) detail.push(key);
      }
    }
    // --allow は「キーがキャラクター名のセクション」にだけ効く。metadata / ledger / history は
    // セクション単位の比較のままにして、更新対象以外が動いていないかを人が確認する。
    const notAllowed = keyed && allow.size > 0 ? detail.filter((key) => !allow.has(key)) : detail;
    if (keyed && allow.size > 0 && notAllowed.length === 0) {
      console.log(`ok (allow): ${section}（許容した差分 ${detail.length}件）`);
      continue;
    }
    failures.push(`${section}: 差分あり${notAllowed.length ? `（${notAllowed.length}件: ${notAllowed.slice(0, 8).join(", ")}${notAllowed.length > 8 ? " ほか" : ""}）` : ""}`);
  }
  if (failures.length > 0) {
    // 差分がある場合は baseline を書き換えずに終了する（許可していない差分を承認しないため）。
    console.error(failures.map((line) => `NG ${line}`).join("\n"));
    process.exit(1);
  }
  if (refresh.size > 0) {
    for (const section of refresh) baseline[section] = current[section];
    writeFileSync(baselinePath, JSON.stringify(baseline), "utf8");
    console.log(`refreshed: ${[...refresh].join(", ")}`);
  }
  console.log("golden compare: all sections equal");
}

const invokedDirectly = process.argv[1] !== undefined && pathToFileURL(resolve(process.argv[1])).href === import.meta.url;
if (invokedDirectly) await main();
