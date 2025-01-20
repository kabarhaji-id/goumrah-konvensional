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
import React from "react";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <RecommendedPackagesSection />
      <IdealPackagesSection />
      <WhyChooseUsSection />
      <GallerySection />
      <AffiliatesSection />
      <TestimonySection />
      <AboutUsSection />
      <Footer withCSbanner />
      <BottomNavigation />
    </>
  );
}
