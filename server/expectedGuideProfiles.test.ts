import { describe, expect, it } from "vitest";
import { CHARACTER_GUIDE_CATALOG, HSR_RUNTIME_PATHS, ZZZ_RUNTIME_PROFESSIONS, type CatalogGameId } from "./characterGuideCatalog";
import { expectedProfileFor } from "./expectedGuideProfiles";
import { generatedGenshinGuide, generatedHsrGuide, generatedZzzGuide } from "./individualGuides";

describe("expectedProfileFor と個別ガイドのロール分類", () => {
  it("全248名で expectedProfileFor と generated*Guide の profileId が一致する", () => {
    const mismatches: string[] = [];
    for (const game of ["hsr", "genshin", "zzz"] as CatalogGameId[]) {
      for (const name of CHARACTER_GUIDE_CATALOG[game]) {
        const expected = expectedProfileFor(game, name);
        const generated = game === "hsr"
          ? generatedHsrGuide(name, HSR_RUNTIME_PATHS[name] ?? "").profileId
          : game === "genshin"
            ? generatedGenshinGuide(name).profileId
            : generatedZzzGuide(name, ZZZ_RUNTIME_PROFESSIONS[name] ?? "Attack").profileId;
        if (expected !== generated) mismatches.push(`${game}:${name} expected=${expected} generated=${generated}`);
      }
    }
    expect(mismatches).toEqual([]);
  });
});
