// @vitest-environment jsdom
import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import React from "react";
import { Router } from "wouter";
import { LanguageProvider } from "@/contexts/LanguageContext";
import SiteHeader from "@/components/SiteHeader";

// 3 ゲームとも用語 0 件の出荷状態（用語集設計 §4.7.3）。
const query = vi.fn(() => ({ isLoading: false, isError: false, data: undefined, refetch: () => undefined }));
vi.mock("@/content/manifest", () => ({ CONTENT_MANIFEST: { schemaVersion: 1, contentRevision: "rev", translationMode: "preparation", readyLanguages: ["ja"], glossaryGames: [] } }));
vi.mock("@/lib/trpc", () => ({ trpc: { build: { glossary: { useQuery: (...args: unknown[]) => query(...(args as [])) } } } }));

import Glossary from "./Glossary";

describe("用語 0 件の出荷状態", () => {
  beforeEach(() => window.localStorage.setItem("starrail-build-advisor.language", "ja"));
  afterEach(() => cleanup());

  it("共通ヘッダーに「用語集」を出さず、項目は従来どおり", () => {
    render(<LanguageProvider><Router><SiteHeader activePage="catalog" /></Router></LanguageProvider>);
    const nav = within(screen.getByTestId("site-header")).getByRole("navigation", { name: "サイト内の移動" });
    expect(within(nav).getAllByRole("link").map((link) => link.textContent)).toEqual(["UID照会", "キャラ図鑑", "更新履歴", "翻訳フィードバック", "管理者"]);
  });

  it("/glossary を直接開くと準備中を出し、API を呼ばない", () => {
    window.history.replaceState(null, "", "/glossary?game=hsr&term=anything");
    render(<LanguageProvider><Router><Glossary /></Router></LanguageProvider>);
    expect(screen.getByTestId("glossary-preparing")).toBeTruthy();
    expect(screen.queryByRole("group", { name: "ゲーム" })).toBeNull();
    expect(query.mock.calls.every((call) => (call as unknown[])[1] && ((call as unknown[])[1] as { enabled: boolean }).enabled === false)).toBe(true);
  });
});
