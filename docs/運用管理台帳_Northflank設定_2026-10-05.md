# Northflank設定・運用管理台帳

- 対象: HoYoverse Builder / Sitar-sitar/hoyoverse-builder
- 記録日: 2026-10-05（Asia/Tokyo）
- 記録範囲: 本チャットで設定したNorthflank、関連GitHub App、バックアップ、Pages準備。
- 根拠: 利用者が提示した設定画面・ログ・Workbench結果と、本チャットの設定確認記録。保存時に管理画面を再取得したものではない。変更後は該当行と更新履歴を更新する。
- 状態: 検証環境準備中。新Pagesはローカル実装済み・未公開。Railwayからの最終コピー・本番切替は未実施。
- 役割: 本書は設定と運用状況の管理記録。仕様正本は[段階移行設計書](実装設計書_RailwayからNorthflankへの段階移行_2026-10-03.md)、進捗は[実装ログ Phase 55](実装ログ.md)。

パスワード、接続URLの実値、OAuth secret、session secret、token、証明書本文、DB行データは保存しない。秘密値はNorthflankのEnvironment / Secret設定で管理する。

## 1. 基本情報・管理画面

| 項目 | 設定 / 確認内容 |
| --- | --- |
| Team | Sitar-Sitar's Team |
| Project ID | hoyoverse-builder |
| Environment | Default |
| Region | US - Central (Council Bluffs) |
| プラン表示 | Free |
| API Service ID | hoyoverse-api |
| MySQL Addon ID | hoyoverse-mysql |
| Migration Job ID | hoyoverse-db-migrate |
| GitHub repository | Sitar-sitar/hoyoverse-builder |
| 対象branch | codex/northflank-migration |
| 稼働API / jobの確認済みrevision | 61942f527925b07af43850b15dd501c871c40d19 |

管理画面:

