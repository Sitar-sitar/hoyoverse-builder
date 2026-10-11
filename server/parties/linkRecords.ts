import { createLegacyTexts } from "../content/legacyTexts";
import { sources as _sources } from "../../content/ja/guides/parties_linkRecords";
import { records as _en } from "../../content/translations/en/parties_linkRecords";
import { records as _zh } from "../../content/translations/zh-CN/parties_linkRecords";
const _content = createLegacyTexts(_sources, _en, _zh);
import type { GuideUpdateEvent } from "../guideUpdateHistory";
import type { PartyGameId, PartyLinkBatch, PartyLinkRecord } from "./types";

/**
 * 参照の変更記録と、そこから作る更新履歴（§4.7）。
 * PARTY_LINK_RECORDS は追記専用。過去の行を書き換えない・消さない。参照を入れ替えるときは新しいバッチの行を足す。
 */
export const PARTY_LINK_BATCHES: Record<number, PartyLinkBatch> = {
  27: {batch:27,date:"2026-10-09T21:44:00+09:00",updatedAt:"2026-10-09",sourceNote:_content.ja("guide.legacy.parties_linkRecords.b00001"),title:_content.ja("guide.legacy.parties_linkRecords.b00002"),summary:(name,record)=>_content.ja("guide.legacy.parties_linkRecords.b00003", {v0: name, v1: record.added.length}),changes:[_content.ja("guide.legacy.parties_linkRecords.b00004"), _content.ja("guide.legacy.parties_linkRecords.b00005"), _content.ja("guide.legacy.parties_linkRecords.b00006"), _content.ja("guide.legacy.parties_linkRecords.b00007")],rationale:_content.ja("guide.legacy.parties_linkRecords.b00008")},
  26: {
    batch: 26, date: "2026-10-07T21:45:00+09:00", updatedAt: "2026-10-07",
    sourceNote: _content.ja("guide.legacy.parties_linkRecords.b00009"),
    title: _content.ja("guide.legacy.parties_linkRecords.b00010"),
    summary: (name, record) => _content.ja("guide.legacy.parties_linkRecords.b00011", {v0: name, v1: record.added.length}),
    changes: [_content.ja("guide.legacy.parties_linkRecords.b00012"), _content.ja("guide.legacy.parties_linkRecords.b00013"), _content.ja("guide.legacy.parties_linkRecords.b00014"), _content.ja("guide.legacy.parties_linkRecords.b00015")],
    rationale: _content.ja("guide.legacy.parties_linkRecords.b00016"),
  },
  25: {
    batch:25, date:'2026-10-03T13:00:00+09:00', updatedAt:'2026-10-03',
    sourceNote:_content.ja("guide.legacy.parties_linkRecords.b00017"),
    title:_content.ja("guide.legacy.parties_linkRecords.b00018"),
    summary:(name,record)=>_content.ja("guide.legacy.parties_linkRecords.b00019", {v0: name, v1: record.added.length, v2: record.removed.length}),
    changes:[_content.ja("guide.legacy.parties_linkRecords.b00020"),_content.ja("guide.legacy.parties_linkRecords.b00021"),_content.ja("guide.legacy.parties_linkRecords.b00022"),_content.ja("guide.legacy.parties_linkRecords.b00023")],
    rationale:_content.ja("guide.legacy.parties_linkRecords.b00024"),
  },
  24: {
    batch: 24, date: "2026-10-03T12:00:00+09:00", updatedAt: "2026-10-03",
    sourceNote: _content.ja("guide.legacy.parties_linkRecords.b00025"),
    title: _content.ja("guide.legacy.parties_linkRecords.b00026"),
    summary: (name, record) => _content.ja("guide.legacy.parties_linkRecords.b00027", {v0: name, v1: record.added.length, v2: record.removed.length}),
    changes: [_content.ja("guide.legacy.parties_linkRecords.b00028"), _content.ja("guide.legacy.parties_linkRecords.b00029"), _content.ja("guide.legacy.parties_linkRecords.b00030"), _content.ja("guide.legacy.parties_linkRecords.b00031")],
    rationale: _content.ja("guide.legacy.parties_linkRecords.b00032"),
  },
  23: {
    batch: 23,
    date: "2026-10-01T19:23:00+09:00",
    updatedAt: "2026-10-01",
    sourceNote: _content.ja("guide.legacy.parties_linkRecords.b00033"),
    title: _content.ja("guide.legacy.parties_linkRecords.b00034"),
    summary: (name, record) => _content.ja("guide.legacy.parties_linkRecords.b00035", {v0: name, v1: record.added.length}),
    changes: [_content.ja("guide.legacy.parties_linkRecords.b00036"), _content.ja("guide.legacy.parties_linkRecords.b00037"), _content.ja("guide.legacy.parties_linkRecords.b00038")],
    rationale: _content.ja("guide.legacy.parties_linkRecords.b00039"),
  },
};

