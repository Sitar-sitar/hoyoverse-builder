# 設計レビュー: UID照会の比較値是正とZZZ鋭御追加 Phase B・D・E

- 作成日: 2026-09-12
- 対象アプリ: hoyoverse-builder
- 種別: Phase B・D・E 修正設計レビュー（実装・公開の受け入れではない）
- レビュー対象コミット: `716b96e`
- 前提: Phase A は実装済み、Phase C は Phase B・E 待ちとして判定対象外
- ステータス: レビュー完了・全体 No-Go（P2: 3件）
- Phase別判定: Phase B **No-Go** / Phase D **Go** / Phase E **No-Go**
- 関連: [対象の修正設計書](修正設計書_UID照会の比較値是正とZZZ鋭御追加_2026-09-11.md) / [Phase B 初回レビュー](設計レビュー_UID照会の比較値是正とZZZ鋭御追加_PhaseB_2026-09-12.md) / [設計書インデックス](設計書インデックス.md)

## 判定

**全体 No-Go。BDE-01〜BDE-03を設計正本へ反映してから、Phase B・E を再レビューする。Phase D はこの設計で実装着手可。**

Phase B 初回レビューの PB-01〜PB-03 は、D4の取り下げ、Phase Eの新設、`ZZZ_PROFILES.def` の確定値、D7の4キー表テストとして概ね正しく反映されている。Phase Dも、現行コード・StarRailResのデータ構造・テスト条件が整合している。

残る停止要因は、取り下げたD4を変更一覧がなお実装対象にしていることと、Phase Eの「全部位」応答が現行の英語・中国語UI契約および主ステータス専用項目を扱えないことである。

| ID | 重要度 | Phase | 対象 | 指摘 |
| --- | --- | --- | --- | --- |
| BDE-01 | P2 | B・E | §0、§2.1、D4、§6、§7、設計書インデックス | 取り下げたD4が実装指示と索引に残り、Phase Eとの依存・ロールバックも同期していない |
| BDE-02 | P2 | E | E3、§5、§6、§8 Phase E | 新しい「全部位」応答を英語・中国語UIが事実と反する文に変換するが、クライアント変更と画面テストがない |
| BDE-03 | P2 | E | E3、§8 Phase E | 対象ステータスがサブステータスとして存在できるかを判定せず、主ステータス専用項目にも「全部位でサブ厳選」を返す |

## BDE-01: 取り下げたD4が実装順と索引に残っている（P2）

**対象**: 設計書23行、219〜223行、319〜321行、509〜530行、546行、569行、設計書インデックス20行。

