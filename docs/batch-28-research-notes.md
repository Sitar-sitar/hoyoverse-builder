# 第28バッチ 調査記録（2026-10-23）

- 対象: ZZZ フィオニー（`zzz:1641`）1名。カタログへ新規追加（256→257名、ZZZ 59→60名）。
- 位置づけ: Ver.3.3 前半（2026-10-21 配信）の新S級エージェント。手順は `hoyoverse-character-update` モードC（Phase 59 後の content 正本で初の新キャラ追加）。
- 開始コミット: main `cb1193f`。作業ブランチ `feat/batch28-fiony`。
- 対象外: 同じ Ver.3.3 のセヴェリアン（`zzz:1631`、後半実装で未実装）、ロクシー（`zzz:1621`）、原神の未登録10名（別バッチ）。

## source ID

| 項目 | 値 | 根拠 |
| --- | --- | --- |
| ID | `zzz:1641` | Enka `store/zzz/avatars.json`（GitHub `EnkaNetwork/API-docs` の `master`、2026-10-23 取得） |
| 名前 | ja フィオニー / en Phoenix / zh-CN 菲欧妮 | 同 `store/zzz/locs.json`（公式テキストマップ） |
| 特性・属性 | `Anomaly`（異常）/ `Fire`（炎） | 同 avatars.json |

- この作業環境からは `api.enka.network` がネットワーク制限で取得できないため、Enka が公開している同じストアファイルの GitHub 配布元を使った。`refresh-identity-snapshot.mjs` は取得先だけを同ファイルへ差し替えて差分表示を実行し、新規候補が `zzz:1631` と `zzz:1641` の2件であることを確認した。`--write` はセヴェリアン（未実装）も入るため使わず、`zzz:1641` の1行だけを `identityCatalogSnapshot.ts` へ追加した（288→289件）。
- 心象映画の本文は Enka のデータに含まれない（第19バッチと同じ）。

## 根拠一覧

| 出典 | URL | 記事の更新日 | 確認日 | 用途 |
| --- | --- | --- | --- | --- |
| Game8（評価・ビルド） | https://game8.jp/zenless/783054 | 2026-10-23 16:37 | 2026-10-23 | ディスク・音動機・異常掌握の閾値・心象映画・編成 |
| GameWith（評価・編成） | https://gamewith.jp/zenless/560630 | 2026-10-22 01:10 | 2026-10-23 | 開幕ステータス・ディスク・主ステ・心象映画・編成 |
| 公式告知の報道（マイナビ） | https://news.mynavi.jp/article/20261011-5110604/ | 2026-10-11 | 2026-10-23 | Ver.3.3（10-21）でフィオニー実装、セヴェリアンは後半 |

英語版の出典（Prydwen・Game8 英語版）はこの環境から取得できなかった（DNS 不可・検索で該当なし）。

## 装備

- ディスク: 出典で第一推奨が割れた。**Game8 = フリーダム・ブルース ×4 / パエトーンの歌 ×2**（狂咲の発生を増やす）、**GameWith = ケイオス・ジャズ ×4 / パエトーンの歌 ×2**（フリーダム・ブルースを4セット代替に挙げる）。両出典が両構成を挙げるため、更新日が新しい Game8 を `relicSet`、GameWith の第一推奨を `planarSet` に「代替」として併記した。
- メインステータス: IV 異常マスタリー / V 炎属性ダメージ / VI 異常掌握（GameWith のビルド表）。Game8 はスロット対応を示さないが、異常掌握はサブステに無いため VI とパエトーンの歌で確保すると明記し、候補に攻撃力・貫通率も挙げるため V に併記した。
- サブ優先: 異常マスタリー ≒ 攻撃力% > 攻撃力（GameWith）／異常マスタリー = 攻撃力 > 貫通値（Game8）。
- 音動機: **転生の炎翼**（モチーフ、両出典一致）。代替 殻の中の魂（両出典）、双生の涙（両出典）、複合コンパイラ・電撃リップグロス（GameWith）。

## 公開比較の目標

開幕異常掌握は「開幕＝戦闘外のステータス画面値」で比較できる（第19バッチで確認した扱いと同じ。GameWith も「Lv.60 開幕ステータス」と明記）。

| キー | 厳選 | 目標 | 妥協 | 根拠 |
| --- | ---: | ---: | ---: | --- |
| `anomalyProficiency` | 255 | 209 | 155 | 255 = GameWith の Lv.60 開幕値（モチーフ装備）で、Game8 もコアパッシブの会心率が最大に達する開幕値として明記。209 = GameWith の代替音動機時の開幕値。155 = Game8 が示す、コアパッシブの会心率上乗せが始まる開幕値 |

