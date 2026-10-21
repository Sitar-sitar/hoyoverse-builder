# Northflank本番運用ガイド

更新日: 2026-10-19（Phase 60 A）。本書は「現行運用」「通常更新」「migrationを伴う更新」「切戻し」「過去記録」の順に読む。仕様の正本は[移行設計書](実装設計書_RailwayからNorthflankへの段階移行_2026-10-03.md)と[運用安定化設計](修正設計書_運用安定化と保守性改善_2026-10-19.md)、実取得証拠は[管理台帳](運用管理台帳_Northflank設定_2026-10-05.md)、工程は[実装ログ](実装ログ.md)。

## 現行運用

「確認日」は本書または台帳に記録された最後の実取得日。今回（2026-10-19）Northflank・GitHubの画面や設定を再取得していない項目は「現在値未確認」とし、過去の受入記録を現在値として扱わない。

| 対象 | 構成（文書上の最終受入） | 確認日・根拠 | 現在値 |
| --- | --- | --- | --- |
| Pages | https://sitar-sitar.github.io/hoyoverse-builder/app/ 、旧入口の既知ルートは対応appルートへ転送 | 2026-10-09 Phase 57受入（実装ログ） | 公開URLは2026-10-19に応答を確認（Cache-Control: max-age=600） |
| API | https://http--hoyoverse-api--s48krvgv8tjs.code.run | 2026-10-19 Phase 60配備時のhealth | `a0cb015`・通常受付・CORS正常を確認 |
| API service | hoyoverse-api、Dockerfile.northflank（NODE_ENV=productionをimageで固定）、main追随、CI/CD ON、1 instance、Recreate | CI/CD ONは2026-10-08設定・2026-10-09に通常main更新で全経路受入（Phase 57） | 未確認 |
| API資源 | 0.2 shared vCPU / 512 MB / 1 GB | 2026-10-08以前の台帳 | 未確認 |
| DB | hoyoverse-mysql、MySQL 9.7.2、6 GB、Private / TLS | 台帳 2026-10-05〜10-08 | 未確認（最大接続数は未測定） |
| Migration Job | hoyoverse-db-migrate-shared、manual / Run on image change=Never | 2026-10-21 Phase 63 | imageは本番API `3fed8cf` のbuildタグ `hanging-ship-4355`（registry認証 `hoyoverse-image-pull`）。読取TLS確認 `scripts/db-readonly-check.ts` でDB_CHECK_OK（TLSv1.3・CA検証）。migration実行時は最新APIのbuildへ付け替えてから |
| 通常受付 | API_MAINTENANCE=false / API_MIGRATION_PREVIEW=false | 2026-10-09 health | 未確認 |
| CORS | https://sitar-sitar.github.io（pathを含めない） | 2026-10-09 | 未確認 |
| Pages変数 | HOYOVERSE_PAGES_MODE=forward、HOYOVERSE_NORTHFLANK_API_BASE_URLは上記API origin | 2026-10-09 | 未確認 |
| DB接続設定 | DATABASE_URL（queryなし）、DATABASE_SSL_CA_FILE=/secrets/mysql-ca.pem をAPIとJobへ個別mount | 2026-10-19 利用者確認（G-02、値は未記録） | APIは起動前検証を通過し公開表示設定をDBから取得。Jobの実接続は未確認（2026-10-20、Run画面でimageにアクセスできず読取確認を開始できず。Job imageは旧digestで起動前検証も未有効。次のmigration時に解消）。productionでquery付きURL・CA欠落・不正PEMを起動前に拒否する |
| 外部監視 | GitHub Actions `Monitor Northflank production`（descriptor起点、Phase 60） | 2026-10-19に利用者指示で再開（active）、手動run成功。再開後最初の定期run `39311424899`（2026-10-19 19:29Z）reason=ok | 以後の定期runは未確認。GitHub scheduleは数時間間隔になることがあり、24時間連続観察とは扱わない |
| 定期backup | Snapshot、日曜18:00 UTC＝月曜03:00 JST、保持28日 | 台帳 | 未確認 |

秘密値（DB URL、password、CA本文、GitHub App secret、session鍵）は文書・ログ・Issueへ保存しない。CLIENT_IP_SOURCE=northflank / NORTHFLANK_TRUSTED_PROXY_HOPS=1はこの配備で実測した値で、別環境へ流用しない。認証は[GitHub App認証ガイド](github-admin-auth.md)を参照する。

