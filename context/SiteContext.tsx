"use client";

// Replaces PHP's global $data and $links variables from general_config.php.
// Wrap your app in <SiteProvider> and use useSite() in any component.

import { createContext, useContext, ReactNode } from "react";
import { SiteData, SiteLinks } from "@/types/site";

interface SiteContextValue {
  data: SiteData;
  links: SiteLinks;
}

const SiteContext = createContext<SiteContextValue | null>(null);

export function useSite(): SiteContextValue {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used inside <SiteProvider>");
  return ctx;
}

interface SiteProviderProps {
  data: SiteData;
  links: SiteLinks;
  children: ReactNode;
}

export function SiteProvider({ data, links, children }: SiteProviderProps) {
  return (
    <SiteContext.Provider value={{ data, links }}>
      {children}
    </SiteContext.Provider>
  );
}
