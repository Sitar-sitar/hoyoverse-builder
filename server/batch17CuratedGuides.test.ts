import { describe, expect, it } from "vitest";
import { BATCH_17_CHARACTER_NAMES, batch17GuideFor } from "./batch17Guides";
import { characterReferenceFor } from "./characterReference";
import { constellationProfileFor } from "./characterConstellations";
import { guideMetadataFor } from "./characterGuideMetadata";
import { partyRecommendationsFor } from "./partyRecommendations";

const DATE = "2026-09-08";
const SOURCE_IDS: Record<string, string> = {
  レザー: "10000020",
  ロサリア: "10000045",
  雲菫: "10000064",
  煙緋: "10000048",
  嘉明: "10000092",
  甘雨: "10000037",
  閑雲: "10000093",
  凝光: "10000027",
  九条裟羅: "10000056",
  荒瀧一斗: "10000057",
  刻晴: "10000042",
  珊瑚宮心海: "10000054",
  鹿野院平蔵: "10000059",
  七七: "10000035",
  重雲: "10000036",
  申鶴: "10000063",
  神里綾華: "10000002",
  神里綾人: "10000066",
  辛炎: "10000044",
  千織: "10000094",
  早柚: "10000053",
  放浪者: "10000075",
  北斗: "10000024",
  夢見月瑞希: "10000109",
  藍硯: "10000108",
  旅人: "10000005",
  綺良々: "10000061",
  魈: "10000026",
};

const identity = (sourceId: string, displayName: string) => ({
  game: "genshin" as const,
  sourceId,
  key: `genshin:${sourceId}` as const,
  displayName,
  variantOf: null,
  resolved: true,
  resolution: "provider" as const,
});

describe("第17パッチ残り28名の個別精査", () => {
  it("28名すべてに個別ビルドを登録し、根拠のない固定数値を作らない", () => {
    expect(BATCH_17_CHARACTER_NAMES).toHaveLength(28);
    expect(new Set(BATCH_17_CHARACTER_NAMES).size).toBe(28);
    BATCH_17_CHARACTER_NAMES.forEach(name => {
      const guide = batch17GuideFor(name);
      expect(guide).not.toBeNull();
      expect(guide?.headline).toContain(name === "旅人" ? "共鳴元素" : "");
      expect(guide?.relicSet).not.toContain("公開ビルドに基づく");
      expect(guide?.mainStats).toHaveLength(3);
      if (name === "神里綾華")
        expect(guide?.targets.map(target => target.key)).toEqual([
          "critRate",
          "critDmg",
          "energyRecharge",
        ]);
      else expect(guide?.targets).toEqual([]);
      expect(guide?.targetContext).toContain(name);
      expect(guide?.updatedAt).toBe(DATE);
      expect(guide?.dataAsOf).toBe(guideMetadataFor("genshin", name).dataAsOf);
      expect(guideMetadataFor("genshin", name).updatedAt).toBe(DATE);
    });
  });

  it("確認済みsource IDで全6段階の命ノ星座を返し、別IDへ名前だけで誤適用しない", () => {
    BATCH_17_CHARACTER_NAMES.forEach(name => {
      const profile = constellationProfileFor(
        identity(SOURCE_IDS[name]!, name),
        99
      );
      expect(profile.dataStatus).toBe("curated");
      expect(profile.acquiredRank).toBe(6);
      expect(profile.effects.map(effect => effect.level)).toEqual([
        1, 2, 3, 4, 5, 6,
      ]);
      expect(
        profile.effects.every(
          effect =>
            effect.name.ja.length > 0 && effect.description.ja.length > 0
        )
      ).toBe(true);
      expect(profile.activeTargetChanges).toEqual([]);
      expect(profile.updatedAt).toBe(DATE);
    });
    expect(
      constellationProfileFor(identity("10000920", "レザー（お試し）"), 6)
        .dataStatus
    ).toBe("preparing");
  });

  it("旅人は7元素のsource IDを分離して、それぞれ6段階を保持する", () => {
    const forms = [
      "10000005-504",
      "10000005-506",
      "10000005-507",
      "10000005-508",
      "10000005-501",
      "10000005-502",
      "10000005-503",
    ];
    const profiles = forms.map(sourceId =>
      constellationProfileFor(identity(sourceId, "旅人"), 6)
    );
    expect(
      profiles.every(
        profile =>
          profile.dataStatus === "curated" && profile.effects.length === 6
      )
    ).toBe(true);
    expect(new Set(profiles.map(profile => profile.sourceUrl)).size).toBe(7);
  });

  it("28名すべてに本人を含む実名4名PTを2案登録し、戦闘内補正を公開値へ加算しない", () => {
    BATCH_17_CHARACTER_NAMES.forEach(name => {
      const parties = partyRecommendationsFor("genshin", name);
      expect(parties.options).toHaveLength(2);
      expect(parties.updatedAt).toBe(DATE);
      expect(parties.options.every(option => option.members.length === 4)).toBe(
        true
      );
      expect(
        parties.options.every(option => option.members[0]?.name.ja === name)
      ).toBe(true);
      expect(
        parties.options.every(option =>
          option.members.every(member => member.name.en !== member.name.ja)
        )
      ).toBe(true);
      expect(
        parties.options.every(option => option.members[0]?.role.ja !== "主軸")
      ).toBe(true);
      expect(
        parties.options.every(option =>
          option.synergy.every(
            text =>
              text.ja.length >= 25 &&
              text.en.length >= 25 &&
              text["zh-CN"].length >= 15
          )
        )
      ).toBe(true);
      expect(
        parties.options.every(option => option.targetChanges.length === 0)
      ).toBe(true);
      expect(
        parties.options.every(option =>
          option.communitySources.every(source => source.checkedAt === DATE)
        )
      ).toBe(true);
    });
  });

  it("図鑑のUID不要経路でも第17パッチの同じデータを返す", () => {
    BATCH_17_CHARACTER_NAMES.forEach(name => {
      const reference = characterReferenceFor("genshin", name);
      expect(reference).not.toBeNull();
      expect(reference?.status).toBe("reviewed");
      expect(reference?.batch).toBe(17);
      expect(reference?.guide.updatedAt).toBe(DATE);
      if (name === "神里綾華") expect(reference?.guide.targets).toHaveLength(3);
      else expect(reference?.guide.targets).toEqual([]);
      expect(reference?.constellations.dataStatus).toBe("curated");
      expect(reference?.constellations.effects).toHaveLength(6);
      expect(reference?.partyRecommendations.options).toHaveLength(2);
    });
  });
});
