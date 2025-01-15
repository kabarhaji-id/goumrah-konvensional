import HeroSection from "@/section/hero";
import PackagesTopSellerSection from "@/section/packages-top-seller";
import PackagesSection from "@/section/packages";
import WhyChooseUsSection from "@/section/why-choose-us";
import GallerySection from "@/section/gallery";
import AfiliasiSection from "@/section/afiliasi";
import ArtikelSection from "@/section/artikel";
import AboutUs from "@/section/about-us";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BottomNavigation from "@/components/layout/navbar/bottom-navigation";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <PackagesTopSellerSection />
      <PackagesSection />
      <WhyChooseUsSection />
      <GallerySection />
      <AfiliasiSection />
      <ArtikelSection />
      <AboutUs />
      <Footer />
      <BottomNavigation />
    </>
  );
}
