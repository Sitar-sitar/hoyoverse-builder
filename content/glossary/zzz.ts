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
  {"id": "branch-blade-song", "category": "growth", "name": "折枝の刀歌", "reading": "おりえだのとうか", "summary": "定期掃討で獲得できるドライバディスク。", "body": "Ver.1.4で追加された「モンスター・デュエット」に挑戦すると獲得できる[[drive-disc]]の一つ。", "sources": [{"label": "公式アップデート情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/127445"}], "gameVersion": "1.4", "dataAsOf": "2026-11-21", "related": ["drive-disc"]},
  {"id": "astral-voice", "category": "growth", "name": "静寂のアストラ", "reading": "せいじゃくのあすとら", "summary": "定期掃討で獲得できるドライバディスク。", "body": "Ver.1.4で追加された「モンスター・デュエット」に挑戦すると獲得できる[[drive-disc]]の一つ。", "sources": [{"label": "公式アップデート情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/127445"}], "gameVersion": "1.4", "dataAsOf": "2026-11-21", "related": ["drive-disc"]},
  {"id": "shadow-harmony", "category": "growth", "name": "シャドウハーモニー", "reading": "しゃどうはーもにー", "summary": "Ver.1.6で追加されたドライバディスク。", "body": "Ver.1.6の公式更新情報で追加が案内された[[drive-disc]]。", "sources": [{"label": "公式アップデート情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/154662"}], "gameVersion": "1.6", "dataAsOf": "2026-11-21", "related": ["drive-disc"]},
  {"id": "phaethons-melody", "category": "growth", "name": "「パエトーン」の歌", "reading": "ぱえとーんのうた", "summary": "Ver.1.6で追加されたドライバディスク。", "body": "Ver.1.6の公式更新情報で追加が案内された[[drive-disc]]。", "sources": [{"label": "公式アップデート情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/154662"}], "gameVersion": "1.6", "dataAsOf": "2026-11-21", "related": ["drive-disc"]},
  {"id": "white-water-ballad", "category": "growth", "name": "純白の行歌", "reading": "じゅんぱくのこうか", "summary": "区域防衛で獲得できるドライバディスク。", "body": "[[routine-cleanup]]の「幻惑と鉄壁」に挑戦すると獲得できる[[drive-disc]]の一つ。", "sources": [{"label": "公式アップデート情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/161728"}], "gameVersion": "2.5", "dataAsOf": "2026-11-21", "related": ["drive-disc"]},
  {"id": "shining-aria", "category": "growth", "name": "流光のアリア", "reading": "りゅうこうのありあ", "summary": "区域防衛で獲得できるドライバディスク。", "body": "[[routine-cleanup]]の「幻惑と鉄壁」に挑戦すると獲得できる[[drive-disc]]の一つ。", "sources": [{"label": "公式アップデート情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/161728"}], "gameVersion": "2.5", "dataAsOf": "2026-11-21", "related": ["drive-disc"]},
  {"id": "wind-salon", "category": "growth", "name": "風鳴りのサロン", "reading": "かぜなりのさろん", "summary": "区域防衛で獲得できるドライバディスク。", "body": "[[routine-cleanup]]の「パイロット&アーマード」に挑戦すると獲得できる[[drive-disc]]の一つ。", "sources": [{"label": "公式アップデート情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/164775"}], "gameVersion": "3.0", "dataAsOf": "2026-11-21", "related": ["drive-disc"]},
  {"id": "dawn-travelogue", "category": "growth", "name": "夜明けの紀行", "reading": "よあけのきこう", "summary": "区域防衛で獲得できるドライバディスク。", "body": "[[routine-cleanup]]の「パイロット&アーマード」に挑戦すると獲得できる[[drive-disc]]の一つ。", "sources": [{"label": "公式アップデート情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/164775"}], "gameVersion": "3.0", "dataAsOf": "2026-11-21", "related": ["drive-disc"]},
  {"id": "chaotic-metal", "category": "growth", "name": "混沌のヘヴィメタル", "reading": "こんとんのへゔぃめたる", "summary": "エーテル属性ダメージに関わるドライバディスク。", "body": "[[drive-disc]]のセットの一つ。2セット効果はエーテル属性ダメージを強化する。4セット効果はセットごとに異なる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* セット効果（補助）", "url": "https://wikiwiki.jp/zenless/ドライバディスク/セット効果"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["drive-disc"]},
  {"id": "swing-jazz", "category": "growth", "name": "スイング・ジャズ", "reading": "すいんぐじゃず", "summary": "エネルギー自動回復に関わるドライバディスク。", "body": "[[drive-disc]]のセットの一つ。2セット効果はエネルギー自動回復を強化する。4セット効果はセットごとに異なる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* セット効果（補助）", "url": "https://wikiwiki.jp/zenless/ドライバディスク/セット効果"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["drive-disc"]},
  {"id": "fanged-metal", "category": "growth", "name": "獣牙のヘヴィメタル", "reading": "じゅうがのへゔぃめたる", "summary": "物理属性ダメージに関わるドライバディスク。", "body": "[[drive-disc]]のセットの一つ。2セット効果は物理属性ダメージを強化する。4セット効果はセットごとに異なる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* セット効果（補助）", "url": "https://wikiwiki.jp/zenless/ドライバディスク/セット効果"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["drive-disc"]},
  {"id": "hormone-punk", "category": "growth", "name": "ホルモン・パンク", "reading": "ほるもんぱんく", "summary": "攻撃力に関わるドライバディスク。", "body": "[[drive-disc]]のセットの一つ。2セット効果は攻撃力を強化する。4セット効果はセットごとに異なる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* セット効果（補助）", "url": "https://wikiwiki.jp/zenless/ドライバディスク/セット効果"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["drive-disc"]},
  {"id": "thunder-metal", "category": "growth", "name": "霹靂のヘヴィメタル", "reading": "へきれきのへゔぃめたる", "summary": "電気属性ダメージに関わるドライバディスク。", "body": "[[drive-disc]]のセットの一つ。2セット効果は電気属性ダメージを強化する。4セット効果はセットごとに異なる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* セット効果（補助）", "url": "https://wikiwiki.jp/zenless/ドライバディスク/セット効果"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["drive-disc"]},
  {"id": "shockstar-disco", "category": "growth", "name": "ショックスター・ディスコ", "reading": "しょっくすたーでぃすこ", "summary": "衝撃力に関わるドライバディスク。", "body": "[[drive-disc]]のセットの一つ。2セット効果は衝撃力を強化する。4セット効果はセットごとに異なる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* セット効果（補助）", "url": "https://wikiwiki.jp/zenless/ドライバディスク/セット効果"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["drive-disc"]},
  {"id": "woodpecker-electro", "category": "growth", "name": "ウッドペッカー・エレクトロ", "reading": "うっどぺっかーえれくとろ", "summary": "会心率に関わるドライバディスク。", "body": "[[drive-disc]]のセットの一つ。2セット効果は会心率を強化する。4セット効果はセットごとに異なる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* セット効果（補助）", "url": "https://wikiwiki.jp/zenless/ドライバディスク/セット効果"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["drive-disc"]},
  {"id": "soul-rock", "category": "growth", "name": "ソウル・ロック", "reading": "そうるろっく", "summary": "防御力に関わるドライバディスク。", "body": "[[drive-disc]]のセットの一つ。2セット効果は防御力を強化する。4セット効果はセットごとに異なる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* セット効果（補助）", "url": "https://wikiwiki.jp/zenless/ドライバディスク/セット効果"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["drive-disc"]},
  {"id": "inferno-metal", "category": "growth", "name": "炎獄のヘヴィメタル", "reading": "えんごくのへゔぃめたる", "summary": "炎属性ダメージに関わるドライバディスク。", "body": "[[drive-disc]]のセットの一つ。2セット効果は炎属性ダメージを強化する。4セット効果はセットごとに異なる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* セット効果（補助）", "url": "https://wikiwiki.jp/zenless/ドライバディスク/セット効果"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["drive-disc"]},
  {"id": "puffer-electro", "category": "growth", "name": "パファー・エレクトロ", "reading": "ぱふぁーえれくとろ", "summary": "貫通率に関わるドライバディスク。", "body": "[[drive-disc]]のセットの一つ。2セット効果は貫通率を強化する。4セット効果はセットごとに異なる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* セット効果（補助）", "url": "https://wikiwiki.jp/zenless/ドライバディスク/セット効果"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["drive-disc"]},
  {"id": "polar-metal", "category": "growth", "name": "極地のヘヴィメタル", "reading": "きょくちのへゔぃめたる", "summary": "氷属性ダメージに関わるドライバディスク。", "body": "[[drive-disc]]のセットの一つ。2セット効果は氷属性ダメージを強化する。4セット効果はセットごとに異なる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* セット効果（補助）", "url": "https://wikiwiki.jp/zenless/ドライバディスク/セット効果"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["drive-disc"]},
  {"id": "freedom-blues", "category": "growth", "name": "フリーダム・ブルース", "reading": "ふりーだむぶるーす", "summary": "異常マスタリーに関わるドライバディスク。", "body": "[[drive-disc]]のセットの一つ。2セット効果は異常マスタリーを強化する。4セット効果はセットごとに異なる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* セット効果（補助）", "url": "https://wikiwiki.jp/zenless/ドライバディスク/セット効果"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["drive-disc"]},
  {"id": "chaos-jazz", "category": "growth", "name": "ケイオス・ジャズ", "reading": "けいおすじゃず", "summary": "異常マスタリーに関わるドライバディスク。", "body": "[[drive-disc]]のセットの一つ。2セット効果は異常マスタリーを強化する。4セット効果はセットごとに異なる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* セット効果（補助）", "url": "https://wikiwiki.jp/zenless/ドライバディスク/セット効果"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["drive-disc"]},
  {"id": "proto-punk", "category": "growth", "name": "プロト・パンク", "reading": "ぷろとぱんく", "summary": "シールド生成量に関わるドライバディスク。", "body": "[[drive-disc]]のセットの一つ。2セット効果はシールド生成量を強化する。4セット効果はセットごとに異なる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* セット効果（補助）", "url": "https://wikiwiki.jp/zenless/ドライバディスク/セット効果"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["drive-disc"]},
  {"id": "yunkui-tales", "category": "growth", "name": "雲嶽は我に似たり", "reading": "うんがくはわれににたり", "summary": "HPに関わるドライバディスク。", "body": "[[drive-disc]]のセットの一つ。2セット効果はHPを強化する。4セット効果はセットごとに異なる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* セット効果（補助）", "url": "https://wikiwiki.jp/zenless/ドライバディスク/セット効果"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["drive-disc"]},
  {"id": "king-of-the-summit", "category": "growth", "name": "大山を統べる者", "reading": "たいざんをすべるもの", "summary": "攻撃によるブレイク値に関わるドライバディスク。", "body": "[[drive-disc]]のセットの一つ。2セット効果は攻撃によるブレイク値を強化する。4セット効果はセットごとに異なる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* セット効果（補助）", "url": "https://wikiwiki.jp/zenless/ドライバディスク/セット効果"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["drive-disc"]},
  {"id": "dawns-bloom", "category": "growth", "name": "暁に咲く花", "reading": "あかつきにさくはな", "summary": "通常攻撃の与ダメージに関わるドライバディスク。", "body": "[[drive-disc]]のセットの一つ。2セット効果は通常攻撃の与ダメージを強化する。4セット効果はセットごとに異なる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* セット効果（補助）", "url": "https://wikiwiki.jp/zenless/ドライバディスク/セット効果"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["drive-disc"]},
  {"id": "moonlight-lullaby", "category": "growth", "name": "月光騎士の讃歌", "reading": "げっこうきしのさんか", "summary": "エネルギー自動回復に関わるドライバディスク。", "body": "[[drive-disc]]のセットの一つ。2セット効果はエネルギー自動回復を強化する。4セット効果はセットごとに異なる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* セット効果（補助）", "url": "https://wikiwiki.jp/zenless/ドライバディスク/セット効果"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["drive-disc"]},
  {"id": "bunny-in-wonderland", "category": "growth", "name": "雪うさぎワンダーランド", "reading": "ゆきうさぎわんだーらんど", "summary": "HPに関わるドライバディスク。", "body": "[[drive-disc]]のセットの一つ。2セット効果はHPを強化する。4セット効果はセットごとに異なる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* セット効果（補助）", "url": "https://wikiwiki.jp/zenless/ドライバディスク/セット効果"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["drive-disc"]},
  {"id": "notes-from-the-chained", "category": "growth", "name": "獄中の手記", "reading": "ごくちゅうのしゅき", "summary": "氷属性ダメージに関わるドライバディスク。", "body": "[[drive-disc]]のセットの一つ。2セット効果は氷属性ダメージを強化する。4セット効果はセットごとに異なる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* セット効果（補助）", "url": "https://wikiwiki.jp/zenless/ドライバディスク/セット効果"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["drive-disc"]},
  {"id": "feathered-fate", "category": "growth", "name": "契る翼の運命", "reading": "ちぎるつばさのうんめい", "summary": "異常マスタリーに関わるドライバディスク。", "body": "[[drive-disc]]のセットの一つ。2セット効果は異常マスタリーを強化する。4セット効果はセットごとに異なる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* セット効果（補助）", "url": "https://wikiwiki.jp/zenless/ドライバディスク/セット効果"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["drive-disc"]},
  {"id": "thorned-rose", "category": "growth", "name": "棘まとう薔薇", "reading": "とげまとうばら", "summary": "防御力に関わるドライバディスク。", "body": "[[drive-disc]]のセットの一つ。2セット効果は防御力を強化する。4セット効果はセットごとに異なる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* セット効果（補助）", "url": "https://wikiwiki.jp/zenless/ドライバディスク/セット効果"}], "gameVersion": "3.3", "dataAsOf": "2026-11-21", "related": ["drive-disc"]},
  {"id": "hizuki-no-ginkan", "category": "growth", "name": "緋月の銀棺", "reading": "ひづきのぎんかん", "summary": "撃破向けのS級音動機。", "body": "「[[stun-specialty]]」向けの[[w-engine]]。Ver.3.2の[[w-engine-channel]]で期間限定で登場した。", "sources": [{"label": "公式 アップデート・変調情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/166475"}], "gameVersion": "3.2", "dataAsOf": "2026-11-24"},
  {"id": "frost-crescent", "category": "growth", "name": "フロスト・クレセント", "reading": "ふろすとくれせんと", "summary": "異常向けのS級音動機。", "body": "「[[anomaly]]」向けの[[w-engine]]。Ver.3.2の[[w-engine-channel]]で期間限定で登場した。", "sources": [{"label": "公式 アップデート・変調情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/166475"}], "gameVersion": "3.2", "dataAsOf": "2026-11-24"},
  {"id": "housekeeper", "category": "growth", "name": "ハウスキーパー", "reading": "はうすきーぱー", "summary": "強攻向けのA級音動機。", "body": "「[[attack]]」向けの[[w-engine]]。Ver.3.2の[[w-engine-channel]]で受信確率アップの対象になった。", "sources": [{"label": "公式 アップデート・変調情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/166475"}], "gameVersion": "3.2", "dataAsOf": "2026-11-24"},
  {"id": "starlight-engine-replica", "category": "growth", "name": "なんちゃってスターライトエンジン", "reading": "なんちゃってすたーらいとえんじん", "summary": "強攻向けのA級音動機。", "body": "「[[attack]]」向けの[[w-engine]]。Ver.3.2の[[w-engine-channel]]で受信確率アップの対象になった。", "sources": [{"label": "公式 アップデート・変調情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/166475"}], "gameVersion": "3.2", "dataAsOf": "2026-11-24"},
  {"id": "tsumi-toraeru-rogoku", "category": "growth", "name": "罪捕らえる牢獄", "reading": "つみとらえるろうごく", "summary": "強攻向けのS級音動機。", "body": "「[[attack]]」向けの[[w-engine]]。Ver.3.3の[[w-engine-channel]]で期間限定で登場した。", "sources": [{"label": "公式 アップデート・変調情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/167269"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "ace-no-otomo", "category": "growth", "name": "エースのオトモ", "reading": "えーすのおとも", "summary": "撃破向けのS級音動機。", "body": "「[[stun-specialty]]」向けの[[w-engine]]。Ver.3.3の[[w-engine-channel]]で期間限定で登場した。", "sources": [{"label": "公式 アップデート・変調情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/167269"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "shinku-no-katsubo", "category": "growth", "name": "深紅の渇望", "reading": "しんくのかつぼう", "summary": "鋭御向けのS級音動機。", "body": "「鋭御」の[[specialty|特性]]に対応する[[w-engine]]。Ver.3.2の[[w-engine-channel]]で期間限定で登場した。", "sources": [{"label": "公式 アップデート・変調情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/165979"}], "gameVersion": "3.2", "dataAsOf": "2026-11-24"},
  {"id": "moso-discotheque", "category": "growth", "name": "妄想ディスコテック", "reading": "もうそうでぃすこてっく", "summary": "撃破向けのS級音動機。", "body": "「[[stun-specialty]]」向けの[[w-engine]]。Ver.3.2の[[w-engine-channel]]で期間限定で登場した。", "sources": [{"label": "公式 アップデート・変調情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/165979"}], "gameVersion": "3.2", "dataAsOf": "2026-11-24"},
  {"id": "drill-rig-red-axis", "category": "growth", "name": "ドリルリグ-レッドシャフト", "reading": "どりるりぐれっどしゃふと", "summary": "強攻向けのA級音動機。", "body": "「[[attack]]」向けの[[w-engine]]。Ver.3.2の[[w-engine-channel]]で受信確率アップの対象になった。", "sources": [{"label": "公式 アップデート・変調情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/165979"}], "gameVersion": "3.2", "dataAsOf": "2026-11-24"},
  {"id": "the-vault", "category": "growth", "name": "ザ・ボールト", "reading": "ざぼーると", "summary": "支援向けのA級音動機。", "body": "「[[support]]」向けの[[w-engine]]。Ver.3.2の[[w-engine-channel]]で受信確率アップの対象になった。", "sources": [{"label": "公式 アップデート・変調情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/165979"}], "gameVersion": "3.2", "dataAsOf": "2026-11-24"},
  {"id": "tensei-no-enyoku", "category": "growth", "name": "転生の炎翼", "reading": "てんせいのえんよく", "summary": "異常向けのS級音動機。", "body": "「[[anomaly]]」向けの[[w-engine]]。Ver.3.3の[[w-engine-channel]]で期間限定で登場した。", "sources": [{"label": "公式 アップデート・変調情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/166926"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "kinran-no-kokoro", "category": "growth", "name": "金襴の心", "reading": "きんらんのこころ", "summary": "異常向けのS級音動機。", "body": "「[[anomaly]]」向けの[[w-engine]]。Ver.3.3の[[w-engine-channel]]で期間限定で登場した。", "sources": [{"label": "公式 アップデート・変調情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/166926"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "roaring-ride", "category": "growth", "name": "グロウル・マイ・カー", "reading": "ぐろうるまいかー", "summary": "異常向けのA級音動機。", "body": "「[[anomaly]]」向けの[[w-engine]]。Ver.3.0の[[w-engine-channel]]で受信確率アップの対象になった。", "sources": [{"label": "公式 アップデート・変調情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/164735"}], "gameVersion": "3.0", "dataAsOf": "2026-11-24"},
  {"id": "koko-saiun", "category": "growth", "name": "孤光彩雲", "reading": "ここうさいうん", "summary": "強攻向けのS級音動機。", "body": "「[[attack]]」向けの[[w-engine]]。Ver.3.0の[[w-engine-channel]]で期間限定で登場した。", "sources": [{"label": "公式 アップデート・変調情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/164735"}], "gameVersion": "3.0", "dataAsOf": "2026-11-24"},
  {"id": "candle-trick", "category": "growth", "name": "キャンドル・トリック", "reading": "きゃんどるとりっく", "summary": "鋭御向けのA級音動機。", "body": "「鋭御」の[[specialty|特性]]に対応する[[w-engine]]。Ver.3.3のアップデートで追加された。", "sources": [{"label": "公式 アップデート・変調情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/166963"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "taiyo-no-nukegara", "category": "growth", "name": "太陽の抜け殻", "reading": "たいようのぬけがら", "summary": "強攻向けのS級音動機。", "body": "「[[attack]]」向けの[[w-engine]]。メインストーリーを進めて開放する[[interboo]]のレベルアップ報酬。", "sources": [{"label": "公式 アップデート・変調情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/164775"}], "gameVersion": "3.0", "dataAsOf": "2026-11-24"},
  {"id": "omoi-ga-orinasu-uta", "category": "growth", "name": "想いが織りなす歌", "reading": "おもいがおりなすうた", "summary": "支援向けのS級音動機。", "body": "「[[support]]」向けの[[w-engine]]。Ver.2.6の[[w-engine-channel]]で期間限定で登場した。", "sources": [{"label": "公式 アップデート・変調情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/162496"}], "gameVersion": "2.6", "dataAsOf": "2026-11-24"},
  {"id": "seimei-no-torikago", "category": "growth", "name": "青溟の鳥籠", "reading": "せいめいのとりかご", "summary": "命破向けのS級音動機。", "body": "「[[rupture]]」向けの[[w-engine]]。Ver.2.6の[[w-engine-channel]]で期間限定で登場した。", "sources": [{"label": "公式 アップデート・変調情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/162496"}], "gameVersion": "2.6", "dataAsOf": "2026-11-24"},
  {"id": "starlight-visor", "category": "growth", "name": "スターライトバイザー", "reading": "すたーらいとばいざー", "summary": "命破向けのS級音動機。", "body": "「[[rupture]]」向けの[[w-engine]]。Ver.2.8の[[w-engine-channel]]で期間限定で登場した。", "sources": [{"label": "公式 アップデート・変調情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/164360"}], "gameVersion": "2.8", "dataAsOf": "2026-11-24"},
  {"id": "wrathful-tussle", "category": "growth", "name": "憤怒の銃騒", "reading": "ふんぬのじゅうそう", "summary": "強攻向けのS級音動機。", "body": "「[[attack]]」向けの[[w-engine]]。Ver.2.8の[[w-engine-channel]]で期間限定で登場した。", "sources": [{"label": "公式 アップデート・変調情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/164360"}], "gameVersion": "2.8", "dataAsOf": "2026-11-24"},
  {"id": "mezameshi-tsubasa-no-seika", "category": "growth", "name": "目覚めし翼の聖歌", "reading": "めざめしつばさのせいか", "summary": "異常向けのS級音動機。", "body": "「[[anomaly]]」向けの[[w-engine]]。Ver.3.1の[[w-engine-channel]]で期間限定で登場した。", "sources": [{"label": "公式 アップデート・変調情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/165410"}], "gameVersion": "3.1", "dataAsOf": "2026-11-24"},
  {"id": "kara-no-naka-no-tamashii", "category": "growth", "name": "殻の中の魂", "reading": "からのなかのたましい", "summary": "異常向けのS級音動機。", "body": "「[[anomaly]]」向けの[[w-engine]]。Ver.3.1の[[w-engine-channel]]で期間限定で登場した。", "sources": [{"label": "公式 アップデート・変調情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/165410"}], "gameVersion": "3.1", "dataAsOf": "2026-11-24"},
  {"id": "hailstorm-shrine", "category": "growth", "name": "あられ落つ星殿", "reading": "あられおつせいでん", "summary": "異常向けのS級音動機。", "body": "「[[anomaly]]」向けの[[w-engine]]。Ver.1.4の[[w-engine-channel]]で期間限定で登場した。", "sources": [{"label": "公式 アップデート・変調情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/127445"}], "gameVersion": "1.4", "dataAsOf": "2026-11-24"},
  {"id": "zanshin-herb-case", "category": "growth", "name": "残心の青籠", "reading": "ざんしんのあおかご", "summary": "強攻向けのS級音動機。", "body": "「[[attack]]」向けの[[w-engine]]。Ver.1.4の[[w-engine-channel]]で期間限定で登場した。", "sources": [{"label": "公式 アップデート・変調情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/127445"}], "gameVersion": "1.4", "dataAsOf": "2026-11-24"},
  {"id": "marcato-desire", "category": "growth", "name": "強音デザイア", "reading": "きょうおんでざいあ", "summary": "強攻向けのA級音動機。", "body": "「[[attack]]」向けの[[w-engine]]。Ver.1.4のアップデートで追加された。", "sources": [{"label": "公式 アップデート・変調情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/127445"}], "gameVersion": "1.4", "dataAsOf": "2026-11-24"},
  {"id": "ro-de-utaiagerareru-yume", "category": "growth", "name": "炉で歌い上げられる夢", "reading": "ろでうたいあげられるゆめ", "summary": "支援向けのS級音動機。", "body": "「[[support]]」向けの[[w-engine]]。Ver.2.8の[[w-engine-channel]]で期間限定で登場した。", "sources": [{"label": "公式 アップデート・変調情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/163855"}], "gameVersion": "2.8", "dataAsOf": "2026-11-24"},
  {"id": "timeweaver", "category": "growth", "name": "刻流の賢者", "reading": "こくりゅうのけんじゃ", "summary": "異常向けのS級音動機。", "body": "「[[anomaly]]」向けの[[w-engine]]。Ver.1.3の[[w-engine-channel]]で期間限定で登場した。", "sources": [{"label": "公式 アップデート・変調情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/126712"}], "gameVersion": "1.3", "dataAsOf": "2026-11-24"},
  {"id": "demara-battery-mark-ii", "category": "growth", "name": "デマラ式電池Ⅱ型", "reading": "でまらしきでんちにがた", "summary": "撃破向けのA級音動機。", "body": "「[[stun-specialty]]」向けの[[w-engine]]。Ver.1.3の[[w-engine-channel]]で受信確率アップの対象になった。", "sources": [{"label": "公式 アップデート・変調情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/126712"}], "gameVersion": "1.3", "dataAsOf": "2026-11-24"},
  {"id": "flamemaker-shaker", "category": "growth", "name": "バーニング・シェイカー", "reading": "ばーにんぐしぇいかー", "summary": "異常向けのS級音動機。", "body": "「[[anomaly]]」向けの[[w-engine]]。Ver.1.2の[[w-engine-channel]]で期間限定で登場した。", "sources": [{"label": "公式 アップデート・変調情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/126372"}], "gameVersion": "1.2", "dataAsOf": "2026-11-24"},
  {"id": "bashful-demon", "category": "growth", "name": "喧嘩腰のボンバルダム", "reading": "けんかごしのぼんばるだむ", "summary": "支援向けのA級音動機。", "body": "「[[support]]」向けの[[w-engine]]。Ver.1.2の[[w-engine-channel]]で受信確率アップの対象になった。", "sources": [{"label": "公式 アップデート・変調情報", "url": "https://zenless.hoyoverse.com/ja-jp/news/126372"}], "gameVersion": "1.2", "dataAsOf": "2026-11-24"},
  {"id": "plugboo", "category": "growth", "name": "プラグノボンプ", "reading": "ぷらぐのぼんぷ", "summary": "戦闘に同行するS級ボンプ。", "body": "編成に加えられる[[bangboo]]。電磁砲で電気ダメージを与える。電気系の編成では連携時の[[attribute-anomaly]]蓄積を伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト ボンプ一覧（補助）", "url": "https://game8.jp/zenless/607547"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "urutora-neivu", "category": "growth", "name": "ウルトラネイヴ", "reading": "うるとらねいゔ", "summary": "戦闘に同行するS級ボンプ。", "body": "編成に加えられる[[bangboo]]。飛行しながら炎の射撃を行う。[[roscaelifer]]陣営の編成でエネルギー回復を支援できる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト ボンプ一覧（補助）", "url": "https://game8.jp/zenless/607547"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "kosan", "category": "growth", "name": "コサン", "reading": "こさん", "summary": "戦闘に同行するS級ボンプ。", "body": "編成に加えられる[[bangboo]]。応援で出場中のメンバーを回復し、[[angels-of-delusion]]との編成では攻撃力も支援できる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト ボンプ一覧（補助）", "url": "https://game8.jp/zenless/607547"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "meme", "category": "growth", "name": "メメ", "reading": "めめ", "summary": "戦闘に同行するS級ボンプ。", "body": "編成に加えられる[[bangboo]]。飛剣で物理攻撃を行う。葉瞬光と組むと「剣」に関わる追加効果を得られる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト ボンプ一覧（補助）", "url": "https://game8.jp/zenless/607547"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "byaku-burikku", "category": "growth", "name": "ビャークブリック", "reading": "びゃーくぶりっく", "summary": "戦闘に同行するS級ボンプ。", "body": "編成に加えられる[[bangboo]]。浮遊ビットのレーザーで物理ダメージと[[stun]]蓄積を与える。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト ボンプ一覧（補助）", "url": "https://game8.jp/zenless/607547"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "mercury", "category": "growth", "name": "マーキュリー", "reading": "まーきゅりー", "summary": "戦闘に同行するS級ボンプ。", "body": "編成に加えられる[[bangboo]]。乗り物を呼び、火炎放射で炎ダメージを与える。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト ボンプ一覧（補助）", "url": "https://game8.jp/zenless/607547"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "miss-esme", "category": "growth", "name": "ミス・エスメ", "reading": "みすえすめ", "summary": "戦闘に同行するS級ボンプ。", "body": "編成に加えられる[[bangboo]]。メンバーが触れるとHPまたはエネルギーが回復するアイテムを生成する。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト ボンプ一覧（補助）", "url": "https://game8.jp/zenless/607547"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "oshi-shi", "category": "growth", "name": "オシシ", "reading": "おしし", "summary": "戦闘に同行するS級ボンプ。", "body": "編成に加えられる[[bangboo]]。跳ね返る石の球で複数の敵を攻撃できる。[[yunkui-summit]]との編成で与ダメージが上がる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト ボンプ一覧（補助）", "url": "https://game8.jp/zenless/607547"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "robin", "category": "growth", "name": "ロビン", "reading": "ろびん", "summary": "戦闘に同行するS級ボンプ。", "body": "編成に加えられる[[bangboo]]。カードの種類によりダメージや[[stun]]蓄積、[[attribute-anomaly]]蓄積が変わる。[[mockingbird]]との編成では出場メンバーの[[specialty]]によってカードを固定できる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト ボンプ一覧（補助）", "url": "https://game8.jp/zenless/607547"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "snap", "category": "growth", "name": "カチャコ", "reading": "かちゃこ", "summary": "戦闘に同行するS級ボンプ。", "body": "編成に加えられる[[bangboo]]。味方の回避反撃や支援行動を撮影し、撮影したメンバーの与ダメージを強化する。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト ボンプ一覧（補助）", "url": "https://game8.jp/zenless/607547"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "agent-gulliver", "category": "growth", "name": "ガリバー隊員", "reading": "がりばーたいいん", "summary": "戦闘に同行するS級ボンプ。", "body": "編成に加えられる[[bangboo]]。前方への射撃で電気ダメージを与え、[[attribute-anomaly]]を蓄積させる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト ボンプ一覧（補助）", "url": "https://game8.jp/zenless/607547"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "red-moccus", "category": "growth", "name": "真紅のモックス", "reading": "しんくのもっくす", "summary": "戦闘に同行するS級ボンプ。", "body": "編成に加えられる[[bangboo]]。バイクで遠くの敵を手前に押し寄せる。[[sons-of-calydon]]と組むと攻撃を強化できる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト ボンプ一覧（補助）", "url": "https://game8.jp/zenless/607547"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "officer-cui", "category": "growth", "name": "ツェイ巡査", "reading": "つぇいじゅんさ", "summary": "戦闘に同行するS級ボンプ。", "body": "編成に加えられる[[bangboo]]。噛みつきによる物理攻撃を行う。[[special-response-team]]との編成で追加攻撃が出ることがある。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト ボンプ一覧（補助）", "url": "https://game8.jp/zenless/607547"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "resonaboo", "category": "growth", "name": "レゾナンボンプ", "reading": "れぞなんぼんぷ", "summary": "戦闘に同行するS級ボンプ。", "body": "編成に加えられる[[bangboo]]。ブラックホールで敵を引き寄せつつ、エーテルダメージと[[attribute-anomaly]]蓄積を与える。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト ボンプ一覧（補助）", "url": "https://game8.jp/zenless/607547"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "bangvolver", "category": "growth", "name": "リボルバボンプ", "reading": "りぼるばぼんぷ", "summary": "戦闘に同行するS級ボンプ。", "body": "編成に加えられる[[bangboo]]。装填された弾の種類により、射撃の威力や挙動が変わる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト ボンプ一覧（補助）", "url": "https://game8.jp/zenless/607547"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "safety", "category": "growth", "name": "ゴアンゼン", "reading": "ごあんぜん", "summary": "戦闘に同行するS級ボンプ。", "body": "編成に加えられる[[bangboo]]。ドリルを使った物理攻撃を行う。[[belobog-heavy-industries]]との編成で連携攻撃が強化される。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト ボンプ一覧（補助）", "url": "https://game8.jp/zenless/607547"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "butler", "category": "growth", "name": "バトラー", "reading": "ばとらー", "summary": "戦闘に同行するS級ボンプ。", "body": "編成に加えられる[[bangboo]]。作ったお茶菓子でメンバーのエネルギーを回復する。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト ボンプ一覧（補助）", "url": "https://game8.jp/zenless/607547"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "sharkboo", "category": "growth", "name": "ガブットボンプ", "reading": "がぶっとぼんぷ", "summary": "戦闘に同行するS級ボンプ。", "body": "編成に加えられる[[bangboo]]。追尾トラップを設置し、敵に氷ダメージを与えて[[attribute-anomaly]]蓄積を増やす。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト ボンプ一覧（補助）", "url": "https://game8.jp/zenless/607547"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "amillion", "category": "growth", "name": "アミリオン", "reading": "あみりおん", "summary": "戦闘に同行するS級ボンプ。", "body": "編成に加えられる[[bangboo]]。機関銃で物理ダメージを与える。[[cunning-hares]]と組むと敵の数に応じて連携攻撃を強化できる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト ボンプ一覧（補助）", "url": "https://game8.jp/zenless/607547"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "rocketboo", "category": "growth", "name": "ハヤスギボンプ", "reading": "はやすぎぼんぷ", "summary": "戦闘に同行するS級ボンプ。", "body": "編成に加えられる[[bangboo]]。ロケットで突進し、爆発で周囲に炎ダメージを与える。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト ボンプ一覧（補助）", "url": "https://game8.jp/zenless/607547"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "booressure", "category": "growth", "name": "キアツデボンプ", "reading": "きあつでぼんぷ", "summary": "戦闘に同行するA級ボンプ。", "body": "編成に加えられる[[bangboo]]。泡を作り、泡に触れたメンバーのエネルギーを回復する。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト ボンプ一覧（補助）", "url": "https://game8.jp/zenless/607547"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "electroboo", "category": "growth", "name": "ビリビリボンプ", "reading": "びりびりぼんぷ", "summary": "戦闘に同行するA級ボンプ。", "body": "編成に加えられる[[bangboo]]。突進後に電撃を繰り出し、電気系の[[attribute-anomaly]]を蓄積させる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト ボンプ一覧（補助）", "url": "https://game8.jp/zenless/607547"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "boollseye", "category": "growth", "name": "ズバットボンプ", "reading": "ずばっとぼんぷ", "summary": "戦闘に同行するA級ボンプ。", "body": "編成に加えられる[[bangboo]]。ダーツを投げて物理ダメージを与える。刺突タイプの味方と組むと連携攻撃が強化される。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト ボンプ一覧（補助）", "url": "https://game8.jp/zenless/607547"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "avocaboo", "category": "growth", "name": "アボカドボンプ", "reading": "あぼかどぼんぷ", "summary": "戦闘に同行するA級ボンプ。", "body": "編成に加えられる[[bangboo]]。ジュース弾に触れたメンバーのHPを回復する。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト ボンプ一覧（補助）", "url": "https://game8.jp/zenless/607547"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "cryboo", "category": "growth", "name": "ウルリンボンプ", "reading": "うるりんぼんぷ", "summary": "戦闘に同行するA級ボンプ。", "body": "編成に加えられる[[bangboo]]。爆弾を投げて炎ダメージと[[attribute-anomaly]]蓄積を与える。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト ボンプ一覧（補助）", "url": "https://game8.jp/zenless/607547"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "excaliboo", "category": "growth", "name": "セイケンボンプ", "reading": "せいけんぼんぷ", "summary": "戦闘に同行するA級ボンプ。", "body": "編成に加えられる[[bangboo]]。剣を使った物理攻撃を行う。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト ボンプ一覧（補助）", "url": "https://game8.jp/zenless/607547"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "paperboo", "category": "growth", "name": "ハコイリボンプ", "reading": "はこいりぼんぷ", "summary": "戦闘に同行するA級ボンプ。", "body": "編成に加えられる[[bangboo]]。段ボール箱で偽装し、敵の攻撃を受けるなどの条件で爆発して物理ダメージを与える。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト ボンプ一覧（補助）", "url": "https://game8.jp/zenless/607547"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "sumoboo", "category": "growth", "name": "オスモウボンプ", "reading": "おすもうぼんぷ", "summary": "戦闘に同行するA級ボンプ。", "body": "編成に加えられる[[bangboo]]。跳び上がって落下打撃を放ち、敵の動作を中断しやすい。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト ボンプ一覧（補助）", "url": "https://game8.jp/zenless/607547"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "exploreboo", "category": "growth", "name": "タンケンボンプ", "reading": "たんけんぼんぷ", "summary": "戦闘に同行するA級ボンプ。", "body": "編成に加えられる[[bangboo]]。採掘結果に応じて、HP回復、シールド、エネルギー回復支援のいずれかを行う。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト ボンプ一覧（補助）", "url": "https://game8.jp/zenless/607547"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "overtimeboo", "category": "growth", "name": "サビザンボンプ", "reading": "さびざんぼんぷ", "summary": "戦闘に同行するA級ボンプ。", "body": "編成に加えられる[[bangboo]]。パソコンデスクをぶつけて物理ダメージを与える。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト ボンプ一覧（補助）", "url": "https://game8.jp/zenless/607547"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "luckyboo", "category": "growth", "name": "オマネキボンプ", "reading": "おまねきぼんぷ", "summary": "戦闘に同行するA級ボンプ。", "body": "編成に加えられる[[bangboo]]。コインを投げつける連続攻撃で物理ダメージを与える。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト ボンプ一覧（補助）", "url": "https://game8.jp/zenless/607547"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "penguinboo", "category": "growth", "name": "ペンギンボンプ", "reading": "ぺんぎんぼんぷ", "summary": "戦闘に同行するA級ボンプ。", "body": "編成に加えられる[[bangboo]]。氷の刃で敵を斬り、氷ダメージと[[attribute-anomaly]]蓄積を与える。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト ボンプ一覧（補助）", "url": "https://game8.jp/zenless/607547"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "brawlerboo", "category": "growth", "name": "カクトウボンプ", "reading": "かくとうぼんぷ", "summary": "戦闘に同行するA級ボンプ。", "body": "編成に加えられる[[bangboo]]。浮遊中に味方が重撃を当てると、急降下して炎ダメージを与える。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト ボンプ一覧（補助）", "url": "https://game8.jp/zenless/607547"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "bagboo", "category": "growth", "name": "フクロノボンプ", "reading": "ふくろのぼんぷ", "summary": "戦闘に同行するA級ボンプ。", "body": "編成に加えられる[[bangboo]]。二丁の包丁による連続斬撃で物理ダメージを与える。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト ボンプ一覧（補助）", "url": "https://game8.jp/zenless/607547"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "knightboo", "category": "growth", "name": "キシドウボンプ", "reading": "きしどうぼんぷ", "summary": "戦闘に同行するA級ボンプ。", "body": "編成に加えられる[[bangboo]]。ナイトスターを出し、触れたメンバーのエネルギーを回復する。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト ボンプ一覧（補助）", "url": "https://game8.jp/zenless/607547"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "baddieboo", "category": "growth", "name": "カチコミボンプ", "reading": "かちこみぼんぷ", "summary": "戦闘に同行するA級ボンプ。", "body": "編成に加えられる[[bangboo]]。ロケットランチャーや火炎瓶で炎ダメージを与える。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト ボンプ一覧（補助）", "url": "https://game8.jp/zenless/607547"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "magnetiboo", "category": "growth", "name": "クッツキボンプ", "reading": "くっつきぼんぷ", "summary": "戦闘に同行するA級ボンプ。", "body": "編成に加えられる[[bangboo]]。敵を引き寄せて物理ダメージを与える。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト ボンプ一覧（補助）", "url": "https://game8.jp/zenless/607547"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "devilboo", "category": "growth", "name": "アクマデボンプ", "reading": "あくまでぼんぷ", "summary": "戦闘に同行するA級ボンプ。", "body": "編成に加えられる[[bangboo]]。空中から追尾弾を撃ち、エーテルダメージと[[attribute-anomaly]]蓄積を与える。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト ボンプ一覧（補助）", "url": "https://game8.jp/zenless/607547"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "steel-cushion", "category": "growth", "name": "鋼の肉球", "reading": "はがねのにくきゅう", "summary": "強攻向けのS級音動機。", "body": "「[[attack]]」向けの[[w-engine]]。物理ダメージを強化し、背後から攻撃を当てると与ダメージも上がる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト S級音動機一覧（補助）", "url": "https://game8.jp/zenless/607736"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "the-brimstone", "category": "growth", "name": "ブリムストーン", "reading": "ぶりむすとーん", "summary": "強攻向けのS級音動機。", "body": "「[[attack]]」向けの[[w-engine]]。通常攻撃やダッシュ攻撃、回避反撃を当てるたびに攻撃力を積み上げられる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト S級音動機一覧（補助）", "url": "https://game8.jp/zenless/607736"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "the-restrained", "category": "growth", "name": "拘縛されし者", "reading": "こうばくされしもの", "summary": "撃破向けのS級音動機。", "body": "「[[stun-specialty]]」向けの[[w-engine]]。攻撃を当てることで通常攻撃のダメージと[[stun]]蓄積を段階的に強化する。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト S級音動機一覧（補助）", "url": "https://game8.jp/zenless/607736"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "hellfire-gears", "category": "growth", "name": "燃獄ギア", "reading": "ねんごくぎあ", "summary": "撃破向けのS級音動機。", "body": "「[[stun-specialty]]」向けの[[w-engine]]。控えにいる間のエネルギー回復を助け、[[ex-special-attack]]を使うと[[impact]]が上がる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト S級音動機一覧（補助）", "url": "https://game8.jp/zenless/607736"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "fusion-compiler", "category": "growth", "name": "複合コンパイラ", "reading": "ふくごうこんぱいら", "summary": "異常向けのS級音動機。", "body": "「[[anomaly]]」向けの[[w-engine]]。攻撃力を上げ、特殊スキルや[[ex-special-attack]]の使用で[[anomaly-proficiency]]を強化する。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト S級音動機一覧（補助）", "url": "https://game8.jp/zenless/607736"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "deep-sea-visitor", "category": "growth", "name": "ディープシー・ビジター", "reading": "でぃーぷしーびじたー", "summary": "強攻向けのS級音動機。", "body": "「[[attack]]」向けの[[w-engine]]。氷ダメージを強化し、通常攻撃や氷のダッシュ攻撃を当てると[[crit-rate]]を上げられる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト S級音動機一覧（補助）", "url": "https://game8.jp/zenless/607736"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "ice-jade-teapot", "category": "growth", "name": "玉壺青氷", "reading": "ぎょっこせいひょう", "summary": "撃破向けのS級音動機。", "body": "「[[stun-specialty]]」向けの[[w-engine]]。通常攻撃の命中で蓄積を得て[[impact]]を強化し、一定の蓄積から味方の与ダメージも伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト S級音動機一覧（補助）", "url": "https://game8.jp/zenless/607736"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "blazing-laurel", "category": "growth", "name": "炎心の桂冠", "reading": "えんしんのけいかん", "summary": "撃破向けのS級音動機。", "body": "「[[stun-specialty]]」向けの[[w-engine]]。[[ex-special-attack]]や[[chain-attack]]などに応じて[[stun]]蓄積を強化する。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト S級音動機一覧（補助）", "url": "https://game8.jp/zenless/607736"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "heartstring-nocturne", "category": "growth", "name": "心弦のノクターン", "reading": "しんげんののくたーん", "summary": "強攻向けのS級音動機。", "body": "「[[attack]]」向けの[[w-engine]]。[[crit-dmg]]を上げ、条件を満たすと[[chain-attack]]や[[ultimate]]で炎耐性を一部無視できる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト S級音動機一覧（補助）", "url": "https://game8.jp/zenless/607736"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "severed-innocence", "category": "growth", "name": "純然たる犠牲", "reading": "じゅんぜんたるぎせい", "summary": "強攻向けのS級音動機。", "body": "「[[attack]]」向けの[[w-engine]]。Ver.1.6の限定[[w-engine]]として告知された。", "sources": [{"label": "公式 Ver.1.6 アップデート", "url": "https://zenless.hoyoverse.com/ja-jp/news/154662"}], "gameVersion": "1.6", "dataAsOf": "2026-11-24"},
  {"id": "spectral-gaze", "category": "growth", "name": "奪魂の瞑目", "reading": "だっこんのめいもく", "summary": "撃破向けのS級音動機。", "body": "「[[stun-specialty]]」向けの[[w-engine]]。Ver.1.6の限定[[w-engine]]として告知された。", "sources": [{"label": "公式 Ver.1.6 アップデート", "url": "https://zenless.hoyoverse.com/ja-jp/news/154662"}], "gameVersion": "1.6", "dataAsOf": "2026-11-24"},
  {"id": "unfettered-game-ball", "category": "growth", "name": "ゲームボール", "reading": "げーむぼーる", "summary": "支援向けのA級音動機。", "body": "「[[support]]」向けの[[w-engine]]。装備者が[[attribute]]相性で有利な攻撃を当てると、味方の[[crit-rate]]を支援できる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 支援音動機（補助）", "url": "https://wikiwiki.jp/zenless/音動機/支援"}], "gameVersion": "3.3", "dataAsOf": "2026-11-24"},
  {"id": "weeping-cradle", "category": "growth", "name": "啜り泣くゆりかご", "reading": "すすりなくゆりかご", "summary": "貫通率が上がる支援向けのS級音動機。", "body": "[[support]]向けの[[w-engine]]。Lv.60では基礎攻撃力が684で、追加で貫通率を24.0%伸ばせる。控え中のエネルギー回復を助け、装備者が攻撃を当てた敵への味方の与ダメージを強化する。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/613934"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "riot-suppressor-mark-vi", "category": "growth", "name": "サプレッサーⅥ型", "reading": "さぷれっさーろくがた", "summary": "会心ダメージが上がる強攻向けのS級音動機。", "body": "[[attack]]向けの[[w-engine]]。Lv.60では基礎攻撃力が713で、追加で[[crit-dmg]]を48.0%伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "公式 変調詳細", "url": "https://zenless.hoyoverse.com/ja-jp/news/124924"}, {"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/613911"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "sharpened-stinger", "category": "growth", "name": "磨き抜かれた切っ先", "reading": "みがきぬかれたきっさき", "summary": "異常マスタリーが上がる異常向けのS級音動機。", "body": "[[anomaly]]向けの[[w-engine]]。Lv.60では基礎攻撃力が713で、追加で[[anomaly-proficiency]]を90伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/633072"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "tusks-of-fury", "category": "growth", "name": "猛進するキバ", "reading": "もうしんするきば", "summary": "衝撃力が上がる防護向けのS級音動機。", "body": "[[defense]]向けの[[w-engine]]。Lv.60では基礎攻撃力が713で、追加で[[impact]]を18%伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/640185"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "elegant-vanity", "category": "growth", "name": "優美のヴァニティ", "reading": "ゆうびのゔぁにてぃ", "summary": "攻撃力が上がる支援向けのS級音動機。", "body": "[[support]]向けの[[w-engine]]。Lv.60では基礎攻撃力が713で、追加で攻撃力を30%伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/664872"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "flight-of-fancy", "category": "growth", "name": "鳥は夢へと羽ばたいて", "reading": "とりはゆめへとはねばたいて", "summary": "異常マスタリーが上がる異常向けのS級音動機。", "body": "[[anomaly]]向けの[[w-engine]]。Lv.60では基礎攻撃力が713で、追加で[[anomaly-proficiency]]を90伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/684034"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "myriad-eclipse", "category": "growth", "name": "千面の落日", "reading": "せんめんのらくじつ", "summary": "会心率が上がる強攻向けのS級音動機。", "body": "[[attack]]向けの[[w-engine]]。Lv.60では基礎攻撃力が713で、追加で[[crit-rate]]を24%伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/687304"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "roaring-furnace", "category": "growth", "name": "招福の虎炉", "reading": "しょうふくのころ", "summary": "攻撃力が上がる撃破向けのS級音動機。", "body": "[[stun-specialty]]向けの[[w-engine]]。Lv.60では基礎攻撃力が713で、追加で攻撃力を30%伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/700329"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "metanukimorphosis", "category": "growth", "name": "狸の七変化", "reading": "たぬきのしちへんげ", "summary": "エネルギー自動回復が上がる支援向けのS級音動機。", "body": "[[support]]向けの[[w-engine]]。Lv.60では基礎攻撃力が713で、追加でエネルギー自動回復を60%伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/706322"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "practiced-perfection", "category": "growth", "name": "十面百錬の星", "reading": "じゅうめんひゃくれんのほし", "summary": "攻撃力が上がる異常向けのS級音動機。", "body": "[[anomaly]]向けの[[w-engine]]。Lv.60では基礎攻撃力が713で、追加で攻撃力を30%伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/709505"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "cordis-germina", "category": "growth", "name": "駆動する種", "reading": "くどうするたね", "summary": "会心率が上がる強攻向けのS級音動機。", "body": "[[attack]]向けの[[w-engine]]。Lv.60では基礎攻撃力が713で、追加で[[crit-rate]]を24%伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/714878"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "krakens-cradle", "category": "growth", "name": "セイレーンクレードル", "reading": "せいれーんくれーどる", "summary": "HPが上がる命破向けのS級音動機。", "body": "[[rupture]]向けの[[w-engine]]。Lv.60では基礎攻撃力が713で、追加でHPを30%伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/736840"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "wrathful-vajra", "category": "growth", "name": "金剛不壊怒髪衝冠", "reading": "こんごうふえどはつしょうかん", "summary": "HPが上がる命破向けのS級音動機。", "body": "[[rupture]]向けの[[w-engine]]。Lv.60では基礎攻撃力が713で、追加でHPを30%伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/750360"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "yesterday-calls", "category": "growth", "name": "昨夜からの着信", "reading": "さくやからのちゃくしん", "summary": "会心率が上がる撃破向けのS級音動機。", "body": "[[stun-specialty]]向けの[[w-engine]]。Lv.60では基礎攻撃力が713で、追加で[[crit-rate]]を24%伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/746013"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "halfsugar-bunny", "category": "growth", "name": "甘さ控えめ雪うさぎ", "reading": "あまさひかえめゆきうさぎ", "summary": "HPが上がる防護向けのS級音動機。", "body": "[[defense]]向けの[[w-engine]]。Lv.60では基礎攻撃力が713で、追加でHPを30%伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/753757"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "bunny-band", "category": "growth", "name": "ラビットチャージャー", "reading": "らびっとちゃーじゃー", "summary": "防御力が上がる防護向けのA級音動機。", "body": "[[defense]]向けの[[w-engine]]。Lv.60では基礎攻撃力が594で、追加で防御力を40%伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/613950"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "weeping-gemini", "category": "growth", "name": "双生の涙", "reading": "そうせいのなみだ", "summary": "攻撃力が上がる異常向けのA級音動機。", "body": "[[anomaly]]向けの[[w-engine]]。Lv.60では基礎攻撃力が594で、追加で攻撃力を25%伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/613943"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "original-transmorpher", "category": "growth", "name": "正規版変身装置", "reading": "せいきばんへんしんそうち", "summary": "HPが上がる防護向けのA級音動機。", "body": "[[defense]]向けの[[w-engine]]。Lv.60では基礎攻撃力が594で、追加でHPを25%伸ばせる。装備者の最大HPを上げ、攻撃を受けた後に一定時間[[impact]]を強化する。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/613949"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "starlight-engine", "category": "growth", "name": "スターライトエンジン", "reading": "すたーらいとえんじん", "summary": "攻撃力が上がる強攻向けのA級音動機。", "body": "[[attack]]向けの[[w-engine]]。Lv.60では基礎攻撃力が594で、追加で攻撃力を25%伸ばせる。回避反撃や[[quick-assist]]の使用後に装備者の攻撃力が上がる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/613920"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "rainforest-gourmet", "category": "growth", "name": "密林の食いしん坊", "reading": "みつりんのくいしんぼう", "summary": "異常マスタリーが上がる異常向けのA級音動機。", "body": "[[anomaly]]向けの[[w-engine]]。Lv.60では基礎攻撃力が594で、追加で[[anomaly-proficiency]]を75伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/613942"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "slice-of-time", "category": "growth", "name": "歳月の薄片", "reading": "さいげつのはくへん", "summary": "貫通率が上がる支援向けのA級音動機。", "body": "[[support]]向けの[[w-engine]]。Lv.60では基礎攻撃力が594で、追加で貫通率を20%伸ばせる。味方の特定の攻撃に合わせて[[decibels]]の獲得を増やし、装備者のエネルギーを回復する。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/613936"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "street-superstar", "category": "growth", "name": "ストリートスター", "reading": "すとりーとすたー", "summary": "攻撃力が上がる強攻向けのA級音動機。", "body": "[[attack]]向けの[[w-engine]]。Lv.60では基礎攻撃力が594で、追加で攻撃力を25%伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/613919"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "hajirau-akumen", "category": "growth", "name": "恥じらう悪面", "reading": "はじらうあくめん", "summary": "攻撃力が上がる支援向けのA級音動機。", "body": "[[support]]向けの[[w-engine]]。Lv.60では基礎攻撃力が624で、追加で攻撃力を25%伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/621413"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "big-cylinder", "category": "growth", "name": "ビガー・シリンダー", "reading": "びがーしりんだー", "summary": "防御力が上がる防護向けのA級音動機。", "body": "[[defense]]向けの[[w-engine]]。Lv.60では基礎攻撃力が624で、追加で防御力を40%伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/613948"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "electrolip-gloss", "category": "growth", "name": "電撃リップグロス", "reading": "でんげきりっぷぐろす", "summary": "異常マスタリーが上がる異常向けのA級音動機。", "body": "[[anomaly]]向けの[[w-engine]]。Lv.60では基礎攻撃力が594で、追加で[[anomaly-proficiency]]を75伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/613941"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "precious-fossilized-core", "category": "growth", "name": "貴重な石化コア", "reading": "きちょうなせきかこあ", "summary": "衝撃力が上がる撃破向けのA級音動機。", "body": "[[stun-specialty]]向けの[[w-engine]]。Lv.60では基礎攻撃力が594で、追加で[[impact]]を15%伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/613928"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "steam-oven", "category": "growth", "name": "まな板の鯉", "reading": "まないたのこい", "summary": "エネルギー自動回復が上がる撃破向けのA級音動機。", "body": "[[stun-specialty]]向けの[[w-engine]]。Lv.60では基礎攻撃力が594で、追加でエネルギー自動回復を50%伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/613927"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "cannon-rotor", "category": "growth", "name": "キャノンローラー", "reading": "きゃのんろーらー", "summary": "会心率が上がる強攻向けのA級音動機。", "body": "[[attack]]向けの[[w-engine]]。Lv.60では基礎攻撃力が594で、追加で[[crit-rate]]を20%伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/613913"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "six-shooter", "category": "growth", "name": "シックスシューター", "reading": "しっくすしゅーたー", "summary": "衝撃力が上がる撃破向けのA級音動機。", "body": "[[stun-specialty]]向けの[[w-engine]]。Lv.60では基礎攻撃力が594で、追加で[[impact]]を15%伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/613924"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "spring-embrace", "category": "growth", "name": "ホットスプリング", "reading": "ほっとすぷりんぐ", "summary": "攻撃力が上がる防護向けのA級音動機。", "body": "[[defense]]向けの[[w-engine]]。Lv.60では基礎攻撃力が594で、追加で攻撃力を25%伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/613947"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "gilded-blossom", "category": "growth", "name": "金メッキの花信", "reading": "きんめっきのかしん", "summary": "攻撃力が上がる強攻向けのA級音動機。", "body": "[[attack]]向けの[[w-engine]]。Lv.60では基礎攻撃力が596で、追加で攻撃力を25%伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/632801"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "peacekeeper-specialized", "category": "growth", "name": "秩序の守り手・特化型", "reading": "ちつじょのまもりてとっかがた", "summary": "攻撃力が上がる防護向けのA級音動機。", "body": "[[defense]]向けの[[w-engine]]。Lv.60では基礎攻撃力が624で、追加で攻撃力を25%伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/637704"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "box-cutter", "category": "growth", "name": "ペーパーカッター", "reading": "ぺーぱーかったー", "summary": "衝撃力が上がる撃破向けのA級音動機。", "body": "[[stun-specialty]]向けの[[w-engine]]。Lv.60では基礎攻撃力が624で、追加で[[impact]]を15%伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "公式 Ver.1.6 アップデート", "url": "https://zenless.hoyoverse.com/ja-jp/news/154662"}, {"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/675702"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "tremor-trigram-vessel", "category": "growth", "name": "雷鳴が如き八卦", "reading": "らいめいがごときはっけ", "summary": "攻撃力が上がる防護向けのA級音動機。", "body": "[[defense]]向けの[[w-engine]]。Lv.60では基礎攻撃力が624で、追加で攻撃力を25%伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/695548"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "puzzle-sphere", "category": "growth", "name": "魔法の立体パズル", "reading": "まほうのりったいぱずる", "summary": "攻撃力が上がる命破向けのA級音動機。", "body": "[[rupture]]向けの[[w-engine]]。Lv.60では基礎攻撃力が594で、追加で攻撃力を25%伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/695547"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "radiowave-journey", "category": "growth", "name": "エレクトロウォーク", "reading": "えれくとろうぉーく", "summary": "HPが上がる命破向けのA級音動機。", "body": "[[rupture]]向けの[[w-engine]]。Lv.60では基礎攻撃力が594で、追加でHPを25%伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/695546"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "reel-projector", "category": "growth", "name": "光と影のカット", "reading": "ひかりとかげのかっと", "summary": "衝撃力が上がる防護向けのA級音動機。", "body": "[[defense]]向けの[[w-engine]]。Lv.60では基礎攻撃力が594で、追加で[[impact]]を15%伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/695755"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "grill-owisp", "category": "growth", "name": "燔火の朧夜", "reading": "はんひのおぼろよ", "summary": "HPが上がる命破向けのA級音動機。", "body": "[[rupture]]向けの[[w-engine]]。Lv.60では基礎攻撃力が624で、追加でHPを25%伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/729657"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "cauldron-of-clarity", "category": "growth", "name": "蒼き波の霊器", "reading": "あおきなみのれいき", "summary": "HPが上がる命破向けのA級音動機。", "body": "[[rupture]]向けの[[w-engine]]。Lv.60では基礎攻撃力が594で、追加でHPを25%伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/753802"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "the-simmering-pot", "category": "growth", "name": "炎々沸々鍋一丁", "reading": "えんえんふつふつなべいっちょう", "summary": "衝撃力が上がる撃破向けのA級音動機。", "body": "[[stun-specialty]]向けの[[w-engine]]。Lv.60では基礎攻撃力が594で、追加で[[impact]]を15%伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/774343"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "boisterous-echoes", "category": "growth", "name": "ドンカツエコー", "reading": "どんかつえこー", "summary": "異常マスタリーが上がる異常向けのA級音動機。", "body": "[[anomaly]]向けの[[w-engine]]。Lv.60では基礎攻撃力が594で、追加で[[anomaly-proficiency]]を75伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/794050"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "catty-luck", "category": "growth", "name": "ニャン運到来", "reading": "にゃんうんとうらい", "summary": "防御力が上がる鋭御向けのA級音動機。", "body": "「鋭御」の[[specialty|特性]]向けの[[w-engine]]。Lv.60では基礎防御力が356で、追加で防御力を40%伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/607435"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "bloodmarrow-coffer", "category": "growth", "name": "ブラッドボックス", "reading": "ぶらっどぼっくす", "summary": "会心率が上がる鋭御向けのA級音動機。", "body": "「鋭御」の[[specialty|特性]]向けの[[w-engine]]。Lv.60では基礎防御力が356で、追加で[[crit-rate]]を20%伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "公式 Ver.3.3 エリーファンド", "url": "https://zenless.hoyoverse.com/m/ja-jp/news/166944"}, {"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/607435"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "identity-inflection", "category": "growth", "name": "「恒等式」-変格", "reading": "こうとうしきへんかく", "summary": "防御力が上がる防護向けのB級音動機。", "body": "[[defense]]向けの[[w-engine]]。Lv.60では基礎攻撃力が475で、追加で防御力を32%伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/613952"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "identity-base", "category": "growth", "name": "「恒等式」-本格", "reading": "こうとうしきほんかく", "summary": "防御力が上がる防護向けのB級音動機。", "body": "[[defense]]向けの[[w-engine]]。Lv.60では基礎攻撃力が475で、追加で防御力を32%伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/613951"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "magnetic-storm-charlie", "category": "growth", "name": "「磁気嵐」-参式", "reading": "じきあらしさんしき", "summary": "貫通率が上がる異常向けのB級音動機。", "body": "[[anomaly]]向けの[[w-engine]]。Lv.60では基礎攻撃力が475で、追加で貫通率を16%伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/613946"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "magnetic-storm-bravo", "category": "growth", "name": "「磁気嵐」-弐式", "reading": "じきあらしにしき", "summary": "異常マスタリーが上がる異常向けのB級音動機。", "body": "[[anomaly]]向けの[[w-engine]]。Lv.60では基礎攻撃力が475で、追加で[[anomaly-proficiency]]を60伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/613945"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "magnetic-storm-alpha", "category": "growth", "name": "「磁気嵐」-壱式", "reading": "じきあらしいっしき", "summary": "攻撃力が上がる異常向けのB級音動機。", "body": "[[anomaly]]向けの[[w-engine]]。Lv.60では基礎攻撃力が475で、追加で攻撃力を20%伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/613944"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "vortex-hatchet", "category": "growth", "name": "「激流」-斧型", "reading": "げきりゅうおのかた", "summary": "エネルギー自動回復が上がる撃破向けのB級音動機。", "body": "[[stun-specialty]]向けの[[w-engine]]。Lv.60では基礎攻撃力が475で、追加でエネルギー自動回復を40%伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/613932"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "vortex-arrow", "category": "growth", "name": "「激流」-矢型", "reading": "げきりゅうやがた", "summary": "衝撃力が上がる撃破向けのB級音動機。", "body": "[[stun-specialty]]向けの[[w-engine]]。Lv.60では基礎攻撃力が475で、追加で[[impact]]を12%伸ばせる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/613931"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "mimic-crab", "category": "being", "name": "ミミック蟹", "reading": "みみっくかに", "summary": "エーテル・氷が弱点の精鋭エネミー。", "body": "「[[ethereal]]」に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・氷。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "baniirekku", "category": "being", "name": "バニーレック", "reading": "ばにーれっく", "summary": "エーテル・氷が弱点の精鋭エネミー。", "body": "「[[ethereal]]」に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・氷。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "thanatos", "category": "being", "name": "タナトス", "reading": "たなとす", "summary": "エーテル・氷が弱点の精鋭エネミー。", "body": "「[[ethereal]]」に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・氷。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "dullahan", "category": "being", "name": "デュラハン", "reading": "でゅらはん", "summary": "エーテル・氷が弱点の精鋭エネミー。", "body": "「[[ethereal]]」に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・氷。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "mushussu", "category": "being", "name": "ムシュフシュ", "reading": "むしゅふしゅ", "summary": "炎・風が弱点の精鋭エネミー。", "body": "「[[ethereal]]」に分類される[[enemies|敵対ターゲット]]。弱点は炎・風。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "lahmu", "category": "being", "name": "ラフム", "reading": "らふむ", "summary": "氷・電気が弱点の精鋭エネミー。", "body": "「[[ethereal]]」に分類される[[enemies|敵対ターゲット]]。弱点は氷・電気。耐性を持つ[[attribute|属性]]は物理。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "tarasque-mixer", "category": "being", "name": "タラスクミキサー", "reading": "たらすくみきさー", "summary": "エーテル・電気が弱点の精鋭エネミー。", "body": "「[[ethereal]]」に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・電気。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "alraune", "category": "being", "name": "アルラウネ", "reading": "あるらうね", "summary": "エーテル・氷が弱点の精鋭エネミー。", "body": "「[[ethereal]]」に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・氷。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "metro-goblin", "category": "being", "name": "メトロゴブリン", "reading": "めとろごぶりん", "summary": "エーテル・氷が弱点の精鋭エネミー。", "body": "「[[ethereal]]」に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・氷。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "armored-hati", "category": "being", "name": "アーマーハティ", "reading": "あーまーはてぃ", "summary": "エーテル・氷が弱点の精鋭エネミー。", "body": "「[[ethereal]]」に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・氷。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "goblin", "category": "being", "name": "ゴブリン", "reading": "ごぶりん", "summary": "エーテル・氷が弱点の精鋭エネミー。", "body": "「[[ethereal]]」に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・氷。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "hati", "category": "being", "name": "ハティ", "reading": "はてぃ", "summary": "エーテル・氷が弱点の精鋭エネミー。", "body": "「[[ethereal]]」に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・氷。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "farbauti", "category": "being", "name": "ファールバウティ", "reading": "ふぁーるばうてぃ", "summary": "エーテル・氷が弱点の精鋭エネミー。", "body": "「[[ethereal]]」に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・氷。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "miazuma-hosha-akavoru", "category": "being", "name": "ミアズマの歩者・アカヴォル", "reading": "みあずまのほしゃあかゔぉる", "summary": "エーテル・物理が弱点の通常エネミー。", "body": "「[[ethereal]]」に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・物理。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "huskron", "category": "being", "name": "ハスクロン", "reading": "はすくろん", "summary": "エーテル・炎が弱点の通常エネミー。", "body": "「[[ethereal]]」に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・炎。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "hitch-spiker", "category": "being", "name": "ヒッチスパイカー", "reading": "ひっちすぱいかー", "summary": "エーテルが弱点の通常エネミー。", "body": "「[[ethereal]]」に分類される[[enemies|敵対ターゲット]]。弱点はエーテル。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "kururru", "category": "being", "name": "クルッル", "reading": "くるっる", "summary": "氷・風が弱点の通常エネミー。", "body": "「[[ethereal]]」に分類される[[enemies|敵対ターゲット]]。弱点は氷・風。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "sorudedousu", "category": "being", "name": "ソルデドゥス", "reading": "そるでどぅす", "summary": "エーテル・氷が弱点の通常エネミー。", "body": "「[[ethereal]]」に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・氷。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "fossoru", "category": "being", "name": "フォッソル", "reading": "ふぉっそる", "summary": "エーテル・氷が弱点の通常エネミー。", "body": "「[[ethereal]]」に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・氷。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "engine-beholder", "category": "being", "name": "エンジンビホルダー", "reading": "えんじんびほるだー", "summary": "エーテル・電気が弱点の通常エネミー。", "body": "「[[ethereal]]」に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・電気。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "specter", "category": "being", "name": "スペクター", "reading": "すぺくたー", "summary": "エーテル・氷が弱点の通常エネミー。", "body": "「[[ethereal]]」に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・氷。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "ahriman", "category": "being", "name": "アフリマン", "reading": "あふりまん", "summary": "エーテル・氷が弱点の通常エネミー。", "body": "「[[ethereal]]」に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・氷。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "mandrake", "category": "being", "name": "マンドレイク", "reading": "まんどれいく", "summary": "エーテル・氷が弱点の通常エネミー。", "body": "「[[ethereal]]」に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・氷。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "blast-spider", "category": "being", "name": "ブラストスパイダー", "reading": "ぶらすとすぱいだー", "summary": "エーテル・氷が弱点の通常エネミー。", "body": "「[[ethereal]]」に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・氷。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "hopuritai", "category": "being", "name": "ホプリタイ", "reading": "ほぷりたい", "summary": "エーテル・氷が弱点の通常エネミー。", "body": "「[[ethereal]]」に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・氷。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "sateyurosu", "category": "being", "name": "サテュロス", "reading": "さてゅろす", "summary": "エーテル・氷が弱点の通常エネミー。", "body": "「[[ethereal]]」に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・氷。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "arupeka", "category": "being", "name": "アルぺカ", "reading": "あるぺか", "summary": "エーテル・氷が弱点の通常エネミー。", "body": "「[[ethereal]]」に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・氷。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "tyrfing", "category": "being", "name": "ティルヴィング", "reading": "てぃるゔぃんぐ", "summary": "エーテル・氷が弱点の通常エネミー。", "body": "「[[ethereal]]」に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・氷。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "bellum", "category": "being", "name": "ベルラム", "reading": "べるらむ", "summary": "炎・物理が弱点の精鋭エネミー。", "body": "「生物」に分類される[[enemies|敵対ターゲット]]。弱点は炎・物理。耐性を持つ[[attribute|属性]]は氷。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "doppelganger-bellum", "category": "being", "name": "ドッペルゲンガー・ベルラム", "reading": "どっぺるげんがーべるらむ", "summary": "物理・炎が弱点の精鋭エネミー。", "body": "「[[ethereal]]」に分類される[[enemies|敵対ターゲット]]。弱点は物理・炎。耐性を持つ[[attribute|属性]]は氷。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "doppelganger-pulchra", "category": "being", "name": "ドッペルゲンガー・プルクラ", "reading": "どっぺるげんがーぷるくら", "summary": "物理・炎が弱点の精鋭エネミー。", "body": "「[[ethereal]]」に分類される[[enemies|敵対ターゲット]]。弱点は物理・炎。耐性を持つ[[attribute|属性]]は氷。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "mors", "category": "being", "name": "モルス", "reading": "もるす", "summary": "炎・物理が弱点の精鋭エネミー。", "body": "「生物」に分類される[[enemies|敵対ターゲット]]。弱点は炎・物理。耐性を持つ[[attribute|属性]]は氷。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "doppelganger-mors", "category": "being", "name": "ドッペルゲンガー・モルス", "reading": "どっぺるげんがーもるす", "summary": "物理・炎が弱点の精鋭エネミー。", "body": "「[[ethereal]]」に分類される[[enemies|敵対ターゲット]]。弱点は物理・炎。耐性を持つ[[attribute|属性]]は氷。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "ikareruotoko", "category": "being", "name": "「怒れる男」", "reading": "いかれるおとこ", "summary": "電気が弱点の精鋭エネミー。", "body": "「機械」に分類される[[enemies|敵対ターゲット]]。弱点は電気。耐性を持つ[[attribute|属性]]は物理。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "naguriya", "category": "being", "name": "殴り屋", "reading": "なぐりや", "summary": "氷・物理が弱点の精鋭エネミー。", "body": "「生物」に分類される[[enemies|敵対ターゲット]]。弱点は氷・物理。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "fudatsuki-naguriya", "category": "being", "name": "札付き殴り屋", "reading": "ふだつきなぐりや", "summary": "炎・物理が弱点の精鋭エネミー。", "body": "「生物」に分類される[[enemies|敵対ターゲット]]。弱点は炎・物理。耐性を持つ[[attribute|属性]]は氷。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "oda-bogyakusha", "category": "being", "name": "殴打暴虐者", "reading": "おうだぼうぎゃくしゃ", "summary": "氷・物理が弱点の精鋭エネミー。", "body": "「生物」に分類される[[enemies|敵対ターゲット]]。弱点は氷・物理。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "fudatsuki-gyakutaikyo", "category": "being", "name": "札付き虐待狂", "reading": "ふだつきぎゃくたいきょう", "summary": "炎・物理が弱点の精鋭エネミー。", "body": "「生物」に分類される[[enemies|敵対ターゲット]]。弱点は炎・物理。耐性を持つ[[attribute|属性]]は氷。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "shugekisha", "category": "being", "name": "襲撃者", "reading": "しゅうげきしゃ", "summary": "氷・物理が弱点の通常エネミー。", "body": "「生物」に分類される[[enemies|敵対ターゲット]]。弱点は氷・物理。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "kishusha", "category": "being", "name": "奇襲者", "reading": "きしゅうしゃ", "summary": "炎・物理が弱点の通常エネミー。", "body": "「生物」に分類される[[enemies|敵対ターゲット]]。弱点は炎・物理。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "mitsuryousha", "category": "being", "name": "密猟者", "reading": "みつりょうしゃ", "summary": "氷・物理が弱点の通常エネミー。", "body": "「生物」に分類される[[enemies|敵対ターゲット]]。弱点は氷・物理。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "touryouhan", "category": "being", "name": "盗猟犯", "reading": "とうりょうはん", "summary": "炎・物理が弱点の通常エネミー。", "body": "「生物」に分類される[[enemies|敵対ターゲット]]。弱点は炎・物理。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "houkama", "category": "being", "name": "放火魔", "reading": "ほうかま", "summary": "氷・物理が弱点の通常エネミー。", "body": "「生物」に分類される[[enemies|敵対ターゲット]]。弱点は氷・物理。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "shoukyakukyou", "category": "being", "name": "焼却狂", "reading": "しょうきゃくきょう", "summary": "炎・物理が弱点の通常エネミー。", "body": "「生物」に分類される[[enemies|敵対ターゲット]]。弱点は炎・物理。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "ryakudatsusha", "category": "being", "name": "略奪者", "reading": "りゃくだつしゃ", "summary": "氷・物理が弱点の通常エネミー。", "body": "「生物」に分類される[[enemies|敵対ターゲット]]。弱点は氷・物理。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "godatsusha", "category": "being", "name": "強奪者", "reading": "ごうだつしゃ", "summary": "炎・物理が弱点の通常エネミー。", "body": "「生物」に分類される[[enemies|敵対ターゲット]]。弱点は炎・物理。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "hi-wo-obishi-sendosha", "category": "being", "name": "火を帯びし先導者", "reading": "ひをおびしせんどうしゃ", "summary": "炎・物理が弱点の精鋭エネミー。", "body": "「生物」に分類される[[enemies|敵対ターゲット]]。弱点は炎・物理。耐性を持つ[[attribute|属性]]は電気。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "kyouakukyoujin", "category": "being", "name": "凶悪狂人", "reading": "きょうあくきょうじん", "summary": "炎が弱点の精鋭エネミー。", "body": "「[[ethereal]]」に分類される[[enemies|敵対ターゲット]]。弱点は炎。耐性を持つ[[attribute|属性]]は電気。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "raisansha", "category": "being", "name": "礼賛者", "reading": "らいさんしゃ", "summary": "炎・物理が弱点の通常エネミー。", "body": "「生物」に分類される[[enemies|敵対ターゲット]]。弱点は炎・物理。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "goyoku-shashu", "category": "being", "name": "強欲射手", "reading": "ごうよくしゃしゅ", "summary": "炎が弱点の通常エネミー。", "body": "「[[ethereal]]」に分類される[[enemies|敵対ターゲット]]。弱点は炎。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "vortex-revolver", "category": "growth", "name": "「激流」-銃型", "reading": "げきりゅうじゅうがた", "summary": "攻撃力が上がる撃破向けのB級音動機。", "body": "[[stun-specialty]]向けの[[w-engine]]。Lv.60では基礎攻撃力が475で、攻撃力が20%上がる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/613930"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "reverb-mark-iii", "category": "growth", "name": "「残響」-Ⅲ型", "reading": "ざんきょうさんがた", "summary": "HPが上がる支援向けのB級音動機。", "body": "[[support]]向けの[[w-engine]]。Lv.60では基礎攻撃力が475で、HPが20%上がる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/613939"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "reverb-mark-ii", "category": "growth", "name": "「残響」-Ⅱ型", "reading": "ざんきょうにがた", "summary": "エネルギー自動回復が上がる支援向けのB級音動機。", "body": "[[support]]向けの[[w-engine]]。Lv.60では基礎攻撃力が475で、エネルギー自動回復が40%上がる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/613938"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "reverb-mark-i", "category": "growth", "name": "「残響」-Ⅰ型", "reading": "ざんきょういちがた", "summary": "攻撃力が上がる支援向けのB級音動機。", "body": "[[support]]向けの[[w-engine]]。Lv.60では基礎攻撃力が475で、攻撃力が20%上がる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/613937"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "lunar-noviluna", "category": "growth", "name": "「月相」-朔", "reading": "げっそうさく", "summary": "会心率が上がる強攻向けのB級音動機。", "body": "[[attack]]向けの[[w-engine]]。Lv.60では基礎攻撃力が475で、[[crit-rate]]が16%上がる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/613923"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "lunar-decrescent", "category": "growth", "name": "「月相」-晦", "reading": "げっそうかい", "summary": "攻撃力が上がる強攻向けのB級音動機。", "body": "[[attack]]向けの[[w-engine]]。Lv.60では基礎攻撃力が475で、攻撃力が20%上がる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/613922"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "lunar-pleniluna", "category": "growth", "name": "「月相」-望", "reading": "げっそうぼう", "summary": "攻撃力が上がる強攻向けのB級音動機。", "body": "[[attack]]向けの[[w-engine]]。Lv.60では基礎攻撃力が475で、攻撃力が20%上がる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/613921"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "cinder-cobalt", "category": "growth", "name": "「灰燼」-蒼藍", "reading": "かいじんそうらん", "summary": "HPが上がる命破向けのB級音動機。", "body": "[[rupture]]向けの[[w-engine]]。Lv.60では基礎攻撃力が475で、HPが20%上がる。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゲームエイト 音動機データ（補助）", "url": "https://game8.jp/zenless/695545"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "avarusu", "category": "being", "name": "アヴァルス", "reading": "あゔぁるす", "summary": "エーテル・炎が弱点のボス。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・炎。耐性は氷。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "ukaavarusu", "category": "being", "name": "羽化・アヴァルス", "reading": "うかあゔぁるす", "summary": "物理・風が弱点のボス。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点は物理・風。耐性は炎。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "tsuepeshu", "category": "being", "name": "ツェペシュ", "reading": "つぇぺしゅ", "summary": "エーテル・氷が弱点のボス。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・氷。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "parikusu", "category": "being", "name": "パリクス", "reading": "ぱりくす", "summary": "エーテル・氷が弱点のボス。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・氷。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "torakian", "category": "being", "name": "トラキアン", "reading": "とらきあん", "summary": "エーテル・氷が弱点のボス。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・氷。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "miazumikkutorakian", "category": "being", "name": "ミアズミック・トラキアン", "reading": "みあずみっくとらきあん", "summary": "エーテル・風が弱点のボス。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・風。耐性は電気。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "miazumanohomonomukurosasori", "category": "being", "name": "ミアズマの歩者・ムクロサソリ", "reading": "みあずまのほものむくろさそり", "summary": "エーテル・物理が弱点のボス。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・物理。耐性は炎。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "ukamukurosasori", "category": "being", "name": "羽化・ムクロサソリ", "reading": "うかむくろさそり", "summary": "電気・風が弱点のボス。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点は電気・風。耐性は氷。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "marionettogureibeeru", "category": "being", "name": "マリオネット・グレイベール", "reading": "まりおねっとぐれいべーる", "summary": "エーテル・氷が弱点のボス。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・氷。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "marionettoburakkubeeru", "category": "being", "name": "マリオネット・ブラックベール", "reading": "まりおねっとぶらっくべーる", "summary": "エーテル・氷が弱点のボス。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・氷。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "tanatosuchikuenekata", "category": "being", "name": "タナトス・蓄エネ型", "reading": "たなとすちくえねかた", "summary": "炎が弱点の精鋭エネミー。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点は炎。耐性はエーテル。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25", "related": ["thanatos"]},
  {"id": "denrikaradatanatosu", "category": "being", "name": "電離体・タナトス", "reading": "でんりからだたなとす", "summary": "エーテルが弱点の精鋭エネミー。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点はエーテル。耐性は氷。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25", "related": ["thanatos"]},
  {"id": "youkeikaitanatosu", "category": "being", "name": "要警戒・タナトス", "reading": "ようけいかいたなとす", "summary": "エーテル・氷が弱点のボス。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・氷。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25", "related": ["thanatos"]},
  {"id": "deyurahanchikuenekata", "category": "being", "name": "デュラハン・蓄エネ型", "reading": "でゅらはんちくえねかた", "summary": "炎が弱点の精鋭エネミー。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点は炎。耐性は電気。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25", "related": ["dullahan"]},
  {"id": "shoseinodeyurahan", "category": "being", "name": "初生のデュラハン", "reading": "しょせいのでゅらはん", "summary": "エーテル・氷が弱点の精鋭エネミー。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・氷。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25", "related": ["dullahan"]},
  {"id": "denrikaradadeyurahan", "category": "being", "name": "電離体・デュラハン", "reading": "でんりからだでゅらはん", "summary": "エーテルが弱点の精鋭エネミー。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点はエーテル。耐性は氷。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25", "related": ["dullahan"]},
  {"id": "youkeikaideyurahan", "category": "being", "name": "要警戒・デュラハン", "reading": "ようけいかいでゅらはん", "summary": "エーテル・氷が弱点のボス。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・氷。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25", "related": ["dullahan"]},
  {"id": "denrikaradapugunusu", "category": "being", "name": "電離体・プグヌス", "reading": "でんりからだぷぐぬす", "summary": "氷・物理が弱点の精鋭エネミー。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点は氷・物理。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "ukatarasukumikisaa", "category": "being", "name": "羽化・タラスクミキサー", "reading": "うかたらすくみきさー", "summary": "氷・物理が弱点の精鋭エネミー。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点は氷・物理。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25", "related": ["tarasque-mixer"]},
  {"id": "aruraunechikuenekata", "category": "being", "name": "アルラウネ・蓄エネ型", "reading": "あるらうねちくえねかた", "summary": "炎が弱点の精鋭エネミー。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点は炎。耐性は電気。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25", "related": ["alraune"]},
  {"id": "metorogoburinchikuenekata", "category": "being", "name": "メトロゴブリン・蓄エネ型", "reading": "めとろごぶりんちくえねかた", "summary": "炎が弱点の精鋭エネミー。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点は炎。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25", "related": ["metro-goblin"]},
  {"id": "aamaahateichikuenekata", "category": "being", "name": "アーマーハティ・蓄エネ型", "reading": "あーまーはてぃちくえねかた", "summary": "炎が弱点の精鋭エネミー。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点は炎。耐性は電気。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25", "related": ["armored-hati"]},
  {"id": "youkeikaiaamaahatei", "category": "being", "name": "要警戒・アーマーハティ", "reading": "ようけいかいあーまーはてぃ", "summary": "エーテル・氷が弱点のボス。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・氷。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25", "related": ["armored-hati"]},
  {"id": "goburinchikuenekata", "category": "being", "name": "ゴブリン・蓄エネ型", "reading": "ごぶりんちくえねかた", "summary": "炎が弱点の精鋭エネミー。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点は炎。耐性は電気。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25", "related": ["goblin"]},
  {"id": "hateichikuenekata", "category": "being", "name": "ハティ・蓄エネ型", "reading": "はてぃちくえねかた", "summary": "炎が弱点の精鋭エネミー。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点は炎。耐性は電気。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25", "related": ["hati"]},
  {"id": "youkeikaihatei", "category": "being", "name": "要警戒・ハティ", "reading": "ようけいかいはてぃ", "summary": "エーテル・氷が弱点のボス。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・氷。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25", "related": ["hati"]},
  {"id": "hateiarufachikuenekata", "category": "being", "name": "ハティアルファ・蓄エネ型", "reading": "はてぃあるふぁちくえねかた", "summary": "炎が弱点のボス。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点は炎。耐性は電気。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "faarubauteichikuenekata", "category": "being", "name": "ファールバウティ・蓄エネ型", "reading": "ふぁーるばうてぃちくえねかた", "summary": "炎が弱点の精鋭エネミー。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点は炎。耐性は電気。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25", "related": ["farbauti"]},
  {"id": "denrikaradafaarubautei", "category": "being", "name": "電離体・ファールバウティ", "reading": "でんりからだふぁーるばうてぃ", "summary": "エーテルが弱点の精鋭エネミー。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点はエーテル。耐性は氷。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25", "related": ["farbauti"]},
  {"id": "denrikaradanaseria", "category": "being", "name": "電離体・ナセリア", "reading": "でんりからだなせりあ", "summary": "エーテルが弱点の通常エネミー。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点はエーテル。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "denrikaradasetoria", "category": "being", "name": "電離体・セトリア", "reading": "でんりからだせとりあ", "summary": "エーテルが弱点の通常エネミー。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点はエーテル。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "sorudedousuchikuenekata", "category": "being", "name": "ソルデドゥス・蓄エネ型", "reading": "そるでどぅすちくえねかた", "summary": "炎が弱点の通常エネミー。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点は炎。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25", "related": ["sorudedousu"]},
  {"id": "fossoruchikuenekata", "category": "being", "name": "フォッソル・蓄エネ型", "reading": "ふぉっそるちくえねかた", "summary": "炎が弱点の通常エネミー。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点は炎。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25", "related": ["fossoru"]},
  {"id": "ukaenjinbihorudaa", "category": "being", "name": "羽化・エンジンビホルダー", "reading": "うかえんじんびほるだー", "summary": "物理・風が弱点の通常エネミー。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点は物理・風。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25", "related": ["engine-beholder"]},
  {"id": "supekutaachikuenekata", "category": "being", "name": "スペクター・蓄エネ型", "reading": "すぺくたーちくえねかた", "summary": "炎が弱点の通常エネミー。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点は炎。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25", "related": ["specter"]},
  {"id": "afurimanchikuenekata", "category": "being", "name": "アフリマン・蓄エネ型", "reading": "あふりまんちくえねかた", "summary": "炎が弱点の通常エネミー。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点は炎。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25", "related": ["ahriman"]},
  {"id": "mandoreikuchikuenekata", "category": "being", "name": "マンドレイク・蓄エネ型", "reading": "まんどれいくちくえねかた", "summary": "炎が弱点の通常エネミー。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点は炎。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25", "related": ["mandrake"]},
  {"id": "burasutosupaidaachikuenekata", "category": "being", "name": "ブラストスパイダー・蓄エネ型", "reading": "ぶらすとすぱいだーちくえねかた", "summary": "炎が弱点の通常エネミー。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点は炎。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25", "related": ["blast-spider"]},
  {"id": "hopuritaichikuenekata", "category": "being", "name": "ホプリタイ・蓄エネ型", "reading": "ほぷりたいちくえねかた", "summary": "炎が弱点の通常エネミー。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点は炎。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25", "related": ["hopuritai"]},
  {"id": "sateyurosuchikuenekata", "category": "being", "name": "サテュロス・蓄エネ型", "reading": "さてゅろすちくえねかた", "summary": "炎が弱点の通常エネミー。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点は炎。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25", "related": ["sateyurosu"]},
  {"id": "arupekachikuenekata", "category": "being", "name": "アルぺカ・蓄エネ型", "reading": "あるぺかちくえねかた", "summary": "炎が弱点の通常エネミー。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点は炎。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25", "related": ["arupeka"]},
  {"id": "teiruvinguchikuenekata", "category": "being", "name": "ティルヴィング・蓄エネ型", "reading": "てぃるゔぃんぐちくえねかた", "summary": "炎が弱点の通常エネミー。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点は炎。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25", "related": ["tyrfing"]},
  {"id": "bassaiki", "category": "being", "name": "伐採機", "reading": "ばっさいき", "summary": "電気が弱点のボス。", "body": "「機械」に分類される[[enemies|敵対ターゲット]]。弱点は電気。耐性は氷。資料上の陣営は「暴徒」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "horouarashigourikiouboumono", "category": "being", "name": "ホロウ荒らし・剛力横暴者", "reading": "ほろうあらしごうりきおうぼうしゃ", "summary": "炎・物理が弱点のボス。", "body": "「生物」に分類される[[enemies|敵対ターゲット]]。弱点は炎・物理。耐性は氷。資料上の陣営は「暴徒」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "genkyoufudatsukikinaguriya", "category": "being", "name": "元凶・札付き殴り屋", "reading": "げんきょうふだつきなぐりや", "summary": "炎・物理が弱点のボス。", "body": "「生物」に分類される[[enemies|敵対ターゲット]]。弱点は炎・物理。耐性は氷。資料上の陣営は「暴徒」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "miazumikkugourikiouboumono", "category": "being", "name": "ミアズミック・剛力横暴者", "reading": "みあずみっくごうりきおうぼうしゃ", "summary": "エーテル・風が弱点のボス。", "body": "「生物」に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・風。耐性は電気。資料上の陣営は「侵蝕体」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "miazumikkuteraaraputoru", "category": "being", "name": "ミアズミック・「テラー・ラプトル」", "reading": "みあずみっくてらーらぷとる", "summary": "炎・電気が弱点のボス。", "body": "「機械」に分類される[[enemies|敵対ターゲット]]。弱点は炎・電気。耐性はエーテル。資料上の陣営は「反乱軍」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "haiyoto", "category": "being", "name": "ハイヨト", "reading": "はいよと", "summary": "氷・炎が弱点のボス。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点は氷・炎。耐性は電気。資料上の陣営は「侵蝕体」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "fundoakki", "category": "being", "name": "憤怒悪鬼", "reading": "ふんぬあっき", "summary": "炎が弱点の精鋭エネミー。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点は炎。耐性は電気。資料上の陣営は「侵蝕体」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "miazumikkufundoakki", "category": "being", "name": "ミアズミック・憤怒悪鬼", "reading": "みあずみっくふんぬあっき", "summary": "炎・物理が弱点の精鋭エネミー。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点は炎・物理。耐性は電気。資料上の陣営は「侵蝕体」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "kyouranbouto", "category": "being", "name": "狂乱暴徒", "reading": "きょうらんぼうと", "summary": "炎が弱点の精鋭エネミー。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点は炎。耐性は電気。資料上の陣営は「侵蝕体」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "miazumikkukyouranbouto", "category": "being", "name": "ミアズミック・狂乱暴徒", "reading": "みあずみっくきょうらんぼうと", "summary": "エーテルが弱点の精鋭エネミー。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点はエーテル。耐性は物理。資料上の陣営は「侵蝕体」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "miazumikkutorinokkusu", "category": "being", "name": "ミアズミック・トリノックス", "reading": "みあずみっくとりのっくす", "summary": "エーテルが弱点の精鋭エネミー。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点はエーテル。耐性は物理。資料上の陣営は「侵蝕体」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "miazumikkujuusousutoraikaa", "category": "being", "name": "ミアズミック・「重装ストライカー」", "reading": "みあずみっくじゅうそうすとらいかー", "summary": "物理・電気が弱点の精鋭エネミー。", "body": "「機械」に分類される[[enemies|敵対ターゲット]]。弱点は物理・電気。耐性は氷。資料上の陣営は「侵蝕体」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "miazumikkushunsokuroobaa", "category": "being", "name": "ミアズミック・「駿足ローバー」", "reading": "みあずみっくしゅんそくろーばー", "summary": "物理・電気が弱点の精鋭エネミー。", "body": "「機械」に分類される[[enemies|敵対ターゲット]]。弱点は物理・電気。耐性は氷。資料上の陣営は「侵蝕体」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "miazumikkuhasukuron", "category": "being", "name": "ミアズミック・ハスクロン", "reading": "みあずみっくはすくろん", "summary": "氷・炎が弱点の精鋭エネミー。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点は氷・炎。耐性は電気。資料上の陣営は「侵蝕体」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25", "related": ["huskron"]},
  {"id": "akuratsuutte", "category": "being", "name": "悪辣討手", "reading": "あくらつうって", "summary": "炎が弱点の通常エネミー。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点は炎。資料上の陣営は「侵蝕体」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "miazumaremunantokyanonia", "category": "being", "name": "ミアズマ・レムナント・キャノニア", "reading": "みあずまれむなんときゃのにあ", "summary": "炎・電気が弱点の通常エネミー。", "body": "「サクリファイス」に分類される[[enemies|敵対ターゲット]]。弱点は炎・電気。資料上の陣営は「侵蝕体」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "miazumaremunantodifendaa", "category": "being", "name": "ミアズマ・レムナント・ディフェンダー", "reading": "みあずまれむなんとでぃふぇんだー", "summary": "炎・電気が弱点の通常エネミー。", "body": "「サクリファイス」に分類される[[enemies|敵対ターゲット]]。弱点は炎・電気。資料上の陣営は「侵蝕体」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "hen-imukuroari", "category": "being", "name": "変異ムクロアリ", "reading": "へんいむくろあり", "summary": "エーテルが弱点の通常エネミー。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点はエーテル。資料上の陣営は「侵蝕体」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "miazumikkuburasutosupaidaa", "category": "being", "name": "ミアズミック・ブラストスパイダー", "reading": "みあずみっくぶらすとすぱいだー", "summary": "物理・電気が弱点の通常エネミー。", "body": "[[ethereal]]に分類される[[enemies|敵対ターゲット]]。弱点は物理・電気。資料上の陣営は「侵蝕体」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25", "related": ["blast-spider"]},
  {"id": "teraaraputoru", "category": "being", "name": "「テラー・ラプトル」", "reading": "てらーらぷとる", "summary": "電気が弱点のボス。", "body": "「機械」に分類される[[enemies|敵対ターゲット]]。弱点は電気。耐性は氷。資料上の陣営は「反乱軍」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "teyuupooncharenjaa", "category": "being", "name": "「テューポーン・チャレンジャー」", "reading": "てゅーぽーんちゃれんじゃー", "summary": "炎・物理が弱点のボス。", "body": "「機械」に分類される[[enemies|敵対ターゲット]]。弱点は炎・物理。耐性はエーテル。資料上の陣営は「反乱軍」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "teyuupoonsuraggaa", "category": "being", "name": "「テューポーン・スラッガー」", "reading": "てゅーぽーんすらっがー", "summary": "電気が弱点のボス。", "body": "「機械」に分類される[[enemies|敵対ターゲット]]。弱点は電気。耐性は炎。資料上の陣営は「反乱軍」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "gaadian", "category": "being", "name": "「ガーディアン」", "reading": "がーでぃあん", "summary": "炎・物理が弱点の精鋭エネミー。", "body": "「機械」に分類される[[enemies|敵対ターゲット]]。弱点は炎・物理。耐性はエーテル。資料上の陣営は「反乱軍」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "gaadian-mark-ii-kata", "category": "being", "name": "「ガーディアンⅡ型」", "reading": "がーでぃあんにがた", "summary": "電気が弱点の精鋭エネミー。", "body": "「機械」に分類される[[enemies|敵対ターゲット]]。弱点は電気。耐性は炎。資料上の陣営は「反乱軍」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "gaadian-mark-iii-kata", "category": "being", "name": "「ガーディアンⅢ型」", "reading": "がーでぃあんさんがた", "summary": "電気が弱点のボス。", "body": "「機械」に分類される[[enemies|敵対ターゲット]]。弱点は電気。耐性は炎。資料上の陣営は「反乱軍」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "juusouhouhei", "category": "being", "name": "重装砲兵", "reading": "じゅうそうほうへい", "summary": "炎・物理が弱点の精鋭エネミー。", "body": "「生物」に分類される[[enemies|敵対ターゲット]]。弱点は炎・物理。耐性はエーテル。資料上の陣営は「反乱軍」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "totsugekihouhei", "category": "being", "name": "突撃砲兵", "reading": "とつげきほうへい", "summary": "電気が弱点の精鋭エネミー。", "body": "「生物」に分類される[[enemies|敵対ターゲット]]。弱点は電気。耐性は炎。資料上の陣営は「反乱軍」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "shunsokuroobaa", "category": "being", "name": "「駿足ローバー」", "reading": "しゅんそくろーばー", "summary": "炎・物理が弱点の精鋭エネミー。", "body": "「機械」に分類される[[enemies|敵対ターゲット]]。弱点は炎・物理。耐性はエーテル。資料上の陣営は「反乱軍」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "shunsokuroobaa-mark-ii-kata", "category": "being", "name": "「駿足ローバーⅡ型」", "reading": "しゅんそくろーばーにがた", "summary": "電気が弱点の精鋭エネミー。", "body": "「機械」に分類される[[enemies|敵対ターゲット]]。弱点は電気。耐性は炎。資料上の陣営は「反乱軍」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "tokusenshunsokuroobaa", "category": "being", "name": "特戦・駿足ローバー", "reading": "とくせんしゅんそくろーばー", "summary": "電気・物理が弱点の精鋭エネミー。", "body": "「機械」に分類される[[enemies|敵対ターゲット]]。弱点は電気・物理。耐性は氷。資料上の陣営は「反乱軍」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "juusousutoraikaa", "category": "being", "name": "「重装ストライカー」", "reading": "じゅうそうすとらいかー", "summary": "炎・物理が弱点の精鋭エネミー。", "body": "「機械」に分類される[[enemies|敵対ターゲット]]。弱点は炎・物理。耐性はエーテル。資料上の陣営は「反乱軍」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "juusousutoraikaa-mark-ii-kata", "category": "being", "name": "「重装ストライカーⅡ型」", "reading": "じゅうそうすとらいかーにがた", "summary": "電気が弱点の精鋭エネミー。", "body": "「機械」に分類される[[enemies|敵対ターゲット]]。弱点は電気。耐性は炎。資料上の陣営は「反乱軍」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "tokusenjuusousutoraikaa", "category": "being", "name": "特戦・重装ストライカー", "reading": "とくせんじゅうそうすとらいかー", "summary": "電気・物理が弱点の精鋭エネミー。", "body": "「機械」に分類される[[enemies|敵対ターゲット]]。弱点は電気・物理。耐性は氷。資料上の陣営は「反乱軍」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "tekidanryouhei", "category": "being", "name": "擲弾猟兵", "reading": "てきだんりょうへい", "summary": "炎・物理が弱点の通常エネミー。", "body": "「生物」に分類される[[enemies|敵対ターゲット]]。弱点は炎・物理。資料上の陣営は「反乱軍」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "bakugekiryouhei", "category": "being", "name": "爆撃猟兵", "reading": "ばくげきりょうへい", "summary": "電気が弱点の通常エネミー。", "body": "「生物」に分類される[[enemies|敵対ターゲット]]。弱点は電気。資料上の陣営は「反乱軍」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "tokusentekidanryouhei", "category": "being", "name": "特戦・擲弾猟兵", "reading": "とくせんてきだんりょうへい", "summary": "電気が弱点の通常エネミー。", "body": "「生物」に分類される[[enemies|敵対ターゲット]]。弱点は電気。資料上の陣営は「反乱軍」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "shubiryouhei", "category": "being", "name": "守備猟兵", "reading": "しゅびりょうへい", "summary": "炎・物理が弱点の通常エネミー。", "body": "「生物」に分類される[[enemies|敵対ターゲット]]。弱点は炎・物理。資料上の陣営は「反乱軍」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "junkairyouhei", "category": "being", "name": "巡回猟兵", "reading": "じゅんかいりょうへい", "summary": "電気が弱点の通常エネミー。", "body": "「生物」に分類される[[enemies|敵対ターゲット]]。弱点は電気。資料上の陣営は「反乱軍」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "tokusenshubiryouhei", "category": "being", "name": "特戦・守備猟兵", "reading": "とくせんしゅびりょうへい", "summary": "電気が弱点の通常エネミー。", "body": "「生物」に分類される[[enemies|敵対ターゲット]]。弱点は電気。資料上の陣営は「反乱軍」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "shinmairyouhei", "category": "being", "name": "新米猟兵", "reading": "しんまいりょうへい", "summary": "炎・物理が弱点の通常エネミー。", "body": "「生物」に分類される[[enemies|敵対ターゲット]]。弱点は炎・物理。資料上の陣営は「反乱軍」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "rentatsuryouhei", "category": "being", "name": "練達猟兵", "reading": "れんたつりょうへい", "summary": "電気が弱点の通常エネミー。", "body": "「生物」に分類される[[enemies|敵対ターゲット]]。弱点は電気。資料上の陣営は「反乱軍」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "keisouryouhei", "category": "being", "name": "軽装猟兵", "reading": "けいそうりょうへい", "summary": "炎・物理が弱点の通常エネミー。", "body": "「生物」に分類される[[enemies|敵対ターゲット]]。弱点は炎・物理。資料上の陣営は「反乱軍」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "senpouryouhei", "category": "being", "name": "先鋒猟兵", "reading": "せんぽうりょうへい", "summary": "電気が弱点の通常エネミー。", "body": "「生物」に分類される[[enemies|敵対ターゲット]]。弱点は電気。資料上の陣営は「反乱軍」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "tokusenkeisouryouhei", "category": "being", "name": "特戦・軽装猟兵", "reading": "とくせんけいそうりょうへい", "summary": "電気が弱点の通常エネミー。", "body": "「生物」に分類される[[enemies|敵対ターゲット]]。弱点は電気。資料上の陣営は「反乱軍」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "totsugekiryouhei", "category": "being", "name": "突撃猟兵", "reading": "とつげきりょうへい", "summary": "炎・物理が弱点の通常エネミー。", "body": "「生物」に分類される[[enemies|敵対ターゲット]]。弱点は炎・物理。資料上の陣営は「反乱軍」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "kenseiryouhei", "category": "being", "name": "牽制猟兵", "reading": "けんせいりょうへい", "summary": "電気が弱点の通常エネミー。", "body": "「生物」に分類される[[enemies|敵対ターゲット]]。弱点は電気。資料上の陣営は「反乱軍」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "tokusentotsugekiryouhei", "category": "being", "name": "特戦・突撃猟兵", "reading": "とくせんとつげきりょうへい", "summary": "電気が弱点の通常エネミー。", "body": "「生物」に分類される[[enemies|敵対ターゲット]]。弱点は電気。資料上の陣営は「反乱軍」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "tokumugoei", "category": "being", "name": "特務護衛", "reading": "とくむごえい", "summary": "炎・物理が弱点の通常エネミー。", "body": "「生物」に分類される[[enemies|敵対ターゲット]]。弱点は炎・物理。資料上の陣営は「特殊」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "patorooraamidoru", "category": "being", "name": "「パトローラー・ミドル」", "reading": "ぱとろーらーみどる", "summary": "電気が弱点の通常エネミー。", "body": "「機械」に分類される[[enemies|敵対ターゲット]]。弱点は電気。耐性はエーテル。資料上の陣営は「特殊」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "patorooraaraito", "category": "being", "name": "「パトローラー・ライト」", "reading": "ぱとろーらーらいと", "summary": "電気が弱点の通常エネミー。", "body": "「機械」に分類される[[enemies|敵対ターゲット]]。弱点は電気。資料上の陣営は「特殊」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "kusarikku", "category": "being", "name": "クサリク", "reading": "くさりく", "summary": "炎・電気が弱点のボス。", "body": "「エーテリアス」に分類される[[enemies|敵対ターゲット]]。弱点は炎・電気。耐性は氷。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "girutabururu", "category": "being", "name": "ギルタブルル", "reading": "ぎるたぶるる", "summary": "風が弱点のボス。", "body": "「エーテリアス」に分類される[[enemies|敵対ターゲット]]。弱点は風。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "uridinmu", "category": "being", "name": "ウリディンム", "reading": "うりでぃんむ", "summary": "氷・風が弱点のボス。", "body": "「エーテリアス」に分類される[[enemies|敵対ターゲット]]。弱点は氷・風。耐性は物理。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "engokuwoyukumono", "category": "being", "name": "炎獄を往く者", "reading": "えんごくをゆくもの", "summary": "氷・風が弱点のボス。", "body": "「エーテリアス」に分類される[[enemies|敵対ターゲット]]。弱点は氷・風。耐性は物理。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "miazumanoshisai", "category": "being", "name": "ミアズマの司祭", "reading": "みあずまのしさい", "summary": "エーテルが弱点のボス。", "body": "「生物」に分類される[[enemies|敵対ターゲット]]。弱点はエーテル。耐性は氷。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "marionettotsuinzu", "category": "being", "name": "マリオネット・ツインズ", "reading": "まりおねっとついんず", "summary": "エーテル・氷が弱点のボス。", "body": "「エーテリアス」に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・氷。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "youkeikaimarionetto", "category": "being", "name": "要警戒・マリオネット", "reading": "ようけいかいまりおねっと", "summary": "エーテル・氷が弱点のボス。", "body": "「エーテリアス」に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・氷。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "deddoendobucchaa", "category": "being", "name": "デッドエンドブッチャー", "reading": "でっどえんどぶっちゃー", "summary": "エーテル・氷が弱点のボス。", "body": "「エーテリアス」に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・氷。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "shoseinodeddoendobucchaa", "category": "being", "name": "初生のデッドエンドブッチャー", "reading": "しょせいのでっどえんどぶっちゃー", "summary": "エーテル・氷が弱点のボス。", "body": "「エーテリアス」に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・氷。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "youkeikaideddoendobucchaa", "category": "being", "name": "要警戒・デッドエンドブッチャー", "reading": "ようけいかいでっどえんどぶっちゃー", "summary": "エーテル・氷が弱点のボス。", "body": "「エーテリアス」に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・氷。資料上の陣営は「エーテルの異形」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "purukura", "category": "being", "name": "プルクラ", "reading": "ぷるくら", "summary": "炎・物理が弱点の精鋭エネミー。", "body": "「生物」に分類される[[enemies|敵対ターゲット]]。弱点は炎・物理。耐性は氷。資料上の陣営は「暴徒」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "chigarinosoujiya", "category": "being", "name": "血狩りの掃除屋", "reading": "ちがりのそうじや", "summary": "エーテル・電気が弱点のボス。", "body": "「生物」に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・電気。耐性は炎・風。資料上の陣営は「暴徒」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "wandaringuhantaa", "category": "being", "name": "ワンダリングハンター", "reading": "わんだりんぐはんたー", "summary": "氷・炎が弱点のボス。", "body": "「エーテリアス」に分類される[[enemies|敵対ターゲット]]。弱点は氷・炎。耐性は物理。資料上の陣営は「侵蝕体」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "miazumafiindonahananaredo", "category": "being", "name": "ミアズマ・フィーンド・名は名なれど", "reading": "みあずまふぃーんどなはななれど", "summary": "エーテル・物理が弱点のボス。", "body": "「エーテリアス」に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・物理。耐性は炎。資料上の陣営は「侵蝕体」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "hashashinshokutaiponpei", "category": "being", "name": "「覇者侵蝕体・ポンペイ」", "reading": "はしゃしんしょくたいぽんぺい", "summary": "炎が弱点のボス。", "body": "「エーテリアス」に分類される[[enemies|敵対ターゲット]]。弱点は炎。耐性は電気。資料上の陣営は「侵蝕体」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "youkeikaiponpei", "category": "being", "name": "要警戒・ポンペイ", "reading": "ようけいかいぽんぺい", "summary": "炎が弱点のボス。", "body": "「エーテリアス」に分類される[[enemies|敵対ターゲット]]。弱点は炎。耐性は電気。資料上の陣営は「侵蝕体」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "mikakuninfukugoushinshokutai", "category": "being", "name": "未確認複合侵蝕体", "reading": "みかくにんふくごうしんしょくたい", "summary": "エーテル・電気が弱点のボス。", "body": "「エーテリアス」に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・電気。資料上の陣営は「侵蝕体」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "teyuupoondesutoroiyaa", "category": "being", "name": "「テューポーン・デストロイヤー」", "reading": "てゅーぽーんですとろいやー", "summary": "電気・風が弱点のボス。", "body": "「機械」に分類される[[enemies|敵対ターゲット]]。弱点は電気・風。耐性は炎。資料上の陣営は「反乱軍」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "tokusenkyoushuubakugekishu", "category": "being", "name": "特戦強襲爆撃手", "reading": "とくせんきょうしゅうばくげきしゅ", "summary": "電気が弱点のボス。", "body": "「生物」に分類される[[enemies|敵対ターゲット]]。弱点は電気。耐性は炎。資料上の陣営は「反乱軍」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "shiirudodifendaa", "category": "being", "name": "「シールドディフェンダー」", "reading": "しーるどでぃふぇんだー", "summary": "炎・物理が弱点のボス。", "body": "「機械」に分類される[[enemies|敵対ターゲット]]。弱点は炎・物理。耐性はエーテル。資料上の陣営は「反乱軍」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "shiirudodifendaaomega", "category": "being", "name": "「シールドディフェンダー・Ω」", "reading": "しーるどでぃふぇんだーおめが", "summary": "電気が弱点のボス。", "body": "「機械」に分類される[[enemies|敵対ターゲット]]。弱点は電気。耐性は炎。資料上の陣営は「反乱軍」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "shoutenzanka", "category": "being", "name": "焦天残火", "reading": "しょうてんざんか", "summary": "氷・風が弱点のボス。", "body": "「エーテリアス」に分類される[[enemies|敵対ターゲット]]。弱点は氷・風。耐性は物理。資料上の陣営は「特殊」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "purimaikonokurasutovesupo", "category": "being", "name": "プリマ・イコノクラスト・ヴェスポ", "reading": "ぷりまいこのくらすとゔぇすぽ", "summary": "エーテル・風が弱点のボス。", "body": "「機械」に分類される[[enemies|敵対ターゲット]]。弱点はエーテル・風。耐性は氷・炎。資料上の陣営は「特殊」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "akumunishibarareshimonoyoushakuen", "category": "being", "name": "悪夢に縛られし者・葉釈淵", "reading": "あくむにしばられしものようしゃくえん", "summary": "氷・物理・風が弱点のボス。", "body": "「生物」に分類される[[enemies|敵対ターゲット]]。弱点は氷・物理・風。耐性は電気。資料上の陣営は「特殊」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "boutokusha", "category": "being", "name": "「冒涜者」", "reading": "ぼうとくしゃ", "summary": "電気・物理が弱点のボス。", "body": "「サクリファイス」に分類される[[enemies|敵対ターゲット]]。弱点は電気・物理。耐性は氷。資料上の陣営は「特殊」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "sakurifaisuburingaa", "category": "being", "name": "サクリファイス・ブリンガー", "reading": "さくりふぁいすぶりんがー", "summary": "氷が弱点のボス。", "body": "「サクリファイス」に分類される[[enemies|敵対ターゲット]]。弱点は氷。耐性は物理。資料上の陣営は「特殊」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "sakurifaisukovenantogaadian", "category": "being", "name": "サクリファイス・コヴェナント・ガーディアン", "reading": "さくりふぁいすこゔぇなんとがーでぃあん", "summary": "炎・物理が弱点のボス。", "body": "「サクリファイス」に分類される[[enemies|敵対ターゲット]]。弱点は炎・物理。耐性は氷・風。資料上の陣営は「特殊」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "sakurifaisuheretikkujesutaa", "category": "being", "name": "サクリファイス・ヘレティック・ジェスター", "reading": "さくりふぁいすへれてぃっくじぇすたー", "summary": "電気・物理が弱点のボス。", "body": "「サクリファイス」に分類される[[enemies|敵対ターゲット]]。弱点は電気・物理。耐性はエーテル。資料上の陣営は「特殊」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "ougonmajingiagorudo", "category": "being", "name": "黄金魔神ギアゴルド", "reading": "おうごんまじんぎあごるど", "summary": "電気が弱点のボス。", "body": "「機械」に分類される[[enemies|敵対ターゲット]]。弱点は電気。耐性はエーテル。資料上の陣営は「特殊」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "konkisutadooru", "category": "being", "name": "「コンキスタドール」", "reading": "こんきすたどーる", "summary": "電気・風が弱点のボス。", "body": "「機械」に分類される[[enemies|敵対ターゲット]]。弱点は電気・風。耐性は物理。資料上の陣営は「特殊」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "aresu", "category": "being", "name": "アレス", "reading": "あれす", "summary": "エーテルが弱点のボス。", "body": "「機械」に分類される[[enemies|敵対ターゲット]]。弱点はエーテル。耐性は炎。資料上の陣営は「特殊」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "kagayakeruchikaibirii", "category": "being", "name": "輝ける誓い・ビリー", "reading": "かがやけるちかいびりー", "summary": "炎・電気が弱点のボス。", "body": "「機械」に分類される[[enemies|敵対ターゲット]]。弱点は炎・電気。耐性は物理。資料上の陣営は「特殊」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "dopperugengaasutaaraitobirii", "category": "being", "name": "ドッペルゲンガー・スターライト・ビリー", "reading": "どっぺるげんがーすたーらいとびりー", "summary": "炎・電気が弱点のボス。", "body": "「エーテリアス」に分類される[[enemies|敵対ターゲット]]。弱点は炎・電気。耐性は物理。資料上の陣営は「特殊」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "yumesugarikomanomanato", "category": "being", "name": "夢縋り・狛野真斗", "reading": "ゆめすがりこまのまなと", "summary": "氷が弱点のボス。", "body": "「エーテリアス」に分類される[[enemies|敵対ターゲット]]。弱点は氷。耐性は物理。資料上の陣営は「特殊」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "denritaidopperugengaakomanomanato", "category": "being", "name": "電離体・ドッペルゲンガー・狛野真斗", "reading": "でんりたいどっぺるげんがーこまのまなと", "summary": "氷が弱点のボス。", "body": "「エーテリアス」に分類される[[enemies|敵対ターゲット]]。弱点は氷。耐性は物理。資料上の陣営は「特殊」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "miazumikkukomanomanato", "category": "being", "name": "ミアズミック・狛野真斗", "reading": "みあずみっくこまのまなと", "summary": "氷が弱点のボス。", "body": "「エーテリアス」に分類される[[enemies|敵対ターゲット]]。弱点は氷。耐性は物理。資料上の陣営は「特殊」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "haishinsha", "category": "being", "name": "「背信者」", "reading": "はいしんしゃ", "summary": "炎・物理が弱点のボス。", "body": "「生物」に分類される[[enemies|敵対ターゲット]]。弱点は炎・物理。耐性はエーテル。資料上の陣営は「特殊」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "dopperugengaahaishinsha", "category": "being", "name": "ドッペルゲンガー・「背信者」", "reading": "どっぺるげんがーはいしんしゃ", "summary": "物理・炎が弱点のボス。", "body": "「エーテリアス」に分類される[[enemies|敵対ターゲット]]。弱点は物理・炎。耐性はエーテル。資料上の陣営は「特殊」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "miazumikkudopperugengaahaishinsha", "category": "being", "name": "ミアズミック・ドッペルゲンガー・「背信者」", "reading": "みあずみっくどっぺるげんがーはいしんしゃ", "summary": "物理・炎が弱点のボス。", "body": "「エーテリアス」に分類される[[enemies|敵対ターゲット]]。弱点は物理・炎。耐性はエーテル。資料上の陣営は「特殊」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "furaidee", "category": "being", "name": "フライデー", "reading": "ふらいでー", "summary": "電気が弱点のボス。", "body": "「機械」に分類される[[enemies|敵対ターゲット]]。弱点は電気。耐性は物理。資料上の陣営は「特殊」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "furaideechikuenekata", "category": "being", "name": "フライデー・蓄エネ型", "reading": "ふらいでーちくえねかた", "summary": "炎が弱点のボス。", "body": "「機械」に分類される[[enemies|敵対ターゲット]]。弱点は炎。耐性は物理。資料上の陣営は「特殊」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "furaideekoushuuhasuukata", "category": "being", "name": "フライデー・高周波数型", "reading": "ふらいでーこうしゅうはすうかた", "summary": "エーテルが弱点のボス。", "body": "「機械」に分類される[[enemies|敵対ターゲット]]。弱点はエーテル。耐性は物理。資料上の陣営は「特殊」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "hansu", "category": "being", "name": "ハンス", "reading": "はんす", "summary": "電気が弱点のボス。", "body": "「機械」に分類される[[enemies|敵対ターゲット]]。弱点は電気。耐性は物理。資料上の陣営は「特殊」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "hansuchikuenekata", "category": "being", "name": "ハンス・蓄エネ型", "reading": "はんすちくえねかた", "summary": "炎が弱点のボス。", "body": "「機械」に分類される[[enemies|敵対ターゲット]]。弱点は炎。耐性は物理。資料上の陣営は「特殊」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "hansukoushuuhasuukata", "category": "being", "name": "ハンス・高周波数型", "reading": "はんすこうしゅうはすうかた", "summary": "エーテルが弱点のボス。", "body": "「機械」に分類される[[enemies|敵対ターゲット]]。弱点はエーテル。耐性は物理。資料上の陣営は「特殊」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "gureeteru", "category": "being", "name": "グレーテル", "reading": "ぐれーてる", "summary": "電気が弱点のボス。", "body": "「機械」に分類される[[enemies|敵対ターゲット]]。弱点は電気。耐性は物理。資料上の陣営は「特殊」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "gureeteruchikuenekata", "category": "being", "name": "グレーテル・蓄エネ型", "reading": "ぐれーてるちくえねかた", "summary": "炎が弱点のボス。", "body": "「機械」に分類される[[enemies|敵対ターゲット]]。弱点は炎。耐性は物理。資料上の陣営は「特殊」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "gureeterukoushuuhasuukata", "category": "being", "name": "グレーテル・高周波数型", "reading": "ぐれーてるこうしゅうはすうかた", "summary": "エーテルが弱点のボス。", "body": "「機械」に分類される[[enemies|敵対ターゲット]]。弱点はエーテル。耐性は物理。資料上の陣営は「特殊」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "rokkusupuringu", "category": "being", "name": "ロックスプリング", "reading": "ろっくすぷりんぐ", "summary": "電気・物理が弱点のボス。", "body": "「機械」に分類される[[enemies|敵対ターゲット]]。弱点は電気・物理。耐性はエーテル。資料上の陣営は「特殊」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
  {"id": "shitiigaadianna", "category": "being", "name": "シティー・ガーディアンナ", "reading": "してぃーがーでぃあんな", "summary": "電気・風が弱点の精鋭エネミー。", "body": "「機械」に分類される[[enemies|敵対ターゲット]]。弱点は電気・風。資料上の陣営は「特殊」。\n\n注：説明の一部は公式資料との照合が未了です（要確認）。", "sources": [{"label": "ゼンレスゾーンゼロ Wiki* 敵一覧（補助）", "url": "https://wikiwiki.jp/zenless/砂場/エネミーリスト"}], "gameVersion": "3.3", "dataAsOf": "2026-11-25"},
];
