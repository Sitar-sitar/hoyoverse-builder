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
    "title": {
      "ja": "超撃破・耐久あり",
      "en": "Super Break with sustain",
      "zh-CN": "超击破生存队"
    },
    "members": [
      {
        "name": {
          "ja": "ホタル",
          "en": "Firefly",
          "zh-CN": "流萤"
        },
        "role": {
          "ja": "炎撃破アタッカー",
          "en": "Fire Break DPS",
          "zh-CN": "火系击破输出"
        }
      },
      {
        "name": {
          "ja": "ダリア",
          "en": "The Dahlia",
          "zh-CN": "大丽花"
        },
        "role": {
          "ja": "非撃破時の超撃破支援",
          "en": "Super Break before Weakness Break",
          "zh-CN": "未击破时超击破辅助"
        }
      },
      {
        "name": {
          "ja": "帰忘の流離人",
          "en": "Fugue",
          "zh-CN": "忘归人"
        },
        "role": {
          "ja": "超撃破・擬靭性支援",
          "en": "Super Break / Exo-Toughness support",
          "zh-CN": "超击破与拟韧性辅助"
        }
      },
      {
        "name": {
          "ja": "霊砂",
          "en": "Lingsha",
          "zh-CN": "灵砂"
        },
        "role": {
          "ja": "回復・炎削靭",
          "en": "Healing / Fire Toughness damage",
          "zh-CN": "治疗与火系削韧"
        }
      }
    ],
    "synergy": [
      {
        "ja": "ダリアで非弱点撃破時にも超撃破を発生させ、帰忘の流離人の擬靭性で撃破機会を増やす。霊砂が回復と炎属性の削靭を担い、ホタルの炎弱点付与を活かす。",
        "en": "The Dahlia enables Super Break before Weakness Break, while Fugue adds break opportunities through Exo-Toughness. Lingsha heals and deals Fire Toughness damage, benefiting from Firefly’s Fire Weakness implant.",
        "zh-CN": "大丽花使未击破时也能触发超击破，忘归人通过拟韧性增加击破机会。灵砂负责治疗与火系削韧，利用流萤植入的火弱点。"
      }
    ],
    "targetSummary": {
      "ja": "速度・撃破特効は戦闘外の公開値で比較する。編成・装備・星魂の戦闘中効果は現在値へ加算せず、旧編成用の速度補正も流用しない。",
      "en": "Compare out-of-combat public SPD and Break Effect. Team, gear, and Eidolon combat effects are not added to current stats; old team SPD adjustments are not reused.",
      "zh-CN": "速度与击破特攻按战斗外公开面板比较。队伍、装备和星魂的战斗内效果不计入当前值，也不沿用旧队伍的速度调整。"
    },
    "gameVersion": "4.6",
    "dataAsOf": "2026-10-07",
    "updatedAt": "2026-10-07",
    "sourceLabel": {
      "ja": "ホタル編成ガイド本文を再確認（2026-10-07）",
      "en": "Firefly team-guide text checked 2026-10-07",
      "zh-CN": "流萤配队指南正文核对于2026-10-07"
    },
    "sourceUrl": "https://gamewith.jp/houkaistarrail/article/show/436324",
    "communitySources": [
      {
        "label": {
          "ja": "公開コミュニティの代替枠議論",
          "en": "Public community alternatives discussion",
          "zh-CN": "公开社区替代位讨论"
        },
        "url": "https://www.reddit.com/r/FireflyMains/comments/1vf5830/ruan_mei_vs_fugue/",
        "checkedAt": "2026-10-07",
        "status": "watching",
        "note": {
          "ja": "ダリア・帰忘の流離人・ルアンを併用する投稿を探索。凸条件の異なる実戦報告のため固定順位・数値の根拠には使わない。",
          "en": "Located discussions using The Dahlia, Fugue, and Ruan Mei together. Different Eidolon conditions mean these reports do not establish fixed ranks or numeric targets.",
          "zh-CN": "检索到大丽花、忘归人与阮·梅共用的讨论。实战报告星魂条件不同，不作为固定排名或数值目标的依据。"
        }
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
    "title": {
      "ja": "超撃破・耐久なし",
      "en": "Super Break without sustain",
      "zh-CN": "超击破无生存队"
    },
    "members": [
      {
        "name": {
          "ja": "ホタル",
          "en": "Firefly",
          "zh-CN": "流萤"
        },
        "role": {
          "ja": "炎撃破アタッカー",
          "en": "Fire Break DPS",
          "zh-CN": "火系击破输出"
        }
      },
      {
        "name": {
          "ja": "ダリア",
          "en": "The Dahlia",
          "zh-CN": "大丽花"
        },
        "role": {
          "ja": "非撃破時の超撃破支援",
          "en": "Super Break before Weakness Break",
          "zh-CN": "未击破时超击破辅助"
        }
      },
      {
        "name": {
          "ja": "帰忘の流離人",
          "en": "Fugue",
          "zh-CN": "忘归人"
        },
        "role": {
          "ja": "超撃破・擬靭性支援",
          "en": "Super Break / Exo-Toughness support",
          "zh-CN": "超击破与拟韧性辅助"
        }
      },
      {
        "name": {
          "ja": "ルアン・メェイ",
          "en": "Ruan Mei",
          "zh-CN": "阮·梅"
        },
        "role": {
          "ja": "撃破効率・耐性貫通支援",
          "en": "Break Efficiency / RES PEN support",
          "zh-CN": "击破效率与抗性穿透辅助"
        }
      }
    ],
    "synergy": [
      {
        "ja": "回復役を外し、ダリアと帰忘の流離人の超撃破支援にルアン・メェイの撃破効率と耐性貫通を重ねる。削靭と行動遅延で敵の攻撃を抑えられる場合の火力特化案。長期戦や被ダメージが大きい敵では耐久あり案を選ぶ。",
        "en": "Trades healing for Ruan Mei’s Break Efficiency and RES PEN alongside The Dahlia and Fugue. Use this damage-focused team only when Toughness damage and delay can suppress enemy attacks; choose sustain for long fights or heavy incoming damage.",
        "zh-CN": "舍弃治疗，在大丽花与忘归人的超击破辅助上叠加阮·梅的击破效率和抗性穿透。仅在削韧与推迟行动能够压制敌人攻击时使用；长线或高伤害敌人选择生存队。"
      }
    ],
    "targetSummary": {
      "ja": "速度・撃破特効は戦闘外の公開値で比較する。編成・装備・星魂の戦闘中効果は現在値へ加算せず、旧編成用の速度補正も流用しない。",
      "en": "Compare out-of-combat public SPD and Break Effect. Team, gear, and Eidolon combat effects are not added to current stats; old team SPD adjustments are not reused.",
      "zh-CN": "速度与击破特攻按战斗外公开面板比较。队伍、装备和星魂的战斗内效果不计入当前值，也不沿用旧队伍的速度调整。"
    },
    "gameVersion": "4.6",
    "dataAsOf": "2026-10-07",
    "updatedAt": "2026-10-07",
    "sourceLabel": {
      "ja": "ホタル編成ガイド本文を再確認（2026-10-07）",
      "en": "Firefly team-guide text checked 2026-10-07",
      "zh-CN": "流萤配队指南正文核对于2026-10-07"
    },
    "sourceUrl": "https://game8.jp/houkaistarrail/524345",
    "communitySources": [
      {
        "label": {
          "ja": "公開コミュニティの代替枠議論",
          "en": "Public community alternatives discussion",
          "zh-CN": "公开社区替代位讨论"
        },
        "url": "https://www.reddit.com/r/FireflyMains/comments/1vf5830/ruan_mei_vs_fugue/",
        "checkedAt": "2026-10-07",
        "status": "watching",
        "note": {
          "ja": "ダリア・帰忘の流離人・ルアンを併用する投稿を探索。凸条件の異なる実戦報告のため固定順位・数値の根拠には使わない。",
          "en": "Located discussions using The Dahlia, Fugue, and Ruan Mei together. Different Eidolon conditions mean these reports do not establish fixed ranks or numeric targets.",
          "zh-CN": "检索到大丽花、忘归人与阮·梅共用的讨论。实战报告星魂条件不同，不作为固定排名或数值目标的依据。"
        }
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
    "title": {
      "ja": "超撃破・代替支援",
      "en": "Super Break alternative supports",
      "zh-CN": "超击破替代辅助队"
    },
    "members": [
      {
        "name": {
          "ja": "ホタル",
          "en": "Firefly",
          "zh-CN": "流萤"
        },
        "role": {
          "ja": "炎撃破アタッカー",
          "en": "Fire Break DPS",
          "zh-CN": "火系击破输出"
        }
      },
      {
        "name": {
          "ja": "ルアン・メェイ",
          "en": "Ruan Mei",
          "zh-CN": "阮·梅"
        },
        "role": {
          "ja": "撃破効率・耐性貫通支援",
          "en": "Break Efficiency / RES PEN support",
          "zh-CN": "击破效率与抗性穿透辅助"
        }
      },
      {
        "name": {
          "ja": "開拓者（調和）",
          "en": "Trailblazer (Harmony)",
          "zh-CN": "开拓者（同谐）"
        },
        "role": {
          "ja": "超撃破支援",
          "en": "Super Break support",
          "zh-CN": "超击破辅助"
        }
      },
      {
        "name": {
          "ja": "ギャラガー",
          "en": "Gallagher",
          "zh-CN": "加拉赫"
        },
        "role": {
          "ja": "回復・撃破支援",
          "en": "Healing / Break support",
          "zh-CN": "治疗与击破辅助"
        }
      }
    ],
    "synergy": [
      {
        "ja": "ダリアと帰忘の流離人がいない場合は、調和開拓者の超撃破とルアン・メェイの撃破効率支援を組む。ギャラガーが回復と削靭を担い、SPを確保する。",
        "en": "Without The Dahlia and Fugue, combine Harmony Trailblazer’s Super Break with Ruan Mei’s Break Efficiency. Gallagher supplies healing, Toughness damage, and SP.",
        "zh-CN": "没有大丽花与忘归人时，结合同谐开拓者的超击破与阮·梅的击破效率。加拉赫负责治疗、削韧与战技点供给。"
      }
    ],
    "targetSummary": {
      "ja": "速度・撃破特効は戦闘外の公開値で比較する。編成・装備・星魂の戦闘中効果は現在値へ加算せず、旧編成用の速度補正も流用しない。",
      "en": "Compare out-of-combat public SPD and Break Effect. Team, gear, and Eidolon combat effects are not added to current stats; old team SPD adjustments are not reused.",
      "zh-CN": "速度与击破特攻按战斗外公开面板比较。队伍、装备和星魂的战斗内效果不计入当前值，也不沿用旧队伍的速度调整。"
    },
    "gameVersion": "4.6",
    "dataAsOf": "2026-10-07",
    "updatedAt": "2026-10-07",
    "sourceLabel": {
      "ja": "ホタル編成ガイド本文を再確認（2026-10-07）",
      "en": "Firefly team-guide text checked 2026-10-07",
      "zh-CN": "流萤配队指南正文核对于2026-10-07"
    },
    "sourceUrl": "https://gamewith.jp/houkaistarrail/article/show/436324",
    "communitySources": [
      {
        "label": {
          "ja": "公開コミュニティの代替枠議論",
          "en": "Public community alternatives discussion",
          "zh-CN": "公开社区替代位讨论"
        },
        "url": "https://www.reddit.com/r/FireflyMains/comments/1vf5830/ruan_mei_vs_fugue/",
        "checkedAt": "2026-10-07",
        "status": "watching",
        "note": {
          "ja": "ダリア・帰忘の流離人・ルアンを併用する投稿を探索。凸条件の異なる実戦報告のため固定順位・数値の根拠には使わない。",
          "en": "Located discussions using The Dahlia, Fugue, and Ruan Mei together. Different Eidolon conditions mean these reports do not establish fixed ranks or numeric targets.",
          "zh-CN": "检索到大丽花、忘归人与阮·梅共用的讨论。实战报告星魂条件不同，不作为固定排名或数值目标的依据。"
        }
      }
    ]
  }
];
