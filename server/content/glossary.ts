/**
 * 用語集の検査・逆引き・公開 DTO の組み立て・日本語原文の生成。
 * 設計: docs/実装設計書_ゲーム内用語集の基盤_2026-11-15.md §4.3・§4.6・§4.7.1
 */
import { entries as hsrEntries } from "../../content/glossary/hsr";
import { entries as genshinEntries } from "../../content/glossary/genshin";
import { entries as zzzEntries } from "../../content/glossary/zzz";
import { GLOSSARY_CATEGORIES } from "../../content/glossary/categories";
import { characterRecords, characterSources } from "../../content/characters";
import type { Game } from "../../shared/content/domains";
import type { SourceText, TextId, TranslationRecord } from "../../shared/content/types";
import {
  GLOSSARY_GAMES, GLOSSARY_ID_MAX_LENGTH, GLOSSARY_ID_PATTERN, GLOSSARY_READING_PATTERN, GLOSSARY_SUMMARY_MAX_LENGTH,
  glossaryProtectedTokens, parseGlossaryBody, resolveGlossaryParagraphs,
  type GlossaryDTO, type GlossaryEntry, type GlossaryRawNode,
} from "../../shared/content/glossary";

export type GlossaryGame = typeof GLOSSARY_GAMES[number];
export type GlossaryCharacter = { identityKey: string; game: Game; name: string };

export const GLOSSARY_INPUTS: Record<GlossaryGame, readonly GlossaryEntry[]> = {
  hsr: hsrEntries,
  genshin: genshinEntries,
  zzz: zzzEntries,
};

const STALE_DAYS = 365;
const CATEGORY_IDS = new Set<string>(GLOSSARY_CATEGORIES.map(category => category.id));

/** 図鑑のキャラクター（identityKey → ゲーム・日本語名）。 */
export function glossaryCharacterIndex(): Map<string, GlossaryCharacter> {
  const names = new Map(characterSources.map(source => [source.id, source.ja]));
  return new Map(characterRecords.map(record => [record.identityKey, { identityKey: record.identityKey, game: record.game, name: names.get(record.name.id) ?? "" }]));
}

/** 日本時間の今日（YYYY-MM-DD）。 */
export function glossaryToday(now = Date.now()) {
  return new Date(now + 9 * 60 * 60_000).toISOString().slice(0, 10);
}

function isCalendarDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const [year, month, day] = value.split("-").map(Number);
  const parsed = new Date(Date.UTC(year!, month! - 1, day!));
  return parsed.getUTCFullYear() === year && parsed.getUTCMonth() === month! - 1 && parsed.getUTCDate() === day;
}

function editDistance(a: string, b: string) {
  const row = Array.from({ length: b.length + 1 }, (_, index) => index);
  for (let i = 1; i <= a.length; i++) {
    let previous = row[0]!;
    row[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const current = row[j]!;
      row[j] = Math.min(row[j]! + 1, row[j - 1]! + 1, previous + (a[i - 1] === b[j - 1] ? 0 : 1));
      previous = current;
    }
  }
  return row[b.length]!;
}

/** 編集距離の近い用語ID（最大3件）。 */
export function nearGlossaryIds(target: string, ids: readonly string[]) {
  const limit = Math.max(2, Math.floor(target.length / 3));
  return ids.map(id => ({ id, distance: editDistance(target, id) }))
    .filter(candidate => candidate.distance <= limit || candidate.id.includes(target) || target.includes(candidate.id))
    .sort((a, b) => a.distance - b.distance || (a.id < b.id ? -1 : 1))
    .slice(0, 3).map(candidate => candidate.id);
}

/**
 * §4.6.2 の検査。エラー文は「ゲーム / 用語ID: 項目: 内容。直し方」の形にする。
 * 0 件なら空配列。
 */
