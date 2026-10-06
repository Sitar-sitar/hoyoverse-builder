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
### 2026-10-05 共通image APIの追加時にFree上限を確認

- ChromeでDeployment serviceの新規作成画面を確認。Service limit reached、Free projectは2 servicesまでとの表示。既存Combined APIと共通Buildで枠を使用しており、3つ目のDeployment APIは追加不可。新規作成・課金・削除は実行していない。
- 既存Combined APIのOverviewにはimage source変更操作がなく、公式の変更手順はDeployment serviceが対象。Combinedの直接変換や公開URL維持は確認できていない。未確認のAPI操作で変換しない。
- 追加可能になった場合の準備済み構成: 共通Build nervous-respect-4354を固定、manifest sha256:c68e06f4a2aea12d83081c257864d17e7527cb052fe25e69e2ad505f7898e9d6、0.2 vCPU/512 MB/1 replica、HTTP 3000、readiness/liveness /api/health、CI/CD OFF、maintenance/preview維持。環境変数とCA secretは既存APIから引き継ぎ、秘密値は文書に記録しない。
- 有料枠で既存APIを維持して追加するか、無料枠内の構成を再検討するかは利用者判断待ち。無料案で既存APIの削除・再作成が必要になった場合は、環境変数/secret移管、URL/OAuth/Pages参照更新、復旧手順を準備してから別途承認を得る。現行APIとDBは維持、同digestゲートは未達。
- 参照: https://northflank.com/docs/v1/application/run/change-deployment-source
### 2026-10-05 無料枠維持案の調査

- 利用者が無料枠維持を選択。既存APIの削除・課金は行わない。
- Chromeでshared jobのEdit image sourceを確認。Northflank内部参照は共通Buildのみ候補、Combined APIは候補に出ない。一方External imageの編集画面は利用可能であり、前記の「既存job source変更不可」という一般化を訂正する。少なくともこのjobでは内部/外部参照の編集UIが存在する。保存はしていない。
- APIのPull Docker image画面でregistry.northflank.com/hoyoverse-builder/hoyoverse-api:busy-treasure-6759を確認。APIを維持しJobを同イメージの外部参照に変更する案を検討。実運用はmanifest digestで固定し、更新時もAPI/jobを揃える。
- 上記URLをshared jobの編集フォームへ入力して検証。private imageのcredentials要求、Update disabled。既存credentialsはなくAdd new credentialのみ。認証連携を作成してから、同digest確認とSELECT 1再実行が必要。現在のJob sourceは変更していない。
- Registry > Pullのみの専用role hoyoverse-image-pullのフォームを準備したが、ブラウザ操作中にDetachedとなり保存未実施。role/token/registry integrationの作成完了とは扱わない。秘密値非取得・非記録。API URL/環境変数は維持。
- 公式参照: https://northflank.com/docs/v1/application/build/pull-images-from-Northflank
### 2026-10-05 Registry Pullロール割り当てとトークン発行

- 利用者がhoyoverse-image-pullロールを作成。対象hoyoverse-builder、Registry Pullのみ。利用者の明示承認後、ChromeでSitar-sitarへ割り当て、Members 1名を確認。
- 利用者の「登録して」に基づき、API token hoyoverse-image-pullを発行。専用role、7日間、Active、期限2026-10-12 19:15 JST、Last used Neverを画面で確認。秘密値は記録しない。
- レジストリ登録フォームをCustom container registry / https://registry.northflank.com / hoyoverse-builder限定で準備。画面取得結果のトークンが伏字だったため実値として利用できず、登録完了なし。使えない入力値は除去した。Confirm後の実値再表示は未確認。
- 同条件の修正用追加token hoyoverse-image-pull-registryの発行を試みたが、自動承認レビューが追加発行の明示承認不足として拒否。追加tokenは未発行。未使用の最初のtoken失効と再発行について利用者承認を依頼する。
- API/job sourceは未変更。共通manifest digestゲート未達、レジストリ認証の登録・image検証・SELECT 1が残る。課金・サービス削除なし。
### 2026-10-05 承認後のトークン再発行

