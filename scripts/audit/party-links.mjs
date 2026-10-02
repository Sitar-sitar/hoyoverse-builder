/**
 * 推奨PTの連動レビュー: 共有編成に参加しているのに、参照も見送りも記録していないキャラを一覧にする（読み取り専用）。
 *
 * 使い方（リポジトリ直下から）:
 *   corepack pnpm exec tsx scripts/audit/party-links.mjs                    # 未対応一覧（必須の確認）
 *   corepack pnpm exec tsx scripts/audit/party-links.mjs --backlog          # 共有化していない旧形式（第18バッチ以降）の未連動（報告のみ）
 *   corepack pnpm exec tsx scripts/audit/party-links.mjs --team <id,...> --owner <game:name> --json --out <path> --strict
 *
 * 判定は server/parties/linkStatus.ts（vitest の partyLinks.test.ts がゲート）にあり、ここは入出力だけを持つ。
 * 設計: docs/実装設計書_推奨PTの編成マスタ化と関連キャラ連動_2026-10-01.md §4.9.1
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const args = process.argv.slice(2);
const flag = (name) => args.includes(`--${name}`);
const opt = (name, fallback = null) => {
  const at = args.indexOf(`--${name}`);
  return at >= 0 && args[at + 1] && !args[at + 1].startsWith("--") ? args[at + 1] : fallback;
};

const repo = process.cwd();
const load = (relative) => import(pathToFileURL(join(repo, relative)).href);
const [status, store, resolver, parties, records] = await Promise.all([
  load("server/parties/linkStatus.ts"),
  load("server/parties/teamStore.ts"),
  load("server/parties/resolve.ts"),
  load("server/parties/characterParties.ts"),
  load("server/parties/linkRecords.ts"),
]);

const teamFilter = new Set((opt("team") ?? "").split(",").map((entry) => entry.trim()).filter(Boolean));
const ownerFilter = opt("owner");
const backlog = flag("backlog");
const all = backlog ? status.backlogLinks() : status.uncoveredLinks();
const rows = all.filter((entry) => (teamFilter.size === 0 || teamFilter.has(entry.team)) && (!ownerFilter || `${entry.game}:${entry.owner}` === ownerFilter));

const teamById = (id) => store.TEAM_STORE.byId.get(id);
const teamLine = (team) => team
  ? `「${team.title.ja}」 ${team.members.map((entry) => entry.name.ja).join(" / ")}（起点 ${team.origin}・${team.sourceUrl}・${team.dataAsOf}）`
  : "（マスタに無い）";
const nextBatch = Math.max(0, ...Object.keys(records.PARTY_LINK_BATCHES).map(Number)) + 1;
const MAX = 3;

function ownerSection(game, owner, entries) {
  const refs = resolver.refsFor(game, owner);
  const current = refs.map((ref, index) => `${index + 1}. ${ref.team}「${teamById(ref.team)?.title.ja ?? "?"}」`).join(" / ") || "なし";
  const firstSource = teamById(refs[0]?.team)?.sourceUrl ?? "<そのキャラの現行出典>";
  const lines = [`## ${game}:${owner}（現在の参照: ${current}）`, ""];
  for (const entry of entries) {
    lines.push(`- [ ] ${entry.team}${teamLine(teamById(entry.team))}`);
    if (backlog) continue;
    const full = refs.length >= MAX;
    const nextRefs = [...(full ? refs.slice(0, MAX - 1) : refs), { team: entry.team }];
    const removed = full ? refs.slice(MAX - 1).map((ref) => ref.team) : [];
    lines.push(`  - 参照する場合${full ? `（3枠が埋まっているので1件外す。候補: ${refs.map((ref) => ref.team).join(" , ")}。下の雛形は3件目を外した形）` : ""}:`);
    lines.push("    ```ts");
    lines.push(`    "${game}:${owner}": { refs: ${JSON.stringify(nextRefs)} },`);
    lines.push(`    // linkRecords.ts の PARTY_LINK_RECORDS 末尾へ追記（batch は実施バッチに直す。初期値は定義済みの最大+1）`);
    lines.push(`    { batch: ${nextBatch}, game: "${game}", owner: "${owner}", added: ["${entry.team}"], removed: ${JSON.stringify(removed)} },`);
    lines.push("    ```");
    lines.push(`  - 見送る場合（${owner}側の出典を確認して記入）:`);
    lines.push("    ```ts");
    lines.push(`    skipped: [{ team: "${entry.team}", reason: "", sourceUrl: "${firstSource}", checkedAt: "YYYY-MM-DD" }],`);
    lines.push("    ```");
  }
  lines.push("");
  return lines.join("\n");
}

function skipsSection() {
  const lines = ["## 見送り記録（再確認の目安）", ""];
  const skips = Object.entries(parties.CHARACTER_PARTIES).flatMap(([key, entry]) => (entry.skipped ?? []).map((skip) => ({ key, ...skip })));
  if (skips.length === 0) lines.push("- なし");
  for (const skip of skips.sort((a, b) => a.checkedAt.localeCompare(b.checkedAt))) lines.push(`- ${skip.key} → ${skip.team}（確認 ${skip.checkedAt}）${skip.reason} ${skip.sourceUrl}`);
  lines.push("");
  return lines.join("\n");
}

let output;
if (flag("json")) {
  output = JSON.stringify({ mode: backlog ? "backlog" : "uncovered", count: rows.length, rows }, null, 2);
} else {
  const groups = new Map();
  for (const entry of rows) {
    const key = `${entry.game}:${entry.owner}`;
    groups.set(key, [...(groups.get(key) ?? []), entry]);
  }
  const title = backlog ? `# 推奨PT連動バックログ（旧形式・報告のみ ${rows.length}件）` : `# 推奨PT連動レビュー（未対応 ${rows.length}件）`;
  const sections = [...groups.entries()].map(([key, entries]) => {
    const at = key.indexOf(":");
    return ownerSection(key.slice(0, at), key.slice(at + 1), entries);
  });
  output = [title, "", ...sections, ...(backlog ? [] : [skipsSection()])].join("\n");
}

const outPath = opt("out");
if (outPath) {
  const target = resolve(outPath);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, output.endsWith("\n") ? output : `${output}\n`, "utf8");
  console.log(`書き出し: ${target}`);
} else {
  console.log(output);
}
if (flag("strict") && !backlog && rows.length > 0) process.exit(1);
