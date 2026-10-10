export const SKILL_REQUIRED_KINDS = {
  hsr: ["basic", "skill", "ultimate", "talent", "technique", "traces"],
  genshin: ["normal", "elementalSkill", "elementalBurst", "passives"],
  zzz: ["basic", "dodge", "assist", "special", "chain", "ultimate", "core", "additionalAbility"],
} as const;

/** Kind lists do not establish per-character skill IDs, counts, or effects. */
export const SKILL_COLLECTION_REASON = "通常スキルの独立した詳細データは現行カタログに未登録。種類・派生技・効果数値の個別確認が必要。";
