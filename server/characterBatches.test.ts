import { describe, expect, it } from "vitest";
import { BATCH15_CHARACTERS } from "./batch15Guides";
import { BATCH_17_CHARACTER_NAMES } from "./batch17Guides";
import { REVIEWED_BATCHES, batchNames } from "./characterBatches";
import { CHARACTER_GUIDE_CATALOG, type CatalogGameId } from "./characterGuideCatalog";

const GAMES: CatalogGameId[] = ["hsr", "genshin", "zzz"];

describe("バッチ名リストの正本", () => {
  it("REVIEWED_BATCHES の全名前がカタログ248名に存在する", () => {
    const missing: string[] = [];
    for (const [id, games] of Object.entries(REVIEWED_BATCHES)) {
      for (const game of GAMES) {
        for (const name of games[game]) {
          if (!(CHARACTER_GUIDE_CATALOG[game] as readonly string[]).includes(name)) missing.push(`${id}:${game}:${name}`);
        }
      }
    }
    expect(missing).toEqual([]);
  });

  it("同じ game:name が2つ以上のバッチに現れない", () => {
    const seen = new Map<string, number>();
    const duplicated: string[] = [];
    for (const [id, games] of Object.entries(REVIEWED_BATCHES)) {
      for (const game of GAMES) {
        for (const name of games[game]) {
          const key = `${game}:${name}`;
          if (seen.has(key)) duplicated.push(`${key} (batch ${seen.get(key)} と ${id})`);
          else seen.set(key, Number(id));
        }
      }
    }
    expect(duplicated).toEqual([]);
  });

  it("第17バッチの名前が batch17Guides の対象と集合として一致する", () => {
    expect([...batchNames(17).genshin].sort()).toEqual([...BATCH_17_CHARACTER_NAMES].sort());
    expect(batchNames(17).hsr).toEqual([]);
    expect(batchNames(17).zzz).toEqual([]);
  });

  it("BATCH15_CHARACTERS が batchNames(15) と一致する", () => {
    expect(BATCH15_CHARACTERS).toEqual(batchNames(15));
  });
});
