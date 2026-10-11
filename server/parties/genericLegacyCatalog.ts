import { sources as partySources } from "../../content/ja/guides/parties_legacyCatalog_templates";

import { records as partyEn } from "../../content/translations/en/parties_legacyCatalog_templates";

import { records as partyZh } from "../../content/translations/zh-CN/parties_legacyCatalog_templates";

import { createLegacyTexts as createHelperTexts } from "../content/legacyTexts";

import { sources as helperSources } from "../../content/ja/guides/parties_legacyCatalog_helpers";

import { records as helperEn } from "../../content/translations/en/parties_legacyCatalog_helpers";

import { records as helperZh } from "../../content/translations/zh-CN/parties_legacyCatalog_helpers";

const _helperContent = createHelperTexts(helperSources, helperEn, helperZh);

import { createLegacyTexts } from "../content/legacyTexts";

import { sources as _sources } from "../../content/ja/guides/parties_legacyCatalog";

import { records as _en } from "../../content/translations/en/parties_legacyCatalog";

import { records as _zh } from "../../content/translations/zh-CN/parties_legacyCatalog";

const _content = createLegacyTexts(_sources, _en, _zh);

const _partyHelper = createLegacyTexts(partySources, partyEn, partyZh);

/**
 * 推奨PTの旧形式データ（第1〜22バッチ。旧 server/partyRecommendations.ts から移設）。
 * 新しい編成は sharedTeams.ts に書き、ここへは追加しない（partyLinks.test.ts の件数上限 LEGACY_TEAM_LIMIT で検査）。
 * 起動時に teamStore.ts が1案＝1編成の旧形式編成（shared: false）へ変換する。
 * 設計: docs/実装設計書_推奨PTの編成マスタ化と関連キャラ連動_2026-10-01.md §4.3
 */
import {
  HSR_RUNTIME_PATHS,
  ZZZ_RUNTIME_PROFESSIONS,
} from "../characterGuideCatalog";

import {
  genshinProfileIdFor,
  hsrProfileIdFor,
  zzzProfileIdFor,
} from "../individualGuides";

import { t, member } from "./text";

import type {
  PartyCommunitySource,
  PartyGameId,
  LocalizedText,
  PartyMember,
  PartyRecommendation,
  PartyRecommendationSet,
  PartyTargetChange,
} from "./types";

import type { StatKey } from "../buildAdvisor";

const change = (
  key: StatKey,
  ja: string,
  en: string,
  zh: string,
  unit: "%" | "",
  strict: number,
  goal: number,
  base: number,
  reasonJa: string,
  reasonEn: string,
  reasonZh: string
): PartyTargetChange => ({
  key,
  label: t(ja, en, zh),
  unit,
  targets: { 厳選: strict, 目標: goal, 妥協: base },
  reason: t(reasonJa, reasonEn, reasonZh),
});

const GAME_PARTY_DATASET: Record<
  PartyGameId,
  Omit<PartyRecommendationSet, "options">
> = {
  hsr: { gameVersion: "4.4", dataAsOf: "2026-08-25", updatedAt: "2026-08-25" },
  genshin: {
    gameVersion: "7.0",
    dataAsOf: "2026-08-25",
    updatedAt: "2026-08-25",
  },
  zzz: { gameVersion: "3.1", dataAsOf: "2026-08-25", updatedAt: "2026-08-25" },
};

const sourceFor = (game: PartyGameId) =>
  game === "hsr"
    ? {
        label: _content.localized("guide.legacy.parties_legacyCatalog.b00001"),
        url: "https://game8.co/games/Honkai-Star-Rail/archives/409824",
      }
    : game === "genshin"
      ? {
          label: _content.localized(
            "guide.legacy.parties_legacyCatalog.b00002"
          ),
          url: "https://game8.co/games/Genshin-Impact/archives/301819",
        }
      : {
          label: _content.localized(
            "guide.legacy.parties_legacyCatalog.b00003"
          ),
          url: "https://game8.co/games/Zenless-Zone-Zero/archives/458656",
        };

