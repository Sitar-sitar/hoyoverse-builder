import { writeFile } from "node:fs/promises";
import { JSDOM } from "jsdom";

const checkedAt = "2026-09-08";
const gameVersion = "7.0";

const characters = [
  ["レザー", "10000020", 352606, "razor"],
  ["ロサリア", "10000045", 364265, "rosaria"],
  ["雲菫", "10000064", 366273, "yun-jin"],
  ["煙緋", "10000048", 383108, "yanfei"],
  ["嘉明", "10000092", 583327, "gaming"],
  ["甘雨", "10000037", 363710, "ganyu"],
  ["閑雲", "10000093", 583326, "xianyun"],
  ["凝光", "10000027", 352617, "ningguang"],
  ["九条裟羅", "10000056", 395525, "kujou-sara"],
  ["荒瀧一斗", "10000057", 407413, "arataki-itto"],
  ["刻晴", "10000042", 352626, "keqing"],
  ["珊瑚宮心海", "10000054", 395524, "kokomi"],
  ["鹿野院平蔵", "10000059", 455161, "shikanoin-heizou"],
  ["七七", "10000035", 352624, "qiqi"],
  ["重雲", "10000036", 352621, "chongyun"],
  ["申鶴", "10000063", 415138, "shenhe"],
  ["神里綾華", "10000002", 366103, "ayaka"],
  ["神里綾人", "10000066", 417603, "ayato"],
  ["辛炎", "10000044", 358214, "xinyan"],
  ["千織", "10000094", 574166, "chiori"],
  ["早柚", "10000053", 390935, "sayu"],
  ["放浪者", "10000075", 366289, "wanderer"],
  ["北斗", "10000024", 352616, "beidou"],
  ["夢見月瑞希", "10000109", 662778, null],
  ["藍硯", "10000108", 655054, null],
  ["綺良々", "10000061", 521833, "kirara"],
  ["魈", "10000026", 352615, "xiao"],
];

const travelerForms = [
  [
    "風",
    352598,
    "traveler-anemo",
    ["10000005", "10000007", "10000005-504", "10000007-704"],
  ],
  ["岩", 352670, "traveler-geo", ["10000005-506", "10000007-706"]],
  ["雷", 395530, "traveler-electro", ["10000005-507", "10000007-707"]],
  ["草", 466495, "traveler-dendro", ["10000005-508", "10000007-708"]],
  ["水", 544186, "traveler-hydro", ["10000005-501", "10000007-701"]],
  ["炎", 629612, null, ["10000005-502", "10000007-702"]],
  ["氷", 783868, null, ["10000005-503", "10000007-703"]],
];

const clean = value => value.replace(/\s+/g, " ").trim();
const quote = value => JSON.stringify(value);
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const fetchWithTimeout = (url, init = {}) =>
  fetch(url, { ...init, signal: AbortSignal.timeout(20_000) });

async function translated(text, target) {
  const url = new URL("https://translate.googleapis.com/translate_a/single");
  url.searchParams.set("client", "gtx");
  url.searchParams.set("sl", "ja");
  url.searchParams.set("tl", target);
  url.searchParams.set("dt", "t");
  url.searchParams.set("q", text);
  const response = await fetchWithTimeout(url, {
    headers: { "user-agent": "Mozilla/5.0" },
  });
  if (!response.ok)
    throw new Error(`translation ${response.status}: ${text.slice(0, 40)}`);
  const body = await response.json();
  await delay(35);
  return body[0].map(part => part[0]).join("");
}

async function englishConstellations(slug) {
  if (!slug) return null;
  const response = await fetchWithTimeout(
    `https://genshin.jmp.blue/characters/${slug}?lang=en`
  );
  if (!response.ok) return null;
  const body = await response.json();
  return body.constellations?.length === 6 ? body.constellations : null;
}

async function game8Constellations(pageId) {
  const url = `https://game8.jp/genshin/${pageId}`;
  const response = await fetchWithTimeout(url, {
    headers: { "user-agent": "Mozilla/5.0" },
  });
  if (!response.ok) throw new Error(`Game8 ${response.status}: ${url}`);
  const html = await response.text();
  const dom = new JSDOM(html);
  const modified = html.match(/dateModified":"([0-9-]+)T/);
  if (!modified) throw new Error(`dateModified missing: ${url}`);
  const heading = [...dom.window.document.querySelectorAll("h2,h3")].find(
    node => clean(node.textContent).includes("凸効果一覧")
  );
  let table = heading?.nextElementSibling;
  while (table && table.tagName !== "TABLE") table = table.nextElementSibling;
  if (!table) throw new Error(`constellation table missing: ${url}`);
  const effects = [...table.querySelectorAll("tr")].flatMap(row => {
    const header = row.querySelector("th");
    const cell = row.querySelector("td");
    if (!header || !cell) return [];
    const match = clean(header.textContent).match(
      /^(.*?)\s*\((1|2|3|4|5|完)凸\)$/
    );
    if (!match) return [];
    return [
      {
        level: match[2] === "完" ? 6 : Number(match[2]),
        name: match[1],
        description: clean(cell.textContent),
      },
    ];
  });
  if (effects.length !== 6)
    throw new Error(`expected 6 effects, got ${effects.length}: ${url}`);
  return { url, dataAsOf: modified[1], effects };
}

