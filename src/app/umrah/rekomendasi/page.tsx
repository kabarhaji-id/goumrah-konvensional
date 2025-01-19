import Footer from "@/components/layout/footer";
import PackagesNavbar from "@/components/layout/navbar/packages-navbar";
import { packageDetailData } from "@/data/package-details";
import CardsSection from "@/section/packages/cards";
import TaglineSection from "@/section/packages/tagline";

export default async function RekomendasiPage() {
  const packages = packageDetailData.filter((pkg) => pkg.type === "Reguler");

  return (
    <>
      <PackagesNavbar title="Paket Rekomendasi" />
      <TaglineSection />
      <CardsSection packages={packages} />
      <Footer />
    </>
  );
}
