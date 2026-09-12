import { describe, expect, it } from "vitest";
import { normalizeGenshinPayload, normalizeZzzPayload } from "./gameProviders";
import { generatedZzzGuide } from "./individualGuides";

describe("原神公開プロフィールの正規化", () => {
  it("武器・聖遺物・主要ステータスを共通表示モデルへ変換する", () => {
    const result = normalizeGenshinPayload({
      uid: "800000004",
      playerInfo: { nickname: "テスト旅人", level: 60 },
      avatarInfoList: [{
        avatarId: 10000002,
        propMap: { "4001": { val: 90 } }, talentIdList: [1, 2],
        fightPropMap: { "20": 0.72, "22": 1.55, "23": 1.42, "28": 120, "2000": 18000, "2001": 2100, "2002": 900 },
        equipList: [
          { itemId: 1, weapon: { level: 90, affixMap: { "1": 2 } }, flat: { itemType: "ITEM_WEAPON", nameTextMapHash: 2, icon: "Weapon_Test" } },
          { itemId: 2, reliquary: { level: 21, mainPropId: "FIGHT_PROP_CRITICAL" }, flat: { itemType: "ITEM_RELIQUARY", nameTextMapHash: 3, setNameTextMapHash: 4, icon: "Artifact_Test", reliquaryMainstat: { mainPropId: "FIGHT_PROP_CRITICAL", statValue: 0.311 }, reliquarySubstats: [{ appendPropId: "FIGHT_PROP_CRITICAL_HURT", statValue: 0.202 }] } },
        ],
      }],
    }, {
      characters: { "10000002": { NameTextMapHash: 1, Element: "Ice", WeaponType: "WEAPON_SWORD_ONE_HAND", SideIconName: "UI_AvatarIcon_Side_Ayaka" } },
      loc: { ja: { "1": "神里綾華", "2": "テスト武器", "3": "テスト聖遺物", "4": "氷風を彷徨う勇士" } },
    });

    expect(result.player.name).toBe("テスト旅人");
    expect(result.characters[0]?.name).toBe("神里綾華");
    expect(result.characters[0]?.identity).toMatchObject({ key: "genshin:10000002", displayName: "神里綾華", resolution: "provider" });
    expect(result.characters[0]?.lightCone?.name).toBe("テスト武器");
    expect(result.characters[0]?.relics[0]?.setName).toBe("氷風を彷徨う勇士");
    expect(result.characters[0]?.comparisons.find((comparison) => comparison.key === "critRate")?.current).toBe(72);
    expect(result.characters[0]?.comparisons.find((comparison) => comparison.key === "critDmg")?.current).toBe(155);
    expect(result.characters[0]?.equipmentActions.find((action) => action.recommendationKey === "critDmg")).toMatchObject({ slot: "冠", action: "主ステータスを変更" });
  });

  it("キャラクターごとに異なる有効ステータスと優先度注記を選択する", () => {
    const avatar = (avatarId: number) => ({ avatarId, propMap: { "4001": { val: 90 } }, talentIdList: [], fightPropMap: { "20": 0.6, "22": 1.8, "23": 2.0, "28": 800, "2000": 40000, "2001": 3000, "2002": 3200 }, equipList: [] });
    const result = normalizeGenshinPayload({ uid: "800000004", playerInfo: { nickname: "テスト旅人", level: 60 }, avatarInfoList: [avatar(10000002), avatar(10000073), avatar(10000030)] }, {
      characters: {
        "10000002": { NameTextMapHash: 1, Element: "Ice", WeaponType: "WEAPON_SWORD_ONE_HAND", SideIconName: "UI_AvatarIcon_Side_Ayaka" },
        "10000073": { NameTextMapHash: 2, Element: "Grass", WeaponType: "WEAPON_CATALYST", SideIconName: "UI_AvatarIcon_Side_Nahida" },
        "10000030": { NameTextMapHash: 3, Element: "Rock", WeaponType: "WEAPON_POLE", SideIconName: "UI_AvatarIcon_Side_Zhongli" },
      },
      loc: { ja: { "1": "神里綾華", "2": "ナヒーダ", "3": "鍾離" } },
    });

    const byName = Object.fromEntries(result.characters.map((character) => [character.name, character]));
    expect(byName["神里綾華"]?.comparisons.map((comparison) => comparison.key)).toEqual(["critRate", "critDmg", "energyRecharge"]);
    expect(byName["ナヒーダ"]?.comparisons.map((comparison) => comparison.key)).toEqual(["elementalMastery", "energyRecharge"]);
    expect(byName["鍾離"]?.comparisons.map((comparison) => comparison.key)).toEqual(["hp", "energyRecharge"]);
    expect(byName["神里綾華"]?.guide.targetContext).toContain("神里綾華専用");
    expect(byName["ナヒーダ"]?.guide.targetContext).toContain("ナヒーダ専用");
    expect(byName["鍾離"]?.guide.targetContext).toContain("鍾離専用");
  });

  it("精密定義がない原神キャラクターにも個別プロファイルとデータ時点を付与する", () => {
    const avatar = (avatarId: number) => ({ avatarId, propMap: { "4001": { val: 90 } }, talentIdList: [], fightPropMap: { "20": 0.6, "22": 1.8, "23": 1.8, "28": 850, "2000": 40000, "2001": 2500, "2002": 2700 }, equipList: [] });
    const result = normalizeGenshinPayload({ uid: "800000004", playerInfo: { nickname: "テスト旅人", level: 60 }, avatarInfoList: [avatar(10000023), avatar(10000065), avatar(10000034)] }, {
      characters: {
        "10000023": { NameTextMapHash: 1, Element: "Fire", WeaponType: "WEAPON_POLE", SideIconName: "UI_AvatarIcon_Side_Xiangling" },
        "10000065": { NameTextMapHash: 2, Element: "Electric", WeaponType: "WEAPON_SWORD_ONE_HAND", SideIconName: "UI_AvatarIcon_Side_Kuki" },
        "10000034": { NameTextMapHash: 3, Element: "Rock", WeaponType: "WEAPON_CLAYMORE", SideIconName: "UI_AvatarIcon_Side_Noelle" },
      },
      loc: { ja: { "1": "香菱", "2": "久岐忍", "3": "ノエル" } },
    });
    const byName = Object.fromEntries(result.characters.map((character) => [character.name, character]));

    expect(byName["香菱"]?.comparisons.map((comparison) => comparison.key)).toEqual(["energyRecharge", "critRate", "critDmg", "elementalMastery"]);
    expect(byName["久岐忍"]?.comparisons.map((comparison) => comparison.key)).toEqual(["elementalMastery", "hp", "energyRecharge"]);
    expect(byName["ノエル"]?.comparisons.map((comparison) => comparison.key)).toEqual(["defense", "critRate", "critDmg"]);
    expect(byName["香菱"]?.guide.targetContext).toContain("香菱専用");
    expect(byName["久岐忍"]?.guide.dataAsOf).toBe("2026-08-26");
    // ノエルは第15バッチで個別ガイドを持つため、共通出典ではなく第15バッチの出典を返す（2026-09-10 の正規化）。
    expect(byName["ノエル"]?.guide.sourceLabel).toContain("ノエルビルド・命ノ星座情報");
  });

  it("第2バッチの原神主力は個別の有効ステータスを比較する", () => {
    const avatar = (avatarId: number) => ({ avatarId, propMap: { "4001": { val: 90 } }, talentIdList: [], fightPropMap: { "20": 0.75, "22": 1.6, "23": 2.0, "28": 120, "2000": 40000, "2001": 2400, "2002": 900 }, equipList: [] });
    const result = normalizeGenshinPayload({ uid: "800000004", playerInfo: { nickname: "テスト旅人", level: 60 }, avatarInfoList: [avatar(10000901), avatar(10000902), avatar(10000903)] }, {
      characters: {
        "10000901": { NameTextMapHash: 1, Element: "Fire", WeaponType: "WEAPON_POLE", SideIconName: "UI_Test_Arlecchino" },
        "10000902": { NameTextMapHash: 2, Element: "Water", WeaponType: "WEAPON_CATALYST", SideIconName: "UI_Test_Neuvillette" },
        "10000903": { NameTextMapHash: 3, Element: "Water", WeaponType: "WEAPON_BOW", SideIconName: "UI_Test_Yelan" },
      },
      loc: { ja: { "1": "アルレッキーノ", "2": "ヌヴィレット", "3": "夜蘭" } },
    });
    const byName = Object.fromEntries(result.characters.map((character) => [character.name, character]));

    expect(byName["アルレッキーノ"]?.comparisons.map((comparison) => comparison.key)).toEqual(["attack", "critRate", "critDmg"]);
    expect(byName["ヌヴィレット"]?.comparisons.map((comparison) => comparison.key)).toEqual(["hp", "critRate", "critDmg", "energyRecharge"]);
    expect(byName["夜蘭"]?.comparisons.map((comparison) => comparison.key)).toEqual(["hp", "energyRecharge", "critRate", "critDmg"]);
    expect(byName["アルレッキーノ"]?.guide.targetContext).toContain("アルレッキーノ専用");
    expect(byName["ヌヴィレット"]?.guide.targetContext).toContain("ヌヴィレット専用");
    expect(byName["夜蘭"]?.guide.targetContext).toContain("夜蘭専用");
  });

  it("第1バッチの原神4名は個別の最新目標と戦闘内凸の分離を返す", () => {
    const avatar = (avatarId: number) => ({ avatarId, propMap: { "4001": { val: 90 } }, talentIdList: [1, 2], fightPropMap: { "20": 0.7, "22": 1.8, "23": 1.9, "28": 850, "2000": 40000, "2001": 2400, "2002": 2800 }, equipList: [] });
    const result = normalizeGenshinPayload({ uid: "800000004", playerInfo: { nickname: "テスト旅人", level: 60 }, avatarInfoList: [avatar(10000089), avatar(10000047), avatar(10000032), avatar(10000103)] }, {
      characters: {
        "10000089": { NameTextMapHash: 1, Element: "Water", WeaponType: "WEAPON_SWORD_ONE_HAND", SideIconName: "UI_Test_Furina" },
        "10000047": { NameTextMapHash: 2, Element: "Wind", WeaponType: "WEAPON_SWORD_ONE_HAND", SideIconName: "UI_Test_Kazuha" },
        "10000032": { NameTextMapHash: 3, Element: "Fire", WeaponType: "WEAPON_SWORD_ONE_HAND", SideIconName: "UI_Test_Bennett" },
        "10000103": { NameTextMapHash: 4, Element: "Rock", WeaponType: "WEAPON_SWORD_ONE_HAND", SideIconName: "UI_Test_Xilonen" },
      },
      loc: { ja: { "1": "フリーナ", "2": "楓原万葉", "3": "ベネット", "4": "シロネン" } },
    });
    const byName = Object.fromEntries(result.characters.map((character) => [character.name, character]));

    expect(byName["フリーナ"]?.comparisons.map((comparison) => comparison.key)).toEqual(["hp", "energyRecharge", "critRate", "critDmg"]);
    expect(byName["楓原万葉"]?.comparisons.find((comparison) => comparison.key === "energyRecharge")?.targets["目標"]).toBe(170);
    expect(byName["ベネット"]?.comparisons.find((comparison) => comparison.key === "energyRecharge")?.targets["目標"]).toBe(200);
    expect(byName["シロネン"]?.comparisons.find((comparison) => comparison.key === "defense")?.targets["目標"]).toBe(2500);
    expect(byName["楓原万葉"]?.guide.targetContext).toContain("C2");
    ["フリーナ", "楓原万葉", "ベネット", "シロネン"].forEach((name) => {
      expect(byName[name]?.guide.dataAsOf).toBe("2026-08-25");
      expect(byName[name]?.guide.sourceLabel).toContain("Game8");
    });
  });
});

