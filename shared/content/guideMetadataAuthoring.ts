import type { Game } from "./domains";
import type { TextRef } from "./types";
export type GuideMetadataFields = {
  profileId: string;
  dataAsOf: string;
  updatedAt: string;
  sourceLabel: TextRef;
  legacyFieldOrder: Array<
    "profileId" | "dataAsOf" | "updatedAt" | "sourceLabel"
  >;
};
export type GuideMetadataAuthoring = GuideMetadataFields & {
  identityKey: string;
  game: Game;
  name: TextRef;
};
