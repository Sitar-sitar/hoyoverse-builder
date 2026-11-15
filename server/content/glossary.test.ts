import { describe, expect, it } from "vitest";
import { glossaryLinkIds, glossaryProtectedTokens, parseGlossaryBody } from "../../shared/content/glossary";
import type { GlossaryEntry } from "../../shared/content/glossary";
import {
  buildGlossaryDTO, glossaryErrors, glossaryGamesWithEntries, glossaryGeneratedModules, glossarySourceTexts,
  glossaryWarnings, syncGlossaryTranslations, type GlossaryCharacter,
} from "./glossary";
import { catalogIndexText } from "../../scripts/content/catalogIndex";
import { readGlossaryRecords } from "../../scripts/content/glossary";
import { glossaryTranslationFileText } from "./glossary";

// 架空の用語（テスト専用 fixture）。ゲーム情報ではない。
const base = (id: string, overrides: Partial<GlossaryEntry> = {}): GlossaryEntry => ({
  id,
  category: "world",
  name: `用語${id}`,
  reading: "ようご",
  summary: "テスト用の架空の用語。",
  body: "架空の本文。",
  sources: [{ label: "テスト出典", url: "https://example.com/" }],
  gameVersion: "1.0",
  dataAsOf: "2026-11-01",
  ...overrides,
});
const TODAY = "2026-11-15";
const characters = new Map<string, GlossaryCharacter>([
  ["hsr:9001", { identityKey: "hsr:9001", game: "hsr", name: "テスト開拓者" }],
  ["genshin:9002", { identityKey: "genshin:9002", game: "genshin", name: "テスト旅人" }],
]);
const errorsOf = (entries: GlossaryEntry[]) => glossaryErrors("hsr", entries, characters, TODAY);

describe("リンク記法の解析", () => {
  it("基本形・表示名つき・連続するリンクを解析する", () => {
    expect(parseGlossaryBody("[[alpha]]と[[beta|ベータたち]][[gamma]]。")).toEqual({
      paragraphs: [[
        { type: "link", id: "alpha" }, { type: "text", text: "と" },
        { type: "link", id: "beta", label: "ベータたち" }, { type: "link", id: "gamma" }, { type: "text", text: "。" },
      ]],
      errors: [],
    });
  });
  it("空行で段落を分け、段落内の改行は残す", () => {
    const parsed = parseGlossaryBody("一段落目\n続き\n\n  \n二段落目 [[alpha]]\r\n\r\n三段落目");
    expect(parsed.paragraphs).toEqual([
      [{ type: "text", text: "一段落目\n続き" }],
      [{ type: "text", text: "二段落目 " }, { type: "link", id: "alpha" }],
      [{ type: "text", text: "三段落目" }],
    ]);
  });
  it("閉じていない記法・対応しない ]] ・空のIDや表示名をエラーにする", () => {
    expect(parseGlossaryBody("前[[alpha の後").errors[0]).toContain("閉じていません");
    expect(parseGlossaryBody("前[[alpha [[beta]]").errors[0]).toContain("閉じていません");
    expect(parseGlossaryBody("前 alpha]] 後").errors[0]).toContain("対応する");
    expect(parseGlossaryBody("[[]]").errors[0]).toContain("IDが空");
    expect(parseGlossaryBody("[[alpha|]]").errors[0]).toContain("表示名が空");
  });
  it("リンク先IDと翻訳保護トークンを取り出す", () => {
    const body = "[[alpha]]、[[beta|別名]]、[[alpha]]";
    expect(glossaryLinkIds(body)).toEqual(["alpha", "beta", "alpha"]);
    expect(glossaryProtectedTokens(body)).toEqual(["[[alpha]]", "[[beta|"]);
  });
});

