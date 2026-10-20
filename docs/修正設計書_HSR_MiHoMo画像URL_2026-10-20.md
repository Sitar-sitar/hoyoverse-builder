# 修正設計書：HSRのMiHoMo経由で画像が表示されない不具合

スターレイルのUID照会がMiHoMo経由で返ったとき、公開サイトのキャラ・光円錐・遺物・ステータスの画像がすべて表示されない不具合を直す。MiHoMo応答の画像パスは相対パスで、APIがそのまま返しているため、ブラウザが公開サイト基準で解決して404になっている。

- 作成日: 2026-10-20
- 対象アプリ: hoyoverse-builder
- 種別: 修正設計書
- 対象バージョン: Phase 61例外（Phase 61の進行中に割り込む不具合修正）
- 前提コミット: `77e44f749e8a690897d7bb3c6c7619933cef7835`（main、本番API/Pagesと同一）
- ステータス: 着手前（正本）
- 関連: [実装ログ](実装ログ.md)、セキュリティ残課題の修正設計書（Phase 61、PR #130側にありmain未反映）

## 1. 現象と原因

- 2026-10-20、公開サイトで実UIDのスターレイル照会（MiHoMo経由）を行うと、画面の画像16枚がすべて破損した。CSPの有無に関係なく同じ（Phase 61のCSP確認中に発見）。原神・ZZZ（enka.networkの絶対URL）は正常。
- MiHoMo `sr_info_parsed` の応答では、画像を指す文字列がすべて相対パス（`icon/...`、`image/...`）。2026-10-20に実応答1件の構造を確認した（値は記録していない）: `icon/character`・`icon/avatar`・`icon/path`・`icon/element`・`icon/skill`・`icon/property`・`icon/light_cone`・`icon/relic`・`image/character_portrait`・`image/character_preview`・`image/light_cone_portrait`・`image/light_cone_preview`。
- `server/buildAdvisor.ts`のMiHoMo正規化は、`portrait`（`source.portrait ?? preview ?? icon`）、光円錐`icon`、遺物`icon`、ステータス`icon`をそのまま返している。クライアントは受け取った値を`<img src>`へそのまま使うため、`https://sitar-sitar.github.io/hoyoverse-builder/app/image/...`として要求され404になる。
- 相対パスの基準はStarRailResリポジトリ（HSR静的データと同じ）。`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/` を前に付けた代表6パス（キャラのportrait・preview・icon、光円錐・遺物・ステータスのicon）が全て200 `image/png` を返すことを確認した。

## 2. スコープ

### 2.1 IN

- MiHoMo正規化の出力4か所（キャラ`portrait`、光円錐`icon`、遺物`icon`、ステータス`icon`）で、相対パスをStarRailResの絶対URLへ変換する。

### 2.2 OUT

- Enka経由（HSRのfallback・原神・ZZZ）の画像。既に絶対URLで正常。
- 画像のプロキシ・キャッシュ・自サイトへの複製。外部画像を直接表示する現行方式を保つ。
- 画面側の表示・レイアウト変更、CSPの変更。変換先のホスト（`raw.githubusercontent.com`）はPhase 61のCSP案（img-src）に既に含まれる。

## 3. 仕様

`server/buildAdvisor.ts`に`mihomoAssetUrl(value: unknown): string | null`を追加し、上記4か所で使う。

| 入力 | 出力 |
| --- | --- |
| `https://`で始まる文字列 | そのまま（既存の試験データ・将来の絶対URL応答を壊さない） |
| 相対パス（英数字・`_`・`-`・`.`・`/`だけで、`..`を含まず、`/`や`//`で始まらない） | `https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/` の後ろに連結 |
| 空文字・非文字列 | `null`（現行の`|| null`と同じ） |
| 上記以外（`http:`・`data:`・`javascript:`・プロトコル相対`//`・`..`を含む等） | `null`（推測で補わない。画像が出ないだけで表示は壊れない） |

- 変換はキャッシュへ保存する前の正規化で行う（`normalizeMihomoPayload`の出力）。公開後、既存のUID応答キャッシュ（最長10分）は配備時の再起動で消える。
- 基準URLは定数とし、環境変数での上書きは追加しない。

## 4. 既存機能の非破壊

- [ ] MiHoMo経路のキャラ・数値・比較・推奨・装備提案は変わらない（画像の文字列だけが変わる）。
- [ ] 絶対URLを使う既存の試験データの値は変わらない。
- [ ] Enka経路・原神・ZZZの画像は変わらない。

## 5. 変更ファイル

| ファイル | 内容 |
| --- | --- |
| `server/buildAdvisor.ts` | `mihomoAssetUrl`の追加と4か所への適用 |
| `server/buildAdvisor.test.ts` | 再現テスト（相対パスを含むMiHoMo応答から絶対URLが得られる、危険・不明な値はnull、絶対URLは不変） |

## 6. テスト・検証

- 再現テスト: 修正前のコードで失敗し、修正後に合格すること（4か所すべて）。
- 変換表の各行（https・相対・空・`http:`・`data:`・`//`・`..`）。
- 共通: `pnpm check`、`pnpm test`、`pnpm build:api`。
- 公開後: 公開サイトでスターレイルを実UIDで照会し、MiHoMo経由の画像が表示されることをChromeで確認する（UIDは記録しない）。

## 7. 受け入れ条件

- [ ] MiHoMo経由の照会で、キャラ・光円錐・遺物・ステータスの画像URLが全て`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/`起点の絶対URLになる。
- [ ] 再現テスト・全テスト・型・API buildが合格。
- [ ] 公開サイトでMiHoMo経由の画像が表示される（公開後のChrome確認）。

## 8. リスク

- StarRailResのパス構成が変わると画像が出なくなる（現状と同じ状態に戻るだけで、照会結果は壊れない）。
- 外部ホストの画像を直接表示する点は現行どおり（原神・ZZZはenka.networkを直接表示している）。

## 変更履歴

| 日付 | 内容 |
| --- | --- |
| 2026-10-20 | 新規作成。Phase 61のCSP確認中に見つかったMiHoMo画像の相対パス問題について、原因・基準URLの確認結果・変換仕様を確定。 |
