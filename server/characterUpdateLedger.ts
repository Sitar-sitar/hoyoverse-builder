import { batchIdFor } from "./characterBatches";
import { CHARACTER_GUIDE_CATALOG, type CatalogGameId } from "./characterGuideCatalog";

export type UpdateLedgerStatus = "reviewed" | "pending";

export type CharacterUpdateLedgerEntry = {
  game: CatalogGameId;
  name: string;
  status: UpdateLedgerStatus;
  batch: number | null;
};

export type CharacterUpdateLedger = {
  total: number;
  reviewed: number;
  pending: number;
  byGame: Record<CatalogGameId, { total: number; reviewed: number; pending: number }>;
  nextBatch: { id: number; names: CharacterUpdateLedgerEntry[] };
  criteria: string;
  entries: CharacterUpdateLedgerEntry[];
};

const NEXT_BATCH: Record<CatalogGameId, readonly string[]> = {
  hsr: [],
  genshin: [],
  zzz: [],
};

function buildLedger(): CharacterUpdateLedger {
  const games: CatalogGameId[] = ["hsr", "genshin", "zzz"];
  const entries = games.flatMap((game) => CHARACTER_GUIDE_CATALOG[game].map((name) => {
    const batch = batchIdFor(game, name);
    return { game, name, status: batch !== null ? "reviewed" as const : "pending" as const, batch };
  }));
  const byGame = Object.fromEntries(games.map((game) => {
    const gameEntries = entries.filter((entry) => entry.game === game);
    const reviewed = gameEntries.filter((entry) => entry.status === "reviewed").length;
    return [game, { total: gameEntries.length, reviewed, pending: gameEntries.length - reviewed }];
  })) as CharacterUpdateLedger["byGame"];
  const reviewed = entries.filter((entry) => entry.status === "reviewed").length;
  const nextBatch = games.flatMap((game) => NEXT_BATCH[game].map((name) => {
    const entry = entries.find((candidate) => candidate.game === game && candidate.name === name);
    if (!entry) throw new Error(`Next batch character is absent from catalog: ${game}:${name}`);
    return entry;
  }));
  return {
    total: entries.length,
    reviewed,
    pending: entries.length - reviewed,
    byGame,
    nextBatch: { id: 19, names: nextBatch },
    criteria: `全${entries.length}キャラクターについて、更新日付き個別ビルド根拠、確認済みsource IDの全6段階凸（未実装・未公開は安全表示）、最大3案の推奨PT、戦闘内補正の公開値分離、回帰テストを維持して公開する。`,
    entries,
  };
}

let cachedLedger: CharacterUpdateLedger | undefined;
let ledgerIndex: Map<string, CharacterUpdateLedgerEntry> | undefined;

/** 台帳は入力を持たない静的計算のため、プロセス内で1度だけ組み立てて共有する。 */
export function characterUpdateLedger(): CharacterUpdateLedger {
  return (cachedLedger ??= buildLedger());
}

/** `game:name` で台帳エントリを引く（無ければ undefined）。台帳全体の線形探索を避けるための索引。 */
export function ledgerEntryFor(game: CatalogGameId, name: string): CharacterUpdateLedgerEntry | undefined {
  ledgerIndex ??= new Map(characterUpdateLedger().entries.map((entry) => [`${entry.game}:${entry.name}`, entry]));
  return ledgerIndex.get(`${game}:${name}`);
}
