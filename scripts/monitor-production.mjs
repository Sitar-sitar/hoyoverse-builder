import { writeFile, appendFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

export const API = 'https://http--hoyoverse-api--s48krvgv8tjs.code.run';
export const ORIGIN = 'https://sitar-sitar.github.io';
export const RELEASE = 'b5374e384beaf638bbf996c46e1411fb65be027f';

export async function measure(fetcher = fetch, expectedRevision = RELEASE) {
  const timestampUtc = new Date().toISOString();
  const started = performance.now();
  try {
    const response = await fetcher(`${API}/api/health`, {
      headers: { Origin: ORIGIN }, redirect: 'error',
      signal: AbortSignal.timeout(20000),
    });
    const body = await response.json();
    const corsOrigin = response.headers.get('access-control-allow-origin');
    const success = response.status === 200 && body.ok === true &&
      body.revision === expectedRevision && body.maintenance === false &&
      body.migrationPreview === false && corsOrigin === ORIGIN;
    return { timestampUtc, success, status: response.status,
      revision: /^[a-f0-9]{40}$/.test(body.revision ?? '') ? body.revision : null,
      maintenance: body.maintenance === true ? true : body.maintenance === false ? false : null,
      migrationPreview: body.migrationPreview === true ? true : body.migrationPreview === false ? false : null,
      corsValid: corsOrigin === ORIGIN, latencyMs: Math.round(performance.now() - started) };
  } catch {
    // Do not serialize response bodies, headers, or potentially sensitive error text.
    return { timestampUtc, success: false, status: null, error: 'health_request_failed',
      latencyMs: Math.round(performance.now() - started) };
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const expected = process.env.HOYOVERSE_MONITOR_REVISION || RELEASE;
  if (!/^[a-f0-9]{40}$/.test(expected)) throw new Error('Invalid expected revision');
  const sample = await measure(fetch, expected);
  await writeFile('production-health.json', JSON.stringify({ ...sample,
    expectedRevision: expected, runId: process.env.GITHUB_RUN_ID ?? null }, null, 2) + '\n');
  console.log(JSON.stringify(sample));
  if (process.env.GITHUB_STEP_SUMMARY) await appendFile(process.env.GITHUB_STEP_SUMMARY,
    `Production health: **${sample.success ? 'PASS' : 'FAIL'}**\n\nUTC: ${sample.timestampUtc}\n\nHTTP: ${sample.status ?? 'request failed'}\n\nExpected revision: ${expected}\n`);
  if (!sample.success) process.exitCode = 1;
}
