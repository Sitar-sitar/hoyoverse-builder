import { canonicalCatalog } from "../../content/catalog";
import type { CoverageSection } from "../../shared/content/types";
import { indexCatalog } from "./catalog";
import { contentDigest } from "./hash";
import { sourceIssues } from "./coverage";
import { characterRecords, characterSources, validateCharacterRecords } from "../../content/characters";
import { characterRefs } from "../../shared/content/walk";
import { historySections } from "../../content/history";

export function plannedSections(): CoverageSection[] {
  return characterRecords.flatMap(record => {
    const { order: _order, ...character } = record;
    return (["introduction", "skills"] as const).map(key => {
      const value = character[key];
      const refs = characterRefs({ ...character,
        [key === "skills" ? "introduction" : "skills"]: { status: "notCollected", reason: "Separate coverage section", requiredKinds: ["separate"] },
      }).slice(1);
      return { id: `character.${record.game}.${record.identityKey.slice(record.game.length + 1)}.${key}`, audience: "public", visibility: "planned",
        section: value.status === "registered" ? { ...value, data: refs } : value } as CoverageSection;
    });
  });
}

export function contentRepository() {
  validateCharacterRecords(characterRecords, characterSources);
  const planned = plannedSections();
  const names: CoverageSection[] = characterRecords.map(record => ({ id: `character.${record.game}.${record.identityKey.slice(record.game.length + 1)}.name`, audience: "public", visibility: "active", section: { status: "registered", data: [record.name], evidence: "confirmed catalog identity migration" } }));
  const catalog = canonicalCatalog([...planned, ...names, ...historySections()]);
  const index = indexCatalog(catalog, planned);
  const issues = [...index.issues, ...catalog.sources.flatMap(sourceIssues)];
  if (issues.length) throw new Error(`Canonical content invalid: ${issues.map(issue => issue.code).join(", ")}`);
  return index;
}

export function contentManifest() {
  const index = contentRepository();
  return { schemaVersion: 1 as const, contentRevision: contentDigest(index.catalog),
    translationMode: "preparation" as const, readyLanguages: ["ja"] as const,
    activeSections: index.catalog.sections.filter(section => section.visibility === "active").map(section => section.id).sort(),
    plannedSections: index.catalog.sections.filter(section => section.visibility === "planned").map(section => section.id).sort() };
}
