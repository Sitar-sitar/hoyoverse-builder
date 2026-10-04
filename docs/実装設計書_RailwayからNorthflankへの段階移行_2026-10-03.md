# 実装設計書：RailwayからNorthflankへの段階移行

同じGitHub Pages内に旧URLと新URLのアプリを並行公開し、新URLでNorthflankを検証した後、旧URLを新URLへの転送ページへ変えるための仕様正本。切替前に書き込みを止めて最終DBコピーを行う。画面操作は別冊の利用者手順書に記す。

- 作成日: 2026-10-03
- 対象アプリ: hoyoverse-builder
- 種別: 実装設計書
- 対象バージョン: Northflank移行マイルストーン NF-M1〜NF-M7（実装ログのPhase番号は着手時に採番）
- 前提コミット: `4900c237fa8a52afcd2ebc26e9fa96b360f031fc`（調査時のローカル `codex/genshin-7-1-characters`。本番稼働コミットとは未照合）
- ステータス: ドラフト（方式・安全条件を定義済み。NF-M1の実設定とNF-M4のプロキシ実測で確定するまで本番切替不可）
- 関連: [利用者作業手順書](作業手順書_Northflank移行_利用者向け_2026-10-03.md) / [設計書インデックス](設計書インデックス.md) / [公開API保護の既存正本](修正設計書_公開API保護と外部API耐障害性_2026-09-19.md) / [実装ログ](実装ログ.md) / [README](../README.md)

## 1. 目的・背景

利用者指定の順序「Northflankに並行環境を作る → DBコピー → UID照会・管理者ログイン・レート制限の確認 → 正常性確認後に旧サイトから新ページへフォワード」を具体化する。新URL案は `https://sitar-sitar.github.io/hoyoverse-builder/app/`、旧URLは `https://sitar-sitar.github.io/hoyoverse-builder/`。独立したPagesサービスを2個作るのではなく、1個のPages配信物へ2個のアプリ入口を収める。別リポジトリ・独自ドメインは不要。URL名は設計上の採用案であり公開済みではない。

新旧アプリは同じコード・同じrelease SHAから別々のbase/API設定でビルドし、旧はRailway、新はNorthflankへ接続する。検証用コピーと切替直前の最終コピーを分け、検証中にRailwayへ追加されたデータも移す。

本書作成は文書整備のみ。アカウント作成、課金、公開、DB操作、コード変更、commit/pushは実施していない。後日の実装・公開依頼に応じて各ゲートを実行する。本書ができたことを実装完了・移行完了とは扱わない。

旧正本の§3-2、§4 Phase 43(A)、§10-4にある「Railway限定でX-Real-IP、それ以外はsocket」という仕様は、本書§5.3の実装時にNorthflank対応を追加する範囲だけ部分的にsupersedeする。Railwayでの従来分岐、制限値、tRPCの制限層、UIDの秘匿、キャッシュ・耐障害性の仕様は継続する。旧正本全体を廃止しない。

## 2. スコープ・非破壊条件

### 2.1 IN

- Northflank管理クラウド上にAPIサービス、MySQL addon、手動実行のマイグレーションjobを準備する。
- GitHubの同一リリースコミットからAPIをDockerfileで再現可能にビルドする。
- 実行環境の差を環境変数で表し、プロキシIP判定、保守停止、リリース識別を実装する。
- MySQLの全アプリテーブル・マイグレーション履歴をコピーし、内容一致を検証する。
- 新URLのPagesから新APIへ接続し、旧URLを維持したまま実ブラウザで検証する。
- 新旧それぞれのPagesビルドとCI疎通確認を同じAPI URLへ統一し、旧URLの転送、観察、切戻し、旧環境廃止の条件を定義する。

### 2.2 OUT・維持すること

- 旧URLは維持し、切替後は既存ルートに対応する新URLへ転送する。旧Vite baseは並行期間に維持、新baseは `/hoyoverse-builder/app/`。既存画面デザイン・機能は維持する。
- キャラクター、ガイド、凸、推奨PT、UID取得・比較・計算のアルゴリズムと三言語データを変更しない。
- DBエンジンをPostgreSQLへ変えない。移行と同時にMySQLのメジャー更新、スキーマ変更、依存パッケージ一括更新をしない。
- OAuth state、HttpOnly Cookie、単回交換コード、Bearerの既存認証方式を維持する。管理者のGitHub数値ID allowlistを広げない。
- APIは1 replica。共有レート制限ストア、複数region、独自ドメイン、BYOC、無停止レプリケーション、二重書き込みを導入しない。
- 新ページに確認用の案内を表示し、非管理者のDB投稿・更新を新APIで拒否する。検証用DBへの管理者の変更は最終コピー前に破棄する。

## 3. 現状と制約・根拠

2026-10-03のローカルソース確認。ダッシュボードの実設定・本番DBは未閲覧。

| 確認した事実 | 根拠・意味 |
| --- | --- |
| Pages + Railway APIの分離 | `README.md`、`.github/workflows/deploy-pages.yml`。Pagesの公開URLは維持可能 |
| RailwayはRailpackでAPIだけをビルド | `railway.toml`。`pnpm build:api`、`pnpm start:api`、デプロイ前 `pnpm exec drizzle-kit migrate` |
| Node 22とpnpmを使用 | 既存GitHub Actions。pnpmの正本は `package.json` の `packageManager`（10.4.1） |
| MySQLへURL接続 | `server/db.ts:getDb()`、`drizzle.config.ts`、`drizzle/schema.ts` |
| `/api/health` はDBを確認しない | `server/_core/index.ts`。200だけでDB・ログインの合格とはしない |
| サーバーはPORT既定3000、0.0.0.0 | `server/_core/index.ts:startServer()`。現状は空きポート探索あり |
| 利用者IPはRailway専用 | `server/_core/rateLimit.ts:clientIpFromRequest()`。RAILWAY_PROJECT_IDがなければsocketへ落ちる |
| レート制限はインメモリ | 同ファイルと `server/_core/trpc.ts`。複数replicaでは合算不能 |
| UID照会もDBを書き換える | `server/routers.ts:build.lookup` が分析記録を非同期実行。読み取り画面も書き込み停止の対象 |
| 管理者ログインもDBを書き換える | `server/_core/githubAdminAuth.ts`。usersのupsert、admin_auth_exchange_codesの作成・消費・掃除 |
| DBには表示設定がある | `site_display_settings`。DB欠落時にlegacy表示へ落ちても、移行成功とは扱わない |
| ブラウザはビルド時のAPI URLを使用 | `client/src/main.tsx`、`client/src/const.ts`、`AdminHome.tsx`。変数を保存するだけでは既存Pagesは変わらない |
| CIの確認先はRailway固定 | `.github/workflows/deploy-pages.yml`。HOYOVERSE_API_BASE_URLだけ変えても現状のCI検査先は変わらない |
| GitHubのredirect_uriは既に明示 | `githubAdminAuth.ts:registerGitHubAdminAuthRoutes()`。新旧コールバックの併存が可能 |
| SQLに実行時認証テーブルがある | `drizzle/0005_swift_exchange_code.sql`。schema.tsのテーブル列挙だけでコピー対象を決めない |

