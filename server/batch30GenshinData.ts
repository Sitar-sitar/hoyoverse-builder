import { records } from "../content/guideDefinitions_batch30";
import { BATCH30_CHARACTER_METADATA } from "../content/characterBatch30";
import { projectGuideRegistry } from "./content/guides";
const guides = projectGuideRegistry(records, "BATCH30_GENSHIN_CHARACTERS");
export const BATCH30_GENSHIN_CHARACTERS = Object.fromEntries(
  Object.entries(BATCH30_CHARACTER_METADATA).map(([id, entry]) => [
    id,
    { ...entry, guide: guides[id] },
  ])
);
