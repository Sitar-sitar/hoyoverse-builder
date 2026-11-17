import type { GlossaryEntry } from "../../shared/content/glossary";

/** 用語集の入力。編集後は pnpm glossary:sync を実行する。 */
export const entries: GlossaryEntry[] = [
  {
    "id": "attribute",
    "category": "battle",
    "name": "属性",
    "reading": "ぞくせい",
    "summary": "攻撃やエージェントを分類する性質。",
    "body": "[[agent]]や攻撃には属性があり、敵の属性耐性や[[attribute-anomaly]]と関係する。",
    "sources": [
      {
        "label": "プロキシノート 戦闘システム（補助）",
        "url": "https://wikiwiki.jp/zenless/プロキシノート"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-17"
  },
  {
    "id": "specialty",
    "category": "battle",
    "name": "特性",
    "reading": "とくせい",
    "summary": "エージェントの戦闘上の役割を表す分類。",
    "body": "[[agent]]や[[w-engine]]には特性が設定されている。強攻、撃破、異常などがあり、[[w-engine|音動機]]の効果の発動条件にも関わる。",
    "sources": [
      {
        "label": "公式 Ver.3.3 アップデート",
        "url": "https://zenless.hoyoverse.com/ja-jp/news/166963"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-17"
  },
  {
    "id": "stun",
    "category": "battle",
    "name": "ブレイク",
    "reading": "ぶれいく",
    "summary": "敵のブレイク値を蓄積して発生させる状態。",
    "body": "攻撃で敵のブレイク値を蓄積し、上限に達するとブレイク状態になる。敵は一定時間行動を制限され、[[stun-dmg-multiplier]]に応じて受けるダメージが増える。",
    "sources": [
      {
        "label": "プロキシノート 戦闘システム（補助）",
        "url": "https://wikiwiki.jp/zenless/プロキシノート"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-17"
  },
  {
    "id": "stun-dmg-multiplier",
    "category": "battle",
    "name": "ブレイク弱体倍率",
    "reading": "ぶれいくじゃくたいばいりつ",
    "summary": "ブレイク中の敵が受けるダメージに関わる倍率。",
    "body": "敵が[[stun|ブレイク]]している間の被ダメージに関わる倍率。スキルによって増加させることもできる。",
    "sources": [
      {
        "label": "公式 Ver.3.3 アップデート",
        "url": "https://zenless.hoyoverse.com/ja-jp/news/166963"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-17"
  },
  {
    "id": "attribute-anomaly",
    "category": "battle",
    "name": "状態異常",
    "reading": "じょうたいいじょう",
    "summary": "属性の蓄積によって敵に発生する効果。",
    "body": "攻撃で[[attribute|属性]]の異常蓄積値を溜めると、属性に応じた状態異常が発生する。状態異常ダメージには[[anomaly-proficiency]]が、蓄積効率には[[anomaly-mastery]]が関わる。",
    "sources": [
      {
        "label": "ファミ通 ステータス・戦闘解説（補助）",
        "url": "https://www.famitsu.com/article/202407/9520?page=1"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-17"
  },
  {
    "id": "disorder",
    "category": "battle",
    "name": "混沌",
    "reading": "こんとん",
    "summary": "異なる属性異常が関わって発生する追加効果。",
    "body": "継続中の[[attribute-anomaly|状態異常]]に別の属性の状態異常を発生させると、条件に応じて混沌が発生する。風属性を含む組み合わせは乱流となる。混沌のダメージは先に発生した状態異常などに左右される。",
    "sources": [
      {
        "label": "ゼンレスゾーンゼロ Wiki 状態異常（補助）",
        "url": "https://wikiwiki.jp/zenless/状態異常"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-17"
  },
  {
    "id": "anomaly-proficiency",
    "category": "battle",
    "name": "異常マスタリー",
    "reading": "いじょうますたりー",
    "summary": "状態異常ダメージに影響するステータス。",
    "body": "[[attribute-anomaly|状態異常]]によるダメージに影響する。[[anomaly-mastery]]は異常蓄積効率に関わる別のステータス。",
    "sources": [
      {
        "label": "ファミ通 ステータス・戦闘解説（補助）",
        "url": "https://www.famitsu.com/article/202407/9520?page=1"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-17"
  },
  {
    "id": "anomaly-mastery",
    "category": "battle",
    "name": "異常掌握",
    "reading": "いじょうしょうあく",
    "summary": "属性異常の蓄積効率に影響するステータス。",
    "body": "[[attribute-anomaly|状態異常]]の蓄積効率に影響する。[[anomaly-proficiency]]は状態異常ダメージに関わる別のステータス。",
    "sources": [
      {
        "label": "ファミ通 ステータス・戦闘解説（補助）",
        "url": "https://www.famitsu.com/article/202407/9520?page=1"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-17"
  },
  {
    "id": "ex-special-attack",
    "category": "battle",
    "name": "強化特殊スキル",
    "reading": "きょうかとくしゅすきる",
    "summary": "エネルギーを使って発動する特殊スキル。",
    "body": "エネルギーなどの発動条件を満たすと使用できる[[agent]]固有のスキル。効果や必要な条件はエージェントごとに異なる。",
    "sources": [
      {
        "label": "HoYoWiki アストラ・ヤオ",
        "url": "https://wiki.hoyolab.com/pc/zzz/entry/588?lang=ja-jp"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-17"
  },
  {
    "id": "ultimate",
    "category": "battle",
    "name": "終結スキル",
    "reading": "しゅうけつすきる",
    "summary": "デシベル値を使って発動するスキル。",
    "body": "[[decibels|デシベル値]]が必要量に達すると使用できる、[[agent]]固有のスキル。効果はエージェントごとに異なる。",
    "sources": [
      {
        "label": "HoYoWiki アストラ・ヤオ",
        "url": "https://wiki.hoyolab.com/pc/zzz/entry/588?lang=ja-jp"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-17"
  },
  {
    "id": "chain-attack",
    "category": "battle",
    "name": "連携スキル",
    "reading": "れんけいすきる",
    "summary": "条件を満たしたときに味方へつなげるスキル。",
    "body": "行動可能な味方がいる状態で[[stun|ブレイク]]中の敵に重撃を当てると発動できる。スキルによって別の発動方法を持つ場合もある。",
    "sources": [
      {
        "label": "プロキシノート 戦闘システム（補助）",
        "url": "https://wikiwiki.jp/zenless/プロキシノート"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-17"
  },
  {
    "id": "quick-assist",
    "category": "battle",
    "name": "クイック支援",
    "reading": "くいっくしえん",
    "summary": "特定の状況で味方に切り替えて行う支援行動。",
    "body": "攻撃を受けて吹き飛ばされたときや、スキルによって発動できる支援行動。控えの[[agent]]に切り替えて攻撃する。",
    "sources": [
      {
        "label": "HoYoWiki アストラ・ヤオ",
        "url": "https://wiki.hoyolab.com/pc/zzz/entry/588?lang=ja-jp"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-17"
  },
  {
    "id": "defensive-assist",
    "category": "battle",
    "name": "パリィ支援",
    "reading": "ぱりぃしえん",
    "summary": "敵の攻撃に合わせて発動する支援行動。",
    "body": "敵の攻撃に合わせて[[agent|味方]]へ切り替え、攻撃を受け止める支援行動。支援ポイントや攻撃の種類など、発動条件に注意する。",
    "sources": [
      {
        "label": "プロキシノート 戦闘システム（補助）",
        "url": "https://wikiwiki.jp/zenless/プロキシノート"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-17"
  },
  {
    "id": "decibels",
    "category": "battle",
    "name": "デシベル値",
    "reading": "でしべるち",
    "summary": "終結スキルの発動に使う値。",
    "body": "戦闘中の行動などで蓄積し、必要量に達すると[[ultimate]]を発動できる。値はエージェントごとに管理される。",
    "sources": [
      {
        "label": "公式 Ver.1.4 アップデート",
        "url": "https://zenless.hoyoverse.com/ja-jp/news/127445"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-17"
  },
  {
    "id": "agent",
    "category": "growth",
    "name": "エージェント",
    "reading": "えーじぇんと",
    "summary": "戦闘に編成して操作・育成するキャラクター。",
    "body": "[[specialty|特性]]や[[attribute|属性]]、固有のスキルを持つキャラクター。[[w-engine]]や[[drive-disc]]を装備できる。",
    "sources": [
      {
        "label": "公式 Ver.3.3 アップデート",
        "url": "https://zenless.hoyoverse.com/ja-jp/news/166963"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-17"
  },
  {
    "id": "w-engine",
    "category": "growth",
    "name": "音動機",
    "reading": "おんどうき",
    "summary": "エージェントに装備する育成要素。",
    "body": "[[agent]]に装備してステータスを補う。音動機の効果には、装備者の[[specialty]]に関する発動条件がある。",
    "sources": [
      {
        "label": "公式 Ver.3.3 アップデート",
        "url": "https://zenless.hoyoverse.com/ja-jp/news/166963"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-17"
  },
  {
    "id": "drive-disc",
    "category": "growth",
    "name": "ドライバディスク",
    "reading": "どらいばでぃすく",
    "summary": "エージェントに装備し、能力を調整するアイテム。",
    "body": "[[agent]]に装備するディスク。[[main-stat]]や[[sub-stat]]を持ち、同じセットを組み合わせるとセット効果が発動する。",
    "sources": [
      {
        "label": "ドライバディスク解説（補助）",
        "url": "https://wikiwiki.jp/zenless/ドライバディスク"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-17"
  },
  {
    "id": "main-stat",
    "category": "growth",
    "name": "基礎ステータス",
    "reading": "きそすてーたす",
    "aliases": ["メインステータス"],
    "summary": "ドライバディスクの主なステータス。",
    "body": "[[drive-disc]]が持つ主なステータス。装備する部位により付く種類が異なり、ディスクを強化すると数値が上がる。",
    "sources": [
      {
        "label": "ドライバディスク解説（補助）",
        "url": "https://wikiwiki.jp/zenless/ドライバディスク"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-17"
  },
  {
    "id": "sub-stat",
    "category": "growth",
    "name": "ランダムステータス",
    "reading": "らんだむすてーたす",
    "aliases": ["サブステータス"],
    "summary": "ドライバディスクに付く追加ステータス。",
    "body": "[[drive-disc]]の[[main-stat]]に加えて付くステータス。強化によって追加または強化される。",
    "sources": [
      {
        "label": "ドライバディスク解説（補助）",
        "url": "https://wikiwiki.jp/zenless/ドライバディスク"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-17"
  },
  {
    "id": "mindscape-cinema",
    "category": "growth",
    "name": "心象映画",
    "reading": "しんしょうえいが",
    "summary": "エージェントごとに解放できる追加の強化要素。",
    "body": "同じ[[agent]]を重ねて獲得することで対応する心象映画を解放できる。段階ごとの効果はエージェントによって異なる。",
    "sources": [
      {
        "label": "HoYoWiki アストラ・ヤオ",
        "url": "https://wiki.hoyolab.com/pc/zzz/entry/588?lang=ja-jp"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-17"
  },
  {
    "id": "core-skill",
    "category": "growth",
    "name": "コアスキル",
    "reading": "こあすきる",
    "summary": "エージェント固有の能力に関わる育成要素。",
    "body": "[[agent]]ごとに設定された能力。素材を使った強化や、編成条件を満たしたときに発動する追加能力がある。",
    "sources": [
      {
        "label": "公式 Ver.2.5 アップデート",
        "url": "https://zenless.hoyoverse.com/ja-jp/news/161728"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-17"
  },
  {
    "id": "bangboo",
    "category": "growth",
    "name": "ボンプ",
    "reading": "ぼんぷ",
    "summary": "探索や戦闘などを支援する存在。",
    "body": "さまざまな用途を持つ存在。戦闘に同行するものや、[[hollow]]の探索を助けるものがいる。",
    "sources": [
      {
        "label": "HoYoWiki Random Play",
        "url": "https://wiki.hoyolab.com/pc/zzz/entry/96?lang=ja-jp"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-17"
  },
  {
    "id": "hollow-zero",
    "category": "content",
    "name": "零号ホロウ",
    "reading": "ぜろごうほろう",
    "summary": "ホロウ調査を題材とするコンテンツ。",
    "body": "[[hollow]]の調査に挑むコンテンツ。調査を通してさまざまな戦闘や出来事に遭遇する。",
    "sources": [
      {
        "label": "HoYoWiki Random Play",
        "url": "https://wiki.hoyolab.com/pc/zzz/entry/96?lang=ja-jp"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-17"
  },
  {
    "id": "shiyu-defense",
    "category": "content",
    "name": "式輿防衛戦",
    "reading": "しゆぼうえいせん",
    "summary": "エージェントを編成して挑む戦闘コンテンツ。",
    "body": "[[agent]]を編成し、敵との戦闘に挑むコンテンツ。ステージごとの条件や敵の特性に合わせて編成を考える。",
    "sources": [
      {
        "label": "公式 Ver.3.3 アップデート",
        "url": "https://zenless.hoyoverse.com/ja-jp/news/166963"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-17"
  },
  {
    "id": "signal-search",
    "category": "content",
    "name": "変調",
    "reading": "へんちょう",
    "summary": "エージェントや音動機などを獲得する仕組み。",
    "body": "チャンネルを選んで[[agent]]や[[w-engine]]などを獲得する仕組み。提供内容や受信確率はチャンネルごとに異なる。",
    "sources": [
      {
        "label": "公式 Ver.3.2 期間限定チャンネル",
        "url": "https://zenless.hoyoverse.com/ja-jp/news/165979"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-17"
  },
  {
    "id": "hollow",
    "category": "world",
    "name": "ホロウ",
    "reading": "ほろう",
    "summary": "作中世界に発生する特殊な災害・空間。",
    "body": "[[new-eridu]]の人々の生活に影響を及ぼす災害。内部の調査や活動には[[proxy]]の案内が関わる。",
    "sources": [
      {
        "label": "HoYoWiki Random Play",
        "url": "https://wiki.hoyolab.com/pc/zzz/entry/96?lang=ja-jp"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-17"
  },
  {
    "id": "proxy",
    "category": "world",
    "name": "プロキシ",
    "reading": "ぷろきし",
    "summary": "ホロウ内の活動を導く専門家。",
    "body": "[[hollow]]に入る人々を導く仕事をする人。主人公たちはパエトーンという名のプロキシとしても活動している。",
    "sources": [
      {
        "label": "HoYoWiki Random Play",
        "url": "https://wiki.hoyolab.com/pc/zzz/entry/96?lang=ja-jp"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-17"
  },
  {
    "id": "ethereal",
    "category": "world",
    "name": "エーテリアス",
    "reading": "えーてりあす",
    "summary": "ホロウに現れる存在。",
    "body": "[[hollow]]内で遭遇する敵対的な存在。調査の際にはほかの敵とともに戦闘の対象となる。",
    "sources": [
      {
        "label": "HoYoWiki デッドエンドブッチャー",
        "url": "https://wiki.hoyolab.com/pc/zzz/entry/6?lang=ja-jp"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-17"
  },
  {
    "id": "new-eridu",
    "category": "place",
    "name": "新エリー都",
    "reading": "しんえりーと",
    "summary": "物語の主な舞台となる都市。",
    "body": "主人公たちが暮らす都市。[[sixth-street]]には主人公たちのビデオ屋がある。",
    "sources": [
      {
        "label": "HoYoWiki Random Play",
        "url": "https://wiki.hoyolab.com/pc/zzz/entry/96?lang=ja-jp"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-17"
  },
  {
    "id": "sixth-street",
    "category": "place",
    "name": "六分街",
    "reading": "ろっぷんがい",
    "summary": "主人公たちのビデオ屋がある街区。",
    "body": "[[new-eridu]]の街区。主人公たちの拠点となるビデオ屋「Random Play」がある。",
    "sources": [
      {
        "label": "HoYoWiki Random Play",
        "url": "https://wiki.hoyolab.com/pc/zzz/entry/96?lang=ja-jp"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-17"
  }
];