### 3.1 公式情報の確認記録

出典は2026-10-03に確認。共通設計書管理ルールに従い、外部資料はリンク依存にせず名称と必要な内容をここへ取り込む。サービス画面は未確認であり、メニュー名は実施時に照合する。

- Northflank「Build and deploy your code」: Git連携、Dockerfile、公開HTTPポート、TLS、CI/CD制御が利用できる。
- Northflank「Networking on Northflank」: HTTP/Sの入口でX-Forwarded-Forを付与する。ただしこの記述だけでは追加・上書き位置と信頼ホップ数を確定できない。
- Northflank「Migrate your MySQL database to Northflank」: dump uploadとRestoreを利用できる。Restoreは対象addonの既存ユーザーDBをすべて消す。dumpは1 DB、CREATE DATABASEを含めず、GTID_PURGEDをOFFにする。USEがなければaddonの既定DBへ入る。
- Northflank「Run migrations」: 現行のWorkflowsにjob、バックアップ、成功条件、デプロイを順序付けできる。旧Pipeline/Release flowはDeprecated表示のため新規採用しない。
- GitHub「About the user authorization callback URL」: GitHub Appは最大10個のコールバックを登録でき、redirect_uriで選べる。既存Railway URLを残し、新URLを追加する。
- Railway「MySQL」: 内部接続のMYSQL_URLと外部TCP ProxyのMYSQL_PUBLIC_URLは別。外部接続を使う場合はアクセス設定・料金・暗号化条件の確認が必要。
- Northflank「Pricing」: Sandboxにサービス2、DB1、cron job2の無料枠が掲示されている。実アカウントのjob/workflow/バックアップ利用可否、CPU/RAM/容量/リージョン/転送条件は別途確認。無料完結を本書の前提にしない。
- GitHub「Creating a GitHub Pages site」「Configuring a publishing source」: GitHub Actionsで静的ファイルを配信でき、サブディレクトリに置いたファイルはそのパスで公開される。本設計ではこれを使って同じ配信物に新旧2個のbaseを収める。

## 4. 設計方針・環境・担当

### 4.1 構成

| 期間 | 公開フロントの接続 | DBの正本 | Northflankの役割 |
| --- | --- | --- | --- |
| 並行検証 | 旧Pages → Railway、新Pages → Northflank | Railway MySQL | 新公開URLでコピーDBとAPIを検証 |
| 最終コピー | 新旧APIの受付・実行を停止 | 停止済みRailway MySQL | 検証DBを最終dumpで置換 |
| 切替後 | 旧Pages → 新Pagesへ転送、新Pages → Northflank | Northflank MySQL | 公開稼働。旧Railway APIは保守モードを維持 |
| 切戻し | 新旧API停止・逆コピー後、旧Pages → Railway、新URLは旧URLへ案内 | 逆コピーで一致したRailway MySQL | 保守モードで停止 |

Northflankに作成する名称案は `hoyoverse-builder` project、`hoyoverse-api` service、`hoyoverse-mysql` addon、`hoyoverse-migrate` manual job。すべて同じproject・regionに置く。APIはHTTP公開ポート3000、TLS、replica 1。DBは非公開の内部接続を標準とし、管理者の比較・逆コピーは認証付きローカル転送で行う。APIコンテナに永続volumeは不要。MySQLは永続ストレージとバックアップが必須。

### 4.2 採用案・代替案

- ビルドはDockerfileを採用。RailpackとBuildpacksの推定差、フロントを誤ってビルドする差を避け、マイグレーションjobにも同じimageを使う。
- DBは同じMySQLバージョンを優先。Northflankで用意できなければ作業を止め、往復restoreの互換試験を追加して本書改訂後に進む。古いバージョンへのimportは禁止。
- コピーはWorkBenchで単一dumpを作り、NorthflankへUpload/Restoreする方式を標準とする。接続文字列での直接importは資格情報公開・複数DB巻き込みを避けるため不採用。
- 切替前の画面は利用者指定の新Pages URL。ローカルpreviewは補助検証だけとする。CORSは新旧共通origin、認証の復帰先はbase別に固定する。
- 最終コピー時は計画停止。無停止のbinlog同期、差分merge、旧新双方への投稿は不採用。大容量で停止枠に収まらない場合は方式を再設計する。
- API再開後の切戻しは逆方向の全DBコピーを採用。独立DBのauto-increment IDを手作業でmergeしない。

### 4.3 担当の境界

利用者はアカウント/料金確認、GitHub App・環境変数の画面設定、検証用公開UIDと第二回線の用意、ブラウザ確認、切替時間の決定を担当する。実装担当はコード、Docker、workflow、dump健全性、データ照合、負荷を限定したレート試験、停止・再開・切戻しの技術操作を担当する。DB破壊を伴うRestoreと本番切替は、対象addon・バックアップ・合格証跡を共有してからその工程の実行を依頼する。詳細は別冊の対応表で追える。

## 5. 詳細仕様

### 5.1 コンテナ・起動・リリース識別

新規 `Dockerfile.northflank` と `.dockerignore` を作る。Node 22のDebian slim系を固定し、選定時のdigestとNode patchを記録する。CorepackでpackageManager指定pnpmを使い、lockfile、patches、package.jsonを含めて `pnpm install --frozen-lockfile` → `pnpm build:api`。API実行中にインストール・ビルド・DB migrationをしない。

`build:api`は外部パッケージをbundleしないため、実行imageへnode_modulesを含める。migration jobは同じimageを使うためdrizzle-kitも保持する。`drizzle/`全体と `drizzle.config.ts` を必ず入れる。これは段階移行の保守性を優先する選択であり、依存の削減は後続課題。`.dockerignore`で `.git`、node_modules、dist、.env系、ログ、tmp、dumpを除外し、`.env.api.example`だけは例として許可してよい。秘密をbuild ARG/ENVやimage layerへ含めない。

起動は `NODE_ENV=production`、`API_ONLY=true` で `node dist/index.js`。PORT=3000を明示する。production/API_ONLYでは空きポートへ切り替えず、PORTが不正・使用中ならプロセスを非0で終了する。起動失敗を `console.error` だけで握りつぶさない。local developmentの空きポート探索は維持する。

