// @vitest-environment jsdom
import { LanguageProvider } from "@/contexts/LanguageContext";
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Home from "./Home";

/** F1・F2: 表示キー topPortal の分岐。照会の状態と処理は Home の既存経路のまま、先頭の見せ方だけが変わることを確かめる。 */

const character = {
  id: "eren", name: "エレン", level: 60, rank: 0, portrait: null, element: "氷", elementColor: null, path: "強攻",
  lightCone: null, relics: [], allStats: [],
  guide: { headline: "検証用", relicSet: "—", planarSet: "—", mainStats: [] },
  comparisons: [], recommendations: [], equipmentActions: [],
};

type LookupMode = "ok" | "empty" | "error" | "fetching";
const mocks = vi.hoisted(() => ({
  variants: {} as Record<string, string>,
  lastUid: "",
  lookupMode: "ok" as LookupMode,
  lookupInputs: [] as Array<{ game: string; uid: string }>,
  catalogCalls: 0,
  catalog: { data: undefined as unknown, isError: false, refetch: () => undefined as unknown },
}));
vi.mock("@/contexts/DisplaySettingsContext", () => ({ useDisplayVariant: (key: string) => mocks.variants[key] ?? "legacy" }));
vi.mock("@/lib/uidHistory", () => ({ isValidUidForGame: (_game: string, uid: string) => /^\d{9,10}$/.test(uid), loadLastUid: () => mocks.lastUid, saveLastUid: () => undefined }));
vi.mock("@/lib/trpc", () => ({
  trpc: {
    build: {
      lookup: {
        useQuery: (input: { game: string; uid: string }, options: { enabled?: boolean }) => {
          if (!options.enabled) return { data: undefined, isFetching: false, error: null };
          mocks.lookupInputs.push(input);
          if (mocks.lookupMode === "fetching") return { data: undefined, isFetching: true, error: null };
          if (mocks.lookupMode === "error") return { data: undefined, isFetching: false, error: { message: "照会できませんでした" } };
          return { data: { player: { uid: input.uid, name: "検証用", level: 60 }, cached: false, fetchedAt: "2026-09-15T08:00:00.000Z", characters: mocks.lookupMode === "ok" ? [character] : [] }, isFetching: false, error: null };
        },
      },
      referenceCatalog: { useQuery: () => { mocks.catalogCalls += 1; return mocks.catalog; } },
    },
  },
}));

const catalogData = { total: 5, reviewed: 5, games: { hsr: [{}, {}], genshin: [{}], zzz: [{}, {}] } };
const renderHome = (url = "/") => {
  window.history.replaceState({}, "", url);
  return render(<LanguageProvider><Home /></LanguageProvider>);
};
const submit = () => fireEvent.click(screen.getByRole("button", { name: "照会する" }));
const portal = () => screen.getByTestId("top-portal");

