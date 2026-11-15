/**
 * 用語集の生成・検査コマンド。
 *   pnpm glossary:sync   … 検査 → 日本語原文を生成 → 翻訳レコードを同期 → content:catalog-index generate → content:generate
 *   pnpm glossary:report … 警告と件数を表示（終了コードは常に 0）
 * 設計: docs/実装設計書_ゲーム内用語集の基盤_2026-11-15.md §4.6
 */
import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import type { TranslationRecord } from "../../shared/content/types";
import { TRANSLATION_LANGUAGES } from "../../shared/content/types";
import { GLOSSARY_GAMES } from "../../shared/content/glossary";
import {
  GLOSSARY_INPUTS, assertGlossaryValid, glossaryCharacterIndex, glossaryErrors, glossaryGeneratedModules,
  glossarySourceFileText, glossaryToday, glossaryTranslationFileText, glossaryWarnings, syncGlossaryTranslations,
} from "../../server/content/glossary";

const lf = (text: string) => text.replace(/\r\n/g, "\n");
const sourcePath = (name: string) => resolve(`content/ja/glossary/${name}.ts`);
const translationPath = (language: string, name: string) => resolve(`content/translations/${language}/glossary_${name}.ts`);

/** 生成した翻訳ファイル（`export const records: ... = {JSON};`）からレコードを読む。 */
export function readGlossaryRecords(text: string, file: string): Record<string, TranslationRecord> {
  const marker = "export const records: Record<string, TranslationRecord> = ";
  const at = text.indexOf(marker);
  if (at === -1) throw new Error(`${file}: 翻訳レコードの形式が読めません。手で編集した場合は git で元に戻してから pnpm glossary:sync を実行してください`);
  try {
    return JSON.parse(text.slice(at + marker.length).trim().replace(/;$/, "")) as Record<string, TranslationRecord>;
  } catch {
    throw new Error(`${file}: 翻訳レコードの JSON が読めません。手で編集した場合は git で元に戻してから pnpm glossary:sync を実行してください`);
  }
}

function existingRecords(language: string, name: string) {
  const path = translationPath(language, name);
  return existsSync(path) ? readGlossaryRecords(readFileSync(path, "utf8"), path) : {};
}

/** 期待する生成物（パス → 内容）。 */
export function expectedGlossaryFiles(): Map<string, string> {
  const files = new Map<string, string>();
  for (const module of glossaryGeneratedModules()) {
    files.set(sourcePath(module.name), glossarySourceFileText(module.sources));
    for (const language of TRANSLATION_LANGUAGES) {
      files.set(translationPath(language, module.name), glossaryTranslationFileText(syncGlossaryTranslations(existingRecords(language, module.name), module.sources)));
    }
  }
  return files;
}

/** content:check 用。生成物が入力と一致しないときの指摘。 */
export function glossaryGeneratedIssues(): string[] {
  const issues: string[] = [];
  for (const [path, expected] of expectedGlossaryFiles()) {
    if (!existsSync(path) || lf(readFileSync(path, "utf8")) !== expected) issues.push(`${path.replace(resolve(".") + (process.platform === "win32" ? "\\" : "/"), "")}: 生成物が入力と一致しません。pnpm glossary:sync を実行してください`);
  }
  return issues;
}

function runContentScript(script: string, args: string[]) {
  const result = spawnSync(process.execPath, ["--import", "tsx", resolve(script), ...args], { stdio: "inherit" });
  if (result.status !== 0) throw new Error(`${script} ${args.join(" ")} が失敗しました`);
}

export function glossarySync() {
  assertGlossaryValid();
  const files = expectedGlossaryFiles();
  let changed = 0;
  for (const [path, text] of files) {
    if (existsSync(path) && lf(readFileSync(path, "utf8")) === text) continue;
    mkdirSync(dirname(path), { recursive: true });
    writeFileSync(path, text);
    changed++;
  }
  console.log(`glossary: ${GLOSSARY_GAMES.map(game => `${game} ${GLOSSARY_INPUTS[game].length}件`).join(" / ")}、生成物 ${changed} ファイルを更新`);
  // 生成し直したモジュールを読み直すため、索引と manifest は別プロセスで作る。
  runContentScript("scripts/content/catalogIndex.ts", ["generate"]);
  runContentScript("scripts/content/commands.ts", ["generate"]);
}

export function glossaryReport() {
  const today = glossaryToday();
  const characters = glossaryCharacterIndex();
  for (const game of GLOSSARY_GAMES) {
    const entries = GLOSSARY_INPUTS[game];
    const errors = glossaryErrors(game, entries, characters, today);
    const warnings = glossaryWarnings(game, entries, today);
    console.log(`\n[${game}] 用語 ${entries.length} 件 / エラー ${errors.length} 件 / 警告 ${warnings.length} 件`);
    for (const line of errors) console.log(`  エラー: ${line}`);
    for (const line of warnings) console.log(`  警告: ${line}`);
  }
  const stale = glossaryGeneratedIssues();
  if (stale.length) console.log(`\n生成物が入力と一致しません（${stale.length} ファイル）。pnpm glossary:sync を実行してください`);
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  const command = process.argv[2];
  try {
    if (command === "sync") glossarySync();
    else if (command === "report") glossaryReport();
    else throw new Error("Usage: glossary sync|report");
  } catch (error) {
    console.error(error instanceof Error ? error.message : "glossary failed");
    process.exitCode = command === "report" ? 0 : 1;
  }
}
