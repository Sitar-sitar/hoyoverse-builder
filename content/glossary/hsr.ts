import type { GlossaryEntry } from "../../shared/content/glossary";

/**
 * 用語集の入力（hsr）。用語集で手編集するのはこのファイルだけ。
 * 書き方・雛形・エラーの直し方は content/glossary/README.md を読む。編集後は `pnpm glossary:sync` を実行する。
 */
export const entries: GlossaryEntry[] = [];
