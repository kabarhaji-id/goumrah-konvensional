import Footer from "@/components/layout/footer";
import BottomNavigation from "@/components/layout/navbar/bottom-navigation";
import PackagesNavbar from "@/components/layout/navbar/packages-navbar";
import CardsSection from "@/section/packages/cards";
import TaglineSection from "@/section/packages/tagline";

import { packageDetailData } from "@/data/packages";

export default async function IdealPage() {
  return (
    <>
      <PackagesNavbar title="Paket Umrah" />
      <TaglineSection />
      <CardsSection packages={packageDetailData} />
      <Footer />
      <BottomNavigation />
    </>
  );
}