- 利用者の明示承認後、最初のAPI token hoyoverse-image-pullをRevokeし、token全体のRevoked表示を確認（key行のActive表示とは区別）。
- API token hoyoverse-image-pull-registryを同じ専用role・7日間で発行。Save your API token画面が開いた状態。秘密値は取得・記録しない。
- Copy token操作後、ブラウザ操作ツールの貼り付けはvirtual clipboard has no data to pasteで失敗。実トークンの転記を利用者へ依頼する。登録フォームはCustom container registry、https://registry.northflank.com、Sitar-sitar、hoyoverse-builder限定まで準備。password欄は空、認証連携登録は未完了。
- トークン表示画面はConfirmしていない。利用者がCopy token→password/token欄へ貼り付け→Add registryを実行後に登録確認を再開する。API/job source未変更、同digestゲート未達。
### 2026-10-05 23:18 JST Registry認証登録とAPIビルド参照の接続確認

- 利用者がtoken keyを更新しregistry credentialsを登録したと報告。Chromeの一覧でhoyoverse-image-pull（Custom container registry）を確認。秘密値は取得・記録しない。
- shared JobのExternal imageに登録済み認証を選択。digestだけのimage pathでは検証が進まず、API画面で確認済みのregistry.northflank.com/hoyoverse-builder/hoyoverse-api:busy-treasure-6759を指定するとImage is accessible / Private imageを確認。Update後、Job Overviewの同タグ・認証参照を再取得確認。
- Run 74bcfe55-8312-416d-8851-6186a9483be4、23:18 JST、17秒、Success。Run限定のmysql2 SELECT 1でconnection_ok=1、exit code 0、CA/rejectUnauthorized=trueによるTLS接続を確認。schema migrationは実行していない。通常CMDはSETUP_PENDING_DB_CHECKのまま。
- APIと同じビルドタグからJobを起動できた。現在は起動時のタグ解決であり、Jobの実際のmanifest digestとの照合・digest固定は未確認。設計の同digestゲートは未達として維持。新サービス作成・課金・API変更なし。

### 2026-10-05 23:51 JST 公開候補の検証開始

- 利用者はRailway無料期間終了を報告。本番公開までの作業を承認。実取得ではRailway API/MySQLは稼働中であり、最終コピー前に旧APIの書き込み停止が必要。
- 型検査、全76ファイル547テスト、公開ゲート/診断helperの9テストを再実行してpass。新Pages preview build成功、localhost:5178/hoyoverse-builder/app/で起動。
- API公開候補 whole-vest-8887（14827548505f270b1f7c603c3739d11e8b6ea1e1）build成功。manifest sha256:c383734ddc2b3c469cece86c3a9339359307bf136e1632220aebed772a94d4f5。
- shared Jobを同ビルドタグへ更新し、Run fb1582a9-c3a1-4c87-ae75-cc7036b3741c（23:33 JST、19秒）で接続とrevision一致、6テーブル89行、migration 7件を確認。全行内容の旧DBとの照合と実manifest一致は未完了。通常準備CMDを維持、今回migrationなし。
- pre-release-20261005 snapshotを23:37 JSTに作成、58秒で成功、6GB。既存復元点も維持。
- APIをwhole-vest-8887へ手動deploy。health revision 1482754、maintenance=trueを確認後、検証用にAPI_MAINTENANCE=false、API_MIGRATION_PREVIEW=trueを維持、CORS_ORIGINS=https://sitar-sitar.github.io,http://localhost:5178、ADMIN_FRONTEND_URL=http://localhost:5178/hoyoverse-builder/appへ変更してUpdate & restart。healthで反映を確認。CI/CD OFFは維持。
- Chromeの新base図鑑で256/256、HSR86キャラ、推奨ビルドの実API応答表示を確認。GitHubログインの実検証へ着手。
- 一時設定は本番切替前にCORSを公開originのみ、ADMIN_FRONTEND_URLを公開app URLへ戻す。preview正式解除、最終停止コピー、全行/objects照合、main反映とforward公開、公開後観察は未完了。Phase 55は進行中。
- Job環境変数全体のCLI取得は秘密値を含み得るため自動承認レビューで拒否。取得していない。DB確認は既存runtime内で環境変数参照により実施し、秘密値を出力・記録しない。

### 2026-10-05 23:58 JST 実ブラウザとmigration確認

