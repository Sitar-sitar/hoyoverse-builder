// @vitest-environment jsdom
import { afterEach, expect, it, vi } from "vitest";

afterEach(() => {
  vi.unstubAllEnvs();
  vi.resetModules();
  sessionStorage.clear();
  localStorage.clear();
});
it("old -> new -> old keeps actual admin, return-path and UID storage independent", async () => {
  async function modules(base: string) {
    vi.stubEnv("BASE_URL", base);
    vi.resetModules();
    return {
      session: await import("./adminSession"),
      login: await import("./loginReturnPath"),
      uid: await import("./uidHistory"),
    };
  }
  const old = await modules("/hoyoverse-builder/");
  old.session.setAdminBearerToken("old-token");
  old.login.saveLoginReturnPath("/admin/feedback");
  old.uid.saveLastUid("hsr", "800000001");
  const next = await modules("/hoyoverse-builder/app/");
  expect(next.session.getAdminBearerToken()).toBeNull();
  expect(next.login.consumeLoginReturnPath()).toBeNull();
  expect(next.uid.loadLastUid("hsr")).toBe("");
  next.session.setAdminBearerToken("new-token");
  next.login.saveLoginReturnPath("/admin/display");
  next.uid.saveLastUid("hsr", "800000002");
  next.session.clearAdminBearerToken();
  const again = await modules("/hoyoverse-builder/");
  expect(again.session.getAdminBearerToken()).toBe("old-token");
  expect(again.login.consumeLoginReturnPath()).toBe("/admin/feedback");
  expect(again.uid.loadLastUid("hsr")).toBe("800000001");
  const nextAgain = await modules("/hoyoverse-builder/app/");
  expect(nextAgain.session.getAdminBearerToken()).toBeNull();
  expect(nextAgain.login.consumeLoginReturnPath()).toBe("/admin/display");
  expect(nextAgain.uid.loadLastUid("hsr")).toBe("800000002");
});
