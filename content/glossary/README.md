# 用語集の更新手順

崩壊：スターレイル・原神・ゼンレスゾーンゼロの用語集（画面 `/glossary`）のデータを更新するための手順書。**このファイルだけを読めば更新できる**ことを目標にしている。仕様の正本は [実装設計書_ゲーム内用語集の基盤_2026-11-15](../../docs/実装設計書_ゲーム内用語集の基盤_2026-11-15.md)。

## 1. 編集するファイルは 1 つ

| ゲーム | 編集するファイル |
| --- | --- |
| 崩壊：スターレイル | `content/glossary/hsr.ts` |
| 原神 | `content/glossary/genshin.ts` |
| ゼンレスゾーンゼロ | `content/glossary/zzz.ts` |

- カテゴリを足すときだけ `content/glossary/categories.ts` も編集する。
- 次は**生成物**なので手で触らない（`pnpm glossary:sync` が作る）。
  - `content/ja/glossary/*.ts`（日本語原文）
  - `content/translations/en/glossary_*.ts`、`content/translations/zh-CN/glossary_*.ts`（翻訳レコード）
  - `content/catalog.ts`、`client/src/content/manifest.ts`
- 用語が 1 件以上あるゲームだけ、画面のゲーム切替とヘッダーの「用語集」に出る。データを入れて `pnpm glossary:sync` を実行すれば、画面側のコードを触らずに有効になる。

## 2. コピーして使う雛形

```ts
{
  id: "aeon",
  category: "world",
  name: "星神",
  reading: "せいしん",
  aliases: ["アイオーン"],
  summary: "「運命」を体現する、宇宙で最も強大な存在。",
  body: "星神は[[path]]を体現する存在で、……\n\n（空行で段落を分ける）[[path|運命の道]]を歩む者を……",
  related: ["path"],
  characters: ["hsr:1305"],
  spoiler: false,
  sources: [{ label: "公式サイト 世界観", url: "https://example.com/..." }],
  gameVersion: "3.7",
  dataAsOf: "2026-11-15",
  formerIds: [],
},
```

上の値は書式の例であり、内容の正しさは確認していない。そのまま使わない。

### 項目ごとの書き方

| 項目 | 必須 | 書き方 | 良い例 | 悪い例 |
| --- | --- | --- | --- | --- |
| `id` | 必須 | ゲームの**英語版の正式名称**を kebab-case にする。英語名が無い・不明ならローマ字。英小文字・数字・ハイフンのみ、40 字以内。**公開後は変えない** | `aeon`、`light-cone`、`seishin` | `Aeon`、`light_cone`、推測の英訳 |
| `category` | 必須 | `categories.ts` にあるIDを 1 つ | `world` | `世界観`、存在しないID |
| `name` | 必須 | ゲーム内の日本語正式表記 | `星神` | 略称だけ、独自の言い換え |
| `reading` | 必須 | ひらがなと長音「ー」だけ。五十音順の並びと検索に使う | `せいしん`、`らいとこーん` | `セイシン`、`せい しん` |
| `aliases` | 任意 | 別名・略称・旧称。検索と「リンク付け忘れ」検出に使う | `["アイオーン"]` | 別の用語の名前 |
| `summary` | 必須 | 1 文の要約、80 字以内。リンク記法は書けない | `「運命」を体現する、宇宙で最も強大な存在。` | 本文の丸写し、`[[path]]` を含む |
| `body` | 必須 | 本文。空行で段落を分ける。リンク記法を書ける。`{` `}` は書けない | `[[path]]を体現する……` | 攻略サイトの文章の転記 |
| `related` | 任意 | 関連用語のID。**片側に書けば両方の用語に表示される** | `["path"]` | 自分自身、存在しないID |
| `characters` | 任意 | 関連キャラクターの identityKey（同じゲームのみ）。図鑑へのリンクになる | `["hsr:1305"]` | キャラ名、別ゲームのキャラ |
| `spoiler` | 任意 | ストーリーの核心に触れる用語は `true`。本文が折りたたまれる | `true` | — |
| `sources` | 必須 | 根拠にした出典を 1 件以上。`url` は `https://` で始める | `[{ label: "公式サイト", url: "https://..." }]` | `[]`、`http://` |
| `gameVersion` | 必須 | 内容を確認したゲームのバージョン | `"3.7"` | 空文字 |
| `dataAsOf` | 必須 | 内容を確認した日（YYYY-MM-DD）。未来日は不可 | `"2026-11-15"` | `"2026/11/15"` |
| `formerIds` | 任意 | 過去に使っていた用語ID。古い URL を新しい用語へ案内する | `["seishin"]` | 現在の別の用語のID |

