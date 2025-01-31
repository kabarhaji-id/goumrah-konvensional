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

import { Metadata } from "next";
import { UmrahPackage } from "@/types/package-details";
import { packageDetailData } from "@/data/packages";
import { getAllPackages } from "@/lib/fetcher/getPackages";
import { Packages } from "@/types/packages";

// --- Metadata for SEO Optimization
export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const resolvedParams = await params;
  const data = packageDetailData.find(
    (det: UmrahPackage) => det.id === resolvedParams.slug,
  );

  return {
    generator: "goumrah.id",
    title: `${data?.title ? data.title : "Paket Tidak Ditemukan"}`,
    keywords: `Umroh 2025, Paket Umroh, Travel Umroh, Biaya Umroh 2025, Umroh murah, Umroh Ramadhan 2025, Travel umroh terpercaya, Tips perjalanan umroh, Umroh mandiri, Paket Umroh VIP`,
    openGraph: {
      title: `${data?.title ? data.title : "Paket Tidak Ditemukan"}`,
      url: `https://goumrah.id/umrah/${(await params).slug}`,
      siteName: "goumrah.id",
      locale: "id_ID",
      type: "website",
    },
  };
};

// export default async function DetailPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const resolvedParams = await params;
//   const detail = packageDetailData.find(
//     (det: UmrahPackage) => det.id === resolvedParams.slug,
//   );

//   if (detail) {
//     return (
//       <>
//         <DetailNavbar dataPackage={detail} />

//         <main>
//           <ImagePoster
//             packageImage={detail.thumbnail}
//             packageCategory={detail.category}
//           />

//           <HeaderSection packageData={detail} durationDays={detail.duration} />

//           <PricingSection packageData={detail} />

//           <FlightSection dataFlight={detail.flightDetails} />

//           <HotelSection dataHotel={detail.hotelDetails} />

//           <TransportationSection
//             dataTransportation={detail.busDetails}
//             category={detail.category}
//           />

//           <ItinerarySection dataItineraries={detail.itineraries} />

//           <TourVoucherSection dataAddOns={detail.addons} />

//           <ProductCoverageSection dataImportantNotes={detail.importantNotes} />

//           <AdditionalServices />

//           <PromoSection dataPromos={detail.promos} />

//           <OtherPackagesSection packageId={detail.id} />

//           <Footer />

//           <BottomNavigationDetail orderUrl={detail.orderUrl} />
//         </main>
//       </>
//     );
//   }

//   return <NotFound />;
// }

// NOTE: Activate this when the API is ready and remove the code above
// --- Method: Hit API
export default async function DetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const packages = await getAllPackages();
  const resolvedParams = await params;

  if (packages.records) {
    const detail = packages.records.find(
      (det: Packages) => det.data.id === resolvedParams.slug,
    );

    if (detail) {
      return (
        <>
          <DetailNavbar dataPackage={detail.data} />

          <main>
            <ImagePoster
              packageImage={detail.data.thumbnail}
              packageCategory={detail.data.category}
            />

            <HeaderSection
              packageData={detail.data}
              durationDays={detail.data.duration}
            />

            <PricingSection packageData={detail.data} />

            <FlightSection dataFlight={detail.data.flightDetails} />

            <HotelSection dataHotel={detail.data.hotelDetails} />

            <TransportationSection
              dataTransportation={detail.data.busDetails}
              category={detail.data.category}
            />

            <ItinerarySection dataItineraries={detail.data.itineraries} />

            <TourVoucherSection dataAddOns={detail.data.addons} />

            <ProductCoverageSection
              dataImportantNotes={detail.data.importantNotes}
            />

            <AdditionalServices />

            <PromoSection dataPromos={detail.data.promos} />

            <OtherPackagesSection packageId={detail.data.id} />

            <Footer />

            <BottomNavigationDetail orderUrl={detail.data.orderUrl} />
          </main>
        </>
      );
    }
  }

  return <NotFound />;
}
