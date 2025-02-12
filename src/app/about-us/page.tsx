import { ChallengeSection } from "@/section/about-us/challenge-section";
import { MissionSection } from "@/section/about-us/mission-section";
import { SpacerSection } from "@/section/about-us/spacer-image";
import { BussinesSection } from "@/section/about-us/bussiness-section";
import { MapSection } from "@/section/about-us/map-section";
import ImageGalery from "@/section/about-us/image-section";
import Logo from "@/public/image/logo-white.svg";
import AffiliatesAboutSection from "@/section/about-us/affiliate-section";
import FooterSections from "@/section/about-us/footer-section";
import BottomNavigation from "@/components/layout/navbar/bottom-navigation";


import { Metadata } from "next";
import { fetchSEOData } from "@/lib/seo";


export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://goumrah.id";
  const pageData = await fetchSEOData("about-us"); // Ambil metadata dari JSON

  return {
    title: pageData?.title || "Tentang GoUmrah - Travel Umrah Terpercaya 2025",
    description: pageData?.description || "GoUmrah adalah penyedia perjalanan umrah terpercaya dengan layanan eksklusif, harga terbaik, dan bimbingan ibadah lengkap.",
    keywords: pageData?.keywords || "tentang goumrah, travel umrah terbaik, jasa umrah terpercaya, umrah 2025",
    alternates: { canonical: `${baseUrl}/about-us` },
    openGraph: {
      type: "website",
      locale: "id_ID",
      url: `${baseUrl}/about-us`,
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


const AboutPage = () => {

  return (
    <>

      <div
        className="w-full max-w-screen relative bg-cover bg-center bg-[url(/assets/image/about-hero.png)] bg-no-repeat h-[586px] z-0 overflow-hidden">

        <div className="top-0 z-50 flex h-12 items-center justify-center pt-4 px-4">
          <Logo />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center  text-center text-white pb-[7rem]">
          <h1 className="text-4xl font-extrabold mb-4 text-white px-[19]">Rumah ke Makkah Hanya Satu Langkah</h1>
          <p className="text-xl">#bikin<span className="font-semibold">tenang</span></p>
        </div>

      </div>

      <ChallengeSection />
      <ImageGalery />
      <MissionSection />
      <SpacerSection />
      <BussinesSection />
      <AffiliatesAboutSection />
      <MapSection />
      <FooterSections withCSbanner />
      <BottomNavigation />
    </>
  );
};
export default AboutPage;