### API の資源上限（Phase 60 B）

新規UID照会作業は3ゲーム合計8件まで（待機なしで即時拒否、キャッシュヒットと同一UIDの共有は枠を消費しない）。GitHub OAuthのtoken交換とuser取得は各5秒で打ち切る。DBプールは10接続・非待機（11件目は即時失敗）・接続確立10秒。値はコード定数で、環境変数では変えない。

## 通常更新

DB schema変更を含まない更新の手順。docsだけの変更でもmain更新はAPIの自動配備を誘発し得るため、同じゲートを通す。

mainへの直接pushはできない（2026-10-20からrulesetでPR必須、承認数0、bypassなし）。緊急の修正も、作業ブランチ→PR→CI（validate・監査ゲート）合格→マージの順で行う。Dependabotの更新もPR経由で同じゲートを通る。

1. PRでテスト・型検査・content検査・APIビルド・Pages buildを確認する（validate-api.yml）。
2. mainへマージすると、NorthflankがmainをビルドしAPIへ自動配備する。APP_REVISIONは動的参照 ${NF_GIT_SHA}。
3. Pages workflow（deploy-pages.yml）がAPI healthの対象SHA一致を最大10分待ち、Pages artifactを生成・検証する。forwardでは公開版descriptor（`/hoyoverse-builder/release.json`）を同じartifactへ生成する。
4. 公開直前にAPI SHAを単発で再確認してからPagesを配備する。
5. 配備後、同じworkflowが読み取り専用の公開後検査（descriptorがworkflow対象SHAを示し、APIと図鑑の内容digestが一致するまで最大120秒・10秒間隔）を行う。失敗してもjobを失敗にするだけで、自動revert・DB復元・期待版書換えはしない。
6. 公開受入: health（revision/maintenance/migrationPreview/CORS）、Pages deployment SHA、3ゲーム図鑑の実データ。DB利用機能を変えた場合は許可された管理者操作で設定の読取・保存・再読を確認し、一時変更は元に戻す。

### 公開監視の読み方（Phase 60 E）

監視の期待版は公開中のdescriptorから決める。固定RELEASEやRepository variable `HOYOVERSE_MONITOR_REVISION`は使わない（同variableは2026-10-19に削除済み。残るRepository variableは`HOYOVERSE_API_BASE_URL`・`HOYOVERSE_NORTHFLANK_API_BASE_URL`・`HOYOVERSE_PAGES_MODE`）。各runは descriptor→health→（版一致時だけ）図鑑一覧と3件の代表詳細→descriptor/healthの再読 を直列に行い、次の理由を1つ記録する。

| 理由 | 意味 | 対応 |
| --- | --- | --- |
| ok | descriptor・API・内容digestが一致 | なし |
| release_descriptor_missing | release.jsonが404 | forward以外での復旧中、またはdescriptor導入前の版。配備履歴と照合する |
| mode_unsupported | descriptorがlegacy/parallel/rollbackを明示 | モード移行中。forwardへ戻るまで失敗が続く |
| descriptor_invalid / request_failed / health_invalid | 形式不正・通信失敗・healthの不正flagsやCORS | 公開途中と読み替えず原因を確認する |
| release_transition | 検査中にAPIまたはdescriptorの版が変わった | 次の定期runで自然回復を確認 |
| api_ahead | API revision ≠ descriptor revision のまま安定 | 通常更新ではAPIがPagesより先に切り替わるため各リリースで1回以上出得る。次のrunでも続けばPages配備の失敗・停止を確認する |
| payload_mismatch | 同一SHAで内容digestが不一致 | 同SHAでの内容差。配備物を確認する |

5分scheduleは実行・連続監視の保証ではない。監視成功を24時間連続観察と読み替えない。Pages CDNは最大10分キャッシュするため、descriptorは取得ごとに異なるクエリ付きで読む。

## migrationを伴う更新

