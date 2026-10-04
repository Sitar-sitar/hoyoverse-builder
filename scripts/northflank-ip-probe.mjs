// Temporary preload for a maintenance-only Northflank IP measurement.
// Load explicitly with node --import; never part of the normal API startup.
import { Server } from "node:http";
import { createHmac, randomBytes } from "node:crypto";
import { appendFileSync } from "node:fs";
import { isIP } from "node:net";

const salt = randomBytes(32);
const normalize = value => value.replace(/^::ffff:/i, "").toLowerCase();
export function fingerprint(value) {
  if (typeof value !== "string" || !isIP(value)) return null;
  return createHmac("sha256", salt).update(normalize(value)).digest("hex").slice(0, 16);
}
export function probeMarker(req) {
  let url;
  try { url = new URL(req.url || "/", "http://localhost"); } catch { return null; }
  return url.pathname === "/api/health" ? (req.headers["x-nf-ip-probe"] || url.searchParams.get("nfprobe")) : null;
}
export function record(req) {
  const forwarded = typeof req.headers["x-forwarded-for"] === "string" ? req.headers["x-forwarded-for"].split(",").map(v => v.trim()) : [];
  return { probe: probeMarker(req), socket: fingerprint(req.socket.remoteAddress), forwarded: forwarded.map(fingerprint), real: fingerprint(req.headers["x-real-ip"]), markers: forwarded.map(ip => ["198.51.100.10", "198.51.100.11", "203.0.113.20"].indexOf(ip)) };
}
export function install() {
  if (process.env.API_MAINTENANCE !== "true" || process.env.API_MIGRATION_PREVIEW !== "true" || process.env.CLIENT_IP_SOURCE !== "socket") throw new Error("IP probe requires maintenance/preview/socket diagnostic mode");
  const original = Server.prototype.emit;
  const expires = Date.now() + 10 * 60 * 1000;
  let count = 0;
  Server.prototype.emit = function(event, ...args) {
    if (event === "request") {
      const req = args[0];
      const marker = probeMarker(req);
      if (typeof marker === "string" && /^nfprobe-[a-z0-9-]{1,40}$/.test(marker) && Date.now() < expires && count < 60) {
        count++;
        try { appendFileSync("/tmp/nf-ip-probe.jsonl", JSON.stringify(record(req)) + "\n", { mode: 0o600 }); } catch { /* diagnostic must not interrupt health */ }
      }
    }
    return original.call(this, event, ...args);
  };
}
