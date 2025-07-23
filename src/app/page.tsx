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
      <div
        className="w-full max-w-screen relative bg-cover bg-center bg-[url(/assets/image/about-hero.png)] bg-no-repeat h-[586px] z-0 overflow-hidden rounded-b-3xl mb-9">
        <div className="top-0 z-50 flex h-12 items-center justify-center pt-4 px-4">
          <Logo />
          {/* <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white via-white/50 to-transparent backdrop-blur-md"></div> */}
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center  text-center text-white pb-[10rem]">
          <h1 className="text-4xl font-extrabold mb-4 text-white px-[19]">Rumah ke Makkah<br />Hanya Satu Langkah</h1>
          <p className="text-md">#bikin<span className="font-semibold">tenang</span></p>
          <p className="mt-6 text-base leading-[140%] tracking-wider">
            Sambut Panggilan-Nya
          </p>
          <h3 className="text-center text-[21px] font-bold leading-[130%] tracking-normal">
            Umrah Ideal dengan Momen Tak Terlupakan
          </h3>
        </div>
        {/* <div className="z-20 mt-7 flex flex-col items-center gap-2">
          
        </div> */}
      </div>
      <AboutUsSection />
      <section className="flex justify-center items-center gap-4 px-6 pt-4 mb-12">
        <Image
          src={"/assets/image/guarantee.png"}
          alt="100% Guarantee"
          title="100% Guarantee"
          width={360}
          height={300}
          className="h-[160px] w-[137px]"
          quality={70}
          priority
        />
        <p className="text-lg font-bold leading-[130%] tracking-normal text-primary-foreground">
          Jaminan <span className="text-primary">100% Hotel</span> dan<br />
          <span className="text-primary">Maskapai </span>
          Sesuai Pesanan
        </p>
      </section>
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
