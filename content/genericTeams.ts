import { recipes } from "./teamGeneric";
import { validateTeamRecords, teamAuthoringRefs } from "./teams";
import { contentFields } from "../shared/content/walk";
import {
  GENERIC_OWNER,
  GENERIC_PROFILES,
} from "../shared/content/genericTeamAuthoring";
import type { GenericTeamRecipe } from "../shared/content/genericTeamAuthoring";
import type { BoundTextRef } from "../shared/content/teamAuthoring";
import type { CoverageSection, TextRef } from "../shared/content/types";
const ignore = (_value: unknown): TextRef[] => [];

export function genericRecipeRefs(recipe: GenericTeamRecipe): TextRef[] {
  return contentFields(recipe, {
    recipeId: ignore,
    game: ignore,
    profile: ignore,
    rank: ignore,
    team: teamAuthoringRefs,
    ownerBindings: values =>
      values.flatMap(value =>
        contentFields(value, { path: ignore, variable: ignore })
      ),
    ownerMemberIndexes: ignore,
  });
}
export function genericBindingRef(
  recipe: GenericTeamRecipe,
  path: string
): BoundTextRef {
  let value: unknown = recipe.team;
  for (const key of path.split(".")) {
    if (!value || typeof value !== "object" || !Object.hasOwn(value, key))
      throw new Error("Unknown generic owner binding path");
    value = (value as Record<string, unknown>)[key];
  }
  if (
    !value ||
    typeof value !== "object" ||
    !("kind" in value) ||
    value.kind !== "textRef"
  )
    throw new Error("Generic owner binding needs a TextRef");
  return value as BoundTextRef;
}
export function validateGenericRecipes(values: GenericTeamRecipe[]) {
  validateTeamRecords(values.map(recipe => recipe.team));
  const keys = new Set<string>();
  for (const recipe of values) {
    genericRecipeRefs(recipe);
    const key = `${recipe.game}:${recipe.profile}:${recipe.rank}`;
    if (
      keys.has(key) ||
      recipe.recipeId !==
        `team.generic.${recipe.game}.${recipe.profile}.${recipe.rank}` ||
      recipe.team.id !== recipe.recipeId ||
      recipe.team.game !== recipe.game ||
      recipe.team.origin !== GENERIC_OWNER ||
      recipe.team.originOrder !== recipe.rank ||
      !GENERIC_PROFILES.includes(recipe.profile) ||
      ![1, 2, 3].includes(recipe.rank)
    )
      throw new Error("Invalid generic recipe identity");
    keys.add(key);
    const expected: Array<{ path: string; variable: string }> = [];
    function walk(value: unknown, path: string) {
      if (Array.isArray(value)) {
        value.forEach((item, index) => walk(item, `${path}.${index}`));
        return;
      }
      if (!value || typeof value !== "object") return;
      if ("kind" in value && value.kind === "textRef") {
        for (const [variable, binding] of Object.entries(
          (value as BoundTextRef).variables ?? {}
        ))
          if (binding === GENERIC_OWNER) expected.push({ path, variable });
        return;
      }
      Object.entries(value).forEach(([key, item]) =>
        walk(item, path ? `${path}.${key}` : key)
      );
    }
    walk(recipe.team, "");
    const sorted = (entries: typeof expected) =>
      entries.map(entry => `${entry.path}:${entry.variable}`).sort();
    if (
      JSON.stringify(sorted(expected)) !==
        JSON.stringify(sorted(recipe.ownerBindings)) ||
      new Set(sorted(recipe.ownerBindings)).size !== recipe.ownerBindings.length
    )
      throw new Error("Generic owner bindings differ");
    for (const binding of recipe.ownerBindings) {
      const ref = genericBindingRef(recipe, binding.path);
      if (ref.variables?.[binding.variable] !== GENERIC_OWNER)
        throw new Error("Invalid generic owner variable");
    }
    if (
      recipe.ownerMemberIndexes.length !== 1 ||
      !Number.isInteger(recipe.ownerMemberIndexes[0]) ||
      recipe.ownerMemberIndexes[0] < 0 ||
      recipe.ownerMemberIndexes[0] >= recipe.team.members.length ||
      !recipe.ownerBindings.some(
        binding =>
          binding.path === `members.${recipe.ownerMemberIndexes[0]}.name`
      )
    )
      throw new Error("Invalid generic owner member");
  }
  for (const game of ["hsr", "genshin", "zzz"])
    for (const profile of GENERIC_PROFILES)
      for (const rank of [1, 2, 3])
        if (!keys.has(`${game}:${profile}:${rank}`))
          throw new Error("Missing generic recipe variant");
  if (keys.size !== 3 * GENERIC_PROFILES.length * 3)
    throw new Error("Unexpected generic recipe variants");
}
export function genericTeamSections(): CoverageSection[] {
  validateGenericRecipes(recipes);
  return recipes.map(recipe => ({
    id: recipe.recipeId,
    audience: "public",
    visibility: "active",
    section: {
      status: "registered",
      evidence:
        "existing generic party factory branches; opaque owner name binding",
      data: genericRecipeRefs(recipe),
    },
  }));
}
export function unresolvedGenericTeamMembers() {
  validateGenericRecipes(recipes);
  return recipes
    .flatMap(recipe =>
      recipe.team.members.flatMap((member, index) =>
        member.identityResolution === "legacy"
          ? [
              {
                recipeId: recipe.recipeId,
                identityKey: member.identityKey,
                nameRef: member.name,
                kind: recipe.ownerMemberIndexes.includes(index)
                  ? "external-runtime-name"
                  : "legacy-static-name",
                reason: member.identityReason!,
              },
            ]
          : []
      )
    )
    .sort(
      (a, b) =>
        a.recipeId.localeCompare(b.recipeId) ||
        a.identityKey.localeCompare(b.identityKey)
    );
}
