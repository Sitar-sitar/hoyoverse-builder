import React from "react";
import { trpc } from "@/lib/trpc";
import { LanguageProvider } from "./LanguageContext";

export default function PublishedLanguageProvider({ children }: { children: React.ReactNode }) {
  const query = trpc.languages.settings.useQuery(undefined, {
    staleTime: 0,
    refetchInterval: 60_000,
    refetchOnWindowFocus: true,
    retry: 1,
  });
  return <LanguageProvider settingsPending={query.isPending} enabledLanguages={query.isError ? undefined : query.data?.enabledLanguages}>{children}</LanguageProvider>;
}
