# 修正設計書: tRPC 応答の `Vary: Origin` 欠落（2026-09-11）

[修正設計書_更新履歴APIの転送量削減_2026-09-10.md](修正設計書_更新履歴APIの転送量削減_2026-09-10.md) §6 残課題「`Vary: Origin` の欠落」の回収設計。

- 作成日: 2026-09-11
- 対象アプリ: hoyoverse-builder
- 種別: 修正設計書（**応答の本文は不変。`Vary` ヘッダーだけが変わる**）
- 対象バージョン: 採番なし（API の運用改善。リリース番号を持たない）
- 対象: `server/_core/index.ts`（CORS ミドルウェアと tRPC ミドルウェアの設定）
- 前提コミット: `94116d7`
- ステータス: 実装中（2026-09-11、実装ログ Phase 28。ローカル検証済み・本番未反映）
- 関連: [修正設計書_更新履歴APIの転送量削減_2026-09-10.md](修正設計書_更新履歴APIの転送量削減_2026-09-10.md) §2 D1 訂正・§6（発見の経緯）/ [修正設計書_リクエストボディ上限の縮小_2026-09-10.md](修正設計書_リクエストボディ上限の縮小_2026-09-10.md)（実サーバー起動型テストの先行例）

## 1. 不具合

2026-09-11 に本番 API で確認した。`/api/trpc/*` の応答は、要求元を反射した
`Access-Control-Allow-Origin: <要求元>` と `Access-Control-Allow-Credentials: true` を返すのに、
`Vary` は `trpc-accept`（Phase 26 以降は `trpc-accept, Accept-Encoding`）だけで、`Origin` が入っていない。

応答の中身（ACAO の有無と値）が `Origin` で変わるのに `Vary` がそれを宣言していないため、
共有キャッシュが挟まると、ある要求元向けの応答が別の要求元へ返る可能性がある。

**現状の実害は低い**: Railway の前段にキャッシュする CDN が無く、tRPC の応答は `Cache-Control` を持たない。
それでも CORS のキャッシュ正しさの問題であり、前段に CDN を置いた時点で顕在化するため直す。

## 2. 原因（tRPC 11.6.0 のソースで確認）

1. `configureCors()` が許可済みの要求元に対して `res.setHeader("Vary", "Origin")` を設定する。
2. その後 tRPC の `resolveResponse` が応答ヘッダーを `new Headers([["vary", "trpc-accept"]])` で作り、
   node-http アダプタの `writeResponse` が `rawResponse.setHeader(key, value)` で1件ずつ書き込む。
   **`setHeader` なので、先に CORS が付けた `Vary: Origin` を置き換える。**
3. tRPC が後から書くため、CORS 側を `appendHeader` にしても直らない。

`resolveResponse` の分岐を確認した結果（`node_modules/@trpc/server/dist/resolveResponse-*.mjs`）:

| 経路 | `vary: trpc-accept` を書くか | `responseMeta` を通るか |
| --- | --- | --- |
| 通常のクエリ・ミューテーション（成功・失敗とも） | 書く | 通る（`initResponse`） |
| JSONL ストリーム・SSE | 書く | 通る |
| `HEAD` | 書かない（ヘッダー無しの 204） | 通らない |
| アダプタの例外ハンドラ（`internal_exceptionHandler`） | 書かない | 通らない |

`vary` を上書きする経路はすべて `responseMeta` を通る。上書きしない経路では CORS 側の値が残る。

`initResponse` は `responseMeta` が返した `headers` を次のように扱う:

- `Headers` インスタンス → `headers.append(key, value)`。**`vary` は `trpc-accept, Origin` に連結される。**
- 素のオブジェクト（v12 で削除予定の非推奨形）→ `headers.set(key, value)`。`trpc-accept` を**消してしまう**。

## 3. 決定

### D1. tRPC の `responseMeta` で `vary: Origin` を追記する（本体）

`createExpressMiddleware` に `responseMeta` を渡し、**`Headers` インスタンス**で `vary: Origin` を返す。

```ts
responseMeta: () => ({ headers: new Headers({ vary: "Origin" }) }),
```

- tRPC が自分の `trpc-accept` に `Origin` を連結し、`Vary: trpc-accept, Origin` を書く。
  その後 `compression` が `Accept-Encoding` を追記するため、圧縮時は `trpc-accept, Origin, Accept-Encoding` になる。
- **要求元が許可済みかどうかに関係なく常に付ける。** 許可されていない要求元への応答には ACAO が無いが、
  「ACAO が無い」こと自体も `Origin` で決まる応答内容のため。条件付きにすると、未許可の要求元に対する
  ACAO 無しの応答がキャッシュされ、許可済みの要求元へ返る形が残る。
- 素のオブジェクト形は使わない（`trpc-accept` が消える・v12 で削除予定）。

### D2. CORS ミドルウェアは `res.vary("Origin")` を無条件で付ける

