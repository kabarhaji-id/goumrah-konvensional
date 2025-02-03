"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import * as gtag from "@/lib/gtag";

export default function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      const title = document.title; // Get the page title
      gtag.pageview(pathname, title); // Pass the title to gtag.pageview
    }
  }, [pathname]);

  return null;
}