# HoYoverse Builder

崩壊：スターレイル・原神・ゼンレスゾーンゼロ ビルド支援サイト。

- [本番サイト](https://sitar-sitar.github.io/hoyoverse-builder/app/)
- API: [Northflank health](https://http--hoyoverse-api--s48krvgv8tjs.code.run/api/health)
- 公開版descriptor: https://sitar-sitar.github.io/hoyoverse-builder/release.json （Pages公開ごとに生成）
- 構成: フロントエンドはGitHub Pages、APIはNorthflank（API_ONLY=true）、DBはNorthflank MySQL（Private / TLS）。旧入口の既知ルートは対応するappルートへ転送します。

## 開発・検証

`pnpm install --frozen-lockfile` で依存関係を導入します。

| コマンド | 内容 |
| --- | --- |
| `pnpm dev` | 開発サーバー（DATABASE_URL未設定ならDBなしで起動） |
| `pnpm check` | 型検査 |
| `pnpm test` | テスト（Vitest） |
| `pnpm content:check` | 日本語正本・UI文言gateの構造検査 |
| `pnpm content:backlog --format json\|md [--baseline <file>]` | 情報不足・外部名称境界の作業一覧（読み取り専用） |
| `pnpm build:api` | APIビルド |

[環境変数例](.env.api.example)は本番APIの雛形です。productionではDATABASE_URLにqueryを付けず、DATABASE_SSL_CA_FILEが必須です（不備はHTTP受付前に起動を止めます）。資格情報はNorthflankの秘密設定で管理し、Gitへ保存しません。

## デプロイ

手順の正本は[本番運用ガイド](docs/northflank-production.md)です（現行運用・通常更新・migrationを伴う更新・切戻し）。

文書上の最終受入（2026-10-09 Phase 57）では、mainへのマージでNorthflank APIが自動配備され、deploy-pages.ymlがAPIの対象SHA一致を待ってからPagesを公開します。現在の設定値は運用ガイドの「現行運用」表で確認日と未確認項目を区別しています。PRはvalidate-api.ymlで検証します。

関連: [設計書インデックス](docs/設計書インデックス.md)、[実装ログ](docs/実装ログ.md)、[設定台帳](docs/運用管理台帳_Northflank設定_2026-10-05.md)、[管理者認証](docs/github-admin-auth.md)、[Northflank移行完了判定](docs/移行完了判定_Northflank_2026-10-08.md)。

## 移行履歴

RailwayからNorthflankへ移行しました（2026-10-08 完了判定、24時間連続観察は未達・追加免除の明示例外あり）。過去の検証記録とrailway.tomlは履歴・互換性確認用に保持し、現行配備には使用しません。

本リポジトリはSitar-sitar/Webのhoyoversebuilderブランチを履歴ごと分離したものです。旧URL https://sitar-sitar.github.io/Web/hoyoverse/ はWeb側で本リポジトリへ転送されます。
