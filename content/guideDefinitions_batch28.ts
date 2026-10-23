import type {GuideAuthoringRecord} from "../shared/content/guideAuthoring";
export const records:GuideAuthoringRecord[]=[
  {
    "guideId": "guide.authoring.guideDefinitions_batch28.b00001",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:フィオニー",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_batch28.b00001",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_batch28.b00001",
      "headline": {
        "kind": "textRef",
        "id": "guide.batch28.b00001"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_batch28.b00001.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.batch28.b00002"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        },
        {
          "recommendationId": "guide.authoring.guideDefinitions_batch28.b00001.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.batch28.b00003"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        }
      ],
      "mainStatPreferences": [
        {
          "slotKey": "legacy:guide.batch28.b00004",
          "statOptions": [
            "legacy:guide.batch28.b00005"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.batch28.b00004"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.batch28.b00005"
          }
        },
        {
          "slotKey": "legacy:guide.batch28.b00006",
          "statOptions": [
            "legacy:guide.batch28.b00007"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.batch28.b00006"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.batch28.b00007"
          }
        },
        {
          "slotKey": "legacy:guide.batch28.b00008",
          "statOptions": [
            "legacy:guide.batch28.b00009"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.batch28.b00008"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.batch28.b00009"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "anomalyProficiency",
          "label": {
            "kind": "textRef",
            "id": "guide.batch28.b00009"
          },
          "unit": "",
          "strict": 255,
          "goal": 209,
          "base": 155
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.batch28.b00010"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01136"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch28.b00001.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch28.b00001.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch28.b00001.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch28.b00001.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.batch28.b00004",
        "statOptions": [
          "legacy:guide.batch28.b00005"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.batch28.b00006",
        "statOptions": [
          "legacy:guide.batch28.b00007"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.batch28.b00008",
        "statOptions": [
          "legacy:guide.batch28.b00009"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-10-23",
      "updatedAt": "2026-10-23"
    },
    "legacyShape": {
      "fields": [
        "headline",
        "relicSet",
        "planarSet",
        "mainStats",
        "targets",
        "targetContext",
        "dataAsOf",
        "updatedAt",
        "sourceLabel"
      ],
      "mainStatFields": [
        [
          "slot",
          "value"
        ],
        [
          "slot",
          "value"
        ],
        [
          "slot",
          "value"
        ]
      ],
      "targetFields": [
        [
          "key",
          "label",
          "unit",
          "targets"
        ]
      ],
      "tierFields": [
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  }
];
