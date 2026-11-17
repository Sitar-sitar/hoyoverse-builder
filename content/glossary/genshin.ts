import type { GlossaryEntry } from "../../shared/content/glossary";

// ゲーム内の表記と仕様を確認したうえで編集し、pnpm glossary:sync を実行する。
const reactions = { label: "原神 Wiki* 元素反応について（補助）", url: "https://wikiwiki.jp/genshinwiki/元素反応について" };
const update = { label: "公式 Ver.3.2 更新内容", url: "https://genshin.hoyoverse.com/ja/news/detail/25357" };
const night = { label: "公式 Ver.5.3 更新内容", url: "https://genshin.hoyoverse.com/ja/news/detail/127791" };
const game = { label: "公式 ゲーム紹介", url: "https://genshin.hoyoverse.com/ja/game" };
const world = { label: "公式 テイワット紹介", url: "https://genshin.hoyoverse.com/ja/map?region=2" };
const equipment = { label: "公式 ゲーム内テキスト調整", url: "https://genshin.hoyoverse.com/ja/news/detail/103729" };
const stats = { label: "ゲームウィズ 元素の情報まとめ（補助）", url: "https://gamewith.jp/genshin/article/show/231002" };

type Draft = Pick<GlossaryEntry, "id" | "category" | "name" | "reading" | "summary" | "body" | "sources"> & Pick<GlossaryEntry, "aliases" | "related">;
const drafts: Draft[] = [
  { id: "element", category: "battle", name: "元素", reading: "げんそ", summary: "戦闘や探索に関わる七種類の力。", body: "炎・水・風・雷・草・氷・岩の七種類がある。組み合わせによって[[elemental-reaction]]が起こり、戦闘や探索に役立つ。", sources: [game] },
  { id: "elemental-reaction", category: "battle", name: "元素反応", reading: "げんそはんのう", summary: "異なる元素などの組み合わせで生じる効果。", body: "[[element]]の組み合わせにより、[[vaporize]]や[[melt]]のように攻撃を強めるもの、[[bloom]]のように別の効果を生むものなどがある。反応の効果には発動者の[[elemental-mastery]]が関わる。", sources: [game, reactions] },
  { id: "vaporize", category: "battle", name: "蒸発", reading: "じょうはつ", summary: "炎元素と水元素の組み合わせで起こる元素反応。", body: "炎と水による[[elemental-reaction]]。反応を起こした攻撃のダメージを増幅し、後から作用した元素によって倍率が異なる。", sources: [reactions] },
  { id: "melt", category: "battle", name: "溶解", reading: "ようかい", summary: "炎元素と氷元素の組み合わせで起こる元素反応。", body: "炎と氷による[[elemental-reaction]]。反応を起こした攻撃のダメージを増幅し、後から作用した元素によって倍率が異なる。", sources: [reactions] },
  { id: "swirl", category: "battle", name: "拡散", reading: "かくさん", summary: "風元素が特定の元素と反応して起こる効果。", body: "風が炎・水・雷・氷と反応すると発生し、対応する元素のダメージを与え、その元素を周囲に広げる。反応ダメージには発動者のレベルや[[elemental-mastery]]が関わる。", related: ["elemental-reaction"], sources: [reactions] },
  { id: "crystallize", category: "battle", name: "結晶", reading: "けっしょう", summary: "岩元素が特定の元素と反応して欠片を生む効果。", body: "岩が炎・水・雷・氷と反応すると元素の欠片が生成される。欠片を拾うと対応する元素のシールドを獲得できる。", related: ["elemental-reaction"], sources: [reactions, equipment] },
  { id: "quicken", category: "battle", name: "原激化", reading: "げんげきか", summary: "草元素と雷元素によって起こる元素反応。", body: "草と雷の[[elemental-reaction]]で激化状態となる。そこに雷が作用すると[[aggravate]]、草が作用すると[[spread]]が起こる。", sources: [reactions, update] },
  { id: "aggravate", category: "battle", name: "超激化", reading: "ちょうげきか", summary: "激化状態に雷元素が作用して起こる元素反応。", body: "[[quicken|激化状態]]に雷が作用すると発生し、反応を起こした雷元素攻撃の基礎ダメージを増加させる。[[elemental-mastery]]も増加量に関わる。", sources: [reactions, update] },
  { id: "spread", category: "battle", name: "草激化", reading: "くさげきか", summary: "激化状態に草元素が作用して起こる元素反応。", body: "[[quicken|激化状態]]に草が作用すると発生し、反応を起こした草元素攻撃の基礎ダメージを増加させる。[[elemental-mastery]]も増加量に関わる。", sources: [reactions, update] },
  { id: "bloom", category: "battle", name: "開花", reading: "かいか", summary: "草元素と水元素の反応で草原核を生む効果。", body: "草と水の[[elemental-reaction]]で草原核が生成される。草原核は一定時間後に爆発し、雷や炎が作用するとそれぞれ[[hyperbloom]]や[[burgeon]]が起こる。", sources: [reactions, update] },
  { id: "hyperbloom", category: "battle", name: "超開花", reading: "ちょうかいか", summary: "草原核に雷元素が作用して起こる元素反応。", body: "[[bloom]]で生成された草原核に雷が作用すると発生する。草原核が敵を追尾する弾に変化して草元素ダメージを与える。", sources: [reactions, update] },
  { id: "burgeon", category: "battle", name: "烈開花", reading: "れつかいか", summary: "草原核に炎元素が作用して起こる元素反応。", body: "[[bloom]]で生成された草原核に炎が作用すると発生する。草原核が爆発し、範囲内に草元素ダメージを与える。", sources: [reactions, update] },
  { id: "energy", category: "battle", name: "元素エネルギー", reading: "げんそえねるぎー", summary: "元素爆発を使うために蓄えるエネルギー。", body: "[[elemental-burst]]の発動に必要なエネルギー。元素粒子や元素オーブの獲得などで回復し、獲得量には[[energy-recharge]]が関わる。", sources: [stats] },
  { id: "energy-recharge", category: "battle", name: "元素チャージ効率", reading: "げんそちゃーじこうりつ", summary: "元素粒子などから得る元素エネルギーに関わるステータス。", body: "元素粒子や元素オーブを獲得した際の[[energy]]の回復量に関わる。[[elemental-burst]]を使う頻度を考える際に重要。", sources: [stats] },
  { id: "elemental-mastery", category: "battle", name: "元素熟知", reading: "げんそじゅくち", summary: "元素反応の効果に関わるステータス。", body: "反応を起こしたキャラクターの元素熟知は、多くの[[elemental-reaction]]のダメージや[[crystallize]]のシールド吸収量に関わる。元素ダメージ全般を直接増やすものではない。", sources: [stats, reactions] },
  { id: "artifact", category: "growth", name: "聖遺物", reading: "せいいぶつ", summary: "キャラクターに装備しステータスやセット効果を得るアイテム。", body: "キャラクターに装備する育成要素。各部位のステータスを伸ばせるほか、同じセットを一定数装備するとセット効果が発動する。", related: ["talent"], sources: [equipment] },
  { id: "talent", category: "growth", name: "天賦", reading: "てんぷ", summary: "キャラクターが持つ攻撃や能力を表す育成要素。", body: "通常攻撃、[[elemental-skill]]、[[elemental-burst]]などの能力や固有の効果を指す。一部の天賦は素材を使ってレベルを上げられる。", sources: [update] },
  { id: "constellation", category: "growth", name: "命ノ星座", reading: "いのちのせいざ", aliases: ["凸"], summary: "キャラクターの追加効果を解放する育成要素。", body: "キャラクターごとに設定された六つの星座。対応する命ノ星座を解放すると、能力の追加や[[talent]]の強化などを得られる。一般に解放数を「凸」で表す。", sources: [update] },
  { id: "elemental-skill", category: "battle", name: "元素スキル", reading: "げんそすきる", summary: "キャラクターごとに異なる効果を持つ戦闘天賦。", body: "キャラクター固有の[[talent]]の一つ。使用後は通常クールタイムがあり、長押しなどで効果が変わるものもある。", related: ["elemental-burst"], sources: [night] },
  { id: "elemental-burst", category: "battle", name: "元素爆発", reading: "げんそばくはつ", summary: "元素エネルギーを消費して発動する戦闘天賦。", body: "必要な[[energy]]を蓄えて発動するキャラクター固有の[[talent]]。必要量や効果、クールタイムはキャラクターによって異なる。", sources: [night, stats] },
  { id: "vision", category: "world", name: "神の目", reading: "かみのめ", summary: "元素を操る力に関わる、テイワットの人々の持つもの。", body: "[[teyvat]]において、人間の[[element|元素]]を操る力は神の目となって現れると公式の開発者説明で語られている。", sources: [{ label: "公式 開発者共研計画 キャラクター編01", url: "https://genshin.hoyoverse.com/m/ja/news/detail/8647" }] },
  { id: "god", category: "being", name: "魔神", reading: "まじん", summary: "テイワットの歴史や信仰に関わる存在。", body: "[[teyvat]]の歴史に登場する存在。公式の璃月紹介では岩の魔神に言及している。", sources: [world] },
  { id: "teyvat", category: "place", name: "テイワット", reading: "ていわっと", summary: "七つの元素が絡み合う原神の世界。", body: "[[element|七つの元素]]が絡み合う世界。モンドや璃月など、それぞれ異なる文化を持つ地域がある。", sources: [world] },
  { id: "nightsouls-blessing", category: "battle", name: "夜魂の加護", reading: "やこんのかご", summary: "一部のキャラクターが持つ固有の戦闘状態。", body: "ナタの一部キャラクターが入る状態。発動方法や効果はキャラクターによって異なり、[[nightsoul-burst]]とは別の仕組み。", sources: [{ label: "公式 Ver.5.5 正式リリース", url: "https://genshin.hoyoverse.com/ja/news/detail/155172" }, night] },
  { id: "nightsoul-burst", category: "battle", name: "夜魂バースト", reading: "やこんばーすと", summary: "ナタのキャラクターに関わる戦闘中の仕組み。", body: "チーム内のナタのキャラクターに関わる仕組みで、発生時にキャラクターの[[talent]]などが反応する。[[nightsouls-blessing|夜魂の加護]]とは別の仕組み。", sources: [night] },
];

export const entries: GlossaryEntry[] = drafts.map((entry) => ({ ...entry, gameVersion: "7.2", dataAsOf: "2026-11-18" }));
