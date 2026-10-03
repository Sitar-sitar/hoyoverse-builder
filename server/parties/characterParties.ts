import type { CharacterPartyEntry } from "./types";

/**
 * 各キャラの推奨PT参照（D1）と見送り記録（D6）。キーは `game:カタログ名`。
 * 書いていないキャラは自分起点の編成を保存順の先頭3件で既定参照する（D2）。
 * 初回登録時の採用参照は initialRefs.ts に固定する。
 * 以後の参照変更は自分起点を含め linkRecords.ts の PARTY_LINK_RECORDS に追記する。
 */
export const CHARACTER_PARTIES: Record<string, CharacterPartyEntry> = {
  // 第23バッチ追補（2026-10-01）。旧・第23バッチ専用の既存PT追補定数と専用ループの置き換え。表示IDは互換のため固定（D7）。
  "genshin:ファルザン": { refs: [
    { team: "curated-genshin-ファルザン-1" },
    { team: "curated-genshin-ヴェスナ-1", viewId: "curated-genshin-ファルザン-batch23-ヴェスナ-1" },
    { team: "curated-genshin-ヴェスナ-2", viewId: "curated-genshin-ファルザン-batch23-ヴェスナ-2" },
  ] },
  "genshin:ディオナ": { refs: [
    { team: "curated-genshin-ディオナ-1" },
    { team: "curated-genshin-ディオナ-2" },
    { team: "curated-genshin-ヴェスナ-2", viewId: "curated-genshin-ディオナ-batch23-ヴェスナ-2" },
  ] },
  "genshin:スカーク": { refs: [
    { team: "curated-genshin-スカーク-1" },
    { team: "curated-genshin-スカーク-2" },
    { team: "curated-genshin-ヴォジャニーツァ-2", viewId: "curated-genshin-スカーク-batch23-ヴォジャニーツァ-2" },
  ] },
  "genshin:フリーナ": { refs: [
    { team: "curated-genshin-フリーナ-1" },
    { team: "curated-genshin-フリーナ-2" },
    { team: "curated-genshin-ヴォジャニーツァ-2", viewId: "curated-genshin-フリーナ-batch23-ヴォジャニーツァ-2" },
  ] },
  "genshin:エスコフィエ": { refs: [
    { team: "curated-genshin-エスコフィエ-1" },
    { team: "curated-genshin-エスコフィエ-2" },
    { team: "curated-genshin-ヴォジャニーツァ-2", viewId: "curated-genshin-エスコフィエ-batch23-ヴォジャニーツァ-2" },
  ] },
  // 第24バッチ（2026-10-03）。初期参照は固定したまま、変更をlinkRecordsへ追記。
  "hsr:パール": {"refs":[{"team":"team-hsr-パール-b24-1"},{"team":"team-hsr-パール-b24-2"}]},
  "hsr:アベンチュリン・波と戯れる夏": {"refs":[{"team":"team-hsr-アベンチュリン・波と戯れる夏-b24-1"},{"team":"team-hsr-アベンチュリン・波と戯れる夏-b24-2"}]},
  "hsr:緋英": {"refs":[{"team":"team-hsr-パール-b24-2"}]},
  "hsr:火花": {"refs":[{"team":"curated-hsr-火花-1"},{"team":"curated-hsr-火花-2"},{"team":"team-hsr-パール-b24-1"}]},
  "hsr:爻光": {"refs":[{"team":"team-hsr-パール-b24-2"},{"team":"team-hsr-パール-b24-1"},{"team":"curated-hsr-爻光-3"}],"skipped":[{"team":"team-hsr-アベンチュリン・波と戯れる夏-b24-2","reason":"本人ガイドは銀狼・火花、緋英・主人公、アーチャーの3系統を掲載。新しいパール入り2案と既存のアーチャー案を優先し、本文に同じ4名構成がない夏アベンチュリン案は3枠制限で見送る。","sourceUrl":"https://game8.jp/houkaistarrail/754019","checkedAt":"2026-10-03"}]},
  "hsr:不死途": {"refs":[{"team":"curated-hsr-不死途-1"},{"team":"curated-hsr-不死途-2"},{"team":"team-hsr-アベンチュリン・波と戯れる夏-b24-1"}]},
  "hsr:千冶・刃": {"refs":[{"team":"curated-hsr-千冶・刃-1"},{"team":"curated-hsr-千冶・刃-2"},{"team":"team-hsr-アベンチュリン・波と戯れる夏-b24-1"}]},
  "hsr:ヒアンシー": {"refs":[{"team":"curated-hsr-ヒアンシー-1"},{"team":"curated-hsr-ヒアンシー-2"},{"team":"team-hsr-アベンチュリン・波と戯れる夏-b24-1"}],"skipped":[{"team":"team-hsr-アベンチュリン・波と戯れる夏-b24-2","reason":"本人ガイドのHP消費・記憶軸の第1・第2案を維持し、千冶・刃のHP支援とも合う追加攻撃案を第3枠に採用。本文に同じ4名構成がない愉悦キャリー案は3枠制限で見送る。","sourceUrl":"https://game8.jp/houkaistarrail/677023","checkedAt":"2026-10-03"}]},
  "hsr:ロビン・夏空の歌": {"refs":[{"team":"curated-hsr-ロビン・夏空の歌-1"},{"team":"curated-hsr-ロビン・夏空の歌-2"},{"team":"team-hsr-アベンチュリン・波と戯れる夏-b24-2"}]},
};
