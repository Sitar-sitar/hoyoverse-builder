import { createLegacyTexts } from "./content/legacyTexts";
import { sources as _sources } from "../content/ja/guides/guideUpdateHistory";
import { records as _en } from "../content/translations/en/guideUpdateHistory";
import { records as _zh } from "../content/translations/zh-CN/guideUpdateHistory";
const _content = createLegacyTexts(_sources, _en, _zh);
import { batchIdFor } from "./characterBatches";
import { CHARACTER_GUIDE_CATALOG, type CatalogGameId } from "./characterGuideCatalog";
import { CHARACTER_GUIDE_METADATA } from "./characterGuideMetadata";
import { characterUpdateLedger } from "./characterUpdateLedger";
import { historyUpdatedAt, linkEventFor, linkRecordsFor, mergeLinkEvents } from "./parties/linkRecords";

export type GuideUpdateEvent = {
  date: string;
  scope: "site" | "character";
  title: string;
  summary: string;
  changes: string[];
  rationale: string;
  games: CatalogGameId[];
};

const CURRENT_BASELINE = "2026-08-18";

const SITE_EVENTS: GuideUpdateEvent[] = [
  {
    date: "2026-10-07T21:45:00+09:00", scope: "site", games: ["hsr"],
    title: _content.ja("guide.legacy.guideUpdateHistory.b00001"),
    summary: _content.ja("guide.legacy.guideUpdateHistory.b00002"),
    changes: [_content.ja("guide.legacy.guideUpdateHistory.b00003"), _content.ja("guide.legacy.guideUpdateHistory.b00004"), _content.ja("guide.legacy.guideUpdateHistory.b00005")],
    rationale: _content.ja("guide.legacy.guideUpdateHistory.b00006"),
  },
  {
    date: "2026-10-01T19:23:00+09:00", scope: "site", games: ["genshin"],
    title: _content.ja("guide.legacy.guideUpdateHistory.b00007"),
    summary: _content.ja("guide.legacy.guideUpdateHistory.b00008"),
    changes: [_content.ja("guide.legacy.guideUpdateHistory.b00009"), _content.ja("guide.legacy.guideUpdateHistory.b00010"), _content.ja("guide.legacy.guideUpdateHistory.b00011")],
    rationale: _content.ja("guide.legacy.guideUpdateHistory.b00012"),
  },
  {
    date: "2026-10-01T18:00:00+09:00", scope: "site", games: ["genshin"],
    title: _content.ja("guide.legacy.guideUpdateHistory.b00013"),
    summary: _content.ja("guide.legacy.guideUpdateHistory.b00014"),
    changes: [_content.ja("guide.legacy.guideUpdateHistory.b00015"), _content.ja("guide.legacy.guideUpdateHistory.b00016"), _content.ja("guide.legacy.guideUpdateHistory.b00017"), _content.ja("guide.legacy.guideUpdateHistory.b00018")],
    rationale: _content.ja("guide.legacy.guideUpdateHistory.b00019"),
  },
  {
    date: "2026-08-18T02:50:00+09:00",
    scope: "site",
    title: _content.ja("guide.legacy.guideUpdateHistory.b00020"),
    summary: _content.ja("guide.legacy.guideUpdateHistory.b00021"),
    changes: [_content.ja("guide.legacy.guideUpdateHistory.b00022"), _content.ja("guide.legacy.guideUpdateHistory.b00023")],
    rationale: _content.ja("guide.legacy.guideUpdateHistory.b00024"),
    games: ["hsr", "genshin", "zzz"],
  },
  {
    date: "2026-08-18T04:10:00+09:00",
    scope: "site",
    title: _content.ja("guide.legacy.guideUpdateHistory.b00025"),
    summary: _content.ja("guide.legacy.guideUpdateHistory.b00026"),
    changes: [_content.ja("guide.legacy.guideUpdateHistory.b00027"), _content.ja("guide.legacy.guideUpdateHistory.b00028")],
    rationale: _content.ja("guide.legacy.guideUpdateHistory.b00029"),
    games: ["zzz"],
  },
  {
    date: "2026-08-18T06:20:00+09:00",
    scope: "site",
    title: _content.ja("guide.legacy.guideUpdateHistory.b00030"),
    summary: _content.ja("guide.legacy.guideUpdateHistory.b00031"),
    changes: [_content.ja("guide.legacy.guideUpdateHistory.b00032"), _content.ja("guide.legacy.guideUpdateHistory.b00033")],
    rationale: _content.ja("guide.legacy.guideUpdateHistory.b00034"),
    games: ["hsr", "genshin", "zzz"],
  },
  {
    date: "2026-08-18T08:10:00+09:00",
    scope: "site",
    title: _content.ja("guide.legacy.guideUpdateHistory.b00035"),
    summary: _content.ja("guide.legacy.guideUpdateHistory.b00036"),
    changes: [_content.ja("guide.legacy.guideUpdateHistory.b00037"), _content.ja("guide.legacy.guideUpdateHistory.b00038")],
    rationale: _content.ja("guide.legacy.guideUpdateHistory.b00039"),
    games: ["hsr", "genshin", "zzz"],
  },
  {
    date: "2026-08-18T08:20:00+09:00",
    scope: "site",
    title: _content.ja("guide.legacy.guideUpdateHistory.b00040"),
    summary: _content.ja("guide.legacy.guideUpdateHistory.b00041"),
    changes: [_content.ja("guide.legacy.guideUpdateHistory.b00042"), _content.ja("guide.legacy.guideUpdateHistory.b00043")],
    rationale: _content.ja("guide.legacy.guideUpdateHistory.b00044"),
    games: ["hsr", "genshin", "zzz"],
  },
  {
    date: "2026-09-05T16:55:00+09:00",
    scope: "site",
    title: _content.ja("guide.legacy.guideUpdateHistory.b00045"),
    summary: _content.ja("guide.legacy.guideUpdateHistory.b00046"),
    changes: [_content.ja("guide.legacy.guideUpdateHistory.b00047"), _content.ja("guide.legacy.guideUpdateHistory.b00048")],
    rationale: _content.ja("guide.legacy.guideUpdateHistory.b00049"),
    games: ["hsr", "genshin", "zzz"],
  },
  {
    date: "2026-09-07T12:00:00+09:00",
    scope: "site",
    title: _content.ja("guide.legacy.guideUpdateHistory.b00050"),
    summary: _content.ja("guide.legacy.guideUpdateHistory.b00051"),
    changes: [_content.ja("guide.legacy.guideUpdateHistory.b00052"), _content.ja("guide.legacy.guideUpdateHistory.b00053"), _content.ja("guide.legacy.guideUpdateHistory.b00054")],
    rationale: _content.ja("guide.legacy.guideUpdateHistory.b00055"),
    games: ["hsr", "genshin"],
  },
  {
    date: "2026-09-08T02:00:00+09:00",
    scope: "site",
    title: _content.ja("guide.legacy.guideUpdateHistory.b00056"),
    summary: _content.ja("guide.legacy.guideUpdateHistory.b00057"),
    changes: [_content.ja("guide.legacy.guideUpdateHistory.b00058"), _content.ja("guide.legacy.guideUpdateHistory.b00059"), _content.ja("guide.legacy.guideUpdateHistory.b00060")],
    rationale: _content.ja("guide.legacy.guideUpdateHistory.b00061"),
    games: ["genshin"],
  },
  {
    date: "2026-09-11T12:00:00+09:00",
    scope: "site",
    title: _content.ja("guide.legacy.guideUpdateHistory.b00062"),
    summary: _content.ja("guide.legacy.guideUpdateHistory.b00063"),
    changes: [_content.ja("guide.legacy.guideUpdateHistory.b00064"), _content.ja("guide.legacy.guideUpdateHistory.b00065"), _content.ja("guide.legacy.guideUpdateHistory.b00066"), _content.ja("guide.legacy.guideUpdateHistory.b00067")],
    rationale: _content.ja("guide.legacy.guideUpdateHistory.b00068"),
    games: ["hsr", "zzz"],
  },
  {
    date: "2026-09-12T21:00:00+09:00",
    scope: "site",
    title: _content.ja("guide.legacy.guideUpdateHistory.b00069"),
    summary: _content.ja("guide.legacy.guideUpdateHistory.b00070"),
    changes: [
      _content.ja("guide.legacy.guideUpdateHistory.b00071"),
      _content.ja("guide.legacy.guideUpdateHistory.b00072"),
      _content.ja("guide.legacy.guideUpdateHistory.b00073"),
    ],
    rationale: _content.ja("guide.legacy.guideUpdateHistory.b00074"),
    games: ["hsr"],
  },
  {
    date: "2026-09-13T12:00:00+09:00",
    scope: "site",
    title: _content.ja("guide.legacy.guideUpdateHistory.b00075"),
    summary: _content.ja("guide.legacy.guideUpdateHistory.b00076"),
    changes: [_content.ja("guide.legacy.guideUpdateHistory.b00077"), _content.ja("guide.legacy.guideUpdateHistory.b00078"), _content.ja("guide.legacy.guideUpdateHistory.b00079"), _content.ja("guide.legacy.guideUpdateHistory.b00080")],
    rationale: _content.ja("guide.legacy.guideUpdateHistory.b00081"),
    games: ["zzz"],
  },
  {
    date: "2026-09-24T12:00:00+09:00",
    scope: "site",
    title: _content.ja("guide.legacy.guideUpdateHistory.b00082"),
    summary: _content.ja("guide.legacy.guideUpdateHistory.b00083"),
    changes: [_content.ja("guide.legacy.guideUpdateHistory.b00084"), _content.ja("guide.legacy.guideUpdateHistory.b00085"), _content.ja("guide.legacy.guideUpdateHistory.b00086"), _content.ja("guide.legacy.guideUpdateHistory.b00087")],
    rationale: _content.ja("guide.legacy.guideUpdateHistory.b00088"),
    games: ["hsr", "zzz"],
  },
  {
    date: "2026-09-28T23:00:00+09:00",
    scope: "site",
    title: _content.ja("guide.legacy.guideUpdateHistory.b00089"),
    summary: _content.ja("guide.legacy.guideUpdateHistory.b00090"),
    changes: [_content.ja("guide.legacy.guideUpdateHistory.b00091"), _content.ja("guide.legacy.guideUpdateHistory.b00092"), _content.ja("guide.legacy.guideUpdateHistory.b00093")],
    rationale: _content.ja("guide.legacy.guideUpdateHistory.b00094"),
    games: ["hsr"],
  },
  {
    date: "2026-09-29T23:00:00+09:00",
    scope: "site",
    title: _content.ja("guide.legacy.guideUpdateHistory.b00095"),
    summary: _content.ja("guide.legacy.guideUpdateHistory.b00096"),
    changes: [_content.ja("guide.legacy.guideUpdateHistory.b00097"), _content.ja("guide.legacy.guideUpdateHistory.b00098"), _content.ja("guide.legacy.guideUpdateHistory.b00099")],
    rationale: _content.ja("guide.legacy.guideUpdateHistory.b00100"),
    games: ["genshin"],
  },
];

