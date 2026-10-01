import type { GuideDefinition } from "./buildAdvisor";
import type { ConstellationProfile } from "./characterConstellations";

// genshin-db 49a6544a6c6ae36089cb42fa591fc46f01de8bcf: 実装済み Ver.7.1 の確認済みIDだけを補完する。
export const BATCH23_GENSHIN_CHARACTERS: Record<string, {
  name: string; element: string; weaponType: string; sideIcon: string; portrait: string; guide: GuideDefinition;
}> = {
  "10000143": {
    name: "ヴェスナ", element: "Wind", weaponType: "WEAPON_SWORD_ONE_HAND",
    sideIcon: "UI_AvatarIcon_Side_Vesna",
    portrait: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Vesna.png",
    guide: {
      headline: "星拡散の表アタッカー。氷付着を確保し、通常攻撃・元素爆発で剣気を溜めて特殊元素スキルを強化する。",
      relicSet: "紅血の証 ×4 / 繋ぎは攻撃力+18%の2セット ×2",
      planarSet: "武器：蝶の羽化 / 代替：白銀の湖を舞う翼・導炎の源。サブ優先：会心率・会心ダメージ ＞ 攻撃力% ＞ 元素熟知 ＞ 元素チャージ効率。",
      mainStats: [{ slot: "時計", value: "攻撃力%" }, { slot: "杯", value: "攻撃力%" }, { slot: "冠", value: "会心率 / 会心ダメージ" }],
      targets: [],
      targetContext: "無凸の星拡散型。攻撃力2000は固有天賦の反応強化上限に対応する戦闘時の基準。紅血4セット・武器・氷共鳴・編成・凸の条件付き効果は公開プロフィールへ加算しない。戦闘外の3水準を裏付ける根拠がないため固定比較値は登録しない。必要なチャージは編成とローテーション次第。",
    },
  },
  "10000140": {
    name: "ヴォジャニーツァ", element: "Water", weaponType: "WEAPON_CATALYST",
    sideIcon: "UI_AvatarIcon_Side_Vodyanitsa",
    portrait: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Vodyanitsa.png",
    guide: {
      headline: "HPを軸に水・氷・星拡散を支援するヒーラー。元素スキルの回復・耐性低下・中断耐性を維持する。",
      relicSet: "千岩牢固 ×4 / HP確保用の代替：千岩牢固 ×2 + 花海甘露の光 ×2",
      planarSet: "武器：旋流の讃美歌 / 代替：龍殺しの英傑譚・金珀・試作。サブ優先：HP% ＞ HP実数値。龍殺しは次に出すアタッカーへ渡す。",
      mainStats: [{ slot: "時計", value: "HP%" }, { slot: "杯", value: "HP%" }, { slot: "冠", value: "HP%" }],
      targets: [],
      targetContext: "無凸のスキル支援型。HP65000は固有天賦の強化上限に対応する戦闘時の基準。水共鳴・武器の条件付きHP・4凸のHP上昇を公開プロフィールへ加算しない。戦闘外の3水準を裏付ける根拠がないため固定比較値は登録しない。爆発は支援の必須条件ではなく、チャージ・会心を一律の目標にしない。",
    },
  },
};

export function batch23CharacterForName(name: string) {
  return Object.entries(BATCH23_GENSHIN_CHARACTERS).find(([, entry]) => entry.name === name);
}

type CuratedEntry = Omit<ConstellationProfile, "rankLabel" | "acquiredRank" | "dataStatus" | "activeTargetChanges">;

