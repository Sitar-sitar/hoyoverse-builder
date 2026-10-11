/** Public DTO: selected display fields only, never authoring or review data. */
export type PresentationDTO = {
  schemaVersion: 1; contentRevision: string; language: "ja"; identityKey: string | null;
  information: { introduction: "notCollected"; skills: "notCollected" };
  display: Record<string, unknown>;
};
