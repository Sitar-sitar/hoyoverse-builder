import { HSR_RUNTIME_PATHS, ZZZ_RUNTIME_PROFESSIONS, type CatalogGameId } from "./characterGuideCatalog";
import { genshinProfileIdFor, hsrProfileIdFor, zzzProfileIdFor } from "./individualGuides";

/** カタログ名から期待されるロールプロファイル。分類の正本は individualGuides.ts の3関数（ガイド生成と同一判定）。 */
export function expectedProfileFor(game: CatalogGameId, name: string): string {
  if (game === "hsr") return hsrProfileIdFor(name, HSR_RUNTIME_PATHS[name] ?? "");
  if (game === "genshin") return genshinProfileIdFor(name);
  return zzzProfileIdFor(ZZZ_RUNTIME_PROFESSIONS[name] ?? "");
}