const communitySourcesFor = (game: PartyGameId): PartyCommunitySource[] =>
  game === "hsr"
    ? [
        {
          label: _content.localized(
            "guide.legacy.parties_legacyCatalog.b00004"
          ),
          url: "https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/",
          checkedAt: "2026-08-25",
          note: _content.localized("guide.legacy.parties_legacyCatalog.b00005"),
          status: "crossChecked",
        },
      ]
    : game === "genshin"
      ? [
          {
            label: _content.localized(
              "guide.legacy.parties_legacyCatalog.b00006"
            ),
            url: "https://x.com/G8_Genshin",
            checkedAt: "2026-08-25",
            note: _content.localized(
              "guide.legacy.parties_legacyCatalog.b00007"
            ),
            status: "crossChecked",
          },
        ]
      : [
          {
            label: _content.localized(
              "guide.legacy.parties_legacyCatalog.b00008"
            ),
            url: "https://x.com/Zenless_Game8",
            checkedAt: "2026-08-25",
            note: _content.localized(
              "guide.legacy.parties_legacyCatalog.b00009"
            ),
            status: "crossChecked",
          },
        ];

type GenericProfile =
  | "crit"
  | "dot"
  | "break"
  | "support"
  | "sustain"
  | "tank"
  | "hp"
  | "def"
  | "em"
  | "anomaly"
  | "stun"
  | "rupture";

const ownMember = (
  name: string,
  roleJa: string,
  roleEn: string,
  roleZh: string
) => member(name, name, name, roleJa, roleEn, roleZh);

const roleMember = (
  name: string,
  roleJa: string,
  roleEn: string,
  roleZh: string
) => member(name, name, name, roleJa, roleEn, roleZh);

function genericProfileFor(game: PartyGameId, name: string): GenericProfile {
  if (game === "hsr")
    return hsrProfileIdFor(name, HSR_RUNTIME_PATHS[name] ?? "");
  if (game === "genshin") return genshinProfileIdFor(name);
  return zzzProfileIdFor(ZZZ_RUNTIME_PROFESSIONS[name] ?? "Attack");
}

function genericTargetChanges(
  game: PartyGameId,
  profile: GenericProfile
): PartyTargetChange[] {
  if (game === "hsr" && profile === "break")
    return [
      change(
        "speed",
        ..._helperContent.triple(
          "guide.legacy.parties_legacyCatalog_helpers.b00584"
        ),
        "",
        160,
        150,
        145,
        ..._helperContent.triple(
          "guide.legacy.parties_legacyCatalog_helpers.b00585"
        )
      ),
    ];
  if (game === "hsr" && profile === "support")
    return [
      change(
        "speed",
        ..._helperContent.triple(
          "guide.legacy.parties_legacyCatalog_helpers.b00586"
        ),
        "",
        161,
        145,
        134,
        ..._helperContent.triple(
          "guide.legacy.parties_legacyCatalog_helpers.b00587"
        )
      ),
    ];
  if (game === "genshin" && profile === "em")
    return [
      change(
        "elementalMastery",
        ..._helperContent.triple(
          "guide.legacy.parties_legacyCatalog_helpers.b00588"
        ),
        "",
        1000,
        800,
        650,
        ..._helperContent.triple(
          "guide.legacy.parties_legacyCatalog_helpers.b00589"
        )
      ),
    ];
  if (game === "genshin" && profile === "support")
    return [
      change(
        "energyRecharge",
        ..._helperContent.triple(
          "guide.legacy.parties_legacyCatalog_helpers.b00590"
        ),
        "%",
        250,
        200,
        170,
        ..._helperContent.triple(
          "guide.legacy.parties_legacyCatalog_helpers.b00591"
        )
      ),
    ];
  if (game === "zzz" && profile === "anomaly")
    return [
      change(
        "anomalyMastery",
        ..._helperContent.triple(
          "guide.legacy.parties_legacyCatalog_helpers.b00592"
        ),
        "",
        420,
        360,
        300,
        ..._helperContent.triple(
          "guide.legacy.parties_legacyCatalog_helpers.b00593"
        )
      ),
    ];
  if (game === "zzz" && profile === "stun")
    return [
      change(
        "impact",
        ..._helperContent.triple(
          "guide.legacy.parties_legacyCatalog_helpers.b00594"
        ),
        "",
        190,
        175,
        160,
        ..._helperContent.triple(
          "guide.legacy.parties_legacyCatalog_helpers.b00595"
        )
      ),
    ];
  return [];
}

