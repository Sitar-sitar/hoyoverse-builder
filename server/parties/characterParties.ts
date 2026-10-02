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
};