describe("検査エラー（§4.6.2）", () => {
  it("正しい入力ではエラーが出ない", () => {
    expect(errorsOf([base("alpha", { body: "[[beta]]を参照。", related: ["beta"], characters: ["hsr:9001"] }), base("beta", { reading: "べーた" })])).toEqual([]);
  });
  const cases: Array<[string, GlossaryEntry[], string, string]> = [
    ["IDの形式", [base("Alpha_1")], "id", "形式が正しくありません"],
    ["IDが長すぎる", [base("a".repeat(41))], "id", "形式が正しくありません"],
    ["IDの重複", [base("alpha"), base("alpha", { name: "別名" })], "id", "重複しています"],
    ["formerIds の重複", [base("alpha"), base("beta", { name: "別", formerIds: ["alpha"] })], "formerIds", "重複しています"],
    ["未定義カテゴリ", [base("alpha", { category: "unknown" as GlossaryEntry["category"] })], "category", "categories.ts にありません"],
    ["よみ", [base("alpha", { reading: "ヨウゴ" })], "reading", "ひらがな"],
    ["name の重複", [base("alpha", { name: "同名" }), base("beta", { name: "同名" })], "name", "重複しています"],
    ["aliases の重複", [base("alpha", { aliases: ["略称"] }), base("beta", { aliases: ["略称"] })], "aliases", "重複しています"],
    ["summary が空", [base("alpha", { summary: " " })], "summary", "空です"],
    ["summary が長い", [base("alpha", { summary: "あ".repeat(81) })], "summary", "80 字以内"],
    ["summary のリンク", [base("alpha", { summary: "[[beta]]の要約" })], "summary", "リンク記法は summary に書けません"],
    ["body が空", [base("alpha", { body: "" })], "body", "空です"],
    ["body の波括弧", [base("alpha", { body: "{name}" })], "body", "「{」「}」は書けません"],
    ["閉じていないリンク", [base("alpha", { body: "[[beta" })], "body", "閉じていません"],
    ["リンク先が無い", [base("alpha", { body: "[[betx]]" }), base("beta", { name: "ベータ" })], "body", "近い候補: beta"],
    ["自分自身へのリンク", [base("alpha", { body: "[[alpha]]" })], "body", "自分自身"],
    ["旧IDへのリンク", [base("alpha", { body: "[[old]]" }), base("beta", { name: "ベータ", formerIds: ["old"] })], "body", "旧IDです"],
    ["related が無い", [base("alpha", { related: ["nothing"] })], "related", "ありません"],
    ["related の自己参照", [base("alpha", { related: ["alpha"] })], "related", "自分自身"],
    ["related の重複", [base("alpha", { related: ["beta", "beta"] }), base("beta", { name: "ベータ" })], "related", "2回書いています"],
    ["図鑑に無いキャラ", [base("alpha", { characters: ["hsr:1"] })], "characters", "図鑑"],
    ["別ゲームのキャラ", [base("alpha", { characters: ["genshin:9002"] })], "characters", "別のゲーム"],
    ["出典が無い", [base("alpha", { sources: [] })], "sources", "1件以上"],
    ["出典が https でない", [base("alpha", { sources: [{ label: "x", url: "http://example.com" }] })], "sources", "https://"],
    ["日付の形式", [base("alpha", { dataAsOf: "2026-02-30" })], "dataAsOf", "YYYY-MM-DD"],
    ["未来日", [base("alpha", { dataAsOf: "2026-11-16" })], "dataAsOf", "未来"],
  ];
  it.each(cases)("%s", (_label, entries, field, message) => {
    const errors = errorsOf(entries);
    const hit = errors.find(error => error.includes(`: ${field}: `) && error.includes(message));
    expect(hit, errors.join("\n")).toBeDefined();
    // ゲーム・用語IDを必ず含める。
    expect(hit).toMatch(/^hsr \/ \S+: /);
  });
});

describe("警告（§4.6.3）", () => {
  it("リンク付け忘れ候補・孤立・古い確認日を出す", () => {
    const warnings = glossaryWarnings("hsr", [
      base("alpha", { name: "アルファ", body: "アルファ以外にベータとも書く。[[gamma]]", dataAsOf: "2025-11-01" }),
      base("beta", { name: "ベータ", aliases: ["β"] }),
      base("gamma", { name: "ガンマ" }),
      base("delta", { name: "デルタ" }),
    ], TODAY);
    expect(warnings.some(line => line.includes("リンク付け忘れ候補") && line.includes("alpha") && line.includes("ベータ"))).toBe(true);
    expect(warnings.some(line => line.includes("孤立した用語") && line.includes("delta"))).toBe(true);
    expect(warnings.some(line => line.includes("孤立した用語") && line.includes("gamma"))).toBe(false);
    expect(warnings.some(line => line.includes("確認日が古い用語") && line.includes("alpha"))).toBe(true);
  });
  it("リンクの表示名に出ている語は付け忘れにしない", () => {
    const warnings = glossaryWarnings("hsr", [base("alpha", { body: "[[beta|ベータ]]" }), base("beta", { name: "ベータ" })], TODAY);
    expect(warnings.filter(line => line.includes("リンク付け忘れ候補"))).toEqual([]);
  });
});

