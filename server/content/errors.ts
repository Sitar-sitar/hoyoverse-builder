import { sources as publicSources } from "../../content/ja/ui/errorsPublic";
import { sources as adminSources } from "../../content/ja/ui/errorsAdmin";

const messages = new Map(
  [...publicSources, ...adminSources].map(source => [
    source.id.slice("ui.errors.".length),
    source.ja,
  ])
);

/** API compatibility text and UI copy have one Japanese authoring source. */
export function errorMessage(code: string) {
  const message = messages.get(code);
  if (message === undefined) throw new Error("Unknown content error code");
  return message;
}
