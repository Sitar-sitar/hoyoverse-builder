import { records } from "../content/guideDefinitions_batch29";
import { BATCH29_CHARACTER_METADATA } from "../content/characterBatch29";
import { projectGuideRegistry } from "./content/guides";
const guides = projectGuideRegistry(records, "BATCH29_GENSHIN_CHARACTERS");
export const BATCH29_GENSHIN_CHARACTERS = Object.fromEntries(
  Object.entries(BATCH29_CHARACTER_METADATA).map(([id, entry]) => [
    id,
    { ...entry, guide: guides[id] },
  ])
);
