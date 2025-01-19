import Footer from "@/components/layout/footer";
import PackagesNavbar from "@/components/layout/navbar/packages-navbar";
import { packageDetailData } from "@/data/package-details";
import CardsSection from "@/section/packages/cards";
import TaglineSection from "@/section/packages/tagline";

export default async function IdealPage() {
  const packages = packageDetailData.filter((pkg) => pkg.type === "Plus");

  return (
    <>
      <PackagesNavbar title="Paket Umrah Ideal" />
      <TaglineSection />
      <CardsSection packages={packages} />
      <Footer />
    </>
  );
}
