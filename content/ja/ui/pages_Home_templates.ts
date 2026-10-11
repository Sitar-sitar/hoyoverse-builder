import type { SourceText } from "../../../shared/content/types";
export const sources: SourceText[] = [
  { id: "ui.home.deficit.under", ja: "あと {amount}{unit}未満", context: "Display deficit smaller than the displayed precision", audience: "public", placeholders: { amount: "string", unit: "string" }, dependencies: [], protectedTokens: [] },
  { id: "ui.home.deficit.amount", ja: "あと {amount}{unit}", context: "Display remaining deficit", audience: "public", placeholders: { amount: "string", unit: "string" }, dependencies: [], protectedTokens: [] },
  { id: "ui.home.recommendation.target", ja: "目標 {target}{unit} まで{deficit}", context: "Recommendation display only; target remains a numeric calculation input", audience: "public", placeholders: { target: "number", unit: "string", deficit: "string" }, dependencies: [], protectedTokens: [] },
  { id: "ui.home.identity.variant", ja: "{name}とは別実装として識別しています。", context: "Explanation of source identity variant; never changes the identity key", audience: "public", placeholders: { name: "string" }, dependencies: [], protectedTokens: [] },
];