describe("表示キー topPortal の分岐", () => {
  beforeEach(() => {
    window.localStorage.setItem("starrail-build-advisor.language", "ja");
    mocks.variants = {};
    mocks.lastUid = "";
    mocks.lookupMode = "ok";
    mocks.lookupInputs = [];
    mocks.catalogCalls = 0;
    mocks.catalog = { data: catalogData, isError: false, refetch: vi.fn() };
  });
  afterEach(() => cleanup());

  it("F2 legacy は現行の見出しと利用手順のままで、図鑑の収録数を取得しない", () => {
    renderHome();
    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe("Build withIntention.");
    expect(screen.queryByTestId("top-portal")).toBeNull();
    expect(screen.getByText("利用手順 / 01—03")).toBeTruthy();
    expect(mocks.catalogCalls).toBe(0);
  });

  it("F2 portal は HSR→原神→ZZZ の順に収録数と入口を出し、取得中は —、失敗時は — と再取得", () => {
    mocks.variants = { topPortal: "portal" };
    const view = renderHome();
    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe("HoYoverse Builder");
    expect(screen.queryByText("Intention.")).toBeNull();
    const panels = [...portal().querySelectorAll("[data-testid^='portal-panel-']")].map((panel) => panel.getAttribute("data-game"));
    expect(panels).toEqual(["hsr", "genshin", "zzz"]);
    expect(["hsr", "genshin", "zzz"].map((id) => screen.getByTestId(`portal-count-${id}`).textContent)).toEqual(["2", "1", "2"]);
    expect(within(screen.getByTestId("portal-panel-genshin")).getByRole("link", { name: "図鑑を見る" }).getAttribute("href")).toContain("/characters?game=genshin");
    view.unmount();

    mocks.catalog = { data: undefined, isError: false, refetch: vi.fn() };
    const loading = renderHome();
    expect(screen.getByTestId("portal-count-hsr").textContent).toBe("—");
    expect(screen.queryByRole("button", { name: /再取得/ })).toBeNull();
    loading.unmount();

    const refetch = vi.fn();
    mocks.catalog = { data: undefined, isError: true, refetch };
    renderHome();
    expect(screen.getByTestId("portal-count-zzz").textContent).toBe("—");
    fireEvent.click(screen.getByRole("button", { name: /再取得/ }));
    expect(refetch).toHaveBeenCalledTimes(1);
  });

  it("F2 注記と利用手順を3言語で残す", () => {
    mocks.variants = { topPortal: "portal" };
    for (const [language, guide, third] of [["ja", "利用手順 / 01—03", "本サイトは各ゲームの公式"], ["en", "HOW IT WORKS / 01—03", "not an official"], ["zh-CN", "使用步骤 / 01—03", "非任何游戏的官方"]]) {
      window.localStorage.setItem("starrail-build-advisor.language", language);
      const view = renderHome();
      expect(screen.getByText(guide)).toBeTruthy();
      expect(screen.getByTestId("portal-notes").textContent).toContain(third);
      view.unmount();
    }
  });

  it("F1 記憶済み UID・URL の UID は入力欄に入れるだけで、送信前は照会しない", () => {
    mocks.variants = { topPortal: "portal" };
    mocks.lastUid = "800000001";
    const view = renderHome();
    expect((within(screen.getByTestId("portal-panel-hsr")).getByRole("textbox") as HTMLInputElement).value).toBe("800000001");
    view.unmount();
    renderHome("/?game=zzz&uid=1300000001");
    expect((within(screen.getByTestId("portal-panel-zzz")).getByRole("textbox") as HTMLInputElement).value).toBe("1300000001");
    expect(screen.getAllByRole("textbox")).toHaveLength(1);
    expect(mocks.lookupInputs).toHaveLength(0);
    submit();
    expect(mocks.lookupInputs.at(-1)).toEqual({ game: "zzz", uid: "1300000001" });
  });

  it("F1 成功後は帯に縮み、UIDの変更は再照会せず結果を保ち、別ゲームを選ぶと結果を消して入力へ戻る", () => {
    mocks.variants = { topPortal: "portal" };
    renderHome("/?game=zzz&uid=1300000001");
    submit();
    expect(portal().dataset.collapsed).toBe("true");
    expect(within(screen.getByRole("group", { name: "ほかのゲーム" })).getAllByRole("button").map((button) => button.textContent)).toEqual(["HSR / 崩壊：スターレイル", "GI / 原神"]);
    expect(screen.getByText("公開キャラクター")).toBeTruthy();
    expect(screen.queryByText("利用手順 / 01—03")).toBeNull();

    fireEvent.click(screen.getByRole("button", { name: "UIDを変更" }));
    expect(portal().dataset.collapsed).toBe("false");
    const input = screen.getByRole("textbox") as HTMLInputElement;
    expect(document.activeElement).toBe(input);
    const lookups = mocks.lookupInputs.length;
    fireEvent.change(input, { target: { value: "1300000002" } });
    expect(mocks.lookupInputs.every((entry) => entry.uid === "1300000001")).toBe(true);
    expect(mocks.lookupInputs.length).toBeGreaterThanOrEqual(lookups);
    expect(screen.getByText("公開キャラクター")).toBeTruthy();

    submit();
    expect(portal().dataset.collapsed).toBe("true");
    expect(mocks.lookupInputs.at(-1)).toEqual({ game: "zzz", uid: "1300000002" });

    fireEvent.click(screen.getByRole("button", { name: "GI / 原神" }));
    expect(portal().dataset.collapsed).toBe("false");
    expect(screen.getByTestId("portal-panel-genshin").getAttribute("aria-current")).toBe("true");
    expect(within(screen.getByTestId("portal-panel-genshin")).getByRole("textbox")).toBeTruthy();
    expect(screen.queryByText("公開キャラクター")).toBeNull();
  });

  it("F1 通信中・失敗・0件ではフォームを開いたままにし、失敗後も再送信できる", () => {
    mocks.variants = { topPortal: "portal" };
    mocks.lookupMode = "fetching";
    const view = renderHome("/?game=hsr&uid=800000001");
    submit();
    expect(portal().dataset.collapsed).toBe("false");
    expect((screen.getByRole("button", { name: "照会する" }) as HTMLButtonElement).disabled).toBe(true);
    view.unmount();

    mocks.lookupMode = "error";
    renderHome("/?game=hsr&uid=800000001");
    submit();
    expect(portal().dataset.collapsed).toBe("false");
    expect(screen.getByText("照会できませんでした")).toBeTruthy();
    mocks.lookupMode = "empty";
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "800000002" } });
    submit();
    expect(mocks.lookupInputs.at(-1)).toEqual({ game: "hsr", uid: "800000002" });
    expect(portal().dataset.collapsed).toBe("false");
    expect(screen.getByRole("textbox")).toBeTruthy();
  });

  it("F1 表示案の切替では Home の入力値を初期化しない", () => {
    mocks.variants = { topPortal: "portal" };
    const view = renderHome("/?game=genshin&uid=800000001");
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "800000009" } });
    mocks.variants = {};
    view.rerender(<LanguageProvider><Home /></LanguageProvider>);
    expect((screen.getByRole("textbox") as HTMLInputElement).value).toBe("800000009");
    expect(screen.queryByTestId("top-portal")).toBeNull();
  });
});
