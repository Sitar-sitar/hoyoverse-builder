/** Generic recipes and display fields live in content/teamGeneric.ts. */
import {
  HSR_RUNTIME_PATHS,
  ZZZ_RUNTIME_PROFESSIONS,
} from "../characterGuideCatalog";
import {
  genshinProfileIdFor,
  hsrProfileIdFor,
  zzzProfileIdFor,
} from "../individualGuides";
import type { PartyGameId, PartyRecommendation } from "./types";
import type { GenericProfile } from "../../shared/content/genericTeamAuthoring";
import { genericTeamOptions } from "../content/genericTeams";
function genericProfileFor(game: PartyGameId, name: string): GenericProfile {
  if (game === "hsr")
    return hsrProfileIdFor(name, HSR_RUNTIME_PATHS[name] ?? "");
  if (game === "genshin") return genshinProfileIdFor(name);
  return zzzProfileIdFor(ZZZ_RUNTIME_PROFESSIONS[name] ?? "Attack");
}
export function genericOptionsFor(
  game: PartyGameId,
  name: string
): PartyRecommendation[] {
  return genericTeamOptions(game, name, genericProfileFor(game, name));
}
