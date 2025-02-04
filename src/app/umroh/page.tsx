import React from "react";

import { Metadata } from "next";
import HomePage from "../page";

// --- Metadata for SEO Optimization
export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: `goumrah.id`,
    keywords: `Umroh 2025, Paket Umroh, Travel Umroh, Biaya Umroh 2025, Umroh murah, Umroh Ramadhan 2025, Travel umroh terpercaya, Tips perjalanan umroh, Umroh mandiri, Paket Umroh VIP`,
    openGraph: {
      title: `goumrah.id`,
      url: `https://goumrah.id`,
      siteName: "goumrah.id",
      locale: "id_ID",
      type: "website",
    },
  };
};

export default async function UmrohPage() {
  return <HomePage />;
}
