import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { evaluateAudit } from './audit-gate.mjs';

/** 監査ゲート（設計: docs/修正設計書_セキュリティ残課題P2P3_2026-10-20.md §5.1・§8 A）。 */

const NOW = new Date('2026-10-20T12:00:00Z');
const advisory = (module_name, github_advisory_id, severity) => ({ module_name, github_advisory_id, severity, findings: [] });
const audit = (advisories = {}) => JSON.stringify({ advisories, metadata: { vulnerabilities: { info: 0, low: 0, moderate: 0, high: 0, critical: 0 } } });
const exception = overrides => ({ id: 'GHSA-aaaa-bbbb-cccc', module: 'lodash', reason: 'Only reachable from an unused template helper', reviewedAt: '2026-10-01', expires: '2026-12-01', ...overrides });

test('passes with no findings and no exceptions', () => {
  assert.equal(evaluateAudit(audit(), [], NOW).reason, 'ok');
});

test('low and moderate findings do not block', () => {
  assert.equal(evaluateAudit(audit({ 1: advisory('qs', 'GHSA-1111-2222-3333', 'moderate'), 2: advisory('x', 'GHSA-4444-5555-6666', 'low') }), [], NOW).reason, 'ok');
});

test('blocks a high or critical finding without an exception', () => {
  const result = evaluateAudit(audit({ 1: advisory('lodash', 'GHSA-aaaa-bbbb-cccc', 'high'), 2: advisory('proxy-addr', 'GHSA-dddd-eeee-ffff', 'critical') }), [], NOW);
  assert.equal(result.reason, 'audit_finding');
  assert.equal(result.details.length, 2);
});

test('a valid, matching exception allows the finding', () => {
  assert.equal(evaluateAudit(audit({ 1: advisory('lodash', 'GHSA-aaaa-bbbb-cccc', 'high') }), [exception()], NOW).reason, 'ok');
});

for (const [name, entry] of [
  ['expired', exception({ expires: '2026-10-19' })],
  ['window over 90 days', exception({ reviewedAt: '2026-08-01', expires: '2026-11-15' })],
  ['missing reason', exception({ reason: ' ' })],
  ['extra field', { ...exception(), owner: 'me' }],
  ['bad date', exception({ expires: '12/01/2026' })],
]) test(`rejects an exception that is ${name}`, () => {
  assert.equal(evaluateAudit(audit({ 1: advisory('lodash', 'GHSA-aaaa-bbbb-cccc', 'high') }), [entry], NOW).reason, 'audit_exception_invalid');
});

test('rejects an exception that no longer matches any finding', () => {
  const result = evaluateAudit(audit(), [exception()], NOW);
  assert.equal(result.reason, 'audit_exception_invalid');
  assert.match(result.details[0], /unused exception/);
});

test('fails closed when the audit output is broken, empty or an error', () => {
  for (const text of ['', 'not json', '{"error":{"code":"ERR_PNPM_AUDIT_BAD_RESPONSE"}}', '{"advisories":{}}', 'null']) {
    assert.equal(evaluateAudit(text, [], NOW).reason, 'audit_unavailable', text);
  }
  assert.equal(evaluateAudit(audit(), null, NOW).reason, 'audit_exception_invalid');
});

test('the committed exceptions file is valid', async () => {
  const exceptions = JSON.parse(await readFile(new URL('../security/audit-exceptions.json', import.meta.url), 'utf8'));
  assert.ok(Array.isArray(exceptions));
});
