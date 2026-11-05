# 第30バッチ 個別キャラクター調査記録

- 開始日 / 確認日: 2026-11-05（JST）
- 対象: `Sitar-sitar/hoyoverse-builder`、起点 main `1253dfc`、ブランチ `claude/determined-babbage-1zf4u6`。Phase 70。
- 利用者依頼: 最新の実装キャラの情報を調べて本番環境に反映する。
- 開始時: 268名（HSR86 / 原神121 / ZZZ61）、reviewed268 / pending0、次回30。今回の登録後は270名（86 / 123 / 61）、次回31。
- 日本語正本を更新。英中は日本語原文を保持して `review: pending` / `sourceHash: null`。翻訳確認済みとは扱わず、公開言語は日本語のみを維持する。

## 最新実装状況の確認（2026-11-05）

| ゲーム | 最新バージョン | 実装済み新キャラ | 本リポジトリ |
| --- | --- | --- | --- |
| 原神 | Ver.7.2（2026-11-04配信、[公式告知](https://prtimes.jp/main/html/rd/p/000000464.000096124.html)） | ★5 ミティヤ（雷・法器）、★4 バレリー（雷・片手剣） | **未登録 → 今回追加** |
| 原神 | Ver.7.1（2026-09-23配信） | ヴェスナ、ヴォジャニーツァ | 第23バッチで登録済み |
| 崩壊：スターレイル | Ver.4.6（2026-09-28配信） | パール | 第21バッチで登録済み |
| 崩壊：スターレイル | Ver.4.7（2026-11-11配信予定） | アッハ | 未実装のため対象外 |
| ゼンレスゾーンゼロ | Ver.3.3 前半（2026-10-21配信） | フィオニー | 第28バッチで登録済み |
| ゼンレスゾーンゼロ | Ver.3.3 後半（2026-11-11実装予定） | セヴェリアン | 未実装のため対象外 |

## 根拠と境界

- 原神のID・属性・武器・全6段階の命ノ星座: [genshin-db 固定revision `8e5badd`](https://github.com/theBowja/genshin-db/tree/8e5badd60b5d894284ccc927a56c9683529d2592/src/data/Japanese)（コミット「7.2 actual」、2026-11-04）。ミティヤ・バレリーのcharacters/constellationsファイルを本文確認した。
- ID・属性・武器種・サイドアイコン名は [Enka公開store/gi/avatars.json](https://github.com/EnkaNetwork/API-docs/blob/master/store/gi/avatars.json)（2026-11-04更新 `a688237`）と照合して一致。`10000136`: `Element: Electric` / `WEAPON_CATALYST` / `UI_AvatarIcon_Side_Mitya`。`10000137`: `Element: Electric` / `WEAPON_SWORD_ONE_HAND` / `UI_AvatarIcon_Side_Valeriy`。
- 個別ガイドは下表の本文（装備・武器・主ステ・編成・凸評価）を取得して確認した。数値比較は2名とも空。ミティヤの元素熟知500は固有天賦の効果を最大にする目安で、戦闘外の3水準を裏付けないため固定目標として登録しない。

| ゲーム | 名前 | 確認済みID | 記事更新日 | 個別ガイド（本文確認 2026-11-05） |
| --- | --- | --- | --- | --- |
| genshin | ミティヤ | `genshin:10000136` | 2026.11.05 05:45 | [個別記事](https://game8.jp/genshin/794011) |
| genshin | バレリー | `genshin:10000137` | 2026.11.05 05:46 | [個別記事](https://game8.jp/genshin/793988) |

## 個別の採用内容

### genshin — ミティヤ（`genshin:10000136`）

- 身元: ミティヤ / 雷 / 法器 / ★5。[確認済みメタデータ](https://github.com/theBowja/genshin-db/blob/8e5badd60b5d894284ccc927a56c9683529d2592/src/data/Japanese/characters/mitya.json)。
- ビルド前提: 元素スキルで検知コアと変形ビーコンを運用し、星電導の主力または控えのサブ火力を担う。
- 装備: 影に沈む幻 ×4（メイン運用）。サブ運用は炉炎溶錬の心 ×4、または千岩牢固 ×4。厳選次第で金メッキの夢＋天穹の顕現せし夜も候補。
- 武器・優先順: 秘星の聖典。代替は真言の匣／胸中の谺。会心系＞元素熟知＞元素チャージ効率。
- 主ステ: 時計/杯/冠 = 元素熟知 / 元素熟知 / 会心率／会心ダメージ。
- 公開比較・条件: 元素熟知500は固有天賦の効果を最大にする目安。戦闘外の3水準を裏付ける数値が揃わないため固定目標は設けない。メイン運用とサブ運用で聖遺物が異なる。
- 実装: `profileId: curated:batch30:genshin:ミティヤ`、`dataAsOf` / `updatedAt` は2026-11-05。
- 推奨PT参照: `team-genshin-ミティヤ-b30-1`〜`-3`。
- 目標補正: PT `targetChanges` と凸 `activeTargetChanges` は空。
- 命ノ星座: 固定revisionの全6段の名称・本文を確認し、表示用の強調markupのみ除去。数値・条件・持続・回数上限は省略せず `content/ja/guides/batch30.ts` に保存。
- 採用名称: C1 欠落の痕跡を追う観察者 / C2 慣性の彼方に微睡むもの / C3 不変なる位相の超弦理論 / C4 崩壊より生まれし同位体 / C5 万物の秩序定めし周期律 / C6 段階的元素跳躍の理の門。

### genshin — バレリー（`genshin:10000137`）

- 身元: バレリー / 雷 / 片手剣 / ★4。[確認済みメタデータ](https://github.com/theBowja/genshin-db/blob/8e5badd60b5d894284ccc927a56c9683529d2592/src/data/Japanese/characters/valeriy.json)。
- ビルド前提: 元素スキル主体で立ち回り、蓄雷シールドで出場キャラの火力と耐久を支える。
- 装備: 炉炎溶錬の心 ×4（星電導編成）。攻撃力重視の編成は旧貴族のしつけ ×4。月反応編成は月を紡ぐ夜の歌 ×4も候補。
- 武器・優先順: 斬山の刃。代替は海淵のフィナーレ／西風剣（会心率の確保が前提）。攻撃力＞元素チャージ効率。
- 主ステ: 時計/杯/冠 = 攻撃力% / 攻撃力% / 攻撃力%。
- 公開比較・条件: シールド量と支援効果は攻撃力に依存するが、出典に戦闘外の目標数値がないため固定目標は設けない。2凸の元素熟知支援は戦闘中の効果。
- 実装: `profileId: curated:batch30:genshin:バレリー`、`dataAsOf` / `updatedAt` は2026-11-05。
- 推奨PT参照: `team-genshin-バレリー-b30-1`、`team-genshin-バレリー-b30-2`、`team-genshin-ミティヤ-b30-1`。
- 目標補正: PT `targetChanges` と凸 `activeTargetChanges` は空。
- 命ノ星座: 固定revisionの全6段を確認し、強調markupのみ除去。
- 採用名称: C1 持続的制圧の法則 / C2 一斉突撃の陣構え / C3 白兵戦への心構え / C4 消耗を恐れぬ意思 / C5 各個撃破の気負い / C6 敵陣をも貫く威厳。

## 推奨PTと参加者連動

新規共有編成5件。本人の初回採用参照は `initialRefs.ts` に固定した。既存キャラの参照変更（`linkRecords.ts`）は行わず、参加者本人のガイドとの照合が未実施の項目は見送りとして `characterParties.ts` に記録した。既存キャラのビルド・装備・数値目標・凸の基準日は変更しない。

| 共有編成ID | 実名メンバー | 採用元 / 照合 |
| --- | --- | --- |
| `team-genshin-ミティヤ-b30-1` | ミティヤ・八重神子・オデット・バレリー | [Game8](https://game8.jp/genshin/794011)。バレリー793988でも同構成（crossChecked） |
| `team-genshin-ミティヤ-b30-2` | サンドローネ・ミティヤ・オデット・エスコフィエ | [Game8](https://game8.jp/genshin/794011)。独立出典の照合はwatching |
| `team-genshin-ミティヤ-b30-3` | セノ・ミティヤ・オデット・バレリー | [Game8](https://game8.jp/genshin/794011)。独立出典の照合はwatching |
| `team-genshin-バレリー-b30-1` | ヴァレサ・ドゥリン・バレリー・ニコ | [Game8](https://game8.jp/genshin/793988)。炉炎枠はシュヴルーズ案もある。watching |
| `team-genshin-バレリー-b30-2` | フリンズ・コロンビーナ・イネファ・バレリー | [Game8](https://game8.jp/genshin/793988)。2凸以降で反応編成向き。watching |

### 参加者ごとの採否

| 参加者 | 編成 | 採否 |
| --- | --- | --- |
| genshin:バレリー | `team-genshin-ミティヤ-b30-1` | 採用（本人ガイドに同構成） |
| genshin:バレリー | `team-genshin-ミティヤ-b30-3` | 見送り（本人ガイドにセノ編成なし） |
| genshin:八重神子 / オデット | `team-genshin-ミティヤ-b30-1` | 見送り |
| genshin:サンドローネ / オデット / エスコフィエ | `team-genshin-ミティヤ-b30-2` | 見送り |
| genshin:セノ / オデット | `team-genshin-ミティヤ-b30-3` | 見送り |
| genshin:ヴァレサ / ドゥリン / ニコ | `team-genshin-バレリー-b30-1` | 見送り |
| genshin:フリンズ / コロンビーナ / イネファ | `team-genshin-バレリー-b30-2` | 見送り |

見送り14件の理由は「起点本人のガイドで実名構成を確認済み、参加者本人のガイドとの照合は今回未実施のため既存の採用枠を保持」。出典URLは起点ガイド、確認日2026-11-05。共有編成は図鑑の別欄（partyAppearances）で表示する。次の出典更新で参加者本人ガイドを照合し、採用する場合は `linkRecords.ts` へ追記する。

## 実装先と検証

- データ: `content/characterBatch30.ts`、`content/guideDefinitions_batch30.ts`、`content/constellationBatch30.ts`、`content/teamBatch30.ts`、`content/ja/guides/batch30.ts`（英中は `content/translations/*/batch30.ts` にpending）。名前・メタデータ・履歴・カタログ索引・manifest・基準JSONを同期。
- サーバー: `server/batch30GenshinData.ts` を既存の確認済みID補完経路（`curatedGenshinCharacters.ts`）へ追加。同名別ID・派生・別ゲームには適用しない。
- 回帰: `server/batch30Characters.test.ts`（2名の最終lookup/reference/history一致、誤ID拒否、凸本文の数値・条件、270名台帳と連動漏れ0）。既存テストの件数期待値を270名へ更新。
- 状態: 実装・本番反映済み。PR #167 → main `1793181`。Pages run `41963565046` で本番APIの同SHA一致と公開後検査 `reason=ok` を確認（2026-11-05 03:48 UTC）。本番図鑑の目視確認と実UID照会は未実施。
