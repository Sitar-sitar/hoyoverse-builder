import { describe, expect, it } from "vitest";
import { createTRPCClient, httpBatchLink } from "@trpc/client";
import superjson from "superjson";
import type { AppRouter } from "../../../server/routers";

/**
 * UID を GET の URL へ載せない仕組みの検査
 * （設計: docs/修正設計書_公開API保護と外部API耐障害性_2026-09-19.md Phase 42）。
 * client/src/main.tsx の httpBatchLink は methodOverride: "POST" を指定している。
 * ここでは同じリンク設定で query を実行し、要求が POST になり UID が URL に現れないことを固定する。
 */

const URL = "http://localhost/api/trpc";

function clientWith(methodOverride?: "POST") {
  const calls: { url: string; method: string; body: string }[] = [];
  const fetchMock = async (input: RequestInfo | URL, init?: RequestInit) => {
    calls.push({
      url: String(input),
      method: init?.method ?? "GET",
      body: typeof init?.body === "string" ? init.body : "",
    });
    return new Response(JSON.stringify([{ result: { data: { json: null } } }]), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  };
  const client = createTRPCClient<AppRouter>({
    links: [httpBatchLink({ url: URL, transformer: superjson, methodOverride, fetch: fetchMock as typeof fetch })],
  });
  return { client, calls };
}

describe("httpBatchLink の methodOverride", () => {
  it("methodOverride: \"POST\" なら query が POST で送られ、UID は URL に現れず本文に入る", async () => {
    const { client, calls } = clientWith("POST");
    await client.build.lookup.query({ game: "hsr", uid: "123456789" }).catch(() => undefined);

    expect(calls).toHaveLength(1);
    expect(calls[0].method).toBe("POST");
    expect(calls[0].url).not.toContain("123456789");
    expect(calls[0].url).not.toContain("input=");
    expect(calls[0].body).toContain("123456789");
  });

  it("methodOverride が無いと query は GET になり UID が URL へ載る（この回帰を防ぐための対照）", async () => {
    const { client, calls } = clientWith(undefined);
    await client.build.lookup.query({ game: "hsr", uid: "123456789" }).catch(() => undefined);

    expect(calls).toHaveLength(1);
    expect(calls[0].method).toBe("GET");
    expect(decodeURIComponent(calls[0].url)).toContain("123456789");
  });
});