describe("公開 DTO と逆引き", () => {
  const entries = [
    base("gamma", { name: "ガンマ", reading: "がんま", body: "[[alpha]]を含む。" }),
    base("alpha", { name: "アルファ", reading: "あるふぁ", related: ["beta"], body: "[[beta|ベータ群]]と[[gamma]]。\n\n二段落目。", characters: ["hsr:9001"], formerIds: ["alfa"] }),
    base("beta", { name: "ベータ", reading: "べーた", category: "battle", body: "[[alpha]]と関係する。", spoiler: true }),
  ];
  const dto = buildGlossaryDTO("hsr", entries, characters, "rev");
  const entry = (id: string) => dto.entries.find(item => item.id === id)!;

  it("五十音順に並べ、使われているカテゴリだけを返す", () => {
    expect(dto.entries.map(item => item.id)).toEqual(["alpha", "gamma", "beta"]);
    expect(dto.categories).toEqual([{ id: "battle", label: "戦闘" }, { id: "world", label: "世界観" }]);
    expect(dto.redirects).toEqual({ alfa: "alpha" });
  });
  it("related を片側に書けば両方に出る", () => {
    expect(entry("alpha").related).toEqual([{ id: "beta", name: "ベータ" }]);
    expect(entry("beta").related).toEqual([{ id: "alpha", name: "アルファ" }]);
  });
  it("本文リンクは mentionedBy に出て、related と重複するものは除く", () => {
    expect(entry("alpha").mentionedBy).toEqual([{ id: "gamma", name: "ガンマ" }]);
    expect(entry("gamma").mentionedBy).toEqual([{ id: "alpha", name: "アルファ" }]);
    expect(entry("beta").mentionedBy).toEqual([]);
  });
  it("本文を段落とノードに解決し、キャラ名・spoiler を返す", () => {
    expect(entry("alpha").body).toEqual([
      [{ type: "term", id: "beta", label: "ベータ群" }, { type: "text", text: "と" }, { type: "term", id: "gamma", label: "ガンマ" }, { type: "text", text: "。" }],
      [{ type: "text", text: "二段落目。" }],
    ]);
    expect(entry("alpha").characters).toEqual([{ identityKey: "hsr:9001", name: "テスト開拓者" }]);
    expect(entry("beta").spoiler).toBe(true);
    expect(entry("alpha").spoiler).toBe(false);
  });
});

describe("生成（§4.6.1）", () => {
  const entries = [base("alpha", { body: "[[beta]]を参照。" }), base("beta", { name: "ベータ", reading: "べーた" })];
  it("文章IDを規約どおりに作り、本文のリンクを保護する", () => {
    const sources = glossarySourceTexts("hsr", entries);
    // よみの五十音順（べーた → ようご）。
    expect(sources.map(source => source.id)).toEqual([
      "term.hsr.beta.name", "term.hsr.beta.summary", "term.hsr.beta.body",
      "term.hsr.alpha.name", "term.hsr.alpha.summary", "term.hsr.alpha.body",
    ]);
    expect(sources.find(source => source.id === "term.hsr.alpha.body")!.protectedTokens).toEqual(["[[beta]]"]);
  });
  it("既存の翻訳レコードは変えず、新しいIDを追加し、消えたIDを削除する", () => {
    const sources = glossarySourceTexts("hsr", entries);
    const kept = { text: "Alpha (reviewed)", sourceHash: "a".repeat(64), origin: "reviewed" as const, review: "approved" as const, reviewedAt: "2026-11-01T00:00:00+09:00" };
    const synced = syncGlossaryTranslations({ "term.hsr.alpha.name": kept, "term.hsr.removed.name": { ...kept } }, sources);
    expect(synced["term.hsr.alpha.name"]).toBe(kept);
    expect(synced["term.hsr.removed.name"]).toBeUndefined();
    expect(synced["term.hsr.beta.name"]).toEqual({ text: "ベータ", sourceHash: null, origin: "legacy", review: "pending" });
    expect(Object.keys(synced)).toEqual(sources.map(source => source.id));
  });
  it("2回続けて同期しても差分が出ない（ファイル表現の往復を含む）", () => {
    const sources = glossarySourceTexts("hsr", entries);
    const first = glossaryTranslationFileText(syncGlossaryTranslations({}, sources));
    const second = glossaryTranslationFileText(syncGlossaryTranslations(readGlossaryRecords(first, "test"), sources));
    expect(second).toBe(first);
  });
  it("0 件ではカテゴリ原文も空で、glossaryGames も空になる", () => {
    const empty = { hsr: [], genshin: [], zzz: [] };
    expect(glossaryGeneratedModules(empty).every(module => module.sources.length === 0)).toBe(true);
    expect(glossaryGamesWithEntries(empty)).toEqual([]);
    expect(glossaryGamesWithEntries({ ...empty, zzz: entries })).toEqual(["zzz"]);
    expect(glossaryGeneratedModules({ ...empty, zzz: entries })[0]!.sources.map(source => source.id)).toEqual(["term.category.world"]);
  });
  it("索引は glossary モジュールを末尾に追記し、0 件ならセクションを出さない", () => {
    const text = catalogIndexText(["glossary/hsr", "ui/b", "a"]);
    expect(text.indexOf('"./ja/guides/a"')).toBeLessThan(text.indexOf('"./ja/ui/b"'));
    expect(text.indexOf('"./ja/ui/b"')).toBeLessThan(text.indexOf('"./ja/glossary/hsr"'));
    expect(text).toContain('...(s2.length ? [{id:"legacy.glossary_hsr"');
  });
});