describe("ZZZ公開プロフィールの正規化", () => {
  it("音動機・ドライバディスク・会心ステータスを共通表示モデルへ変換する", () => {
    const result = normalizeZzzPayload({
      uid: "10000001",
      PlayerInfo: {
        SocialDetail: { ProfileDetail: { Nickname: "テストプロキシ", Level: 60 } },
        ShowcaseDetail: { AvatarList: [{
          Id: 1011, Level: 60, TalentLevel: 1, Weapon: { Id: 12001, Level: 60, BreakLevel: 3 },
          EquippedList: [{ Slot: 4, Equipment: { Id: 32641, Level: 15, Uid: 99, MainPropertyList: [{ PropertyId: 12103, PropertyValue: 79 }], RandomPropertyList: [{ PropertyId: 20103, PropertyLevel: 2, PropertyValue: 240 }] } }, { Slot: 5, Equipment: { Id: 32642, Level: 15, Uid: 100, MainPropertyList: [], RandomPropertyList: [] } }],
        }] },
      },
    }, {
      avatars: { "1011": { Name: "Avatar_Test", ElementTypes: ["Elec"], ProfessionType: "Attack", Image: "/ui/zzz/avatar.png", BaseProps: { "11101": 100, "12101": 100, "20101": 500, "21101": 5000 }, GrowthProps: {}, PromotionProps: [{}], CoreEnhancementProps: [{}] } },
      weapons: { "12001": { ItemName: "Weapon_Test", ImagePath: "/ui/zzz/weapon.png", MainStat: { PropertyId: 12101, PropertyValue: 50 }, SecondaryStat: { PropertyId: 21101, PropertyValue: 4800 } } },
      equipments: { Items: { "32641": { Rarity: 4, SuitId: 32600 }, "32642": { Rarity: 4, SuitId: 32600 } }, Suits: { "32600": { Name: "EquipmentSuit_32600_name", SetBonusProps: { "20103": 800 } } } },
      locs: { ja: { Avatar_Test: "0号・アンビー", Weapon_Test: "テスト音動機", EquipmentSuit_32600_name: "テストディスク", CritRate: "会心率", AttackFlat: "攻撃力" } },
      property: { "11101": { Name: "HP", Format: "{0:0}" }, "12101": { Name: "AttackBase", Format: "{0:0}" }, "12103": { Name: "AttackFlat", Format: "{0:0}" }, "20101": { Name: "CritRateBase", Format: "{0:0.0}%" }, "20103": { Name: "CritRate", Format: "{0:0.0}%" }, "21101": { Name: "CritDmgBase", Format: "{0:0.0}%" } },
    });

    expect(result.player.name).toBe("テストプロキシ");
    expect(result.characters[0]?.name).toBe("0号・アンビー");
    expect(result.characters[0]?.identity).toMatchObject({ key: "zzz:1011", displayName: "0号・アンビー", resolution: "provider" });
    expect(result.characters[0]?.lightCone?.name).toBe("テスト音動機");
    expect(result.characters[0]?.relics[0]?.setName).toBe("テストディスク");
    expect(result.characters[0]?.comparisons.find((comparison) => comparison.key === "critRate")?.current).toBe(17.8);
    expect(result.characters[0]?.comparisons.find((comparison) => comparison.key === "critDmg")?.current).toBe(141.2);
    expect(result.characters[0]?.allStats.find((stat) => stat.name === "攻撃力")?.display).toBe("1070");
    expect(result.characters[0]?.comparisons.map((comparison) => comparison.key)).toEqual(["critRate", "critDmg", "attack"]);
    expect(result.characters[0]?.guide.targetContext).toContain("0号・アンビー専用");
    expect(result.characters[0]?.equipmentActions.find((action) => action.recommendationKey === "critRate")).toMatchObject({ slot: "IV", action: "主ステータスを変更" });
  });

  it("キャラクターごとに異なる有効ステータスと優先度注記を選択する", () => {
    const baseMetadata = { ElementTypes: ["Elec"], ProfessionType: "Attack", Image: "/ui/zzz/avatar.png", BaseProps: { "11101": 100, "12101": 100, "20101": 500, "21101": 5000 }, GrowthProps: {}, PromotionProps: [{}], CoreEnhancementProps: [{}] };
    const result = normalizeZzzPayload({
      uid: "10000001",
      PlayerInfo: { SocialDetail: { ProfileDetail: { Nickname: "テストプロキシ", Level: 60 } }, ShowcaseDetail: { AvatarList: [
        { Id: 1011, Level: 60, TalentLevel: 0, Weapon: { Id: 12001, Level: 60, BreakLevel: 0 }, EquippedList: [] },
        { Id: 1331, Level: 60, TalentLevel: 0, Weapon: { Id: 12001, Level: 60, BreakLevel: 0 }, EquippedList: [] },
        { Id: 1311, Level: 60, TalentLevel: 0, Weapon: { Id: 12001, Level: 60, BreakLevel: 0 }, EquippedList: [] },
      ] } },
    }, {
      avatars: { "1011": { ...baseMetadata, Name: "Avatar_Anby" }, "1331": { ...baseMetadata, Name: "Avatar_Vivian" }, "1311": { ...baseMetadata, Name: "Avatar_Astra" } },
      weapons: { "12001": { ItemName: "Weapon_Test", ImagePath: "/ui/zzz/weapon.png", MainStat: { PropertyId: 12101, PropertyValue: 50 }, SecondaryStat: {} } },
      equipments: { Items: {}, Suits: {} },
      locs: { ja: { Avatar_Anby: "0号・アンビー", Avatar_Vivian: "ビビアン", Avatar_Astra: "アストラ", Weapon_Test: "テスト音動機" } },
      property: { "11101": { Name: "HP", Format: "{0:0}" }, "12101": { Name: "AttackBase", Format: "{0:0}" }, "20101": { Name: "CritRateBase", Format: "{0:0.0}%" }, "21101": { Name: "CritDmgBase", Format: "{0:0.0}%" } },
    });

    const byName = Object.fromEntries(result.characters.map((character) => [character.name, character]));
    expect(byName["0号・アンビー"]?.comparisons.map((comparison) => comparison.key)).toEqual(["critRate", "critDmg", "attack"]);
    expect(byName["ビビアン"]?.comparisons.map((comparison) => comparison.key)).toEqual(["anomalyMastery", "attack"]);
    expect(byName["アストラ"]?.comparisons.map((comparison) => comparison.key)).toEqual(["attack"]);
    expect(byName["0号・アンビー"]?.guide.targetContext).toContain("0号・アンビー専用");
    expect(byName["ビビアン"]?.guide.targetContext).toContain("ビビアン専用");
    expect(byName["アストラ"]?.guide.targetContext).toContain("アストラ・ヤオ専用");
  });

  it("精密定義がないZZZエージェントにも個別プロファイルとデータ時点を付与する", () => {
    const metadata = { ElementTypes: ["Elec"], Image: "/ui/zzz/avatar.png", BaseProps: { "11101": 100, "12101": 100, "20101": 500, "21101": 5000 }, GrowthProps: {}, PromotionProps: [{}], CoreEnhancementProps: [{}] };
    const result = normalizeZzzPayload({ uid: "10000001", PlayerInfo: { SocialDetail: { ProfileDetail: { Nickname: "テストプロキシ", Level: 60 } }, ShowcaseDetail: { AvatarList: [
      { Id: 1011, Level: 60, TalentLevel: 0, Weapon: { Id: 12001, Level: 60, BreakLevel: 0 }, EquippedList: [] },
      { Id: 1101, Level: 60, TalentLevel: 0, Weapon: { Id: 12001, Level: 60, BreakLevel: 0 }, EquippedList: [] },
      { Id: 1181, Level: 60, TalentLevel: 0, Weapon: { Id: 12001, Level: 60, BreakLevel: 0 }, EquippedList: [] },
    ] } } }, {
      avatars: { "1011": { ...metadata, Name: "Avatar_Anby", ProfessionType: "Stun" }, "1101": { ...metadata, Name: "Avatar_Koleda", ProfessionType: "Stun" }, "1181": { ...metadata, Name: "Avatar_Grace", ProfessionType: "Anomaly" } },
      weapons: { "12001": { ItemName: "Weapon_Test", ImagePath: "/ui/zzz/weapon.png", MainStat: { PropertyId: 12101, PropertyValue: 50 }, SecondaryStat: {} } },
      equipments: { Items: {}, Suits: {} },
      locs: { ja: { Avatar_Anby: "アンビー", Avatar_Koleda: "クレタ", Avatar_Grace: "グレース", Weapon_Test: "テスト音動機" } },
      property: { "11101": { Name: "HP", Format: "{0:0}" }, "12101": { Name: "AttackBase", Format: "{0:0}" }, "20101": { Name: "CritRateBase", Format: "{0:0.0}%" }, "21101": { Name: "CritDmgBase", Format: "{0:0.0}%" } },
    });
    const byName = Object.fromEntries(result.characters.map((character) => [character.name, character]));

    expect(byName["アンビー"]?.comparisons.map((comparison) => comparison.key)).toEqual(["impact", "critRate", "critDmg"]);
    expect(byName["グレース"]?.comparisons.map((comparison) => comparison.key)).toEqual(["anomalyProficiency", "anomalyMastery", "attack", "penRatio"]);
    expect(byName["クレタ"]?.guide.targetContext).toContain("クレタ専用");
    expect(byName["グレース"]?.guide.dataAsOf).toBe("2026-08-26");
    expect(byName["アンビー"]?.guide.sourceLabel).toContain("Prydwen");
  });

  it("第2バッチのZZZエージェントは役割共通値でなく個別の目標軸を返す", () => {
    const metadata = { ElementTypes: ["Elec"], ProfessionType: "Anomaly", Image: "/ui/zzz/avatar.png", BaseProps: { "11101": 100, "12101": 100, "20101": 500, "21101": 5000 }, GrowthProps: {}, PromotionProps: [{}], CoreEnhancementProps: [{}] };
    const result = normalizeZzzPayload({ uid: "1300000001", PlayerInfo: { SocialDetail: { ProfileDetail: { Nickname: "テストプロキシ", Level: 60 } }, ShowcaseDetail: { AvatarList: [
      { Id: 1901, Level: 60, TalentLevel: 0, Weapon: { Id: 12001, Level: 60, BreakLevel: 0 }, EquippedList: [] },
      { Id: 1902, Level: 60, TalentLevel: 0, Weapon: { Id: 12001, Level: 60, BreakLevel: 0 }, EquippedList: [] },
      { Id: 1903, Level: 60, TalentLevel: 0, Weapon: { Id: 12001, Level: 60, BreakLevel: 0 }, EquippedList: [] },
      { Id: 1904, Level: 60, TalentLevel: 0, Weapon: { Id: 12001, Level: 60, BreakLevel: 0 }, EquippedList: [] },
    ] } } }, {
      avatars: { "1901": { ...metadata, Name: "Avatar_Yanagi" }, "1902": { ...metadata, Name: "Avatar_Astra" }, "1903": { ...metadata, Name: "Avatar_Lighter" }, "1904": { ...metadata, Name: "Avatar_Remielle" } },
      weapons: { "12001": { ItemName: "Weapon_Test", ImagePath: "/ui/zzz/weapon.png", MainStat: { PropertyId: 12101, PropertyValue: 50 }, SecondaryStat: {} } },
      equipments: { Items: {}, Suits: {} },
      locs: { ja: { Avatar_Yanagi: "月城柳", Avatar_Astra: "アストラ", Avatar_Lighter: "ライト", Avatar_Remielle: "レミエール", Weapon_Test: "テスト音動機" } },
      property: { "11101": { Name: "HP", Format: "{0:0}" }, "12101": { Name: "AttackBase", Format: "{0:0}" }, "20101": { Name: "CritRateBase", Format: "{0:0.0}%" }, "21101": { Name: "CritDmgBase", Format: "{0:0.0}%" } },
    });
    const byName = Object.fromEntries(result.characters.map((character) => [character.name, character]));

    expect(byName["月城柳"]?.comparisons.map((comparison) => comparison.key)).toEqual(["anomalyMastery", "attack"]);
    expect(byName["アストラ"]?.comparisons.map((comparison) => comparison.key)).toEqual(["attack"]);
    expect(byName["ライト"]?.comparisons.map((comparison) => comparison.key)).toEqual(["impact"]);
    expect(byName["レミエール"]?.comparisons.map((comparison) => comparison.key)).toEqual(["attack", "anomalyMastery"]);
    expect(byName["月城柳"]?.guide.targetContext).toContain("月城柳専用");
    expect(byName["アストラ"]?.guide.targetContext).toContain("アストラ・ヤオ専用");
    expect(byName["ライト"]?.guide.targetContext).toContain("ライト専用");
    expect(byName["レミエール"]?.guide.targetContext).toContain("レミエール専用");
  });

  it("第1バッチのZZZ2名は個別目標と戦闘内心象映画の分離を返す", () => {
    const metadata = { ElementTypes: ["Ice"], ProfessionType: "Anomaly", Image: "/ui/zzz/avatar.png", BaseProps: { "11101": 100, "12101": 100, "20101": 500, "21101": 5000 }, GrowthProps: {}, PromotionProps: [{}], CoreEnhancementProps: [{}] };
    const result = normalizeZzzPayload({ uid: "1300000001", PlayerInfo: { SocialDetail: { ProfileDetail: { Nickname: "テストプロキシ", Level: 60 } }, ShowcaseDetail: { AvatarList: [
      { Id: 1091, Level: 60, TalentLevel: 2, Weapon: { Id: 12001, Level: 60, BreakLevel: 0 }, EquippedList: [] },
      { Id: 1411, Level: 60, TalentLevel: 2, Weapon: { Id: 12001, Level: 60, BreakLevel: 0 }, EquippedList: [] },
    ] } } }, {
      avatars: { "1091": { ...metadata, Name: "Avatar_Miyabi" }, "1411": { ...metadata, Name: "Avatar_Yuzuha", ProfessionType: "Support" } },
      weapons: { "12001": { ItemName: "Weapon_Test", ImagePath: "/ui/zzz/weapon.png", MainStat: { PropertyId: 12101, PropertyValue: 50 }, SecondaryStat: {} } },
      equipments: { Items: {}, Suits: {} },
      locs: { ja: { Avatar_Miyabi: "星見雅", Avatar_Yuzuha: "浮波柚葉", Weapon_Test: "テスト音動機" } },
      property: { "11101": { Name: "HP", Format: "{0:0}" }, "12101": { Name: "AttackBase", Format: "{0:0}" }, "20101": { Name: "CritRateBase", Format: "{0:0.0}%" }, "21101": { Name: "CritDmgBase", Format: "{0:0.0}%" } },
    });
    const byName = Object.fromEntries(result.characters.map((character) => [character.name, character]));

    expect(byName["星見雅"]?.comparisons.find((comparison) => comparison.key === "critRate")?.targets["目標"]).toBe(80);
    expect(byName["浮波柚葉"]?.comparisons.map((comparison) => comparison.key)).toEqual(["attack", "anomalyMastery"]);
    expect(byName["浮波柚葉"]?.comparisons.find((comparison) => comparison.key === "attack")?.targets["目標"]).toBe(3000);
    expect(byName["星見雅"]?.guide.targetContext).toContain("M2");
    ["星見雅", "浮波柚葉"].forEach((name) => expect(byName[name]?.guide.dataAsOf).toBe("2026-08-25"));
  });
});

