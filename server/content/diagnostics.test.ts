import { afterEach, describe, expect, it, vi } from "vitest";
import { contentMismatchInput } from "../../shared/content/diagnostics";
import { contentDiagnosticsRouter } from "./diagnostics";
import { createMismatchReporter } from "../../client/src/content/diagnostics";

const report = { reason: "revision" as const, expectedRevision: "a".repeat(64), receivedRevision: "b".repeat(64) };
afterEach(() => vi.restoreAllMocks());

describe("content mismatch operational reports", () => {
  it("accepts version metadata only and rejects profile data, arbitrary strings and malformed hashes", () => {
    expect(contentMismatchInput.parse(report)).toEqual(report);
    for (const value of [{ ...report, uid: "123456789" }, { ...report, message: "private detail" },
      { ...report, reason: "unknown" }, { ...report, receivedRevision: "private detail" }]) {
      expect(contentMismatchInput.safeParse(value).success).toBe(false);
    }
  });
  it("records bounded metadata without auth or database access and limits repeated reports", async () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    const caller = contentDiagnosticsRouter.createCaller({ req: { headers: {}, socket: { remoteAddress: "127.0.0.81" } }, res: { setHeader: vi.fn(), getHeader: vi.fn() }, user: null } as any);
    for (let i = 0; i < 5; i++) expect(await caller.reportMismatch(report)).toEqual({ accepted: true });
    expect(warn).toHaveBeenCalledTimes(1);
    expect(warn.mock.calls[0]).toEqual(["[Content] Client presentation compatibility fallback", report]);
    await expect(caller.reportMismatch(report)).rejects.toMatchObject({ code: "TOO_MANY_REQUESTS" });
  });
  it("defers reports, caps client retries and absorbs rejected or thrown senders", async () => {
    let now = 1;
    const send = vi.fn().mockRejectedValue(new Error("offline"));
    const notify = createMismatchReporter(send, () => now);
    notify(report); notify(report);
    expect(send).not.toHaveBeenCalled();
    await Promise.resolve(); await Promise.resolve();
    expect(send).toHaveBeenCalledTimes(1);
    now += 60_000;
    notify(report);
    await Promise.resolve(); await Promise.resolve();
    expect(send).toHaveBeenCalledTimes(2);
    const throws = createMismatchReporter(() => { throw new Error("offline"); });
    expect(() => throws(report)).not.toThrow();
    await Promise.resolve(); await Promise.resolve();
  });
});