export function glossaryErrors(game: GlossaryGame, entries: readonly GlossaryEntry[], characters: ReadonlyMap<string, GlossaryCharacter>, today: string): string[] {
  const errors: string[] = [];
  const add = (id: string, field: string, message: string) => errors.push(`${game} / ${id || "(IDなし)"}: ${field}: ${message}`);
  const currentIds = entries.map(entry => entry.id);
  const current = new Set(currentIds);
  const former = new Map<string, string>();
  const seenIds = new Map<string, string>();
  const claim = (id: string, owner: string, field: string) => {
    if (!GLOSSARY_ID_PATTERN.test(id) || id.length > GLOSSARY_ID_MAX_LENGTH) {
      add(owner, field, `用語ID "${id}" の形式が正しくありません。英小文字・数字・ハイフンだけで ${GLOSSARY_ID_MAX_LENGTH} 字以内にしてください（例: aeon、light-cone）`);
    }
    const before = seenIds.get(id);
    if (before !== undefined) add(owner, field, `用語ID "${id}" が重複しています（${before} と同じ）。ゲーム内で一意にしてください（formerIds も含みます）`);
    else seenIds.set(id, owner);
  };
  for (const entry of entries) claim(entry.id, entry.id, "id");
  for (const entry of entries) for (const old of entry.formerIds ?? []) {
    claim(old, entry.id, "formerIds");
    former.set(old, entry.id);
  }

  const names = new Map<string, string>();
  for (const entry of entries) {
    for (const [field, value] of [["name", entry.name], ...(entry.aliases ?? []).map(alias => ["aliases", alias] as const)] as const) {
      if (!value.trim()) { add(entry.id, field, "空です。用語名・別名を書くか、別名なら配列から外してください"); continue; }
      const owner = names.get(value);
      if (owner !== undefined && owner !== entry.id) add(entry.id, field, `「${value}」が用語 ${owner} の name・aliases と重複しています。検索結果が曖昧になるため、どちらか一方にだけ書いてください`);
      else if (owner === entry.id) add(entry.id, field, `「${value}」を同じ用語の中で2回書いています。1回にしてください`);
      names.set(value, entry.id);
    }
  }

  const linkTarget = (entry: GlossaryEntry, field: string, target: string) => {
    if (target === entry.id) { add(entry.id, field, `自分自身 "${target}" を指しています。リンクを外してください`); return; }
    if (former.has(target)) { add(entry.id, field, `"${target}" は ${former.get(target)} の旧IDです。"${former.get(target)}" に書き換えてください`); return; }
    if (!current.has(target)) {
      const near = nearGlossaryIds(target, currentIds.filter(id => id !== entry.id));
      add(entry.id, field, `リンク先 "${target}" がありません。${near.length ? `近い候補: ${near.join(", ")}` : "用語IDを確認するか、用語を追加してから書いてください"}`);
    }
  };

  for (const entry of entries) {
    if (!CATEGORY_IDS.has(entry.category)) add(entry.id, "category", `"${entry.category}" は categories.ts にありません。既存のカテゴリIDを使うか categories.ts に追加してください`);
    if (!GLOSSARY_READING_PATTERN.test(entry.reading)) add(entry.id, "reading", "ひらがなと長音「ー」だけで書いてください（カタカナ・漢字・空白・記号は使えません）");
    if (!entry.summary.trim()) add(entry.id, "summary", "空です。1文の要約を書いてください");
    if ([...entry.summary].length > GLOSSARY_SUMMARY_MAX_LENGTH) add(entry.id, "summary", `${[...entry.summary].length} 字あります。${GLOSSARY_SUMMARY_MAX_LENGTH} 字以内にしてください`);
    if (entry.summary.includes("[[") || entry.summary.includes("]]")) add(entry.id, "summary", "リンク記法は summary に書けません。リンクは body に書いてください");
    if (/[{}]/.test(entry.summary)) add(entry.id, "summary", "「{」「}」は書けません。別の括弧を使ってください");
    if (/[{}]/.test(entry.name) || (entry.aliases ?? []).some(alias => /[{}]/.test(alias))) add(entry.id, "name", "「{」「}」は書けません。別の括弧を使ってください");
    if (!entry.body.trim()) add(entry.id, "body", "空です。本文を書いてください");
    if (/[{}]/.test(entry.body)) add(entry.id, "body", "「{」「}」は書けません。別の括弧を使ってください");
    const parsed = parseGlossaryBody(entry.body);
    for (const message of parsed.errors) add(entry.id, "body", message);
    for (const node of parsed.paragraphs.flat()) if (node.type === "link") linkTarget(entry, "body", node.id);
    const related = new Set<string>();
    for (const target of entry.related ?? []) {
      if (related.has(target)) add(entry.id, "related", `"${target}" を2回書いています。1回にしてください`);
      related.add(target);
      linkTarget(entry, "related", target);
    }
    const listed = new Set<string>();
    for (const key of entry.characters ?? []) {
      const character = characters.get(key);
      if (listed.has(key)) add(entry.id, "characters", `"${key}" を2回書いています。1回にしてください`);
      listed.add(key);
      if (!character) add(entry.id, "characters", `"${key}" は図鑑（content/characters.ts）にありません。identityKey（例 "${game}:1305"）を確認してください`);
      else if (character.game !== game) add(entry.id, "characters", `"${key}" は別のゲームのキャラクターです。同じゲームのキャラクターだけを書いてください`);
    }
    if (!entry.sources.length) add(entry.id, "sources", "出典がありません。根拠にした出典を1件以上書いてください");
    for (const source of entry.sources) {
      if (!source.label.trim()) add(entry.id, "sources", "出典の label が空です。出典名を書いてください");
      if (!source.url.startsWith("https://")) add(entry.id, "sources", `出典の url "${source.url}" が https:// で始まっていません`);
    }
    if (!entry.gameVersion.trim()) add(entry.id, "gameVersion", "空です。内容を確認したゲームのバージョン（例 \"3.7\"）を書いてください");
    if (!isCalendarDate(entry.dataAsOf)) add(entry.id, "dataAsOf", `"${entry.dataAsOf}" は YYYY-MM-DD の日付ではありません`);
    else if (entry.dataAsOf > today) add(entry.id, "dataAsOf", `${entry.dataAsOf} は未来の日付です。内容を確認した日を書いてください`);
  }
  return errors;
}

