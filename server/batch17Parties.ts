import { createLegacyTexts } from "./content/legacyTexts";
import { sources as _sources } from "../content/ja/guides/batch17Parties";
import { records as _en } from "../content/translations/en/batch17Parties";
import { records as _zh } from "../content/translations/zh-CN/batch17Parties";
const _content = createLegacyTexts(_sources, _en, _zh);
import type {
  LocalizedText,
  PartyMember,
  PartyRecommendation,
  PartyRecommendationSet,
} from "./parties/types";
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
  レザー: _content.localized("guide.legacy.batch17Parties.b00001"),
  フリーナ: _content.localized("guide.legacy.batch17Parties.b00002"),
  ミカ: _content.localized("guide.legacy.batch17Parties.b00003"),
  鍾離: _content.localized("guide.legacy.batch17Parties.b00004"),
  ロサリア: _content.localized("guide.legacy.batch17Parties.b00005"),
  フィッシュル: _content.localized("guide.legacy.batch17Parties.b00006"),
  ディオナ: _content.localized("guide.legacy.batch17Parties.b00007"),
  神里綾華: _content.localized("guide.legacy.batch17Parties.b00008"),
  珊瑚宮心海: _content.localized("guide.legacy.batch17Parties.b00009"),
  楓原万葉: _content.localized("guide.legacy.batch17Parties.b00010"),
  エウルア: _content.localized("guide.legacy.batch17Parties.b00011"),
  雲菫: _content.localized("guide.legacy.batch17Parties.b00012"),
  宵宮: _content.localized("guide.legacy.batch17Parties.b00013"),
  夜蘭: _content.localized("guide.legacy.batch17Parties.b00014"),
  ノエル: _content.localized("guide.legacy.batch17Parties.b00015"),
  ゴロー: _content.localized("guide.legacy.batch17Parties.b00016"),
  煙緋: _content.localized("guide.legacy.batch17Parties.b00017"),
  ベネット: _content.localized("guide.legacy.batch17Parties.b00018"),
  閑雲: _content.localized("guide.legacy.batch17Parties.b00019"),
  嘉明: _content.localized("guide.legacy.batch17Parties.b00020"),
  スクロース: _content.localized("guide.legacy.batch17Parties.b00021"),
  甘雨: _content.localized("guide.legacy.batch17Parties.b00022"),
  香菱: _content.localized("guide.legacy.batch17Parties.b00023"),
  モナ: _content.localized("guide.legacy.batch17Parties.b00024"),
  ウェンティ: _content.localized("guide.legacy.batch17Parties.b00025"),
  魈: _content.localized("guide.legacy.batch17Parties.b00026"),
  ファルザン: _content.localized("guide.legacy.batch17Parties.b00027"),
  凝光: _content.localized("guide.legacy.batch17Parties.b00028"),
  ナヴィア: _content.localized("guide.legacy.batch17Parties.b00029"),
  シロネン: _content.localized("guide.legacy.batch17Parties.b00030"),
  九条裟羅: _content.localized("guide.legacy.batch17Parties.b00031"),
  雷電将軍: _content.localized("guide.legacy.batch17Parties.b00032"),
  クロリンデ: _content.localized("guide.legacy.batch17Parties.b00033"),
  シュヴルーズ: _content.localized("guide.legacy.batch17Parties.b00034"),
  荒瀧一斗: _content.localized("guide.legacy.batch17Parties.b00035"),
  千織: _content.localized("guide.legacy.batch17Parties.b00036"),
  刻晴: _content.localized("guide.legacy.batch17Parties.b00037"),
  ナヒーダ: _content.localized("guide.legacy.batch17Parties.b00038"),
  ヨォーヨ: _content.localized("guide.legacy.batch17Parties.b00039"),
  ニィロウ: _content.localized("guide.legacy.batch17Parties.b00040"),
  コレイ: _content.localized("guide.legacy.batch17Parties.b00041"),
  鹿野院平蔵: _content.localized("guide.legacy.batch17Parties.b00042"),
  行秋: _content.localized("guide.legacy.batch17Parties.b00043"),
  北斗: _content.localized("guide.legacy.batch17Parties.b00044"),
  七七: _content.localized("guide.legacy.batch17Parties.b00045"),
  重雲: _content.localized("guide.legacy.batch17Parties.b00046"),
  申鶴: _content.localized("guide.legacy.batch17Parties.b00047"),
  シャルロット: _content.localized("guide.legacy.batch17Parties.b00048"),
  神里綾人: _content.localized("guide.legacy.batch17Parties.b00049"),
  久岐忍: _content.localized("guide.legacy.batch17Parties.b00050"),
  トーマ: _content.localized("guide.legacy.batch17Parties.b00051"),
  辛炎: _content.localized("guide.legacy.batch17Parties.b00052"),
  早柚: _content.localized("guide.legacy.batch17Parties.b00053"),
  八重神子: _content.localized("guide.legacy.batch17Parties.b00054"),
  ガイア: _content.localized("guide.legacy.batch17Parties.b00055"),
  放浪者: _content.localized("guide.legacy.batch17Parties.b00056"),
  夢見月瑞希: _content.localized("guide.legacy.batch17Parties.b00057"),
  オロルン: _content.localized("guide.legacy.batch17Parties.b00058"),
  藍硯: _content.localized("guide.legacy.batch17Parties.b00059"),
  アルレッキーノ: _content.localized("guide.legacy.batch17Parties.b00060"),
  ヌヴィレット: _content.localized("guide.legacy.batch17Parties.b00061"),
  旅人: _content.localized("guide.legacy.batch17Parties.b00062"),
  ムアラニ: _content.localized("guide.legacy.batch17Parties.b00063"),
  シグウィン: _content.localized("guide.legacy.batch17Parties.b00064"),
  綺良々: _content.localized("guide.legacy.batch17Parties.b00065"),
};

