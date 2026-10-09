# Northflank本番運用ガイド

更新日: 2026-10-09。詳細・実取得証拠は[管理台帳](運用管理台帳_Northflank設定_2026-10-05.md)、工程は[実装ログ Phase 55](実装ログ.md)、仕様は[移行設計書](実装設計書_RailwayからNorthflankへの段階移行_2026-10-03.md)を参照する。

## 現行構成

| 対象 | 本番構成 |
| --- | --- |
| Pages | https://sitar-sitar.github.io/hoyoverse-builder/app/ |
| 旧Pages入口 | 既知7ルートから対応appルートへ転送 |
| API | https://http--hoyoverse-api--s48krvgv8tjs.code.run |
| API service | hoyoverse-api、Dockerfile.northflank、main、CI/CD ON、1 instance、Recreate |
| API資源 | 0.2 shared vCPU / 512 MB / 1 GB |
| DB | hoyoverse-mysql、MySQL 9.7.2、6 GB、Private / TLS |
| Migration | hoyoverse-db-migrate-shared、manual / CD OFF。現保存imageは旧P1版。次のmigration実行前にAPIと同manifestへ固定する |
| 正式revision | 機能受入: 597e13322bf34b76e9642ee61b6773665f09e2bf（Phase 57）。文書を含む後続リリースはAPI healthとGitHub Pages deploymentの同一main SHAを正とする |
| 通常受付 | API_MAINTENANCE=false / API_MIGRATION_PREVIEW=false |
| CORS | https://sitar-sitar.github.io（pathを含めない） |
| Pages変数 | HOYOVERSE_PAGES_MODE=forward、HOYOVERSE_NORTHFLANK_API_BASE_URLは上記API origin |
| 定期backup | Snapshot、日曜18:00 UTC＝月曜03:00 JST、保持28日 |

DATABASE_URLは内部MySQL接続URL、DATABASE_SSL_CA_FILE=/secrets/mysql-ca.pem。APIとJobそれぞれに実行時CAファイルを配置する。秘密値を文書・ログ・Issueへ保存しない。

CLIENT_IP_SOURCE=northflank / NORTHFLANK_TRUSTED_PROXY_HOPS=1は、この配備でPC・4G・偽装prefixを実測した値。別環境へ無条件に流用しない。認証は[GitHub App認証ガイド](github-admin-auth.md)を参照する。

## 次のリリース

1. PRでテスト・型検査・APIビルドを確認し、対象main SHAを確定する。
2. Northflankで対象mainをビルドする。APP_REVISION build argumentは動的参照 ${NF_GIT_SHA} を維持し、imageへ対象40桁SHAが取り込まれることを確認し、成功したimageをAPIへ配備する。
3. migrationが必要なら事前backup・差分・停止範囲を確認する。shared JobをAPIと同じmanifest digestへ固定し、Run commandを個別指定する。現在の保存コマンドは準備確認用で、Run開始だけではmigrationにならない。既存migration適用コマンドは pnpm exec drizzle-kit migrate。本番Restoreを通常リリースへ混ぜない。
4. healthのSHA、通常受付フラグ、DB/TLS、CORS、RPC、probesを確認する。
5. Pages workflowを対象mainで実行し、forward生成・同SHAゲート・公開画面を確認する。API準備前にworkflowが失敗した場合は、API準備後に再実行する。

文書だけの更新も通常PRのCIと同SHA自動配備ゲートを通す。2026-10-09開始時に、skip付き文書コミット413f96dがAPIへ配備されPagesは94a3627のままと実測した。ignore設定だけを根拠に再配備が起きないとは保証しない。最終main、API health、Pages deploymentを照合する。

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

監視と運用記録の更新もAPI/Pagesのrevision差が生じないよう通常の同SHA配信ゲートを通す。PRの通常検証は実施し、merge後に監視workflowを明示dispatchして動作確認する。アプリコード更新の公開時にはこのskipを使わず、通常の同SHA配信ゲートを通す。

仕様参考: [GitHub schedule制限](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#schedule)。無料構成で追加Addonを作らない。

## 2026-10-08 観測終了と移行完了

利用者指定で既存観測により判定。[完了判定](移行完了判定_Northflank_2026-10-08.md)参照。24時間連続観察は未達・追加免除を保持し、Phase55は本番運用継続Goで完了。GitHub monitorはdisabled_manually、翌朝確認automationはPAUSED。追加観測は行わず内部probesを維持。旧Railway廃止は別途指示後。


## Phase 56 配備契約（2026-10-08）

APP_REVISIONは固定値から動的NF_GIT_SHA参照へ変更した。runtime側に同キーの上書きはない。手動buildのimage内revisionとhealth・build commitの一致を確認する。APIのCI/CDは2026-10-08にONへ変更。runtime NF_DEPLOYMENT_SHAとAPP_REVISION・公開a41823fの一致を対象2変数だけの判定で確認した。Phase 57で通常main更新による自動build→同SHA Pages公開を受入済み。

forward Pagesは生成前に同SHAのhealth/CORS/通常受付を最大10分待つ。各HTTPは最大5秒、再試行間隔10秒。既存pages.mjs --verifyを保持し、artifact公開直前は単発でSHAを再検査する。不一致・検査失敗なら旧Pagesを保持する。初回の小数timeout不具合はPR #113で整数化し、回帰を追加した。

shared migration Jobは固定registry digest、manual、Run on image change=Never。Phase 56はDB変更がなくJobは実行しない。次にschema変更を行うときはAPIと同digestへ揃える専用の停止・backup・migration手順が必要。内部probesを継続し、停止済みのGitHub monitor/automationを再開しない。

切戻しはAPI CI/CDを停止した状態で直前imageと対応Pagesを戻す、またはrevert PRを同SHAで再ビルド・配備する。Northflank DBを復元しない。旧Railway URLへの切替だけで復旧した扱いにしない。

### 自動配備設定ON（2026-10-08）

最新build loyal-cats-2016 / a41823fを確認後、CIとCDをONへ変更し再取得で両方1を確認。既存pod xgm5s / probes 2/2 / restart 0を維持。main追随、commit ignore flags有効、migration Job manual/Neverを保持する。ダミー更新は行わず、次の許可済みアプリ更新で自動配備全経路を受入する。設定ONと全経路受入済みを混同しない。

### 認証情報更新後の現行状態（2026-10-08）

GitHub App secret・管理session鍵・DB通常ユーザーpasswordを利用者が更新。新旧DB一時併用でAPI/shared Job/Workbenchを更新後、旧passwordを破棄し再接続・管理再ログイン確認完了。秘密値は記録しない。API/Pagesは94a3627で同期（Pages run37762389403）。Jobは実行せず接続設定更新のみ。詳細は管理台帳・実装ログの完了記録。


## Phase 57自動配備の実測

2026-10-09 Phase 57本番受入完了。PR #117をmain `597e13322bf34b76e9642ee61b6773665f09e2bf`へマージ。Northflank自動build `gusty-coat-8154`、pod `hoyoverse-api-c8d45ddcb-cx6wc` Running・probes 2/2・restarts 0。Pages push run `37933279077`／deployment `6961246301`成功、API/Pages同SHA。全256名の公開reference・履歴・カタログが検証済み実装と完全一致し、比較前後のhealthも同SHA。Chromeで対象2名の三言語・関連別欄・更新履歴を確認。

手動build・deploy・Pages dispatchは不要だった。APIはRecreate中に一時503となり約3分以内に新SHAで正常化した。監視再開・24時間観察、Job実DB接続は本フェーズの完了条件に含めず、過去の監視revisionを現在の受入証拠として使わない。
