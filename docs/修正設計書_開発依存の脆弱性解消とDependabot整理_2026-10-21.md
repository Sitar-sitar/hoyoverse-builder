# 修正設計書：開発依存の脆弱性解消とDependabot整理

Phase 61で本番依存のauditは0件になったが、開発・CI・build用の依存にDependabot alertsが75件（Critical 4 / High 33）残り、古いDependabot PRが10件たまっている。今回は依存の更新・削除と、Dependabotの設定整理をまとめて1回のPR・1回の配備で行う。

- 作成日: 2026-10-21
- 対象アプリ: hoyoverse-builder
- 種別: 修正設計書
- 対象バージョン: Phase 62（依存整理）
- 前提コミット: `92952f70f1ce424aa24f8e60d14ae6f02c912fa3`（main、本番API/Pagesと同一）
- ステータス: ドラフト（§10の利用者判断待ち）
- 関連: [セキュリティ残課題の修正設計書（Phase 61）](修正設計書_セキュリティ残課題P2P3_2026-10-20.md)、[実装ログ](実装ログ.md)、[本番運用ガイド](northflank-production.md)

---

## 1. 目的・背景

- 2026-10-21時点のDependabot alerts（open）は75件で、すべて`development`扱い（Critical 4 / High 33 / Medium 35 / Low 3）。`pnpm audit`（全依存）では Critical 4 / High 39 / Moderate 39 / Low 3。本番依存（`--prod`）は0件で、Phase 61の監査ゲートは合格している。
- 開発依存も、CI・Docker build・ローカル開発で実行されるため放置しない。CIとDocker buildは公開物を作る経路で、`pnpm`本体と`vite`・`tar`の脆弱性はこの経路に入る。
- 主な発生源（alertsの件数）:

| 発生源 | 件数 | 原因 |
| --- | --- | --- |
| devDependencyの`pnpm` ^10.15.1（解決10.15系） | 26 | 修正版は10.34.5以上 |
| `vite` 7.1.9、および`vitest` 2が内包する`vite` 5 | 16 | 修正版は7.3.7 |
| `vitest` 2.1.9と配下の`tinypool` | 7（Critical 4を含む） | 2系に修正版なし。3.2.6以上・4.1.11以上 |
| `@tailwindcss/vite` 4.1.14配下の`tar` 7.5.1 | 9 | tailwind 4.3系で解消 |
| `jsdom` 30.0.1配下の`undici` 8.10.0 | 7 | jsdom 30.1系で解消 |
| `postcss`・`rollup`・`picomatch`・`source-map-js`・`nanoid` 3（vite配下）ほか | 10 | lockfileの推移依存更新で解消 |

- 開いているDependabot PR（10件、#83は2026-10-21に削除済み依存としてclose）:

| PR | 内容 | 本設計での扱い |
| --- | --- | --- |
| #133 | vite 7.1.9→7.3.7（security update） | 取り込む |
| #90 | api-backend（tRPC 11.19ほか、minor） | 取り込む |
| #134 | frontend-ui（radix・react 19.3.1ほか31件、minor） | 取り込む（wouterを除く、§4.4） |
| #91 | tooling（tailwind 4.3・jsdom 30.1・postcss・prettierほか12件） | 取り込む（esbuildは0.25系に留める、§4.4） |
| #80 | `add` 2.0.9 | 依存ごと削除（未使用） |
| #82 | framer-motion 13 | 依存ごと削除（未使用） |
| #84 | vitest 5 | §10 U-1 |
| #79 | express 5 / @types/express 5 | §10 U-2 |
| #81 | nanoid 6 | §10 U-3 |
| #122 | actions/upload-artifact 7 | §10 U-4 |

### 1.1 事前試行（2026-10-21、使い捨てworktree、mainは無変更）

以下を当てて試した結果。

- 当てた変更: `add`・`framer-motion`削除、`pnpm` ^10.34.7、`vite` ^7.3.7、`vitest` ^4.1.12、`pnpm update '!wouter'`（範囲内の最新へ）。
- `pnpm audit`（全依存）: Critical 4 / High 39 / Moderate 39 / Low 3 → **Moderate 2のみ**（`drizzle-kit` 0.31.11配下の`esbuild` 0.18.20、`@tailwindcss/typography` 0.5.20配下の`postcss-selector-parser` 6.0.10。どちらも現行最新版の配下）。本番依存の監査ゲートは0件で合格。
- 型・API build・Pages artifact（forward）・content:check・256名baseline・node:test 79件: PASS。
- Vitest: 1件だけ失敗。`server/content/repository.test.ts`の同期テストが約5.2秒かかり、vitest 4では既定の5秒期限で失敗扱いになる（vitest 2は同期テストの超過を失敗にしていなかった。mainでも5,184ms）。当該テストへ明示の期限を付ければ解消する。
- 判明した制約: (1) `pnpm update`（全体）は`wouter`を3.7.1以外へ上げ、`patches/wouter@3.7.1.patch`が当たらずに失敗する。(2) devDependencyの`pnpm`を削除すると、npm scripts内の`pnpm content:check`などがローカル（corepackのshimが無いこのPC）で`pnpm`を見つけられずに失敗する。CIとDockerは`corepack enable`済みなので影響しないが、ローカル開発を壊すため削除ではなく更新にする。

