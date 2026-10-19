import { writeFile, appendFile } from 'node:fs/promises';
import { randomUUID } from 'node:crypto';
import { performance } from 'node:perf_hooks';
import { pathToFileURL } from 'node:url';
import {
  assertAllowedUrl, catalogPath, digest, referencePath, ReleaseContractError, trpcData, validateDescriptor,
} from './release-contract.mjs';

/**
 * 公開機能監視。期待版は Pages の公開descriptorから決め、固定RELEASEや環境変数で上書きしない。
 * 外部UID照会・認証・feedback送信・DB保存は行わない。Node 標準機能だけを使う。
 * 設計: docs/修正設計書_運用安定化と保守性改善_2026-10-19.md §5.7・§5.8
 */

export const API = 'https://http--hoyoverse-api--s48krvgv8tjs.code.run';
export const ORIGIN = 'https://sitar-sitar.github.io';
export const DESCRIPTOR_URL = `${ORIGIN}/hoyoverse-builder/release.json`;
export const REQUEST_TIMEOUT_MS = 10_000;
export const MONITOR_TIMEOUT_MS = 90_000;
export const BODY_LIMIT_BYTES = 1024 * 1024;
export const POST_DEPLOY_WINDOW_MS = 120_000;
export const POST_DEPLOY_INTERVAL_MS = 10_000;

const ALLOWED = [DESCRIPTOR_URL, `${API}/api/health`, `${API}/api/trpc/build.referenceCatalog`, `${API}/api/trpc/build.reference`];

class MonitorFailure extends Error {
  constructor(reason) {
    super(reason);
    this.reason = reason;
  }
}

/** 1MiB を超えた時点で stream を cancel する。途中までの JSON を成功扱いにしない。 */
async function readLimitedText(response) {
  if (!response.body) return '';
  const reader = response.body.getReader();
  const chunks = [];
  let size = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > BODY_LIMIT_BYTES) {
      await reader.cancel().catch(() => {});
      throw new MonitorFailure('request_failed');
    }
    chunks.push(value);
  }
  return Buffer.concat(chunks).toString('utf8');
}

/**
 * 1回の検査（開始時 descriptor/health → 版一致時だけ図鑑4取得 → 終了時 descriptor/health）。
 * 返す結果には固定check名・理由・revision・status・latencyMsだけを入れ、本文・URL query・例外文字列を入れない。
 */