### リンク記法（`body` の中だけ）

| 書き方 | 表示 | 使いどころ |
| --- | --- | --- |
| `[[aeon]]` | リンク先の用語名（「星神」） | 基本形。用語名が変わっても追従する |
| `[[aeon\|星神たち]]` | 「星神たち」 | 活用・略称・文脈上の言い換えで表示を変えたいとき |

- リンク先は**同じゲームの用語ID**だけ。存在しないID・自分自身・旧ID（`formerIds`）を指すとエラーになる。
- 同じ段落で同じ用語を何度リンクしてもよい。

## 3. 作業別の手順

| やりたいこと | 手順 |
| --- | --- |
| 用語を追加する | 配列の末尾にエントリを足す（画面では五十音順に並ぶので、ファイル内の順は問わない） |
| 説明を直す | `summary`・`body` を直し、`dataAsOf`・`gameVersion` を更新する |
| 用語IDを変える | 新IDにして旧IDを `formerIds` へ入れる。他の用語の `[[旧ID]]` は検査エラーで全箇所が示されるので、それに従って直す |
| 用語を削除する | エントリを消す。その用語を指していたリンク・`related` は検査エラーで示される |
| カテゴリを足す | `categories.ts` の配列に 1 行足す（配列の順が画面の並び順） |

項目を新しく足すときは、型（`shared/content/glossary.ts`）・検査（`server/content/glossary.ts`）・DTO・この README の 4 か所を同時に直す。

## 4. 書き終えたら

```bash
pnpm glossary:sync
pnpm glossary:report
pnpm check
pnpm test
```

1. `pnpm glossary:sync` … 検査して、生成物（原文・翻訳レコード・索引・manifest）を作り直す。データを直したら必ずこれ 1 つを実行する。
2. `pnpm glossary:report` … 警告（リンク付け忘れ候補・孤立した用語・確認日が古い用語）を確認し、必要なら直して 1 に戻る。警告は失敗扱いにならない。
3. `pnpm check` と `pnpm test` を通す。生成物も一緒にコミットする。

### pnpm が使えない環境で実行するとき

`pnpm` が PATH に無い端末では、リポジトリ直下で次のように `node` から直接実行する（中身は同じ）。

| pnpm のコマンド | 代わりに実行するコマンド |
| --- | --- |
| `pnpm glossary:sync` | `node --import tsx scripts/content/glossary.ts sync` |
| `pnpm glossary:report` | `node --import tsx scripts/content/glossary.ts report` |
| `pnpm content:check` | `node --import tsx scripts/content/commands.ts check` |
| `pnpm check` | `node node_modules/typescript/bin/tsc --noEmit` |
| `pnpm test` | `node node_modules/vitest/vitest.mjs run` |

`pnpm test` 相当でワーカーの起動タイムアウトが出る端末では、末尾に `--maxWorkers=4` を付ける。

## 5. 本番に出す

用語集のデータは、main へマージすると GitHub Pages の自動公開に乗って本番へ出る。用語データだけの変更でも次の順で進める。

1. 作業ブランチを切ってコミットする（`content/glossary/*.ts` と生成物を一緒に入れる。生成物が無いと CI の `content:check` が「生成物が入力と一致しません」で失敗する）。
2. push して main 向けの PR を作り、CI（`validate`・CodeQL）が通るのを待つ。
3. PR を main へマージする。マージで「Deploy HoYoverse Builder to GitHub Pages」が動くので、成功を確認する（GitHub の Actions 画面、または `gh run list --branch main --workflow deploy-pages.yml --limit 1`）。
4. 本番で表示を確かめる: `https://sitar-sitar.github.io/hoyoverse-builder/app/glossary?game=<hsr|genshin|zzz>&term=<用語ID>` を開き、本文・リンク・関連キャラクター・出典が出ること。そのゲームの最初の 1 件を入れたときは、ヘッダーの「用語集」とゲーム切替にそのゲームが出ることも確かめる。