- [Project](https://app.northflank.com/t/sitar-sitars-team/project/hoyoverse-builder)
- [API](https://app.northflank.com/t/sitar-sitars-team/project/hoyoverse-builder/services/hoyoverse-api)
- [MySQL](https://app.northflank.com/t/sitar-sitars-team/project/hoyoverse-builder/addons/hoyoverse-mysql)
- [Migration job](https://app.northflank.com/t/sitar-sitars-team/project/hoyoverse-builder/jobs/hoyoverse-db-migrate)

画面上部に支払方法の期限警告が表示されていた。支払方法の更新実施は未確認。

## 2. API service

| 項目 | 設定 / 状態 | 根拠 / 注意 |
| --- | --- | --- |
| 種類 | Combined service（repository build + deploy） | 設定・Overview画面 |
| Build type | Dockerfile | 設定記録 |
| Build context | / | 設定記録 |
| Dockerfile location | /Dockerfile.northflank | 設定記録 |
| APP_REVISION build argument | 上記40桁revision | image内のhealth revisionで確認 |
| Docker runtime | Dockerfileの標準ENTRYPOINT / CMD | dist/index.jsを実行 |
| API build | busy-treasure-6759、成功 / Deployed | Overview画面 |
| Build resources | nf-compute-400-16（4 vCPU / 16 GB / 16 GB storage） | Overview画面 |
| Runtime resources | nf-compute-20（0.2 shared vCPU / 512 MB / 1 GB storage） | 256 MBから変更、Overview画面 |
| Instances | 1 | Running 1/1 |
| Autoscaling | Freeでは利用不可 | Resources画面 |
| CI / CD | OFF / OFF | 最終Overview画面 |
| Network port | 3000 / HTTP | health check設定画面 |
| 公開URL | https://http--hoyoverse-api--s48krvgv8tjs.code.run | `krvgv8tjs` のvを省略しない |
| 観測された稼働状態 | Running、再起動0、メモリ約149 MB / 512 MB（29%） | 最終Overview時点の測定値。常時値ではない |

### Runtime environment variables

APIの左メニュー **Environment** で確認・変更する。秘密値をスクリーンショットやGitへ転記しない。

| 変数 | 設定値 / 管理方法 | 状態 |
| --- | --- | --- |
| NODE_ENV | production | 設定記録 |
| API_ONLY | true | 設定記録 |
| PORT | 3000 | 設定記録・HTTP probe |
| API_MIGRATION_PREVIEW | true | health応答で確認 |
| API_MAINTENANCE | true | health応答で確認。通常RPC/OAuthは保守停止中 |
| CLIENT_IP_SOURCE | northflank | 2026-10-05 Update & restart後の稼働podで確認 |
| NORTHFLANK_TRUSTED_PROXY_HOPS | 1 | PC/4G・偽装prefix実測後、稼働podで確認 |
| CORS_ORIGINS | https://sitar-sitar.github.io | 設定記録。Pagesのpathは含めない |
| DATABASE_URL | 内部MySQL接続URL、秘密値 | 登録済み。実値は本書へ保存しない |
| DATABASE_SSL_CA_FILE | /secrets/mysql-ca.pem | TLS CA検証接続を確認 |
| GITHUB_APP_CLIENT_ID | 既存GitHub Appの値 | 登録済み。値は非掲載 |
| GITHUB_APP_CLIENT_SECRET | 既存GitHub Appのsecret | 登録済み。値は非掲載 |
| ADMIN_GITHUB_IDS | 既存管理者allowlist | 登録済み。値は非掲載 |
| ADMIN_SESSION_SECRET | 新しいsecret（32文字以上） | 登録確認記録。値は非掲載 |
| ADMIN_FRONTEND_URL | https://sitar-sitar.github.io/hoyoverse-builder/app | 設定記録。検証用ページへの復帰先 |
| GITHUB_APP_CALLBACK_URL | https://http--hoyoverse-api--s48krvgv8tjs.code.run/api/auth/github/callback | 設定記録 |

DATABASE_URLの形式は `mysql://<user>:<password>@<internal-host>:3306/<database>`。Northflankの `MYSQL_CONNECTOR_URI`（`server=...` 形式）はそのままDATABASE_URLとして使わない。資格情報に予約文字があればURLエンコードする。実際のユーザー名・host・database・passwordはMySQLの **Connection details** で確認する。

### Runtime secret file / TLS

- 実行時のsecret fileとして `/secrets/mysql-ca.pem` を配置。
- 使用したCAはLet's Encrypt ISRG Root X1。取得元: https://letsencrypt.org/certs/isrgrootx1.pem 。本文は本書へ保存しない。
- mysql2でCAを指定し `rejectUnauthorized: true` の接続が成功。TLS cipherは `TLS_AES_128_GCM_SHA256` を確認。
- build用fileの登録だけでは実行時に存在しない。APIとmigration jobそれぞれのRuntime Environmentに実行時fileが必要。

### Health checks

| 項目 | Readiness | Liveness |
| --- | --- | --- |
| Type | Readiness Probe | Liveness Probe |
| Protocol | HTTP | HTTP |
| Path | /api/health | /api/health |
| Port | 3000 (http) | 3000 (http) |
| Initial delay | 30秒 | 120秒 |
| Interval | 10秒 | 30秒 |
| Timeout | 5秒 | 5秒 |
| Max. failures | 3 | 3 |
| Success threshold | 1 | 1 |
| 確認結果 | Success / HTTP 200 | Success / HTTP 200 |

health画面で2/2 passing、再起動0を確認。各数値はチャットの設定記録、合格状態は利用者の最終health画面を根拠とする。

確認済みhealth応答:

```json
{
  "ok": true,
  "service": "hoyoverse-builder-api",
  "revision": "61942f527925b07af43850b15dd501c871c40d19",
  "maintenance": true,
  "migrationPreview": true
}
```

`ok=true` とprobe合格はプロセス稼働の確認。DBの最終同期、OAuth、UID照会、本番受付可能の証明ではない。

## 3. MySQL addon

| 項目 | 設定 / 状態 |
| --- | --- |
| MySQL version | 9.7.2（Northflankの選択肢に9.4なし） |
| Runtime resources | 0.2 shared vCPU / 512 MB |
| Storage | 6 GB NVMe |
| Replica / Instances | 1 |
| Network | Private networking only |
| TLS | 有効 |
| 状態 | Running |
| 接続先 | API/jobから内部host。ユーザーのローカル確認はCLI port-forward |
| 練習restore | Railway由来の固定dumpを復元済み |
| migration | 成功、再実行成功、履歴7件 |
| 照合 | 6テーブル、計89行、各テーブルの期待件数/実件数/全列一致件数が一致 |

確認対象テーブル: `__drizzle_migrations`、`admin_auth_exchange_codes`、`lookup_analytics_events`、`site_display_settings`、`translation_feedback`、`users`。行内容は本書へ掲載しない。

ローカルのWorkbench接続は `Northflank-rehearsal`。チャット時点のCLI forward先は127.24.1.1:3306（forwardプロセス稼働時のみ有効、固定本番hostではない）。パスワードはWorkbench接続設定やNorthflankで管理する。

Railway側はMySQL9.4。9.7.2→9.4の逆復元試験は期限を理由とする利用者指示でスキップ（NOT_TESTED）。互換性合格とは扱わない。

## 4. Migration job

| 項目 | 設定 / 状態 | 注意 |
| --- | --- | --- |
| 種類 | repositoryから独立buildするmanual job | Link build serviceに候補が出なかったため |
| Repository / Branch | APIと同じrepository / codex/northflank-migration | 確認済みrevisionは61942f5 |
| Dockerfile / context | /Dockerfile.northflank / / | 設定記録 |
| Build | defiant-road-707、Success | Build logs画面 |
| Build resources | nf-compute-400-16 | job Summary画面 |
| Runtime resources | nf-compute-10（0.1 shared vCPU / 256 MB / 1 GB storage） | job Summary画面 |
| Docker runtime mode | Custom command | job Summary画面 |
| Command | node node_modules/drizzle-kit/bin.cjs migrate | job Summary画面 |
| Schedule | manual（定期実行なし） | 設定記録 |
| 最大実行時間 | 600秒 | Run metadata画面 |
| CI | OFF | job Observe画面 |
| CD | OFF | 2026-10-05 Chromeで変更し、Continuous deployment offを確認 |
| Runtime環境変数 | DATABASE_URL / DATABASE_SSL_CA_FILEをAPIと同じ接続先へ設定 | 実値非掲載 |
| Runtime secret file | /secrets/mysql-ca.pem | job側にも個別配置 |
| APIとの同image digest | 未確認 | 同branch/Dockerfileでも同digestとは限らない |

実行履歴:

| Run suffix | 結果 | 確認内容 |
| --- | --- | --- |
| 6ac27ac5684032835d51da01 | Failed | `/secrets/mysql-ca.pem` が実行時に無くENOENT。Runtime fileへ配置して修正 |
| 6ac27b48684032835d51da08 | Success / Finished | migrations applied successfully |
| 6ac27bbd684032835d51da0f | Success / Finished | 再実行も成功 |

schemaを変更するjobなので、再実行前には対象addon・DB接続先・revision・backup・migration差分を確認する。同じmigrationが再実行成功した事実を、将来のmigrationすべての安全性と読み替えない。

## 5. Backup

| 項目 | 設定 / 状態 |
| --- | --- |
| 手動backup | pre-migration-20261005、作成成功（画面記録: 2026-10-05 00:51 JST） |
| 定期backup type | Snapshot |
| Repeat | Weekly |
| Day / Hour / Minute | Sun / 18 / 00（UTC） |
| 日本時間 | 毎週月曜03:00 JST |
| Retention | 28 days |
| 保存状態 | Backup schedules updated successfullyを確認 |
| 初回の定期実行 | 未確認 |
| Daily | Free accountsでは保存を拒否された。登録済みとは扱わない |

MySQL左メニュー **Backups** で実際のrestore pointを確認、**Backup schedules** で予定を管理する。予定の保存成功だけでbackup取得成功とは扱わない。定期実行後に作成日時・成功状態・保持対象を確認する。

## 6. GitHub App / Pages関連

| 項目 | 設定 / 状態 |
| --- | --- |
| GitHub App | Hoyoverse Builder Admin（既存App） |
| 新Redirect URI | https://http--hoyoverse-api--s48krvgv8tjs.code.run/api/auth/github/callback を追加保存 |
| 旧Railway callback | 維持 |
| App Homepage | 既存値を維持（変更していない） |
| Webhook / Setup URL | 本移行では変更対象外、現値の再確認なし |
| 旧Pages | https://sitar-sitar.github.io/hoyoverse-builder/ |
| 新Pages予定 | https://sitar-sitar.github.io/hoyoverse-builder/app/ |
| 新Pages実装 | f3b7994へcommit、移行branchへ保存。公開未実施 |
| GitHub Actions移行変数 | 2026-10-05に下記3変数を登録・再取得確認。MODE=legacy |

Pages公開時に必要なActions変数:

- `HOYOVERSE_PAGES_MODE`: 準備時legacy、両API受入後parallel。forward/rollbackは対応する切替工程でのみ使用。
- `HOYOVERSE_API_BASE_URL`: 旧RailwayのHTTPS origin。
- `HOYOVERSE_NORTHFLANK_API_BASE_URL`: 上記NorthflankのHTTPS origin。

新旧Pagesを同じmain SHAから生成し、稼働対象APIも同じSHAのrevisionを要求する。[Pages実装後メモ](実装後メモ_Northflank検証用Pages_2026-10-05.md)の公開前ゲートを参照。

## 7. 次回確認・運用変更チェックリスト

- [x] 利用者が通常DBユーザーのパスワード変更SQL成功を確認し、API/job/Workbenchの3か所の更新完了を報告。秘密値は非記録。更新後の実DB接続はWorkbench/API/jobで確認済み（下記履歴参照）。旧資格情報の拒否は未確認。
- [x] Migration jobのCDをOFFに変更。CIもOFF、手動job。新buildの自動deploy停止を確認。
- [ ] APIとjobの同image digest運用、または設計との差分の採否を確定する。
- [x] Northflank LBをPC/4G・偽装prefixで実測。CLIENT_IP_SOURCE=northflank / NORTHFLANK_TRUSTED_PROXY_HOPS=1を利用者がUpdate & restart。稼働podの2項目だけを確認済み。
- [ ] 定期backupの初回成功を確認する。
- [ ] 両APIの公開予定revision、CORS、preview flagを確認する。
- [ ] 公開検証時に限りNFのAPI_MAINTENANCE=false、API_MIGRATION_PREVIEW=trueへ変更し、RPC/OAuthを確認する。通常のAPI/job CI/CDはOFFのまま管理する。
- [ ] 新Pages公開後、実ブラウザOAuth・UID照会・管理変更・非管理者書き込み停止・新旧保存状態分離を受入する。
- [ ] 最終停止コピー・全行hash/DB objects照合・正規受付再開・forwardは別工程として実施記録を残す。

設定変更時は、対象service/addon/job、変更前後の非秘密値、時刻、実行者、backup、revision、確認結果を更新履歴に追記する。秘密値は「更新済み / 未確認」のみ記録する。

## 更新履歴

| 日付 | 内容 | 確認範囲 |
| --- | --- | --- |
| 2026-10-05 | 利用者の依頼で管理台帳を新規保存。API/MySQL/job/backup/GitHub App/Pages準備と残項目を整理 | 本チャットの利用者画面・設定確認記録。保存時のlive再取得なし |

### 2026-10-05 Chromeによるlive確認

- APIとmigration jobのCI/CDはOFF/OFF。jobのCDをONからOFFへ変更し、Continuous deployment offを確認。
- 保守・preview・socketモードを維持し、同じ61942f5 imageへ一時診断CMDを設定。health GETだけを対象に、実IPを保存せずプロセス内HMAC比較を実施（通常ログへの出力なし）。
- 同一回線でbaseline 2回、XFF単一偽装、複数偽装、X-Real-IP偽装の5要求が200。baseline XFFは1要素。偽装XFFは維持され、その右端へbaselineと同じ接続元が追加された。socketは要求間で変動。X-Real-IPは偽装値が届くため採用しない。
- 第二測定でPC baselineとモバイル回線のXFFが各1要素かつ異なるHMAC値であることを確認。利用者の4G画面でもhealthのok/revision/maintenance/previewを確認。偽装prefixは信頼しない右端1ホップを採用する。設定はCLIENT_IP_SOURCE=northflank / NORTHFLANK_TRUSTED_PROXY_HOPS=1。環境変数画面のContinueは秘密情報全体の表示リスクで自動承認拒否、利用者が2項目をUpdate & restart。再起動後のpodで非秘密の2項目だけを出力し反映を確認。
- 診断後、Docker runtime modeをDefault configurationへ戻して保存。秘密値・IP・HMAC値は台帳に記録しない。

- GitHub Actions変数3件を登録・再取得確認: HOYOVERSE_PAGES_MODE=legacy、旧API URL=Railway、新API URL=Northflank。parallelへはまだ切り替えていない。

- IP設定反映後のhealthはHTTP 200、revision=61942f527925b07af43850b15dd501c871c40d19、maintenance=true、migrationPreview=true。

- 2026-10-05: 利用者が資格情報変更と3接続先更新を完了。更新後API health HTTP 200、revision=61942f5、maintenance=true、migrationPreview=true。healthのみではDB認証成功を証明しない。

### 2026-10-05 資格情報更新後の接続確認

- Workbenchは利用者が再接続後SELECT 1成功を確認。API podは利用者画面でconnection_ok=1を確認。
- Chromeでmigration jobのCMDを一時的なmysql2のSELECT 1へ変更し手動実行。CAファイルを指定しrejectUnauthorized=true。2026-10-05 12:16 JST、Run ID bf18a162-b652-41ff-9042-c48141cd948f、connection_ok=1、exit code 0、Success（17秒）を確認。build defiant-road-707、revision 61942f5。
- 実行後CMDをnode node_modules/drizzle-kit/bin.cjs migrateへ復元保存し、Overviewから再確認。CI/CD OFFを維持。今回schema migrationは実行していない。旧資格情報拒否とAPI/job同image digestは未確認。

### 2026-10-05 image digest照合と共通Build準備

- Chromeのビルドログで既存API busy-treasure-6759のmanifestを確認: sha256:a3fc0e5f3748db65321e5d4d5289c44845dd8d40449e1d5b4de92f7910f09919。
- 既存job defiant-road-707: sha256:3fef057c0e49d7fc894b143bb370f1dd8065f817385b4778e85710a2c613ae51。同じ61942f5 revisionだが別image。設計の同digestゲートは未達。
- 公式仕様は既存jobのimage source変更不可。共通Build service hoyoverse-release-buildをDefault/US Centralで作成。repositoryは既存、Dockerfile.northflank、context /、CI OFF、External triggers、build rulesなし、4 vCPU/16 GB/16 GB。runtime/DB secretsなし。
- 手動build nervous-respect-4354成功。対象Git SHA/APP_REVISION=1dae093ae41ff34bd24a20a03b53336b478eb034。manifest sha256:c68e06f4a2aea12d83081c257864d17e7527cb052fe25e69e2ad505f7898e9d6。将来build時は引数APP_REVISIONも対象SHAへ合わせる。
- 手動job hoyoverse-db-migrate-sharedを作成、共通Buildのnervous-respect-4354を固定。CD OFF、scheduleなし、Run on image change Never、retry 0、time limit 600、0.1 vCPU/256 MB/1 GB。初期CMDはnode -e 'console.log("SETUP_PENDING_DB_CHECK")'。実行なし。
- 新jobのDATABASE_URL、DATABASE_SSL_CA_FILE、CA secret fileは未登録。利用者にNorthflank画面で既存jobと同じ3項目を登録するよう依頼。秘密値はチャット/文書へ送らない。
- APIは既存Combined serviceのまま。新job接続確認、API側の共通image利用構成（既存URL/設定維持方法）の確定、両方同digestの実行証跡が残る。新Build作成を同digestゲート達成とは扱わない。既存API/jobのCI/CD OFF、保守/previewを維持。
- 仕様参照: https://www.northflank.ai/docs/v1/application/run/change-deployment-source / https://northflank.com/docs/v1/application/run/run-an-image-once-or-on-a-schedule
### 2026-10-05 新shared jobの接続テスト（認証拒否）

- 利用者の設定更新報告後、Chromeでnervous-respect-4354を使うmysql2 SELECT 1を実行。2026-10-05 18:30 JST、Run ID 8fed3719-4965-429c-929f-cd635a877f7a、19秒、Failed、exit code 1、DB_CHECK_FAILED:ER_ACCESS_DENIED_ERROR。
- DATABASE_URLの処理とCAファイル読み込みを通過しDB認証で拒否。具体的な原因（資格情報、接続先、ユーザーhost制限等）は未確定。既存jobの接続成功を新jobの成功とは扱わない。
- テストCMDから初期CMD node -e 'console.log("SETUP_PENDING_DB_CHECK")'へ復元保存・再確認、CD OFF。migration実行なし。利用者へ成功済み既存jobのDATABASE_URLを新jobへ完全コピーして照合するよう依頼。秘密値非記録。
### 2026-10-05 新shared jobの再テスト成功

- 利用者が成功済み既存jobからDATABASE_URLをコピーし保存したと報告。Chromeで今回RunだけCMDをmysql2 SELECT 1へ上書きし、通常設定は変更せず再実行。
- 2026-10-05 18:36 JST、Run ID d8cc2b88-6c09-4183-95ce-e12fa9cb13b9、15秒、Success、connection_ok=1、exit code 0。CAファイル指定/rejectUnauthorized=trueでDB接続成功。共通image nervous-respect-4354、revision 1dae093。
- Overview再取得で初期CMD SETUP_PENDING_DB_CHECKとCD OFFを確認。schema migrationは今回も実行していない。前回の認証拒否はURL再設定後に解消したが、秘密値の具体的差分は取得・記録していない。
- APIは既存Combined imageのまま。APIとshared jobの同digest運用への変更・実行確認は残る。