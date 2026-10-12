import type { PlaceholderType } from "./types";

/** The same strict variable contract is used by API compatibility and Pages. */
export function formatContentText(id: string, template: string, placeholders: Record<string, PlaceholderType>, variables: Record<string, string | number> = {}) {
  const expected = Object.keys(placeholders).sort();
  const names = [...new Set([...template.matchAll(/\{([A-Za-z][A-Za-z0-9_]*)\}/g)].map(match => match[1]!))].sort();
  if (JSON.stringify(names) !== JSON.stringify(expected)) throw new Error(`Invalid Japanese template: ${id}`);
  if (JSON.stringify(Object.keys(variables).sort()) !== JSON.stringify(expected)) throw new Error(`Content variables differ: ${id}`);
  for (const name of expected) {
    const value = variables[name];
    if (typeof value !== placeholders[name] || (typeof value === "number" && !Number.isFinite(value))) throw new Error(`Invalid content variable: ${id}.${name}`);
  }
  return template.replace(/\{([A-Za-z][A-Za-z0-9_]*)\}/g, (_, name: string) => String(variables[name]));
}
