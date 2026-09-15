# 修正設計書: tRPC 応答の `Vary: Origin` 欠落（Phase 41 で作り直し）

[修正設計書_更新履歴APIの転送量削減_2026-09-10.md](修正設計書_更新履歴APIの転送量削減_2026-09-10.md) §6 残課題「`Vary: Origin` の欠落」の回収設計。
2026-09-11 に Phase 28（PR #37）として実装したが未マージのまま main が Phase 40 まで進み、`docs/実装ログ.md` と
設計書インデックスで衝突した。衝突は解消せず、**現在の main（tRPC 11.18.0）を前提に新しい Phase として作り直す**。

- 作成日: 2026-09-15
- 対象アプリ: hoyoverse-builder
- 種別: 修正設計書（**応答の本文は不変。`Vary` ヘッダーだけが変わる**）
- 対象バージョン: 採番なし（API の運用改善。リリース番号を持たない）
- 対象: `server/_core/index.ts`（CORS ミドルウェアと tRPC ミドルウェアの設定）
- 前提コミット: `55e35a0`（main。Dependabot PR #3・#6・#9・#11・#46 マージ後。`@trpc/server` 11.18.0）
- ステータス: 着手前（正本）
- 関連: [修正設計書_更新履歴APIの転送量削減_2026-09-10.md](修正設計書_更新履歴APIの転送量削減_2026-09-10.md) §2 D1 訂正・§6（発見の経緯）/ [修正設計書_リクエストボディ上限の縮小_2026-09-10.md](修正設計書_リクエストボディ上限の縮小_2026-09-10.md)（実サーバー起動型テストの先行例）
- 置き換え元: PR #37（ブランチ `fix/trpc-vary-origin`、Phase 28、未マージ）とその中の `docs/修正設計書_tRPC応答のVary_Origin欠落_2026-09-11.md`。
  旧設計書は main に存在しないため supersede バナーは貼らない。旧設計の決定 D1〜D3 は本書 §3 に取り込み、tRPC 11.18.0 で前提を再確認した。
  PR #37 は本 Phase の PR 作成時にクローズする（§6）。

---

## 1. 目的・背景

### 1.1 不具合

`/api/trpc/*` の応答は、要求元を反射した `Access-Control-Allow-Origin: <要求元>` と
`Access-Control-Allow-Credentials: true` を返すのに、`Vary` に `Origin` が入っていない。

応答の中身（ACAO の有無と値）が `Origin` で変わるのに `Vary` がそれを宣言していないため、
共有キャッシュが挟まると、ある要求元向けの応答が別の要求元へ返る可能性がある。

**現状の実害は低い**: Railway の前段にキャッシュする CDN が無く、tRPC の応答は `Cache-Control` を持たない。
それでも CORS のキャッシュ正しさの問題であり、前段に CDN を置いた時点で顕在化するため直す。

### 1.2 本番での再確認（2026-09-15、HTTP）

Pages の要求元（`https://sitar-sitar.github.io`）を付けて本番 API へ要求した結果:

| 経路 | `Access-Control-Allow-Origin` | `Vary` |
| --- | --- | --- |
| `GET /api/trpc/build.guideHistory`（`Accept-Encoding: gzip, br`） | 要求元を反射 | `trpc-accept, accept, Accept-Encoding`（**`Origin` なし**） |
| `GET /api/health` | 要求元を反射 | `Origin, Accept-Encoding` |

tRPC 11.18.0 へ上がったことで tRPC 既定の `vary` が `trpc-accept` から `trpc-accept, accept` に変わったが、
`Origin` が消える不具合は Phase 28 時点と同じく残っている。

## 2. 原因（tRPC 11.18.0 の配布物で再確認）

`@trpc/server@11.18.0` の `dist/resolveResponse-*.mjs` と `dist/node-http-*.mjs` を確認した。

1. `configureCors()` が許可済みの要求元に対して `res.setHeader("Vary", "Origin")` を設定する。
2. その後 tRPC の `resolveResponse` が応答ヘッダーを `new Headers([["vary", "trpc-accept, accept"]])` で作り、
   node-http アダプタの `writeResponse` が `rawResponse.setHeader(key, value)` で1件ずつ書き込む。
   **`setHeader` なので、先に CORS が付けた `Vary: Origin` を置き換える。**
3. tRPC が後から書くため、CORS 側を `appendHeader` / `res.vary` にしても直らない。

| 経路 | tRPC が `vary` を書くか | `responseMeta` を通るか |
| --- | --- | --- |
| 通常のクエリ・ミューテーション（成功・失敗とも） | 書く | 通る（`initResponse`） |
| JSONL ストリーム・SSE | 書く | 通る |
| `HEAD` | 書かない（ヘッダー無しの 204） | 通らない |
| アダプタの例外ハンドラ（`internal_exceptionHandler`） | 書かない | 通らない |

`vary` を上書きする経路はすべて `responseMeta` を通る。上書きしない経路では CORS 側の値が残る。

