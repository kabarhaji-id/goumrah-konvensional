import Link from "next/link";
import DetailNavbar from "@/components/layout/navbar/detail-navbar";
import HeaderSection from "@/section/package-detail/header-section";
import ImagePoster from "@/section/package-detail/image-poster";
import PricingSection from "@/section/package-detail/pricing-section";
import FlightSection from "@/section/package-detail/flight-section";
import HotelSection from "@/section/package-detail/hotel-section";
import TransportationSection from "@/section/package-detail/transportation-section";
import ProductCoverageSection from "@/section/package-detail/product-coverage-section";
import AdditionalServices from "@/section/package-detail/additional-services";
import BottomNavigationDetail from "@/components/layout/navbar/bottom-navigation-detail";
import PromoSection from "@/section/package-detail/promo-section";
import TourVoucherSection from "@/section/package-detail/tour-voucher-section";
import ItinerarySection from "@/section/package-detail/itinerary-section";
import Footer from "@/components/layout/footer";
import NotFound from "@/app/not-found";

import { dataPackages } from "@/data/packages";
import { dummyData } from "@/data/package-details";
import { Metadata } from "next";
import OtherPackagesSection from "@/section/package-detail/other-packages-section";

// --- Metadata for SEO Optimization
export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const resolvedParams = await params;
  const data = dummyData.find((det) => det.id === resolvedParams.slug);

  return {
    generator: "Next.js",
    title: data?.tagline,
    // description: data?.description,
    keywords: `Umrah ${data?.category}, paket umrah terbaik, hotel dekat Masjidil Haram, promo wisata religi`,
    openGraph: {
      title: data?.tagline,
      url: `https://goumrah.id/umrah/${(await params).slug}`,
      siteName: "goumrah.id",
      images: [
        {
          url: `${data?.thumbnail}`,
          width: 1200,
          height: 630,
        },
      ],
      locale: "id_ID",
      type: "website",
    },
  };
};

export default async function DetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // const selectedPackage = dummyData.find((pkg) => pkgslug === Number(id));
  const resolvedParams = await params;
  const detail = dummyData.find((det) => det.id === resolvedParams.slug);

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

          <ProductCoverageSection />

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
