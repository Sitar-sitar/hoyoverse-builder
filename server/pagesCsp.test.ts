import { describe, expect, it } from "vitest";
import { injectPagesCsp, pagesApiOrigin, pagesContentSecurityPolicy } from "../shared/pagesCsp";

/** 公開PagesのCSP（設計: docs/修正設計書_セキュリティ残課題P2P3_2026-10-20.md §5.6・§8 F）。 */

const API = "https://http--hoyoverse-api--s48krvgv8tjs.code.run";

describe("pagesApiOrigin", () => {
  it("HTTPSのoriginだけを受け付ける", () => {
    expect(pagesApiOrigin(API)).toBe(API);
    expect(pagesApiOrigin(`${API}/`)).toBe(API);
    for (const value of [undefined, "", ` ${API}`, "http://api.example", `${API}/api`, `${API}?x=1`, `${API}#h`, "https://user:pw@api.example", "https://api.example:8443", "not a url"]) {
      expect(() => pagesApiOrigin(value)).toThrow();
    }
  });
});

describe("pagesContentSecurityPolicy", () => {
  it("API originをconnect-srcとform-actionへ入れ、scriptは自サイトだけ", () => {
    const policy = pagesContentSecurityPolicy(API);
    expect(policy).toContain(`connect-src 'self' ${API}`);
    expect(policy).toContain(`form-action 'self' ${API}`);
    expect(policy).toContain("script-src 'self';");
    expect(policy).toContain("object-src 'none'");
    expect(policy).not.toMatch(/unsafe-eval|frame-ancestors|report-uri/);
    expect(policy).not.toMatch(/script-src[^;]*unsafe-inline/);
  });

  it("meta charsetの直後、外部リソースより前に挿入する", () => {
    const html = '<!doctype html><html><head>\n    <meta charset="UTF-8" />\n    <link href="https://fonts.googleapis.com/css2" rel="stylesheet" />\n</head></html>';
    const out = injectPagesCsp(html, API);
    const csp = out.indexOf('http-equiv="Content-Security-Policy"');
    expect(csp).toBeGreaterThan(out.indexOf("<meta charset"));
    expect(csp).toBeLessThan(out.indexOf("fonts.googleapis.com/css2"));
    expect(() => injectPagesCsp("<html><head></head></html>", API)).toThrow();
  });
});
