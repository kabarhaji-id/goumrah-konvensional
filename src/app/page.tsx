import React from "react";
import HeroSection from "@/section/home/hero";
import RecommendedPackagesSection from "@/section/home/recommended-packages";
import WhyChooseUsSection from "@/section/home/why-choose-us";
import GallerySection from "@/section/home/gallery";
import AboutUsSection from "@/section/home/about-us";
import Footer from "@/components/layout/footer";
import BottomNavigation from "@/components/layout/navbar/bottom-navigation";
import IdealPackagesSection from "@/section/home/ideal-packages";
import TestimonySection from "@/section/home/testimony";
import AffiliatesSection from "@/section/home/affiliate";
import  PromoPopup  from "@/components/ui/card/promo-card"

import { Metadata } from "next";
import { fetchSEOData } from "@/lib/seo"; // Adjust the import path as needed


export const generateMetadata = async (): Promise<Metadata> => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://goumrah.id"; // Fallback URL
    const pageData = await fetchSEOData("umrah"); // Fetch SEO data

    // Fallback to default values if pageData is missing properties
    const seo = {
        title: pageData?.title || "Paket Umrah 2025 - Pilihan Terbaik untuk Ibadah Nyaman | GoUmrah",
        description: pageData?.description || "Jelajahi berbagai pilihan paket umrah 2025 terbaik dengan harga terjangkau, hotel dekat Masjidil Haram, dan bimbingan ibadah profesional.",
        keywords: pageData?.keywords || "paket umroh 2025, biaya umroh 2025, umroh murah terpercaya, umroh murah, umroh plus, umroh eksklusif",
        alternates: { canonical: `${baseUrl}` },
        openGraph: {
            type: "website",
            locale: "id_ID",
            url: `${baseUrl}`,
            siteName: "GoUmrah",
            images: [
                {
                    url: pageData?.image || `${baseUrl}/assets/image/ -cover.jpg`,
                    width: 1200,
                    height: 630,
                    alt: pageData?.title || "Paket Umrah 2025 - Pilihan Terbaik untuk Ibadah Nyaman | GoUmrah",
                },
            ],
        },
        robots: pageData?.robots || "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1", // Default robots meta
        publisher: pageData?.publisher || "goumrah.id", // Default publisher
        authors: [{ name: pageData?.authors }, { name: pageData?.authors, url: `${baseUrl}` }],

        // Add rel="image_src" directly to the seo object
        imageSrcLink: `<link rel="image_src" href="${pageData?.image || `${baseUrl}/assets/image/ -cover.jpg`}" />`,
    };

    return seo;
};



export default async function HomePage() {
  // const packages = await getAllPackages();

  // if (packages.records) {
  return (
    <main>
        <PromoPopup />
      <HeroSection />
      {/* <IdealPackagesSection packages={packages.records} /> */}
      <IdealPackagesSection />
      <RecommendedPackagesSection />
      <WhyChooseUsSection />
      <GallerySection />
      <AffiliatesSection />
      <TestimonySection />
      <AboutUsSection />
      <Footer withCSbanner />
      <BottomNavigation />
    </main>
  );
  // }
}
