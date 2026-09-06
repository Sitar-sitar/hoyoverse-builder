# HoYoverse Builder

崩壊：スターレイル・原神・ゼンレスゾーンゼロ ビルド支援サイト。

- Production: https://sitar-sitar.github.io/hoyoverse-builder/
- API: Railway (`hoyoverse-builder-api-production.up.railway.app`)、`server/` を `API_ONLY=true` でデプロイ

## Deployment architecture

- `main` push → `.github/workflows/deploy-pages.yml` が test/typecheck/API build/Railway health check/frontend build を実行し、GitHub Pages (Actions deploy) へ公開
- PR → `.github/workflows/validate-api.yml` が同等のビルド検証を実施
- フロントエンドの GitHub Pages base は `vite.pages.config.ts` の `base` に一本化

## 移行元

このリポジトリは `Sitar-sitar/Web` の `hoyoversebuilder` ブランチを履歴ごと分離したものです。旧URL (`https://sitar-sitar.github.io/Web/hoyoverse/`) は `Sitar-sitar/Web` 側で本リポジトリへリダイレクトされます。
