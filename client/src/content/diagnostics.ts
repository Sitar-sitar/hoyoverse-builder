import type { ContentMismatchReport } from "@shared/content/diagnostics";

export function createMismatchReporter(send: (report: ContentMismatchReport) => Promise<unknown>, now = Date.now) {
  let lastSentAt = -Infinity;
  return (report: ContentMismatchReport) => {
    const time = now();
    if (time - lastSentAt < 60_000) return;
    lastSentAt = time;
    // Deferred, bounded and best effort; cannot block rendering or UID calculations.
    void Promise.resolve().then(() => send(report)).catch(() => {});
  };
}

export const reportContentMismatch = createMismatchReporter(async report => {
  if (typeof window === "undefined") return;
  const base = (import.meta.env.VITE_API_BASE_URL ?? "").replace(/\/$/, "");
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 3000);
  try {
    await fetch(`${base}/api/trpc/content.reportMismatch`, {
      method: "POST", credentials: "omit", referrerPolicy: "no-referrer", cache: "no-store",
      headers: { "Content-Type": "application/json" }, body: JSON.stringify({ json: report }), signal: controller.signal,
    });
  } finally { clearTimeout(timer); }
});
