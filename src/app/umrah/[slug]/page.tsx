import DetailNavbar from "@/components/layout/navbar/detail-navbar";
import HeaderSection from "@/section/package-detail/header-section";
import ImagePoster from "@/section/package-detail/image-poster";
import PricingSection from "@/section/package-detail/pricing-section";
import FlightSection from "@/section/package-detail/flight-section";
import HotelSection from "@/section/package-detail/hotel-section";
import TransportationSection from "@/section/package-detail/transportation-section";
import ProductCoverageSection from "@/section/package-detail/product-coverage-section";
import AdditionalServices from "@/section/package-detail/additional-services-section";
import BottomNavigationDetail from "@/components/layout/navbar/bottom-navigation-detail";
import PromoSection from "@/section/package-detail/promo-section";
import TourVoucherSection from "@/section/package-detail/tour-voucher-section";
import ItinerarySection from "@/section/package-detail/itinerary-section";
import Footer from "@/components/layout/footer";
import NotFound from "@/app/not-found";
import OtherPackagesSection from "@/section/package-detail/other-packages-section";

import { UmrahPackage } from "@/types/package-details";
import { packageDetailData } from "@/data/package-details";

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
      title: pageData?.title || "GoUmrah - Paket Umrah Terbaik",
      description: pageData?.description || "Pilih paket umrah terbaik untuk perjalanan ibadah Anda.",
      keywords: pageData?.keywords || "umrah, paket umrah, travel umrah",
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
            url: pageData?.image || "https://goumrah.id/assets/default.jpg",
            width: 1200,
            height: 630,
            alt: pageData?.title || "GoUmrah",
          },
        ],
      },
    };
  } catch (error) {
    console.error("[Metadata] Error fetching SEO data:", error);
    return {
      title: "GoUmrah - Paket Umrah Terbaik",
    };
  }
}


export default async function DetailPage({ params, }: { params: Promise<{ slug: string }>; }) {
  // const selectedPackage = packageDetailData.find((pkg) => pkgslug === Number(id));
  const resolvedParams = await params;
  const detail = packageDetailData.find(
    (det: UmrahPackage) => det.id === resolvedParams.slug,
  );

  if (detail) {
    return (
      <>
        <DetailNavbar dataPackage={detail} />

        <main>
          <ImagePoster
            packageImage={detail.thumbnail}
            packageCategory={detail.category}
          />

          <HeaderSection packageData={detail} durationDays={detail.duration} />

          <PricingSection packageData={detail} />

          <FlightSection dataFlight={detail.flight_details} />

          <HotelSection dataHotel={detail.hotel_details} />

          <TransportationSection
            dataTransportation={detail.bus_details}
            category={detail.category}
          />

          <ItinerarySection dataItineraries={detail.itineraries} />

          <TourVoucherSection dataAddOns={detail.addons} />

          <ProductCoverageSection dataImportantNotes={detail.importantNotes} />

          <AdditionalServices />

          <PromoSection dataPromos={detail.promos} />

          <OtherPackagesSection packageId={detail.id} />

          <Footer />

          <BottomNavigationDetail orderUrl={detail.order_url} />
        </main>
      </>
    );
  }

  return <NotFound />;
}

// --- Method: Hit API
// export default async function DetailPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const packages = await getAllPackages();
//   const resolvedParams = await params;

//   if (packages.records) {
//     const detail = packages.records.find(
//       (det: Packages) => det.data.id === resolvedParams.slug,
//     );

//     if (detail) {
//       return (
//         <>
//           <DetailNavbar dataPackage={detail.data} />

//           <main>
//             <ImagePoster
//               packageImage={detail.data.thumbnail}
//               packageCategory={detail.data.category}
//             />

//             <HeaderSection
//               packageData={detail.data}
//               durationDays={detail.data.duration}
//             />

//             <PricingSection packageData={detail.data} />

//             <FlightSection dataFlight={detail.data.flight_details} />

//             <HotelSection dataHotel={detail.data.hotel_details} />

//             <TransportationSection
//               dataTransportation={detail.data.bus_details}
//               category={detail.data.category}
//             />

//             <ItinerarySection dataItineraries={detail.data.itineraries} />

//             <TourVoucherSection dataAddOns={detail.data.addons} />

//             <ProductCoverageSection
//               dataImportantNotes={detail.data.importantNotes}
//             />

//             <AdditionalServices />

//             <PromoSection dataPromos={detail.data.promos} />

//             <OtherPackagesSection packageId={detail.data.id} />

//             <Footer />

//             <BottomNavigationDetail orderUrl={detail.data.order_url} />
//           </main>
//         </>
//       );
//     }
//   }

//   return <NotFound />;
// }
