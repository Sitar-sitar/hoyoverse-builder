import type { GuideContent, Game } from "./domains";
import type { GuideDefinition } from "../../server/buildAdvisor";
export type GuideAuthoringRecord = {
  guideId: string;
  game: Game;
  lookupKey: string;
  lookupKind: "name" | "sourceId";
  content: GuideContent;
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
