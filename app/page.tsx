"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import DynamicView from "@/components/DynamicView";

// Header, MainMenu and Footer are rendered once in app/layout.tsx — do NOT add them here.

function PageContent() {
  const searchParams = useSearchParams();
  const rawView = searchParams.get("view") ?? "home";
  const view = rawView.split("?")[0] || "home";

  return <DynamicView view={view} />;
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageContent />
    </Suspense>
  );
}
