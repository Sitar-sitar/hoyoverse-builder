import { BATCH23_GENSHIN_CHARACTERS } from "./batch23GenshinData";
import { BATCH29_GENSHIN_CHARACTERS } from "./batch29GenshinData";

/** 公開メタデータ欠落時にだけ使用する、根拠を確認した追加キャラ。 */
export const CURATED_GENSHIN_CHARACTERS = {
  ...BATCH23_GENSHIN_CHARACTERS,
  ...BATCH29_GENSHIN_CHARACTERS,
};

export function curatedGenshinCharacterForName(name: string) {
  return Object.entries(CURATED_GENSHIN_CHARACTERS).find(
    ([, entry]) => entry.name === name
  );
}
