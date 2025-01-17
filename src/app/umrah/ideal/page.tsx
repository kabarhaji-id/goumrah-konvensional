import Footer from "@/components/layout/footer";
import PackagesNavbar from "@/components/layout/navbar/packages-navbar";
import { dummyData } from "@/data/package-details";
import CardsSection from "@/section/packages/cards";
import TaglineSection from "@/section/packages/tagline";

export default async function IdealPage() {
  const packages = dummyData.filter((pkg) => pkg.type === "Plus");

  return (
    <>
      <PackagesNavbar title="Paket Umrah Ideal" />
      <TaglineSection />
      <CardsSection packages={packages} />
      <Footer />
    </>
  );
}