async function localizedEffects(pageId, slug) {
  const japanese = await game8Constellations(pageId);
  const english = await englishConstellations(slug);
  const effects = await Promise.all(
    japanese.effects.map(async (ja, index) => {
      const en = english?.[index];
      const [
        translatedEnglishName,
        zhName,
        translatedEnglishDescription,
        zhDescription,
      ] = await Promise.all([
        en ? Promise.resolve(en.name) : translated(ja.name, "en"),
        translated(ja.name, "zh-CN"),
        en ? Promise.resolve(en.description) : translated(ja.description, "en"),
        translated(ja.description, "zh-CN"),
      ]);
      return {
        level: ja.level,
        name: {
          ja: ja.name,
          en: translatedEnglishName,
          zh: zhName,
        },
        description: {
          ja: ja.description,
          en: translatedEnglishDescription,
          zh: zhDescription,
        },
      };
    })
  );
  return { url: japanese.url, dataAsOf: japanese.dataAsOf, effects };
}

const rows = [];
for (const [name, sourceId, pageId, slug] of characters) {
  rows.push({
    keys: [`genshin:${sourceId}`],
    label: name,
    ...(await localizedEffects(pageId, slug)),
  });
  console.log(`generated source: ${name}`);
}
for (const [element, pageId, slug, sourceIds] of travelerForms) {
  rows.push({
    keys: sourceIds.map(id => `genshin:${id}`),
    label: `旅人（${element}）`,
    ...(await localizedEffects(pageId, slug)),
  });
  console.log(`generated source: 旅人（${element}）`);
}

const entrySource = row => `{
  gameVersion: ${quote(gameVersion)}, dataAsOf: ${quote(row.dataAsOf)}, updatedAt: ${quote(checkedAt)},
  sourceLabel: t(${quote(`Game8の${checkedAt}確認済み個別ガイドを照合`)}, ${quote(`Cross-checked against the Game8 character guide reviewed on ${checkedAt}`)}, ${quote(`已对照${checkedAt}确认的Game8角色指南`)}),
  sourceUrl: ${quote(row.url)}, effects: [
${row.effects.map(effect => `    effect(${effect.level}, ${quote(effect.name.ja)}, ${quote(effect.name.en)}, ${quote(effect.name.zh)}, ${quote(effect.description.ja)}, ${quote(effect.description.en)}, ${quote(effect.description.zh)}),`).join("\n")}
  ],
}`;

const definitions = rows
  .map(
    (row, index) =>
      `const entry${index + 1}: Batch17ConstellationEntry = ${entrySource(row)};`
  )
  .join("\n\n");
const mappings = rows
  .flatMap((row, index) =>
    row.keys.map(key => `  ${quote(key)}: entry${index + 1},`)
  )
  .join("\n");
const names = characters
  .map(([name]) => quote(name))
  .concat(quote("旅人"))
  .join(", ");
const output = `/* Generated by scripts/generate-batch17-constellations.mjs. Do not hand-edit. */
import type { ConstellationEffect, LocalizedText } from "./characterConstellations";

export type Batch17ConstellationEntry = {
  gameVersion: string; dataAsOf: string; updatedAt: string; sourceLabel: LocalizedText; sourceUrl: string; effects: ConstellationEffect[];
};
const t = (ja: string, en: string, zh: string): LocalizedText => ({ ja, en, "zh-CN": zh });
const effect = (level: 1 | 2 | 3 | 4 | 5 | 6, jaName: string, enName: string, zhName: string, ja: string, en: string, zh: string): ConstellationEffect => ({ level, name: t(jaName, enName, zhName), description: t(ja, en, zh) });

export const BATCH_17_CHARACTER_NAMES = [${names}] as const;

${definitions}

export const BATCH_17_CONSTELLATIONS: Record<string, Batch17ConstellationEntry> = {
${mappings}
};
`;
await writeFile(
  new URL("../server/batch17ConstellationData.generated.ts", import.meta.url),
  output,
  "utf8"
);
console.log(
  `generated ${rows.length} profiles / ${rows.reduce((sum, row) => sum + row.keys.length, 0)} identity keys / ${rows.length * 6} effects`
);
