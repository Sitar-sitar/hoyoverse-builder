/**
 * 全キャラクターの整備状況を監査する（読み取り専用）。
 *
 * 使い方（リポジトリ直下から）:
 *   corepack pnpm exec tsx scripts/audit/audit-characters.mjs [--offline] [--json] [--out <path>] [--stale-days 180] [--today YYYY-MM-DD]
 *
 * 判定は server/auditRules.ts（純関数・vitest で保護）に集約し、このスクリプトは
 * 外部メタデータの取得と整形だけを持つ（設計書 §4.1.1）。
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const args = process.argv.slice(2);
const flag = (name) => args.includes(`--${name}`);
const opt = (name, fallback = null) => {
  const at = args.indexOf(`--${name}`);
  return at >= 0 && args[at + 1] && !args[at + 1].startsWith("--") ? args[at + 1] : fallback;
};

const repo = process.cwd();
const staleDays = Number(opt("stale-days", "180"));
const today = opt("today", new Date().toISOString().slice(0, 10));
const offline = flag("offline");
const outPath = opt("out");

const ENDPOINTS = {
  hsr: "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/index_new/jp/characters.json",
  genshinCharacters: "https://api.enka.network/store/characters.json",
  genshinLoc: "https://api.enka.network/store/loc.json",
  zzzAvatars: "https://api.enka.network/store/zzz/avatars.json",
  zzzLocs: "https://api.enka.network/store/zzz/locs.json",
};
const GAME_LABEL = { hsr: "HSR", genshin: "原神", zzz: "ZZZ" };
const warnings = [];
const load = (relative) => import(pathToFileURL(join(repo, relative)).href);

const [rules, catalogModule, ledgerModule, aliases, impact] = await Promise.all([
  load("server/auditRules.ts"),
  load("server/characterGuideCatalog.ts"),
  load("server/characterUpdateLedger.ts"),
  load("server/partyMemberAliases.ts"),
  load("server/partyImpact.ts"),
]);
const { AUDIT_GAMES: GAMES } = rules;
const { CHARACTER_GUIDE_CATALOG } = catalogModule;
const ledger = ledgerModule.characterUpdateLedger();

async function fetchJson(url) {
  const response = await fetch(url, { headers: { "User-Agent": "hoyoverse-character-audit/2.0 (personal-use)" } });
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return response.json();
}

/** ゲーム側の実装済みキャラクター名（日本語）を外部公開メタデータから取得する。 */
async function fetchLiveNames() {
  const live = {};
  try {
    const remote = await fetchJson(ENDPOINTS.hsr);
    live.hsr = Object.entries(remote)
      .filter(([id]) => !id.startsWith("8")) // 開拓者は名称がユーザー依存のためカタログ対象外
      .map(([, entry]) => String(entry?.name ?? ""))
      .filter(Boolean);
  } catch (error) {
    warnings.push(`HSRメタデータを取得できなかった: ${error.message}`);
  }
  try {
    const [remote, loc] = await Promise.all([fetchJson(ENDPOINTS.genshinCharacters), fetchJson(ENDPOINTS.genshinLoc)]);
    const ja = loc?.ja ?? {};
    live.genshin = Object.values(remote)
      .map((entry) => String(ja[String(entry?.NameTextMapHash ?? "")] ?? ""))
      .filter((name) => name && !/^\{.*\}$/.test(name));
  } catch (error) {
    warnings.push(`原神メタデータを取得できなかった: ${error.message}`);
  }
  try {
    const [avatars, locs] = await Promise.all([fetchJson(ENDPOINTS.zzzAvatars), fetchJson(ENDPOINTS.zzzLocs)]);
    const ja = locs?.ja ?? {};
    live.zzz = Object.values(avatars).map((entry) => String(ja[String(entry?.Name ?? "")] ?? "")).filter(Boolean);
  } catch (error) {
    warnings.push(`ZZZメタデータを取得できなかった: ${error.message}`);
  }
  return live;
}

function liveDiff(live) {
  const diff = {};
  for (const game of GAMES) {
    if (!live[game]) continue;
    const known = new Map(CHARACTER_GUIDE_CATALOG[game].map((name) => [aliases.normalizeMemberName(name), name]));
    const remote = new Map(live[game].map((name) => [aliases.normalizeMemberName(name), name]));
    diff[game] = {
      missing: [...remote].filter(([key]) => !known.has(key)).map(([, name]) => name),
      extra: [...known].filter(([key]) => !remote.has(key)).map(([, name]) => name),
    };
  }
  return diff;
}