- ChromeでGitHub OAuthの開始→callback→新baseの管理画面への復帰、Sitar-sitar管理者ログイン、DB集計75件/表示設定の読込成功を確認。認証情報は取得・記録しない。
- 新baseから検証DBのE-2設定を切替を開放から現行へ保存（23:53 JST）。APIのRestart service実行後、再読込でも保存値と管理者ログインを保持。検証後は切替を開放へ復帰保存。テストによりupdatedAt/auth状態は旧DBと異なるため、正式公開前に最終停止コピーで再同期する。
- 同ビルドタグwhole-vest-8887のshared JobでRun限定CMD node node_modules/drizzle-kit/bin.cjs migrateを実行。Run 72d10794-495b-4fbd-a02f-eed8de329a02、27秒、Success。logsにmigrations applied successfullyとexit code 0を確認。履歴件数・objectsの再照合は別途必要で、ログだけをno-opの完全な証明とは扱わない。
- 管理画面に残るRailway固有のhealth/設定確認表記をAPI一般表記へ修正。型検査pass。修正は現在稼働中1482754にはまだ含まれない。

### 2026-10-06 00:02 JST 全行ハッシュの比較

- 同一SQL方式で各テーブルの全列をJSON_ARRAYへ正規化（UTC）、行SHA256をソートして集約SHA256を取得。行数×64と集約長を照合して切り詰めなしを確認。元の行内容・個人データは取得/記録しない。
- 新DB Run 3541fbe5-3bd1-435c-a5b4-aa8a1e26ceda、17秒、Success、exit 0、revision 1482754。旧DBは接続済みRailwayコンソール内で同じSQLを実行。
- migration 7行の全内容ハッシュ一致（7fda7686ccd4068be41bd61af2dd5c267f264093e2b80732652dc539932b4097）。同イメージmigration実行後も履歴不変を確認。
- analytics 75行の全内容ハッシュ一致（da058dbe2f891045c1ce658baf66049fb5d01f91d82d03740ce4e724ae55df55）。feedback 0行のハッシュも一致。
- auth exchange 1行、users 1行、display settings 5行は不一致。今回のOAuth/表示設定保存で実際に更新したテーブルであり、最終停止コピー前の試験環境の差分として保持。これを完全一致と扱わない。正式公開前に全テーブルとDB構造を最終データで再照合する。

### 2026-10-06 00:04 JST 旧APIの自動再デプロイ停止

- Railway旧API Settings > SourceのAuto deploys when pushed to GitHubをDisable。保存後Auto deploy is disabled / Enableボタンを再取得確認。
- GitHub mainソース、稼働deployment、API URL、DB/volumeを維持。これにより移行PRのmain反映時の旧API自動build/再起動を防止。旧APIの現在の書き込み受付停止はまだ実施していない。

### 2026-10-06 00:10 JST DB構造と実UIDの受入

- 旧新DBの構造ハッシュ一致: columns 36項目 edad243bd3b485b7b944359737695c8788aec0fb12323f4c524cf9533c11b23b、indexes 12項目 2fb5a939de7da0345a4d4fbb745ed295211f846d15628fed93162cf7c154987b、tables 6項目 6a8a874cb68dc8943c0c93dd368dcfb602ace031a798e3ee4a0b99546d239f90。列型/default/null/charset/collation/生成式、索引の構成/可視性、table type/engine/collation/row format/create optionsを含む。AUTO_INCREMENT次値、制約定義と最終停止時点の再取得は別途必要。
- view/trigger/routine/eventの可視件数は双方0。旧側rootで取得。新側は通常ユーザーによるinformation_schema参照であり、完全な権限可視性の証明は別途確認する。新側Run 68d6304a-3ea8-4113-8aad-76c270cf9c24、Success/exit 0。
- 利用者が今回提供した公開UIDでChromeの新baseから実照会。HSR7名、原神12名、ZZZ6名を表示し、装備・現在値/推定値・推奨・凸・PT表示を確認。UID/プロフィール名は記録しない。ゲーム内との数値独立照合や公開後の再確認は別ゲート。
- 管理者ログアウト後、admin再読込でGitHubログイン要求を確認。ログアウト前のセッション保持と合わせてOAuth→reload→logoutを確認。別GitHub非管理者アカウント・third-party cookie遮断の実試験は未実施。
- Job Eventsでwhole-vest-8887のpull成功、image size 188455590 bytesを確認。イベントには解決済みmanifest digestが表示されず、実digest照合は未達のまま。