const ROLES: Record<string, LocalizedText> = {
  レザー: _content.localized("guide.legacy.batch17Parties.b00066"),
  ロサリア: _content.localized("guide.legacy.batch17Parties.b00067"),
  雲菫: _content.localized("guide.legacy.batch17Parties.b00068"),
  煙緋: _content.localized("guide.legacy.batch17Parties.b00069"),
  嘉明: _content.localized("guide.legacy.batch17Parties.b00070"),
  甘雨: _content.localized("guide.legacy.batch17Parties.b00071"),
  閑雲: _content.localized("guide.legacy.batch17Parties.b00072"),
  凝光: _content.localized("guide.legacy.batch17Parties.b00073"),
  九条裟羅: _content.localized("guide.legacy.batch17Parties.b00074"),
  荒瀧一斗: _content.localized("guide.legacy.batch17Parties.b00075"),
  刻晴: _content.localized("guide.legacy.batch17Parties.b00076"),
  珊瑚宮心海: _content.localized("guide.legacy.batch17Parties.b00077"),
  鹿野院平蔵: _content.localized("guide.legacy.batch17Parties.b00078"),
  七七: _content.localized("guide.legacy.batch17Parties.b00079"),
  重雲: _content.localized("guide.legacy.batch17Parties.b00080"),
  申鶴: _content.localized("guide.legacy.batch17Parties.b00081"),
  神里綾華: _content.localized("guide.legacy.batch17Parties.b00082"),
  神里綾人: _content.localized("guide.legacy.batch17Parties.b00083"),
  辛炎: _content.localized("guide.legacy.batch17Parties.b00084"),
  千織: _content.localized("guide.legacy.batch17Parties.b00085"),
  早柚: _content.localized("guide.legacy.batch17Parties.b00086"),
  放浪者: _content.localized("guide.legacy.batch17Parties.b00087"),
  北斗: _content.localized("guide.legacy.batch17Parties.b00088"),
  夢見月瑞希: _content.localized("guide.legacy.batch17Parties.b00089"),
  藍硯: _content.localized("guide.legacy.batch17Parties.b00090"),
  旅人: _content.localized("guide.legacy.batch17Parties.b00091"),
  綺良々: _content.localized("guide.legacy.batch17Parties.b00092"),
  魈: _content.localized("guide.legacy.batch17Parties.b00093"),
};

