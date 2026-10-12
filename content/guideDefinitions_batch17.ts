import type {GuideAuthoringRecord} from "../shared/content/guideAuthoring";
export const records:GuideAuthoringRecord[]=[
  {
    "guideId": "guide.authoring.guideDefinitions_batch17.b00001",
    "game": "genshin",
    "lookupKey": "SPECS:レザー",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_batch17.b00001",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_batch17.b00001",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.batch17Guides.b00001"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00001.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00002"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00001.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00060"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00003"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00061"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00003"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00004"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00062"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00004"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00005"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00063"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00005"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_batch17.b00001",
        "variables": {
          "v0": "レザー"
        }
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.guideDefinitions_batch17.b00002",
          "variables": {
            "v0": "レザー",
            "v1": 352606
          }
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00001.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00001.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00001.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00001.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00003"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00004"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00005"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-09-08",
      "profileId": "curated:batch17:genshin:レザー"
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
      "targetFields": [],
      "tierFields": []
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_batch17.b00002",
    "game": "genshin",
    "lookupKey": "SPECS:ロサリア",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_batch17.b00002",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_batch17.b00002",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.batch17Guides.b00003"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00002.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00004"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00002.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00060"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00006"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00061"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00006"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00007"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00062"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00007"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00008"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00063"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00008"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_batch17.b00001",
        "variables": {
          "v0": "ロサリア"
        }
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.guideDefinitions_batch17.b00002",
          "variables": {
            "v0": "ロサリア",
            "v1": 364265
          }
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00002.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00002.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00002.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00002.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00006"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00007"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00008"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-09-08",
      "profileId": "curated:batch17:genshin:ロサリア"
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
      "targetFields": [],
      "tierFields": []
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_batch17.b00003",
    "game": "genshin",
    "lookupKey": "SPECS:雲菫",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_batch17.b00003",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_batch17.b00003",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.batch17Guides.b00005"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00003.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00006"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00003.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00060"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00009"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00061"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00009"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00010"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00062"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00010"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00011"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00063"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00011"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_batch17.b00001",
        "variables": {
          "v0": "雲菫"
        }
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.guideDefinitions_batch17.b00002",
          "variables": {
            "v0": "雲菫",
            "v1": 366273
          }
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00003.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00003.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00003.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00003.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00009"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00010"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00011"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-09-08",
      "profileId": "curated:batch17:genshin:雲菫"
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
      "targetFields": [],
      "tierFields": []
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_batch17.b00004",
    "game": "genshin",
    "lookupKey": "SPECS:煙緋",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_batch17.b00004",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_batch17.b00004",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.batch17Guides.b00007"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00004.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00008"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00004.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00060"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00012"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00061"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00012"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00013"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00062"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00013"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00014"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00063"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00014"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_batch17.b00001",
        "variables": {
          "v0": "煙緋"
        }
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.guideDefinitions_batch17.b00002",
          "variables": {
            "v0": "煙緋",
            "v1": 383108
          }
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00004.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00004.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00004.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00004.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00012"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00013"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00014"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-09-08",
      "profileId": "curated:batch17:genshin:煙緋"
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
      "targetFields": [],
      "tierFields": []
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_batch17.b00005",
    "game": "genshin",
    "lookupKey": "SPECS:嘉明",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_batch17.b00005",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_batch17.b00005",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.batch17Guides.b00009"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00005.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00010"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00005.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00060"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00015"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00061"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00015"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00016"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00062"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00016"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00017"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00063"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00017"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_batch17.b00001",
        "variables": {
          "v0": "嘉明"
        }
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.guideDefinitions_batch17.b00002",
          "variables": {
            "v0": "嘉明",
            "v1": 583327
          }
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00005.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00005.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00005.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00005.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00015"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00016"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00017"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-09-08",
      "profileId": "curated:batch17:genshin:嘉明"
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
      "targetFields": [],
      "tierFields": []
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_batch17.b00006",
    "game": "genshin",
    "lookupKey": "SPECS:甘雨",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_batch17.b00006",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_batch17.b00006",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.batch17Guides.b00011"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00006.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00012"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00006.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00060"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00018"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00061"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00018"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00019"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00062"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00019"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00020"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00063"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00020"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_batch17.b00001",
        "variables": {
          "v0": "甘雨"
        }
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.guideDefinitions_batch17.b00002",
          "variables": {
            "v0": "甘雨",
            "v1": 363710
          }
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00006.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00006.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00006.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00006.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00018"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00019"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00020"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-09-08",
      "profileId": "curated:batch17:genshin:甘雨"
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
      "targetFields": [],
      "tierFields": []
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_batch17.b00007",
    "game": "genshin",
    "lookupKey": "SPECS:閑雲",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_batch17.b00007",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_batch17.b00007",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.batch17Guides.b00013"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00007.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00014"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00007.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00060"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00021"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00061"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00021"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00022"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00062"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00022"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00023"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00063"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00023"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_batch17.b00001",
        "variables": {
          "v0": "閑雲"
        }
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.guideDefinitions_batch17.b00002",
          "variables": {
            "v0": "閑雲",
            "v1": 583326
          }
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00007.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00007.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00007.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00007.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00021"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00022"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00023"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-09-08",
      "profileId": "curated:batch17:genshin:閑雲"
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
      "targetFields": [],
      "tierFields": []
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_batch17.b00008",
    "game": "genshin",
    "lookupKey": "SPECS:凝光",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_batch17.b00008",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_batch17.b00008",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.batch17Guides.b00015"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00008.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00016"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00008.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00060"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00024"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00061"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00024"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00025"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00062"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00025"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00026"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00063"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00026"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_batch17.b00001",
        "variables": {
          "v0": "凝光"
        }
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.guideDefinitions_batch17.b00002",
          "variables": {
            "v0": "凝光",
            "v1": 352617
          }
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00008.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00008.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00008.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00008.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00024"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00025"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00026"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-09-08",
      "profileId": "curated:batch17:genshin:凝光"
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
      "targetFields": [],
      "tierFields": []
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_batch17.b00009",
    "game": "genshin",
    "lookupKey": "SPECS:九条裟羅",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_batch17.b00009",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_batch17.b00009",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.batch17Guides.b00017"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00009.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00018"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00009.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00060"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00027"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00061"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00027"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00028"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00062"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00028"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00029"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00063"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00029"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_batch17.b00001",
        "variables": {
          "v0": "九条裟羅"
        }
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.guideDefinitions_batch17.b00002",
          "variables": {
            "v0": "九条裟羅",
            "v1": 395525
          }
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00009.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00009.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00009.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00009.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00027"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00028"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00029"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-09-08",
      "profileId": "curated:batch17:genshin:九条裟羅"
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
      "targetFields": [],
      "tierFields": []
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_batch17.b00010",
    "game": "genshin",
    "lookupKey": "SPECS:荒瀧一斗",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_batch17.b00010",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_batch17.b00010",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.batch17Guides.b00019"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00010.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00020"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00010.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00060"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00030"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00061"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00030"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00031"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00062"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00031"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00032"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00063"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00032"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_batch17.b00001",
        "variables": {
          "v0": "荒瀧一斗"
        }
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.guideDefinitions_batch17.b00002",
          "variables": {
            "v0": "荒瀧一斗",
            "v1": 407413
          }
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00010.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00010.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00010.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00010.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00030"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00031"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00032"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-09-08",
      "profileId": "curated:batch17:genshin:荒瀧一斗"
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
      "targetFields": [],
      "tierFields": []
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_batch17.b00011",
    "game": "genshin",
    "lookupKey": "SPECS:刻晴",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_batch17.b00011",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_batch17.b00011",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.batch17Guides.b00021"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00011.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00022"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00011.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00060"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00033"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00061"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00033"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00034"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00062"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00034"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00035"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00063"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00035"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_batch17.b00001",
        "variables": {
          "v0": "刻晴"
        }
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.guideDefinitions_batch17.b00002",
          "variables": {
            "v0": "刻晴",
            "v1": 352626
          }
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00011.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00011.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00011.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00011.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00033"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00034"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00035"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-09-08",
      "profileId": "curated:batch17:genshin:刻晴"
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
      "targetFields": [],
      "tierFields": []
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_batch17.b00012",
    "game": "genshin",
    "lookupKey": "SPECS:珊瑚宮心海",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_batch17.b00012",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_batch17.b00012",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.batch17Guides.b00023"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00012.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00024"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00012.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00060"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00036"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00061"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00036"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00037"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00062"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00037"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00038"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00063"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00038"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_batch17.b00001",
        "variables": {
          "v0": "珊瑚宮心海"
        }
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.guideDefinitions_batch17.b00002",
          "variables": {
            "v0": "珊瑚宮心海",
            "v1": 395524
          }
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00012.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00012.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00012.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00012.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00036"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00037"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00038"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-09-08",
      "profileId": "curated:batch17:genshin:珊瑚宮心海"
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
      "targetFields": [],
      "tierFields": []
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_batch17.b00013",
    "game": "genshin",
    "lookupKey": "SPECS:鹿野院平蔵",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_batch17.b00013",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_batch17.b00013",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.batch17Guides.b00025"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00013.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00026"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00013.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00060"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00039"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00061"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00039"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00040"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00062"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00040"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00041"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00063"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00041"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_batch17.b00001",
        "variables": {
          "v0": "鹿野院平蔵"
        }
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.guideDefinitions_batch17.b00002",
          "variables": {
            "v0": "鹿野院平蔵",
            "v1": 455161
          }
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00013.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00013.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00013.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00013.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00039"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00040"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00041"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-09-08",
      "profileId": "curated:batch17:genshin:鹿野院平蔵"
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
      "targetFields": [],
      "tierFields": []
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_batch17.b00014",
    "game": "genshin",
    "lookupKey": "SPECS:七七",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_batch17.b00014",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_batch17.b00014",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.batch17Guides.b00027"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00014.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00028"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00014.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00060"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00042"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00061"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00042"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00043"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00062"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00043"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00044"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00063"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00044"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_batch17.b00001",
        "variables": {
          "v0": "七七"
        }
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.guideDefinitions_batch17.b00002",
          "variables": {
            "v0": "七七",
            "v1": 352624
          }
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00014.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00014.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00014.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00014.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00042"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00043"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00044"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-09-08",
      "updatedAt": "2026-09-08",
      "profileId": "curated:batch17:genshin:七七"
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
      "targetFields": [],
      "tierFields": []
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_batch17.b00015",
    "game": "genshin",
    "lookupKey": "SPECS:重雲",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_batch17.b00015",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_batch17.b00015",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.batch17Guides.b00029"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00015.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00030"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00015.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00060"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00045"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00061"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00045"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00046"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00062"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00046"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00047"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00063"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00047"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_batch17.b00001",
        "variables": {
          "v0": "重雲"
        }
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.guideDefinitions_batch17.b00002",
          "variables": {
            "v0": "重雲",
            "v1": 352621
          }
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00015.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00015.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00015.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00015.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00045"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00046"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00047"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-09-08",
      "profileId": "curated:batch17:genshin:重雲"
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
      "targetFields": [],
      "tierFields": []
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_batch17.b00016",
    "game": "genshin",
    "lookupKey": "SPECS:申鶴",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_batch17.b00016",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_batch17.b00016",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.batch17Guides.b00031"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00016.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00032"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00016.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00060"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00048"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00061"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00048"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00049"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00062"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00049"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00050"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00063"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00050"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_batch17.b00001",
        "variables": {
          "v0": "申鶴"
        }
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.guideDefinitions_batch17.b00002",
          "variables": {
            "v0": "申鶴",
            "v1": 415138
          }
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00016.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00016.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00016.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00016.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00048"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00049"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00050"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-09-08",
      "profileId": "curated:batch17:genshin:申鶴"
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
      "targetFields": [],
      "tierFields": []
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_batch17.b00017",
    "game": "genshin",
    "lookupKey": "SPECS:神里綾華",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_batch17.b00017",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_batch17.b00017",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.batch17Guides.b00033"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00017.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00034"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00017.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00060"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00052"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00061"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00052"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00053"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00062"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00053"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00054"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00063"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00054"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00035"
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
            "id": "guide.legacy.batch17Guides.b00036"
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
            "id": "guide.legacy.batch17Guides.b00037"
          },
          "unit": "%",
          "strict": 150,
          "goal": 130,
          "base": 115
        }
      ],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_batch17.b00051"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.guideDefinitions_batch17.b00002",
          "variables": {
            "v0": "神里綾華",
            "v1": 366103
          }
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00017.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00017.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00017.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00017.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00052"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00053"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00054"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-09-08",
      "profileId": "curated:batch17:genshin:神里綾華"
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
    "guideId": "guide.authoring.guideDefinitions_batch17.b00018",
    "game": "genshin",
    "lookupKey": "SPECS:神里綾人",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_batch17.b00018",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_batch17.b00018",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.batch17Guides.b00038"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00018.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00039"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00018.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00060"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00055"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00061"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00055"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00056"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00062"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00056"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00057"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00063"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00057"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_batch17.b00001",
        "variables": {
          "v0": "神里綾人"
        }
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.guideDefinitions_batch17.b00002",
          "variables": {
            "v0": "神里綾人",
            "v1": 417603
          }
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00018.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00018.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00018.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00018.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00055"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00056"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00057"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-09-08",
      "profileId": "curated:batch17:genshin:神里綾人"
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
      "targetFields": [],
      "tierFields": []
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_batch17.b00019",
    "game": "genshin",
    "lookupKey": "SPECS:辛炎",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_batch17.b00019",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_batch17.b00019",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.batch17Guides.b00040"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00019.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00041"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00019.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00060"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00058"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00061"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00058"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00059"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00062"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00059"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00060"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00063"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00060"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_batch17.b00001",
        "variables": {
          "v0": "辛炎"
        }
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.guideDefinitions_batch17.b00002",
          "variables": {
            "v0": "辛炎",
            "v1": 358214
          }
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00019.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00019.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00019.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00019.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00058"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00059"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00060"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-09-08",
      "profileId": "curated:batch17:genshin:辛炎"
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
      "targetFields": [],
      "tierFields": []
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_batch17.b00020",
    "game": "genshin",
    "lookupKey": "SPECS:千織",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_batch17.b00020",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_batch17.b00020",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.batch17Guides.b00042"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00020.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00043"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00020.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00060"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00061"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00061"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00061"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00062"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00062"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00062"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00063"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00063"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00063"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_batch17.b00001",
        "variables": {
          "v0": "千織"
        }
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.guideDefinitions_batch17.b00002",
          "variables": {
            "v0": "千織",
            "v1": 574166
          }
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00020.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00020.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00020.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00020.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00061"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00062"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00063"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-09-08",
      "profileId": "curated:batch17:genshin:千織"
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
      "targetFields": [],
      "tierFields": []
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_batch17.b00021",
    "game": "genshin",
    "lookupKey": "SPECS:早柚",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_batch17.b00021",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_batch17.b00021",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.batch17Guides.b00044"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00021.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00045"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00021.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00060"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00064"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00061"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00064"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00065"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00062"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00065"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00066"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00063"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00066"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_batch17.b00001",
        "variables": {
          "v0": "早柚"
        }
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.guideDefinitions_batch17.b00002",
          "variables": {
            "v0": "早柚",
            "v1": 390935
          }
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00021.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00021.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00021.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00021.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00064"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00065"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00066"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-14",
      "updatedAt": "2026-09-08",
      "profileId": "curated:batch17:genshin:早柚"
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
      "targetFields": [],
      "tierFields": []
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_batch17.b00022",
    "game": "genshin",
    "lookupKey": "SPECS:放浪者",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_batch17.b00022",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_batch17.b00022",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.batch17Guides.b00046"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00022.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00047"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00022.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00060"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00067"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00061"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00067"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00068"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00062"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00068"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00069"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00063"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00069"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_batch17.b00001",
        "variables": {
          "v0": "放浪者"
        }
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.guideDefinitions_batch17.b00002",
          "variables": {
            "v0": "放浪者",
            "v1": 366289
          }
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00022.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00022.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00022.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00022.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00067"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00068"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00069"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-09-08",
      "profileId": "curated:batch17:genshin:放浪者"
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
      "targetFields": [],
      "tierFields": []
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_batch17.b00023",
    "game": "genshin",
    "lookupKey": "SPECS:北斗",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_batch17.b00023",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_batch17.b00023",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.batch17Guides.b00048"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00023.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00049"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00023.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00060"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00070"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00061"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00070"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00071"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00062"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00071"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00072"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00063"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00072"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_batch17.b00001",
        "variables": {
          "v0": "北斗"
        }
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.guideDefinitions_batch17.b00002",
          "variables": {
            "v0": "北斗",
            "v1": 352616
          }
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00023.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00023.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00023.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00023.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00070"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00071"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00072"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-09-08",
      "updatedAt": "2026-09-08",
      "profileId": "curated:batch17:genshin:北斗"
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
      "targetFields": [],
      "tierFields": []
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_batch17.b00024",
    "game": "genshin",
    "lookupKey": "SPECS:夢見月瑞希",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_batch17.b00024",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_batch17.b00024",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.batch17Guides.b00050"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00024.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00051"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00024.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00060"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00073"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00061"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00073"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00074"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00062"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00074"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00075"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00063"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00075"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_batch17.b00001",
        "variables": {
          "v0": "夢見月瑞希"
        }
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.guideDefinitions_batch17.b00002",
          "variables": {
            "v0": "夢見月瑞希",
            "v1": 662778
          }
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00024.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00024.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00024.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00024.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00073"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00074"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00075"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-09-08",
      "updatedAt": "2026-09-08",
      "profileId": "curated:batch17:genshin:夢見月瑞希"
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
      "targetFields": [],
      "tierFields": []
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_batch17.b00025",
    "game": "genshin",
    "lookupKey": "SPECS:藍硯",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_batch17.b00025",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_batch17.b00025",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.batch17Guides.b00052"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00025.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00053"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00025.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00060"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00076"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00061"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00076"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00077"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00062"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00077"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00078"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00063"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00078"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_batch17.b00001",
        "variables": {
          "v0": "藍硯"
        }
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.guideDefinitions_batch17.b00002",
          "variables": {
            "v0": "藍硯",
            "v1": 655054
          }
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00025.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00025.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00025.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00025.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00076"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00077"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00078"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-09-08",
      "profileId": "curated:batch17:genshin:藍硯"
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
      "targetFields": [],
      "tierFields": []
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_batch17.b00026",
    "game": "genshin",
    "lookupKey": "SPECS:旅人",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_batch17.b00026",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_batch17.b00026",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.batch17Guides.b00054"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00026.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00055"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00026.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00060"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00080"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00061"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00080"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00081"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00062"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00081"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00082"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00063"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00082"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_batch17.b00079"
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.guideDefinitions_batch17.b00002",
          "variables": {
            "v0": "旅人",
            "v1": 352598
          }
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00026.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00026.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00026.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00026.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00080"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00081"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00082"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-09-08",
      "updatedAt": "2026-09-08",
      "profileId": "curated:batch17:genshin:旅人"
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
      "targetFields": [],
      "tierFields": []
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_batch17.b00027",
    "game": "genshin",
    "lookupKey": "SPECS:綺良々",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_batch17.b00027",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_batch17.b00027",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.batch17Guides.b00056"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00027.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00057"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00027.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00060"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00083"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00061"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00083"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00084"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00062"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00084"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00085"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00063"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00085"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_batch17.b00001",
        "variables": {
          "v0": "綺良々"
        }
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.guideDefinitions_batch17.b00002",
          "variables": {
            "v0": "綺良々",
            "v1": 521833
          }
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00027.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00027.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00027.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00027.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00083"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00084"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00085"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-09-08",
      "profileId": "curated:batch17:genshin:綺良々"
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
      "targetFields": [],
      "tierFields": []
    }
  },
  {
    "guideId": "guide.authoring.guideDefinitions_batch17.b00028",
    "game": "genshin",
    "lookupKey": "SPECS:魈",
    "lookupKind": "name",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_batch17.b00028",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_batch17.b00028",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.batch17Guides.b00058"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00028.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00059"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "recommendationId": "guide.authoring.guideDefinitions_batch17.b00028.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00060"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
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
          "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00086"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00061"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00086"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00087"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00062"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00087"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_batch17.b00088"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.batch17Guides.b00063"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_batch17.b00088"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_batch17.b00001",
        "variables": {
          "v0": "魈"
        }
      },
      "sourceLabels": [
        {
          "kind": "textRef",
          "id": "guide.legacy.guideDefinitions_batch17.b00002",
          "variables": {
            "v0": "魈",
            "v1": 352615
          }
        }
      ]
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00028.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00028.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_batch17.b00028.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_batch17.b00028.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00061",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00086"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00062",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00087"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.batch17Guides.b00063",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_batch17.b00088"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "metadata": {
      "dataAsOf": "2026-08-13",
      "updatedAt": "2026-09-08",
      "profileId": "curated:batch17:genshin:魈"
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
      "targetFields": [],
      "tierFields": []
    }
  }
];
