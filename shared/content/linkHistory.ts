import type { TextRef } from "./types";
export type LinkHistoryContent = {
  batch: number;
  date: string;
  updatedAt: string;
  sourceNote: TextRef;
  title: TextRef;
  summary: TextRef;
  summaryBindings: {
    v0: "characterName";
    v1: "addedCount";
    v2?: "removedCount";
  };
  changes: Array<{ blockId: string; text: TextRef }>;
  rationale: TextRef;
};
