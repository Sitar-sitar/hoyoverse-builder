// 生成物（pnpm glossary:sync）。手で編集しない。入力は content/glossary/ にある。
import type { SourceText } from "../../../shared/content/types";
export const sources: SourceText[] = [
  {
    "id": "term.hsr.energy.name",
    "ja": "EP",
    "context": "glossary hsr term energy: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.energy.summary",
    "ja": "必殺技を発動するためにキャラクターごとに蓄えるエネルギー。",
    "context": "glossary hsr term energy: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.energy.body",
    "ja": "攻撃や被弾などで蓄積し、必要量がたまると必殺技を発動できる。\n\n味方全体で共有する[[skill-point|SP]]とは別の資源。回復量には[[energy-regeneration-rate]]が関わる。",
    "context": "glossary hsr term energy: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[energy-regeneration-rate]]",
      "[[skill-point|"
    ]
  },
  {
    "id": "term.hsr.energy-regeneration-rate.name",
    "ja": "EP回復効率",
    "context": "glossary hsr term energy-regeneration-rate: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.energy-regeneration-rate.summary",
    "ja": "獲得するEPの回復量に関わるステータス。",
    "context": "glossary hsr term energy-regeneration-rate: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.energy-regeneration-rate.body",
    "ja": "[[energy|EP]]を回復する際の量に関係する。[[relics|遺物]]や[[light-cone|光円錐]]などで調整できる。\n\n一部の味方による[[energy|EP]]回復は、この効率の影響を受けない。",
    "context": "glossary hsr term energy-regeneration-rate: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[energy|",
      "[[light-cone|",
      "[[relics|"
    ]
  },
  {
    "id": "term.hsr.relics.name",
    "ja": "遺物",
    "context": "glossary hsr term relics: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.relics.summary",
    "ja": "キャラクターに装備し、ステータスを調整する育成要素。",
    "context": "glossary hsr term relics: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.relics.body",
    "ja": "キャラクターに装備するアイテム。メインステータスやサブステータスを持ち、装備の組み合わせによる効果もある。\n\n[[planar-ornaments|次元界オーナメント]]も遺物の一種。育成ガイドで進度を、スマート装備画面で装備プランやステータスを確認できる。",
    "context": "glossary hsr term relics: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[planar-ornaments|"
    ]
  },
  {
    "id": "term.hsr.path.name",
    "ja": "運命",
    "context": "glossary hsr term path: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.path.summary",
    "ja": "星神に関わる世界観の概念であり、戦闘ではキャラクターの分類にも使われる。",
    "context": "glossary hsr term path: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.path.body",
    "ja": "世界観では[[aeon]]と関わる概念として語られる。戦闘ではキャラクターや[[light-cone]]の分類としても表示される。\n\n同じ言葉でも、物語の中で語られる意味と戦闘上の分類を分けて読むとわかりやすい。",
    "context": "glossary hsr term path: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[aeon]]",
      "[[light-cone]]"
    ]
  },
  {
    "id": "term.hsr.skill-point.name",
    "ja": "SP",
    "context": "glossary hsr term skill-point: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.skill-point.summary",
    "ja": "味方が共有し、主に戦闘スキルの使用に必要なポイント。",
    "context": "glossary hsr term skill-point: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.skill-point.body",
    "ja": "味方で共有するポイント。通常攻撃で回復し、戦闘スキルを使うと消費するのが基本。\n\nスキルや特殊な行動には例外もあるので、各キャラクターの説明も確認しよう。[[action-order]]に合わせてやりくりすると戦闘スキルを使いやすい。",
    "context": "glossary hsr term skill-point: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[action-order]]"
    ]
  },
  {
    "id": "term.hsr.divergent-universe.name",
    "ja": "階差宇宙",
    "context": "glossary hsr term divergent-universe: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.divergent-universe.summary",
    "ja": "スクリューガムが主導した模擬宇宙に関わる新たなプロジェクト。",
    "context": "glossary hsr term divergent-universe: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.divergent-universe.body",
    "ja": "[[simulated-universe]]に関わる新プロジェクト。スクリューガムが主導し、祝福の組み合わせによって「方程式」を解放する仕組みなどがある。\n\n挑戦の条件や報酬はゲーム内で確認できる。",
    "context": "glossary hsr term divergent-universe: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[simulated-universe]]"
    ]
  },
  {
    "id": "term.hsr.crit-dmg.name",
    "ja": "会心ダメージ",
    "context": "glossary hsr term crit-dmg: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.crit-dmg.summary",
    "ja": "会心が発生した際のダメージに関わるステータス。",
    "context": "glossary hsr term crit-dmg: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.crit-dmg.body",
    "ja": "会心が発生したときのダメージに関係する。発生確率に関わる[[crit-rate|会心率]]とは別の値。\n\n[[relics|遺物]]や味方の能力で調整できる。",
    "context": "glossary hsr term crit-dmg: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[crit-rate|",
      "[[relics|"
    ]
  },
  {
    "id": "term.hsr.crit-rate.name",
    "ja": "会心率",
    "context": "glossary hsr term crit-rate: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.crit-rate.summary",
    "ja": "会心が発生する確率に関わるステータス。",
    "context": "glossary hsr term crit-rate: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.crit-rate.body",
    "ja": "会心が発生する確率に関係する。発生時のダメージを決める[[crit-dmg|会心ダメージ]]とは別の値。\n\n攻撃やダメージの種類によって会心の扱いが異なるため、スキルの説明も確認しよう。",
    "context": "glossary hsr term crit-rate: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[crit-dmg|"
    ]
  },
  {
    "id": "term.hsr.memosprite.name",
    "ja": "記憶の精霊",
    "context": "glossary hsr term memosprite: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.memosprite.summary",
    "ja": "「記憶」の運命を歩むキャラクターが扱う召喚物。",
    "context": "glossary hsr term memosprite: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.memosprite.body",
    "ja": "[[path|記憶の運命]]を歩むキャラクターが扱う召喚物。精霊によって得意なことや戦闘中の役割が異なる。\n\n公式発表では、アグライアが精霊ラフトラを召喚し、連携攻撃を行う例が紹介されている。",
    "context": "glossary hsr term memosprite: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[path|"
    ]
  },
  {
    "id": "term.hsr.traces.name",
    "ja": "軌跡",
    "context": "glossary hsr term traces: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.traces.summary",
    "ja": "キャラクターの能力を強化・解放する育成要素。",
    "context": "glossary hsr term traces: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.traces.body",
    "ja": "素材を使ってキャラクターの能力を強化したり、追加能力やステータスを解放したりする育成要素。\n\n育成ガイドでは軌跡の育成進度を確認できる。",
    "context": "glossary hsr term traces: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.pure-fiction.name",
    "ja": "虚構叙事",
    "context": "glossary hsr term pure-fiction: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.pure-fiction.summary",
    "ja": "編成を整えてステージに挑む挑戦コンテンツ。",
    "context": "glossary hsr term pure-fiction: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.pure-fiction.body",
    "ja": "ゲーム内の挑戦コンテンツのひとつ。次々に現れる敵との戦闘に挑み、ステージのポイントを獲得して報酬を目指す。\n\n[[memory-of-chaos]]・[[apocalyptic-shadow]]とともに「星拓きモード」が追加されている。",
    "context": "glossary hsr term pure-fiction: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[apocalyptic-shadow]]",
      "[[memory-of-chaos]]"
    ]
  },
  {
    "id": "term.hsr.break-effect.name",
    "ja": "撃破特効",
    "context": "glossary hsr term break-effect: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.break-effect.summary",
    "ja": "弱点撃破に関係するダメージや効果を強めるステータス。",
    "context": "glossary hsr term break-effect: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.break-effect.body",
    "ja": "[[weakness-break]]で発生するダメージや、属性に応じた撃破効果に関係する。\n\n[[weakness-break-efficiency]]は[[toughness]]の削りやすさに関係する別の効果。[[super-break-damage]]にも関係する。",
    "context": "glossary hsr term break-effect: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[super-break-damage]]",
      "[[toughness]]",
      "[[weakness-break-efficiency]]",
      "[[weakness-break]]"
    ]
  },
  {
    "id": "term.hsr.effect-res.name",
    "ja": "効果抵抗",
    "context": "glossary hsr term effect-res: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.effect-res.summary",
    "ja": "受ける効果に抵抗する確率に関わるステータス。",
    "context": "glossary hsr term effect-res: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.effect-res.body",
    "ja": "デバフなどを受ける際の抵抗に関係する。付与側の[[effect-hit-rate|効果命中]]とは異なる。\n\n抵抗できるかは効果ごとに異なり、固定確率など個別の条件にも注意が必要。",
    "context": "glossary hsr term effect-res: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[effect-hit-rate|"
    ]
  },
  {
    "id": "term.hsr.effect-hit-rate.name",
    "ja": "効果命中",
    "context": "glossary hsr term effect-hit-rate: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.effect-hit-rate.summary",
    "ja": "敵への効果付与の成功率に関わるステータス。",
    "context": "glossary hsr term effect-hit-rate: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.effect-hit-rate.body",
    "ja": "敵にデバフなどを付与する際の成功率に関係する。効果の基礎確率や対象の[[effect-res|効果抵抗]]なども結果に影響する。\n\nすべての効果に適用されるわけではないため、各能力の条件を確認しよう。",
    "context": "glossary hsr term effect-hit-rate: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[effect-res|"
    ]
  },
  {
    "id": "term.hsr.action-order.name",
    "ja": "行動順",
    "context": "glossary hsr term action-order: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.action-order.summary",
    "ja": "戦闘中に味方や敵が行動する順番。",
    "context": "glossary hsr term action-order: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.action-order.body",
    "ja": "戦闘画面のアクションバーで味方と敵の行動予定を確認できる。[[speed]]のほか、行動順を早める・遅らせる効果によって変化する。\n\n必殺技など、通常の行動順とは異なるタイミングで使える行動もある。",
    "context": "glossary hsr term action-order: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[speed]]"
    ]
  },
  {
    "id": "term.hsr.action-advance-and-delay.name",
    "ja": "行動順短縮・遅延",
    "context": "glossary hsr term action-advance-and-delay: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.action-advance-and-delay.summary",
    "ja": "対象の次の行動を早めたり遅らせたりする効果。",
    "context": "glossary hsr term action-advance-and-delay: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.action-advance-and-delay.body",
    "ja": "[[action-order|行動順]]を直接変える効果。短縮は次の行動を早め、遅延は遅らせる。\n\n[[speed|速度]]の変更とは別の効果で、実際の順番はほかの対象や効果によっても変わる。",
    "context": "glossary hsr term action-advance-and-delay: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[action-order|",
      "[[speed|"
    ]
  },
  {
    "id": "term.hsr.memory-of-chaos.name",
    "ja": "混沌の記憶",
    "context": "glossary hsr term memory-of-chaos: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.memory-of-chaos.summary",
    "ja": "忘却の庭にある挑戦コンテンツ。",
    "context": "glossary hsr term memory-of-chaos: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.memory-of-chaos.body",
    "ja": "「忘却の庭」にある挑戦コンテンツ。編成を整えてステージに挑み、敵を倒すまでにかかったラウンド数などの条件を満たして報酬を目指す。\n\n[[pure-fiction]]・[[apocalyptic-shadow]]とともに「星拓きモード」が追加されている。",
    "context": "glossary hsr term memory-of-chaos: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[apocalyptic-shadow]]",
      "[[pure-fiction]]"
    ]
  },
  {
    "id": "term.hsr.planar-ornaments.name",
    "ja": "次元界オーナメント",
    "context": "glossary hsr term planar-ornaments: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.planar-ornaments.summary",
    "ja": "キャラクターに装備する遺物の一種。",
    "context": "glossary hsr term planar-ornaments: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.planar-ornaments.body",
    "ja": "キャラクターに装備する[[relics|遺物]]の一種。次元界オーブと連結縄の2部位があり、組み合わせによりセット効果を得られる。\n\nゲーム内ではオーナメントを獲得できるコンテンツやイベントが用意されている。",
    "context": "glossary hsr term planar-ornaments: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[relics|"
    ]
  },
  {
    "id": "term.hsr.damage-over-time.name",
    "ja": "持続ダメージ",
    "context": "glossary hsr term damage-over-time: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.damage-over-time.summary",
    "ja": "状態の継続中に所定のタイミングで発生するダメージ。",
    "context": "glossary hsr term damage-over-time: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.damage-over-time.body",
    "ja": "燃焼、感電、裂創、風化などの状態によって発生するダメージ。[[weakness-break|弱点撃破]]によって付与されるものもある。\n\n発生のタイミングや継続期間は効果の説明で確認できる。",
    "context": "glossary hsr term damage-over-time: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[weakness-break|"
    ]
  },
  {
    "id": "term.hsr.weakness-break.name",
    "ja": "弱点撃破",
    "context": "glossary hsr term weakness-break: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.weakness-break.summary",
    "ja": "敵の靭性を0にすると発生する戦闘上の効果。",
    "context": "glossary hsr term weakness-break: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.weakness-break.body",
    "ja": "敵の[[toughness]]を0にすると発生する。撃破時にはダメージを与え、属性に応じた効果が発生する。\n\n例えば物理属性では裂創、氷属性では凍結を付与する。",
    "context": "glossary hsr term weakness-break: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[toughness]]"
    ]
  },
  {
    "id": "term.hsr.weakness-break-efficiency.name",
    "ja": "弱点撃破効率",
    "context": "glossary hsr term weakness-break-efficiency: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.weakness-break-efficiency.summary",
    "ja": "敵の靭性を削る効率に関わる効果。",
    "context": "glossary hsr term weakness-break-efficiency: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.weakness-break-efficiency.body",
    "ja": "値が上がると、対象となる攻撃で削れる[[toughness]]が増え、[[weakness-break]]を狙いやすくなる。\n\n[[break-effect]]は撃破時のダメージなどに関係する別のステータス。",
    "context": "glossary hsr term weakness-break-efficiency: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[break-effect]]",
      "[[toughness]]",
      "[[weakness-break]]"
    ]
  },
  {
    "id": "term.hsr.toughness.name",
    "ja": "靭性",
    "context": "glossary hsr term toughness: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.toughness.summary",
    "ja": "敵が持つ、弱点属性の攻撃などで削ることができるゲージ。",
    "context": "glossary hsr term toughness: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.toughness.body",
    "ja": "敵のHPとは別に表示されるゲージ。弱点属性の攻撃で削ることができ、0になると[[weakness-break]]が発生する。\n\nスキルによっては弱点属性を無視して削るものもある。",
    "context": "glossary hsr term toughness: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[weakness-break]]"
    ]
  },
  {
    "id": "term.hsr.interastral-peace-corporation.name",
    "ja": "スターピースカンパニー",
    "context": "glossary hsr term interastral-peace-corporation: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.interastral-peace-corporation.summary",
    "ja": "銀河を舞台に活動する組織で、カンパニーとも呼ばれる。",
    "context": "glossary hsr term interastral-peace-corporation: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.interastral-peace-corporation.body",
    "ja": "通称「カンパニー」。公式発表ではジェイドがその高級幹部として紹介されている。\n\n[[astral-express]]や[[xianzhou-alliance]]など、さまざまな勢力とともに物語に登場する。",
    "context": "glossary hsr term interastral-peace-corporation: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[astral-express]]",
      "[[xianzhou-alliance]]"
    ]
  },
  {
    "id": "term.hsr.stellaron.name",
    "ja": "星核",
    "context": "glossary hsr term stellaron: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.stellaron.summary",
    "ja": "各地で危機を引き起こす、物語の中心となる存在。",
    "context": "glossary hsr term stellaron: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.stellaron.body",
    "ja": "銀河のさまざまな世界に危機をもたらす存在。[[xianzhou-alliance|仙舟]]「羅浮」でも星核による危機が公式の人物紹介で言及されている。\n\nその性質や個々の事件にまつわる詳細は、物語を進めながら確かめられる。",
    "context": "glossary hsr term stellaron: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[xianzhou-alliance|"
    ]
  },
  {
    "id": "term.hsr.stellaron-hunters.name",
    "ja": "星核ハンター",
    "context": "glossary hsr term stellaron-hunters: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.stellaron-hunters.summary",
    "ja": "カフカや銀狼などが所属する謎の多い組織。",
    "context": "glossary hsr term stellaron-hunters: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.stellaron-hunters.body",
    "ja": "カフカや銀狼などが所属する、謎の多い組織。公式紹介では銀狼がその一員として紹介されている。\n\n[[stellaron|星核]]に関わる組織で、その詳しい目的は物語を進めながら確かめられる。",
    "context": "glossary hsr term stellaron-hunters: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[stellaron|"
    ]
  },
  {
    "id": "term.hsr.astral-express.name",
    "ja": "星穹列車",
    "context": "glossary hsr term astral-express: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.astral-express.summary",
    "ja": "開拓者たちが乗り、銀河の世界を巡る列車。",
    "context": "glossary hsr term astral-express: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.astral-express.body",
    "ja": "開拓者が乗り、宇宙に広がる未知の世界を巡る列車。[[nameless|ナナシビト]]たちとともに開拓の旅を続ける。\n\n[[aeon|星神]]や[[path|運命]]にまつわる物語の入口にもなる。",
    "context": "glossary hsr term astral-express: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[aeon|",
      "[[nameless|",
      "[[path|"
    ]
  },
  {
    "id": "term.hsr.eidolon.name",
    "ja": "星魂",
    "context": "glossary hsr term eidolon: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.eidolon.summary",
    "ja": "キャラクター固有の能力を段階的に解放する育成要素。",
    "context": "glossary hsr term eidolon: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.eidolon.body",
    "ja": "星魂同調でキャラクター固有の効果を順番に解放する。効果には能力の追加や[[traces|軌跡]]のレベル上昇などがあり、キャラクターごとに異なる。\n\n解放段階は「1凸」「2凸」のようにも呼ばれ、未解放は「無凸」と呼ばれる。多くのキャラクターは、所持済みの同じキャラクターを再び獲得すると星魂を入手できる。",
    "context": "glossary hsr term eidolon: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[traces|"
    ]
  },
  {
    "id": "term.hsr.aeon.name",
    "ja": "星神",
    "context": "glossary hsr term aeon: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.aeon.summary",
    "ja": "宇宙のそれぞれの運命に関わる、強大な存在。",
    "context": "glossary hsr term aeon: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.aeon.body",
    "ja": "[[path]]と関わる強大な存在。たとえば[[genius-society]]は「知恵」の星神ヌースに見いだされた天才たちの集まりとして紹介されている。",
    "context": "glossary hsr term aeon: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[genius-society]]",
      "[[path]]"
    ]
  },
  {
    "id": "term.hsr.xianzhou-alliance.name",
    "ja": "仙舟同盟",
    "context": "glossary hsr term xianzhou-alliance: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.xianzhou-alliance.summary",
    "ja": "仙舟「羅浮」などに関わる、物語に登場する勢力。",
    "context": "glossary hsr term xianzhou-alliance: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.xianzhou-alliance.body",
    "ja": "仙舟「羅浮」などに関わる勢力。[[astral-express]]や[[interastral-peace-corporation|カンパニー]]とともに、さまざまな世界の物語に登場する。",
    "context": "glossary hsr term xianzhou-alliance: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[astral-express]]",
      "[[interastral-peace-corporation|"
    ]
  },
  {
    "id": "term.hsr.speed.name",
    "ja": "速度",
    "context": "glossary hsr term speed: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.speed.summary",
    "ja": "戦闘中の行動する速さに影響するステータス。",
    "context": "glossary hsr term speed: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.speed.body",
    "ja": "速度は[[action-order]]に影響し、値が高いほど一般に次の行動が早く回ってくる。[[relics]]などで調整できる。\n\n[[action-order]]を直接変えるスキルもあるため、速度だけで順番が決まるわけではない。",
    "context": "glossary hsr term speed: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[action-order]]",
      "[[relics]]"
    ]
  },
  {
    "id": "term.hsr.super-break-damage.name",
    "ja": "超撃破ダメージ",
    "context": "glossary hsr term super-break-damage: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.super-break-damage.summary",
    "ja": "スキルの効果によって削靭値などから発生するダメージ。",
    "context": "glossary hsr term super-break-damage: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.super-break-damage.body",
    "ja": "対応する能力がある場合に発生するダメージで、[[break-effect]]などが関係する。通常は[[weakness-break]]状態の敵への攻撃が条件となる能力がある。\n\nダリアの結界のように、撃破前の敵にも超撃破ダメージを与えられる能力があるため、発動条件は各スキルの説明を確認しよう。",
    "context": "glossary hsr term super-break-damage: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[break-effect]]",
      "[[weakness-break]]"
    ]
  },
  {
    "id": "term.hsr.follow-up-attack.name",
    "ja": "追加攻撃",
    "context": "glossary hsr term follow-up-attack: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.follow-up-attack.summary",
    "ja": "能力に記された条件を満たすと発動する攻撃。",
    "context": "glossary hsr term follow-up-attack: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.follow-up-attack.body",
    "ja": "キャラクターや装備の能力に定められた条件を満たした際に発動する攻撃。自分の通常の行動以外のタイミングでも発動するものがある。\n\n不死途は味方による特定の敵への攻撃をきっかけに追加攻撃を行う。",
    "context": "glossary hsr term follow-up-attack: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.genius-society.name",
    "ja": "天才クラブ",
    "context": "glossary hsr term genius-society: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.genius-society.summary",
    "ja": "「知恵」の星神ヌースに見いだされた天才たちが名を連ねる、宇宙規模の集まり。",
    "context": "glossary hsr term genius-society: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.genius-society.body",
    "ja": "「知恵」の[[aeon|星神]]ヌースの目に留まった天才が会員になる集まり。会員には番号があり、公式の紹介ではマダム・ヘルタが#83、ルアン・メェイが#81とされている。\n\n会員の出身や研究分野、目指すものはそれぞれ異なり、多くはひとりで研究を続けている。組織として一緒に活動するというより、ヌースに選ばれたという点でつながった集まりに近い。\n\n[[simulated-universe]]は、ヘルタ、ルアン・メェイ、スクリューガム、スティーブンという天才クラブの会員たちが共同で開発したものとされている。",
    "context": "glossary hsr term genius-society: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[aeon|",
      "[[simulated-universe]]"
    ]
  },
  {
    "id": "term.hsr.nameless.name",
    "ja": "ナナシビト",
    "context": "glossary hsr term nameless: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.nameless.summary",
    "ja": "開拓の旅を続け、世界をつなぐ者たちの呼称。",
    "context": "glossary hsr term nameless: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.nameless.body",
    "ja": "開拓の旅に出て、さまざまな世界をつなぐ者たち。[[astral-express]]の仲間と関わりが深い。",
    "context": "glossary hsr term nameless: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[astral-express]]"
    ]
  },
  {
    "id": "term.hsr.light-cone.name",
    "ja": "光円錐",
    "context": "glossary hsr term light-cone: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.light-cone.summary",
    "ja": "キャラクターに装備する育成要素のひとつ。",
    "context": "glossary hsr term light-cone: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.light-cone.body",
    "ja": "キャラクターに装備して、ステータスを補う。装備するキャラクターの[[path]]と一致すると、その光円錐のスキルも有効になる。\n\n育成ガイドではキャラクターの光円錐の育成進度を確認できる。",
    "context": "glossary hsr term light-cone: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[path]]"
    ]
  },
  {
    "id": "term.hsr.apocalyptic-shadow.name",
    "ja": "末日の幻影",
    "context": "glossary hsr term apocalyptic-shadow: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.apocalyptic-shadow.summary",
    "ja": "強敵に挑む常設の挑戦コンテンツ。",
    "context": "glossary hsr term apocalyptic-shadow: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.apocalyptic-shadow.body",
    "ja": "Ver.2.3で追加された常設コンテンツ。ステージに挑み、条件に応じた報酬を目指す。\n\n[[memory-of-chaos]]・[[pure-fiction]]とともに「星拓きモード」が追加されている。",
    "context": "glossary hsr term apocalyptic-shadow: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[memory-of-chaos]]",
      "[[pure-fiction]]"
    ]
  },
  {
    "id": "term.hsr.simulated-universe.name",
    "ja": "模擬宇宙",
    "context": "glossary hsr term simulated-universe: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.simulated-universe.summary",
    "ja": "天才クラブの会員たちが開発に携わった宇宙のシミュレーション。",
    "context": "glossary hsr term simulated-universe: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.simulated-universe.body",
    "ja": "[[genius-society]]の会員たちが共同開発に関わったプロジェクト。ゲーム内では様々な試練に挑戦できる。\n\n関連する新プロジェクトとして[[divergent-universe]]がある。",
    "context": "glossary hsr term simulated-universe: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[divergent-universe]]",
      "[[genius-society]]"
    ]
  }
];