ビルド時の非秘密ARG `APP_REVISION` をGitの40桁SHAから固定し、実行imageへ反映する。APIとmigration jobのimage digest、NorthflankのデプロイSHA、Pagesのworkflow SHAを証跡で照合する。Railwayでは同じAPP_REVISIONを実際の稼働SHAと一致するruntime変数へ設定し、設定値だけでなくダッシュボードのデプロイSHAも照合する。公開health応答は既存 `{ok:true, service:...}` を保ち、`revision`（APP_REVISION）、`maintenance`、`migrationPreview`（各boolean）を追加する。接続先・秘密・DB内容は含めない。APP_REVISIONの設定忘れはリリースゲートで拒否する。旧クライアントが追加フィールドで壊れないことを確認する。

readiness/livenessは `/api/health`、PORT3000、HTTP200を使用する。startup猶予120秒を設定の初期値とし、頻度と失敗閾値は実画面に合わせて記録する。healthの成功はプロセスの生存だけを意味する。DB障害で再起動ループを作らず、DB健全性は別途受入で検査する。

### 5.2 環境変数・秘密

| 名称 | Northflank並行検証 | 切替後 |
| --- | --- | --- |
| NODE_ENV / API_ONLY / PORT | production / true / 3000 | 同じ |
| DATABASE_URL | Northflank addonの内部MySQL URL。既定DB名・URLエンコードを確認 | 同じ |
| CORS_ORIGINS | `https://sitar-sitar.github.io` | 同じ |
| ADMIN_FRONTEND_URL | `https://sitar-sitar.github.io/hoyoverse-builder/app` | 同じ |
| GITHUB_APP_CALLBACK_URL | 新API base + `/api/auth/github/callback` | 同じ |
| GITHUB_APP_CLIENT_ID / CLIENT_SECRET | 既存GitHub Appの値を秘密画面間で転記 | 同じ |
| ADMIN_GITHUB_IDS | 既存の数値ID allowlist | 同じ |
| ADMIN_SESSION_SECRET | Northflank用に新しい32文字以上のランダム値 | 同じ |
| CLIENT_IP_SOURCE（新設） | `northflank` | 同じ |
| NORTHFLANK_TRUSTED_PROXY_HOPS（新設） | §5.3の実測済み値。推測値で本番運用不可 | 同じ |
| API_MAINTENANCE（新設） | `false`。コピー時は `true` | `false` |
| API_MIGRATION_PREVIEW（新設） | `true`。検証期間の非管理者のDB書き込みを制限 | `false` |
| APP_REVISION（新設） | imageに固定したリリースSHA | 同じ |

secret groupはAPI用とmigration用で分ける。migration jobへ渡すのはDATABASE_URL等の必要項目だけで、GitHub client secretやsession secretを渡さない。DB管理用アカウントをAPIへ流用せず、必要なDML権限とmigration用DDL権限を分離できるかNF-M1で確認する。

DATABASE_URLはmysql2とdrizzle-kitの両方で実接続試験する。TLSを使う場合はCA検証を満たす接続設定を両方に揃え、証明書検証を無効にしない。文字列だけで対応不能なら `server/db.ts` と `drizzle.config.ts` の接続設定を同じ仕様へ改訂してから実装する。Railwayの内部MYSQL_URLをNorthflankへコピーしない。

VITE_変数はブラウザへ公開される。VITE_API_BASE_URLへAPIのhttps baseだけを入れ、DB URL・秘密・認証情報を入れない。`VITE_MIGRATION_PREVIEW=true`は新ページの案内/投稿UI制御専用で、サーバー側制限の代わりにしない。NorthflankにRAILWAY_PROJECT_IDを偽装登録しない。Manus専用環境変数はAPI_ONLYで必要がないため移行対象外。

### 5.3 利用者IP・レート制限

`clientIpFromRequest()`を共通入口のまま拡張し、CLIENT_IP_SOURCEを `auto`（未設定時）、`socket`、`railway`、`northflank` のenumにする。

- autoは既存互換: RAILWAY_PROJECT_IDあり → Railway X-Real-IP、なし → socket。Railway既存デプロイを壊さない。
- railwayは既存の単一IP検証と欠落時のsocket fallback＋一度だけの警告を維持する。
- socketは転送ヘッダーを無視する。ローカル・直接接続でヘッダーだけによる偽装を許さない。
- northflankは公開LB以外の直接接続経路を許可しない構成を前提に、X-Forwarded-Forの右端から「実測済みの信頼ホップ数」番目を採る。空要素、IP以外、ホップ不足、複数header配列の曖昧さを拒否する。IPv4/IPv6をnet.isIPで確認し、IPv4 mapped IPv6とのキー表現の揺れを正規化する。
- NORTHFLANK_TRUSTED_PROXY_HOPSは1〜5の整数を要求し、未設定・不正値・enum不正は起動失敗。不明なproxy構成をsocketへ黙って落とさない。
- northflankの個別要求でheader欠落/不正ならsocketで安全側に制限し、秘密・実IPを含めない一度だけの警告と件数を出す。fallback発生が1件でもあれば切替ゲートは不合格。
- Express全体のtrust proxyは変更しない。HTTPS CookieとOAuthのforwarded protocolは別の実ブラウザ検証で保証する。

NF-M4で、実際のヘッダー上書き/追加順、複数ホップ、HTTP入口以外の到達可否を確認する。左端を無条件採用しない。右端候補が実クライアントと一致し、任意のX-Forwarded-For/X-Real-IPを送っても制限を回避できず、第二回線と別バケットになることを実証する。診断に一時的なヘッダー観察が必要なら担当者だけの非公開shellで行い、UID・認証ヘッダーを記録せず、取得IPもGit/公開ログへ残さない。実測の結果だけを証跡化する。想定を満たさなければホップ数を推測修正して進めず、本節を見直す。

最初のLB測定でAPI起動が必要な場合のみ、担当者がCLIENT_IP_SOURCE=socket、API_MIGRATION_PREVIEW=trueの一時診断環境を起動してよい。この段階はIP受入未合格で、parallel Pagesを公開しない。測定後、northflankと確定ホップ数へ変更して再起動し、複数回線・偽装試験を完了させる。診断設定を正式releaseへ残さない。

制限値は変更しない: 非tRPC 120要求/分/IP、tRPC全体120 operation/分/IP、lookup 20 operation/分/IPかつ6 operation/分/ゲーム・UID、feedback 5投稿/10分/IP。healthとOPTIONSは除外。tRPCの拒否はTOO_MANY_REQUESTSとRetry-Afterを既存エンベロープで返し、混合バッチの許可/拒否を壊さない。

