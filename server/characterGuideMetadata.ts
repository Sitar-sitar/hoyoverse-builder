/** Character metadata authority lives in content/guideMetadata.ts. */
import type { CatalogGameId } from "./characterGuideCatalog";
import {
  projectGuideMetadataRegistry,
  projectGuideMetadataDefaults,
  type LegacyGuideMetadata,
} from "./content/guideMetadata";
export type CharacterGuideMetadata = LegacyGuideMetadata;
export const CHARACTER_GUIDE_METADATA = projectGuideMetadataRegistry();
const defaults = projectGuideMetadataDefaults();
export function guideMetadataFor(
  game: CatalogGameId,
  name?: string
): CharacterGuideMetadata {
  const record =
    name && Object.hasOwn(CHARACTER_GUIDE_METADATA[game], name)
      ? CHARACTER_GUIDE_METADATA[game][name]
      : undefined;
  return record ?? { ...defaults[game] };
}
