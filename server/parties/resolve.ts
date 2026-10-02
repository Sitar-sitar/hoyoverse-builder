import { CHARACTER_GUIDE_CATALOG } from "../characterGuideCatalog";
import { CHARACTER_PARTIES } from "./characterParties";
import { genericOptionsFor } from "./legacyCatalog";
import { TEAM_STORE, type TeamStore } from "./teamStore";
import { MAX_PARTY_OPTIONS, type CharacterPartyEntry, type PartyGameId, type PartyRecommendation, type PartyRecommendationSet, type PartyRef, type Team } from "./types";

/**
 * 参照リストから推奨PTを組み立てる（§4.6）。公開応答の形とキーの並びは移行前と同じにする。
 */
export function refsFor(game: PartyGameId, name: string, store: TeamStore = TEAM_STORE, parties: Record<string, CharacterPartyEntry> = CHARACTER_PARTIES): PartyRef[] {
  const entry = parties[`${game}:${name}`];
  if (entry?.refs) return entry.refs;
  // 既定参照は保存順の先頭3件だけ。4件目以降は保存されているが表示されない（明示参照で選ぶ）。
  return (store.byOrigin.get(`${game}:${name}`) ?? []).slice(0, MAX_PARTY_OPTIONS).map((team) => ({ team: team.id }));
}

export function viewOf(team: Team, owner: string, rank: 1 | 2 | 3, ref?: PartyRef): PartyRecommendation | null {
  const at = team.members.findIndex((entry) => entry.name.ja === owner);
  if (at < 0) return null;
  const isOrigin = team.origin === owner;
  // 起点は保存順のまま（本人が先頭でない旧形式を保つ）。起点以外は本人を先頭へ移し、残りは保存順。
  const ordered = isOrigin ? team.members : [team.members[at]!, ...team.members.filter((_, index) => index !== at)];
  // キーの並びは移行前の案と同じに固定する（ゴールデン比較は JSON 文字列で比べる）。
  return {
    id: isOrigin ? team.id : (ref?.viewId ?? `${team.id}@${owner}`),
    rank,
    title: team.title,
    members: ordered.map(({ name, role }) => ({ name, role })),
    synergy: team.synergy,
    targetChanges: team.members[at]!.targetChanges ?? [],
    targetSummary: team.targetSummary,
    gameVersion: team.gameVersion,
    dataAsOf: team.dataAsOf,
    updatedAt: team.updatedAt,
    sourceLabel: team.sourceLabel,
    sourceUrl: team.sourceUrl,
    communitySources: team.communitySources,
  };
}

/** セット期日の規則: updatedAt が新しい順 → dataAsOf が新しい順 → rank が小さい順の先頭。 */
export function latestOption(options: readonly PartyRecommendation[]): PartyRecommendation {
  return options.reduce((best, entry) => {
    if (entry.updatedAt !== best.updatedAt) return entry.updatedAt > best.updatedAt ? entry : best;
    if (entry.dataAsOf !== best.dataAsOf) return entry.dataAsOf > best.dataAsOf ? entry : best;
    return entry.rank < best.rank ? entry : best;
  });
}

/** 無効な参照は読み飛ばし（D8。テストで禁止）、有効な参照が無ければ汎用案を返す。 */
export function resolvePartySet(game: PartyGameId, name: string, store: TeamStore = TEAM_STORE, parties: Record<string, CharacterPartyEntry> = CHARACTER_PARTIES): PartyRecommendationSet {
  const options: PartyRecommendation[] = [];
  for (const ref of refsFor(game, name, store, parties)) {
    if (options.length === MAX_PARTY_OPTIONS) break;
    const team = store.byId.get(ref.team);
    if (!team || team.game !== game) continue;
    if (team.origin !== name && !team.shared) continue;
    const view = viewOf(team, name, (options.length + 1) as 1 | 2 | 3, ref);
    if (view) options.push(view);
  }
  const finalOptions = options.length > 0 ? options : genericOptionsFor(game, name);
  const head = latestOption(finalOptions);
  return { gameVersion: head.gameVersion, dataAsOf: head.dataAsOf, updatedAt: head.updatedAt, options: finalOptions };
}

export function partyRecommendationsFor(game: PartyGameId, characterName: string): PartyRecommendationSet {
  return resolvePartySet(game, characterName);
}

export const PARTY_CATALOG_CHARACTER_COUNT = Object.values(CHARACTER_GUIDE_CATALOG).filter(Array.isArray).reduce((total, names) => total + names.length, 0);

export function assertPartyCatalogIntegrity() {
  return Object.entries(CHARACTER_GUIDE_CATALOG)
    .filter(([game, names]) => (game === "hsr" || game === "genshin" || game === "zzz") && Array.isArray(names))
    .every(([game, names]) => (names as readonly string[]).every((name) => {
    const options = partyRecommendationsFor(game as PartyGameId, name).options;
    return options.length > 0 && options.length <= MAX_PARTY_OPTIONS && options.every((entry, index) => entry.rank === index + 1 && entry.members.some((partyMember) => partyMember.name.ja === name) && entry.communitySources.length > 0);
  }));
}
