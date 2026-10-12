import type { TeamAuthoring } from "./teamAuthoring";
export const GENERIC_PROFILES = [
  "crit",
  "dot",
  "break",
  "support",
  "sustain",
  "tank",
  "hp",
  "def",
  "em",
  "anomaly",
  "stun",
  "rupture",
] as const;
export type GenericProfile = (typeof GENERIC_PROFILES)[number];
export const GENERIC_OWNER = "__CONTENT_GENERIC_OWNER_V1__";
export type GenericTeamRecipe = {
  recipeId: string;
  game: TeamAuthoring["game"];
  profile: GenericProfile;
  rank: 1 | 2 | 3;
  team: TeamAuthoring;
  ownerBindings: Array<{ path: string; variable: string }>;
  ownerMemberIndexes: number[];
};