## 2. スコープ

### 2.1 IN

- 依存の更新: 開いているminor/securityのPR（#133・#90・#134・#91）相当の更新を、lockfileの推移依存を含めて範囲内の最新へ。
- 依存の削除: 未使用の`add`（devDependency）と`framer-motion`（dependency）。
- `pnpm`: devDependencyを ^10.34.7 へ上げ、`packageManager`（現在 10.4.1、CIとDocker buildが使う）も 10.34.7 へ揃える。
- `vitest`: 2系から修正版のある系へ上げる（版はU-1）。それに伴うテスト側の最小修正。
- Dependabotの設定: 今回見送るメジャー更新とwouterを`ignore`へ登録し、同じPRが繰り返し開かれないようにする。
- 取り込んだ・不要になったDependabot PRのclose（本PRのマージ後。取り込んだものはDependabotが自動closeする）。

### 2.2 OUT（既存挙動を保つ）

- アプリの機能・表示・APIの挙動の変更。
- express 5・nanoid 6など、コード変更を伴うメジャー更新の実施（U-2・U-3で採用する場合を除く）。
- wouterの更新とパッチの作り直し。
- `esbuild`の0.26以上への更新（API bundleを作る道具で、0.x系のminorは破壊的変更を含み得る）。
- Node.jsの版（CI・Dockerとも22系）の変更。
- SEC-06のmigration Job側（別作業）。

## 3. 全体方針

- **1つのPR・1回の配備にまとめる。** mainへのマージごとにAPIがRecreateで約45秒503になるため、Dependabot PRを個別にマージしない。
- 更新は「範囲内の最新（`pnpm update '!wouter'`）＋明示した版上げ」に限る。メジャー更新は利用者判断（§10）で採用したものだけ。
- 本番依存（dependencies）もminorで更新される（react 19.3.1、tRPC 11.19、zod 4.6.7、mysql2 3.24.6、drizzle-orm 0.45.4、radix各種など）。このため回帰確認は、テストに加えて公開サイトの実表示を含める（§8）。
- 残るModerate 2件は、上流の最新版でも解消しない開発依存なので、overridesで下位依存を差し替えるより受け入れを推奨する（U-5）。

## 4. 詳細仕様

### 4.1 package.json

- `dependencies`から`framer-motion`を削除（全ソースで参照なしを実装時に再確認する）。
- `devDependencies`から`add`を削除。
- `pnpm` ^10.34.7、`vite` ^7.3.7、`vitest`はU-1の版。
- `packageManager`を`pnpm@10.34.7`（corepackの整合性hash付き）へ。
- 他は`pnpm update '!wouter'`の結果（範囲指定の下限が上がる。上限は変えない＝メジャーは上がらない）。`esbuild`は ^0.25 のまま。

### 4.2 テスト

- `server/content/repository.test.ts`の約5秒かかる同期テストに明示の期限（30秒）を付ける。テストの中身は変えない。
- vitest 4（またはU-1で5）で他に壊れた試験があれば、試験の意図を変えない最小修正だけを行い、実装ログへ記録する。

### 4.3 Dependabot設定（`.github/dependabot.yml`）

- npm: `wouter`は全更新を`ignore`（パッチ`patches/wouter@3.7.1.patch`のため。更新するときはパッチを作り直す別作業）。
- npm: 本設計で見送ったメジャー（U-2・U-3・U-1の結果に応じて`express`・`@types/express`・`nanoid`・`vitest`）を`update-types: ["version-update:semver-major"]`で`ignore`。
- npm: `esbuild`は`versions: [">=0.26.0"]`を`ignore`。
- github-actions: U-4で見送る場合、`actions/upload-artifact`のメジャーを`ignore`。
- security updatesは`ignore`の影響を受けない（GitHubの仕様上、ignoreはversion updatesだけに効く）ことを確認してから入れる。確認できなければ`ignore`を入れず、PRを手動でcloseする運用に留める。

### 4.4 推移依存

- lockfileの再解決で、tar（tailwind配下）・undici（jsdom配下）・postcss/rollup/picomatch/source-map-js/nanoid 3（vite配下）を修正版へ。`pnpm.overrides`は使わない。

## 5. 既存機能の非破壊（チェックリスト）

- [ ] 3ゲームのUID照会・図鑑・履歴・PT・凸・数値が更新前後で一致（全256名のbaseline比較）。
- [ ] 公開Pagesの全ルートが表示でき、CSP違反0（Phase 61のCSPを維持）。
- [ ] 管理画面のログイン・表示（radix・react・tRPCのminor更新の影響確認）。
- [ ] 本番依存の監査ゲート0件、API build、Pages artifact、release descriptor、公開後検査。
- [ ] DB schema/data/migrationは変更しない。

