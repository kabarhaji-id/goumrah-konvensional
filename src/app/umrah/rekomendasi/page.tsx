import Footer from "@/components/layout/footer";
import BottomNavigation from "@/components/layout/navbar/bottom-navigation";
import PackagesNavbar from "@/components/layout/navbar/packages-navbar";
import { packageDetailData } from "@/data/package-details";
import CardsSection from "@/section/packages/cards";
import TaglineSection from "@/section/packages/tagline";

import { Metadata } from "next";
import { fetchSEOData } from "@/lib/seo";

type Props = {
  params: { slug: string };
};

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
