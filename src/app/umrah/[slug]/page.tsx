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

import { dataPackages } from "@/data/packages";
import { dummyData } from "@/data/new";
import { Button } from "@/components/ui/button";
import TourVoucherSection from "@/section/package-detail/tour-voucher-section";

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

          <TransportationSection dataTransportation={detail.bus_details} />

          {/* ItinerarySection Here */}

          {/* TourVoucherSection Here? (need confirmation) */}
          <TourVoucherSection dataAddOns={detail.addons} />

          <ProductCoverageSection />

          <AdditionalServices />

          <PromoSection dataPromos={detail.promos} />

          {/* OtherPackages Here */}

          {/* Footer Here */}

          <BottomNavigationDetail orderUrl={detail.order_url} />
        </main>
      </>
    );
  }

  return (
    <main className="flex h-full min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <h5 className="text-lg font-semibold">
          Maaf, paket yang kamu cari tidak ada
        </h5>
        <Button className="w-fit rounded-[6px]">
          <Link href="/">Kembali ke Beranda</Link>
        </Button>
      </div>
    </main>
  );
}
