import test from 'node:test';
import assert from 'node:assert/strict';
import { measure, RELEASE, ORIGIN, API } from './monitor-production.mjs';
const healthy = { ok: true, revision: RELEASE, maintenance: false, migrationPreview: false };
const response = (body = healthy, cors = ORIGIN, status = 200) => new Response(JSON.stringify(body), {
  status, headers: { 'access-control-allow-origin': cors },
});
test('validates the deployed release, flags, CORS, and bounded read-only request', async () => {
  const result = await measure(async (url, options) => {
    assert.equal(url, `${API}/api/health`);
    assert.equal(options.headers.Origin, ORIGIN);
    assert.equal(options.redirect, 'error');
    assert.ok(options.signal);
    return response();
  });
  assert.equal(result.success, true);
});
for (const [name, body, cors, status] of [
  ['wrong release', { ...healthy, revision: 'a'.repeat(40) }, ORIGIN, 200],
  ['maintenance', { ...healthy, maintenance: true }, ORIGIN, 200],
  ['preview', { ...healthy, migrationPreview: true }, ORIGIN, 200],
  ['missing ok', { ...healthy, ok: undefined }, ORIGIN, 200],
  ['missing flag', { ...healthy, maintenance: undefined }, ORIGIN, 200],
  ['wrong CORS', healthy, '*', 200],
  ['wrong status', healthy, ORIGIN, 503],
]) test(`rejects ${name}`, async () => assert.equal((await measure(async () => response(body, cors, status))).success, false));
test('network and malformed JSON failures retain no raw secret/error/body', async () => {
  for (const fetcher of [async () => { throw new Error('secret-value'); }, async () => new Response('secret-value')]) {
    const result = await measure(fetcher);
    assert.equal(result.success, false);
    assert.equal(result.error, 'health_request_failed');
    assert.ok(!JSON.stringify(result).includes('secret-value'));
  }
});
