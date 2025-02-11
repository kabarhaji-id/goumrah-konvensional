import React from "react";;
import HomePage from "../page";

import { Metadata } from "next";
import { fetchSEOData } from "@/lib/seo";

interface Props {
  params: { slug: string };
}

// --- Metadata for SEO Optimization
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://goumrah.id";
  const { slug } = params; // Tidak perlu await, langsung gunakan params.slug

  console.log("[Metadata] Generating metadata for:", slug);

  try {
    const pageData = await fetchSEOData(slug); // Ambil data SEO

    if (!pageData) {
      console.warn("[Metadata] Using default metadata for:", slug);
    }

    return {
      title: pageData?.title,
      description: pageData?.description ,
      keywords: pageData?.keywords,
      alternates: {
        canonical: `${baseUrl}/umrah/${slug}`,
      },
      openGraph: {
        type: "website",
        locale: "id_ID",
        url: `${baseUrl}/umrah/${slug}`,
        siteName: "GoUmrah",
        images: [
          {
            url: pageData?.image,
            width: 1200,
            height: 630,
            alt: pageData?.title,
          },
        ],
      },
    };
  } catch (error) {
    return {
      title: "GoUmrah - Paket Umrah Terbaik",
    };
  }
}
export default async function UmrohPage() {
  return <HomePage />;
}
