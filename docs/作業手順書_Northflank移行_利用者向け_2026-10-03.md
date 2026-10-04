# 作業手順書：Northflank移行（利用者向け）

旧ページを残したまま新ページで動作を確認し、確認が終わったら旧ページから新ページへ自動転送するための手順です。コードやDBの比較を担当する「実装担当」と、アカウント設定や画面確認を行う「あなた」の作業を分けています。

- 作成日: 2026-10-03
- 対象アプリ: hoyoverse-builder
- 種別: 作業手順書（設計仕様は別冊を正本とする）
- 対象バージョン: Northflank移行 NF-M1〜NF-M7
- ステータス: 準備用ドラフト（コード未実装・ダッシュボード未確認。担当者の工程完了連絡後に順番に実施）
- 関連: [移行設計書](実装設計書_RailwayからNorthflankへの段階移行_2026-10-03.md) / [索引](設計書インデックス.md) / [実装ログ](実装ログ.md)

## 1. 目的・全体の流れ

現在の画面を止めずに移行の準備を進めます。最終的なDBコピーの間だけ、新旧のAPIを一時停止します。その間はUID照会、ログイン、問い合わせ投稿などが利用できません。停止枠はまず60分以内を目標にし、事前の練習で所要時間を確認してから日程を決めます。

| 呼び方 | 公開URL案 | 準備期間 | 移行後 |
| --- | --- | --- | --- |
| 旧ページ | `https://sitar-sitar.github.io/hoyoverse-builder/` | 今まで通りRailwayを使う | 新ページへの自動転送 |
| 新ページ | `https://sitar-sitar.github.io/hoyoverse-builder/app/` | Northflankの確認用画面 | 正式な利用先 |

新URLはまだ作成していません。`app`という名前は今回の設計案です。同じGitHub Pagesに2つの入口を置く方式なので、新しいGitHubリポジトリや独自ドメインを作る必要はありません。Pagesの設定画面でサイトを2個追加する操作もありません。実装担当が2つの画面を一緒にビルド・公開します。

実施順は「アカウントと現状確認 → コード準備 → 新API/DB作成 → DBの練習コピー → 新URL公開 → 動作確認 → 最終コピー → 旧URLを転送化 → 経過観察」です。

## 2. スコープ・誰が何をするか

この手順書を読んだだけで、本番設定は変わりません。今回は文書作成までで、実装や公開の依頼は別工程です。「実装担当が完了」とある箇所は、完了連絡を待って進めてください。

| 手順 | あなたが行うこと | 実装担当が行うこと | 設計の工程 |
| --- | --- | --- | --- |
| 1〜2 | 権限・料金・現在の設定を確認 | 本番SHA/DB/TLS/停止方法を確認 | NF-M1 |
| 3 | GitHubへ旧API URLを登録 | Docker/IP/保守/2URL公開/転送/試験制限を実装 | NF-M2 |
| 4〜5 | Northflankのproject/DB/API/変数の画面設定 | image・job・接続・backupを検証 | NF-M3 |
| 6 | DB export/importを担当者と実施 | dumpの健全性・復元内容を全行比較 | NF-M3 |
| 7〜8 | callback追加、Pages変数登録、公開操作 | 新旧2URLの公開物とAPIの一致を検査 | NF-M3 |
| 9 | 新ページのUID/ログイン、第二回線を用意 | レート試験/データ比較/逆復元の練習 | NF-M4 |
| 10 | 停止時間を決め、画面の変更を担当者と確認 | 新旧API停止・最終コピー・照合・再開 | NF-M5 |
| 11 | forward公開、旧リンクの転送と新ページ確認 | 正式フラグ・配信物・保存成功を確認 | NF-M5 |
| 12 | 24時間/7日後の確認、旧環境廃止を依頼 | ログ/backup/課金、文書・実装ログ同期 | NF-M6〜7 |

DBの消去/置換、ホップ数の判断、逆コピーは初心者向けの単独操作にしません。対象を取り違えると戻せないため、実装担当と一緒に進めます。パスワードやDB接続URLは、サービスの秘密設定画面へ直接入れ、共有チャット・GitHubのIssue・手順書には貼りません。

### 用語

