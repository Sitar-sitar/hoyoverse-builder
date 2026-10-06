# Northflank移行・公開前レビュー（Phase 55）

- 作成日: 2026-10-06（Asia/Tokyo）
- 対象アプリ: HoYoverse Builder
- 種別: 実装レビュー / 公開前ゲート
- 対象版: PR #106、7891b0fdd4eeccceb253ffb451a6f0b8d71a387a と後続のテストimport整理
- ステータス: コード準備は継続可能、最終コピー・本番受付はNo-Go
- 関連: [移行正本](実装設計書_RailwayからNorthflankへの段階移行_2026-10-03.md)、[設定・実測台帳](運用管理台帳_Northflank設定_2026-10-05.md)、[Phase 55](実装ログ.md)

## 指摘と判断

| ID | 優先度 | 根拠 | 対応 / 合格条件 |
| --- | --- | --- | --- |
| R01 | P1 / 環境 | 17:10 JST現在、Railway環境状態はAPI/MySQLともOffline・active deploymentなし。API healthは404。画面はTrial expired / Limited Access、MySQLコンソール接続不可、BackupsはNo Backups。旧volumeは存在する。 | 最終dumpの取得手段が必要。無断課金・DB削除は行わない。一時再開か既存dumpの差分消失を伴う復旧について利用者判断待ち。既存コピーを最終同期済みと扱わない。 |
| R02 | P1 / 受入 | 正本§9 A03〜A08/A15はローカル/候補版の部分証跡に留まる。公開parallel、新旧同SHA、保存状態往復、全制限、同release性能比較が未完了。Railway停止により比較/parallel経路も成立しない。 | 旧環境を復旧して正本のゲートを実施するか、利用者が指定する復旧方針を正本・例外台帳へ具体化する。ゲートを削ってCIだけで本番Goとしない。 |
| R03 | P3 / 整理済み | server/migrationPreview.test.ts先頭でitが重複importされ、describeも未使用。CIは成功しているが、tsconfigは*.test.tsを型検査から除外する。 | importを一意に整理。既存のpreview/保守/保存分離4ファイル14テストpass。製品コードや期待値は変更しない。 |

## 実装検査

- Dockerfileの40桁revision必須、CA検証の共通接続、PORT固定、起動設定の不正値拒否、保守middleware、preview時の非管理者feedback/analytics拒否を差分と関連試験で照合。
- Pagesはmain限定、単一artifact、APIの実release SHA/保守/preview/CORS/RPC検証をuploadより前に行う。API準備前にmainへ入れた場合は公開workflowが失敗し、既存artifactを置換しない。実SHAを偽装して通すことは禁止。
- 新baseのBearer/復帰先/UID履歴/表示cache/previewのkey分離、旧Manus fallbackを新で読まない経路、preview案内と非管理者送信disabled、既知route限定転送を確認。unitの旧→新→旧と実公開の同タブ往復は別の証拠である。
- NF ResourcesのRecreate設定と旧Pod停止→新Pod起動、同候補API/Job manifest固定は実測台帳で確認。最終main imageではdigestとJob起動確認を再実施する。

## 検証範囲と限界

- PR head 7891b0fのvalidate SUCCESS。後続import整理は移行関連14テストpass、Pages/IP診断node:test 9件pass。
- global制限は120成功/121件目制限・health/OPTIONS例外・解除後200。lookup batchは18成功/3制限を得たがcache条件未達。順次HSRはcached=trueで1〜6件200、7件目429 / Retry-After 56。原神測定途中の接続切断でコマンドexit 1、その後は未検証。接続切断の原因は未確定、NF同Pod/0 restarts/2 probes passing/health200は再確認。切断をAPIクラッシュとも合格とも扱わない。
- Cookie遮断は利用者の設定確認が条件。その状態の実Chrome OAuth/reload成功はローカル新baseのみ。公開後の証跡を代替しない。
- 旧停止済みDBとの全行最終一致、公開後24時間観察、復元試験は未完了。逆復元9.7.2→9.4は既存の利用者明示例外、NOT_TESTEDのまま。

コード準備は進められるが、最終データの採用判断と公開受入が未解決であるため、最終停止コピー・正式受付開始はNo-Go。Phase 55は進行中を維持する。
## 2026-10-06 17:19 JST 追加証跡

