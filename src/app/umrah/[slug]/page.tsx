import DetailNavbar from "@/components/layout/navbar/detail-navbar";
import dataPackageDetails from "@/data/package-details";
import { dataPackages } from "@/data/packages";
import HeaderSection from "@/section/package-detail/header-section";
import ImagePoster from "@/section/package-detail/image-poster";

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
      </main>
    </>
  );
}
