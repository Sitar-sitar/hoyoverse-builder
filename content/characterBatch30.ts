// genshin-db 8e5badd60b5d894284ccc927a56c9683529d2592（Ver.7.2）とEnka公開store/gi/avatars.json（2026-11-04更新）。第30バッチの確認済みID。
export const BATCH30_CHARACTER_METADATA: Record<
  string,
  {
    name: string;
    element: string;
    weaponType: string;
    sideIcon: string;
    portrait: string;
  }
> = {
  "10000136": {
    "name": "ミティヤ",
    "element": "Electric",
    "weaponType": "WEAPON_CATALYST",
    "sideIcon": "UI_AvatarIcon_Side_Mitya",
    "portrait": "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Mitya.png"
  },
  "10000137": {
    "name": "バレリー",
    "element": "Electric",
    "weaponType": "WEAPON_SWORD_ONE_HAND",
    "sideIcon": "UI_AvatarIcon_Side_Valeriy",
    "portrait": "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Valeriy.png"
  }
};