export const PARTY_LINK_RECORDS: readonly PartyLinkRecord[] = [
  { batch: 23, game: "genshin", owner: "ファルザン",
    added: ["curated-genshin-ヴェスナ-1", "curated-genshin-ヴェスナ-2"],
    removed: ["curated-genshin-ファルザン-2", "curated-genshin-ファルザン-3"] },
  { batch: 23, game: "genshin", owner: "ディオナ",
    added: ["curated-genshin-ヴェスナ-2"], removed: ["curated-genshin-ディオナ-3"] },
  { batch: 23, game: "genshin", owner: "スカーク",
    added: ["curated-genshin-ヴォジャニーツァ-2"], removed: ["curated-genshin-スカーク-3"] },
  { batch: 23, game: "genshin", owner: "フリーナ",
    added: ["curated-genshin-ヴォジャニーツァ-2"], removed: ["curated-genshin-フリーナ-3"] },
  { batch: 23, game: "genshin", owner: "エスコフィエ",
    added: ["curated-genshin-ヴォジャニーツァ-2"], removed: ["curated-genshin-エスコフィエ-3"] },
  // 第24バッチ。過去の第23バッチの記録は変更しない。
  {"batch":24,"game":"hsr","owner":"パール","added":["team-hsr-パール-b24-1","team-hsr-パール-b24-2"],"removed":["curated-hsr-パール-1","curated-hsr-パール-2"]},
  {"batch":24,"game":"hsr","owner":"アベンチュリン・波と戯れる夏","added":["team-hsr-アベンチュリン・波と戯れる夏-b24-1","team-hsr-アベンチュリン・波と戯れる夏-b24-2"],"removed":["curated-hsr-アベンチュリン・波と戯れる夏-1","curated-hsr-アベンチュリン・波と戯れる夏-2"]},
  {"batch":24,"game":"hsr","owner":"緋英","added":["team-hsr-パール-b24-2"],"removed":["batch15-hsr-緋英-1","batch15-hsr-緋英-2","batch15-hsr-緋英-3"]},
  {"batch":24,"game":"hsr","owner":"火花","added":["team-hsr-パール-b24-1"],"removed":[]},
  {"batch":24,"game":"hsr","owner":"爻光","added":["team-hsr-パール-b24-2","team-hsr-パール-b24-1"],"removed":["curated-hsr-爻光-1","curated-hsr-爻光-2"]},
  {"batch":24,"game":"hsr","owner":"不死途","added":["team-hsr-アベンチュリン・波と戯れる夏-b24-1"],"removed":[]},
  {"batch":24,"game":"hsr","owner":"千冶・刃","added":["team-hsr-アベンチュリン・波と戯れる夏-b24-1"],"removed":["curated-hsr-千冶・刃-3"]},
  {"batch":24,"game":"hsr","owner":"ヒアンシー","added":["team-hsr-アベンチュリン・波と戯れる夏-b24-1"],"removed":["curated-hsr-ヒアンシー-3"]},
  {"batch":24,"game":"hsr","owner":"ロビン・夏空の歌","added":["team-hsr-アベンチュリン・波と戯れる夏-b24-2"],"removed":["curated-hsr-ロビン・夏空の歌-3"]},
  { batch: 26, game: "hsr", owner: "ホタル", added: ["team-hsr-ホタル-b26-1","team-hsr-ホタル-b26-2","team-hsr-ホタル-b26-3"], removed: ["firefly-superbreak", "firefly-fugue", "firefly-accessible"] },
  // 第25バッチ。過去の記録は追記専用として保持。
  {"batch":25,"game":"hsr","owner":"千冶・刃","added":["team-hsr-千冶・刃-b25-1","team-hsr-千冶・刃-b25-2"],"removed":["curated-hsr-千冶・刃-1","curated-hsr-千冶・刃-2"]},
  {"batch":25,"game":"hsr","owner":"姫子・旅立ち","added":["team-hsr-姫子・旅立ち-b25-1","team-hsr-姫子・旅立ち-b25-2","team-hsr-姫子・旅立ち-b25-3"],"removed":["curated-hsr-姫子・旅立ち-1","curated-hsr-姫子・旅立ち-2","curated-hsr-姫子・旅立ち-3"]},
  {"batch":25,"game":"hsr","owner":"不死途","added":["team-hsr-千冶・刃-b25-1","team-hsr-不死途-b25-1"],"removed":["curated-hsr-不死途-1","curated-hsr-不死途-2"]},
  {"batch":25,"game":"hsr","owner":"トリビー","added":["team-hsr-千冶・刃-b25-1","team-hsr-不死途-b25-1"],"removed":["curated-hsr-トリビー-2","curated-hsr-トリビー-3"]},
  {"batch":25,"game":"hsr","owner":"黄泉","added":["team-hsr-千冶・刃-b25-2"],"removed":["curated-hsr-黄泉-2"]},
  {"batch":25,"game":"hsr","owner":"サフェル","added":["team-hsr-千冶・刃-b25-2"],"removed":["curated-hsr-サフェル-2"]},
  {"batch":25,"game":"hsr","owner":"ヴェルト","added":["team-hsr-千冶・刃-b25-3","team-hsr-姫子・旅立ち-b25-1"],"removed":["curated-hsr-ヴェルト-2","curated-hsr-ヴェルト-3"]},
  {"batch":25,"game":"hsr","owner":"フォフォ","added":["team-hsr-千冶・刃-b25-3","team-hsr-姫子・旅立ち-b25-1"],"removed":[]},
  {"batch":25,"game":"hsr","owner":"ロビン・夏空の歌","added":["team-hsr-姫子・旅立ち-b25-1"],"removed":["curated-hsr-ロビン・夏空の歌-2"]},
  {"batch":25,"game":"hsr","owner":"サンデー","added":["team-hsr-姫子・旅立ち-b25-2","team-hsr-不死途-b25-1"],"removed":["curated-hsr-サンデー-2","curated-hsr-サンデー-3"]},
  {"batch":25,"game":"hsr","owner":"丹恒・騰荒","added":["team-hsr-姫子・旅立ち-b25-2","team-hsr-不死途-b25-1"],"removed":["curated-hsr-丹恒・騰荒-2","curated-hsr-丹恒・騰荒-3"]},
  {"batch":25,"game":"hsr","owner":"ルアン・メェイ","added":["team-hsr-姫子・旅立ち-b25-3"],"removed":["curated-hsr-ルアン・メェイ-3"]},
  // 第27バッチ。既存記録を保持して末尾へ追記。
  {"batch":27,"game":"hsr","owner":"セイバー","added":["team-hsr-ロビン・夏空の歌-b27-2"],"removed":["curated-hsr-セイバー-3"]},
  {"batch":27,"game":"hsr","owner":"ギルガメッシュ","added":["team-hsr-ロビン・夏空の歌-b27-2"],"removed":["curated-hsr-ギルガメッシュ-3"]},
  {"batch":27,"game":"hsr","owner":"アグライア","added":["team-hsr-ロビン・夏空の歌-b27-3"],"removed":["curated-hsr-アグライア-3"]},
  {"batch":27,"game":"zzz","owner":"クレタ","added":["team-zzz-クラレッタ-b27-2"],"removed":["curated-zzz-クレタ-3"]},
  {"batch":27,"game":"hsr","owner":"ロビン・夏空の歌","added":["team-hsr-ロビン・夏空の歌-b27-1","team-hsr-ロビン・夏空の歌-b27-2","team-hsr-ロビン・夏空の歌-b27-3"],"removed":["curated-hsr-ロビン・夏空の歌-1","team-hsr-姫子・旅立ち-b25-1","team-hsr-アベンチュリン・波と戯れる夏-b24-2"]},
  {"batch":27,"game":"zzz","owner":"クラレッタ","added":["team-zzz-クラレッタ-b27-1","team-zzz-クラレッタ-b27-2","team-zzz-クラレッタ-b27-3"],"removed":["curated-zzz-クラレッタ-1","curated-zzz-クラレッタ-2","curated-zzz-クラレッタ-3"]},
];

