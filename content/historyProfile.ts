import type { TextRef } from "../shared/content/types";
export type HistoryProfileTemplate = {
  templateId: string;
  dateSource: "characterMetadata.updatedAt";
  title: TextRef;
  summary: TextRef;
  summaryBindings: { v0: "profileId" };
  changes: Array<{ blockId: string; text: TextRef }>;
  rationale: TextRef;
};
export const historyProfileTemplate: HistoryProfileTemplate = {
  templateId: "history.character.profile",
  dateSource: "characterMetadata.updatedAt",
  title: { kind: "textRef", id: "guide.legacy.guideUpdateHistory.b00323" },
  summary: { kind: "textRef", id: "history.character.profile.summary" },
  summaryBindings: { v0: "profileId" },
  changes: [
    {
      blockId: "history.character.profile.metadata",
      text: { kind: "textRef", id: "guide.legacy.guideUpdateHistory.b00324" },
    },
  ],
  rationale: { kind: "textRef", id: "guide.legacy.guideUpdateHistory.b00325" },
};
