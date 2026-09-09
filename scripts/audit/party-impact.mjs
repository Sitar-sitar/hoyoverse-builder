/**
 * 新キャラクター追加時の推奨PT影響レビュー用チェックリストを出力する（読み取り専用）。
 *
 * 使い方（リポジトリ直下から）:
 *   corepack pnpm exec tsx scripts/audit/party-impact.mjs --added genshin:オデット [--json] [--out <path>]
 *   corepack pnpm exec tsx scripts/audit/party-impact.mjs            # --added 省略時は UPCOMING_PARTY_MEMBERS の全件
 *
 * 判定は server/partyImpact.ts（純関数・vitest で保護）にあり、ここは入出力だけを持つ。
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
const [impact, aliases] = await Promise.all([load("server/partyImpact.ts"), load("server/partyMemberAliases.ts")]);

const GAMES = new Set(["hsr", "genshin", "zzz"]);
const parseTarget = (value) => {
  const at = value.indexOf(":");
  const game = value.slice(0, at);
  const name = value.slice(at + 1);
  if (!GAMES.has(game) || !name) throw new Error(`--added の書式は <game>:<name>（例 genshin:オデット）: ${value}`);
  return { game, name };
};

const targets = opt("added")
  ? opt("added").split(",").map((entry) => parseTarget(entry.trim()))
  : Object.keys(aliases.UPCOMING_PARTY_MEMBERS).map(parseTarget);

if (targets.length === 0) {
  console.error("対象がありません（--added を指定するか UPCOMING_PARTY_MEMBERS へ登録してください）");
  process.exit(2);
}

const reports = targets.map(({ game, name }) => impact.partyImpactFor(game, name));
const output = flag("json")
  ? JSON.stringify(reports, null, 2)
  : `# 推奨PT影響レビュー（${targets.length}件）\n\n${reports.map((report) => impact.formatPartyImpactMarkdown(report)).join("\n---\n\n")}`;

const outPath = opt("out");
if (outPath) {
  const target = resolve(outPath);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, output.endsWith("\n") ? output : `${output}\n`, "utf8");
  console.log(`書き出し: ${target}`);
} else {
  console.log(output);
}