インメモリ制限のため定常稼働1 replica、autoscalingは無効。移行中の更新は旧コンテナを停止して新imageを起動するRecreate相当の順序にし、旧新コンテナが同時受付するrolling更新を避ける。単にreplica設定が1であるだけでは重複期間が無い証拠にならない。将来のrolling/scaling変更は共有制限ストア設計後に行う。

### 5.4 保守停止・コピー中の受付

新設 `server/_core/maintenance.ts` をCORSの後、body解析・レート制限・OAuth/tRPC処理の前に適用する。API_MAINTENANCEは未設定=false、true/false以外なら起動失敗。

- true時、`/api/health`とOPTIONSだけを許可する。他の `/api` とその子パスはHTTP503、JSON `{error:"Service temporarily unavailable for maintenance"}`、Retry-After=60、Cache-Control=no-store。公開応答に内部事情を出さない。
- auth、callback、exchange、UID照会、feedback、display、analyticsをすべて止める。POST queryも、単件/複数tRPCバッチも、GET queryも処理本体へ渡さない。
- tRPC503を手製のRPC形式へ変換しない。`safeTrpcFetch`でバッチ全体が通信エラーになることを確認する。保守中は管理者も再ログインできない。
- healthはmaintenance=trueを明示する。CIは通常の公開ビルドでmaintenance=trueを検出したら失敗させる。
- 設定変更後も処理中のリクエストと非同期analytics書き込みが残り得るため、最終dump直前に新旧APIコンテナを完全停止する。DBサービスは止めない。
- 稼働コンテナ0、外部job/手動SQLの書き込みなし、MySQLの処理中DML/transactionなしを担当者が確認する。DB件数・hashが停止後の再計測で不変であることも確認する。未完了の正当な投稿があれば利用者へ再送確認を行い、受付成功済みのデータを欠落させない。
- 旧Railwayは切替後、API_MAINTENANCE=trueで起動するか停止を維持する。古いPagesタブや直APIから旧DBへ書き込ませない。新APIへ自動redirectしない。

### 5.5 DBコピー・一致確認

コピー対象は実DBの全ユーザーテーブル。最低対象はusers、translation_feedback、lookup_analytics_events、site_display_settings、admin_auth_exchange_codes、Drizzleのmigration履歴。履歴の実テーブル名・所在をSHOW TABLES/SHOW CREATE TABLEで特定する。実DBに追加テーブル・view/trigger/routine/eventがあれば役割と必要性を確認し、黙って省略しない。定期eventが書き込む場合はコピー中も止める。

スキーマとデータ、インデックス、enum、AUTO_INCREMENT、文字コード/collation、UTC/JSTとtimestampの扱いを保持する。本番のMySQL version、sql_mode、time_zone、engineと最大dumpサイズをNF-M1で取得し、同条件を新DBに設定する。

1. Railwayから初回dumpを作り、Northflankの移行専用addonへUpload→Restoreする。成功ログだけで合格としない。
2. final dumpは§5.4の停止後に再取得。検証データを含むNorthflank addonをこのdumpで置換する。Restoreはaddonの全ユーザーDBを消すため、他用途のDBを同居させない。
3. dumpは単一DB、CREATE DATABASE/元DBへのUSEを含めず、GTID_PURGED=OFF。GUIは「Dump Structure and Data」「Self-Contained File」「Include Create Schema OFF」を使用する。文字コードはutf8mb4を保持する。system DBを選ばない。
4. final exportの時刻（JST/UTC）、元/先の非秘密リソース名、dumpサイズ・SHA256、MySQL version、schema比較結果を記録する。dump本体、DB URL、個人データはrepo/共有チャットへ置かない。バックアップは暗号化またはOSで保護されたリポジトリ外の保存先へ置く。
5. 全テーブルの行数、主キー範囲、schema、正規化済み全行のSHA256を比較する。hashは担当者の非公開照合ツールで主キー順・固定列順に並べ、NULL/文字列/日時を区別して生成する。件数だけでは改変・欠落の相殺を検出できないため全行hash一致を必須とする。dumpのSHA同士の比較だけではimport内容を検証できない。
6. 明示許可する差は接続DB名/hostと、受入成功後の短命認証交換コード削除のみ。データ比較完了前に認証テーブルを消さない。表示設定、feedback本文/状態、analytics履歴、usersの数値IDはすべて一致させる。
7. migration履歴を含むコピー後、同じrelease imageで `pnpm exec drizzle-kit migrate` を1回実行し、再実行で履歴・schemaが増えず非0終了しないことを確認する。既に反映済みのmigrationは再適用しない。`db:push`やmigration生成を本番で使わない。
8. 一致確認後、新DBのadmin_auth_exchange_codesを担当者が空にし、旧交換コードを再利用させない。Northflank用session secretで旧Bearerも受け入れない。再ログインを必須とする。この削除は認証用短命レコードだけで、users等は削除しない。

コピー途中失敗は対象addonを非稼働のままにして、同じ検証済みdumpからやり直す。partial importをアプリへ開放しない。初回コピー中もRailwayは更新されるため、初回の旧新全行hash比較は凍結点を持たない限り合格判定に使用せず、固定dumpと新DBの比較でコピー手順を検証する。最終コピーでは停止済みの旧新DB全行hash一致を保証する。

### 5.6 デプロイ前migrationとCI/CD・2個のPages入口

NorthflankはBuild→DB backup→manual migration job→成功条件→API停止/新image起動→health/データ検査の順序をWorkflowsで構成する。同じimage digestをjobとAPIへ使い、release同時実行を禁止する。失敗したjobを成功扱いしてCDを進めない。自動CDとjobのauto-run/cronは無効にし、初回は各段階を手動で検証する。backup/Workflowsが選択プランに無ければ、手動backup/job/デプロイを同じゲート順で実行することを実施記録へ固定する。backup手段がない場合は本番切替不可。

移行期間中は既存RailwayとPagesの自動更新も止めるか、移行用の変更以外のmain pushを禁止する。Railwayでmigration互換コードを公開するときは従来のRailway分岐と接続先を維持して回帰を確認する。移行準備PRのmain反映は既存Pages自動公開を起こし得るため公開工程として扱う。

`.github/workflows/deploy-pages.yml` の公開モードを `vars.HOYOVERSE_PAGES_MODE` のenum `legacy` / `parallel` / `forward` / `rollback` で制御する。空値・未知値は失敗。`HOYOVERSE_API_BASE_URL` は旧Railway URL、`HOYOVERSE_NORTHFLANK_API_BASE_URL` は新API URLとし、各ビルドと各疎通検査は同じ変数値を使う。固定fallbackを廃止する。移行準備反映前に旧URLとlegacyを明示登録する。新URL未準備の段階はlegacyで旧だけを公開し、NF変数や疎通を要求しない。parallelを名乗る公開は両APIの合格後に限る。