/** 台帳・根拠メモ・公開ドキュメントの整合性（ファイル存在の確認はここに残す）。 */
function integrityIssues(records) {
  const issues = [];
  const batches = [...new Set(records.map((record) => record.batch).filter((batch) => batch !== null))].sort((a, b) => a - b);
  for (const batch of batches) {
    if (!existsSync(join(repo, "docs", `batch-${batch}-research-notes.md`))) {
      issues.push(`第${batch}バッチの根拠メモ docs/batch-${batch}-research-notes.md が無い（台帳の必須完了条件1に違反）`);
    }
  }
  const ledgerDoc = join(repo, "docs", "all-character-update-ledger.md");
  if (!existsSync(ledgerDoc)) {
    issues.push("docs/all-character-update-ledger.md が無い");
  } else {
    const text = readFileSync(ledgerDoc, "utf8");
    const latest = batches[batches.length - 1];
    if (latest && !text.includes(`第${latest}バッチ`)) issues.push(`docs/all-character-update-ledger.md が第${latest}バッチを記載していない（コード側台帳と乖離）`);
    if (!text.includes(String(ledger.reviewed))) issues.push(`docs/all-character-update-ledger.md の集計がコード側（精査済み${ledger.reviewed}/${ledger.total}）と一致しない`);
  }
  const staleMetadata = records.filter((record) => record.status === "reviewed" && record.metadataUpdatedAt === CHARACTER_GUIDE_CATALOG.dataAsOf);
  if (staleMetadata.length > 0) {
    issues.push(`精査済みだが characterGuideMetadata.ts の updatedAt が基準日 ${CHARACTER_GUIDE_CATALOG.dataAsOf} のまま: ${staleMetadata.length}名（${staleMetadata.slice(0, 6).map((record) => record.name).join("、")}${staleMetadata.length > 6 ? " ほか" : ""}）`);
  }
  const reviewedGeneric = records.filter((record) => record.status === "reviewed" && record.guideKind === "role-generic");
  if (reviewedGeneric.length > 0) {
    issues.push(`台帳では精査済みだがガイドが役割共通値のまま: ${reviewedGeneric.length}名（${reviewedGeneric.slice(0, 6).map((record) => record.name).join("、")}${reviewedGeneric.length > 6 ? " ほか" : ""}）`);
  }
  const unknownMembers = rules.memberResolutionSummary().unknown;
  if (unknownMembers.length > 0) {
    issues.push(`推奨PTのメンバー名を解決できない: ${unknownMembers.length}件（${unknownMembers.slice(0, 6).map((entry) => `${GAME_LABEL[entry.game]} ${entry.name}`).join("、")}）。server/partyMemberAliases.ts へ分類を追加する`);
  }
  return issues;
}

const records = rules.auditRecords(today);
const diff = liveDiff(offline ? {} : await fetchLiveNames());
const issues = integrityIssues(records);
const routeMismatches = rules.routeMismatches();
const memberResolution = rules.memberResolutionSummary();

const missingEntries = GAMES.flatMap((game) => (diff[game]?.missing ?? []).map((name) => ({ game, name, kind: rules.classifyMissingName(game, name) })));
const newCharacters = missingEntries.filter((entry) => entry.kind === "new").map(({ game, name }) => ({ game, name }));
const derivedCharacters = missingEntries.filter((entry) => entry.kind === "derived");

// P0 ごとに「既に言及している推奨PT」の件数を添える（影響レビュー待ちの規模）。
const impactCounts = new Map();
for (const entry of newCharacters) {
  impactCounts.set(`${entry.game}:${entry.name}`, impact.partyImpactFor(entry.game, entry.name).mentioned.length);
}

const priorities = rules.prioritize(records, { staleDays, newCharacters });
const proposed = rules.proposedNext(priorities);

const summary = {
  today,
  repo,
  catalogAsOf: CHARACTER_GUIDE_CATALOG.dataAsOf,
  total: ledger.total,
  reviewed: ledger.reviewed,
  pending: ledger.pending,
  byGame: ledger.byGame,
  counts: {
    p0: newCharacters.length,
    p1: priorities[1].items.length,
    p2: priorities[2].items.length,
    p3: priorities[3].items.length,
    integrity: issues.length,
    routeMismatches: routeMismatches.length,
    unknownMembers: memberResolution.unknown.length,
    upcomingMentions: memberResolution.upcoming.length,
  },
  nextBatchId: ledger.nextBatch.id,
};