/** 本文の「文字」部分だけ（リンクの表示名を除く）。 */
function plainTexts(nodes: GlossaryRawNode[][]) {
  return nodes.flat().flatMap(node => node.type === "text" ? [node.text] : []);
}

/** §4.6.3 の警告。失敗させない。 */
export function glossaryWarnings(game: GlossaryGame, entries: readonly GlossaryEntry[], today: string): string[] {
  const warnings: string[] = [];
  const parsed = new Map(entries.map(entry => [entry.id, parseGlossaryBody(entry.body).paragraphs]));
  const incoming = new Set<string>();
  for (const entry of entries) {
    for (const node of parsed.get(entry.id)!.flat()) if (node.type === "link") incoming.add(node.id);
    for (const target of entry.related ?? []) incoming.add(target);
  }
  for (const entry of entries) {
    const texts = plainTexts(parsed.get(entry.id)!);
    for (const other of entries) {
      if (other.id === entry.id) continue;
      for (const word of [other.name, ...(other.aliases ?? [])]) {
        if (word && texts.some(text => text.includes(word))) warnings.push(`リンク付け忘れ候補: ${game} / ${entry.id}: body に「${word}」がリンクなしで出ています（[[${other.id}]] でリンクできます）`);
      }
    }
    const outgoing = parsed.get(entry.id)!.flat().some(node => node.type === "link") || (entry.related ?? []).length > 0;
    if (!outgoing && !incoming.has(entry.id)) warnings.push(`孤立した用語: ${game} / ${entry.id}: どの用語ともリンク・related でつながっていません`);
    if (isCalendarDate(entry.dataAsOf)) {
      const days = (Date.parse(`${today}T00:00:00Z`) - Date.parse(`${entry.dataAsOf}T00:00:00Z`)) / 86_400_000;
      if (days > STALE_DAYS) warnings.push(`確認日が古い用語: ${game} / ${entry.id}: dataAsOf ${entry.dataAsOf} から ${days} 日経っています`);
    }
  }
  return warnings;
}