## 6. 変更ファイルと差分の粒度

| 順 | ファイル | 内容 |
| --- | --- | --- |
| 1 | `package.json`、`pnpm-lock.yaml` | §4.1・§4.4（1コミット） |
| 2 | `server/content/repository.test.ts`ほか必要な試験 | §4.2（1コミット） |
| 3 | `server/_core/vite.ts` | U-3で「nanoidを削除」を選んだ場合だけ。開発サーバのcache-bust文字列を`crypto.randomUUID()`へ |
| 4 | `.github/dependabot.yml` | §4.3 |
| 5 | `.github/workflows/monitor-production.yml` | U-4で採用した場合だけ（SHA固定のまま版を上げる） |
| 6 | `docs/実装ログ.md`、本書、`docs/設計書インデックス.md` | 記録 |

## 7. リスクと割り切り

- **本番依存のminor更新による表示の変化**: radix・react・tRPCのminorは互換を保つ方針の版だが、UI部品の細部の挙動が変わる可能性がある。テストと公開サイトの実表示確認で検出し、問題があれば該当パッケージだけ前の版へ戻す。
- **packageManagerの版上げ**: CI・Dockerのpnpmが10.4.1→10.34.7になる。lockfileの形式（v9）は同じ。`Ignored build scripts`などの警告の差は、build結果（API bundle・Pages artifact）とテストの合否で判断する。
- **ロールバック**: 本PRのmergeをrevertするPRを作る（PR必須のため）。DBは変更しないので、コードを戻せば復旧する。
- **割り切り**: Moderate 2件（U-5）は受け入れ候補。開発環境でしか動かず、上流の最新版でも残るため。

## 8. テスト・検証

- 共通: `pnpm check`、`pnpm test`（Vitest全件）、`pnpm content:check`、`pnpm content:baseline compare`、`pnpm build:api`、Pages artifact（forward、`scripts/pages.mjs --verify`）、node:test一式、本番依存の監査ゲート。
- 監査: `pnpm audit`（全依存）の件数を変更前後で記録。本番依存のゲートは0件のまま。
- 隔離MySQLの競合試験は変更範囲外（DB・認証コードを変えない）なので再実行しない。
- 公開後: API health・Pages・release.jsonの同SHA、公開後検査。Chromeで公開サイトの主要ルートの表示とCSP違反0、図鑑から1名の詳細表示。

## 9. 受け入れ条件

- [ ] Dependabot alerts（open）のCritical・Highが0件。残りはU-5で受け入れたものだけ。
- [ ] 本番依存の監査ゲート0件、§8の全検証がPASS。
- [ ] 本番API/Pages同SHAで公開し、公開後検査がPASS。
- [ ] 取り込んだDependabot PRがcloseされ、見送ったPRは理由付きでclose。§4.3の設定で同じ更新が再提案されない。

## 10. 未確定・要確認事項

| ID | 論点 | 選択肢 | 推奨 |
| --- | --- | --- | --- |
| U-1 | vitestの上げ先 | (a) 4.1.12（事前試行済み、Node 20/22/24対応） (b) 5.0.5（#84の系統。Node ^22.12が必要、CIとDockerは22系で可。未試行） | (a)。試行済みで、Critical解消には4で足りる。5は別途 |
| U-2 | express 5（#79） | (a) 見送り、メジャーをignore (b) 本Phaseで移行（ルーティング・body parser・エラー処理の確認が必要） | (a)。4.22.3は保守中で本番auditも0件。移行は別設計 |
| U-3 | nanoid 6（#81） | (a) nanoidを削除し、開発サーバのcache-bustを`crypto.randomUUID()`へ置換（本番依存が1つ減る） (b) 5のまま、メジャーをignore | (a)。用途が開発時の1か所だけで、Node標準で足りる |
| U-4 | actions/upload-artifact 7（#122） | (a) 見送り、メジャーをignore（v4は継続提供） (b) v7へ（SHA固定、監視workflowの成果物保存で確認） | (a)。用途は監視結果の保存1か所で、更新の利点が小さい |
| U-5 | 残るModerate 2件（drizzle-kit配下esbuild、typography配下postcss-selector-parser） | (a) 受け入れ、Dependabot alertをtolerable riskとしてdismiss（理由を記録） (b) `pnpm.overrides`で差し替え（上流が想定しない版での動作確認が必要） | (a)。開発時だけ動き、上流最新版でも残る |

---

## 変更履歴

| 日付 | 内容 |
| --- | --- |
| 2026-10-21 | 新規作成。前提92952f7でDependabot alerts 75件と開いているPR 10件を照合し、使い捨てworktreeで更新を試行（全依存auditはModerate 2のみ、vitest 4で1件の期限超過）。メジャー更新5件の扱いをU-1〜U-5として利用者判断へ。 |
