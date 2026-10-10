// @vitest-environment jsdom
import React from "react";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
const mocks = vi.hoisted(() => ({
  auth: { user: { role: "admin" } as { role: string } | null, loading: false, isAuthenticated: true },
  query: { data: { enabledLanguages: ["ja"] }, isLoading: false, isError: false, refetch: vi.fn() },
  save: vi.fn(), setData: vi.fn(), invalidate: vi.fn(),
}));
vi.mock("@/_core/hooks/useAuth", () => ({ useAuth: () => mocks.auth }));
vi.mock("@/lib/trpc", () => ({ trpc: {
  languages: { adminSettings: { useQuery: () => mocks.query }, publish: { useMutation: () => ({ mutateAsync: mocks.save }) } },
  useUtils: () => ({ languages: { settings: { setData: mocks.setData, invalidate: mocks.invalidate }, adminSettings: { setData: mocks.setData } } }),
} }));
import LanguageSettingsAdmin from "./LanguageSettingsAdmin";
describe("言語管理画面", () => {
  beforeEach(() => {
    mocks.auth = { user: { role: "admin" }, loading: false, isAuthenticated: true };
    mocks.query = { data: { enabledLanguages: ["ja"] }, isLoading: false, isError: false, refetch: vi.fn().mockResolvedValue({ isError: false }) };
    mocks.save.mockReset().mockResolvedValue({ enabledLanguages: ["ja", "en"] });
    mocks.setData.mockReset();
    mocks.invalidate.mockReset().mockResolvedValue(undefined);
  });
  afterEach(cleanup);
  it("日本語は固定し、選択した翻訳言語を保存する", async () => {
    render(<LanguageSettingsAdmin />);
    expect((screen.getByRole("checkbox", { name: /日本語/ }) as HTMLInputElement).disabled).toBe(true);
    fireEvent.click(screen.getByRole("checkbox", { name: "English" }));
    fireEvent.click(screen.getByRole("button", { name: "保存する" }));
    await waitFor(() => expect(mocks.save).toHaveBeenCalledWith({ enabledLanguages: ["ja", "en"] }));
    await waitFor(() => expect(screen.getByRole("status").textContent).toContain("保存しました"));
    expect(mocks.setData).toHaveBeenCalledWith(undefined, { enabledLanguages: ["ja", "en"] });
  });
  it("非管理者には設定操作を表示しない", () => {
    mocks.auth.user = { role: "user" };
    render(<LanguageSettingsAdmin />);
    expect(screen.queryByRole("checkbox")).toBeNull();
  });
  it("取得失敗時は保存操作を止める", () => {
    mocks.query.isError = true;
    render(<LanguageSettingsAdmin />);
    expect((screen.getByRole("button", { name: "保存する" }) as HTMLButtonElement).disabled).toBe(true);
    expect(screen.getByRole("alert")).toBeTruthy();
  });
  it("保存失敗と保存後の取得失敗を区別する", async () => {
    mocks.save.mockRejectedValueOnce(new Error("offline"));
    render(<LanguageSettingsAdmin />);
    fireEvent.click(screen.getByRole("checkbox", { name: "English" }));
    fireEvent.click(screen.getByRole("button", { name: "保存する" }));
    await waitFor(() => expect(screen.getByRole("status").textContent).toContain("保存できません"));
    expect(mocks.setData).not.toHaveBeenCalled();
    mocks.query.refetch.mockResolvedValue({ isError: true });
    fireEvent.click(screen.getByRole("button", { name: "保存する" }));
    await waitFor(() => expect(screen.getByRole("status").textContent).toContain("保存しました。最新状態の取得に失敗"));
  });
});