`vite.pages.config.ts` にbuild用 `PAGES_BASE_PATH` と `PAGES_OUTPUT_DIR` を追加する。許可するbaseは旧 `/hoyoverse-builder/` と新 `/hoyoverse-builder/app/`、出力先はrepo内の既定 `dist/pages-legacy` / `dist/pages-next` のみ。未指定時は従来base/outDirを維持し、PR回帰を壊さない。path traversalや任意の外部directoryを禁止する。

- legacy: 移行コードの準備用。同じSHAの旧APIだけを検査し、旧base/旧API/preview=falseのrootアプリと従来route/404を配信する。NF service完成前でも公開可能で、新app URLはまだ生成しない。
- parallel: 同じSHAから旧base/旧API/preview=false、新base/新API/preview=trueの2回build。rootへ旧build、`app/`へ新buildを配置した単一の `dist/pages-artifact` をuploadする。
- forward: 新base/新API/preview=falseを `app/`へ配置。rootのindexと旧既知routeを§5.9の転送HTMLで置換する。新buildのファイルをrootへflattenしない。旧Railway APIのhealth・guideHistoryを公開条件にしない。
- rollback: rootへ旧base/旧API/preview=falseを戻す。`app/`と新routeは旧相当routeへの案内/転送HTMLを置く。停止中のNFを疎通条件にしない。
- 旧/新それぞれにcharacters、updates、feedback、admin、admin/feedback、admin/displayを生成し、直アクセスと再読込を検査する。root 404.htmlは§5.9に従い既知旧pathだけを変換し、新path/未知pathを誤転送しない。
- 毎回artifact全体を再構成する。Pages deployは全体置換のため、旧だけ/新だけを別workflowから上書き公開しない。公開workflowは一つ、pages concurrencyも一つとする。

そのmodeで使うAPI URLは空値、http、資格情報入りURL、path/query/fragment付き値をCIで拒否する（末尾slashは除去可）。稼働対象APIのhealthのok/maintenance=false/revision/migrationPreview、CORS、guideHistoryのRPC応答を検査する。migrationPreviewはparallelのNFだけtrue、その他の検査対象はfalseを要求する。APIのrevisionが公開予定workflow SHAと一致しなければ公開を止める。parallelは両API、forwardはNF、legacy/rollbackはRailwayが対象。同じSHAのAPIを先に準備してからPagesを公開する。文書だけの後続pushも同様であり、移行期間はmain変更を凍結する。停止している旧APIをforwardで検査してデプロイを止めない。

変数保存は新ビルドでのみ有効。Run workflowにはmain上の固定リリースSHAが選ばれる状態を作り、想定外のpush・concurrency cancel・旧workflow再実行を防ぐ。既存test/check/API build/route検査は維持する。各JS bundleはその環境のAPIへだけ接続し、動的なRailway/NF fallbackは作らない。

### 5.7 新Pagesでの管理者ログイン・保存状態分離

旧公開URLはRailwayへつないだまま、新公開URL `/hoyoverse-builder/app/` のVITE_API_BASE_URLをNFへ固定する。Wouter base、asset URL、ログイン復帰、logout、直接routeリンクを新baseで検証する。CORSのoriginは同じ `https://sitar-sitar.github.io` であり、pathをCORS_ORIGINSへ入れない。

GitHub Appへ新APIの `/api/auth/github/callback` を追加登録し、旧URLは残す。setup URLやwebhook URLを変更しない。callback完全一致を使い、新URLにwildcardを有効にしない。既存URLのwildcard変更は今回の移行と別扱い。

NorthflankのADMIN_FRONTEND_URLを新Pages baseへ固定する。GitHub→新API callback→新Pagesへの復帰→交換コードPOST→新API Bearer→管理画面を実ブラウザで確認する。旧APIは旧Pagesへの復帰先を維持する。callbackを直接開くとstateが無く403になり得るため、必ず各画面のログインボタンから開始する。state CookieのSecure/Lax、session CookieのSecure/HttpOnly、コードの単回消費、非管理者拒否、logout、再読込、第三者Cookie制限下のBearer経路を確認する。

同一originの別pathでもWeb Storageは共有されるため、`client/src/lib/adminSession.ts`、`loginReturnPath.ts`、`DisplaySettingsContext.tsx` の管理者token/復帰先/表示cache/表示preview keyをbaseで分離する。旧baseは従来keyを維持、新baseは従来key+新baseの固定suffixを使う。新baseから旧keyを読み込まない。言語/テーマの好みは共通のままでよい。テストで同じタブを旧→新→旧へ移動して、ログイン・logout・表示previewが相互に汚染しないことを確認する。

最終同期後、新DBの認証交換コードを無効化し新ページで再ログインする。旧Bearerを転送先へ渡さない。`/admin`、`/admin/feedback`、`/admin/display`の各旧リンクが対応する新ページへ着き、そこでログインを始められることを確認する。

### 5.8 公開並行ページの試験データ・書き込み制御

新URLは秘密ではなく誰でも到達し得る。検証期間の新ページは「移行確認用ページです。通常利用・お問い合わせは現在のサイトをご利用ください」という三言語の案内と旧URLへのリンクを表示し、非管理者のfeedback送信UIを無効にする。検索用metaにnoindexを入れるが、noindexをアクセス制御とは扱わない。

サーバーにAPI_MIGRATION_PREVIEW=trueを設定し、`feedback.submit`は認証済みallowlist管理者だけを許可、その他はFORBIDDENと案内文を返す。`build.lookup`のanalyticsは検証管理者の要求だけを記録し、非管理者の閲覧は記録しない。既存admin mutationはallowlistを維持する。GitHub callback/exchangeの書き込みはallowlist管理者だけで既存通り許可する。API_MIGRATION_PREVIEWの値はtrue/false厳密検証、Railway未設定はfalse。

公開UIDや図鑑は非管理者にも閲覧可能だが、この検証環境には永続データの受付を委ねない。実装担当は既存system routerを含む全mutationと非同期書き込みを列挙し、preview経由に公開書き込みの抜け道が無いことを検証する。最終copyで検証管理者の投稿/設定/analyticsもすべて置換する。実利用の投稿が誤って保存されていれば破棄せず移行を停止して正本への保全を解決する。

