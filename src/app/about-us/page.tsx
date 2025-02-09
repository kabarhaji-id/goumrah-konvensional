import { ChallengeSection } from "@/section/about-us/challenge-section";
import { MissionSection } from "@/section/about-us/mission-section";
import { SpacerSection } from "@/section/about-us/spacer-image";
import { BussinesSection } from "@/section/about-us/bussiness-section";
import { MapSection } from "@/section/about-us/map-section";
import ImageGalery from "@/section/about-us/image-section";
import Logo from "@/public/image/logo-white.svg";
import AffiliatesAboutSection from "@/section/about-us/affiliate-section";
import FooterSections from "@/section/about-us/footer-section";
import BottomNavigation from "@/components/layout/navbar/bottom-navigation";

const AboutPage = () => {

  return (
    <>
      <div className="w-full relative bg-cover bg-center bg-no-repeat max-w-screen h-[586px] z-0 overflow-hidden"
           style={{ backgroundImage: `url('/assets/image/about-hero.png')` }}>

        <div className="top-0 z-50 flex h-12 items-center justify-center pt-4 px-4">
          <Logo />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center  text-center text-white pb-[7rem]">
          <h1 className="text-4xl font-extrabold mb-4 text-white px-[19]">Rumah ke Makkah Hanya Satu Langkah</h1>
          <p className="text-xl">#bikin<span className="font-semibold">tenang</span></p>
        </div>

      </div>

      <ChallengeSection />
      <ImageGalery />
      <MissionSection />
      <SpacerSection />
      <BussinesSection />
      <AffiliatesAboutSection />
      <MapSection />
      <FooterSections withCSbanner />
      <BottomNavigation />
    </>
  );
};
export default AboutPage;