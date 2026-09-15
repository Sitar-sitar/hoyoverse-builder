// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { LanguageProvider } from "@/contexts/LanguageContext";
import DisplaySettingsAdmin from "./DisplaySettingsAdmin";

type Entries = Array<{ key: string; variant: string; updatedAt: string | null }>;
const entries = (variant: string, updatedAt: string | null = null, gauge = "legacy"): { entries: Entries } => ({ entries: [{ key: "progressionStepper", variant, updatedAt }, { key: "statGauge", variant: gauge, updatedAt: null }, { key: "partyFormation", variant: "legacy", updatedAt: null }, { key: "topPortal", variant: "legacy", updatedAt: null }, { key: "siteChrome", variant: "legacy", updatedAt: null }] });

const mocks = vi.hoisted(() => ({
  authState: { user: { id: 1, role: "admin" } as { id: number; role: string } | null, loading: false, isAuthenticated: true },
  adminQuery: {} as { data: unknown; isLoading: boolean; isError: boolean; refetch: ReturnType<typeof vi.fn> },
  mutateAsync: vi.fn(),
  isPending: false,
  setData: vi.fn(),
  invalidate: vi.fn(),
  setPreview: vi.fn(),
  clearPreview: vi.fn(),
  preview: null as Record<string, string> | null,
  startLogin: vi.fn(),
}));

vi.mock("@/_core/hooks/useAuth", () => ({ useAuth: () => mocks.authState }));
vi.mock("@/const", () => ({ startLogin: mocks.startLogin }));
vi.mock("@/contexts/DisplaySettingsContext", () => ({
  useDisplaySettings: () => ({ preview: mocks.preview, setPreview: mocks.setPreview, clearPreview: mocks.clearPreview }),
}));
vi.mock("@/lib/trpc", () => ({
  trpc: {
    display: {
      adminSettings: { useQuery: () => mocks.adminQuery },
      publish: { useMutation: () => ({ mutateAsync: mocks.mutateAsync, isPending: mocks.isPending }) },
    },
    useUtils: () => ({ display: { settings: { setData: mocks.setData, invalidate: mocks.invalidate } } }),
  },
}));

const renderPage = () => render(<LanguageProvider><DisplaySettingsAdmin /></LanguageProvider>);
const publishButton = () => screen.getByRole("button", { name: "公開する" });

