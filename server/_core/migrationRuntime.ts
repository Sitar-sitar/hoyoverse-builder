import type { RequestHandler } from "express";
import type { TrpcContext } from "./context";
import { isGitHubAdminOpenIdAllowed } from "./githubAdminAuth";

export function booleanSetting(name: string): boolean {
  const value = process.env[name];
  if (value === undefined || value === "false") return false;
  if (value === "true") return true;
  throw new Error(`${name} must be true or false`);
}

export function previewAdmin(ctx: TrpcContext): boolean {
  return !!ctx.user && ctx.user.role === "admin" && isGitHubAdminOpenIdAllowed(ctx.user.openId);
}

export const maintenanceMiddleware: RequestHandler = (req, res, next) => {
  if (!booleanSetting("API_MAINTENANCE") || req.method === "OPTIONS" || req.path === "/api/health" ||
      !(req.path === "/api" || req.path.startsWith("/api/"))) return next();
  res.setHeader("Retry-After", "60");
  res.setHeader("Cache-Control", "no-store");
  res.status(503).json({ error: "Service temporarily unavailable for maintenance" });
};
