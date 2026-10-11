import { validateTeamRecords } from "../../content/teams";
import { canonicalSources, canonicalTranslations } from "../../content/catalog";
import type {
  TeamAuthoring,
  BoundTextRef,
} from "../../shared/content/teamAuthoring";
import type { Team } from "../parties/types";
import type { TextRef } from "../../shared/content/types";
import { createLegacyTexts } from "./legacyTexts";
const texts = createLegacyTexts(
  canonicalSources,
  canonicalTranslations.en,
  canonicalTranslations["zh-CN"]
);
function project(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(project);
  if (!value || typeof value !== "object") return value;
  if ("kind" in value && value.kind === "textRef")
    return texts.localized(
      (value as BoundTextRef).id,
      (value as BoundTextRef).variables
    );
  return Object.fromEntries(
    Object.entries(value)
      .filter(
        ([key]) =>
          !["identityKey", "identityResolution", "identityReason"].includes(key)
      )
      .map(([key, item]) => [
        key,
        project(
          key === "synergy"
            ? (item as TeamAuthoring["synergy"]).map(block => block.text)
            : item
        ),
      ])
  );
}
/** Shared Team metadata, order and numeric changes remain in the old API shape. */
export function projectTeams(records: TeamAuthoring[]): Team[] {
  validateTeamRecords(records);
  return records.map(team => project(team) as Team);
}