- **異常マスタリー348・攻撃力2,376/2,338は登録しない。** GameWith のみの理想値（サブステ回数前提）で、Game8 に数値が無く、3水準の根拠が揃わないため。理由は `targetContext` に残した。
- コアパッシブによる状態異常ダメージの会心、心象映画、編成、音動機・ディスクの条件付き効果は公開プロフィールの現在値へ加算していない。

## 心象映画

**効果本文は Game8・GameWith の2出典が全6段で一致**したため `curated` で登録した（表示用に要約。数値・条件は原文どおり）。名称は3段で表記が割れた。英語版の出典が取れず裏取りできないため、第19バッチと同じく Game8 の表記を採用した。

| 段 | 採用（Game8） | GameWith | 判定 |
| --- | --- | --- | --- |
| 1 | 残留痛覚と刺激のパレード | 痛覚残留と刺激パレード | 語順違い。Game8 を採用 |
| 2 | 好奇心は猫をも殺…さない | 好奇心は猫をも殺さない | 「…」の有無。Game8 を採用 |
| 3 | かかし症候群 | 案山子症候群 | 表記違い。Game8 を採用 |
| 4 | 命の終りと無慈悲な楽園 | 同左 | 一致 |
| 5 | 熱狂サーカス | 同左 | 一致 |
| 6 | 懲罰室の手記 | 同左 | 一致 |

- `targetChanges` は全6段で空（3凸・5凸はスキルLv、他は戦闘中条件）。
- 推奨凸は両出典とも1凸（モチーフ音動機を優先）。

## 推奨PT（本人）

| # | Team.id | メンバー | 主根拠 | 照合 |
| --- | --- | --- | --- | --- |
| 1 | `team-zzz-フィオニー-b28-1` | フィオニー（炎蝕付与・状態異常の会心支援）/ レミエール（昇華後の支援スキルで瞬間火力）/ ヴェリナ（風異常の蓄積） | Game8「理想編成」 | GameWith 第1編成と一致（crossChecked） |
| 2 | `team-zzz-フィオニー-b28-2` | フィオニー（熱傷付与・乱流の起点）/ ヴェリナ（風咬み付与）/ 浮波柚葉（先行バフ） | GameWith「乱流編成」 | Game8 の柚葉編成と一致（crossChecked） |
| 3 | `team-zzz-フィオニー-b28-3` | フィオニー（熱傷付与）/ パイパー（強撃で混沌を発動）/ ルーシー（攻撃力バフ支援） | GameWith「初心者・混沌編成」 | Game8 の初心者編成はニコ・パイパーで構成が異なる（watching） |

- Game8 の南宮羽編成（フィオニー・南宮羽・レミエール）は3枠に収まらないため採用していない。
- 全編成の `targetChanges` は空。初回採用参照3件を `initialRefs.ts` 末尾へ固定した（初回登録のため `PARTY_LINK_RECORDS` は書かない）。

## 推奨PT連動レビュー

`party-links.mjs` の未対応は登録直後6件。各参加者の本人ガイド（Game8 日本語版）の編成節を本文確認し、全件見送りとした。

