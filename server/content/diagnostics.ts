import { contentMismatchInput } from "../../shared/content/diagnostics";
import { clientIpFromRequest } from "../_core/rateLimit";
import { createProcedureRateLimiter, enforceRateLimit, publicProcedure, router } from "../_core/trpc";

const limiter = createProcedureRateLimiter({ windowMs: 60_000, max: 5 });
let lastLoggedAt = 0;
export const contentDiagnosticsRouter = router({
  reportMismatch: publicProcedure.input(contentMismatchInput).mutation(({ input, ctx }) => {
    enforceRateLimit(ctx, limiter, `content:ip:${clientIpFromRequest(ctx.req)}`);
    // Global log cap prevents distributed reports from flooding operator logs.
    const now = Date.now();
    if (now - lastLoggedAt >= 60_000) {
      lastLoggedAt = now;
      console.warn("[Content] Client presentation compatibility fallback", input);
    }
    return { accepted: true };
  }),
});