- 公開が失敗しても、それまでの本番はそのまま動き続ける。失敗した run のログを見て直し、もう一度マージする。
- 新しい画面（ルート）を足したときは `scripts/pages.mjs` の `ROUTES` にも追加する（用語データの追加だけなら不要）。
- 用語集の更新は更新履歴（`/updates`）に載せない（§6）。

## 6. 書き方の規則

- 本文は**自分の言葉で要約**する。ゲーム内テキスト・攻略サイトの文章を写さない。
- 出典が確認できない内容は書かない。推測・考察は書かない（公式に明かされていない点は「明かされていない」と書く）。
- 1 つの用語は 1 エントリ。同じ概念の別名は `aliases` に入れ、別エントリを作らない。
- プレイアブルキャラクターは用語として登録しない。図鑑が正本なので、`characters` で図鑑へリンクする。
- 本文に別の用語が出てきたら、その用語がすでにあれば `[[ID]]` でリンクする。無ければリンクせずに書き、後でその用語を追加したときに `glossary:report` の候補から拾う。
- **ネタバレの基準**（設計書 §10 U-3、2026-11-15 確定）: メインストーリーの**最新2バージョン以内**に明かされた事実と、物語の**結末・正体・生死**に関わる内容だけを `spoiler: true` にする。公式サイトのキャラクター紹介・世界観紹介で公開済みの内容はネタバレ扱いしない。迷ったら本文に書かないか、`spoiler: true` にする。
- **出典の方針**（設計書 §10 U-6、2026-11-15 確定。[推奨編成データの情報源・SNS採用方針](../../docs/party-recommendation-source-policy.md) に準じる）:
  - 一次情報は**公式**（公式サイト、公式のお知らせ・HoYoLAB 公式記事、ゲーム内資料）。
  - 攻略 Wiki（Fandom 等）は**補助**。公式と矛盾しない範囲で使い、Wiki だけを根拠にした内容は書かない。
  - `sources` には公式を先に、補助の Wiki を後に書く。
- 用語集の更新は更新履歴（`/updates`）に載せない（初版の方針、設計書 §10 U-5）。

## 7. エラーが出たとき

エラーは `ゲーム / 用語ID: 項目: 内容。直し方` の形で表示される。`pnpm glossary:sync` と `pnpm content:check`（`pnpm build` の先頭で必ず走る）の両方で同じ検査が行われる。

| エラーの内容 | 直し方 |
| --- | --- |
| 用語ID の形式が正しくありません | 英小文字・数字・ハイフンだけ、40 字以内にする |
| 用語ID が重複しています | ゲーム内で一意にする（`formerIds` も含めて重複できない） |
| categories.ts にありません | 既存のカテゴリIDを使うか、`categories.ts` に追加する（エディタ上でも型エラーになる） |
| reading: ひらがなと長音「ー」だけ | カタカナ・漢字・空白・記号を、ひらがなに直す |
| name・aliases と重複しています | 検索結果が曖昧になるため、どちらか一方の用語にだけ書く |
| summary: 空です／80 字以内／リンク記法は書けません | 1 文・80 字以内にし、リンクは `body` に移す |
| body: 空です／「{」「}」は書けません／閉じていません | 本文を書く。波括弧は別の括弧にする。`[[ID]]` の `]]` を補う |
| リンク先 "…" がありません。近い候補: … | 候補のIDに直すか、先にその用語を追加する |
| 自分自身を指しています | そのリンク・`related` を外す |
| 旧IDです | 表示された現在のIDに書き換える |
| related: 2回書いています | 重複を消す |
| characters: 図鑑にありません／別のゲーム | `content/characters.ts` にある、同じゲームの identityKey にする |
| sources: 1件以上／https:// で始まっていません | 出典を足す、URL を https にする |
| dataAsOf: YYYY-MM-DD ではありません／未来の日付 | 実在する確認日を `YYYY-MM-DD` で書く |
| 生成物が入力と一致しません | `pnpm glossary:sync` を実行し、生成物もコミットする |
| 翻訳レコードの形式／JSON が読めません | 生成物を手で編集している。`git` で元に戻して `pnpm glossary:sync` を実行する |