// 濁音・半濁音・長音を五十音順に並べるため、コードポイント順ではなく日本語の照合順を使う。
const japaneseCollator = new Intl.Collator("ja");
const byReading = (a: GlossaryEntry, b: GlossaryEntry) =>
  japaneseCollator.compare(a.reading, b.reading) || (a.id < b.id ? -1 : a.id > b.id ? 1 : 0);

/** 公開 DTO。検査済みの入力を前提にする。 */
export function buildGlossaryDTO(game: GlossaryGame, entries: readonly GlossaryEntry[], characters: ReadonlyMap<string, GlossaryCharacter>, contentRevision: string): GlossaryDTO {
  const sorted = [...entries].sort(byReading);
  const byId = new Map(sorted.map(entry => [entry.id, entry]));
  const order = new Map(sorted.map((entry, index) => [entry.id, index]));
  const parsed = new Map(sorted.map(entry => [entry.id, parseGlossaryBody(entry.body).paragraphs]));
  const relatedIds = new Map(sorted.map(entry => [entry.id, new Set<string>()]));
  const mentioned = new Map(sorted.map(entry => [entry.id, new Set<string>()]));
  for (const entry of sorted) {
    for (const target of entry.related ?? []) {
      if (!byId.has(target) || target === entry.id) continue;
      relatedIds.get(entry.id)!.add(target);
      relatedIds.get(target)!.add(entry.id);
    }
    for (const node of parsed.get(entry.id)!.flat()) {
      if (node.type === "link" && byId.has(node.id) && node.id !== entry.id) mentioned.get(node.id)!.add(entry.id);
    }
  }
  const refs = (ids: Iterable<string>) => [...ids].sort((a, b) => order.get(a)! - order.get(b)!).map(id => ({ id, name: byId.get(id)!.name }));
  const used = new Set(sorted.map(entry => entry.category));
  return {
    schemaVersion: 1,
    contentRevision,
    language: "ja",
    game,
    categories: GLOSSARY_CATEGORIES.filter(category => used.has(category.id)).map(category => ({ id: category.id, label: category.label })),
    entries: sorted.map(entry => {
      const related = relatedIds.get(entry.id)!;
      return {
        id: entry.id,
        category: entry.category,
        name: entry.name,
        reading: entry.reading,
        aliases: [...(entry.aliases ?? [])],
        summary: entry.summary,
        body: resolveGlossaryParagraphs(parsed.get(entry.id)!, id => byId.get(id)?.name),
        related: refs(related),
        mentionedBy: refs([...mentioned.get(entry.id)!].filter(id => !related.has(id))),
        characters: (entry.characters ?? []).flatMap(identityKey => {
          const character = characters.get(identityKey);
          return character ? [{ identityKey, name: character.name }] : [];
        }),
        spoiler: entry.spoiler === true,
        sources: entry.sources.map(source => ({ label: source.label, url: source.url })),
        gameVersion: entry.gameVersion,
        dataAsOf: entry.dataAsOf,
      };
    }),
    redirects: Object.fromEntries(sorted.flatMap(entry => (entry.formerIds ?? []).map(old => [old, entry.id] as const)).sort(([a], [b]) => a < b ? -1 : 1)),
  };
}

/** 用語が 1 件以上あるゲーム（manifest の glossaryGames）。 */
export function glossaryGamesWithEntries(inputs: Record<GlossaryGame, readonly GlossaryEntry[]> = GLOSSARY_INPUTS): GlossaryGame[] {
  return GLOSSARY_GAMES.filter(game => inputs[game].length > 0);
}

/** 全ゲームを検査し、エラーがあれば一覧を投げる（content:check と glossary:sync から呼ぶ）。 */
export function assertGlossaryValid(inputs: Record<GlossaryGame, readonly GlossaryEntry[]> = GLOSSARY_INPUTS, today = glossaryToday()) {
  const characters = glossaryCharacterIndex();
  const errors = GLOSSARY_GAMES.flatMap(game => glossaryErrors(game, inputs[game], characters, today));
  if (errors.length) throw new Error(`用語集の検査エラー（${errors.length}件）。content/glossary/README.md の「エラーが出たとき」を参照してください:\n${errors.join("\n")}`);
}