final restore後にAPI_MIGRATION_PREVIEW=falseでNFを再開する。この時点から新URLは正規受付可能となり、全ての切戻しを逆copy区分で扱う。forward buildでフロントのVITE_MIGRATION_PREVIEW=false/noindex解除/案内削除を揃える。サーバーflagと画面flagの片側だけを解除して正式公開と呼ばない。

### 5.9 旧URLのフォワード

GitHub Pagesの静的HTMLによるクライアント転送を採用する。サーバー設定のHTTP301/302とは区別し、レスポンス200の転送HTMLと `location.replace()`、JavaScript無効時の新URLへのリンクで実現する。固定ルートのmeta refreshは補助手段に限り、JS転送と二重実行しない。

対象は旧root、characters、updates、feedback、admin、admin/feedback、admin/displayの既知path。末尾slashの有無を吸収し、同じrouteを新baseへ写す。new base自身は転送対象外として最初に除外する。URLのqueryとfragmentは転送へ渡さず、UID・token・admin_exchange_codeを新サイトへ運ばない。画面フィルター等のquery状態は引き継がず、言語/テーマは共通storageで保持する。

転送先は同じoriginの固定base+許可routeだけで、`next`や`redirect`等の外部入力を使わない。未知pathは新rootへの明示リンクを表示し、自動転送しない。root404は新baseの未知pathを旧へ戻さず、既知旧pathだけを写す。旧404.html自身を開いた場合も自動loopしない。

forward artifactは既存アプリJSを転送HTMLから読まない。古いブラウザtabはJSを持ち続け得るため、旧APIのmaintenanceがデータ分岐を防ぐ最終防御となる。転送HTMLのcanonicalは対応新URLにする。旧URL転送は旧Railway廃止後もPagesに残し、新URLを削除しない。

rollbackでは旧rootのアプリを復元し、新baseの既知routeを旧baseへ案内する。旧→新転送と新→旧転送を同じartifactへ同居させない。公開前の生成物検査と実Chromeの戻る操作でloopが無いことを確認する。

## 6. 変更ファイル・実装順

以下は実装予定であり、この文書作成では変更しない。

| ファイル/設定 | 変更する内容 | 検証点 |
| --- | --- | --- |
| `Dockerfile.northflank`、`.dockerignore`（新規） | Node/pnpm固定、API image、migration資材、秘密除外 | 同じimageでAPIとmigrationが起動 |
| `server/_core/rateLimit.ts` | clientIpFromRequestの環境別分岐とXFF検証 | local/Railway回帰、NF偽装耐性、複数回線 |
| `server/_core/maintenance.ts`、同test（新規） | 保守停止ゲート | callback/query/mutation/バッチ処理が実行されない |
| `server/routers.ts`、`server/_core/systemRouter.ts`（必要箇所） | preview flagで公開書き込みを制御、analytics分岐 | 非管理者の試験DB投稿・書き込み抜け道なし |
| `server/_core/index.ts` | 保守の適用順、health追加情報、production固定PORT/非0終了 | health例外、失敗起動、CORS保持 |
| `server/_core/rateLimit.test.ts`、`rateLimitHttp.test.ts`、`server/rateLimitProcedures.test.ts` | 環境分岐、ホップ、不正値、制限境界 | 既存閾値・RPC構造維持 |
| `server/githubAdminAuth.test.ts` | 新hostでcallback指定と交換コード互換を検証 | state・単回消費・allowlist |
| `client/src/lib/safeTrpcFetch.test.ts` | 保守503時の複数バッチ回帰 | 応答偽装せず全操作で通信失敗 |
| `vite.pages.config.ts`、`.github/workflows/deploy-pages.yml` | 2baseのbuildとartifact組立、準備用legacyと3移行mode、API変数/入力/revision検査 | 新旧のJS・route・APIが混ざらない |
| `scripts/pages/build-artifact.mjs` と同test（新規予定） | 2build配置、route HTML、転送生成、404処理 | forward/rollback loop・公開物上書きがない |
| `client/src/lib/adminSession.ts`、`loginReturnPath.ts`、`contexts/DisplaySettingsContext.tsx` と各test | base別の保存key | token/表示設定を旧新で共有しない |
| `client/src/components/MigrationPreviewBanner.tsx`（新規）、`client/src/App.tsx`、`client/src/pages/TranslationFeedback.tsx` | 三言語の確認用案内、旧URLリンク、非管理者投稿停止 | 正式公開で案内解除、UIだけで制限しない |
| `.env.api.example` | 新変数・Railway/NFの入力例を明記 | 秘密実値なし |
| `scripts/migration/compare-mysql.mjs`（新規予定） | 全テーブルschema/全行hash比較、匿名結果のみ | 同数で1セル差/NULL差も検知。大表はstream処理 |
| `README.md`、`docs/実装ログ.md`、索引 | 実装・公開・観察の証跡を段階別同期 | 設計済みと本番反映済みを分離 |
| Northflank/ GitHub / Railway設定 | 本書のゲート順に操作 | 操作者、時刻、対象resourceを記録 |

接続TLSの実確認で必要と判明した場合だけ `server/db.ts`、`drizzle.config.ts` を本書§5.2に反映してから変更する。認証client codeやDB schemaは移行のためだけに変えない。

## 7. 実施フェーズ・状態遷移

| フェーズ | 実施内容 | 次へ進む条件 |
| --- | --- | --- |
| NF-M1 現状確定 | 現行main/本番SHA、DB実体・全表・version/容量、料金/権限/region、停止方法、バックアップ/逆restore経路を取得 | U01〜U06の準備情報を埋め、正本/手順を更新。推測値を残さない |
| NF-M2 移行準備実装 | Docker、IP adapter、maintenance、CI変数化、2URL/転送、preview制限、検証ツール。Railway互換を確認 | T01〜T10合格。旧URL変数を登録。公開依頼後に移行用release SHAを固定 |
| NF-M3 並行環境 | NF project/addon/API/job、初回コピー、migration、新旧2URLをparallel公開、callback追加 | 旧PagesがRailwayのまま、新PagesがNFへ向き、新DBがdumpと一致 |
| NF-M4 並行受入 | UID3ゲーム、認証・表示設定/feedback、レート/ヘッダー、往復restoreリハーサル、所要時間/容量 | A01〜A09/A15合格。ホップ数を確定してドラフト解除。停止枠決定 |
| NF-M5 最終コピー・切替 | main更新禁止、両API保守→完全停止、final dump、Restore/全行照合、job、認証コード無効化、NF正規受付再開、Pagesをforwardで再公開 | A10〜A13合格。再開以降は逆コピーを要する切戻し区分 |
| NF-M6 公開確認・観察 | 実PagesからUID/ログイン/永続化/再起動検証、24時間連続観察 | A14合格。旧Railwayは保守/停止で保持 |
| NF-M7 旧環境廃止 | 7日以上の保持、backup restore成功、課金/公開/rollback再確認 | 利用者が廃止を依頼後に旧API/DB削除とcallback整理 |