D4は§3で「取り下げ・Phase Eへ吸収」と確定している。一方、§2.1のPhase BスコープはD4をINのままにし、実装順の [§6 Phase B](修正設計書_UID照会の比較値是正とZZZ鋭御追加_2026-09-11.md#6-変更ファイルと差分の粒度実装順) は `server/buildAdvisor.ts` に `defaultSlotsForStat` のZZZ分岐を追加するよう指示している。設計書インデックスのPhase B要約も「部位をIV〜VIへ」のままである。

§6は実装者が直接使う変更一覧なので、ここに従うと既知の誤提案をいったん追加し、Phase Eで同じ関数ごと削除する実装になる。さらに「Phaseごとに独立したPR」としながら、D3はPhase Eより先に出せない。ロールバック節にはPhase Eが列挙されておらず、依存するPhase BからEだけを戻せるかも定義されていない。§0の説明も見出し・表はB・D・Eだが、本文23行は「BとDの2つ」となっている。

**修正方向**: §2.1と§6 Phase BからD4を削除し、`server/buildAdvisor.ts` のPhase B変更はD7だけにする。Phase Eを先にマージし、その後にPhase BのD3を出す順序を明記する。Phaseを別PRにする方針は維持し、「独立」ではなくBがEへ依存すると記載する。Phase Eのロールバック順、§0の対象数、索引のPhase B要約も同期する。

**再レビュー・検証条件**: 設計全体を `D4|defaultSlotsForStat|IV / V / VI` で検索し、過去経緯以外にD4の追加指示が残らない。変更ファイル一覧、依存関係、ロールバック、索引が「Eを先に実装し、BはD3を含めて後続」と一致する。

## BDE-02: Phase Eの新しい応答を英語・中国語UIが誤説明する（P2）

**対象**: 設計書378〜414行、501〜504行、546〜552行、635〜643行。

E3は、対象の主ステータス欄がない場合に `action: "サブステータスを厳選"`、`slot: "全部位"`、`currentMain: null` を返し、サーバーの `reason` を新しい説明へ変える。しかし現行UIは、日本語だけ `action.reason` を使い、英語・中国語は `action`・`slot`・`currentMain` から文を再生成する（[Home.tsx](../client/src/pages/Home.tsx) 144〜151行）。

この応答を渡すと、英語では `全部位 already has HP% as its main stat`、中国語でも「全部位の主ステータスはHP%」という意味になり、E3が避けたい事実誤認を新たに作る。見出しの `{slot}：{desiredStat}` も英語・中国語画面へ日本語の「全部位」をそのまま表示する。

Phase Eの変更一覧は `server/buildAdvisor.ts` とサーバーテストだけで、`client/src/pages/Home.tsx` と [Home.recommendations.test.ts](../client/src/pages/Home.recommendations.test.ts) を含まない。§8も返却オブジェクトだけを検証し、実際に画面へ出る3言語の説明を検証しない。

**修正方向**: 「全部位」を構造化されたスコープとして返して各言語で表示するか、少なくともクライアントの `actionReason` に `currentMain === null` のサブステータス分岐を追加する。新しい文と部位ラベルを日本語・英語・中国語で確定し、Phase Eの変更ファイルにクライアントと画面テストを加える。

**再レビュー・検証条件**: シーザーのHP不足などを画面モデルへ渡し、3言語すべてで「ガイドの主ステータスは別用途のため、任意の適切な部位でHP系サブステータスを厳選する」という意味になり、「既にHP%主ステータスを持つ」と表示しない。カード見出しも選択言語に合う。

## BDE-03: サブステータスとして存在しない項目を扱えない（P2）

**対象**: 設計書378〜412行、635〜643行。

E3は `configuredSlots.length === 0` ならStatKeyを問わず「サブステータスを厳選・全部位」を返し、「サブステータスはどの部位にも付き得る」と説明する。これは `equipmentActionsFor` が受け取れる全StatKeyには成り立たない。

例えばZZZの衝撃力・異常掌握・エネルギー自動回復はVI、貫通率はVの主ステータスであり、サブステータスには存在しない。HSRのEP回復効率も縄の主ステータスで、サブステータスには存在しない。現行251名を再計測すると既定部位へ落ちる75件は、たまたまサブステータスで補えるキーだけだったが、今後の個別ガイドで主ステータス専用キーを目標に追加し、`mainStats`への記載を欠くと、設計どおりの実装は不可能な厳選を案内する。

ZZZの現在の主・サブ抽選範囲は、[Game8のドライバディスク一覧](https://game8.jp/zenless/611741)でも、サブがHP・攻撃力・防御力・会心・異常マスタリー・貫通値に限られ、衝撃力等は主ステータス側だけであることを確認した。

**修正方向**: ゲーム別に「そのStatKeyをサブステータスで伸ばせるか」を明示する。伸ばせる場合だけE3の全部位分岐を使う。伸ばせない場合は、根拠のない部位を選ばず装備アクションを省略するか、「主ステータス・セット・武器を再確認」のような別の構造化アクションを定義する。単にサブ厳選へ落とさない。

**再レビュー・検証条件**: ZZZの `impact` / `anomalyProficiency` / `energyRegen` / `penRatio`、HSRの `energyRecharge` について、ガイド側に対応主ステータス欄がない入力をテストし、「全部位でサブステータスを厳選」を返さない。現行75件は引き続きサブ厳選へ安全に移る。

## Phase別の照合結果

### Phase B: No-Go

- PB-01の原因をPhase Eへ分離した判断、D3をEより先に出さない依存、D4の取り下げは妥当。
- `ZZZ_PROFILES.def` は完全なオブジェクトになり、既存6プロファイル不変と最終応答のテストまで定義された。鋭御が防御力と会心を優先する方針も、[Game8の鋭御説明](https://game8.jp/zenless/812251)およびクラレッタの現行ガイドと整合する。`targets: []` で役割共通の数値を推測しない判断を維持してよい。
- D7の4キー表、原神・HSRの非変更、変異チェックはPB-03を回収している。
- BDE-01の実装一覧不整合が残るため、Phase B単体の判定はNo-Go。

### Phase D: Go

- `SUB_AFFIX_TYPE_TO_STAT_KEY` の6型を公開 `properties.json` と照合し、Baseなし型は `field: ""`、対応するBase付き型は比較用fieldと百分率情報を持つことを確認した。設計が独自表で百分率を決め、メタデータの不整合した `percent` を使わない判断は妥当。
- 公開 [StarRailResのrelic_sets.json](https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/index_new/jp/relic_sets.json) は設計どおり段階別 `properties` 配列を持ち、2/4セットの累積、負の `SpeedAddedRatio`、`desc`だけの条件付き効果を区別できる。
- 未取得・未解決時のfail closed、1/2/4個、負符号、空properties、E1/E2の変異チェック、実UIDによる両経路照合が定義されている。変更も `server/enkaFallback.ts` と同テストに閉じている。
- Phase Dについて新しい停止指摘はない。

### Phase E: No-Go

- 現行カタログをコードから再集計し、既定部位へ落ちる件数が設計記載どおり75件（HSR 36 / 原神 18 / ZZZ 21）であることを確認した。既定部位を選び直さず廃止する判断は、現在の69名に対して妥当。
- BDE-02とBDE-03により、表示契約とStatKey全域の安全な既定動作が閉じていない。

## 検証範囲

- 関連テスト: `node node_modules/vitest/vitest.mjs run server/buildAdvisor.test.ts server/gameProviders.test.ts server/expectedGuideProfiles.test.ts --pool=threads --poolOptions.threads.singleThread` — **3ファイル・28テストPASS**。sandbox内ではesbuild起動が `spawn EPERM` となり、同一コマンドを承認済みのsandbox外で再実行した。
- 読み取り監査: `characterReferenceCatalog` / `characterReferenceFor` と現行のラベル照合規則で251名の全目標を再集計し、既定部位へ落ちる75件を再現した。
- 一次データ照合: StarRailResの `relic_sets.json` と `properties.json` の対象12型を2026-09-12に確認した。
- 未実装のPhase B・D・Eそのもののテスト、全件テスト、型検査、ビルド、ゴールデン比較、実UID照合、Chrome画面検証は未実施。今回の判定は設計の実装準備に限定する。
- 設計正本、製品コード、実装ログ、Obsidianは更新しない。レビュー文書と設計書インデックスだけを更新する。

## 変更履歴

| 日付 | 内容 |
| --- | --- |
| 2026-09-12 | Phase B・D・Eレビューを記録。全体No-Go（P2 3件）。Phase B No-Go、Phase D Go、Phase E No-Go。D4の残存指示、Phase Eの多言語表示契約、サブステータス非対応キーを指摘。 |
