import { afterEach, describe, expect, it, vi } from "vitest";
import { TRPCError } from "@trpc/server";
import { describeError, formatFailure, logFailure } from "./safeLog";

/** 秘匿ログ（設計: docs/修正設計書_セキュリティ残課題P2P3_2026-10-20.md §5.6・§8 F）。 */

const SECRET = "Sk9xQ2lKz7uVb3Tq";

afterEach(() => vi.restoreAllMocks());

describe("describeError", () => {
  it("既知のname/codeだけを残す", () => {
    expect(describeError(new TRPCError({ code: "BAD_GATEWAY" }))).toEqual({ name: "TRPCError", code: "BAD_GATEWAY" });
    expect(describeError(Object.assign(new Error("x"), { code: "ECONNREFUSED" }))).toEqual({ name: "Error", code: "ECONNREFUSED" });
  });

  it("英数字だけの疑似秘密値をname/codeに入れても出さない", () => {
    const error = Object.assign(new Error("boom"), { name: SECRET, code: SECRET });
    expect(describeError(error)).toEqual({ name: "unknown", code: "unknown" });
  });

  it("mysql2のプール枯渇はmessageを出さず固定コードへ変換する", () => {
    expect(describeError(new Error("No connections available."))).toEqual({ name: "Error", code: "pool_exhausted" });
  });

  it("プロパティ読取りが例外を投げても失敗しない", () => {
    const hostile = new Proxy({}, { get() { throw new Error("getter"); } });
    expect(describeError(hostile)).toEqual({ name: "unknown", code: "unknown" });
    expect(describeError(undefined)).toEqual({ name: "unknown", code: "unknown" });
    expect(describeError("plain string")).toEqual({ name: "unknown", code: "unknown" });
  });
});

describe("logFailure", () => {
  it("message・stack・SQL・URL・上流本文を出力しない", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    const error = Object.assign(new Error(`connect mysql://user:${SECRET}@db.internal:3306/app failed`), {
      code: "ER_DUP_ENTRY", sql: `INSERT INTO users VALUES ('${SECRET}')`, sqlMessage: SECRET, body: `<html>${SECRET}</html>`,
    });
    logFailure("Database", "upsert_user_failed", error);
    expect(spy).toHaveBeenCalledTimes(1);
    const [line, ...rest] = spy.mock.calls[0]!;
    expect(rest).toHaveLength(0);
    expect(typeof line).toBe("string");
    expect(line).toBe("[Database] upsert_user_failed error=Error errorCode=ER_DUP_ENTRY");
    expect(String(line)).not.toMatch(new RegExp(`${SECRET}|mysql://|INSERT|stack|db\\.internal`));
  });

  it("warnレベルとHTTP statusだけの記録", () => {
    const spy = vi.spyOn(console, "warn").mockImplementation(() => {});
    logFailure("Notification", "notify_rejected", undefined, { level: "warn", status: 503 });
    expect(spy).toHaveBeenCalledWith("[Notification] notify_rejected status=503");
  });

  it("任意オブジェクトをconsoleへ渡さない", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    logFailure("Feedback", "store_failed", { toString: () => SECRET, name: SECRET });
    expect(spy.mock.calls[0]).toEqual(["[Feedback] store_failed error=unknown errorCode=unknown"]);
  });

  it("出力形式は固定", () => {
    expect(formatFailure("Analytics", "record_lookup_failed")).toBe("[Analytics] record_lookup_failed");
  });
});
