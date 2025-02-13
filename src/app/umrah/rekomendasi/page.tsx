import Footer from "@/components/layout/footer";
import BottomNavigation from "@/components/layout/navbar/bottom-navigation";
import PackagesNavbar from "@/components/layout/navbar/packages-navbar";
import { packageDetailData } from "@/data/package-details";
import CardsSection from "@/section/packages/cards";
import TaglineSection from "@/section/packages/tagline";



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
          url: pageData?.image || `${baseUrl}/assets/image/gold-package.jpg`,
          width: 1200,
          height: 630,
          alt: pageData?.title || "Tentang GoUmrah - Travel Umrah Terpercaya 2025",
        },
      ],
    },
    robots: pageData?.robots || "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1", // Default robots meta
    authors: [{ name: pageData?.authors }, { name: pageData?.authors, }],
    publisher: pageData?.publisher || "goumrah.id", // Default publisher
  };
}



export default async function RekomendasiPage() {
  const packages = packageDetailData.filter((pkg) => pkg.type === "Reguler");

  return (
    <>
      <PackagesNavbar title="Paket Rekomendasi" />
      <TaglineSection />
      <CardsSection packages={packages} />
      <Footer />
      <BottomNavigation />
    </>
  );
}