const CHARACTER_CHANGE_EVENTS: Partial<Record<CatalogGameId, Record<string, GuideUpdateEvent[]>>> = {
  zzz: {
    "ニコ": [{ date: "2026-09-24T12:00:00+09:00", scope: "character", title: _content.ja("guide.legacy.guideUpdateHistory.b00101"), summary: _content.ja("guide.legacy.guideUpdateHistory.b00102"), changes: [_content.ja("guide.legacy.guideUpdateHistory.b00103"), _content.ja("guide.legacy.guideUpdateHistory.b00104")], rationale: _content.ja("guide.legacy.guideUpdateHistory.b00105"), games: ["zzz"] }],
    "シーシィア": [{ date: "2026-09-24T12:00:00+09:00", scope: "character", title: _content.ja("guide.legacy.guideUpdateHistory.b00106"), summary: _content.ja("guide.legacy.guideUpdateHistory.b00107"), changes: [_content.ja("guide.legacy.guideUpdateHistory.b00108"), _content.ja("guide.legacy.guideUpdateHistory.b00109")], rationale: _content.ja("guide.legacy.guideUpdateHistory.b00110"), games: ["zzz"] }],
    "0号・アンビー": [{ date: "2026-08-18T06:20:00+09:00", scope: "character", title: _content.ja("guide.legacy.guideUpdateHistory.b00111"), summary: _content.ja("guide.legacy.guideUpdateHistory.b00112"), changes: [_content.ja("guide.legacy.guideUpdateHistory.b00113"), _content.ja("guide.legacy.guideUpdateHistory.b00114")], rationale: _content.ja("guide.legacy.guideUpdateHistory.b00115"), games: ["zzz"] }],
    "ビビアン": [{ date: "2026-08-18T06:20:00+09:00", scope: "character", title: _content.ja("guide.legacy.guideUpdateHistory.b00116"), summary: _content.ja("guide.legacy.guideUpdateHistory.b00117"), changes: [_content.ja("guide.legacy.guideUpdateHistory.b00118"), _content.ja("guide.legacy.guideUpdateHistory.b00119")], rationale: _content.ja("guide.legacy.guideUpdateHistory.b00120"), games: ["zzz"] }],
  },
  genshin: {
    "コロンビーナ": [{ date: "2026-09-29T23:00:00+09:00", scope: "character", title: _content.ja("guide.legacy.guideUpdateHistory.b00121"), summary: _content.ja("guide.legacy.guideUpdateHistory.b00122"), changes: [_content.ja("guide.legacy.guideUpdateHistory.b00123"), _content.ja("guide.legacy.guideUpdateHistory.b00124")], rationale: _content.ja("guide.legacy.guideUpdateHistory.b00125"), games: ["genshin"] }],
    "ナヒーダ": [{ date: "2026-08-18T06:20:00+09:00", scope: "character", title: _content.ja("guide.legacy.guideUpdateHistory.b00126"), summary: _content.ja("guide.legacy.guideUpdateHistory.b00127"), changes: [_content.ja("guide.legacy.guideUpdateHistory.b00128"), _content.ja("guide.legacy.guideUpdateHistory.b00129")], rationale: _content.ja("guide.legacy.guideUpdateHistory.b00130"), games: ["genshin"] }],
  },
  hsr: {
    "ジェイド": [{ date: "2026-09-11T12:00:00+09:00", scope: "character", title: _content.ja("guide.legacy.guideUpdateHistory.b00131"), summary: _content.ja("guide.legacy.guideUpdateHistory.b00132"), changes: [_content.ja("guide.legacy.guideUpdateHistory.b00133"), _content.ja("guide.legacy.guideUpdateHistory.b00134"), _content.ja("guide.legacy.guideUpdateHistory.b00135")], rationale: _content.ja("guide.legacy.guideUpdateHistory.b00136"), games: ["hsr"] }],
    "ジェパード": [{ date: "2026-09-11T12:00:00+09:00", scope: "character", title: _content.ja("guide.legacy.guideUpdateHistory.b00137"), summary: _content.ja("guide.legacy.guideUpdateHistory.b00138"), changes: [_content.ja("guide.legacy.guideUpdateHistory.b00139"), _content.ja("guide.legacy.guideUpdateHistory.b00140"), _content.ja("guide.legacy.guideUpdateHistory.b00141")], rationale: _content.ja("guide.legacy.guideUpdateHistory.b00142"), games: ["hsr"] }],
    "ホタル": [{ date: "2026-08-18T06:20:00+09:00", scope: "character", title: _content.ja("guide.legacy.guideUpdateHistory.b00143"), summary: _content.ja("guide.legacy.guideUpdateHistory.b00144"), changes: [_content.ja("guide.legacy.guideUpdateHistory.b00145"), _content.ja("guide.legacy.guideUpdateHistory.b00146")], rationale: _content.ja("guide.legacy.guideUpdateHistory.b00147"), games: ["hsr"] }],
  },
};

