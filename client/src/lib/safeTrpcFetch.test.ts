import { describe, expect, it, vi } from "vitest";
import { createTRPCClient, httpBatchLink, TRPCClientError } from "@trpc/client";
import superjson from "superjson";
import { safeTrpcFetch } from "./safeTrpcFetch";
import type { AppRouter } from "../../../server/routers";

/** 設計: docs/修正設計書_公開API保護と外部API耐障害性_2026-09-19.md §4 Phase 45-2 */

const html = (status: number) => new Response("<!DOCTYPE html><title>Bad Gateway</title>", {
  status,
  headers: { "content-type": "text/html" },
});

describe("safeTrpcFetch", () => {
  it("HTML の 502 は読めるメッセージで throw する（擬似エンベロープを作らない）", async () => {
    await expect(safeTrpcFetch("https://example.test/api/trpc/build.lookup", undefined, async () => html(502)))
      .rejects.toThrow("照会サービスが一時的に応答していません。1〜2分後にもう一度お試しください。");
  });

  it("HTML の 404 は利用者の入力を疑うメッセージで throw する", async () => {
    await expect(safeTrpcFetch("https://example.test/api/trpc/build.lookup", undefined, async () => html(404)))
      .rejects.toThrow("照会リクエストを処理できませんでした。UIDと公開設定をご確認ください。");
  });

  it("fetch 自体が失敗したときは通信環境を案内する", async () => {
    await expect(safeTrpcFetch("https://example.test/api/trpc/build.lookup", undefined, async () => { throw new Error("network"); }))
      .rejects.toThrow("照会サービスへ接続できませんでした。通信環境を確認して再試行してください。");
  });

  it("JSON 応答は無加工でそのまま返す", async () => {
    const original = new Response(JSON.stringify([{ result: { data: { json: null } } }]), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
    const returned = await safeTrpcFetch("https://example.test/api/trpc/build.guideHistory", undefined, async () => original);
    expect(returned).toBe(original);
  });

  it("tRPC 由来の JSON の 429 も加工せずに通す", async () => {
    const original = new Response(JSON.stringify([{ error: { json: { data: { code: "TOO_MANY_REQUESTS" } } } }]), {
      status: 429,
      headers: { "content-type": "application/json" },
    });
    const returned = await safeTrpcFetch("https://example.test/api/trpc/build.lookup", undefined, async () => original);
    expect(returned).toBe(original);
  });

  it("credentials: include を必ず付ける（既存挙動）", async () => {
    const implementation = vi.fn().mockResolvedValue(new Response("{}", { status: 200, headers: { "content-type": "application/json" } }));
    await safeTrpcFetch("https://example.test/api/trpc/build.guideHistory", { method: "POST" }, implementation as unknown as typeof fetch);
    expect(implementation.mock.calls[0][1]).toMatchObject({ method: "POST", credentials: "include" });
  });
});

describe("httpBatchLink との組み合わせ", () => {
  const clientWith = (implementation: typeof fetch) => createTRPCClient<AppRouter>({
    links: [httpBatchLink({
      url: "http://localhost/api/trpc",
      transformer: superjson,
      methodOverride: "POST",
      fetch: (input, init) => safeTrpcFetch(input, init, implementation),
    })],
  });

  it("単一リクエストの HTML 502 が読めるメッセージになる", async () => {
    const client = clientWith((async () => html(502)) as unknown as typeof fetch);
    const error = await client.build.guideHistory.query().then(() => null, (cause: unknown) => cause);

    expect(error).toBeInstanceOf(TRPCClientError);
    expect((error as TRPCClientError<AppRouter>).message).toContain("一時的に応答していません");
  });

  it("2 件以上のバッチでも全 operation に同じエラーが届き、件数が一致する", async () => {
    const implementation = vi.fn().mockImplementation(async () => html(502));
    const client = clientWith(implementation as unknown as typeof fetch);

    const results = await Promise.allSettled([
      client.build.guideHistory.query(),
      client.build.referenceCatalog.query(),
      client.display.settings.query(),
    ]);

    // 1 リクエストへまとめられ、3 件すべてが同じ理由で失敗する。
    expect(implementation).toHaveBeenCalledTimes(1);
    expect(results).toHaveLength(3);
    for (const result of results) {
      expect(result.status).toBe("rejected");
      const reason = (result as PromiseRejectedResult).reason;
      expect(reason).toBeInstanceOf(TRPCClientError);
      expect((reason as TRPCClientError<AppRouter>).message).toContain("一時的に応答していません");
    }
  });

  it("ネットワーク断でもバッチ全体が読めるメッセージで失敗する", async () => {
    const client = clientWith((async () => { throw new Error("network"); }) as unknown as typeof fetch);

    const results = await Promise.allSettled([
      client.build.guideHistory.query(),
      client.display.settings.query(),
    ]);

    for (const result of results) {
      expect(result.status).toBe("rejected");
      expect(String((result as PromiseRejectedResult).reason.message)).toContain("接続できませんでした");
    }
  });
});