export async function runCheck({ fetcher = fetch, expectedRevision = null, signal, uuid = randomUUID, now = () => performance.now() } = {}) {
  const started = now();
  const timestampUtc = new Date().toISOString();
  const checks = [];
  const runId = uuid();
  let sequence = 0;
  const overall = AbortSignal.timeout(MONITOR_TIMEOUT_MS);
  const deadline = signal ? AbortSignal.any([overall, signal]) : overall;

  async function get(name, url, { origin = false } = {}) {
    assertAllowedUrl(url, ALLOWED);
    const begin = now();
    const check = { name, status: null, latencyMs: 0 };
    checks.push(check);
    try {
      const response = await fetcher(url, {
        headers: origin ? { Origin: ORIGIN } : {},
        credentials: 'omit', redirect: 'error', cache: 'no-store',
        signal: AbortSignal.any([AbortSignal.timeout(REQUEST_TIMEOUT_MS), deadline]),
      });
      check.status = response.status;
      const text = await readLimitedText(response);
      return { response, text };
    } catch (error) {
      if (error instanceof MonitorFailure) throw error;
      throw new MonitorFailure('request_failed');
    } finally {
      check.latencyMs = Math.round(now() - begin);
    }
  }

  async function descriptor(name) {
    // CDN エッジのキャッシュを避けるため、取得ごとに異なる識別子を付ける（許可判定はクエリを除いたパス）。
    const { response, text } = await get(name, `${DESCRIPTOR_URL}?probe=${runId}-${++sequence}`);
    if (response.status === 404) throw new MonitorFailure('release_descriptor_missing');
    if (response.status !== 200) throw new MonitorFailure('request_failed');
    let parsed;
    try { parsed = JSON.parse(text); } catch { throw new MonitorFailure('descriptor_invalid'); }
    try { return validateDescriptor(parsed); } catch (error) {
      throw new MonitorFailure(error instanceof ReleaseContractError ? error.reason : 'descriptor_invalid');
    }
  }

  async function health(name) {
    const { response, text } = await get(name, `${API}/api/health`, { origin: true });
    if (response.status !== 200) throw new MonitorFailure('request_failed');
    let body;
    try { body = JSON.parse(text); } catch { throw new MonitorFailure('health_invalid'); }
    if (!body || body.ok !== true || !/^[0-9a-f]{40}$/.test(body.revision ?? '') || body.maintenance !== false
      || body.migrationPreview !== false || response.headers.get('access-control-allow-origin') !== ORIGIN) {
      throw new MonitorFailure('health_invalid');
    }
    return body.revision;
  }

  async function rpc(name, path) {
    const { response, text } = await get(name, `${API}${path}`, { origin: true });
    if (response.status !== 200 || response.headers.get('access-control-allow-origin') !== ORIGIN) throw new MonitorFailure('request_failed');
    try {
      return digest(trpcData(JSON.parse(text)));
    } catch {
      throw new MonitorFailure('request_failed');
    }
  }

  const result = (reason, extra = {}) => ({
    schemaVersion: 2, timestampUtc, success: reason === null, reason: reason ?? 'ok',
    expectedRevision: null, observedRevision: null, contentRevision: null,
    ...extra, checks, latencyMs: Math.round(now() - started),
  });

  try {
    const first = await descriptor('descriptor_start');
    const apiFirst = await health('health_start');
    const observed = { expectedRevision: first.revision, observedRevision: apiFirst, contentRevision: first.contentRevision };
    let digests = null;
    if (apiFirst === first.revision) {
      digests = { catalog: await rpc('catalog', catalogPath()), probes: [] };
      for (const probe of first.probes) digests.probes.push(await rpc(`reference_${probe.game}`, referencePath(probe.game, probe.name)));
    }
    const last = await descriptor('descriptor_end');
    const apiLast = await health('health_end');
    if (digest(last) !== digest(first) || apiLast !== apiFirst) return result('release_transition', { ...observed, observedRevision: apiLast });
    if (apiFirst !== first.revision) return result('api_ahead', observed);
    if (digests.catalog !== first.catalogDigest || first.probes.some((probe, i) => digests.probes[i] !== probe.referenceDigest)) {
      return result('payload_mismatch', observed);
    }
    if (expectedRevision && first.revision !== expectedRevision) return result('expected_revision_mismatch', observed);
    return result(null, observed);
  } catch (error) {
    return result(error instanceof MonitorFailure ? error.reason : 'request_failed');
  }
}

/** Pages deploy 後の検査。workflow対象SHAと descriptor の一致まで、読み取りだけを最大120秒・10秒間隔で再試行する。 */
export async function runPostDeployCheck({ expectedRevision, fetcher = fetch, sleep = ms => new Promise(done => setTimeout(done, ms)), now = () => performance.now(), uuid = randomUUID } = {}) {
  if (!/^[0-9a-f]{40}$/.test(expectedRevision ?? '')) throw new Error('A full expected revision is required');
  const started = now();
  let attempts = 0;
  for (;;) {
    attempts += 1;
    const remaining = POST_DEPLOY_WINDOW_MS - (now() - started);
    const sample = await runCheck({ fetcher, expectedRevision, signal: AbortSignal.timeout(Math.max(1, Math.floor(remaining))), uuid, now });
    const elapsed = now() - started;
    if (sample.success || elapsed + POST_DEPLOY_INTERVAL_MS > POST_DEPLOY_WINDOW_MS) return { ...sample, attempts, propagationMs: Math.round(elapsed) };
    await sleep(POST_DEPLOY_INTERVAL_MS);
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const index = process.argv.indexOf('--expect-revision');
  const expected = index >= 0 ? process.argv[index + 1] : null;
  const sample = expected ? await runPostDeployCheck({ expectedRevision: expected }) : await runCheck();
  await writeFile('production-health.json', `${JSON.stringify({ ...sample, runId: process.env.GITHUB_RUN_ID ?? null }, null, 2)}\n`);
  console.log(JSON.stringify({ success: sample.success, reason: sample.reason, expectedRevision: sample.expectedRevision, observedRevision: sample.observedRevision, latencyMs: sample.latencyMs, ...(expected ? { attempts: sample.attempts, propagationMs: sample.propagationMs } : {}) }));
  if (process.env.GITHUB_STEP_SUMMARY) {
    await appendFile(process.env.GITHUB_STEP_SUMMARY, `Production check: **${sample.success ? 'PASS' : 'FAIL'}** (${sample.reason})\n\nUTC: ${sample.timestampUtc}\n\nDescriptor revision: ${sample.expectedRevision ?? 'n/a'}\n\nAPI revision: ${sample.observedRevision ?? 'n/a'}\n`);
  }
  if (!sample.success) process.exitCode = 1;
}