| 用語 | 意味 |
| --- | --- |
| API | UID照会や投稿を処理するサーバー |
| DB / MySQL | 投稿、集計、管理者、表示設定を保存する場所 |
| dump | DBの構造と内容をまとめた引っ越し用ファイル |
| Restore | dumpからDBを復元する操作。コピー先の既存データを消す場合がある |
| 環境変数 | サーバーや公開処理に渡す設定値 |
| callback | GitHubログインが終わった後に戻るAPIのURL |
| migration job | DBの構造がコードと合っているかを更新する処理 |
| replica | 同時に動くAPIの個数。今回は1個に固定 |
| legacy / parallel / forward / rollback | 準備中の旧だけ公開 / 旧新の並行公開 / 旧から新へ転送 / 旧へ戻す公開モード |

## 3. 設定方針と準備の手順

画面名は2026-10-03の公式資料に基づく目印です。ログイン後の実画面はまだ確認していません。名称が違う場合、同じ目的の画面を探し、分からないままDelete/Restore/Deployを押さず担当者へ画面名を伝えてください。

### 手順1：開くサイトと権限を確認する

Chromeで以下を開きます。URLはアドレス欄へ貼り付けます。

- Northflank: `https://app.northflank.com/`
- Railway: `https://railway.com/`
- GitHubリポジトリ: `https://github.com/Sitar-sitar/hoyoverse-builder`
- GitHub個人設定: `https://github.com/settings/apps`

Northflankのアカウントを作り、GitHub連携を許可する場合は対象リポジトリだけを選びます。Railwayで現行API/MySQLが見えること、GitHubでリポジトリのSettings/Actionsと管理者ログインに使っているGitHub Appを編集できることを確認します。GitHub Appがorganization所有なら、そのorganizationのSettings→Developer settings→GitHub Appsを開きます。

**完了条件:** 4つの管理画面を開け、編集する対象が特定できた。

### 手順2：無料枠・料金と現在の環境を確認する

NorthflankのPlan/Billing画面で、Sandboxの利用条件を確認します。公式料金にはサービス2個・DB1個・cron job2個の無料枠がありますが、今回必要なRAM/DB容量/backup/手動jobが使えるかは画面で確認します。有料に変える前に月額の上限を決めます。無料で入らなければ、この時点では有料プランを選ばず担当者と構成を確認します。

Railwayの現行projectでAPIとMySQLをそれぞれ開き、次の非秘密情報を控えます。

| 控える項目 | あなたのメモ |
| --- | --- |
| Railway project/API/DBの名前 | 未記入 |
| 現在のAPI公開URL | `https://hoyoverse-builder-api-production.up.railway.app`（実画面と照合） |
| MySQLのversion/使用容量 | 担当者に確認してもらう |
| GitHub Appの名前/所有者 | 未記入 |
| Northflankの選べるregion/プラン/月額上限 | 未記入 |
| 新APIの公開URL | 手順5の後に記入 |
| backupの私的保存先/保存期限 | 未記入 |

現行APIのデプロイコミット、DB全表と書き込み処理、停止・再開方法、逆コピーの接続方法は担当者が調べます。DBをコピーできるよう、MySQL Workbenchを用意します。未インストールなら公式 `https://dev.mysql.com/downloads/workbench/` からWindows版を用意するか、担当者に準備を依頼します。

**完了条件:** プランと費用、DB実体、権限、backup/復旧方法が分かった。ここでは旧サービスを削除しない。

### 手順3：実装準備を依頼し、旧URL用の変数を登録する

担当者への依頼例:

> 移行設計書NF-M2の準備を実装してください。旧Railwayを維持し、同じPagesの旧URLと新app URLを並行公開できる状態まで準備してください。本番切替・旧環境削除はまだ行わず、必要な設定値と検証結果を知らせてください。

GitHubリポジトリでSettings→Secrets and variables→Actions→**Variables**を開き、次をNew repository variableで登録します。Secretsタブと取り違えないでください。URLとmodeは公開してよい設定です。

| Name | Value |
| --- | --- |
| HOYOVERSE_API_BASE_URL | 現行Railway APIのhttps URL。末尾に `/api` を付けない |
| HOYOVERSE_PAGES_MODE | `legacy`（新API準備前は旧だけを維持） |

既存変数があれば担当者と現在値を確認して編集します。新APIの変数は後で追加します。コード準備前の現行workflowはまだこれらのmodeを理解しません。担当者が「legacyで旧APIだけを検査し、旧Pagesを維持できる」と確認するまでmainへ反映・公開操作をしません。

