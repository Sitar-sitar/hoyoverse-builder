// @vitest-environment jsdom
import { LanguageProvider } from "@/contexts/LanguageContext";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react";
import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import CharacterCatalog from "./CharacterCatalog";
import PartyAppearances from "@/components/PartyAppearances";

const text = (ja: string, en = ja, zh = ja) => ({ ja, en, "zh-CN": zh });
const appearance = {
  id: "shared@エレン",
  teamId: "shared",
  origin: "ライカン",
  title: text("出演カード", "Appearance card", "队伍卡片"),
  members: [
    { name: text("エレン"), role: text("主力") },
    { name: text("ライカン", "Lycaon", "莱卡恩"), role: text("支援") },
  ],
  synergy: [],
  targetChanges: [],
  targetSummary: text("非表示の目標"),
  gameVersion: "3.1",
  dataAsOf: "2026-10-01",
  updatedAt: "2026-10-08",
  sourceLabel: text("公開出典", "Public source", "公开来源"),
  sourceUrl: "https://example.com/source",
  communitySources: [],
};
const options = [
  { ...appearance, id: "recommended", rank: 1, title: text("本人の推奨") },
];
const state = vi.hoisted(() => ({
  variants: {} as Record<string, string>,
  appearances: undefined as unknown,
  loading: false,
  error: null as null | { message: string },
  refetch: vi.fn(),
}));
vi.mock("@/contexts/DisplaySettingsContext", () => ({
  useDisplayVariant: (key: string) => state.variants[key] ?? "legacy",
}));
vi.mock("@/lib/trpc", () => ({
  trpc: {
    build: {
      referenceCatalog: {
        useQuery: () => ({
          data: {
            total: 2,
            reviewed: 2,
            games: {
              hsr: [],
              genshin: [],
              zzz: ["エレン", "ライカン"].map(name => ({
                game: "zzz",
                name,
                status: "reviewed",
                batch: 3,
              })),
            },
          },
          isLoading: false,
        }),
      },
      reference: {
        useQuery: (input: { name: string }) => ({
          data:
            state.loading || state.error
              ? undefined
              : {
                  game: "zzz",
                  name: input.name,
                  status: "reviewed",
                  batch: 3,
                  guide: {
                    headline: "ビルド",
                    relicSet: "—",
                    planarSet: "—",
                    mainStats: [],
                    targets: [
                      {
                        key: "critRate",
                        label: "会心率",
                        unit: "%",
                        targets: { 厳選: 80, 目標: 70, 妥協: 60 },
                      },
                    ],
                  },
                  partyRecommendations: { options },
                  partyAppearances:
                    input.name === "エレン" ? state.appearances : [],
                  constellations: { dataStatus: "preparing", effects: [] },
                },
          isFetching: state.loading,
          isLoading: state.loading,
          error: state.error,
          refetch: state.refetch,
        }),
      },
    },
  },
}));
function open(language = "ja") {
  window.localStorage.setItem("starrail-build-advisor.language", language);
  window.history.replaceState({}, "", "/characters?game=zzz&character=エレン");
  return render(
    <LanguageProvider>
      <CharacterCatalog />
    </LanguageProvider>
  );
}
beforeEach(() => {
  state.variants = {};
  state.appearances = [appearance];
  state.loading = false;
  state.error = null;
  state.refetch.mockClear();
  Element.prototype.scrollIntoView = vi.fn();
});
afterEach(cleanup);
describe("appearance catalog integration", () => {
  for (const catalogShelf of ["legacy", "shelf"])
    for (const partyFormation of ["legacy", "formation"])
      it(`${catalogShelf}/${partyFormation} shows independent cards in the party section`, () => {
        state.variants = { catalogShelf, partyFormation };
        open();
        const heading = screen.getByRole("heading", {
          name: "このキャラが入るほかの編成",
        });
        expect(heading.tagName).toBe("H4");
        const block = heading.parentElement!;
        expect(block.closest("section")).not.toBeNull();
        expect(
          within(block).getByRole("heading", { level: 5 }).textContent
        ).toBe("出演カード");
        expect(within(block).queryAllByRole("button")).toHaveLength(0);
        expect(within(block).queryAllByRole("tab")).toHaveLength(0);
        expect(block.textContent).not.toContain("非表示の目標");
        expect(within(block).getByRole("link").getAttribute("rel")).toBe(
          "noopener noreferrer"
        );
        expect(within(block).getByRole("link").getAttribute("href")).toBe(
          appearance.sourceUrl
        );
        expect(block.textContent).toContain("2026-10-08");
        expect(screen.getByRole("table").textContent).toContain("70%");
      });
  for (const [lang, title, origin] of [
    ["ja", "このキャラが入るほかの編成", "出典の起点：ライカン"],
    ["en", "Other teams featuring this character", "Source character: Lycaon"],
    ["zh-CN", "包含该角色的其他队伍", "来源角色：莱卡恩"],
  ])
    it(`localizes ${lang}`, () => {
      open(lang);
      expect(screen.getByRole("heading", { name: title })).toBeTruthy();
      expect(screen.getByText(origin)).toBeTruthy();
    });
  for (const value of [undefined, null, [], {}])
    it(`hides optional block for ${JSON.stringify(value)}`, () => {
      state.appearances = value;
      open();
      expect(screen.queryByText("このキャラが入るほかの編成")).toBeNull();
      expect(screen.getByRole("table")).toBeTruthy();
    });
  it("falls back to saved origin and never shows a target summary", () => {
    render(
      <PartyAppearances
        appearances={[{ ...appearance, origin: "未翻訳" }]}
        language="en"
      />
    );
    expect(screen.getByText("Source character: 未翻訳")).toBeTruthy();
  });
  it("switching owner clears cards", () => {
    open();
    fireEvent.click(
      within(screen.getByRole("complementary")).getByRole("button", {
        name: /ライカン/,
      })
    );
    expect(screen.queryByText("このキャラが入るほかの編成")).toBeNull();
  });
  it("loading hides cards while retaining loading feedback", () => {
    state.loading = true;
    open();
    expect(screen.queryByText("このキャラが入るほかの編成")).toBeNull();
    expect(document.querySelector(".animate-spin")).toBeTruthy();
  });
  it("shelf error retains retry", () => {
    state.variants = { catalogShelf: "shelf" };
    state.error = { message: "検証エラー" };
    open();
    expect(screen.queryByText("このキャラが入るほかの編成")).toBeNull();
    fireEvent.click(
      screen.getByRole("button", { name: /再試行|もう一度|再取得/ })
    );
    expect(state.refetch).toHaveBeenCalled();
  });
});
