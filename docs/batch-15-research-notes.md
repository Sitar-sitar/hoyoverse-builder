# 第15バッチ 個別ガイド調査記録

作成日: 2026-09-10（JST）。第15バッチ本体の精査日は 2026-09-05。
対象リポジトリ・作成時コミット: `Sitar-sitar/hoyoverse-builder` / `3703a26`（`origin/main`）。作業ブランチ `feat/batch15-normalization`。
対象: 20名（HSR 8・原神 8・ZZZ 4）

## このメモの位置づけ（重要）

**本メモは第15バッチ実装時（2026-09-05）の根拠を、実装済みデータから転記して起こしたものである。** 第1〜14・16・17
バッチの根拠メモが「調査しながら書いた記録」であるのに対し、第15バッチだけは根拠メモを残さずに実装されたため、
[修正設計書_第15バッチの基底データ正規化_2026-09-10.md](修正設計書_第15バッチの基底データ正規化_2026-09-10.md) §4.1
の前提作業として後から作成した。

- 出典 URL・案数・凸段数・目標値の有無は、`server/batch15Parties.ts` / `batch15Constellations.ts` / `batch15Guides.ts`
  に登録済みの値から機械的に抽出した（2026-09-10 実測）。
- **データの再精査（出典の再訪・数値の再確認）は行っていない。** 正規化作業のスコープは「置き場所を移す」ことであり、
  データ内容の見直しではない（設計書 §2.2 OUT）。
- したがって本メモの「確認日」は第15バッチ実装時の 2026-09-05 であり、2026-09-10 ではない。次回この20名を精査する
  ときは、他バッチと同じ手順で出典を訪問し直して更新する。

## 数値目標の採否ルール（第15バッチ実装時の運用）

- 出典本文に明示された数値だけを `targets` に登録する。明示が無いキャラクターは `targets: []`（第14バッチと同じ扱い）。
- 「戦闘中」「編成条件」「凸条件」「モチーフ光円錐/武器装備時」の数値は公開プロフィール目標へ採用しない。
- 20名中、明示値があり `targets` を持つのは下表の「目標値」列が「◯件」のキャラクターのみ。残りは主ステータス方針と
  `targetContext` で優先度を説明する。

## 一覧

| ゲーム | キャラ | source ID | 主出典（ビルド・凸・PT 共通） | PT | 凸 | 目標値 |
| --- | --- | --- | --- | --- | --- | --- |
| HSR | 御空 | `hsr:1207` | https://game8.jp/houkaistarrail/526440 | 3案 | 6段 | なし（targets は空配列） |
| HSR | 三月なのか | `hsr:1001` | https://game8.jp/houkaistarrail/524695 | 3案 | 6段 | 1件 |
| HSR | 長夜月 | `hsr:1413` | https://game8.jp/houkaistarrail/708951 | 3案 | 6段 | なし（targets は空配列） |
| HSR | 停雲 | `hsr:1202` | https://game8.jp/houkaistarrail/524678 | 3案 | 6段 | なし（targets は空配列） |
| HSR | 白露 | `hsr:1211` | https://game8.jp/houkaistarrail/523995 | 3案 | 6段 | なし（targets は空配列） |
| HSR | 緋英 | `hsr:1505` | https://game8.jp/houkaistarrail/756941 | 3案 | 6段 | 2件 |
| HSR | 彦卿 | `hsr:1209` | https://game8.jp/houkaistarrail/524675 | 3案 | 6段 | なし（targets は空配列） |
| HSR | 姫子 | `hsr:1003` | https://game8.jp/houkaistarrail/524693 | 3案 | 6段 | 3件 |
| 原神 | ディルック | `genshin:10000016` | https://game8.jp/genshin/352605 | 3案 | 6段 | なし（targets は空配列） |
| 原神 | ドゥリン | `genshin:10000123` | https://game8.jp/genshin/707122 | 3案 | 6段 | 1件 |
| 原神 | トーマ | `genshin:10000050` | https://game8.jp/genshin/395527 | 3案 | 6段 | なし（targets は空配列） |
| 原神 | ドリー | `genshin:10000068` | https://game8.jp/genshin/466770 | 3案 | 6段 | なし（targets は空配列） |
| 原神 | ナヴィア | `genshin:10000091` | https://game8.jp/genshin/539458 | 3案 | 6段 | なし（targets は空配列） |
| 原神 | ニィロウ | `genshin:10000070` | https://game8.jp/genshin/468761 | 3案 | 6段 | 1件 |
| 原神 | ネフェル | `genshin:10000122` | https://game8.jp/genshin/707118 | 3案 | 6段 | なし（targets は空配列） |
| 原神 | ノエル | `genshin:10000034` | https://game8.jp/genshin/352610 | 3案 | 6段 | なし（targets は空配列） |
| ZZZ | 猫又 | `zzz:1021` | https://game8.jp/zenless/607805 | 3案 | 6段 | なし（targets は空配列） |
| ZZZ | 盤岳 | `zzz:1471` | https://game8.jp/zenless/723895 | 3案 | 6段 | なし（targets は空配列） |
| ZZZ | 葉瞬光 | `zzz:1431` | https://game8.jp/zenless/682698 | 3案 | 6段 | なし（targets は空配列） |
| ZZZ | 潘引壺 | `zzz:1421` | https://game8.jp/zenless/682680 | 3案 | 6段 | 1件 |
- 出典はいずれも Game8 の更新日付きキャラクター個別ページで、ビルド・凸（星魂 / 命ノ星座 / 心象映画）・推奨PTを
  同一ページから照合している（PT 用と凸用の `sourceUrl` が全20名で一致することを実測で確認）。
- `hsr:三月なのか` は**存護（`hsr:1001`）専用**の根拠である。巡狩の別実装（`hsr:1224`）は対象外で、同名だが別ページ・
  別ビルドとして扱う。正規化後も 1224 へこのデータを適用しない（設計書 §3.1）。
- 各キャラクターのガイド出典ラベルは `server/buildAdvisor.ts` / `gameProviders.ts` の各エントリ `sourceLabel` に保持する
  （正規化前は `batch15Guides.ts` の `PATCHES[].sourceLabel`）。

## 推奨PTの `communitySources`

第15バッチ実装時は `communitySources: []`（0件）で登録されており、基底カタログの契約
（`assertPartyCatalogIntegrity`：各案1件以上）を満たしていなかった。正規化にあたり、他バッチと同じ共通出典
（`partyRecommendations.ts` の `communitySourcesFor(game)`）を適用する。個別の追加調査は行っていない。

| ゲーム | 共通出典 | 種別 |
| --- | --- | --- |
| HSR | HoYoLAB 由来の 4.4 編成議論（Reddit 公開投稿） | crossChecked |
| 原神 | Game8 原神ガイドの公開 X アカウント | crossChecked |
| ZZZ | Game8 ZZZ ガイドの公開 X アカウント | crossChecked |

`checkedAt` は共通出典側の日付（`2026-08-25`）をそのまま用いる。第15バッチの精査日（`2026-09-05`）ではない点に注意する
（`communitySourcesFor` は全バッチ共通の定義で、バッチ別に日付を上書きしていない）。

## 残課題

- 20名の出典を訪問し直しての再精査は未実施。次回の個別精査バッチで実施する。
- メンバー名の表記ゆれ（リファクタリング計画書 §4.3 #2）は本メモの範囲外。第15バッチのメンバー名も現状のまま移設する。