### 2026-10-06 00:29 JST APIと移行Jobのmanifest固定

- APIのデプロイ済みbuild whole-vest-8887の完了ログを再取得し、exporting/pushing manifestが sha256:c383734ddc2b3c469cece86c3a9339359307bf136e1632220aebed772a94d4f5 であることを確認。revisionは14827548505f270b1f7c603c3739d11e8b6ea1e1。
- Jobの画面によるdigest指定保存が進まない問題に対し、公式deployment APIのimagePathがdigest指定を受け付けることを確認。既存CLI認証を用い、shared Jobを registry.northflank.com/hoyoverse-builder/hoyoverse-api@sha256:c383734ddc2b3c469cece86c3a9339359307bf136e1632220aebed772a94d4f5 へ更新。再取得結果もdigest参照であり、タグの起動時解決から変更済み。
- scoped role hoyoverse-db-verificationに、hoyoverse-builder限定のJobs / General / Read・Updateだけを追加し、Role updatedを確認。その他の追加権限なし。秘密値の取得権限は追加しない。登録済みregistry credential hoyoverse-image-pullをID参照し、トークン値は取得しない。切替作業終了後に追加した2権限を取り除く。
- Run 96cc048c-3265-4cdc-970b-7d0d5d27a72cでdigest固定イメージがアクセス可能・起動成功。CA検証を有効にしたSELECT 1のみの接続確認でconnection_ok=1、上記revision、exit code 0を取得（00:28:49 JST）。実行限定CMDであり、通常のSETUP_PENDING_DB_CHECKコマンドは維持。DB変更・migrationなし。
- 現在の公開候補についてAPIの生成manifestとJobの実行digest参照が一致。最終main SHAのリリース時には、その新buildのmanifestでJobを再固定し再検証する。全行最終同期・公開・24時間観察は未実施。
- PR #106のhead 54c16b43238648b2ef35799a2be7a241cd9d8697に対するvalidateチェックSUCCESSを確認。main未反映。
### 2026-10-06 06:39 JST DB制約・既定照合順序の確認

- digest固定Job Run 7a5d3f96-f7d5-43bf-adc1-892fb649f40a（06:36:35 JST、exit 0）と旧MySQL consoleの同一SQLで構造比較。table_constraints 8項目のSHA256 cb35906173c55233f0e912d49972a3dd16d97d28db154f3ca7dac46a4d6795d6、key_constraints 8項目 a80b16e0d490dce51ba23726134501a5289cbff11972af7b3b62869df0231c94 は一致。FOREIGN KEY rulesとCHECK constraintsは両方0件。集約切り詰めなし。
- DB既定値に差分を検出。旧はutf8mb4 / utf8mb4_0900_ai_ci、新はutf8mb4 / utf8mb4_general_ci。既存テーブル属性の一致とは別に、将来のDDLの既定値が異なることを確認した。
- SHOW GRANTSの出力は秘密値/ユーザー名を保存せず、接続先DBへのALL PRIVILEGES有無だけで判定。最初の判定正規表現にエスケープ誤りがありfalseと出たため、接続先schemaへのGRANT文のprefixを直接照合する検査へ修正。Run 0a316e78-052f-4523-9dab-c0b904bd7fde（06:37:46 JST、exit 0）でdatabase_all_privileges=trueを確認。最初のfalseは実権限不足の証拠ではない。
- Run 927e3d03-2e08-4ae9-bdb8-98d58e6dfec6（06:38:37 JST、exit 0）で新DBにALTER DATABASE CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ciを実施し、SELECTで旧DBと同じ既定値を確認。既存table/columnや行の変換は行わない。必要時は元のutf8mb4_general_ciへ既定値だけ戻せる。
- AUTO_INCREMENT次値はmigration 8、feedback 1、auth/displayはnullが一致。analyticsは旧76/新79、usersは旧24/新25で不一致。検証時の新DB書き込み後の状態として記録し、最終停止コピー後に旧DB値と全行を再照合する。最終同期PASSとは扱わない。
- 最新PR head 1f0f9611d234467e5b697e0630dac5f02d4b5dc7のvalidate SUCCESSを再取得確認。API healthは1482754 / maintenance=false / migrationPreview=trueを維持。旧API停止・最終copy・本番公開は未実施。
### 2026-10-06 07:01 JST 管理操作・Recreate・レート制限・Cookie遮断

