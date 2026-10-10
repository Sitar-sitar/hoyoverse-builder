import { z } from "zod";
import type { ContentCatalog } from "../../shared/content/types";

const nonBlank = z.string().refine(value => value.trim().length > 0, "Must not be blank");
const textId = z.string().regex(/^(character|guide|skill|constellation|team|history|ui|term)\.[^\s]+$/);
const textRef = z.object({ kind: z.literal("textRef"), id: textId }).strict();
const section = z.discriminatedUnion("status", [
  z.object({ status: z.literal("registered"), data: z.array(textRef).min(1), evidence: nonBlank }).strict(),
  z.object({ status: z.literal("notCollected"), reason: nonBlank, requiredKinds: z.array(nonBlank).min(1) }).strict(),
  z.object({ status: z.literal("notApplicable"), reason: nonBlank, evidence: nonBlank }).strict(),
]);
const source = z.object({
  id: textId,
  ja: nonBlank,
  context: nonBlank,
  audience: z.enum(["public", "admin"]),
  placeholders: z.record(z.string().regex(/^[A-Za-z][A-Za-z0-9_]*$/), z.enum(["string", "number"])),
  dependencies: z.array(z.object({ id: textId, contractVersion: nonBlank }).strict()),
  protectedTokens: z.array(nonBlank),
  sameTextAllowed: z.object({ reason: nonBlank }).strict().optional(),
}).strict();
const translation = z.object({
  // Empty legacy text is preserved and reported as missing, rather than fabricated.
  text: z.string(),
  sourceHash: z.string().regex(/^[a-f0-9]{64}$/).nullable(),
  review: z.enum(["pending", "approved"]),
  origin: z.enum(["legacy", "reviewed"]),
  reviewedAt: z.string().datetime({ offset: true }).optional(),
}).strict();

export const catalogSchema = z.object({
  schemaVersion: z.literal(1),
  sources: z.array(source),
  translations: z.object({
    en: z.record(textId, translation),
    "zh-CN": z.record(textId, translation),
  }).strict(),
  aliases: z.array(z.object({ from: textId, to: textId }).strict()),
  sections: z.array(z.object({
    id: nonBlank,
    audience: z.enum(["public", "admin"]),
    visibility: z.enum(["active", "planned"]),
    section,
  }).strict()),
}).strict();

export function parseCatalog(value: unknown): ContentCatalog {
  return catalogSchema.parse(value) as ContentCatalog;
}
