import type {
  LocalizedText,
  PartyMember,
  PartyRecommendation,
  PartyRecommendationSet,
} from "./partyRecommendations";
import { BATCH17_DATE } from "./batch17Guides";

const t = (ja: string, en: string, zh: string): LocalizedText => ({
  ja,
  en,
  "zh-CN": zh,
});
type TeamSpec = { page: number; teams: [string[], string[]] };

const SPECS: Record<string, TeamSpec> = {
  レザー: {
    page: 352606,
    teams: [
      ["レザー", "フリーナ", "ミカ", "鍾離"],
      ["レザー", "ロサリア", "フィッシュル", "ディオナ"],
    ],
  },
  ロサリア: {
    page: 364265,
    teams: [
      ["ロサリア", "神里綾華", "珊瑚宮心海", "楓原万葉"],
      ["ロサリア", "エウルア", "フィッシュル", "ミカ"],
    ],
  },
  雲菫: {
    page: 366273,
    teams: [
      ["雲菫", "宵宮", "夜蘭", "鍾離"],
      ["雲菫", "ノエル", "ゴロー", "フリーナ"],
    ],
  },
  煙緋: {
    page: 561160,
    teams: [
      ["煙緋", "夜蘭", "ベネット", "鍾離"],
      ["煙緋", "フリーナ", "閑雲", "ベネット"],
    ],
  },
  嘉明: {
    page: 583327,
    teams: [
      ["嘉明", "フリーナ", "閑雲", "ベネット"],
      ["嘉明", "夜蘭", "スクロース", "ベネット"],
    ],
  },
  甘雨: {
    page: 363710,
    teams: [
      ["甘雨", "香菱", "ベネット", "鍾離"],
      ["甘雨", "モナ", "ウェンティ", "ディオナ"],
    ],
  },
  閑雲: {
    page: 583326,
    teams: [
      ["閑雲", "魈", "ファルザン", "フリーナ"],
      ["閑雲", "嘉明", "フリーナ", "ベネット"],
    ],
  },
  凝光: {
    page: 352617,
    teams: [
      ["凝光", "ナヴィア", "シロネン", "ベネット"],
      ["凝光", "鍾離", "香菱", "ベネット"],
    ],
  },
  九条裟羅: {
    page: 395525,
    teams: [
      ["九条裟羅", "雷電将軍", "楓原万葉", "ベネット"],
      ["九条裟羅", "クロリンデ", "シュヴルーズ", "ベネット"],
    ],
  },
  荒瀧一斗: {
    page: 558893,
    teams: [
      ["荒瀧一斗", "ゴロー", "千織", "鍾離"],
      ["荒瀧一斗", "ゴロー", "フリーナ", "閑雲"],
    ],
  },
  刻晴: {
    page: 352626,
    teams: [
      ["刻晴", "フィッシュル", "ナヒーダ", "シロネン"],
      ["刻晴", "フィッシュル", "ヨォーヨ", "楓原万葉"],
    ],
  },
  珊瑚宮心海: {
    page: 558896,
    teams: [
      ["珊瑚宮心海", "ニィロウ", "ナヒーダ", "コレイ"],
      ["珊瑚宮心海", "神里綾華", "申鶴", "楓原万葉"],
    ],
  },
  鹿野院平蔵: {
    page: 560340,
    teams: [
      ["鹿野院平蔵", "ファルザン", "フリーナ", "ベネット"],
      ["鹿野院平蔵", "行秋", "フィッシュル", "北斗"],
    ],
  },
  七七: {
    page: 352624,
    teams: [
      ["七七", "フリーナ", "フィッシュル", "北斗"],
      ["七七", "エウルア", "雷電将軍", "ロサリア"],
    ],
  },
  重雲: {
    page: 352621,
    teams: [
      ["重雲", "申鶴", "香菱", "ベネット"],
      ["重雲", "行秋", "香菱", "ベネット"],
    ],
  },
  申鶴: {
    page: 415138,
    teams: [
      ["申鶴", "神里綾華", "珊瑚宮心海", "楓原万葉"],
      ["申鶴", "甘雨", "ベネット", "香菱"],
    ],
  },
  神里綾華: {
    page: 366103,
    teams: [
      ["神里綾華", "申鶴", "珊瑚宮心海", "楓原万葉"],
      ["神里綾華", "フリーナ", "シャルロット", "楓原万葉"],
    ],
  },
  神里綾人: {
    page: 558884,
    teams: [
      ["神里綾人", "夜蘭", "楓原万葉", "ベネット"],
      ["神里綾人", "ナヒーダ", "久岐忍", "トーマ"],
    ],
  },
  辛炎: {
    page: 561164,
    teams: [
      ["辛炎", "エウルア", "雷電将軍", "ベネット"],
      ["辛炎", "フィッシュル", "ロサリア", "ベネット"],
    ],
  },
  千織: {
    page: 599358,
    teams: [
      ["千織", "ナヴィア", "フリーナ", "ベネット"],
      ["千織", "荒瀧一斗", "ゴロー", "鍾離"],
    ],
  },
  早柚: {
    page: 390935,
    teams: [
      ["早柚", "フリーナ", "フィッシュル", "八重神子"],
      ["早柚", "香菱", "ガイア", "ベネット"],
    ],
  },
  放浪者: {
    page: 558858,
    teams: [
      ["放浪者", "ファルザン", "ベネット", "鍾離"],
      ["放浪者", "フリーナ", "ミカ", "ファルザン"],
    ],
  },
  北斗: {
    page: 561357,
    teams: [
      ["北斗", "クロリンデ", "フィッシュル", "シュヴルーズ"],
      ["北斗", "フィッシュル", "行秋", "スクロース"],
    ],
  },
  夢見月瑞希: {
    page: 662778,
    teams: [
      ["夢見月瑞希", "フィッシュル", "フリーナ", "オロルン"],
      ["夢見月瑞希", "八重神子", "ナヒーダ", "フリーナ"],
    ],
  },
  藍硯: {
    page: 655054,
    teams: [
      ["藍硯", "アルレッキーノ", "ベネット", "ロサリア"],
      ["藍硯", "ヌヴィレット", "フリーナ", "フィッシュル"],
    ],
  },
  旅人: {
    page: 662591,
    teams: [
      ["旅人", "ニィロウ", "珊瑚宮心海", "ナヒーダ"],
      ["旅人", "ムアラニ", "シロネン", "シグウィン"],
    ],
  },
  綺良々: {
    page: 560158,
    teams: [
      ["綺良々", "ニィロウ", "ナヒーダ", "珊瑚宮心海"],
      ["綺良々", "刻晴", "フィッシュル", "楓原万葉"],
    ],
  },
  魈: {
    page: 352615,
    teams: [
      ["魈", "ファルザン", "閑雲", "フリーナ"],
      ["魈", "ファルザン", "ベネット", "鍾離"],
    ],
  },
};

