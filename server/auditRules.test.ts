import { describe, expect, it } from "vitest";
import {
  auditRecordFor,
  auditRecords,
  classifyMissingName,
  daysBetween,
  guideKindFor,
  memberResolutionSummary,
  prioritize,
  proposedNext,
  routeMismatches,
} from "./auditRules";
import { CHARACTER_GUIDE_CATALOG } from "./characterGuideCatalog";

const TODAY = "2026-09-10";

describe("監査の判定ロジック", () => {
  it("図鑑と UID 照会の経路不一致が無い（第15バッチ正規化後の正常状態）", () => {
    expect(routeMismatches()).toEqual([]);
  });

  it("個別精査済みのキャラクターは individual、未精査は role-generic と判定する", () => {
    // 第16バッチで個別根拠へ置換したキャラクター。
    expect(guideKindFor("hsr", "不死途")).toBe("individual");
    expect(guideKindFor("genshin", "バーバラ")).toBe("individual");
    // 第15バッチで個別化したキャラクター（2026-09-10 の正規化で基底データへ移設済み）。
    expect(guideKindFor("hsr", "御空")).toBe("individual");
    expect(guideKindFor("zzz", "猫又")).toBe("individual");
  });

  it("監査レコードが台帳・メタデータ・凸・推奨PTの状態を束ねる", () => {
    const record = auditRecordFor("hsr", "ホタル", TODAY);
    expect(record).toMatchObject({ game: "hsr", name: "ホタル", status: "reviewed", batch: 1, sourceId: "1310", guideKind: "individual", hasConstellation: true, hasParty: true });
    expect(record.ageDays).toBeGreaterThanOrEqual(0);
  });

  it("全248名分のレコードを返す", () => {
    const records = auditRecords(TODAY);
    expect(records).toHaveLength(CHARACTER_GUIDE_CATALOG.hsr.length + CHARACTER_GUIDE_CATALOG.genshin.length + CHARACTER_GUIDE_CATALOG.zzz.length);
    expect(records.every((record) => record.status === "reviewed")).toBe(true); // 全248名精査済み
  });

  it("外部メタデータの未登録名を新規候補と派生に分ける", () => {
    expect(classifyMissingName("hsr", "アシュヴェイル")).toBe("new");
    // 既存カタログ名を含んでも独立キャラクターであり得る（第18バッチで追加した姫子・旅立ちと同じ型）。名前の包含では派生にしない。
    expect(classifyMissingName("hsr", "アベンチュリン・波と戯れる夏")).toBe("new");
    expect(classifyMissingName("genshin", "旅人（お試し）")).toBe("derived");
    // 調査で対象外と確定した名前だけを明示的に除外する（NFKC で全角/半角の揺れは吸収する）。
    expect(classifyMissingName("genshin", "炎神")).toBe("derived");
    expect(classifyMissingName("hsr", "銀狼LV.999")).toBe("derived");
    expect(classifyMissingName("hsr", "銀狼ＬＶ．999")).toBe("derived");
  });

  it("推奨PTのメンバー名に未解決が無く、実装待ちの言及を件数付きで集計する", () => {
    const summary = memberResolutionSummary();
    expect(summary.unknown).toEqual([]);
    expect(summary.upcoming.length).toBeGreaterThan(0);
    expect(summary.upcoming[0]!.mentions).toBeGreaterThanOrEqual(summary.upcoming.at(-1)!.mentions);
    // 実装待ちとして登録した名前だけが出る。
    expect(summary.upcoming.map((entry) => entry.name)).toContain("オデット");
  });

  it("P0〜P3 を分類し、P0 は外部メタデータ由来の入力から作る", () => {
    const records = auditRecords(TODAY);
    const buckets = prioritize(records, { staleDays: 180, newCharacters: [{ game: "hsr", name: "アシュヴェイル" }] });
    expect(buckets.map((bucket) => bucket.id)).toEqual(["P0", "P1", "P2", "P3"]);
    expect(buckets[0]!.items).toHaveLength(1);
    expect(buckets[1]!.items).toEqual([]); // 全251名精査済みのため P1 は空
    // P2 は凸データ未整備の5名（公式未実装・未解決ID）だけ。ジェイド・ジェパードは第18バッチで個別ガイドを登録して解消した。
    expect(buckets[2]!.items).toHaveLength(5);
    expect(buckets[2]!.items.filter((item) => item.reason.includes("凸データ未整備"))).toHaveLength(5);
    expect(buckets[2]!.items.filter((item) => item.reason.includes("個別ガイド無し"))).toEqual([]);
  });

  it("P2 と P3 は重複しない（欠落があるキャラクターは経過日数で二重計上しない）", () => {
    const records = auditRecords("2030-01-01"); // 全件が stale になる日付
    const buckets = prioritize(records, { staleDays: 180 });
    const p2 = new Set(buckets[2]!.items.map((item) => `${item.game}:${item.name}`));
    expect(buckets[3]!.items.some((item) => p2.has(`${item.game}:${item.name}`))).toBe(false);
  });

  it("次の着手候補は台帳の次バッチ候補を先頭に最大20名を返す", () => {
    const buckets = prioritize(auditRecords("2030-01-01"), { staleDays: 180 });
    const proposed = proposedNext(buckets);
    expect(proposed.length).toBeLessThanOrEqual(20);
    expect(new Set(proposed.map((entry) => `${entry.game}:${entry.name}`)).size).toBe(proposed.length);
  });

  it("日数計算が UTC 基準で安定している", () => {
    expect(daysBetween("2026-09-01", "2026-09-10")).toBe(9);
    expect(daysBetween("2026-09-10", "2026-09-10")).toBe(0);
  });
});
