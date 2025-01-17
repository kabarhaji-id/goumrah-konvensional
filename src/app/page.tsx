import HeroSection from "@/section/hero";
import RecommendedPackagesSection from "@/section/recommended-packages";
import WhyChooseUsSection from "@/section/why-choose-us";
import GallerySection from "@/section/gallery";
import AboutUsSection from "@/section/about-us";
import Footer from "@/components/layout/footer";
import BottomNavigation from "@/components/layout/navbar/bottom-navigation";
import IdealPackagesSection from "@/section/ideal-packages";
import TestimonySection from "@/section/testimony";
import AffiliatesSection from "@/section/affiliate";
import { ChatWidgets } from "@/section/chat/chat-widgets";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <RecommendedPackagesSection />
      <IdealPackagesSection />
      <WhyChooseUsSection />
      <GallerySection />
      <AffiliatesSection />
      <TestimonySection />
      <AboutUsSection />
      <Footer withCSbanner />
      <BottomNavigation />
      <ChatWidgets
        phoneNumber="+62811157188"
        accountName="Isma Goumrah"
      />
    </>
  );
}