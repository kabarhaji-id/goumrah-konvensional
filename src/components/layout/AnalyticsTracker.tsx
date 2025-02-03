"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import * as gtag from "@/lib/gtag";

export default function AnalyticsTracker() {
  const pathname = usePathname(); // Get the current route

  useEffect(() => {
    if (pathname) {
      gtag.pageview(pathname); // Send pageview when route changes
    }
  }, [pathname]); // Runs whenever pathname changes

  return null; // No UI needed, just tracking
}