const PARTY_PAGE_DATA_AS_OF: Readonly<Record<number, string>> = {
  352624: "2026-09-08",
  390935: "2026-08-14",
  662778: "2026-09-08",
};

const NAMES: Record<string, LocalizedText> = {
  レザー: t("レザー", "Razor", "雷泽"),
  フリーナ: t("フリーナ", "Furina", "芙宁娜"),
  ミカ: t("ミカ", "Mika", "米卡"),
  鍾離: t("鍾離", "Zhongli", "钟离"),
  ロサリア: t("ロサリア", "Rosaria", "罗莎莉亚"),
  フィッシュル: t("フィッシュル", "Fischl", "菲谢尔"),
  ディオナ: t("ディオナ", "Diona", "迪奥娜"),
  神里綾華: t("神里綾華", "Kamisato Ayaka", "神里绫华"),
  珊瑚宮心海: t("珊瑚宮心海", "Sangonomiya Kokomi", "珊瑚宫心海"),
  楓原万葉: t("楓原万葉", "Kaedehara Kazuha", "枫原万叶"),
  エウルア: t("エウルア", "Eula", "优菈"),
  雲菫: t("雲菫", "Yun Jin", "云堇"),
  宵宮: t("宵宮", "Yoimiya", "宵宫"),
  夜蘭: t("夜蘭", "Yelan", "夜兰"),
  ノエル: t("ノエル", "Noelle", "诺艾尔"),
  ゴロー: t("ゴロー", "Gorou", "五郎"),
  煙緋: t("煙緋", "Yanfei", "烟绯"),
  ベネット: t("ベネット", "Bennett", "班尼特"),
  閑雲: t("閑雲", "Xianyun", "闲云"),
  嘉明: t("嘉明", "Gaming", "嘉明"),
  スクロース: t("スクロース", "Sucrose", "砂糖"),
  甘雨: t("甘雨", "Ganyu", "甘雨"),
  香菱: t("香菱", "Xiangling", "香菱"),
  モナ: t("モナ", "Mona", "莫娜"),
  ウェンティ: t("ウェンティ", "Venti", "温迪"),
  魈: t("魈", "Xiao", "魈"),
  ファルザン: t("ファルザン", "Faruzan", "珐露珊"),
  凝光: t("凝光", "Ningguang", "凝光"),
  ナヴィア: t("ナヴィア", "Navia", "娜维娅"),
  シロネン: t("シロネン", "Xilonen", "希诺宁"),
  九条裟羅: t("九条裟羅", "Kujou Sara", "九条裟罗"),
  雷電将軍: t("雷電将軍", "Raiden Shogun", "雷电将军"),
  クロリンデ: t("クロリンデ", "Clorinde", "克洛琳德"),
  シュヴルーズ: t("シュヴルーズ", "Chevreuse", "夏沃蕾"),
  荒瀧一斗: t("荒瀧一斗", "Arataki Itto", "荒泷一斗"),
  千織: t("千織", "Chiori", "千织"),
  刻晴: t("刻晴", "Keqing", "刻晴"),
  ナヒーダ: t("ナヒーダ", "Nahida", "纳西妲"),
  ヨォーヨ: t("ヨォーヨ", "Yaoyao", "瑶瑶"),
  ニィロウ: t("ニィロウ", "Nilou", "妮露"),
  コレイ: t("コレイ", "Collei", "柯莱"),
  鹿野院平蔵: t("鹿野院平蔵", "Shikanoin Heizou", "鹿野院平藏"),
  行秋: t("行秋", "Xingqiu", "行秋"),
  北斗: t("北斗", "Beidou", "北斗"),
  七七: t("七七", "Qiqi", "七七"),
  重雲: t("重雲", "Chongyun", "重云"),
  申鶴: t("申鶴", "Shenhe", "申鹤"),
  シャルロット: t("シャルロット", "Charlotte", "夏洛蒂"),
  神里綾人: t("神里綾人", "Kamisato Ayato", "神里绫人"),
  久岐忍: t("久岐忍", "Kuki Shinobu", "久岐忍"),
  トーマ: t("トーマ", "Thoma", "托马"),
  辛炎: t("辛炎", "Xinyan", "辛焱"),
  早柚: t("早柚", "Sayu", "早柚"),
  八重神子: t("八重神子", "Yae Miko", "八重神子"),
  ガイア: t("ガイア", "Kaeya", "凯亚"),
  放浪者: t("放浪者", "Wanderer", "流浪者"),
  夢見月瑞希: t("夢見月瑞希", "Yumemizuki Mizuki", "梦见月瑞希"),
  オロルン: t("オロルン", "Ororon", "欧洛伦"),
  藍硯: t("藍硯", "Lan Yan", "蓝砚"),
  アルレッキーノ: t("アルレッキーノ", "Arlecchino", "阿蕾奇诺"),
  ヌヴィレット: t("ヌヴィレット", "Neuvillette", "那维莱特"),
  旅人: t("旅人", "Traveler", "旅行者"),
  ムアラニ: t("ムアラニ", "Mualani", "玛拉妮"),
  シグウィン: t("シグウィン", "Sigewinne", "希格雯"),
  綺良々: t("綺良々", "Kirara", "绮良良"),
};

