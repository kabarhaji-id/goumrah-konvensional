import HeroSection from "@/section/hero";
import PackagesTopSellerSection from "@/section/packages-top-seller";
import PackagesSection from "@/section/packages";
import WhyChooseUsSection from "@/section/why-choose-us";
import GallerySection from "@/section/gallery";
import AfiliasiSection from "@/section/afiliasi";
import ArtikelSection from "@/section/artikel";
import AboutUs from "@/section/about-us";
import  { ChatWidgets } from "@/section/chat/chat-widgets";
export default function Home() {
    return (
    <>
      <HeroSection />
      <PackagesTopSellerSection />
      <PackagesSection />
      <WhyChooseUsSection />
      <GallerySection />
      <AfiliasiSection />
      <ArtikelSection />
      <AboutUs />
      <ChatWidgets
        phoneNumber="+62811157188"
        accountName="Rahman"
      />
    </>
  );
}