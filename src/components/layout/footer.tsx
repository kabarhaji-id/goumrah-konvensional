import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";
import {
  Section,
  SectionContent,
  SectionHeader,
  SectionSubTitle,
} from "../ui/section";

import WhatsAppCIcon from "@/public/icons/whatsapp.svg";
import InstagramIcon from "@/public/icons/instagram.svg";
import LinkedInIcon from "@/public/icons/linkedin.svg";
import TikTokIcon from "@/public/icons/tiktok.svg";
import FacebookIcon from "@/public/icons/facebook.svg";

interface FooterProps {
  withCSbanner?: boolean;
}

const Footer = ({ withCSbanner = false }: FooterProps) => {
  return (
    <>
      {withCSbanner && (
        <Section className="relative z-0 mt-4 flex max-w-screen-sm flex-col gap-4 space-y-0 bg-accent pb-10 pt-6">
          <div className="absolute right-0 top-0 -z-20 h-full w-full bg-[url('/assets/image/footer-cs-bg.svg')] bg-right-top bg-no-repeat" />
          <SectionHeader>
            <SectionSubTitle className="!space-y-0 self-start text-lg font-medium text-accent-foreground">
              Customer Service
            </SectionSubTitle>
          </SectionHeader>
          <SectionContent className="space-y-4">
            <p className="text-sm tracking-wide">
              Konsultasikan perjalanan Ibadah Umrah Anda bersama kami. Hubungi
              Customer Service goumrah.id, aktif 24/7
            </p>

            <Button size="lg" className="z-50 w-full px-6" asChild>
              <Link
                href={`https://api.whatsapp.com/send/?phone=${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}text=Assalamu'alaikum%20Warahmatullahi%20Wabarakatuh.%20Saya%20tertarik%20dengan%20paket%20*Umrah%20Plus%20Thaif*%20yang%20saya%20lihat%20di%20website%20Anda.%20Boleh%20saya%20tahu%20lebih%20lanjut%20tentang%20jadwal%2C%20fasilitas%2C%20dan%20biayanya%3F%20Terima%20kasih!`}
                target="_blank"
              >
                Hubungi Kami <WhatsAppCIcon className="!size-6" />
              </Link>
            </Button>
          </SectionContent>
        </Section>
      )}

      <footer
        className={`relative rounded-t-[22px] bg-primary px-6 py-[30px] ${withCSbanner && "-mt-4"}`}
      >
        <Image
          alt="goumrah.id logo"
          src="/assets/image/logo-white.svg"
          width={150}
          height={32}
          className="h-[32px] w-[150px]"
        />

        <div className="flex flex-col gap-5 py-[26px] font-light text-white">
          <div className="flex flex-col gap-2.5">
            <h3 className="text-xl font-medium leading-6">Office</h3>
            <span className="w-full max-w-[269px] text-sm">
              RT.1/RW.9, Kalibata, Kec. Pancoran, Kota Jakarta Selatan, Daerah
              Khusus Ibukota Jakarta 12740
            </span>
          </div>

          <div className="flex flex-col gap-2.5">
            <h3 className="text-xl font-medium leading-6">Customer Service</h3>
            <span className="text-sm">+6281234567890</span>
            <span className="text-sm">info@goumrah.id</span>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-white py-5 font-light text-white">
          <div className="flex flex-col gap-1 text-xs">
            <span>Nomor Izin PPIU</span>
            <span className="text-base font-bold">0247 0101 4295 30001</span>
            <span>No U.140 Tahun 2024</span>
          </div>

          <span className="text-sm">
            © 2024 goumrah.id - PT Kabar Haji Indonesia. All Rights Reserved
          </span>

          <div className="flex gap-4">
            <Link href="https://www.instagram.com/goumrah.id/">
              <InstagramIcon className="!size-6" />
            </Link>

            <Link href="https://www.facebook.com/share/15cxke61MA/">
              <FacebookIcon className="!size-6" />
            </Link>

            <Link href="https://www.tiktok.com/@goumrah.id">
              <TikTokIcon className="!size-6" />
            </Link>

            <Link href="https://www.linkedin.com/company/pt-kabar-haji-indonesia">
              <LinkedInIcon className="!size-6" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
