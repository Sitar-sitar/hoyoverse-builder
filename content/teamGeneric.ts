import type { GenericTeamRecipe } from "../shared/content/genericTeamAuthoring";
export const recipes: GenericTeamRecipe[] = [
  {
    game: "hsr",
    profile: "crit",
    rank: 1,
    recipeId: "team.generic.hsr.crit.1",
    team: {
      id: "team.generic.hsr.crit.1",
      game: "hsr",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 1,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01053",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00001",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00002",
          },
          identityKey: "legacy:hsr:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00003",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00004",
          },
          identityKey: "hsr:1309",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00005",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00006",
          },
          identityKey: "hsr:1403",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00007",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00008",
          },
          identityKey: "hsr:1304",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.hsr.crit.1.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "4.4",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00001",
      },
      sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/409824",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00004",
          },
          url: "https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00005",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "hsr",
    profile: "crit",
    rank: 2,
    recipeId: "team.generic.hsr.crit.2",
    team: {
      id: "team.generic.hsr.crit.2",
      game: "hsr",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 2,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01054",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00001",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00009",
          },
          identityKey: "legacy:hsr:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00010",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00011",
          },
          identityKey: "hsr:1306",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00012",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00013",
          },
          identityKey: "hsr:1106",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00014",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00015",
          },
          identityKey: "hsr:1110",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.hsr.crit.2.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "4.4",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00001",
      },
      sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/409824",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00004",
          },
          url: "https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00005",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "hsr",
    profile: "crit",
    rank: 3,
    recipeId: "team.generic.hsr.crit.3",
    team: {
      id: "team.generic.hsr.crit.3",
      game: "hsr",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 3,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01055",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00001",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00016",
          },
          identityKey: "legacy:hsr:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00010",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00017",
          },
          identityKey: "hsr:1306",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00012",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00018",
          },
          identityKey: "hsr:1106",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00014",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00019",
          },
          identityKey: "hsr:1110",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.hsr.crit.3.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "4.4",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00001",
      },
      sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/409824",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00004",
          },
          url: "https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00005",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "hsr",
    profile: "dot",
    rank: 1,
    recipeId: "team.generic.hsr.dot.1",
    team: {
      id: "team.generic.hsr.dot.1",
      game: "hsr",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 1,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01053",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00001",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00020",
          },
          identityKey: "legacy:hsr:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00030",
          },
          role: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_helpers.b00609",
          },
          identityKey: "hsr:1005",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00032",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00021",
          },
          identityKey: "hsr:1307",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00022",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00023",
          },
          identityKey: "hsr:1217",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.hsr.dot.1.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "4.4",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00001",
      },
      sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/409824",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00004",
          },
          url: "https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00005",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "hsr",
    profile: "dot",
    rank: 2,
    recipeId: "team.generic.hsr.dot.2",
    team: {
      id: "team.generic.hsr.dot.2",
      game: "hsr",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 2,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01054",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00001",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00024",
          },
          identityKey: "legacy:hsr:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00033",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00025",
          },
          identityKey: "hsr:1108",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00012",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00026",
          },
          identityKey: "hsr:1106",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00027",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00028",
          },
          identityKey: "hsr:1301",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.hsr.dot.2.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "4.4",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00001",
      },
      sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/409824",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00004",
          },
          url: "https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00005",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "hsr",
    profile: "dot",
    rank: 3,
    recipeId: "team.generic.hsr.dot.3",
    team: {
      id: "team.generic.hsr.dot.3",
      game: "hsr",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 3,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01055",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00001",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00029",
          },
          identityKey: "legacy:hsr:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00033",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00030",
          },
          identityKey: "hsr:1108",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00012",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00031",
          },
          identityKey: "hsr:1106",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00027",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00032",
          },
          identityKey: "hsr:1301",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.hsr.dot.3.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "4.4",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00001",
      },
      sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/409824",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00004",
          },
          url: "https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00005",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "hsr",
    profile: "break",
    rank: 1,
    recipeId: "team.generic.hsr.break.1",
    team: {
      id: "team.generic.hsr.break.1",
      game: "hsr",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 1,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01053",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00001",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00033",
          },
          targetChanges: [
            {
              key: "speed",
              label: {
                kind: "textRef",
                id: "team.generic.master.b00034",
              },
              unit: "",
              targets: {
                厳選: 160,
                目標: 150,
                妥協: 145,
              },
              reason: {
                kind: "textRef",
                id: "guide.legacy.parties_legacyCatalog_helpers.b00585",
              },
            },
          ],
          identityKey: "legacy:hsr:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "guide.legacy.parties_batch25Teams.b00076",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00035",
          },
          identityKey: "hsr:1303",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00023",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00036",
          },
          identityKey: "legacy:hsr:開拓者（調和）",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00552",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00037",
          },
          identityKey: "hsr:1222",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.hsr.break.1.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "4.4",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00001",
      },
      sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/409824",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00004",
          },
          url: "https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00005",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "hsr",
    profile: "break",
    rank: 2,
    recipeId: "team.generic.hsr.break.2",
    team: {
      id: "team.generic.hsr.break.2",
      game: "hsr",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 2,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01054",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00001",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00038",
          },
          identityKey: "legacy:hsr:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00548",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00039",
          },
          identityKey: "hsr:1225",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00023",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00040",
          },
          identityKey: "legacy:hsr:開拓者（調和）",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00027",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00041",
          },
          identityKey: "hsr:1301",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.hsr.break.2.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "4.4",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00001",
      },
      sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/409824",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00004",
          },
          url: "https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00005",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "hsr",
    profile: "break",
    rank: 3,
    recipeId: "team.generic.hsr.break.3",
    team: {
      id: "team.generic.hsr.break.3",
      game: "hsr",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 3,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01055",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00001",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00042",
          },
          identityKey: "legacy:hsr:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00043",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00044",
          },
          identityKey: "hsr:1009",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00023",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00045",
          },
          identityKey: "legacy:hsr:開拓者（調和）",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00027",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00046",
          },
          identityKey: "hsr:1301",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.hsr.break.3.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "4.4",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00001",
      },
      sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/409824",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00004",
          },
          url: "https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00005",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "hsr",
    profile: "support",
    rank: 1,
    recipeId: "team.generic.hsr.support.1",
    team: {
      id: "team.generic.hsr.support.1",
      game: "hsr",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 1,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01053",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00001",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00047",
          },
          targetChanges: [
            {
              key: "speed",
              label: {
                kind: "textRef",
                id: "team.generic.master.b00048",
              },
              unit: "",
              targets: {
                厳選: 161,
                目標: 145,
                妥協: 134,
              },
              reason: {
                kind: "textRef",
                id: "guide.legacy.parties_legacyCatalog_helpers.b00587",
              },
            },
          ],
          identityKey: "legacy:hsr:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "guide.legacy.parties_batch27Teams.b00030",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00049",
          },
          identityKey: "hsr:1402",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00003",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00050",
          },
          identityKey: "hsr:1309",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00005",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00051",
          },
          identityKey: "hsr:1403",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.hsr.support.1.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "4.4",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00001",
      },
      sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/409824",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00004",
          },
          url: "https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00005",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "hsr",
    profile: "support",
    rank: 2,
    recipeId: "team.generic.hsr.support.2",
    team: {
      id: "team.generic.hsr.support.2",
      game: "hsr",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 2,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01054",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00001",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00052",
          },
          identityKey: "legacy:hsr:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "guide.legacy.parties_batch27Teams.b00030",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00053",
          },
          identityKey: "hsr:1402",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00003",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00054",
          },
          identityKey: "hsr:1309",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00005",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00055",
          },
          identityKey: "hsr:1403",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.hsr.support.2.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "4.4",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00001",
      },
      sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/409824",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00004",
          },
          url: "https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00005",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "hsr",
    profile: "support",
    rank: 3,
    recipeId: "team.generic.hsr.support.3",
    team: {
      id: "team.generic.hsr.support.3",
      game: "hsr",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 3,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01055",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00001",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00056",
          },
          identityKey: "legacy:hsr:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "guide.legacy.parties_batch27Teams.b00030",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00057",
          },
          identityKey: "hsr:1402",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00003",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00058",
          },
          identityKey: "hsr:1309",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00005",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00059",
          },
          identityKey: "hsr:1403",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.hsr.support.3.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "4.4",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00001",
      },
      sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/409824",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00004",
          },
          url: "https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00005",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "hsr",
    profile: "sustain",
    rank: 1,
    recipeId: "team.generic.hsr.sustain.1",
    team: {
      id: "team.generic.hsr.sustain.1",
      game: "hsr",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 1,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01053",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00001",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00060",
          },
          identityKey: "legacy:hsr:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "guide.legacy.parties_batch27Teams.b00030",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00061",
          },
          identityKey: "hsr:1402",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00003",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00062",
          },
          identityKey: "hsr:1309",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00005",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00063",
          },
          identityKey: "hsr:1403",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.hsr.sustain.1.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "4.4",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00001",
      },
      sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/409824",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00004",
          },
          url: "https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00005",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "hsr",
    profile: "sustain",
    rank: 2,
    recipeId: "team.generic.hsr.sustain.2",
    team: {
      id: "team.generic.hsr.sustain.2",
      game: "hsr",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 2,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01054",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00001",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00064",
          },
          identityKey: "legacy:hsr:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "guide.legacy.parties_batch27Teams.b00030",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00065",
          },
          identityKey: "hsr:1402",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00003",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00066",
          },
          identityKey: "hsr:1309",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00005",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00067",
          },
          identityKey: "hsr:1403",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.hsr.sustain.2.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "4.4",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00001",
      },
      sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/409824",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00004",
          },
          url: "https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00005",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "hsr",
    profile: "sustain",
    rank: 3,
    recipeId: "team.generic.hsr.sustain.3",
    team: {
      id: "team.generic.hsr.sustain.3",
      game: "hsr",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 3,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01055",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00001",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00068",
          },
          identityKey: "legacy:hsr:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "guide.legacy.parties_batch27Teams.b00030",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00069",
          },
          identityKey: "hsr:1402",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00003",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00070",
          },
          identityKey: "hsr:1309",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00005",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00071",
          },
          identityKey: "hsr:1403",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.hsr.sustain.3.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "4.4",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00001",
      },
      sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/409824",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00004",
          },
          url: "https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00005",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "hsr",
    profile: "tank",
    rank: 1,
    recipeId: "team.generic.hsr.tank.1",
    team: {
      id: "team.generic.hsr.tank.1",
      game: "hsr",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 1,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01053",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00001",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00072",
          },
          identityKey: "legacy:hsr:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "guide.legacy.parties_batch27Teams.b00030",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00073",
          },
          identityKey: "hsr:1402",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00003",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00074",
          },
          identityKey: "hsr:1309",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00005",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00075",
          },
          identityKey: "hsr:1403",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.hsr.tank.1.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "4.4",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00001",
      },
      sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/409824",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00004",
          },
          url: "https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00005",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "hsr",
    profile: "tank",
    rank: 2,
    recipeId: "team.generic.hsr.tank.2",
    team: {
      id: "team.generic.hsr.tank.2",
      game: "hsr",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 2,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01054",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00001",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00076",
          },
          identityKey: "legacy:hsr:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "guide.legacy.parties_batch27Teams.b00030",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00077",
          },
          identityKey: "hsr:1402",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00003",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00078",
          },
          identityKey: "hsr:1309",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00005",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00079",
          },
          identityKey: "hsr:1403",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.hsr.tank.2.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "4.4",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00001",
      },
      sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/409824",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00004",
          },
          url: "https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00005",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "hsr",
    profile: "tank",
    rank: 3,
    recipeId: "team.generic.hsr.tank.3",
    team: {
      id: "team.generic.hsr.tank.3",
      game: "hsr",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 3,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01055",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00001",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00080",
          },
          identityKey: "legacy:hsr:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "guide.legacy.parties_batch27Teams.b00030",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00081",
          },
          identityKey: "hsr:1402",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00003",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00082",
          },
          identityKey: "hsr:1309",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00005",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00083",
          },
          identityKey: "hsr:1403",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.hsr.tank.3.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "4.4",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00001",
      },
      sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/409824",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00004",
          },
          url: "https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00005",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "hsr",
    profile: "hp",
    rank: 1,
    recipeId: "team.generic.hsr.hp.1",
    team: {
      id: "team.generic.hsr.hp.1",
      game: "hsr",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 1,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01053",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00001",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00084",
          },
          identityKey: "legacy:hsr:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00003",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00085",
          },
          identityKey: "hsr:1309",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00005",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00086",
          },
          identityKey: "hsr:1403",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00007",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00087",
          },
          identityKey: "hsr:1304",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.hsr.hp.1.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "4.4",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00001",
      },
      sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/409824",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00004",
          },
          url: "https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00005",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "hsr",
    profile: "hp",
    rank: 2,
    recipeId: "team.generic.hsr.hp.2",
    team: {
      id: "team.generic.hsr.hp.2",
      game: "hsr",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 2,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01054",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00001",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00088",
          },
          identityKey: "legacy:hsr:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00010",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00089",
          },
          identityKey: "hsr:1306",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00012",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00090",
          },
          identityKey: "hsr:1106",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00014",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00091",
          },
          identityKey: "hsr:1110",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.hsr.hp.2.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "4.4",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00001",
      },
      sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/409824",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00004",
          },
          url: "https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00005",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "hsr",
    profile: "hp",
    rank: 3,
    recipeId: "team.generic.hsr.hp.3",
    team: {
      id: "team.generic.hsr.hp.3",
      game: "hsr",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 3,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01055",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00001",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00092",
          },
          identityKey: "legacy:hsr:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00010",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00093",
          },
          identityKey: "hsr:1306",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00012",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00094",
          },
          identityKey: "hsr:1106",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00014",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00095",
          },
          identityKey: "hsr:1110",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.hsr.hp.3.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "4.4",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00001",
      },
      sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/409824",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00004",
          },
          url: "https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00005",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "hsr",
    profile: "def",
    rank: 1,
    recipeId: "team.generic.hsr.def.1",
    team: {
      id: "team.generic.hsr.def.1",
      game: "hsr",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 1,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01053",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00001",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00096",
          },
          identityKey: "legacy:hsr:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00003",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00097",
          },
          identityKey: "hsr:1309",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00005",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00098",
          },
          identityKey: "hsr:1403",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00007",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00099",
          },
          identityKey: "hsr:1304",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.hsr.def.1.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "4.4",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00001",
      },
      sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/409824",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00004",
          },
          url: "https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00005",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "hsr",
    profile: "def",
    rank: 2,
    recipeId: "team.generic.hsr.def.2",
    team: {
      id: "team.generic.hsr.def.2",
      game: "hsr",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 2,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01054",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00001",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00100",
          },
          identityKey: "legacy:hsr:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00010",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00101",
          },
          identityKey: "hsr:1306",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00012",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00102",
          },
          identityKey: "hsr:1106",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00014",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00103",
          },
          identityKey: "hsr:1110",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.hsr.def.2.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "4.4",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00001",
      },
      sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/409824",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00004",
          },
          url: "https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00005",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "hsr",
    profile: "def",
    rank: 3,
    recipeId: "team.generic.hsr.def.3",
    team: {
      id: "team.generic.hsr.def.3",
      game: "hsr",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 3,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01055",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00001",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00104",
          },
          identityKey: "legacy:hsr:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00010",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00105",
          },
          identityKey: "hsr:1306",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00012",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00106",
          },
          identityKey: "hsr:1106",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00014",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00107",
          },
          identityKey: "hsr:1110",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.hsr.def.3.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "4.4",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00001",
      },
      sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/409824",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00004",
          },
          url: "https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00005",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "hsr",
    profile: "em",
    rank: 1,
    recipeId: "team.generic.hsr.em.1",
    team: {
      id: "team.generic.hsr.em.1",
      game: "hsr",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 1,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01053",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00001",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00108",
          },
          identityKey: "legacy:hsr:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00003",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00109",
          },
          identityKey: "hsr:1309",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00005",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00110",
          },
          identityKey: "hsr:1403",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00007",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00111",
          },
          identityKey: "hsr:1304",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.hsr.em.1.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "4.4",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00001",
      },
      sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/409824",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00004",
          },
          url: "https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00005",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "hsr",
    profile: "em",
    rank: 2,
    recipeId: "team.generic.hsr.em.2",
    team: {
      id: "team.generic.hsr.em.2",
      game: "hsr",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 2,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01054",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00001",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00112",
          },
          identityKey: "legacy:hsr:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00010",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00113",
          },
          identityKey: "hsr:1306",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00012",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00114",
          },
          identityKey: "hsr:1106",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00014",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00115",
          },
          identityKey: "hsr:1110",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.hsr.em.2.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "4.4",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00001",
      },
      sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/409824",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00004",
          },
          url: "https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00005",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "hsr",
    profile: "em",
    rank: 3,
    recipeId: "team.generic.hsr.em.3",
    team: {
      id: "team.generic.hsr.em.3",
      game: "hsr",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 3,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01055",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00001",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00116",
          },
          identityKey: "legacy:hsr:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00010",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00117",
          },
          identityKey: "hsr:1306",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00012",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00118",
          },
          identityKey: "hsr:1106",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00014",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00119",
          },
          identityKey: "hsr:1110",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.hsr.em.3.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "4.4",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00001",
      },
      sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/409824",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00004",
          },
          url: "https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00005",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "hsr",
    profile: "anomaly",
    rank: 1,
    recipeId: "team.generic.hsr.anomaly.1",
    team: {
      id: "team.generic.hsr.anomaly.1",
      game: "hsr",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 1,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01053",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00001",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00120",
          },
          identityKey: "legacy:hsr:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00003",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00121",
          },
          identityKey: "hsr:1309",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00005",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00122",
          },
          identityKey: "hsr:1403",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00007",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00123",
          },
          identityKey: "hsr:1304",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.hsr.anomaly.1.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "4.4",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00001",
      },
      sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/409824",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00004",
          },
          url: "https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00005",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "hsr",
    profile: "anomaly",
    rank: 2,
    recipeId: "team.generic.hsr.anomaly.2",
    team: {
      id: "team.generic.hsr.anomaly.2",
      game: "hsr",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 2,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01054",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00001",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00124",
          },
          identityKey: "legacy:hsr:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00010",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00125",
          },
          identityKey: "hsr:1306",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00012",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00126",
          },
          identityKey: "hsr:1106",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00014",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00127",
          },
          identityKey: "hsr:1110",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.hsr.anomaly.2.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "4.4",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00001",
      },
      sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/409824",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00004",
          },
          url: "https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00005",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "hsr",
    profile: "anomaly",
    rank: 3,
    recipeId: "team.generic.hsr.anomaly.3",
    team: {
      id: "team.generic.hsr.anomaly.3",
      game: "hsr",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 3,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01055",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00001",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00128",
          },
          identityKey: "legacy:hsr:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00010",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00129",
          },
          identityKey: "hsr:1306",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00012",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00130",
          },
          identityKey: "hsr:1106",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00014",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00131",
          },
          identityKey: "hsr:1110",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.hsr.anomaly.3.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "4.4",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00001",
      },
      sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/409824",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00004",
          },
          url: "https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00005",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "hsr",
    profile: "stun",
    rank: 1,
    recipeId: "team.generic.hsr.stun.1",
    team: {
      id: "team.generic.hsr.stun.1",
      game: "hsr",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 1,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01053",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00001",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00132",
          },
          identityKey: "legacy:hsr:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00003",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00133",
          },
          identityKey: "hsr:1309",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00005",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00134",
          },
          identityKey: "hsr:1403",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00007",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00135",
          },
          identityKey: "hsr:1304",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.hsr.stun.1.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "4.4",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00001",
      },
      sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/409824",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00004",
          },
          url: "https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00005",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "hsr",
    profile: "stun",
    rank: 2,
    recipeId: "team.generic.hsr.stun.2",
    team: {
      id: "team.generic.hsr.stun.2",
      game: "hsr",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 2,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01054",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00001",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00136",
          },
          identityKey: "legacy:hsr:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00010",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00137",
          },
          identityKey: "hsr:1306",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00012",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00138",
          },
          identityKey: "hsr:1106",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00014",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00139",
          },
          identityKey: "hsr:1110",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.hsr.stun.2.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "4.4",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00001",
      },
      sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/409824",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00004",
          },
          url: "https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00005",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "hsr",
    profile: "stun",
    rank: 3,
    recipeId: "team.generic.hsr.stun.3",
    team: {
      id: "team.generic.hsr.stun.3",
      game: "hsr",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 3,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01055",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00001",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00140",
          },
          identityKey: "legacy:hsr:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00010",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00141",
          },
          identityKey: "hsr:1306",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00012",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00142",
          },
          identityKey: "hsr:1106",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00014",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00143",
          },
          identityKey: "hsr:1110",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.hsr.stun.3.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "4.4",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00001",
      },
      sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/409824",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00004",
          },
          url: "https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00005",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "hsr",
    profile: "rupture",
    rank: 1,
    recipeId: "team.generic.hsr.rupture.1",
    team: {
      id: "team.generic.hsr.rupture.1",
      game: "hsr",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 1,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01053",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00001",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00144",
          },
          identityKey: "legacy:hsr:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00003",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00145",
          },
          identityKey: "hsr:1309",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00005",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00146",
          },
          identityKey: "hsr:1403",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00007",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00147",
          },
          identityKey: "hsr:1304",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.hsr.rupture.1.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "4.4",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00001",
      },
      sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/409824",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00004",
          },
          url: "https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00005",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "hsr",
    profile: "rupture",
    rank: 2,
    recipeId: "team.generic.hsr.rupture.2",
    team: {
      id: "team.generic.hsr.rupture.2",
      game: "hsr",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 2,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01054",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00001",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00148",
          },
          identityKey: "legacy:hsr:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00010",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00149",
          },
          identityKey: "hsr:1306",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00012",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00150",
          },
          identityKey: "hsr:1106",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00014",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00151",
          },
          identityKey: "hsr:1110",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.hsr.rupture.2.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "4.4",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00001",
      },
      sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/409824",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00004",
          },
          url: "https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00005",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "hsr",
    profile: "rupture",
    rank: 3,
    recipeId: "team.generic.hsr.rupture.3",
    team: {
      id: "team.generic.hsr.rupture.3",
      game: "hsr",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 3,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01055",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00001",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00152",
          },
          identityKey: "legacy:hsr:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00010",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00153",
          },
          identityKey: "hsr:1306",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00012",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00154",
          },
          identityKey: "hsr:1106",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00014",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00155",
          },
          identityKey: "hsr:1110",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.hsr.rupture.3.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "4.4",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00001",
      },
      sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/409824",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00004",
          },
          url: "https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00005",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "genshin",
    profile: "crit",
    rank: 1,
    recipeId: "team.generic.genshin.crit.1",
    team: {
      id: "team.generic.genshin.crit.1",
      game: "genshin",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 1,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01053",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00156",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00157",
          },
          identityKey: "legacy:genshin:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00158",
          },
          role: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_helpers.b00647",
          },
          identityKey: "genshin:10000089",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00094",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00159",
          },
          identityKey: "genshin:10000047",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00160",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00161",
          },
          identityKey: "genshin:10000032",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.genshin.crit.1.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "7.0",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00002",
      },
      sourceUrl: "https://game8.co/games/Genshin-Impact/archives/301819",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00006",
          },
          url: "https://x.com/G8_Genshin",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00007",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "genshin",
    profile: "crit",
    rank: 2,
    recipeId: "team.generic.genshin.crit.2",
    team: {
      id: "team.generic.genshin.crit.2",
      game: "genshin",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 2,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01054",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00156",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00162",
          },
          identityKey: "legacy:genshin:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00163",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00164",
          },
          identityKey: "genshin:10000025",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00107",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00165",
          },
          identityKey: "genshin:10000031",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00106",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00166",
          },
          identityKey: "genshin:10000030",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.genshin.crit.2.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "7.0",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00002",
      },
      sourceUrl: "https://game8.co/games/Genshin-Impact/archives/301819",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00006",
          },
          url: "https://x.com/G8_Genshin",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00007",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "genshin",
    profile: "crit",
    rank: 3,
    recipeId: "team.generic.genshin.crit.3",
    team: {
      id: "team.generic.genshin.crit.3",
      game: "genshin",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 3,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01055",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00156",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00167",
          },
          identityKey: "legacy:genshin:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00163",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00168",
          },
          identityKey: "genshin:10000025",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00107",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00169",
          },
          identityKey: "genshin:10000031",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00106",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00170",
          },
          identityKey: "genshin:10000030",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.genshin.crit.3.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "7.0",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00002",
      },
      sourceUrl: "https://game8.co/games/Genshin-Impact/archives/301819",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00006",
          },
          url: "https://x.com/G8_Genshin",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00007",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "genshin",
    profile: "dot",
    rank: 1,
    recipeId: "team.generic.genshin.dot.1",
    team: {
      id: "team.generic.genshin.dot.1",
      game: "genshin",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 1,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01053",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00156",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00171",
          },
          identityKey: "legacy:genshin:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00158",
          },
          role: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_helpers.b00647",
          },
          identityKey: "genshin:10000089",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00094",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00172",
          },
          identityKey: "genshin:10000047",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00160",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00173",
          },
          identityKey: "genshin:10000032",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.genshin.dot.1.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "7.0",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00002",
      },
      sourceUrl: "https://game8.co/games/Genshin-Impact/archives/301819",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00006",
          },
          url: "https://x.com/G8_Genshin",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00007",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "genshin",
    profile: "dot",
    rank: 2,
    recipeId: "team.generic.genshin.dot.2",
    team: {
      id: "team.generic.genshin.dot.2",
      game: "genshin",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 2,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01054",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00156",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00174",
          },
          identityKey: "legacy:genshin:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00163",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00175",
          },
          identityKey: "genshin:10000025",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00107",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00176",
          },
          identityKey: "genshin:10000031",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00106",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00177",
          },
          identityKey: "genshin:10000030",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.genshin.dot.2.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "7.0",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00002",
      },
      sourceUrl: "https://game8.co/games/Genshin-Impact/archives/301819",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00006",
          },
          url: "https://x.com/G8_Genshin",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00007",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "genshin",
    profile: "dot",
    rank: 3,
    recipeId: "team.generic.genshin.dot.3",
    team: {
      id: "team.generic.genshin.dot.3",
      game: "genshin",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 3,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01055",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00156",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00178",
          },
          identityKey: "legacy:genshin:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00163",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00179",
          },
          identityKey: "genshin:10000025",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00107",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00180",
          },
          identityKey: "genshin:10000031",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00106",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00181",
          },
          identityKey: "genshin:10000030",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.genshin.dot.3.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "7.0",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00002",
      },
      sourceUrl: "https://game8.co/games/Genshin-Impact/archives/301819",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00006",
          },
          url: "https://x.com/G8_Genshin",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00007",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "genshin",
    profile: "break",
    rank: 1,
    recipeId: "team.generic.genshin.break.1",
    team: {
      id: "team.generic.genshin.break.1",
      game: "genshin",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 1,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01053",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00156",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00182",
          },
          identityKey: "legacy:genshin:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00158",
          },
          role: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_helpers.b00647",
          },
          identityKey: "genshin:10000089",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00094",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00183",
          },
          identityKey: "genshin:10000047",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00160",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00184",
          },
          identityKey: "genshin:10000032",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.genshin.break.1.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "7.0",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00002",
      },
      sourceUrl: "https://game8.co/games/Genshin-Impact/archives/301819",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00006",
          },
          url: "https://x.com/G8_Genshin",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00007",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "genshin",
    profile: "break",
    rank: 2,
    recipeId: "team.generic.genshin.break.2",
    team: {
      id: "team.generic.genshin.break.2",
      game: "genshin",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 2,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01054",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00156",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00185",
          },
          identityKey: "legacy:genshin:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00163",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00186",
          },
          identityKey: "genshin:10000025",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00107",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00187",
          },
          identityKey: "genshin:10000031",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00106",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00188",
          },
          identityKey: "genshin:10000030",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.genshin.break.2.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "7.0",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00002",
      },
      sourceUrl: "https://game8.co/games/Genshin-Impact/archives/301819",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00006",
          },
          url: "https://x.com/G8_Genshin",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00007",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "genshin",
    profile: "break",
    rank: 3,
    recipeId: "team.generic.genshin.break.3",
    team: {
      id: "team.generic.genshin.break.3",
      game: "genshin",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 3,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01055",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00156",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00189",
          },
          identityKey: "legacy:genshin:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00163",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00190",
          },
          identityKey: "genshin:10000025",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00107",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00191",
          },
          identityKey: "genshin:10000031",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00106",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00192",
          },
          identityKey: "genshin:10000030",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.genshin.break.3.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "7.0",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00002",
      },
      sourceUrl: "https://game8.co/games/Genshin-Impact/archives/301819",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00006",
          },
          url: "https://x.com/G8_Genshin",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00007",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "genshin",
    profile: "support",
    rank: 1,
    recipeId: "team.generic.genshin.support.1",
    team: {
      id: "team.generic.genshin.support.1",
      game: "genshin",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 1,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01053",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00156",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00193",
          },
          targetChanges: [
            {
              key: "energyRecharge",
              label: {
                kind: "textRef",
                id: "guide.legacy.parties_legacyCatalog_helpers.b00590",
              },
              unit: "%",
              targets: {
                厳選: 250,
                目標: 200,
                妥協: 170,
              },
              reason: {
                kind: "textRef",
                id: "guide.legacy.parties_legacyCatalog_helpers.b00591",
              },
            },
          ],
          identityKey: "legacy:genshin:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00101",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00194",
          },
          identityKey: "genshin:10000096",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00094",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00195",
          },
          identityKey: "genshin:10000047",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00106",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00196",
          },
          identityKey: "genshin:10000030",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.genshin.support.1.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "7.0",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00002",
      },
      sourceUrl: "https://game8.co/games/Genshin-Impact/archives/301819",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00006",
          },
          url: "https://x.com/G8_Genshin",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00007",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "genshin",
    profile: "support",
    rank: 2,
    recipeId: "team.generic.genshin.support.2",
    team: {
      id: "team.generic.genshin.support.2",
      game: "genshin",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 2,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01054",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00156",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00197",
          },
          identityKey: "legacy:genshin:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00101",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00198",
          },
          identityKey: "genshin:10000096",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00094",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00199",
          },
          identityKey: "genshin:10000047",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00106",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00200",
          },
          identityKey: "genshin:10000030",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.genshin.support.2.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "7.0",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00002",
      },
      sourceUrl: "https://game8.co/games/Genshin-Impact/archives/301819",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00006",
          },
          url: "https://x.com/G8_Genshin",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00007",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "genshin",
    profile: "support",
    rank: 3,
    recipeId: "team.generic.genshin.support.3",
    team: {
      id: "team.generic.genshin.support.3",
      game: "genshin",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 3,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01055",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00156",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00201",
          },
          identityKey: "legacy:genshin:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00101",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00202",
          },
          identityKey: "genshin:10000096",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00094",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00203",
          },
          identityKey: "genshin:10000047",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00106",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00204",
          },
          identityKey: "genshin:10000030",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.genshin.support.3.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "7.0",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00002",
      },
      sourceUrl: "https://game8.co/games/Genshin-Impact/archives/301819",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00006",
          },
          url: "https://x.com/G8_Genshin",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00007",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "genshin",
    profile: "sustain",
    rank: 1,
    recipeId: "team.generic.genshin.sustain.1",
    team: {
      id: "team.generic.genshin.sustain.1",
      game: "genshin",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 1,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01053",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00156",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_helpers.b00633",
          },
          identityKey: "legacy:genshin:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00101",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00205",
          },
          identityKey: "genshin:10000096",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00094",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00206",
          },
          identityKey: "genshin:10000047",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00106",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00207",
          },
          identityKey: "genshin:10000030",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.genshin.sustain.1.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "7.0",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00002",
      },
      sourceUrl: "https://game8.co/games/Genshin-Impact/archives/301819",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00006",
          },
          url: "https://x.com/G8_Genshin",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00007",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "genshin",
    profile: "sustain",
    rank: 2,
    recipeId: "team.generic.genshin.sustain.2",
    team: {
      id: "team.generic.genshin.sustain.2",
      game: "genshin",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 2,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01054",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00156",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_helpers.b00633",
          },
          identityKey: "legacy:genshin:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00101",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00208",
          },
          identityKey: "genshin:10000096",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00094",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00209",
          },
          identityKey: "genshin:10000047",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00106",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00210",
          },
          identityKey: "genshin:10000030",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.genshin.sustain.2.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "7.0",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00002",
      },
      sourceUrl: "https://game8.co/games/Genshin-Impact/archives/301819",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00006",
          },
          url: "https://x.com/G8_Genshin",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00007",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "genshin",
    profile: "sustain",
    rank: 3,
    recipeId: "team.generic.genshin.sustain.3",
    team: {
      id: "team.generic.genshin.sustain.3",
      game: "genshin",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 3,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01055",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00156",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_helpers.b00633",
          },
          identityKey: "legacy:genshin:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00101",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00211",
          },
          identityKey: "genshin:10000096",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00094",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00212",
          },
          identityKey: "genshin:10000047",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00106",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00213",
          },
          identityKey: "genshin:10000030",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.genshin.sustain.3.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "7.0",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00002",
      },
      sourceUrl: "https://game8.co/games/Genshin-Impact/archives/301819",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00006",
          },
          url: "https://x.com/G8_Genshin",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00007",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "genshin",
    profile: "tank",
    rank: 1,
    recipeId: "team.generic.genshin.tank.1",
    team: {
      id: "team.generic.genshin.tank.1",
      game: "genshin",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 1,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01053",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00156",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00214",
          },
          identityKey: "legacy:genshin:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00158",
          },
          role: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_helpers.b00647",
          },
          identityKey: "genshin:10000089",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00094",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00215",
          },
          identityKey: "genshin:10000047",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00160",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00216",
          },
          identityKey: "genshin:10000032",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.genshin.tank.1.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "7.0",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00002",
      },
      sourceUrl: "https://game8.co/games/Genshin-Impact/archives/301819",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00006",
          },
          url: "https://x.com/G8_Genshin",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00007",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "genshin",
    profile: "tank",
    rank: 2,
    recipeId: "team.generic.genshin.tank.2",
    team: {
      id: "team.generic.genshin.tank.2",
      game: "genshin",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 2,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01054",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00156",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00217",
          },
          identityKey: "legacy:genshin:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00163",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00218",
          },
          identityKey: "genshin:10000025",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00107",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00219",
          },
          identityKey: "genshin:10000031",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00106",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00220",
          },
          identityKey: "genshin:10000030",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.genshin.tank.2.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "7.0",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00002",
      },
      sourceUrl: "https://game8.co/games/Genshin-Impact/archives/301819",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00006",
          },
          url: "https://x.com/G8_Genshin",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00007",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "genshin",
    profile: "tank",
    rank: 3,
    recipeId: "team.generic.genshin.tank.3",
    team: {
      id: "team.generic.genshin.tank.3",
      game: "genshin",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 3,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01055",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00156",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00221",
          },
          identityKey: "legacy:genshin:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00163",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00222",
          },
          identityKey: "genshin:10000025",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00107",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00223",
          },
          identityKey: "genshin:10000031",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00106",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00224",
          },
          identityKey: "genshin:10000030",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.genshin.tank.3.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "7.0",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00002",
      },
      sourceUrl: "https://game8.co/games/Genshin-Impact/archives/301819",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00006",
          },
          url: "https://x.com/G8_Genshin",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00007",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "genshin",
    profile: "hp",
    rank: 1,
    recipeId: "team.generic.genshin.hp.1",
    team: {
      id: "team.generic.genshin.hp.1",
      game: "genshin",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 1,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01053",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00156",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00225",
          },
          identityKey: "legacy:genshin:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00158",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00226",
          },
          identityKey: "genshin:10000089",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00094",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00227",
          },
          identityKey: "genshin:10000047",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00228",
          },
          role: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_helpers.b00645",
          },
          identityKey: "genshin:10000082",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.genshin.hp.1.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "7.0",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00002",
      },
      sourceUrl: "https://game8.co/games/Genshin-Impact/archives/301819",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00006",
          },
          url: "https://x.com/G8_Genshin",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00007",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "genshin",
    profile: "hp",
    rank: 2,
    recipeId: "team.generic.genshin.hp.2",
    team: {
      id: "team.generic.genshin.hp.2",
      game: "genshin",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 2,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01054",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00156",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00229",
          },
          identityKey: "legacy:genshin:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00158",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00230",
          },
          identityKey: "genshin:10000089",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00094",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00231",
          },
          identityKey: "genshin:10000047",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00228",
          },
          role: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_helpers.b00645",
          },
          identityKey: "genshin:10000082",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.genshin.hp.2.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "7.0",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00002",
      },
      sourceUrl: "https://game8.co/games/Genshin-Impact/archives/301819",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00006",
          },
          url: "https://x.com/G8_Genshin",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00007",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "genshin",
    profile: "hp",
    rank: 3,
    recipeId: "team.generic.genshin.hp.3",
    team: {
      id: "team.generic.genshin.hp.3",
      game: "genshin",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 3,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01055",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00156",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00232",
          },
          identityKey: "legacy:genshin:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00158",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00233",
          },
          identityKey: "genshin:10000089",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00094",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00234",
          },
          identityKey: "genshin:10000047",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00228",
          },
          role: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_helpers.b00645",
          },
          identityKey: "genshin:10000082",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.genshin.hp.3.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "7.0",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00002",
      },
      sourceUrl: "https://game8.co/games/Genshin-Impact/archives/301819",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00006",
          },
          url: "https://x.com/G8_Genshin",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00007",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "genshin",
    profile: "def",
    rank: 1,
    recipeId: "team.generic.genshin.def.1",
    team: {
      id: "team.generic.genshin.def.1",
      game: "genshin",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 1,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01053",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00156",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00235",
          },
          identityKey: "legacy:genshin:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00236",
          },
          role: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_helpers.b00639",
          },
          identityKey: "genshin:10000055",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00158",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00237",
          },
          identityKey: "genshin:10000089",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00106",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00238",
          },
          identityKey: "genshin:10000030",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.genshin.def.1.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "7.0",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00002",
      },
      sourceUrl: "https://game8.co/games/Genshin-Impact/archives/301819",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00006",
          },
          url: "https://x.com/G8_Genshin",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00007",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "genshin",
    profile: "def",
    rank: 2,
    recipeId: "team.generic.genshin.def.2",
    team: {
      id: "team.generic.genshin.def.2",
      game: "genshin",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 2,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01054",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00156",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00239",
          },
          identityKey: "legacy:genshin:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00236",
          },
          role: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_helpers.b00639",
          },
          identityKey: "genshin:10000055",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00158",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00240",
          },
          identityKey: "genshin:10000089",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00106",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00241",
          },
          identityKey: "genshin:10000030",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.genshin.def.2.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "7.0",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00002",
      },
      sourceUrl: "https://game8.co/games/Genshin-Impact/archives/301819",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00006",
          },
          url: "https://x.com/G8_Genshin",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00007",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "genshin",
    profile: "def",
    rank: 3,
    recipeId: "team.generic.genshin.def.3",
    team: {
      id: "team.generic.genshin.def.3",
      game: "genshin",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 3,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01055",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00156",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00242",
          },
          identityKey: "legacy:genshin:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00236",
          },
          role: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_helpers.b00639",
          },
          identityKey: "genshin:10000055",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00158",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00243",
          },
          identityKey: "genshin:10000089",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00106",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00244",
          },
          identityKey: "genshin:10000030",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.genshin.def.3.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "7.0",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00002",
      },
      sourceUrl: "https://game8.co/games/Genshin-Impact/archives/301819",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00006",
          },
          url: "https://x.com/G8_Genshin",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00007",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "genshin",
    profile: "em",
    rank: 1,
    recipeId: "team.generic.genshin.em.1",
    team: {
      id: "team.generic.genshin.em.1",
      game: "genshin",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 1,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01053",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00156",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_helpers.b00629",
          },
          targetChanges: [
            {
              key: "elementalMastery",
              label: {
                kind: "textRef",
                id: "team.generic.master.b00245",
              },
              unit: "",
              targets: {
                厳選: 1000,
                目標: 800,
                妥協: 650,
              },
              reason: {
                kind: "textRef",
                id: "guide.legacy.parties_legacyCatalog_helpers.b00589",
              },
            },
          ],
          identityKey: "legacy:genshin:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00246",
          },
          role: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_helpers.b00630",
          },
          identityKey: "genshin:10000073",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00163",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00247",
          },
          identityKey: "genshin:10000025",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00104",
          },
          role: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_helpers.b00632",
          },
          identityKey: "genshin:10000065",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.genshin.em.1.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "7.0",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00002",
      },
      sourceUrl: "https://game8.co/games/Genshin-Impact/archives/301819",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00006",
          },
          url: "https://x.com/G8_Genshin",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00007",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "genshin",
    profile: "em",
    rank: 2,
    recipeId: "team.generic.genshin.em.2",
    team: {
      id: "team.generic.genshin.em.2",
      game: "genshin",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 2,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01054",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00156",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_helpers.b00629",
          },
          identityKey: "legacy:genshin:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00246",
          },
          role: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_helpers.b00630",
          },
          identityKey: "genshin:10000073",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00163",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00248",
          },
          identityKey: "genshin:10000025",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00104",
          },
          role: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_helpers.b00632",
          },
          identityKey: "genshin:10000065",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.genshin.em.2.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "7.0",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00002",
      },
      sourceUrl: "https://game8.co/games/Genshin-Impact/archives/301819",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00006",
          },
          url: "https://x.com/G8_Genshin",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00007",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "genshin",
    profile: "em",
    rank: 3,
    recipeId: "team.generic.genshin.em.3",
    team: {
      id: "team.generic.genshin.em.3",
      game: "genshin",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 3,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01055",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00156",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_helpers.b00629",
          },
          identityKey: "legacy:genshin:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00246",
          },
          role: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_helpers.b00630",
          },
          identityKey: "genshin:10000073",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00163",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00249",
          },
          identityKey: "genshin:10000025",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00104",
          },
          role: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_helpers.b00632",
          },
          identityKey: "genshin:10000065",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.genshin.em.3.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "7.0",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00002",
      },
      sourceUrl: "https://game8.co/games/Genshin-Impact/archives/301819",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00006",
          },
          url: "https://x.com/G8_Genshin",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00007",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "genshin",
    profile: "anomaly",
    rank: 1,
    recipeId: "team.generic.genshin.anomaly.1",
    team: {
      id: "team.generic.genshin.anomaly.1",
      game: "genshin",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 1,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01053",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00156",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00250",
          },
          identityKey: "legacy:genshin:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00158",
          },
          role: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_helpers.b00647",
          },
          identityKey: "genshin:10000089",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00094",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00251",
          },
          identityKey: "genshin:10000047",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00160",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00252",
          },
          identityKey: "genshin:10000032",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.genshin.anomaly.1.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "7.0",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00002",
      },
      sourceUrl: "https://game8.co/games/Genshin-Impact/archives/301819",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00006",
          },
          url: "https://x.com/G8_Genshin",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00007",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "genshin",
    profile: "anomaly",
    rank: 2,
    recipeId: "team.generic.genshin.anomaly.2",
    team: {
      id: "team.generic.genshin.anomaly.2",
      game: "genshin",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 2,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01054",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00156",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00253",
          },
          identityKey: "legacy:genshin:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00163",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00254",
          },
          identityKey: "genshin:10000025",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00107",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00255",
          },
          identityKey: "genshin:10000031",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00106",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00256",
          },
          identityKey: "genshin:10000030",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.genshin.anomaly.2.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "7.0",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00002",
      },
      sourceUrl: "https://game8.co/games/Genshin-Impact/archives/301819",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00006",
          },
          url: "https://x.com/G8_Genshin",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00007",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "genshin",
    profile: "anomaly",
    rank: 3,
    recipeId: "team.generic.genshin.anomaly.3",
    team: {
      id: "team.generic.genshin.anomaly.3",
      game: "genshin",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 3,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01055",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00156",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00257",
          },
          identityKey: "legacy:genshin:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00163",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00258",
          },
          identityKey: "genshin:10000025",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00107",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00259",
          },
          identityKey: "genshin:10000031",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00106",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00260",
          },
          identityKey: "genshin:10000030",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.genshin.anomaly.3.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "7.0",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00002",
      },
      sourceUrl: "https://game8.co/games/Genshin-Impact/archives/301819",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00006",
          },
          url: "https://x.com/G8_Genshin",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00007",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "genshin",
    profile: "stun",
    rank: 1,
    recipeId: "team.generic.genshin.stun.1",
    team: {
      id: "team.generic.genshin.stun.1",
      game: "genshin",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 1,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01053",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00156",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00261",
          },
          identityKey: "legacy:genshin:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00158",
          },
          role: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_helpers.b00647",
          },
          identityKey: "genshin:10000089",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00094",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00262",
          },
          identityKey: "genshin:10000047",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00160",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00263",
          },
          identityKey: "genshin:10000032",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.genshin.stun.1.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "7.0",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00002",
      },
      sourceUrl: "https://game8.co/games/Genshin-Impact/archives/301819",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00006",
          },
          url: "https://x.com/G8_Genshin",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00007",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "genshin",
    profile: "stun",
    rank: 2,
    recipeId: "team.generic.genshin.stun.2",
    team: {
      id: "team.generic.genshin.stun.2",
      game: "genshin",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 2,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01054",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00156",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00264",
          },
          identityKey: "legacy:genshin:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00163",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00265",
          },
          identityKey: "genshin:10000025",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00107",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00266",
          },
          identityKey: "genshin:10000031",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00106",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00267",
          },
          identityKey: "genshin:10000030",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.genshin.stun.2.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "7.0",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00002",
      },
      sourceUrl: "https://game8.co/games/Genshin-Impact/archives/301819",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00006",
          },
          url: "https://x.com/G8_Genshin",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00007",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "genshin",
    profile: "stun",
    rank: 3,
    recipeId: "team.generic.genshin.stun.3",
    team: {
      id: "team.generic.genshin.stun.3",
      game: "genshin",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 3,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01055",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00156",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00268",
          },
          identityKey: "legacy:genshin:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00163",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00269",
          },
          identityKey: "genshin:10000025",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00107",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00270",
          },
          identityKey: "genshin:10000031",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00106",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00271",
          },
          identityKey: "genshin:10000030",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.genshin.stun.3.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "7.0",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00002",
      },
      sourceUrl: "https://game8.co/games/Genshin-Impact/archives/301819",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00006",
          },
          url: "https://x.com/G8_Genshin",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00007",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "genshin",
    profile: "rupture",
    rank: 1,
    recipeId: "team.generic.genshin.rupture.1",
    team: {
      id: "team.generic.genshin.rupture.1",
      game: "genshin",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 1,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01053",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00156",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00272",
          },
          identityKey: "legacy:genshin:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00158",
          },
          role: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_helpers.b00647",
          },
          identityKey: "genshin:10000089",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00094",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00273",
          },
          identityKey: "genshin:10000047",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00160",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00274",
          },
          identityKey: "genshin:10000032",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.genshin.rupture.1.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "7.0",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00002",
      },
      sourceUrl: "https://game8.co/games/Genshin-Impact/archives/301819",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00006",
          },
          url: "https://x.com/G8_Genshin",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00007",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "genshin",
    profile: "rupture",
    rank: 2,
    recipeId: "team.generic.genshin.rupture.2",
    team: {
      id: "team.generic.genshin.rupture.2",
      game: "genshin",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 2,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01054",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00156",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00275",
          },
          identityKey: "legacy:genshin:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00163",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00276",
          },
          identityKey: "genshin:10000025",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00107",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00277",
          },
          identityKey: "genshin:10000031",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00106",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00278",
          },
          identityKey: "genshin:10000030",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.genshin.rupture.2.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "7.0",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00002",
      },
      sourceUrl: "https://game8.co/games/Genshin-Impact/archives/301819",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00006",
          },
          url: "https://x.com/G8_Genshin",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00007",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "genshin",
    profile: "rupture",
    rank: 3,
    recipeId: "team.generic.genshin.rupture.3",
    team: {
      id: "team.generic.genshin.rupture.3",
      game: "genshin",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 3,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01055",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00156",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00279",
          },
          identityKey: "legacy:genshin:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00163",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00280",
          },
          identityKey: "genshin:10000025",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00107",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00281",
          },
          identityKey: "genshin:10000031",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00106",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00282",
          },
          identityKey: "genshin:10000030",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.genshin.rupture.3.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "7.0",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00002",
      },
      sourceUrl: "https://game8.co/games/Genshin-Impact/archives/301819",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00006",
          },
          url: "https://x.com/G8_Genshin",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00007",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "zzz",
    profile: "crit",
    rank: 1,
    recipeId: "team.generic.zzz.crit.1",
    team: {
      id: "team.generic.zzz.crit.1",
      game: "zzz",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 1,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01053",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00283",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00284",
          },
          identityKey: "legacy:zzz:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00960",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00285",
          },
          identityKey: "zzz:1161",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00286",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00287",
          },
          identityKey: "zzz:1311",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.zzz.crit.1.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "3.1",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00003",
      },
      sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/458656",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00008",
          },
          url: "https://x.com/Zenless_Game8",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00009",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "zzz",
    profile: "crit",
    rank: 2,
    recipeId: "team.generic.zzz.crit.2",
    team: {
      id: "team.generic.zzz.crit.2",
      game: "zzz",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 2,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01054",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00283",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00288",
          },
          identityKey: "legacy:zzz:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00960",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00289",
          },
          identityKey: "zzz:1161",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00286",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00290",
          },
          identityKey: "zzz:1311",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.zzz.crit.2.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "3.1",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00003",
      },
      sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/458656",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00008",
          },
          url: "https://x.com/Zenless_Game8",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00009",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "zzz",
    profile: "crit",
    rank: 3,
    recipeId: "team.generic.zzz.crit.3",
    team: {
      id: "team.generic.zzz.crit.3",
      game: "zzz",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 3,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01055",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00283",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00291",
          },
          identityKey: "legacy:zzz:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00960",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00292",
          },
          identityKey: "zzz:1161",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00286",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00293",
          },
          identityKey: "zzz:1311",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.zzz.crit.3.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "3.1",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00003",
      },
      sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/458656",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00008",
          },
          url: "https://x.com/Zenless_Game8",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00009",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "zzz",
    profile: "dot",
    rank: 1,
    recipeId: "team.generic.zzz.dot.1",
    team: {
      id: "team.generic.zzz.dot.1",
      game: "zzz",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 1,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01053",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00283",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00294",
          },
          identityKey: "legacy:zzz:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00960",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00295",
          },
          identityKey: "zzz:1161",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00286",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00296",
          },
          identityKey: "zzz:1311",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.zzz.dot.1.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "3.1",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00003",
      },
      sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/458656",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00008",
          },
          url: "https://x.com/Zenless_Game8",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00009",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "zzz",
    profile: "dot",
    rank: 2,
    recipeId: "team.generic.zzz.dot.2",
    team: {
      id: "team.generic.zzz.dot.2",
      game: "zzz",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 2,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01054",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00283",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00297",
          },
          identityKey: "legacy:zzz:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00960",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00298",
          },
          identityKey: "zzz:1161",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00286",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00299",
          },
          identityKey: "zzz:1311",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.zzz.dot.2.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "3.1",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00003",
      },
      sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/458656",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00008",
          },
          url: "https://x.com/Zenless_Game8",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00009",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "zzz",
    profile: "dot",
    rank: 3,
    recipeId: "team.generic.zzz.dot.3",
    team: {
      id: "team.generic.zzz.dot.3",
      game: "zzz",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 3,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01055",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00283",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00300",
          },
          identityKey: "legacy:zzz:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00960",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00301",
          },
          identityKey: "zzz:1161",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00286",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00302",
          },
          identityKey: "zzz:1311",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.zzz.dot.3.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "3.1",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00003",
      },
      sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/458656",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00008",
          },
          url: "https://x.com/Zenless_Game8",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00009",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "zzz",
    profile: "break",
    rank: 1,
    recipeId: "team.generic.zzz.break.1",
    team: {
      id: "team.generic.zzz.break.1",
      game: "zzz",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 1,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01053",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00283",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00303",
          },
          identityKey: "legacy:zzz:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00960",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00304",
          },
          identityKey: "zzz:1161",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00286",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00305",
          },
          identityKey: "zzz:1311",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.zzz.break.1.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "3.1",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00003",
      },
      sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/458656",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00008",
          },
          url: "https://x.com/Zenless_Game8",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00009",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "zzz",
    profile: "break",
    rank: 2,
    recipeId: "team.generic.zzz.break.2",
    team: {
      id: "team.generic.zzz.break.2",
      game: "zzz",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 2,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01054",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00283",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00306",
          },
          identityKey: "legacy:zzz:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00960",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00307",
          },
          identityKey: "zzz:1161",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00286",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00308",
          },
          identityKey: "zzz:1311",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.zzz.break.2.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "3.1",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00003",
      },
      sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/458656",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00008",
          },
          url: "https://x.com/Zenless_Game8",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00009",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "zzz",
    profile: "break",
    rank: 3,
    recipeId: "team.generic.zzz.break.3",
    team: {
      id: "team.generic.zzz.break.3",
      game: "zzz",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 3,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01055",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00283",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00309",
          },
          identityKey: "legacy:zzz:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00960",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00310",
          },
          identityKey: "zzz:1161",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00286",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00311",
          },
          identityKey: "zzz:1311",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.zzz.break.3.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "3.1",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00003",
      },
      sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/458656",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00008",
          },
          url: "https://x.com/Zenless_Game8",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00009",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "zzz",
    profile: "support",
    rank: 1,
    recipeId: "team.generic.zzz.support.1",
    team: {
      id: "team.generic.zzz.support.1",
      game: "zzz",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 1,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01053",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00283",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00312",
          },
          identityKey: "legacy:zzz:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00181",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00313",
          },
          identityKey: "zzz:1091",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00182",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00314",
          },
          identityKey: "zzz:1221",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.zzz.support.1.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "3.1",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00003",
      },
      sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/458656",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00008",
          },
          url: "https://x.com/Zenless_Game8",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00009",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "zzz",
    profile: "support",
    rank: 2,
    recipeId: "team.generic.zzz.support.2",
    team: {
      id: "team.generic.zzz.support.2",
      game: "zzz",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 2,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01054",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00283",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00315",
          },
          identityKey: "legacy:zzz:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00181",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00316",
          },
          identityKey: "zzz:1091",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00182",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00317",
          },
          identityKey: "zzz:1221",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.zzz.support.2.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "3.1",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00003",
      },
      sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/458656",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00008",
          },
          url: "https://x.com/Zenless_Game8",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00009",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "zzz",
    profile: "support",
    rank: 3,
    recipeId: "team.generic.zzz.support.3",
    team: {
      id: "team.generic.zzz.support.3",
      game: "zzz",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 3,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01055",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00283",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00318",
          },
          identityKey: "legacy:zzz:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00181",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00319",
          },
          identityKey: "zzz:1091",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00182",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00320",
          },
          identityKey: "zzz:1221",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.zzz.support.3.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "3.1",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00003",
      },
      sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/458656",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00008",
          },
          url: "https://x.com/Zenless_Game8",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00009",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "zzz",
    profile: "sustain",
    rank: 1,
    recipeId: "team.generic.zzz.sustain.1",
    team: {
      id: "team.generic.zzz.sustain.1",
      game: "zzz",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 1,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01053",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00283",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00321",
          },
          identityKey: "legacy:zzz:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00960",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00322",
          },
          identityKey: "zzz:1161",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00286",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00323",
          },
          identityKey: "zzz:1311",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.zzz.sustain.1.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "3.1",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00003",
      },
      sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/458656",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00008",
          },
          url: "https://x.com/Zenless_Game8",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00009",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "zzz",
    profile: "sustain",
    rank: 2,
    recipeId: "team.generic.zzz.sustain.2",
    team: {
      id: "team.generic.zzz.sustain.2",
      game: "zzz",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 2,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01054",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00283",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00324",
          },
          identityKey: "legacy:zzz:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00960",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00325",
          },
          identityKey: "zzz:1161",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00286",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00326",
          },
          identityKey: "zzz:1311",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.zzz.sustain.2.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "3.1",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00003",
      },
      sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/458656",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00008",
          },
          url: "https://x.com/Zenless_Game8",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00009",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "zzz",
    profile: "sustain",
    rank: 3,
    recipeId: "team.generic.zzz.sustain.3",
    team: {
      id: "team.generic.zzz.sustain.3",
      game: "zzz",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 3,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01055",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00283",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00327",
          },
          identityKey: "legacy:zzz:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00960",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00328",
          },
          identityKey: "zzz:1161",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00286",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00329",
          },
          identityKey: "zzz:1311",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.zzz.sustain.3.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "3.1",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00003",
      },
      sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/458656",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00008",
          },
          url: "https://x.com/Zenless_Game8",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00009",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "zzz",
    profile: "tank",
    rank: 1,
    recipeId: "team.generic.zzz.tank.1",
    team: {
      id: "team.generic.zzz.tank.1",
      game: "zzz",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 1,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01053",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00283",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00330",
          },
          identityKey: "legacy:zzz:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00181",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00331",
          },
          identityKey: "zzz:1091",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00182",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00332",
          },
          identityKey: "zzz:1221",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.zzz.tank.1.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "3.1",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00003",
      },
      sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/458656",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00008",
          },
          url: "https://x.com/Zenless_Game8",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00009",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "zzz",
    profile: "tank",
    rank: 2,
    recipeId: "team.generic.zzz.tank.2",
    team: {
      id: "team.generic.zzz.tank.2",
      game: "zzz",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 2,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01054",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00283",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00333",
          },
          identityKey: "legacy:zzz:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00181",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00334",
          },
          identityKey: "zzz:1091",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00182",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00335",
          },
          identityKey: "zzz:1221",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.zzz.tank.2.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "3.1",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00003",
      },
      sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/458656",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00008",
          },
          url: "https://x.com/Zenless_Game8",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00009",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "zzz",
    profile: "tank",
    rank: 3,
    recipeId: "team.generic.zzz.tank.3",
    team: {
      id: "team.generic.zzz.tank.3",
      game: "zzz",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 3,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01055",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00283",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00336",
          },
          identityKey: "legacy:zzz:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00181",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00337",
          },
          identityKey: "zzz:1091",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00182",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00338",
          },
          identityKey: "zzz:1221",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.zzz.tank.3.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "3.1",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00003",
      },
      sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/458656",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00008",
          },
          url: "https://x.com/Zenless_Game8",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00009",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "zzz",
    profile: "hp",
    rank: 1,
    recipeId: "team.generic.zzz.hp.1",
    team: {
      id: "team.generic.zzz.hp.1",
      game: "zzz",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 1,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01053",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00283",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00339",
          },
          identityKey: "legacy:zzz:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00960",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00340",
          },
          identityKey: "zzz:1161",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00286",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00341",
          },
          identityKey: "zzz:1311",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.zzz.hp.1.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "3.1",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00003",
      },
      sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/458656",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00008",
          },
          url: "https://x.com/Zenless_Game8",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00009",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "zzz",
    profile: "hp",
    rank: 2,
    recipeId: "team.generic.zzz.hp.2",
    team: {
      id: "team.generic.zzz.hp.2",
      game: "zzz",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 2,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01054",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00283",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00342",
          },
          identityKey: "legacy:zzz:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00960",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00343",
          },
          identityKey: "zzz:1161",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00286",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00344",
          },
          identityKey: "zzz:1311",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.zzz.hp.2.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "3.1",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00003",
      },
      sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/458656",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00008",
          },
          url: "https://x.com/Zenless_Game8",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00009",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "zzz",
    profile: "hp",
    rank: 3,
    recipeId: "team.generic.zzz.hp.3",
    team: {
      id: "team.generic.zzz.hp.3",
      game: "zzz",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 3,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01055",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00283",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00345",
          },
          identityKey: "legacy:zzz:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00960",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00346",
          },
          identityKey: "zzz:1161",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00286",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00347",
          },
          identityKey: "zzz:1311",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.zzz.hp.3.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "3.1",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00003",
      },
      sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/458656",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00008",
          },
          url: "https://x.com/Zenless_Game8",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00009",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "zzz",
    profile: "def",
    rank: 1,
    recipeId: "team.generic.zzz.def.1",
    team: {
      id: "team.generic.zzz.def.1",
      game: "zzz",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 1,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01053",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00283",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00348",
          },
          identityKey: "legacy:zzz:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00960",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00349",
          },
          identityKey: "zzz:1161",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00286",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00350",
          },
          identityKey: "zzz:1311",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.zzz.def.1.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "3.1",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00003",
      },
      sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/458656",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00008",
          },
          url: "https://x.com/Zenless_Game8",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00009",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "zzz",
    profile: "def",
    rank: 2,
    recipeId: "team.generic.zzz.def.2",
    team: {
      id: "team.generic.zzz.def.2",
      game: "zzz",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 2,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01054",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00283",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00351",
          },
          identityKey: "legacy:zzz:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00960",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00352",
          },
          identityKey: "zzz:1161",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00286",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00353",
          },
          identityKey: "zzz:1311",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.zzz.def.2.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "3.1",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00003",
      },
      sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/458656",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00008",
          },
          url: "https://x.com/Zenless_Game8",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00009",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "zzz",
    profile: "def",
    rank: 3,
    recipeId: "team.generic.zzz.def.3",
    team: {
      id: "team.generic.zzz.def.3",
      game: "zzz",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 3,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01055",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00283",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00354",
          },
          identityKey: "legacy:zzz:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00960",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00355",
          },
          identityKey: "zzz:1161",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00286",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00356",
          },
          identityKey: "zzz:1311",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.zzz.def.3.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "3.1",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00003",
      },
      sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/458656",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00008",
          },
          url: "https://x.com/Zenless_Game8",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00009",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "zzz",
    profile: "em",
    rank: 1,
    recipeId: "team.generic.zzz.em.1",
    team: {
      id: "team.generic.zzz.em.1",
      game: "zzz",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 1,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01053",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00283",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00357",
          },
          identityKey: "legacy:zzz:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00960",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00358",
          },
          identityKey: "zzz:1161",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00286",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00359",
          },
          identityKey: "zzz:1311",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.zzz.em.1.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "3.1",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00003",
      },
      sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/458656",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00008",
          },
          url: "https://x.com/Zenless_Game8",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00009",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "zzz",
    profile: "em",
    rank: 2,
    recipeId: "team.generic.zzz.em.2",
    team: {
      id: "team.generic.zzz.em.2",
      game: "zzz",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 2,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01054",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00283",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00360",
          },
          identityKey: "legacy:zzz:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00960",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00361",
          },
          identityKey: "zzz:1161",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00286",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00362",
          },
          identityKey: "zzz:1311",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.zzz.em.2.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "3.1",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00003",
      },
      sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/458656",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00008",
          },
          url: "https://x.com/Zenless_Game8",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00009",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "zzz",
    profile: "em",
    rank: 3,
    recipeId: "team.generic.zzz.em.3",
    team: {
      id: "team.generic.zzz.em.3",
      game: "zzz",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 3,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01055",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00283",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00363",
          },
          identityKey: "legacy:zzz:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00960",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00364",
          },
          identityKey: "zzz:1161",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00286",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00365",
          },
          identityKey: "zzz:1311",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.zzz.em.3.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "3.1",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00003",
      },
      sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/458656",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00008",
          },
          url: "https://x.com/Zenless_Game8",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00009",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "zzz",
    profile: "anomaly",
    rank: 1,
    recipeId: "team.generic.zzz.anomaly.1",
    team: {
      id: "team.generic.zzz.anomaly.1",
      game: "zzz",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 1,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01053",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00283",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00366",
          },
          targetChanges: [
            {
              key: "anomalyMastery",
              label: {
                kind: "textRef",
                id: "guide.legacy.parties_legacyCatalog_helpers.b00592",
              },
              unit: "",
              targets: {
                厳選: 420,
                目標: 360,
                妥協: 300,
              },
              reason: {
                kind: "textRef",
                id: "guide.legacy.parties_legacyCatalog_helpers.b00593",
              },
            },
          ],
          identityKey: "legacy:zzz:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00207",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00367",
          },
          identityKey: "zzz:1411",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00210",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00368",
          },
          identityKey: "zzz:1331",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.zzz.anomaly.1.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "3.1",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00003",
      },
      sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/458656",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00008",
          },
          url: "https://x.com/Zenless_Game8",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00009",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "zzz",
    profile: "anomaly",
    rank: 2,
    recipeId: "team.generic.zzz.anomaly.2",
    team: {
      id: "team.generic.zzz.anomaly.2",
      game: "zzz",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 2,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01054",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00283",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00369",
          },
          identityKey: "legacy:zzz:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00207",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00370",
          },
          identityKey: "zzz:1411",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00210",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00371",
          },
          identityKey: "zzz:1331",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.zzz.anomaly.2.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "3.1",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00003",
      },
      sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/458656",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00008",
          },
          url: "https://x.com/Zenless_Game8",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00009",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "zzz",
    profile: "anomaly",
    rank: 3,
    recipeId: "team.generic.zzz.anomaly.3",
    team: {
      id: "team.generic.zzz.anomaly.3",
      game: "zzz",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 3,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01055",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00283",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00372",
          },
          identityKey: "legacy:zzz:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00207",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00373",
          },
          identityKey: "zzz:1411",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00210",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00374",
          },
          identityKey: "zzz:1331",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.zzz.anomaly.3.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "3.1",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00003",
      },
      sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/458656",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00008",
          },
          url: "https://x.com/Zenless_Game8",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00009",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "zzz",
    profile: "stun",
    rank: 1,
    recipeId: "team.generic.zzz.stun.1",
    team: {
      id: "team.generic.zzz.stun.1",
      game: "zzz",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 1,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01053",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00283",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00375",
          },
          targetChanges: [
            {
              key: "impact",
              label: {
                kind: "textRef",
                id: "guide.legacy.parties_legacyCatalog_helpers.b00594",
              },
              unit: "",
              targets: {
                厳選: 190,
                目標: 175,
                妥協: 160,
              },
              reason: {
                kind: "textRef",
                id: "guide.legacy.parties_legacyCatalog_helpers.b00595",
              },
            },
          ],
          identityKey: "legacy:zzz:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00203",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00376",
          },
          identityKey: "zzz:1191",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00195",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00377",
          },
          identityKey: "zzz:1131",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.zzz.stun.1.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "3.1",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00003",
      },
      sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/458656",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00008",
          },
          url: "https://x.com/Zenless_Game8",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00009",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "zzz",
    profile: "stun",
    rank: 2,
    recipeId: "team.generic.zzz.stun.2",
    team: {
      id: "team.generic.zzz.stun.2",
      game: "zzz",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 2,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01054",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00283",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00378",
          },
          identityKey: "legacy:zzz:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00203",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00379",
          },
          identityKey: "zzz:1191",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00195",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00380",
          },
          identityKey: "zzz:1131",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.zzz.stun.2.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "3.1",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00003",
      },
      sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/458656",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00008",
          },
          url: "https://x.com/Zenless_Game8",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00009",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "zzz",
    profile: "stun",
    rank: 3,
    recipeId: "team.generic.zzz.stun.3",
    team: {
      id: "team.generic.zzz.stun.3",
      game: "zzz",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 3,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01055",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00283",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00381",
          },
          identityKey: "legacy:zzz:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00203",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00382",
          },
          identityKey: "zzz:1191",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "team.legacy.master.b00195",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00383",
          },
          identityKey: "zzz:1131",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.zzz.stun.3.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "3.1",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00003",
      },
      sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/458656",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00008",
          },
          url: "https://x.com/Zenless_Game8",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00009",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "zzz",
    profile: "rupture",
    rank: 1,
    recipeId: "team.generic.zzz.rupture.1",
    team: {
      id: "team.generic.zzz.rupture.1",
      game: "zzz",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 1,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01053",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00283",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00384",
          },
          identityKey: "legacy:zzz:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00385",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00386",
          },
          identityKey: "zzz:1391",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00946",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00387",
          },
          identityKey: "zzz:1451",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.zzz.rupture.1.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "3.1",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00003",
      },
      sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/458656",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00008",
          },
          url: "https://x.com/Zenless_Game8",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00009",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "zzz",
    profile: "rupture",
    rank: 2,
    recipeId: "team.generic.zzz.rupture.2",
    team: {
      id: "team.generic.zzz.rupture.2",
      game: "zzz",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 2,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01054",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00283",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00388",
          },
          identityKey: "legacy:zzz:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00385",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00389",
          },
          identityKey: "zzz:1391",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00946",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00390",
          },
          identityKey: "zzz:1451",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.zzz.rupture.2.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "3.1",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00003",
      },
      sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/458656",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00008",
          },
          url: "https://x.com/Zenless_Game8",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00009",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
  {
    game: "zzz",
    profile: "rupture",
    rank: 3,
    recipeId: "team.generic.zzz.rupture.3",
    team: {
      id: "team.generic.zzz.rupture.3",
      game: "zzz",
      origin: "__CONTENT_GENERIC_OWNER_V1__",
      originOrder: 3,
      shared: false,
      batch: null,
      title: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b01055",
      },
      members: [
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00283",
            variables: {
              owner: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00391",
          },
          identityKey: "legacy:zzz:__CONTENT_GENERIC_OWNER_V1__",
          identityResolution: "legacy",
          identityReason:
            "Existing member name has no single confirmed catalog identity; preserve the name without guessing an ID or variant",
        },
        {
          name: {
            kind: "textRef",
            id: "team.generic.master.b00385",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00392",
          },
          identityKey: "zzz:1391",
          identityResolution: "confirmed",
        },
        {
          name: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00946",
          },
          role: {
            kind: "textRef",
            id: "team.generic.master.b00393",
          },
          identityKey: "zzz:1451",
          identityResolution: "confirmed",
        },
      ],
      synergy: [
        {
          blockId: "team.legacy.team.generic.zzz.rupture.3.paragraph1",
          text: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog_templates.b00003",
            variables: {
              v0: "__CONTENT_GENERIC_OWNER_V1__",
            },
          },
        },
      ],
      targetSummary: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog_templates.b00002",
        variables: {
          v0: "__CONTENT_GENERIC_OWNER_V1__",
        },
      },
      gameVersion: "3.1",
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      sourceLabel: {
        kind: "textRef",
        id: "guide.legacy.parties_legacyCatalog.b00003",
      },
      sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/458656",
      communitySources: [
        {
          label: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00008",
          },
          url: "https://x.com/Zenless_Game8",
          checkedAt: "2026-08-25",
          note: {
            kind: "textRef",
            id: "guide.legacy.parties_legacyCatalog.b00009",
          },
          status: "crossChecked",
        },
      ],
    },
    ownerBindings: [
      {
        path: "members.0.name",
        variable: "owner",
      },
      {
        path: "synergy.0.text",
        variable: "v0",
      },
      {
        path: "targetSummary",
        variable: "v0",
      },
    ],
    ownerMemberIndexes: [0],
  },
];