function genericMembers(
  game: PartyGameId,
  name: string,
  profile: GenericProfile,
  rank: 1 | 2 | 3
): PartyMember[] {
  if (game === "hsr") {
    if (profile === "break")
      return rank === 1
        ? [
            ownMember(
              name,
              ..._helperContent.triple(
                "guide.legacy.parties_legacyCatalog_helpers.b00596"
              )
            ),
            roleMember(
              "ルアン・メェイ",
              ..._helperContent.triple(
                "guide.legacy.parties_legacyCatalog_helpers.b00597"
              )
            ),
            roleMember(
              "開拓者（調和）",
              ..._helperContent.triple(
                "guide.legacy.parties_legacyCatalog_helpers.b00598"
              )
            ),
            roleMember(
              "霊砂",
              ..._helperContent.triple(
                "guide.legacy.parties_legacyCatalog_helpers.b00599"
              )
            ),
          ]
        : rank === 2
          ? [
              ownMember(
                name,
                ..._helperContent.triple(
                  "guide.legacy.parties_legacyCatalog_helpers.b00600"
                )
              ),
              roleMember(
                "帰忘の流離人",
                ..._helperContent.triple(
                  "guide.legacy.parties_legacyCatalog_helpers.b00601"
                )
              ),
              roleMember(
                "開拓者（調和）",
                ..._helperContent.triple(
                  "guide.legacy.parties_legacyCatalog_helpers.b00602"
                )
              ),
              roleMember(
                "ギャラガー",
                ..._helperContent.triple(
                  "guide.legacy.parties_legacyCatalog_helpers.b00603"
                )
              ),
            ]
          : [
              ownMember(
                name,
                ..._helperContent.triple(
                  "guide.legacy.parties_legacyCatalog_helpers.b00604"
                )
              ),
              roleMember(
                "アスター",
                ..._helperContent.triple(
                  "guide.legacy.parties_legacyCatalog_helpers.b00605"
                )
              ),
              roleMember(
                "開拓者（調和）",
                ..._helperContent.triple(
                  "guide.legacy.parties_legacyCatalog_helpers.b00606"
                )
              ),
              roleMember(
                "ギャラガー",
                ..._helperContent.triple(
                  "guide.legacy.parties_legacyCatalog_helpers.b00607"
                )
              ),
            ];
    if (profile === "dot")
      return rank === 1
        ? [
            ownMember(
              name,
              ..._helperContent.triple(
                "guide.legacy.parties_legacyCatalog_helpers.b00608"
              )
            ),
            roleMember(
              "カフカ",
              ..._helperContent.triple(
                "guide.legacy.parties_legacyCatalog_helpers.b00609"
              )
            ),
            roleMember(
              "ブラックスワン",
              ..._helperContent.triple(
                "guide.legacy.parties_legacyCatalog_helpers.b00610"
              )
            ),
            roleMember(
              "フォフォ",
              ..._helperContent.triple(
                "guide.legacy.parties_legacyCatalog_helpers.b00611"
              )
            ),
          ]
        : [
            ownMember(
              name,
              ..._helperContent.triple(
                "guide.legacy.parties_legacyCatalog_helpers.b00612"
              )
            ),
            roleMember(
              "サンポ",
              ..._helperContent.triple(
                "guide.legacy.parties_legacyCatalog_helpers.b00613"
              )
            ),
            roleMember(
              "ペラ",
              ..._helperContent.triple(
                "guide.legacy.parties_legacyCatalog_helpers.b00614"
              )
            ),
            roleMember(
              "ギャラガー",
              ..._helperContent.triple(
                "guide.legacy.parties_legacyCatalog_helpers.b00615"
              )
            ),
          ];
    if (profile === "support" || profile === "sustain" || profile === "tank")
      return [
        profile === "sustain" || profile === "tank"
          ? ownMember(
              name,
              ..._helperContent.triple(
                "guide.legacy.parties_legacyCatalog_helpers.b00616"
              )
            )
          : ownMember(
              name,
              ..._helperContent.triple(
                "guide.legacy.parties_legacyCatalog_helpers.b00617"
              )
            ),
        roleMember(
          "アグライア",
          ..._helperContent.triple(
            "guide.legacy.parties_legacyCatalog_helpers.b00618"
          )
        ),
        roleMember(
          "ロビン",
          ..._helperContent.triple(
            "guide.legacy.parties_legacyCatalog_helpers.b00619"
          )
        ),
        roleMember(
          "トリビー",
          ..._helperContent.triple(
            "guide.legacy.parties_legacyCatalog_helpers.b00620"
          )
        ),
      ];
    return rank === 1
      ? [
          ownMember(
            name,
            ..._helperContent.triple(
              "guide.legacy.parties_legacyCatalog_helpers.b00621"
            )
          ),
          roleMember(
            "ロビン",
            ..._helperContent.triple(
              "guide.legacy.parties_legacyCatalog_helpers.b00622"
            )
          ),
          roleMember(
            "トリビー",
            ..._helperContent.triple(
              "guide.legacy.parties_legacyCatalog_helpers.b00623"
            )
          ),
          roleMember(
            "アベンチュリン",
            ..._helperContent.triple(
              "guide.legacy.parties_legacyCatalog_helpers.b00624"
            )
          ),
        ]
      : [
          ownMember(
            name,
            ..._helperContent.triple(
              "guide.legacy.parties_legacyCatalog_helpers.b00625"
            )
          ),
          roleMember(
            "花火",
            ..._helperContent.triple(
              "guide.legacy.parties_legacyCatalog_helpers.b00626"
            )
          ),
          roleMember(
            "ペラ",
            ..._helperContent.triple(
              "guide.legacy.parties_legacyCatalog_helpers.b00627"
            )
          ),
          roleMember(
            "リンクス",
            ..._helperContent.triple(
              "guide.legacy.parties_legacyCatalog_helpers.b00628"
            )
          ),
        ];
  }
  if (game === "genshin") {
    if (profile === "em")
      return [
        ownMember(
          name,
          ..._helperContent.triple(
            "guide.legacy.parties_legacyCatalog_helpers.b00629"
          )
        ),
        roleMember(
          "ナヒーダ",
          ..._helperContent.triple(
            "guide.legacy.parties_legacyCatalog_helpers.b00630"
          )
        ),
        roleMember(
          "行秋",
          ..._helperContent.triple(
            "guide.legacy.parties_legacyCatalog_helpers.b00631"
          )
        ),
        roleMember(
          "久岐忍",
          ..._helperContent.triple(
            "guide.legacy.parties_legacyCatalog_helpers.b00632"
          )
        ),
      ];
    if (profile === "support" || profile === "sustain")
      return [
        profile === "sustain"
          ? ownMember(
              name,
              ..._helperContent.triple(
                "guide.legacy.parties_legacyCatalog_helpers.b00633"
              )
            )
          : ownMember(
              name,
              ..._helperContent.triple(
                "guide.legacy.parties_legacyCatalog_helpers.b00634"
              )
            ),
        roleMember(
          "アルレッキーノ",
          ..._helperContent.triple(
            "guide.legacy.parties_legacyCatalog_helpers.b00635"
          )
        ),
        roleMember(
          "楓原万葉",
          ..._helperContent.triple(
            "guide.legacy.parties_legacyCatalog_helpers.b00636"
          )
        ),
        roleMember(
          "鍾離",
          ..._helperContent.triple(
            "guide.legacy.parties_legacyCatalog_helpers.b00637"
          )
        ),
      ];
    if (profile === "def")
      return [
        ownMember(
          name,
          ..._helperContent.triple(
            "guide.legacy.parties_legacyCatalog_helpers.b00638"
          )
        ),
        roleMember(
          "ゴロー",
          ..._helperContent.triple(
            "guide.legacy.parties_legacyCatalog_helpers.b00639"
          )
        ),
        roleMember(
          "フリーナ",
          ..._helperContent.triple(
            "guide.legacy.parties_legacyCatalog_helpers.b00640"
          )
        ),
        roleMember(
          "鍾離",
          ..._helperContent.triple(
            "guide.legacy.parties_legacyCatalog_helpers.b00641"
          )
        ),
      ];
    if (profile === "hp")
      return [
        ownMember(
          name,
          ..._helperContent.triple(
            "guide.legacy.parties_legacyCatalog_helpers.b00642"
          )
        ),
        roleMember(
          "フリーナ",
          ..._helperContent.triple(
            "guide.legacy.parties_legacyCatalog_helpers.b00643"
          )
        ),
        roleMember(
          "楓原万葉",
          ..._helperContent.triple(
            "guide.legacy.parties_legacyCatalog_helpers.b00644"
          )
        ),
        roleMember(
          "白朮",
          ..._helperContent.triple(
            "guide.legacy.parties_legacyCatalog_helpers.b00645"
          )
        ),
      ];
    return rank === 1
      ? [
          ownMember(
            name,
            ..._helperContent.triple(
              "guide.legacy.parties_legacyCatalog_helpers.b00646"
            )
          ),
          roleMember(
            "フリーナ",
            ..._helperContent.triple(
              "guide.legacy.parties_legacyCatalog_helpers.b00647"
            )
          ),
          roleMember(
            "楓原万葉",
            ..._helperContent.triple(
              "guide.legacy.parties_legacyCatalog_helpers.b00648"
            )
          ),
          roleMember(
            "ベネット",
            ..._helperContent.triple(
              "guide.legacy.parties_legacyCatalog_helpers.b00649"
            )
          ),
        ]
      : [
          ownMember(
            name,
            ..._helperContent.triple(
              "guide.legacy.parties_legacyCatalog_helpers.b00650"
            )
          ),
          roleMember(
            "行秋",
            ..._helperContent.triple(
              "guide.legacy.parties_legacyCatalog_helpers.b00651"
            )
          ),
          roleMember(
            "フィッシュル",
            ..._helperContent.triple(
              "guide.legacy.parties_legacyCatalog_helpers.b00652"
            )
          ),
          roleMember(
            "鍾離",
            ..._helperContent.triple(
              "guide.legacy.parties_legacyCatalog_helpers.b00653"
            )
          ),
        ];
  }
  if (profile === "anomaly")
    return [
      ownMember(
        name,
        ..._helperContent.triple(
          "guide.legacy.parties_legacyCatalog_helpers.b00654"
        )
      ),
      roleMember(
        "浮波柚葉",
        ..._helperContent.triple(
          "guide.legacy.parties_legacyCatalog_helpers.b00655"
        )
      ),
      roleMember(
        "ビビアン",
        ..._helperContent.triple(
          "guide.legacy.parties_legacyCatalog_helpers.b00656"
        )
      ),
    ];
  if (profile === "stun")
    return [
      ownMember(
        name,
        ..._helperContent.triple(
          "guide.legacy.parties_legacyCatalog_helpers.b00657"
        )
      ),
      roleMember(
        "エレン",
        ..._helperContent.triple(
          "guide.legacy.parties_legacyCatalog_helpers.b00658"
        )
      ),
      roleMember(
        "蒼角",
        ..._helperContent.triple(
          "guide.legacy.parties_legacyCatalog_helpers.b00659"
        )
      ),
    ];
  if (profile === "support" || profile === "tank")
    return [
      profile === "tank"
        ? ownMember(
            name,
            ..._helperContent.triple(
              "guide.legacy.parties_legacyCatalog_helpers.b00660"
            )
          )
        : ownMember(
            name,
            ..._helperContent.triple(
              "guide.legacy.parties_legacyCatalog_helpers.b00661"
            )
          ),
      roleMember(
        "星見雅",
        ..._helperContent.triple(
          "guide.legacy.parties_legacyCatalog_helpers.b00662"
        )
      ),
      roleMember(
        "月城柳",
        ..._helperContent.triple(
          "guide.legacy.parties_legacyCatalog_helpers.b00663"
        )
      ),
    ];
  if (profile === "rupture")
    return [
      ownMember(
        name,
        ..._helperContent.triple(
          "guide.legacy.parties_legacyCatalog_helpers.b00664"
        )
      ),
      roleMember(
        "橘福福",
        ..._helperContent.triple(
          "guide.legacy.parties_legacyCatalog_helpers.b00665"
        )
      ),
      roleMember(
        "リュシア",
        ..._helperContent.triple(
          "guide.legacy.parties_legacyCatalog_helpers.b00666"
        )
      ),
    ];
  return [
    ownMember(
      name,
      ..._helperContent.triple(
        "guide.legacy.parties_legacyCatalog_helpers.b00667"
      )
    ),
    roleMember(
      "ライト",
      ..._helperContent.triple(
        "guide.legacy.parties_legacyCatalog_helpers.b00668"
      )
    ),
    roleMember(
      "アストラ",
      ..._helperContent.triple(
        "guide.legacy.parties_legacyCatalog_helpers.b00669"
      )
    ),
  ];
}