// 命ノ星座の三言語名称・本文は上記revisionの公式ゲームデータ由来。生成時に表示用markupのみ除去。
export const BATCH23_GENSHIN_CONSTELLATIONS: Record<string, CuratedEntry> = {
  "genshin:10000143": {
    "gameVersion": "7.1",
    "dataAsOf": "2026-10-01",
    "updatedAt": "2026-10-01",
    "sourceLabel": {
      "ja": "genshin-db の公式ゲームデータ由来の三言語本文を Game8 と照合",
      "en": "Game-data text from genshin-db (JA/EN/ZH), cross-checked with Game8",
      "zh-CN": "genshin-db游戏数据的日英中原文，已与Game8交叉核对"
    },
    "sourceUrl": "https://github.com/theBowja/genshin-db/blob/49a6544a6c6ae36089cb42fa591fc46f01de8bcf/src/data/Japanese/constellations/vesna.json",
    "effects": [
      {
        "level": 1,
        "name": {
          "ja": "冬を見送る盛宴",
          "en": "Winter's Farewell Feast",
          "zh-CN": "送冬的华宴"
        },
        "description": {
          "ja": "風巡りの臨戦モード中、ヴェスナは最高ランクの飛翔の剣を3回ではなく、最大4回まで発動できるようになる。また、風巡りの臨戦モードに入った後、初めて最高ランクの飛翔の剣を発動する時、「剣気」を消費しない。\nさらに、ヴェスナが風巡りの臨戦モード中に与える星拡散反応ダメージ+20%。",
          "en": "When in the Armed for Action mode, Vesna can unleash Windborne Sword at the highest level 4 times instead of 3. Also, each time she enters the Armed for Action mode, she will not consume Sword Essence the first time she uses Windborne Sword at the highest level.\nAdditionally, Vesna deals 20% increased Stellar Swirl reaction DMG when in the Armed for Action mode.",
          "zh-CN": "巡风列装模式下，薇斯纳至多可以施放四次最高境界的翔风剑，而非三次，且每次进入巡风列装模式后，首次施放最高境界的翔风剑不消耗「剑气」。\n此外，薇斯纳在巡风列装模式下造成的星扩散反应伤害提升20%。"
        }
      },
      {
        "level": 2,
        "name": {
          "ja": "春を迎える輪舞",
          "en": "Kolo of Spring's Arrival",
          "zh-CN": "迎春的轮舞"
        },
        "description": {
          "ja": "固有天賦「儀典『春の行列』」が強化され、ヴェスナが風巡りの臨戦モードに入った時、最大層数の「粛正」を獲得する。最大層数の「粛正」を持っている時、ヴェスナの攻撃力+40%。\n上記の効果は固有天賦「儀典『春の行列』」を解放する必要がある。",
          "en": "The Ascension Talent Rite of Spring's Procession is enhanced: Vesna gains the maximum number of Disciplinary Action stacks when she enters Armed for Action mode. Vesna's ATK is increased by 40% when she has maximum Disciplinary Action stacks.\nYou must unlock the Ascension Talent \"Rite of Spring's Procession\" to gain access to the above effects.",
          "zh-CN": "突破天赋「仪典·春之行列」获得强化：薇斯纳进入巡风列装模式时，会获得最大层数的整肃；拥有最大层数的整肃时，薇斯纳的攻击力提升40%。\n上述效果需要解锁突破天赋「仪典·春之行列」。"
        }
      },
      {
        "level": 3,
        "name": {
          "ja": "かがり火の進物",
          "en": "Winter's Last Offering",
          "zh-CN": "燔燎的献礼"
        },
        "description": {
          "ja": "元素スキル操典「勝利への道筋」のスキルLv.+3。\n最大Lv.15まで。",
          "en": "Increases the Level of the Elemental Skill The Art of Victory by 3.\nMaximum upgrade level is 15.",
          "zh-CN": "元素战技操典·制胜有道的技能等级提高3级。\n至多提升至15级。"
        }
      },
      {
        "level": 4,
        "name": {
          "ja": "先人たちの栄光",
          "en": "Glory to Our Forebears",
          "zh-CN": "先代的荣膺"
        },
        "description": {
          "ja": "固有天賦「法典『冬の凱旋』」が強化され、攻撃力アップと元素熟知アップの効果が本来の3倍になる。",
          "en": "The Ascension Talent Truth Prevails is enhanced: Its ATK and Elemental Mastery bonuses increase to 3 times their original values.",
          "zh-CN": "突破天赋「理典·冬之凯风」获得强化：攻击力提升与元素精通提升的效果改为原本的三倍。"
        }
      },
      {
        "level": 5,
        "name": {
          "ja": "貴き血筋の責務",
          "en": "The Nobleborn's Charge",
          "zh-CN": "贵种的职守"
        },
        "description": {
          "ja": "元素爆発女皇陛下に敬礼をのスキルLv.+3。\n最大Lv.15まで。",
          "en": "Increases the Level of the Elemental Burst For the Tsaritsa! by 3.\nMaximum upgrade level is 15.",
          "zh-CN": "元素爆发致礼·献予女皇陛下的技能等级提高3级。\n至多提升至15级。"
        }
      },
      {
        "level": 6,
        "name": {
          "ja": "揺るぎなき忠誠",
          "en": "Unwavering Ardor",
          "zh-CN": "不移的赤忱"
        },
        "description": {
          "ja": "最高ランクの飛翔の剣の発動後5秒以内に、ヴェスナは通常攻撃または元素スキルを一回押しすることで、風の精一族の秘伝である飛翔の剣・変を発動し、ヴェスナの攻撃力150%分の風元素ダメージを与え、霊剣を呼び出し、さらにヴェスナの攻撃力200%分の風元素ダメージを追加で与える。ヴェスナが風巡りの臨戦モードに入っている場合、風羽を追加で呼び出して敵に追加攻撃を行う。\nまた、ヴェスナが与える星拡散反応ダメージが20%向上する。",
          "en": "Tapping on Normal Attack or Elemental Skill in the 5s after Vesna uses Windborne Sword at its highest level will unleash the secret Vila ability Windborne Sword: Transpose, dealing Anemo DMG at 150% of Vesna's ATK as well as summoning Spirit Blades which deal an additional instance of Anemo DMG at 200% of Vesna's ATK. If Vesna is in the Armed for Action mode, she will also summon a wind pinion to perform Coordinated Attacks against opponents.\nAdditionally, Vesna's Stellar Swirl reaction DMG dealt is elevated by 20%.",
          "zh-CN": "施放最高境界翔风剑后的5秒内，薇斯纳可以点按普通攻击或元素战技，施放风仙一族秘传的翔风剑·变移：造成薇斯纳150%攻击力的风元素伤害，并召唤出灵剑，额外造成薇斯纳200%攻击力的风元素伤害。若薇斯纳处于巡风列装模式，还会额外唤出风翎协同攻击敌人。\n此外，薇斯纳造成的星扩散反应伤害擢升20%。"
        }
      }
    ]
  },
  "genshin:10000140": {
    "gameVersion": "7.1",
    "dataAsOf": "2026-10-01",
    "updatedAt": "2026-10-01",
    "sourceLabel": {
      "ja": "genshin-db の公式ゲームデータ由来の三言語本文を Game8 と照合",
      "en": "Game-data text from genshin-db (JA/EN/ZH), cross-checked with Game8",
      "zh-CN": "genshin-db游戏数据的日英中原文，已与Game8交叉核对"
    },
    "sourceUrl": "https://github.com/theBowja/genshin-db/blob/49a6544a6c6ae36089cb42fa591fc46f01de8bcf/src/data/Japanese/constellations/vodyanitsa.json",
    "effects": [
      {
        "level": 1,
        "name": {
          "ja": "脚光に咲く水の花",
          "en": "Waters in Full Splendor",
          "zh-CN": "聚光灯下的水华"
        },
        "description": {
          "ja": "ヴォジャニーツァが悠久の歌の治療効果を発動した際、付近にいるチーム全員の攻撃力がヴォジャニーツァのHP上限の0.8%分アップする、継続時間5秒。",
          "en": "Each time Vodyanitsa triggers the healing effect of Song of Ages Past, it also increases the ATK of all nearby party members by 0.8% of her Max HP for 5s.",
          "zh-CN": "沃雅妮莎触发遥久之歌的治疗效果时，还会使队伍中附近的所有角色攻击力提升，提升值相当于沃雅妮莎生命值上限的0.8%，持续5秒。"
        }
      },
      {
        "level": 2,
        "name": {
          "ja": "風雪を穿つこだま",
          "en": "Echoes That Pierce the Snow",
          "zh-CN": "穿彻风雪的余响"
        },
        "description": {
          "ja": "元素スキル流れる朝のレチタティーヴォの春を呼ぶ角笛が敵を攻撃した時、ヴォジャニーツァは「黒と白のデュエット」効果を獲得し、チーム内のフィールド上キャラクターが与える水元素ダメージと氷元素ダメージの会心ダメージ+50%、継続時間5秒。\nフィールド上に流星の嵐が存在する、または流星の嵐の起爆後5秒以内である場合、代わりにチーム内のフィールド上キャラクターが与える星拡散反応ダメージの会心ダメージ+60%、継続時間5秒。\nさらに、元素スキル流れる朝のレチタティーヴォが強化され、悠久の歌効果の継続時間+9秒。",
          "en": "When the Horn of Spring's Call from the Elemental Skill Rechitativ: Sonorous Dawn attacks the opponent, Vodyanitsa gains the \"Two Voices in Black and White\" effect which increases the CRIT DMG from Hydro DMG and Cryo DMG dealt by the currently active party member by 50% for 5s.\nIf there is a Wandering Vortex present on the field or in the 5s after a Wandering Vortex explodes, the effect changes to: increases the CRIT DMG from Stellar Swirl reaction DMG caused by the currently active party member by 60% for 5s.\nAdditionally, the Elemental Skill Rechitativ: Sonorous Dawn is enhanced as follows: the duration of the Song of Ages Past effect is extended by 9s.",
          "zh-CN": "元素战技宣叙·晨声纷流中的唤春角笛攻击敌人时，沃雅妮莎将获得「黑与白的双音」效果，使队伍中自己的当前场上角色造成的水元素伤害与冰元素伤害的暴击伤害提升50%，持续5秒。\n若当前场上存在流荡风旋，或处于流荡风旋引爆后的5秒内，则改为使队伍中自己的当前场上角色造成的星扩散反应伤害的暴击伤害提升60%，持续5秒。\n此外，元素战技宣叙·晨声纷流获得强化：遥久之歌效果的持续时间延长9秒。"
        }
      },
      {
        "level": 3,
        "name": {
          "ja": "歌声が響く春の朝",
          "en": "Song Lingering on a Spring Morning",
          "zh-CN": "空音犹响的春晨"
        },
        "description": {
          "ja": "元素スキル流れる朝のレチタティーヴォのスキルLv.+3。\n最大Lv.15まで。",
          "en": "Increases the Level of the Elemental Skill Rechitativ: Sonorous Dawn by 3.\nMaximum upgrade level is 15.",
          "zh-CN": "元素战技宣叙·晨声纷流的技能等级提高3级。\n至多提升至15级。"
        }
      },
      {
        "level": 4,
        "name": {
          "ja": "岸辺を漂う波の声",
          "en": "Melancholic Voice Upon the Gentle Waters",
          "zh-CN": "柔波摇漾的低诉"
        },
        "description": {
          "ja": "ヴォジャニーツァが悠久の歌の治療効果を発動した際、治療されるキャラクターのHPに基づき、それぞれ以下のような効果を発動する。\n・治療されるキャラクターのHPが40%未満の場合、HP回復量+50%。\n・治療されるキャラクターのHPが40%以上の場合、ヴォジャニーツァのHP上限+20%、継続時間6秒。この効果は最大3層まで重ね掛けでき、継続時間は層ごとに独立してカウントされる。",
          "en": "When Vodyanitsa triggers the healing effect of Song of Ages Past, an additional effect will be triggered based on the healed character's HP.\n· If the character's HP is below 40%: The healing is increased by 50%; and\n· If the character's HP is 40% or above: Vodyanitsa's Max HP is increased by 20% for 6s. Max 3 stacks, and each stack's duration is counted independently.",
          "zh-CN": "沃雅妮莎触发遥久之歌的治疗效果时，将基于受治疗角色的生命值，触发不同效果。若受治疗角色的生命值：\n·低于40%：本次治疗量提升50%；\n·不低于40%：沃雅妮莎的生命值上限提升20%，持续6秒，该效果至多叠加3层，每层独立计算持续时间。"
        }
      },
      {
        "level": 5,
        "name": {
          "ja": "湖水に沈む唄い手",
          "en": "Together, Down Into the Deep",
          "zh-CN": "沉往深湖的共沦"
        },
        "description": {
          "ja": "元素爆発共に沈みゆくコーダのスキルLv.+3。\n最大Lv.15まで。",
          "en": "Increases the Level of the Elemental Burst Koda: Sink With Thee by 3.\nMaximum upgrade level is 15.",
          "zh-CN": "元素爆发终奏·伴尔沉沦的技能等级提高3级。\n至多提升至15级。"
        }
      },
      {
        "level": 6,
        "name": {
          "ja": "永遠に続く祝い歌",
          "en": "Neverending Song of Revelry",
          "zh-CN": "永不落幕的盛歌"
        },
        "description": {
          "ja": "命ノ星座「風雪を穿つこだま」の効果が強化され、「黒と白のデュエット」が付近にいるチーム内の全てのキャラクターに対して有効となる。\nさらに、悠久の歌効果の継続期間中、付近にいるチームのキャラクター全員が与える星拡散反応のダメージが25%向上し、与える水元素ダメージと氷元素ダメージ+60%。",
          "en": "The Constellation Echoes That Pierce the Snow is enhanced: \"Two Voices in Black and White\" now applies to all nearby party members.\nAdditionally, while the Song of Ages Past effect is active, Stellar Swirl reaction DMG dealt by nearby party members is elevated by 25% while Hydro DMG and Cryo DMG dealt are increased by 60%.",
          "zh-CN": "命之座「穿彻风雪的余响」的效果获得强化：「黑与白的双音」改为对队伍中附近的所有角色生效。\n此外，遥久之歌效果持续期间，队伍中附近的角色造成的星扩散反应伤害擢升25%，造成的水元素伤害与冰元素伤害提升60%。"
        }
      }
    ]
  }
};