export type LinkRecordEntry = { def: PartyLinkBatch; record: PartyLinkRecord };

/** そのキャラの変更記録。対応するバッチ定義の date の新しい順（同時刻は batch の大きい順）。定義の無い記録は読み飛ばす。 */
export function linkRecordsFor(
  game: PartyGameId,
  name: string,
  records: readonly PartyLinkRecord[] = PARTY_LINK_RECORDS,
  batches: Record<number, PartyLinkBatch> = PARTY_LINK_BATCHES,
): LinkRecordEntry[] {
  return records
    .filter((record) => record.game === game && record.owner === name && batches[record.batch])
    .map((record) => ({ def: batches[record.batch]!, record }))
    .sort((a, b) => eventTime(b.def.date) - eventTime(a.def.date) || b.record.batch - a.record.batch);
}

/** 日付だけの値は +09:00 の0時とみなす。 */
export function eventTime(date: string): number {
  return new Date(date.length === 10 ? `${date}T00:00:00+09:00` : date).getTime();
}

/** PT 連動イベント。キーの並びは現行の追補イベントと同じ。 */
export function linkEventFor(game: PartyGameId, name: string, { def, record }: LinkRecordEntry): GuideUpdateEvent {
  return {
    date: def.date, scope: "character", games: [game],
    title: def.title, summary: def.summary(name, record), changes: def.changes, rationale: def.rationale,
  };
}

/**
 * 既存イベント列 base の相対順を保ったまま、PT 連動イベント（新しい順）を自分より古い最初の既存イベントの直前へ差し込む。
 * 古いものが無ければ末尾。同時刻は PT 連動イベントを前にする。既存列が日時順でないキャラもいるため全体ソートはしない。
 */
export function mergeLinkEvents<T extends { date: string }>(base: readonly T[], links: readonly T[]): T[] {
  const result = [...base];
  let from = 0;
  for (const link of links) {
    const at = result.findIndex((entry, index) => index >= from && eventTime(entry.date) <= eventTime(link.date));
    const position = at < 0 ? result.length : at;
    result.splice(position, 0, link);
    from = position + 1;
  }
  return result;
}

/** 履歴の updatedAt。ビルド側と PT 側の新しい方（YYYY-MM-DD の文字列比較）。 */
export function historyUpdatedAt(buildUpdatedAt: string, links: readonly LinkRecordEntry[]): string {
  return links.reduce((latest, { def }) => (def.updatedAt > latest ? def.updatedAt : latest), buildUpdatedAt);
}