状態は「準備中→parallel公開/検証→切替待ち→両API停止→final restore検証→NF正規受付再開→forward公開→観察中→移行完了」。任意のゲート失敗は次へ進めず、NF正規受付再開前は旧DB維持で再開、再開後は§10の逆コピーへ遷移する。並行期間のNF検証管理者データは切戻しの本番正本には使わない。

計画停止枠の初期上限は60分。NF-M4のリハーサルで、export/import/照合/job/Pages build/戻しの所要時間に余裕を加えて停止枠へ収まると確認する。収まらない場合は切替日を決める前に本書と別冊を改訂する。60分で終わるという実測済み予測ではない。

## 8. テスト・検証

### 8.1 実装時の検証（今回は未実施）

| ID | 検証 | 合格条件 |
| --- | --- | --- |
| T01 | `pnpm check`、`pnpm test`、`pnpm build:api`、Pages build | 正常終了。既存認証/圧縮/Vary/POST query/キャッシュ回帰が無い |
| T02 | Docker API起動、health、同image migration | imageの資材不足なし。migrationはschema生成をせず2回目no-op |
| T03 | IP純関数・起動設定 | auto/local/Railway互換、IPv4/IPv6、右からの採取、ホップ不足/不正/配列、起動不正値を拒否 |
| T04 | レート制限HTTP/tRPC境界 | maxとmax+1の違い、時間経過の回復、混合バッチ、Retry-After、除外経路が維持 |
| T05 | maintenance実サーバー | 全DB書き込み処理が非実行。OPTIONS204/health200。tRPC複数バッチは一括通信エラー |
| T06 | production port/起動失敗 | port競合/不正で非0。別portで生存しない |
| T07 | CI入力 | URL空/http/credentials/pathを拒否。新旧の各URLが疎通とbuildへ同じ値で渡る。maintenance/revision不一致を拒否 |
| T08 | DB照合ツール | 件数同数の値差、欠表、schema差、migration履歴差、NULL/空文字差を検出。ログへ行内容や秘密を出さない |
| T09 | 2base/4modeのartifact | legacyはNF未準備でも旧公開可能。旧新のassetと各routeが正しい。forward/rollback/404でloopや外部入力転送なし、query/hashを転送しない |
| T10 | 保存key分離と公開preview | 旧token/表示cacheが新で読まれず、非管理者投稿/非同期書き込みを拒否。flag不正は起動失敗 |

### 8.2 実環境試験の方法

- UID試験は利用者が提供する公開プロフィール（HSR/原神/ZZZ各1件以上）を私的に使用する。固定UIDを設計書やログへ書かない。取得不能ならそのゲームは未検証とし合格にしない。
- 同一release、同一上流データの保存fixtureでガイド/数値/装備/比較の非変更を確認する。live照会は更新時刻やキャッシュ差を区別し、差があれば同じ上流応答で再現して原因を確定する。
- IP独立試験は自宅回線Aと携帯テザリングBなど異なる外向きIPを使う。同じWi-Fiの別端末は代用にならない。全体上限の試験は上流API不要のguideHistory等でAを制限し、Bが通ることを確認。UID別制限とIP別制限を混同しない。
- 閾値試験はNF検証環境のみ、固定ウィンドウ内に制御して実行する。lookupはfixture/mockを主体とし、live上流を大量照会しない。同一UID7回試験は既存cacheが有効な状態で実施する。
- ヘッダー偽装後もAの拒否が続くことを確認し、Bの正常要求には波及しない。偽装IPは試験用予約アドレスを使用する。
- 性能比較は同一回線・同一releaseでhealth/guideHistory各10回と、3ゲームのcache hit照会を各10回、12秒以上間隔で計測する。最初のcold照会は別集計。中央値がRailway基準の2倍を超えるか500ms以上悪化する場合は切替を止め、原因/プランを見直す。小標本のp95を可用性保証に使わない。
- 24時間はhealthを5分ごとに確認し、通常の利用でUIDと認証/DB更新を再確認する。計画再起動以外のOOM・crash、連続2回のhealth失敗、保存失敗、IP fallback警告があれば観察ゲートを閉じる。バックアップ保存・復元の機能も確認する。

## 9. 受け入れ条件・証跡

すべて未実施から開始する。証跡は担当者の実施日、対象SHA/resource、PASS/FAIL/NOT_TESTED、秘密を除いた結果を実装ログへ記録する。スクリーンショットはトークン・UID・DB URL等を隠し、har全体を共有しない。

| ID | 必須条件 |
| --- | --- |
| A01 | 新APIがHTTPS、固定PORT、revision一致、health正常、定常replica1/更新時重複受付なし |
| A02 | 初回dumpの復元、migration no-op、DB version/全表/インデックス/文字コードの確認 |
| A03 | 3ゲームのUIDが照会でき、比較値/装備/図鑑/履歴が同releaseの期待値と一致 |
| A04 | 新Pagesの実Chromeログイン→callback→交換→管理画面、非管理者拒否、再読込/logout、第三者Cookie制限下Bearerが合格。旧新を同タブで往復して保存状態が混ざらない |
| A05 | 検証DBでfeedback保存・status更新と表示設定publishが成功し、API再起動後も残る。公開display値がDBと一致 |
| A06 | 実LBホップ/上書き方式を確定。異なる外向きIPが独立、ヘッダー偽装で回避不可、fallback警告なし |
| A07 | 全制限の境界/回復、health/OPTIONS例外、tRPC複数バッチ形式が合格 |
| A08 | 性能ガード合格、必要RAM/DB容量/料金/backup・job機能を実プランで確認 |
| A09 | 検証dumpをNorthflank→非本番の旧互換MySQLへ戻し、全行hash/認証/設定読み取りが一致。最終copy/切戻し時間が停止枠に収まる |
| A10 | final dump前の新旧API稼働0とDB書き込み停止を証明し、final dump/hash/バックアップ保全 |
| A11 | 最終コピー後、停止済み旧新DBの全行hash/schema/件数/migration履歴一致。認証コード削除前に比較する |
| A12 | CORS/新Pages ADMIN_FRONTEND_URL、callback併存、session secret/storage分離、job成功、API/PagesのSHA一致。APIと画面のpreview flagを正式値へ揃える |
| A13 | forward workflow成功。旧全既知URLが新相当routeへloopなく転送、新の配信JSとNetworkはNFへ向く。旧APIは保守/停止で旧DB書き込みなし |
| A14 | 公開PagesでUID3ゲーム、ログイン、feedback/表示設定の永続化を確認し、24時間観察と復元試験が合格 |
| A15 | parallel期間に旧新両URLが正しいAPIへ向き、新ページの非管理者投稿がUI/APIの両方で停止、確認用案内/noindexが存在 |

