import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { createHash } from "node:crypto";
import { SignJWT } from "jose";
import { MySqlDialect } from "drizzle-orm/mysql-core";
import type { SQL } from "drizzle-orm";

/**
 * 認証の負系（設計: docs/修正設計書_セキュリティ残課題P2P3_2026-10-20.md §5.5・§8 E）。DBはモック。
 * 同時消費の競合は実MySQLでだけ検証する（exchangeCodeRace.test.ts）。ここでの結果を競合検証済みと読み替えない。
 */

const dbMocks = vi.hoisted(() => ({
  upsertUser: vi.fn(),
  getUserByOpenId: vi.fn(),
  getDb: vi.fn(),
  listTranslationFeedback: vi.fn(),
}));
vi.mock("./db", async importOriginal => ({ ...(await importOriginal<typeof import("./db")>()), ...dbMocks }));

import { appRouter } from "./routers";
import { createContext } from "./_core/context";
import { OAUTH_BODY_LIMIT_BYTES } from "./_core/boundedBody";
import { exchangeCodeForToken, fetchGitHubUser, registerGitHubAdminAuthRoutes } from "./_core/githubAdminAuth";

const SECRET = "test-only-admin-session-secret-0123456789";
const ADMIN_ID = "12345";
const ISSUER = "hoyoverse-builder-api";
const AUDIENCE = "hoyoverse-builder-admin";
const savedEnv = { ...process.env };

beforeEach(() => {
  process.env.ADMIN_SESSION_SECRET = SECRET;
  process.env.ADMIN_GITHUB_IDS = ADMIN_ID;
  process.env.API_ONLY = "true";
  process.env.CLIENT_IP_SOURCE = "socket";
  dbMocks.getUserByOpenId.mockImplementation(async (openId: string) => ({ id: 1, openId, name: "admin", role: "admin" }));
  dbMocks.listTranslationFeedback.mockResolvedValue([]);
});
afterEach(() => {
  process.env = { ...savedEnv };
  vi.clearAllMocks();
  vi.unstubAllGlobals();
});

type TokenOptions = { secret?: string; issuer?: string; audience?: string; githubId?: string; expiresAt?: number };

function sign(options: TokenOptions = {}) {
  const jwt = new SignJWT({ githubId: options.githubId ?? ADMIN_ID, login: "admin", role: "admin" })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setIssuer(options.issuer ?? ISSUER)
    .setAudience(options.audience ?? AUDIENCE)
    .setIssuedAt();
  jwt.setExpirationTime(options.expiresAt ?? Math.floor(Date.now() / 1000) + 600);
  return jwt.sign(new TextEncoder().encode(options.secret ?? SECRET));
}

function unsigned() {
  const encode = (value: unknown) => Buffer.from(JSON.stringify(value)).toString("base64url");
  const now = Math.floor(Date.now() / 1000);
  return `${encode({ alg: "none", typ: "JWT" })}.${encode({ githubId: ADMIN_ID, login: "admin", role: "admin", iss: ISSUER, aud: AUDIENCE, iat: now, exp: now + 600 })}.`;
}

async function callAdmin(headers: Record<string, string>) {
  const ctx = await createContext({ req: { headers } as never, res: {} as never, info: {} as never });
  return appRouter.createCaller(ctx).feedback.list();
}

