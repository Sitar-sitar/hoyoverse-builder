# Northflank移行の完了判定（2026-10-08）

- 判定: 本番運用継続Go、Phase 55の移行・本番公開を完了（利用者の明示例外あり）。
- 利用者指定: 「ここまでの観測結果で判定とする、これ以上の長期観測は実施しない」。24時間連続観測の追加実施を終了する。未達条件をPASSへ読み替えない。
- 現在の公開release: `c1ddc89e62c4222c451a1d01c27a176394db3be6`（ホタル更新、PR #109）。本判定はアプリを再配信しない。

## 観測の集計と限界

| 証拠 | 結果 | 範囲・限界 |
| --- | --- | --- |
| ローカルhealth記録 | 33回成功、失敗0 | 10/7 07:46〜18:36 JST。対象b5374e3。最大間隔15,148.9秒（約4時間12分）。連続観測の証明にならない |
| GitHub artifact | 7回成功、失敗0 | 10/7 08:11〜10/8 06:33 JST。b5374e3を3回、c1ddc89を4回。最大間隔24,186.469秒（約6時間43分）。schedule4回、手動3回。異なるreleaseを同一releaseの24時間へ合算しない |
| 現在のhealth | HTTP200、ok=true、maintenance/preview=false | c1ddc89一致。瞬間の正常性 |
| 現行Pod | 1 instance、Readiness/Liveness成功、再起動0 | hoyoverse-api-5db967df64-f4gtb。10/7 22:00作成、約11時間稼働。計画されたホタル公開による置換 |
| 現行Podイベント | 通常起動7件のみ | このPodに絞って確認。OOM/BackOff/異常終了イベントなし。旧Podや欠測時間の完全な無障害保証ではない |
| 現行Podログ | 返却4行は通常起動情報のみ | live tailの取得範囲にerror/IP fallback警告なし。全期間の完全ログ検査と同一視しない |
| 公開Pages | 3ゲーム入口表示、releaseの配信workflow成功 | c1ddc89のPages Run37624723348 Success。API/Pages同release。運用文書のみの後続main SHAとは区別 |
| 管理者・永続化 | GitHub再ログイン成功、表示7項目保持、feedback1件が完了で保持 | 今回は既存保存値の読み取り。公開時の書き込み・再起動保持試験は実装ログ/管理台帳参照 |

測定時点で障害は検出していないが、欠測時間の障害有無は未証明。**24時間連続観測は未達・追加実施免除（利用者指定）**。可用性保証や「24時間PASS」とは報告しない。この限定された証拠で、本番運用継続と移行完了を受け入れる。

## 移行成果と残す例外

- API/MySQLをNorthflankへ移行、正式CORS/OAuth/Private TLS DB/health probes、同release Pages、forward導線を公開済み。公開3ゲームUID、制限境界/偽装拒否/回復、管理者認証、feedback/表示保存の受入証拠は[管理台帳](運用管理台帳_Northflank設定_2026-10-05.md)と[実装ログ](実装ログ.md)に保持。
- P1修正はPR #107で本番反映済み。現行releaseはその修正を継承。後続ホタル公開の証拠は[第26バッチ記録](batch-26-research-notes.md)。
- 公開後Native dumpを独立ローカルMySQL 9.7.2へ復元し、6テーブル104行・全CREATE TABLE/INSERT文の一致PASS。追加Addon・課金なし。Disk snapshot自体の復元はNOT_TESTED。
- 旧Railway期限切れに伴う既存dump採用は設計§9.1の利用者指定を維持。旧最終DBの独立照合、MySQL9.7.2→9.4逆復元はNOT_TESTED。旧DBへURLだけ戻す切戻しは許可しない。
- 旧Railway削除と旧callback廃止は行わない。最低7日の保持と利用者の削除依頼が条件の後続運用作業であり、本番公開完了のために無断削除しない。

## 観測終了と記録

利用者指定でGitHub monitor workflow id376906810を `disabled_manually` に変更。ローカルの旧観測プロセスは既に不在、再起動しない。翌朝確認automation `northflank` をPAUSEDへ更新。Northflankの内部health probesと本番サービスは継続する。追加の長期観測・自動再開を行わない。

記録根拠は私的visualizationsの元jsonl、7件のGitHub artifact、native-restore-verification-20261007.jsonと当日のブラウザ確認。秘密・DB行本文・UIDを本文へ転記しない。