| 参加者 | 本人出典（更新日・確認日） | 判断 |
| --- | --- | --- |
| ヴェリナ × b28-1 | [Game8 760640](https://game8.jp/zenless/760640)（2026-10-23 / 10-23） | 見送り。編成は柚葉・プロメイア、柚葉・2凸ジェーン、ルーシー・パイパーでフィオニー入りは無い。総合パーティ記事（[614253](https://game8.jp/zenless/614253)）には同構成があるが、本人ガイドに載るまで既存3枠を保持 |
| ヴェリナ × b28-2 | 同上 | 見送り。フィオニー・柚葉との同構成は無い |
| レミエール × b28-1 | [Game8 774128](https://game8.jp/zenless/774128)（2026-10-23 / 10-23） | 見送り。5案ともフィオニー無し（未実装キャラ扱いのまま） |
| 浮波柚葉 × b28-2 | [Game8 682694](https://game8.jp/zenless/682694)（2026-10-23 / 10-23） | 見送り。南宮羽・星見雅、アリス・ビビアン、パイパー・ルーシーのみ |
| パイパー × b28-3 | [Game8 682651](https://game8.jp/zenless/682651)（2026-07-31 / 10-23） | 見送り。アストラ・バーニス、アストラ・ジェーン、ルーシー・セス |
| ルーシー × b28-3 | [Game8 622470](https://game8.jp/zenless/622470)（2026-10-21 / 10-23） | 見送り。初心者編成はパイパー・セス |

- 表示PT・PT履歴が変わるのはフィオニーのみ。参加者5名は表示3枠を変えず、図鑑の別欄「このキャラが入るほかの編成」に共有編成が出る（ヴェリナ2件、他4名各1件）。
- 各参加者のガイドが Ver.3.3 に追従した時点で再確認する（同バージョン中に一度）。

## 英中の扱い

- 利用者指示（2026-10-23）: 今回は日本語のみの更新で良い。英中の翻訳は行わない。
- 英中レコードは `review: "pending"`・`sourceHash: null`。公開言語は日本語のみのため表示には影響しない。
- 公式データで確認できたもの: PTメンバー名6名（Enka locs の en/zh-CN）。
- **日本語と同じ text にした項目（未翻訳）**: 心象映画の名称・本文12件、凸の出典ラベル1件、PTのタイトル・役割・相性・注記・出典ラベル22件（計35件）。翻訳作業の別依頼で扱う。
- ガイド・メタデータ・履歴の文章は日本語のみで投影されるため英中レコードを持たない。

## 実装先

| 内容 | ファイル |
| --- | --- |
| カタログ・役割 | `content/ja/characters/zzz.ts`（order 60）、`server/characterGuideCatalog.ts`（`ZZZ_RUNTIME_PROFESSIONS`） |
| 身元 | `server/fixtures/identityCatalogSnapshot.ts` |
| 文章 | `content/ja/guides/batch28.ts`、`content/translations/{en,zh-CN}/batch28.ts`、履歴文は `content/ja/guides/guideUpdateHistory.ts` |
| ガイド | `content/guideDefinitions_batch28.ts`（`ZZZ_CHARACTER_GUIDES:フィオニー`、name 参照）→ `content/guides.ts`・`server/gameProviders.ts`・`scripts/content/improvementBacklog.ts` |
| 心象映画 | `content/constellationBatch28.ts` → `content/constellations.ts`・`server/characterConstellations.ts` |
| メタデータ | `content/guideMetadata.ts`、`content/coverage/guideMetadata.baseline.json`（profileId `curated:batch28:zzz:フィオニー`） |
| 推奨PT | `content/teamBatch28.ts`、`server/parties/batch28Teams.ts`・`sharedTeams.ts`、`content/teams.ts`、`initialRefs.ts`、`characterParties.ts`（見送り6件） |
| 台帳・履歴 | `server/characterBatches.ts`（第28バッチ）、`content/historyBatches.ts` |

## 検証

- `pnpm check` PASS、`pnpm content:catalog-index check` / `content:generate` / `content:check` PASS（11,556原文 / 3,674 section）。
- `pnpm test`: 129ファイル／852件 PASS（skip 1ファイル3件）。件数系の期待値（256→257名、共有編成24→27、ID 288→289 など）は実データで確認して更新し、`server/parties/batch28.test.ts` を追加。
- 日本語 API baseline（`content/coverage/baseline.v1.json`）: 利用者の「日本語のみの更新で良い」の指示により、ゴールデン比較で差分範囲を確認した後に作り直した（ファイル削除→`content:baseline snapshot`→`compare` PASS）。差分は characterCount 256→257、catalog・ledger・history の digest、`zzz:1641` の追加行、参加者5名（`zzz:1561`・`1581`・`1411`・`1281`・`1151`）の reference digest のみ。5名の guide・constellations digest は不変。`BASELINE_SOURCE_REVISION`（`dbd66e8`、初回採取元）は変更していない。
- node:test 79件 PASS、`build:api`・Pages build PASS、`git diff --check` PASS。
- `party-links.mjs --strict` 未対応0件、`audit-characters.mjs --offline` 257/257・経路不一致0・メンバー名未解決0・P2 は既知の2名のみ。
- ゴールデン比較（作業前 main で snapshot → 変更後 compare）: 差分はフィオニー本人の各セクション、台帳・履歴・カタログの件数と追加行、メタデータの追加行、参加者5名の `partyAppearances` 追加だけ。他キャラの既存行は不変を確認。

## 未完了

- 実画面（Chrome）確認・push・PR・本番反映は未実施。