describe("DisplaySettingsAdmin", () => {
  beforeEach(() => {
    mocks.authState = { user: { id: 1, role: "admin" }, loading: false, isAuthenticated: true };
    mocks.adminQuery = { data: entries("legacy"), isLoading: false, isError: false, refetch: vi.fn(async () => ({ data: entries("legacy"), isError: false })) };
    mocks.mutateAsync.mockReset();
    mocks.isPending = false;
    mocks.setData.mockReset();
    mocks.invalidate.mockReset();
    mocks.invalidate.mockResolvedValue(undefined);
    mocks.setPreview.mockReset();
    mocks.clearPreview.mockReset();
    mocks.preview = null;
    window.history.replaceState(null, "", "/admin/display");
  });
  afterEach(() => cleanup());

  it("T6 非管理者には操作 UI を出さない", () => {
    mocks.authState = { user: { id: 2, role: "user" }, loading: false, isAuthenticated: true };
    renderPage();
    expect(screen.getByText("管理者権限がありません")).toBeTruthy();
    expect(screen.queryByRole("radio")).toBeNull();
    expect(screen.queryByRole("button", { name: "公開する" })).toBeNull();
  });

  it("T6 変更が無いと公開できず、変更すると確認ダイアログに差分だけが並ぶ", async () => {
    renderPage();
    expect((publishButton() as HTMLButtonElement).disabled).toBe(true);

    fireEvent.click(screen.getByRole("radio", { name: /縦のタイムライン/ }));
    expect((publishButton() as HTMLButtonElement).disabled).toBe(false);
    fireEvent.click(publishButton());

    const dialog = await screen.findByRole("alertdialog");
    expect(mocks.adminQuery.refetch).toHaveBeenCalled();
    const items = within(within(dialog).getByRole("list", { name: "公開する変更" })).getAllByRole("listitem");
    expect(items.map((item) => item.textContent)).toEqual(["凸の6段表示：現行 → 縦のタイムライン"]);
  });

  it("T14 公開直前に取り直した公開値と同じなら、ダイアログを出さずに知らせる（U08）", async () => {
    mocks.adminQuery.refetch = vi.fn(async () => ({ data: entries("stepper"), isError: false }));
    renderPage();
    fireEvent.click(screen.getByRole("radio", { name: /縦のタイムライン/ }));
    fireEvent.click(publishButton());
    expect(await screen.findByText("公開中の設定と同じため、公開する変更はありません。")).toBeTruthy();
    expect(screen.queryByRole("alertdialog")).toBeNull();
  });

  it("T14 管理用の取得に失敗したら、全キー現行と誤表示せず公開操作を出さない（U07）", () => {
    mocks.adminQuery = { data: undefined, isLoading: false, isError: true, refetch: vi.fn() };
    renderPage();
    expect(screen.getByRole("alert").textContent).toContain("取得できませんでした");
    expect(screen.queryByRole("radio")).toBeNull();
    expect(screen.queryByRole("button", { name: "公開する" })).toBeNull();
  });

  it("T14 公開に成功したら公開値のキャッシュを更新し、プレビューを消して成功を表示する", async () => {
    mocks.mutateAsync.mockResolvedValue({ variants: { progressionStepper: "stepper" }, source: "database" });
    renderPage();
    fireEvent.click(screen.getByRole("radio", { name: /縦のタイムライン/ }));
    fireEvent.click(publishButton());
    const dialog = await screen.findByRole("alertdialog");
    mocks.adminQuery.refetch = vi.fn(async () => ({ data: entries("stepper", "2026-09-13T08:00:00.000Z"), isError: false }));
    fireEvent.click(within(dialog).getByRole("button", { name: "公開する" }));

    expect(await screen.findByText("公開しました。")).toBeTruthy();
    expect(mocks.mutateAsync).toHaveBeenCalledWith({ changes: [{ key: "progressionStepper", variant: "stepper" }] });
    expect(mocks.setData).toHaveBeenCalledWith(undefined, { variants: { progressionStepper: "stepper" }, source: "database" });
    expect(mocks.clearPreview).toHaveBeenCalled();
  });

  it("T14 保存は成功したが再取得に失敗した場合は、保存失敗と区別して表示する（U09）", async () => {
    mocks.mutateAsync.mockResolvedValue({ variants: {}, source: "default" });
    renderPage();
    fireEvent.click(screen.getByRole("radio", { name: /縦のタイムライン/ }));
    fireEvent.click(publishButton());
    const dialog = await screen.findByRole("alertdialog");
    mocks.adminQuery.refetch = vi.fn(async () => ({ data: undefined, isError: true }));
    fireEvent.click(within(dialog).getByRole("button", { name: "公開する" }));

    expect(await screen.findByText("公開しました。最新状態の取得に失敗したため、再読み込みしてください。")).toBeTruthy();
    expect(mocks.setData).not.toHaveBeenCalled();
    expect(screen.queryByText("保存できませんでした。時間をおいて再度お試しください。")).toBeNull();
  });

  it("T14 保存に失敗したら失敗を表示し、選択状態を保持する", async () => {
    mocks.mutateAsync.mockRejectedValue(new Error("Unable to save display settings"));
    renderPage();
    fireEvent.click(screen.getByRole("radio", { name: /縦のタイムライン/ }));
    fireEvent.click(publishButton());
    fireEvent.click(within(await screen.findByRole("alertdialog")).getByRole("button", { name: "公開する" }));

    expect(await screen.findByText("保存できませんでした。時間をおいて再度お試しください。")).toBeTruthy();
    expect((screen.getByRole("radio", { name: /縦のタイムライン/ }) as HTMLInputElement).checked).toBe(true);
    expect(mocks.clearPreview).not.toHaveBeenCalled();
  });

  it("T14 送信中は操作ボタンを無効にして二重送信しない", () => {
    mocks.isPending = true;
    renderPage();
    expect((screen.getByRole("button", { name: "公開しています" }) as HTMLButtonElement).disabled).toBe(true);
    expect((screen.getByRole("button", { name: /すべて現行に戻す/ }) as HTMLButtonElement).disabled).toBe(true);
    expect((screen.getByRole("button", { name: /この組み合わせをプレビュー/ }) as HTMLButtonElement).disabled).toBe(true);
  });

  it("プレビューは選んだ値を Provider へ渡し、選んだ画面へ遷移する", async () => {
    renderPage();
    fireEvent.click(screen.getByRole("radio", { name: /縦のタイムライン/ }));
    fireEvent.change(screen.getByLabelText("プレビューで開く画面"), { target: { value: "/" } });
    fireEvent.click(screen.getByRole("button", { name: /この組み合わせをプレビュー/ }));
    expect(mocks.setPreview).toHaveBeenCalledWith({ progressionStepper: "stepper", statGauge: "legacy", partyFormation: "legacy", topPortal: "legacy", siteChrome: "legacy" });
    await waitFor(() => expect(window.location.pathname).toBe("/"));
  });

  it("E-1 プレビュー先に翻訳フィードバックを選べる", async () => {
    renderPage();
    expect([...(screen.getByLabelText("プレビューで開く画面") as HTMLSelectElement).options].map((item) => item.value)).toEqual(["/", "/characters", "/updates", "/feedback"]);
    fireEvent.click(screen.getByRole("radio", { name: /共通ヘッダー/ }));
    fireEvent.change(screen.getByLabelText("プレビューで開く画面"), { target: { value: "/feedback" } });
    fireEvent.click(screen.getByRole("button", { name: /この組み合わせをプレビュー/ }));
    expect(mocks.setPreview).toHaveBeenCalledWith(expect.objectContaining({ siteChrome: "unified" }));
    await waitFor(() => expect(window.location.pathname).toBe("/feedback"));
  });

  it("プレビュー中に戻ってきたら、フォームをプレビュー値で初期化する", () => {
    mocks.preview = { progressionStepper: "stepper" };
    renderPage();
    expect((screen.getByRole("radio", { name: /縦のタイムライン/ }) as HTMLInputElement).checked).toBe(true);
    expect((publishButton() as HTMLButtonElement).disabled).toBe(false);
  });

  it("R2 登録した達成ゲージも選択でき、公開する差分はそのキーだけになる", async () => {
    renderPage();
    expect([...document.querySelectorAll("fieldset > legend")].map((legend) => legend.textContent)).toEqual(["案 D凸の6段表示", "案 A目標の達成ゲージ", "案 C推奨PTの隊列", "案 Fトップの3ゲーム入口", "案 E-1共通ヘッダーとゲーム別アクセント"]);
    fireEvent.click(screen.getByRole("radio", { name: /達成ゲージ/ }));
    fireEvent.click(publishButton());
    const dialog = await screen.findByRole("alertdialog");
    expect(within(dialog).getAllByRole("listitem").map((item) => item.textContent)).toEqual(["目標の達成ゲージ：現行 → 達成ゲージ"]);
  });

  it("R2 応答に無い登録キーは現行として選択済みにする", () => {
    mocks.adminQuery = { data: { entries: [{ key: "progressionStepper", variant: "legacy", updatedAt: null }] }, isLoading: false, isError: false, refetch: vi.fn(async () => ({ data: entries("legacy"), isError: false })) };
    renderPage();
    const legacyRadios = screen.getAllByRole("radio", { name: /現行/ }) as HTMLInputElement[];
    expect(legacyRadios).toHaveLength(5);
    expect(legacyRadios.every((radio) => radio.checked)).toBe(true);
  });

  it("すべて現行に戻すは、公開中の差分だけを legacy にする", async () => {
    mocks.adminQuery.data = entries("stepper");
    mocks.adminQuery.refetch = vi.fn(async () => ({ data: entries("stepper"), isError: false }));
    renderPage();
    fireEvent.click(screen.getByRole("button", { name: /すべて現行に戻す/ }));
    const dialog = await screen.findByRole("alertdialog");
    expect(within(dialog).getByText("すべて現行の見せ方に戻しますか？")).toBeTruthy();
    expect(within(dialog).getAllByRole("listitem").map((item) => item.textContent)).toEqual(["凸の6段表示：縦のタイムライン → 現行"]);
  });
});