const ROLES: Record<string, LocalizedText> = {
  レザー: t("物理メイン火力", "Physical main DPS", "物理主C"),
  ロサリア: t(
    "氷サブ火力・会心支援",
    "Cryo sub-DPS / CRIT support",
    "冰副C / 暴击辅助"
  ),
  雲菫: t("通常攻撃支援", "Normal Attack support", "普攻辅助"),
  煙緋: t("炎重撃メイン火力", "Pyro Charged-Attack DPS", "火重击主C"),
  嘉明: t("炎落下攻撃メイン火力", "Pyro Plunging DPS", "火下落攻击主C"),
  甘雨: t("氷重撃メイン火力", "Cryo Charged-Attack DPS", "冰重击主C"),
  閑雲: t(
    "落下攻撃支援・全体回復",
    "Plunge support / team healing",
    "下落攻击辅助 / 全队治疗"
  ),
  凝光: t("岩メイン火力", "Geo main DPS", "岩主C"),
  九条裟羅: t(
    "雷攻撃力支援・サブ火力",
    "Electro ATK support / sub-DPS",
    "雷攻击辅助 / 副C"
  ),
  荒瀧一斗: t("岩メイン火力", "Geo main DPS", "岩主C"),
  刻晴: t("激化メイン火力", "Aggravate main DPS", "激化主C"),
  珊瑚宮心海: t(
    "水付着・回復・ドライバー",
    "Hydro driver / healer",
    "水附着驾驶员 / 治疗"
  ),
  鹿野院平蔵: t(
    "風ドライバー・拡散火力",
    "Anemo driver / Swirl DPS",
    "风驾驶员 / 扩散输出"
  ),
  七七: t(
    "全体回復・物理ドライバー",
    "Team healer / Physical driver",
    "全队治疗 / 物理驾驶员"
  ),
  重雲: t(
    "氷付与・爆発サブ火力",
    "Cryo infusion / Burst sub-DPS",
    "冰附魔 / 爆发副C"
  ),
  申鶴: t("氷元素専用支援", "Cryo support", "冰元素辅助"),
  神里綾華: t("凍結メイン火力", "Freeze main DPS", "冻结主C"),
  神里綾人: t(
    "水通常攻撃ドライバー",
    "Hydro Normal-Attack driver",
    "水普攻驾驶员"
  ),
  辛炎: t("物理火力・シールド", "Physical DPS / shielder", "物理输出 / 护盾"),
  千織: t("岩追撃サブ火力", "Geo off-field sub-DPS", "岩后台副C"),
  早柚: t(
    "風拡散・全体回復",
    "Anemo Swirl / team healing",
    "风扩散 / 全队治疗"
  ),
  放浪者: t("風通常攻撃メイン火力", "Anemo Normal-Attack DPS", "风普攻主C"),
  北斗: t("雷爆発追撃サブ火力", "Electro Burst sub-DPS", "雷爆发副C"),
  夢見月瑞希: t(
    "拡散ドライバー・回復",
    "Swirl driver / healer",
    "扩散驾驶员 / 治疗"
  ),
  藍硯: t(
    "風シールド・翠緑支援",
    "Anemo shield / Viridescent support",
    "风护盾 / 翠绿辅助"
  ),
  旅人: t(
    "元素別反応支援",
    "Element-specific reaction support",
    "分元素反应辅助"
  ),
  綺良々: t("草付着・シールド", "Dendro application / shield", "草附着 / 护盾"),
  魈: t("風落下攻撃メイン火力", "Anemo Plunging DPS", "风下落攻击主C"),
};

