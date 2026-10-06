# HoYoverse Builder

崩壊：スターレイル・原神・ゼンレスゾーンゼロ ビルド支援サイト。

- [本番サイト](https://sitar-sitar.github.io/hoyoverse-builder/app/)
- API: [Northflank health](https://http--hoyoverse-api--s48krvgv8tjs.code.run/api/health)
- フロントエンドはGitHub Pages、APIはNorthflank（API_ONLY=true）、DBはNorthflank MySQL（Private / TLS）。旧入口と既知7ルートは対応するappルートへ転送します。

## 開発・検証

pnpm install --frozen-lockfileで依存関係を導入し、pnpm devで開発、pnpm checkで型検査、pnpm testでテスト、pnpm build:apiでAPIをビルドします。[環境変数例](.env.api.example)は本番APIの雛形です。資格情報はNorthflankの秘密設定で管理し、Gitへ保存しません。

## デプロイ

Northflank APIと手動migration Jobを同じリリースimageへ揃え、healthのrevisionをPagesの対象main SHAと一致させます。APIのCI/CDは現在OFFのため、mainへの反映だけではAPIは更新されません。

deploy-pages.ymlはテスト・型検査・APIビルド・稼働APIのrevision/CORS/RPC確認・フロントエンド生成を行い、Pagesへ公開します。PRはvalidate-api.ymlで検証します。現在のPagesモードはforward、接続先はHOYOVERSE_NORTHFLANK_API_BASE_URLです。旧HOYOVERSE_API_BASE_URLは互換モード用に保持しています。

[本番運用ガイド](docs/northflank-production.md)、[設定台帳](docs/運用管理台帳_Northflank設定_2026-10-05.md)、[管理者認証](docs/github-admin-auth.md)を参照してください。2026-10-06に本番公開済みで、24時間観察と公開後backupの復元検証は継続中です。

## 移行履歴

RailwayからNorthflankへ移行しました。過去の検証記録とrailway.tomlは履歴・互換性確認用に保持し、現行配備には使用しません。

本リポジトリはSitar-sitar/Webのhoyoversebuilderブランチを履歴ごと分離したものです。旧URL https://sitar-sitar.github.io/Web/hoyoverse/ はWeb側で本リポジトリへ転送されます。
