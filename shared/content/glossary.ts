/**
 * 用語集の型とリンク記法の解析（純粋関数）。
 * 設計: docs/実装設計書_ゲーム内用語集の基盤_2026-11-15.md §4.2・§4.4
 */
import type { GlossaryCategoryId } from "../../content/glossary/categories";
import type { Game } from "./domains";

export type { GlossaryCategoryId };

export type GlossaryEntry = {
  /** 用語ID。ゲーム内で一意。英小文字・数字・ハイフンのみ。公開後は変更しない。 */
  id: string;
  /** categories.ts にあるカテゴリID。1 つだけ。 */
  category: GlossaryCategoryId;
  /** ゲーム内の日本語正式表記。 */
  name: string;
  /** よみ。ひらがなと長音「ー」のみ。五十音順の並びと検索に使う。 */
  reading: string;
  /** 別名・略称・旧称。検索と「リンク付け忘れ」検出の対象。無ければ省略。 */
  aliases?: string[];
  /** 1 文の要約（80 字以内）。リンク記法は書けない。一覧とリンクの補足表示に使う。 */
  summary: string;
  /** 本文。空行で段落を分ける。リンク記法を書ける。 */
  body: string;
  /** 関連用語のID。片側に書けば両方の用語に表示される。 */
  related?: string[];
  /** 関連キャラクターの identityKey（例 "hsr:1305"）。図鑑へのリンクになる。 */
  characters?: string[];
  /** true のとき本文を折りたたんで表示する（ストーリーの核心に触れる用語）。 */
  spoiler?: boolean;
  /** 根拠にした出典。1 件以上。 */
  sources: Array<{ label: string; url: string }>;
  /** 内容を確認したゲームのバージョン（例 "3.7"）。 */
  gameVersion: string;
  /** 内容を確認した日（YYYY-MM-DD）。 */
  dataAsOf: string;
  /** 過去に使っていた用語ID。古い URL を新しい用語へ案内する。 */
  formerIds?: string[];
};

/** サーバーからクライアントへ渡す本文の部品。 */
export type GlossaryNode =
  | { type: "text"; text: string }
  | { type: "term"; id: string; label: string };

export type GlossaryEntryDTO = {
  id: string;
  category: string;
  name: string;
  reading: string;
  aliases: string[];
  summary: string;
  /** 段落 → ノード */
  body: GlossaryNode[][];
  /** 自分が指す用語 ∪ 自分を related に書いた用語 */
  related: Array<{ id: string; name: string }>;
  /** 本文で自分へリンクしている用語（related と重複するものは除く） */
  mentionedBy: Array<{ id: string; name: string }>;
  characters: Array<{ identityKey: string; name: string }>;
  spoiler: boolean;
  sources: Array<{ label: string; url: string }>;
  gameVersion: string;
  dataAsOf: string;
};

export type GlossaryDTO = {
  schemaVersion: 1;
  contentRevision: string;
  language: "ja";
  game: Game;
  /** 用語が 1 件以上あるカテゴリのみ */
  categories: Array<{ id: string; label: string }>;
  entries: GlossaryEntryDTO[];
  /** formerIds → 現在の用語ID */
  redirects: Record<string, string>;
};

export const GLOSSARY_GAMES = ["hsr", "genshin", "zzz"] as const satisfies readonly Game[];
export const GLOSSARY_ID_PATTERN = /^[a-z0-9]+(-[a-z0-9]+)*$/;
export const GLOSSARY_ID_MAX_LENGTH = 40;
export const GLOSSARY_READING_PATTERN = /^[ぁ-ゖー]+$/;
export const GLOSSARY_SUMMARY_MAX_LENGTH = 80;

/** 解析直後の本文部品。リンクの表示名は未解決（label 省略時は用語名を使う）。 */
export type GlossaryRawNode =
  | { type: "text"; text: string }
  | { type: "link"; id: string; label?: string };

export type GlossaryBodyParse = { paragraphs: GlossaryRawNode[][]; errors: string[] };

/** 空行（空白だけの行を含む）で段落に分ける。段落内の単独改行はそのまま残す。 */
export function splitGlossaryParagraphs(body: string): string[] {
  return body.replace(/\r\n?/g, "\n").split(/\n[ \t　]*\n/).map(paragraph => paragraph.trim()).filter(Boolean);
}