`configureCors()` の `res.setHeader("Vary", "Origin")`（許可済みの要求元だけ）を、
ミドルウェア冒頭の `res.vary("Origin")`（全要求）へ置き換える。

- tRPC 以外の経路（`/api/health`・`/api/auth/github`・API_ONLY の `/`・`OPTIONS` の 204・tRPC の `HEAD` と例外ハンドラ）は
  この値がそのまま残る。D1 と同じ理由で、許可済みかどうかに関係なく付ける。
- `res.vary` は Express 4 の標準 API（`vary` パッケージ）で、既存の `Vary` を消さずに重複なく追記する。
- tRPC の経路ではこの値は D1 の `setHeader` で置き換わるが、D1 の値が `Origin` を含むため問題ない。

### D3. 回帰ゲートを1本置く

`server/_core/corsVary.test.ts` を新設する。`compression.test.ts` と同じく `index.ts` を `API_ONLY=true` で実プロセス起動し、
`node:http` で生のヘッダーを検査する（ミドルウェアの並びと tRPC の上書きは実サーバーでしか再現しない）。

1. Pages の要求元からの tRPC 応答: ACAO が要求元、`Vary` に `trpc-accept` と `origin` の両方がある。
2. `Accept-Encoding: gzip` を付けた tRPC 応答: `Vary` に `trpc-accept`・`origin`・`accept-encoding` の3つがあり、重複が無い。
3. tRPC のエラー応答（存在しない手続き）でも `Vary` に `origin` がある。
4. 許可していない要求元: ACAO は無いが `Vary` に `origin` がある。
5. `/api/health` と `OPTIONS` の preflight: `Vary` に `origin` がある。

修正前のコードで 1〜4 が落ちること（再現テスト）を確認してから修正を入れる。

`compression.test.ts` の「`Vary: Origin` は tRPC に上書きされて消えている」という注記は事実でなくなるため、
新テストへの参照に書き換える（アサーションは変えない）。

## 4. 変更範囲

| ファイル | 変更 |
| --- | --- |
| `server/_core/index.ts` | CORS の `Vary` を `res.vary("Origin")` へ（D2）、`createExpressMiddleware` に `responseMeta`（D1） |
| `server/_core/corsVary.test.ts` | 新規。実サーバーで `Vary` を確認（D3） |
| `server/_core/compression.test.ts` | 注記コメントの更新のみ |

**変更しないもの**: ルーター、クライアント、依存パッケージ、応答の JSON（ゴールデン比較の11セクションはすべて不変）、
CORS の許可リストと ACAO / Allow-Credentials の出し方。

## 5. 受入条件

1. 本番 API の `/api/trpc/*` 応答で、Pages の要求元に対し ACAO が維持され、`Vary` に `trpc-accept`・`Origin`・`Accept-Encoding` が揃う。
2. `/api/health` の応答の `Vary` に `Origin` がある。
3. 圧縮（Phase 26）が維持される（`Content-Encoding: br` / `gzip`、転送量は Phase 26 と同等）。
4. `pnpm check` / 全テスト / `build:api` / Pages ビルドが green、ゴールデン比較は全セクション一致。
5. Pages の画面（図鑑・更新履歴）が本番 API から従来どおり表示される（`Vary` の追加で CORS が壊れない）。
   確認は HTTP で足りるものは HTTP で行い、画面の確認は Chrome で行う（`D:\my-app2` のブラウザ確認ルール）。

## 6. 採用しなかった案

- **CORS 側を `appendHeader` / `res.vary` にするだけ**: tRPC が後から `setHeader` で置き換えるため効かない（§2）。
- **tRPC の後段で `Vary` を書き直すミドルウェア**（`res.writeHead` のフック等）: tRPC の書き込み順に依存し、
  `compression` のフックとも重なる。tRPC が公式に用意している `responseMeta` の方が単純。
- **`responseMeta` で素のオブジェクト `{ vary: "trpc-accept, Origin" }` を返す**: 動くが非推奨形で、
  tRPC 側の既定値を二重に持つことになる。`Headers` の追記で足りる。

## 7. 残課題（本設計の対象外）

- レスポンスキャッシュ（`Cache-Control` / ETag）は入れない（Phase 26 設計 §6 と同じ）。
- tRPC を v12 へ上げるときは `responseMeta` の `headers` の扱い（`Headers` の追記）が変わっていないかを
  `corsVary.test.ts` で確認する。

## 変更履歴

| 日付 | 内容 |
| --- | --- |
| 2026-09-11 | 新規作成（着手前・正本）。Phase 26 設計 §6 の残課題を回収。tRPC 11.6.0 のソースで上書き経路と `responseMeta` の追記挙動を確認し、`Headers` インスタンスで `vary: Origin` を返す形を本体とした。 |
| 2026-09-11 | 実装中へ更新。D3 のテストが修正前に 1〜4 で失敗し 5 が pass することを確認後、D1・D2 を実装して全件 pass。ローカルの受入条件4（型検査・全テスト・`build:api`・Pages ビルド・ゴールデン比較）を満たした。 |
