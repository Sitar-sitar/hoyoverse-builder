# 翻訳準備用コンテンツ

正本は `docs/実装設計書_翻訳漏れを防ぐデータ構造と保守基盤_2026-10-10.md`。

Phase 59の初期段階では共通型・検査・旧データの基準保存を実装する。現行データの文章正本はまだ `server/` と画面辞書にあり、ここへ移行済みとは扱わない。英語・中国語の新規生成、既存訳の修正、承認は行わない。

`coverage/skillRequirements.ts` は期待する種類を定義するだけで、スキル情報の収集済み・完全性を表さない。実際のスキルID一覧・説明・数値は個別確認が終わるまでnotCollected。

## 初期段階で利用できる検査

- `pnpm content:baseline compare`: main dbd66e8の全256キャラ・図鑑・UID側ガイド・凸・共有PT/関連編成・履歴のdigestと比較する。UID照会は実行しない。
- `pnpm exec vitest run server/content`: 状態遷移・原文変更検知・欠落・全文章の列挙・日本語基準の回帰を検証する。
- `pnpm check`: content正本とCLIも含む型検査。

`baseline.v1.json` は翻訳正本ではなく、移行前の挙動保全用。既存baselineが違えばsnapshotは上書きしない。データ更新を正当化するためにbaselineを再作成しない。

テスト内の英文は状態検証用の架空fixtureであり、ゲーム情報の翻訳ではない。

2026-10-11現在、`content:check/report/export/ready/generate` を実カタログへ接続した。checkは現在の正本参照・型付き変数・生成index/manifest一致を検査する。UI迂回のAST検査は未接続で、全表示領域の移行完了を保証しない。reportは512件の紹介/通常スキル未収集を翻訳状態と別に示す。exportは既存訳・文脈・現在hashを出力するだけ。readyは未完了で終了2となり、翻訳や承認を行わない。

guideUpdateHistoryとPTリンク履歴を含む移行済み正本は5,879項目。公開設定は準備段階のja限定をAPI/Pages両方で強制し、en/zhのpublishはDB更新前に拒否する。既存保存値は削除しない。Dの表示DTO・Eの全画面文言移行・FのCI/起動ゲートと本番公開は未完了。

## C: 移行前検査（2026-10-11着手）

`pnpm content:migrate` または `pnpm content:migrate --dry-run` は全256名の図鑑・UID側ガイド・凸・関連編成・履歴をオフラインで検査する。候補のTextRefから旧モデルを復元し、文字列・旧三言語・数値・配列順をJSON完全一致で検証する。新規翻訳・API呼出し・正本の変更は行わない。

`pnpm content:migrate --write` は検証後に `tmp/content-migration/legacy-preflight.v1.json` を作る。既存候補が同一ならno-op、不一致なら保全して失敗する。一時ファイルを排他的に作り、完成ファイルを既存ファイルの上書きができないhard linkで公開する。途中出力が残っていれば検査を要求し、無条件に削除して再開しない。候補はGit対象外であり、実行時データには使わない。

これは正本切替の前の棚卸し候補。`mapping` の連番IDは候補内で一度割当・保存する照合専用IDであり、将来の正本IDへ自動転用しない。件数は両経路・異なる凸数・共有PTの表示箇所を含む延べ件数。共有Team.idでの一本化、固定段落ID・スキルID・履歴eventId、名称/装備のID対応、UI/外部取得文言の分類は次の移行工程で確定する。現時点では `server/` とUI辞書が文章正本のままで、C完了・D〜F実装済みとは扱わない。

未知のfieldや三言語オブジェクトの余分なfieldはエラー。日付・URL・互換識別子・unit等の明示literalは除外理由付きで候補へ記録する。スキル未収集の理由は情報充足メタデータとして保全し、登録済み表示文章とは計上しない。既存訳は空欄を含めて一字も変更せず、全件 `legacy/pending/sourceHash=null` のまま保持する。