// ---- 日本語原文と翻訳レコードの生成（§4.3・§4.6.1） ----

const termSource = (id: TextId, ja: string, context: string, protectedTokens: string[] = []): SourceText => ({
  id, ja, context, audience: "public", placeholders: {}, dependencies: [], protectedTokens,
});

/** ゲームごとの日本語原文。並びは用語の並び（五十音順）に固定する。 */
export function glossarySourceTexts(game: GlossaryGame, entries: readonly GlossaryEntry[]): SourceText[] {
  return [...entries].sort(byReading).flatMap(entry => [
    termSource(`term.${game}.${entry.id}.name`, entry.name, `glossary ${game} term ${entry.id}: Japanese official term name`),
    termSource(`term.${game}.${entry.id}.summary`, entry.summary, `glossary ${game} term ${entry.id}: one-sentence summary shown in the list and link hints`),
    termSource(`term.${game}.${entry.id}.body`, entry.body, `glossary ${game} term ${entry.id}: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact`, glossaryProtectedTokens(entry.body)),
  ]);
}

/** 使われているカテゴリの表示名（全ゲーム共通）。用語が 0 件なら空。 */
export function glossaryCategorySourceTexts(inputs: Record<GlossaryGame, readonly GlossaryEntry[]> = GLOSSARY_INPUTS): SourceText[] {
  const used = new Set(GLOSSARY_GAMES.flatMap(game => inputs[game].map(entry => entry.category)));
  return GLOSSARY_CATEGORIES.filter(category => used.has(category.id))
    .map(category => termSource(`term.category.${category.id}`, category.label, `glossary category ${category.id}: category label shown as a filter`));
}

/** 既存レコードは一字も変えず、新しい文章IDを追加し、消えた文章IDを削除する。 */
export function syncGlossaryTranslations(existing: Readonly<Record<string, TranslationRecord>>, sources: readonly SourceText[]): Record<string, TranslationRecord> {
  return Object.fromEntries(sources.map(source => [source.id, existing[source.id] ?? { text: source.ja, sourceHash: null, origin: "legacy", review: "pending" } as TranslationRecord]));
}

export const GLOSSARY_GENERATED_NOTE = "// 生成物（pnpm glossary:sync）。手で編集しない。入力は content/glossary/ にある。\n";

export function glossarySourceFileText(sources: readonly SourceText[]) {
  const header = `${GLOSSARY_GENERATED_NOTE}import type { SourceText } from "../../../shared/content/types";\n`;
  const blockSize = 100;
  if (sources.length <= blockSize) {
    return `${header}export const sources: SourceText[] = ${JSON.stringify(sources, null, 2)};\n`;
  }

  // TypeScript cannot always contextually type a single array literal this large.
  const blocks = Array.from({ length: Math.ceil(sources.length / blockSize) }, (_, index) =>
    sources.slice(index * blockSize, (index + 1) * blockSize),
  );
  const declarations = blocks.map((block, index) =>
    `const block${index}: SourceText[] = ${JSON.stringify(block, null, 2)};\n`,
  ).join("\n");
  const spreads = blocks.map((_, index) => `...block${index}`).join(", ");
  return `${header}${declarations}\nexport const sources: SourceText[] = [${spreads}];\n`;
}

export function glossaryTranslationFileText(records: Readonly<Record<string, TranslationRecord>>) {
  return `${GLOSSARY_GENERATED_NOTE}import type { TranslationRecord } from "../../../shared/content/types";\nexport const records: Record<string, TranslationRecord> = ${JSON.stringify(records, null, 2)};\n`;
}

/** 生成物のモジュール名（content/ja/glossary/<name>.ts、翻訳は glossary_<name>.ts）と原文。 */
export function glossaryGeneratedModules(inputs: Record<GlossaryGame, readonly GlossaryEntry[]> = GLOSSARY_INPUTS): Array<{ name: string; sources: SourceText[] }> {
  return [
    { name: "categories", sources: glossaryCategorySourceTexts(inputs) },
    ...GLOSSARY_GAMES.map(game => ({ name: game, sources: glossarySourceTexts(game, inputs[game]) })),
  ];
}
