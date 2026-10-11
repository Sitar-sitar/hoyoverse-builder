import { recipes } from "../../content/teamGeneric";
import {
  validateGenericRecipes,
  genericBindingRef,
} from "../../content/genericTeams";
import type { GenericProfile } from "../../shared/content/genericTeamAuthoring";
import type { PartyGameId, PartyRecommendation } from "../parties/types";
import { projectTeams } from "./teams";
validateGenericRecipes(recipes);
const groups = new Map<string, typeof recipes>();
for (const recipe of recipes) {
  const key = `${recipe.game}:${recipe.profile}`;
  groups.set(key, [...(groups.get(key) ?? []), recipe]);
}
/** Classification and numeric recipes remain independent of resolved display text. */
export function genericTeamOptions(
  game: PartyGameId,
  owner: string,
  profile: GenericProfile
): PartyRecommendation[] {
  const selected = groups.get(`${game}:${profile}`);
  if (!selected || typeof owner !== "string")
    throw new Error("Unknown generic team recipe");
  const records = selected.map(original => {
    const recipe = structuredClone(original);
    for (const binding of recipe.ownerBindings)
      genericBindingRef(recipe, binding.path).variables![binding.variable] =
        owner;
    return recipe.team;
  });
  return projectTeams(records).map((team, index) => ({
    id: `generated-${game}-${owner}-${selected[index].rank}`,
    rank: selected[index].rank,
    title: team.title,
    members: team.members.map(({ targetChanges, ...member }) => member),
    synergy: team.synergy,
    targetChanges:
      team.members[selected[index].ownerMemberIndexes[0]].targetChanges ?? [],
    targetSummary: team.targetSummary,
    gameVersion: team.gameVersion,
    dataAsOf: team.dataAsOf,
    updatedAt: team.updatedAt,
    sourceLabel: team.sourceLabel,
    sourceUrl: team.sourceUrl,
    communitySources: team.communitySources,
  }));
}
