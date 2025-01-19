import Footer from "@/components/layout/footer";
import BottomNavigation from "@/components/layout/navbar/bottom-navigation";
import PackagesNavbar from "@/components/layout/navbar/packages-navbar";
import { dummyData } from "@/data/package-details";
import CardsSection from "@/section/packages/cards";
import TaglineSection from "@/section/packages/tagline";

export default async function UmrahPage() {
  return (
    <>
      <PackagesNavbar title="Paket Umrah" />
      <TaglineSection />
      <CardsSection packages={dummyData} />
      <Footer />
      <BottomNavigation />
    </>
  );
}
