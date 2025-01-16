import DetailNavbar from "@/components/layout/navbar/detail-navbar";
import dataPackageDetails from "@/data/package-details";
import HeaderSection from "@/section/package-detail/header-section";
import ImagePoster from "@/section/package-detail/image-poster";
import PricingSection from "@/section/package-detail/pricing-section";
import FlightSection from "@/section/package-detail/flight-section";

import { dataPackages } from "@/data/packages";
import { dummyData } from "@/data/new";
import HotelSection from "@/section/package-detail/hotel-section";

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
        <DetailNavbar dataPackage={dataPackages[0]} />

        <main>
          <ImagePoster
            packageImage={dataPackages[0].thumbnail}
            packageCategory={dataPackages[0].category}
          />

          <HeaderSection packageData={detail} durationDays={detail.duration} />

          <PricingSection packageData={detail} />

          <FlightSection dataFlight={detail.flight_details} />

          <HotelSection dataHotel={detail.hotel_details} />
        </main>
      </>
    );
  }
}
