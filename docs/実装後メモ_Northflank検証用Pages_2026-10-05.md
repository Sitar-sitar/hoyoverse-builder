# Northflank検証用Pages 実装後メモ（2026-10-05）

> 本書は表記された記録日時の検証証拠です。Railway・未公開などの記載は当時の状態を示します。現行のNorthflank構成・受付状態は[本番運用ガイド](northflank-production.md)と[管理台帳](運用管理台帳_Northflank設定_2026-10-05.md)を参照してください。

正本: [段階移行設計書 §5.6〜5.9](実装設計書_RailwayからNorthflankへの段階移行_2026-10-03.md)。Phase 55進行中。基準commit 61942f527925b07af43850b15dd501c871c40d19。本変更はローカル実装、未commit/未push/未公開。

## 実装

- Viteは旧base `/hoyoverse-builder/` と新base `/hoyoverse-builder/app/` を許可。出力はrepo内の固定directoryに限定。未指定時の従来baseとdist/publicを維持。
- 新previewに三言語の案内、旧サイトへのリンク、robots noindex。feedbackは認証済み管理者のみ送信でき、直接form submitも防ぐ。既存サーバー側preview制限と併用する。
- admin token、ログイン復帰先、表示cache/preview、UID履歴、補助user情報は新baseの固定suffixで分離。旧keyを新から読まない。言語/テーマは従来通り共通。新からManus tokenを使用/削除しない。
- scripts/pages.mjsは4モードのartifactを毎回全体再生成。旧/新のJS・CSS・APIを分離し、既知7入口を生成。App.tsxのルートに漏れがあれば失敗。未知pathは移行転送しない。parallelのroot404はURLのbaseに応じて一方のSPAだけを起動する。
- forward/rollbackの転送先は同一origin固定baseと既知routeのみ。query/fragmentを破棄し、認証コードやUIDを引き継がない。loop防止・JS無効時の案内を用意。
- workflowはmain限定、単一Pages concurrency（実行中取消なし）。固定Railway URL fallbackを廃止。対象APIのみのHTTPS URL、CORS、ok、maintenance=false、migrationPreview、公開SHAとのrevision一致、guideHistory RPCを公開前に確認する。

## ローカル実行

PowerShellで移行worktreeをカレントにして実行する。これは生成だけでPagesへ公開しない。

```powershell
$env:HOYOVERSE_PAGES_MODE = 'parallel'
$env:HOYOVERSE_API_BASE_URL = 'https://hoyoverse-builder-api-production.up.railway.app'
$env:HOYOVERSE_NORTHFLANK_API_BASE_URL = 'https://http--hoyoverse-api--s48krvgv8tjs.code.run'
node scripts/pages.mjs
node --test scripts/pages.test.mjs
```

生成先はdist/pages-artifact（旧root、新app/）。公開workflowでは `node scripts/pages.mjs --verify` を使用する。ローカルの検証省略buildは公開ゲート合格の証明にならない。

## 検証結果

型検査、API build、parallelの2build成功。全76ファイル547テスト、Pages scriptの5テスト成功。旧JSはRailwayだけ、新JSはNorthflankだけを含み、新HTMLだけnoindex。Chromeで新トップ→feedback遷移と再読込、旧リンク、送信disabledと新baseの未知pathで404→新トップへ戻る動作を確認。管理者のpreview送信許可はUIテスト、API拒否は既存サーバーテストで確認。

生成物の4モード検査・転送コード実行はローカルテスト。公開URLのOAuth、UID照会、管理変更、forward/rollbackの実Chrome受入は未実施。APIは現在maintenance=trueなのでデータ通信は検証できない。localhostは本番CORS許可対象でもない。

## 公開前に必要な設定・受入

1. 移行変更をmainへ反映する前にGitHub Actions変数 `HOYOVERSE_PAGES_MODE=legacy` と旧 `HOYOVERSE_API_BASE_URL` を明示登録。旧新とも公開予定SHAのAPIを準備する。SHAがずれると公開workflowは停止する。
2. NF LBホップ実測・第二回線/偽装試験を行い、socket診断設定を正式公開へ残さない。job CD OFF、APIとjobの同digest運用、DB資格情報rotationも確認する。
3. NF `API_MAINTENANCE=false`、`API_MIGRATION_PREVIEW=true` とし、新API URL変数を登録。両APIゲート合格後だけPages modeをparallelへ変更し、同じmain SHAでworkflowを実行する。
4. 公開された `/app/` で三言語、直リンク/再読込、OAuth、管理変更、UID、保存状態分離、非管理者投稿停止を検証する。

最終停止コピー・NF正規受付・forwardは別の受入工程。検証用ページの実装完了を本番切替完了とは扱わない。MySQL9.7.2→9.4逆復元は利用者指定でNOT_TESTED。逆コピーをせずURLだけ旧DBへ戻さない。

Obsidianは更新していない。repository内の実装ログ・索引・本メモで進捗を同期した。