`initResponse` は `responseMeta` が返した `headers` を次のように扱う（11.6.0 から変化なし）:

- `Headers` インスタンス → `headers.append(key, value)`。**`vary` は `trpc-accept, accept, Origin` に連結される。**
- 素のオブジェクトで値が文字列 → `headers.set(key, value)`。tRPC 既定の `trpc-accept, accept` を**消してしまう**。

## 3. 決定

### D1. tRPC の `responseMeta` で `vary: Origin` を追記する（本体）

`createExpressMiddleware` に `responseMeta` を渡し、**`Headers` インスタンス**で `vary: Origin` を返す。

```ts
responseMeta: () => ({ headers: new Headers({ vary: "Origin" }) }),
```

- tRPC が自分の既定値に `Origin` を連結し、`Vary: trpc-accept, accept, Origin` を書く。
  その後 `compression` が `Accept-Encoding` を追記するため、圧縮時は `trpc-accept, accept, Origin, Accept-Encoding` になる。
- **要求元が許可済みかどうかに関係なく常に付ける。** 未許可の要求元への応答には ACAO が無いが、
  「ACAO が無い」こと自体も `Origin` で決まる応答内容のため。条件付きにすると、ACAO 無しの応答が
  キャッシュされて許可済みの要求元へ返る形が残る。
- 素のオブジェクト形は使わない（tRPC 既定の `vary` が消える）。

### D2. CORS ミドルウェアは `res.vary("Origin")` を無条件で付ける

`configureCors()` の `res.setHeader("Vary", "Origin")`（許可済みの要求元だけ）を削除し、
ミドルウェア冒頭の `res.vary("Origin")`（全要求）へ置き換える。

- tRPC 以外の経路（`/api/health`・`/api/auth/github`・API_ONLY の `/`・`OPTIONS` の 204・tRPC の `HEAD` と例外ハンドラ）は
  この値がそのまま残る。D1 と同じ理由で、許可済みかどうかに関係なく付ける。
- `res.vary` は Express 4 の標準 API（`vary` パッケージ）で、既存の `Vary` を消さずに重複なく追記する。
- tRPC の経路ではこの値は tRPC の `setHeader` で置き換わるが、D1 の値が `Origin` を含むため問題ない。

### D3. 回帰ゲートを1本置く

`server/_core/corsVary.test.ts` を新設する。`compression.test.ts` と同じく `index.ts` を `API_ONLY=true` で実プロセス起動し、
`node:http` で生のヘッダーを検査する（ミドルウェアの並びと tRPC の上書きは実サーバーでしか再現しない）。

1. Pages の要求元からの tRPC 応答: ACAO が要求元、`Vary` に `trpc-accept` と `origin` の両方がある。
2. `Accept-Encoding: gzip` を付けた tRPC 応答: `Vary` に `trpc-accept`・`origin`・`accept-encoding` があり、トークンの重複が無い。
3. tRPC のエラー応答（存在しない手続き）でも `Vary` に `origin` がある。
4. 許可していない要求元: ACAO は無いが `Vary` に `origin` がある。
5. `/api/health` と `OPTIONS` の preflight: `Vary` に `origin` がある。

- tRPC 既定値の `accept` は tRPC 側の都合で変わりうるため、**アサーションは `trpc-accept`・`origin`・`accept-encoding` の包含と重複なしに限り、`Vary` の完全一致は検査しない。**
- PR #37 の `corsVary.test.ts` は下敷きにしてよいが、冒頭の設計書リンクは本書へ差し替える。
- 修正前のコードで 1〜4 が落ち、5 が pass することを確認してから D1・D2 を入れる（バグ修正時の再現テスト必須ルール）。
- 変異スポットチェック: D1 の `Headers` を素のオブジェクト `{ vary: "Origin" }` に変えると 1・2 が落ちる（`trpc-accept` が消える）ことを一度確認する。

`compression.test.ts` の「`Vary: Origin` は圧縮導入前から tRPC の setHeader に上書きされて消えている」という注記（84行目付近）は
事実でなくなるため、`corsVary.test.ts` への参照に書き換える（アサーションは変えない）。

## 4. 変更範囲

| 順 | ファイル | 変更 |
| --- | --- | --- |
| 1 | `server/_core/corsVary.test.ts` | 新規。実サーバーで `Vary` を確認（D3）。修正前に 1〜4 が赤であることを確認 |
| 2 | `server/_core/index.ts` | CORS の `Vary` を `res.vary("Origin")` へ（D2）、`createExpressMiddleware` に `responseMeta`（D1） |
| 3 | `server/_core/compression.test.ts` | 注記コメントの更新のみ |
| 4 | `docs/実装ログ.md` / 本書 / `docs/設計書インデックス.md` | Phase 41 の進行・締め、ステータスとコミットハッシュ |

**変更しないもの**: ルーター、クライアント、依存パッケージ、応答の JSON（ゴールデン比較の11セクションはすべて不変）、
CORS の許可リスト、ACAO / Allow-Credentials / Allow-Headers / Allow-Methods の出し方、圧縮（Phase 26）とボディ上限（Phase 24）の並び。