**完了条件:** Dockerfile、保守停止、IP処理、preview制限、2URL公開/転送、storage分離、DB比較ツールの実装とローカル検証が終わった。新機能は旧Railwayでも互換性がある。

### 手順4：Northflank projectとMySQLを作る

1. NorthflankでCreate projectを開き、名称案 `hoyoverse-builder` を入力します。
2. regionを選びます。APIとDBは同じregion。実際に選べるregionと測定結果で決めます。
3. Addon/Create addonから**MySQL**を選び、名称案 `hoyoverse-mysql` を入力します。
4. Railwayと同じMySQL versionを選びます。選べなければ作成前に担当者へ知らせます。
5. プランとディスク容量・料金表示を確認して作成します。
6. DBがReady/RunningになったらConnection detailsとBackups画面を確認します。

このaddonは移行専用です。他のアプリのDBを入れません。公開接続は標準では有効にせず、担当者が内部URLと認証付きローカル転送を準備します。DBの内部URLはNorthflankのsecret groupへ入れます。

**完了条件:** 新MySQLが稼働、内部接続とbackup/Restoreが使える。まだRailwayのデータは変わらない。

### 手順5：Northflank APIと秘密設定を作る

担当者が公開可能な準備コミットを用意してから行います。

1. Create serviceでGit repositoryからBuild & deployするサービスを選びます。名称案 `hoyoverse-api`。
2. `Sitar-sitar/hoyoverse-builder` と、担当者が指定したブランチ/コミットを選びます。
3. Build optionsでDockerfileを選び、`Dockerfile.northflank`、build contextはリポジトリrootを指定します。推測の自動build設定へ戻さないでください。
4. 自動CDをOFFにします。担当者がBuild、DB job、Deployの順に行える状態にします。
5. Run/Networkingでport=3000、protocol=HTTP、Publicを設定します。画面に生成されたhttps公開URLが新APIのbaseです。これを非秘密メモへ控えます。
6. Resourcesでreplica/instances=1、autoscaling OFF。料金表示も確認します。
7. Health checksで `/api/health`、port3000を設定します。猶予120秒など細かい入力は担当者が設定します。
8. Runtime variables / Secret groupへ下表を登録します。build用の公開変数とsecretを混ぜないでください。

| Name | 入れる値 |
| --- | --- |
| NODE_ENV | `production` |
| API_ONLY | `true` |
| PORT | `3000` |
| DATABASE_URL | 担当者が検証したNorthflank内部MySQL URL |
| CORS_ORIGINS | `https://sitar-sitar.github.io`（pathを付けない） |
| ADMIN_FRONTEND_URL | `https://sitar-sitar.github.io/hoyoverse-builder/app`（末尾slashなし） |
| GITHUB_APP_CLIENT_ID | 既存GitHub AppのClient ID |
| GITHUB_APP_CLIENT_SECRET | 既存Appのsecretを秘密画面へ直接転記 |
| GITHUB_APP_CALLBACK_URL | 新API baseに `/api/auth/github/callback` を付けたURL |
| ADMIN_GITHUB_IDS | Railwayと同じ管理者の数値ID |
| ADMIN_SESSION_SECRET | 担当者が準備するNorthflank専用のランダム秘密値 |
| CLIENT_IP_SOURCE | `northflank` |
| NORTHFLANK_TRUSTED_PROXY_HOPS | 担当者が実測して指定した整数。自分で1と推測しない |
| API_MAINTENANCE | 通常は `false`、コピー/停止工程は `true` |
| API_MIGRATION_PREVIEW | 検証期間は `true` |

APP_REVISIONは担当者がimageのビルド時にコミットから入れます。秘密を含む環境変数一覧のスクリーンショットを共有しないでください。既存secretが再表示できないときは、既存secretを無断で再発行せず担当者へ知らせます。RAILWAY_PROJECT_IDはNorthflankへ登録しません。

migration job `hoyoverse-migrate` は担当者が同じAPI imageで準備します。Commandは `pnpm exec drizzle-kit migrate`、DB用secretだけを渡し、cron/auto-runはOFFです。必要なWorkflows/backup機能がプランに無い場合は同じ順序の手動操作へ変更し、手順に記録してから進めます。

LBホップ数確認など初回の技術準備は、担当者が一時環境で測定します。値が分からないまま新APIを正式公開しません。

