import DetailNavbar from "@/components/layout/navbar/detail-navbar";
import dataPackageDetails from "@/data/package-details";
import HeaderSection from "@/section/package-detail/header-section";
import ImagePoster from "@/section/package-detail/image-poster";
import PricingSection from "@/section/package-detail/pricing-section";

import { dataPackages } from "@/data/packages";
import { dummyData } from "@/data/new";

export default async function DetailPage() {
  return (
    <>
      <DetailNavbar dataPackage={dataPackages[0]} />

      <main className="h-[5000px]">
        <ImagePoster
          packageImage={dataPackages[0].thumbnail}
          packageCategory={dataPackages[0].category}
        />

        <HeaderSection
          packageData={dataPackageDetails[0]}
          durationDays={dataPackages[0].duration}
        />

        <PricingSection packageData={dummyData} />
      </main>
    </>
  );
}
