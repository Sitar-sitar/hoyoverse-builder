# Northflank本番運用ガイド

更新日: 2026-10-07。詳細・実取得証拠は[管理台帳](運用管理台帳_Northflank設定_2026-10-05.md)、工程は[実装ログ Phase 55](実装ログ.md)、仕様は[移行設計書](実装設計書_RailwayからNorthflankへの段階移行_2026-10-03.md)を参照する。

## 現行構成

| 対象 | 本番構成 |
| --- | --- |
| Pages | https://sitar-sitar.github.io/hoyoverse-builder/app/ |
| 旧Pages入口 | 既知7ルートから対応appルートへ転送 |
| API | https://http--hoyoverse-api--s48krvgv8tjs.code.run |
| API service | hoyoverse-api、Dockerfile.northflank、main、CI/CD OFF、1 instance、Recreate |
| API資源 | 0.2 shared vCPU / 512 MB / 1 GB |
| DB | hoyoverse-mysql、MySQL 9.7.2、6 GB、Private / TLS |
| Migration | hoyoverse-db-migrate-shared、APIと同じimage manifestへ固定、manual / CD OFF |
| 正式revision | b5374e384beaf638bbf996c46e1411fb65be027f（P1修正公開、2026-10-07確認） |
| 通常受付 | API_MAINTENANCE=false / API_MIGRATION_PREVIEW=false |
| CORS | https://sitar-sitar.github.io（pathを含めない） |
| Pages変数 | HOYOVERSE_PAGES_MODE=forward、HOYOVERSE_NORTHFLANK_API_BASE_URLは上記API origin |
| 定期backup | Snapshot、日曜18:00 UTC＝月曜03:00 JST、保持28日 |

DATABASE_URLは内部MySQL接続URL、DATABASE_SSL_CA_FILE=/secrets/mysql-ca.pem。APIとJobそれぞれに実行時CAファイルを配置する。秘密値を文書・ログ・Issueへ保存しない。

CLIENT_IP_SOURCE=northflank / NORTHFLANK_TRUSTED_PROXY_HOPS=1は、この配備でPC・4G・偽装prefixを実測した値。別環境へ無条件に流用しない。認証は[GitHub App認証ガイド](github-admin-auth.md)を参照する。

## 次のリリース

1. PRでテスト・型検査・APIビルドを確認し、対象main SHAを確定する。
2. Northflankで対象mainをビルドする。APP_REVISION build argumentをその40桁SHAへ揃え、成功したimageをAPIへ配備する。
3. migrationが必要なら事前backup・差分・停止範囲を確認する。shared JobをAPIと同じmanifest digestへ固定し、Run commandを個別指定する。現在の保存コマンドは準備確認用で、Run開始だけではmigrationにならない。既存migration適用コマンドは pnpm exec drizzle-kit migrate。本番Restoreを通常リリースへ混ぜない。
4. healthのSHA、通常受付フラグ、DB/TLS、CORS、RPC、probesを確認する。
5. Pages workflowを対象mainで実行し、forward生成・同SHAゲート・公開画面を確認する。API準備前にworkflowが失敗した場合は、API準備後に再実行する。

文書だけのmain更新でもPagesのSHAゲートは変わる。公開後観察中の文書整理は移行ブランチで保存し、次のAPI/Pages同SHAリリースで反映する。

## 残っている受入作業

本番公開、3ゲームUID照会、OAuth、feedback保存、表示設定保存→API再起動→保持→元設定への復帰は確認済み。24時間観察は2026-10-06 22:26 JSTに再開始したため、欠落・platformログ・保存状態を含めて判定する。

公開後backup post-forward-production-20261006は取得成功。復元試験は未実施。旧DB期限切れ後の最終hash照合、およびMySQL 9.7.2→9.4逆復元はNOT_TESTED。既存dump採用は利用者の「移行開始後に更新していない」という申告と承認による復旧であり、旧DB最終照合PASSとは扱わない。