function markdown() {
  const lines = [`# 全キャラクター更新監査 ${today}`, ""];
  lines.push(`- 対象: \`${repo}\`（カタログ基準日 ${summary.catalogAsOf}）`);
  lines.push(`- 進捗: 精査済み **${summary.reviewed}/${summary.total}**、未精査 ${summary.pending}`);
  lines.push(`- 外部メタデータ照合: ${offline ? "スキップ（--offline）" : "実施"}`, "");
  lines.push("| ゲーム | 対象 | 精査済み | 未精査 |", "|---|---:|---:|---:|");
  for (const game of GAMES) lines.push(`| ${GAME_LABEL[game]} | ${summary.byGame[game].total} | ${summary.byGame[game].reviewed} | ${summary.byGame[game].pending} |`);

  lines.push("", "## 優先度別の要更新キャラクター", "");
  for (const bucket of priorities) {
    lines.push(`### ${bucket.id} ${bucket.title}（${bucket.items.length}名）`, "");
    if (bucket.items.length === 0) {
      lines.push("該当なし", "");
      continue;
    }
    const withImpact = bucket.id === "P0";
    lines.push(withImpact ? "| ゲーム | キャラクター | 理由 | 影響レビュー待ち |" : "| ゲーム | キャラクター | 理由 |", withImpact ? "|---|---|---|---:|" : "|---|---|---|");
    for (const item of bucket.items.slice(0, 40)) {
      const impactCount = impactCounts.get(`${item.game}:${item.name}`);
      lines.push(withImpact
        ? `| ${GAME_LABEL[item.game]} | ${item.name} | ${item.reason} | 言及済みPT ${impactCount ?? 0}件 |`
        : `| ${GAME_LABEL[item.game]} | ${item.name} | ${item.reason} |`);
    }
    if (bucket.items.length > 40) lines.push(`| … | ほか${bucket.items.length - 40}名 | \`--json\` 出力を参照 |`);
    lines.push("");
  }

  lines.push("## 経路一致（図鑑 と UID 照会）", "");
  lines.push(routeMismatches.length === 0
    ? `全${records.length}名で図鑑と UID 照会が同じガイド・推奨PT・凸を返している（不一致 0 件）`
    : routeMismatches.map((entry) => `- ${GAME_LABEL[entry.game]} ${entry.name}: ${entry.field} が経路で異なる`).join("\n"));

  lines.push("", "## 推奨PTのメンバー名", "");
  lines.push(memberResolution.unknown.length === 0
    ? "未解決（unknown）なし"
    : memberResolution.unknown.map((entry) => `- ${GAME_LABEL[entry.game]} ${entry.name}（${entry.owner} / ${entry.optionId}）`).join("\n"));
  lines.push("", `### 実装待ちの言及（${memberResolution.upcoming.length}件）`, "");
  lines.push(memberResolution.upcoming.length === 0
    ? "なし"
    : memberResolution.upcoming.map((entry) => `- ${GAME_LABEL[entry.game]} ${entry.name}（${entry.mentions}件の案で言及）`).join("\n"));

  lines.push("", "## 整合性の警告", "");
  lines.push(issues.length === 0 ? "検出なし" : issues.map((issue) => `- ${issue}`).join("\n"));
  if (derivedCharacters.length > 0) {
    lines.push(`- 派生実装（衣装・お試し・別ID）としてカタログ対象外に分類: ${derivedCharacters.map((entry) => `${GAME_LABEL[entry.game]} ${entry.name}`).join("、")}`);
  }
  for (const game of GAMES) {
    const extra = diff[game]?.extra ?? [];
    if (extra.length > 0) lines.push(`- ${GAME_LABEL[game]}: カタログにあるが外部メタデータに無い（改名・削除の可能性）: ${extra.join("、")}`);
  }
  if (warnings.length > 0) lines.push(...warnings.map((warning) => `- 取得警告: ${warning}`));

  lines.push("", `## 次バッチ（第${summary.nextBatchId}）候補 ${proposed.length}名`, "");
  lines.push("| # | ゲーム | キャラクター | 選定理由 |", "|---:|---|---|---|");
  proposed.forEach((item, index) => lines.push(`| ${index + 1} | ${GAME_LABEL[item.game]} | ${item.name} | ${item.reason} |`));
  return `${lines.join("\n")}\n`;
}

const report = flag("json")
  ? JSON.stringify({ summary, priorities, proposed, issues, derivedCharacters, diff, warnings, records, routeMismatches, memberResolution, upcomingMentions: memberResolution.upcoming }, null, 2)
  : markdown();

if (outPath) {
  const target = resolve(outPath);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, report, "utf8");
  console.log(`書き出し: ${target}`);
} else {
  console.log(report);
}
