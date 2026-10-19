import { afterEach, describe, expect, it, vi } from "vitest";

const dbMocks = vi.hoisted(() => ({ upsertUser: vi.fn(), getUserByOpenId: vi.fn(), getDb: vi.fn() }));
vi.mock("./db", () => dbMocks);

import {
  exchangeCodeForToken,
  fetchGitHubUser,
  OAUTH_REQUEST_TIMEOUT_MS,
  registerGitHubAdminAuthRoutes,
  hasGitHubAdminAllowlist,
  isGitHubAdminIdAllowed,
  isGitHubAdminOpenIdAllowed,
  parseAdminGitHubIds,
  sanitizeAdminReturnPath,
} from "./_core/githubAdminAuth";

const originalAdminIds = process.env.ADMIN_GITHUB_IDS;

afterEach(() => {
  if (originalAdminIds === undefined) delete process.env.ADMIN_GITHUB_IDS;
  else process.env.ADMIN_GITHUB_IDS = originalAdminIds;
});

describe("GitHub administrator allowlist", () => {
  it("accepts numeric GitHub IDs separated by commas or whitespace", () => {
    const ids = parseAdminGitHubIds("123, 456\n789 invalid user:1");
    expect([...ids]).toEqual(["123", "456", "789"]);
  });

  it("checks both raw GitHub IDs and github: openIds", () => {
    process.env.ADMIN_GITHUB_IDS = "12345678,87654321";
    expect(hasGitHubAdminAllowlist()).toBe(true);
    expect(isGitHubAdminIdAllowed(12345678)).toBe(true);
    expect(isGitHubAdminOpenIdAllowed("github:87654321")).toBe(true);
    expect(isGitHubAdminOpenIdAllowed("github:99999999")).toBe(false);
    expect(isGitHubAdminOpenIdAllowed("manus:87654321")).toBe(false);
  });
});

describe("administrator OAuth return path", () => {
  it("allows only local /admin paths", () => {
    expect(sanitizeAdminReturnPath("/admin")).toBe("/admin");
    expect(sanitizeAdminReturnPath("/admin/feedback")).toBe("/admin/feedback");
    expect(sanitizeAdminReturnPath("https://example.com/admin")).toBe("/admin");
    expect(sanitizeAdminReturnPath("//evil.example/admin")).toBe("/admin");
    expect(sanitizeAdminReturnPath("/admin/../other")).toBe("/admin");
  });
});

/** fetch へ渡された signal で中断されるまで解決しない。 */
function hangUntilAbort(init?: RequestInit) {
  return new Promise<never>((_, reject) => {
    init?.signal?.addEventListener("abort", () => reject(new DOMException("aborted", "AbortError")));
  });
}

describe("GitHub OAuth通信期限（設計 §5.3）", () => {
  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("token交換が接続後に応答しなければ5秒でabortし、signalを実fetchへ渡す", async () => {
    vi.useFakeTimers();
    const fetchMock = vi.fn((_url: string, init?: RequestInit) => hangUntilAbort(init));
    vi.stubGlobal("fetch", fetchMock);
    const pending = exchangeCodeForToken("code", "https://example.test/cb").catch(error => error);
    await vi.advanceTimersByTimeAsync(OAUTH_REQUEST_TIMEOUT_MS - 1);
    expect(fetchMock.mock.calls[0]?.[1]?.signal?.aborted).toBe(false);
    await vi.advanceTimersByTimeAsync(1);
    const error = await pending;
    expect(error.reason).toBe("oauth_timeout");
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("user取得の本文読取が止まった場合も5秒でabortする", async () => {
    vi.useFakeTimers();
    vi.stubGlobal("fetch", vi.fn(async (_url: string, init?: RequestInit) => ({ ok: true, json: () => hangUntilAbort(init) })));
    const pending = fetchGitHubUser("token").catch(error => error);
    await vi.advanceTimersByTimeAsync(OAUTH_REQUEST_TIMEOUT_MS);
    expect((await pending).reason).toBe("oauth_timeout");
  });

  it("上流の失敗は理由コードだけを持ち、上流本文を例外へ含めない", async () => {
    vi.stubGlobal("fetch", vi.fn(async () => new Response(JSON.stringify({ error: "bad_verification_code", error_description: "secret-ish detail" }), { headers: { "content-type": "application/json" } })));
    const error = await exchangeCodeForToken("code", "https://example.test/cb").catch(e => e);
    expect(error.reason).toBe("oauth_upstream_failed");
    expect(String(error.message)).not.toContain("secret-ish");
  });

  it("callbackでuser取得が期限切れになると502を返し、DB確認・session・exchange codeを発行しない", async () => {
    vi.useFakeTimers();
    process.env.ADMIN_GITHUB_IDS = "12345";
    const handlers: Record<string, (req: unknown, res: unknown) => Promise<void> | void> = {};
    registerGitHubAdminAuthRoutes({ get: (path: string, h: never) => { handlers[path] = h; }, post: (path: string, h: never) => { handlers[path] = h; } } as never);
    vi.stubGlobal("fetch", vi.fn(async (url: string, init?: RequestInit) => {
      if (url.includes("access_token")) return new Response(JSON.stringify({ access_token: "tkn" }), { headers: { "content-type": "application/json" } });
      return hangUntilAbort(init);
    }));
    const logs = vi.spyOn(console, "error").mockImplementation(() => {});
    const state = Buffer.from(JSON.stringify({ nonce: "n1", returnTo: "/admin" }), "utf8").toString("base64url");
    const res = { status: vi.fn(), json: vi.fn(), cookie: vi.fn(), clearCookie: vi.fn(), redirect: vi.fn() };
    res.status.mockReturnValue(res);
    const req = { query: { code: "the-code", state: "n1" }, headers: { cookie: `github_admin_oauth_state=${state}`, host: "api.example.test" }, protocol: "https", get: () => "api.example.test", secure: true };
    const done = handlers["/api/auth/github/callback"]!(req, res);
    await vi.advanceTimersByTimeAsync(OAUTH_REQUEST_TIMEOUT_MS);
    await done;
    expect(res.status).toHaveBeenCalledWith(502);
    expect(res.cookie).not.toHaveBeenCalled();
    expect(res.redirect).not.toHaveBeenCalled();
    expect(dbMocks.upsertUser).not.toHaveBeenCalled();
    expect(logs).toHaveBeenCalledWith("[GitHub Admin Auth] Callback failed: oauth_timeout");
    expect(JSON.stringify(logs.mock.calls)).not.toMatch(/the-code|tkn|n1/);
  });
});
