import { createLegacyTexts } from "./content/legacyTexts";
import { sources as _sources } from "../content/ja/guides/batch23GenshinData";
import { records as _en } from "../content/translations/en/batch23GenshinData";
import { records as _zh } from "../content/translations/zh-CN/batch23GenshinData";
const _content = createLegacyTexts(_sources, _en, _zh);
import type { GuideDefinition } from "./buildAdvisor";
import type { ConstellationProfile } from "./characterConstellations";

// genshin-db 49a6544a6c6ae36089cb42fa591fc46f01de8bcf: 実装済み Ver.7.1 の確認済みIDだけを補完する。
export const BATCH23_GENSHIN_CHARACTERS: Record<string, {
  name: string; element: string; weaponType: string; sideIcon: string; portrait: string; guide: GuideDefinition;
}> = {
  "10000143": {
    name: "ヴェスナ", element: "Wind", weaponType: "WEAPON_SWORD_ONE_HAND",
    sideIcon: "UI_AvatarIcon_Side_Vesna",
    portrait: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Vesna.png",
    guide: {
      headline: _content.ja("guide.legacy.batch23GenshinData.b00001"),
      relicSet: _content.ja("guide.legacy.batch23GenshinData.b00002"),
      planarSet: _content.ja("guide.legacy.batch23GenshinData.b00003"),
      mainStats: [{ slot: _content.ja("guide.legacy.batch23GenshinData.b00004"), value: _content.ja("guide.legacy.batch23GenshinData.b00005") }, { slot: _content.ja("guide.legacy.batch23GenshinData.b00006"), value: _content.ja("guide.legacy.batch23GenshinData.b00007") }, { slot: _content.ja("guide.legacy.batch23GenshinData.b00008"), value: _content.ja("guide.legacy.batch23GenshinData.b00009") }],
      targets: [],
      targetContext: _content.ja("guide.legacy.batch23GenshinData.b00010"),
    },
  },
  "10000140": {
    name: "ヴォジャニーツァ", element: "Water", weaponType: "WEAPON_CATALYST",
    sideIcon: "UI_AvatarIcon_Side_Vodyanitsa",
    portrait: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Vodyanitsa.png",
    guide: {
      headline: _content.ja("guide.legacy.batch23GenshinData.b00011"),
      relicSet: _content.ja("guide.legacy.batch23GenshinData.b00012"),
      planarSet: _content.ja("guide.legacy.batch23GenshinData.b00013"),
      mainStats: [{ slot: _content.ja("guide.legacy.batch23GenshinData.b00014"), value: _content.ja("guide.legacy.batch23GenshinData.b00015") }, { slot: _content.ja("guide.legacy.batch23GenshinData.b00016"), value: _content.ja("guide.legacy.batch23GenshinData.b00017") }, { slot: _content.ja("guide.legacy.batch23GenshinData.b00018"), value: _content.ja("guide.legacy.batch23GenshinData.b00019") }],
      targets: [],
      targetContext: _content.ja("guide.legacy.batch23GenshinData.b00020"),
    },
  },
};

export function batch23CharacterForName(name: string) {
  return Object.entries(BATCH23_GENSHIN_CHARACTERS).find(([, entry]) => entry.name === name);
}

type CuratedEntry = Omit<ConstellationProfile, "rankLabel" | "acquiredRank" | "dataStatus" | "activeTargetChanges">;

// 命ノ星座の三言語名称・本文は上記revisionの公式ゲームデータ由来。生成時に表示用markupのみ除去。
export const BATCH23_GENSHIN_CONSTELLATIONS: Record<string, CuratedEntry> = {
  "genshin:10000143": {
    "gameVersion": "7.1",
    "dataAsOf": "2026-10-01",
    "updatedAt": "2026-10-01",
    "sourceLabel": _content.localized("guide.legacy.batch23GenshinData.b00021"),
    "sourceUrl": "https://github.com/theBowja/genshin-db/blob/49a6544a6c6ae36089cb42fa591fc46f01de8bcf/src/data/Japanese/constellations/vesna.json",
    "effects": [
      {
        "level": 1,
        "name": _content.localized("guide.legacy.batch23GenshinData.b00022"),
        "description": _content.localized("guide.legacy.batch23GenshinData.b00023")
      },
      {
        "level": 2,
        "name": _content.localized("guide.legacy.batch23GenshinData.b00024"),
        "description": _content.localized("guide.legacy.batch23GenshinData.b00025")
      },
      {
        "level": 3,
        "name": _content.localized("guide.legacy.batch23GenshinData.b00026"),
        "description": _content.localized("guide.legacy.batch23GenshinData.b00027")
      },
      {
        "level": 4,
        "name": _content.localized("guide.legacy.batch23GenshinData.b00028"),
        "description": _content.localized("guide.legacy.batch23GenshinData.b00029")
      },
      {
        "level": 5,
        "name": _content.localized("guide.legacy.batch23GenshinData.b00030"),
        "description": _content.localized("guide.legacy.batch23GenshinData.b00031")
      },
      {
        "level": 6,
        "name": _content.localized("guide.legacy.batch23GenshinData.b00032"),
        "description": _content.localized("guide.legacy.batch23GenshinData.b00033")
      }
    ]
  },
  "genshin:10000140": {
    "gameVersion": "7.1",
    "dataAsOf": "2026-10-01",
    "updatedAt": "2026-10-01",
    "sourceLabel": _content.localized("guide.legacy.batch23GenshinData.b00034"),
    "sourceUrl": "https://github.com/theBowja/genshin-db/blob/49a6544a6c6ae36089cb42fa591fc46f01de8bcf/src/data/Japanese/constellations/vodyanitsa.json",
    "effects": [
      {
        "level": 1,
        "name": _content.localized("guide.legacy.batch23GenshinData.b00035"),
        "description": _content.localized("guide.legacy.batch23GenshinData.b00036")
      },
      {
        "level": 2,
        "name": _content.localized("guide.legacy.batch23GenshinData.b00037"),
        "description": _content.localized("guide.legacy.batch23GenshinData.b00038")
      },
      {
        "level": 3,
        "name": _content.localized("guide.legacy.batch23GenshinData.b00039"),
        "description": _content.localized("guide.legacy.batch23GenshinData.b00040")
      },
      {
        "level": 4,
        "name": _content.localized("guide.legacy.batch23GenshinData.b00041"),
        "description": _content.localized("guide.legacy.batch23GenshinData.b00042")
      },
      {
        "level": 5,
        "name": _content.localized("guide.legacy.batch23GenshinData.b00043"),
        "description": _content.localized("guide.legacy.batch23GenshinData.b00044")
      },
      {
        "level": 6,
        "name": _content.localized("guide.legacy.batch23GenshinData.b00045"),
        "description": _content.localized("guide.legacy.batch23GenshinData.b00046")
      }
    ]
  }
};
