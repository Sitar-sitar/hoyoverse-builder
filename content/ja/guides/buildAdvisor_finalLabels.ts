import type { SourceText } from "../../../shared/content/types";

export const sources: SourceText[] = [
  ["hp", "HP"], ["atk", "攻撃力"], ["def", "防御力"], ["spd", "速度"],
].map(([key, ja]) => ({
  id: `guide.buildAdvisor.finalLabel.${key}`,
  ja,
  context: "MiHoMo final allStats display label; keep field keys and numerical values unchanged",
  audience: "public" as const,
  placeholders: {}, dependencies: [], protectedTokens: [],
}));