**完了条件:** 新APIにhttps URLがあり、healthが正常。DB接続とmigration成功も別途確認済み。同じreleaseのRailway互換性も確認済み。

### 手順6：DBを練習コピーする（担当者と一緒に実施）

このコピー中は旧サイトを使い続けられます。そのため、コピー後に旧DBへ追加されるデータはまだ新DBへ届きません。最終コピーは手順10でやり直します。

Railway DBをPCから読む場合、APIサービスではなく**MySQLサービス**のConnect/Networkingを開きます。外部接続用host/portは内部用と異なります。既存の認証済み接続を優先し、新たにPublic Accessを有効にする必要がある場合は料金と安全な接続方法を担当者が確認します。`MYSQL_PUBLIC_URL`を共有チャットへ貼らないでください。

Workbenchの設定:

1. MySQL Connectionsの「＋」を押します。Connection Nameは `Railway-source` など識別できる名前。
2. 担当者が確認した外部host、port、usernameを入力します。パスワードは画面の保存欄/入力ダイアログへ入れます。
3. Test Connectionで接続成功を確認します。TLS警告を無視して続行しません。
4. 接続してServer→Data Exportを開きます。
5. **対象アプリのDBだけ**を選び、その全テーブルを選びます。system DBは選びません。
6. Dump Structure and Data、Export to Self-Contained Fileを選びます。
7. Include Create SchemaはOFF。Advanced Optionsのset-gtid-purgedはOFF。
8. 保存先はGitリポジトリ外の私的バックアップフォルダ。ファイル名は例 `hoyoverse-rehearsal-YYYYMMDD.sql`。
9. Start Exportを押し、完了表示を確認します。ファイルができたこと、サイズが0でないことを確認します。

担当者がdumpの対象・文字コード・全表・認証/migration履歴・CREATE DATABASE/USEの有無を確認します。

Northflankでの復元:

1. **新しく作った移行専用MySQL addon**を開きます。APIサービスではありません。
2. Backups→Import backupでUploadを選び、dumpを選択します。
3. `rehearsal-YYYYMMDD`など区別できる名前でUpload importを実施します。
4. アップロードしたbackupを選びRestoreを押します。**この操作は対象addonの既存ユーザーDBを消します。** 対象名を担当者と読み合わせてから進めます。
5. 成功表示を確認し、担当者に全表の復元確認とmigrationを依頼します。

**完了条件:** import成功に加え、固定dumpと新DBの全行・schemaの一致を担当者が確認。画像が表示できただけでは完了にしない。

### 手順7：GitHub Appへ新APIのcallbackを追加する

1. GitHubのSettings→Developer settings→GitHub Appsで、現行管理者ログインのAppを開きます。
2. GeneralのCallback URL欄を探します。
3. 旧Railwayのcallbackは消さず、Add callback URL等で新しい欄を追加します。
4. 新API base + `/api/auth/github/callback` を入力します。
5. 新欄のwildcard matchingはOFF。Save changesで保存します。
6. NorthflankのGITHUB_APP_CALLBACK_URLと一字ずつ一致することを確認します。

これは**GitHub App**のcallbackです。OAuth Appを新規作成したり、Setup URL/Webhook URLを変更したりする工程ではありません。旧URLを残すことで検証中も旧サイトへログインできます。

**完了条件:** 旧・新callbackの両方が登録されている。

### 手順8：新旧2つのページをparallelで公開する

GitHubリポジトリのSettings→Secrets and variables→Actions→Variablesで追加します。

| Name | Value |
| --- | --- |
| HOYOVERSE_NORTHFLANK_API_BASE_URL | 手順5の新API https base。`/api`を付けない |
| HOYOVERSE_PAGES_MODE | `legacy`から`parallel`へ変更（両API準備完了の連絡後） |
| HOYOVERSE_API_BASE_URL | 旧Railway URLを維持 |

担当者が「新旧両APIとPagesは同じ公開コミット、preview制限と試験DBの準備が完了」と連絡してから、移行準備の公開を実施します。コードがまだGitHubへ反映されていない場合は、公開を含めて担当者に依頼します。

コード反映後、必要な手動実行はActions→**Deploy HoYoverse Builder to GitHub Pages**→Run workflow→Branchは担当者指定のmain→Run workflow。自動実行が既に成功していれば重複実行しません。緑の完了表示まで待ちます。

