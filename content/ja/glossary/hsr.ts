// 生成物（pnpm glossary:sync）。手で編集しない。入力は content/glossary/ にある。
import type { SourceText } from "../../../shared/content/types";
export const sources: SourceText[] = [
  {
    "id": "term.hsr.aha-moment.name",
    "ja": "アッハタイム",
    "context": "glossary hsr term aha-moment: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.aha-moment.summary",
    "ja": "愉悦の運命に関わる戦闘中の仕組み。",
    "context": "glossary hsr term aha-moment: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.aha-moment.body",
    "ja": "[[path|愉悦の運命]]に関わる戦闘中の仕組み。キャラクターの能力によって発動や効果が変わり、終了後に[[certified-banger|爆笑の褒美]]を得る例もある。[[punchline|爆笑ネタ]]との関係は各能力を確認しよう。",
    "context": "glossary hsr term aha-moment: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[certified-banger|",
      "[[path|",
      "[[punchline|"
    ]
  },
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
    "ja": "攻撃や被弾などで蓄積し、必要量がたまると[[ultimate|必殺技]]を発動できる。\n\n味方全体で共有する[[skill-point|SP]]とは別の資源。回復量には[[energy-regeneration-rate]]が関わる。",
    "context": "glossary hsr term energy: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[energy-regeneration-rate]]",
      "[[skill-point|",
      "[[ultimate|"
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
    "id": "term.hsr.character-training-guide.name",
    "ja": "育成ガイド",
    "context": "glossary hsr term character-training-guide: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.character-training-guide.summary",
    "ja": "キャラクターの育成進度や素材を確認する機能。",
    "context": "glossary hsr term character-training-guide: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.character-training-guide.body",
    "ja": "キャラクターのレベル、[[light-cone|光円錐]]、[[traces|軌跡]]、[[relics|遺物]]の育成進度を確認できる機能。育成対象を設定すると必要な素材も確認できる。",
    "context": "glossary hsr term character-training-guide: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[light-cone|",
      "[[relics|",
      "[[traces|"
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
    "ja": "キャラクターに装備するアイテム。[[relic-main-stat|メインステータス]]や[[relic-sub-stat|サブステータス]]を持ち、装備の組み合わせによる効果もある。\n\n[[planar-ornaments|次元界オーナメント]]も遺物の一種。[[character-training-guide|育成ガイド]]で進度を、[[relic-smart-equip|スマート装備]]画面で装備プランやステータスを確認できる。",
    "context": "glossary hsr term relics: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[character-training-guide|",
      "[[planar-ornaments|",
      "[[relic-main-stat|",
      "[[relic-smart-equip|",
      "[[relic-sub-stat|"
    ]
  },
  {
    "id": "term.hsr.relic-enhancement.name",
    "ja": "遺物強化",
    "context": "glossary hsr term relic-enhancement: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.relic-enhancement.summary",
    "ja": "遺物のレベルを上げる育成。",
    "context": "glossary hsr term relic-enhancement: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.relic-enhancement.body",
    "ja": "素材を使って[[relics|遺物]]のレベルを上げる。[[relic-main-stat|メインステータス]]が上昇し、一定の強化段階では[[relic-sub-stat|サブステータス]]の追加や上昇も発生する。",
    "context": "glossary hsr term relic-enhancement: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[relic-main-stat|",
      "[[relic-sub-stat|",
      "[[relics|"
    ]
  },
  {
    "id": "term.hsr.relic-synthesis.name",
    "ja": "遺物合成",
    "context": "glossary hsr term relic-synthesis: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.relic-synthesis.summary",
    "ja": "素材を使って遺物を作る仕組み。",
    "context": "glossary hsr term relic-synthesis: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.relic-synthesis.body",
    "ja": "素材を使い、指定したセットや部位の[[relics|遺物]]を作る仕組み。[[self-modeling-resin|自塑樹脂]]を使うと、[[relic-main-stat|メイン]]・[[relic-sub-stat|サブステータス]]を指定できる。必要数や利用条件はゲーム内で確認しよう。",
    "context": "glossary hsr term relic-synthesis: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[relic-main-stat|",
      "[[relic-sub-stat|",
      "[[relics|",
      "[[self-modeling-resin|"
    ]
  },
  {
    "id": "term.hsr.character-event-warp.name",
    "ja": "イベント跳躍・キャラクター",
    "context": "glossary hsr term character-event-warp: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.character-event-warp.summary",
    "ja": "期間中に特定キャラクターの出現率が上がる跳躍。",
    "context": "glossary hsr term character-event-warp: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.character-event-warp.body",
    "ja": "開催期間中に特定のキャラクターを獲得できる[[warp|跳躍]]の区分。[[star-rail-special-pass|星軌専用チケット]]を使用する。提供内容や期間は各跳躍の詳細を確認しよう。",
    "context": "glossary hsr term character-event-warp: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[star-rail-special-pass|",
      "[[warp|"
    ]
  },
  {
    "id": "term.hsr.light-cone-event-warp.name",
    "ja": "イベント跳躍・光円錐",
    "context": "glossary hsr term light-cone-event-warp: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.light-cone-event-warp.summary",
    "ja": "期間中に特定の光円錐を獲得できる跳躍。",
    "context": "glossary hsr term light-cone-event-warp: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.light-cone-event-warp.body",
    "ja": "開催期間中に特定の[[light-cone|光円錐]]を獲得できる[[warp|跳躍]]の区分。[[character-event-warp|イベント跳躍・キャラクター]]とは提供内容が異なる。詳しい条件は跳躍画面で確認しよう。",
    "context": "glossary hsr term light-cone-event-warp: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[character-event-warp|",
      "[[light-cone|",
      "[[warp|"
    ]
  },
  {
    "id": "term.hsr.herta-space-station.name",
    "ja": "宇宙ステーション「ヘルタ」",
    "context": "glossary hsr term herta-space-station: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.herta-space-station.summary",
    "ja": "物語の序盤に訪れる宇宙ステーション。",
    "context": "glossary hsr term herta-space-station: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.herta-space-station.body",
    "ja": "開拓者が物語の序盤に訪れる宇宙ステーション。[[genius-society|天才クラブ]]のヘルタに関わり、[[astral-express|星穹列車]]の旅の出発点のひとつとなる。",
    "context": "glossary hsr term herta-space-station: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[astral-express|",
      "[[genius-society|"
    ]
  },
  {
    "id": "term.hsr.cosmic-fragment.name",
    "ja": "宇宙の欠片",
    "context": "glossary hsr term cosmic-fragment: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.cosmic-fragment.summary",
    "ja": "模擬宇宙などの挑戦中に使う資源。",
    "context": "glossary hsr term cosmic-fragment: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.cosmic-fragment.body",
    "ja": "[[simulated-universe]]や[[divergent-universe]]の挑戦中に獲得・使用する資源。[[blessing|祝福]]に関わる選択などに使う場面がある。利用できる用途は挑戦中に確認しよう。",
    "context": "glossary hsr term cosmic-fragment: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[blessing|",
      "[[divergent-universe]]",
      "[[simulated-universe]]"
    ]
  },
  {
    "id": "term.hsr.swarm-disaster.name",
    "ja": "宇宙の蝗害",
    "context": "glossary hsr term swarm-disaster: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.swarm-disaster.summary",
    "ja": "模擬宇宙の拡張コンテンツ。",
    "context": "glossary hsr term swarm-disaster: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.swarm-disaster.body",
    "ja": "[[simulated-universe|模擬宇宙]]の拡張コンテンツのひとつ。専用の仕組みを使いながらエリアを進み、試練に挑む。",
    "context": "glossary hsr term swarm-disaster: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[simulated-universe|"
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
    "id": "term.hsr.switch-path.name",
    "ja": "運命切替",
    "context": "glossary hsr term switch-path: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.switch-path.summary",
    "ja": "対応キャラクターの運命を切り替える機能。",
    "context": "glossary hsr term switch-path: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.switch-path.body",
    "ja": "対応キャラクターの[[path|運命]]を切り替える機能。開拓者には異なる運命が用意されている。使用できる運命や切替条件はキャラクター画面で確認しよう。",
    "context": "glossary hsr term switch-path: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[path|"
    ]
  },
  {
    "id": "term.hsr.hp.name",
    "ja": "HP",
    "context": "glossary hsr term hp: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.hp.summary",
    "ja": "キャラクターの生存に関わるステータス。",
    "context": "glossary hsr term hp: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.hp.body",
    "ja": "ダメージを受けると減少する値。HPが尽きると原則として戦闘不能になる。[[healing|治癒]]で回復でき、[[shield|バリア]]は受けるダメージを防ぐ。",
    "context": "glossary hsr term hp: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[healing|",
      "[[shield|"
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
    "ja": "味方で共有するポイント。[[basic-attack|通常攻撃]]で回復し、[[skill|戦闘スキル]]を使うと消費するのが基本。\n\nスキルや特殊な行動には例外もあるので、各キャラクターの説明も確認しよう。[[action-order]]に合わせてやりくりすると戦闘スキルを使いやすい。",
    "context": "glossary hsr term skill-point: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[action-order]]",
      "[[basic-attack|",
      "[[skill|"
    ]
  },
  {
    "id": "term.hsr.gold-and-gears.name",
    "ja": "黄金と機械",
    "context": "glossary hsr term gold-and-gears: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.gold-and-gears.summary",
    "ja": "模擬宇宙の拡張コンテンツ。",
    "context": "glossary hsr term gold-and-gears: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.gold-and-gears.body",
    "ja": "[[simulated-universe|模擬宇宙]]の拡張コンテンツのひとつ。サイコロ面を組み合わせ、専用の仕組みを使って挑戦する。",
    "context": "glossary hsr term gold-and-gears: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[simulated-universe|"
    ]
  },
  {
    "id": "term.hsr.okushitsu.name",
    "ja": "憶質",
    "context": "glossary hsr term okushitsu: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.okushitsu.summary",
    "ja": "記憶の精霊に関わる能力で使われる用語。",
    "context": "glossary hsr term okushitsu: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.okushitsu.body",
    "ja": "[[memosprite|記憶の精霊]]に関わる能力で使われる用語。公式紹介では長夜月が獲得し、「長夜」の戦闘能力に関わる例が示されている。蓄積や利用の条件は能力ごとに確認しよう。",
    "context": "glossary hsr term okushitsu: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[memosprite|"
    ]
  },
  {
    "id": "term.hsr.amphoreus.name",
    "ja": "オンパロス",
    "context": "glossary hsr term amphoreus: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.amphoreus.summary",
    "ja": "星穹列車が旅する謎に包まれた世界。",
    "context": "glossary hsr term amphoreus: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.amphoreus.body",
    "ja": "[[astral-express|星穹列車]]が開拓の旅で訪れる世界。公式紹介では外部から観測できない謎の天体として語られ、住民は「タイタン」と呼ばれる神を信仰している。",
    "context": "glossary hsr term amphoreus: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[astral-express|"
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
    "ja": "[[simulated-universe]]に関わる新プロジェクト。スクリューガムが主導し、[[blessing|祝福]]の組み合わせによって「[[equation|方程式]]」を解放する仕組みなどがある。\n\n挑戦の条件や報酬はゲーム内で確認できる。",
    "context": "glossary hsr term divergent-universe: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[blessing|",
      "[[equation|",
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
    "id": "term.hsr.trailblaze-mission.name",
    "ja": "開拓クエスト",
    "context": "glossary hsr term trailblaze-mission: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.trailblaze-mission.summary",
    "ja": "物語の進行に関わるクエスト。",
    "context": "glossary hsr term trailblaze-mission: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.trailblaze-mission.body",
    "ja": "[[astral-express|星穹列車]]の旅に関わるクエスト。関連する物語を描く[[trailblaze-continuance|幕間]]もある。進行に応じて新たな世界を訪れる。[[finalitys-vision|終焉の視界]]で一部を先行体験できる場合もある。",
    "context": "glossary hsr term trailblaze-mission: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[astral-express|",
      "[[finalitys-vision|",
      "[[trailblaze-continuance|"
    ]
  },
  {
    "id": "term.hsr.trailblaze-continuance.name",
    "ja": "開拓クエスト・幕間",
    "context": "glossary hsr term trailblaze-continuance: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.trailblaze-continuance.summary",
    "ja": "開拓の旅に関わる物語を描くクエストの区分。",
    "context": "glossary hsr term trailblaze-continuance: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.trailblaze-continuance.body",
    "ja": "[[trailblaze-mission|開拓クエスト]]に関連する物語を描くクエストの区分。公式のお知らせでは[[penacony|ピノコニー]]や[[xianzhou-luofu|仙舟「羅浮」]]を舞台とした幕間が紹介されている。",
    "context": "glossary hsr term trailblaze-continuance: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[penacony|",
      "[[trailblaze-mission|",
      "[[xianzhou-luofu|"
    ]
  },
  {
    "id": "term.hsr.trailblaze-power.name",
    "ja": "開拓力",
    "context": "glossary hsr term trailblaze-power: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.trailblaze-power.summary",
    "ja": "素材を獲得する際などに使う資源。",
    "context": "glossary hsr term trailblaze-power: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.trailblaze-power.body",
    "ja": "時間とともに回復する資源。[[calyx|疑似花萼]]などの報酬獲得に使う。[[reserved-trailblaze-power|予備開拓力]]は別に蓄積される。回復や上限の詳細はゲーム内で確認できる。",
    "context": "glossary hsr term trailblaze-power: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[calyx|",
      "[[reserved-trailblaze-power|"
    ]
  },
  {
    "id": "term.hsr.trailblaze-level.name",
    "ja": "開拓レベル",
    "context": "glossary hsr term trailblaze-level: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.trailblaze-level.summary",
    "ja": "ゲームの進行に関わるレベル。",
    "context": "glossary hsr term trailblaze-level: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.trailblaze-level.body",
    "ja": "開拓者の進行に関わるレベル。クエストや各種コンテンツの参加条件になる場合がある。[[equilibrium-level|均衡レベル]]とは別の指標。",
    "context": "glossary hsr term trailblaze-level: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[equilibrium-level|"
    ]
  },
  {
    "id": "term.hsr.true-damage.name",
    "ja": "確定ダメージ",
    "context": "glossary hsr term true-damage: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.true-damage.summary",
    "ja": "特定の能力の効果で発生するダメージ。",
    "context": "glossary hsr term true-damage: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.true-damage.body",
    "ja": "能力の効果などによって発生するダメージ。公式紹介では[[path|記憶の運命]]を歩むキュレネの結界中に味方のダメージをきっかけとして追加発生する例がある。発生条件はそれぞれの能力を確認しよう。",
    "context": "glossary hsr term true-damage: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[path|"
    ]
  },
  {
    "id": "term.hsr.masked-fools.name",
    "ja": "仮面の愚者",
    "context": "glossary hsr term masked-fools: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.masked-fools.summary",
    "ja": "物語に登場する勢力のひとつ。",
    "context": "glossary hsr term masked-fools: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.masked-fools.body",
    "ja": "宇宙のさまざまな勢力とともに物語に登場する集まり。[[planarcadia|二相楽園]]に関する公式発表でもその名が紹介されている。",
    "context": "glossary hsr term masked-fools: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[planarcadia|"
    ]
  },
  {
    "id": "term.hsr.shock.name",
    "ja": "感電",
    "context": "glossary hsr term shock: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.shock.summary",
    "ja": "雷属性の持続ダメージに関わる状態。",
    "context": "glossary hsr term shock: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.shock.body",
    "ja": "対象に[[damage-over-time|持続ダメージ]]を与える状態のひとつ。雷属性の[[weakness-break|弱点撃破]]などで付与される。発生のタイミングや持続時間は効果ごとに確認しよう。",
    "context": "glossary hsr term shock: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[damage-over-time|",
      "[[weakness-break|"
    ]
  },
  {
    "id": "term.hsr.wishpower.name",
    "ja": "願力",
    "context": "glossary hsr term wishpower: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.wishpower.summary",
    "ja": "星神★アッハの能力に関わる資源。",
    "context": "glossary hsr term wishpower: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.wishpower.body",
    "ja": "星神★アッハの能力に関わる戦闘中の資源。公式紹介では味方が蓄積に関わり、最大になると[[ultimate|必殺技]]を発動できるとされる。[[energy|EP]]や[[punchline|爆笑ネタ]]とは区別しよう。",
    "context": "glossary hsr term wishpower: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[energy|",
      "[[punchline|",
      "[[ultimate|"
    ]
  },
  {
    "id": "term.hsr.serendipity-eidolon.name",
    "ja": "奇縁星魂",
    "context": "glossary hsr term serendipity-eidolon: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.serendipity-eidolon.summary",
    "ja": "対象キャラクターの追加スキルを解放する育成要素。",
    "context": "glossary hsr term serendipity-eidolon: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.serendipity-eidolon.body",
    "ja": "対応キャラクターを所持し、そのキャラクターに対応する奇縁星魂を解放すると、追加スキルを獲得できる。通常の[[eidolon|星魂]]とは別の育成要素として、対象や解放条件をゲーム内で確認しよう。",
    "context": "glossary hsr term serendipity-eidolon: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[eidolon|"
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
    "id": "term.hsr.calyx.name",
    "ja": "疑似花萼",
    "context": "glossary hsr term calyx: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.calyx.summary",
    "ja": "育成素材などを獲得できるステージ。",
    "context": "glossary hsr term calyx: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.calyx.body",
    "ja": "[[trailblaze-power|開拓力]]を使って報酬を獲得するステージ。「金」と「赤」があり、選ぶ蕾によって得られる素材が異なる。赤の一部では[[traces|軌跡]]素材を獲得できる。",
    "context": "glossary hsr term calyx: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[traces|",
      "[[trailblaze-power|"
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
    "ja": "素材を使ってキャラクターの能力を強化したり、追加能力やステータスを解放したりする育成要素。\n\n[[character-training-guide|育成ガイド]]では軌跡の育成進度を確認できる。",
    "context": "glossary hsr term traces: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[character-training-guide|"
    ]
  },
  {
    "id": "term.hsr.base-speed.name",
    "ja": "基礎速度",
    "context": "glossary hsr term base-speed: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.base-speed.summary",
    "ja": "速度を構成する基礎となる値。",
    "context": "glossary hsr term base-speed: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.base-speed.body",
    "ja": "キャラクターの[[speed|速度]]を考える際に基礎となる値。速度の割合上昇と固定値の加算は扱いが異なる。[[light-cone|光円錐]]などの個別効果や戦闘中の変化は、各能力の説明を確認しよう。",
    "context": "glossary hsr term base-speed: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[light-cone|",
      "[[speed|"
    ]
  },
  {
    "id": "term.hsr.curio.name",
    "ja": "奇物",
    "context": "glossary hsr term curio: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.curio.summary",
    "ja": "模擬宇宙などの挑戦中に獲得する特殊なアイテム。",
    "context": "glossary hsr term curio: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.curio.body",
    "ja": "[[simulated-universe]]や[[divergent-universe]]の挑戦に影響する特殊なアイテム。効果はそれぞれ異なり、有利なものだけでなく扱いに注意が必要なものもある。",
    "context": "glossary hsr term curio: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[divergent-universe]]",
      "[[simulated-universe]]"
    ]
  },
  {
    "id": "term.hsr.character-ascension.name",
    "ja": "キャラクター昇格",
    "context": "glossary hsr term character-ascension: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.character-ascension.summary",
    "ja": "キャラクターのレベル上限を引き上げる育成。",
    "context": "glossary hsr term character-ascension: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.character-ascension.body",
    "ja": "育成素材などを使ってキャラクターを昇格させ、レベル上限を引き上げる。昇格素材の一部は[[stagnant-shadow|凝結虚影]]で獲得できる。",
    "context": "glossary hsr term character-ascension: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[stagnant-shadow|"
    ]
  },
  {
    "id": "term.hsr.buff.name",
    "ja": "強化状態",
    "context": "glossary hsr term buff: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.buff.summary",
    "ja": "ステータス上昇など、対象に有利に働く効果。",
    "context": "glossary hsr term buff: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.buff.body",
    "ja": "[[attack|攻撃力]]の上昇など、対象に有利に働く状態や効果。効果の内容や継続時間は能力によって異なる。[[debuff|デバフ]]とは区別して確認しよう。",
    "context": "glossary hsr term buff: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[attack|",
      "[[debuff|"
    ]
  },
  {
    "id": "term.hsr.stagnant-shadow.name",
    "ja": "凝結虚影",
    "context": "glossary hsr term stagnant-shadow: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.stagnant-shadow.summary",
    "ja": "キャラクターの昇格素材を獲得できるステージ。",
    "context": "glossary hsr term stagnant-shadow: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.stagnant-shadow.body",
    "ja": "敵に挑み、[[trailblaze-power|開拓力]]を使ってキャラクターの昇格に必要な素材を獲得できるステージ。必要な素材に対応した場所を選ぼう。",
    "context": "glossary hsr term stagnant-shadow: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[trailblaze-power|"
    ]
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
    "id": "term.hsr.imprisonment.name",
    "ja": "禁錮",
    "context": "glossary hsr term imprisonment: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.imprisonment.summary",
    "ja": "対象の行動順などに影響する状態。",
    "context": "glossary hsr term imprisonment: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.imprisonment.body",
    "ja": "虚数属性の[[weakness-break|弱点撃破]]などで付与される状態。対象の[[action-advance-and-delay|行動順を遅らせる]]効果に関わる。状態の詳しい条件は能力の説明を確認しよう。",
    "context": "glossary hsr term imprisonment: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[action-advance-and-delay|",
      "[[weakness-break|"
    ]
  },
  {
    "id": "term.hsr.equilibrium-level.name",
    "ja": "均衡レベル",
    "context": "glossary hsr term equilibrium-level: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.equilibrium-level.summary",
    "ja": "敵やステージの難易度に関わるレベル。",
    "context": "glossary hsr term equilibrium-level: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.equilibrium-level.body",
    "ja": "敵や一部ステージの難易度に関わるレベル。[[trailblaze-level|開拓レベル]]とは異なり、試練に関係する。対象となるコンテンツや条件はゲーム内で確認しよう。",
    "context": "glossary hsr term equilibrium-level: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[trailblaze-level|"
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
    "ja": "[[weakness-break]]で発生するダメージや、[[element|属性]]に応じた撃破効果に関係する。\n\n[[weakness-break-efficiency]]は[[toughness]]の削りやすさに関係する別の効果。[[super-break-damage]]にも関係する。",
    "context": "glossary hsr term break-effect: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[element|",
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
    "ja": "[[debuff|デバフ]]などを受ける際の抵抗に関係する。付与側の[[effect-hit-rate|効果命中]]とは異なる。\n\n抵抗できるかは効果ごとに異なり、固定確率など個別の条件にも注意が必要。",
    "context": "glossary hsr term effect-res: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[debuff|",
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
    "ja": "敵に[[debuff|デバフ]]などを付与する際の成功率に関係する。効果の基礎確率や対象の[[effect-res|効果抵抗]]なども結果に影響する。\n\nすべての効果に適用されるわけではないため、各能力の条件を確認しよう。",
    "context": "glossary hsr term effect-hit-rate: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[debuff|",
      "[[effect-res|"
    ]
  },
  {
    "id": "term.hsr.attack.name",
    "ja": "攻撃力",
    "context": "glossary hsr term attack: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.attack.summary",
    "ja": "能力の効果量に関わるステータス。",
    "context": "glossary hsr term attack: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.attack.body",
    "ja": "攻撃などの効果量を決める際に参照されるステータス。能力によっては[[hp|HP]]や[[defense|防御力]]などを参照するため、各能力の説明を確認しよう。",
    "context": "glossary hsr term attack: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[defense|",
      "[[hp|"
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
    "ja": "戦闘画面のアクションバーで味方と敵の行動予定を確認できる。[[speed]]のほか、行動順を早める・遅らせる効果によって変化する。\n\n[[ultimate|必殺技]]など、通常の行動順とは異なるタイミングで使える行動もある。",
    "context": "glossary hsr term action-order: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[speed]]",
      "[[ultimate|"
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
    "id": "term.hsr.crowd-control.name",
    "ja": "行動不能状態",
    "context": "glossary hsr term crowd-control: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.crowd-control.summary",
    "ja": "対象の行動を制限する状態。",
    "context": "glossary hsr term crowd-control: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.crowd-control.body",
    "ja": "[[frozen|凍結]]など、対象の行動を制限する状態。解除の条件や持続時間は状態ごとに異なる。[[debuff|デバフ]]への抵抗や解除が関わる場合もあるため、能力の説明を確認しよう。",
    "context": "glossary hsr term crowd-control: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[debuff|",
      "[[frozen|"
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
    "ja": "[[forgotten-hall|忘却の庭]]にある挑戦コンテンツ。編成を整えてステージに挑み、敵を倒すまでにかかったラウンド数などの条件を満たして報酬を目指す。\n\n[[pure-fiction]]・[[apocalyptic-shadow]]とともに「星拓きモード」が追加されている。",
    "context": "glossary hsr term memory-of-chaos: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[apocalyptic-shadow]]",
      "[[forgotten-hall|",
      "[[pure-fiction]]"
    ]
  },
  {
    "id": "term.hsr.toughness-reduction.name",
    "ja": "削靭値",
    "context": "glossary hsr term toughness-reduction: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.toughness-reduction.summary",
    "ja": "攻撃などによって敵の靭性を削る量。",
    "context": "glossary hsr term toughness-reduction: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.toughness-reduction.body",
    "ja": "攻撃などが敵の[[toughness|靭性]]を削る量。攻撃や能力によって異なり、[[weakness-break-efficiency|弱点撃破効率]]などの影響を受ける。個々の条件は能力説明を確認しよう。",
    "context": "glossary hsr term toughness-reduction: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[toughness|",
      "[[weakness-break-efficiency|"
    ]
  },
  {
    "id": "term.hsr.relic-sub-stat.name",
    "ja": "サブステータス",
    "context": "glossary hsr term relic-sub-stat: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.relic-sub-stat.summary",
    "ja": "遺物に付く追加のステータス。",
    "context": "glossary hsr term relic-sub-stat: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.relic-sub-stat.body",
    "ja": "[[relics|遺物]]に付く追加のステータス。強化によって新たに付いたり、既存の値が上がったりする。[[relic-main-stat|メインステータス]]とは別に表示される。",
    "context": "glossary hsr term relic-sub-stat: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[relic-main-stat|",
      "[[relics|"
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
    "ja": "キャラクターに装備する[[relics|遺物]]の一種。次元界オーブと連結縄の2部位があり、組み合わせにより[[relic-set-effect|セット効果]]を得られる。\n\nゲーム内ではオーナメントを獲得できるコンテンツやイベントが用意されている。",
    "context": "glossary hsr term planar-ornaments: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[relic-set-effect|",
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
    "ja": "[[burn|燃焼]]、[[shock|感電]]、[[bleed|裂創]]、[[wind-shear|風化]]などの状態によって発生するダメージ。[[weakness-break|弱点撃破]]によって付与されるものもある。\n\n発生のタイミングや継続期間は効果の説明で確認できる。",
    "context": "glossary hsr term damage-over-time: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[bleed|",
      "[[burn|",
      "[[shock|",
      "[[weakness-break|",
      "[[wind-shear|"
    ]
  },
  {
    "id": "term.hsr.self-modeling-resin.name",
    "ja": "自塑樹脂",
    "context": "glossary hsr term self-modeling-resin: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.self-modeling-resin.summary",
    "ja": "遺物合成でメイン・サブステータスの指定に使うアイテム。",
    "context": "glossary hsr term self-modeling-resin: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.self-modeling-resin.body",
    "ja": "[[relic-synthesis|遺物合成]]で使うアイテム。作成する遺物の[[relic-main-stat|メインステータス]]や[[relic-sub-stat|サブステータス]]を指定できる。指定できる候補や必要数は合成画面で確認しよう。",
    "context": "glossary hsr term self-modeling-resin: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[relic-main-stat|",
      "[[relic-sub-stat|",
      "[[relic-synthesis|"
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
    "ja": "敵の[[toughness]]を0にすると発生する。撃破時にはダメージを与え、[[element|属性]]に応じた効果が発生する。\n\n例えば物理属性では[[bleed|裂創]]、氷属性では[[frozen|凍結]]を付与する。",
    "context": "glossary hsr term weakness-break: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[bleed|",
      "[[element|",
      "[[frozen|",
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
    "id": "term.hsr.enemy-weakness.name",
    "ja": "弱点属性",
    "context": "glossary hsr term enemy-weakness: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.enemy-weakness.summary",
    "ja": "敵の靭性を削る際に関わる属性。",
    "context": "glossary hsr term enemy-weakness: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.enemy-weakness.body",
    "ja": "敵ごとに設定された[[element|属性]]。基本的に対応する属性の攻撃で[[toughness|靭性]]を削り、0にすると[[weakness-break|弱点撃破]]が発生する。能力によっては属性が一致しなくても靭性を削れる。",
    "context": "glossary hsr term enemy-weakness: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[element|",
      "[[toughness|",
      "[[weakness-break|"
    ]
  },
  {
    "id": "term.hsr.finalitys-vision.name",
    "ja": "終焉の視界",
    "context": "glossary hsr term finalitys-vision: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.finalitys-vision.summary",
    "ja": "一部コンテンツの先行体験に関わる機能。",
    "context": "glossary hsr term finalitys-vision: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.finalitys-vision.body",
    "ja": "参加条件となる進行を満たしていない場合にも、一部のコンテンツを先行体験できる機能。対象や条件はゲーム内で確認しよう。物語を先に体験する場合は内容に注意。",
    "context": "glossary hsr term finalitys-vision: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.blessing.name",
    "ja": "祝福",
    "context": "glossary hsr term blessing: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.blessing.summary",
    "ja": "模擬宇宙などの挑戦中に獲得する効果。",
    "context": "glossary hsr term blessing: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.blessing.body",
    "ja": "[[simulated-universe]]や[[divergent-universe]]の挑戦中に獲得する効果。選んだ祝福によって戦闘を有利に進められる。階差宇宙では組み合わせが[[equation|方程式]]にも関わる。",
    "context": "glossary hsr term blessing: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[divergent-universe]]",
      "[[equation|",
      "[[simulated-universe]]"
    ]
  },
  {
    "id": "term.hsr.cavern-of-corrosion.name",
    "ja": "侵蝕トンネル",
    "context": "glossary hsr term cavern-of-corrosion: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.cavern-of-corrosion.summary",
    "ja": "トンネル遺物を獲得できるステージ。",
    "context": "glossary hsr term cavern-of-corrosion: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.cavern-of-corrosion.body",
    "ja": "敵に挑み、[[trailblaze-power|開拓力]]を使ってトンネル[[relics|遺物]]を獲得するステージ。場所によって獲得できる遺物のセットが異なる。",
    "context": "glossary hsr term cavern-of-corrosion: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[relics|",
      "[[trailblaze-power|"
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
    "ja": "敵の[[hp|HP]]とは別に表示されるゲージ。[[enemy-weakness|弱点属性]]の攻撃で削ることができ、0になると[[weakness-break]]が発生する。\n\nスキルによっては弱点属性を無視して削るものもある。",
    "context": "glossary hsr term toughness: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[enemy-weakness|",
      "[[hp|",
      "[[weakness-break]]"
    ]
  },
  {
    "id": "term.hsr.credit.name",
    "ja": "信用ポイント",
    "context": "glossary hsr term credit: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.credit.summary",
    "ja": "育成や各種操作などで使うゲーム内通貨。",
    "context": "glossary hsr term credit: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.credit.body",
    "ja": "キャラクターや[[light-cone|光円錐]]の育成など、さまざまな場面で使うゲーム内通貨。[[calyx|疑似花萼]]などの報酬で獲得できる。",
    "context": "glossary hsr term credit: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[calyx|",
      "[[light-cone|"
    ]
  },
  {
    "id": "term.hsr.wishful-resin.name",
    "ja": "遂願樹脂",
    "context": "glossary hsr term wishful-resin: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.wishful-resin.summary",
    "ja": "かつて遺物合成でサブステータスの指定に使われていたアイテム。",
    "context": "glossary hsr term wishful-resin: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.wishful-resin.body",
    "ja": "かつて[[relic-synthesis|遺物合成]]時の[[relic-sub-stat|サブステータス]]指定に使われたアイテム。Ver.3.5で[[self-modeling-resin|自塑樹脂]]へ統合され、所持分も自動で変換された。現在の合成には自塑樹脂を使う。",
    "context": "glossary hsr term wishful-resin: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[relic-sub-stat|",
      "[[relic-synthesis|",
      "[[self-modeling-resin|"
    ]
  },
  {
    "id": "term.hsr.interastral-peace-guide.name",
    "ja": "スターピースガイド",
    "context": "glossary hsr term interastral-peace-guide: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.interastral-peace-guide.summary",
    "ja": "ゲーム内の挑戦や育成の情報を確認できる画面。",
    "context": "glossary hsr term interastral-peace-guide: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.interastral-peace-guide.body",
    "ja": "さまざまなコンテンツや報酬を確認するためのゲーム内ガイド。[[survival-index|生存手引書]]から[[calyx|疑似花萼]]や[[cavern-of-corrosion|侵蝕トンネル]]などのステージを選べる。",
    "context": "glossary hsr term interastral-peace-guide: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[calyx|",
      "[[cavern-of-corrosion|",
      "[[survival-index|"
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
    "id": "term.hsr.relic-smart-equip.name",
    "ja": "スマート装備",
    "context": "glossary hsr term relic-smart-equip: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.relic-smart-equip.summary",
    "ja": "遺物の装備プランを選べる機能。",
    "context": "glossary hsr term relic-smart-equip: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.relic-smart-equip.body",
    "ja": "キャラクターの[[relics|遺物]]画面で、システムおすすめやカスタムなどのプランを選べる機能。[[effective-substats|有効サブステータス]]数なども確認できる。",
    "context": "glossary hsr term relic-smart-equip: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[effective-substats|",
      "[[relics|"
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
    "id": "term.hsr.star-rail-special-pass.name",
    "ja": "星軌専用チケット",
    "context": "glossary hsr term star-rail-special-pass: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.star-rail-special-pass.summary",
    "ja": "イベント跳躍などに使うチケット。",
    "context": "glossary hsr term star-rail-special-pass: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.star-rail-special-pass.body",
    "ja": "イベント[[warp|跳躍]]などで使用するチケット。[[star-rail-pass|星軌チケット]]とは使用先が異なるため、対象の跳躍画面で確認しよう。",
    "context": "glossary hsr term star-rail-special-pass: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[star-rail-pass|",
      "[[warp|"
    ]
  },
  {
    "id": "term.hsr.star-rail-pass.name",
    "ja": "星軌チケット",
    "context": "glossary hsr term star-rail-pass: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.star-rail-pass.summary",
    "ja": "対応する跳躍で使うチケット。",
    "context": "glossary hsr term star-rail-pass: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.star-rail-pass.body",
    "ja": "一部の[[warp|跳躍]]で使用するチケット。[[star-rail-special-pass|星軌専用チケット]]とは使用先が異なるため、跳躍画面で確認しよう。",
    "context": "glossary hsr term star-rail-pass: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[star-rail-special-pass|",
      "[[warp|"
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
    "id": "term.hsr.stellar-jade.name",
    "ja": "星玉",
    "context": "glossary hsr term stellar-jade: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.stellar-jade.summary",
    "ja": "跳躍用チケットとの交換などに使うアイテム。",
    "context": "glossary hsr term stellar-jade: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.stellar-jade.body",
    "ja": "[[warp|跳躍]]に使うチケットの交換などに使えるアイテム。クエストや各種コンテンツの報酬などで獲得できる。交換先や必要数はゲーム内で確認しよう。",
    "context": "glossary hsr term stellar-jade: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[warp|"
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
    "id": "term.hsr.survival-index.name",
    "ja": "生存手引書",
    "context": "glossary hsr term survival-index: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.survival-index.summary",
    "ja": "育成素材を獲得できるステージへの案内。",
    "context": "glossary hsr term survival-index: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.survival-index.body",
    "ja": "[[interastral-peace-guide|スターピースガイド]]内の案内。[[calyx|疑似花萼]]、[[stagnant-shadow|凝結虚影]]、[[cavern-of-corrosion|侵蝕トンネル]]、[[echo-of-war|歴戦余韻]]などの挑戦先を確認できる。",
    "context": "glossary hsr term survival-index: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[calyx|",
      "[[cavern-of-corrosion|",
      "[[echo-of-war|",
      "[[interastral-peace-guide|",
      "[[stagnant-shadow|"
    ]
  },
  {
    "id": "term.hsr.relic-set-effect.name",
    "ja": "セット効果",
    "context": "glossary hsr term relic-set-effect: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.relic-set-effect.summary",
    "ja": "同じセットの遺物を組み合わせたときに得られる効果。",
    "context": "glossary hsr term relic-set-effect: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.relic-set-effect.body",
    "ja": "同じセットの[[relics|遺物]]を所定の数だけ装備したときに発動する効果。トンネル遺物と[[planar-ornaments|次元界オーナメント]]では必要な装備数や効果をそれぞれ確認しよう。",
    "context": "glossary hsr term relic-set-effect: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[planar-ornaments|",
      "[[relics|"
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
    "ja": "[[xianzhou-luofu|仙舟「羅浮」]]などに関わる勢力。[[astral-express]]や[[interastral-peace-corporation|カンパニー]]とともに、さまざまな世界の物語に登場する。",
    "context": "glossary hsr term xianzhou-alliance: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[astral-express]]",
      "[[interastral-peace-corporation|",
      "[[xianzhou-luofu|"
    ]
  },
  {
    "id": "term.hsr.xianzhou-luofu.name",
    "ja": "仙舟「羅浮」",
    "context": "glossary hsr term xianzhou-luofu: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.xianzhou-luofu.summary",
    "ja": "仙舟同盟に属する仙舟のひとつ。",
    "context": "glossary hsr term xianzhou-luofu: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.xianzhou-luofu.body",
    "ja": "[[xianzhou-alliance|仙舟同盟]]に属し、[[astral-express|星穹列車]]の旅の舞台となる仙舟。公式紹介では仙舟「羅浮」として登場する。",
    "context": "glossary hsr term xianzhou-luofu: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[astral-express|",
      "[[xianzhou-alliance|"
    ]
  },
  {
    "id": "term.hsr.skill.name",
    "ja": "戦闘スキル",
    "context": "glossary hsr term skill: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.skill.summary",
    "ja": "キャラクターが戦闘中に使う固有の能力。",
    "context": "glossary hsr term skill: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.skill.body",
    "ja": "キャラクターが戦闘中に使う能力。基本的には味方で共有する[[skill-point|SP]]を消費する。攻撃、味方の強化、回復などの効果はキャラクターごとに異なる。",
    "context": "glossary hsr term skill: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[skill-point|"
    ]
  },
  {
    "id": "term.hsr.element.name",
    "ja": "属性",
    "context": "glossary hsr term element: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.element.summary",
    "ja": "キャラクターや攻撃などに設定される分類。",
    "context": "glossary hsr term element: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.element.body",
    "ja": "物理・炎・氷・雷・風・量子・虚数の7種類がある。攻撃の属性と敵の[[enemy-weakness|弱点属性]]が合うと、通常は[[toughness|靭性]]を削れる。",
    "context": "glossary hsr term element: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[enemy-weakness|",
      "[[toughness|"
    ]
  },
  {
    "id": "term.hsr.type-resistance.name",
    "ja": "属性耐性",
    "context": "glossary hsr term type-resistance: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.type-resistance.summary",
    "ja": "属性ごとのダメージに関わる耐性。",
    "context": "glossary hsr term type-resistance: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.type-resistance.body",
    "ja": "対象が受ける[[element|属性]]ごとのダメージに関わる値。[[resistance-penetration|属性耐性貫通]]や耐性を下げる効果は、属性を確認して使おう。",
    "context": "glossary hsr term type-resistance: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[element|",
      "[[resistance-penetration|"
    ]
  },
  {
    "id": "term.hsr.resistance-penetration.name",
    "ja": "属性耐性貫通",
    "context": "glossary hsr term resistance-penetration: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.resistance-penetration.summary",
    "ja": "攻撃時に対象の属性耐性を貫通する効果。",
    "context": "glossary hsr term resistance-penetration: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.resistance-penetration.body",
    "ja": "対象の[[type-resistance|属性耐性]]を貫通する効果。対応する[[element|属性]]や継続時間は能力の説明を確認しよう。対象の[[defense|防御力]]に関わる[[defense-ignore|防御力無視]]とは別の効果。",
    "context": "glossary hsr term resistance-penetration: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[defense-ignore|",
      "[[defense|",
      "[[element|",
      "[[type-resistance|"
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
    "id": "term.hsr.travel-log.name",
    "ja": "旅記録",
    "context": "glossary hsr term travel-log: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.travel-log.summary",
    "ja": "イベントなどの情報を確認するゲーム内画面。",
    "context": "glossary hsr term travel-log: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.travel-log.body",
    "ja": "ゲーム内イベントなどの案内や進行状況を確認する画面。イベントによっては[[stellar-jade|星玉]]などの報酬がある。参加条件や開催期間は各イベントで確認しよう。",
    "context": "glossary hsr term travel-log: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[stellar-jade|"
    ]
  },
  {
    "id": "term.hsr.healing.name",
    "ja": "治癒",
    "context": "glossary hsr term healing: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.healing.summary",
    "ja": "対象のHPを回復する効果。",
    "context": "glossary hsr term healing: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.healing.body",
    "ja": "対象の[[hp|HP]]を回復する効果。回復の対象や量、発動条件はキャラクターの能力などによって異なる。[[shield|バリア]]は受けるダメージを防ぐ別の効果。",
    "context": "glossary hsr term healing: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[hp|",
      "[[shield|"
    ]
  },
  {
    "id": "term.hsr.outgoing-healing-boost.name",
    "ja": "治癒量",
    "context": "glossary hsr term outgoing-healing-boost: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.outgoing-healing-boost.summary",
    "ja": "HPを回復する効果の量。",
    "context": "glossary hsr term outgoing-healing-boost: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.outgoing-healing-boost.body",
    "ja": "[[healing|治癒]]によって回復する[[hp|HP]]の量。能力の参照値や治癒に関する効果などによって変化する。対象や回復条件は能力ごとに確認しよう。",
    "context": "glossary hsr term outgoing-healing-boost: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[healing|",
      "[[hp|"
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
    "id": "term.hsr.superimposition.name",
    "ja": "重畳",
    "context": "glossary hsr term superimposition: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.superimposition.summary",
    "ja": "光円錐のスキル効果の段階を上げる育成。",
    "context": "glossary hsr term superimposition: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.superimposition.body",
    "ja": "[[light-cone|光円錐]]の重畳ランクを上げ、そのスキル効果を強化する育成。対応する同名の光円錐や専用素材を使う。[[light-cone-ascension|昇格]]やレベル強化とは別。",
    "context": "glossary hsr term superimposition: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[light-cone-ascension|",
      "[[light-cone|"
    ]
  },
  {
    "id": "term.hsr.warp.name",
    "ja": "跳躍",
    "context": "glossary hsr term warp: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.warp.summary",
    "ja": "キャラクターや光円錐の獲得に関わる仕組み。",
    "context": "glossary hsr term warp: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.warp.body",
    "ja": "[[star-rail-pass|星軌チケット]]や[[star-rail-special-pass|星軌専用チケット]]などを使い、キャラクターや[[light-cone|光円錐]]を獲得する仕組み。種類ごとに使用するチケットや提供内容が異なる。",
    "context": "glossary hsr term warp: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[light-cone|",
      "[[star-rail-pass|",
      "[[star-rail-special-pass|"
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
    "ja": "キャラクターや装備の能力に定められた条件を満たした際に発動する攻撃。自分の通常の行動以外のタイミングでも発動するものがある。\n\n不死途は[[talent|天賦]]によって、味方による特定の敵への攻撃をきっかけに追加攻撃を行う。",
    "context": "glossary hsr term follow-up-attack: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[talent|"
    ]
  },
  {
    "id": "term.hsr.basic-attack.name",
    "ja": "通常攻撃",
    "context": "glossary hsr term basic-attack: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.basic-attack.summary",
    "ja": "戦闘中に使う基本的な攻撃。",
    "context": "glossary hsr term basic-attack: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.basic-attack.body",
    "ja": "戦闘中に使用する基本的な攻撃。通常は[[skill-point|SP]]を回復する。強化された通常攻撃など、効果や扱いが異なる場合は各能力の説明を確認しよう。",
    "context": "glossary hsr term basic-attack: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[skill-point|"
    ]
  },
  {
    "id": "term.hsr.as-ive-written.name",
    "ja": "紡がれた物語",
    "context": "glossary hsr term as-ive-written: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.as-ive-written.summary",
    "ja": "オンパロスの英雄物語を閲覧できるコンテンツ。",
    "context": "glossary hsr term as-ive-written: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.as-ive-written.body",
    "ja": "[[amphoreus|オンパロス]]の物語に関わるコンテンツ。[[trailblaze-mission|開拓クエスト]]などで得た「無名の追憶」を使ってカードを解放し、英雄物語を閲覧できる。",
    "context": "glossary hsr term as-ive-written: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[amphoreus|",
      "[[trailblaze-mission|"
    ]
  },
  {
    "id": "term.hsr.daily-training.name",
    "ja": "デイリー訓練",
    "context": "glossary hsr term daily-training: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.daily-training.summary",
    "ja": "日々の行動や目標に応じて報酬を受け取る仕組み。",
    "context": "glossary hsr term daily-training: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.daily-training.body",
    "ja": "日々の目標に取り組み、条件を満たして報酬を受け取る仕組み。[[interastral-peace-guide|スターピースガイド]]から進捗を確認できる。目標や報酬はゲーム内で確認しよう。",
    "context": "glossary hsr term daily-training: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[interastral-peace-guide|"
    ]
  },
  {
    "id": "term.hsr.debuff.name",
    "ja": "デバフ",
    "context": "glossary hsr term debuff: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.debuff.summary",
    "ja": "対象の能力を下げるなど、不利に働く効果。",
    "context": "glossary hsr term debuff: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.debuff.body",
    "ja": "能力の低下など、対象に不利に働く効果。付与には[[effect-hit-rate|効果命中]]や[[effect-res|効果抵抗]]が関係するものがあるが、能力によって条件は異なる。",
    "context": "glossary hsr term debuff: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[effect-hit-rate|",
      "[[effect-res|"
    ]
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
    "id": "term.hsr.talent.name",
    "ja": "天賦",
    "context": "glossary hsr term talent: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.talent.summary",
    "ja": "キャラクター固有の、条件に応じて働く能力。",
    "context": "glossary hsr term talent: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.talent.body",
    "ja": "キャラクターが持つ固有の能力。発動条件と効果はそれぞれ異なり、条件を満たすと[[follow-up-attack|追加攻撃]]を行うものもある。[[traces|軌跡]]画面で能力の詳細を確認できる。戦闘前に使う能力には[[technique|秘技]]がある。",
    "context": "glossary hsr term talent: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[follow-up-attack|",
      "[[technique|",
      "[[traces|"
    ]
  },
  {
    "id": "term.hsr.frozen.name",
    "ja": "凍結",
    "context": "glossary hsr term frozen: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.frozen.summary",
    "ja": "対象の行動を制限する状態。",
    "context": "glossary hsr term frozen: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.frozen.body",
    "ja": "[[crowd-control|行動不能状態]]のひとつ。氷属性の[[weakness-break|弱点撃破]]などで付与される。効果の発生や解除の条件は能力の説明を確認しよう。",
    "context": "glossary hsr term frozen: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[crowd-control|",
      "[[weakness-break|"
    ]
  },
  {
    "id": "term.hsr.companion-mission.name",
    "ja": "同行クエスト",
    "context": "glossary hsr term companion-mission: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.companion-mission.summary",
    "ja": "登場人物に関わる物語を体験するクエスト。",
    "context": "glossary hsr term companion-mission: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.companion-mission.body",
    "ja": "登場人物に関わる物語を体験できるクエスト。[[trailblaze-mission|開拓クエスト]]とは別の区分として登場し、受注条件や内容は各クエストで確認できる。",
    "context": "glossary hsr term companion-mission: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[trailblaze-mission|"
    ]
  },
  {
    "id": "term.hsr.insight-mode.name",
    "ja": "洞察モード",
    "context": "glossary hsr term insight-mode: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.insight-mode.summary",
    "ja": "階差宇宙の挑戦を補助するモード。",
    "context": "glossary hsr term insight-mode: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.insight-mode.body",
    "ja": "[[divergent-universe|階差宇宙]]で選べるモード。味方の与ダメージや被ダメージに補助が入り、エリアに入ると[[blessing|祝福]]などを獲得できる。公式Ver.3.0案内では、このモードでのクリア時は階差宇宙の称号を獲得できないとしている。",
    "context": "glossary hsr term insight-mode: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[blessing|",
      "[[divergent-universe|"
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
    "id": "term.hsr.planarcadia.name",
    "ja": "二相楽園",
    "context": "glossary hsr term planarcadia: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.planarcadia.summary",
    "ja": "星穹列車の旅に登場する世界。",
    "context": "glossary hsr term planarcadia: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.planarcadia.body",
    "ja": "[[astral-express|星穹列車]]の旅に登場する世界。公式発表では「幻月遊儀」を舞台に、さまざまな勢力が集う場所として紹介されている。",
    "context": "glossary hsr term planarcadia: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[astral-express|"
    ]
  },
  {
    "id": "term.hsr.burn.name",
    "ja": "燃焼",
    "context": "glossary hsr term burn: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.burn.summary",
    "ja": "炎属性の持続ダメージに関わる状態。",
    "context": "glossary hsr term burn: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.burn.body",
    "ja": "対象に[[damage-over-time|持続ダメージ]]を与える状態のひとつ。炎属性の[[weakness-break|弱点撃破]]などで付与される。発生のタイミングや持続時間は効果ごとに確認しよう。",
    "context": "glossary hsr term burn: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[damage-over-time|",
      "[[weakness-break|"
    ]
  },
  {
    "id": "term.hsr.fuel.name",
    "ja": "燃料",
    "context": "glossary hsr term fuel: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.fuel.summary",
    "ja": "開拓力の回復に使うアイテム。",
    "context": "glossary hsr term fuel: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.fuel.body",
    "ja": "[[trailblaze-power|開拓力]]を回復するために使用できるアイテム。獲得できる場面や使用条件はゲーム内で確認しよう。",
    "context": "glossary hsr term fuel: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[trailblaze-power|"
    ]
  },
  {
    "id": "term.hsr.punchline.name",
    "ja": "爆笑ネタ",
    "context": "glossary hsr term punchline: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.punchline.summary",
    "ja": "愉悦の運命に関わる戦闘中の資源。",
    "context": "glossary hsr term punchline: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.punchline.body",
    "ja": "[[path|愉悦の運命]]に関わる能力などで獲得する資源。キャラクターによって獲得や利用の方法が異なり、[[aha-moment|アッハタイム]]に関わる能力もある。",
    "context": "glossary hsr term punchline: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[aha-moment|",
      "[[path|"
    ]
  },
  {
    "id": "term.hsr.certified-banger.name",
    "ja": "爆笑の褒美",
    "context": "glossary hsr term certified-banger: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.certified-banger.summary",
    "ja": "愉悦のキャラクターに関わる強化効果。",
    "context": "glossary hsr term certified-banger: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.certified-banger.body",
    "ja": "[[path|愉悦の運命]]に関わる強化効果。[[aha-moment|アッハタイム]]終了後に得られるものなどがあり、内容や獲得条件はキャラクターごとに異なる。",
    "context": "glossary hsr term certified-banger: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[aha-moment|",
      "[[path|"
    ]
  },
  {
    "id": "term.hsr.shield.name",
    "ja": "バリア",
    "context": "glossary hsr term shield: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.shield.summary",
    "ja": "受けるダメージを防ぐ効果。",
    "context": "glossary hsr term shield: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.shield.body",
    "ja": "対象に付与され、受けるダメージを防ぐ効果。耐久量や持続時間、付与できる対象は能力によって異なる。[[healing|治癒]]による[[hp|HP]]回復とは異なる。",
    "context": "glossary hsr term shield: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[healing|",
      "[[hp|"
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
    "ja": "キャラクターに装備して、ステータスを補う。装備するキャラクターの[[path]]と一致すると、その光円錐のスキルも有効になる。\n\n[[character-training-guide|育成ガイド]]ではキャラクターの光円錐の育成進度を確認できる。",
    "context": "glossary hsr term light-cone: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[character-training-guide|",
      "[[path]]"
    ]
  },
  {
    "id": "term.hsr.light-cone-ascension.name",
    "ja": "光円錐の昇格",
    "context": "glossary hsr term light-cone-ascension: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.light-cone-ascension.summary",
    "ja": "光円錐のレベル上限を引き上げる育成。",
    "context": "glossary hsr term light-cone-ascension: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.light-cone-ascension.body",
    "ja": "素材などを使って[[light-cone|光円錐]]を昇格させ、レベル上限を引き上げる。スキル効果の段階を上げる[[superimposition|重畳]]とは別の育成。",
    "context": "glossary hsr term light-cone-ascension: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[light-cone|",
      "[[superimposition|"
    ]
  },
  {
    "id": "term.hsr.technique.name",
    "ja": "秘技",
    "context": "glossary hsr term technique: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.technique.summary",
    "ja": "戦闘に入る前に使うキャラクター固有の能力。",
    "context": "glossary hsr term technique: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.technique.body",
    "ja": "フィールド上で戦闘前に使用できる能力。戦闘開始時に効果を発揮するものなどがあり、効果や条件はキャラクターごとに異なる。",
    "context": "glossary hsr term technique: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.damage-vulnerability.name",
    "ja": "被ダメージアップ",
    "context": "glossary hsr term damage-vulnerability: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.damage-vulnerability.summary",
    "ja": "対象が受けるダメージを増やす効果。",
    "context": "glossary hsr term damage-vulnerability: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.damage-vulnerability.body",
    "ja": "対象が受けるダメージに影響する効果。[[damage-boost|与ダメージアップ]]と記載の対象や条件が異なるため、能力説明を確認しよう。",
    "context": "glossary hsr term damage-vulnerability: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[damage-boost|"
    ]
  },
  {
    "id": "term.hsr.ultimate.name",
    "ja": "必殺技",
    "context": "glossary hsr term ultimate: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.ultimate.summary",
    "ja": "必要なエネルギーをためて使うキャラクター固有の能力。",
    "context": "glossary hsr term ultimate: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.ultimate.body",
    "ja": "必要な[[energy|EP]]などがたまると使用できる能力。通常の[[action-order|行動順]]とは異なるタイミングで使える。必要な資源や効果はキャラクターごとに確認しよう。",
    "context": "glossary hsr term ultimate: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[action-order|",
      "[[energy|"
    ]
  },
  {
    "id": "term.hsr.penacony.name",
    "ja": "ピノコニー",
    "context": "glossary hsr term penacony: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.penacony.summary",
    "ja": "星穹列車が訪れる「宴の星」。",
    "context": "glossary hsr term penacony: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.penacony.body",
    "ja": "[[astral-express|星穹列車]]の仲間たちが招待を受けて訪れる「宴の星」。宇宙の各地から客が集まるリゾートとして知られる。",
    "context": "glossary hsr term penacony: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[astral-express|"
    ]
  },
  {
    "id": "term.hsr.wind-shear.name",
    "ja": "風化",
    "context": "glossary hsr term wind-shear: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.wind-shear.summary",
    "ja": "風属性の持続ダメージに関わる状態。",
    "context": "glossary hsr term wind-shear: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.wind-shear.body",
    "ja": "対象に[[damage-over-time|持続ダメージ]]を与える状態のひとつ。風属性の[[weakness-break|弱点撃破]]などで付与される。発生のタイミングや持続時間は効果ごとに確認しよう。",
    "context": "glossary hsr term wind-shear: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[damage-over-time|",
      "[[weakness-break|"
    ]
  },
  {
    "id": "term.hsr.unknowable-domain.name",
    "ja": "不可知域",
    "context": "glossary hsr term unknowable-domain: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.unknowable-domain.summary",
    "ja": "模擬宇宙の拡張コンテンツ。",
    "context": "glossary hsr term unknowable-domain: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.unknowable-domain.body",
    "ja": "[[simulated-universe|模擬宇宙]]の拡張コンテンツのひとつ。セプターを集め、対応するコンポーネントを装着して能力を強化しながら挑戦する。",
    "context": "glossary hsr term unknowable-domain: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[simulated-universe|"
    ]
  },
  {
    "id": "term.hsr.belobog.name",
    "ja": "ベロブルグ",
    "context": "glossary hsr term belobog: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.belobog.summary",
    "ja": "ヤリーロ-VIにある都市。",
    "context": "glossary hsr term belobog: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.belobog.body",
    "ja": "[[jarilo-vi|ヤリーロ-VI]]で[[astral-express|星穹列車]]の仲間たちが訪れる都市。開拓の旅で人々と出会い、この世界の物語を体験する。",
    "context": "glossary hsr term belobog: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[astral-express|",
      "[[jarilo-vi|"
    ]
  },
  {
    "id": "term.hsr.variable-dice.name",
    "ja": "変数サイコロ",
    "context": "glossary hsr term variable-dice: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.variable-dice.summary",
    "ja": "強化済み遺物のサブステータスの強化配分を調整するアイテム。",
    "context": "glossary hsr term variable-dice: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.variable-dice.body",
    "ja": "レベル15まで強化した[[relics|遺物]]の[[relic-sub-stat|サブステータス]]の強化回数をランダムに再分配するアイテム。再分配の前後から保存する結果を選べる。",
    "context": "glossary hsr term variable-dice: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[relic-sub-stat|",
      "[[relics|"
    ]
  },
  {
    "id": "term.hsr.forgotten-hall.name",
    "ja": "忘却の庭",
    "context": "glossary hsr term forgotten-hall: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.forgotten-hall.summary",
    "ja": "ステージごとの条件を満たして報酬を目指す挑戦コンテンツ。",
    "context": "glossary hsr term forgotten-hall: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.forgotten-hall.body",
    "ja": "編成を整えて複数のステージに挑戦するコンテンツ。[[memory-of-chaos|混沌の記憶]]は忘却の庭に含まれる挑戦のひとつ。ステージの条件や報酬はゲーム内で確認しよう。",
    "context": "glossary hsr term forgotten-hall: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[memory-of-chaos|"
    ]
  },
  {
    "id": "term.hsr.defense.name",
    "ja": "防御力",
    "context": "glossary hsr term defense: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.defense.summary",
    "ja": "受けるダメージなどに関わるステータス。",
    "context": "glossary hsr term defense: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.defense.body",
    "ja": "受けるダメージに関わるステータス。能力の効果量を決めるために参照される場合もある。敵の防御力を下げる[[defense-reduction|防御力ダウン]]とは区別しよう。",
    "context": "glossary hsr term defense: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[defense-reduction|"
    ]
  },
  {
    "id": "term.hsr.defense-reduction.name",
    "ja": "防御力ダウン",
    "context": "glossary hsr term defense-reduction: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.defense-reduction.summary",
    "ja": "対象の防御力を下げる効果。",
    "context": "glossary hsr term defense-reduction: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.defense-reduction.body",
    "ja": "対象の[[defense|防御力]]を下げる[[debuff|デバフ]]。対象や持続時間は能力によって異なる。攻撃時に防御力の一部を無視する[[defense-ignore|防御力無視]]とは異なる効果。",
    "context": "glossary hsr term defense-reduction: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[debuff|",
      "[[defense-ignore|",
      "[[defense|"
    ]
  },
  {
    "id": "term.hsr.defense-ignore.name",
    "ja": "防御力無視",
    "context": "glossary hsr term defense-ignore: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.defense-ignore.summary",
    "ja": "攻撃時に対象の防御力の一部を無視する効果。",
    "context": "glossary hsr term defense-ignore: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.defense-ignore.body",
    "ja": "攻撃のダメージを計算する際、対象の[[defense|防御力]]の一部を無視する効果。対象に付与して防御力を下げる[[defense-reduction|防御力ダウン]]とは区別される。",
    "context": "glossary hsr term defense-ignore: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[defense-reduction|",
      "[[defense|"
    ]
  },
  {
    "id": "term.hsr.adventure-mission.name",
    "ja": "冒険クエスト",
    "context": "glossary hsr term adventure-mission: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.adventure-mission.summary",
    "ja": "各地の人物や出来事に関わるクエスト。",
    "context": "glossary hsr term adventure-mission: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.adventure-mission.body",
    "ja": "各地の人物や出来事に関わるクエスト。[[trailblaze-mission|開拓クエスト]]とは別に表示され、内容や受注条件はクエストごとに異なる。",
    "context": "glossary hsr term adventure-mission: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[trailblaze-mission|"
    ]
  },
  {
    "id": "term.hsr.equation.name",
    "ja": "方程式",
    "context": "glossary hsr term equation: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.equation.summary",
    "ja": "階差宇宙で祝福の組み合わせにより解放する仕組み。",
    "context": "glossary hsr term equation: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.equation.body",
    "ja": "[[divergent-universe]]に登場する仕組み。指定された[[path|運命]]の[[blessing|祝福]]を組み合わせることで方程式を展開し、対応する効果を得られる。",
    "context": "glossary hsr term equation: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[blessing|",
      "[[divergent-universe]]",
      "[[path|"
    ]
  },
  {
    "id": "term.hsr.immersifier.name",
    "ja": "没入器",
    "context": "glossary hsr term immersifier: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.immersifier.summary",
    "ja": "次元界オーナメントの獲得に使えるアイテム。",
    "context": "glossary hsr term immersifier: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.immersifier.body",
    "ja": "[[simulated-universe|模擬宇宙]]などの報酬で[[planar-ornaments|次元界オーナメント]]を受け取る際、[[trailblaze-power|開拓力]]の代わりに使用できるアイテム。",
    "context": "glossary hsr term immersifier: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[planar-ornaments|",
      "[[simulated-universe|",
      "[[trailblaze-power|"
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
    "id": "term.hsr.relic-main-stat.name",
    "ja": "メインステータス",
    "context": "glossary hsr term relic-main-stat: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.relic-main-stat.summary",
    "ja": "遺物の主となるステータス。",
    "context": "glossary hsr term relic-main-stat: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.relic-main-stat.body",
    "ja": "[[relics|遺物]]に付く主なステータス。候補は装備する部位によって異なり、遺物の強化で数値が上がる。[[relic-sub-stat|サブステータス]]とは別に表示される。",
    "context": "glossary hsr term relic-main-stat: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[relic-sub-stat|",
      "[[relics|"
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
  },
  {
    "id": "term.hsr.entanglement.name",
    "ja": "もつれ",
    "context": "glossary hsr term entanglement: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.entanglement.summary",
    "ja": "対象の行動順や付加ダメージに関わる状態。",
    "context": "glossary hsr term entanglement: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.entanglement.body",
    "ja": "量子属性の[[weakness-break|弱点撃破]]などで付与される状態。[[action-advance-and-delay|行動順の遅延]]や付加ダメージに関わる。[[damage-over-time|持続ダメージ]]とは区別しよう。",
    "context": "glossary hsr term entanglement: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[action-advance-and-delay|",
      "[[damage-over-time|",
      "[[weakness-break|"
    ]
  },
  {
    "id": "term.hsr.jarilo-vi.name",
    "ja": "ヤリーロ-VI",
    "context": "glossary hsr term jarilo-vi: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.jarilo-vi.summary",
    "ja": "星穹列車が訪れる世界のひとつ。",
    "context": "glossary hsr term jarilo-vi: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.jarilo-vi.body",
    "ja": "[[astral-express|星穹列車]]の仲間たちが開拓の旅で訪れる世界。寒さに覆われた地で、開拓者たちはさまざまな人々と出会う。",
    "context": "glossary hsr term jarilo-vi: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[astral-express|"
    ]
  },
  {
    "id": "term.hsr.effective-substats.name",
    "ja": "有効サブステータス",
    "context": "glossary hsr term effective-substats: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.effective-substats.summary",
    "ja": "装備プランで確認できる遺物サブステータスの情報。",
    "context": "glossary hsr term effective-substats: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.effective-substats.body",
    "ja": "[[relic-smart-equip|スマート装備]]などで確認できる[[relic-sub-stat|サブステータス]]の情報。プランやキャラクターに応じた表示を確認し、装備を選ぶ際の参考にできる。",
    "context": "glossary hsr term effective-substats: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[relic-smart-equip|",
      "[[relic-sub-stat|"
    ]
  },
  {
    "id": "term.hsr.elation-skill.name",
    "ja": "愉悦スキル",
    "context": "glossary hsr term elation-skill: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.elation-skill.summary",
    "ja": "愉悦の運命に関わるキャラクターの能力。",
    "context": "glossary hsr term elation-skill: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.elation-skill.body",
    "ja": "[[path|愉悦の運命]]に関わるキャラクターの能力。[[aha-moment|アッハタイム]]中に発動するほか、能力によって別のタイミングで発動する場合もある。",
    "context": "glossary hsr term elation-skill: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[aha-moment|",
      "[[path|"
    ]
  },
  {
    "id": "term.hsr.elation-damage.name",
    "ja": "愉悦ダメージ",
    "context": "glossary hsr term elation-damage: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.elation-damage.summary",
    "ja": "「愉悦」に関わる能力で発生するダメージ。",
    "context": "glossary hsr term elation-damage: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.elation-damage.body",
    "ja": "[[path|愉悦の運命]]に関わる能力などで発生するダメージ。発生条件や効果はキャラクターごとに異なる。[[aha-moment|アッハタイム]]に関わる能力もある。",
    "context": "glossary hsr term elation-damage: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[aha-moment|",
      "[[path|"
    ]
  },
  {
    "id": "term.hsr.yuetsudo.name",
    "ja": "愉悦度",
    "context": "glossary hsr term yuetsudo: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.yuetsudo.summary",
    "ja": "愉悦に関わる戦闘中の値。",
    "context": "glossary hsr term yuetsudo: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.yuetsudo.body",
    "ja": "[[path|愉悦の運命]]に関わる戦闘中の値。公式紹介では爻光の能力によって味方の愉悦度が上昇する例が示されている。具体的な条件は各能力を確認しよう。",
    "context": "glossary hsr term yuetsudo: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[path|"
    ]
  },
  {
    "id": "term.hsr.damage-boost.name",
    "ja": "与ダメージアップ",
    "context": "glossary hsr term damage-boost: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.damage-boost.summary",
    "ja": "与えるダメージを増やす効果。",
    "context": "glossary hsr term damage-boost: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.damage-boost.body",
    "ja": "キャラクターなどが与えるダメージを高める効果。対象の[[element|属性]]や攻撃の種類が限定される場合があるため、各能力の説明を確認しよう。",
    "context": "glossary hsr term damage-boost: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[element|"
    ]
  },
  {
    "id": "term.hsr.reserved-trailblaze-power.name",
    "ja": "予備開拓力",
    "context": "glossary hsr term reserved-trailblaze-power: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.reserved-trailblaze-power.summary",
    "ja": "通常の開拓力とは別に蓄積される資源。",
    "context": "glossary hsr term reserved-trailblaze-power: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.reserved-trailblaze-power.body",
    "ja": "通常の[[trailblaze-power|開拓力]]が上限に達した後に蓄積され、必要なときに開拓力として取り出せる。蓄積や使用の条件はゲーム内で確認しよう。",
    "context": "glossary hsr term reserved-trailblaze-power: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[trailblaze-power|"
    ]
  },
  {
    "id": "term.hsr.echo-of-war.name",
    "ja": "歴戦余韻",
    "context": "glossary hsr term echo-of-war: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.echo-of-war.summary",
    "ja": "強敵に挑み、育成素材などを獲得できるコンテンツ。",
    "context": "glossary hsr term echo-of-war: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.echo-of-war.body",
    "ja": "強敵との戦闘に挑み、[[trailblaze-power|開拓力]]を使って報酬を受け取るコンテンツ。[[traces|軌跡]]の強化に使う素材などが手に入る。報酬の受取条件はゲーム内で確認しよう。",
    "context": "glossary hsr term echo-of-war: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[traces|",
      "[[trailblaze-power|"
    ]
  },
  {
    "id": "term.hsr.bleed.name",
    "ja": "裂創",
    "context": "glossary hsr term bleed: Japanese official term name",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.bleed.summary",
    "ja": "物理属性の持続ダメージに関わる状態。",
    "context": "glossary hsr term bleed: one-sentence summary shown in the list and link hints",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "term.hsr.bleed.body",
    "ja": "対象に[[damage-over-time|持続ダメージ]]を与える状態のひとつ。物理属性の[[weakness-break|弱点撃破]]などで付与される。発生のタイミングや持続時間は効果ごとに確認しよう。",
    "context": "glossary hsr term bleed: body; blank lines separate paragraphs and [[id]] / [[id|label]] are glossary links to keep intact",
    "audience": "public",
    "placeholders": {},
    "dependencies": [],
    "protectedTokens": [
      "[[damage-over-time|",
      "[[weakness-break|"
    ]
  }
];
