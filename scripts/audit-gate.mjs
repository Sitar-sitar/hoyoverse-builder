import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

/**
 * 本番依存の監査ゲート。`pnpm audit --prod --json` の保存結果を判定する（Node標準のみ）。
 * pnpm の終了コードは指摘検出時にも非ゼロになるため使わず、出力の内容だけで判定する。
 * 設計: docs/修正設計書_セキュリティ残課題P2P3_2026-10-20.md §5.1
 */

export const BLOCKING_SEVERITIES = new Set(['high', 'critical']);
export const MAX_EXCEPTION_DAYS = 90;
const DAY_MS = 24 * 60 * 60 * 1000;
const EXCEPTION_KEYS = ['expires', 'id', 'module', 'reason', 'reviewedAt'];
const DATE = /^\d{4}-\d{2}-\d{2}$/;

const parseDate = value => (typeof value === 'string' && DATE.test(value) ? Date.parse(`${value}T00:00:00Z`) : Number.NaN);

/** audit JSON を読めない・registry/通信エラーを示す場合は判定不能（fail closed）。 */
function readAudit(text) {
  let audit;
  try {
    audit = JSON.parse(String(text).replace(/^﻿/, ''));
  } catch {
    return null;
  }
  if (!audit || typeof audit !== 'object' || audit.error || !audit.advisories || typeof audit.advisories !== 'object'
    || !audit.metadata?.vulnerabilities || typeof audit.metadata.vulnerabilities !== 'object') return null;
  return audit;
}

function exceptionProblems(exceptions, today) {
  if (!Array.isArray(exceptions)) return ['exceptions file must be an array'];
  const problems = [];
  const seen = new Set();
  for (const entry of exceptions) {
    const valid = entry && typeof entry === 'object' && Object.keys(entry).sort().join(',') === EXCEPTION_KEYS.join(',')
      && /^GHSA-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}$/.test(entry.id) && typeof entry.module === 'string' && entry.module
      && typeof entry.reason === 'string' && entry.reason.trim();
    const reviewed = parseDate(entry?.reviewedAt);
    const expires = parseDate(entry?.expires);
    if (!valid || Number.isNaN(reviewed) || Number.isNaN(expires)) { problems.push(`invalid exception: ${entry?.id ?? '?'}`); continue; }
    if (seen.has(`${entry.module}:${entry.id}`)) problems.push(`duplicate exception: ${entry.id}`);
    seen.add(`${entry.module}:${entry.id}`);
    if (expires < reviewed || expires - reviewed > MAX_EXCEPTION_DAYS * DAY_MS) problems.push(`exception window over ${MAX_EXCEPTION_DAYS} days: ${entry.id}`);
    if (today > expires) problems.push(`expired exception: ${entry.id}`);
  }
  return problems;
}

/**
 * 判定順: 1) audit 出力が読めない → audit_unavailable、2) 例外の形式・期限 → audit_exception_invalid、
 * 3) 例外の無い High/Critical → audit_finding、4) 現在の指摘に当たらない例外 → audit_exception_invalid。
 */
export function evaluateAudit(auditText, exceptions, now = new Date()) {
  const audit = readAudit(auditText);
  if (!audit) return { ok: false, reason: 'audit_unavailable', details: [] };
  const today = Date.parse(`${now.toISOString().slice(0, 10)}T00:00:00Z`);
  const problems = exceptionProblems(exceptions, today);
  if (problems.length) return { ok: false, reason: 'audit_exception_invalid', details: problems };

  const allowed = new Set(exceptions.map(entry => `${entry.module}:${entry.id}`));
  const used = new Set();
  const blocking = [];
  for (const advisory of Object.values(audit.advisories)) {
    if (!BLOCKING_SEVERITIES.has(advisory?.severity)) continue;
    const key = `${advisory.module_name}:${advisory.github_advisory_id}`;
    if (allowed.has(key)) used.add(key);
    else blocking.push(`${advisory.severity} ${advisory.module_name} ${advisory.github_advisory_id}`);
  }
  if (blocking.length) return { ok: false, reason: 'audit_finding', details: blocking.sort() };
  const stale = [...allowed].filter(key => !used.has(key));
  if (stale.length) return { ok: false, reason: 'audit_exception_invalid', details: stale.map(key => `unused exception: ${key}`) };
  return { ok: true, reason: 'ok', details: [], counts: audit.metadata.vulnerabilities };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const [auditPath, exceptionsPath = 'security/audit-exceptions.json'] = process.argv.slice(2);
  let auditText = '';
  try { auditText = readFileSync(auditPath, 'utf8'); } catch { auditText = ''; }
  let exceptions;
  try { exceptions = JSON.parse(readFileSync(exceptionsPath, 'utf8')); } catch { exceptions = null; }
  const result = evaluateAudit(auditText, exceptions);
  console.log(JSON.stringify(result));
  if (!result.ok) process.exitCode = 1;
}
