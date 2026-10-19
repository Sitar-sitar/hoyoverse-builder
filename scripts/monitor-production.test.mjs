import test from 'node:test';
import assert from 'node:assert/strict';
import { digest } from './release-contract.mjs';
import { API, ORIGIN, DESCRIPTOR_URL, BODY_LIMIT_BYTES, runCheck, runPostDeployCheck } from './monitor-production.mjs';

/**
 * 公開機能監視（設計: docs/修正設計書_運用安定化と保守性改善_2026-10-19.md §5.8・§8.1 monitor）。
 */

const SHA = 'a'.repeat(40);
const NEXT = 'b'.repeat(40);
const catalog = { dataAsOf: '2026-10-19', games: { hsr: [{ name: 'Dr.レイシオ' }], genshin: [{ name: 'アルハイゼン' }], zzz: [{ name: 'アキラ' }] } };
const reference = name => ({ game: 'x', name, presentation: { language: 'ja' } });
const names = { hsr: 'Dr.レイシオ', genshin: 'アルハイゼン', zzz: 'アキラ' };
const descriptor = (revision = SHA, overrides = {}) => ({
  schemaVersion: 1, revision, contentRevision: 'c'.repeat(64), mode: 'forward', catalogDigest: digest(catalog),
  probes: Object.entries(names).map(([game, name]) => ({ game, name, referenceDigest: digest(reference(name)) })), ...overrides,
});
const json = (body, { status = 200, cors = ORIGIN, type = 'application/json' } = {}) => new Response(typeof body === 'string' ? body : JSON.stringify(body), {
  status, headers: { 'content-type': type, ...(cors ? { 'access-control-allow-origin': cors } : {}) },
});
const healthy = (revision = SHA) => ({ ok: true, revision, maintenance: false, migrationPreview: false });

/** URL ごとの応答を差し替えられる偽 fetch。呼ばれた URL と options を記録する。 */
function site(overrides = {}) {
  const calls = [];
  let descriptorReads = 0;
  let healthReads = 0;
  const fetcher = async (url, options) => {
    calls.push({ url, options });
    const parsed = new URL(url);
    const path = `${parsed.origin}${parsed.pathname}`;
    if (path === DESCRIPTOR_URL) return (overrides.descriptor ?? (() => json(descriptor())))(++descriptorReads, options);
    if (path === `${API}/api/health`) return (overrides.health ?? (() => json(healthy())))(++healthReads, options);
    if (path === `${API}/api/trpc/build.referenceCatalog`) return (overrides.catalog ?? (() => json({ result: { data: { json: catalog } } })))(options);
    if (path === `${API}/api/trpc/build.reference`) {
      const input = JSON.parse(parsed.searchParams.get('input')).json;
      return (overrides.reference ?? (n => json({ result: { data: { json: reference(n) } } })))(input.name, options);
    }
    throw new Error(`unexpected ${url}`);
  };
  return { fetcher, calls };
}

test('passes a full 8-request check with bounded, credential-free reads', async () => {
  const { fetcher, calls } = site();
  const result = await runCheck({ fetcher });
  assert.equal(result.reason, 'ok');
  assert.equal(result.success, true);
  assert.equal(result.schemaVersion, 2);
  assert.equal(calls.length, 8);
  for (const { options } of calls) {
    assert.equal(options.credentials, 'omit');
    assert.equal(options.redirect, 'error');
    assert.equal(options.cache, 'no-store');
    assert.ok(options.signal);
  }
  assert.ok(calls.filter(call => call.url.startsWith(API)).every(call => call.options.headers.Origin === ORIGIN));
  assert.deepEqual(result.checks.map(check => check.name), ['descriptor_start', 'health_start', 'catalog', 'reference_hsr', 'reference_genshin', 'reference_zzz', 'descriptor_end', 'health_end']);
});

test('cache-busting identifiers never repeat across reads, checks and post-deploy retries', async () => {
  const seen = new Set();
  const record = calls => calls.filter(call => call.url.startsWith(DESCRIPTOR_URL)).forEach(call => {
    const probe = new URL(call.url).searchParams.get('probe');
    assert.ok(probe && !seen.has(probe));
    seen.add(probe);
  });
  for (let i = 0; i < 3; i++) { const { fetcher, calls } = site(); await runCheck({ fetcher }); record(calls); }
  assert.equal(seen.size, 6);
});

test('a CDN that serves a stale descriptor for the bare URL is bypassed by the probe query', async () => {
  const { fetcher } = site({ descriptor: (_n, _o) => json(descriptor()) });
  const stale = async (url, options) => (url.startsWith(DESCRIPTOR_URL) && !new URL(url).search ? json(descriptor(NEXT)) : fetcher(url, options));
  assert.equal((await runCheck({ fetcher: stale })).reason, 'ok');
});

