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
    "body": "[[agent]]や[[w-engine]]には特性が設定されている。[[attack]]、[[stun-specialty|撃破]]、[[anomaly|異常]]などがあり、[[w-engine|音動機]]の効果の発動条件にも関わる。",
    "sources": [
      {
        "label": "公式 Ver.3.3 アップデート",
        "url": "https://zenless.hoyoverse.com/ja-jp/news/166963"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "stun",
    "category": "battle",
    "name": "ブレイク",
    "reading": "ぶれいく",
    "summary": "敵のブレイク値を蓄積して発生させる状態。",
    "body": "攻撃で敵の[[daze]]を蓄積し、上限に達するとブレイク状態になる。敵は一定時間行動を制限され、[[stun-dmg-multiplier]]に応じて受けるダメージが増える。",
    "sources": [
      {
        "label": "プロキシノート 戦闘システム（補助）",
        "url": "https://wikiwiki.jp/zenless/プロキシノート"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-18"
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
    "body": "継続中の[[attribute-anomaly|状態異常]]に別の属性の状態異常を発生させると、条件に応じて混沌が発生する。風属性を含む組み合わせは[[turbulence]]となる。混沌のダメージは先に発生した状態異常などに左右される。",
    "sources": [
      {
        "label": "ゼンレスゾーンゼロ Wiki 状態異常（補助）",
        "url": "https://wikiwiki.jp/zenless/状態異常"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-18"
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
    "aliases": [
      "メインステータス"
    ],
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
    "aliases": [
      "サブステータス"
    ],
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
    "body": "[[agent]]ごとに設定された能力。素材を使った強化や、編成条件を満たしたときに発動する[[additional-ability]]がある。",
    "sources": [
      {
        "label": "公式 Ver.2.5 アップデート",
        "url": "https://zenless.hoyoverse.com/ja-jp/news/161728"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-18"
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
    "body": "[[hollow]]に入る人々を導く仕事をする人。主人公たちは[[phaethon]]という名のプロキシとしても活動している。",
    "sources": [
      {
        "label": "HoYoWiki Random Play",
        "url": "https://wiki.hoyolab.com/pc/zzz/entry/96?lang=ja-jp"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-18"
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
  },
  {
    "id": "assault",
    "category": "battle",
    "name": "強撃",
    "reading": "きょうげき",
    "summary": "物理属性の状態異常で発生するダメージ。",
    "body": "物理属性の[[attribute-anomaly|状態異常]]が発生すると敵に物理ダメージを与え、[[flinch]]を付与する。",
    "sources": [
      {
        "label": "ゼンレスゾーンゼロ Wiki 状態異常（補助）",
        "url": "https://wikiwiki.jp/zenless/状態異常"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "flinch",
    "category": "battle",
    "name": "畏縮",
    "reading": "いしゅく",
    "summary": "強撃に伴って付与される状態。",
    "body": "[[assault]]の発生に伴う効果。効果中は敵が受ける[[daze]]が増加し、[[stun]]を狙いやすくなる。",
    "sources": [
      {
        "label": "ゼンレスゾーンゼロ Wiki 状態異常（補助）",
        "url": "https://wikiwiki.jp/zenless/状態異常"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "burn",
    "category": "battle",
    "name": "熱傷",
    "reading": "ねっしょう",
    "summary": "炎属性の状態異常による継続ダメージ。",
    "body": "炎属性の[[attribute-anomaly|状態異常]]によって発生し、一定時間、断続的に炎属性ダメージを与える。",
    "sources": [
      {
        "label": "ゼンレスゾーンゼロ Wiki 状態異常（補助）",
        "url": "https://wikiwiki.jp/zenless/状態異常"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "shock",
    "category": "battle",
    "name": "感電",
    "reading": "かんでん",
    "summary": "電気属性の状態異常による効果。",
    "body": "電気属性の[[attribute-anomaly|状態異常]]によって発生し、一定時間、敵が攻撃を受けると電気属性ダメージを与える。",
    "sources": [
      {
        "label": "ゼンレスゾーンゼロ Wiki 状態異常（補助）",
        "url": "https://wikiwiki.jp/zenless/状態異常"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "corruption",
    "category": "battle",
    "name": "侵蝕",
    "reading": "しんしょく",
    "summary": "エーテル属性の状態異常による継続ダメージ。",
    "body": "エーテル属性の[[attribute-anomaly|状態異常]]によって発生し、一定時間、断続的にエーテル属性ダメージを与える。",
    "sources": [
      {
        "label": "ゼンレスゾーンゼロ Wiki 状態異常（補助）",
        "url": "https://wikiwiki.jp/zenless/状態異常"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "freeze",
    "category": "battle",
    "name": "凍結",
    "reading": "とうけつ",
    "summary": "氷属性の状態異常によって敵の行動を制限する効果。",
    "body": "氷属性の[[attribute-anomaly|状態異常]]によって発生する。凍結が終了すると[[shatter]]によるダメージが発生する。敵の種類によって凍結の扱いは異なる。",
    "sources": [
      {
        "label": "ゼンレスゾーンゼロ Wiki 状態異常（補助）",
        "url": "https://wikiwiki.jp/zenless/状態異常"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "shatter",
    "category": "battle",
    "name": "砕氷",
    "reading": "さいひょう",
    "summary": "凍結が解除されたときなどに発生するダメージ。",
    "body": "[[freeze]]に関連する氷属性ダメージ。敵が凍結から解放されたときなどに発生する。",
    "sources": [
      {
        "label": "ゼンレスゾーンゼロ Wiki 状態異常（補助）",
        "url": "https://wikiwiki.jp/zenless/状態異常"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "frostbite",
    "category": "battle",
    "name": "霜寒",
    "reading": "そうかん",
    "summary": "氷属性の状態異常に伴う効果。",
    "body": "氷属性の[[attribute-anomaly|状態異常]]に伴って付与される効果。効果中、対象が受ける[[crit-dmg]]に影響する。",
    "sources": [
      {
        "label": "ゼンレスゾーンゼロ Wiki 状態異常（補助）",
        "url": "https://wikiwiki.jp/zenless/状態異常"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "weathering",
    "category": "battle",
    "name": "風化",
    "reading": "ふうか",
    "summary": "風属性の状態異常による効果。",
    "body": "風属性の[[attribute-anomaly|状態異常]]により発生する。別の状態異常との組み合わせでは[[disorder|混沌]]の代わりに[[turbulence]]が関わる。",
    "sources": [
      {
        "label": "Game8 風属性の効果（補助）",
        "url": "https://game8.jp/zenless/781164"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "turbulence",
    "category": "battle",
    "name": "乱流",
    "reading": "らんりゅう",
    "summary": "風化と他の状態異常の組み合わせで発生する効果。",
    "body": "[[weathering]]と別の[[attribute-anomaly|状態異常]]を組み合わせると発生する。風化を含まない組み合わせの[[disorder]]とは別の効果。",
    "sources": [
      {
        "label": "Game8 風属性の効果（補助）",
        "url": "https://game8.jp/zenless/781164"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "anomaly-buildup",
    "category": "battle",
    "name": "状態異常蓄積値",
    "reading": "じょうたいいじょうちくせきち",
    "summary": "状態異常を発生させるために蓄積する値。",
    "body": "属性のある攻撃などで敵に蓄積する値。一定量に達すると対応する[[attribute-anomaly|状態異常]]が発生する。[[anomaly-mastery]]は蓄積効率に関わる。",
    "sources": [
      {
        "label": "ゼンレスゾーンゼロ Wiki 状態異常（補助）",
        "url": "https://wikiwiki.jp/zenless/状態異常"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "daze",
    "category": "battle",
    "name": "ブレイク値",
    "reading": "ぶれいくち",
    "summary": "敵をブレイクさせるために蓄積する値。",
    "body": "攻撃などによって敵に蓄積し、上限に達すると[[stun]]が発生する。[[impact]]は蓄積に影響するステータス。",
    "sources": [
      {
        "label": "プロキシノート（補助）",
        "url": "https://wikiwiki.jp/zenless/プロキシノート"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "impact",
    "category": "battle",
    "name": "衝撃力",
    "reading": "しょうげきりょく",
    "summary": "攻撃によるブレイク値の蓄積に影響するステータス。",
    "body": "攻撃時に与える[[daze]]に影響する。敵を[[stun|ブレイク]]しやすくしたい場合に注目するステータス。",
    "sources": [
      {
        "label": "ファミ通 ステータス解説（補助）",
        "url": "https://www.famitsu.com/article/202407/9520?page=1"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "evasive-assist",
    "category": "battle",
    "name": "回避支援",
    "reading": "かいひしえん",
    "summary": "味方への交代時に敵の攻撃を回避する支援行動。",
    "body": "敵の攻撃に合わせて控えの味方へ交代し、攻撃を回避する支援行動。発動後は条件に応じて[[assist-follow-up]]につなげられる。[[defensive-assist]]とは異なる支援行動。",
    "sources": [
      {
        "label": "GameWith 極限支援（補助）",
        "url": "https://gamewith.jp/zenless/455959"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "assist-follow-up",
    "category": "battle",
    "name": "支援突撃",
    "reading": "しえんとつげき",
    "summary": "支援行動からつなげるエージェント固有の攻撃。",
    "body": "[[defensive-assist]]や[[evasive-assist]]の後に、所定の操作で発動する攻撃。操作や効果は[[agent]]のスキル説明を確認する。",
    "sources": [
      {
        "label": "GameWith 極限支援（補助）",
        "url": "https://gamewith.jp/zenless/455959"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "attack",
    "category": "battle",
    "name": "強攻",
    "reading": "きょうこう",
    "summary": "ダメージを与える役割を中心とする特性。",
    "body": "[[specialty|特性]]のひとつ。攻撃によるダメージを得意とするエージェントが属する。具体的な戦い方は[[agent]]ごとに異なる。",
    "sources": [
      {
        "label": "Game8 特性の一覧（補助）",
        "url": "https://game8.jp/zenless/622958"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "stun-specialty",
    "category": "battle",
    "name": "撃破",
    "reading": "げきは",
    "summary": "敵のブレイクを狙う役割を中心とする特性。",
    "body": "[[specialty|特性]]のひとつ。[[daze]]を蓄積し、敵を[[stun]]させる役割を得意とする。",
    "sources": [
      {
        "label": "Game8 特性の一覧（補助）",
        "url": "https://game8.jp/zenless/622958"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "anomaly",
    "category": "battle",
    "name": "異常",
    "reading": "いじょう",
    "summary": "状態異常を活用する役割を中心とする特性。",
    "body": "[[specialty|特性]]のひとつ。[[attribute-anomaly|状態異常]]の付与やダメージを活用するエージェントが属する。",
    "sources": [
      {
        "label": "Game8 特性の一覧（補助）",
        "url": "https://game8.jp/zenless/622958"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "support",
    "category": "battle",
    "name": "支援",
    "reading": "しえん",
    "summary": "味方の能力補助などを担う特性。",
    "body": "[[specialty|特性]]のひとつ。味方の強化などを担うエージェントが属する。支援の方法は[[agent]]ごとに異なる。",
    "sources": [
      {
        "label": "Game8 特性の一覧（補助）",
        "url": "https://game8.jp/zenless/622958"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "defense",
    "category": "battle",
    "name": "防護",
    "reading": "ぼうご",
    "summary": "防御や味方の保護などを担う特性。",
    "body": "[[specialty|特性]]のひとつ。味方の生存を助ける能力などを持つエージェントが属する。効果は[[agent]]ごとに異なる。",
    "sources": [
      {
        "label": "Game8 特性の一覧（補助）",
        "url": "https://game8.jp/zenless/622958"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "rupture",
    "category": "battle",
    "name": "命破",
    "reading": "めいは",
    "summary": "透徹ダメージなどを活用する特性。",
    "body": "[[specialty|特性]]のひとつ。透徹ダメージを扱うエージェントが属する。詳しい能力や使用するリソースは[[agent]]ごとに確認する。",
    "sources": [
      {
        "label": "公式 Ver.2.5 更新情報",
        "url": "https://zenless.hoyoverse.com/ja-jp/news/161728"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "additional-ability",
    "category": "growth",
    "name": "追加能力",
    "reading": "ついかのうりょく",
    "summary": "編成などの条件を満たすと発動する能力。",
    "body": "[[core-skill]]のひとつ。チーム内の[[specialty|特性]]や陣営など、[[agent]]ごとに定められた条件を満たすと効果を発揮する。",
    "sources": [
      {
        "label": "HoYoWiki ヒューゴ・ヴラド",
        "url": "https://wiki.hoyolab.com/pc/zzz/entry/707?lang=ja-jp"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "core-passive",
    "category": "growth",
    "name": "コアパッシブ",
    "reading": "こあぱっしぶ",
    "summary": "エージェント固有のコアスキルの一部。",
    "body": "[[core-skill]]を構成する能力のひとつ。素材を使ってコアスキルを強化すると、対応する効果が向上する。",
    "sources": [
      {
        "label": "HoYoWiki ヒューゴ・ヴラド",
        "url": "https://wiki.hoyolab.com/pc/zzz/entry/707?lang=ja-jp"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "crit-rate",
    "category": "battle",
    "name": "会心率",
    "reading": "かいしんりつ",
    "summary": "対象の攻撃などで会心が発生する確率。",
    "body": "会心が発生する確率に関わるステータス。会心発生時のダメージには[[crit-dmg]]も関係する。会心の可否はダメージの種類によって異なる。",
    "sources": [
      {
        "label": "ファミ通 ステータス解説（補助）",
        "url": "https://www.famitsu.com/article/202407/9520?page=1"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "crit-dmg",
    "category": "battle",
    "name": "会心ダメージ",
    "reading": "かいしんだめーじ",
    "summary": "会心発生時のダメージに関わるステータス。",
    "body": "会心が発生したときのダメージに影響する。[[crit-rate]]は会心の発生確率に関わる別のステータス。",
    "sources": [
      {
        "label": "ファミ通 ステータス解説（補助）",
        "url": "https://www.famitsu.com/article/202407/9520?page=1"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "deadly-assault",
    "category": "content",
    "name": "危局強襲戦",
    "reading": "ききょくきょうしゅうせん",
    "summary": "強敵に挑戦し、スコアを目指す戦闘コンテンツ。",
    "body": "[[agent]]を編成して強敵と戦うコンテンツ。挑戦内容や期間ごとの条件を確認して編成を組む。",
    "sources": [
      {
        "label": "公式 Ver.1.4 更新情報",
        "url": "https://zenless.hoyoverse.com/ja-jp/news/127445"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "combat-simulation",
    "category": "content",
    "name": "模擬実戦",
    "reading": "もぎじっせん",
    "summary": "育成素材などを獲得するための戦闘コンテンツ。",
    "body": "敵との戦闘に挑み、[[agent]]の育成に使う素材などを獲得する。必要な素材に応じて挑戦内容を選ぶ。",
    "sources": [
      {
        "label": "公式 Ver.1.4 更新情報",
        "url": "https://zenless.hoyoverse.com/ja-jp/news/127445"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "expert-challenge",
    "category": "content",
    "name": "エキスパート挑戦",
    "reading": "えきすぱーとちょうせん",
    "summary": "コアスキルの育成素材などを得る挑戦。",
    "body": "強敵に挑み、[[core-skill]]の強化に使う素材などを獲得する。必要な素材に対応する敵を選んで挑戦する。",
    "sources": [
      {
        "label": "公式 Ver.2.5 更新情報",
        "url": "https://zenless.hoyoverse.com/ja-jp/news/161728"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "hdd",
    "category": "world",
    "name": "H.D.D",
    "reading": "えいちでぃーでぃー",
    "summary": "ホロウの探索や通信に関わるシステム。",
    "body": "主人公たちが[[hollow]]内の探索に利用するシステム。ナビ[[bangboo|ボンプ]]のイアスを介した案内などに使う。",
    "sources": [
      {
        "label": "HoYoWiki Random Play",
        "url": "https://wiki.hoyolab.com/pc/zzz/entry/96?lang=ja-jp"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "phaethon",
    "category": "world",
    "name": "パエトーン",
    "reading": "ぱえとーん",
    "summary": "主人公たちがプロキシとして使う名前。",
    "body": "[[proxy|プロキシ]]として活動する主人公たちの名前。[[sixth-street]]のビデオ屋を拠点に、[[hdd]]などを使って[[hollow]]内の活動を案内する。",
    "sources": [
      {
        "label": "HoYoWiki Random Play",
        "url": "https://wiki.hoyolab.com/pc/zzz/entry/96?lang=ja-jp"
      }
    ],
    "gameVersion": "3.3",
    "dataAsOf": "2026-11-18"
  },
  {"id": "battery-charge", "category": "content", "name": "バッテリー", "reading": "ばってりー", "summary": "一部の挑戦や報酬に使う資源。", "body": "[[combat-simulation]]などの挑戦に関係する資源。足りない場合は[[reserve-battery]]を使って補充できる。", "sources": [{"label": "公式サイト", "url": "https://zenless.hoyoverse.com/ja-jp/news/129572"}], "gameVersion": "1.5", "dataAsOf": "2026-11-18"},
  {"id": "reserve-battery", "category": "content", "name": "予備バッテリー", "reading": "よびばってりー", "summary": "バッテリーの補充に使う予備の資源。", "body": "[[battery-charge]]が不足したときに補充へ使える。バッテリーが上限に達している間は時間とともに蓄積する。", "sources": [{"label": "公式サイト", "url": "https://zenless.hoyoverse.com/ja-jp/news/126084"}], "gameVersion": "1.2", "dataAsOf": "2026-11-18"},
  {"id": "ether-battery", "category": "content", "name": "エーテル電池", "reading": "えーてるでんち", "summary": "一部のステージを戦闘せずにクリアするためのアイテム。", "body": "[[combat-simulation]]や区域防衛で使うと、戦闘を飛ばして対応する報酬を獲得できる。", "sources": [{"label": "公式サイト", "url": "https://zenless.hoyoverse.com/ja-jp/news/161728"}], "gameVersion": "2.5", "dataAsOf": "2026-11-18"},
  {"id": "proxy-level", "category": "growth", "name": "インターノットレベル", "reading": "いんたーのっとれべる", "summary": "コンテンツの参加条件などに用いられるレベル。", "body": "イベントへの参加条件などに設定されるレベル。開放条件はイベントごとに異なる。", "sources": [{"label": "公式サイト", "url": "https://zenless.hoyoverse.com/ja-jp/news/166963"}], "gameVersion": "3.3", "dataAsOf": "2026-11-18"},
  {"id": "polychrome", "category": "content", "name": "ポリクローム", "reading": "ぽりくろーむ", "summary": "イベント報酬などで獲得できるアイテム。", "body": "イベント報酬や更新時の補償などで獲得できる。[[signal-search]]に関係するアイテムの交換にも使われる。", "sources": [{"label": "公式サイト", "url": "https://zenless.hoyoverse.com/ja-jp/news/166963"}], "gameVersion": "3.3", "dataAsOf": "2026-11-18"},
  {"id": "encrypted-master-tape", "category": "content", "name": "暗号化マスターテープ", "reading": "あんごうかますたーてーぷ", "summary": "期間限定の変調に使うアイテム。", "body": "期間限定のチャンネルで[[signal-search]]を行うためのアイテム。イベント報酬などでも獲得できる。", "sources": [{"label": "公式ログイン報酬", "url": "https://zenless.hoyoverse.com/ja-jp/news/166963"}, {"label": "変調システム（補助）", "url": "https://wikiwiki.jp/zenless/変調"}], "gameVersion": "3.2", "dataAsOf": "2026-11-18"},
  {"id": "master-tape", "category": "content", "name": "未加工マスターテープ", "reading": "みかこうますたーてーぷ", "summary": "常設チャンネルの変調に使うアイテム。", "body": "常設チャンネルで[[signal-search]]を行うためのアイテム。[[encrypted-master-tape]]とは用途が異なる。", "sources": [{"label": "公式キャンペーン", "url": "https://zenless.hoyoverse.com/ja-jp/news/156013"}, {"label": "アイテム一覧（補助）", "url": "https://zzz.gg/jp/items"}], "gameVersion": "3.2", "dataAsOf": "2026-11-18"},
  {"id": "denny", "category": "growth", "name": "ディニー", "reading": "でぃにー", "summary": "育成やショップなどで使うゲーム内の通貨。", "body": "[[agent]]や[[w-engine]]の育成などに使う。イベントやショップの報酬としても獲得できる。", "sources": [{"label": "公式サイト", "url": "https://zenless.hoyoverse.com/ja-jp/news/156694"}], "gameVersion": "2.0", "dataAsOf": "2026-11-18"},
  {"id": "new-eridu-city-fund", "category": "content", "name": "エリーファンド", "reading": "えりーふぁんど", "summary": "ファンドレベルを上げて報酬を得る仕組み。", "body": "有効期間中にファンドレベルを上げると、プランに応じた報酬を獲得できる。育成素材などが含まれる。", "sources": [{"label": "公式サイト", "url": "https://zenless.hoyoverse.com/ja-jp/news/166944"}], "gameVersion": "3.3", "dataAsOf": "2026-11-18"},
  {"id": "proxy-network", "category": "content", "name": "プロキシチャンネル", "reading": "ぷろきしちゃんねる", "summary": "他のプロキシと交流するための機能。", "body": "チャンネルを作成したり参加したりして、チャットや[[deadly-assault|危局強襲戦]]の戦績共有を行える。", "sources": [{"label": "公式サイト", "url": "https://zenless.hoyoverse.com/ja-jp/news/161728"}], "gameVersion": "2.5", "dataAsOf": "2026-11-18"},
  {"id": "bounty-board", "category": "content", "name": "情報掲示板", "reading": "じょうほうけいじばん", "summary": "チャンネル内で依頼を掲示・受注できる機能。", "body": "[[proxy-network]]に参加した後、同じチャンネルのプロキシと代行依頼をやり取りできる。", "sources": [{"label": "公式サイト", "url": "https://zenless.hoyoverse.com/ja-jp/news/161728"}], "gameVersion": "2.5", "dataAsOf": "2026-11-18"},
  {"id": "agent-guide", "category": "growth", "name": "エージェント攻略", "reading": "えーじぇんとこうりゃく", "summary": "エージェントの育成や編成を確認できる機能。", "body": "[[agent]]の詳細画面や[[hollow-investigator-handbook]]などから開き、育成やチーム編成の情報を確認できる。", "sources": [{"label": "公式サイト", "url": "https://zenless.hoyoverse.com/ja-jp/news/166963"}], "gameVersion": "3.3", "dataAsOf": "2026-11-18"},
  {"id": "hollow-investigator-handbook", "category": "content", "name": "プロキシガイド", "reading": "ぷろきしがいど", "summary": "ゲーム内の各種機能を案内するガイド。", "body": "[[agent-guide]]などへアクセスできるゲーム内の案内機能。", "sources": [{"label": "公式サイト", "url": "https://zenless.hoyoverse.com/ja-jp/news/166963"}], "gameVersion": "3.3", "dataAsOf": "2026-11-18"},
  {"id": "agent-trust", "category": "growth", "name": "信頼関係", "reading": "しんらいかんけい", "summary": "エージェントとの交流に関係する要素。", "body": "[[agent]]との信頼ランクを上げることで、一部のライブ壁紙などを開放できる。", "sources": [{"label": "公式サイト", "url": "https://zenless.hoyoverse.com/ja-jp/news/166963"}], "gameVersion": "3.3", "dataAsOf": "2026-11-18"},
  {"id": "cunning-hares", "category": "faction", "name": "邪兎屋", "reading": "じゃとや", "summary": "ニコが率いる何でも屋。", "body": "[[hollow]]の調査などの依頼を引き受ける。公式紹介ではニコやアンビーが所属している。", "characters": ["zzz:1031"], "sources": [{"label": "公式サイト", "url": "https://zenless.hoyoverse.com/ja-jp/character"}], "gameVersion": "3.3", "dataAsOf": "2026-11-18"},
  {"id": "belobog-heavy-industries", "category": "faction", "name": "白祇重工", "reading": "しらぎじゅうこう", "summary": "クレタが率いる会社。", "body": "公式紹介ではクレタが社長で、アンドーが工事現場の責任者として紹介されている。", "characters": ["zzz:1101"], "sources": [{"label": "公式サイト", "url": "https://zenless.hoyoverse.com/ja-jp/character"}], "gameVersion": "3.3", "dataAsOf": "2026-11-18"},
  {"id": "hollow-special-operations-section-6", "category": "faction", "name": "対ホロウ6課", "reading": "たいほろうろっか", "summary": "星見雅や月城柳が所属する組織。", "body": "公式キャラクター紹介に登場する組織。月城柳は副課長として紹介されている。", "characters": ["zzz:1221"], "sources": [{"label": "公式サイト", "url": "https://zenless.hoyoverse.com/ja-jp/character"}], "gameVersion": "3.3", "dataAsOf": "2026-11-18"},
  {"id": "victoria-housekeeping", "category": "faction", "name": "ヴィクトリア家政", "reading": "ゔぃくとりあかせい", "summary": "ライカンやエレンが所属する陣営。", "body": "公式の[[agent|キャラクター]]一覧で、ライカンやエレンが所属する陣営として紹介される。", "characters": ["zzz:1191"], "sources": [{"label": "公式サイト", "url": "https://zenless.hoyoverse.com/ja-jp/main"}], "gameVersion": "3.3", "dataAsOf": "2026-11-18"},
  {"id": "sons-of-calydon", "category": "faction", "name": "カリュドーンの子", "reading": "かりゅどーんのこ", "summary": "シーザーやバーニスが所属する陣営。", "body": "公式の[[agent|キャラクター]]一覧で、シーザーやバーニスなどが所属する陣営として紹介される。", "characters": ["zzz:1071"], "sources": [{"label": "公式サイト", "url": "https://zenless.hoyoverse.com/ja-jp/main"}], "gameVersion": "3.3", "dataAsOf": "2026-11-18"},
  {"id": "special-response-team", "category": "faction", "name": "特務捜査班", "reading": "とくむそうさはん", "summary": "朱鳶や青衣が所属する陣営。", "body": "公式の[[agent|キャラクター]]一覧で、朱鳶や青衣などが所属する陣営として紹介される。", "characters": ["zzz:1241"], "sources": [{"label": "公式サイト", "url": "https://zenless.hoyoverse.com/ja-jp/main"}], "gameVersion": "3.3", "dataAsOf": "2026-11-18"},
  {"id": "obol-squad", "category": "faction", "name": "オボルス小隊", "reading": "おぼるすしょうたい", "summary": "11号やオルペウスたちが所属する陣営。", "body": "公式キャラクター一覧で、11号やオルペウス＆「鬼火」などが所属する陣営として紹介される。", "sources": [{"label": "公式サイト", "url": "https://zenless.hoyoverse.com/ja-jp/main"}], "gameVersion": "3.3", "dataAsOf": "2026-11-18"},
  {"id": "mockingbird", "category": "faction", "name": "モッキンバード", "reading": "もっきんばーど", "summary": "ヒューゴやビビアンが所属する陣営。", "body": "公式の[[agent|キャラクター]]一覧で、ヒューゴやビビアンが所属する陣営として紹介される。", "characters": ["zzz:1291"], "sources": [{"label": "公式サイト", "url": "https://zenless.hoyoverse.com/ja-jp/main"}], "gameVersion": "3.3", "dataAsOf": "2026-11-18"},
  {"id": "stars-of-lyra", "category": "faction", "name": "スターズ・オブ・リラ", "reading": "すたーずおぶりら", "summary": "アストラ・ヤオやイヴリンが所属する陣営。", "body": "公式キャラクター一覧で、アストラ・ヤオやイヴリンが所属する陣営として紹介される。", "sources": [{"label": "公式サイト", "url": "https://zenless.hoyoverse.com/ja-jp/main"}], "gameVersion": "3.3", "dataAsOf": "2026-11-18"},
  {"id": "spook-shack", "category": "faction", "name": "怪啖屋", "reading": "かいたんや", "summary": "リュシアや浮波柚葉が所属する陣営。", "body": "公式の[[agent|キャラクター]]一覧で、リュシアや浮波柚葉などが所属する陣営として紹介される。", "characters": ["zzz:1451"], "sources": [{"label": "公式サイト", "url": "https://zenless.hoyoverse.com/ja-jp/main"}], "gameVersion": "3.3", "dataAsOf": "2026-11-18"},
  {"id": "yunkui-summit", "category": "faction", "name": "雲嶽山", "reading": "うんがくさん", "summary": "儀玄や橘福福が所属する陣営。", "body": "公式の[[agent|キャラクター]]一覧で、儀玄や橘福福などが所属する陣営として紹介される。", "characters": ["zzz:1371"], "sources": [{"label": "公式サイト", "url": "https://zenless.hoyoverse.com/ja-jp/main"}], "gameVersion": "3.3", "dataAsOf": "2026-11-18"},
  {"id": "krampus-compliance-authority", "category": "faction", "name": "クランプスの黒枝", "reading": "くらんぷすのくろえだ", "summary": "盤岳や照が所属する陣営。", "body": "公式の[[agent|キャラクター]]一覧で、盤岳や照などが所属する陣営として紹介される。", "characters": ["zzz:1471"], "sources": [{"label": "公式サイト", "url": "https://zenless.hoyoverse.com/ja-jp/main"}], "gameVersion": "3.3", "dataAsOf": "2026-11-18"},
  {"id": "angels-of-delusion", "category": "faction", "name": "妄想エンジェル", "reading": "もうそうえんじぇる", "summary": "アリアや千夏が所属する陣営。", "body": "公式の[[agent|キャラクター]]一覧で、アリアや千夏が所属する陣営として紹介される。", "characters": ["zzz:1501"], "sources": [{"label": "公式サイト", "url": "https://zenless.hoyoverse.com/ja-jp/main"}], "gameVersion": "3.3", "dataAsOf": "2026-11-18"},
  {"id": "defense-force-silver-squad", "category": "faction", "name": "防衛軍・シルバー小隊", "reading": "ぼうえいぐんしるばーしょうたい", "summary": "0号・アンビーが所属する陣営。", "body": "公式の[[agent|キャラクター]]一覧で、0号・アンビーが所属する陣営として紹介される。", "characters": ["zzz:1381"], "sources": [{"label": "公式サイト", "url": "https://zenless.hoyoverse.com/ja-jp/main"}], "gameVersion": "3.3", "dataAsOf": "2026-11-18"},
  {"id": "special-invitation", "category": "growth", "name": "特別招待状", "reading": "とくべつしょうたいじょう", "summary": "一部のS級エージェントの交換に使うアイテム。", "body": "[[agent]]のうち対象のS級エージェントとの交換に使用できる。入手方法はゲーム内で確認できる。", "sources": [{"label": "公式サイト", "url": "https://zenless.hoyoverse.com/ja-jp/news/161728"}], "gameVersion": "2.5", "dataAsOf": "2026-11-18"},
  {"id": "w-engine-master-chip", "category": "growth", "name": "音動機マスターチップ", "reading": "おんどうきますたーちっぷ", "summary": "一部のS級音動機の交換に使うアイテム。", "body": "対象のS級[[w-engine]]との交換に使用できる。[[new-eridu-city-fund]]などから入手できる。", "sources": [{"label": "公式サイト", "url": "https://zenless.hoyoverse.com/ja-jp/news/161728"}], "gameVersion": "2.5", "dataAsOf": "2026-11-18"},
  {"id": "kyuuto-kanraku", "category": "world", "name": "旧都陥落", "reading": "きゅうとかんらく", "summary": "旧エリー都が放棄されることになった事件。", "body": "零号ホロウが急激に拡大し、旧都を放棄する事態となった。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "HoYoWiki Random Play・ゲーム内資料", "url": "https://wiki.hoyolab.com/pc/zzz/entry/96?lang=ja-jp"}, {"label": "Wiki*（補助）", "url": "https://wikiwiki.jp/zenless/用語"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["hollow-zero"]},
  {"id": "kyousei-hollow", "category": "world", "name": "共生ホロウ", "reading": "きょうせいほろう", "summary": "既存のホロウから派生して生じるホロウ。", "body": "既存のホロウに由来して発生する。街中で生じて住民に被害を及ぼすこともある。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "HoYoWiki Random Play・ゲーム内資料", "url": "https://wiki.hoyolab.com/pc/zzz/entry/96?lang=ja-jp"}, {"label": "Wiki*（補助）", "url": "https://wikiwiki.jp/zenless/用語"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["hollow"]},
  {"id": "kouji", "category": "world", "name": "輝磁", "reading": "こうじ", "summary": "エーテルの遮断に使われる材料。", "body": "輝嶺石を加工して作る特殊な材料。ホロウ探索用の装備などに使われる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "HoYoWiki ゲーム内資料", "url": "https://wiki.hoyolab.com/pc/zzz/entry/96?lang=ja-jp"}, {"label": "Wiki*（補助）", "url": "https://wikiwiki.jp/zenless/用語"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["koureiseki"]},
  {"id": "koureiseki", "category": "world", "name": "輝嶺石", "reading": "こうれいせき", "summary": "衛非地区などで採れる鉱石。", "body": "衛非地区は輝嶺石の主要な産地で、輝磁製品の加工も行われている。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "HoYoWiki ローディングTips", "url": "https://wiki.hoyolab.com/pc/zzz/entry/828?lang=ja-jp"}, {"label": "Wiki*（補助）", "url": "https://wikiwiki.jp/zenless/用語"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21"},
  {"id": "routine-cleanup", "category": "content", "name": "区域防衛", "reading": "くいきぼうえい", "summary": "ドライバディスクなどの報酬を得られる挑戦。", "body": "挑戦をクリアしてドライバディスクなどを獲得できる。エーテル電池を使う直接クリアにも対応する。", "sources": [{"label": "公式更新情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/161728"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["ether-battery"]},
  {"id": "notorious-hunt", "category": "content", "name": "要警戒狩り", "reading": "ようけいかいがり", "summary": "強敵に挑む常設コンテンツ。", "body": "強敵との戦闘に挑む。チーム編成時には人数や育成状況に応じたヒントが表示される。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "公式更新情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/166963"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["expert-challenge"]},
  {"id": "training-course", "category": "content", "name": "調査員講座", "reading": "ちょうさいんこうざ", "summary": "調査員向けの挑戦コンテンツ。", "body": "調査員向けの講座。公式更新情報では専用画面の操作改善が案内されている。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "公式更新情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/129572"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["combat-simulation"]},
  {"id": "proxy-file", "category": "content", "name": "プロキシファイル", "reading": "ぷろきしふぁいる", "summary": "プロキシの進行情報を確認する画面。", "body": "プロキシの名声昇格に関する特典や昇格ガイドを確認できる。", "sources": [{"label": "公式更新情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/166963"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["proxy-promotion-guide"]},
  {"id": "proxy-promotion-guide", "category": "content", "name": "プロキシ昇格ガイド", "reading": "ぷろきししょうかくがいど", "summary": "プロキシ昇格の条件や進行を案内する機能。", "body": "昇格条件を満たすと通知され、関連する任務へ移動できる。", "sources": [{"label": "公式更新情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/166963"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21"},
  {"id": "lumina-square", "category": "place", "name": "ルミナスクエア", "reading": "るみなすくえあ", "summary": "新エリー都にある街区。", "body": "治安局の施設やHIAキャリアセンターがある街区。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "HoYoWiki", "url": "https://wiki.hoyolab.com/pc/zzz/entry/565?lang=ja-jp"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21"},
  {"id": "blazewood", "category": "place", "name": "ブレイズウッド", "reading": "ぶれいずうっど", "summary": "郊外の旧油田エリアにある町。", "body": "郊外の町で、カリュドーンの子が活動する地域。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "HoYoWiki", "url": "https://wiki.hoyolab.com/pc/zzz/entry/564?lang=ja-jp"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21"},
  {"id": "new-eridu-public-security", "category": "faction", "name": "新エリー都治安局", "reading": "しんえりーとちあんきょく", "summary": "新エリー都の秩序を守る公的機関。", "body": "各種の事務手続きや、市民からの要望に応じた支援を行う。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "HoYoWiki", "url": "https://wiki.hoyolab.com/pc/zzz/entry/565?lang=ja-jp"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21"},
  {"id": "lumina-security-branch", "category": "place", "name": "治安局ルミナ分署", "reading": "ちあんきょくるみなぶんしょ", "summary": "ルミナスクエアにある治安局の施設。", "body": "[[lumina-square]]にある[[new-eridu-public-security]]の分署。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "HoYoWiki", "url": "https://wiki.hoyolab.com/pc/zzz/entry/565?lang=ja-jp"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21"},
  {"id": "cheesetopia", "category": "place", "name": "ダイナー「チートピア」", "reading": "だいなーちーとぴあ", "summary": "ブレイズウッドにあるダイナー。", "body": "[[blazewood]]にある施設。カリュドーンの子に関わる場所。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "HoYoWiki", "url": "https://wiki.hoyolab.com/pc/zzz/entry/564?lang=ja-jp"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21"},
  {"id": "quick-handbook", "category": "content", "name": "クイック手帳", "reading": "くいっくてちょう", "summary": "作戦や資源などを確認する画面。", "body": "作戦の情報を確認でき、バッテリーなどの所持数も表示される。", "sources": [{"label": "公式更新情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/164775"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["battery-charge"]},
  {"id": "lost-void", "category": "content", "name": "迷いの地", "reading": "まよいのち", "summary": "零号ホロウの常設コンテンツ。", "body": "異なる武装やレゾブレムを使い、戦闘を進める。", "sources": [{"label": "公式更新情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/127445"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21"},
  {"id": "withered-domain", "category": "content", "name": "枯渇の都", "reading": "こかつのみやこ", "summary": "零号ホロウの調査に関わるコンテンツ。", "body": "零号ホロウにおける挑戦の一つ。調査ポイントに関する報酬がある。", "sources": [{"label": "公式更新情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/127445"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21"},
  {"id": "investigation-points", "category": "content", "name": "調査ポイント", "reading": "ちょうさぽいんと", "summary": "零号ホロウの調査に関わるポイント。", "body": "零号ホロウの調査で獲得するポイント。[[withered-domain]]に週間の獲得上限が設けられている。", "sources": [{"label": "公式更新情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/127445"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21"},
  {"id": "shadow-crystal-data", "category": "content", "name": "シャドウ結晶のデータ", "reading": "しゃどうけっしょうのでーた", "summary": "迷いの地の懸賞依頼に関わるデータ。", "body": "[[lost-void]]の懸賞依頼の進行に使われるデータ。", "sources": [{"label": "公式更新情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/127445"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21"},
  {"id": "agent-story", "category": "content", "name": "エージェント秘話", "reading": "えーじぇんとひわ", "summary": "エージェントに焦点を当てた物語。", "body": "エージェントに関わる物語を体験できる。進行が別コンテンツの参加条件となることもある。", "sources": [{"label": "公式更新情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/127445"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["agent"]},
  {"id": "partner-archive", "category": "content", "name": "協力者ファイル", "reading": "きょうりょくしゃふぁいる", "summary": "エージェントとの交流に関わる画面。", "body": "信頼システムに関わる画面。エージェントの「お誘いへGO」などを利用できる。", "sources": [{"label": "公式更新情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/127445"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["agent-trust"]},
  {"id": "enemies", "category": "content", "name": "敵対ターゲット", "reading": "てきたいたーげっと", "summary": "エネミーに関わる情報を確認できる項目。", "body": "敵対ターゲットに関する項目。公式更新情報では関連するアチーブメントが案内されている。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "公式更新情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/127445"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["hollow"]},
  {"id": "resonium", "category": "content", "name": "レゾブレム", "reading": "れぞぶれむ", "summary": "零号ホロウで特殊効果を得られる要素。", "body": "[[lost-void]]では武装とともに特殊な効果をもたらし、エージェントの戦闘を助ける。", "sources": [{"label": "公式更新情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/127445"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21"},
  {"id": "early-access", "category": "content", "name": "先行上映", "reading": "せんこうじょうえい", "summary": "一部ストーリーを先行して体験できる機能。", "body": "条件を満たすと、一部メインストーリーをクイック体験できる。", "sources": [{"label": "公式更新情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/161728"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["agent-story"]},
  {"id": "eridu-chronicles", "category": "content", "name": "エリー・クロニクル", "reading": "えりーくろにくる", "summary": "過去のイベントを体験できる機能。", "body": "一部のイベントは限定期間の終了後に収録され、引き続き内容を体験できる。期間限定報酬は期限後には受け取れない。", "sources": [{"label": "公式イベント情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/162498"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["agent-story"]},
  {"id": "exclusive-channel", "category": "content", "name": "独占チャンネル", "reading": "どくせんちゃんねる", "summary": "限定エージェントを獲得できる変調の種類。", "body": "[[signal-search|変調]]のチャンネルの一つ。開催中の対象エージェントを獲得できる。", "sources": [{"label": "公式更新情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/166963"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21"},
  {"id": "w-engine-channel", "category": "content", "name": "音動機チャンネル", "reading": "おんどうきちゃんねる", "summary": "音動機を獲得できる変調の種類。", "body": "[[signal-search|変調]]のチャンネルの一つ。対象の音動機を獲得できる。", "sources": [{"label": "公式更新情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/166963"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21"},
  {"id": "bangboo-channel", "category": "content", "name": "ボンプチャンネル", "reading": "ぼんぷちゃんねる", "summary": "ボンプを獲得できる変調の種類。", "body": "「優秀なパートナー」などのチャンネルでボンプを獲得できる。", "sources": [{"label": "公式更新情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/161728"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["signal-search"]},
  {"id": "select-store", "category": "content", "name": "セレクトストア", "reading": "せれくとすとあ", "summary": "指定アイテムでエージェントなどを交換できるショップ。", "body": "一部のS級エージェント、S級音動機や音動機マスターチップを交換できる。", "sources": [{"label": "公式更新情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/161728"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["w-engine-master-chip"]},
  {"id": "w-engine-residual-chip", "category": "content", "name": "音動機の残余チップ", "reading": "おんどうきのざんよちっぷ", "summary": "音動機のリサイクルなどで得られるアイテム。", "body": "A級音動機を分解する際に改良ランクに応じて獲得でき、音動機マスターチップとの交換にも使える。", "sources": [{"label": "公式更新情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/161728"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["w-engine-recycling"]},
  {"id": "w-engine-recycling", "category": "content", "name": "音動機のリサイクル", "reading": "おんどうきのりさいくる", "summary": "音動機を分解する機能。", "body": "六分街のホビーショップや音動機倉庫で利用できる。A級音動機の分解では改良ランクに応じた残余チップを得られる。", "sources": [{"label": "公式更新情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/161728"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21"},
  {"id": "lost-void-license", "category": "content", "name": "ライセンスレベル", "reading": "らいせんすれべる", "summary": "迷いの地の進行に関わるレベル。", "body": "[[lost-void]]で上げることで、ボンプなどを獲得できる。", "sources": [{"label": "公式更新情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/127445"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21"},
  {"id": "hollow-zero-bounty", "category": "content", "name": "懸賞依頼", "reading": "けんしょういらい", "summary": "零号ホロウの報酬に関わる依頼。", "body": "[[lost-void]]の懸賞依頼ではシャドウ結晶のデータが進行に関わる。", "sources": [{"label": "公式更新情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/127445"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21"},
  {"id": "hangout", "category": "content", "name": "親友とのお出かけ", "reading": "しんゆうとのおでかけ", "summary": "エージェントとの交流イベント。", "body": "対応するエージェントを招集し、必要なストーリーを進めることで開放される。", "sources": [{"label": "公式更新情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/154662"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["agent-trust"]},
  {"id": "hobby-shop", "category": "place", "name": "ホビーショップ", "reading": "ほびーしょっぷ", "summary": "六分街にある音動機を扱う店。", "body": "[[sixth-street]]にあり、音動機のリサイクルを利用できる。", "sources": [{"label": "公式更新情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/161728"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21"},
  {"id": "w-engine-warehouse", "category": "content", "name": "音動機倉庫", "reading": "おんどうきそうこ", "summary": "所持する音動機に関わる倉庫画面。", "body": "倉庫から開ける画面。音動機のリサイクルを利用できる。", "sources": [{"label": "公式更新情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/161728"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["w-engine-recycling"]},
  {"id": "roscaelifer", "category": "place", "name": "ロスカリファ", "reading": "ろすかりふぁ", "summary": "新エリー都から隔絶された空域機密特区。", "body": "ブーアストラムなどのエリアがある。ロゼッタデータの産出に関わる場所。", "sources": [{"label": "公式更新情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/164775"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21"},
  {"id": "booastrum", "category": "place", "name": "ブーアストラム", "reading": "ぶーあすとらむ", "summary": "ロスカリファにある探索エリア。", "body": "[[roscaelifer]]のエリア。探索を進めるとボンプラネットのコンテンツを開放できる。", "sources": [{"label": "公式更新情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/164775"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21"},
  {"id": "interboo", "category": "content", "name": "ボンプラネット", "reading": "ぼんぷらねっと", "summary": "ロスカリファの探索に関わるシステム。", "body": "[[booastrum]]の探索でコンテンツが開放され、コインナを提出してアカウントレベルを上げられる。", "sources": [{"label": "公式更新情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/164775"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21"},
  {"id": "interboo-coin", "category": "content", "name": "コインナ", "reading": "こいんな", "summary": "ボンプラネットの進行に使うアイテム。", "body": "[[interboo]]に提出するとアカウントレベルを上げられる。", "sources": [{"label": "公式更新情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/164775"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21"},
  {"id": "orbit-rail", "category": "content", "name": "オービットレール", "reading": "おーびっとれーる", "summary": "ロスカリファで使える移動手段。", "body": "空間移動の能力を利用して目的の場所へ素早く移動する。", "sources": [{"label": "公式更新情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/164775"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["roscaelifer"]},
  {"id": "panoramic-view-terminal", "category": "content", "name": "全域視野端末権限", "reading": "ぜんいきしやたんまつけんげん", "summary": "ロスカリファの監視カメラを利用する権限。", "body": "監視カメラから広い視野を得て、対象をスキャンし情報にアクセスできる。", "sources": [{"label": "公式更新情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/164775"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["roscaelifer"]},
  {"id": "bangboo-drone", "category": "content", "name": "ボンプドローン", "reading": "ぼんぷどろーん", "summary": "イアスを操作して利用するドローン。", "body": "移動や対象への干渉が可能。チャージとチャージ爆破のスキルを持つ。", "sources": [{"label": "公式更新情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/164775"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["hdd"]},
  {"id": "singular-leak", "category": "world", "name": "シンギュラ・リーク", "reading": "しんぎゅらりーく", "summary": "周囲の空間や対象に変化をもたらす現象。", "body": "発生すると周囲の空間、物体、敵に変化が生じる。", "sources": [{"label": "公式更新情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/164775"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["hollow"]},
  {"id": "eridu-weekly", "category": "content", "name": "エリー週記", "reading": "えりーしゅうき", "summary": "週ごとの任務を確認できる項目。", "body": "毎週更新される任務の内容を確認できる。", "sources": [{"label": "公式更新情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/127445"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["quick-handbook"]},
  {"id": "inspector-mewmew", "category": "being", "name": "にゃんきち長官", "reading": "にゃんきちちょうかん", "summary": "街区で探索に関する挑戦を案内する存在。", "body": "各街区のノートを通じ、依頼やボンプ修理などの挑戦とメダルに関わる。", "sources": [{"label": "公式更新情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/127445"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["sixth-street"]},
  {"id": "central-computing-department", "category": "place", "name": "算理中枢局", "reading": "さんりちゅうすうきょく", "summary": "ロスカリファに追加されたエリア。", "body": "[[roscaelifer]]で探索できるエリアの一つ。", "sources": [{"label": "公式更新情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/164775"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21"},
  {"id": "sunken-corridor", "category": "place", "name": "サンクン・コリドー", "reading": "さんくんこりどー", "summary": "ロスカリファに追加されたエリア。", "body": "[[roscaelifer]]で探索できるエリアの一つ。", "sources": [{"label": "公式更新情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/164775"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21"},
  {"id": "energy-district", "category": "place", "name": "エネルギー区", "reading": "えねるぎーく", "summary": "ロスカリファに追加されたエリア。", "body": "[[roscaelifer]]で探索できるエリアの一つ。", "sources": [{"label": "公式更新情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/164775"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21"},
  {"id": "snack-box", "category": "content", "name": "おやつボックス", "reading": "おやつぼっくす", "summary": "ロスカリファで引けるボックス。", "body": "Roarin' Brekkiesで引くとデータカードと報酬を獲得できる。占い・スクラッチと利用回数を共有する。", "sources": [{"label": "公式更新情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/164775"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["roscaelifer"]},
];
