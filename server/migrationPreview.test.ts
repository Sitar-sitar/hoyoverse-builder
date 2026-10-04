import { afterEach, beforeEach, describe, it, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  createTranslationFeedback: vi.fn(),
  getLookupAnalyticsDashboard: vi.fn(),
  listTranslationFeedback: vi.fn(),
  lookupGameBuild: vi.fn(),
  recordLookupAnalyticsEvent: vi.fn(),
  updateTranslationFeedbackStatus: vi.fn(),
}));

vi.mock("./db", () => ({
  createTranslationFeedback: mocks.createTranslationFeedback,
  getLookupAnalyticsDashboard: mocks.getLookupAnalyticsDashboard,
  listTranslationFeedback: mocks.listTranslationFeedback,
  recordLookupAnalyticsEvent: mocks.recordLookupAnalyticsEvent,
  updateTranslationFeedbackStatus: mocks.updateTranslationFeedbackStatus,
}));

vi.mock("./gameProviders", () => ({ lookupGameBuild: mocks.lookupGameBuild }));

import { appRouter } from "./routers";

const context = {
  req: {},
  res: {},
  user: null,
} as any;

const adminContext = {
  req: {},
  res: {},
  user: { id: 1, openId: "owner", role: "admin" },
} as any;


afterEach(() => vi.unstubAllEnvs());
beforeEach(() => {
  vi.stubEnv("API_MIGRATION_PREVIEW", "true");
  vi.stubEnv("ADMIN_GITHUB_IDS", "123");
  mocks.createTranslationFeedback.mockReset();
  mocks.createTranslationFeedback.mockResolvedValue(undefined);
  mocks.recordLookupAnalyticsEvent.mockReset();
  mocks.recordLookupAnalyticsEvent.mockResolvedValue(undefined);
  mocks.lookupGameBuild.mockResolvedValue({ cached: true, characters: [] });
});
const report = { feedbackType: "improvement" as const, locale: "en" as const, pagePath: "/", suggestedText: "Clarify label" };
it("preview blocks public feedback before database write", async () => {
  await expect(appRouter.createCaller(context).feedback.submit(report)).rejects.toMatchObject({ code: "FORBIDDEN" });
  expect(mocks.createTranslationFeedback).not.toHaveBeenCalled();
});
it("preview permits only allowlisted admin feedback", async () => {
  const admin = { ...adminContext, user: { ...adminContext.user, openId: "github:123" } };
  await expect(appRouter.createCaller(admin).feedback.submit(report)).resolves.toEqual({ success: true });
  await expect(appRouter.createCaller(adminContext).feedback.submit(report)).rejects.toMatchObject({ code: "FORBIDDEN" });
  expect(mocks.createTranslationFeedback).toHaveBeenCalledTimes(1);
});
it("public preview lookup does not persist analytics", async () => {
  await appRouter.createCaller(context).build.lookup({ game: "hsr", uid: "800000081" });
  expect(mocks.recordLookupAnalyticsEvent).not.toHaveBeenCalled();
});
it("allowlisted preview lookup records analytics", async () => {
  const admin = { ...adminContext, user: { ...adminContext.user, openId: "github:123" } };
  await appRouter.createCaller(admin).build.lookup({ game: "hsr", uid: "800000082" });
  expect(mocks.recordLookupAnalyticsEvent).toHaveBeenCalledWith("hsr", true);
});
