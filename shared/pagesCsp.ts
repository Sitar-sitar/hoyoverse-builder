/**
 * 公開Pagesのmeta CSP。API originはPages build時の`VITE_API_BASE_URL`から作り、HTTPSのoriginへ正規化できなければ
 * buildを失敗させる（`scripts/pages.mjs`の`apiUrl()`と同じ条件）。meta CSPではframe-ancestorsとreport-onlyは使えない。
 * 設計: docs/修正設計書_セキュリティ残課題P2P3_2026-10-20.md §5.6
 */

export function pagesApiOrigin(value: string | undefined): string {
  if (!value || value !== value.trim()) throw new Error("VITE_API_BASE_URL is required for the Pages CSP");
  const url = new URL(value);
  if (url.protocol !== "https:" || url.username || url.password || url.pathname !== "/" || url.search || url.hash || url.port) {
    throw new Error("VITE_API_BASE_URL must be a plain HTTPS origin");
  }
  return url.origin;
}

export function pagesContentSecurityPolicy(apiOrigin: string): string {
  return [
    "default-src 'self'",
    "script-src 'self'",
    // Reactのstyle属性が多数あるため'unsafe-inline'は維持する（設計§5.6）。
    "style-src 'self' https://fonts.googleapis.com 'unsafe-inline'",
    "font-src https://fonts.gstatic.com",
    "img-src 'self' data: https://enka.network https://raw.githubusercontent.com",
    `connect-src 'self' ${apiOrigin}`,
    "base-uri 'self'",
    `form-action 'self' ${apiOrigin}`,
    "object-src 'none'",
  ].join("; ");
}

/** `<meta charset>`の直後、他のリソース指定より前に挿入する。charsetが無ければ失敗させる。 */
export function injectPagesCsp(html: string, apiOrigin: string): string {
  const charset = /<meta charset="[^"]*"\s*\/?>/i;
  const match = html.match(charset);
  if (!match || match.index === undefined) throw new Error("index.html has no <meta charset>");
  const end = match.index + match[0].length;
  const meta = `\n    <meta http-equiv="Content-Security-Policy" content="${pagesContentSecurityPolicy(apiOrigin)}" />`;
  return html.slice(0, end) + meta + html.slice(end);
}
