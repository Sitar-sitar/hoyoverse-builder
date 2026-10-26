# 第29バッチ 個別キャラクター調査記録

- 開始日 / 確認日: 2026-10-26（JST）
- 対象: `Sitar-sitar/hoyoverse-builder`、起点 main `f90b569639e116305ef190fd0c571f9c309b2f4a`、ブランチ `codex/batch29-characters`。Phase 69。
- 利用者依頼: ロクシーと原神の未登録10名の実装と本番反映。第28バッチの再実施ではなく、第29バッチとして追加する。
- 開始時: 257名（HSR86 / 原神111 / ZZZ60）、reviewed257 / pending0、次回29。今回の登録後は268名（86 / 121 / 61）、次回30。
- 使用スキル: `hoyoverse-character-curation`、`my-app2-implementation-phase-log`。サブエージェントは使用していない。実行モデル設定の切替は実施していない。
- 日本語正本を更新。英中は日本語原文を保持して `review: pending` / `sourceHash: null`。翻訳確認済みとは扱わず、公開言語は日本語のみを維持する。

## 根拠と境界

- 原神のID・属性・武器・公式画像・全6段階の命ノ星座: [genshin-db 固定revision](https://github.com/theBowja/genshin-db/tree/49a6544a6c6ae36089cb42fa591fc46f01de8bcf/src/data/Japanese)。前回監査で確認したrevisionを再取得し、10名のファイルを本文確認した。実装バージョンの推測や未公開IDは加えない。
- ロクシー: [Enka公開avatars.json](https://github.com/EnkaNetwork/API-docs/blob/master/store/zzz/avatars.json) の `1621` を2026-10-26取得。`ElementTypes: ["Wind"]` / `ProfessionType: "Stun"` / `Name: "Avatar_Female_Size01_Pryce"` / `Image: "/ui/zzz/IconRole68.png"`。名前は既存の確認済みスナップショットとも一致。
- [公式Ver.7.0告知](https://prtimes.jp/main/html/rd/p/000000436.000096124.html)でオデット・アリョーシャの実装情報を照合。全対象は実装済み個別記事の属性・武器・入手欄と公開ゲームデータを照合した。今回の追加に未実装のセヴェリアンは含めない。
- 専門ガイドは下表の本文（装備・主ステ・編成・凸）を取得して確認した。記事の関連リンクだけを採用根拠にしていない。数値は戦闘内外と装備・凸・PTの条件を分離する。
- 数値比較は全11名で空。出典に攻撃力2000・2500・4000、防御力2000、チャージ200%等の参照値はあるが、戦闘外値としての3水準の裏付けが不足するため登録しない。優先ステータスと条件は個別に記述する。ロール共通目標が後段に残らないことは最終API経路で検証する。

| ゲーム | 名前 | 確認済みID | 記事更新日 | 個別ガイド（本文確認 2026-10-26） |
| --- | --- | --- | --- | --- |
| genshin | オデット | `genshin:10000150` | 2026.10.25 05:55 | [個別記事](https://game8.jp/genshin/793984) |
| genshin | アリョーシャ | `genshin:10000148` | 2026.10.25 05:49 | [個別記事](https://game8.jp/genshin/783867) |
| genshin | サンドローネ | `genshin:10000133` | 2026.10.25 05:36 | [個別記事](https://game8.jp/genshin/466956) |
| genshin | ニコ | `genshin:10000131` | 2026.10.21 11:05 | [個別記事](https://game8.jp/genshin/707116) |
| genshin | プルーネ | `genshin:10000132` | 2026.10.21 11:05 | [個別記事](https://game8.jp/genshin/775336) |
| genshin | ローエン | `genshin:10000129` | 2026.10.21 11:05 | [個別記事](https://game8.jp/genshin/762964) |
| genshin | リンネア | `genshin:10000130` | 2026.10.21 11:05 | [個別記事](https://game8.jp/genshin/768000) |
| genshin | ファルカ | `genshin:10000128` | 2026.10.21 11:04 | [個別記事](https://game8.jp/genshin/366252) |
| genshin | 兹白 | `genshin:10000126` | 2026.10.21 11:05 | [個別記事](https://game8.jp/genshin/748415) |
| genshin | イルーガ | `genshin:10000127` | 2026.10.21 11:05 | [個別記事](https://game8.jp/genshin/748414) |
| zzz | ロクシー | `zzz:1621` | 2026.10.25 05:36 | [個別記事](https://game8.jp/zenless/783049) |

## 個別の採用内容

### genshin — オデット（`genshin:10000150`）

- 身元: オデット / 氷 / 片手剣。[確認済みメタデータ](https://github.com/theBowja/genshin-db/blob/49a6544a6c6ae36089cb42fa591fc46f01de8bcf/src/data/Japanese/characters/odette.json)。
- ビルド前提: 氷付着とシルエットの交代運用で星反応を支援する。
- 装備: 炉炎溶錬の心 ×4。星電導で自身の火力を重視する場合は影に沈む幻 ×4。
- 武器・優先順: 白銀の湖を舞う翼。代替は導炎の源／星鋒の剣。会心系＞攻撃力＞元素熟知。
- 主ステ: 時計/杯/冠（ZZZはIV/V/VI） = 攻撃力%／元素熟知 / 攻撃力%／元素熟知 / 会心率／会心ダメージ。
- 公開比較・条件: シルエット設置後に控えへ交代して味方へバフを移す。星電導と星拡散の併用時は星電導が優先。戦闘外の3水準を裏付ける数値が揃わないため固定目標は設けない。
- 実装: `profileId: curated:batch29:genshin:オデット`、`dataAsOf` / `updatedAt` は2026-10-26（今回の確認日・登録日）。記事更新日は上表で別管理する。
- 推奨PT参照: `team-genshin-サンドローネ-b29-1`, `team-genshin-アリョーシャ-b29-1`。実名・役割・条件は下表と `content/teamBatch29.ts` に保存。
- 目標補正: PT `targetChanges` と凸 `activeTargetChanges` は空。公開プロフィールの現在値を変更しない。
- 命ノ星座: [固定revisionの全6段の名称・本文](https://github.com/theBowja/genshin-db/blob/49a6544a6c6ae36089cb42fa591fc46f01de8bcf/src/data/Japanese/constellations/odette.json)を確認し、表示用の強調markupのみ除去。数値・条件・持続・回数上限は省略せず `content/ja/guides/batch29.ts` に保存。
- 採用名称: C1 「踊らぬ朝に彼女は 己の影を見つめる」 / C2 「雪鳥の見ぬ夢を只 見届けたいだけで」 / C3 「荒れ狂う風を追い ひとり高みへ昇る」 / C4 「燃ゆる青空の中へ 恍惚と堕ちていく」 / C5 「見よ——塵と土の 痛みと別れる時を」 / C6 「さあ手を伸ばして 永遠の空に触れて」。
- 状態: 実装・本番反映済み。公開後の証拠と実UID未検証の境界は本書末尾と実装ログを参照。

### genshin — アリョーシャ（`genshin:10000148`）

- 身元: アリョーシャ / 雷 / 長柄武器。[確認済みメタデータ](https://github.com/theBowja/genshin-db/blob/49a6544a6c6ae36089cb42fa591fc46f01de8bcf/src/data/Japanese/characters/alyosha.json)。
- ビルド前提: 印を付与して元素爆発で起動し、星電導の攻撃支援と回復を行う。
- 装備: 旧貴族のしつけ ×4。星電導で溶錬枠を担当するなら炉炎溶錬の心 ×4。
- 武器・優先順: 香りのシンフォニスト。代替は遠望の歌／西風長槍。元素チャージ効率＞攻撃力＞会心率。
- 主ステ: 時計/杯/冠（ZZZはIV/V/VI） = 元素チャージ効率／攻撃力% / 攻撃力% / 攻撃力%（西風長槍なら会心率も検討）。
- 公開比較・条件: スキルで印を付与し、爆発の継続雷攻撃で発動させる。元素エネルギー回復を優先し、武器効果の会心条件も確認する。固定目標の3水準は未確認。
- 実装: `profileId: curated:batch29:genshin:アリョーシャ`、`dataAsOf` / `updatedAt` は2026-10-26（今回の確認日・登録日）。記事更新日は上表で別管理する。
- 推奨PT参照: `team-genshin-アリョーシャ-b29-1`。実名・役割・条件は下表と `content/teamBatch29.ts` に保存。
- 目標補正: PT `targetChanges` と凸 `activeTargetChanges` は空。公開プロフィールの現在値を変更しない。
- 命ノ星座: [固定revisionの全6段の名称・本文](https://github.com/theBowja/genshin-db/blob/49a6544a6c6ae36089cb42fa591fc46f01de8bcf/src/data/Japanese/constellations/alyosha.json)を確認し、表示用の強調markupのみ除去。数値・条件・持続・回数上限は省略せず `content/ja/guides/batch29.ts` に保存。
- 採用名称: C1 寒谷の轟雷 / C2 遠吠えの合図 / C3 仲間の呼び声 / C4 獲物の回収 / C5 歌鳥の沈黙 / C6 御旗の奪還。
- 資料不一致: Game8の解説欄に「2凸で印の重ね掛け・熟知」という記述があるが、固定ゲームデータではC2は爆発延長と印の追加付与、C4が回復、C6が2層と元素熟知+100。凸カードと役割注記はゲームデータを採用し、無凸の回復を保証しない。
- 状態: 実装・本番反映済み。公開後の証拠と実UID未検証の境界は本書末尾と実装ログを参照。

### genshin — サンドローネ（`genshin:10000133`）

- 身元: サンドローネ / 氷 / 両手剣。[確認済みメタデータ](https://github.com/theBowja/genshin-db/blob/49a6544a6c6ae36089cb42fa591fc46f01de8bcf/src/data/Japanese/characters/sandrone.json)。
- ビルド前提: 雷の継続付着を用意し、重撃と元素スキルを交互に使う星電導アタッカー。
- 装備: 影に沈む幻 ×4。代替は金メッキの夢 ×4。
- 武器・優先順: 超越の鍵。代替は救済の剣。会心系＞攻撃力＞元素熟知。
- 主ステ: 時計/杯/冠（ZZZはIV/V/VI） = 攻撃力% / 攻撃力% / 会心率／会心ダメージ。
- 公開比較・条件: 元素スキルで演算負荷を下げて重撃を継続する。攻撃力2000以上は天賦の参照閾値だが、記事は戦闘外値かを明示しないため固定比較には採用しない。
- 実装: `profileId: curated:batch29:genshin:サンドローネ`、`dataAsOf` / `updatedAt` は2026-10-26（今回の確認日・登録日）。記事更新日は上表で別管理する。
- 推奨PT参照: `team-genshin-サンドローネ-b29-1`, `team-genshin-アリョーシャ-b29-1`。実名・役割・条件は下表と `content/teamBatch29.ts` に保存。
- 目標補正: PT `targetChanges` と凸 `activeTargetChanges` は空。公開プロフィールの現在値を変更しない。
- 命ノ星座: [固定revisionの全6段の名称・本文](https://github.com/theBowja/genshin-db/blob/49a6544a6c6ae36089cb42fa591fc46f01de8bcf/src/data/Japanese/constellations/sandrone.json)を確認し、表示用の強調markupのみ除去。数値・条件・持続・回数上限は省略せず `content/ja/guides/batch29.ts` に保存。
- 採用名称: C1 まばゆき黄金は 遠き日の夕暮れ / C2 りりしき影を鏡に 遺して巡る歳月 / C3 あまねく暁を愁えず 月の出を羨まず / C4 ねむたき世事は数にして 昼夜を往来す / C5 ついえし万象の灰と化せど 理のみは通ず / C6 てづから水仙の夢から醒めて 薄明を掴まん。
- 状態: 実装・本番反映済み。公開後の証拠と実UID未検証の境界は本書末尾と実装ログを参照。

### genshin — ニコ（`genshin:10000131`）

- 身元: ニコ / 炎 / 法器。[確認済みメタデータ](https://github.com/theBowja/genshin-db/blob/49a6544a6c6ae36089cb42fa591fc46f01de8bcf/src/data/Japanese/characters/nicole.json)。
- ビルド前提: 攻撃力を確保し、シールドと全体の火力支援を担う炎サポーター。
- 装備: 天からの贈り物 ×4。繋ぎは剣闘士のフィナーレ ×2＋追憶のしめ縄 ×2。
- 武器・優先順: 塵と光の七つの誓約。攻撃力と元素チャージ効率を優先する。
- 主ステ: 時計/杯/冠（ZZZはIV/V/VI） = 攻撃力%／元素チャージ効率 / 攻撃力% / 攻撃力%。
- 公開比較・条件: 攻撃力4000はバフ上限の参照閾値。編成・戦闘中の攻撃力増加を公開値へ加算しない。戦闘外の3水準の根拠が不足するため固定比較は行わない。
- 実装: `profileId: curated:batch29:genshin:ニコ`、`dataAsOf` / `updatedAt` は2026-10-26（今回の確認日・登録日）。記事更新日は上表で別管理する。
- 推奨PT参照: `team-genshin-サンドローネ-b29-1`, `team-genshin-プルーネ-b29-1`, `team-genshin-ローエン-b29-1`。実名・役割・条件は下表と `content/teamBatch29.ts` に保存。
- 目標補正: PT `targetChanges` と凸 `activeTargetChanges` は空。公開プロフィールの現在値を変更しない。
- 代替武器の追補: 所持していればイベント限定の誓いの明瞳を検討する。現在の恒常入手を保証しない。
- 命ノ星座: [固定revisionの全6段の名称・本文](https://github.com/theBowja/genshin-db/blob/49a6544a6c6ae36089cb42fa591fc46f01de8bcf/src/data/Japanese/constellations/nicole.json)を確認し、表示用の強調markupのみ除去。数値・条件・持続・回数上限は省略せず `content/ja/guides/batch29.ts` に保存。
- 採用名称: C1 「大いに愛されし人の子よ、 恐るることなかれ」 / C2 「汝に汝の 行くべき道を示さん」 / C3 「汝の傍に灯を、 行く手に光を」 / C4 「たとえ汝が 何処へ赴こうとも」 / C5 「汝の傍らより語りかけん」 / C6 「迷わず 正しき道を歩むべし」。
- 状態: 実装・本番反映済み。公開後の証拠と実UID未検証の境界は本書末尾と実装ログを参照。

### genshin — プルーネ（`genshin:10000132`）

- 身元: プルーネ / 風 / 法器。[確認済みメタデータ](https://github.com/theBowja/genshin-db/blob/49a6544a6c6ae36089cb42fa591fc46f01de8bcf/src/data/Japanese/characters/prune.json)。
- ビルド前提: 攻撃力と爆発の回転を整え、拡散で味方へダメージ支援を行う。
- 装備: 翠緑の影 ×4。魔導編成のサポート枠として天からの贈り物 ×4も候補。
- 武器・優先順: 塵と光の七つの誓約／鶴鳴の余韻。代替は白辰の輪。回復が必要なら金珀・試作。攻撃力＞元素チャージ効率。
- 主ステ: 時計/杯/冠（ZZZはIV/V/VI） = 攻撃力%／元素チャージ効率 / 攻撃力% / 攻撃力%。
- 公開比較・条件: 拡散と元素爆発を維持する。攻撃力4000のバフ上限は魔導秘儀・2凸・炎共鳴等の条件で到達が変わるため、戦闘外の固定比較には使わない。
- 実装: `profileId: curated:batch29:genshin:プルーネ`、`dataAsOf` / `updatedAt` は2026-10-26（今回の確認日・登録日）。記事更新日は上表で別管理する。
- 推奨PT参照: `team-genshin-プルーネ-b29-1`。実名・役割・条件は下表と `content/teamBatch29.ts` に保存。
- 目標補正: PT `targetChanges` と凸 `activeTargetChanges` は空。公開プロフィールの現在値を変更しない。
- 命ノ星座: [固定revisionの全6段の名称・本文](https://github.com/theBowja/genshin-db/blob/49a6544a6c6ae36089cb42fa591fc46f01de8bcf/src/data/Japanese/constellations/prune.json)を確認し、表示用の強調markupのみ除去。数値・条件・持続・回数上限は省略せず `content/ja/guides/batch29.ts` に保存。
- 採用名称: C1 誓いを立てたあの日から キミを救う旅が始まった / C2 元素の力を抱きしめて さあ荷物をまとめよう / C3 キャラバンと山を越え 巡る景色を眺めながら / C4 振り返ってもいまだ キミの影はないけど / C5 百回敗けたって 明日も来るから / C6 物語はこれでおしまい みんなに話してあげて。
- 状態: 実装・本番反映済み。公開後の証拠と実UID未検証の境界は本書末尾と実装ログを参照。

### genshin — ローエン（`genshin:10000129`）

- 身元: ローエン / 氷 / 長柄武器。[確認済みメタデータ](https://github.com/theBowja/genshin-db/blob/49a6544a6c6ae36089cb42fa591fc46f01de8bcf/src/data/Japanese/characters/lohen.json)。
- ビルド前提: 控えの火力で闘争心を得て、通常・重撃とスキルを組み合わせる氷アタッカー。
- 装備: 風立ちの日 ×4。凍結運用の代替は氷風を彷徨う勇士 ×4。
- 武器・優先順: 災憾。代替は喜多院十文字槍。会心系＞攻撃力。元素熟知は溶解利用時に検討する。
- 主ステ: 時計/杯/冠（ZZZはIV/V/VI） = 攻撃力% / 氷元素ダメージ / 会心率／会心ダメージ。
- 公開比較・条件: 闘争心の獲得は味方の控え攻撃のダメージと本人の基礎攻撃力に依存する。溶解と凍結の前提を混ぜない。戦闘外の3水準は未確認。
- 実装: `profileId: curated:batch29:genshin:ローエン`、`dataAsOf` / `updatedAt` は2026-10-26（今回の確認日・登録日）。記事更新日は上表で別管理する。
- 推奨PT参照: `team-genshin-ローエン-b29-1`。実名・役割・条件は下表と `content/teamBatch29.ts` に保存。
- 目標補正: PT `targetChanges` と凸 `activeTargetChanges` は空。公開プロフィールの現在値を変更しない。
- 命ノ星座: [固定revisionの全6段の名称・本文](https://github.com/theBowja/genshin-db/blob/49a6544a6c6ae36089cb42fa591fc46f01de8bcf/src/data/Japanese/constellations/lohen.json)を確認し、表示用の強調markupのみ除去。数値・条件・持続・回数上限は省略せず `content/ja/guides/batch29.ts` に保存。
- 採用名称: C1 哀しき歌を運ぶ あの日のそよ風 / C2 的にするものは 翼を持つすべて / C3 この傷を癒すは 鋭く光る刃だけ / C4 愛は果てた 光や歓びの歌のように / C5 見えざるものと 疑われ得ぬもの / C6 身も心も堕ちて 残るは悦楽のみ。
- 状態: 実装・本番反映済み。公開後の証拠と実UID未検証の境界は本書末尾と実装ログを参照。

### genshin — リンネア（`genshin:10000130`）

- 身元: リンネア / 岩 / 弓。[確認済みメタデータ](https://github.com/theBowja/genshin-db/blob/49a6544a6c6ae36089cb42fa591fc46f01de8bcf/src/data/Japanese/characters/linnea.json)。
- ビルド前提: ルミの召喚と元素爆発で岩・月結晶を支援し、チームを回復する。
- 装備: 暁の星と月の歌 ×4。防御と回復も重視する代替は華館夢醒形骸記 ×4。
- 武器・優先順: 霜契の金枝。代替は弾弓／霜雪の契。会心系＞防御力＞元素熟知＞元素チャージ効率。
- 主ステ: 時計/杯/冠（ZZZはIV/V/VI） = 防御力% / 防御力% / 会心率／会心ダメージ。
- 公開比較・条件: 月兆満照でルミの岩耐性低下を強化する。防御力は支援と回復にも関与する。戦闘外の3水準が未確認のため数値を創作しない。
- 実装: `profileId: curated:batch29:genshin:リンネア`、`dataAsOf` / `updatedAt` は2026-10-26（今回の確認日・登録日）。記事更新日は上表で別管理する。
- 推奨PT参照: `team-genshin-リンネア-b29-1`。実名・役割・条件は下表と `content/teamBatch29.ts` に保存。
- 目標補正: PT `targetChanges` と凸 `activeTargetChanges` は空。公開プロフィールの現在値を変更しない。
- 命ノ星座: [固定revisionの全6段の名称・本文](https://github.com/theBowja/genshin-db/blob/49a6544a6c6ae36089cb42fa591fc46f01de8bcf/src/data/Japanese/constellations/linnea.json)を確認し、表示用の強調markupのみ除去。数値・条件・持続・回数上限は省略せず `content/ja/guides/batch29.ts` に保存。
- 採用名称: C1 未分類のモノたち / C2 喜びと悲しみの予兆 / C3 ぎゅうぎゅう詰めの一ページ / C4 スペシャリストの第六感 / C5 フェアリーランドの餞別 / C6 ゴールデンビーグルの夢。
- 状態: 実装・本番反映済み。公開後の証拠と実UID未検証の境界は本書末尾と実装ログを参照。

### genshin — ファルカ（`genshin:10000128`）

- 身元: ファルカ / 風 / 両手剣。[確認済みメタデータ](https://github.com/theBowja/genshin-db/blob/49a6544a6c6ae36089cb42fa591fc46f01de8bcf/src/data/Japanese/characters/varka.json)。
- ビルド前提: 風2名と同元素2名、魔導秘儀を整え、強化スキルと重撃で攻撃する。
- 装備: 風立ちの日 ×4。フリーナ採用時に限りファントムハンター ×4も候補。
- 武器・優先順: 狼の武勲詩。回復役ありならタイダル・シャドー、回復役なしなら古華・試作。会心系＞攻撃力。
- 主ステ: 時計/杯/冠（ZZZはIV/V/VI） = 攻撃力% / 元素変化に対応する元素ダメージ／攻撃力% / 会心率／会心ダメージ。
- 公開比較・条件: 風2名＋炎・水・雷・氷の同元素2名と魔導秘儀を基本とする。攻撃力2500は天賦上限の参照値だが戦闘外値か不明のため固定比較は設けない。
- 実装: `profileId: curated:batch29:genshin:ファルカ`、`dataAsOf` / `updatedAt` は2026-10-26（今回の確認日・登録日）。記事更新日は上表で別管理する。
- 推奨PT参照: `team-genshin-ファルカ-b29-1`。実名・役割・条件は下表と `content/teamBatch29.ts` に保存。
- 目標補正: PT `targetChanges` と凸 `activeTargetChanges` は空。公開プロフィールの現在値を変更しない。
- 命ノ星座: [固定revisionの全6段の名称・本文](https://github.com/theBowja/genshin-db/blob/49a6544a6c6ae36089cb42fa591fc46f01de8bcf/src/data/Japanese/constellations/varka.json)を確認し、表示用の強調markupのみ除去。数値・条件・持続・回数上限は省略せず `content/ja/guides/batch29.ts` に保存。
- 採用名称: C1 「友よ、月明かりの下で踊ろう」 / C2 「暁とともに、遠き旅路へ」 / C3 「友よ、もう涙の酒を飲むな」 / C4 「謳え、誰にも奪えない自由を」 / C5 「注げ美酒を、暴君は来りて去りゆく」 / C6 「愛しきモンドよ、変わらぬ姿で」。
- 状態: 実装・本番反映済み。公開後の証拠と実UID未検証の境界は本書末尾と実装ログを参照。

### genshin — 兹白（`genshin:10000126`）

- 身元: 兹白 / 岩 / 片手剣。[確認済みメタデータ](https://github.com/theBowja/genshin-db/blob/49a6544a6c6ae36089cb42fa591fc46f01de8bcf/src/data/Japanese/characters/zibai.json)。
- ビルド前提: 水付着と月兆満照を用意し、防御力と会心系で月結晶の火力を伸ばす。
- 装備: 天穹の顕現せし夜 ×4。満照条件を確認する。
- 武器・優先順: 三日月の含光。代替は黎明の神剣／エズピツァルの笛。防御力と会心系を重視し、黎明の神剣はHP条件を維持する。
- 主ステ: 時計/杯/冠（ZZZはIV/V/VI） = 防御力% / 防御力% / 会心率／会心ダメージ。
- 公開比較・条件: 月結晶が主なダメージ源のため岩元素ダメージ杯と混同しない。防御力2000の天賦閾値は戦闘外値か未確認なので固定比較へ登録しない。
- 実装: `profileId: curated:batch29:genshin:兹白`、`dataAsOf` / `updatedAt` は2026-10-26（今回の確認日・登録日）。記事更新日は上表で別管理する。
- 推奨PT参照: `team-genshin-リンネア-b29-1`。実名・役割・条件は下表と `content/teamBatch29.ts` に保存。
- 目標補正: PT `targetChanges` と凸 `activeTargetChanges` は空。公開プロフィールの現在値を変更しない。
- 命ノ星座: [固定revisionの全6段の名称・本文](https://github.com/theBowja/genshin-db/blob/49a6544a6c6ae36089cb42fa591fc46f01de8bcf/src/data/Japanese/constellations/zibai.json)を確認し、表示用の強調markupのみ除去。数値・条件・持続・回数上限は省略せず `content/ja/guides/batch29.ts` に保存。
- 採用名称: C1 疾く出でて粛然と帰す / C2 生は変じて屍と化する / C3 天法を解き帳を下ろす / C4 魂向かひて身も従ずる / C5 聡きは視たとて論ぜず / C6 天地の人は過客の如し。
- 表記: 公開ゲームデータの正規名は「兹白」。攻略記事の「茲白」は同じID `10000126` の別表記として監査用aliasへ登録。別人や未登録キャラとして数えない。
- 状態: 実装・本番反映済み。公開後の証拠と実UID未検証の境界は本書末尾と実装ログを参照。

### genshin — イルーガ（`genshin:10000127`）

- 身元: イルーガ / 岩 / 長柄武器。[確認済みメタデータ](https://github.com/theBowja/genshin-db/blob/49a6544a6c6ae36089cb42fa591fc46f01de8bcf/src/data/Japanese/characters/illuga.json)。
- ビルド前提: 元素熟知と爆発の回転を優先し、岩・月結晶アタッカーを支援する。
- 装備: 2凸以上なら月を紡ぐ夜の歌 ×4。無凸の代替は大地を流浪する楽団 ×2＋天穹の顕現せし夜 ×2、または教官 ×4。
- 武器・優先順: 西風長槍（会心率を確保）。代替は喜多院十文字槍。元素チャージ効率＞元素熟知＞会心率。
- 主ステ: 時計/杯/冠（ZZZはIV/V/VI） = 元素熟知／元素チャージ効率 / 元素熟知 / 元素熟知（西風長槍なら会心率も検討）。
- 公開比較・条件: 岩・水キャラ中心で月兆満照を整え、元素爆発を維持する。記事の元素チャージ効率200%程度は編成条件で変わる目安であり、戦闘外3水準が未確認のため固定比較は設けない。
- 実装: `profileId: curated:batch29:genshin:イルーガ`、`dataAsOf` / `updatedAt` は2026-10-26（今回の確認日・登録日）。記事更新日は上表で別管理する。
- 推奨PT参照: `team-genshin-リンネア-b29-1`。実名・役割・条件は下表と `content/teamBatch29.ts` に保存。
- 目標補正: PT `targetChanges` と凸 `activeTargetChanges` は空。公開プロフィールの現在値を変更しない。
- 命ノ星座: [固定revisionの全6段の名称・本文](https://github.com/theBowja/genshin-db/blob/49a6544a6c6ae36089cb42fa591fc46f01de8bcf/src/data/Japanese/constellations/illuga.json)を確認し、表示用の強調markupのみ除去。数値・条件・持続・回数上限は省略せず `content/ja/guides/batch29.ts` に保存。
- 採用名称: C1 危機を告げる禽 / C2 枝を咥える鹿 / C3 山に吠える羆 / C4 日逐いの狼 / C5 風に嘶く馬 / C6 闇夜の鶯。
- 状態: 実装・本番反映済み。公開後の証拠と実UID未検証の境界は本書末尾と実装ログを参照。

### zzz — ロクシー（`zzz:1621`）

- 身元: ロクシー / 風 / 撃破。Enkaの正規IDと公開個別ガイドで照合。
- ビルド前提: エネルギー回復と会心率を整え、長押し強化特殊で集敵・ブレイクと火力支援を行う。
- 装備: スイング・ジャズ ×4＋月光騎士の讃歌 ×2。会心不足時はスイング・月光騎士・ウッドペッカーを各2セットも検討。
- 武器・優先順: 緋月の銀棺。代替はまな板の鯉。会心率を優先し、エネルギー自動回復と衝撃力を確保する。
- 主ステ: 時計/杯/冠（ZZZはIV/V/VI） = 会心率 / 攻撃力%／風属性ダメージ / エネルギー自動回復。
- 公開比較・条件: 会心率100%は戦闘時の値。音動機等の戦闘時会心上昇を公開プロフィールへ加えない。エネルギー回復3.12も装備条件付きのため固定3水準は登録しない。
- 実装: `profileId: curated:batch29:zzz:ロクシー`、`dataAsOf` / `updatedAt` は2026-10-26（今回の確認日・登録日）。記事更新日は上表で別管理する。
- 推奨PT参照: `team-zzz-ロクシー-b29-1`。実名・役割・条件は下表と `content/teamBatch29.ts` に保存。
- 目標補正: PT `targetChanges` と凸 `activeTargetChanges` は空。公開プロフィールの現在値を変更しない。
- GameWith本文も照合（[個別ガイド](https://gamewith.jp/zenless/560618)）。IV会心率 / V風属性ダメージ / VIエネルギー自動回復を採用。会心率100%は戦闘時目標なので公開値に置き換えない。
- 心象映画はGame8とGameWithの6段を照合し、表示用に要約。M1耐性-15%・50秒、M2勢い最大3重/スピン最大0.6秒、M4回復回数制限、M6渦の追加回数と倍率を保持。
- 状態: 実装・本番反映済み。公開後の証拠と実UID未検証の境界は本書末尾と実装ログを参照。

## 推奨PTと参加者連動

新規共有編成7件。本人を含む原神4名／ZZZ3名。本人の初回採用参照は `initialRefs.ts` に固定し、既存5名（八重神子・ドゥリン・コロンビーナ・ベネット・クラレッタ）は `linkRecords.ts` に追加・除外を記録する。既存ビルド・装備・数値目標・凸の基準日は変更しない。

| 共有編成ID | 実名メンバー | 採用元 / 照合 |
| --- | --- | --- |
| `team-genshin-サンドローネ-b29-1` | サンドローネ・八重神子・オデット・ニコ | [Game8](https://game8.jp/genshin/466956)。オデット793984も同構成 |
| `team-genshin-アリョーシャ-b29-1` | サンドローネ・八重神子・オデット・アリョーシャ | [Game8](https://game8.jp/genshin/783867)。編成専用807271でも同構成。回復はC4条件 |
| `team-genshin-プルーネ-b29-1` | ファルカ・ドゥリン・プルーネ・ニコ | [Game8](https://game8.jp/genshin/775336)。ニコ707116 / ドゥリン707122でも同構成 |
| `team-genshin-ローエン-b29-1` | ローエン・ドゥリン・シロネン・ニコ | [Game8](https://game8.jp/genshin/762964)。本文で実名確認。独立出典の照合はwatching |
| `team-genshin-リンネア-b29-1` | 兹白・コロンビーナ・リンネア・イルーガ | [Game8](https://game8.jp/genshin/768000)。イルーガ748414 / コロンビーナ466953でも同構成 |
| `team-genshin-ファルカ-b29-1` | ファルカ・ドゥリン・ウェンティ・ベネット | [Game8](https://game8.jp/genshin/366252)。ベネット352609でも同構成 |
| `team-zzz-ロクシー-b29-1` | ロクシー・クラレッタ・リナ | [Game8](https://game8.jp/zenless/783049)。GameWith560618 / クラレッタ560588でも同構成 |

### 参加者ごとの採否

| 参加者 | 編成 | 採否 | 本人ガイド・確認日 |
| --- | --- | --- | --- |
| genshin:ウェンティ | `team-genshin-ファルカ-b29-1` | 見送り | [本文](https://game8.jp/genshin/352607) / 2026-10-26 |
| genshin:オデット | `curated-genshin-ヴェスナ-1` | 見送り | [本文](https://game8.jp/genshin/793984) / 2026-10-26 |
| genshin:オデット | `curated-genshin-ヴェスナ-2` | 見送り | [本文](https://game8.jp/genshin/793984) / 2026-10-26 |
| genshin:オデット | `curated-genshin-ヴォジャニーツァ-1` | 見送り | [本文](https://game8.jp/genshin/793984) / 2026-10-26 |
| genshin:コロンビーナ | `team-genshin-リンネア-b29-1` | 採用 | [本文](https://game8.jp/genshin/466953) / 2026-10-26 |
| genshin:シロネン | `team-genshin-ローエン-b29-1` | 見送り | [本文](https://game8.jp/genshin/624941) / 2026-10-26 |
| genshin:ドゥリン | `team-genshin-ファルカ-b29-1` | 見送り | [本文](https://game8.jp/genshin/707122) / 2026-10-26 |
| genshin:ドゥリン | `team-genshin-プルーネ-b29-1` | 採用 | [本文](https://game8.jp/genshin/707122) / 2026-10-26 |
| genshin:ドゥリン | `team-genshin-ローエン-b29-1` | 見送り | [本文](https://game8.jp/genshin/707122) / 2026-10-26 |
| genshin:ファルカ | `team-genshin-プルーネ-b29-1` | 見送り | [本文](https://game8.jp/genshin/366252) / 2026-10-26 |
| genshin:ベネット | `team-genshin-ファルカ-b29-1` | 採用 | [本文](https://game8.jp/genshin/352609) / 2026-10-26 |
| genshin:八重神子 | `team-genshin-アリョーシャ-b29-1` | 見送り | [本文](https://game8.jp/genshin/395523) / 2026-10-26 |
| genshin:八重神子 | `team-genshin-サンドローネ-b29-1` | 採用 | [本文](https://game8.jp/genshin/395523) / 2026-10-26 |
| zzz:クラレッタ | `team-zzz-ロクシー-b29-1` | 採用 | [本文](https://gamewith.jp/zenless/560588) / 2026-10-26 |
| zzz:リナ | `team-zzz-ロクシー-b29-1` | 見送り | [本文](https://game8.jp/zenless/607799) / 2026-10-26 |

- 見送りは本人ガイドの編成節に同じ固定構成がないため。公開日が新しいだけで採用しない。同バージョン中に再確認する。
- コロンビーナは「茲白」の表記解決後、旧第2案が新規共有編成と同構成になることを確認した。旧第2案を共有編成に置換し、別構成の旧第3案を維持する。同じ4名の重複表示を禁止する。
- クラレッタはGame8では未掲載だったが、GameWith本人ガイドで同じ3名を本文確認できたため採用する。リナは本人Game8の同構成未掲載のため見送り。

## SNS探索（補助のみ）

2026-10-26、各11名についてHoYoLABの名前＋ビルドで探索。検索の断片だけから固定数値・編成は採用しない。

| 対象 | 探索結果 / 採否 |
| --- | --- |
| オデット・アリョーシャ | 個別ビルドの独立した本文根拠を今回の探索で確保できず。専門ガイドと固定ゲームデータを主根拠とする。 |
| サンドローネ | [素材予想](https://www.hoyolab.com/article/45199982)は予想段階で用途外。採用しない。 |
| ニコ・プルーネ | [ニコ解説](https://www.hoyolab.com/article/45147238)は武器・炎共鳴条件付きの値。固定公開目標には使わない。[配信紹介](https://www.hoyolab.com/article/45187399)は本文の編成裏付けを確保できず採用しない。 |
| ローエン | [クリエイターサーバー解説](https://www.hoyolab.com/article/45375080)は事前環境のため主根拠にしない。 |
| リンネア | [事前考察](https://www.hoyolab.com/article/44472529)は実装前考察。数値・固定編成を採用しない。 |
| ファルカ | [DPS実測投稿](https://www.hoyolab.com/article/44032312)は別構成・個体条件付き。公開値の数値へ転用しない。 |
| 兹白・イルーガ | [コンボ実測投稿](https://www.hoyolab.com/article/43851814)は鍾離入りの別編成・画像依存。今回の固定編成の根拠にしない。 |
| ロクシー | [ステータス投稿](https://www.hoyolab.com/article/46903018)はディスク構成・戦闘時会心の区別の補助。3水準や単独の固定編成の根拠にはしない。 |

## 実装先と検証

- content正本: `characterBatch29.ts`（確認済み補助メタデータ）、`guideDefinitions_batch29.ts`、`constellationBatch29.ts`、`teamBatch29.ts`、`ja/guides/batch29.ts`。カタログ・メタデータ・履歴・英中pending・content索引・生成manifestも同期。
- UID経路: 原神は第23・29バッチを `curatedGenshinCharacters.ts` へ集約し、確認済みIDのメタデータ欠落時だけ補完。図鑑と同じ個別ガイドを返す。ロクシーは `1621` のみ欠落メタデータを補い、同名別ID・派生・未解決IDへガイド/PT/凸を適用しない。
- ロクシーの実データ `ElementTypes: ["Wind"]` を確認したところ、既存ZZZ属性ラベル表にWindがなかったため、既存の「風」原文へ接続。既存の風エージェントにも同じ正しい属性ラベルを返す。
- 新規テスト `server/batch29Characters.test.ts` は全10名の原神最終lookup/reference/history、ロクシーのlookup/reference、欠落メタデータ、同名別ID/別ゲーム/派生/未解決、凸0/中間/6、公開現在値不変、固定目標の残留なし、PT人数・本人・補正なし、台帳268名と連動漏れなしを検証する。
- ゴールデン比較: 既存257名のガイド・凸・メタデータは不変。既存8名のreference差分は、PT採用変更5名と関連編成欄の追加だけ。日本語API baselineはこの範囲をassertした後、バックアップとハッシュ一致を確認して268名へ更新。初回採取元の `sourceRevision` は維持。
- 実UIDは今回提示されていないため、対象11名の実UIDショーケース受入は未実施。フィクスチャの成功と区別する。

## 公開・完了判定

- 公開mode: GitHub変数の `HOYOVERSE_PAGES_MODE=forward` を確認。正式画面は `/hoyoverse-builder/app/`、APIは `https://http--hoyoverse-api--s48krvgv8tjs.code.run`。
- 状態: 実装・検証・本番反映完了。PR #159（実装61e9a85、main a5665fdad0d933ddfc9ab0ad319b45fee1f10bc2）。validate/Analyze/CodeQL成功・自動コードレビュー指摘なし。Pages run `40242662319` 成功、API/Pages同SHA、maintenance=false / migrationPreview=false、公開後検査reason=ok。

### 公開ゲートの依存修正

- 2026-10-26: production auditがbody-parser 1.20.8のHigh（[GHSA-27r3-jxmh-p828](https://github.com/advisories/GHSA-27r3-jxmh-p828)）で不合格。Expressの`~1.20.5`の範囲内にある公式修正版1.20.9へ限定更新する。監査例外は追加しない。
- データ変更の検証前半はVitest873件成功（skip3）・node:test79件成功・型/content/API build/forward Pages build/baseline compare成功。依存更新後の再検証と公開証跡は別途追記する。

- 依存修正後: ロック差分はbody-parserのみ、production audit全重大度0件。Vitest873件成功・3件skip（maxWorkers=2）、型/content/API build成功。公開ゲートの例外は追加していない。

### 公開後の受入（2026-10-26）

- 公開カタログ268名・reviewed268/pending0。対象11名のreference全文、計66段の凸、個別履歴を最終routerと比較して完全一致。再開後の再検査も成功。検証スクリプトと証拠はローカルの `tmp/batch29/verifyProduction.ts` / `production-proof.json`（非追跡）へ保存。
- Chromeの公開図鑑でロクシーとオデットの個別ビルド・根拠不足の固定目標なし表示・PT・凸を確認。オデットの1段から6段への切替も成功。原神121名、ZZZ61名、全体268名の件数を確認。再開直後に一時的なAPI接続エラーが記録されたためコンソールエラー0件とは報告しない。公開API再検査とChrome再読込後の描画は正常。
- 実UIDショーケースは未検証。英中はpending、公開言語は日本語のみ。単発公開受入と長時間可用性を区別する。次回採番30。