1. 事前backup・差分・停止範囲を確認する。本番Restoreを通常リリースへ混ぜない。
2. shared JobをAPIと同じmanifest digestへ固定し、Run commandを個別指定する（既存の適用コマンドは `pnpm exec drizzle-kit migrate`）。保存済みコマンドは準備確認用で、Run開始だけではmigrationにならない。Jobは自動実行しない。
3. Jobもimage既定でNODE_ENV=productionのため、drizzle.config.tsがDB設定（queryなしURL、CA）を設定生成前に検証する。Northflank側の環境変数でNODE_ENVを上書きしていないことを確認する。
4. API/Jobの同image・SHAを確認してから、通常更新の3〜6を行う。

## 切戻し

1. API CI/CDの追随を止めた状態で、受入済みAPI imageと対応するPages artifactを戻す。またはrevert PRを同SHAで再ビルド・配備する。
2. DB schema/data変更がない場合、Northflank DBは復元しない。旧Railway URLへの切替だけで復旧した扱いにしない。
3. descriptorだけを書き換えて一致したように見せない。戻したPages artifactのdescriptorと対応APIで監視を確認する。
4. forward以外のPagesモードで復旧している間、descriptorを生成しないため定期監視は`release_descriptor_missing`（descriptorが非対応modeを明示する場合は`mode_unsupported`）で失敗し続ける。失敗を理由に監視を止めない。descriptor導入前（Phase 60 E以前）の版へ戻す場合も同じ扱いになる。
5. 巻戻し後もhealth・公開データ・必要な認証・監視を再確認する。

## 過去記録

以下は2026-10-09時点までの記載を見出しの階層だけ下げて原文のまま残したもの。当時の構成・例外・未検証事項の追跡用で、現在の設定として読まない。

### 現行構成

| 対象 | 本番構成 |
| --- | --- |
| Pages | https://sitar-sitar.github.io/hoyoverse-builder/app/ |
| 旧Pages入口 | 既知7ルートから対応appルートへ転送 |
| API | https://http--hoyoverse-api--s48krvgv8tjs.code.run |
| API service | hoyoverse-api、Dockerfile.northflank、main、CI/CD ON、1 instance、Recreate |
| API資源 | 0.2 shared vCPU / 512 MB / 1 GB |
| DB | hoyoverse-mysql、MySQL 9.7.2、6 GB、Private / TLS |
| Migration | hoyoverse-db-migrate-shared、manual / CD OFF。image は2026-10-21にAPI `3fed8cf` のbuildへ付け替え済み。migration実行前に、そのときのAPI buildへ付け替え→`scripts/db-readonly-check.ts`で読取確認→migrateの順 |
| 正式revision | 機能受入: 597e13322bf34b76e9642ee61b6773665f09e2bf（Phase 57）。文書を含む後続リリースはAPI healthとGitHub Pages deploymentの同一main SHAを正とする |
| 通常受付 | API_MAINTENANCE=false / API_MIGRATION_PREVIEW=false |
| CORS | https://sitar-sitar.github.io（pathを含めない） |
| Pages変数 | HOYOVERSE_PAGES_MODE=forward、HOYOVERSE_NORTHFLANK_API_BASE_URLは上記API origin |
| 定期backup | Snapshot、日曜18:00 UTC＝月曜03:00 JST、保持28日 |

DATABASE_URLは内部MySQL接続URL、DATABASE_SSL_CA_FILE=/secrets/mysql-ca.pem。APIとJobそれぞれに実行時CAファイルを配置する。秘密値を文書・ログ・Issueへ保存しない。

CLIENT_IP_SOURCE=northflank / NORTHFLANK_TRUSTED_PROXY_HOPS=1は、この配備でPC・4G・偽装prefixを実測した値。別環境へ無条件に流用しない。認証は[GitHub App認証ガイド](github-admin-auth.md)を参照する。

### 次のリリース

1. PRでテスト・型検査・APIビルドを確認し、対象main SHAを確定する。
2. Northflankで対象mainをビルドする。APP_REVISION build argumentは動的参照 ${NF_GIT_SHA} を維持し、imageへ対象40桁SHAが取り込まれることを確認し、成功したimageをAPIへ配備する。
3. migrationが必要なら事前backup・差分・停止範囲を確認する。shared JobをAPIと同じmanifest digestへ固定し、Run commandを個別指定する。現在の保存コマンドは準備確認用で、Run開始だけではmigrationにならない。既存migration適用コマンドは pnpm exec drizzle-kit migrate。本番Restoreを通常リリースへ混ぜない。
4. healthのSHA、通常受付フラグ、DB/TLS、CORS、RPC、probesを確認する。
5. Pages workflowを対象mainで実行し、forward生成・同SHAゲート・公開画面を確認する。API準備前にworkflowが失敗した場合は、API準備後に再実行する。