U01〜U08が未解決、またはA01〜A09/A15の一つでもNOT_TESTEDなら最終コピーを開始しない。health200、CI green、無料枠の存在だけを切替の合格条件にしない。

## 10. リスク・ロールバック

### 10.1 NF正規受付再開前（新本番正本への書き込み無し）

Northflankを停止またはpreview制限のままにし、Railwayの元DBと元接続先を維持する。Railway APIの保守を解除、旧callback/ADMIN_FRONTEND_URLを確認して再開する。Pagesをrollback modeで再公開して旧rootアプリを維持し、新URLに旧URLへの案内を置く。検証管理者の変更しか無いNFコピーを元DBへ戻す必要はない。preview制限違反による実利用の投稿があればこの経路を使わず保全する。

### 10.2 NF正規受付再開後（書き込み発生を前提にする）

UID照会・ログインだけでもDB更新が起きるため、Pages公開失敗時もこの区分で扱う。新DBに更新が無いと証明できない限り、古いRailway DBへURLだけ戻すことは禁止。

1. main/自動更新を止め、新旧APIを保守→完全停止。DBは稼働させる。
2. Northflankの最新DBとRailwayの切替前DBを両方backup。NF DBを正本として全表dumpを取得する。NF-M4で試験した同じMySQL互換性/ツールで作業する。
3. 実装担当がRailwayの対象アプリDBだけを置換して復元する。他のDBを消さない。復元先名と容量を確認し、dumpのschema名差を安全に吸収する。盲目的なSQL検索置換、個別INSERT merge、migration履歴の手編集は禁止。
4. 全表schema/全行hash/件数をNFとRailwayで一致させる。接続先名以外の差を残さない。短命交換コードを無効化し、管理者は再ログインする。
5. 互換releaseのRailway APIを再開し、health/DB/認証/表示設定を確認。Pagesをrollback modeで同じreleaseから再公開し、旧rootアプリを復元、新URLは旧相当URLへの案内/転送にする。
6. 公開画面で保存と表示を確認。NFは保守/停止を維持する。失敗時は双方停止とbackup保全を維持して復旧へ移る。古いsnapshotへ無断で巻き戻さない。

移行期間はスキーマ変更を禁止するため、逆copyの互換性を維持できる。往復restoreに失敗した環境では切替を開始しない。NF DBが読み出せない障害では即時逆copy不能なので、最後のbackup時刻と失う可能性のある範囲を報告し、利用者の復旧方針決定まで古いDBで再開しない。無損失・無停止を約束しない。

### 10.3 リスクと検出・回復

| リスク | 防止・検出 | 回復 |
| --- | --- | --- |
| Restoreで別データを消す | 移行専用addon、対象名照合、backup | 正しいdumpから非稼働addonを再構築 |
| 古いタブが旧DBへ投稿 | 旧API保守維持、旧DB件数/更新時刻監視 | 両環境停止、勝手にmergeせず整合性調査 |
| 正式版前の検証データ採用 | final Restoreで置換、全行hash | final dumpからやり直す |
| IP共有/偽装回避 | 複数回線・偽装試験、fallback警告 | 切替前は旧環境継続、切替後は逆copy |
| DB欠落でもlegacy表示で見逃す | 表示設定全行照合、管理画面/API値照合 | backupから復元 |
| Cookie/redirect先の差 | localと公開で別々にログイン試験 | callback/環境設定を修正。旧URLは保持 |
| CIだけ旧APIを検査 | URLの一元化とrevision照合 | 誤ったartifactを公開せず正しいURLでbuild |
| 無料枠不足/費用増 | 実RAM/容量/転送/料金監視 | 切替前にプラン合意、切替後は資源増強または逆copy |

旧Railwayの保持は公開切替後最低7日、かつ24時間観察・復元試験合格まで。保持中も費用がかかり得る。利用者の廃止依頼後に旧API/DBと旧callbackを削除し、README/実装ログ/索引を同期する。廃止後は迅速なRailway切戻しを保証しない。backup保存期限・削除日を利用者と決める。

## 11. 未確定・要確認事項

| ID | 未確認事項 | 解決方法・ブロック対象 |
| --- | --- | --- |
| U01 | 本番SHA、現在のDB実体/全表、MySQL version、容量、書き込みjob/event、権限 | NF-M1でダッシュボード/SQL確認。NF-M3開始前に必須 |
| U02 | Northflankの実プラン、無料枠の機能/資源、region、月額予算、backup/手動job/Workflows | 利用者が画面確認。無料不可なら予算を決めるまで本番resource作成を進めない |
| U03 | Northflank LBのXFF順序/上書き・ホップ数・直接接続経路 | NF-M4実測。IP adapterの採取位置確定と本番切替をブロック |
| U04 | DB内部URL/TLS/CAがmysql2とdrizzle-kitで互換か | NF-M3の接続試験。必要なら本書改訂して接続コード修正 |
| U05 | Railway APIの完全停止/再開手順と自動再起動/CD停止、DB逆restore接続経路 | NF-M1で画面手順を固定。final停止と切戻しをブロック |
| U06 | GitHub App編集権限、secret再取得、公開3ゲームUID、第二回線 | 利用者準備。認証/3ゲーム/複数IP受入をブロック |
| U07 | 実dump/import/全行比較/Pages公開/逆restore時間、MySQL往復互換性 | NF-M4リハーサル。計画停止枠の決定をブロック |
| U08 | 切替日時、backupの私的保存先・保存期限、7日間の旧環境維持費 | 実施日前に利用者が決定。NF-M5/NF-M7をブロック |

確認結果はこの正本・別冊へ反映し、実装結果は実装ログへ記録する。未知の値を「推奨通り実施済み」に読み替えない。

## 変更履歴

| 日付 | 内容 |
| --- | --- |
| 2026-10-03 | 新規作成。並行検証、全DB停止点、最終copy、環境別IP判定、OAuth callback併存、Pages/CI接続先一元化、データ保全を伴う逆copy、利用者別冊との担当境界を定義。実アカウント/DB/LB未確認のためドラフト。 |
| 2026-10-03 | 利用者の追加指示を反映。同じPages内の旧URL/新app URLを並行公開し、正常性確認後に旧URLを転送化する方式へ変更。公開previewの書き込み制限、保存key分離、parallel/forward/rollback、route転送と404の安全条件を追加。 |