## Railway記載の扱い

| 残す対象 | 理由 |
| --- | --- |
| 移行設計・過去の実装ログ・検証メモ | 当時の構成・結果・例外を追跡するため。現在の設定として読まない |
| railway.toml | 旧配備の履歴。Northflankの現行設定ではない |
| scripts/pages.mjsのlegacy/parallel/rollback、旧API変数 | 移行モード互換性。forwardの実アプリはNFへ接続する |
| IP処理のRailway識別、旧revision環境変数fallback | 旧環境互換コード。現行NFの実測設定とは分離 |

旧Railway API/MySQLは期限切れでOffline。DB/volumeと旧callbackは保持する。課金・削除は実施していない。受付再開後はNF DBが正本で、Pages変数だけを旧URLへ戻しても安全なrollbackにはならない。逆コピー・全行照合・旧API再開が必要であり未検証。廃止は観察・復元ゲートと別の利用者判断による。

P1修正の配備・検証は[修正記録](修正設計書_P1セキュリティ修正_2026-10-06.md)を参照。API/Job manifestは29202fcd49f540f7b85ca9eaadbdce1ebb914bd31ed99169d819f7631423f414。旧revisionの観察期間は新revisionの24時間実測として扱わない。

2026-10-07更新: 公開後バックアップ post-publication-local-restore-20261007（Native dump/gzip）を取得し、独立したローカルMySQL 9.7.2へ復元。6テーブル104行、全CREATE TABLE/INSERT文が再dumpと完全一致。Native dumpの復元試験PASS。Disk snapshotの復元はNOT_TESTEDで区別する。詳細は管理台帳の2026-10-07節。移行全体は修正版b5374e3の24時間観察とplatform/永続化の継続確認が完了するまで未完了。

## PCに依存しない外部監視（2026-10-07追加）

GitHub Actions `Monitor Northflank production`（`.github/workflows/monitor-production.yml`）は公開API `/api/health` をUTC毎時2分から5分間隔で読み取り、手動実行も可能。Node 22、contents readのみ、timeout 3分。DB・OAuth・Registryの秘密情報は不要。HTTP 200、ok=true、本番revision、maintenance=false、migrationPreview=false、Pages OriginへのCORSを全て検証する。異常はrun失敗としてActionsの通知設定に従って通知される。

結果は秘密値・応答本文を含まない `production-health-<runId>-<attempt>` artifactとして7日保存する。期待revisionは現在の公開API `b5374e384beaf638bbf996c46e1411fb65be027f`。次回API公開時にはRepository variable `HOYOVERSE_MONITOR_REVISION`を公開SHAへ更新し、手動runで一致を確認する。新たなmain commitや監視コードのSHAを本番APIのSHAとは扱わない。

GitHub scheduleは開始遅延・欠測があり、実測時刻から監視間隔を検証する。schedule設定/初回PASSだけでは24時間連続観察PASSとしない。PC停止中の欠測は健康判定と別に記録する。公開リポジトリの60日無活動でscheduleが無効になる制限もある。機械が停止してもNorthflankの内部probesは稼働するが、外部応答の連続証明を代替しない。

監視と運用記録だけの公開ではAPI/Pagesを再配信しない（merge commitに `[skip ci]` を付け、pushによるPages配信をスキップする）。PRの通常検証は実施し、merge後に監視workflowを明示dispatchして動作確認する。アプリコード更新の公開時にはこのskipを使わず、通常の同SHA配信ゲートを通す。

仕様参考: [GitHub schedule制限](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#schedule)。無料構成で追加Addonを作らない。

初回公開証跡: PR #108 / merge ef85c05 / workflow state active。2026-10-07 08:11 JST 手動 [Run 37545139817](https://github.com/Sitar-sitar/hoyoverse-builder/actions/runs/37545139817) は成功し、取得artifactで全health条件一致。最初のschedule自動実行は記録時点で未確認。
