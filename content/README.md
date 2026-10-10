# 翻訳準備用コンテンツ

正本は `docs/実装設計書_翻訳漏れを防ぐデータ構造と保守基盤_2026-10-10.md`。

Phase 59の初期段階では共通型・検査・旧データの基準保存を実装する。現行データの文章正本はまだ `server/` と画面辞書にあり、ここへ移行済みとは扱わない。英語・中国語の新規生成、既存訳の修正、承認は行わない。

`coverage/skillRequirements.ts` は期待する種類を定義するだけで、スキル情報の収集済み・完全性を表さない。実際のスキルID一覧・説明・数値は個別確認が終わるまでnotCollected。

## 初期段階で利用できる検査

- `pnpm content:baseline compare`: main dbd66e8の全256キャラ・図鑑・UID側ガイド・凸・共有PT/関連編成・履歴のdigestと比較する。UID照会は実行しない。
- `pnpm exec vitest run server/content`: 状態遷移・原文変更検知・欠落・全文章の列挙・日本語基準の回帰を検証する。
- `pnpm check`: content正本とCLIも含む型検査。

`baseline.v1.json` は翻訳正本ではなく、移行前の挙動保全用。既存baselineが違えばsnapshotは上書きしない。データ更新を正当化するためにbaselineを再作成しない。

`content:check/report/export/ready/generate`、文章正本の移行、公開言語制御・画面接続は後続段階で追加する。現在のcore resolver/visitorを提供しただけで、サイト全体の翻訳管理へ接続済みとは扱わない。テスト内の英文は状態検証用の架空fixtureであり、ゲーム情報の翻訳ではない。
