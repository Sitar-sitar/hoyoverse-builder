import type { GuideDefinition } from "./buildAdvisor";
import { guideFor, withGuideMetadata } from "./buildAdvisor";
import { batch15ConstellationFor } from "./batch15Constellations";
import { batch15GuideFor } from "./batch15Guides";
import { batch15PartyFor } from "./batch15Parties";
import { CHARACTER_GUIDE_CATALOG, HSR_RUNTIME_PATHS, ZZZ_RUNTIME_PROFESSIONS, type CatalogGameId } from "./characterGuideCatalog";
import { catalogSourceIdFor, constellationProfileFor, constellationProfileForCatalogName } from "./characterConstellations";
import { characterUpdateLedger, ledgerEntryFor } from "./characterUpdateLedger";
import { genshinGuide, zzzGuide } from "./gameProviders";
import { partyRecommendationsFor } from "./partyRecommendations";
import { resolveCharacterIdentity } from "./characterIdentity";

export type CharacterReferenceCatalogEntry = {
  game: CatalogGameId;
  name: string;
  status: "reviewed" | "pending";
  batch: number | null;
};

export type CharacterReference = {
  game: CatalogGameId;
  name: string;
  status: "reviewed" | "pending";
  batch: number | null;
  guide: GuideDefinition;
  partyRecommendations: ReturnType<typeof partyRecommendationsFor>;
  constellations: ReturnType<typeof constellationProfileFor>;
};

const GAME_IDS: CatalogGameId[] = ["hsr", "genshin", "zzz"];

export function isCatalogCharacter(game: CatalogGameId, name: string) {
  return (CHARACTER_GUIDE_CATALOG[game] as readonly string[]).includes(name);
}

function baseGuideFor(game: CatalogGameId, name: string): GuideDefinition {
  if (game === "hsr") {
    // 同名で複数実装があるキャラクターを取り違えないため、凸と同じ確認済み source ID を渡す。
    return guideFor(name, HSR_RUNTIME_PATHS[name] ?? "", { variantOf: null, sourceId: catalogSourceIdFor("hsr", name) ?? name });
  }
  // UID照会と同じ個別ガイド解決を使う。generated* へ直接フォールバックすると、
  // provider 経路だけに登録された個別ビルドが図鑑へ届かない。
  if (game === "genshin") {
    return genshinGuide(name);
  }
  return zzzGuide(name, ZZZ_RUNTIME_PROFESSIONS[name] ?? "Attack");
}

function buildReferenceCatalog() {
  const ledger = characterUpdateLedger();
  const entryByKey = new Map(ledger.entries.map((entry) => [`${entry.game}:${entry.name}`, entry]));
  const games = Object.fromEntries(GAME_IDS.map((game) => [
    game,
    CHARACTER_GUIDE_CATALOG[game].map((name): CharacterReferenceCatalogEntry => {
      const entry = entryByKey.get(`${game}:${name}`);
      return {
        game,
        name,
        status: entry?.status ?? "pending",
        batch: entry?.batch ?? null,
      };
    }),
  ])) as Record<CatalogGameId, CharacterReferenceCatalogEntry[]>;

  return {
    dataAsOf: CHARACTER_GUIDE_CATALOG.dataAsOf,
    total: ledger.total,
    reviewed: ledger.reviewed,
    pending: ledger.pending,
    games,
  };
}

let cachedCatalog: ReturnType<typeof buildReferenceCatalog> | undefined;

/** 図鑑一覧は静的計算のため、プロセス内で1度だけ組み立てて共有する。 */
export function characterReferenceCatalog() {
  return (cachedCatalog ??= buildReferenceCatalog());
}

export function characterReferenceFor(game: CatalogGameId, name: string): CharacterReference | null {
  if (!isCatalogCharacter(game, name)) return null;

  const ledgerEntry = ledgerEntryFor(game, name);
  const baseGuide = baseGuideFor(game, name);
  const guide = batch15GuideFor(game, name, baseGuide) ?? baseGuide;
  const partyRecommendations = batch15PartyFor(game, name) ?? partyRecommendationsFor(game, name);
  const identity = resolveCharacterIdentity(game, name, name);
  // 図鑑はカタログ名しか持たないため、確認済み source ID へ解決してから凸を引く。
  const constellations = batch15ConstellationFor(game, name, 0) ?? constellationProfileForCatalogName(game, name, 0);

  return {
    game,
    name,
    status: ledgerEntry?.status ?? "pending",
    batch: ledgerEntry?.batch ?? null,
    guide,
    partyRecommendations,
    constellations,
  };
}
