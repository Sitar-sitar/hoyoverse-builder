import { describe, expect, it, vi } from "vitest";
import type { TrpcContext } from "./_core/context";
import type { GlossaryEntry } from "../shared/content/glossary";

vi.mock("./db", () => ({ recordLookupAnalyticsEvent: vi.fn().mockResolvedValue(undefined) }));
// 架空の用語（テスト専用 fixture）。HSR だけにデータがある状態を作る。
vi.mock("../content/glossary/hsr", () => ({
  entries: [
    { id: "test-alpha", category: "world", name: "テスト用語甲", reading: "てすとこう", summary: "架空の要約。", body: "[[test-beta]]を参照。", formerIds: ["test-old"], sources: [{ label: "テスト", url: "https://example.com/" }], gameVersion: "1.0", dataAsOf: "2026-11-01" },
    { id: "test-beta", category: "battle", name: "テスト用語乙", reading: "てすとおつ", summary: "架空の要約。", body: "本文。", related: ["test-alpha"], sources: [{ label: "テスト", url: "https://example.com/" }], gameVersion: "1.0", dataAsOf: "2026-11-01" },
  ] satisfies GlossaryEntry[],
}));

// 実データの登録状況に依存せず、空のゲームを検証する。
vi.mock("../content/glossary/zzz", () => ({ entries: [] }));

import { appRouter } from "./routers";
import { contentManifest } from "./content/repository";

const caller = appRouter.createCaller({
  req: { headers: {}, socket: { remoteAddress: "127.73.0.1" } },
  res: { setHeader: vi.fn() }, user: null,
} as unknown as TrpcContext);

describe("build.glossary", () => {
  it("1 ゲーム分の用語集を返す", async () => {
    const dto = await caller.build.glossary({ game: "hsr" });
    expect(dto).toMatchObject({ schemaVersion: 1, language: "ja", game: "hsr", contentRevision: contentManifest().contentRevision });
    expect(dto.entries.map(entry => entry.id)).toEqual(["test-beta", "test-alpha"]);
    expect(dto.categories.map(category => category.id)).toEqual(["battle", "world"]);
    expect(dto.redirects).toEqual({ "test-old": "test-alpha" });
    const alpha = dto.entries.find(entry => entry.id === "test-alpha")!;
    expect(alpha.body).toEqual([[{ type: "term", id: "test-beta", label: "テスト用語乙" }, { type: "text", text: "を参照。" }]]);
    expect(alpha.related).toEqual([{ id: "test-beta", name: "テスト用語乙" }]);
    expect(alpha.mentionedBy).toEqual([]);
  });
  it("用語が 0 件のゲームは空の一覧を返す", async () => {
    const dto = await caller.build.glossary({ game: "zzz" });
    expect(dto.entries).toEqual([]);
    expect(dto.categories).toEqual([]);
    expect(dto.redirects).toEqual({});
  });
  it("未知のゲームは入力検証で拒否する", async () => {
    await expect(caller.build.glossary({ game: "unknown" } as never)).rejects.toMatchObject({ code: "BAD_REQUEST" });
  });
});
