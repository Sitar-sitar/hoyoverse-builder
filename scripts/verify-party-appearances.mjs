import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";

export const EXPECTED = {
  "hsr:ギャラガー": ["team-hsr-ホタル-b26-3"],
  "hsr:ヒアンシー": [
    "team-hsr-千冶・刃-b25-1",
    "team-hsr-千冶・刃-b25-2",
    "team-hsr-アベンチュリン・波と戯れる夏-b24-2",
  ],
  "hsr:フォフォ": ["team-hsr-姫子・旅立ち-b25-3"],
  "hsr:ルアン・メェイ": ["team-hsr-ホタル-b26-3"],
  "hsr:ロビン・夏空の歌": ["team-hsr-姫子・旅立ち-b25-2"],
  "hsr:帰忘の流離人": ["team-hsr-ホタル-b26-2"],
  "hsr:千冶・刃": ["team-hsr-千冶・刃-b25-3"],
  "hsr:姫子・旅立ち": ["team-hsr-千冶・刃-b25-3"],
  "hsr:爻光": ["team-hsr-アベンチュリン・波と戯れる夏-b24-2"],
};
export function verifyPartyAppearances(before, after) {
  assert.deepEqual(Object.keys(after), Object.keys(before), "section keys");
  for (const section of Object.keys(before)) {
    if (section !== "referenceCore") {
      assert.equal(
        JSON.stringify(after[section]),
        JSON.stringify(before[section]),
        section
      );
      continue;
    }
    assert.deepEqual(
      Object.keys(after[section]),
      Object.keys(before[section]),
      "character keys"
    );
    for (const [key, previous] of Object.entries(before[section])) {
      const { partyAppearances, ...rest } = after[section][key];
      assert.equal(
        JSON.stringify(rest),
        JSON.stringify(previous),
        `previous reference: ${key}`
      );
      assert.ok(Array.isArray(partyAppearances), `required array: ${key}`);
      assert.deepEqual(
        partyAppearances.map(card => card.teamId),
        EXPECTED[key] ?? [],
        `candidate IDs: ${key}`
      );
      assert.ok(partyAppearances.length <= 6);
      const rosters = new Set();
      const owner = key.slice(key.indexOf(":") + 1);
      for (const card of partyAppearances) {
        assert.ok(!Object.hasOwn(card, "rank"), "rank absent");
        assert.deepEqual(card.targetChanges, [], "no target changes");
        assert.equal(card.members[0].name.ja, owner, "owner first");
        assert.equal(card.id, `${card.teamId}@${owner}`, "stable ID");
        const roster = card.members
          .map(member => member.name.ja)
          .sort()
          .join("|");
        assert.ok(!rosters.has(roster), "duplicate roster");
        rosters.add(roster);
      }
    }
  }
  return {
    characters: Object.keys(after.referenceCore).length,
    candidates: Object.values(after.referenceCore).reduce(
      (count, ref) => count + ref.partyAppearances.length,
      0
    ),
  };
}
if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  try {
    console.log(
      verifyPartyAppearances(
        JSON.parse(await readFile(process.argv[2], "utf8")),
        JSON.parse(await readFile(process.argv[3], "utf8"))
      )
    );
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
