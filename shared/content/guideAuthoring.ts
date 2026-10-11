import type { GuideContent, Game } from "./domains";
import type { GuideDefinition } from "../../server/buildAdvisor";
import type { TextRef } from "./types";
import type { BoundTextRef } from "./teamAuthoring";
type BoundGuideFields<T> = T extends TextRef
  ? BoundTextRef
  : T extends Array<infer U>
    ? Array<BoundGuideFields<U>>
    : T extends object
      ? { [K in keyof T]: BoundGuideFields<T[K]> }
      : T;
export const GUIDE_PROFILE_IDS = {
  hsr: ["crit", "dot", "break", "support", "sustain", "tank", "hp", "def"],
  genshin: ["crit", "hp", "def", "em", "support", "sustain"],
  zzz: ["crit", "anomaly", "stun", "support", "tank", "rupture", "def"],
} as const;
export type GuideAuthoringRecord = {
  guideId: string;
  game: Game;
  lookupKey: string;
  lookupKind: "name" | "sourceId" | "profile";
  factory?: {
    context: TextRef;
    headlineBindings: { v0: "name"; v1: "label" };
    contextBindings: { v0: "name" };
    label: TextRef;
  };
  content: BoundGuideFields<GuideContent>;
  equipmentLegacy: Array<{
    recommendationId: string;
    identityKey: string;
    reason: string;
  }>;
  mainStatLegacy: Array<{
    slotKey: string;
    statOptions: string[];
    reason: string;
  }>;
  metadata: Pick<GuideDefinition, "dataAsOf" | "updatedAt" | "profileId">;
  legacyShape: {
    fields: string[];
    mainStatFields: string[][];
    targetFields: string[][];
    tierFields: string[][];
  };
};
