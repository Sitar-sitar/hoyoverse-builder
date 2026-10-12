import type {GuideAuthoringRecord} from "../shared/content/guideAuthoring";
export const records:GuideAuthoringRecord[]=[
  {
    "guideId": "guide.authoring.guideDefinitions_profiles.b00001",
    "game": "hsr",
    "lookupKey": "HSR_PROFILES:crit",
    "lookupKind": "profile",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_profiles.b00001",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_profiles.b00001",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.individualGuides_templates.b00001"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_profiles.b00001.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00014"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        },
        {
          "recommendationId": "guide.authoring.guideDefinitions_profiles.b00001.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00015"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        }
      ],
      "mainStatPreferences": [
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00001",
          "statOptions": [
            "legacy:guide.legacy.individualGuides.b00002"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00001"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00002"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00003",
          "statOptions": [
            "legacy:guide.legacy.individualGuides.b00004"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00003"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00004"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00005",
          "statOptions": [
            "legacy:guide.legacy.individualGuides.b00006"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00005"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00006"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00007",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_profiles.b00001"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00007"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00001"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00002"
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
            "id": "guide.legacy.guideDefinitions_profiles.b00003"
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
            "id": "guide.legacy.guideDefinitions_profiles.b00004"
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
            "id": "guide.legacy.guideDefinitions_profiles.b00005"
          },
          "unit": "%",
          "strict": 75,
          "goal": 60,
          "base": 45
        }
      ],
      "sourceLabels": []
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_profiles.b00001.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_profiles.b00001.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_profiles.b00001.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_profiles.b00001.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00001",
        "statOptions": [
          "legacy:guide.legacy.individualGuides.b00002"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00003",
        "statOptions": [
          "legacy:guide.legacy.individualGuides.b00004"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00005",
        "statOptions": [
          "legacy:guide.legacy.individualGuides.b00006"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00007",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_profiles.b00001"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "factory": {
      "context": {
        "kind": "textRef",
        "id": "guide.legacy.individualGuides_templates.b00002"
      },
      "headlineBindings": {
        "v0": "name",
        "v1": "label"
      },
      "contextBindings": {
        "v0": "name"
      },
      "label": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_profiles.b00006"
      }
    },
    "metadata": {},
    "legacyShape": {
      "fields": [
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
    "guideId": "guide.authoring.guideDefinitions_profiles.b00002",
    "game": "hsr",
    "lookupKey": "HSR_PROFILES:dot",
    "lookupKind": "profile",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_profiles.b00002",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_profiles.b00002",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.individualGuides_templates.b00001"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_profiles.b00002.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00016"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        },
        {
          "recommendationId": "guide.authoring.guideDefinitions_profiles.b00002.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00017"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        }
      ],
      "mainStatPreferences": [
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00018",
          "statOptions": [
            "legacy:guide.legacy.individualGuides.b00019"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00018"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00019"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00020",
          "statOptions": [
            "legacy:guide.legacy.individualGuides.b00021"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00020"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00021"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00022",
          "statOptions": [
            "legacy:guide.legacy.individualGuides.b00023"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00022"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00023"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00024",
          "statOptions": [
            "legacy:guide.legacy.individualGuides.b00025"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00024"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00025"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "effectHitRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00007"
          },
          "unit": "%",
          "strict": 120,
          "goal": 90,
          "base": 67
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00008"
          },
          "unit": "",
          "strict": 160,
          "goal": 147,
          "base": 134
        },
        {
          "key": "attackPercent",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00009"
          },
          "unit": "%",
          "strict": 90,
          "goal": 75,
          "base": 60
        }
      ],
      "sourceLabels": []
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_profiles.b00002.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_profiles.b00002.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_profiles.b00002.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_profiles.b00002.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00018",
        "statOptions": [
          "legacy:guide.legacy.individualGuides.b00019"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00020",
        "statOptions": [
          "legacy:guide.legacy.individualGuides.b00021"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00022",
        "statOptions": [
          "legacy:guide.legacy.individualGuides.b00023"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00024",
        "statOptions": [
          "legacy:guide.legacy.individualGuides.b00025"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "factory": {
      "context": {
        "kind": "textRef",
        "id": "guide.legacy.individualGuides_templates.b00002"
      },
      "headlineBindings": {
        "v0": "name",
        "v1": "label"
      },
      "contextBindings": {
        "v0": "name"
      },
      "label": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_profiles.b00010"
      }
    },
    "metadata": {},
    "legacyShape": {
      "fields": [
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
    "guideId": "guide.authoring.guideDefinitions_profiles.b00003",
    "game": "hsr",
    "lookupKey": "HSR_PROFILES:break",
    "lookupKind": "profile",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_profiles.b00003",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_profiles.b00003",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.individualGuides_templates.b00001"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_profiles.b00003.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00026"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        },
        {
          "recommendationId": "guide.authoring.guideDefinitions_profiles.b00003.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00027"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        }
      ],
      "mainStatPreferences": [
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00028",
          "statOptions": [
            "legacy:guide.legacy.individualGuides.b00029"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00028"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00029"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00030",
          "statOptions": [
            "legacy:guide.legacy.individualGuides.b00031"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00030"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00031"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00032",
          "statOptions": [
            "legacy:guide.legacy.individualGuides.b00033"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00032"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00033"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00034",
          "statOptions": [
            "legacy:guide.legacy.individualGuides.b00035"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00034"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00035"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "breakEffect",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00011"
          },
          "unit": "%",
          "strict": 300,
          "goal": 240,
          "base": 180
        },
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00012"
          },
          "unit": "",
          "strict": 160,
          "goal": 150,
          "base": 145
        },
        {
          "key": "attackPercent",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00013"
          },
          "unit": "%",
          "strict": 60,
          "goal": 45,
          "base": 30
        }
      ],
      "sourceLabels": []
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_profiles.b00003.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_profiles.b00003.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_profiles.b00003.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_profiles.b00003.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00028",
        "statOptions": [
          "legacy:guide.legacy.individualGuides.b00029"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00030",
        "statOptions": [
          "legacy:guide.legacy.individualGuides.b00031"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00032",
        "statOptions": [
          "legacy:guide.legacy.individualGuides.b00033"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00034",
        "statOptions": [
          "legacy:guide.legacy.individualGuides.b00035"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "factory": {
      "context": {
        "kind": "textRef",
        "id": "guide.legacy.individualGuides_templates.b00002"
      },
      "headlineBindings": {
        "v0": "name",
        "v1": "label"
      },
      "contextBindings": {
        "v0": "name"
      },
      "label": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_profiles.b00014"
      }
    },
    "metadata": {},
    "legacyShape": {
      "fields": [
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
    "guideId": "guide.authoring.guideDefinitions_profiles.b00004",
    "game": "hsr",
    "lookupKey": "HSR_PROFILES:support",
    "lookupKind": "profile",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_profiles.b00004",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_profiles.b00004",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.individualGuides_templates.b00001"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_profiles.b00004.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00036"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        },
        {
          "recommendationId": "guide.authoring.guideDefinitions_profiles.b00004.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00037"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        }
      ],
      "mainStatPreferences": [
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00038",
          "statOptions": [
            "legacy:guide.legacy.individualGuides.b00039"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00038"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00039"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00040",
          "statOptions": [
            "legacy:guide.legacy.individualGuides.b00041"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00040"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00041"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00042",
          "statOptions": [
            "legacy:guide.legacy.individualGuides.b00043"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00042"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00043"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00044",
          "statOptions": [
            "legacy:guide.legacy.individualGuides.b00045"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00044"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00045"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00015"
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
            "id": "guide.legacy.guideDefinitions_profiles.b00016"
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
            "id": "guide.legacy.guideDefinitions_profiles.b00017"
          },
          "unit": "%",
          "strict": 45,
          "goal": 32,
          "base": 20
        }
      ],
      "sourceLabels": []
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_profiles.b00004.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_profiles.b00004.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_profiles.b00004.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_profiles.b00004.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00038",
        "statOptions": [
          "legacy:guide.legacy.individualGuides.b00039"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00040",
        "statOptions": [
          "legacy:guide.legacy.individualGuides.b00041"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00042",
        "statOptions": [
          "legacy:guide.legacy.individualGuides.b00043"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00044",
        "statOptions": [
          "legacy:guide.legacy.individualGuides.b00045"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "factory": {
      "context": {
        "kind": "textRef",
        "id": "guide.legacy.individualGuides_templates.b00002"
      },
      "headlineBindings": {
        "v0": "name",
        "v1": "label"
      },
      "contextBindings": {
        "v0": "name"
      },
      "label": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_profiles.b00018"
      }
    },
    "metadata": {},
    "legacyShape": {
      "fields": [
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
    "guideId": "guide.authoring.guideDefinitions_profiles.b00005",
    "game": "hsr",
    "lookupKey": "HSR_PROFILES:sustain",
    "lookupKind": "profile",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_profiles.b00005",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_profiles.b00005",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.individualGuides_templates.b00001"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_profiles.b00005.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00046"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        },
        {
          "recommendationId": "guide.authoring.guideDefinitions_profiles.b00005.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00047"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        }
      ],
      "mainStatPreferences": [
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00048",
          "statOptions": [
            "legacy:guide.legacy.individualGuides.b00049"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00048"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00049"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00050",
          "statOptions": [
            "legacy:guide.legacy.individualGuides.b00051"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00050"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00051"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00052",
          "statOptions": [
            "legacy:guide.legacy.individualGuides.b00053"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00052"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00053"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00054",
          "statOptions": [
            "legacy:guide.legacy.individualGuides.b00055"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00054"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00055"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00019"
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
            "id": "guide.legacy.guideDefinitions_profiles.b00020"
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
            "id": "guide.legacy.guideDefinitions_profiles.b00021"
          },
          "unit": "%",
          "strict": 50,
          "goal": 35,
          "base": 25
        }
      ],
      "sourceLabels": []
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_profiles.b00005.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_profiles.b00005.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_profiles.b00005.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_profiles.b00005.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00048",
        "statOptions": [
          "legacy:guide.legacy.individualGuides.b00049"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00050",
        "statOptions": [
          "legacy:guide.legacy.individualGuides.b00051"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00052",
        "statOptions": [
          "legacy:guide.legacy.individualGuides.b00053"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00054",
        "statOptions": [
          "legacy:guide.legacy.individualGuides.b00055"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "factory": {
      "context": {
        "kind": "textRef",
        "id": "guide.legacy.individualGuides_templates.b00002"
      },
      "headlineBindings": {
        "v0": "name",
        "v1": "label"
      },
      "contextBindings": {
        "v0": "name"
      },
      "label": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_profiles.b00022"
      }
    },
    "metadata": {},
    "legacyShape": {
      "fields": [
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
    "guideId": "guide.authoring.guideDefinitions_profiles.b00006",
    "game": "hsr",
    "lookupKey": "HSR_PROFILES:tank",
    "lookupKind": "profile",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_profiles.b00006",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_profiles.b00006",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.individualGuides_templates.b00001"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_profiles.b00006.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00056"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        },
        {
          "recommendationId": "guide.authoring.guideDefinitions_profiles.b00006.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00057"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        }
      ],
      "mainStatPreferences": [
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00058",
          "statOptions": [
            "legacy:guide.legacy.individualGuides.b00059"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00058"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00059"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00060",
          "statOptions": [
            "legacy:guide.legacy.individualGuides.b00061"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00060"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00061"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00062",
          "statOptions": [
            "legacy:guide.legacy.individualGuides.b00063"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00062"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00063"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00064",
          "statOptions": [
            "legacy:guide.legacy.individualGuides.b00065"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00064"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00065"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "speed",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00023"
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
            "id": "guide.legacy.guideDefinitions_profiles.b00024"
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
            "id": "guide.legacy.guideDefinitions_profiles.b00025"
          },
          "unit": "%",
          "strict": 45,
          "goal": 30,
          "base": 20
        }
      ],
      "sourceLabels": []
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_profiles.b00006.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_profiles.b00006.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_profiles.b00006.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_profiles.b00006.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00058",
        "statOptions": [
          "legacy:guide.legacy.individualGuides.b00059"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00060",
        "statOptions": [
          "legacy:guide.legacy.individualGuides.b00061"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00062",
        "statOptions": [
          "legacy:guide.legacy.individualGuides.b00063"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00064",
        "statOptions": [
          "legacy:guide.legacy.individualGuides.b00065"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "factory": {
      "context": {
        "kind": "textRef",
        "id": "guide.legacy.individualGuides_templates.b00002"
      },
      "headlineBindings": {
        "v0": "name",
        "v1": "label"
      },
      "contextBindings": {
        "v0": "name"
      },
      "label": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_profiles.b00026"
      }
    },
    "metadata": {},
    "legacyShape": {
      "fields": [
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
    "guideId": "guide.authoring.guideDefinitions_profiles.b00007",
    "game": "hsr",
    "lookupKey": "HSR_PROFILES:hp",
    "lookupKind": "profile",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_profiles.b00007",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_profiles.b00007",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.individualGuides_templates.b00001"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_profiles.b00007.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00066"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        },
        {
          "recommendationId": "guide.authoring.guideDefinitions_profiles.b00007.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00067"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        }
      ],
      "mainStatPreferences": [
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00068",
          "statOptions": [
            "legacy:guide.legacy.individualGuides.b00069"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00068"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00069"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00070",
          "statOptions": [
            "legacy:guide.legacy.individualGuides.b00071"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00070"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00071"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00072",
          "statOptions": [
            "legacy:guide.legacy.individualGuides.b00073"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00072"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00073"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00074",
          "statOptions": [
            "legacy:guide.legacy.individualGuides.b00075"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00074"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00075"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00027"
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
            "id": "guide.legacy.guideDefinitions_profiles.b00028"
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
            "id": "guide.legacy.guideDefinitions_profiles.b00029"
          },
          "unit": "%",
          "strict": 65,
          "goal": 50,
          "base": 35
        }
      ],
      "sourceLabels": []
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_profiles.b00007.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_profiles.b00007.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_profiles.b00007.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_profiles.b00007.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00068",
        "statOptions": [
          "legacy:guide.legacy.individualGuides.b00069"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00070",
        "statOptions": [
          "legacy:guide.legacy.individualGuides.b00071"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00072",
        "statOptions": [
          "legacy:guide.legacy.individualGuides.b00073"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00074",
        "statOptions": [
          "legacy:guide.legacy.individualGuides.b00075"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "factory": {
      "context": {
        "kind": "textRef",
        "id": "guide.legacy.individualGuides_templates.b00002"
      },
      "headlineBindings": {
        "v0": "name",
        "v1": "label"
      },
      "contextBindings": {
        "v0": "name"
      },
      "label": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_profiles.b00030"
      }
    },
    "metadata": {},
    "legacyShape": {
      "fields": [
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
    "guideId": "guide.authoring.guideDefinitions_profiles.b00008",
    "game": "hsr",
    "lookupKey": "HSR_PROFILES:def",
    "lookupKind": "profile",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_profiles.b00008",
      "identityKey": "legacy:hsr:guide.authoring.guideDefinitions_profiles.b00008",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.individualGuides_templates.b00001"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_profiles.b00008.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00076"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        },
        {
          "recommendationId": "guide.authoring.guideDefinitions_profiles.b00008.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00077"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        }
      ],
      "mainStatPreferences": [
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00078",
          "statOptions": [
            "legacy:guide.legacy.individualGuides.b00079"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00078"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00079"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00080",
          "statOptions": [
            "legacy:guide.legacy.individualGuides.b00081"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00080"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00081"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00082",
          "statOptions": [
            "legacy:guide.legacy.individualGuides.b00083"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00082"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00083"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00084",
          "statOptions": [
            "legacy:guide.legacy.individualGuides.b00085"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00084"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00085"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "defPercent",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00031"
          },
          "unit": "%",
          "strict": 100,
          "goal": 80,
          "base": 60
        },
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00032"
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
            "id": "guide.legacy.guideDefinitions_profiles.b00033"
          },
          "unit": "%",
          "strict": 180,
          "goal": 150,
          "base": 120
        }
      ],
      "sourceLabels": []
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_profiles.b00008.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_profiles.b00008.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_profiles.b00008.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_profiles.b00008.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00078",
        "statOptions": [
          "legacy:guide.legacy.individualGuides.b00079"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00080",
        "statOptions": [
          "legacy:guide.legacy.individualGuides.b00081"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00082",
        "statOptions": [
          "legacy:guide.legacy.individualGuides.b00083"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00084",
        "statOptions": [
          "legacy:guide.legacy.individualGuides.b00085"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "factory": {
      "context": {
        "kind": "textRef",
        "id": "guide.legacy.individualGuides_templates.b00002"
      },
      "headlineBindings": {
        "v0": "name",
        "v1": "label"
      },
      "contextBindings": {
        "v0": "name"
      },
      "label": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_profiles.b00034"
      }
    },
    "metadata": {},
    "legacyShape": {
      "fields": [
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
    "guideId": "guide.authoring.guideDefinitions_profiles.b00009",
    "game": "genshin",
    "lookupKey": "GI_PROFILES:crit",
    "lookupKind": "profile",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_profiles.b00009",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_profiles.b00009",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.individualGuides_templates.b00001"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_profiles.b00009.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00086"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        },
        {
          "recommendationId": "guide.authoring.guideDefinitions_profiles.b00009.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00087"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        }
      ],
      "mainStatPreferences": [
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00008",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_profiles.b00035"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00008"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00035"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00009",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_profiles.b00036"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00009"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00036"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00010",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_profiles.b00037"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00010"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00037"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00038"
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
            "id": "guide.legacy.guideDefinitions_profiles.b00039"
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
            "id": "guide.legacy.guideDefinitions_profiles.b00040"
          },
          "unit": "%",
          "strict": 160,
          "goal": 130,
          "base": 115
        }
      ],
      "sourceLabels": []
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_profiles.b00009.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_profiles.b00009.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_profiles.b00009.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_profiles.b00009.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00008",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_profiles.b00035"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00009",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_profiles.b00036"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00010",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_profiles.b00037"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "factory": {
      "context": {
        "kind": "textRef",
        "id": "guide.legacy.individualGuides_templates.b00003"
      },
      "headlineBindings": {
        "v0": "name",
        "v1": "label"
      },
      "contextBindings": {
        "v0": "name"
      },
      "label": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_profiles.b00041"
      }
    },
    "metadata": {},
    "legacyShape": {
      "fields": [
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
    "guideId": "guide.authoring.guideDefinitions_profiles.b00010",
    "game": "genshin",
    "lookupKey": "GI_PROFILES:hp",
    "lookupKind": "profile",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_profiles.b00010",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_profiles.b00010",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.individualGuides_templates.b00001"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_profiles.b00010.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00088"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        },
        {
          "recommendationId": "guide.authoring.guideDefinitions_profiles.b00010.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00089"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        }
      ],
      "mainStatPreferences": [
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00008",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_profiles.b00042"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00008"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00042"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00009",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_profiles.b00043"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00009"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00043"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00010",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_profiles.b00044"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00010"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00044"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "hp",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00045"
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
            "id": "guide.legacy.guideDefinitions_profiles.b00046"
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
            "id": "guide.legacy.guideDefinitions_profiles.b00047"
          },
          "unit": "%",
          "strict": 220,
          "goal": 180,
          "base": 150
        }
      ],
      "sourceLabels": []
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_profiles.b00010.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_profiles.b00010.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_profiles.b00010.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_profiles.b00010.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00008",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_profiles.b00042"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00009",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_profiles.b00043"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00010",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_profiles.b00044"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "factory": {
      "context": {
        "kind": "textRef",
        "id": "guide.legacy.individualGuides_templates.b00003"
      },
      "headlineBindings": {
        "v0": "name",
        "v1": "label"
      },
      "contextBindings": {
        "v0": "name"
      },
      "label": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_profiles.b00048"
      }
    },
    "metadata": {},
    "legacyShape": {
      "fields": [
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
    "guideId": "guide.authoring.guideDefinitions_profiles.b00011",
    "game": "genshin",
    "lookupKey": "GI_PROFILES:def",
    "lookupKind": "profile",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_profiles.b00011",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_profiles.b00011",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.individualGuides_templates.b00001"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_profiles.b00011.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00090"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        },
        {
          "recommendationId": "guide.authoring.guideDefinitions_profiles.b00011.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00091"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        }
      ],
      "mainStatPreferences": [
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00008",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_profiles.b00049"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00008"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00049"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00009",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_profiles.b00050"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00009"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00050"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00010",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_profiles.b00051"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00010"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00051"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "defense",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00052"
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
            "id": "guide.legacy.guideDefinitions_profiles.b00053"
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
            "id": "guide.legacy.guideDefinitions_profiles.b00054"
          },
          "unit": "%",
          "strict": 220,
          "goal": 180,
          "base": 150
        }
      ],
      "sourceLabels": []
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_profiles.b00011.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_profiles.b00011.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_profiles.b00011.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_profiles.b00011.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00008",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_profiles.b00049"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00009",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_profiles.b00050"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00010",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_profiles.b00051"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "factory": {
      "context": {
        "kind": "textRef",
        "id": "guide.legacy.individualGuides_templates.b00003"
      },
      "headlineBindings": {
        "v0": "name",
        "v1": "label"
      },
      "contextBindings": {
        "v0": "name"
      },
      "label": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_profiles.b00055"
      }
    },
    "metadata": {},
    "legacyShape": {
      "fields": [
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
    "guideId": "guide.authoring.guideDefinitions_profiles.b00012",
    "game": "genshin",
    "lookupKey": "GI_PROFILES:em",
    "lookupKind": "profile",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_profiles.b00012",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_profiles.b00012",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.individualGuides_templates.b00001"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_profiles.b00012.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00092"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        },
        {
          "recommendationId": "guide.authoring.guideDefinitions_profiles.b00012.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00093"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        }
      ],
      "mainStatPreferences": [
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00008",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_profiles.b00056"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00008"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00056"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00009",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_profiles.b00057"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00009"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00057"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00010",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_profiles.b00058"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00010"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00058"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "elementalMastery",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00059"
          },
          "unit": "",
          "strict": 1000,
          "goal": 800,
          "base": 650
        },
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00060"
          },
          "unit": "%",
          "strict": 190,
          "goal": 160,
          "base": 140
        }
      ],
      "sourceLabels": []
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_profiles.b00012.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_profiles.b00012.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_profiles.b00012.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_profiles.b00012.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00008",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_profiles.b00056"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00009",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_profiles.b00057"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00010",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_profiles.b00058"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "factory": {
      "context": {
        "kind": "textRef",
        "id": "guide.legacy.individualGuides_templates.b00003"
      },
      "headlineBindings": {
        "v0": "name",
        "v1": "label"
      },
      "contextBindings": {
        "v0": "name"
      },
      "label": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_profiles.b00061"
      }
    },
    "metadata": {},
    "legacyShape": {
      "fields": [
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
    "guideId": "guide.authoring.guideDefinitions_profiles.b00013",
    "game": "genshin",
    "lookupKey": "GI_PROFILES:support",
    "lookupKind": "profile",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_profiles.b00013",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_profiles.b00013",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.individualGuides_templates.b00001"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_profiles.b00013.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00094"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        },
        {
          "recommendationId": "guide.authoring.guideDefinitions_profiles.b00013.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00095"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        }
      ],
      "mainStatPreferences": [
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00008",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_profiles.b00062"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00008"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00062"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00009",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_profiles.b00063"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00009"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00063"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00010",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_profiles.b00064"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00010"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00064"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00065"
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
            "id": "guide.legacy.guideDefinitions_profiles.b00066"
          },
          "unit": "",
          "strict": 35000,
          "goal": 28000,
          "base": 23000
        }
      ],
      "sourceLabels": []
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_profiles.b00013.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_profiles.b00013.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_profiles.b00013.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_profiles.b00013.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00008",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_profiles.b00062"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00009",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_profiles.b00063"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00010",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_profiles.b00064"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "factory": {
      "context": {
        "kind": "textRef",
        "id": "guide.legacy.individualGuides_templates.b00003"
      },
      "headlineBindings": {
        "v0": "name",
        "v1": "label"
      },
      "contextBindings": {
        "v0": "name"
      },
      "label": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_profiles.b00067"
      }
    },
    "metadata": {},
    "legacyShape": {
      "fields": [
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
    "guideId": "guide.authoring.guideDefinitions_profiles.b00014",
    "game": "genshin",
    "lookupKey": "GI_PROFILES:sustain",
    "lookupKind": "profile",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_profiles.b00014",
      "identityKey": "legacy:genshin:guide.authoring.guideDefinitions_profiles.b00014",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.individualGuides_templates.b00001"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_profiles.b00014.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00096"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        },
        {
          "recommendationId": "guide.authoring.guideDefinitions_profiles.b00014.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00097"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        }
      ],
      "mainStatPreferences": [
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00008",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_profiles.b00068"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00008"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00068"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00009",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_profiles.b00069"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00009"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00069"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00010",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_profiles.b00070"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00010"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00070"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "hp",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00071"
          },
          "unit": "",
          "strict": 45000,
          "goal": 38000,
          "base": 30000
        },
        {
          "key": "energyRecharge",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00072"
          },
          "unit": "%",
          "strict": 220,
          "goal": 180,
          "base": 150
        }
      ],
      "sourceLabels": []
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_profiles.b00014.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_profiles.b00014.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_profiles.b00014.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_profiles.b00014.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00008",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_profiles.b00068"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00009",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_profiles.b00069"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00010",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_profiles.b00070"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "factory": {
      "context": {
        "kind": "textRef",
        "id": "guide.legacy.individualGuides_templates.b00003"
      },
      "headlineBindings": {
        "v0": "name",
        "v1": "label"
      },
      "contextBindings": {
        "v0": "name"
      },
      "label": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_profiles.b00073"
      }
    },
    "metadata": {},
    "legacyShape": {
      "fields": [
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
    "guideId": "guide.authoring.guideDefinitions_profiles.b00015",
    "game": "zzz",
    "lookupKey": "ZZZ_PROFILES:crit",
    "lookupKind": "profile",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_profiles.b00015",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_profiles.b00015",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.individualGuides_templates.b00001"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_profiles.b00015.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00098"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        },
        {
          "recommendationId": "guide.authoring.guideDefinitions_profiles.b00015.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00099"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        }
      ],
      "mainStatPreferences": [
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00011",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_profiles.b00074"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00011"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00074"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00012",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_profiles.b00075"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00012"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00075"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00013",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_profiles.b00076"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00013"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00076"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00077"
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
            "id": "guide.legacy.guideDefinitions_profiles.b00078"
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
            "id": "guide.legacy.guideDefinitions_profiles.b00079"
          },
          "unit": "",
          "strict": 3000,
          "goal": 2700,
          "base": 2400
        }
      ],
      "sourceLabels": []
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_profiles.b00015.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_profiles.b00015.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_profiles.b00015.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_profiles.b00015.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00011",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_profiles.b00074"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00012",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_profiles.b00075"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00013",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_profiles.b00076"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "factory": {
      "context": {
        "kind": "textRef",
        "id": "guide.legacy.individualGuides_templates.b00004"
      },
      "headlineBindings": {
        "v0": "name",
        "v1": "label"
      },
      "contextBindings": {
        "v0": "name"
      },
      "label": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_profiles.b00080"
      }
    },
    "metadata": {},
    "legacyShape": {
      "fields": [
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
    "guideId": "guide.authoring.guideDefinitions_profiles.b00016",
    "game": "zzz",
    "lookupKey": "ZZZ_PROFILES:anomaly",
    "lookupKind": "profile",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_profiles.b00016",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_profiles.b00016",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.individualGuides_templates.b00001"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_profiles.b00016.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00100"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        },
        {
          "recommendationId": "guide.authoring.guideDefinitions_profiles.b00016.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00101"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        }
      ],
      "mainStatPreferences": [
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00011",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_profiles.b00081"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00011"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00081"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00012",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_profiles.b00082"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00012"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00082"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00013",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_profiles.b00083"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00013"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00083"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "anomalyMastery",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00084"
          },
          "unit": "",
          "strict": 420,
          "goal": 360,
          "base": 300
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00085"
          },
          "unit": "",
          "strict": 3000,
          "goal": 2700,
          "base": 2400
        }
      ],
      "sourceLabels": []
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_profiles.b00016.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_profiles.b00016.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_profiles.b00016.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_profiles.b00016.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00011",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_profiles.b00081"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00012",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_profiles.b00082"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00013",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_profiles.b00083"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "factory": {
      "context": {
        "kind": "textRef",
        "id": "guide.legacy.individualGuides_templates.b00004"
      },
      "headlineBindings": {
        "v0": "name",
        "v1": "label"
      },
      "contextBindings": {
        "v0": "name"
      },
      "label": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_profiles.b00086"
      }
    },
    "metadata": {},
    "legacyShape": {
      "fields": [
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
    "guideId": "guide.authoring.guideDefinitions_profiles.b00017",
    "game": "zzz",
    "lookupKey": "ZZZ_PROFILES:stun",
    "lookupKind": "profile",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_profiles.b00017",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_profiles.b00017",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.individualGuides_templates.b00001"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_profiles.b00017.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00102"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        },
        {
          "recommendationId": "guide.authoring.guideDefinitions_profiles.b00017.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00103"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        }
      ],
      "mainStatPreferences": [
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00011",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_profiles.b00087"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00011"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00087"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00012",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_profiles.b00088"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00012"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00088"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00013",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_profiles.b00089"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00013"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00089"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "impact",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00090"
          },
          "unit": "",
          "strict": 190,
          "goal": 175,
          "base": 160
        },
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00091"
          },
          "unit": "",
          "strict": 2600,
          "goal": 2300,
          "base": 2000
        }
      ],
      "sourceLabels": []
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_profiles.b00017.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_profiles.b00017.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_profiles.b00017.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_profiles.b00017.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00011",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_profiles.b00087"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00012",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_profiles.b00088"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00013",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_profiles.b00089"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "factory": {
      "context": {
        "kind": "textRef",
        "id": "guide.legacy.individualGuides_templates.b00004"
      },
      "headlineBindings": {
        "v0": "name",
        "v1": "label"
      },
      "contextBindings": {
        "v0": "name"
      },
      "label": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_profiles.b00092"
      }
    },
    "metadata": {},
    "legacyShape": {
      "fields": [
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
    "guideId": "guide.authoring.guideDefinitions_profiles.b00018",
    "game": "zzz",
    "lookupKey": "ZZZ_PROFILES:support",
    "lookupKind": "profile",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_profiles.b00018",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_profiles.b00018",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.individualGuides_templates.b00001"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_profiles.b00018.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00104"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        },
        {
          "recommendationId": "guide.authoring.guideDefinitions_profiles.b00018.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00105"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        }
      ],
      "mainStatPreferences": [
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00011",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_profiles.b00093"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00011"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00093"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00012",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_profiles.b00094"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00012"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00094"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00013",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_profiles.b00095"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00013"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00095"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "attack",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00096"
          },
          "unit": "",
          "strict": 3600,
          "goal": 3200,
          "base": 2800
        },
        {
          "key": "energyRegen",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00097"
          },
          "unit": "",
          "strict": 1.8,
          "goal": 1.2,
          "base": 0.8
        }
      ],
      "sourceLabels": []
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_profiles.b00018.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_profiles.b00018.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_profiles.b00018.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_profiles.b00018.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00011",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_profiles.b00093"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00012",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_profiles.b00094"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00013",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_profiles.b00095"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "factory": {
      "context": {
        "kind": "textRef",
        "id": "guide.legacy.individualGuides_templates.b00004"
      },
      "headlineBindings": {
        "v0": "name",
        "v1": "label"
      },
      "contextBindings": {
        "v0": "name"
      },
      "label": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_profiles.b00098"
      }
    },
    "metadata": {},
    "legacyShape": {
      "fields": [
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
    "guideId": "guide.authoring.guideDefinitions_profiles.b00019",
    "game": "zzz",
    "lookupKey": "ZZZ_PROFILES:tank",
    "lookupKind": "profile",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_profiles.b00019",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_profiles.b00019",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.individualGuides_templates.b00001"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_profiles.b00019.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00106"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        },
        {
          "recommendationId": "guide.authoring.guideDefinitions_profiles.b00019.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00107"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        }
      ],
      "mainStatPreferences": [
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00011",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_profiles.b00099"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00011"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00099"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00012",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_profiles.b00100"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00012"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00100"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00013",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_profiles.b00101"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00013"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00101"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "hpPercent",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00102"
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
            "id": "guide.legacy.guideDefinitions_profiles.b00103"
          },
          "unit": "",
          "strict": 2400,
          "goal": 2100,
          "base": 1800
        }
      ],
      "sourceLabels": []
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_profiles.b00019.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_profiles.b00019.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_profiles.b00019.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_profiles.b00019.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00011",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_profiles.b00099"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00012",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_profiles.b00100"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00013",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_profiles.b00101"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "factory": {
      "context": {
        "kind": "textRef",
        "id": "guide.legacy.individualGuides_templates.b00004"
      },
      "headlineBindings": {
        "v0": "name",
        "v1": "label"
      },
      "contextBindings": {
        "v0": "name"
      },
      "label": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_profiles.b00104"
      }
    },
    "metadata": {},
    "legacyShape": {
      "fields": [
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
    "guideId": "guide.authoring.guideDefinitions_profiles.b00020",
    "game": "zzz",
    "lookupKey": "ZZZ_PROFILES:rupture",
    "lookupKind": "profile",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_profiles.b00020",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_profiles.b00020",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.individualGuides_templates.b00001"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_profiles.b00020.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00108"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        },
        {
          "recommendationId": "guide.authoring.guideDefinitions_profiles.b00020.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00109"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        }
      ],
      "mainStatPreferences": [
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00011",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_profiles.b00105"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00011"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00105"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00012",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_profiles.b00106"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00012"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00106"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00013",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_profiles.b00107"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00013"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00107"
          }
        }
      ],
      "targetDefinitions": [
        {
          "key": "critRate",
          "label": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00108"
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
            "id": "guide.legacy.guideDefinitions_profiles.b00109"
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
            "id": "guide.legacy.guideDefinitions_profiles.b00110"
          },
          "unit": "%",
          "strict": 50,
          "goal": 35,
          "base": 25
        }
      ],
      "sourceLabels": []
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_profiles.b00020.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_profiles.b00020.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_profiles.b00020.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_profiles.b00020.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00011",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_profiles.b00105"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00012",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_profiles.b00106"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00013",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_profiles.b00107"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "factory": {
      "context": {
        "kind": "textRef",
        "id": "guide.legacy.individualGuides_templates.b00004"
      },
      "headlineBindings": {
        "v0": "name",
        "v1": "label"
      },
      "contextBindings": {
        "v0": "name"
      },
      "label": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_profiles.b00111"
      }
    },
    "metadata": {},
    "legacyShape": {
      "fields": [
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
    "guideId": "guide.authoring.guideDefinitions_profiles.b00021",
    "game": "zzz",
    "lookupKey": "ZZZ_PROFILES:def",
    "lookupKind": "profile",
    "content": {
      "guideId": "guide.authoring.guideDefinitions_profiles.b00021",
      "identityKey": "legacy:zzz:guide.authoring.guideDefinitions_profiles.b00021",
      "headline": {
        "kind": "textRef",
        "id": "guide.legacy.individualGuides_templates.b00001"
      },
      "equipmentRecommendations": [
        {
          "recommendationId": "guide.authoring.guideDefinitions_profiles.b00021.relicSet",
          "order": 1,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00110"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        },
        {
          "recommendationId": "guide.authoring.guideDefinitions_profiles.b00021.planarSet",
          "order": 2,
          "sets": [],
          "description": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00111"
          },
          "reason": {
            "status": "notCollected",
            "reason": "Separate adoption reasons have not been collected",
            "requiredKinds": [
              "adoptionReason"
            ]
          },
          "alternatives": {
            "status": "notCollected",
            "reason": "Separate alternative equipment definitions have not been collected",
            "requiredKinds": [
              "alternatives"
            ]
          }
        }
      ],
      "mainStatPreferences": [
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00011",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_profiles.b00112"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00011"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00112"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00012",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_profiles.b00113"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00012"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00113"
          }
        },
        {
          "slotKey": "legacy:guide.legacy.individualGuides.b00013",
          "statOptions": [
            "legacy:guide.legacy.guideDefinitions_profiles.b00114"
          ],
          "slotLabel": {
            "kind": "textRef",
            "id": "guide.legacy.individualGuides.b00013"
          },
          "value": {
            "kind": "textRef",
            "id": "guide.legacy.guideDefinitions_profiles.b00114"
          }
        }
      ],
      "targetDefinitions": [],
      "targetContext": {
        "kind": "textRef",
        "id": "guide.legacy.individualGuides.b00112"
      },
      "sourceLabels": []
    },
    "equipmentLegacy": [
      {
        "recommendationId": "guide.authoring.guideDefinitions_profiles.b00021.relicSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_profiles.b00021.relicSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      },
      {
        "recommendationId": "guide.authoring.guideDefinitions_profiles.b00021.planarSet",
        "identityKey": "legacy:equipment:guide.authoring.guideDefinitions_profiles.b00021.planarSet",
        "reason": "Existing compound equipment text is preserved without parsing or inferring set IDs or piece counts"
      }
    ],
    "mainStatLegacy": [
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00011",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_profiles.b00112"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00012",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_profiles.b00113"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      },
      {
        "slotKey": "legacy:guide.legacy.individualGuides.b00013",
        "statOptions": [
          "legacy:guide.legacy.guideDefinitions_profiles.b00114"
        ],
        "reason": "Stable legacy keys preserve the existing Japanese calculation comparison; compound stat text is not parsed into guessed StatKeys"
      }
    ],
    "factory": {
      "context": {
        "kind": "textRef",
        "id": "guide.legacy.individualGuides_templates.b00004"
      },
      "headlineBindings": {
        "v0": "name",
        "v1": "label"
      },
      "contextBindings": {
        "v0": "name"
      },
      "label": {
        "kind": "textRef",
        "id": "guide.legacy.guideDefinitions_profiles.b00115"
      }
    },
    "metadata": {},
    "legacyShape": {
      "fields": [
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
      "targetFields": [],
      "tierFields": []
    }
  }
];
