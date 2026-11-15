// @vitest-environment jsdom
import { act, cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import React from "react";
import { Router } from "wouter";
import { LanguageProvider } from "@/contexts/LanguageContext";
import type { GlossaryDTO } from "@shared/content/glossary";

// 架空の用語（テスト専用 fixture）。HSR だけに用語がある状態を作る。
const dto: GlossaryDTO = {
  schemaVersion: 1, contentRevision: "rev", language: "ja", game: "hsr",
  categories: [{ id: "battle", label: "戦闘" }, { id: "world", label: "世界観" }],
  entries: [
    { id: "alpha", category: "world", name: "テスト用語甲", reading: "てすとこう", aliases: ["甲"], summary: "甲の要約。",
      body: [[{ type: "text", text: "甲は" }, { type: "term", id: "beta", label: "乙たち" }, { type: "text", text: "と関係する。" }]],
      related: [{ id: "beta", name: "テスト用語乙" }], mentionedBy: [], characters: [{ identityKey: "hsr:9001", name: "テスト開拓者" }],
      spoiler: false, sources: [{ label: "テスト出典", url: "https://example.com/" }], gameVersion: "1.0", dataAsOf: "2026-11-01" },
    { id: "beta", category: "battle", name: "テスト用語乙", reading: "てすとおつ", aliases: [], summary: "乙の要約。",
      body: [[{ type: "text", text: "乙の本文。" }]],
      related: [{ id: "alpha", name: "テスト用語甲" }], mentionedBy: [], characters: [],
      spoiler: true, sources: [{ label: "テスト出典", url: "https://example.com/" }], gameVersion: "1.0", dataAsOf: "2026-11-01" },
  ],
  redirects: { "old-alpha": "alpha" },
};

vi.mock("@/content/manifest", () => ({ CONTENT_MANIFEST: { schemaVersion: 1, contentRevision: "rev", translationMode: "preparation", readyLanguages: ["ja"], glossaryGames: ["hsr"] } }));
vi.mock("@/lib/trpc", () => ({
  trpc: { build: { glossary: { useQuery: ({ game }: { game: string }) => ({ isLoading: false, isError: false, data: game === "hsr" ? dto : undefined, refetch: () => undefined }) } } },
}));

import Glossary from "./Glossary";

function renderAt(search: string) {
  window.history.replaceState(null, "", `/glossary${search}`);
  return render(<LanguageProvider><Router><Glossary /></Router></LanguageProvider>);
}
const detail = () => screen.getByTestId("glossary-detail");

describe("用語集の画面", () => {
  beforeEach(() => window.localStorage.setItem("starrail-build-advisor.language", "ja"));
  afterEach(() => cleanup());

  it("ヘッダーに用語集が現在地として出て、一覧は五十音順のまま件数とカテゴリを示す", () => {
    renderAt("?game=hsr");
    const nav = within(screen.getByTestId("site-header")).getByRole("navigation", { name: "サイト内の移動" });
    expect(within(nav).getByRole("link", { name: "用語集" }).getAttribute("aria-current")).toBe("page");
    const list = screen.getByTestId("glossary-list");
    expect(within(list).getAllByRole("link").map((link) => link.getAttribute("href"))).toEqual(["/glossary?game=hsr&term=alpha", "/glossary?game=hsr&term=beta"]);
    expect(screen.getByText("2件")).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "戦闘" }));
    expect(within(screen.getByTestId("glossary-list")).getAllByRole("link")).toHaveLength(1);
  });

  it("検索は名前・よみ・別名・要約の部分一致で絞り込む", () => {
    renderAt("?game=hsr");
    const search = screen.getByRole("textbox", { name: "用語を検索" });
    fireEvent.change(search, { target: { value: "おつ" } });
    expect(within(screen.getByTestId("glossary-list")).getAllByRole("link").map((link) => link.textContent)).toEqual(["テスト用語乙乙の要約。"]);
    fireEvent.change(search, { target: { value: "甲" } });
    expect(within(screen.getByTestId("glossary-list")).getAllByRole("link")).toHaveLength(1);
    fireEvent.change(search, { target: { value: "該当なし" } });
    expect(screen.getByText("条件に合う用語はありません。")).toBeTruthy();
  });

  it("本文の用語リンクで詳細が切り替わり URL が増え、「戻る」で前の用語へ戻る", async () => {
    renderAt("?game=hsr&term=alpha");
    expect(within(detail()).getByRole("heading", { level: 2 }).textContent).toBe("テスト用語甲");
    const before = window.history.length;
    const link = within(detail()).getByRole("link", { name: "乙たち" });
    expect(link.getAttribute("href")).toBe("/glossary?game=hsr&term=beta");
    fireEvent.click(link);
    expect(window.location.search).toBe("?game=hsr&term=beta");
    expect(window.history.length).toBe(before + 1);
    const heading = within(detail()).getByRole("heading", { level: 2 });
    expect(heading.textContent).toBe("テスト用語乙");
    expect(document.activeElement).toBe(heading);
    await act(async () => {
      window.history.back();
      await new Promise((resolve) => setTimeout(resolve, 30));
    });
    expect(window.location.search).toBe("?game=hsr&term=alpha");
    expect(within(detail()).getByRole("heading", { level: 2 }).textContent).toBe("テスト用語甲");
  });

  it("修飾キー付きのクリックは画面内で切り替えず、ブラウザに任せる", () => {
    renderAt("?game=hsr&term=alpha");
    fireEvent.click(within(detail()).getByRole("link", { name: "乙たち" }), { ctrlKey: true });
    expect(window.location.search).toBe("?game=hsr&term=alpha");
  });

  it("詳細は関連用語・関連キャラクター（図鑑へのリンク）・出典を示す", () => {
    renderAt("?game=hsr&term=alpha");
    expect(within(detail()).getByRole("link", { name: "テスト用語乙" }).getAttribute("href")).toBe("/glossary?game=hsr&term=beta");
    expect(within(detail()).getByRole("link", { name: "テスト開拓者" }).getAttribute("href")).toBe("/characters?game=hsr&character=%E3%83%86%E3%82%B9%E3%83%88%E9%96%8B%E6%8B%93%E8%80%85");
    expect(within(detail()).getByRole("link", { name: "テスト出典" }).getAttribute("href")).toBe("https://example.com/");
  });

  it("旧IDは現在の用語へ置き換え、存在しない用語は案内を出す", () => {
    renderAt("?game=hsr&term=old-alpha");
    expect(window.location.search).toBe("?game=hsr&term=alpha");
    expect(within(detail()).getByRole("heading", { level: 2 }).textContent).toBe("テスト用語甲");
    cleanup();
    renderAt("?game=hsr&term=missing");
    expect(screen.getByText("この用語は見つかりません。一覧から選んでください。")).toBeTruthy();
    expect(screen.getByTestId("glossary-list")).toBeTruthy();
  });

  it("ネタバレの用語は要約までを出し、本文は押すまで隠す", () => {
    renderAt("?game=hsr&term=beta");
    expect(within(detail()).getByText("乙の要約。")).toBeTruthy();
    expect(within(detail()).queryByText("乙の本文。")).toBeNull();
    fireEvent.click(within(detail()).getByRole("button", { name: "本文を表示" }));
    expect(within(detail()).getByText("乙の本文。")).toBeTruthy();
  });

  it("用語が 0 件のゲームを直接開くと準備中を出し、ゲーム切替には用語のあるゲームだけを出す", () => {
    renderAt("?game=zzz");
    expect(screen.getByTestId("glossary-preparing").textContent).toBe("このゲームの用語集は準備中です。");
    const games = within(screen.getByRole("group", { name: "ゲーム" })).getAllByRole("button");
    expect(games.map((button) => button.textContent)).toEqual(["崩壊：スターレイル"]);
  });
});
