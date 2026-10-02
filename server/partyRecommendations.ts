/**
 * 推奨PTの互換窓口。実データと解決は server/parties/ にある
 * （設計: docs/実装設計書_推奨PTの編成マスタ化と関連キャラ連動_2026-10-01.md）。
 */
export type { PartyGameId, LocalizedText, PartyMember, PartyTargetChange, PartyCommunitySource, PartyRecommendation, PartyRecommendationSet } from "./parties/types";
export { MAX_PARTY_OPTIONS } from "./parties/types";
export { partyRecommendationsFor, assertPartyCatalogIntegrity, PARTY_CATALOG_CHARACTER_COUNT } from "./parties/resolve";