type BatchEventTemplate = { date: string; title: string; summary: (name: string) => string; changes: string[]; rationale: string };

/** バッチ別の個別更新イベント。第1〜17バッチ（第15バッチを含む）をここに持つ。 */
const BATCH_EVENT_TEMPLATES: Record<number, BatchEventTemplate> = {
  1: {
    date: "2026-08-25T12:35:00+09:00",
    title: _content.ja("guide.legacy.guideUpdateHistory.b00148"),
    summary: (name) => _content.ja("guide.legacy.guideUpdateHistory.b00149", {v0: name}),
    changes: [_content.ja("guide.legacy.guideUpdateHistory.b00150"), _content.ja("guide.legacy.guideUpdateHistory.b00151"), _content.ja("guide.legacy.guideUpdateHistory.b00152"), _content.ja("guide.legacy.guideUpdateHistory.b00153")],
    rationale: _content.ja("guide.legacy.guideUpdateHistory.b00154"),
  },
  2: {
    date: "2026-08-25T12:14:00+09:00",
    title: _content.ja("guide.legacy.guideUpdateHistory.b00155"),
    summary: (name) => _content.ja("guide.legacy.guideUpdateHistory.b00156", {v0: name}),
    changes: [_content.ja("guide.legacy.guideUpdateHistory.b00157"), _content.ja("guide.legacy.guideUpdateHistory.b00158"), _content.ja("guide.legacy.guideUpdateHistory.b00159"), _content.ja("guide.legacy.guideUpdateHistory.b00160")],
    rationale: _content.ja("guide.legacy.guideUpdateHistory.b00161"),
  },
  3: {
    date: "2026-08-26T12:00:00+09:00",
    title: _content.ja("guide.legacy.guideUpdateHistory.b00162"),
    summary: (name) => _content.ja("guide.legacy.guideUpdateHistory.b00163", {v0: name}),
    changes: [_content.ja("guide.legacy.guideUpdateHistory.b00164"), _content.ja("guide.legacy.guideUpdateHistory.b00165"), _content.ja("guide.legacy.guideUpdateHistory.b00166"), _content.ja("guide.legacy.guideUpdateHistory.b00167")],
    rationale: _content.ja("guide.legacy.guideUpdateHistory.b00168"),
  },
  4: {
    date: "2026-08-26T13:00:00+09:00",
    title: _content.ja("guide.legacy.guideUpdateHistory.b00169"),
    summary: (name) => _content.ja("guide.legacy.guideUpdateHistory.b00170", {v0: name}),
    changes: [_content.ja("guide.legacy.guideUpdateHistory.b00171"), _content.ja("guide.legacy.guideUpdateHistory.b00172"), _content.ja("guide.legacy.guideUpdateHistory.b00173"), _content.ja("guide.legacy.guideUpdateHistory.b00174")],
    rationale: _content.ja("guide.legacy.guideUpdateHistory.b00175"),
  },
  5: {
    date: "2026-08-26T14:00:00+09:00",
    title: _content.ja("guide.legacy.guideUpdateHistory.b00176"),
    summary: (name) => _content.ja("guide.legacy.guideUpdateHistory.b00177", {v0: name}),
    changes: [_content.ja("guide.legacy.guideUpdateHistory.b00178"), _content.ja("guide.legacy.guideUpdateHistory.b00179"), _content.ja("guide.legacy.guideUpdateHistory.b00180"), _content.ja("guide.legacy.guideUpdateHistory.b00181")],
    rationale: _content.ja("guide.legacy.guideUpdateHistory.b00182"),
  },
  6: {
    date: "2026-08-26T15:00:00+09:00",
    title: _content.ja("guide.legacy.guideUpdateHistory.b00183"),
    summary: (name) => _content.ja("guide.legacy.guideUpdateHistory.b00184", {v0: name}),
    changes: [_content.ja("guide.legacy.guideUpdateHistory.b00185"), _content.ja("guide.legacy.guideUpdateHistory.b00186"), _content.ja("guide.legacy.guideUpdateHistory.b00187"), _content.ja("guide.legacy.guideUpdateHistory.b00188"), _content.ja("guide.legacy.guideUpdateHistory.b00189")],
    rationale: _content.ja("guide.legacy.guideUpdateHistory.b00190"),
  },
  7: {
    date: "2026-08-26T16:00:00+09:00",
    title: _content.ja("guide.legacy.guideUpdateHistory.b00191"),
    summary: (name) => _content.ja("guide.legacy.guideUpdateHistory.b00192", {v0: name}),
    changes: [_content.ja("guide.legacy.guideUpdateHistory.b00193"), _content.ja("guide.legacy.guideUpdateHistory.b00194"), _content.ja("guide.legacy.guideUpdateHistory.b00195"), _content.ja("guide.legacy.guideUpdateHistory.b00196"), _content.ja("guide.legacy.guideUpdateHistory.b00197")],
    rationale: _content.ja("guide.legacy.guideUpdateHistory.b00198"),
  },
  8: {
    date: "2026-08-26T17:00:00+09:00",
    title: _content.ja("guide.legacy.guideUpdateHistory.b00199"),
    summary: (name) => _content.ja("guide.legacy.guideUpdateHistory.b00200", {v0: name}),
    changes: [_content.ja("guide.legacy.guideUpdateHistory.b00201"), _content.ja("guide.legacy.guideUpdateHistory.b00202"), _content.ja("guide.legacy.guideUpdateHistory.b00203"), _content.ja("guide.legacy.guideUpdateHistory.b00204"), _content.ja("guide.legacy.guideUpdateHistory.b00205")],
    rationale: _content.ja("guide.legacy.guideUpdateHistory.b00206"),
  },
  9: {
    date: "2026-08-26T18:00:00+09:00",
    title: _content.ja("guide.legacy.guideUpdateHistory.b00207"),
    summary: (name) => _content.ja("guide.legacy.guideUpdateHistory.b00208", {v0: name}),
    changes: [_content.ja("guide.legacy.guideUpdateHistory.b00209"), _content.ja("guide.legacy.guideUpdateHistory.b00210"), _content.ja("guide.legacy.guideUpdateHistory.b00211"), _content.ja("guide.legacy.guideUpdateHistory.b00212"), _content.ja("guide.legacy.guideUpdateHistory.b00213")],
    rationale: _content.ja("guide.legacy.guideUpdateHistory.b00214"),
  },
  10: {
    date: "2026-08-26T19:00:00+09:00",
    title: _content.ja("guide.legacy.guideUpdateHistory.b00215"),
    summary: (name) => _content.ja("guide.legacy.guideUpdateHistory.b00216", {v0: name}),
    changes: [_content.ja("guide.legacy.guideUpdateHistory.b00217"), _content.ja("guide.legacy.guideUpdateHistory.b00218"), _content.ja("guide.legacy.guideUpdateHistory.b00219"), _content.ja("guide.legacy.guideUpdateHistory.b00220"), _content.ja("guide.legacy.guideUpdateHistory.b00221")],
    rationale: _content.ja("guide.legacy.guideUpdateHistory.b00222"),
  },
  11: {
    date: "2026-08-27T01:15:00+09:00",
    title: _content.ja("guide.legacy.guideUpdateHistory.b00223"),
    summary: (name) => _content.ja("guide.legacy.guideUpdateHistory.b00224", {v0: name}),
    changes: [_content.ja("guide.legacy.guideUpdateHistory.b00225"), _content.ja("guide.legacy.guideUpdateHistory.b00226"), _content.ja("guide.legacy.guideUpdateHistory.b00227"), _content.ja("guide.legacy.guideUpdateHistory.b00228"), _content.ja("guide.legacy.guideUpdateHistory.b00229"), _content.ja("guide.legacy.guideUpdateHistory.b00230")],
    rationale: _content.ja("guide.legacy.guideUpdateHistory.b00231"),
  },
  12: {
    date: "2026-08-27T01:50:00+09:00",
    title: _content.ja("guide.legacy.guideUpdateHistory.b00232"),
    summary: (name) => _content.ja("guide.legacy.guideUpdateHistory.b00233", {v0: name}),
    changes: [_content.ja("guide.legacy.guideUpdateHistory.b00234"), _content.ja("guide.legacy.guideUpdateHistory.b00235"), _content.ja("guide.legacy.guideUpdateHistory.b00236"), _content.ja("guide.legacy.guideUpdateHistory.b00237"), _content.ja("guide.legacy.guideUpdateHistory.b00238"), _content.ja("guide.legacy.guideUpdateHistory.b00239")],
    rationale: _content.ja("guide.legacy.guideUpdateHistory.b00240"),
  },
  13: {
    date: "2026-08-27T02:30:00+09:00",
    title: _content.ja("guide.legacy.guideUpdateHistory.b00241"),
    summary: (name) => _content.ja("guide.legacy.guideUpdateHistory.b00242", {v0: name}),
    changes: [_content.ja("guide.legacy.guideUpdateHistory.b00243"), _content.ja("guide.legacy.guideUpdateHistory.b00244"), _content.ja("guide.legacy.guideUpdateHistory.b00245"), _content.ja("guide.legacy.guideUpdateHistory.b00246"), _content.ja("guide.legacy.guideUpdateHistory.b00247"), _content.ja("guide.legacy.guideUpdateHistory.b00248")],
    rationale: _content.ja("guide.legacy.guideUpdateHistory.b00249"),
  },
  14: {
    date: "2026-08-27T03:00:00+09:00",
    title: _content.ja("guide.legacy.guideUpdateHistory.b00250"),
    summary: (name) => _content.ja("guide.legacy.guideUpdateHistory.b00251", {v0: name}),
    changes: [_content.ja("guide.legacy.guideUpdateHistory.b00252"), _content.ja("guide.legacy.guideUpdateHistory.b00253"), _content.ja("guide.legacy.guideUpdateHistory.b00254"), _content.ja("guide.legacy.guideUpdateHistory.b00255"), _content.ja("guide.legacy.guideUpdateHistory.b00256"), _content.ja("guide.legacy.guideUpdateHistory.b00257")],
    rationale: _content.ja("guide.legacy.guideUpdateHistory.b00258"),
  },
  15: {
    date: "2026-09-05T16:55:00+09:00",
    title: _content.ja("guide.legacy.guideUpdateHistory.b00259"),
    summary: (name) => _content.ja("guide.legacy.guideUpdateHistory.b00260", {v0: name}),
    changes: [_content.ja("guide.legacy.guideUpdateHistory.b00261"), _content.ja("guide.legacy.guideUpdateHistory.b00262"), _content.ja("guide.legacy.guideUpdateHistory.b00263"), _content.ja("guide.legacy.guideUpdateHistory.b00264"), _content.ja("guide.legacy.guideUpdateHistory.b00265")],
    rationale: _content.ja("guide.legacy.guideUpdateHistory.b00266"),
  },
  16: {
    date: "2026-09-07T12:00:00+09:00",
    title: _content.ja("guide.legacy.guideUpdateHistory.b00267"),
    summary: (name) => _content.ja("guide.legacy.guideUpdateHistory.b00268", {v0: name}),
    changes: [_content.ja("guide.legacy.guideUpdateHistory.b00269"), _content.ja("guide.legacy.guideUpdateHistory.b00270"), _content.ja("guide.legacy.guideUpdateHistory.b00271"), _content.ja("guide.legacy.guideUpdateHistory.b00272"), _content.ja("guide.legacy.guideUpdateHistory.b00273"), _content.ja("guide.legacy.guideUpdateHistory.b00274")],
    rationale: _content.ja("guide.legacy.guideUpdateHistory.b00275"),
  },
  17: {
    date: "2026-09-08T02:00:00+09:00",
    title: _content.ja("guide.legacy.guideUpdateHistory.b00276"),
    summary: (name) => _content.ja("guide.legacy.guideUpdateHistory.b00277", {v0: name}),
    changes: [_content.ja("guide.legacy.guideUpdateHistory.b00278"), _content.ja("guide.legacy.guideUpdateHistory.b00279"), _content.ja("guide.legacy.guideUpdateHistory.b00280"), _content.ja("guide.legacy.guideUpdateHistory.b00281"), _content.ja("guide.legacy.guideUpdateHistory.b00282")],
    rationale: _content.ja("guide.legacy.guideUpdateHistory.b00283"),
  },
  18: {
    date: "2026-09-11T12:00:00+09:00",
    title: _content.ja("guide.legacy.guideUpdateHistory.b00284"),
    summary: (name) => _content.ja("guide.legacy.guideUpdateHistory.b00285", {v0: name}),
    changes: [_content.ja("guide.legacy.guideUpdateHistory.b00286"), _content.ja("guide.legacy.guideUpdateHistory.b00287"), _content.ja("guide.legacy.guideUpdateHistory.b00288"), _content.ja("guide.legacy.guideUpdateHistory.b00289"), _content.ja("guide.legacy.guideUpdateHistory.b00290")],
    rationale: _content.ja("guide.legacy.guideUpdateHistory.b00291"),
  },
  19: {
    date: "2026-09-13T12:00:00+09:00",
    title: _content.ja("guide.legacy.guideUpdateHistory.b00292"),
    summary: (name) => _content.ja("guide.legacy.guideUpdateHistory.b00293", {v0: name}),
    changes: [_content.ja("guide.legacy.guideUpdateHistory.b00294"), _content.ja("guide.legacy.guideUpdateHistory.b00295"), _content.ja("guide.legacy.guideUpdateHistory.b00296"), _content.ja("guide.legacy.guideUpdateHistory.b00297")],
    rationale: _content.ja("guide.legacy.guideUpdateHistory.b00298"),
  },
  20: {
    date: "2026-09-24T12:00:00+09:00",
    title: _content.ja("guide.legacy.guideUpdateHistory.b00299"),
    summary: (name) => _content.ja("guide.legacy.guideUpdateHistory.b00300", {v0: name}),
    changes: [_content.ja("guide.legacy.guideUpdateHistory.b00301"), _content.ja("guide.legacy.guideUpdateHistory.b00302"), _content.ja("guide.legacy.guideUpdateHistory.b00303"), _content.ja("guide.legacy.guideUpdateHistory.b00304"), _content.ja("guide.legacy.guideUpdateHistory.b00305")],
    rationale: _content.ja("guide.legacy.guideUpdateHistory.b00306"),
  },
  23: {
    date: "2026-10-01T18:00:00+09:00",
    title: _content.ja("guide.legacy.guideUpdateHistory.b00307"),
    summary: (name) => _content.ja("guide.legacy.guideUpdateHistory.b00308", {v0: name}),
    changes: [_content.ja("guide.legacy.guideUpdateHistory.b00309"), _content.ja("guide.legacy.guideUpdateHistory.b00310"), _content.ja("guide.legacy.guideUpdateHistory.b00311"), _content.ja("guide.legacy.guideUpdateHistory.b00312"), _content.ja("guide.legacy.guideUpdateHistory.b00313")],
    rationale: _content.ja("guide.legacy.guideUpdateHistory.b00314"),
  },
  21: {
    date: "2026-09-28T23:00:00+09:00",
    title: _content.ja("guide.legacy.guideUpdateHistory.b00315"),
    summary: (name) => _content.ja("guide.legacy.guideUpdateHistory.b00316", {v0: name}),
    changes: [_content.ja("guide.legacy.guideUpdateHistory.b00317"), _content.ja("guide.legacy.guideUpdateHistory.b00318"), _content.ja("guide.legacy.guideUpdateHistory.b00319"), _content.ja("guide.legacy.guideUpdateHistory.b00320"), _content.ja("guide.legacy.guideUpdateHistory.b00321")],
    rationale: _content.ja("guide.legacy.guideUpdateHistory.b00322"),
  },
};

