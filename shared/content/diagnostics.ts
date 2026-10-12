import { z } from "zod";

// Only bounded version metadata; never accept profile, UID, URL or free-form text.
export const contentMismatchInput = z.object({
  reason: z.enum(["manifest", "schema", "revision", "shape"]),
  expectedRevision: z.string().regex(/^[a-f0-9]{64}$/).nullable(),
  receivedRevision: z.string().regex(/^[a-f0-9]{64}$/).nullable(),
}).strict();
export type ContentMismatchReport = z.infer<typeof contentMismatchInput>;
