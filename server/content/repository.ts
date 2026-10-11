import { canonicalCatalog } from "../../content/catalog";
import { CHARACTER_GUIDE_CATALOG } from "../characterGuideCatalog";
import { catalogSourceIdFor } from "../characterConstellations";
import { SKILL_COLLECTION_REASON, SKILL_REQUIRED_KINDS } from "../../content/coverage/skillRequirements";
import type { CoverageSection } from "../../shared/content/types";
import { indexCatalog } from "./catalog";
import { contentDigest } from "./hash";
import { sourceIssues } from "./coverage";

export function plannedSections(): CoverageSection[] {
  return (["hsr", "genshin", "zzz"] as const).flatMap(game => CHARACTER_GUIDE_CATALOG[game].flatMap(name => {
    const sourceId = catalogSourceIdFor(game, name);
    if (!sourceId) throw new Error(`Unresolved canonical character identity: ${game}:${name}`);
    return (["introduction", "skills"] as const).map(section => ({
      id: `character.${game}.${sourceId}.${section}`, audience: "public" as const, visibility: "planned" as const,
      section: { status: "notCollected" as const,
        reason: section === "skills" ? SKILL_COLLECTION_REASON : "独立した紹介文が未登録",
        requiredKinds: section === "skills" ? [...SKILL_REQUIRED_KINDS[game]] : ["introduction"] },
    }));
  }));
}

export function contentRepository() {
  const planned = plannedSections();
  const catalog = canonicalCatalog(planned);
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