for (const [name, overrides, reason] of [
  ['descriptor 404', { descriptor: () => json('not found', { status: 404, type: 'text/html' }) }, 'release_descriptor_missing'],
  ['descriptor rollback mode', { descriptor: () => json({ mode: 'rollback' }) }, 'mode_unsupported'],
  ['descriptor HTML', { descriptor: () => json('<html>', { type: 'text/html' }) }, 'descriptor_invalid'],
  ['descriptor 500', { descriptor: () => json('err', { status: 500 }) }, 'request_failed'],
  ['maintenance', { health: () => json({ ...healthy(), maintenance: true }) }, 'health_invalid'],
  ['preview', { health: () => json({ ...healthy(), migrationPreview: true }) }, 'health_invalid'],
  ['health CORS', { health: () => json(healthy(), { cors: '*' }) }, 'health_invalid'],
  ['health 503', { health: () => json('down', { status: 503 }) }, 'request_failed'],
  ['catalog missing', { catalog: () => json({ result: { data: { json: {} } } }) }, 'request_failed'],
  ['catalog HTML', { catalog: () => json('<!DOCTYPE html>', { type: 'text/html' }) }, 'request_failed'],
  ['catalog tRPC error', { catalog: () => json({ error: { json: { message: 'x' } } }) }, 'request_failed'],
  ['catalog CORS', { catalog: () => json({ result: { data: { json: catalog } } }, { cors: null }) }, 'request_failed'],
  ['empty detail', { reference: () => json({ result: { data: { json: {} } } }) }, 'request_failed'],
  ['altered detail', { reference: n => json({ result: { data: { json: { ...reference(n), extra: 1 } } } }) }, 'payload_mismatch'],
  ['oversized body', { catalog: () => json('x'.repeat(BODY_LIMIT_BYTES + 1)) }, 'request_failed'],
  ['network failure', { health: () => { throw new Error('secret-value'); } }, 'request_failed'],
]) test(`classifies ${name} as ${reason}`, async () => {
  const result = await runCheck({ fetcher: site(overrides).fetcher });
  assert.equal(result.success, false);
  assert.equal(result.reason, reason);
});

test('a stalled body is aborted by the per-request timeout', { timeout: 20_000 }, async () => {
  const stalled = (_n, options) => new Response(new ReadableStream({
    start(controller) { options.signal.addEventListener('abort', () => controller.error(new Error('aborted'))); },
  }), { headers: { 'content-type': 'application/json' } });
  // AbortSignal.timeout のタイマーは unref のため、偽の停止 stream だけでは event loop が空になる。
  // 実通信では socket が loop を保持するので、試験中だけ ref 付きタイマーで同じ状態を作る。
  const keepAlive = setInterval(() => {}, 1_000);
  try {
    const started = Date.now();
    const result = await runCheck({ fetcher: site({ descriptor: stalled }).fetcher });
    assert.equal(result.reason, 'request_failed');
    assert.ok(Date.now() - started >= 9_000);
  } finally {
    clearInterval(keepAlive);
  }
});

test('API ahead of Pages: skips the 4 content reads and reports api_ahead', async () => {
  const { fetcher, calls } = site({ health: () => json(healthy(NEXT)) });
  const result = await runCheck({ fetcher });
  assert.equal(result.reason, 'api_ahead');
  assert.equal(calls.length, 4);
  assert.equal(result.expectedRevision, SHA);
  assert.equal(result.observedRevision, NEXT);
});

test('a version change during the check is a transition, even if payloads differ', async () => {
  const api = site({ health: n => json(healthy(n === 1 ? SHA : NEXT)), reference: n => json({ result: { data: { json: { ...reference(n), changed: true } } } }) });
  assert.equal((await runCheck({ fetcher: api.fetcher })).reason, 'release_transition');
  const pages = site({ descriptor: n => json(descriptor(n === 1 ? SHA : NEXT)) });
  assert.equal((await runCheck({ fetcher: pages.fetcher })).reason, 'release_transition');
});

test('probe names come from the descriptor; a changed first entry is not an error', async () => {
  const renamed = { ...descriptor(), probes: [{ game: 'hsr', name: 'アーチャー', referenceDigest: digest(reference('アーチャー')) }, ...descriptor().probes.slice(1)] };
  assert.equal((await runCheck({ fetcher: site({ descriptor: () => json(renamed) }).fetcher })).reason, 'ok');
});

test('results keep no bodies, names, URL queries or exception text', async () => {
  for (const overrides of [{}, { health: () => { throw new Error('secret-value'); } }, { reference: () => json({ result: { data: { json: { secret: 'secret-value' } } } }) }]) {
    const text = JSON.stringify(await runCheck({ fetcher: site(overrides).fetcher }));
    assert.ok(!text.includes('secret-value'));
    assert.ok(!text.includes('レイシオ'));
    assert.ok(!text.includes('probe='));
  }
});

test('post-deploy check retries read-only until the descriptor shows the workflow SHA', async () => {
  let clock = 0;
  const { fetcher, calls } = site({ descriptor: () => json(descriptor(clock >= 20_000 ? NEXT : SHA)), health: () => json(healthy(NEXT)) });
  const result = await runPostDeployCheck({ expectedRevision: NEXT, fetcher, now: () => clock, sleep: async ms => { clock += ms; } });
  assert.equal(result.success, true);
  assert.equal(result.attempts, 3);
  assert.equal(result.propagationMs, 20_000);
  assert.ok(calls.every(call => !call.options.method || call.options.method === 'GET'));
});

test('post-deploy check fails after the 120 s window without changing anything', async () => {
  let clock = 0;
  const { fetcher } = site({ health: () => json(healthy(NEXT)) });
  const result = await runPostDeployCheck({ expectedRevision: NEXT, fetcher, now: () => clock, sleep: async ms => { clock += ms; } });
  assert.equal(result.success, false);
  assert.equal(result.reason, 'api_ahead');
  assert.ok(result.propagationMs <= 120_000);
  await assert.rejects(runPostDeployCheck({ expectedRevision: 'short' }));
});

test('post-deploy check rejects a matching pair that is not the workflow SHA', async () => {
  let clock = 0;
  const result = await runPostDeployCheck({ expectedRevision: NEXT, fetcher: site().fetcher, now: () => clock, sleep: async ms => { clock += ms; } });
  assert.equal(result.reason, 'expected_revision_mismatch');
});
