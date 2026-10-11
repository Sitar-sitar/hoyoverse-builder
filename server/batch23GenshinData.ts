import { records as guideRecords } from "../content/guideDefinitions_batch23";
import { projectGuideRegistry } from "./content/guides";
import { records as constellationRecords } from "../content/constellationBatch23";
import { projectConstellations } from "./content/constellations";
import { createLegacyTexts } from "./content/legacyTexts";
import { characterSources } from "../content/characters";
const _content = createLegacyTexts(characterSources, {}, {});
import type { GuideDefinition } from "./buildAdvisor";
import type { ConstellationProfile } from "./characterConstellations";

// genshin-db 49a6544a6c6ae36089cb42fa591fc46f01de8bcf: 実装済み Ver.7.1 の確認済みIDだけを補完する。
export const BATCH23_GENSHIN_CHARACTERS: Record<
  string,
  {
    name: string;
    element: string;
    weaponType: string;
    sideIcon: string;
    portrait: string;
    guide: GuideDefinition;
  }
> = {
  "10000143": {
    name: _content.ja("character.genshin.10000143.name"),
    element: "Wind",
    weaponType: "WEAPON_SWORD_ONE_HAND",
    sideIcon: "UI_AvatarIcon_Side_Vesna",
    portrait:
      "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Vesna.png",
    guide: projectGuideRegistry(guideRecords, "BATCH23_GENSHIN_CHARACTERS")[
      "10000143"
    ],
  },
  "10000140": {
    name: _content.ja("character.genshin.10000140.name"),
    element: "Water",
    weaponType: "WEAPON_CATALYST",
    sideIcon: "UI_AvatarIcon_Side_Vodyanitsa",
    portrait:
      "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Vodyanitsa.png",
    guide: projectGuideRegistry(guideRecords, "BATCH23_GENSHIN_CHARACTERS")[
      "10000140"
    ],
  },
};

export function batch23CharacterForName(name: string) {
  return Object.entries(BATCH23_GENSHIN_CHARACTERS).find(
    ([, entry]) => entry.name === name
  );
}

type CuratedEntry = Omit<
  ConstellationProfile,
  "rankLabel" | "acquiredRank" | "dataStatus" | "activeTargetChanges"
>;

// 命ノ星座の三言語名称・本文は上記revisionの公式ゲームデータ由来。生成時に表示用markupのみ除去。
export const BATCH23_GENSHIN_CONSTELLATIONS: Record<string, CuratedEntry> =
  projectConstellations(constellationRecords);
