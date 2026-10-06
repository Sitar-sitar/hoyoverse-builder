import { describe, expect, it } from "vitest";
import {
  canSubmitPreviewFeedback,
  scopedStorageKey,
  NEXT_PAGES_BASE,
} from "./migrationPage";

describe("migration storage and write isolation", () => {
  it("keeps the legacy key and never reuses it on the new base", () => {
    for (const key of [
      "hoyoverse-admin-session",
      "starrail-build-advisor.login-return-path",
      "hb.displaySettings.v1",
      "hb.displayPreview.v1",
      "stellar-atelier.uid-history.v1",
    ]) {
      const store = new Map([[key, "legacy"]]);
      expect(store.get(scopedStorageKey(key, NEXT_PAGES_BASE))).toBeUndefined();
      store.set(scopedStorageKey(key, NEXT_PAGES_BASE), "next");
      store.delete(scopedStorageKey(key, NEXT_PAGES_BASE));
      expect(store.get(scopedStorageKey(key, "/hoyoverse-builder/"))).toBe(
        "legacy"
      );
    }
  });
  it("permits only authenticated admins to post in preview", () => {
    expect(canSubmitPreviewFeedback(true, undefined)).toBe(false);
    expect(canSubmitPreviewFeedback(true, "user")).toBe(false);
    expect(canSubmitPreviewFeedback(true, "admin")).toBe(true);
    expect(canSubmitPreviewFeedback(false, undefined)).toBe(true);
  });
});
