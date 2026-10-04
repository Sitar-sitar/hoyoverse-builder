// @vitest-environment jsdom
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import MigrationPreviewBanner from "./MigrationPreviewBanner";
import TranslationFeedbackForm from "./TranslationFeedbackForm";
const state = vi.hoisted(() => ({
  preview: true,
  role: undefined as string | undefined,
  mutate: vi.fn(),
}));
vi.mock("@/lib/migrationPage", async importOriginal => ({
  ...(await importOriginal<object>()),
  get isMigrationPreview() {
    return state.preview;
  },
}));
vi.mock("@/_core/hooks/useAuth", () => ({
  useAuth: () => ({ user: state.role ? { role: state.role } : null }),
}));
vi.mock("@/lib/trpc", () => ({
  trpc: {
    feedback: {
      submit: {
        useMutation: () => ({ mutate: state.mutate, isPending: false }),
      },
    },
  },
}));
afterEach(() => {
  cleanup();
  state.mutate.mockReset();
  state.preview = true;
  state.role = undefined;
});
describe("preview UI", () => {
  it.each(["ja", "en", "zh-CN"])(
    "shows the notice and legacy link in %s",
    language => {
      localStorage.setItem("starrail-build-advisor.language", language);
      render(
        <LanguageProvider>
          <MigrationPreviewBanner />
        </LanguageProvider>
      );
      expect(screen.getByRole("link").getAttribute("href")).toBe(
        "https://sitar-sitar.github.io/hoyoverse-builder/"
      );
      expect(screen.getByRole("complementary").textContent).toBeTruthy();
    }
  );
  it("disables anonymous posting and guards even a directly submitted form", () => {
    localStorage.setItem("starrail-build-advisor.language", "en");
    render(
      <LanguageProvider>
        <TranslationFeedbackForm pagePath="/" />
      </LanguageProvider>
    );
    expect((screen.getByRole("button") as HTMLButtonElement).disabled).toBe(
      true
    );
    fireEvent.submit(screen.getByRole("button").closest("form")!);
    expect(state.mutate).not.toHaveBeenCalled();
    expect(screen.getByRole("link").getAttribute("href")).toContain(
      "/feedback/"
    );
  });
  it("allows an admin preview submission", () => {
    state.role = "admin";
    localStorage.setItem("starrail-build-advisor.language", "en");
    render(
      <LanguageProvider>
        <TranslationFeedbackForm pagePath="/" />
      </LanguageProvider>
    );
    fireEvent.change(screen.getByLabelText("Suggested wording"), {
      target: { value: "A better title" },
    });
    fireEvent.submit(screen.getByRole("button").closest("form")!);
    expect(state.mutate).toHaveBeenCalledOnce();
  });
  it("removes the notice outside preview", () => {
    state.preview = false;
    render(
      <LanguageProvider>
        <MigrationPreviewBanner />
      </LanguageProvider>
    );
    expect(screen.queryByRole("complementary")).toBeNull();
  });
});
