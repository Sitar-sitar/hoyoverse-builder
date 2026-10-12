import type { SourceText } from "../../../shared/content/types";
export const sources: SourceText[] = [{ id: "ui.admin.analytics.today", ja: "本日（JST）の照会数 / 累計 {total}", context: "Lookup analytics summary; unavailable count preserves the dash fallback", audience: "admin", placeholders: { total: "string" }, dependencies: [], protectedTokens: ["JST"] }];
