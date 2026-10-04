import { afterEach, expect, it, vi } from "vitest";
import type { Request, Response } from "express";
import { booleanSetting, maintenanceMiddleware } from "./migrationRuntime";
import { clientIpFromRequest, validateClientIpConfiguration, resetClientIpWarningForTests } from "./rateLimit";

afterEach(() => { vi.unstubAllEnvs(); resetClientIpWarningForTests(); });
it("rejects invalid flags and unmeasured Northflank hops", () => {
  vi.stubEnv("API_MAINTENANCE", "yes");
  expect(() => booleanSetting("API_MAINTENANCE")).toThrow();
  vi.stubEnv("CLIENT_IP_SOURCE", "northflank");
  vi.stubEnv("NORTHFLANK_TRUSTED_PROXY_HOPS", "");
  expect(validateClientIpConfiguration).toThrow();
});
it("uses measured right-side hop and rejects malformed chains", () => {
  vi.stubEnv("CLIENT_IP_SOURCE", "northflank");
  vi.stubEnv("NORTHFLANK_TRUSTED_PROXY_HOPS", "2");
  const req = (header: string | string[]) => ({ headers: { "x-forwarded-for": header }, socket: { remoteAddress: "127.0.0.1" } }) as unknown as Request;
  expect(clientIpFromRequest(req("1.2.3.4, ::ffff:5.6.7.8, 10.0.0.1"))).toBe("5.6.7.8");
  const warning = vi.spyOn(console, "warn").mockImplementation(() => {});
  expect(clientIpFromRequest(req("1.2.3.4,,10.0.0.1"))).toBe("127.0.0.1");
  expect(clientIpFromRequest(req(["1.2.3.4", "10.0.0.1"]))).toBe("127.0.0.1");
  expect(warning).toHaveBeenCalledTimes(1);
  warning.mockRestore();
});
it("stops API requests before handlers but preserves health and OPTIONS", () => {
  vi.stubEnv("API_MAINTENANCE", "true");
  const json = vi.fn();
  const res = { setHeader: vi.fn(), status: vi.fn(() => ({ json })) } as unknown as Response;
  const next = vi.fn();
  maintenanceMiddleware({ path: "/api/trpc/build.lookup", method: "POST" } as Request, res, next);
  expect(next).not.toHaveBeenCalled();
  expect(res.status).toHaveBeenCalledWith(503);
  expect(res.setHeader).toHaveBeenCalledWith("Retry-After", "60");
  maintenanceMiddleware({ path: "/api/health", method: "GET" } as Request, res, next);
  maintenanceMiddleware({ path: "/api/auth/github", method: "OPTIONS" } as Request, res, next);
  expect(next).toHaveBeenCalledTimes(2);
});