- 新baseの管理者として検証用feedbackを1件保存し、対応状況を未対応から対応中へ更新。API再起動後とRecreate再起動後の全ページ再読込で同じ1件と対応中を確認。非管理者のpreview POSTは403 / FORBIDDEN、追加行なし。検証行は最終停止コピーで旧DBの内容へ置換する。
- 06:44の通常再起動では旧Podと新Podの稼働重複を検出。設計§5.5に合わせてPod rollout strategyをRecreateへ変更・保存・再取得確認。06:50:43に旧Pod f94d7c8c7-rl956が停止/0へ縮小、06:50:44に新Pod 74685f67b5-8vflpへ拡大、06:50:55にコンテナ起動をEventsで確認。以後1 instance、2/2 passing、再起動0。切替中は一時的なno healthy upstreamを観測した。12秒はコンテナ起動までの間隔であり、受付停止時間全体の測定値ではない。
- Runtimeは0.2 vCPU / 512 MB / 1 GB、CI/CD OFF、revision 14827548505f270b1f7c603c3739d11e8b6ea1e1、maintenance=false / migrationPreview=trueを維持。Recreateは本番更新時にも短い受付停止を伴う。
- global rate limiterを読み取り専用auth.meの121件batchで検証。最初は背景通信込みで119成功/2制限。アプリタブを別サイトへ移して隔離し、60秒待機後の再測定で120成功/1 TOO_MANY_REQUESTS、HTTP 207、Retry-After 60を確認。制限中health 200 / OPTIONS 204、時間経過後auth.me 200を確認。個別UID/IP/feedbackの全境界や旧新性能比較は未完了。
- Chrome設定ページは操作ツールのURL制限で開けず、利用者がサードパーティCookieのブロック設定済みと手動確認。その条件で実Chromeのログアウト→GitHubログイン→管理者Sitar-sitar表示→admin/feedback直接再読込が成功、保存済み対応中1件を確認。設定自体をツールで独立確認したとは扱わない。ローカル新baseの実API試験であり、公開Pagesや別GitHub非管理者アカウントの試験は別途必要。
- PR #106 head c70e28bdcab06cd5b18dda851e6094520b5ac277のvalidate SUCCESSを確認。main反映、公開parallel、最終停止コピー、forward公開と24時間観察は未実施。

### 2026-10-06 17:10 JST Railway期限切れ・公開前確認

- 07:02時点のconnectorでは旧API/MySQLとも1台Onlineだったが、17:10の再取得では両方Offline・active deploymentなし・pending workなし。旧health 404、新health 200。経過中の停止時刻は未観測。両DB/APIが常時稼働したとの連続観測はない。
- Railway画面はTrial expired / Limited Access。旧MySQL consoleに稼働terminalなし、BackupsはNo Backups。mysql-volumeは存在する。課金、再デプロイ、DB/volume削除は行わない。最終dump取得不可のため一時再開か既存dumpへの復旧の利用者判断を依頼。既存dump取得後の差分消失が不明であり、最終データ一致PASSとしない。
- lookupの121件global試験とは別に21件batchを測定し18成功/3制限、ただしcached=0。cache前提の合格にしない。順次HSRはキャッシュ1〜6件200、7件目429 / Retry-After 56。原神1件目cold後2〜4件cached200、5件目の通信切断で測定終了（exit 1）。ZZZ/IP21件目/偽装/個別回復は今回未検証。切断後NFは同じ74685f67b5-8vflp、再起動0、2/2 passing、health200であり原因未確定。
- migrationPreview.test.tsの重複it importと未使用describeを整理、関連14テストpass。Pages/IP診断9テストpass。公開前レビューを別文書へ保存。旧APIの更新・parallel公開・final copyは未実施。
