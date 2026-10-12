import { existsSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import {
  CHARACTER_GUIDE_METADATA,
  guideMetadataFor,
} from "../../server/characterGuideMetadata";
import { characterRecords, characterSources } from "../../content/characters";
import type {
  GuideMetadataAuthoring,
  GuideMetadataFields,
} from "../../shared/content/guideMetadataAuthoring";
import type { SourceText, TextRef } from "../../shared/content/types";
import { renderSources } from "./adopt";

export function adoptGuideMetadata(args: string[]) {
  if (args.length > 1 || (args[0] !== undefined && args[0] !== "--write"))
    throw new Error("Usage: adopt-guide-metadata [--write]");
  const paths = [
    "content/guideMetadata.ts",
    "content/ja/guides/metadataMaster.ts",
    "content/translations/en/metadataMaster.ts",
    "content/translations/zh-CN/metadataMaster.ts",
    "content/coverage/guideMetadata.migration.json",
    "content/coverage/guideMetadata.baseline.json",
  ];
  if (paths.some(path => existsSync(resolve(path))))
    throw new Error("Guide metadata authoring already exists");
  const texts: SourceText[] = [],
    byLabel = new Map<string, TextRef>(),
    names = new Map(characterSources.map(source => [source.id, source.ja]));
  const fields = (
    value: ReturnType<typeof guideMetadataFor>
  ): GuideMetadataFields => {
    let sourceLabel = byLabel.get(value.sourceLabel);
    if (!sourceLabel) {
      sourceLabel = {
        kind: "textRef",
        id: `guide.legacy.metadataMaster.b${String(texts.length + 1).padStart(5, "0")}`,
      };
      byLabel.set(value.sourceLabel, sourceLabel);
      texts.push({
        id: sourceLabel.id,
        ja: value.sourceLabel,
        context:
          "Guide metadata source label; shared evidence label for character updates",
        audience: "public",
        placeholders: {},
        dependencies: [],
        protectedTokens: [
          ...new Set(value.sourceLabel.match(/\d+(?:[.,]\d+)*/g) ?? []),
        ],
      });
    }
    return {
      profileId: value.profileId,
      dataAsOf: value.dataAsOf,
      updatedAt: value.updatedAt,
      sourceLabel,
      legacyFieldOrder: Object.keys(
        value
      ) as GuideMetadataFields["legacyFieldOrder"],
    };
  };
  const records: GuideMetadataAuthoring[] = characterRecords.map(character => {
    const name = names.get(character.name.id)!;
    const old = CHARACTER_GUIDE_METADATA[character.game][name];
    if (!old) throw new Error("Missing old character metadata");
    return {
      identityKey: character.identityKey,
      game: character.game,
      name: character.name,
      ...fields(old),
    };
  });
  if (
    records.length !==
    Object.values(CHARACTER_GUIDE_METADATA).reduce(
      (sum, values) => sum + Object.keys(values).length,
      0
    )
  )
    throw new Error("Unclassified old metadata character");
  const defaults = Object.fromEntries(
    (["hsr", "genshin", "zzz"] as const).map(game => [
      game,
      fields(guideMetadataFor(game)),
    ])
  );
  const baseline = {
    records: CHARACTER_GUIDE_METADATA,
    defaults: Object.fromEntries(
      (["hsr", "genshin", "zzz"] as const).map(game => [
        game,
        guideMetadataFor(game),
      ])
    ),
  };
  const hash = (value: unknown) =>
    createHash("sha256").update(JSON.stringify(value)).digest("hex");
  const mapping = {
    schemaVersion: 1,
    migrationId: "guide-metadata-v1",
    inputDigest: hash(baseline),
    authoringDigest: hash({ records, defaults, texts }),
    mapping: records.map(record => ({
      identityKey: record.identityKey,
      nameRef: record.name.id,
      sourceLabelRef: record.sourceLabel.id,
    })),
  };
  if (args[0] === "--write") {
    const output = [
      `import type {GuideMetadataAuthoring,GuideMetadataFields} from "../shared/content/guideMetadataAuthoring";\nimport type {Game} from "../shared/content/domains";\nexport const records:GuideMetadataAuthoring[]=${JSON.stringify(records, null, 2)};\nexport const defaults:Record<Game,GuideMetadataFields>=${JSON.stringify(defaults, null, 2)};\n`,
      renderSources(texts),
      ...Array.from(
        { length: 2 },
        () =>
          `import type {TranslationRecord} from "../../../shared/content/types";\nexport const records:Record<string,TranslationRecord>={};\n`
      ),
      JSON.stringify(mapping, null, 2) + "\n",
      JSON.stringify(baseline, null, 2) + "\n",
    ];
    paths.forEach((path, index) =>
      writeFileSync(resolve(path), output[index], { flag: "wx" })
    );
  }
  console.log(
    `guide metadata: ${records.length} characters, ${texts.length} shared labels`
  );
}
if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(resolve(process.argv[1])).href
)
  adoptGuideMetadata(process.argv.slice(2));