- 候補APIの順次lookupは23.68秒内で完了。HSR/原神6成功・7回目429、全体20件目200・21件目はUID別上限内のZZZ6回目をIP制限で429。成功17件中cache hit14/cold3、偽装ヘッダー付き要求429、61秒後同じZZZ200で回復。測定はexit 0。未認証管理APIも403。以前の通信切断後に不確定だった範囲をこの別測定で追加確認した。
- 最新保存版d6020506e162556ac16389ea1e46b5363db12051のvalidate SUCCESS（run 37434732165）。feedback個別制限/公開受入などは未完了であり、R01/R02と最終受付No-Goは維持する。

## 2026-10-06 利用者の復旧選択反映

- R01の採用判断は解決: 更新なしの申告に基づき選択肢2、既存dump採用を明示指定。正本§9.1へ反映。旧最終DBとの独立照合はNOT_TESTEDを維持する。
- R02は旧環境依存試験をNOT_TESTEDとして復旧経路を分離。実行可能な公開受入・実SHA・backup・データ検証は維持し、実施前の正式受付Goとは扱わない。

## 2026-10-06 22:26 JST 公開完了・受入検証状況

- Pages workflow 37459695253は20:57 JSTに成功（deploy終了11:57:01 UTC）。HOYOVERSE_PAGES_MODE=forward、API/Pagesとも5514d27ad17fe0b8978b7c2cc76f04e207ed3d40。health maintenance=false/migrationPreview=false、CORS検査・RPC・テスト・型チェックを通過した。
- 旧7ルートの転送HTMLは対応app routeのcanonicalと一致し、旧app module scriptを含まない。ブラウザでも旧root→appおよび旧charactersのquery/fragment破棄を確認。app/indexはnoindexなし、配信JSはNF URLあり・旧Railway URLなし。
- 公開Pagesの実UID照会はHSR8件、GI12件、ZZZ6件、装備/ステータス表示成功。GitHub logout→login→reload保持成功。未認証feedback.listは403（誤ったfeedback.adminListの404は認可検証の証拠に含めない）。
- 公開feedback #0001「Northflank本番移行・保存確認」を保存し、対応中への変更とreload保持を確認。実際の翻訳依頼ではない運用検証記録。
- 表示設定E-2を一時変更する確定操作は、全閲覧者への影響について個別承認なしとして自動承認レビューが拒否。変更は未適用。利用者へ一時変更・計画再起動・元への復帰の承認を依頼中。再開後も公開設定は「切替を開放」である。
- 20:58 JST開始のhealth collectorは2件のみ記録後に停止。20:58/21:03は正常だが空白時間は連続観察PASSに含めない。22:26 JSTから別JSONLで再開。24時間経過だけで合格にせず、全sample・gap・platform crash/OOM・IP fallback・保存/復元証拠を確認する。
- 22:26 JST live healthは正常。NF画面でmain/1 instance/2 probes passing/0 restartsを確認。Phase 55は公開後観察中で、まだクローズしない。

## 2026-10-06 22:44 JST 承認済み公開保存・再起動試験

- 利用者が公開表示設定の一時変更・API再起動・元への復帰を明示承認。22:42 JSTにE-2のみ「現行」へ公開保存し、APIのRestart serviceを実施。
- 旧Pod hoyoverse-api-5d9dfc978c-qdbfx がTerminated、新Pod hoyoverse-api-66f76b8c6f-87bkq がRunningを確認。再起動中のno healthy upstreamは計画停止として記録し、22:43 JSTにhealth正常、正式main SHA・maintenance=false・migrationPreview=falseを再確認。
- 管理画面の再読込でE-2「現行」（22:42保存）が保持され、feedback #0001の「対応中」状態と本文も保持されることを確認。保存・API再起動・再読込の公開受入試験は成功。
- 22:44 JSTにE-2を変更前の「切替を開放」へ復帰し、再読込で保持を確認。他の表示設定は変更していない。検証用feedback #0001を「完了」とし、再読込後も保存状態を確認。前回の表示変更承認待ちは解消した。
- 残ゲートは24時間観察（22:26 JSTからの欠落なし実測）、platformログ/保存の継続確認、公開後backupの復元検証。Phase 55は公開後観察中であり、まだ移行全体の完了とはしない。
