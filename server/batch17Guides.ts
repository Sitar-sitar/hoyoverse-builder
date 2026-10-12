import { records as guideRecords } from "../content/guideDefinitions_batch17";
import { projectGuideRegistry } from "./content/guides";

import type { GuideDefinition } from "./buildAdvisor";

export const BATCH17_DATE = "2026-09-08";
export const BATCH17_GUIDE_DATA_AS_OF: Readonly<Record<string, string>> = {
  七七: "2026-09-08",
  北斗: "2026-09-08",
  夢見月瑞希: "2026-09-08",
  早柚: "2026-08-14",
  旅人: "2026-09-08",
};

const SPECS: Record<string, GuideDefinition> = projectGuideRegistry(
  guideRecords,
  "SPECS"
);

export const BATCH_17_CHARACTER_NAMES = Object.freeze(Object.keys(SPECS));

export function batch17GuideFor(name: string): GuideDefinition | null {
  return Object.hasOwn(SPECS, name) ? structuredClone(SPECS[name]) : null;
}
