import { test } from "node:test";
import assert from "node:assert/strict";
import { verifyPartyAppearances } from "./verify-party-appearances.mjs";
const before = {
  parties: { unchanged: true },
  referenceCore: { "genshin:空": { name: "空", guide: { target: 1 } } },
};
const after = () => ({
  parties: { unchanged: true },
  referenceCore: {
    "genshin:空": { name: "空", guide: { target: 1 }, partyAppearances: [] },
  },
});
test("only additive arrays accepted", () =>
  assert.deepEqual(verifyPartyAppearances(before, after()), {
    characters: 1,
    candidates: 0,
  }));
test("rejects previous field changes", () => {
  const current = after();
  current.referenceCore["genshin:空"].guide.target = 2;
  assert.throws(() => verifyPartyAppearances(before, current));
});
test("rejects missing empty array", () => {
  const current = after();
  delete current.referenceCore["genshin:空"].partyAppearances;
  assert.throws(() => verifyPartyAppearances(before, current));
});
test("rejects other section changes", () => {
  const current = after();
  current.parties.unchanged = false;
  assert.throws(() => verifyPartyAppearances(before, current));
});
test("rejects section and character key changes", () => {
  const current = after();
  current.extra = {};
  assert.throws(() => verifyPartyAppearances(before, current));
  delete current.extra;
  delete current.referenceCore["genshin:空"];
  assert.throws(() => verifyPartyAppearances(before, current));
});
