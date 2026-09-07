import { describe, expect, it } from "vitest";
import { characterUpdateLedger } from "./characterUpdateLedger";

const NEXT_BATCH_17 = [
  "レザー", "ロサリア", "雲菫", "煙緋", "嘉明", "甘雨", "閑雲", "凝光", "九条裟羅", "荒瀧一斗",
  "刻晴", "珊瑚宮心海", "鹿野院平蔵", "七七", "重雲", "申鶴", "神里綾華", "神里綾人", "辛炎", "千織",
];

const BATCH_16_MEMBERS = [
  { game: "hsr", name: "不死途" },
  { game: "hsr", name: "乱破" },
  { game: "hsr", name: "椒丘" },
  { game: "hsr", name: "爻光" },
  { game: "genshin", name: "バーバラ" },
  { game: "genshin", name: "ファルザン" },
  { game: "genshin", name: "フリンズ" },
  { game: "genshin", name: "フレミネ" },
  { game: "genshin", name: "マーヴィカ" },
  { game: "genshin", name: "ミカ" },
  { game: "genshin", name: "ムアラニ" },
  { game: "genshin", name: "モナ" },
  { game: "genshin", name: "ヤフォダ" },
  { game: "genshin", name: "ヨォーヨ" },
  { game: "genshin", name: "ラウマ" },
  { game: "genshin", name: "リオセスリ" },
  { game: "genshin", name: "リサ" },
  { game: "genshin", name: "リネ" },
  { game: "genshin", name: "リネット" },
  { game: "genshin", name: "レイラ" },
] as const;

describe("全キャラクター更新台帳", () => {
  it("全248件を重複なく追跡し、完了220件と正規カタログ順の第17バッチ20名を返す", () => {
    const ledger = characterUpdateLedger();
    expect(ledger.total).toBe(248);
    expect(ledger.reviewed).toBe(220);
    expect(ledger.pending).toBe(28);
    expect(ledger.byGame).toEqual({
      hsr: { total: 81, reviewed: 81, pending: 0 },
      genshin: { total: 109, reviewed: 81, pending: 28 },
      zzz: { total: 58, reviewed: 58, pending: 0 },
    });
    expect(ledger.nextBatch.id).toBe(17);
    expect(new Set(ledger.entries.map((entry) => `${entry.game}:${entry.name}`)).size).toBe(ledger.total);
    expect(ledger.nextBatch.names).toEqual(NEXT_BATCH_17.map((name) => expect.objectContaining({ game: "genshin", name, status: "pending" })));
  });

  it("第16バッチの20名を完了として記録し、次バッチ候補へ残さない", () => {
    const ledger = characterUpdateLedger();
    BATCH_16_MEMBERS.forEach(({ game, name }) => {
      const entry = ledger.entries.find((candidate) => candidate.game === game && candidate.name === name);
      expect(entry).toMatchObject({ status: "reviewed", batch: 16 });
    });
    const nextNames = new Set(ledger.nextBatch.names.map((entry) => `${entry.game}:${entry.name}`));
    BATCH_16_MEMBERS.forEach(({ game, name }) => expect(nextNames.has(`${game}:${name}`)).toBe(false));
    expect(ledger.nextBatch.names.every((entry) => entry.status === "pending")).toBe(true);
  });

  it("完了と未精査の合計が母集団と一致する", () => {
    const ledger = characterUpdateLedger();
    expect(ledger.reviewed + ledger.pending).toBe(ledger.total);
    expect(ledger.entries.filter((entry) => entry.status === "reviewed")).toHaveLength(ledger.reviewed);
  });
});
