import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { recipes } from "../../content/teamGeneric";
import {
  validateGenericRecipes,
  genericTeamSections,
  unresolvedGenericTeamMembers,
} from "../../content/genericTeams";
import { genericTeamOptions } from "./genericTeams";
import type { GenericProfile } from "../../shared/content/genericTeamAuthoring";
import type { PartyGameId, PartyRecommendation } from "../parties/types";

describe("generic team authoring", () => {
  it("matches independently captured old outputs for every game, profile and unusual owner input", () => {
    const baseline = JSON.parse(
      readFileSync(
        new URL(
          "../../content/coverage/genericTeams.baseline.json",
          import.meta.url
        ),
        "utf8"
      )
    ) as Array<{
      game: PartyGameId;
      profile: GenericProfile;
      owner: string;
      options: PartyRecommendation[];
    }>;
    expect(baseline).toHaveLength(108);
    for (const row of baseline)
      expect(
        JSON.stringify(genericTeamOptions(row.game, row.owner, row.profile))
      ).toBe(JSON.stringify(row.options));
    expect(genericTeamSections()).toHaveLength(108);
    expect(
      unresolvedGenericTeamMembers().filter(
        member => member.kind === "external-runtime-name"
      )
    ).toHaveLength(108);
  });
  it("rejects missing variants, omitted bindings, unclassified fields and wrong variable names", () => {
    expect(() => validateGenericRecipes(recipes.slice(1))).toThrow(
      "Missing generic recipe variant"
    );
    const missing = structuredClone(recipes);
    missing[0].ownerBindings.pop();
    expect(() => validateGenericRecipes(missing)).toThrow(
      "Generic owner bindings differ"
    );
    const unknown = structuredClone(recipes);
    Object.assign(unknown[0], { displayDescription: "unregistered" });
    expect(() => validateGenericRecipes(unknown)).toThrow(
      "Unclassified content field"
    );
    const variable = structuredClone(recipes);
    variable[0].ownerBindings[0].variable = "unregistered";
    expect(() => validateGenericRecipes(variable)).toThrow(
      "Generic owner bindings differ"
    );
    const wrongMember = structuredClone(recipes);
    wrongMember[0].ownerMemberIndexes = [99];
    expect(() => validateGenericRecipes(wrongMember)).toThrow(
      "Invalid generic owner member"
    );
  });
  it("keeps bound display text out of recipe identity and target numbers", () => {
    const before = JSON.stringify(recipes);
    const left = genericTeamOptions("hsr", "fixture first", "break");
    const right = genericTeamOptions("hsr", "fixture second", "break");
    expect(left[0].members[0].name.ja).toBe("fixture first");
    expect(right[0].members[0].name.ja).toBe("fixture second");
    expect(left.map(option => option.targetChanges)).toEqual(
      right.map(option => option.targetChanges)
    );
    expect(JSON.stringify(recipes)).toBe(before);
    expect(() =>
      genericTeamOptions("hsr", "fixture", "unknown" as GenericProfile)
    ).toThrow("Unknown generic team recipe");
  });
});
