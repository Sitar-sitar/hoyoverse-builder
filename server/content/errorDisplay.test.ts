import { describe, expect, it } from "vitest";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { router } from "../_core/trpc";
import { contentErrorCode } from "../../shared/content/errorDisplay";
import { sources as publicSources } from "../../content/ja/ui/errorsPublic";
import { sources as adminSources } from "../../content/ja/ui/errorsAdmin";
import { uiErrorText as publicErrorText } from "../../client/src/content/errors";
import { uiErrorText as adminErrorText } from "../../client/src/content/errors.admin";
import {
  UI_TEXT,
  UI_ERROR_FALLBACK,
} from "../../client/src/content/ui.generated";
import { displayErrorText } from "../../shared/content/errorDisplay";

describe("stable error display without external message leakage", () => {
  it("preserves all registered legacy messages and resolves new stable codes", () => {
    for (const [sources, resolve] of [
      [publicSources, publicErrorText],
      [adminSources, adminErrorText],
    ] as const) {
      for (const source of sources) {
        const code = contentErrorCode(source.ja, [
          ...publicSources,
          ...adminSources,
        ]);
        expect(code).not.toBeNull();
        expect(resolve({ message: source.ja })).toBe(source.ja);
        expect(
          resolve({
            message: "unknown external details",
            data: { contentErrorCode: code },
          })
        ).toBe(source.ja);
      }
    }
  });
  it("keeps the old API error shape and adds only the recognized display code", () => {
    const definition = router({});
    const message = publicSources.find(source =>
      source.id.endsWith("catalogNotFound")
    )!.ja;
    const shape = {
      message,
      code: -32004 as const,
      data: {
        code: "NOT_FOUND" as const,
        httpStatus: 404,
        path: "build.reference",
        stack: "internal stack",
      },
    };
    const formatted = definition._def._config.errorFormatter({
      shape,
      error: new TRPCError({ code: "NOT_FOUND", message }),
      type: "query",
      path: "build.reference",
      input: undefined,
      ctx: undefined,
    });
    const { contentErrorCode: code, ...data } = formatted.data;
    expect({ ...formatted, data }).toEqual(shape);
    expect(code).toBe("public.catalogNotFound");
    expect(publicErrorText(formatted)).toBe(message);
  });
  it("resolves recognized validation issues without exposing unknown upstream or internal details", () => {
    const definition = router({});
    const message = publicSources.find(source =>
      source.id.endsWith("uidInvalid")
    )!.ja;
    const parsed = z
      .string()
      .regex(/^\d{8,10}$/, message)
      .safeParse("invalid");
    if (parsed.success) throw new Error("Expected validation failure");
    const cause = parsed.error;
    const error = new TRPCError({ code: "BAD_REQUEST", cause });
    const shape = {
      message: error.message,
      code: -32600 as const,
      data: { code: "BAD_REQUEST" as const, httpStatus: 400 },
    };
    const formatted = definition._def._config.errorFormatter({
      shape,
      error,
      type: "query",
      path: "build.lookup",
      input: undefined,
      ctx: undefined,
    });
    expect(formatted.message).toBe(error.message);
    expect(formatted.data.contentErrorCode).toBe("public.uidInvalid");
    expect(publicErrorText(formatted)).toBe(message);
    expect(
      publicErrorText({ message: error.message, data: { code: "BAD_REQUEST" } })
    ).toBe(message);
    const unknown = new TRPCError({
      code: "BAD_REQUEST",
      message: "internal ui.secret.reference\nstack private",
    });
    const unknownShape = { ...shape, message: unknown.message };
    const result = definition._def._config.errorFormatter({
      shape: unknownShape,
      error: unknown,
      type: "query",
      path: "build.lookup",
      input: undefined,
      ctx: undefined,
    });
    expect(result.data.contentErrorCode).toBeNull();
    expect(publicErrorText(result)).toBe(UI_ERROR_FALLBACK);
  });
  it("uses a generated Japanese fallback for unknown codes, cross-audience copy and missing dictionaries", () => {
    for (const error of [
      undefined,
      null,
      { message: "ui.internal.id\nstack: C:/private" },
      {
        message: "upstream user details",
        data: { contentErrorCode: "public.__proto__" },
      },
      {
        message: adminSources[0]!.ja,
        data: { contentErrorCode: "admin.feedbackUnavailable" },
      },
      { message: publicSources[0]!.ja, data: { contentErrorCode: "unknown" } },
    ]) {
      expect(publicErrorText(error)).toBe(UI_ERROR_FALLBACK);
    }
    expect(contentErrorCode("unknown external text", publicSources)).toBeNull();
    expect(
      displayErrorText(
        { message: publicSources[0]!.ja },
        {},
        "public",
        UI_ERROR_FALLBACK
      )
    ).toBe(UI_ERROR_FALLBACK);
    expect(
      Object.keys(UI_TEXT).some(id => id.startsWith("ui.errors.admin."))
    ).toBe(false);
  });
});
