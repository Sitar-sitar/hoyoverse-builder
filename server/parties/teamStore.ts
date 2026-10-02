import { CHARACTER_GUIDE_CATALOG } from "../characterGuideCatalog";
import { legacyOptionsFor } from "./legacyCatalog";
import { SHARED_TEAMS } from "./sharedTeams";
import type { PartyGameId, PartyRecommendation, Team } from "./types";

/**
 * 編成マスタの索引。旧形式（legacyCatalog）を起動時に1回だけ変換し、共有編成（sharedTeams）と結合する。
 * 設計: docs/実装設計書_推奨PTの編成マスタ化と関連キャラ連動_2026-10-01.md §4.3.4・§4.6.1
 */
export type TeamStore = {
  teams: readonly Team[];
  byId: ReadonlyMap<string, Team>;
  /** キー `game:origin`。originOrder 昇順。件数の上限なし。 */
  byOrigin: ReadonlyMap<string, readonly Team[]>;
  /** 重複して読み飛ばしたID（テストで空を検査）。 */
  duplicateIds: readonly string[];
};

export const PARTY_GAMES = ["hsr", "genshin", "zzz"] as const satisfies readonly PartyGameId[];

/** 旧形式の1案を編成へ変換する。本人の目標補正は起点メンバーへ移す（空配列は持たせない）。 */
export function toLegacyTeam(game: PartyGameId, owner: string, option: PartyRecommendation): Team {
  const { id, rank, members, targetChanges, ...rest } = option;
  return {
    id, game, origin: owner, originOrder: rank, shared: false, batch: null,
    title: rest.title,
    members: members.map((entry) => entry.name.ja === owner && targetChanges.length > 0 ? { ...entry, targetChanges } : { ...entry }),
    synergy: rest.synergy, targetSummary: rest.targetSummary,
    gameVersion: rest.gameVersion, dataAsOf: rest.dataAsOf, updatedAt: rest.updatedAt,
    sourceLabel: rest.sourceLabel, sourceUrl: rest.sourceUrl, communitySources: rest.communitySources,
  };
}

export function legacyTeams(): Team[] {
  const teams: Team[] = [];
  for (const game of PARTY_GAMES) {
    for (const owner of CHARACTER_GUIDE_CATALOG[game] as readonly string[]) {
      for (const option of legacyOptionsFor(game, owner) ?? []) teams.push(toLegacyTeam(game, owner, option));
    }
  }
  return teams;
}

/** 先に出たIDを採用し、後の重複は duplicateIds へ入れる（起動時に例外を投げない。D8）。 */
export function buildTeamStore(teams: readonly Team[]): TeamStore {
  const byId = new Map<string, Team>();
  const duplicateIds: string[] = [];
  const byOrigin = new Map<string, Team[]>();
  for (const team of teams) {
    if (byId.has(team.id)) {
      duplicateIds.push(team.id);
      continue;
    }
    byId.set(team.id, team);
    const key = `${team.game}:${team.origin}`;
    byOrigin.set(key, [...(byOrigin.get(key) ?? []), team]);
  }
  for (const list of byOrigin.values()) list.sort((a, b) => a.originOrder - b.originOrder);
  return { teams: [...byId.values()], byId, byOrigin, duplicateIds };
}

export const TEAM_STORE: TeamStore = buildTeamStore([...legacyTeams(), ...SHARED_TEAMS]);
