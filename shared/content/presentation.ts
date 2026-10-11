import type {Section} from "./types";
/** Public DTO: selected display fields only, never authoring or review data. */
export type PresentationDTO = {
  schemaVersion: 1; contentRevision: string; language: "ja"; identityKey: string | null;
  information: { introduction: Section<unknown>["status"]; skills: Section<unknown>["status"] };
  display: Record<string, unknown>;
};