describe("管理JWTの改ざん・不一致では管理resolverが呼ばれない", () => {
  it("正しいtokenなら管理resolverが呼ばれる（陽性対照、Bearer・Cookieとも）", async () => {
    const token = await sign();
    await expect(callAdmin({ authorization: `Bearer ${token}` })).resolves.toEqual([]);
    await expect(callAdmin({ cookie: `app_session_id=${token}` })).resolves.toEqual([]);
    expect(dbMocks.listTranslationFeedback).toHaveBeenCalledTimes(2);
  });

  const cases: Array<[string, () => Promise<string>]> = [
    ["署名の改ざん", async () => { const token = await sign(); return `${token.slice(0, -2)}${token.endsWith("AA") ? "BB" : "AA"}`; }],
    ["別の秘密鍵での署名", () => sign({ secret: "another-test-only-secret-0123456789abcd" })],
    ["alg: none", async () => unsigned()],
    ["期限切れ", () => sign({ expiresAt: Math.floor(Date.now() / 1000) - 60 })],
    ["issuer不一致", () => sign({ issuer: "someone-else" })],
    ["audience不一致", () => sign({ audience: "someone-else" })],
    ["allowlistから外れた管理者", () => sign({ githubId: "99999" })],
  ];
  for (const [name, makeToken] of cases) {
    it(`${name}: Bearer・Cookieとも FORBIDDEN`, async () => {
      const token = await makeToken();
      for (const headers of [{ authorization: `Bearer ${token}` }, { cookie: `app_session_id=${token}` }]) {
        await expect(callAdmin(headers)).rejects.toMatchObject({ code: "FORBIDDEN" });
      }
      expect(dbMocks.listTranslationFeedback).not.toHaveBeenCalled();
      expect(dbMocks.upsertUser).not.toHaveBeenCalled();
    });
  }
});

type Handler = (req: unknown, res: unknown) => Promise<void> | void;

function routes() {
  const handlers: Record<string, Handler> = {};
  registerGitHubAdminAuthRoutes({ get: (path: string, h: Handler) => { handlers[path] = h; }, post: (path: string, h: Handler) => { handlers[path] = h; } } as never);
  return handlers;
}

function fakeResponse() {
  const res = { status: vi.fn(), json: vi.fn(), cookie: vi.fn(), clearCookie: vi.fn(), redirect: vi.fn(), setHeader: vi.fn() };
  res.status.mockReturnValue(res);
  return res;
}

describe("OAuth stateの不一致", () => {
  const stateCookie = (nonce: string) => Buffer.from(JSON.stringify({ nonce, returnTo: "/admin" }), "utf8").toString("base64url");
  const cases: Array<[string, Record<string, string>, Record<string, string>]> = [
    ["nonce不一致", { code: "c", state: "n2" }, { cookie: `github_admin_oauth_state=${stateCookie("n1")}` }],
    ["state Cookieなし", { code: "c", state: "n1" }, {}],
    ["stateパラメータなし", { code: "c" }, { cookie: `github_admin_oauth_state=${stateCookie("n1")}` }],
    ["壊れたstate Cookie", { code: "c", state: "n1" }, { cookie: "github_admin_oauth_state=not-base64-json" }],
  ];
  for (const [name, query, headers] of cases) {
    it(`${name}: 403、state Cookieを消費し、GitHubへ通信しない`, async () => {
      const fetchMock = vi.fn();
      vi.stubGlobal("fetch", fetchMock);
      const res = fakeResponse();
      await routes()["/api/auth/github/callback"]!({ query, headers: { host: "api.example.test", ...headers }, protocol: "https", get: () => "api.example.test", secure: true }, res);
      expect(res.status).toHaveBeenCalledWith(403);
      expect(res.clearCookie).toHaveBeenCalledWith("github_admin_oauth_state", expect.objectContaining({ maxAge: -1 }));
      expect(fetchMock).not.toHaveBeenCalled();
      expect(res.cookie).not.toHaveBeenCalled();
      expect(dbMocks.upsertUser).not.toHaveBeenCalled();
    });
  }
});

