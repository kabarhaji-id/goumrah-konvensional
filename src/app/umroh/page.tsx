import React from "react";;
import HomePage from "../page";


import { Metadata } from "next";
import { fetchSEOData } from "@/lib/seo";


export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://goumrah.id";
  const pageData = await fetchSEOData("ideal"); // Ambil metadata dari JSON

  return {
    title: pageData?.title || "Tentang GoUmrah - Travel Umrah Terpercaya 2025",
    description: pageData?.description || "GoUmrah adalah penyedia perjalanan umrah terpercaya dengan layanan eksklusif, harga terbaik, dan bimbingan ibadah lengkap.",
    keywords: pageData?.keywords || "tentang goumrah, travel umrah terbaik, jasa umrah terpercaya, umrah 2025",
    alternates: { canonical: `${baseUrl}/umrah/ideal` },
    openGraph: {
      type: "website",
      locale: "id_ID",
      url: `${baseUrl}/umrah/ideal`,
      siteName: "GoUmrah",
      images: [
        {
          url: pageData?.image,
          width: 1200,
          height: 630,
          alt: pageData?.title || "Tentang GoUmrah - Travel Umrah Terpercaya 2025",
        },
      ],
    },
  };
}
export default async function UmrohPage() {
  return <HomePage />;
}
