import { createHash } from 'node:crypto';

/**
 * 公開版descriptor（Pages の release.json）の契約。生成（releaseManifest.ts）と監視（monitor-production.mjs）で共用する。
 * deploy job は依存を導入しないため、Node 標準機能だけを使う。
 * 設計: docs/修正設計書_運用安定化と保守性改善_2026-10-19.md §5.7
 */

export const RELEASE_SCHEMA_VERSION = 1;
export const RELEASE_GAMES = ['hsr', 'genshin', 'zzz'];
export const UNSUPPORTED_MODES = ['legacy', 'parallel', 'rollback'];
export const DESCRIPTOR_KEYS = ['catalogDigest', 'contentRevision', 'mode', 'probes', 'revision', 'schemaVersion'];
const PROBE_KEYS = ['game', 'name', 'referenceDigest'];
const SHA40 = /^[0-9a-f]{40}$/;
const HEX64 = /^[0-9a-f]{64}$/;

export class ReleaseContractError extends Error {
  constructor(reason) {
    super(reason);
    this.name = 'ReleaseContractError';
    this.reason = reason;
  }
}

/** object key を再帰的にコードポイント順へ揃え、配列順は保持した JSON 文字列。 */
export function canonicalJson(value) {
  if (Array.isArray(value)) return `[${value.map(item => canonicalJson(item === undefined ? null : item)).join(',')}]`;
  if (value && typeof value === 'object') {
    const keys = Object.keys(value).filter(key => value[key] !== undefined).sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
    return `{${keys.map(key => `${JSON.stringify(key)}:${canonicalJson(value[key])}`).join(',')}}`;
  }
  if (typeof value === 'number' && !Number.isFinite(value)) return 'null';
  return JSON.stringify(value);
}

export function digest(value) {
  return createHash('sha256').update(canonicalJson(value), 'utf8').digest('hex');
}

const sameKeys = (value, keys) => Object.keys(value).sort().join(',') === [...keys].sort().join(',');

/** 公開 descriptor を検証する。非対応 mode の明示だけを mode_unsupported、それ以外の不正を descriptor_invalid とする。 */
export function validateDescriptor(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new ReleaseContractError('descriptor_invalid');
  if (typeof value.mode === 'string' && UNSUPPORTED_MODES.includes(value.mode)) throw new ReleaseContractError('mode_unsupported');
  if (!sameKeys(value, DESCRIPTOR_KEYS) || value.schemaVersion !== RELEASE_SCHEMA_VERSION || value.mode !== 'forward'
    || !SHA40.test(value.revision ?? '') || !HEX64.test(value.contentRevision ?? '') || !HEX64.test(value.catalogDigest ?? '')
    || !Array.isArray(value.probes) || value.probes.length !== RELEASE_GAMES.length) {
    throw new ReleaseContractError('descriptor_invalid');
  }
  const games = new Set();
  for (const probe of value.probes) {
    if (!probe || typeof probe !== 'object' || !sameKeys(probe, PROBE_KEYS) || !RELEASE_GAMES.includes(probe.game) || games.has(probe.game)
      || typeof probe.name !== 'string' || !probe.name.trim() || !HEX64.test(probe.referenceDigest ?? '')) {
      throw new ReleaseContractError('descriptor_invalid');
    }
    games.add(probe.game);
  }
  return value;
}

/** tRPC（superjson）単一応答から result.data.json を取り出す。error・欠落envelope・空データは成功にしない。 */
export function trpcData(payload) {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload) || 'error' in payload) throw new ReleaseContractError('request_failed');
  const json = payload.result?.data?.json;
  if (!json || typeof json !== 'object' || (Array.isArray(json) ? !json.length : !Object.keys(json).length)) throw new ReleaseContractError('request_failed');
  return json;
}

export function catalogPath() {
  return '/api/trpc/build.referenceCatalog';
}

export function referencePath(game, name) {
  return `/api/trpc/build.reference?input=${encodeURIComponent(JSON.stringify({ json: { game, name } }))}`;
}

/** 取得先はクエリを除いた origin+path が許可一覧に一致するときだけ許す。公開JSON由来の任意URLは使わない。 */
export function assertAllowedUrl(url, allowed) {
  const parsed = new URL(url);
  if (!allowed.includes(`${parsed.origin}${parsed.pathname}`)) throw new ReleaseContractError('request_failed');
  return parsed;
}