describe("交換コードの期限切れ・使用済み・条件付きUPDATE 0行", () => {
  const dialect = new MySqlDialect();
  const CODE = "A".repeat(43);
  let ipSeq = 0;

  function fakeDatabase(selectRows: unknown[], affectedRows: number) {
    const statements: string[] = [];
    const execute = vi.fn(async (query: SQL) => {
      const text = dialect.sqlToQuery(query).sql.replace(/\s+/g, " ").trim();
      statements.push(text);
      if (text.startsWith("SELECT")) return [selectRows, []];
      return [{ affectedRows }, []];
    });
    dbMocks.getDb.mockResolvedValue({ execute });
    return statements;
  }

  async function exchange() {
    const res = fakeResponse();
    await routes()["/api/auth/github/exchange"]!({ body: { code: CODE }, headers: {}, socket: { remoteAddress: `10.0.0.${++ipSeq}` } }, res);
    return res;
  }

  const record = { githubId: ADMIN_ID, login: "admin", name: null, avatarUrl: null };

  it("未使用・期限内で条件付きUPDATEが1行なら200（陽性対照）。SELECTとUPDATEの両方に未使用と期限の条件がある", async () => {
    const statements = fakeDatabase([record], 1);
    const res = await exchange();
    expect(res.status).toHaveBeenCalledWith(200);
    const [select, update] = statements;
    expect(select).toMatch(/^SELECT .* WHERE codeHash = \? AND usedAt IS NULL AND expiresAt >= NOW\(\) LIMIT 1$/);
    expect(update).toMatch(/^UPDATE admin_auth_exchange_codes SET usedAt = NOW\(\) WHERE codeHash = \? AND usedAt IS NULL AND expiresAt >= NOW\(\)$/);
  });

  it("期限切れ・使用済み（SELECTが0行）は401で、UPDATEを発行しない", async () => {
    const statements = fakeDatabase([], 1);
    const res = await exchange();
    expect(res.status).toHaveBeenCalledWith(401);
    expect(statements).toHaveLength(1);
  });

  it("SELECT後に他の要求が先に使用し、条件付きUPDATEが0行なら401でtokenを発行しない", async () => {
    fakeDatabase([record], 0);
    const res = await exchange();
    expect(res.status).toHaveBeenCalledWith(401);
    expect(JSON.stringify(res.json.mock.calls)).not.toContain("token");
  });

  it("DBへはcodeそのものではなくsha256だけを渡す", async () => {
    const params: unknown[] = [];
    dbMocks.getDb.mockResolvedValue({ execute: vi.fn(async (query: SQL) => { params.push(...dialect.sqlToQuery(query).params); return [[], []]; }) });
    await exchange();
    expect(params).toEqual([createHash("sha256").update(CODE, "utf8").digest("hex")]);
  });
});

describe("OAuth応答本文の上限（1 MiB）", () => {
  const jsonResponse = (body: string, headers: Record<string, string> = {}) => new Response(body, { headers: { "content-type": "application/json", ...headers } });
  const padded = (size: number, payload: object) => { const text = JSON.stringify(payload); return text.slice(0, -1) + `,"pad":"${"x".repeat(size - text.length - 10)}"}`; };

  it("上限以内なら読める", async () => {
    const body = padded(OAUTH_BODY_LIMIT_BYTES - 16, { access_token: "tkn" });
    vi.stubGlobal("fetch", vi.fn(async () => jsonResponse(body)));
    await expect(exchangeCodeForToken("code", "https://example.test/cb")).resolves.toBe("tkn");
  });

  it("token交換の本文が上限を超えると oauth_upstream_failed", async () => {
    vi.stubGlobal("fetch", vi.fn(async () => jsonResponse(padded(OAUTH_BODY_LIMIT_BYTES + 1024, { access_token: "tkn" }))));
    await expect(exchangeCodeForToken("code", "https://example.test/cb")).rejects.toMatchObject({ reason: "oauth_upstream_failed" });
  });

  it("user取得でContent-Lengthが上限超なら本文を読まずに oauth_upstream_failed", async () => {
    const cancel = vi.fn();
    const body = new ReadableStream({ pull() { /* 本文を流さない */ }, cancel });
    vi.stubGlobal("fetch", vi.fn(async () => new Response(body, { headers: { "content-length": String(OAUTH_BODY_LIMIT_BYTES + 1) } })));
    await expect(fetchGitHubUser("token")).rejects.toMatchObject({ reason: "oauth_upstream_failed" });
    expect(cancel).toHaveBeenCalled();
  });
});
