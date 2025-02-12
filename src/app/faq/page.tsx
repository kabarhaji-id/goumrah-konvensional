
import  BottomNavigation from "@/components/layout/navbar/bottom-navigation";
import { FAQSearchProvider } from "@/context/search-context";
import FAQContent from "@/section/faq/faq-content";

import { Metadata } from "next";
import { fetchSEOData } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://goumrah.id";
  const pageData = await fetchSEOData("faq"); // Ambil metadata dari JSON

  return {
    title: pageData?.title || "FAQ - Pertanyaan Seputar Umrah & Layanan GoUmrah",
    description: pageData?.description || "Temukan jawaban dari pertanyaan seputar paket umrah, harga, fasilitas, dan syarat perjalanan umrah 2025.",
    keywords: pageData?.keywords || "faq umrah, pertanyaan umrah, informasi umrah, paket umrah 2025, travel umrah terpercaya",
    alternates: { canonical: `${baseUrl}/faq` },
    openGraph: {
      type: "website",
      locale: "id_ID",
      url: `${baseUrl}/faq`,
      siteName: "GoUmrah",
      images: [
        {
          url: pageData?.image || `${baseUrl}/assets/image/faq.jpg`,
          width: 1200,
          height: 630,
          alt: pageData?.title || "FAQ - Pertanyaan Seputar Umrah & Layanan GoUmrah",
        },
      ],
    },
  };
}
export default async function FaqPage() {
  return (
    <FAQSearchProvider> {/* Wrap everything inside the provider */}
      <FAQContent />
      <BottomNavigation />
    </FAQSearchProvider>

  );
}