describe("ZZZ 新特性「鋭御」（Phase B）", () => {
  const catalog = {
    avatars: { "1611": { Name: "Avatar_Armorer", ElementTypes: ["Ether"], ProfessionType: "Armorer", Image: "/ui/zzz/avatar.png", BaseProps: { "11101": 1000, "12101": 100, "13101": 600, "20101": 500, "21101": 5000 }, GrowthProps: {}, PromotionProps: [{}], CoreEnhancementProps: [{}] } },
    weapons: {},
    equipments: { Items: {}, Suits: {} },
    locs: { ja: { Avatar_Armorer: "テスト鋭御" } },
    property: { "11101": { Name: "HP", Format: "{0:0}" }, "12101": { Name: "AttackBase", Format: "{0:0}" }, "13101": { Name: "DefenceBase", Format: "{0:0}" }, "20101": { Name: "CritRateBase", Format: "{0:0.0}%" }, "21101": { Name: "CritDmgBase", Format: "{0:0.0}%" } },
  };
  const payload = (profession: string) => ({
    uid: "1300000001",
    PlayerInfo: { SocialDetail: { ProfileDetail: { Nickname: "テストプロキシ", Level: 60 } }, ShowcaseDetail: { AvatarList: [
      { Id: 1611, Level: 60, TalentLevel: 0, EquippedList: [] },
    ] } },
  });

  it("特性が「鋭御」と表示され、防御力系の共通ガイドになる（D1・D2）", () => {
    const result = normalizeZzzPayload(payload("Armorer"), catalog);
    const character = result.characters[0];
    expect(character?.path).toBe("鋭御");            // 修正前は英語コードの「Armorer」
    expect(character?.guide.profileId).toBe("def");  // 修正前は強攻（crit）へ落ちていた
    expect(character?.guide.targets).toEqual([]);
    expect(character?.guide.mainStats.find((stat) => stat.slot === "VI")?.value).toBe("防御力%");
  });

  it("目標を置かない理由が最終応答に残る（D6）", () => {
    const character = normalizeZzzPayload(payload("Armorer"), catalog).characters[0];
    expect(character?.guide.targetContext).toContain("推測で登録していません");
    expect(character?.guide.relicSet).toBe("公開ビルドに基づく防御力スケーリング向けドライバディスク");
    expect(character?.guide.planarSet).toBe("防御力を主軸に、会心は個別ガイドで補う");
    expect(character?.guide.mainStats.map((stat) => stat.value)).toEqual(["会心率 / 会心ダメージ", "属性ダメージ / 貫通率", "防御力%"]);
  });

  it("既存6特性の共通ガイドは変わらない", () => {
    const attack = generatedZzzGuide("テスト強攻", "Attack");
    expect(attack.profileId).toBe("crit");
    expect(attack.targetContext).toContain("テスト強攻用の現行公開ビルド");
    expect(generatedZzzGuide("テスト防護", "Defense").profileId).toBe("tank");
    expect(generatedZzzGuide("テスト命破", "Rupture").profileId).toBe("rupture");
  });

  it("再現テスト: HP・防御力の目標が実値で比較される（D3）", () => {
    // シーザー（HP・防御力を目標に持つ）と同じ形。修正前は values にキーが無く常に null だった。
    const result = normalizeZzzPayload({
      uid: "1300000001",
      PlayerInfo: { SocialDetail: { ProfileDetail: { Nickname: "テストプロキシ", Level: 60 } }, ShowcaseDetail: { AvatarList: [
        { Id: 1221, Level: 60, TalentLevel: 0, EquippedList: [] },
      ] } },
    }, {
      ...catalog,
      avatars: { "1221": { Name: "Avatar_Caesar", ElementTypes: ["Physical"], ProfessionType: "Defense", Image: "/ui/zzz/avatar.png", BaseProps: { "11101": 12000, "12101": 700, "13101": 900, "12201": 150, "20101": 500, "21101": 5000 }, GrowthProps: {}, PromotionProps: [{}], CoreEnhancementProps: [{}] } },
      locs: { ja: { Avatar_Caesar: "シーザー" } },
      property: { ...catalog.property, "12201": { Name: "ImpactBase", Format: "{0:0}" } },
    }).characters[0];

    const hp = result?.comparisons.find((comparison) => comparison.key === "hp");
    const defense = result?.comparisons.find((comparison) => comparison.key === "defense");
    expect(hp?.current).toBe(12000);
    expect(defense?.current).toBe(900);
    // 表示用の最終ステータスと同じ値であること。
    expect(result?.allStats.find((stat) => stat.name === "HP")?.display).toBe("12000");
    expect(result?.allStats.find((stat) => stat.name === "防御力")?.display).toBe("900");
  });
});