const FOCUS: Record<string, [LocalizedText, LocalizedText]> = {
  レザー: [
    _content.localized("guide.legacy.batch17Parties.b00094"),
    _content.localized("guide.legacy.batch17Parties.b00095"),
  ],
  ロサリア: [
    _content.localized("guide.legacy.batch17Parties.b00096"),
    _content.localized("guide.legacy.batch17Parties.b00097"),
  ],
  雲菫: [
    _content.localized("guide.legacy.batch17Parties.b00098"),
    _content.localized("guide.legacy.batch17Parties.b00099"),
  ],
  煙緋: [
    _content.localized("guide.legacy.batch17Parties.b00100"),
    _content.localized("guide.legacy.batch17Parties.b00101"),
  ],
  嘉明: [
    _content.localized("guide.legacy.batch17Parties.b00102"),
    _content.localized("guide.legacy.batch17Parties.b00103"),
  ],
  甘雨: [
    _content.localized("guide.legacy.batch17Parties.b00104"),
    _content.localized("guide.legacy.batch17Parties.b00105"),
  ],
  閑雲: [
    _content.localized("guide.legacy.batch17Parties.b00106"),
    _content.localized("guide.legacy.batch17Parties.b00107"),
  ],
  凝光: [
    _content.localized("guide.legacy.batch17Parties.b00108"),
    _content.localized("guide.legacy.batch17Parties.b00109"),
  ],
  九条裟羅: [
    _content.localized("guide.legacy.batch17Parties.b00110"),
    _content.localized("guide.legacy.batch17Parties.b00111"),
  ],
  荒瀧一斗: [
    _content.localized("guide.legacy.batch17Parties.b00112"),
    _content.localized("guide.legacy.batch17Parties.b00113"),
  ],
  刻晴: [
    _content.localized("guide.legacy.batch17Parties.b00114"),
    _content.localized("guide.legacy.batch17Parties.b00115"),
  ],
  珊瑚宮心海: [
    _content.localized("guide.legacy.batch17Parties.b00116"),
    _content.localized("guide.legacy.batch17Parties.b00117"),
  ],
  鹿野院平蔵: [
    _content.localized("guide.legacy.batch17Parties.b00118"),
    _content.localized("guide.legacy.batch17Parties.b00119"),
  ],
  七七: [
    _content.localized("guide.legacy.batch17Parties.b00120"),
    _content.localized("guide.legacy.batch17Parties.b00121"),
  ],
  重雲: [
    _content.localized("guide.legacy.batch17Parties.b00122"),
    _content.localized("guide.legacy.batch17Parties.b00123"),
  ],
  申鶴: [
    _content.localized("guide.legacy.batch17Parties.b00124"),
    _content.localized("guide.legacy.batch17Parties.b00125"),
  ],
  神里綾華: [
    _content.localized("guide.legacy.batch17Parties.b00126"),
    _content.localized("guide.legacy.batch17Parties.b00127"),
  ],
  神里綾人: [
    _content.localized("guide.legacy.batch17Parties.b00128"),
    _content.localized("guide.legacy.batch17Parties.b00129"),
  ],
  辛炎: [
    _content.localized("guide.legacy.batch17Parties.b00130"),
    _content.localized("guide.legacy.batch17Parties.b00131"),
  ],
  千織: [
    _content.localized("guide.legacy.batch17Parties.b00132"),
    _content.localized("guide.legacy.batch17Parties.b00133"),
  ],
  早柚: [
    _content.localized("guide.legacy.batch17Parties.b00134"),
    _content.localized("guide.legacy.batch17Parties.b00135"),
  ],
  放浪者: [
    _content.localized("guide.legacy.batch17Parties.b00136"),
    _content.localized("guide.legacy.batch17Parties.b00137"),
  ],
  北斗: [
    _content.localized("guide.legacy.batch17Parties.b00138"),
    _content.localized("guide.legacy.batch17Parties.b00139"),
  ],
  夢見月瑞希: [
    _content.localized("guide.legacy.batch17Parties.b00140"),
    _content.localized("guide.legacy.batch17Parties.b00141"),
  ],
  藍硯: [
    _content.localized("guide.legacy.batch17Parties.b00142"),
    _content.localized("guide.legacy.batch17Parties.b00143"),
  ],
  旅人: [
    _content.localized("guide.legacy.batch17Parties.b00144"),
    _content.localized("guide.legacy.batch17Parties.b00145"),
  ],
  綺良々: [
    _content.localized("guide.legacy.batch17Parties.b00146"),
    _content.localized("guide.legacy.batch17Parties.b00147"),
  ],
  魈: [
    _content.localized("guide.legacy.batch17Parties.b00148"),
    _content.localized("guide.legacy.batch17Parties.b00149"),
  ],
};

const SUPPORT_ROLE = _content.localized("guide.legacy.batch17Parties.b00150");

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
    return _content.localized("guide.legacy.batch17Parties.b00151");
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
    return _content.localized("guide.legacy.batch17Parties.b00152");
  return _content.localized("guide.legacy.batch17Parties.b00153");
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
        ? _content.localized("guide.legacy.batch17Parties.b00154")
        : _content.localized("guide.legacy.batch17Parties.b00155"),
    members: names.map(name => member(name, selected)),
    synergy: [
      FOCUS[selected]?.[rank - 1] ??
        _content.localized("guide.legacy.batch17Parties.b00156"),
    ],
    targetChanges: [],
    targetSummary: _content.localized("guide.legacy.batch17Parties.b00157"),
    gameVersion: "7.0",
    dataAsOf: PARTY_PAGE_DATA_AS_OF[spec.page] ?? "2026-08-13",
    updatedAt: BATCH17_DATE,
    sourceLabel: _content.localized("guide.legacy.batch17Parties.b00158"),
    sourceUrl: `https://game8.jp/genshin/${spec.page}`,
    communitySources: [
      {
        label: _content.localized("guide.legacy.batch17Parties.b00159"),
        url: "https://x.com/G8_Genshin",
        checkedAt: BATCH17_DATE,
        note: _content.localized("guide.legacy.batch17Parties.b00160"),
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
