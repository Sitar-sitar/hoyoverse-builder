import type { CharacterPartyEntry } from "./types";

/**
 * 各キャラの推奨PT参照（D1）と見送り記録（D6）。キーは `game:カタログ名`。
 * 書いていないキャラは自分起点の編成を保存順の先頭3件で既定参照する（D2）。
 * 初回登録時の採用参照は initialRefs.ts に固定する。
 * 以後の参照変更は自分起点を含め linkRecords.ts の PARTY_LINK_RECORDS に追記する。
 */
export const CHARACTER_PARTIES: Record<string, CharacterPartyEntry> = {
  "hsr:ホタル": { refs: [{"team":"team-hsr-ホタル-b26-1"},{"team":"team-hsr-ホタル-b26-2"},{"team":"team-hsr-ホタル-b26-3"}] },
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
  "hsr:アベンチュリン・波と戯れる夏": {"refs":[{"team":"team-hsr-アベンチュリン・波と戯れる夏-b24-1"},{"team":"team-hsr-アベンチュリン・波と戯れる夏-b24-2"}],"skipped":[{"team":"team-hsr-ロビン・夏空の歌-b27-1","reason":"本人ガイドの固定編成と既存の表示枠を照合。起点ガイドの構成差を保持し、今回は本人側の採用を見送る。共有編成は図鑑の別欄で確認できる。","sourceUrl":"https://gamewith.jp/houkaistarrail/article/show/565894","checkedAt":"2026-10-09"}]},
  "hsr:緋英": {"refs":[{"team":"team-hsr-パール-b24-2"}]},
  "hsr:火花": {"refs":[{"team":"curated-hsr-火花-1"},{"team":"curated-hsr-火花-2"},{"team":"team-hsr-パール-b24-1"}]},
  "hsr:爻光": {"refs":[{"team":"team-hsr-パール-b24-2"},{"team":"team-hsr-パール-b24-1"},{"team":"curated-hsr-爻光-3"}],"skipped":[{"team":"team-hsr-アベンチュリン・波と戯れる夏-b24-2","reason":"本人ガイドは銀狼・火花、緋英・主人公、アーチャーの3系統を掲載。新しいパール入り2案と既存のアーチャー案を優先し、本文に同じ4名構成がない夏アベンチュリン案は3枠制限で見送る。","sourceUrl":"https://game8.jp/houkaistarrail/754019","checkedAt":"2026-10-03"}]},
  "hsr:不死途": {"refs":[{"team":"team-hsr-千冶・刃-b25-1"},{"team":"team-hsr-不死途-b25-1"},{"team":"team-hsr-アベンチュリン・波と戯れる夏-b24-1"}],"skipped":[{"team":"team-hsr-ロビン・夏空の歌-b27-1","reason":"本人ガイドの固定編成と既存の表示枠を照合。起点ガイドの構成差を保持し、今回は本人側の採用を見送る。共有編成は図鑑の別欄で確認できる。","sourceUrl":"https://gamewith.jp/houkaistarrail/article/show/544454","checkedAt":"2026-10-09"}]},
  "hsr:千冶・刃": {"refs":[{"team":"team-hsr-千冶・刃-b25-1"},{"team":"team-hsr-千冶・刃-b25-2"},{"team":"team-hsr-アベンチュリン・波と戯れる夏-b24-1"}]},
  "hsr:ヒアンシー": {"refs":[{"team":"curated-hsr-ヒアンシー-1"},{"team":"curated-hsr-ヒアンシー-2"},{"team":"team-hsr-アベンチュリン・波と戯れる夏-b24-1"}],"skipped":[{"team":"team-hsr-アベンチュリン・波と戯れる夏-b24-2","reason":"本人ガイドのHP消費・記憶軸の第1・第2案を維持し、千冶・刃のHP支援とも合う追加攻撃案を第3枠に採用。本文に同じ4名構成がない愉悦キャリー案は3枠制限で見送る。","sourceUrl":"https://game8.jp/houkaistarrail/677023","checkedAt":"2026-10-03"},{"team":"team-hsr-千冶・刃-b25-1","reason":"本人ガイドの記憶2案と前回採用の夏アベンチュリン追加攻撃案を維持。千冶・刃とのHP相性は確認したが、4件目となる不死途・トリビー案は3枠制限で見送る。","sourceUrl":"https://game8.jp/houkaistarrail/677023","checkedAt":"2026-10-03"},{"team":"team-hsr-千冶・刃-b25-2","reason":"本人ガイドの記憶2案と夏アベンチュリン案を優先。黄泉との相性は確認したが、別の回転支援案は3枠制限で見送る。","sourceUrl":"https://game8.jp/houkaistarrail/677023","checkedAt":"2026-10-03"},{"team":"team-hsr-ロビン・夏空の歌-b27-1","reason":"本人ガイドの固定編成と既存の表示枠を照合。起点ガイドの構成差を保持し、今回は本人側の採用を見送る。共有編成は図鑑の別欄で確認できる。","sourceUrl":"https://gamewith.jp/houkaistarrail/article/show/490758","checkedAt":"2026-10-09"},{"team":"team-hsr-ロビン・夏空の歌-b27-3","reason":"本人ガイドの固定編成と既存の表示枠を照合。起点ガイドの構成差を保持し、今回は本人側の採用を見送る。共有編成は図鑑の別欄で確認できる。","sourceUrl":"https://gamewith.jp/houkaistarrail/article/show/490758","checkedAt":"2026-10-09"}]},
  "hsr:ロビン・夏空の歌": {"refs":[{"team":"team-hsr-ロビン・夏空の歌-b27-1"},{"team":"team-hsr-ロビン・夏空の歌-b27-2"},{"team":"team-hsr-ロビン・夏空の歌-b27-3"}],"skipped":[{"team":"team-hsr-姫子・旅立ち-b25-2","reason":"本人ガイドの記憶主力案と前回採用の夏アベンチュリン案を保持し、ヴェルトとの殲滅案を優先。姫子とのもう1案は3枠制限で見送る。","sourceUrl":"https://gamewith.jp/houkaistarrail/article/show/565891","checkedAt":"2026-10-03"},{"team":"team-hsr-アベンチュリン・波と戯れる夏-b24-2","reason":"本人ガイドの固定編成と既存の表示枠を照合。起点ガイドの構成差を保持し、今回は本人側の採用を見送る。共有編成は図鑑の別欄で確認できる。","sourceUrl":"https://gamewith.jp/houkaistarrail/article/show/565891","checkedAt":"2026-10-09"},{"team":"team-hsr-姫子・旅立ち-b25-1","reason":"本人ガイドの固定編成と既存の表示枠を照合。起点ガイドの構成差を保持し、今回は本人側の採用を見送る。共有編成は図鑑の別欄で確認できる。","sourceUrl":"https://gamewith.jp/houkaistarrail/article/show/565891","checkedAt":"2026-10-09"}]},
  "hsr:姫子・旅立ち": {"refs":[{"team":"team-hsr-姫子・旅立ち-b25-1"},{"team":"team-hsr-姫子・旅立ち-b25-2"},{"team":"team-hsr-姫子・旅立ち-b25-3"}],"skipped":[{"team":"team-hsr-千冶・刃-b25-3","reason":"殲滅・夏ロビン、裁決・サンデー、裁決・記憶主人公の3系統を優先。千冶・刃との殲滅案は同系統の追加候補として3枠制限で見送る。","sourceUrl":"https://game8.jp/houkaistarrail/784730","checkedAt":"2026-10-03"}]},
  "hsr:トリビー": {"refs":[{"team":"curated-hsr-トリビー-1"},{"team":"team-hsr-千冶・刃-b25-1"},{"team":"team-hsr-不死途-b25-1"}]},
  "hsr:黄泉": {"refs":[{"team":"curated-hsr-黄泉-1"},{"team":"team-hsr-千冶・刃-b25-2"},{"team":"curated-hsr-黄泉-3"}]},
  "hsr:サフェル": {"refs":[{"team":"curated-hsr-サフェル-1"},{"team":"team-hsr-千冶・刃-b25-2"},{"team":"curated-hsr-サフェル-3"}]},
  "hsr:ヴェルト": {"refs":[{"team":"team-hsr-千冶・刃-b25-3"},{"team":"team-hsr-姫子・旅立ち-b25-1"},{"team":"curated-hsr-ヴェルト-1"}]},
  "hsr:フォフォ": {"refs":[{"team":"curated-hsr-フォフォ-1"},{"team":"team-hsr-千冶・刃-b25-3"},{"team":"team-hsr-姫子・旅立ち-b25-1"}],"skipped":[{"team":"team-hsr-姫子・旅立ち-b25-3","reason":"回復とEP支援を確認。既存の愉悦案を保持し、殲滅のWアタッカー案と夏ロビン案を優先するため、裁決・記憶主人公案は3枠制限で見送る。","sourceUrl":"https://game8.jp/houkaistarrail/556584","checkedAt":"2026-10-03"},{"team":"team-hsr-ロビン・夏空の歌-b27-2","reason":"本人ガイドの固定編成と既存の表示枠を照合。起点ガイドの構成差を保持し、今回は本人側の採用を見送る。共有編成は図鑑の別欄で確認できる。","sourceUrl":"https://gamewith.jp/houkaistarrail/article/show/419762","checkedAt":"2026-10-09"}]},
  "hsr:サンデー": {"refs":[{"team":"curated-hsr-サンデー-1"},{"team":"team-hsr-姫子・旅立ち-b25-2"},{"team":"team-hsr-不死途-b25-1"}]},
  "hsr:丹恒・騰荒": {"refs":[{"team":"curated-hsr-丹恒・騰荒-1"},{"team":"team-hsr-姫子・旅立ち-b25-2"},{"team":"team-hsr-不死途-b25-1"}]},
  "hsr:ルアン・メェイ": {"refs":[{"team":"curated-hsr-ルアン・メェイ-1"},{"team":"curated-hsr-ルアン・メェイ-2"},{"team":"team-hsr-姫子・旅立ち-b25-3"}],"skipped":[{"team":"team-hsr-ホタル-b26-3","reason":"本人ガイドのホタル・流離人・ダリア案を第1枠に維持し、乱破案と姫子・旅立ち案を保持。ホタル側の代替支援案は今回のホタルのみ更新の範囲で追加表示を見送る。","sourceUrl":"https://game8.jp/houkaistarrail/573084","checkedAt":"2026-10-07"}]},
  "hsr:ギャラガー": {"skipped":[{"team":"team-hsr-ホタル-b26-3","reason":"ホタル側の代替編成として相性を確認したが、今回は利用者指定のホタルのみ更新。既存のダリア・流離人案、黄泉案、巡狩三月案の3枠を保持し、ギャラガー側の入れ替えは別途精査する。","sourceUrl":"https://gamewith.jp/houkaistarrail/article/show/434009","checkedAt":"2026-10-07"}]},
  "hsr:帰忘の流離人": {"skipped":[{"team":"team-hsr-ホタル-b26-2","reason":"ホタル側の耐久なし案として相性を確認したが、今回はホタルのみ更新。既存の霊砂入りホタル案、ブートヒル案、姫子案を維持し、本人側の3枠入れ替えを見送る。","sourceUrl":"https://game8.jp/houkaistarrail/643244","checkedAt":"2026-10-07"}]},
  "hsr:セイバー": {"refs":[{"team":"team-hsr-ロビン・夏空の歌-b27-2"},{"team":"curated-hsr-セイバー-1"},{"team":"curated-hsr-セイバー-2"}]},
  "hsr:ギルガメッシュ": {"refs":[{"team":"team-hsr-ロビン・夏空の歌-b27-2"},{"team":"curated-hsr-ギルガメッシュ-1"},{"team":"curated-hsr-ギルガメッシュ-2"}]},
  "hsr:アグライア": {"refs":[{"team":"team-hsr-ロビン・夏空の歌-b27-3"},{"team":"curated-hsr-アグライア-1"},{"team":"curated-hsr-アグライア-2"}]},
  "zzz:クレタ": {"refs":[{"team":"team-zzz-クラレッタ-b27-2"},{"team":"curated-zzz-クレタ-1"},{"team":"curated-zzz-クレタ-2"}]},
  "zzz:クラレッタ": {"refs":[{"team":"team-zzz-クラレッタ-b27-1"},{"team":"team-zzz-クラレッタ-b27-2"},{"team":"team-zzz-クラレッタ-b27-3"}]},
  "hsr:キュレネ": {"skipped":[{"team":"team-hsr-ロビン・夏空の歌-b27-3","reason":"本人ガイドの固定編成と既存の表示枠を照合。起点ガイドの構成差を保持し、今回は本人側の採用を見送る。共有編成は図鑑の別欄で確認できる。","sourceUrl":"https://gamewith.jp/houkaistarrail/article/show/517829","checkedAt":"2026-10-09"}]},
  "zzz:ノルムー": {"skipped":[{"team":"team-zzz-クラレッタ-b27-1","reason":"本人ガイドの固定編成と既存の表示枠を照合。起点ガイドの構成差を保持し、今回は本人側の採用を見送る。共有編成は図鑑の別欄で確認できる。","sourceUrl":"https://game8.jp/zenless/760639","checkedAt":"2026-10-09"}]},
  "zzz:リナ": {"skipped":[{"team":"team-zzz-クラレッタ-b27-1","reason":"本人ガイドの固定編成と既存の表示枠を照合。起点ガイドの構成差を保持し、今回は本人側の採用を見送る。共有編成は図鑑の別欄で確認できる。","sourceUrl":"https://game8.jp/zenless/607799","checkedAt":"2026-10-09"},{"team":"team-zzz-クラレッタ-b27-2","reason":"本人ガイドの固定編成と既存の表示枠を照合。起点ガイドの構成差を保持し、今回は本人側の採用を見送る。共有編成は図鑑の別欄で確認できる。","sourceUrl":"https://game8.jp/zenless/607799","checkedAt":"2026-10-09"}]},
  "zzz:アンビー": {"skipped":[{"team":"team-zzz-クラレッタ-b27-3","reason":"本人ガイドの固定編成と既存の表示枠を照合。起点ガイドの構成差を保持し、今回は本人側の採用を見送る。共有編成は図鑑の別欄で確認できる。","sourceUrl":"https://game8.jp/zenless/607757","checkedAt":"2026-10-09"}]},
  "zzz:ニコ": {"skipped":[{"team":"team-zzz-クラレッタ-b27-3","reason":"本人ガイドの固定編成と既存の表示枠を照合。起点ガイドの構成差を保持し、今回は本人側の採用を見送る。共有編成は図鑑の別欄で確認できる。","sourceUrl":"https://game8.jp/zenless/607758","checkedAt":"2026-10-09"}]},
};