function option(
  game: PartyGameId,
  input: Omit<
    PartyRecommendation,
    | "gameVersion"
    | "dataAsOf"
    | "updatedAt"
    | "sourceLabel"
    | "sourceUrl"
    | "communitySources"
  >
): PartyRecommendation {
  const dataset = GAME_PARTY_DATASET[game];
  const source = sourceFor(game);
  return {
    ...input,
    ...dataset,
    sourceLabel: source.label,
    sourceUrl: source.url,
    communitySources: communitySourcesFor(game),
  };
}

function genericOptionsFor(
  game: PartyGameId,
  name: string
): PartyRecommendation[] {
  const profile = genericProfileFor(game, name);
  const titles = [
    _content.localized("guide.legacy.parties_legacyCatalog.b01053"),
    _content.localized("guide.legacy.parties_legacyCatalog.b01054"),
    _content.localized("guide.legacy.parties_legacyCatalog.b01055"),
  ];
  const summary = _partyHelper.localized(
    "guide.legacy.parties_legacyCatalog_templates.b00002",
    { v0: name }
  );
  return ([1, 2, 3] as const).map(rank =>
    option(game, {
      id: `generated-${game}-${name}-${rank}`,
      rank,
      title: titles[rank - 1],
      members: genericMembers(game, name, profile, rank),
      synergy: [
        _partyHelper.localized(
          "guide.legacy.parties_legacyCatalog_templates.b00003",
          { v0: name }
        ),
      ],
      targetChanges: rank === 1 ? genericTargetChanges(game, profile) : [],
      targetSummary: summary,
    })
  );
}
export { genericOptionsFor };
