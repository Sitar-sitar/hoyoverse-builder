import { describe, expect, it } from "vitest";
import { shelfBatchOptions, shelfEntries, type ShelfEntry } from "./CatalogShelf";

/** B1: カード棚の絞り込みと並び順（純関数）。 */

const entry = (name: string, status: ShelfEntry["status"], batch: number | null): ShelfEntry => ({ game: "zzz", name, status, batch });
const entries = [
  entry("アンビー", "reviewed", 3),
  entry("エレン", "reviewed", 12),
  entry("ライカン", "pending", null),
  entry("アンドー", "reviewed", 12),
  entry("ソウカク", "reviewed", 2),
  entry("アンナ", "pending", null),
];
const names = (items: readonly ShelfEntry[]) => items.map((item) => item.name);

describe("CatalogShelf の絞り込みと並び順", () => {
  it("B1 バッチ候補は重複を除いた数値の降順で、未設定は含めない", () => {
    expect(shelfBatchOptions(entries)).toEqual([12, 3, 2]);
    expect(shelfBatchOptions([])).toEqual([]);
  });

  it("B1 名前・精査状態・バッチは AND で絞り込む", () => {
    const base = { keyword: "", status: "all", batch: null, sort: "catalog" } as const;
    expect(names(shelfEntries(entries, base))).toEqual(names(entries));
    expect(names(shelfEntries(entries, { ...base, keyword: " アン " }))).toEqual(["アンビー", "アンドー", "アンナ"]);
    expect(names(shelfEntries(entries, { ...base, keyword: "アン", status: "reviewed" }))).toEqual(["アンビー", "アンドー"]);
    expect(names(shelfEntries(entries, { ...base, keyword: "アン", status: "reviewed", batch: 12 }))).toEqual(["アンドー"]);
    expect(names(shelfEntries(entries, { ...base, status: "pending", batch: 12 }))).toEqual([]);
  });

  it("B1 バッチ順は数値の降順、同じバッチは元の順、未設定は末尾（元の順）", () => {
    expect(names(shelfEntries(entries, { keyword: "", status: "all", batch: null, sort: "batch" }))).toEqual(["エレン", "アンドー", "アンビー", "ソウカク", "ライカン", "アンナ"]);
    expect(names(shelfEntries([entry("B", "reviewed", 2), entry("A", "reviewed", 10)], { keyword: "", status: "all", batch: null, sort: "batch" }))).toEqual(["A", "B"]);
  });
});
