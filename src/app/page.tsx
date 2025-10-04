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
import PromoPopup from "@/components/ui/card/promo-card";
import Logo from "@/public/image/logo-white.svg";

import { Metadata } from "next";
import { fetchSEOData } from "@/lib/seo"; // Adjust the import path as needed
import Image from "next/image";


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
      <div className="w-full max-w-screen relative bg-cover bg-bottom bg-[url(/assets/image/about-hero.jpeg)] bg-no-repeat h-svh z-0 overflow-hidden mb-2">
        {/* Konten hero existing */}
        <div className="top-0 z-50 flex h-12 items-center justify-center pt-[8svh] px-4">
          <Logo />
        </div>
        <div className="absolute inset-0 flex flex-col items-center text-center text-white pt-28">
          <h1 className="text-4xl font-extrabold mb-4 text-white px-[19]">Rumah ke Makkah<br />Hanya Satu Langkah</h1>
          <p className="text-md">#bikin<span className="font-semibold">tenang</span></p>
          <p className="mt-6 text-base leading-[140%] tracking-wider">Sambut Panggilan-Nya</p>
          <h3 className="text-center text-[21px] font-bold leading-[130%] tracking-normal">
            Umrah Ideal dengan Momen Tak Terlupakan
          </h3>
        </div>
        <span
          className="absolute top-0 left-0 size-full shadow-[0_0_400px_rgba(0,0,0,1)_inset]"
        />

        {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div> */}
      </div>
      <AboutUsSection />
      {/* <HeroSection /> */}
      {/* <IdealPackagesSection packages={packages.records} /> */}
      <IdealPackagesSection />
      <RecommendedPackagesSection />
      <WhyChooseUsSection />
      <GallerySection />
      <AffiliatesSection />
      <TestimonySection />
      <Footer withCSbanner />
      <BottomNavigation />
    </main>
  );
  // }
}