## 5. 既存機能の非破壊（チェックリスト）

- [ ] Pages の要求元に対する ACAO・Allow-Credentials が維持される（CORS が壊れない）
- [ ] 未許可の要求元に ACAO を返さない
- [ ] 圧縮が維持される（`Content-Encoding: br` / `gzip`）
- [ ] `OPTIONS` の 204 が維持される
- [ ] 管理者ログイン（`/api/auth/github`）の挙動が変わらない
- [ ] ゴールデン比較の全11セクションが一致する

## 6. 進め方（PR #37 との関係）

1. 本書を着手前（正本）として登録する（本 PR）。
2. 実装は main から新しいブランチを切って行い、PR #37 のブランチはマージ・リベースしない。
3. `docs/実装ログ.md` に **Phase 41** を起こす。PR #37 が書いた Phase 28 の記録は main に入っていないため転記しない。
   経緯（Phase 28 として実装→未マージで衝突→Phase 41 で作り直し）は Phase 41 の「経緯」に1行で残す。
4. 実装 PR を作成したら、PR #37 に「Phase 41（本書）で作り直したためクローズ」とコメントしてクローズする。
   `hoyoverse-builder-wt-vary` のワークツリーとローカルブランチは、PR #37 クローズ後に片付ける。

## 7. リスクと割り切り

- **tRPC 更新で `responseMeta` の扱いが変わる**: `Headers` の追記が `set` に変わると `Origin` が再び消える、または tRPC 既定値が消える。
  D3 のテストがこれを検出する。Dependabot の api-backend グループ PR は CI（`pnpm test`）でゲートされる。
- **`Vary: Origin` の常時付与でキャッシュ効率が落ちる**: 現在キャッシュ層が無いため影響なし。CDN 導入時は正しい挙動。
- **ロールバック**: `index.ts` の2箇所を戻すだけで Phase 40 時点の応答ヘッダーに戻る（応答本文は不変）。

## 8. テスト・検証

- 再現テスト: 修正前に D3 の 1〜4 が失敗、5 が pass。修正後は 5件すべて pass。変異スポットチェック（D3）。
- ローカル: `pnpm check` / `pnpm test` / `pnpm build:api` / Pages ビルド（`vite.pages.config.ts`）/ ゴールデン比較 全11セクション一致。
  依存が 11.18.0 に上がっているため、実装前に `pnpm install --frozen-lockfile` で `node_modules` を lockfile に揃える（ローカルは 11.6.0 のままだった）。
- ビルド済み `dist/index.js` を `API_ONLY=true` で起動し、Pages の Origin で `build.guideHistory` と `/api/health` の `Vary` を HTTP で確認する。
- 本番（Railway 反映後）: §1.2 と同じ2要求を HTTP で再実行して §9 を確認する。**CI の green と本番反映は別に確認する。**
- 画面確認は Chrome で行う（`D:\my-app2` のブラウザ確認ルール）。HTTP で足りる確認はブラウザを使わない。

## 9. 受け入れ条件

- [ ] 本番 API の `/api/trpc/*` 応答で、Pages の要求元に対し ACAO が維持され、`Vary` に `trpc-accept`・`Origin`・`Accept-Encoding` が揃う
- [ ] 本番 API の `/api/health` 応答の `Vary` に `Origin` がある
- [ ] 圧縮が維持され、`build.guideHistory` の転送量が Phase 26 と同等（br で約 14KB）
- [ ] `pnpm check` / 全テスト / `build:api` / Pages ビルドが green、ゴールデン比較は全セクション一致、CI（validate）pass
- [ ] Pages の画面（図鑑・更新履歴）が本番 API から従来どおり表示される（Chrome で確認）
- [ ] PR #37 がクローズされ、実装ログ Phase 41 が締めチェックリストでクローズされている

## 10. 未確定・要確認事項

- なし（旧設計 D1〜D3 の方針は Phase 28 でローカル検証済み。tRPC 11.18.0 での前提は §2 で再確認済み）。

## 11. 残課題（本設計の対象外）

- レスポンスキャッシュ（`Cache-Control` / ETag）は入れない（Phase 26 設計 §6 と同じ）。
- tRPC を v12 へ上げるときは `responseMeta` の `headers` の扱いを `corsVary.test.ts` で確認する。

---

## 変更履歴

| 日付 | 内容 |
| --- | --- |
| 2026-09-15 | 新規作成（着手前・正本）。PR #37（Phase 28、未マージ・main と衝突）の設計を、main `55e35a0`（tRPC 11.18.0）前提で Phase 41 として作り直した。本番で `Vary: trpc-accept, accept, Accept-Encoding`（`Origin` なし）を再確認し、tRPC 11.18.0 の配布物で `setHeader` 上書きと `responseMeta` の `Headers` 追記挙動が変わっていないことを確認。テストは `Vary` の完全一致を検査しない方針と変異スポットチェックを追加。 |