旧・新のURLをChromeで開き、次を確認します。

- 旧は今までのサイト。Railwayのまま使える。
- 新は同じ内容の画面に「移行確認用」の案内がある。案内から旧へ戻れる。
- 新の画像・CSS・キャラクター図鑑が表示される。
- 新 `/app/admin` 等を直接開いて再読み込みしても404にならない。

**完了条件:** 旧新両方が表示され、担当者がNetworkで旧→Railway、新→NFを確認。Pagesが新だけで上書きされていない。

## 4. テスト・検証：あなたが確認する内容

### 手順9：新URLで正常性を確認する

**9-A UID照会**

新ページでHSR・原神・ZZZをそれぞれ選び、あなたが確認できる公開プロフィールUIDを入力します。ゲーム内でプロフィール/キャラクター展示が公開されている必要があります。UIDはこの文書や公開ログへ記入しません。

各ゲームでキャラクター、装備、ステータス、比較値、推奨PTが表示されることを確認します。旧サイトと違いがある場合は、上流データの更新やcache差もあるため、画面の項目名と違いだけを担当者へ伝えます。「エラーが出なかった」だけでは完了にしません。

**9-B 管理者ログイン**

新ページの管理者ログインボタンから開始します。GitHub認証後、アドレス欄が `/hoyoverse-builder/app/admin` など新baseに戻り、管理画面が表示されることを確認します。callback URLをアドレス欄で直接開くテストではありません。

担当者と次を確認します。

- 分析とフィードバック一覧が読める。表示設定が旧DBのコピーと一致する。
- 新ページでテスト投稿1件を作り、管理者が状態を変更できる。本文は個人情報なしの「移行確認用テスト」。
- 新の表示設定を一時変更して再起動後も残る。旧画面には反映されない。
- 旧→新→旧と同じタブで移動してもログイン情報や表示previewが混ざらない。
- logout後、管理者操作が拒否される。非管理者アカウントで新への投稿も拒否される。
- 担当者が第三者Cookieを制限した状態でもログインを確認する。

試験投稿と試験表示設定は最終コピーで消え、Railwayにある本番データで上書きされます。新への一般利用者の投稿は検証中は受け付けません。

**9-C 第二回線とレート制限**

自宅Wi-Fiと携帯テザリングなど、外向きIPが異なる2回線を用意します。別端末でも同じWi-Fiなら試験条件を満たしません。担当者が新APIだけを対象に制限試験を実施します。あなたがUID照会を大量に連打する必要はありません。

担当者がA回線を制限したときにB回線が通常利用できること、待てばAも回復することを確認します。ヘッダー偽装、RPCバッチ、上限値の検証は担当者が実施します。

**9-D 逆コピーの練習**

担当者が新DBのdumpを非本番の旧互換MySQLへ戻し、内容一致と読み取りを確認します。練習のために現在稼働しているRailway DBを上書きしません。必要な一時資源と費用を事前に確認します。

**完了条件:** 3ゲーム、ログイン/保存/再起動、2回線の独立制限、偽装防止、往復DBコピー、料金/性能がすべてPASS。未確認が残る場合は旧ページの転送へ進まない。

## 5. 正式移行・旧URLの転送手順

### 手順10：停止時間を決め、DBを最終コピーする

ここは担当者と同時に進めます。手順9のPASS一覧と所要時間を受け取ってから日時を決めます。利用者への事前案内が必要ならあなたが行います。

1. mainの変更、他のデプロイ/DB作業を止めます。新旧APIと公開物のコミットを固定します。
2. 担当者がRailwayとNFのAPI_MAINTENANCEをtrueにし、処理を止めます。
3. 担当者が両APIのコンテナを完全停止します。**MySQLサービスは停止しません。** 停止画面が不明ならDeleteで代用しません。
4. DB書き込みが止まったことを担当者が確認します。UID照会も集計を書き込むので、画面操作を控えるだけでは停止証拠になりません。
5. 手順6と同じ設定でRailwayからfinal dumpを再取得します。ファイル名を `hoyoverse-final-YYYYMMDD-HHMM.sql` 等にし、練習dumpと取り違えません。
6. 担当者が旧backup、新の検証backup、final dumpを保全します。
7. NFの移行専用MySQL addonへfinal dumpをUpload→Restoreします。新の試験データを消す操作です。RailwayをRestore先に選びません。
8. 担当者が旧新の全行hash/schema/件数、migration履歴を照合し、jobを実行します。
9. 担当者が新DBの短命ログインコードを無効化し、API_MIGRATION_PREVIEW=falseにします。
10. 新APIの保守をfalseにして再開。旧APIは保守trueまたは停止のままにします。

