import { createLegacyTexts } from "../content/legacyTexts";
import { sources as _sources } from "../../content/ja/guides/parties_batch26Teams";
import { records as _en } from "../../content/translations/en/parties_batch26Teams";
import { records as _zh } from "../../content/translations/zh-CN/parties_batch26Teams";
const _content = createLegacyTexts(_sources, _en, _zh);
import type { Team } from "./types";

// ホタルのみの例外更新。旧3案は保存し、明示参照で新3案を選ぶ。
export const BATCH26_TEAMS: Team[] = [
  {
    "id": "team-hsr-ホタル-b26-1",
    "game": "hsr",
    "origin": "ホタル",
    "originOrder": 4,
    "shared": true,
    "batch": 26,
    "title": _content.localized("guide.legacy.parties_batch26Teams.b00001"),
    "members": [
      {
        "name": _content.localized("guide.legacy.parties_batch26Teams.b00002"),
        "role": _content.localized("guide.legacy.parties_batch26Teams.b00003")
      },
      {
        "name": _content.localized("guide.legacy.parties_batch26Teams.b00004"),
        "role": _content.localized("guide.legacy.parties_batch26Teams.b00005")
      },
      {
        "name": _content.localized("guide.legacy.parties_batch26Teams.b00006"),
        "role": _content.localized("guide.legacy.parties_batch26Teams.b00007")
      },
      {
        "name": _content.localized("guide.legacy.parties_batch26Teams.b00008"),
        "role": _content.localized("guide.legacy.parties_batch26Teams.b00009")
      }
    ],
    "synergy": [
      _content.localized("guide.legacy.parties_batch26Teams.b00010")
    ],
    "targetSummary": _content.localized("guide.legacy.parties_batch26Teams.b00011"),
    "gameVersion": "4.6",
    "dataAsOf": "2026-10-07",
    "updatedAt": "2026-10-07",
    "sourceLabel": _content.localized("guide.legacy.parties_batch26Teams.b00012"),
    "sourceUrl": "https://gamewith.jp/houkaistarrail/article/show/436324",
    "communitySources": [
      {
        "label": _content.localized("guide.legacy.parties_batch26Teams.b00013"),
        "url": "https://www.reddit.com/r/FireflyMains/comments/1vf5830/ruan_mei_vs_fugue/",
        "checkedAt": "2026-10-07",
        "status": "watching",
        "note": _content.localized("guide.legacy.parties_batch26Teams.b00014")
      }
    ]
  },
  {
    "id": "team-hsr-ホタル-b26-2",
    "game": "hsr",
    "origin": "ホタル",
    "originOrder": 5,
    "shared": true,
    "batch": 26,
    "title": _content.localized("guide.legacy.parties_batch26Teams.b00015"),
    "members": [
      {
        "name": _content.localized("guide.legacy.parties_batch26Teams.b00016"),
        "role": _content.localized("guide.legacy.parties_batch26Teams.b00017")
      },
      {
        "name": _content.localized("guide.legacy.parties_batch26Teams.b00018"),
        "role": _content.localized("guide.legacy.parties_batch26Teams.b00019")
      },
      {
        "name": _content.localized("guide.legacy.parties_batch26Teams.b00020"),
        "role": _content.localized("guide.legacy.parties_batch26Teams.b00021")
      },
      {
        "name": _content.localized("guide.legacy.parties_batch26Teams.b00022"),
        "role": _content.localized("guide.legacy.parties_batch26Teams.b00023")
      }
    ],
    "synergy": [
      _content.localized("guide.legacy.parties_batch26Teams.b00024")
    ],
    "targetSummary": _content.localized("guide.legacy.parties_batch26Teams.b00025"),
    "gameVersion": "4.6",
    "dataAsOf": "2026-10-07",
    "updatedAt": "2026-10-07",
    "sourceLabel": _content.localized("guide.legacy.parties_batch26Teams.b00026"),
    "sourceUrl": "https://game8.jp/houkaistarrail/524345",
    "communitySources": [
      {
        "label": _content.localized("guide.legacy.parties_batch26Teams.b00027"),
        "url": "https://www.reddit.com/r/FireflyMains/comments/1vf5830/ruan_mei_vs_fugue/",
        "checkedAt": "2026-10-07",
        "status": "watching",
        "note": _content.localized("guide.legacy.parties_batch26Teams.b00028")
      }
    ]
  },
  {
    "id": "team-hsr-ホタル-b26-3",
    "game": "hsr",
    "origin": "ホタル",
    "originOrder": 6,
    "shared": true,
    "batch": 26,
    "title": _content.localized("guide.legacy.parties_batch26Teams.b00029"),
    "members": [
      {
        "name": _content.localized("guide.legacy.parties_batch26Teams.b00030"),
        "role": _content.localized("guide.legacy.parties_batch26Teams.b00031")
      },
      {
        "name": _content.localized("guide.legacy.parties_batch26Teams.b00032"),
        "role": _content.localized("guide.legacy.parties_batch26Teams.b00033")
      },
      {
        "name": _content.localized("guide.legacy.parties_batch26Teams.b00034"),
        "role": _content.localized("guide.legacy.parties_batch26Teams.b00035")
      },
      {
        "name": _content.localized("guide.legacy.parties_batch26Teams.b00036"),
        "role": _content.localized("guide.legacy.parties_batch26Teams.b00037")
      }
    ],
    "synergy": [
      _content.localized("guide.legacy.parties_batch26Teams.b00038")
    ],
    "targetSummary": _content.localized("guide.legacy.parties_batch26Teams.b00039"),
    "gameVersion": "4.6",
    "dataAsOf": "2026-10-07",
    "updatedAt": "2026-10-07",
    "sourceLabel": _content.localized("guide.legacy.parties_batch26Teams.b00040"),
    "sourceUrl": "https://gamewith.jp/houkaistarrail/article/show/436324",
    "communitySources": [
      {
        "label": _content.localized("guide.legacy.parties_batch26Teams.b00041"),
        "url": "https://www.reddit.com/r/FireflyMains/comments/1vf5830/ruan_mei_vs_fugue/",
        "checkedAt": "2026-10-07",
        "status": "watching",
        "note": _content.localized("guide.legacy.parties_batch26Teams.b00042")
      }
    ]
  }
];
