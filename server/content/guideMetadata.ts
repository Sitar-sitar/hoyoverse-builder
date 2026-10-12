import { canonicalSources, canonicalTranslations } from "../../content/catalog";
import {
  guideMetadataRecords,
  guideMetadataDefaults,
  validateGuideMetadata,
} from "../../content/guideMetadataRegistry";
import { createLegacyTexts } from "./legacyTexts";
import type { GuideMetadataFields } from "../../shared/content/guideMetadataAuthoring";
import type { Game } from "../../shared/content/domains";
export type LegacyGuideMetadata = {
  profileId: string;
  dataAsOf: string;
  updatedAt: string;
  sourceLabel: string;
};
validateGuideMetadata(guideMetadataRecords, guideMetadataDefaults);
const texts = createLegacyTexts(
  canonicalSources,
  canonicalTranslations.en,
  canonicalTranslations["zh-CN"]
);
function project(fields: GuideMetadataFields): LegacyGuideMetadata {
  const values = {
    profileId: fields.profileId,
    dataAsOf: fields.dataAsOf,
    updatedAt: fields.updatedAt,
    sourceLabel: texts.ja(fields.sourceLabel.id),
  };
  return Object.fromEntries(
    fields.legacyFieldOrder.map(key => [key, values[key]])
  ) as LegacyGuideMetadata;
}
export function projectGuideMetadataRegistry(): Record<
  Game,
  Record<string, LegacyGuideMetadata>
> {
  const result: Record<Game, Record<string, LegacyGuideMetadata>> = {
    hsr: {},
    genshin: {},
    zzz: {},
  };
  for (const record of guideMetadataRecords)
    result[record.game][texts.ja(record.name.id)] = project(record);
  return result;
}
export function projectGuideMetadataDefaults(): Record<
  Game,
  LegacyGuideMetadata
> {
  return Object.fromEntries(
    Object.entries(guideMetadataDefaults).map(([game, fields]) => [
      game,
      project(fields),
    ])
  ) as Record<Game, LegacyGuideMetadata>;
}
