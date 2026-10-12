import type {GuideAuthoringRecord} from "../shared/content/guideAuthoring";
export const records:GuideAuthoringRecord[]=[
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00001",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:ナヒーダ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00001",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00001",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00021"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00001.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00022"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00001.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00023"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00024",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00025"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00024"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00025"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00026",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00027"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00026"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00027"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00028",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00029"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00028"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00029"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "elementalMastery",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00030"
          },
          "unit": "",
          "strict": 1000,
          "goal": 800,
          "base": 700
        },
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00031"
          },
          "unit": "%",
          "strict": 160,
          "goal": 130,
          "base": 110
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00032"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00033"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00001.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00001.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00001.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00001.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00024",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00025"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00026",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00027"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00028",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00029"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
      "updatedAt": "2026-08-26"
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
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00002",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:楓原万葉",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00002",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00002",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00034"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00002.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00035"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00002.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00036"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00037",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00038"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00037"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00038"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00039",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00040"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00039"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00040"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00041",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00042"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00041"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00042"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "elementalMastery",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00043"
          },
          "unit": "",
          "strict": 1000,
          "goal": 850,
          "base": 700
        },
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00044"
          },
          "unit": "%",
          "strict": 200,
          "goal": 170,
          "base": 150
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00045"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00046"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00002.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00002.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00002.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00002.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00037",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00038"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00039",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00040"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00041",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00042"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-25",
      "updatedAt": "2026-08-25"
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
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00003",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:神里綾華",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00003",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00003",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_providers.b00001"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00003.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_providers.b00002"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00003.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_providers.b00003"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00047",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00048"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00047"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00048"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00049",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00050"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00049"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00050"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00051",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00052"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00051"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00052"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00053"
          },
          "unit": "%",
          "strict": 55,
          "goal": 45,
          "base": 35
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00054"
          },
          "unit": "%",
          "strict": 280,
          "goal": 240,
          "base": 210
        },
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00055"
          },
          "unit": "%",
          "strict": 150,
          "goal": 130,
          "base": 115
        }
      ],
      "sourceLabels": []
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00003.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00003.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00003.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00003.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00047",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00048"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00049",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00050"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00051",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00052"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {},
    "legacyShape": {
      "fields": [
        "headline",
        "relicSet",
        "planarSet",
        "mainStats",
        "targets"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00004",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:雷電将軍",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00004",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00004",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00056"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00004.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00057"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00004.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00058"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00059",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00060"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00059"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00060"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00061",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00062"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00061"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00062"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00063",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00064"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00063"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00064"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00065"
          },
          "unit": "%",
          "strict": 250,
          "goal": 220,
          "base": 200
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00066"
          },
          "unit": "",
          "strict": 2000,
          "goal": 1500,
          "base": 1300
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00067"
          },
          "unit": "%",
          "strict": 85,
          "goal": 80,
          "base": 70
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00068"
          },
          "unit": "%",
          "strict": 220,
          "goal": 200,
          "base": 170
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00069"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00070"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00004.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00004.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00004.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00004.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00059",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00060"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00061",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00062"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00063",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00064"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
      "updatedAt": "2026-08-26"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00005",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:ヌヴィレット",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00005",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00005",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_providers.b00004"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00005.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_providers.b00005"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00005.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_providers.b00006"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00071",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00072"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00071"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00072"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00073",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00074"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00073"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00074"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00075",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00076"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00075"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00076"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "hp",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00077"
          },
          "unit": "",
          "strict": 45000,
          "goal": 40000,
          "base": 35000
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00078"
          },
          "unit": "%",
          "strict": 65,
          "goal": 55,
          "base": 45
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00079"
          },
          "unit": "%",
          "strict": 260,
          "goal": 220,
          "base": 180
        },
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00080"
          },
          "unit": "%",
          "strict": 150,
          "goal": 130,
          "base": 115
        }
      ],
      "sourceLabels": []
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00005.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00005.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00005.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00005.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00071",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00072"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00073",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00074"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00075",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00076"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {},
    "legacyShape": {
      "fields": [
        "headline",
        "relicSet",
        "planarSet",
        "mainStats",
        "targets"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00006",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:フリーナ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00006",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00006",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_providers.b00007"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00006.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_providers.b00008"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00006.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_providers.b00009"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00081",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00082"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00081"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00082"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00083",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00084"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00083"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00084"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00085",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00086"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00085"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00086"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "hp",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00087"
          },
          "unit": "",
          "strict": 45000,
          "goal": 40000,
          "base": 35000
        },
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00088"
          },
          "unit": "%",
          "strict": 220,
          "goal": 180,
          "base": 160
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00089"
          },
          "unit": "%",
          "strict": 85,
          "goal": 80,
          "base": 60
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00090"
          },
          "unit": "%",
          "strict": 220,
          "goal": 180,
          "base": 160
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00091"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00092"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00006.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00006.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00006.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00006.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00081",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00082"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00083",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00084"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00085",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00086"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-25",
      "updatedAt": "2026-08-25"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00007",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:夜蘭",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00007",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00007",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_providers.b00010"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00007.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_providers.b00011"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00007.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_providers.b00012"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00093",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00094"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00093"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00094"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00095",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00096"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00095"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00096"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00097",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00098"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00097"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00098"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "hp",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00099"
          },
          "unit": "",
          "strict": 40000,
          "goal": 35000,
          "base": 30000
        },
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00100"
          },
          "unit": "%",
          "strict": 220,
          "goal": 200,
          "base": 180
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00101"
          },
          "unit": "%",
          "strict": 80,
          "goal": 70,
          "base": 60
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00102"
          },
          "unit": "%",
          "strict": 200,
          "goal": 160,
          "base": 130
        }
      ],
      "sourceLabels": []
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00007.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00007.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00007.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00007.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00093",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00094"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00095",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00096"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00097",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00098"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {},
    "legacyShape": {
      "fields": [
        "headline",
        "relicSet",
        "planarSet",
        "mainStats",
        "targets"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00008",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:珊瑚宮心海",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00008",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00008",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_providers.b00013"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00008.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_providers.b00014"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00008.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_providers.b00015"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00103",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00104"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00103"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00104"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00105",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00106"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00105"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00106"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00107",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00108"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00107"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00108"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "hp",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00109"
          },
          "unit": "",
          "strict": 45000,
          "goal": 40000,
          "base": 35000
        },
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00110"
          },
          "unit": "%",
          "strict": 220,
          "goal": 190,
          "base": 160
        }
      ],
      "sourceLabels": []
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00008.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00008.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00008.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00008.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00103",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00104"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00105",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00106"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00107",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00108"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {},
    "legacyShape": {
      "fields": [
        "headline",
        "relicSet",
        "planarSet",
        "mainStats",
        "targets"
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
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00009",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:鍾離",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00009",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00009",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00111"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00009.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00112"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00009.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00113"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00114",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00115"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00114"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00115"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00116",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00117"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00116"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00117"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00118",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00119"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00118"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00119"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "hp",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00120"
          },
          "unit": "",
          "strict": 55000,
          "goal": 45000,
          "base": 35000
        },
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00121"
          },
          "unit": "%",
          "strict": 160,
          "goal": 140,
          "base": 120
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00122"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00123"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00009.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00009.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00009.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00009.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00114",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00115"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00116",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00117"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00118",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00119"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
      "updatedAt": "2026-08-26"
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
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00010",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:ニィロウ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00010",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00010",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01071"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00010.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01072"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00010.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01073"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01074",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01075"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01074"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01075"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01076",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01077"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01076"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01077"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01078",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01079"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01078"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01079"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "hp",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01080"
          },
          "unit": "",
          "strict": 74444,
          "goal": 68000,
          "base": 60000
        },
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01081"
          },
          "unit": "%",
          "strict": 180,
          "goal": 150,
          "base": 120
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01082"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01083"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00010.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00010.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00010.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00010.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01074",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01075"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01076",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01077"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01078",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01079"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-09-05",
      "updatedAt": "2026-09-05",
      "profileId": "curated:batch15:nilou"
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
        "sourceLabel",
        "profileId"
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
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00011",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:アルハイゼン",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00011",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00011",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00204"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00011.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00205"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00011.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00206"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00207",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00208"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00207"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00208"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00209",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00210"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00209"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00210"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00211",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00212"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00211"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00212"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "elementalMastery",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00213"
          },
          "unit": "",
          "strict": 350,
          "goal": 300,
          "base": 200
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00214"
          },
          "unit": "%",
          "strict": 80,
          "goal": 70,
          "base": 60
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00215"
          },
          "unit": "%",
          "strict": 180,
          "goal": 160,
          "base": 140
        },
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00216"
          },
          "unit": "%",
          "strict": 140,
          "goal": 130,
          "base": 120
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00217"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00218"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00011.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00011.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00011.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00011.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00207",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00208"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00209",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00210"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00211",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00212"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
      "updatedAt": "2026-08-26"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00012",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:アルレッキーノ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00012",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00012",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_providers.b00016"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00012.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_providers.b00017"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00012.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_providers.b00018"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00139",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00140"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00139"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00140"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00141",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00142"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00141"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00142"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00143",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00144"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00143"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00144"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00145"
          },
          "unit": "",
          "strict": 2400,
          "goal": 2000,
          "base": 1800
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00146"
          },
          "unit": "%",
          "strict": 80,
          "goal": 75,
          "base": 70
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00147"
          },
          "unit": "%",
          "strict": 200,
          "goal": 160,
          "base": 140
        }
      ],
      "sourceLabels": []
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00012.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00012.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00012.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00012.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00139",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00140"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00141",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00142"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00143",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00144"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {},
    "legacyShape": {
      "fields": [
        "headline",
        "relicSet",
        "planarSet",
        "mainStats",
        "targets"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00013",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:ナヴィア",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00013",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00013",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01057"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00013.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01058"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00013.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01059"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01060",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01061"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01060"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01061"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01062",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01063"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01062"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01063"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01064",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01065"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01064"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01065"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01066"
          },
          "unit": "%",
          "strict": 85,
          "goal": 75,
          "base": 65
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01067"
          },
          "unit": "%",
          "strict": 230,
          "goal": 190,
          "base": 160
        },
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01068"
          },
          "unit": "%",
          "strict": 150,
          "goal": 130,
          "base": 115
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01069"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01070"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00013.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00013.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00013.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00013.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01060",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01061"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01062",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01063"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01064",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01065"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-09-05",
      "updatedAt": "2026-09-05",
      "profileId": "curated:batch15:navia"
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
        "sourceLabel",
        "profileId"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00014",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:胡桃",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00014",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00014",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00219"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00014.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00220"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00014.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00221"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00222",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00223"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00222"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00223"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00224",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00225"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00224"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00225"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00226",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00227"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00226"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00227"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "hp",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00228"
          },
          "unit": "",
          "strict": 35000,
          "goal": 32000,
          "base": 28000
        },
        {
          "key": "elementalMastery",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00229"
          },
          "unit": "",
          "strict": 250,
          "goal": 200,
          "base": 100
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00230"
          },
          "unit": "%",
          "strict": 80,
          "goal": 70,
          "base": 60
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00231"
          },
          "unit": "%",
          "strict": 200,
          "goal": 180,
          "base": 150
        },
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00232"
          },
          "unit": "%",
          "strict": 120,
          "goal": 110,
          "base": 100
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00233"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00234"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00014.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00014.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00014.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00014.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00222",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00223"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00224",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00225"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00226",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00227"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
      "updatedAt": "2026-08-26"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00015",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:シロネン",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00015",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00015",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_providers.b00019"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00015.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_providers.b00020"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00015.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_providers.b00021"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00158",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00159"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00158"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00159"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00160",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00161"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00160"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00161"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00162",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00163"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00162"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00163"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "defense",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00164"
          },
          "unit": "",
          "strict": 3000,
          "goal": 2500,
          "base": 2000
        },
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00165"
          },
          "unit": "%",
          "strict": 220,
          "goal": 190,
          "base": 180
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00166"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00167"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00015.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00015.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00015.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00015.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00158",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00159"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00160",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00161"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00162",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00163"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-25",
      "updatedAt": "2026-08-25"
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
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00016",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:閑雲",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00016",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00016",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_providers.b00022"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00016.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_providers.b00023"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00016.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_providers.b00024"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00168",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00169"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00168"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00169"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00170",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00171"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00170"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00171"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00172",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00173"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00172"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00173"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00174"
          },
          "unit": "",
          "strict": 4500,
          "goal": 3800,
          "base": 3200
        },
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00175"
          },
          "unit": "%",
          "strict": 220,
          "goal": 190,
          "base": 160
        }
      ],
      "sourceLabels": []
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00016.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00016.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00016.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00016.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00168",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00169"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00170",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00171"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00172",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00173"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {},
    "legacyShape": {
      "fields": [
        "headline",
        "relicSet",
        "planarSet",
        "mainStats",
        "targets"
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
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00017",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:ベネット",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00017",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00017",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_providers.b00025"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00017.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_providers.b00026"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00017.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_providers.b00027"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00176",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00177"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00176"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00177"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00178",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00179"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00178"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00179"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00180",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00181"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00180"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00181"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00182"
          },
          "unit": "%",
          "strict": 250,
          "goal": 200,
          "base": 180
        },
        {
          "key": "hp",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00183"
          },
          "unit": "",
          "strict": 30000,
          "goal": 25000,
          "base": 20000
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00184"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00185"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00017.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00017.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00017.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00017.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00176",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00177"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00178",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00179"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00180",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00181"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-25",
      "updatedAt": "2026-08-25"
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
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00018",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:アンバー",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00018",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00018",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00379"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00018.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00380"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00018.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00381"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00382",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00383"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00382"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00383"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00384",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00385"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00384"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00385"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00386",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00387"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00386"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00387"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00388"
          },
          "unit": "%",
          "strict": 120,
          "goal": 110,
          "base": 100
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00389"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00390"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00018.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00018.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00018.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00018.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00382",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00383"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00384",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00385"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00386",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00387"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
      "updatedAt": "2026-08-26"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00019",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:甘雨",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00019",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00019",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_providers.b00028"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00019.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_providers.b00029"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00019.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_providers.b00030"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00186",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00187"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00186"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00187"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00188",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00189"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00188"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00189"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00190",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00191"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00190"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00191"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00192"
          },
          "unit": "%",
          "strict": 75,
          "goal": 65,
          "base": 55
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00193"
          },
          "unit": "%",
          "strict": 250,
          "goal": 210,
          "base": 180
        },
        {
          "key": "elementalMastery",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00194"
          },
          "unit": "",
          "strict": 300,
          "goal": 200,
          "base": 100
        }
      ],
      "sourceLabels": []
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00019.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00019.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00019.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00019.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00186",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00187"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00188",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00189"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00190",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00191"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {},
    "legacyShape": {
      "fields": [
        "headline",
        "relicSet",
        "planarSet",
        "mainStats",
        "targets"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00020",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:行秋",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00020",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00020",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00249"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00020.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00250"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00020.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00251"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00252",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00253"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00252"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00253"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00254",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00255"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00254"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00255"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00256",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00257"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00256"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00257"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00258"
          },
          "unit": "%",
          "strict": 220,
          "goal": 180,
          "base": 160
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00259"
          },
          "unit": "",
          "strict": 2000,
          "goal": 1800,
          "base": 1600
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00260"
          },
          "unit": "%",
          "strict": 70,
          "goal": 60,
          "base": 50
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00261"
          },
          "unit": "%",
          "strict": 160,
          "goal": 130,
          "base": 110
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00262"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00263"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00020.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00020.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00020.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00020.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00252",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00253"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00254",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00255"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00256",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00257"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
      "updatedAt": "2026-08-26"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00021",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:久岐忍",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00021",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00021",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00235"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00021.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00236"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00021.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00237"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00238",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00239"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00238"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00239"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00240",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00241"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00240"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00241"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00242",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00243"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00242"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00243"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "elementalMastery",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00244"
          },
          "unit": "",
          "strict": 1000,
          "goal": 900,
          "base": 800
        },
        {
          "key": "hp",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00245"
          },
          "unit": "",
          "strict": 28000,
          "goal": 24000,
          "base": 22000
        },
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00246"
          },
          "unit": "%",
          "strict": 130,
          "goal": 120,
          "base": 110
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00247"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00248"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00021.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00021.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00021.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00021.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00238",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00239"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00240",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00241"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00242",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00243"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
      "updatedAt": "2026-08-26"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00022",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:香菱",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00022",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00022",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00264"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00022.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00265"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00022.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00266"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00267",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00268"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00267"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00268"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00269",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00270"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00269"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00270"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00271",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00272"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00271"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00272"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00273"
          },
          "unit": "%",
          "strict": 230,
          "goal": 180,
          "base": 160
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00274"
          },
          "unit": "%",
          "strict": 70,
          "goal": 55,
          "base": 45
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00275"
          },
          "unit": "%",
          "strict": 180,
          "goal": 160,
          "base": 130
        },
        {
          "key": "elementalMastery",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00276"
          },
          "unit": "",
          "strict": 250,
          "goal": 150,
          "base": 50
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00277"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00278"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00022.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00022.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00022.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00022.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00267",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00268"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00269",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00270"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00271",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00272"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
      "updatedAt": "2026-08-26"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00023",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:フィッシュル",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00023",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00023",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00279"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00023.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00280"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00023.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00281"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00282",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00283"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00282"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00283"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00284",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00285"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00284"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00285"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00286",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00287"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00286"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00287"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00288"
          },
          "unit": "",
          "strict": 2200,
          "goal": 2000,
          "base": 1800
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00289"
          },
          "unit": "%",
          "strict": 75,
          "goal": 60,
          "base": 50
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00290"
          },
          "unit": "%",
          "strict": 160,
          "goal": 120,
          "base": 100
        },
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00291"
          },
          "unit": "%",
          "strict": 150,
          "goal": 130,
          "base": 110
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00292"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00293"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00023.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00023.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00023.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00023.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00282",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00283"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00284",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00285"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00286",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00287"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
      "updatedAt": "2026-08-26"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00024",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:白朮",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00024",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00024",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00294"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00024.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00295"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00024.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00296"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00297",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00298"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00297"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00298"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00299",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00300"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00299"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00300"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00301",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00302"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00301"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00302"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00303"
          },
          "unit": "%",
          "strict": 200,
          "goal": 180,
          "base": 160
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00304"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00305"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00024.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00024.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00024.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00024.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00297",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00298"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00299",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00300"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00301",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00302"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
      "updatedAt": "2026-08-26"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00025",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:八重神子",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00025",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00025",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00306"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00025.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00307"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00025.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00308"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00309",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00310"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00309"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00310"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00311",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00312"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00311"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00312"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00313",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00314"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00313"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00314"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00315"
          },
          "unit": "",
          "strict": 2200,
          "goal": 2000,
          "base": 1800
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00316"
          },
          "unit": "%",
          "strict": 70,
          "goal": 60,
          "base": 50
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00317"
          },
          "unit": "%",
          "strict": 200,
          "goal": 175,
          "base": 150
        },
        {
          "key": "elementalMastery",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00318"
          },
          "unit": "",
          "strict": 200,
          "goal": 100,
          "base": 0
        },
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00319"
          },
          "unit": "%",
          "strict": 160,
          "goal": 140,
          "base": 130
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00320"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00321"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00025.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00025.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00025.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00025.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00309",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00310"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00311",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00312"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00313",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00314"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
      "updatedAt": "2026-08-26"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00026",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:宵宮",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00026",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00026",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00322"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00026.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00323"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00026.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00324"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00325",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00326"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00325"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00326"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00327",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00328"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00327"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00328"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00329",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00330"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00329"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00330"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00331"
          },
          "unit": "",
          "strict": 2200,
          "goal": 2000,
          "base": 1800
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00332"
          },
          "unit": "%",
          "strict": 80,
          "goal": 70,
          "base": 60
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00333"
          },
          "unit": "%",
          "strict": 200,
          "goal": 160,
          "base": 130
        },
        {
          "key": "elementalMastery",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00334"
          },
          "unit": "",
          "strict": 150,
          "goal": 100,
          "base": 0
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00335"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00336"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00026.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00026.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00026.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00026.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00325",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00326"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00327",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00328"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00329",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00330"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
      "updatedAt": "2026-08-26"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00027",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:アーロイ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00027",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00027",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00337"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00027.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00338"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00027.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00339"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00340",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00341"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00340"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00341"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00342",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00343"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00342"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00343"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00344",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00345"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00344"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00345"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00346"
          },
          "unit": "",
          "strict": 1800,
          "goal": 1600,
          "base": 1500
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00347"
          },
          "unit": "%",
          "strict": 60,
          "goal": 40,
          "base": 30
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00348"
          },
          "unit": "%",
          "strict": 190,
          "goal": 170,
          "base": 150
        },
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00349"
          },
          "unit": "%",
          "strict": 160,
          "goal": 140,
          "base": 120
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00350"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00351"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00027.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00027.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00027.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00027.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00340",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00341"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00342",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00343"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00344",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00345"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
      "updatedAt": "2026-08-26"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00028",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:アイノ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00028",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00028",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00352"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00028.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00353"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00028.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00354"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00355",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00356"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00355"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00356"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00357",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00358"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00357"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00358"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00359",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00360"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00359"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00360"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "elementalMastery",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00361"
          },
          "unit": "",
          "strict": 800,
          "goal": 700,
          "base": 600
        },
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00362"
          },
          "unit": "%",
          "strict": 180,
          "goal": 150,
          "base": 130
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00363"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00364"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00028.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00028.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00028.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00028.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00355",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00356"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00357",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00358"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00359",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00360"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
      "updatedAt": "2026-08-26"
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
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00029",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:アルベド",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00029",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00029",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00365"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00029.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00366"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00029.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00367"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00368",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00369"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00368"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00369"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00370",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00371"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00370"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00371"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00372",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00373"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00372"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00373"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "defense",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00374"
          },
          "unit": "",
          "strict": 3000,
          "goal": 2000,
          "base": 1800
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00375"
          },
          "unit": "%",
          "strict": 70,
          "goal": 60,
          "base": 50
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00376"
          },
          "unit": "%",
          "strict": 180,
          "goal": 140,
          "base": 120
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00377"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00378"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00029.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00029.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00029.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00029.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00368",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00369"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00370",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00371"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00372",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00373"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
      "updatedAt": "2026-08-26"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00030",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:イアンサ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00030",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00030",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00391"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00030.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00392"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00030.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00393"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00394",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00395"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00394"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00395"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00396",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00397"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00396"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00397"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00398",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00399"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00398"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00399"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00400"
          },
          "unit": "",
          "strict": 2800,
          "goal": 2500,
          "base": 2200
        },
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00401"
          },
          "unit": "%",
          "strict": 200,
          "goal": 180,
          "base": 160
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00402"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00403"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00030.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00030.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00030.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00030.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00394",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00395"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00396",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00397"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00398",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00399"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
      "updatedAt": "2026-08-26"
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
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00031",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:イネファ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00031",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00031",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00404"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00031.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00405"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00031.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00406"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00407",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00408"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00407"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00408"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00409",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00410"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00409"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00410"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00411",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00412"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00411"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00412"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00413"
          },
          "unit": "",
          "strict": 2300,
          "goal": 2000,
          "base": 1800
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00414"
          },
          "unit": "%",
          "strict": 70,
          "goal": 60,
          "base": 50
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00415"
          },
          "unit": "%",
          "strict": 180,
          "goal": 150,
          "base": 130
        },
        {
          "key": "elementalMastery",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00416"
          },
          "unit": "",
          "strict": 350,
          "goal": 300,
          "base": 250
        },
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00417"
          },
          "unit": "%",
          "strict": 170,
          "goal": 130,
          "base": 110
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00418"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00419"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00031.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00031.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00031.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00031.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00407",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00408"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00409",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00410"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00411",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00412"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
      "updatedAt": "2026-08-26"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00032",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:イファ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00032",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00032",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00420"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00032.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00421"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00032.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00422"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00423",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00424"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00423"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00424"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00425",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00426"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00425"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00426"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00427",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00428"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00427"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00428"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "elementalMastery",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00429"
          },
          "unit": "",
          "strict": 850,
          "goal": 800,
          "base": 700
        },
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00430"
          },
          "unit": "%",
          "strict": 140,
          "goal": 130,
          "base": 120
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00431"
          },
          "unit": "%",
          "strict": 50,
          "goal": 40,
          "base": 30
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00432"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00433"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00032.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00032.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00032.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00032.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00423",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00424"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00425",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00426"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00427",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00428"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-24",
      "updatedAt": "2026-08-26"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00033",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:ヴァレサ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00033",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00033",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00434"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00033.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00435"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00033.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00436"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00437",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00438"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00437"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00438"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00439",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00440"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00439"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00440"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00441",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00442"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00441"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00442"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00443"
          },
          "unit": "%",
          "strict": 90,
          "goal": 85,
          "base": 80
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00444"
          },
          "unit": "%",
          "strict": 200,
          "goal": 180,
          "base": 160
        },
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00445"
          },
          "unit": "%",
          "strict": 150,
          "goal": 140,
          "base": 130
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00446"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00447"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00033.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00033.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00033.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00033.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00437",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00438"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00439",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00440"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00441",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00442"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-25",
      "updatedAt": "2026-08-26"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00034",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:ウェンティ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00034",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00034",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00448"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00034.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00449"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00034.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00450"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00451",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00452"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00451"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00452"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00453",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00454"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00453"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00454"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00455",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00456"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00455"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00456"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "elementalMastery",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00457"
          },
          "unit": "",
          "strict": 900,
          "goal": 800,
          "base": 700
        },
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00458"
          },
          "unit": "%",
          "strict": 180,
          "goal": 160,
          "base": 140
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00459"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00460"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00034.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00034.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00034.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00034.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00451",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00452"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00453",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00454"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00455",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00456"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
      "updatedAt": "2026-08-26"
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
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00035",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:エウルア",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00035",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00035",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00461"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00035.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00462"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00035.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00463"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00464",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00465"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00464"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00465"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00466",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00467"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00466"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00467"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00468",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00469"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00468"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00469"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00470"
          },
          "unit": "",
          "strict": 2400,
          "goal": 2200,
          "base": 2000
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00471"
          },
          "unit": "%",
          "strict": 70,
          "goal": 60,
          "base": 50
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00472"
          },
          "unit": "%",
          "strict": 160,
          "goal": 130,
          "base": 110
        },
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00473"
          },
          "unit": "%",
          "strict": 150,
          "goal": 130,
          "base": 120
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00474"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00475"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00035.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00035.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00035.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00035.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00464",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00465"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00466",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00467"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00468",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00469"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-08-26"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00036",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:エスコフィエ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00036",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00036",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00476"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00036.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00477"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00036.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00478"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00479",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00480"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00479"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00480"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00481",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00482"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00481"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00482"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00483",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00484"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00483"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00484"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00485"
          },
          "unit": "%",
          "strict": 85,
          "goal": 80,
          "base": 70
        },
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00486"
          },
          "unit": "%",
          "strict": 170,
          "goal": 150,
          "base": 130
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00487"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00488"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00036.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00036.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00036.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00036.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00479",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00480"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00481",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00482"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00483",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00484"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-08-26"
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
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00037",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:エミリエ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00037",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00037",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00489"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00037.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00490"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00037.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00491"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00492",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00493"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00492"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00493"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00494",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00495"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00494"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00495"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00496",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00497"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00496"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00497"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00498"
          },
          "unit": "",
          "strict": 2400,
          "goal": 2000,
          "base": 1800
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00499"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00500"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00037.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00037.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00037.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00037.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00492",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00493"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00494",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00495"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00496",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00497"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-08-26"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00038",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:オロルン",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00038",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00038",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00501"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00038.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00502"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00038.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00503"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00504",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00505"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00504"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00505"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00506",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00507"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00506"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00507"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00508",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00509"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00508"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00509"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00510"
          },
          "unit": "",
          "strict": 2200,
          "goal": 2000,
          "base": 1800
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00511"
          },
          "unit": "%",
          "strict": 85,
          "goal": 80,
          "base": 70
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00512"
          },
          "unit": "%",
          "strict": 180,
          "goal": 160,
          "base": 140
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00513"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00514"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00038.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00038.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00038.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00038.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00504",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00505"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00506",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00507"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00508",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00509"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-27",
      "updatedAt": "2026-08-27"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00039",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:カーヴェ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00039",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00039",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00515"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00039.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00516"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00039.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00517"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00518",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00519"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00518"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00519"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00520",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00521"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00520"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00521"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00522",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00523"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00522"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00523"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00524"
          },
          "unit": "%",
          "strict": 210,
          "goal": 210,
          "base": 180
        },
        {
          "key": "elementalMastery",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00525"
          },
          "unit": "",
          "strict": 800,
          "goal": 600,
          "base": 500
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00526"
          },
          "unit": "%",
          "strict": 50,
          "goal": 40,
          "base": 30
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00527"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00528"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00039.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00039.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00039.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00039.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00518",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00519"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00520",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00521"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00522",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00523"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-27",
      "updatedAt": "2026-08-27"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00040",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:ガイア",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00040",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00040",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00529"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00040.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00530"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00040.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00531"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00532",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00533"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00532"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00533"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00534",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00535"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00534"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00535"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00536",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00537"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00536"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00537"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00538"
          },
          "unit": "%",
          "strict": 180,
          "goal": 150,
          "base": 130
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00539"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00540"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00040.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00040.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00040.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00040.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00532",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00533"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00534",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00535"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00536",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00537"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-27",
      "updatedAt": "2026-08-27"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00041",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:カチーナ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00041",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00041",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00541"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00041.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00542"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00041.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00543"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00544",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00545"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00544"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00545"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00546",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00547"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00546"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00547"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00548",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00549"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00548"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00549"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00550"
          },
          "unit": "%",
          "strict": 220,
          "goal": 200,
          "base": 180
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00551"
          },
          "unit": "%",
          "strict": 70,
          "goal": 60,
          "base": 50
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00552"
          },
          "unit": "%",
          "strict": 140,
          "goal": 120,
          "base": 100
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00553"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00554"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00041.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00041.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00041.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00041.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00544",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00545"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00546",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00547"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00548",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00549"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-27",
      "updatedAt": "2026-08-27"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00042",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:キィニチ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00042",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00042",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00555"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00042.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00556"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00042.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00557"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00558",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00559"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00558"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00559"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00560",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00561"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00560"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00561"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00562",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00563"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00562"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00563"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00564"
          },
          "unit": "",
          "strict": 2200,
          "goal": 2000,
          "base": 1800
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00565"
          },
          "unit": "%",
          "strict": 70,
          "goal": 60,
          "base": 50
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00566"
          },
          "unit": "%",
          "strict": 260,
          "goal": 240,
          "base": 210
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00567"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00568"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00042.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00042.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00042.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00042.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00558",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00559"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00560",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00561"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00562",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00563"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-27",
      "updatedAt": "2026-08-27"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00043",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:キャンディス",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00043",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00043",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00569"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00043.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00570"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00043.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00571"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00572",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00573"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00572"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00573"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00574",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00575"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00574"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00575"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00576",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00577"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00576"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00577"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00578"
          },
          "unit": "%",
          "strict": 200,
          "goal": 180,
          "base": 160
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00579"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00580"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00043.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00043.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00043.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00043.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00572",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00573"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00574",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00575"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00576",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00577"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-27",
      "updatedAt": "2026-08-27"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00044",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:クレー",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00044",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00044",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00581"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00044.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00582"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00044.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00583"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00584",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00585"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00584"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00585"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00586",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00587"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00586"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00587"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00588",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00589"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00588"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00589"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00590"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00591"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00044.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00044.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00044.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00044.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00584",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00585"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00586",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00587"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00588",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00589"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-08-27"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00045",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:クロリンデ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00045",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00045",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00592"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00045.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00593"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00045.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00594"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00595",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00596"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00595"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00596"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00597",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00598"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00597"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00598"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00599",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00600"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00599"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00600"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00601"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00602"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00045.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00045.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00045.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00045.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00595",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00596"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00597",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00598"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00599",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00600"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-08-27"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00046",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:コレイ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00046",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00046",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00603"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00046.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00604"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00046.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00605"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00606",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00607"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00606"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00607"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00608",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00609"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00608"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00609"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00610",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00611"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00610"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00611"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00612"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00613"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00046.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00046.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00046.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00046.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00606",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00607"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00608",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00609"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00610",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00611"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-08-27"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00047",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:ゴロー",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00047",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00047",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00614"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00047.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00615"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00047.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00616"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00617",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00618"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00617"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00618"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00619",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00620"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00619"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00620"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00621",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00622"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00621"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00622"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00623"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00624"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00047.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00047.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00047.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00047.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00617",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00618"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00619",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00620"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00621",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00622"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-08-27"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00048",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:コロンビーナ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00048",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00048",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00625"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00048.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00626"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00048.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00627"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00628",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00629"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00628"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00629"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00630",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00631"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00630"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00631"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00632",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00633"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00632"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00633"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "hp",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00634"
          },
          "unit": "",
          "strict": 40000,
          "goal": 35000,
          "base": 32000
        },
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00635"
          },
          "unit": "%",
          "strict": 220,
          "goal": 200,
          "base": 180
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00636"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00637"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00048.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00048.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00048.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00048.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00628",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00629"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00630",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00631"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00632",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00633"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-27",
      "updatedAt": "2026-08-27"
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
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00049",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:シグウィン",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00049",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00049",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00638"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00049.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00639"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00049.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00640"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00641",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00642"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00641"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00642"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00643",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00644"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00643"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00644"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00645",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00646"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00645"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00646"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "hp",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00647"
          },
          "unit": "",
          "strict": 65000,
          "goal": 50000,
          "base": 45000
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00648"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00649"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00049.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00049.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00049.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00049.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00641",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00642"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00643",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00644"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00645",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00646"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-08-27"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00050",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:シトラリ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00050",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00050",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00650"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00050.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00651"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00050.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00652"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00653",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00654"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00653"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00654"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00655",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00656"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00655"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00656"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00657",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00658"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00657"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00658"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "elementalMastery",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00659"
          },
          "unit": "",
          "strict": 800,
          "goal": 800,
          "base": 800
        },
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00660"
          },
          "unit": "%",
          "strict": 200,
          "goal": 170,
          "base": 160
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00661"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00662"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00050.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00050.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00050.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00050.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00653",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00654"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00655",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00656"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00657",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00658"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-27",
      "updatedAt": "2026-08-27"
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
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00051",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:シャルロット",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00051",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00051",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00663"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00051.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00664"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00051.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00665"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00666",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00667"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00666"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00667"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00668",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00669"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00668"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00669"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00670",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00671"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00670"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00671"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00672"
          },
          "unit": "%",
          "strict": 200,
          "goal": 200,
          "base": 200
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00673"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00674"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00051.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00051.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00051.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00051.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00666",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00667"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00668",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00669"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00670",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00671"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-08-27"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00052",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:シュヴルーズ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00052",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00052",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00675"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00052.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00676"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00052.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00677"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00678",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00679"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00678"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00679"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00680",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00681"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00680"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00681"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00682",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00683"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00682"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00683"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "hp",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00684"
          },
          "unit": "",
          "strict": 40000,
          "goal": 40000,
          "base": 40000
        },
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00685"
          },
          "unit": "%",
          "strict": 200,
          "goal": 160,
          "base": 160
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00686"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00687"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00052.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00052.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00052.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00052.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00678",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00679"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00680",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00681"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00682",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00683"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-08-27"
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
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00053",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:ジン",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00053",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00053",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00688"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00053.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00689"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00053.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00690"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00691",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00692"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00691"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00692"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00693",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00694"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00693"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00694"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00695",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00696"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00695"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00696"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00697"
          },
          "unit": "%",
          "strict": 200,
          "goal": 200,
          "base": 200
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00698"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00699"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00053.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00053.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00053.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00053.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00691",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00692"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00693",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00694"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00695",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00696"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-08-27"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00054",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:スカーク",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00054",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00054",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00700"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00054.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00701"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00054.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00702"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00703",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00704"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00703"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00704"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00705",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00706"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00705"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00706"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00707",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00708"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00707"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00708"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00709"
          },
          "unit": "",
          "strict": 2100,
          "goal": 2100,
          "base": 2100
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00710"
          },
          "unit": "%",
          "strict": 80,
          "goal": 70,
          "base": 70
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00711"
          },
          "unit": "%",
          "strict": 200,
          "goal": 200,
          "base": 200
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00712"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00713"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00054.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00054.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00054.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00054.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00703",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00704"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00705",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00706"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00707",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00708"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-08-27"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00055",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:スクロース",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00055",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00055",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00714"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00055.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00715"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00055.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00716"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00717",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00718"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00717"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00718"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00719",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00720"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00719"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00720"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00721",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00722"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00721"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00722"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "elementalMastery",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00723"
          },
          "unit": "",
          "strict": 800,
          "goal": 800,
          "base": 800
        },
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00724"
          },
          "unit": "%",
          "strict": 160,
          "goal": 130,
          "base": 130
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00725"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00726"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00055.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00055.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00055.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00055.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00717",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00718"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00719",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00720"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00721",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00722"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-14",
      "updatedAt": "2026-08-27"
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
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00056",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:セトス",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00056",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00056",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00727"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00056.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00728"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00056.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00729"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00730",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00731"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00730"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00731"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00732",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00733"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00732"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00733"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00734",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00735"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00734"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00735"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00736"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00737"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00056.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00056.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00056.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00056.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00730",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00731"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00732",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00733"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00734",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00735"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-08-27"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00057",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:セノ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00057",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00057",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00738"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00057.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00739"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00057.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00740"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00741",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00742"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00741"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00742"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00743",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00744"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00743"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00744"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00745",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00746"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00745"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00746"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "elementalMastery",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00747"
          },
          "unit": "",
          "strict": 300,
          "goal": 300,
          "base": 300
        },
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00748"
          },
          "unit": "%",
          "strict": 150,
          "goal": 130,
          "base": 130
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00749"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00750"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00057.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00057.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00057.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00057.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00741",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00742"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00743",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00744"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00745",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00746"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-27",
      "updatedAt": "2026-08-27"
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
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00058",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:ダリア",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00058",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00058",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00751"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00058.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00752"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00058.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00753"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00754",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00755"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00754"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00755"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00756",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00757"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00756"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00757"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00758",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00759"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00758"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00759"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "hp",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00760"
          },
          "unit": "",
          "strict": 40000,
          "goal": 40000,
          "base": 34000
        },
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00761"
          },
          "unit": "%",
          "strict": 200,
          "goal": 200,
          "base": 200
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00762"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00763"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00058.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00058.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00058.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00058.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00754",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00755"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00756",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00757"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00758",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00759"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-08-27"
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
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00059",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:タルタリヤ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00059",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00059",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00764"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00059.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00765"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00059.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00766"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00767",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00768"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00767"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00768"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00769",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00770"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00769"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00770"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00771",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00772"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00771"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00772"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00773"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00774"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00059.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00059.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00059.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00059.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00767",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00768"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00769",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00770"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00771",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00772"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-25",
      "updatedAt": "2026-08-27"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00060",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:チャスカ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00060",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00060",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00775"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00060.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00776"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00060.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00777"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00778",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00779"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00778"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00779"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00780",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00781"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00780"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00781"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00782",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00783"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00782"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00783"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00784"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00785"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00060.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00060.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00060.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00060.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00778",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00779"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00780",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00781"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00782",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00783"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-08-27"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00061",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:ディオナ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00061",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00061",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00786"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00061.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00787"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00061.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00788"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00789",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00790"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00789"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00790"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00791",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00792"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00791"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00792"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00793",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00794"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00793"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00794"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00795"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00796"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00061.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00061.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00061.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00061.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00789",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00790"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00791",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00792"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00793",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00794"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-27",
      "updatedAt": "2026-08-27"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00062",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:ディシア",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00062",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00062",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00797"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00062.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00798"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00062.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00799"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00800",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00801"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00800"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00801"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00802",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00803"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00802"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00803"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00804",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00805"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00804"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00805"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00806"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00807"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00062.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00062.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00062.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00062.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00800",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00801"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00802",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00803"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00804",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00805"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-08-27"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00063",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:ティナリ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00063",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00063",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00808"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00063.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00809"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00063.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00810"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00811",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00812"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00811"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00812"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00813",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00814"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00813"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00814"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00815",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00816"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00815"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00816"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00817"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00818"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00063.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00063.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00063.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00063.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00811",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00812"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00813",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00814"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00815",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00816"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-08-27"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00064",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:バーバラ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00064",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00064",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00819"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00064.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00820"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00064.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00821"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00822",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00823"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00822"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00823"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00824",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00825"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00824"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00825"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00826",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00827"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00826"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00827"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00828"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00829"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00064.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00064.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00064.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00064.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00822",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00823"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00824",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00825"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00826",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00827"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-09-07"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00065",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:ファルザン",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00065",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00065",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00830"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00065.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00831"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00065.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00832"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00833",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00834"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00833"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00834"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00835",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00836"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00835"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00836"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00837",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00838"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00837"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00838"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00839"
          },
          "unit": "%",
          "strict": 250,
          "goal": 250,
          "base": 200
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00840"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00841"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00065.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00065.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00065.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00065.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00833",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00834"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00835",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00836"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00837",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00838"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-09-07"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00066",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:フレミネ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00066",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00066",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00842"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00066.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00843"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00066.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00844"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00845",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00846"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00845"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00846"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00847",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00848"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00847"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00848"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00849",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00850"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00849"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00850"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00851"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00852"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00066.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00066.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00066.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00066.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00845",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00846"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00847",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00848"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00849",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00850"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-09-07"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00067",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:ミカ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00067",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00067",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00853"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00067.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00854"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00067.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00855"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00856",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00857"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00856"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00857"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00858",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00859"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00858"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00859"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00860",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00861"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00860"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00861"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00862"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00863"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00067.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00067.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00067.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00067.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00856",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00857"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00858",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00859"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00860",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00861"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-09-07"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00068",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:モナ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00068",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00068",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00864"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00068.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00865"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00068.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00866"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00867",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00868"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00867"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00868"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00869",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00870"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00869"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00870"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00871",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00872"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00871"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00872"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00873"
          },
          "unit": "%",
          "strict": 200,
          "goal": 200,
          "base": 200
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00874"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00875"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00068.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00068.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00068.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00068.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00867",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00868"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00869",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00870"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00871",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00872"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-09-07"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00069",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:ヨォーヨ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00069",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00069",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00876"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00069.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00877"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00069.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00878"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00879",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00880"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00879"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00880"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00881",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00882"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00881"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00882"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00883",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00884"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00883"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00884"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00885"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00886"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00069.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00069.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00069.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00069.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00879",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00880"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00881",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00882"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00883",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00884"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-09-07"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00070",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:ラウマ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00070",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00070",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00887"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00070.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00888"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00070.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00889"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00890",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00891"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00890"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00891"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00892",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00893"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00892"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00893"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00894",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00895"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00894"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00895"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "elementalMastery",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00896"
          },
          "unit": "",
          "strict": 800,
          "goal": 800,
          "base": 800
        },
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00897"
          },
          "unit": "%",
          "strict": 170,
          "goal": 170,
          "base": 170
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00898"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00899"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00070.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00070.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00070.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00070.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00890",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00891"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00892",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00893"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00894",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00895"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-09-07"
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
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00071",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:リサ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00071",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00071",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00900"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00071.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00901"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00071.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00902"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00903",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00904"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00903"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00904"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00905",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00906"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00905"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00906"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00907",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00908"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00907"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00908"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00909"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00910"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00071.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00071.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00071.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00071.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00903",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00904"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00905",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00906"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00907",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00908"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-09-07"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00072",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:リネ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00072",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00072",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00911"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00072.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00912"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00072.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00913"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00914",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00915"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00914"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00915"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00916",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00917"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00916"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00917"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00918",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00919"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00918"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00919"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00920"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00921"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00072.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00072.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00072.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00072.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00914",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00915"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00916",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00917"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00918",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00919"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-09-07"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00073",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:リネット",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00073",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00073",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00922"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00073.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00923"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00073.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00924"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00925",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00926"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00925"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00926"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00927",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00928"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00927"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00928"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00929",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00930"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00929"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00930"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00931"
          },
          "unit": "%",
          "strict": 200,
          "goal": 200,
          "base": 180
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00932"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00933"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00073.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00073.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00073.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00073.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00925",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00926"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00927",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00928"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00929",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00930"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-09-07"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00074",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:レイラ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00074",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00074",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00934"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00074.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00935"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00074.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00936"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00937",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00938"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00937"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00938"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00939",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00940"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00939"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00940"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00941",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00942"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00941"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00942"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00943"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00944"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00074.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00074.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00074.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00074.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00937",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00938"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00939",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00940"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00941",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00942"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-09-07"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00075",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:マーヴィカ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00075",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00075",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00945"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00075.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00946"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00075.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00947"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00948",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00949"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00948"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00949"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00950",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00951"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00950"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00951"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00952",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00953"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00952"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00953"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00954"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00955"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00075.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00075.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00075.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00075.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00948",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00949"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00950",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00951"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00952",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00953"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-09-07",
      "updatedAt": "2026-09-07"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00076",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:ムアラニ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00076",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00076",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00956"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00076.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00957"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00076.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00958"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00959",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00960"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00959"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00960"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00961",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00962"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00961"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00962"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00963",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00964"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00963"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00964"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00965"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00966"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00076.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00076.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00076.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00076.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00959",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00960"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00961",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00962"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00963",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00964"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-09-07"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00077",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:フリンズ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00077",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00077",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00967"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00077.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00968"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00077.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00969"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00970",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00971"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00970"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00971"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00972",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00973"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00972"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00973"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00974",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00975"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00974"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00975"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00976"
          },
          "unit": "",
          "strict": 2000,
          "goal": 2000,
          "base": 2000
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00977"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00978"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00077.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00077.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00077.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00077.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00970",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00971"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00972",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00973"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00974",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00975"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-09-01",
      "updatedAt": "2026-09-07"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00078",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:ヤフォダ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00078",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00078",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00979"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00078.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00980"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00078.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00981"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00982",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00983"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00982"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00983"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00984",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00985"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00984"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00985"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00986",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00987"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00986"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00987"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00988"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b00989"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00078.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00078.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00078.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00078.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00982",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00983"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00984",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00985"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00986",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00987"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-09-07"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00079",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:リオセスリ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00079",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00079",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00990"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00079.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00991"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00079.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00992"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b00993",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00994"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00993"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00994"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00995",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00996"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00995"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00996"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b00997",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b00998"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00997"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b00998"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b00999"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01000"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00079.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00079.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00079.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00079.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00993",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00994"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00995",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00996"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b00997",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b00998"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-09-07",
      "updatedAt": "2026-09-07"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00080",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:ディルック",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00080",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00080",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01012"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00080.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01001"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00080.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01002"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01003",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01004"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01003"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01004"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01005",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01006"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01005"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01006"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01007",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01008"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01007"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01008"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01009"
          },
          "unit": "%",
          "strict": 85,
          "goal": 75,
          "base": 65
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01010"
          },
          "unit": "%",
          "strict": 220,
          "goal": 180,
          "base": 150
        },
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01011"
          },
          "unit": "%",
          "strict": 160,
          "goal": 130,
          "base": 115
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01013"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01014"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00080.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00080.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00080.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00080.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01003",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01004"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01005",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01006"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01007",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01008"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "profileId": "curated:batch15:diluc",
      "dataAsOf": "2026-09-05",
      "updatedAt": "2026-09-05"
    },
    "legacyShape": {
      "fields": [
        "relicSet",
        "planarSet",
        "mainStats",
        "targets",
        "profileId",
        "headline",
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00081",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:ドゥリン",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00081",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00081",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01027"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00081.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01015"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00081.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01016"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01017",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01018"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01017"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01018"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01019",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01020"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01019"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01020"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01021",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01022"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01021"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01022"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01023"
          },
          "unit": "%",
          "strict": 85,
          "goal": 75,
          "base": 65
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01024"
          },
          "unit": "%",
          "strict": 220,
          "goal": 180,
          "base": 150
        },
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01025"
          },
          "unit": "%",
          "strict": 160,
          "goal": 130,
          "base": 115
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01026"
          },
          "unit": "",
          "strict": 2800,
          "goal": 2500,
          "base": 2300
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01028"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01029"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00081.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00081.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00081.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00081.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01017",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01018"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01019",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01020"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01021",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01022"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "profileId": "curated:batch15:durin",
      "dataAsOf": "2026-09-05",
      "updatedAt": "2026-09-05"
    },
    "legacyShape": {
      "fields": [
        "relicSet",
        "planarSet",
        "mainStats",
        "targets",
        "profileId",
        "headline",
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00082",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:トーマ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00082",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00082",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01041"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00082.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01030"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00082.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01031"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01032",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01033"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01032"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01033"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01034",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01035"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01034"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01035"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01036",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01037"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01036"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01037"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "hp",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01038"
          },
          "unit": "",
          "strict": 45000,
          "goal": 38000,
          "base": 32000
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01039"
          },
          "unit": "%",
          "strict": 80,
          "goal": 70,
          "base": 60
        },
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01040"
          },
          "unit": "%",
          "strict": 220,
          "goal": 180,
          "base": 150
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01042"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01043"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00082.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00082.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00082.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00082.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01032",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01033"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01034",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01035"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01036",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01037"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "profileId": "curated:batch15:thoma",
      "dataAsOf": "2026-09-05",
      "updatedAt": "2026-09-05"
    },
    "legacyShape": {
      "fields": [
        "relicSet",
        "planarSet",
        "mainStats",
        "targets",
        "profileId",
        "headline",
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00083",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:ドリー",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00083",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00083",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01054"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00083.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01044"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00083.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01045"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01046",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01047"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01046"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01047"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01048",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01049"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01048"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01049"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01050",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01051"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01050"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01051"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01052"
          },
          "unit": "%",
          "strict": 250,
          "goal": 200,
          "base": 170
        },
        {
          "key": "hp",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01053"
          },
          "unit": "",
          "strict": 35000,
          "goal": 28000,
          "base": 23000
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01055"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01056"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00083.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00083.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00083.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00083.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01046",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01047"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01048",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01049"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01050",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01051"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "profileId": "curated:batch15:dori",
      "dataAsOf": "2026-09-05",
      "updatedAt": "2026-09-05"
    },
    "legacyShape": {
      "fields": [
        "relicSet",
        "planarSet",
        "mainStats",
        "targets",
        "profileId",
        "headline",
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
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00084",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:ネフェル",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00084",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00084",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01095"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00084.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01084"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00084.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01085"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01086",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01087"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01086"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01087"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01088",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01089"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01088"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01089"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01090",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01091"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01090"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01091"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01092"
          },
          "unit": "%",
          "strict": 85,
          "goal": 75,
          "base": 65
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01093"
          },
          "unit": "%",
          "strict": 220,
          "goal": 180,
          "base": 150
        },
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01094"
          },
          "unit": "%",
          "strict": 160,
          "goal": 130,
          "base": 115
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01096"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01097"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00084.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00084.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00084.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00084.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01086",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01087"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01088",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01089"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01090",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01091"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "profileId": "curated:batch15:nefer",
      "dataAsOf": "2026-09-05",
      "updatedAt": "2026-09-05"
    },
    "legacyShape": {
      "fields": [
        "relicSet",
        "planarSet",
        "mainStats",
        "targets",
        "profileId",
        "headline",
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00085",
    "game": "genshin",
    "lookupKey": "GI_GUIDE_OVERRIDES:ノエル",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00085",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_providers.b00085",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01109"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00085.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01098"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00085.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01099"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01100",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01101"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01100"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01101"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01102",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01103"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01102"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01103"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01104",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01105"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01104"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01105"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "defense",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01106"
          },
          "unit": "",
          "strict": 2800,
          "goal": 2400,
          "base": 2000
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01107"
          },
          "unit": "%",
          "strict": 80,
          "goal": 70,
          "base": 60
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01108"
          },
          "unit": "%",
          "strict": 220,
          "goal": 180,
          "base": 150
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01110"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01111"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00085.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00085.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00085.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00085.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01100",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01101"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01102",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01103"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01104",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01105"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "profileId": "curated:batch15:noelle",
      "dataAsOf": "2026-09-05",
      "updatedAt": "2026-09-05"
    },
    "legacyShape": {
      "fields": [
        "relicSet",
        "planarSet",
        "mainStats",
        "targets",
        "profileId",
        "headline",
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00086",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:クラレッタ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00086",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00086",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01124"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00086.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01125"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00086.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01126"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01127",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01128"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01127"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01128"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01129",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01130"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01129"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01130"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01131",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01132"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01131"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01132"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "defense",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01133"
          },
          "unit": "",
          "strict": 2451,
          "goal": 1800,
          "base": 1000
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01134"
          },
          "unit": "%",
          "strict": 129,
          "goal": 129,
          "base": 128.9
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01135"
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
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00086.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00086.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00086.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00086.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01127",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01128"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01129",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01130"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01131",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01132"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-09-12",
      "updatedAt": "2026-09-13"
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
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00087",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:0号・アンビー",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00087",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00087",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01500"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00087.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01501"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00087.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01502"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01503",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01504"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01503"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01504"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01505",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01506"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01505"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01506"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01507",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01508"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01507"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01508"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01509"
          },
          "unit": "%",
          "strict": 78,
          "goal": 58,
          "base": 50
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01510"
          },
          "unit": "%",
          "strict": 200,
          "goal": 160,
          "base": 140
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01511"
          },
          "unit": "",
          "strict": 3200,
          "goal": 2800,
          "base": 2600
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01512"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01513"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00087.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00087.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00087.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00087.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01503",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01504"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01505",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01506"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01507",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01508"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
      "updatedAt": "2026-08-26"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00088",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:ビビアン",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00088",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00088",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01150"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00088.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01151"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00088.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01152"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01153",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01154"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01153"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01154"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01155",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01156"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01155"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01156"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01157",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01158"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01157"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01158"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "anomalyMastery",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01159"
          },
          "unit": "",
          "strict": 450,
          "goal": 430,
          "base": 340
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01160"
          },
          "unit": "",
          "strict": 2500,
          "goal": 2300,
          "base": 2000
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01161"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01162"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00088.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00088.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00088.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00088.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01153",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01154"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01155",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01156"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01157",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01158"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
      "updatedAt": "2026-08-26"
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
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00089",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:プロメイア",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00089",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00089",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01784"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00089.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01785"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00089.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01786"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01787",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01788"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01787"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01788"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01789",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01790"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01789"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01790"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01791",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01792"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01791"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01792"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "anomalyMastery",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01793"
          },
          "unit": "",
          "strict": 314,
          "goal": 314,
          "base": 314
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01794"
          },
          "unit": "",
          "strict": 2623,
          "goal": 2623,
          "base": 2584
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01795"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01796"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00089.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00089.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00089.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00089.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01787",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01788"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01789",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01790"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01791",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01792"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-27",
      "updatedAt": "2026-08-27"
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
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00090",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:エレン",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00090",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00090",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01175"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00090.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01176"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00090.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01177"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01178",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01179"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01178"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01179"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01180",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01181"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01180"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01181"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01182",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01183"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01182"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01183"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01184"
          },
          "unit": "%",
          "strict": 80,
          "goal": 70,
          "base": 65
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01185"
          },
          "unit": "%",
          "strict": 160,
          "goal": 120,
          "base": 100
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01186"
          },
          "unit": "",
          "strict": 2800,
          "goal": 2500,
          "base": 2200
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01187"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01188"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00090.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00090.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00090.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00090.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01178",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01179"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01180",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01181"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01182",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01183"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
      "updatedAt": "2026-08-26"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00091",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:ジェーン",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00091",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00091",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01189"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00091.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01190"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00091.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01191"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01192",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01193"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01192"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01193"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01194",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01195"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01194"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01195"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01196",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01197"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01196"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01197"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "anomalyMastery",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01198"
          },
          "unit": "",
          "strict": 450,
          "goal": 400,
          "base": 375
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01199"
          },
          "unit": "",
          "strict": 2800,
          "goal": 2500,
          "base": 2200
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01200"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01201"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00091.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00091.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00091.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00091.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01192",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01193"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01194",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01195"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01196",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01197"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
      "updatedAt": "2026-08-26"
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
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00092",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:星見雅",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00092",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00092",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01202"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00092.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01203"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00092.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01204"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01205",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01206"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01205"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01206"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01207",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01208"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01207"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01208"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01209",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01210"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01209"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01210"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01211"
          },
          "unit": "%",
          "strict": 80,
          "goal": 80,
          "base": 70
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01212"
          },
          "unit": "%",
          "strict": 180,
          "goal": 150,
          "base": 130
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01213"
          },
          "unit": "",
          "strict": 3000,
          "goal": 2800,
          "base": 2600
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01214"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01215"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00092.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00092.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00092.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00092.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01205",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01206"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01207",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01208"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01209",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01210"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-25",
      "updatedAt": "2026-08-25"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00093",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:浮波柚葉",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00093",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00093",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01216"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00093.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01217"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00093.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01218"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01219",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01220"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01219"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01220"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01221",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01222"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01221"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01222"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01223",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01224"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01223"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01224"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01225"
          },
          "unit": "",
          "strict": 3200,
          "goal": 3000,
          "base": 2700
        },
        {
          "key": "anomalyMastery",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01226"
          },
          "unit": "",
          "strict": 220,
          "goal": 200,
          "base": 180
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01227"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01228"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00093.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00093.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00093.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00093.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01219",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01220"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01221",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01222"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01223",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01224"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-25",
      "updatedAt": "2026-08-25"
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
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00094",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:月城柳",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00094",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00094",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01229"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00094.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01230"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00094.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01231"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01232",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01233"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01232"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01233"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01234",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01235"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01234"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01235"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01236",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01237"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01236"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01237"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "anomalyMastery",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01238"
          },
          "unit": "",
          "strict": 450,
          "goal": 400,
          "base": 350
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01239"
          },
          "unit": "",
          "strict": 3400,
          "goal": 3000,
          "base": 2600
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01240"
      },
      "sourceLabels": []
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00094.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00094.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00094.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00094.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01232",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01233"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01234",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01235"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01236",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01237"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {},
    "legacyShape": {
      "fields": [
        "headline",
        "relicSet",
        "planarSet",
        "mainStats",
        "targets",
        "targetContext"
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
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00095",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:アストラ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00095",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00095",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01241"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00095.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01242"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00095.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01243"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01244",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01245"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01244"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01245"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01246",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01247"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01246"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01247"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01248",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01249"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01248"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01249"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01250"
          },
          "unit": "",
          "strict": 3800,
          "goal": 3429,
          "base": 3200
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01251"
      },
      "sourceLabels": []
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00095.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00095.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00095.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00095.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01244",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01245"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01246",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01247"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01248",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01249"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {},
    "legacyShape": {
      "fields": [
        "headline",
        "relicSet",
        "planarSet",
        "mainStats",
        "targets",
        "targetContext"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00096",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:ライト",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00096",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00096",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01252"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00096.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01253"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00096.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01254"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01255",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01256"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01255"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01256"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01257",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01258"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01257"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01258"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01259",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01260"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01259"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01260"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "impact",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01261"
          },
          "unit": "",
          "strict": 300,
          "goal": 270,
          "base": 240
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01262"
      },
      "sourceLabels": []
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00096.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00096.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00096.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00096.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01255",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01256"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01257",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01258"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01259",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01260"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {},
    "legacyShape": {
      "fields": [
        "headline",
        "relicSet",
        "planarSet",
        "mainStats",
        "targets",
        "targetContext"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00097",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:レミエール",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00097",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00097",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01263"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00097.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01264"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00097.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01265"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01266",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01267"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01266"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01267"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01268",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01269"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01268"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01269"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01270",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01271"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01270"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01271"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01272"
          },
          "unit": "",
          "strict": 4200,
          "goal": 4000,
          "base": 3600
        },
        {
          "key": "anomalyMastery",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01273"
          },
          "unit": "",
          "strict": 500,
          "goal": 430,
          "base": 360
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01274"
      },
      "sourceLabels": []
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00097.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00097.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00097.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00097.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01266",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01267"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01268",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01269"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01270",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01271"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {},
    "legacyShape": {
      "fields": [
        "headline",
        "relicSet",
        "planarSet",
        "mainStats",
        "targets",
        "targetContext"
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
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00098",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:猫又",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00098",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00098",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01286"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00098.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01275"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00098.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01276"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01277",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01278"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01277"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01278"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01279",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01280"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01279"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01280"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01281",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01282"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01281"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01282"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01283"
          },
          "unit": "%",
          "strict": 80,
          "goal": 70,
          "base": 60
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01284"
          },
          "unit": "%",
          "strict": 200,
          "goal": 160,
          "base": 130
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01285"
          },
          "unit": "",
          "strict": 3000,
          "goal": 2700,
          "base": 2400
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01287"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01288"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00098.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00098.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00098.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00098.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01277",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01278"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01279",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01280"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01281",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01282"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "profileId": "curated:batch15:nekomata",
      "dataAsOf": "2026-09-05",
      "updatedAt": "2026-09-05"
    },
    "legacyShape": {
      "fields": [
        "relicSet",
        "planarSet",
        "mainStats",
        "targets",
        "profileId",
        "headline",
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00099",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:盤岳",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00099",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00099",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01300"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00099.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01289"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00099.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01290"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01291",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01292"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01291"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01292"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01293",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01294"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01293"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01294"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01295",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01296"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01295"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01296"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01297"
          },
          "unit": "%",
          "strict": 80,
          "goal": 70,
          "base": 60
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01298"
          },
          "unit": "%",
          "strict": 200,
          "goal": 160,
          "base": 130
        },
        {
          "key": "hpPercent",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01299"
          },
          "unit": "%",
          "strict": 50,
          "goal": 35,
          "base": 25
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01301"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01302"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00099.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00099.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00099.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00099.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01291",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01292"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01293",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01294"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01295",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01296"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "profileId": "curated:batch15:pangyue",
      "dataAsOf": "2026-09-05",
      "updatedAt": "2026-09-05"
    },
    "legacyShape": {
      "fields": [
        "relicSet",
        "planarSet",
        "mainStats",
        "targets",
        "profileId",
        "headline",
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00100",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:葉瞬光",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00100",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00100",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01314"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00100.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01303"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00100.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01304"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01305",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01306"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01305"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01306"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01307",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01308"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01307"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01308"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01309",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01310"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01309"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01310"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01311"
          },
          "unit": "%",
          "strict": 80,
          "goal": 70,
          "base": 60
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01312"
          },
          "unit": "%",
          "strict": 200,
          "goal": 160,
          "base": 130
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01313"
          },
          "unit": "",
          "strict": 3000,
          "goal": 2700,
          "base": 2400
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01315"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01316"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00100.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00100.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00100.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00100.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01305",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01306"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01307",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01308"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01309",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01310"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "profileId": "curated:batch15:ye-shunguang",
      "dataAsOf": "2026-09-05",
      "updatedAt": "2026-09-05"
    },
    "legacyShape": {
      "fields": [
        "relicSet",
        "planarSet",
        "mainStats",
        "targets",
        "profileId",
        "headline",
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00101",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:潘引壺",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00101",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00101",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01327"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00101.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01317"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00101.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01318"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01319",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01320"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01319"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01320"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01321",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01322"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01321"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01322"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01323",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01324"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01323"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01324"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "hpPercent",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01325"
          },
          "unit": "%",
          "strict": 55,
          "goal": 40,
          "base": 30
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01326"
          },
          "unit": "",
          "strict": 3200,
          "goal": 3000,
          "base": 2800
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01328"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01329"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00101.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00101.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00101.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00101.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01319",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01320"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01321",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01322"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01323",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01324"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "profileId": "curated:batch15:pan-yinhu",
      "dataAsOf": "2026-09-05",
      "updatedAt": "2026-09-05"
    },
    "legacyShape": {
      "fields": [
        "relicSet",
        "planarSet",
        "mainStats",
        "targets",
        "profileId",
        "headline",
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
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00102",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:セス",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00102",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00102",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01330"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00102.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01331"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00102.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01332"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01333",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01334"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01333"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01334"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01335",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01336"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01335"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01336"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01337",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01338"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01337"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01338"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01339"
          },
          "unit": "",
          "strict": 3200,
          "goal": 2900,
          "base": 2600
        },
        {
          "key": "anomalyMastery",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01340"
          },
          "unit": "",
          "strict": 300,
          "goal": 250,
          "base": 200
        },
        {
          "key": "energyRegen",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01341"
          },
          "unit": "",
          "strict": 1.6,
          "goal": 1.56,
          "base": 1.5
        },
        {
          "key": "hp",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01342"
          },
          "unit": "",
          "strict": 12000,
          "goal": 11000,
          "base": 10000
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01343"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01344"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00102.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00102.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00102.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00102.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01333",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01334"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01335",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01336"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01337",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01338"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
      "updatedAt": "2026-08-26"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00103",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:パイパー",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00103",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00103",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01345"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00103.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01346"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00103.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01347"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01348",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01349"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01348"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01349"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01350",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01351"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01350"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01351"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01352",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01353"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01352"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01353"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "anomalyProficiency",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01354"
          },
          "unit": "",
          "strict": 450,
          "goal": 400,
          "base": 350
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01355"
          },
          "unit": "",
          "strict": 2800,
          "goal": 2600,
          "base": 2500
        },
        {
          "key": "anomalyMastery",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01356"
          },
          "unit": "",
          "strict": 180,
          "goal": 150,
          "base": 130
        },
        {
          "key": "penRatio",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01357"
          },
          "unit": "%",
          "strict": 30,
          "goal": 20,
          "base": 10
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01358"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01359"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00103.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00103.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00103.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00103.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01348",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01349"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01350",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01351"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01352",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01353"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
      "updatedAt": "2026-08-26"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00104",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:蒼角",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00104",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00104",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01360"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00104.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01361"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00104.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01362"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01363",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01364"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01363"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01364"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01365",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01366"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01365"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01366"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01367",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01368"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01367"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01368"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01369"
          },
          "unit": "",
          "strict": 2800,
          "goal": 2500,
          "base": 2300
        },
        {
          "key": "energyRegen",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01370"
          },
          "unit": "",
          "strict": 1.6,
          "goal": 1.56,
          "base": 1.5
        },
        {
          "key": "hp",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01371"
          },
          "unit": "",
          "strict": 11000,
          "goal": 10000,
          "base": 9000
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01372"
          },
          "unit": "%",
          "strict": 60,
          "goal": 50,
          "base": 30
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01373"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01374"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00104.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00104.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00104.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00104.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01363",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01364"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01365",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01366"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01367",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01368"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
      "updatedAt": "2026-08-26"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00105",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:グレース",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00105",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00105",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01375"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00105.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01376"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00105.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01377"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01378",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01379"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01378"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01379"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01380",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01381"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01380"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01381"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01382",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01383"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01382"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01383"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "anomalyProficiency",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01384"
          },
          "unit": "",
          "strict": 450,
          "goal": 400,
          "base": 350
        },
        {
          "key": "anomalyMastery",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01385"
          },
          "unit": "",
          "strict": 190,
          "goal": 160,
          "base": 150
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01386"
          },
          "unit": "",
          "strict": 2800,
          "goal": 2500,
          "base": 2300
        },
        {
          "key": "penRatio",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01387"
          },
          "unit": "%",
          "strict": 24,
          "goal": 15,
          "base": 0
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01388"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01389"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00105.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00105.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00105.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00105.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01378",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01379"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01380",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01381"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01382",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01383"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
      "updatedAt": "2026-08-26"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00106",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:バーニス",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00106",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00106",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01390"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00106.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01391"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00106.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01392"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01393",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01394"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01393"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01394"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01395",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01396"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01395"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01396"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01397",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01398"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01397"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01398"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "anomalyProficiency",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01399"
          },
          "unit": "",
          "strict": 400,
          "goal": 375,
          "base": 350
        },
        {
          "key": "anomalyMastery",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01400"
          },
          "unit": "",
          "strict": 190,
          "goal": 160,
          "base": 150
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01401"
          },
          "unit": "",
          "strict": 3000,
          "goal": 2700,
          "base": 2500
        },
        {
          "key": "penRatio",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01402"
          },
          "unit": "%",
          "strict": 24,
          "goal": 15,
          "base": 0
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01403"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01404"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00106.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00106.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00106.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00106.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01393",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01394"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01395",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01396"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01397",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01398"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
      "updatedAt": "2026-08-26"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00107",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:ルーシー",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00107",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00107",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01405"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00107.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01406"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00107.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01407"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01408",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01409"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01408"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01409"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01410",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01411"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01410"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01411"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01412",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01413"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01412"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01413"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01414"
          },
          "unit": "",
          "strict": 2400,
          "goal": 2000,
          "base": 1800
        },
        {
          "key": "energyRegen",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01415"
          },
          "unit": "",
          "strict": 1.8,
          "goal": 1.56,
          "base": 1.4
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01416"
          },
          "unit": "%",
          "strict": 60,
          "goal": 45,
          "base": 30
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01417"
          },
          "unit": "%",
          "strict": 120,
          "goal": 100,
          "base": 80
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01418"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01419"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00107.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00107.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00107.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00107.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01408",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01409"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01410",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01411"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01412",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01413"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
      "updatedAt": "2026-08-26"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00108",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:シーザー",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00108",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00108",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01420"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00108.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01421"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00108.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01422"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01423",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01424"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01423"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01424"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01425",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01426"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01425"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01426"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01427",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01428"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01427"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01428"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "impact",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01429"
          },
          "unit": "",
          "strict": 170,
          "goal": 145,
          "base": 145
        },
        {
          "key": "hp",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01430"
          },
          "unit": "",
          "strict": 14000,
          "goal": 12000,
          "base": 11000
        },
        {
          "key": "defense",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01431"
          },
          "unit": "",
          "strict": 1200,
          "goal": 1000,
          "base": 900
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01432"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01433"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00108.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00108.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00108.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00108.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01423",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01424"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01425",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01426"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01427",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01428"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
      "updatedAt": "2026-08-26"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00109",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:リナ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00109",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00109",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01434"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00109.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01435"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00109.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01436"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01437",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01438"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01437"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01438"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01439",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01440"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01439"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01440"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01441",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01442"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01441"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01442"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "penRatio",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01443"
          },
          "unit": "%",
          "strict": 72,
          "goal": 38,
          "base": 38
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01444"
          },
          "unit": "",
          "strict": 2600,
          "goal": 2000,
          "base": 1800
        },
        {
          "key": "anomalyProficiency",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01445"
          },
          "unit": "",
          "strict": 300,
          "goal": 200,
          "base": 150
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01446"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01447"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00109.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00109.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00109.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00109.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01437",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01438"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01439",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01440"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01441",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01442"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
      "updatedAt": "2026-08-26"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00110",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:青衣",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00110",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00110",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01448"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00110.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01449"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00110.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01450"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01451",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01452"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01451"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01452"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01453",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01454"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01453"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01454"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01455",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01456"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01455"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01456"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "impact",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01457"
          },
          "unit": "",
          "strict": 193,
          "goal": 169,
          "base": 169
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01458"
          },
          "unit": "",
          "strict": 2000,
          "goal": 1800,
          "base": 1600
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01459"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01460"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00110.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00110.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00110.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00110.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01451",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01452"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01453",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01454"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01455",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01456"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
      "updatedAt": "2026-08-26"
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
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00111",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:「11号」",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00111",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00111",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01461"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00111.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01462"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00111.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01463"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01464",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01465"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01464"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01465"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01466",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01467"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01466"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01467"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01468",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01469"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01468"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01469"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01470"
          },
          "unit": "%",
          "strict": 100,
          "goal": 80,
          "base": 65
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01471"
          },
          "unit": "%",
          "strict": 160,
          "goal": 140,
          "base": 120
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01472"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01473"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00111.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00111.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00111.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00111.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01464",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01465"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01466",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01467"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01468",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01469"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
      "updatedAt": "2026-08-26"
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
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00112",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:「シード」",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00112",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00112",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01474"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00112.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01475"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00112.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01476"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01477",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01478"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01477"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01478"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01479",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01480"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01479"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01480"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01481",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01482"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01481"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01482"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01483"
          },
          "unit": "",
          "strict": 3000,
          "goal": 2700,
          "base": 2500
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01484"
          },
          "unit": "%",
          "strict": 90,
          "goal": 75,
          "base": 65
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01485"
          },
          "unit": "%",
          "strict": 140,
          "goal": 110,
          "base": 100
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01486"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01487"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00112.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00112.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00112.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00112.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01477",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01478"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01479",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01480"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01481",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01482"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
      "updatedAt": "2026-08-26"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00113",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:「トリガー」",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00113",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00113",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01488"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00113.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01489"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00113.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01490"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01491",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01492"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01491"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01492"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01493",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01494"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01493"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01494"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01495",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01496"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01495"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01496"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01497"
          },
          "unit": "%",
          "strict": 100,
          "goal": 90,
          "base": 80
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01498"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01499"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00113.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00113.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00113.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00113.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01491",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01492"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01493",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01494"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01495",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01496"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
      "updatedAt": "2026-08-26"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00114",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:アリア",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00114",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00114",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01514"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00114.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01515"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00114.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01516"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01517",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01518"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01517"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01518"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01519",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01520"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01519"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01520"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01521",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01522"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01521"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01522"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01523"
          },
          "unit": "",
          "strict": 2900,
          "goal": 2600,
          "base": 2400
        },
        {
          "key": "anomalyMastery",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01524"
          },
          "unit": "",
          "strict": 244,
          "goal": 184,
          "base": 160
        },
        {
          "key": "anomalyProficiency",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01525"
          },
          "unit": "",
          "strict": 420,
          "goal": 330,
          "base": 300
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01526"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01527"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00114.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00114.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00114.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00114.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01517",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01518"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01519",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01520"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01521",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01522"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
      "updatedAt": "2026-08-26"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00115",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:アリス",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00115",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00115",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01528"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00115.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01529"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00115.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01530"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01531",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01532"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01531"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01532"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01533",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01534"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01533"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01534"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01535",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01536"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01535"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01536"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01537"
          },
          "unit": "",
          "strict": 2900,
          "goal": 2600,
          "base": 2400
        },
        {
          "key": "anomalyMastery",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01538"
          },
          "unit": "",
          "strict": 160,
          "goal": 140,
          "base": 130
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01539"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01540"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00115.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00115.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00115.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00115.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01531",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01532"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01533",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01534"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01535",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01536"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
      "updatedAt": "2026-08-26"
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
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00116",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:アンドー",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00116",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00116",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01541"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00116.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01542"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00116.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01543"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01544",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01545"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01544"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01545"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01546",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01547"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01546"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01547"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01548",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01549"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01548"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01549"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01550"
          },
          "unit": "",
          "strict": 2700,
          "goal": 2400,
          "base": 2200
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01551"
          },
          "unit": "%",
          "strict": 80,
          "goal": 70,
          "base": 60
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01552"
          },
          "unit": "%",
          "strict": 160,
          "goal": 130,
          "base": 110
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01553"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01554"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00116.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00116.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00116.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00116.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01544",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01545"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01546",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01547"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01548",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01549"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-19",
      "updatedAt": "2026-08-26"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00117",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:アンビー",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00117",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00117",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01555"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00117.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01556"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00117.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01557"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01558",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01559"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01558"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01559"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01560",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01561"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01560"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01561"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01562",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01563"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01562"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01563"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "impact",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01564"
          },
          "unit": "",
          "strict": 189,
          "goal": 189,
          "base": 160
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01565"
          },
          "unit": "%",
          "strict": 65,
          "goal": 50,
          "base": 40
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01566"
          },
          "unit": "%",
          "strict": 130,
          "goal": 100,
          "base": 80
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01567"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01568"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00117.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00117.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00117.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00117.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01558",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01559"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01560",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01561"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01562",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01563"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-06-05",
      "updatedAt": "2026-08-26"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00118",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:イヴリン",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00118",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00118",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01569"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00118.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01570"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00118.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01571"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01572",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01573"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01572"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01573"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01574",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01575"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01574"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01575"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01576",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01577"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01576"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01577"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01578"
          },
          "unit": "%",
          "strict": 90,
          "goal": 80,
          "base": 70
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01579"
          },
          "unit": "%",
          "strict": 180,
          "goal": 160,
          "base": 140
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01580"
          },
          "unit": "",
          "strict": 3000,
          "goal": 2500,
          "base": 2300
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01581"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01582"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00118.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00118.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00118.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00118.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01572",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01573"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01574",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01575"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01576",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01577"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-19",
      "updatedAt": "2026-08-26"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00119",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:イドリー",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00119",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00119",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01583"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00119.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01584"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00119.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01585"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01586",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01587"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01586"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01587"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01588",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01589"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01588"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01589"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01590",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01591"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01590"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01591"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01592"
          },
          "unit": "%",
          "strict": 68,
          "goal": 65,
          "base": 55
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01593"
          },
          "unit": "%",
          "strict": 150,
          "goal": 130,
          "base": 120
        },
        {
          "key": "hp",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01594"
          },
          "unit": "",
          "strict": 23000,
          "goal": 21000,
          "base": 18000
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01595"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01596"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00119.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00119.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00119.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00119.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01586",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01587"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01588",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01589"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01590",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01591"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
      "updatedAt": "2026-08-26"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00120",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:ヴェリナ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00120",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00120",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01597"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00120.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01598"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00120.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01599"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01600",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01601"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01600"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01601"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01602",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01603"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01602"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01603"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01604",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01605"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01604"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01605"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "energyRegen",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01606"
          },
          "unit": "",
          "strict": 2.88,
          "goal": 2.4,
          "base": 2
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01607"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01608"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00120.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00120.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00120.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00120.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01600",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01601"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01602",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01603"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01604",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01605"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-19",
      "updatedAt": "2026-08-26"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00121",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:オルペウス&「鬼火」",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00121",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00121",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01609"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00121.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01610"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00121.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01611"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01612",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01613"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01612"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01613"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01614",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01615"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01614"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01615"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01616",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01617"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01616"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01617"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01618"
          },
          "unit": "",
          "strict": 2500,
          "goal": 2400,
          "base": 2000
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01619"
          },
          "unit": "%",
          "strict": 40,
          "goal": 35,
          "base": 30
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01620"
          },
          "unit": "%",
          "strict": 160,
          "goal": 140,
          "base": 120
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01621"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01622"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00121.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00121.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00121.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00121.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01612",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01613"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01614",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01615"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01616",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01617"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
      "updatedAt": "2026-08-26"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00122",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:カリン",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00122",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00122",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01623"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00122.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01624"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00122.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01625"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01626",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01627"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01626"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01627"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01628",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01629"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01628"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01629"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01630",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01631"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01630"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01631"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01632"
          },
          "unit": "",
          "strict": 3000,
          "goal": 2700,
          "base": 2400
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01633"
          },
          "unit": "%",
          "strict": 80,
          "goal": 75,
          "base": 70
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01634"
          },
          "unit": "%",
          "strict": 160,
          "goal": 150,
          "base": 140
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01635"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01636"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00122.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00122.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00122.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00122.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01626",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01627"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01628",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01629"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01630",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01631"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-19",
      "updatedAt": "2026-08-27"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00123",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:クレタ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00123",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00123",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01637"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00123.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01638"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00123.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01639"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01640",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01641"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01640"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01641"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01642",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01643"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01642"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01643"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01644",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01645"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01644"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01645"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "impact",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01646"
          },
          "unit": "",
          "strict": 190,
          "goal": 190,
          "base": 180
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01647"
          },
          "unit": "",
          "strict": 2500,
          "goal": 2300,
          "base": 2000
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01648"
          },
          "unit": "%",
          "strict": 50,
          "goal": 50,
          "base": 30
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01649"
          },
          "unit": "%",
          "strict": 100,
          "goal": 100,
          "base": 60
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01650"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01651"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00123.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00123.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00123.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00123.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01640",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01641"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01642",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01643"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01644",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01645"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-07-31",
      "updatedAt": "2026-08-27"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00124",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:シーシィア",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00124",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00124",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01652"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00124.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01653"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00124.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01654"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01655",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01656"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01655"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01656"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01657",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01658"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01657"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01658"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01659",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01660"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01659"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01660"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01661"
          },
          "unit": "",
          "strict": 1800,
          "goal": 1651,
          "base": 1500
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01662"
          },
          "unit": "%",
          "strict": 65,
          "goal": 57.8,
          "base": 50
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01663"
          },
          "unit": "%",
          "strict": 140,
          "goal": 122,
          "base": 110
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01664"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01665"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00124.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00124.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00124.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00124.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01655",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01656"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01657",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01658"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01659",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01660"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-27",
      "updatedAt": "2026-08-27"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00125",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:シグリッド",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00125",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00125",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01666"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00125.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01667"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00125.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01668"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01669",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01670"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01669"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01670"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01671",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01672"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01671"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01672"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01673",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01674"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01673"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01674"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01675"
          },
          "unit": "",
          "strict": 3200,
          "goal": 2958,
          "base": 2600
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01676"
          },
          "unit": "%",
          "strict": 40,
          "goal": 33.8,
          "base": 25
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01677"
          },
          "unit": "%",
          "strict": 210,
          "goal": 194,
          "base": 160
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01678"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01679"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00125.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00125.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00125.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00125.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01669",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01670"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01671",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01672"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01673",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01674"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
      "updatedAt": "2026-08-27"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00126",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:スターライト･ビリー",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00126",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00126",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01680"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00126.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01681"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00126.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01682"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01683",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01684"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01683"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01684"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01685",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01686"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01685"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01686"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01687",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01688"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01687"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01688"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "hp",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01689"
          },
          "unit": "",
          "strict": 21000,
          "goal": 19194,
          "base": 17000
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01690"
          },
          "unit": "%",
          "strict": 75,
          "goal": 67.4,
          "base": 60
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01691"
          },
          "unit": "%",
          "strict": 120,
          "goal": 98,
          "base": 80
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01692"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01693"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00126.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00126.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00126.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00126.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01683",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01684"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01685",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01686"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01687",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01688"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-27",
      "updatedAt": "2026-08-27"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00127",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:ダイアリン",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00127",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00127",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01694"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00127.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01695"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00127.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01696"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01697",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01698"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01697"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01698"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01699",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01700"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01699"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01700"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01701",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01702"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01701"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01702"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01703"
          },
          "unit": "",
          "strict": 2200,
          "goal": 1988,
          "base": 1800
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01704"
          },
          "unit": "%",
          "strict": 100,
          "goal": 99.4,
          "base": 80
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01705"
          },
          "unit": "%",
          "strict": 140,
          "goal": 117.2,
          "base": 100
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01706"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01707"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00127.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00127.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00127.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00127.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01697",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01698"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01699",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01700"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01701",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01702"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
      "updatedAt": "2026-08-27"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00128",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:ニコ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00128",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00128",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01708"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00128.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01709"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00128.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01710"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01711",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01712"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01711"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01712"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01713",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01714"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01713"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01714"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01715",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01716"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01715"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01716"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "energyRegen",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01717"
          },
          "unit": "",
          "strict": 3.58,
          "goal": 3.2,
          "base": 3
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01718"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01719"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00128.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00128.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00128.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00128.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01711",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01712"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01713",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01714"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01715",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01716"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-19",
      "updatedAt": "2026-08-27"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00129",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:ノルムー",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00129",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00129",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01720"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00129.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01721"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00129.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01722"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01723",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01724"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01723"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01724"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01725",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01726"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01725"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01726"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01727",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01728"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01727"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01728"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01729"
          },
          "unit": "%",
          "strict": 100,
          "goal": 76,
          "base": 65
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01730"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01731"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00129.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00129.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00129.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00129.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01723",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01724"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01725",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01726"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01727",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01728"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-27",
      "updatedAt": "2026-08-27"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00130",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:ヒューゴ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00130",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00130",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01732"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00130.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01733"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00130.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01734"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01735",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01736"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01735"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01736"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01737",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01738"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01737"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01738"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01739",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01740"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01739"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01740"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01741"
          },
          "unit": "%",
          "strict": 95,
          "goal": 88,
          "base": 80
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01742"
          },
          "unit": "%",
          "strict": 140,
          "goal": 130,
          "base": 125
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01743"
          },
          "unit": "",
          "strict": 2800,
          "goal": 2500,
          "base": 2300
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01744"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01745"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00130.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00130.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00130.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00130.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01735",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01736"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01737",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01738"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01739",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01740"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-07-31",
      "updatedAt": "2026-08-27"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00131",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:ピュロイス",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00131",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00131",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01746"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00131.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01747"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00131.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01748"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01749",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01750"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01749"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01750"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01751",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01752"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01751"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01752"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01753",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01754"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01753"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01754"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01755"
          },
          "unit": "%",
          "strict": 80,
          "goal": 72,
          "base": 65
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01756"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01757"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00131.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00131.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00131.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00131.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01749",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01750"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01751",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01752"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01753",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01754"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-27",
      "updatedAt": "2026-08-27"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00132",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:ビリー",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00132",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00132",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01758"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00132.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01759"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00132.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01760"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01761",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01762"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01761"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01762"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01763",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01764"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01763"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01764"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01765",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01766"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01765"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01766"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01767"
          },
          "unit": "%",
          "strict": 60,
          "goal": 50,
          "base": 40
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01768"
          },
          "unit": "%",
          "strict": 180,
          "goal": 150,
          "base": 130
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01769"
          },
          "unit": "",
          "strict": 3000,
          "goal": 2500,
          "base": 2300
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01770"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01771"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00132.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00132.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00132.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00132.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01761",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01762"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01763",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01764"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01765",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01766"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-06-05",
      "updatedAt": "2026-08-27"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00133",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:プルクラ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00133",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00133",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01772"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00133.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01773"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00133.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01774"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01775",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01776"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01775"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01776"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01777",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01778"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01777"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01778"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01779",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01780"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01779"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01780"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "impact",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01781"
          },
          "unit": "",
          "strict": 189,
          "goal": 189,
          "base": 168
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01782"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01783"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00133.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00133.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00133.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00133.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01775",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01776"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01777",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01778"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01779",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01780"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-07-31",
      "updatedAt": "2026-08-27"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00134",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:ベン",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00134",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00134",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01797"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00134.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01798"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00134.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01799"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01800",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01801"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01800"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01801"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01802",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01803"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01802"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01803"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01804",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01805"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01804"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01805"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "defense",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01806"
          },
          "unit": "",
          "strict": 2000,
          "goal": 2000,
          "base": 2000
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01807"
          },
          "unit": "%",
          "strict": 30,
          "goal": 30,
          "base": 30
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01808"
          },
          "unit": "%",
          "strict": 150,
          "goal": 150,
          "base": 150
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01809"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01810"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00134.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00134.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00134.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00134.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01800",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01801"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01802",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01803"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01804",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01805"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-19",
      "updatedAt": "2026-08-27"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00135",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:ライカン",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00135",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00135",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01811"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00135.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01812"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00135.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01813"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01814",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01815"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01814"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01815"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01816",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01817"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01816"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01817"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01818",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01819"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01818"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01819"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "impact",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01820"
          },
          "unit": "",
          "strict": 194,
          "goal": 194,
          "base": 190
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01821"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01822"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00135.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00135.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00135.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00135.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01814",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01815"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01816",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01817"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01818",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01819"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-19",
      "updatedAt": "2026-08-27"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00136",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:リュシア",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00136",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00136",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01823"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00136.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01824"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00136.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01825"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01826",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01827"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01826"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01827"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01828",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01829"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01828"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01829"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01830",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01831"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01830"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01831"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "hp",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01832"
          },
          "unit": "",
          "strict": 24000,
          "goal": 24000,
          "base": 22000
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01833"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01834"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00136.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00136.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00136.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00136.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01826",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01827"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01828",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01829"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01830",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01831"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-27",
      "updatedAt": "2026-08-27"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00137",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:儀玄",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00137",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00137",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01835"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00137.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01836"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00137.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01837"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01838",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01839"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01838"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01839"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01840",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01841"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01840"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01841"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01842",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01843"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01842"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01843"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "hp",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01844"
          },
          "unit": "",
          "strict": 21000,
          "goal": 21000,
          "base": 21000
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01845"
          },
          "unit": "%",
          "strict": 67.4,
          "goal": 67.4,
          "base": 67.4
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01846"
          },
          "unit": "%",
          "strict": 128,
          "goal": 128,
          "base": 128
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01847"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01848"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00137.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00137.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00137.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00137.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01838",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01839"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01840",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01841"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01842",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01843"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-27",
      "updatedAt": "2026-08-27"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00138",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:橘福福",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00138",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00138",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01849"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00138.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01850"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00138.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01851"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01852",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01853"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01852"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01853"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01854",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01855"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01854"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01855"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01856",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01857"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01856"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01857"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01858"
          },
          "unit": "",
          "strict": 3400,
          "goal": 3400,
          "base": 3400
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01859"
          },
          "unit": "%",
          "strict": 50,
          "goal": 50,
          "base": 50
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01860"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01861"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00138.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00138.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00138.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00138.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01852",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01853"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01854",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01855"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01856",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01857"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-27",
      "updatedAt": "2026-08-27"
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
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00139",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:狛野真斗",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00139",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00139",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01862"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00139.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01863"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00139.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01864"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01865",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01866"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01865"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01866"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01867",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01868"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01867"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01868"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01869",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01870"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01869"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01870"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01871"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01872"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00139.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00139.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00139.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00139.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01865",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01866"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01867",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01868"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01869",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01870"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-06-05",
      "updatedAt": "2026-08-27"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00140",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:朱鳶",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00140",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00140",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01873"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00140.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01874"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00140.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01875"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01876",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01877"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01876"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01877"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01878",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01879"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01878"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01879"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01880",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01881"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01880"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01881"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01882"
          },
          "unit": "%",
          "strict": 40,
          "goal": 40,
          "base": 40
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01883"
          },
          "unit": "%",
          "strict": 175,
          "goal": 160,
          "base": 160
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01884"
          },
          "unit": "",
          "strict": 3500,
          "goal": 3000,
          "base": 3000
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01885"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01886"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00140.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00140.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00140.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00140.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01876",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01877"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01878",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01879"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01880",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01881"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-06-05",
      "updatedAt": "2026-08-27"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00141",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:照",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00141",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00141",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01887"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00141.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01888"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00141.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01889"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01890",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01891"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01890"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01891"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01892",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01893"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01892"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01893"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01894",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01895"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01894"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01895"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "hp",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01896"
          },
          "unit": "",
          "strict": 27000,
          "goal": 27000,
          "base": 24000
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01897"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01898"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00141.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00141.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00141.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00141.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01890",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01891"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01892",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01893"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01894",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01895"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
      "updatedAt": "2026-08-27"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00142",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:千夏",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00142",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00142",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01899"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00142.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01900"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00142.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01901"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01902",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01903"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01902"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01903"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01904",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01905"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01904"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01905"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01906",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01907"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01906"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01907"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01908"
          },
          "unit": "",
          "strict": 3500,
          "goal": 3500,
          "base": 3500
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01909"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01910"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00142.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00142.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00142.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00142.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01902",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01903"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01904",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01905"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01906",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01907"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-27",
      "updatedAt": "2026-08-27"
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
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00143",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:浅羽悠真",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00143",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00143",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01911"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00143.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01912"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00143.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01913"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01914",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01915"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01914"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01915"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01916",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01917"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01916"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01917"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01918",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01919"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01918"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01919"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01920"
          },
          "unit": "%",
          "strict": 75,
          "goal": 75,
          "base": 55
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01921"
          },
          "unit": "%",
          "strict": 170,
          "goal": 150,
          "base": 150
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01922"
          },
          "unit": "",
          "strict": 2800,
          "goal": 2800,
          "base": 2500
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01923"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01924"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00143.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00143.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00143.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00143.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01914",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01915"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01916",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01917"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01918",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01919"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-27",
      "updatedAt": "2026-08-27"
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
        ],
        [
          "key",
          "label",
          "unit",
          "targets"
        ],
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
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ],
        [
          "厳選",
          "目標",
          "妥協"
        ]
      ]
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_providers.b00144",
    "game": "zzz",
    "lookupKey": "ZZZ_CHARACTER_GUIDES:南宮羽",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_providers.b00144",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_providers.b00144",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01925"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00144.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01926"
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
          "recommendationId": "guide.authoring.guideDefinitions_providers.b00144.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01927"
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
          "slotKey": "legacy:guide.legacy.gameProviders.b01928",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01929"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01928"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01929"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01930",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01931"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01930"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01931"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.gameProviders.b01932",
          "statOptions": [
            "legacy:guide.legacy.gameProviders.b01933"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01932"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.gameProviders.b01933"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.gameProviders.b01934"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.gameProviders.b01935"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00144.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00144.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_providers.b00144.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_providers.b00144.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01928",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01929"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01930",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01931"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.gameProviders.b01932",
        "statOptions": [
          "legacy:guide.legacy.gameProviders.b01933"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-27",
      "updatedAt": "2026-08-27"
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
