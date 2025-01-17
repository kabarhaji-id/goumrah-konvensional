import Footer from "@/components/layout/footer";
import PackagesNavbar from "@/components/layout/navbar/packages-navbar";
import { PackageCard } from "@/components/ui/package-card";
import { dummyData } from "@/data/package-details";
import CardsSection from "@/section/packages/cards";
import TaglineSection from "@/section/packages/tagline";

export default async function RekomendasiPage() {
  const packages = dummyData.filter((pkg) => pkg.type === "Reguler");

  return (
    <>
      <PackagesNavbar title="Paket Rekomendasi" />
      <TaglineSection />
      <CardsSection packages={packages} />
      <Footer />
    </>
  );
}