const FOCUS: Record<string, [LocalizedText, LocalizedText]> = {
  レザー: [
    t(
      "フリーナの与ダメージ支援をミカの回復で蓄積し、鍾離が物理耐性低下と中断耐性を担う。",
      "Mika's healing builds Furina's Fanfare while Zhongli supplies interruption resistance and Physical RES reduction.",
      "米卡治疗叠加芙宁娜气氛值，钟离提供抗打断与物理减抗。"
    ),
    t(
      "ロサリアの氷とフィッシュルの雷で超電導を維持し、ディオナがシールドと回復を担う。",
      "Rosaria and Fischl maintain Superconduct while Diona provides shielding and healing.",
      "罗莎莉亚与菲谢尔维持超导，迪奥娜提供护盾与治疗。"
    ),
  ],
  ロサリア: [
    t(
      "綾華の凍結火力を心海の水付着、万葉の集敵・翠緑、ロサリアの会心支援で補う。",
      "Kokomi enables Freeze, Kazuha groups and shreds Cryo RES, and Rosaria supports Ayaka with CRIT Rate.",
      "心海提供冻结水附着，万叶聚怪减冰抗，罗莎莉亚为绫华提供暴击支援。"
    ),
    t(
      "ロサリアとフィッシュルで超電導を起こし、ミカの回復・物理支援をエウルアへ集中する。",
      "Rosaria and Fischl trigger Superconduct while Mika heals and supports Eula's Physical damage.",
      "罗莎莉亚与菲谢尔触发超导，米卡治疗并辅助优菈的物理伤害。"
    ),
  ],
  雲菫: [
    t(
      "夜蘭の水付着で宵宮の蒸発を支え、雲菫が通常攻撃を強化し、鍾離が射撃中を保護する。",
      "Yelan enables Yoimiya's Vaporize, Yun Jin buffs Normal Attacks, and Zhongli protects her attack string.",
      "夜兰帮助宵宫蒸发，云堇强化普攻，钟离保护连射。"
    ),
    t(
      "ゴローの防御支援と雲菫の通常攻撃支援をノエルへ集め、フリーナのバフをノエルの回復で蓄積する。",
      "Gorou and Yun Jin support Noelle's DEF and Normal Attacks while Noelle's healing builds Furina's Fanfare.",
      "五郎与云堇强化诺艾尔的防御和普攻，诺艾尔治疗叠加芙宁娜气氛值。"
    ),
  ],
  煙緋: [
    t(
      "夜蘭の追撃で煙緋の重撃前に水を付着し、ベネットの攻撃支援と鍾離のシールドで蒸発を安定させる。",
      "Yelan applies Hydro for Yanfei's Vaporize; Bennett buffs ATK and Zhongli stabilizes Charged Attacks with a shield.",
      "夜兰挂水供烟绯蒸发，班尼特增攻，钟离护盾稳定重击。"
    ),
    t(
      "フリーナの水付着と与ダメージ支援を使い、閑雲で煙緋の落下攻撃を蒸発させ、ベネットが回復と攻撃力を補う。",
      "Furina enables Vaporize and buffs damage, Xianyun enables plunges, and Bennett supplies healing and ATK.",
      "芙宁娜供水与增伤，闲云使烟绯下落攻击蒸发，班尼特提供治疗与攻击力。"
    ),
  ],
  嘉明: [
    t(
      "閑雲が落下攻撃と回復を、フリーナが水付着と与ダメージを、ベネットが攻撃力を支援する。",
      "Xianyun buffs plunges and heals, Furina supplies Hydro and damage buffs, and Bennett supports ATK.",
      "闲云强化下落攻击并治疗，芙宁娜挂水增伤，班尼特提供攻击力。"
    ),
    t(
      "夜蘭の水付着で嘉明の落下攻撃を蒸発させ、スクロースの熟知共有・翠緑とベネットの攻撃支援を重ねる。",
      "Yelan enables Vaporize while Sucrose shares EM and shreds Pyro RES; Bennett buffs ATK.",
      "夜兰供水蒸发，砂糖共享精通并减火抗，班尼特增攻。"
    ),
  ],
  甘雨: [
    t(
      "香菱の炎付着で甘雨の重撃を溶解させ、ベネットの攻撃支援と鍾離の中断耐性で照準時間を確保する。",
      "Xiangling enables Melt for Ganyu; Bennett buffs ATK and Zhongli protects charged-shot aiming.",
      "香菱挂火供甘雨融化，班尼特增攻，钟离保护蓄力瞄准。"
    ),
    t(
      "モナの水付着とデバフ、ウェンティの集敵、ディオナの氷共鳴・耐久で凍結重撃を維持する。",
      "Mona enables Freeze and Omen, Venti groups enemies, and Diona supplies Cryo Resonance and sustain.",
      "莫娜挂水与星异，温迪聚怪，迪奥娜提供双冰与生存。"
    ),
  ],
  閑雲: [
    t(
      "閑雲が魈の落下攻撃と回復を担い、ファルザンが風耐性低下、フリーナが与ダメージ支援を行う。",
      "Xianyun buffs Xiao's plunges and heals, Faruzan shreds Anemo RES, and Furina buffs damage.",
      "闲云强化魈下落攻击并治疗，珐露珊减风抗，芙宁娜增伤。"
    ),
    t(
      "嘉明の炎落下攻撃を閑雲が強化し、フリーナの水付着で蒸発、ベネットで攻撃力を補う。",
      "Xianyun buffs Gaming's Pyro plunges, Furina enables Vaporize, and Bennett supplies ATK.",
      "闲云强化嘉明火下落攻击，芙宁娜供水蒸发，班尼特增攻。"
    ),
  ],
  凝光: [
    t(
      "ナヴィアの結晶火力と凝光の岩粒子・岩ダメージ支援を組み、シロネンとベネットで耐性低下・回復・攻撃力を補う。",
      "Ningguang batteries and supports Navia's Geo damage; Xilonen and Bennett add RES shred, healing, and ATK.",
      "凝光为娜维娅充能并辅助岩伤，希诺宁与班尼特提供减抗、治疗和攻击力。"
    ),
    t(
      "鍾離との岩共鳴と耐性低下で凝光を守り、香菱とベネットの炎共鳴・控え火力を加える。",
      "Zhongli provides Geo Resonance, shielding, and RES shred while Xiangling and Bennett add Pyro Resonance and off-field damage.",
      "钟离提供双岩、护盾和减抗，香菱与班尼特补充双火与后台输出。"
    ),
  ],
  九条裟羅: [
    t(
      "裟羅とベネットの攻撃支援、万葉の雷拡散・耐性低下を雷電将軍の爆発へ集中する。",
      "Sara and Bennett stack ATK buffs while Kazuha swirls Electro and shreds RES for Raiden's Burst.",
      "九条裟罗与班尼特叠加攻击增益，万叶扩雷减抗，集中强化雷电将军爆发。"
    ),
    t(
      "クロリンデと裟羅の雷火力をシュヴルーズの過負荷耐性低下とベネットの攻撃・回復で支える。",
      "Chevreuse supports Overloaded and shreds RES for Clorinde and Sara while Bennett buffs and heals.",
      "夏沃蕾辅助超载并减抗，强化克洛琳德与九条裟罗，班尼特增攻治疗。"
    ),
  ],
  荒瀧一斗: [
    t(
      "ゴローが防御力と岩火力を支援し、千織が岩創造物を利用して追撃、鍾離が岩共鳴とシールドを担う。",
      "Gorou buffs DEF and Geo damage, Chiori uses the Geo construct for off-field damage, and Zhongli provides Resonance and shielding.",
      "五郎强化防御与岩伤，千织利用岩造物后台输出，钟离提供双岩与护盾。"
    ),
    t(
      "ゴローが一斗を支援し、フリーナの与ダメージを閑雲の全体回復で蓄積する。",
      "Gorou supports Itto while Xianyun's team healing builds Furina's Fanfare.",
      "五郎辅助一斗，闲云全队治疗叠加芙宁娜气氛值。"
    ),
  ],
  刻晴: [
    t(
      "ナヒーダの草付着とフィッシュルの追撃で激化を維持し、シロネンが耐性低下と回復を担う。",
      "Nahida and Fischl maintain Aggravate while Xilonen shreds RES and heals.",
      "纳西妲与菲谢尔维持激化，希诺宁减抗并治疗。"
    ),
    t(
      "ヨォーヨが草付着と回復、フィッシュルが雷追撃、万葉が集敵・雷耐性低下を担う。",
      "Yaoyao applies Dendro and heals, Fischl adds Electro damage, and Kazuha groups and shreds Electro RES.",
      "瑶瑶挂草治疗，菲谢尔补雷伤，万叶聚怪并减雷抗。"
    ),
  ],
  珊瑚宮心海: [
    t(
      "心海の継続水付着と回復でニィロウ開花を維持し、ナヒーダとコレイが草付着を供給する。",
      "Kokomi sustains Nilou Bloom with Hydro application and healing while Nahida and Collei provide Dendro.",
      "心海持续挂水治疗维持妮露绽放，纳西妲与柯莱提供草附着。"
    ),
    t(
      "心海が水付着と回復、申鶴が氷支援、万葉が集敵・耐性低下を担い綾華の凍結を維持する。",
      "Kokomi enables Freeze and heals, Shenhe buffs Cryo, and Kazuha groups and shreds RES for Ayaka.",
      "心海挂水治疗，申鹤强化冰伤，万叶聚怪减抗，维持绫华冻结。"
    ),
  ],
  鹿野院平蔵: [
    t(
      "ファルザンの風支援、フリーナの与ダメージと水付着、ベネットの攻撃・回復を平蔵の風火力へ集める。",
      "Faruzan buffs Anemo, Furina adds Hydro and damage buffs, and Bennett supplies ATK and healing for Heizou.",
      "珐露珊辅助风伤，芙宁娜挂水增伤，班尼特为平藏增攻治疗。"
    ),
    t(
      "行秋・フィッシュル・北斗の控え追撃を平蔵が通常攻撃と拡散で駆動する感電編成。",
      "Heizou drives Xingqiu, Fischl, and Beidou's off-field attacks in an Electro-Charged team.",
      "平藏以普攻和扩散驱动行秋、菲谢尔、北斗的后台攻击，组成感电队。"
    ),
  ],
  七七: [
    t(
      "七七の通常攻撃回復でフリーナの与ダメージを蓄積し、フィッシュルと北斗の超電導・追撃を駆動する。",
      "Qiqi's on-field healing builds Furina's Fanfare while driving Fischl and Beidou and triggering Superconduct.",
      "七七站场治疗叠加芙宁娜气氛值，并驱动菲谢尔北斗、触发超导。"
    ),
    t(
      "雷電将軍とロサリアで超電導を維持し、七七がエウルアを回復しながら氷共鳴を補う。",
      "Raiden and Rosaria maintain Superconduct while Qiqi heals Eula and contributes Cryo Resonance.",
      "雷电将军与罗莎莉亚维持超导，七七治疗优菈并补充双冰。"
    ),
  ],
  重雲: [
    t(
      "重雲と申鶴の氷爆発を香菱の炎で溶解させ、ベネットが攻撃力・回復・炎粒子を供給する。",
      "Xiangling enables Melt for Chongyun and Shenhe while Bennett provides ATK, healing, and Pyro particles.",
      "香菱挂火供重云申鹤融化，班尼特提供攻击、治疗和火元素微粒。"
    ),
    t(
      "行秋の水と重雲の氷付与で凍結しつつ、香菱とベネットで溶解・蒸発を重ねる。",
      "Xingqiu and Chongyun enable Freeze while Xiangling and Bennett add Melt and Vaporize reactions.",
      "行秋与重云冻结，香菱和班尼特叠加融化与蒸发。"
    ),
  ],
  申鶴: [
    t(
      "申鶴が綾華の氷ダメージを強化し、心海が凍結と回復、万葉が集敵・氷耐性低下を担う。",
      "Shenhe buffs Ayaka's Cryo damage, Kokomi enables Freeze and heals, and Kazuha groups and shreds Cryo RES.",
      "申鹤强化绫华冰伤，心海冻结治疗，万叶聚怪减冰抗。"
    ),
    t(
      "甘雨と申鶴の氷攻撃を香菱の炎で溶解させ、ベネットが攻撃支援と回復を担う。",
      "Xiangling enables Melt for Ganyu and Shenhe while Bennett buffs ATK and heals.",
      "香菱挂火供甘雨申鹤融化，班尼特增攻治疗。"
    ),
  ],
  神里綾華: [
    t(
      "申鶴の氷支援、心海の水付着・回復、万葉の集敵・氷耐性低下で綾華の爆発を固定する。",
      "Shenhe buffs Cryo, Kokomi freezes and heals, and Kazuha groups and shreds Cryo RES to keep Ayaka's Burst on target.",
      "申鹤强化冰伤，心海冻结治疗，万叶聚怪减冰抗，让绫华爆发稳定命中。"
    ),
    t(
      "フリーナの水付着と与ダメージをシャルロットの全体回復で蓄積し、万葉が凍結対象を集める。",
      "Charlotte's team healing builds Furina's Fanfare while Kazuha groups Frozen enemies for Ayaka.",
      "夏洛蒂全队治疗叠加芙宁娜气氛值，万叶聚集冻结敌人供绫华输出。"
    ),
  ],
  神里綾人: [
    t(
      "夜蘭の水追撃と万葉の水拡散・耐性低下を綾人の通常攻撃へ重ね、ベネットが攻撃力と回復を担う。",
      "Yelan's Hydro follow-ups and Kazuha's Hydro shred amplify Ayato's Normal Attacks while Bennett buffs and heals.",
      "夜兰水追击与万叶扩水减抗强化绫人普攻，班尼特增攻治疗。"
    ),
    t(
      "綾人の水付着とナヒーダの草で草原核を作り、久岐忍が超開花を起動、トーマが中断耐性を補う。",
      "Ayato and Nahida create Dendro Cores, Kuki triggers Hyperbloom, and Thoma supplies interruption resistance.",
      "绫人与纳西妲生成草原核，久岐忍触发超绽放，托马补充抗打断。"
    ),
  ],
  辛炎: [
    t(
      "雷電将軍の雷とエウルア・辛炎の氷/物理運用で超電導を維持し、ベネットが攻撃力と回復を補う。",
      "Raiden enables Superconduct for Eula and Xinyan while Bennett adds ATK and healing.",
      "雷电将军为优菈与辛焱触发超导，班尼特提供攻击与治疗。"
    ),
    t(
      "フィッシュルとロサリアで超電導を起こし、辛炎の物理耐性低下・シールドとベネットの攻撃支援を重ねる。",
      "Fischl and Rosaria trigger Superconduct while Xinyan adds Physical RES reduction and shielding; Bennett buffs ATK.",
      "菲谢尔与罗莎莉亚触发超导，辛焱提供物理减抗与护盾，班尼特增攻。"
    ),
  ],
  千織: [
    t(
      "ナヴィアが結晶を利用し、千織が控え岩火力、フリーナとベネットが与ダメージ・攻撃・回復を補う。",
      "Navia consumes Crystallize shards, Chiori adds off-field Geo damage, and Furina plus Bennett supply buffs and healing.",
      "娜维娅利用结晶，千织后台岩伤，芙宁娜与班尼特提供增伤、攻击和治疗。"
    ),
    t(
      "一斗とゴローの防御型岩編成で千織の追撃を使い、鍾離が岩共鳴・シールド・耐性低下を担う。",
      "Chiori adds off-field damage to Itto and Gorou's DEF-based Geo core while Zhongli supplies Resonance, shield, and RES shred.",
      "千织为一斗五郎防御岩队补后台输出，钟离提供双岩、护盾与减抗。"
    ),
  ],
  早柚: [
    t(
      "早柚が翠緑と全体回復を担い、フリーナの与ダメージを蓄積しながらフィッシュル・八重神子の雷を拡散する。",
      "Sayu shreds RES and heals to build Furina's Fanfare while swirling Fischl and Yae's Electro.",
      "早柚翠绿减抗并全队治疗叠加芙宁娜气氛值，同时扩散菲谢尔与八重神子的雷。"
    ),
    t(
      "香菱・ガイアの控え元素攻撃を早柚の回転で拡散し、ベネットが攻撃力・回復・炎粒子を供給する。",
      "Sayu's roll swirls Xiangling and Kaeya's off-field attacks while Bennett supplies ATK, healing, and Pyro particles.",
      "早柚滚动扩散香菱与凯亚的后台攻击，班尼特提供攻击、治疗与火元素微粒。"
    ),
  ],
  放浪者: [
    t(
      "ファルザンの風耐性低下、ベネットの攻撃支援、鍾離のシールドで放浪者の浮遊通常攻撃を安定させる。",
      "Faruzan shreds Anemo RES, Bennett buffs ATK, and Zhongli shields Wanderer's airborne Normal Attacks.",
      "珐露珊减风抗，班尼特增攻，钟离护盾稳定流浪者空中普攻。"
    ),
    t(
      "ファルザンの風支援とフリーナの与ダメージを、ミカの回復・攻撃速度支援で放浪者へ集める。",
      "Faruzan buffs Anemo, Furina buffs damage, and Mika heals and supports Wanderer's attack speed.",
      "珐露珊辅助风伤，芙宁娜增伤，米卡治疗并辅助流浪者攻速。"
    ),
  ],
  北斗: [
    t(
      "クロリンデとフィッシュルの雷攻撃、北斗の連鎖追撃をシュヴルーズの過負荷支援・耐性低下でまとめる。",
      "Chevreuse supports Overloaded and shreds RES for Clorinde, Fischl, and Beidou's chained attacks.",
      "夏沃蕾辅助超载并减抗，强化克洛琳德、菲谢尔与北斗连锁攻击。"
    ),
    t(
      "スクロースが行秋・フィッシュル・北斗の感電追撃を通常攻撃と拡散で駆動し、翠緑で耐性を下げる。",
      "Sucrose drives Xingqiu, Fischl, and Beidou's Electro-Charged attacks and shreds RES with Viridescent Venerer.",
      "砂糖驱动行秋、菲谢尔、北斗的感电追击，并以翠绿减抗。"
    ),
  ],
  夢見月瑞希: [
    t(
      "瑞希がフィッシュル・オロルンの雷とフリーナの水を拡散して感電を駆動し、自身の回復でフリーナの与ダメージを蓄積する。",
      "Mizuki swirls Electro from Fischl and Ororon with Furina's Hydro to drive Electro-Charged, and her healing builds Fanfare.",
      "瑞希扩散菲谢尔、欧洛伦的雷与芙宁娜的水驱动感电，并以治疗叠加气氛值。"
    ),
    t(
      "ナヒーダの草、八重神子の雷、フリーナの水を瑞希が拡散・駆動し、激化と超開花を併用する。",
      "Mizuki drives Nahida, Yae, and Furina to combine Swirl, Quicken, and Hyperbloom.",
      "瑞希驱动纳西妲、八重神子与芙宁娜，结合扩散、激化与超绽放。"
    ),
  ],
  藍硯: [
    t(
      "藍硯が翠緑の炎耐性低下とシールドを担い、ベネットの攻撃支援、ロサリアの溶解補助でアルレッキーノを守る。",
      "Lan Yan shields and shreds Pyro RES, Bennett buffs ATK, and Rosaria enables Melt support for Arlecchino.",
      "蓝砚护盾并减火抗，班尼特增攻，罗莎莉亚辅助融化保护阿蕾奇诺输出。"
    ),
    t(
      "藍硯が水/雷を拡散して耐性を下げ、フリーナとフィッシュルの控え火力をヌヴィレットの重撃で駆動する。",
      "Lan Yan swirls Hydro and Electro to shred RES while Neuvillette drives Furina and Fischl's off-field damage.",
      "蓝砚扩散水雷减抗，那维莱特重击驱动芙宁娜与菲谢尔后台输出。"
    ),
  ],
  旅人: [
    t(
      "草旅人としてナヒーダと草付着を補い、ニィロウと心海の特殊開花を心海の回復で維持する。",
      "Dendro Traveler supplements Nahida's application while Nilou and Kokomi trigger Bountiful Cores and Kokomi sustains the team.",
      "草旅行者补充纳西妲草附着，妮露与心海触发丰穰之核，心海维持生存。"
    ),
    t(
      "炎旅人としてムアラニの蒸発用炎付着を補い、シロネンが耐性低下、シグウィンが回復を担う。",
      "Pyro Traveler helps apply Pyro for Mualani's Vaporize while Xilonen shreds RES and Sigewinne heals.",
      "火旅行者为玛拉妮蒸发补火，希诺宁减抗，希格雯治疗。"
    ),
  ],
  綺良々: [
    t(
      "綺良々のシールドと草付着でニィロウ開花を守り、ナヒーダが草付着、心海が水付着・回復を担う。",
      "Kirara shields Nilou Bloom, Nahida supplies Dendro, and Kokomi applies Hydro and heals.",
      "绮良良护盾保护妮露绽放，纳西妲挂草，心海挂水治疗。"
    ),
    t(
      "綺良々が草付着とシールド、フィッシュルが雷追撃、万葉が集敵・雷耐性低下を担い刻晴の激化を支える。",
      "Kirara applies Dendro and shields, Fischl adds Electro attacks, and Kazuha groups and shreds Electro RES for Keqing.",
      "绮良良挂草护盾，菲谢尔补雷，万叶聚怪减雷抗，辅助刻晴激化。"
    ),
  ],
  魈: [
    t(
      "ファルザンが風耐性を下げ、閑雲が落下攻撃と全体回復、フリーナが与ダメージ支援を担う。",
      "Faruzan shreds Anemo RES, Xianyun buffs plunges and heals, and Furina supplies damage buffs.",
      "珐露珊减风抗，闲云强化下落攻击并全队治疗，芙宁娜增伤。"
    ),
    t(
      "ファルザンの風支援とベネットの攻撃・回復を魈へ集め、鍾離が落下攻撃中の中断耐性を確保する。",
      "Faruzan buffs Anemo, Bennett buffs and heals, and Zhongli protects Xiao's plunging sequence.",
      "珐露珊辅助风伤，班尼特增攻治疗，钟离保护魈下落攻击循环。"
    ),
  ],
};

