import { CHARACTER_GUIDE_CATALOG } from "../characterGuideCatalog";
import { CHARACTER_PARTIES } from "./characterParties";
import { rosterKey } from "./linkStatus";
import { resolvePartySet, viewOf } from "./resolve";
import { TEAM_STORE, type TeamStore } from "./teamStore";
import type {
  CharacterPartyEntry,
  PartyGameId,
  PartyRecommendation,
} from "./types";

export type PartyAppearance = Omit<PartyRecommendation, "rank"> & {
  teamId: string;
  origin: string;
};

/** Catalog-only projections. Personal recommendation ranks and targets never enter this list. */
export function partyAppearancesFor(
  game: PartyGameId,
  name: string,
  store: TeamStore = TEAM_STORE,
  parties: Record<string, CharacterPartyEntry> = CHARACTER_PARTIES
): PartyAppearance[] {
  if (!(CHARACTER_GUIDE_CATALOG[game] as readonly string[]).includes(name))
    return [];
  const seen = new Set(
    resolvePartySet(game, name, store, parties).options.map(option =>
      rosterKey(game, option.members)
    )
  );
  const candidates = store.teams
    .filter(
      team =>
        team.shared &&
        team.game === game &&
        team.members.some(member => member.name.ja === name)
    )
    .sort((a, b) => {
      if (a.updatedAt !== b.updatedAt)
        return a.updatedAt > b.updatedAt ? -1 : 1;
      if (a.dataAsOf !== b.dataAsOf) return a.dataAsOf > b.dataAsOf ? -1 : 1;
      return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
    });
  const result: PartyAppearance[] = [];
  for (const team of candidates) {
    const key = rosterKey(game, team.members);
    if (seen.has(key)) continue;
    const view = viewOf(team, name, 1);
    if (!view) continue;
    seen.add(key);
    const { rank: _rank, ...appearance } = view;
    const owner = view.members.find(member => member.name.ja === name)!;
    result.push({
      ...appearance,
      id: `${team.id}@${name}`,
      members: [owner, ...view.members.filter(member => member !== owner)],
      targetChanges: [],
      teamId: team.id,
      origin: team.origin,
    });
    if (result.length === 6) break;
  }
  return result;
}