NFの正式受付を再開した後は、新ページでUID照会やログインをするだけでも新DBへ更新が発生します。以降の切戻しは新DBを旧へコピーする工程が必要です。旧APIの保守を自己判断で解除しません。

**完了条件:** 新DBがfinal copyと一致し、新APIのhealth/DB/ログインが正常。旧DBへの書き込みは停止したまま。

### 手順11：旧ページを新ページへの自動転送へ変える

担当者の「最終DB照合・NF正式受付・公開準備PASS」を受け取った後に行います。

1. GitHubのVariablesでHOYOVERSE_PAGES_MODEを `parallel` から **`forward`** へ変更します。
2. HOYOVERSE_API_BASE_URLは旧Railway値のまま、HOYOVERSE_NORTHFLANK_API_BASE_URLも新API値のままです。変数を逆にしません。
3. Actions→Deploy HoYoverse Builder to GitHub Pages→Run workflow、固定済みmainを選んで実行します。
4. 緑の完了表示を待ちます。失敗なら先へ進まず、実行URL/ステップ名を担当者へ知らせます。
5. Chromeで旧URLを開き、新 `/app/` へ移ることを確認します。変数を保存しただけでは転送は始まりません。
6. 新画面の「確認用」案内が消え、通常の投稿が使えることを確認します。

転送はGitHub Pagesが配信するHTMLとブラウザによる自動移動です。HTTP301/302を設定する操作ではありません。JavaScriptが無効な場合は新ページへのリンクを表示します。

| 開く旧URLの末尾 | 移動後の新URLの末尾 |
| --- | --- |
| `/hoyoverse-builder/` | `/hoyoverse-builder/app/` |
| `/hoyoverse-builder/characters` | `/hoyoverse-builder/app/characters` |
| `/hoyoverse-builder/updates` | `/hoyoverse-builder/app/updates` |
| `/hoyoverse-builder/feedback` | `/hoyoverse-builder/app/feedback` |
| `/hoyoverse-builder/admin` | `/hoyoverse-builder/app/admin` |
| `/hoyoverse-builder/admin/feedback` | `/hoyoverse-builder/app/admin/feedback` |
| `/hoyoverse-builder/admin/display` | `/hoyoverse-builder/app/admin/display` |

全部の旧リンクを一度ずつ開き、新で再読み込みし、戻るボタンで旧新を往復するloopがないことを確認します。知らないpathは自動転送せず案内だけにします。URL末尾の `?…` や `#…` はログインコード等を運ばないため引き継ぎません。管理者は新で再ログインしてください。

開いたままの古いタブには旧プログラムが残ることがあります。そのタブを再読み込みして新へ移します。古いtabの投稿が旧DBへ届かないことは担当者が確認します。

**完了条件:** 旧全既知リンクの転送、新のUID/ログイン/投稿/表示設定、NetworkのNF接続が正常。旧Railwayはまだ削除しない。

### 手順12：経過を見てから旧環境を片付ける

最初の24時間は新ページを通常利用し、UID照会、管理者ログイン、投稿、表示設定に問題がないか確認します。担当者はhealth、OOM/crash、DB保存、バックアップ、レート警告を確認します。

旧Railway API/MySQLは最低7日保持します。保守/停止していても費用が残る場合があります。7日経過だけで自動削除せず、24時間観察とバックアップからの復元が合格してから、あなたが廃止を依頼します。

依頼例:

> 新ページの観察と復元試験がPASSであることを確認しました。保存するbackupと費用を確認した上で、旧Railway API/DBの廃止と旧callbackの整理を実施してください。旧Pagesから新Pagesへの転送は残してください。

削除はAPI/DBを別々に対象確認して行います。GitHub Pagesリポジトリを消したり新 `app/` を削除したりしません。旧→新の転送はその後も残します。バックアップの期限と削除日は担当者と決めます。

## 6. 受け入れ条件・あなた用チェックリスト