describe("第19バッチ（クラレッタ）", () => {
  const catalog = {
    avatars: { "1611": { Name: "Avatar_Claret", ElementTypes: ["Elec"], ProfessionType: "Armorer", Image: "/ui/zzz/avatar.png", BaseProps: { "11101": 8000, "12101": 700, "13101": 2451, "20101": 500, "21101": 5000 }, GrowthProps: {}, PromotionProps: [{}], CoreEnhancementProps: [{}] } },
    weapons: {},
    equipments: { Items: {}, Suits: {} },
    locs: { ja: { Avatar_Claret: "クラレッタ" } },
    property: { "11101": { Name: "HP", Format: "{0:0}" }, "12101": { Name: "AttackBase", Format: "{0:0}" }, "13101": { Name: "DefenceBase", Format: "{0:0}" }, "20101": { Name: "CritRateBase", Format: "{0:0.0}%" }, "21101": { Name: "CritDmgBase", Format: "{0:0.0}%" } },
  };
  const profile = () => normalizeZzzPayload({
    uid: "1300000001",
    PlayerInfo: { SocialDetail: { ProfileDetail: { Nickname: "テストプロキシ", Level: 60 } }, ShowcaseDetail: { AvatarList: [
      { Id: 1611, Level: 60, TalentLevel: 6, EquippedList: [] },
    ] } },
  }, catalog).characters[0];

  it("UID照会で鋭御として解決され、個別ガイドの目標で比較される", () => {
    const character = profile();
    expect(character?.name).toBe("クラレッタ");
    expect(character?.path).toBe("鋭御");
    expect(character?.identity).toMatchObject({ key: "zzz:1611", resolution: "provider" });
    // 役割共通（def）ではなく個別ガイドが優先される。
    expect(character?.guide.relicSet).toBe("棘まとう薔薇 ×4 / ウッドペッカー・エレクトロ ×2");
    expect(character?.guide.targets.map((target) => target.key)).toEqual(["defense", "critRate"]);
    expect(character?.guide.targets.find((target) => target.key === "defense")?.targets).toEqual({ "厳選": 2451, "目標": 1800, "妥協": 1000 });
    expect(character?.guide.targets.find((target) => target.key === "critRate")?.targets).toEqual({ "厳選": 129, "目標": 129, "妥協": 128.9 });
    // 防御力は Phase B で比較値へ足したキー。実値で比較できる。
    expect(character?.comparisons.find((comparison) => comparison.key === "defense")?.current).toBe(2451);
  });

  it("出典が割れている会心ダメージを比較対象にせず、理由を説明に残す", () => {
    const guide = profile()?.guide;
    expect(guide?.targets.some((target) => target.key === "critDmg")).toBe(false);
    expect(guide?.targetContext).toContain("暴傷ダメージ");
    expect(guide?.targetContext).toContain("戦闘外");
  });

  it("心象映画を全6段登録し、公開プロフィール値へ加算しない", () => {
    const constellations = profile()?.constellations;
    expect(constellations?.dataStatus).toBe("curated");
    expect(constellations?.effects).toHaveLength(6);
    expect(constellations?.effects.map((effect) => effect.name.ja)).toEqual([
      "血塗られた年代記", "薪の栄冠", "砂糖で書かれた誓い", "赤き月がさまよう", "血と黄昏の溶炉", "フィーヴァードリーム",
    ]);
    expect(constellations?.effects[0]?.name.en).toBe("Bloodstained Chronicle");
    // 無条件の固定値が無いため、凸による目標変更は全段で空。
    expect(constellations?.effects.every((effect) => (effect.targetChanges ?? []).length === 0)).toBe(true);
    expect(constellations?.activeTargetChanges).toEqual([]);
  });

  it("推奨PTは本人を含む実名3案で、公開値へ補正を持たない", () => {
    const parties = profile()?.partyRecommendations;
    expect(parties?.options).toHaveLength(3);
    expect(parties?.options.every((option) => option.members.some((member) => member.name.ja === "クラレッタ"))).toBe(true);
    expect(parties?.options.every((option) => option.targetChanges.length === 0)).toBe(true);
    expect(parties?.options.every((option) => !option.id.startsWith("generated-"))).toBe(true);
    expect(parties?.options[0]?.members.map((member) => member.name.ja)).toEqual(["クラレッタ", "ノルムー", "リナ"]);
  });
});
