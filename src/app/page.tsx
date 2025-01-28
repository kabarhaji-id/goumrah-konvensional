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

import { Metadata } from "next";

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

export default async function HomePage() {
  // const packages = await getAllPackages();

  // if (packages.records) {
  return (
    <main>
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
