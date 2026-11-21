import type { GlossaryEntry } from "../../shared/content/glossary";

/** 更新手順は README.md を参照。 */
export const entries: GlossaryEntry[] = [
  {
    "id": "element",
    "category": "battle",
    "name": "元素",
    "reading": "げんそ",
    "summary": "戦闘や探索に関わる七種類の力。",
    "body": "炎・水・風・雷・草・氷・岩の七種類がある。組み合わせによって[[elemental-reaction]]が起こり、戦闘や探索に役立つ。",
    "sources": [
      {
        "label": "公式 ゲーム紹介",
        "url": "https://genshin.hoyoverse.com/ja/game"
      }
    ],
    "gameVersion": "7.2",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "elemental-reaction",
    "category": "battle",
    "name": "元素反応",
    "reading": "げんそはんのう",
    "summary": "異なる元素などの組み合わせで生じる効果。",
    "body": "[[element]]の組み合わせにより、[[vaporize]]や[[melt]]のように攻撃を強めるもの、[[bloom]]のように別の効果を生むものなどがある。反応の効果には発動者の[[elemental-mastery]]が関わる。",
    "sources": [
      {
        "label": "公式 ゲーム紹介",
        "url": "https://genshin.hoyoverse.com/ja/game"
      },
      {
        "label": "原神 Wiki* 元素反応について（補助）",
        "url": "https://wikiwiki.jp/genshinwiki/元素反応について"
      }
    ],
    "gameVersion": "7.2",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "vaporize",
    "category": "battle",
    "name": "蒸発",
    "reading": "じょうはつ",
    "summary": "炎元素と水元素の組み合わせで起こる元素反応。",
    "body": "炎と水による[[elemental-reaction]]。反応を起こした攻撃のダメージを増幅し、後から作用した元素によって倍率が異なる。",
    "sources": [
      {
        "label": "原神 Wiki* 元素反応について（補助）",
        "url": "https://wikiwiki.jp/genshinwiki/元素反応について"
      }
    ],
    "gameVersion": "7.2",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "melt",
    "category": "battle",
    "name": "溶解",
    "reading": "ようかい",
    "summary": "炎元素と氷元素の組み合わせで起こる元素反応。",
    "body": "炎と氷による[[elemental-reaction]]。反応を起こした攻撃のダメージを増幅し、後から作用した元素によって倍率が異なる。",
    "sources": [
      {
        "label": "原神 Wiki* 元素反応について（補助）",
        "url": "https://wikiwiki.jp/genshinwiki/元素反応について"
      }
    ],
    "gameVersion": "7.2",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "swirl",
    "category": "battle",
    "name": "拡散",
    "reading": "かくさん",
    "summary": "風元素が特定の元素と反応して起こる効果。",
    "body": "風が炎・水・雷・氷と反応すると発生し、対応する元素のダメージを与え、その元素を周囲に広げる。反応ダメージには発動者のレベルや[[elemental-mastery]]が関わる。",
    "related": [
      "elemental-reaction"
    ],
    "sources": [
      {
        "label": "原神 Wiki* 元素反応について（補助）",
        "url": "https://wikiwiki.jp/genshinwiki/元素反応について"
      }
    ],
    "gameVersion": "7.2",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "crystallize",
    "category": "battle",
    "name": "結晶",
    "reading": "けっしょう",
    "summary": "岩元素が特定の元素と反応して欠片を生む効果。",
    "body": "岩が炎・水・雷・氷と反応すると元素の欠片が生成される。欠片を拾うと対応する元素のシールドを獲得できる。",
    "related": [
      "elemental-reaction"
    ],
    "sources": [
      {
        "label": "原神 Wiki* 元素反応について（補助）",
        "url": "https://wikiwiki.jp/genshinwiki/元素反応について"
      },
      {
        "label": "公式 ゲーム内テキスト調整",
        "url": "https://genshin.hoyoverse.com/ja/news/detail/103729"
      }
    ],
    "gameVersion": "7.2",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "quicken",
    "category": "battle",
    "name": "原激化",
    "reading": "げんげきか",
    "summary": "草元素と雷元素によって起こる元素反応。",
    "body": "草と雷の[[elemental-reaction]]で激化状態となる。そこに雷が作用すると[[aggravate]]、草が作用すると[[spread]]が起こる。",
    "sources": [
      {
        "label": "原神 Wiki* 元素反応について（補助）",
        "url": "https://wikiwiki.jp/genshinwiki/元素反応について"
      },
      {
        "label": "公式 Ver.3.2 更新内容",
        "url": "https://genshin.hoyoverse.com/ja/news/detail/25357"
      }
    ],
    "gameVersion": "7.2",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "aggravate",
    "category": "battle",
    "name": "超激化",
    "reading": "ちょうげきか",
    "summary": "激化状態に雷元素が作用して起こる元素反応。",
    "body": "[[quicken|激化状態]]に雷が作用すると発生し、反応を起こした雷元素攻撃の基礎ダメージを増加させる。[[elemental-mastery]]も増加量に関わる。",
    "sources": [
      {
        "label": "原神 Wiki* 元素反応について（補助）",
        "url": "https://wikiwiki.jp/genshinwiki/元素反応について"
      },
      {
        "label": "公式 Ver.3.2 更新内容",
        "url": "https://genshin.hoyoverse.com/ja/news/detail/25357"
      }
    ],
    "gameVersion": "7.2",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "spread",
    "category": "battle",
    "name": "草激化",
    "reading": "くさげきか",
    "summary": "激化状態に草元素が作用して起こる元素反応。",
    "body": "[[quicken|激化状態]]に草が作用すると発生し、反応を起こした草元素攻撃の基礎ダメージを増加させる。[[elemental-mastery]]も増加量に関わる。",
    "sources": [
      {
        "label": "原神 Wiki* 元素反応について（補助）",
        "url": "https://wikiwiki.jp/genshinwiki/元素反応について"
      },
      {
        "label": "公式 Ver.3.2 更新内容",
        "url": "https://genshin.hoyoverse.com/ja/news/detail/25357"
      }
    ],
    "gameVersion": "7.2",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "bloom",
    "category": "battle",
    "name": "開花",
    "reading": "かいか",
    "summary": "草元素と水元素の反応で草原核を生む効果。",
    "body": "草と水の[[elemental-reaction]]で草原核が生成される。草原核は一定時間後に爆発し、雷や炎が作用するとそれぞれ[[hyperbloom]]や[[burgeon]]が起こる。",
    "sources": [
      {
        "label": "原神 Wiki* 元素反応について（補助）",
        "url": "https://wikiwiki.jp/genshinwiki/元素反応について"
      },
      {
        "label": "公式 Ver.3.2 更新内容",
        "url": "https://genshin.hoyoverse.com/ja/news/detail/25357"
      }
    ],
    "gameVersion": "7.2",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "hyperbloom",
    "category": "battle",
    "name": "超開花",
    "reading": "ちょうかいか",
    "summary": "草原核に雷元素が作用して起こる元素反応。",
    "body": "[[bloom]]で生成された草原核に雷が作用すると発生する。草原核が敵を追尾する弾に変化して草元素ダメージを与える。",
    "sources": [
      {
        "label": "原神 Wiki* 元素反応について（補助）",
        "url": "https://wikiwiki.jp/genshinwiki/元素反応について"
      },
      {
        "label": "公式 Ver.3.2 更新内容",
        "url": "https://genshin.hoyoverse.com/ja/news/detail/25357"
      }
    ],
    "gameVersion": "7.2",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "burgeon",
    "category": "battle",
    "name": "烈開花",
    "reading": "れつかいか",
    "summary": "草原核に炎元素が作用して起こる元素反応。",
    "body": "[[bloom]]で生成された草原核に炎が作用すると発生する。草原核が爆発し、範囲内に草元素ダメージを与える。",
    "sources": [
      {
        "label": "原神 Wiki* 元素反応について（補助）",
        "url": "https://wikiwiki.jp/genshinwiki/元素反応について"
      },
      {
        "label": "公式 Ver.3.2 更新内容",
        "url": "https://genshin.hoyoverse.com/ja/news/detail/25357"
      }
    ],
    "gameVersion": "7.2",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "energy",
    "category": "battle",
    "name": "元素エネルギー",
    "reading": "げんそえねるぎー",
    "summary": "元素爆発を使うために蓄えるエネルギー。",
    "body": "[[elemental-burst]]の発動に必要なエネルギー。元素粒子や元素オーブの獲得などで回復し、獲得量には[[energy-recharge]]が関わる。",
    "sources": [
      {
        "label": "ゲームウィズ 元素の情報まとめ（補助）",
        "url": "https://gamewith.jp/genshin/article/show/231002"
      }
    ],
    "gameVersion": "7.2",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "energy-recharge",
    "category": "battle",
    "name": "元素チャージ効率",
    "reading": "げんそちゃーじこうりつ",
    "summary": "元素粒子などから得る元素エネルギーに関わるステータス。",
    "body": "元素粒子や元素オーブを獲得した際の[[energy]]の回復量に関わる。[[elemental-burst]]を使う頻度を考える際に重要。",
    "sources": [
      {
        "label": "ゲームウィズ 元素の情報まとめ（補助）",
        "url": "https://gamewith.jp/genshin/article/show/231002"
      }
    ],
    "gameVersion": "7.2",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "elemental-mastery",
    "category": "battle",
    "name": "元素熟知",
    "reading": "げんそじゅくち",
    "summary": "元素反応の効果に関わるステータス。",
    "body": "反応を起こしたキャラクターの元素熟知は、多くの[[elemental-reaction]]のダメージや[[crystallize]]のシールド吸収量に関わる。元素ダメージ全般を直接増やすものではない。",
    "sources": [
      {
        "label": "ゲームウィズ 元素の情報まとめ（補助）",
        "url": "https://gamewith.jp/genshin/article/show/231002"
      },
      {
        "label": "原神 Wiki* 元素反応について（補助）",
        "url": "https://wikiwiki.jp/genshinwiki/元素反応について"
      }
    ],
    "gameVersion": "7.2",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "artifact",
    "category": "growth",
    "name": "聖遺物",
    "reading": "せいいぶつ",
    "summary": "キャラクターに装備しステータスやセット効果を得るアイテム。",
    "body": "キャラクターに装備する育成要素。各部位のステータスを伸ばせるほか、同じセットを一定数装備するとセット効果が発動する。",
    "related": [
      "talent"
    ],
    "sources": [
      {
        "label": "公式 ゲーム内テキスト調整",
        "url": "https://genshin.hoyoverse.com/ja/news/detail/103729"
      }
    ],
    "gameVersion": "7.2",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "talent",
    "category": "growth",
    "name": "天賦",
    "reading": "てんぷ",
    "summary": "キャラクターが持つ攻撃や能力を表す育成要素。",
    "body": "通常攻撃、[[elemental-skill]]、[[elemental-burst]]などの能力や固有の効果を指す。一部の天賦は素材を使ってレベルを上げられる。",
    "sources": [
      {
        "label": "公式 Ver.3.2 更新内容",
        "url": "https://genshin.hoyoverse.com/ja/news/detail/25357"
      }
    ],
    "gameVersion": "7.2",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "constellation",
    "category": "growth",
    "name": "命ノ星座",
    "reading": "いのちのせいざ",
    "aliases": [
      "凸"
    ],
    "summary": "キャラクターの追加効果を解放する育成要素。",
    "body": "キャラクターごとに設定された六つの星座。対応する命ノ星座を解放すると、能力の追加や[[talent]]の強化などを得られる。一般に解放数を「凸」で表す。",
    "sources": [
      {
        "label": "公式 Ver.3.2 更新内容",
        "url": "https://genshin.hoyoverse.com/ja/news/detail/25357"
      }
    ],
    "gameVersion": "7.2",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "elemental-skill",
    "category": "battle",
    "name": "元素スキル",
    "reading": "げんそすきる",
    "summary": "キャラクターごとに異なる効果を持つ戦闘天賦。",
    "body": "キャラクター固有の[[talent]]の一つ。使用後は通常クールタイムがあり、長押しなどで効果が変わるものもある。",
    "related": [
      "elemental-burst"
    ],
    "sources": [
      {
        "label": "公式 Ver.5.3 更新内容",
        "url": "https://genshin.hoyoverse.com/ja/news/detail/127791"
      }
    ],
    "gameVersion": "7.2",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "elemental-burst",
    "category": "battle",
    "name": "元素爆発",
    "reading": "げんそばくはつ",
    "summary": "元素エネルギーを消費して発動する戦闘天賦。",
    "body": "必要な[[energy]]を蓄えて発動するキャラクター固有の[[talent]]。必要量や効果、クールタイムはキャラクターによって異なる。",
    "sources": [
      {
        "label": "公式 Ver.5.3 更新内容",
        "url": "https://genshin.hoyoverse.com/ja/news/detail/127791"
      },
      {
        "label": "ゲームウィズ 元素の情報まとめ（補助）",
        "url": "https://gamewith.jp/genshin/article/show/231002"
      }
    ],
    "gameVersion": "7.2",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "vision",
    "category": "world",
    "name": "神の目",
    "reading": "かみのめ",
    "summary": "元素を操る力に関わる、テイワットの人々の持つもの。",
    "body": "[[teyvat]]において、人間の[[element|元素]]を操る力は神の目となって現れると公式の開発者説明で語られている。",
    "sources": [
      {
        "label": "公式 開発者共研計画 キャラクター編01",
        "url": "https://genshin.hoyoverse.com/m/ja/news/detail/8647"
      }
    ],
    "gameVersion": "7.2",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "god",
    "category": "being",
    "name": "魔神",
    "reading": "まじん",
    "summary": "テイワットの歴史や信仰に関わる存在。",
    "body": "[[teyvat]]の歴史に登場する存在。公式の璃月紹介では岩の魔神に言及している。",
    "sources": [
      {
        "label": "公式 テイワット紹介",
        "url": "https://genshin.hoyoverse.com/ja/map?region=2"
      }
    ],
    "gameVersion": "7.2",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "teyvat",
    "category": "place",
    "name": "テイワット",
    "reading": "ていわっと",
    "summary": "七つの元素が絡み合う原神の世界。",
    "body": "[[element|七つの元素]]が絡み合う世界。モンドや璃月など、それぞれ異なる文化を持つ地域がある。",
    "sources": [
      {
        "label": "公式 テイワット紹介",
        "url": "https://genshin.hoyoverse.com/ja/map?region=2"
      }
    ],
    "gameVersion": "7.2",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "nightsouls-blessing",
    "category": "battle",
    "name": "夜魂の加護",
    "reading": "やこんのかご",
    "summary": "一部のキャラクターが持つ固有の戦闘状態。",
    "body": "ナタの一部キャラクターが入る状態。発動方法や効果はキャラクターによって異なり、[[nightsoul-burst]]とは別の仕組み。",
    "sources": [
      {
        "label": "公式 Ver.5.5 正式リリース",
        "url": "https://genshin.hoyoverse.com/ja/news/detail/155172"
      },
      {
        "label": "公式 Ver.5.3 更新内容",
        "url": "https://genshin.hoyoverse.com/ja/news/detail/127791"
      }
    ],
    "gameVersion": "7.2",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "nightsoul-burst",
    "category": "battle",
    "name": "夜魂バースト",
    "reading": "やこんばーすと",
    "summary": "ナタのキャラクターに関わる戦闘中の仕組み。",
    "body": "チーム内のナタのキャラクターに関わる仕組みで、発生時にキャラクターの[[talent]]などが反応する。[[nightsouls-blessing|夜魂の加護]]とは別の仕組み。",
    "sources": [
      {
        "label": "公式 Ver.5.3 更新内容",
        "url": "https://genshin.hoyoverse.com/ja/news/detail/127791"
      }
    ],
    "gameVersion": "7.2",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "domain",
    "category": "content",
    "name": "秘境",
    "reading": "ひきょう",
    "summary": "敵との戦闘などに挑戦し報酬を得られる場所。",
    "body": "挑戦できる場所の一つ。種類によって獲得できる報酬が異なり、[[artifact]]を入手できる秘境もある。報酬の受け取りには[[original-resin]]を使う場合がある。",
    "sources": [
      {
        "label": "公式 Luna IV 更新情報",
        "url": "https://genshin.hoyoverse.com/ja/news/detail/162159"
      },
      {
        "label": "公式 Ver.1.1 更新情報",
        "url": "https://genshin.hoyoverse.com/ja/news/detail/103763"
      }
    ],
    "gameVersion": "Luna IV",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "original-resin",
    "category": "content",
    "name": "天然樹脂",
    "reading": "てんねんじゅし",
    "summary": "一部の挑戦報酬を受け取るために使う資源。",
    "body": "[[domain]]や[[ley-line-blossom]]などの報酬を受け取る際に消費する資源。[[condensed-resin]]の作成にも使う。",
    "sources": [
      {
        "label": "公式 Luna I 更新情報",
        "url": "https://genshin.hoyoverse.com/ja/news/detail/159349"
      },
      {
        "label": "公式 Ver.1.1 更新情報",
        "url": "https://genshin.hoyoverse.com/ja/news/detail/103763"
      }
    ],
    "gameVersion": "Luna I",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "condensed-resin",
    "category": "content",
    "name": "濃縮樹脂",
    "reading": "のうしゅくじゅし",
    "summary": "一部の報酬をまとめて受け取るために使うアイテム。",
    "body": "[[original-resin]]を使って作成するアイテム。対象の[[ley-line-blossom]]や[[domain]]の報酬受け取りに使える。",
    "sources": [
      {
        "label": "公式 Ver.1.1 更新情報",
        "url": "https://genshin.hoyoverse.com/ja/news/detail/103763"
      },
      {
        "label": "公式 Luna I 更新情報",
        "url": "https://genshin.hoyoverse.com/ja/news/detail/159349"
      }
    ],
    "gameVersion": "Luna I",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "ley-line-blossom",
    "category": "content",
    "name": "地脈の花",
    "reading": "ちみゃくのはな",
    "summary": "挑戦後に報酬を受け取るために活性化する花。",
    "body": "[[original-resin]]を消費して報酬を受け取る。対象の花は[[condensed-resin]]でも活性化できる。",
    "sources": [
      {
        "label": "公式 Ver.1.1 更新情報",
        "url": "https://genshin.hoyoverse.com/ja/news/detail/103763"
      },
      {
        "label": "公式 Luna V 更新情報",
        "url": "https://genshin.hoyoverse.com/ja/news/detail/162806"
      }
    ],
    "gameVersion": "Luna V",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "wish",
    "category": "content",
    "name": "祈願",
    "reading": "きがん",
    "summary": "キャラクターや武器を獲得する仕組み。",
    "body": "キャラクターや武器を獲得できる仕組み。イベント祈願には期間や提供内容が設定され、種類ごとに祈願回数の扱いが異なる。",
    "sources": [
      {
        "label": "公式 Ver.7.2 イベント祈願",
        "url": "https://genshin.hoyoverse.com/ja/news/detail/167139"
      }
    ],
    "gameVersion": "7.2",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "spiral-abyss",
    "category": "content",
    "name": "深境螺旋",
    "reading": "しんきょうらせん",
    "summary": "複数の層に挑む戦闘コンテンツ。",
    "body": "層ごとに敵や条件が設定された戦闘コンテンツ。更新により一部の層の敵や[[ley-line-disorder]]などが変わる。",
    "sources": [
      {
        "label": "公式 Ver.7.2 更新情報",
        "url": "https://genshin.hoyoverse.com/ja/news/detail/167187"
      }
    ],
    "gameVersion": "7.2",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "ley-line-disorder",
    "category": "battle",
    "name": "地脈異常",
    "reading": "ちみゃくいじょう",
    "summary": "秘境などの挑戦に設定される特殊な条件。",
    "body": "[[domain]]や[[spiral-abyss]]の挑戦に設定される条件。内容は挑戦場所や更新時期によって異なる。",
    "sources": [
      {
        "label": "公式 Ver.1.6 更新情報",
        "url": "https://genshin.hoyoverse.com/ja/news/detail/13416"
      },
      {
        "label": "公式 Ver.7.2 更新情報",
        "url": "https://genshin.hoyoverse.com/ja/news/detail/167187"
      }
    ],
    "gameVersion": "7.2",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "artifact-strongbox",
    "category": "growth",
    "name": "聖遺物廻聖",
    "reading": "せいいぶつかいせい",
    "summary": "聖遺物セットを入手できるシステム。",
    "body": "[[artifact]]のセットを入手するシステム。交換対象のセットは更新によって追加される。",
    "sources": [
      {
        "label": "公式 Luna I 更新情報",
        "url": "https://genshin.hoyoverse.com/ja/news/detail/159349"
      }
    ],
    "gameVersion": "Luna I",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "world-level",
    "category": "growth",
    "name": "世界ランク",
    "reading": "せかいらんく",
    "summary": "フィールドの敵や報酬に関わるランク。",
    "body": "上昇すると魔物やボスのレベル、挑戦の難易度、報酬に影響する。上げるために[[adventure-rank]]や突破任務の条件がある。",
    "sources": [
      {
        "label": "公式 Ver.5.0 更新情報",
        "url": "https://genshin.hoyoverse.com/ja/news/detail/125553"
      }
    ],
    "gameVersion": "5.0",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "adventure-rank",
    "category": "growth",
    "name": "冒険ランク",
    "reading": "ぼうけんらんく",
    "summary": "各種コンテンツの開放条件などに関わるランク。",
    "body": "イベントや機能の開放条件として使われるランク。[[world-level]]を上げる条件にも含まれる。",
    "sources": [
      {
        "label": "公式 Ver.7.2 更新情報",
        "url": "https://genshin.hoyoverse.com/ja/news/detail/167187"
      },
      {
        "label": "公式 Ver.5.0 更新情報",
        "url": "https://genshin.hoyoverse.com/ja/news/detail/125553"
      }
    ],
    "gameVersion": "7.2",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "normal-attack",
    "category": "battle",
    "name": "通常攻撃",
    "reading": "つうじょうこうげき",
    "summary": "キャラクターが行う基本的な攻撃。",
    "body": "[[charged-attack]]や[[elemental-skill]]とは別に扱われ、一部の[[artifact]]の効果の発動条件になる。",
    "sources": [
      {
        "label": "公式 更新情報",
        "url": "https://genshin.hoyoverse.com/ja/news/detail/162159"
      }
    ],
    "gameVersion": "Luna IV",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "charged-attack",
    "category": "battle",
    "name": "重撃",
    "reading": "じゅうげき",
    "summary": "キャラクターが行う攻撃の種類の一つ。",
    "body": "[[normal-attack]]とは別の攻撃として扱われ、一部の[[artifact]]の効果の発動条件になる。",
    "sources": [
      {
        "label": "公式 更新情報",
        "url": "https://genshin.hoyoverse.com/ja/news/detail/162159"
      }
    ],
    "gameVersion": "Luna IV",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "crit-rate",
    "category": "battle",
    "name": "会心率",
    "reading": "かいしんりつ",
    "summary": "攻撃が会心になる確率に関わるステータス。",
    "body": "武器や[[artifact]]、キャラクターの効果などで上昇することがある。",
    "sources": [
      {
        "label": "公式 更新情報",
        "url": "https://genshin.hoyoverse.com/ja/news/detail/162159"
      }
    ],
    "gameVersion": "Luna IV",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "nightsoul-points",
    "category": "battle",
    "name": "夜魂値",
    "reading": "やこんち",
    "summary": "夜魂に関係する値。",
    "body": "フィールド上の装備者が消費することで発動する[[artifact]]の効果がある。",
    "sources": [
      {
        "label": "公式 更新情報",
        "url": "https://genshin.hoyoverse.com/ja/news/detail/125553"
      }
    ],
    "gameVersion": "5.0",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "sanctifying-elixir",
    "category": "growth",
    "name": "祈聖のエリクシル",
    "reading": "きせいのえりくしる",
    "summary": "聖遺物の交換に使う消耗品。",
    "body": "[[artifact-transmuter]]で消費し、指定したセットや部位の[[artifact]]との交換に使える。",
    "sources": [
      {
        "label": "公式 更新情報",
        "url": "https://genshin.hoyoverse.com/ja/news/detail/125553"
      }
    ],
    "gameVersion": "5.0",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "artifact-transmuter",
    "category": "growth",
    "name": "聖言のタイプライター",
    "reading": "せいげんのたいぷらいたー",
    "summary": "聖遺物の抽出と交換に使う便利アイテム。",
    "body": "[[artifact]]の抽出や、[[sanctifying-elixir]]を使った聖遺物との交換に使用する。",
    "sources": [
      {
        "label": "公式 更新情報",
        "url": "https://genshin.hoyoverse.com/ja/news/detail/125553"
      }
    ],
    "gameVersion": "5.0",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "imaginarium-theater",
    "category": "content",
    "name": "幻想シアター",
    "reading": "げんそうしあたー",
    "summary": "キャラクターを編成して挑むコンテンツ。",
    "body": "開催ごとに開幕キャストや特別招待キャストが設定される。対応する開幕キャストには幻境の祝福が与えられる。",
    "sources": [
      {
        "label": "公式 更新情報",
        "url": "https://genshin.hoyoverse.com/ja/news/detail/167187"
      }
    ],
    "gameVersion": "7.2",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "envisaged-echoes",
    "category": "content",
    "name": "空想の軌跡",
    "reading": "くうそうのきせき",
    "summary": "キャラクターごとの挑戦ステージを含むコンテンツ。",
    "body": "更新によりキャラクターの挑戦ステージと軌跡外観が追加される。",
    "sources": [
      {
        "label": "公式 更新情報",
        "url": "https://genshin.hoyoverse.com/ja/news/detail/167187"
      }
    ],
    "gameVersion": "7.2",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "parametric-transformer",
    "category": "growth",
    "name": "参量物質変化器",
    "reading": "さんりょうぶっしつへんかき",
    "summary": "アイテムを投入して別のアイテムを得る道具。",
    "body": "ドロップアイテムや採集物を投入し、物質変化によって育成アイテムなどを得る。",
    "sources": [
      {
        "label": "公式 更新情報",
        "url": "https://genshin.hoyoverse.com/ja/news/detail/167187"
      }
    ],
    "gameVersion": "7.2",
    "dataAsOf": "2026-11-18"
  },
  {
    "id": "adventurers-handbook",
    "category": "content",
    "name": "冒険の証",
    "reading": "ぼうけんのあかし",
    "summary": "探索や育成に役立つ情報を確認できる機能。",
    "body": "討伐や[[domain]]の情報を確認できる。「見聞」の任務から[[artifact-transmuter]]を獲得できる。",
    "sources": [
      {
        "label": "公式 更新情報",
        "url": "https://genshin.hoyoverse.com/ja/news/detail/125553"
      }
    ],
    "gameVersion": "5.0",
    "dataAsOf": "2026-11-18"
  }
];
