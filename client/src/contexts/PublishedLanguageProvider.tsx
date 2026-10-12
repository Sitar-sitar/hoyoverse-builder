import React from "react";
import { trpc } from "@/lib/trpc";
import { LanguageProvider } from "./LanguageContext";
import { CONTENT_MANIFEST } from "@/content/manifest";

export default function PublishedLanguageProvider({ children }: { children: React.ReactNode }) {
  const query = trpc.languages.settings.useQuery(undefined, {
    staleTime: 0,
    refetchInterval: 60_000,
    refetchOnWindowFocus: true,
    retry: 1,
  });
  const ready: readonly string[] = CONTENT_MANIFEST.readyLanguages;
  return <LanguageProvider settingsPending={query.isPending} enabledLanguages={query.isError ? undefined : query.data?.enabledLanguages.filter(language => ready.includes(language))}>{children}</LanguageProvider>;
}
