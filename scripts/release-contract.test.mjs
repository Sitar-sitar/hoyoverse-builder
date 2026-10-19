import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import {
  assertAllowedUrl, canonicalJson, digest, referencePath, trpcData, validateDescriptor,
} from './release-contract.mjs';

const descriptor = () => ({
  schemaVersion: 1, revision: 'a'.repeat(40), contentRevision: 'b'.repeat(64), mode: 'forward', catalogDigest: 'c'.repeat(64),
  probes: [
    { game: 'hsr', name: 'Dr.レイシオ', referenceDigest: 'd'.repeat(64) },
    { game: 'genshin', name: 'アルハイゼン', referenceDigest: 'e'.repeat(64) },
    { game: 'zzz', name: 'アキラ', referenceDigest: 'f'.repeat(64) },
  ],
});

test('canonical JSON sorts nested object keys by code point and keeps array order', () => {
  assert.equal(canonicalJson({ b: 1, a: { d: [3, { z: 1, y: 2 }], c: 'é' }, B: null }), '{"B":null,"a":{"c":"é","d":[3,{"y":2,"z":1}]},"b":1}');
  assert.equal(digest({ b: 1, a: 2 }), digest({ a: 2, b: 1 }));
  assert.notEqual(digest([1, 2]), digest([2, 1]));
  // Known fixture: SHA-256 of the UTF-8 text {"a":1,"b":[2,1]}.
  assert.equal(digest({ b: [2, 1], a: 1 }), 'e9d26fb0100c3f9ef569c38ced9811ec35059c3c999b8683fde59ed24e6e66e8');
});

test('accepts a valid forward descriptor', () => {
  assert.deepEqual(validateDescriptor(descriptor()), descriptor());
});

for (const [name, change, reason] of [
  ['short SHA', d => ({ ...d, revision: 'abc' }), 'descriptor_invalid'],
  ['uppercase SHA', d => ({ ...d, revision: 'A'.repeat(40) }), 'descriptor_invalid'],
  ['bad content revision', d => ({ ...d, contentRevision: 'x' }), 'descriptor_invalid'],
  ['unknown mode', d => ({ ...d, mode: 'preview' }), 'descriptor_invalid'],
  ['rollback mode', d => ({ ...d, mode: 'rollback' }), 'mode_unsupported'],
  ['legacy mode', d => ({ mode: 'legacy' }), 'mode_unsupported'],
  ['extra field', d => ({ ...d, generatedAt: 'now' }), 'descriptor_invalid'],
  ['duplicate game', d => ({ ...d, probes: [d.probes[0], d.probes[0], d.probes[2]] }), 'descriptor_invalid'],
  ['empty probe name', d => ({ ...d, probes: [{ ...d.probes[0], name: ' ' }, d.probes[1], d.probes[2]] }), 'descriptor_invalid'],
  ['missing probe', d => ({ ...d, probes: d.probes.slice(1) }), 'descriptor_invalid'],
  ['array', () => [], 'descriptor_invalid'],
]) test(`rejects ${name}`, () => assert.throws(() => validateDescriptor(change(descriptor())), { reason }));

test('extracts tRPC data and refuses errors, missing envelopes, HTML and empty data', () => {
  assert.deepEqual(trpcData({ result: { data: { json: { games: {} } } } }), { games: {} });
  for (const payload of [{ error: { json: {} } }, {}, { result: {} }, { result: { data: { json: {} } } }, { result: { data: { json: [] } } }, '<html>', null]) {
    assert.throws(() => trpcData(payload), { reason: 'request_failed' });
  }
});

test('allows only fixed origins and paths, ignoring the query string', () => {
  const allowed = ['https://api.example/api/health', 'https://pages.example/x/release.json'];
  assert.equal(assertAllowedUrl('https://pages.example/x/release.json?probe=1', allowed).pathname, '/x/release.json');
  assert.throws(() => assertAllowedUrl('https://evil.example/x/release.json', allowed));
  assert.throws(() => assertAllowedUrl('https://api.example/api/healthz', allowed));
  assert.match(referencePath('hsr', 'Dr.レイシオ'), /^\/api\/trpc\/build\.reference\?input=/);
});

test('contract and monitor import only Node built-ins', async () => {
  for (const file of ['release-contract.mjs', 'monitor-production.mjs']) {
    const source = await readFile(new URL(file, import.meta.url), 'utf8');
    const specifiers = [...source.matchAll(/from\s+'([^']+)'/g)].map(match => match[1]);
    assert.ok(specifiers.length > 0);
    for (const specifier of specifiers) assert.ok(specifier.startsWith('node:') || specifier.startsWith('./'), `${file}: ${specifier}`);
  }
});
