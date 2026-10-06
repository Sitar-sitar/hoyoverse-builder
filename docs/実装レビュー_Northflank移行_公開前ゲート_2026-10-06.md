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
