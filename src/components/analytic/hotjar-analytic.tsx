"use client"; // Ensures it runs only on the client side

import { useEffect } from "react";
import Hotjar from "@hotjar/browser";

const siteId = process.env.NEXT_PUBLIC_HOTJAR_SITE_ID ? Number(process.env.NEXT_PUBLIC_HOTJAR_SITE_ID) : null;
const hotjarVersion = 6;

export default function HotjarTracker() {
  useEffect(() => {
    if (typeof window !== "undefined" && siteId) {
      Hotjar.init(siteId, hotjarVersion);
    }
  }, []);

  return null; // No UI needed, just initializes Hotjar
}