- [ ] 旧URLは並行期間に通常利用でき、新URLはNorthflankへ接続している。
- [ ] 新ページの確認用案内と、非管理者の投稿停止を確認した。
- [ ] 公開UIDで3ゲームを確認できた。
- [ ] 新URLからGitHubログインし、新管理画面へ戻れた。
- [ ] 旧新のログイン情報/表示設定の保存状態が混ざらない。
- [ ] テスト投稿・表示設定が新DBへ保存され、再起動後も読めた。
- [ ] 第二回線試験・ヘッダー偽装・レート制限・DB往復コピーが担当者のPASS。
- [ ] 最終コピーは旧新API完全停止後で、全行照合PASS。
- [ ] forward公開成功、旧全ルートが新へ移り、loopが無い。
- [ ] 新で正式投稿/ログイン/UIDが使え、旧DBへの書き込みが止まっている。
- [ ] 24時間観察とbackup復元PASS。
- [ ] 旧環境7日以上保持後、廃止とbackup期限を判断した。

報告は「工程番号、PASS/FAIL/未確認、非秘密のページURL、エラー文」を伝えてください。秘密・実UID・認証コード・DB内容を貼る必要はありません。

## 7. リスク・注意点：困ったときと戻し方

| 困ったこと | 確認/担当者に伝えること |
| --- | --- |
| 新ページが404、画像/CSSが崩れる | parallel公開のActions結果、新base/各route/asset配置を確認。旧が見えるだけでは新の公開成功ではない |
| GitHub認証後に旧へ戻る | NFのADMIN_FRONTEND_URLとcallback、クリックしたページが新かを確認 |
| ログインはできるが管理データが読めない | 新DBの接続・全表・migration・allowlist。health200だけで判定しない |
| 新の一般投稿が通ってしまう | preview制限不備。新DBを破棄せず担当者に保全を依頼し、最終コピーを止める |
| 利用者全員がレート制限される | IP分離/ホップ数/replica/fallback警告を担当者が確認。上限を勝手に緩めない |
| forwardのActionsが失敗 | ステップ名と実行URLを伝える。旧APIを再開して強引に通さない |
| 旧ページから新へ移らない | mode保存後のbuildが成功したか、古いtab/cacheかを確認。強制再読み込みし担当者に配信HTMLを確認してもらう |
| 旧と新を往復する | forward/rollback生成物が混在していないか確認。担当者が単一artifactを再公開 |

**正式受付再開前に中止する場合:** 旧DBが正本なので、担当者が旧APIの保守を解除し、Pagesをrollbackで旧画面へ戻します。新の検証管理者データだけなら逆コピー不要です。

**正式受付再開後に戻す場合:** 新DBが正本です。まず両APIを止め、最新NF DBをbackupしてRailwayへ逆コピーし、全行照合後に旧APIを再開します。その後、HOYOVERSE_PAGES_MODE=`rollback`で公開します。新URLは旧ページへの案内/転送になり、旧rootのアプリが復活します。詳細操作は担当者へ依頼してください。

**modeだけrollbackへ変更して旧APIを勝手に再開すると、新で受け付けた投稿や表示設定を失うことがあります。** またNF DBが読み出せないと即時逆コピーできません。その場合は保存backupと未回収範囲を確認し、復旧方針を決めてから再開します。

## 8. 参照資料の確認方法

実施時に画面が違う場合は公式資料を確認します。設計書内の出典確認日は2026-10-03です。以下はアドレス欄へコピーする参考URLで、仕様正本はリポジトリ内の移行設計書です。

- Northflankの作成手順: `https://northflank.com/docs/v1/application/getting-started/build-and-deploy-your-code`
- MySQLの引っ越し: `https://northflank.com/docs/v1/application/databases-and-persistence/migrate-data-to-northflank/migrate-your-mysql-database-to-northflank`
- jobとDB更新: `https://northflank.com/docs/v1/application/release/run-migrations`
- 料金: `https://northflank.com/pricing`
- GitHub App callback: `https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/about-the-user-authorization-callback-url`
- Railway MySQL接続: `https://docs.railway.com/databases/mysql`

## 変更履歴

| 日付 | 内容 |
| --- | --- |
| 2026-10-03 | 新規作成。利用者の追加方針「新URLでNorthflankを確認してから旧URLを転送」を反映し、同じPages内の2URL、アカウント/変数/callback/DBコピー/公開/確認/切戻しを担当別に整理。未実装・実画面未確認のため準備用。 |