function batchEventFor(game: CatalogGameId, name: string): GuideUpdateEvent | undefined {
  const id = batchIdFor(game, name);
  const template = id === null ? undefined : BATCH_EVENT_TEMPLATES[id];
  if (!template) return undefined;
  return { date: template.date, scope: "character", title: template.title, summary: template.summary(name), changes: template.changes, rationale: template.rationale, games: [game] };
}

function buildGuideUpdateHistory() {
  const games: CatalogGameId[] = ["hsr", "genshin", "zzz"];
  const characters = games.flatMap((game) => CHARACTER_GUIDE_CATALOG[game].map((name) => {
    const metadata = CHARACTER_GUIDE_METADATA[game][name];
    const batchEvent = batchEventFor(game, name);
    // PT 連動の履歴は追記専用の変更記録から作る（現在の参照からは作らない）。設計 §4.7
    const links = linkRecordsFor(game, name);
    const baseEvents: GuideUpdateEvent[] = [
      ...(CHARACTER_CHANGE_EVENTS[game]?.[name] ?? []),
      ...(batchEvent ? [batchEvent] : []),
      {
        date: metadata.updatedAt,
        scope: "character",
        title: _content.ja("guide.legacy.guideUpdateHistory.b00323"),
        summary: `採用プロファイル: ${metadata.profileId}。公開プロフィールで比較可能な戦闘外の目標値を設定しました。`,
        changes: [_content.ja("guide.legacy.guideUpdateHistory.b00324")],
        rationale: _content.ja("guide.legacy.guideUpdateHistory.b00325"),
        games: [game],
      },
    ];
    return {
      game,
      name,
      profileId: metadata.profileId,
      dataAsOf: metadata.dataAsOf,
      updatedAt: historyUpdatedAt(metadata.updatedAt, links),
      sourceLabel: links.length > 0 ? `${metadata.sourceLabel} / ${links.map(({ def }) => def.sourceNote).join(" / ")}` : metadata.sourceLabel,
      events: mergeLinkEvents(baseEvents, links.map((entry) => linkEventFor(game, name, entry))),
    };
  }));
  return { currentBaseline: CURRENT_BASELINE, siteEvents: SITE_EVENTS, characters, updateLedger: characterUpdateLedger() };
}

let cachedHistory: ReturnType<typeof buildGuideUpdateHistory> | undefined;

/**
 * 更新履歴は静的計算のため、プロセス内で1度だけ組み立てて共有する。
 * 呼び出し側は結果を読み取るだけで書き換えない（第15バッチの API 境界上書きは 2026-09-10 に撤去済み）。
 */
export function guideUpdateHistory() {
  return (cachedHistory ??= buildGuideUpdateHistory());
}