文書だけの更新も通常PRのCIと同SHA自動配備ゲートを通す。2026-10-09開始時に、skip付き文書コミット413f96dがAPIへ配備されPagesは94a3627のままと実測した。ignore設定だけを根拠に再配備が起きないとは保証しない。最終main、API health、Pages deploymentを照合する。

### 残っている受入作業

本番公開、3ゲームUID照会、OAuth、feedback保存、表示設定保存→API再起動→保持→元設定への復帰は確認済み。24時間観察は2026-10-06 22:26 JSTに再開始したため、欠落・platformログ・保存状態を含めて判定する。

公開後backup post-forward-production-20261006は取得成功。復元試験は未実施。旧DB期限切れ後の最終hash照合、およびMySQL 9.7.2→9.4逆復元はNOT_TESTED。既存dump採用は利用者の「移行開始後に更新していない」という申告と承認による復旧であり、旧DB最終照合PASSとは扱わない。

### Railway記載の扱い

| 残す対象 | 理由 |
| --- | --- |
| 移行設計・過去の実装ログ・検証メモ | 当時の構成・結果・例外を追跡するため。現在の設定として読まない |
| railway.toml | 旧配備の履歴。Northflankの現行設定ではない |
| scripts/pages.mjsのlegacy/parallel/rollback、旧API変数 | 移行モード互換性。forwardの実アプリはNFへ接続する |
| IP処理のRailway識別、旧revision環境変数fallback | 旧環境互換コード。現行NFの実測設定とは分離 |

旧Railway API/MySQLは期限切れでOffline。DB/volumeと旧callbackは保持する。課金・削除は実施していない。受付再開後はNF DBが正本で、Pages変数だけを旧URLへ戻しても安全なrollbackにはならない。逆コピー・全行照合・旧API再開が必要であり未検証。廃止は観察・復元ゲートと別の利用者判断による。

P1修正の配備・検証は[修正記録](修正設計書_P1セキュリティ修正_2026-10-06.md)を参照。API/Job manifestは29202fcd49f540f7b85ca9eaadbdce1ebb914bd31ed99169d819f7631423f414。旧revisionの観察期間は新revisionの24時間実測として扱わない。

2026-10-07更新: 公開後バックアップ post-publication-local-restore-20261007（Native dump/gzip）を取得し、独立したローカルMySQL 9.7.2へ復元。6テーブル104行、全CREATE TABLE/INSERT文が再dumpと完全一致。Native dumpの復元試験PASS。Disk snapshotの復元はNOT_TESTEDで区別する。詳細は管理台帳の2026-10-07節。移行全体は修正版b5374e3の24時間観察とplatform/永続化の継続確認が完了するまで未完了。

### PCに依存しない外部監視（2026-10-07追加）

GitHub Actions `Monitor Northflank production`（`.github/workflows/monitor-production.yml`）は公開API `/api/health` をUTC毎時2分から5分間隔で読み取り、手動実行も可能。Node 22、contents readのみ、timeout 3分。DB・OAuth・Registryの秘密情報は不要。HTTP 200、ok=true、本番revision、maintenance=false、migrationPreview=false、Pages OriginへのCORSを全て検証する。異常はrun失敗としてActionsの通知設定に従って通知される。

結果は秘密値・応答本文を含まない `production-health-<runId>-<attempt>` artifactとして7日保存する。期待revisionは現在の公開API `b5374e384beaf638bbf996c46e1411fb65be027f`。次回API公開時にはRepository variable `HOYOVERSE_MONITOR_REVISION`を公開SHAへ更新し、手動runで一致を確認する。新たなmain commitや監視コードのSHAを本番APIのSHAとは扱わない。

GitHub scheduleは開始遅延・欠測があり、実測時刻から監視間隔を検証する。schedule設定/初回PASSだけでは24時間連続観察PASSとしない。PC停止中の欠測は健康判定と別に記録する。公開リポジトリの60日無活動でscheduleが無効になる制限もある。機械が停止してもNorthflankの内部probesは稼働するが、外部応答の連続証明を代替しない。

