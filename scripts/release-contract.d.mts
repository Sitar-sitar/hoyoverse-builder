// Types for the dependency-free release contract shared by releaseManifest.ts and the monitor.
export declare const RELEASE_SCHEMA_VERSION: 1;
export declare const RELEASE_GAMES: readonly ["hsr", "genshin", "zzz"];
export declare const UNSUPPORTED_MODES: readonly string[];
export declare const DESCRIPTOR_KEYS: readonly string[];
export type ReleaseProbe = { game: "hsr" | "genshin" | "zzz"; name: string; referenceDigest: string };
export type ReleaseDescriptor = { schemaVersion: 1; revision: string; contentRevision: string; mode: "forward"; catalogDigest: string; probes: ReleaseProbe[] };
export declare class ReleaseContractError extends Error { readonly reason: string; constructor(reason: string); }
export declare function canonicalJson(value: unknown): string;
export declare function digest(value: unknown): string;
export declare function validateDescriptor(value: unknown): ReleaseDescriptor;
export declare function trpcData(payload: unknown): unknown;
export declare function catalogPath(): string;
export declare function referencePath(game: string, name: string): string;
export declare function assertAllowedUrl(url: string, allowed: readonly string[]): URL;