const SUPPORT_ROLE = t(
  "元素反応・支援枠",
  "Reaction / support",
  "反应 / 辅助位"
);

function roleFor(name: string, selected: string): LocalizedText {
  if (name === selected) return ROLES[selected] ?? SUPPORT_ROLE;
  if (
    [
      "鍾離",
      "ディオナ",
      "ミカ",
      "珊瑚宮心海",
      "七七",
      "閑雲",
      "ヨォーヨ",
      "ベネット",
      "早柚",
      "シャルロット",
      "シグウィン",
    ].includes(name)
  )
    return t("耐久・回復支援", "Sustain / healing", "生存 / 治疗辅助");
  if (
    [
      "フィッシュル",
      "夜蘭",
      "フリーナ",
      "香菱",
      "北斗",
      "八重神子",
      "行秋",
      "千織",
      "コレイ",
      "オロルン",
      "ロサリア",
    ].includes(name)
  )
    return t(
      "控えサブ火力・元素付着",
      "Off-field damage / application",
      "后台输出 / 附着"
    );
  return t("反応・火力支援", "Reaction / damage support", "反应 / 伤害辅助");
}

function member(name: string, selected: string): PartyMember {
  return {
    name: NAMES[name] ?? t(name, name, name),
    role: roleFor(name, selected),
  };
}

