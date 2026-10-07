import type { GuideUpdateEvent } from "../guideUpdateHistory";
import type { PartyGameId, PartyLinkBatch, PartyLinkRecord } from "./types";

/**
 * 参照の変更記録と、そこから作る更新履歴（§4.7）。
 * PARTY_LINK_RECORDS は追記専用。過去の行を書き換えない・消さない。参照を入れ替えるときは新しいバッチの行を足す。
 */
export const PARTY_LINK_BATCHES: Record<number, PartyLinkBatch> = {
  26: {
    batch: 26, date: "2026-10-07T21:45:00+09:00", updatedAt: "2026-10-07",
    sourceNote: "ホタルの推奨PTのみ2026-10-07に再確認",
    title: "ホタルの推奨PTを更新",
    summary: (name, record) => name + "の推奨PTを耐久あり・耐久なし・代替支援の" + record.added.length + "案へ更新しました。",
    changes: ["ダリア・帰忘の流離人を含む現行編成を登録", "耐久なし編成の使用条件を明記", "旧PT用の速度補正を新編成へ流用しない", "他キャラの表示PT・ビルド・装備・星魂・公開現在値は変更しない"],
    rationale: "Phase 55の例外として、古いホタルの推奨PTだけを更新するため。",
  },
  25: {
    batch:25, date:'2026-10-03T13:00:00+09:00', updatedAt:'2026-10-03',
    sourceNote:'推奨PTのみ個別ガイド本文を再確認し、出典ごとの構成差を区別して共有化',
    title:'第25バッチ：千冶・刃・姫子・旅立ち・不死途の編成を共有化',
    summary:(name,record)=>`${name}の推奨PTに共有編成を${record.added.length}案反映し、旧参照を${record.removed.length}案整理しました。`,
    changes:['旧3起点8案を共有7編成へ統合','参加者の参照と3枠制限による見送りを記録','出典の回復役・支援役の違いを明記','ビルド・装備・凸・公開現在値は変更しない'],
    rationale:'千冶・刃と不死途の同じ4名構成を統合し、関連キャラからも共有データを参照するため。',
  },
  24: {
    batch: 24, date: "2026-10-03T12:00:00+09:00", updatedAt: "2026-10-03",
    sourceNote: "推奨PTのみGameWith・Game8の個別編成本文を再照合して共有化",
    title: "第24バッチ：パール・夏アベンチュリンの編成を共有化",
    summary: (name, record) => `${name}の推奨PTに共有編成を${record.added.length}案反映し、旧参照を${record.removed.length}案整理しました。`,
    changes: ["旧3起点7案を共有4編成へ整理", "緋英の同構成を統合し、再確認できない旧2案を除外", "関連キャラの参照・見送りと三言語の役割・条件を記録", "ビルド・装備・凸・公開現在値は変更しない"],
    rationale: "同じ編成の重複登録を解消し、参加する既存キャラ側からも同じ共有データを参照するため。",
  },
  23: {
    batch: 23,
    date: "2026-10-01T19:23:00+09:00",
    updatedAt: "2026-10-01",
    sourceNote: "推奨PTのみGame8の2026-09-29更新の個別編成ガイドで更新",
    title: "第23バッチ追補：新キャラ入りの推奨PTを登録",
    summary: (name, record) => `${name}側へ新キャラ入りの編成を${record.added.length}案反映しました。`,
    changes: ["本人を含む4名編成を追加", "役割・条件・三言語・出典を維持", "ビルドの基準日・固定目標・命ノ星座は変更せず、PT更新だけを記録"],
    rationale: "新キャラの編成に参加する既存キャラからも同じ構成を選べるようにするため。",
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
