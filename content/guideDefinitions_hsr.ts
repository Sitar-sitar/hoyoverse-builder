import type {GuideAuthoringRecord} from "../shared/content/guideAuthoring";
export const records:GuideAuthoringRecord[]=[
  {
    "guideId": "guide.authoring.guideDefinitions_hsr.b00001",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:ホタル",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00001",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00001",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00030"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00001.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00031"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00001.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00032"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00033",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00034"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00033"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00034"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00035",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00036"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00035"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00036"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00037",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00038"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00037"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00038"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00039",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00040"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00039"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00040"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "breakEffect",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00008"
          },
          "unit": "%",
          "strict": 360,
          "goal": 300,
          "base": 240
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00009"
          },
          "unit": "",
          "strict": 154,
          "goal": 150,
          "base": 145
        },
        {
          "key": "attackPercent",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00010"
          },
          "unit": "%",
          "strict": 45,
          "goal": 35,
          "base": 25
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00041"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00042"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00001.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00001.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00001.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00001.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00033",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00034"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00035",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00036"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00037",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00038"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00039",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00040"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00002",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:カフカ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00002",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00002",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00606"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00002.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00607"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00002.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00608"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00609",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00610"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00609"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00610"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00611",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00612"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00611"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00612"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00613",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00614"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00613"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00614"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00615",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00616"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00615"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00616"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00617"
          },
          "unit": "",
          "strict": 170,
          "goal": 160,
          "base": 156
        },
        {
          "key": "effectHitRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00618"
          },
          "unit": "%",
          "strict": 90,
          "goal": 75,
          "base": 67
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00619"
          },
          "unit": "",
          "strict": 3000,
          "goal": 2500,
          "base": 2300
        },
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00620"
          },
          "unit": "%",
          "strict": 119.4,
          "goal": 119.4,
          "base": 100
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00621"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00622"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00002.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00002.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00002.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00002.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00609",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00610"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00611",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00612"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00613",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00614"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00615",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00616"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00003",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:銀狼",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00003",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00003",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00673"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00003.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00674"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00003.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00675"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00676",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00677"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00676"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00677"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00678",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00679"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00678"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00679"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00680",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00681"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00680"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00681"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00682",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00683"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00682"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00683"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "effectHitRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00684"
          },
          "unit": "%",
          "strict": 96,
          "goal": 67,
          "base": 67
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00685"
          },
          "unit": "",
          "strict": 170,
          "goal": 160,
          "base": 145
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00686"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00687"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00003.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00003.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00003.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00003.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00676",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00677"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00678",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00679"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00680",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00681"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00682",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00683"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00004",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:御空",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00004",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00004",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00081"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00004.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00068"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00004.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00069"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00070",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00071"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00070"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00071"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00072",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00073"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00072"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00073"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00074",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00075"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00074"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00075"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00076",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00077"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00076"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00077"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00078"
          },
          "unit": "",
          "strict": 161,
          "goal": 145,
          "base": 134
        },
        {
          "key": "effectRes",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00079"
          },
          "unit": "%",
          "strict": 45,
          "goal": 30,
          "base": 20
        },
        {
          "key": "hpPercent",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00080"
          },
          "unit": "%",
          "strict": 45,
          "goal": 32,
          "base": 20
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00082"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00083"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00004.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00004.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00004.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00004.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00070",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00071"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00072",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00073"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00074",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00075"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00076",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00077"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "profileId": "curated:batch15:yukong",
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00005",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:長夜月",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00005",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00005",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00097"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00005.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00084"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00005.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00085"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00086",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00087"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00086"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00087"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00088",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00089"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00088"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00089"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00090",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00091"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00090"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00091"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00092",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00093"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00092"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00093"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00094"
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
            "id": "guide.legacy.buildAdvisor.b00095"
          },
          "unit": "%",
          "strict": 200,
          "goal": 170,
          "base": 140
        },
        {
          "key": "hpPercent",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00096"
          },
          "unit": "%",
          "strict": 65,
          "goal": 50,
          "base": 35
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00098"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00099"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00005.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00005.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00005.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00005.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00086",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00087"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00088",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00089"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00090",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00091"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00092",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00093"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "profileId": "curated:batch15-evernight",
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00006",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:停雲",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00006",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00006",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00113"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00006.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00100"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00006.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00101"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00102",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00103"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00102"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00103"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00104",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00105"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00104"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00105"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00106",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00107"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00106"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00107"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00108",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00109"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00108"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00109"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00110"
          },
          "unit": "",
          "strict": 161,
          "goal": 145,
          "base": 134
        },
        {
          "key": "effectRes",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00111"
          },
          "unit": "%",
          "strict": 45,
          "goal": 30,
          "base": 20
        },
        {
          "key": "hpPercent",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00112"
          },
          "unit": "%",
          "strict": 45,
          "goal": 32,
          "base": 20
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00114"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00115"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00006.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00006.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00006.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00006.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00102",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00103"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00104",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00105"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00106",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00107"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00108",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00109"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "profileId": "curated:batch15:tingyun",
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00007",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:白露",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00007",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00007",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00129"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00007.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00116"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00007.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00117"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00118",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00119"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00118"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00119"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00120",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00121"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00120"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00121"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00122",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00123"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00122"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00123"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00124",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00125"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00124"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00125"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00126"
          },
          "unit": "",
          "strict": 160,
          "goal": 145,
          "base": 134
        },
        {
          "key": "effectRes",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00127"
          },
          "unit": "%",
          "strict": 45,
          "goal": 30,
          "base": 20
        },
        {
          "key": "hpPercent",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00128"
          },
          "unit": "%",
          "strict": 50,
          "goal": 35,
          "base": 25
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00130"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00131"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00007.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00007.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00007.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00007.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00118",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00119"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00120",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00121"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00122",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00123"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00124",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00125"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "profileId": "curated:batch15:bailu",
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00008",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:緋英",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00008",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00008",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00146"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00008.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00132"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00008.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00133"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00134",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00135"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00134"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00135"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00136",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00137"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00136"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00137"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00138",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00139"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00138"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00139"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00140",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00141"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00140"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00141"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00142"
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
            "id": "guide.legacy.buildAdvisor.b00143"
          },
          "unit": "%",
          "strict": 230,
          "goal": 200,
          "base": 180
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00144"
          },
          "unit": "",
          "strict": 143,
          "goal": 134,
          "base": 120
        },
        {
          "key": "attackPercent",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00145"
          },
          "unit": "%",
          "strict": 75,
          "goal": 60,
          "base": 45
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00147"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00148"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00008.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00008.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00008.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00008.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00134",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00135"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00136",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00137"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00138",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00139"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00140",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00141"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "profileId": "curated:batch15:hiei",
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00009",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:彦卿",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00009",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00009",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00163"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00009.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00149"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00009.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00150"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00151",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00152"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00151"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00152"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00153",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00154"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00153"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00154"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00155",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00156"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00155"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00156"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00157",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00158"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00157"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00158"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00159"
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
            "id": "guide.legacy.buildAdvisor.b00160"
          },
          "unit": "%",
          "strict": 200,
          "goal": 170,
          "base": 140
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00161"
          },
          "unit": "",
          "strict": 143,
          "goal": 134,
          "base": 120
        },
        {
          "key": "attackPercent",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00162"
          },
          "unit": "%",
          "strict": 75,
          "goal": 60,
          "base": 45
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00164"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00165"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00009.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00009.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00009.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00009.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00151",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00152"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00153",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00154"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00155",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00156"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00157",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00158"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "profileId": "curated:batch15:yanqing",
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00010",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:黄泉",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00010",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00010",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00213"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00010.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00214"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00010.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00215"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00216",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00217"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00216"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00217"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00218",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00219"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00218"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00219"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00220",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00221"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00220"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00221"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00222",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00223"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00222"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00223"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00224"
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
            "id": "guide.legacy.buildAdvisor.b00225"
          },
          "unit": "%",
          "strict": 190,
          "goal": 160,
          "base": 140
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00226"
          },
          "unit": "",
          "strict": 3500,
          "goal": 3200,
          "base": 3000
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00227"
          },
          "unit": "",
          "strict": 135,
          "goal": 101,
          "base": 100
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00228"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00229"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00010.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00010.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00010.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00010.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00216",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00217"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00218",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00219"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00220",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00221"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00222",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00223"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00011",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:ゼーレ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00011",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00011",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01083"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00011.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01084"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00011.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01085"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01086",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01087"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01086"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01087"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01088",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01089"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01088"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01089"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01090",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01091"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01090"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01091"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01092",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01093"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01092"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01093"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01094"
          },
          "unit": "%",
          "strict": 90,
          "goal": 80,
          "base": 70
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01095"
          },
          "unit": "",
          "strict": 143,
          "goal": 132,
          "base": 120
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01096"
          },
          "unit": "%",
          "strict": 180,
          "goal": 160,
          "base": 140
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01097"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b01098"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00011.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00011.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00011.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00011.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01086",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01087"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01088",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01089"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01090",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01091"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01092",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01093"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00012",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:景元",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00012",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00012",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01402"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00012.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01403"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00012.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01404"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01405",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01406"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01405"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01406"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01407",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01408"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01407"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01408"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01409",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01410"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01409"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01410"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01411",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01412"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01411"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01412"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01413"
          },
          "unit": "%",
          "strict": 70,
          "goal": 70,
          "base": 70
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01414"
          },
          "unit": "%",
          "strict": 140,
          "goal": 140,
          "base": 140
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01415"
          },
          "unit": "",
          "strict": 2500,
          "goal": 2500,
          "base": 2500
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01416"
          },
          "unit": "",
          "strict": 135,
          "goal": 135,
          "base": 135
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01417"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b01418"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00012.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00012.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00012.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00012.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01405",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01406"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01407",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01408"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01409",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01410"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01411",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01412"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00013",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:姫子",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00013",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00013",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00230"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00013.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00231"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00013.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00232"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00233",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00234"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00233"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00234"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00235",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00236"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00235"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00236"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00237",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00238"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00237"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00238"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00239",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00240"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00239"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00240"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00241"
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
            "id": "guide.legacy.buildAdvisor.b00242"
          },
          "unit": "%",
          "strict": 160,
          "goal": 130,
          "base": 110
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00243"
          },
          "unit": "",
          "strict": 134,
          "goal": 134,
          "base": 120
        },
        {
          "key": "attackPercent",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00244"
          },
          "unit": "%",
          "strict": 70,
          "goal": 55,
          "base": 40
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00245"
          },
          "unit": "",
          "strict": 3600,
          "goal": 3000,
          "base": 2700
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00246"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00247"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00013.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00013.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00013.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00013.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00233",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00234"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00235",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00236"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00237",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00238"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00239",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00240"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-09-05",
      "updatedAt": "2026-09-05",
      "profileId": "curated:batch15:himeko"
    },
    "legacyShape": {
      "fields": [
        "headline",
        "relicSet",
        "planarSet",
        "mainStats",
        "targets",
        "dataAsOf",
        "targetContext",
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00014",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:Dr.レイシオ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00014",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00014",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00589"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00014.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00590"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00014.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00591"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00592",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00593"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00592"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00593"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00594",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00595"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00594"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00595"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00596",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00597"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00596"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00597"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00598",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00599"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00598"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00599"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00600"
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
            "id": "guide.legacy.buildAdvisor.b00601"
          },
          "unit": "%",
          "strict": 170,
          "goal": 150,
          "base": 140
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00602"
          },
          "unit": "",
          "strict": 2900,
          "goal": 2600,
          "base": 2300
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00603"
          },
          "unit": "",
          "strict": 143,
          "goal": 134,
          "base": 120
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00604"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00605"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00014.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00014.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00014.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00014.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00592",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00593"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00594",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00595"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00596",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00597"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00598",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00599"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00015",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:トパーズ＆カブ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00015",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00015",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_hsr.b00001"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00015.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_hsr.b00002"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00015.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_hsr.b00003"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00014",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00015"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00014"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00015"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00016",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00017"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00016"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00017"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00018",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00019"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00018"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00019"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00020",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00021"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00020"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00021"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00001"
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
            "id": "guide.legacy.buildAdvisor.b00002"
          },
          "unit": "%",
          "strict": 180,
          "goal": 150,
          "base": 120
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00003"
          },
          "unit": "",
          "strict": 134,
          "goal": 134,
          "base": 120
        },
        {
          "key": "attackPercent",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00004"
          },
          "unit": "%",
          "strict": 70,
          "goal": 55,
          "base": 40
        }
      ],
      "sourceLabels": []
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00015.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00015.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00015.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00015.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00014",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00015"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00016",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00017"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00018",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00019"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00020",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00021"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00016",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:飲月",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00016",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00016",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_hsr.b00004"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00016.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_hsr.b00005"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00016.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_hsr.b00006"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00014",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00015"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00014"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00015"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00016",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00017"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00016"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00017"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00018",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00019"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00018"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00019"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00020",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00021"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00020"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00021"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00001"
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
            "id": "guide.legacy.buildAdvisor.b00002"
          },
          "unit": "%",
          "strict": 180,
          "goal": 150,
          "base": 120
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00003"
          },
          "unit": "",
          "strict": 134,
          "goal": 134,
          "base": 120
        },
        {
          "key": "attackPercent",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00004"
          },
          "unit": "%",
          "strict": 70,
          "goal": 55,
          "base": 40
        }
      ],
      "sourceLabels": []
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00016.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00016.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00016.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00016.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00014",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00015"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00016",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00017"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00018",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00019"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00020",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00021"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00017",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:刃",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00017",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00017",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01435"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00017.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01436"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00017.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01437"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01438",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01439"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01438"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01439"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01440",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01441"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01440"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01441"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01442",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01443"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01442"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01443"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01444",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01445"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01444"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01445"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01446"
          },
          "unit": "%",
          "strict": 84,
          "goal": 64,
          "base": 64
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01447"
          },
          "unit": "%",
          "strict": 180,
          "goal": 160,
          "base": 160
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01448"
          },
          "unit": "",
          "strict": 135,
          "goal": 135,
          "base": 135
        },
        {
          "key": "hp",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01449"
          },
          "unit": "",
          "strict": 7000,
          "goal": 6500,
          "base": 6500
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01450"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b01451"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00017.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00017.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00017.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00017.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01438",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01439"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01440",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01441"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01442",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01443"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01444",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01445"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00018",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:ブートヒル",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00018",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00018",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00263"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00018.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00264"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00018.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00265"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00266",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00267"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00266"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00267"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00268",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00269"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00268"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00269"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00270",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00271"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00270"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00271"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00272",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00273"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00272"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00273"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "breakEffect",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00274"
          },
          "unit": "%",
          "strict": 240,
          "goal": 200,
          "base": 180
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00275"
          },
          "unit": "",
          "strict": 160,
          "goal": 145,
          "base": 135
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00276"
          },
          "unit": "%",
          "strict": 55,
          "goal": 45,
          "base": 40
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00277"
          },
          "unit": "%",
          "strict": 70,
          "goal": 50,
          "base": 40
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00278"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00279"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00018.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00018.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00018.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00018.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00266",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00267"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00268",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00269"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00270",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00271"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00272",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00273"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00019",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:ルアン・メェイ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00019",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00019",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00280"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00019.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00281"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00019.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00282"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00283",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00284"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00283"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00284"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00285",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00286"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00285"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00286"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00287",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00288"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00287"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00288"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00289",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00290"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00289"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00290"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "breakEffect",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00291"
          },
          "unit": "%",
          "strict": 180,
          "goal": 160,
          "base": 140
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00292"
          },
          "unit": "",
          "strict": 145,
          "goal": 134,
          "base": 120
        },
        {
          "key": "effectRes",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00293"
          },
          "unit": "%",
          "strict": 40,
          "goal": 30,
          "base": 20
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00294"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00295"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00019.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00019.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00019.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00019.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00283",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00284"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00285",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00286"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00287",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00288"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00289",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00290"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00020",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:花火",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00020",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00020",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00556"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00020.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00557"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00020.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00558"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00559",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00560"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00559"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00560"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00561",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00562"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00561"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00562"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00563",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00564"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00563"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00564"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00565",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00566"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00565"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00566"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00567"
          },
          "unit": "%",
          "strict": 230,
          "goal": 200,
          "base": 180
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00568"
          },
          "unit": "",
          "strict": 200,
          "goal": 184,
          "base": 168
        },
        {
          "key": "effectRes",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00569"
          },
          "unit": "%",
          "strict": 40,
          "goal": 30,
          "base": 20
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00570"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00571"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00020.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00020.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00020.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00020.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00559",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00560"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00561",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00562"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00563",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00564"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00565",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00566"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00021",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:ブローニャ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00021",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00021",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00657"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00021.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00658"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00021.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00659"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00660",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00661"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00660"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00661"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00662",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00663"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00662"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00663"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00664",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00665"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00664"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00665"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00666",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00667"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00666"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00667"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00668"
          },
          "unit": "%",
          "strict": 180,
          "goal": 150,
          "base": 120
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00669"
          },
          "unit": "",
          "strict": 160,
          "goal": 134,
          "base": 120
        },
        {
          "key": "effectRes",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00670"
          },
          "unit": "%",
          "strict": 45,
          "goal": 30,
          "base": 20
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00671"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00672"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00021.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00021.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00021.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00021.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00660",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00661"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00662",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00663"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00664",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00665"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00666",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00667"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00022",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:符玄",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00022",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00022",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00688"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00022.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00689"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00022.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00690"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00691",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00692"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00691"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00692"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00693",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00694"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00693"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00694"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00695",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00696"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00695"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00696"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00697",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00698"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00697"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00698"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "hp",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00699"
          },
          "unit": "",
          "strict": 8000,
          "goal": 7000,
          "base": 6500
        },
        {
          "key": "defense",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00700"
          },
          "unit": "",
          "strict": 1600,
          "goal": 1500,
          "base": 1400
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00701"
          },
          "unit": "",
          "strict": 143,
          "goal": 134,
          "base": 120
        },
        {
          "key": "effectRes",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00702"
          },
          "unit": "%",
          "strict": 40,
          "goal": 30,
          "base": 20
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00703"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00704"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00022.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00022.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00022.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00022.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00691",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00692"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00693",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00694"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00695",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00696"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00697",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00698"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00023",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:アベンチュリン",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00023",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00023",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00523"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00023.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00524"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00023.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00525"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00526",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00527"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00526"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00527"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00528",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00529"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00528"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00529"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00530",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00531"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00530"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00531"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00532",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00533"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00532"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00533"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "defense",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00534"
          },
          "unit": "",
          "strict": 4300,
          "goal": 4000,
          "base": 3700
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00535"
          },
          "unit": "",
          "strict": 143,
          "goal": 134,
          "base": 120
        },
        {
          "key": "effectRes",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00536"
          },
          "unit": "%",
          "strict": 40,
          "goal": 30,
          "base": 20
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00537"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00538"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00023.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00023.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00023.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00023.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00526",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00527"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00528",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00529"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00530",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00531"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00532",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00533"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00024",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:フォフォ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00024",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00024",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01181"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00024.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01182"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00024.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01183"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01184",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01185"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01184"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01185"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01186",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01187"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01186"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01187"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01188",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01189"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01188"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01189"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01190",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01191"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01190"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01191"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "hp",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01192"
          },
          "unit": "",
          "strict": 7000,
          "goal": 6500,
          "base": 6000
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01193"
          },
          "unit": "",
          "strict": 143,
          "goal": 134,
          "base": 120
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01194"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b01195"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00024.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00024.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00024.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00024.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01184",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01185"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01186",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01187"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01188",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01189"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01190",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01191"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00025",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:ギャラガー",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00025",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00025",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00803"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00025.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00804"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00025.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00805"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00806",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00807"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00806"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00807"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00808",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00809"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00808"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00809"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00810",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00811"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00810"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00811"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00812",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00813"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00812"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00813"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00814"
          },
          "unit": "",
          "strict": 160,
          "goal": 143,
          "base": 134
        },
        {
          "key": "breakEffect",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00815"
          },
          "unit": "%",
          "strict": 150,
          "goal": 120,
          "base": 60
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00816"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00817"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00025.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00025.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00025.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00025.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00806",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00807"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00808",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00809"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00810",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00811"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00812",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00813"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00026",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:キャストリス",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00026",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00026",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00338"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00026.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00339"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00026.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00340"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00341",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00342"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00341"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00342"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00343",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00344"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00343"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00344"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00345",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00346"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00345"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00346"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00347",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00348"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00347"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00348"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00349"
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
            "id": "guide.legacy.buildAdvisor.b00350"
          },
          "unit": "%",
          "strict": 220,
          "goal": 180,
          "base": 150
        },
        {
          "key": "hp",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00351"
          },
          "unit": "",
          "strict": 10000,
          "goal": 8500,
          "base": 7500
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00352"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00353"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00026.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00026.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00026.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00026.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00341",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00342"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00343",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00344"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00345",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00346"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00347",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00348"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00027",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:アグライア",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00027",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00027",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00354"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00027.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00355"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00027.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00356"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00357",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00358"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00357"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00358"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00359",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00360"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00359"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00360"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00361",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00362"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00361"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00362"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00363",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00364"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00363"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00364"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00365"
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
            "id": "guide.legacy.buildAdvisor.b00366"
          },
          "unit": "%",
          "strict": 190,
          "goal": 160,
          "base": 130
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00367"
          },
          "unit": "",
          "strict": 160,
          "goal": 134,
          "base": 120
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00368"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00369"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00027.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00027.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00027.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00027.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00357",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00358"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00359",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00360"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00361",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00362"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00363",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00364"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00028",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:アナイクス",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00028",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00028",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00370"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00028.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00371"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00028.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00372"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00373",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00374"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00373"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00374"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00375",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00376"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00375"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00376"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00377",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00378"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00377"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00378"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00379",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00380"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00379"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00380"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00381"
          },
          "unit": "%",
          "strict": 100,
          "goal": 80,
          "base": 70
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00382"
          },
          "unit": "%",
          "strict": 150,
          "goal": 120,
          "base": 100
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00383"
          },
          "unit": "",
          "strict": 135,
          "goal": 134,
          "base": 120
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00384"
          },
          "unit": "",
          "strict": 2800,
          "goal": 2500,
          "base": 2200
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00385"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00386"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00028.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00028.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00028.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00028.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00373",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00374"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00375",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00376"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00377",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00378"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00379",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00380"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00029",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:飛霄",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00029",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00029",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00387"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00029.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00388"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00029.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00389"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00390",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00391"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00390"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00391"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00392",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00393"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00392"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00393"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00394",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00395"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00394"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00395"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00396",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00397"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00396"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00397"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00398"
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
            "id": "guide.legacy.buildAdvisor.b00399"
          },
          "unit": "%",
          "strict": 180,
          "goal": 140,
          "base": 120
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00400"
          },
          "unit": "",
          "strict": 3400,
          "goal": 2900,
          "base": 2600
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00401"
          },
          "unit": "",
          "strict": 160,
          "goal": 134,
          "base": 120
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00402"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00403"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00029.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00029.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00029.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00029.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00390",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00391"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00392",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00393"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00394",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00395"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00396",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00397"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00030",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:雲璃",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00030",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00030",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01323"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00030.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01324"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00030.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01325"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01326",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01327"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01326"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01327"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01328",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01329"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01328"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01329"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01330",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01331"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01330"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01331"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01332",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01333"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01332"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01333"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01334"
          },
          "unit": "%",
          "strict": 80,
          "goal": 80,
          "base": 80
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01335"
          },
          "unit": "%",
          "strict": 180,
          "goal": 156,
          "base": 156
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01336"
          },
          "unit": "",
          "strict": 3500,
          "goal": 3400,
          "base": 3400
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01337"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b01338"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00030.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00030.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00030.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00030.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01326",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01327"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01328",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01329"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01330",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01331"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01332",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01333"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00031",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:霊砂",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00031",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00031",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00404"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00031.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00405"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00031.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00406"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00407",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00408"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00407"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00408"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00409",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00410"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00409"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00410"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00411",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00412"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00411"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00412"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00413",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00414"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00413"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00414"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "breakEffect",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00415"
          },
          "unit": "%",
          "strict": 170,
          "goal": 140,
          "base": 120
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00416"
          },
          "unit": "",
          "strict": 160,
          "goal": 160,
          "base": 145
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00417"
          },
          "unit": "",
          "strict": 3000,
          "goal": 2700,
          "base": 2400
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00418"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00419"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00031.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00031.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00031.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00031.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00407",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00408"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00409",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00410"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00411",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00412"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00413",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00414"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00032",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:椒丘",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00032",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00032",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01552"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00032.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01553"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00032.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01554"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01555",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01556"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01555"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01556"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01557",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01558"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01557"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01558"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01559",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01560"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01559"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01560"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01561",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01562"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01561"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01562"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "effectHitRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01563"
          },
          "unit": "%",
          "strict": 140,
          "goal": 140,
          "base": 140
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01564"
          },
          "unit": "",
          "strict": 160,
          "goal": 160,
          "base": 160
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01565"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b01566"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00032.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00032.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00032.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00032.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01555",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01556"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01557",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01558"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01559",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01560"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01561",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01562"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-21",
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00033",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:ブラックスワン",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00033",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00033",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00623"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00033.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00624"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00033.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00625"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00626",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00627"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00626"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00627"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00628",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00629"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00628"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00629"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00630",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00631"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00630"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00631"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00632",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00633"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00632"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00633"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "effectHitRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00634"
          },
          "unit": "%",
          "strict": 130,
          "goal": 120,
          "base": 100
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00635"
          },
          "unit": "",
          "strict": 3900,
          "goal": 3600,
          "base": 3200
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00636"
          },
          "unit": "",
          "strict": 160,
          "goal": 143,
          "base": 135
        },
        {
          "key": "hp",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00637"
          },
          "unit": "",
          "strict": 3400,
          "goal": 3000,
          "base": 2800
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00638"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00639"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00033.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00033.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00033.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00033.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00626",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00627"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00628",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00629"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00630",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00631"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00632",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00633"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00034",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:サンデー",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00034",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00034",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00448"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00034.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00449"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00034.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00450"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00451",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00452"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00451"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00452"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00453",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00454"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00453"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00454"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00455",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00456"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00455"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00456"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00457",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00458"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00457"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00458"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00459"
          },
          "unit": "%",
          "strict": 220,
          "goal": 200,
          "base": 180
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00460"
          },
          "unit": "",
          "strict": 160,
          "goal": 134,
          "base": 120
        },
        {
          "key": "effectRes",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00461"
          },
          "unit": "%",
          "strict": 40,
          "goal": 30,
          "base": 20
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00462"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00463"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00034.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00034.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00034.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00034.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00451",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00452"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00453",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00454"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00455",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00456"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00457",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00458"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00035",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:ロビン",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00035",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00035",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00464"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00035.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00465"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00035.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00466"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00467",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00468"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00467"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00468"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00469",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00470"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00469"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00470"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00471",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00472"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00471"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00472"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00473",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00474"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00473"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00474"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00475"
          },
          "unit": "",
          "strict": 4300,
          "goal": 4000,
          "base": 3600
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00476"
          },
          "unit": "",
          "strict": 134,
          "goal": 120,
          "base": 110
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00477"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00478"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00035.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00035.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00035.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00035.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00467",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00468"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00469",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00470"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00471",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00472"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00473",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00474"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00036",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:クラーラ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00036",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00036",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00860"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00036.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00861"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00036.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00862"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00863",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00864"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00863"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00864"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00865",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00866"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00865"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00866"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00867",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00868"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00867"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00868"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00869",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00870"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00869"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00870"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00871"
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
            "id": "guide.legacy.buildAdvisor.b00872"
          },
          "unit": "%",
          "strict": 190,
          "goal": 160,
          "base": 130
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00873"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00874"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00036.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00036.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00036.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00036.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00863",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00864"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00865",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00866"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00867",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00868"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00869",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00870"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-21",
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00037",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:サフェル",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00037",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00037",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00891"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00037.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00892"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00037.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00893"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00894",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00895"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00894"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00895"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00896",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00897"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00896"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00897"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00898",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00899"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00898"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00899"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00900",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00901"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00900"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00901"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00902"
          },
          "unit": "",
          "strict": 180,
          "goal": 170,
          "base": 160
        },
        {
          "key": "effectHitRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00903"
          },
          "unit": "%",
          "strict": 50,
          "goal": 39,
          "base": 30
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00904"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00905"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00037.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00037.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00037.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00037.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00894",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00895"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00896",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00897"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00898",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00899"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00900",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00901"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00038",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:マダム・ヘルタ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00038",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00038",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01238"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00038.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01239"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00038.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01240"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01241",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01242"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01241"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01242"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01243",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01244"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01243"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01244"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01245",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01246"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01245"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01246"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01247",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01248"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01247"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01248"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01249"
          },
          "unit": "%",
          "strict": 100,
          "goal": 100,
          "base": 88
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01250"
          },
          "unit": "",
          "strict": 143,
          "goal": 134,
          "base": 120
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01251"
          },
          "unit": "",
          "strict": 3200,
          "goal": 2800,
          "base": 2600
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01252"
          },
          "unit": "%",
          "strict": 160,
          "goal": 120,
          "base": 100
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01253"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b01254"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00038.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00038.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00038.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00038.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01241",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01242"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01243",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01244"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01245",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01246"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01247",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01248"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00039",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:トパーズ&カブ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00039",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00039",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00539"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00039.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00540"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00039.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00541"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00542",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00543"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00542"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00543"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00544",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00545"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00544"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00545"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00546",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00547"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00546"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00547"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00548",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00549"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00548"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00549"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00550"
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
            "id": "guide.legacy.buildAdvisor.b00551"
          },
          "unit": "%",
          "strict": 170,
          "goal": 150,
          "base": 140
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00552"
          },
          "unit": "",
          "strict": 2800,
          "goal": 2500,
          "base": 2100
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00553"
          },
          "unit": "",
          "strict": 143,
          "goal": 134,
          "base": 120
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00554"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00555"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00039.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00039.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00039.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00039.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00542",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00543"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00544",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00545"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00546",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00547"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00548",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00549"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00040",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:丹恒・飲月",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00040",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00040",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00572"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00040.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00573"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00040.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00574"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00575",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00576"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00575"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00576"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00577",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00578"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00577"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00578"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00579",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00580"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00579"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00580"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00581",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00582"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00581"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00582"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00583"
          },
          "unit": "%",
          "strict": 85,
          "goal": 75,
          "base": 70
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00584"
          },
          "unit": "%",
          "strict": 165,
          "goal": 145,
          "base": 140
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00585"
          },
          "unit": "",
          "strict": 2600,
          "goal": 2500,
          "base": 2200
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00586"
          },
          "unit": "",
          "strict": 134,
          "goal": 102,
          "base": 102
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00587"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00588"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00040.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00040.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00040.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00040.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00575",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00576"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00577",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00578"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00579",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00580"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00581",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00582"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00041",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:鏡流",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00041",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00041",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00640"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00041.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00641"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00041.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00642"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00643",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00644"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00643"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00644"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00645",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00646"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00645"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00646"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00647",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00648"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00647"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00648"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00649",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00650"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00649"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00650"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "hp",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00651"
          },
          "unit": "",
          "strict": 7000,
          "goal": 6000,
          "base": 5500
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00652"
          },
          "unit": "%",
          "strict": 50,
          "goal": 45,
          "base": 40
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00653"
          },
          "unit": "%",
          "strict": 180,
          "goal": 150,
          "base": 130
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00654"
          },
          "unit": "",
          "strict": 135,
          "goal": 96,
          "base": 96
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00655"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00656"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00041.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00041.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00041.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00041.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00643",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00644"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00645",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00646"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00647",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00648"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00649",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00650"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00042",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:羅刹",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00042",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00042",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00705"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00042.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00706"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00042.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00707"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00708",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00709"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00708"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00709"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00710",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00711"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00710"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00711"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00712",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00713"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00712"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00713"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00714",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00715"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00714"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00715"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00716"
          },
          "unit": "",
          "strict": 2800,
          "goal": 2400,
          "base": 2000
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00717"
          },
          "unit": "",
          "strict": 143,
          "goal": 135,
          "base": 120
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00718"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00719"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00042.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00042.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00042.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00042.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00708",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00709"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00710",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00711"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00712",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00713"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00714",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00715"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00043",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:アーチャー",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00043",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00043",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00720"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00043.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00721"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00043.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00722"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00723",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00724"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00723"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00724"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00725",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00726"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00725"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00726"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00727",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00728"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00727"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00728"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00729",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00730"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00729"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00730"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00731"
          },
          "unit": "%",
          "strict": 100,
          "goal": 100,
          "base": 90
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00732"
          },
          "unit": "%",
          "strict": 150,
          "goal": 120,
          "base": 100
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00733"
          },
          "unit": "",
          "strict": 3000,
          "goal": 2600,
          "base": 2300
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00734"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00735"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00043.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00043.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00043.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00043.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00723",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00724"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00725",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00726"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00727",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00728"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00729",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00730"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00044",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:アーラン",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00044",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00044",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00736"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00044.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00737"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00044.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00738"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00739",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00740"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00739"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00740"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00741",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00742"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00741"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00742"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00743",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00744"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00743"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00744"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00745",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00746"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00745"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00746"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00747"
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
            "id": "guide.legacy.buildAdvisor.b00748"
          },
          "unit": "%",
          "strict": 140,
          "goal": 120,
          "base": 100
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00749"
          },
          "unit": "",
          "strict": 2800,
          "goal": 2500,
          "base": 2400
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00750"
          },
          "unit": "",
          "strict": 143,
          "goal": 135,
          "base": 134
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00751"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00752"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00044.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00044.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00044.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00044.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00739",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00740"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00741",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00742"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00743",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00744"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00745",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00746"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00045",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:アスター",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00045",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00045",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00753"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00045.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00754"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00045.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00755"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00756",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00757"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00756"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00757"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00758",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00759"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00758"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00759"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00760",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00761"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00760"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00761"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00762",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00763"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00762"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00763"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00764"
          },
          "unit": "",
          "strict": 160,
          "goal": 134,
          "base": 120
        },
        {
          "key": "hp",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00765"
          },
          "unit": "",
          "strict": 4500,
          "goal": 3800,
          "base": 3400
        },
        {
          "key": "defense",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00766"
          },
          "unit": "",
          "strict": 1200,
          "goal": 1000,
          "base": 850
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00767"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00768"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00045.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00045.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00045.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00045.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00756",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00757"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00758",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00759"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00760",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00761"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00762",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00763"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00046",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:アルジェンティ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00046",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00046",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00769"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00046.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00770"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00046.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00771"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00772",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00773"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00772"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00773"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00774",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00775"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00774"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00775"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00776",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00777"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00776"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00777"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00778",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00779"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00778"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00779"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00780"
          },
          "unit": "%",
          "strict": 80,
          "goal": 60,
          "base": 50
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00781"
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
            "id": "guide.legacy.buildAdvisor.b00782"
          },
          "unit": "",
          "strict": 3000,
          "goal": 2500,
          "base": 2200
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00783"
          },
          "unit": "",
          "strict": 143,
          "goal": 134,
          "base": 110
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00784"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00785"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00046.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00046.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00046.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00046.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00772",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00773"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00774",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00775"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00776",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00777"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00778",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00779"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00047",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:ヴェルト",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00047",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00047",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00786"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00047.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00787"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00047.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00788"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00789",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00790"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00789"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00790"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00791",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00792"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00791"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00792"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00793",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00794"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00793"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00794"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00795",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00796"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00795"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00796"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00797"
          },
          "unit": "",
          "strict": 2800,
          "goal": 2500,
          "base": 2200
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00798"
          },
          "unit": "",
          "strict": 143,
          "goal": 135,
          "base": 120
        },
        {
          "key": "effectHitRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00799"
          },
          "unit": "%",
          "strict": 100,
          "goal": 80,
          "base": 60
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00800"
          },
          "unit": "%",
          "strict": 150,
          "goal": 120,
          "base": 100
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00801"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00802"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00047.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00047.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00047.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00047.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00789",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00790"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00791",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00792"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00793",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00794"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00795",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00796"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00048",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:キュレネ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00048",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00048",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00818"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00048.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00819"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00048.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00820"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00821",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00822"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00821"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00822"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00823",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00824"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00823"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00824"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00825",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00826"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00825"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00826"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00827",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00828"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00827"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00828"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00829"
          },
          "unit": "",
          "strict": 200,
          "goal": 180,
          "base": 160
        },
        {
          "key": "hp",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00830"
          },
          "unit": "",
          "strict": 4500,
          "goal": 4000,
          "base": 3600
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00831"
          },
          "unit": "%",
          "strict": 60,
          "goal": 50,
          "base": 40
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00832"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00833"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00048.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00048.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00048.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00048.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00821",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00822"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00823",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00824"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00825",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00826"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00827",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00828"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00049",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:ギルガメッシュ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00049",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00049",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00834"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00049.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00835"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00049.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00836"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00837",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00838"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00837"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00838"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00839",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00840"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00839"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00840"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00841",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00842"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00841"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00842"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00843",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00844"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00843"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00844"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00845"
          },
          "unit": "",
          "strict": 3000,
          "goal": 2800,
          "base": 2600
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00846"
          },
          "unit": "%",
          "strict": 150,
          "goal": 120,
          "base": 100
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00847"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00848"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00049.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00049.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00049.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00049.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00837",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00838"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00839",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00840"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00841",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00842"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00843",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00844"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00050",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:ケリュドラ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00050",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00050",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00875"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00050.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00876"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00050.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00877"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00878",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00879"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00878"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00879"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00880",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00881"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00880"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00881"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00882",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00883"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00882"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00883"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00884",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00885"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00884"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00885"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00886"
          },
          "unit": "",
          "strict": 4300,
          "goal": 4000,
          "base": 3600
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00887"
          },
          "unit": "%",
          "strict": 180,
          "goal": 160,
          "base": 140
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00888"
          },
          "unit": "",
          "strict": 160,
          "goal": 134,
          "base": 120
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00889"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00890"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00050.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00050.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00050.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00050.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00878",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00879"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00880",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00881"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00882",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00883"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00884",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00885"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00051",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:サンポ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00051",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00051",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00906"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00051.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00907"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00051.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00908"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00909",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00910"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00909"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00910"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00911",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00912"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00911"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00912"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00913",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00914"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00913"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00914"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00915",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00916"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00915"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00916"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "effectHitRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00917"
          },
          "unit": "%",
          "strict": 80,
          "goal": 67,
          "base": 60
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00918"
          },
          "unit": "",
          "strict": 3000,
          "goal": 2600,
          "base": 2300
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00919"
          },
          "unit": "",
          "strict": 160,
          "goal": 135,
          "base": 120
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00920"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00921"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00051.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00051.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00051.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00051.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00909",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00910"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00911",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00912"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00913",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00914"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00915",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00916"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-14",
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00052",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:セイバー",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00052",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00052",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00922"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00052.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00923"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00052.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00924"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00925",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00926"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00925"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00926"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00927",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00928"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00927"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00928"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00929",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00930"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00929"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00930"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00931",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00932"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00931"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00932"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00933"
          },
          "unit": "%",
          "strict": 80,
          "goal": 70,
          "base": 50
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00934"
          },
          "unit": "",
          "strict": 143,
          "goal": 134,
          "base": 120
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00935"
          },
          "unit": "%",
          "strict": 200,
          "goal": 170,
          "base": 140
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00936"
          },
          "unit": "",
          "strict": 2700,
          "goal": 2400,
          "base": 2200
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00937"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00938"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00052.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00052.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00052.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00052.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00925",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00926"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00927",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00928"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00929",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00930"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00931",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00932"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00053",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:セイレンス",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00053",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00053",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00939"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00053.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00940"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00053.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00941"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00942",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00943"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00942"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00943"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00944",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00945"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00944"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00945"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00946",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00947"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00946"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00947"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00948",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00949"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00948"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00949"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "effectHitRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00950"
          },
          "unit": "%",
          "strict": 140,
          "goal": 120,
          "base": 100
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00951"
          },
          "unit": "",
          "strict": 3600,
          "goal": 3300,
          "base": 3000
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00952"
          },
          "unit": "",
          "strict": 160,
          "goal": 134,
          "base": 120
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00953"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00954"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00053.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00053.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00053.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00053.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00942",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00943"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00944",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00945"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00946",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00947"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00948",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00949"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00054",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:ジェイド",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00054",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00054",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00955"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00054.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00956"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00054.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00957"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00958",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00959"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00958"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00959"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00960",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00961"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00960"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00961"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00962",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00963"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00962"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00963"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00964",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00965"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00964"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00965"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00966"
          },
          "unit": "%",
          "strict": 90,
          "goal": 85,
          "base": 85
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00967"
          },
          "unit": "%",
          "strict": 123,
          "goal": 111,
          "base": 111
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00968"
          },
          "unit": "",
          "strict": 3190,
          "goal": 3090,
          "base": 3090
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00969"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00970"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00054.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00054.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00054.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00054.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00958",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00959"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00960",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00961"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00962",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00963"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00964",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00965"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
      "updatedAt": "2026-09-11"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00055",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:ジェパード",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00055",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00055",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00971"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00055.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00972"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00055.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00973"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00974",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00975"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00974"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00975"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00976",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00977"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00976"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00977"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00978",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00979"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00978"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00979"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00980",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00981"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00980"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00981"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "effectHitRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00982"
          },
          "unit": "%",
          "strict": 50,
          "goal": 50,
          "base": 50
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00983"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b00984"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00055.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00055.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00055.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00055.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00974",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00975"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00976",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00977"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00978",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00979"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00980",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00981"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-21",
      "updatedAt": "2026-09-11"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00056",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:千冶・刃",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00056",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00056",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b00985"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00056.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00986"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00056.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00987"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00988",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00989"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00988"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00989"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00990",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00991"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00990"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00991"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00992",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00993"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00992"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00993"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b00994",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b00995"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00994"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00995"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00996"
          },
          "unit": "%",
          "strict": 80,
          "goal": 80,
          "base": 80
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00997"
          },
          "unit": "%",
          "strict": 120,
          "goal": 96,
          "base": 96
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00998"
          },
          "unit": "",
          "strict": 141,
          "goal": 141,
          "base": 138
        },
        {
          "key": "hp",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b00999"
          },
          "unit": "",
          "strict": 7000,
          "goal": 6800,
          "base": 5000
        },
        {
          "key": "effectHitRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01000"
          },
          "unit": "%",
          "strict": 67,
          "goal": 67,
          "base": 67
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01001"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b01002"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00056.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00056.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00056.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00056.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00988",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00989"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00990",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00991"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00992",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00993"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b00994",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b00995"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-09-11",
      "updatedAt": "2026-09-11"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00057",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:姫子・旅立ち",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00057",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00057",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01003"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00057.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01004"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00057.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01005"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01006",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01007"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01006"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01007"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01008",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01009"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01008"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01009"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01010",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01011"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01010"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01011"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01012",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01013"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01012"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01013"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01014"
          },
          "unit": "%",
          "strict": 100,
          "goal": 100,
          "base": 100
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01015"
          },
          "unit": "",
          "strict": 134,
          "goal": 134,
          "base": 134
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01016"
          },
          "unit": "%",
          "strict": 90,
          "goal": 70,
          "base": 70
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01017"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b01018"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00057.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00057.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00057.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00057.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01006",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01007"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01008",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01009"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01010",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01011"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01012",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01013"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-09-11",
      "updatedAt": "2026-09-11"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00058",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:ロビン・夏空の歌",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00058",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00058",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01019"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00058.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01020"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00058.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01021"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01022",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01023"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01022"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01023"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01024",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01025"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01024"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01025"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01026",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01027"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01026"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01027"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01028",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01029"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01028"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01029"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01030"
          },
          "unit": "",
          "strict": 150,
          "goal": 142,
          "base": 142
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01031"
          },
          "unit": "%",
          "strict": 50,
          "goal": 50,
          "base": 50
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01032"
          },
          "unit": "%",
          "strict": 75,
          "goal": 60,
          "base": 60
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01033"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b01034"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00058.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00058.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00058.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00058.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01022",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01023"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01024",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01025"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01026",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01027"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01028",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01029"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-09-11",
      "updatedAt": "2026-09-11"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00059",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:アベンチュリン・波と戯れる夏",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00059",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00059",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01035"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00059.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01036"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00059.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01037"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01038",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01039"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01038"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01039"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01040",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01041"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01040"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01041"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01042",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01043"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01042"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01043"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01044",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01045"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01044"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01045"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01046"
          },
          "unit": "%",
          "strict": 100,
          "goal": 100,
          "base": 100
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01047"
          },
          "unit": "",
          "strict": 168,
          "goal": 160,
          "base": 154
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01048"
          },
          "unit": "%",
          "strict": 140,
          "goal": 130,
          "base": 110
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01049"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b01050"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00059.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00059.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00059.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00059.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01038",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01039"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01040",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01041"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01042",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01043"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01044",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01045"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-09-24",
      "updatedAt": "2026-09-24"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00060",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:パール",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00060",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00060",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01051"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00060.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01052"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00060.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01053"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01054",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01055"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01054"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01055"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01056",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01057"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01056"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01057"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01058",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01059"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01058"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01059"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01060",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01061"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01060"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01061"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "defense",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01062"
          },
          "unit": "",
          "strict": 3600,
          "goal": 3600,
          "base": 2400
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01063"
          },
          "unit": "",
          "strict": 174,
          "goal": 173,
          "base": 157
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01064"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b01065"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00060.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00060.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00060.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00060.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01054",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01055"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01056",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01057"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01058",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01059"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01060",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01061"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-09-28",
      "updatedAt": "2026-09-28"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00061",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:セーバル",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00061",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00061",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01066"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00061.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01067"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00061.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01068"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01069",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01070"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01069"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01070"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01071",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01072"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01071"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01072"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01073",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01074"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01073"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01074"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01075",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01076"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01075"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01076"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01077"
          },
          "unit": "",
          "strict": 2600,
          "goal": 2400,
          "base": 2200
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01078"
          },
          "unit": "%",
          "strict": 75,
          "goal": 70,
          "base": 65
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01079"
          },
          "unit": "%",
          "strict": 150,
          "goal": 140,
          "base": 130
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01080"
          },
          "unit": "",
          "strict": 143,
          "goal": 134,
          "base": 120
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01081"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b01082"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00061.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00061.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00061.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00061.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01069",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01070"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01071",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01072"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01073",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01074"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01075",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01076"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00062",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:ダリア",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00062",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00062",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01099"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00062.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01100"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00062.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01101"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01102",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01103"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01102"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01103"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01104",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01105"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01104"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01105"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01106",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01107"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01106"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01107"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01108",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01109"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01108"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01109"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01110"
          },
          "unit": "",
          "strict": 145,
          "goal": 134,
          "base": 120
        },
        {
          "key": "breakEffect",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01111"
          },
          "unit": "%",
          "strict": 200,
          "goal": 150,
          "base": 120
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01112"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b01113"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00062.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00062.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00062.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00062.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01102",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01103"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01104",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01105"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01106",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01107"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01108",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01109"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00063",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:トリビー",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00063",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00063",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01114"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00063.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01115"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00063.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01116"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01117",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01118"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01117"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01118"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01119",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01120"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01119"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01120"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01121",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01122"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01121"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01122"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01123",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01124"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01123"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01124"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01125"
          },
          "unit": "%",
          "strict": 75,
          "goal": 68,
          "base": 60
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01126"
          },
          "unit": "%",
          "strict": 180,
          "goal": 160,
          "base": 140
        },
        {
          "key": "hp",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01127"
          },
          "unit": "",
          "strict": 5500,
          "goal": 5000,
          "base": 4500
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01128"
          },
          "unit": "",
          "strict": 136,
          "goal": 95,
          "base": 95
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01129"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b01130"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00063.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00063.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00063.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00063.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01117",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01118"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01119",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01120"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01121",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01122"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01123",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01124"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00064",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:ナターシャ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00064",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00064",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01131"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00064.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01132"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00064.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01133"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01134",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01135"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01134"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01135"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01136",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01137"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01136"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01137"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01138",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01139"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01138"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01139"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01140",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01141"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01140"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01141"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01142"
          },
          "unit": "",
          "strict": 134,
          "goal": 120,
          "base": 110
        },
        {
          "key": "effectRes",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01143"
          },
          "unit": "%",
          "strict": 40,
          "goal": 30,
          "base": 20
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01144"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b01145"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00064.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00064.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00064.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00064.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01134",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01135"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01136",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01137"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01138",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01139"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01140",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01141"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00065",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:ヒアンシー",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00065",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00065",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01146"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00065.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01147"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00065.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01148"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01149",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01150"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01149"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01150"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01151",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01152"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01151"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01152"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01153",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01154"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01153"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01154"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01155",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01156"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01155"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01156"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "hp",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01157"
          },
          "unit": "",
          "strict": 5000,
          "goal": 4300,
          "base": 4000
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01158"
          },
          "unit": "%",
          "strict": 140,
          "goal": 120,
          "base": 100
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01159"
          },
          "unit": "",
          "strict": 180,
          "goal": 160,
          "base": 134
        },
        {
          "key": "effectRes",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01160"
          },
          "unit": "%",
          "strict": 40,
          "goal": 32,
          "base": 20
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01161"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b01162"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00065.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00065.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00065.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00065.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01149",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01150"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01151",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01152"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01153",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01154"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01155",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01156"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00066",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:ファイノン",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00066",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00066",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01163"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00066.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01164"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00066.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01165"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01166",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01167"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01166"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01167"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01168",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01169"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01168"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01169"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01170",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01171"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01170"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01171"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01172",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01173"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01172"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01173"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01174"
          },
          "unit": "",
          "strict": 2600,
          "goal": 2400,
          "base": 2200
        },
        {
          "key": "hp",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01175"
          },
          "unit": "",
          "strict": 3600,
          "goal": 3200,
          "base": 3000
        },
        {
          "key": "defense",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01176"
          },
          "unit": "",
          "strict": 1100,
          "goal": 1000,
          "base": 900
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01177"
          },
          "unit": "%",
          "strict": 100,
          "goal": 95,
          "base": 90
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01178"
          },
          "unit": "%",
          "strict": 180,
          "goal": 170,
          "base": 160
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01179"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b01180"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00066.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00066.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00066.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00066.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01166",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01167"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01168",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01169"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01170",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01171"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01172",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01173"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00067",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:フック",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00067",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00067",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01196"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00067.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01197"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00067.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01198"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01199",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01200"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01199"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01200"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01201",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01202"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01201"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01202"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01203",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01204"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01203"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01204"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01205",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01206"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01205"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01206"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01207"
          },
          "unit": "",
          "strict": 143,
          "goal": 135,
          "base": 120
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01208"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b01209"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00067.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00067.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00067.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00067.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01199",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01200"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01201",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01202"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01203",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01204"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01205",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01206"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-11",
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00068",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:ペラ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00068",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00068",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01210"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00068.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01211"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00068.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01212"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01213",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01214"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01213"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01214"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01215",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01216"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01215"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01216"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01217",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01218"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01217"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01218"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01219",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01220"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01219"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01220"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "effectHitRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01221"
          },
          "unit": "%",
          "strict": 80,
          "goal": 67,
          "base": 60
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01222"
          },
          "unit": "",
          "strict": 143,
          "goal": 134,
          "base": 120
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01223"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b01224"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00068.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00068.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00068.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00068.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01213",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01214"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01215",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01216"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01217",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01218"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01219",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01220"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-21",
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00069",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:ヘルタ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00069",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00069",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01225"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00069.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01226"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00069.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01227"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01228",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01229"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01228"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01229"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01230",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01231"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01230"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01231"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01232",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01233"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01232"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01233"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01234",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01235"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01234"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01235"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01236"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b01237"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00069.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00069.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00069.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00069.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01228",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01229"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01230",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01231"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01232",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01233"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01234",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01235"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-11",
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00070",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:ミーシャ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00070",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00070",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01255"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00070.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01256"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00070.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01257"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01258",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01259"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01258"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01259"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01260",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01261"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01260"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01261"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01262",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01263"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01262"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01263"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01264",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01265"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01264"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01265"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01266"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b01267"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00070.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00070.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00070.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00070.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01258",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01259"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01260",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01261"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01262",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01263"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01264",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01265"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-21",
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00071",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:モーディス",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00071",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00071",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01268"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00071.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01269"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00071.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01270"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01271",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01272"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01271"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01272"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01273",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01274"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01273"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01274"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01275",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01276"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01275"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01276"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01277",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01278"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01277"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01278"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01279"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b01280"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00071.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00071.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00071.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00071.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01271",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01272"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01273",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01274"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01275",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01276"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01277",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01278"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-11",
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00072",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:モゼ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00072",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00072",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01281"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00072.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01282"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00072.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01283"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01284",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01285"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01284"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01285"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01286",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01287"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01286"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01287"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01288",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01289"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01288"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01289"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01290",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01291"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01290"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01291"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01292"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b01293"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00072.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00072.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00072.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00072.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01284",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01285"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01286",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01287"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01288",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01289"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01290",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01291"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-21",
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00073",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:リンクス",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00073",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00073",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01294"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00073.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01295"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00073.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01296"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01297",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01298"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01297"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01298"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01299",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01300"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01299"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01300"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01301",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01302"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01301"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01302"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01303",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01304"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01303"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01304"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01305"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b01306"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00073.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00073.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00073.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00073.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01297",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01298"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01299",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01300"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01301",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01302"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01303",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01304"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-11",
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00074",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:ルカ",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00074",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00074",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01307"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00074.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01308"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00074.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01309"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01310",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01311"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01310"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01311"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01312",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01313"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01312"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01313"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01314",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01315"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01314"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01315"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01316",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01317"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01316"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01317"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01318"
          },
          "unit": "",
          "strict": 155,
          "goal": 148,
          "base": 148
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01319"
          },
          "unit": "",
          "strict": 2900,
          "goal": 2770,
          "base": 2770
        },
        {
          "key": "effectHitRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01320"
          },
          "unit": "%",
          "strict": 75,
          "goal": 75,
          "base": 75
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01321"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b01322"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00074.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00074.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00074.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00074.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01310",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01311"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01312",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01313"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01314",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01315"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01316",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01317"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00075",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:遠坂凛",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00075",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00075",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01339"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00075.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01340"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00075.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01341"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01342",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01343"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01342"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01343"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01344",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01345"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01344"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01345"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01346",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01347"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01346"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01347"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01348",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01349"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01348"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01349"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01350"
          },
          "unit": "",
          "strict": 140,
          "goal": 140,
          "base": 140
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01351"
          },
          "unit": "%",
          "strict": 100,
          "goal": 90,
          "base": 90
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01352"
          },
          "unit": "%",
          "strict": 150,
          "goal": 150,
          "base": 150
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01353"
          },
          "unit": "",
          "strict": 2000,
          "goal": 2000,
          "base": 2000
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01354"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b01355"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00075.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00075.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00075.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00075.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01342",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01343"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01344",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01345"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01346",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01347"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01348",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01349"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00076",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:火花",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00076",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00076",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01356"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00076.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01357"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00076.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01358"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01359",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01360"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01359"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01360"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01361",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01362"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01361"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01362"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01363",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01364"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01363"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01364"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01365",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01366"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01365"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01366"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01367"
          },
          "unit": "%",
          "strict": 100,
          "goal": 100,
          "base": 100
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01368"
          },
          "unit": "",
          "strict": 3600,
          "goal": 3600,
          "base": 3600
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01369"
          },
          "unit": "%",
          "strict": 180,
          "goal": 180,
          "base": 180
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01370"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b01371"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00076.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00076.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00076.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00076.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01359",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01360"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01361",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01362"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01363",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01364"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01365",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01366"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00077",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:寒鴉",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00077",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00077",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01372"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00077.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01373"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00077.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01374"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01375",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01376"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01375"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01376"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01377",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01378"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01377"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01378"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01379",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01380"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01379"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01380"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01381",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01382"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01381"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01382"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01383"
          },
          "unit": "",
          "strict": 160,
          "goal": 160,
          "base": 160
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01384"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b01385"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00077.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00077.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00077.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00077.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01375",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01376"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01377",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01378"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01379",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01380"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01381",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01382"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00078",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:帰忘の流離人",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00078",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00078",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01386"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00078.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01387"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00078.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01388"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01389",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01390"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01389"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01390"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01391",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01392"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01391"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01392"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01393",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01394"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01393"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01394"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01395",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01396"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01395"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01396"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "effectHitRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01397"
          },
          "unit": "%",
          "strict": 67,
          "goal": 67,
          "base": 67
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01398"
          },
          "unit": "",
          "strict": 145,
          "goal": 145,
          "base": 145
        },
        {
          "key": "breakEffect",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01399"
          },
          "unit": "%",
          "strict": 150,
          "goal": 150,
          "base": 150
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01400"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b01401"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00078.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00078.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00078.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00078.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01389",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01390"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01391",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01392"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01393",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01394"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01395",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01396"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00079",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:桂乃芬",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00079",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00079",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01419"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00079.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01420"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00079.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01421"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01422",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01423"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01422"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01423"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01424",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01425"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01424"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01425"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01426",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01427"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01426"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01427"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01428",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01429"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01428"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01429"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "effectHitRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01430"
          },
          "unit": "%",
          "strict": 67,
          "goal": 67,
          "base": 67
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01431"
          },
          "unit": "",
          "strict": 2400,
          "goal": 2400,
          "base": 2400
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01432"
          },
          "unit": "",
          "strict": 135,
          "goal": 135,
          "base": 135
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01433"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b01434"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00079.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00079.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00079.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00079.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01422",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01423"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01424",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01425"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01426",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01427"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01428",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01429"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00080",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:青雀",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00080",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00080",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01452"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00080.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01453"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00080.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01454"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01455",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01456"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01455"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01456"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01457",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01458"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01457"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01458"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01459",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01460"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01459"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01460"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01461",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01462"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01461"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01462"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01463"
          },
          "unit": "%",
          "strict": 70,
          "goal": 70,
          "base": 70
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01464"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b01465"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00080.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00080.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00080.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00080.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01455",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01456"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01457",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01458"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01459",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01460"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01461",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01462"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-11",
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00081",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:雪衣",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00081",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00081",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01466"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00081.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01467"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00081.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01468"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01469",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01470"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01469"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01470"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01471",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01472"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01471"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01472"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01473",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01474"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01473"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01474"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01475",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01476"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01475"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01476"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01477"
          },
          "unit": "%",
          "strict": 70,
          "goal": 50,
          "base": 50
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01478"
          },
          "unit": "",
          "strict": 145,
          "goal": 145,
          "base": 145
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01479"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b01480"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00081.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00081.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00081.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00081.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01469",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01470"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01471",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01472"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01473",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01474"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01475",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01476"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-11",
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00082",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:素裳",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00082",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00082",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01481"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00082.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01482"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00082.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01483"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01484",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01485"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01484"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01485"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01486",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01487"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01486"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01487"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01488",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01489"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01488"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01489"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01490",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01491"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01490"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01491"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01492"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b01493"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00082.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00082.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00082.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00082.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01484",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01485"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01486",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01487"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01488",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01489"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01490",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01491"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-11",
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00083",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:丹恒",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00083",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00083",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01494"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00083.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01495"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00083.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01496"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01497",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01498"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01497"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01498"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01499",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01500"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01499"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01500"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01501",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01502"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01501"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01502"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01503",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01504"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01503"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01504"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01505"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b01506"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00083.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00083.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00083.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00083.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01497",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01498"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01499",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01500"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01501",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01502"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01503",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01504"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-11",
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00084",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:丹恒・騰荒",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00084",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00084",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01507"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00084.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01508"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00084.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01509"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01510",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01511"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01510"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01511"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01512",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01513"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01512"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01513"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01514",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01515"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01514"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01515"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01516",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01517"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01516"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01517"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01518"
          },
          "unit": "",
          "strict": 3500,
          "goal": 3000,
          "base": 3000
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01519"
          },
          "unit": "",
          "strict": 140,
          "goal": 136,
          "base": 110
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01520"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b01521"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00084.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00084.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00084.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00084.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01510",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01511"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01512",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01513"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01514",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01515"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01516",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01517"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00085",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:不死途",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00085",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00085",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01522"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00085.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01523"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00085.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01524"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01525",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01526"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01525"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01526"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01527",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01528"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01527"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01528"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01529",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01530"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01529"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01530"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01531",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01532"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01531"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01532"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01533"
          },
          "unit": "%",
          "strict": 100,
          "goal": 100,
          "base": 100
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01534"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b01535"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00085.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00085.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00085.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00085.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01525",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01526"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01527",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01528"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01529",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01530"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01531",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01532"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00086",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:乱破",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00086",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00086",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01536"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00086.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01537"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00086.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01538"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01539",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01540"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01539"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01540"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01541",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01542"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01541"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01542"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01543",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01544"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01543"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01544"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01545",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01546"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01545"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01546"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "breakEffect",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01547"
          },
          "unit": "%",
          "strict": 250,
          "goal": 250,
          "base": 250
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01548"
          },
          "unit": "",
          "strict": 160,
          "goal": 160,
          "base": 160
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01549"
          },
          "unit": "",
          "strict": 3400,
          "goal": 3400,
          "base": 3400
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01550"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b01551"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00086.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00086.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00086.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00086.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01539",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01540"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01541",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01542"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01543",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01544"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01545",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01546"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-26",
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00087",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES:爻光",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00087",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_hsr.b00087",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01567"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00087.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01568"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00087.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01569"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01570",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01571"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01570"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01571"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01572",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01573"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01572"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01573"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01574",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01575"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01574"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01575"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01576",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01577"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01576"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01577"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01578"
          },
          "unit": "",
          "strict": 160,
          "goal": 160,
          "base": 160
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01579"
          },
          "unit": "%",
          "strict": 72,
          "goal": 62,
          "base": 52
        },
        {
          "key": "critDmg",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01580"
          },
          "unit": "%",
          "strict": 163,
          "goal": 145,
          "base": 140
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01581"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b01582"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00087.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00087.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00087.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00087.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01570",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01571"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01572",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01573"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01574",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01575"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01576",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01577"
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
    "guideId": "guide.authoring.guideDefinitions_hsr.b00088",
    "game": "hsr",
    "lookupKey": "GUIDE_OVERRIDES_BY_SOURCE_ID:1001",
    "lookupKind": "sourceId",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_hsr.b00088",
      "identityKey": "hsr:1001",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01597"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00088.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01583"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_hsr.b00088.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01584"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01585",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01586"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01585"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01586"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01587",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01588"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01587"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01588"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01589",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01590"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01589"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01590"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.buildAdvisor.b01591",
          "statOptions": [
            "legacy:guide.legacy.buildAdvisor.b01592"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01591"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01592"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01593"
          },
          "unit": "",
          "strict": 150,
          "goal": 134,
          "base": 120
        },
        {
          "key": "defPercent",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01594"
          },
          "unit": "%",
          "strict": 90,
          "goal": 70,
          "base": 50
        },
        {
          "key": "effectRes",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01595"
          },
          "unit": "%",
          "strict": 45,
          "goal": 30,
          "base": 20
        },
        {
          "key": "effectHitRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.buildAdvisor.b01596"
          },
          "unit": "%",
          "strict": 60,
          "goal": 50,
          "base": 40
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.buildAdvisor.b01598"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.buildAdvisor.b01599"
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00088.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00088.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_hsr.b00088.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_hsr.b00088.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01585",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01586"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01587",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01588"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01589",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01590"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.buildAdvisor.b01591",
        "statOptions": [
          "legacy:guide.legacy.buildAdvisor.b01592"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "profileId": "curated:batch15:march-preservation",
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
  }
];