function option(
  selected: string,
  spec: TeamSpec,
  names: string[],
  rank: 1 | 2
): PartyRecommendation {
  return {
    id: `batch17-genshin-${selected}-${rank}`,
    rank,
    title:
      rank === 1
        ? t("現行推奨", "Current recommendation", "当前推荐")
        : t("代替編成", "Alternative", "替代阵容"),
    members: names.map(name => member(name, selected)),
    synergy: [
      FOCUS[selected]?.[rank - 1] ??
        t(
          "個別ガイドの実名編成。",
          "Named team from the dated guide.",
          "带日期指南中的实名队伍。"
        ),
    ],
    targetChanges: [],
    targetSummary: t(
      "編成・命ノ星座・武器・戦闘中バフは公開プロフィールの現在値へ自動加算しない。",
      "Team, constellation, weapon and in-combat buffs are not added to public-profile stats.",
      "队伍、命座、武器与战斗内增益不会自动计入公开面板。"
    ),
    gameVersion: "7.0",
    dataAsOf: PARTY_PAGE_DATA_AS_OF[spec.page] ?? "2026-08-13",
    updatedAt: BATCH17_DATE,
    sourceLabel: t(
      "Game8の更新日付き個別ガイドを照合",
      "Cross-checked dated Game8 guide",
      "已核对Game8带日期的角色指南"
    ),
    sourceUrl: `https://game8.jp/genshin/${spec.page}`,
    communitySources: [
      {
        label: t(
          "Game8原神ガイドの公開Xアカウント",
          "Game8 Genshin public X account",
          "Game8原神公开X账号"
        ),
        url: "https://x.com/G8_Genshin",
        checkedAt: BATCH17_DATE,
        note: t(
          "個別投稿は編成決定へ採用せず、主ガイドの更新動向の監視に限定。",
          "No individual post was used to select the team; this account is monitored only for guide updates.",
          "未采用单独帖子决定队伍，仅用于监控主指南更新。"
        ),
        status: "watching",
      },
    ],
  };
}

export function batch17PartyFor(name: string): PartyRecommendationSet | null {
  const spec = SPECS[name];
  if (!spec) return null;
  return {
    gameVersion: "7.0",
    dataAsOf: PARTY_PAGE_DATA_AS_OF[spec.page] ?? "2026-08-13",
    updatedAt: BATCH17_DATE,
    options: spec.teams.map((names, index) =>
      option(name, spec, names, (index + 1) as 1 | 2)
    ),
  };
}