監視と運用記録の更新もAPI/Pagesのrevision差が生じないよう通常の同SHA配信ゲートを通す。PRの通常検証は実施し、merge後に監視workflowを明示dispatchして動作確認する。アプリコード更新の公開時にはこのskipを使わず、通常の同SHA配信ゲートを通す。

仕様参考: [GitHub schedule制限](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#schedule)。無料構成で追加Addonを作らない。

### 2026-10-08 観測終了と移行完了

利用者指定で既存観測により判定。[完了判定](移行完了判定_Northflank_2026-10-08.md)参照。24時間連続観察は未達・追加免除を保持し、Phase55は本番運用継続Goで完了。GitHub monitorはdisabled_manually、翌朝確認automationはPAUSED。追加観測は行わず内部probesを維持。旧Railway廃止は別途指示後。


### Phase 56 配備契約（2026-10-08）

APP_REVISIONは固定値から動的NF_GIT_SHA参照へ変更した。runtime側に同キーの上書きはない。手動buildのimage内revisionとhealth・build commitの一致を確認する。APIのCI/CDは2026-10-08にONへ変更。runtime NF_DEPLOYMENT_SHAとAPP_REVISION・公開a41823fの一致を対象2変数だけの判定で確認した。Phase 57で通常main更新による自動build→同SHA Pages公開を受入済み。

forward Pagesは生成前に同SHAのhealth/CORS/通常受付を最大10分待つ。各HTTPは最大5秒、再試行間隔10秒。既存pages.mjs --verifyを保持し、artifact公開直前は単発でSHAを再検査する。不一致・検査失敗なら旧Pagesを保持する。初回の小数timeout不具合はPR #113で整数化し、回帰を追加した。

shared migration Jobは固定registry digest、manual、Run on image change=Never。Phase 56はDB変更がなくJobは実行しない。次にschema変更を行うときはAPIと同digestへ揃える専用の停止・backup・migration手順が必要。内部probesを継続し、停止済みのGitHub monitor/automationを再開しない。

切戻しはAPI CI/CDを停止した状態で直前imageと対応Pagesを戻す、またはrevert PRを同SHAで再ビルド・配備する。Northflank DBを復元しない。旧Railway URLへの切替だけで復旧した扱いにしない。

#### 自動配備設定ON（2026-10-08）

最新build loyal-cats-2016 / a41823fを確認後、CIとCDをONへ変更し再取得で両方1を確認。既存pod xgm5s / probes 2/2 / restart 0を維持。main追随、commit ignore flags有効、migration Job manual/Neverを保持する。ダミー更新は行わず、次の許可済みアプリ更新で自動配備全経路を受入する。設定ONと全経路受入済みを混同しない。

#### 認証情報更新後の現行状態（2026-10-08）

GitHub App secret・管理session鍵・DB通常ユーザーpasswordを利用者が更新。新旧DB一時併用でAPI/shared Job/Workbenchを更新後、旧passwordを破棄し再接続・管理再ログイン確認完了。秘密値は記録しない。API/Pagesは94a3627で同期（Pages run37762389403）。Jobは実行せず接続設定更新のみ。詳細は管理台帳・実装ログの完了記録。


### Phase 57自動配備の実測

2026-10-09 Phase 57本番受入完了。PR #117をmain `597e13322bf34b76e9642ee61b6773665f09e2bf`へマージ。Northflank自動build `gusty-coat-8154`、pod `hoyoverse-api-c8d45ddcb-cx6wc` Running・probes 2/2・restarts 0。Pages push run `37933279077`／deployment `6961246301`成功、API/Pages同SHA。全256名の公開reference・履歴・カタログが検証済み実装と完全一致し、比較前後のhealthも同SHA。Chromeで対象2名の三言語・関連別欄・更新履歴を確認。

手動build・deploy・Pages dispatchは不要だった。APIはRecreate中に一時503となり約3分以内に新SHAで正常化した。監視再開・24時間観察、Job実DB接続は本フェーズの完了条件に含めず、過去の監視revisionを現在の受入証拠として使わない。