/** 1 段落を「文字／リンク」に分ける。記法の誤りは errors に入れ、誤った部分は文字として残す。 */
export function parseGlossaryParagraph(paragraph: string): { nodes: GlossaryRawNode[]; errors: string[] } {
  const nodes: GlossaryRawNode[] = [];
  const errors: string[] = [];
  let text = "";
  let at = 0;
  const flush = () => { if (text) nodes.push({ type: "text", text }); text = ""; };
  while (at < paragraph.length) {
    const open = paragraph.indexOf("[[", at);
    const strayClose = paragraph.indexOf("]]", at);
    if (strayClose !== -1 && (open === -1 || strayClose < open)) {
      errors.push(`"]]" に対応する "[[" がありません（${excerpt(paragraph, strayClose)}）`);
      text += paragraph.slice(at, strayClose + 2);
      at = strayClose + 2;
      continue;
    }
    if (open === -1) { text += paragraph.slice(at); break; }
    text += paragraph.slice(at, open);
    const close = paragraph.indexOf("]]", open + 2);
    const nested = paragraph.indexOf("[[", open + 2);
    if (close === -1 || (nested !== -1 && nested < close)) {
      errors.push(`リンク記法が閉じていません（${excerpt(paragraph, open)}）。"[[用語ID]]" の形で書いてください`);
      text += "[[";
      at = open + 2;
      continue;
    }
    const inner = paragraph.slice(open + 2, close);
    const bar = inner.indexOf("|");
    const id = (bar === -1 ? inner : inner.slice(0, bar)).trim();
    const label = bar === -1 ? undefined : inner.slice(bar + 1);
    if (!id) errors.push(`リンク先の用語IDが空です（${excerpt(paragraph, open)}）`);
    if (label !== undefined && !label.trim()) errors.push(`リンクの表示名が空です（${excerpt(paragraph, open)}）。表示名を変えない場合は "|" を書かないでください`);
    if (!id || (label !== undefined && !label.trim())) {
      text += paragraph.slice(open, close + 2);
    } else {
      flush();
      nodes.push(label === undefined ? { type: "link", id } : { type: "link", id, label });
    }
    at = close + 2;
  }
  flush();
  return { nodes, errors };
}

export function parseGlossaryBody(body: string): GlossaryBodyParse {
  const paragraphs: GlossaryRawNode[][] = [];
  const errors: string[] = [];
  for (const paragraph of splitGlossaryParagraphs(body)) {
    const parsed = parseGlossaryParagraph(paragraph);
    paragraphs.push(parsed.nodes);
    errors.push(...parsed.errors);
  }
  return { paragraphs, errors };
}

/** 本文中のリンク先ID（出現順・重複あり）。 */
export function glossaryLinkIds(body: string): string[] {
  return parseGlossaryBody(body).paragraphs.flat().flatMap(node => node.type === "link" ? [node.id] : []);
}

/** 翻訳で保護するリンク記法の断片（`[[id]]` と `[[id|`）。並びは決定的にする。 */
export function glossaryProtectedTokens(body: string): string[] {
  const tokens = new Set<string>();
  for (const node of parseGlossaryBody(body).paragraphs.flat()) {
    if (node.type !== "link") continue;
    tokens.add(node.label === undefined ? `[[${node.id}]]` : `[[${node.id}|`);
  }
  return [...tokens].sort();
}

/** 解析結果の表示名を解決する。用語名が引けないリンクは文字として残す（検査で先に止まる前提）。 */
export function resolveGlossaryParagraphs(paragraphs: GlossaryRawNode[][], nameOf: (id: string) => string | undefined): GlossaryNode[][] {
  return paragraphs.map(nodes => nodes.map((node): GlossaryNode => {
    if (node.type === "text") return node;
    const name = nameOf(node.id);
    if (name === undefined) return { type: "text", text: node.label ?? node.id };
    return { type: "term", id: node.id, label: node.label ?? name };
  }));
}

function excerpt(text: string, at: number) {
  return text.slice(Math.max(0, at - 6), at + 14).replace(/\n/g, " ");
}
