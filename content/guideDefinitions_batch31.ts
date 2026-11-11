import type { GuideAuthoringRecord } from "../shared/content/guideAuthoring";
export const records: GuideAuthoringRecord[] =  [
  {
    "guideId": "guide.authoring.guideDefinitions_batch31.b00001",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES_BY_SOURCE_ID:1511",
    "lookupKind": "sourceId",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_batch31.b00001",
      "identityKey": "hsr:1511",
      "headline": {
        "kind": "textRef",
        "id": "guide.batch31.b00002"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_batch31.b00001.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.batch31.b00004"
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
          "recommendationId": "guide.authoring.guideDefinitions_batch31.b00001.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.batch31.b00005"
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
          "slotKey": "legacy:guide.batch31.b00006",
          "statOptions": [
            "legacy:guide.batch31.b00007"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.batch31.b00006"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.batch31.b00007"
          }
        },
        {
          "slotKey": "legacy:guide.batch31.b00008",
          "statOptions": [
            "legacy:guide.batch31.b00009"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.batch31.b00008"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.batch31.b00009"
          }
        },
        {
          "slotKey": "legacy:guide.batch31.b00010",
          "statOptions": [
            "legacy:guide.batch31.b00011"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.batch31.b00010"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.batch31.b00011"
          }
        },
        {
          "slotKey": "legacy:guide.batch31.b00012",
          "statOptions": [
            "legacy:guide.batch31.b00013"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.batch31.b00012"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.batch31.b00013"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.batch31.b00014"
          },
          "unit": "",
          "strict": 166,
          "goal": 150,
          "base": 125
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.batch31.b00003"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.metadataMaster.b00034"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch31.b00001.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch31.b00001.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch31.b00001.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch31.b00001.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.batch31.b00006",
        "statOptions": [
          "legacy:guide.batch31.b00007"
        ],
        "reason": "表示用の複合主ステ指定"
      },
      {
        "slotKey": "legacy:guide.batch31.b00008",
        "statOptions": [
          "legacy:guide.batch31.b00009"
        ],
        "reason": "表示用の複合主ステ指定"
      },
      {
        "slotKey": "legacy:guide.batch31.b00010",
        "statOptions": [
          "legacy:guide.batch31.b00011"
        ],
        "reason": "表示用の複合主ステ指定"
      },
      {
        "slotKey": "legacy:guide.batch31.b00012",
        "statOptions": [
          "legacy:guide.batch31.b00013"
        ],
        "reason": "表示用の複合主ステ指定"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-11-11",
      "updatedAt": "2026-11-11"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_batch31.b00002",
    "game": "zzz",
    "lookupKey": "ZZZ_BATCH31_GUIDES:1631",
    "lookupKind": "sourceId",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_batch31.b00002",
      "identityKey": "zzz:1631",
      "headline": {
        "kind": "textRef",
        "id": "guide.batch31.b00028"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_batch31.b00002.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.batch31.b00030"
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
          "recommendationId": "guide.authoring.guideDefinitions_batch31.b00002.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.batch31.b00031"
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
          "slotKey": "legacy:guide.batch31.b00032",
          "statOptions": [
            "legacy:guide.batch31.b00033"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.batch31.b00032"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.batch31.b00033"
          }
        },
        {
          "slotKey": "legacy:guide.batch31.b00034",
          "statOptions": [
            "legacy:guide.batch31.b00035"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.batch31.b00034"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.batch31.b00035"
          }
        },
        {
          "slotKey": "legacy:guide.batch31.b00036",
          "statOptions": [
            "legacy:guide.batch31.b00037"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.batch31.b00036"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.batch31.b00037"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.batch31.b00029"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.metadataMaster.b00035"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch31.b00002.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch31.b00002.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch31.b00002.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch31.b00002.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.batch31.b00032",
        "statOptions": [
          "legacy:guide.batch31.b00033"
        ],
        "reason": "表示用の複合主ステ指定"
      },
      {
        "slotKey": "legacy:guide.batch31.b00034",
        "statOptions": [
          "legacy:guide.batch31.b00035"
        ],
        "reason": "表示用の複合主ステ指定"
      },
      {
        "slotKey": "legacy:guide.batch31.b00036",
        "statOptions": [
          "legacy:guide.batch31.b00037"
        ],
        "reason": "表示用の複合主ステ指定"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-11-11",
      "updatedAt": "2026-11-11"
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
      "targetFields": [],
      "tierFields": []
    }
  }
];
