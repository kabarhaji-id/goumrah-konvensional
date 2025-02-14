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
import LogoLight from "@/public/image/logo-white.svg"

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
            <p className="text-sm tracking-wide text-neutral-foreground">
              Konsultasikan perjalanan Ibadah Umrah Anda bersama kami. Hubungi
              Customer Service goumrah.id, aktif 24/7
            </p>

            <Button size="lg" className="z-50 w-full px-6" asChild>
              <Link
                href={`${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}${encodeURIComponent(
                  "Assalamualaikum, Saya tertarik untuk melakukan pemesanan paket Umrah melalui Goumrah.id. Saya ingin bertanya lebih lanjut mengenai paket Umrah yang tersedia. Terima kasih atas bantuannya. Saya tunggu informasi lebih lanjut.",
                )}`}
                target="_blank"
                title = "Order"
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
        <LogoLight />

        <div className="flex flex-col gap-5 py-[26px] font-light text-white">
          <div className="flex flex-col gap-2.5">
            <p className="text-xl font-medium leading-6">Head Office</p>
            <span className="w-full max-w-[269px] text-sm">
              JL. GM Ainul Yakin ADAH 35A Kalibata Kec. Pancoran, Kota Jakarta
              Selatan, Daerah Khusus Ibukota Jakarta 12740
            </span>
          </div>

          <div className="flex flex-col gap-2.5">
            <p className="text-xl font-medium leading-6">Customer Service</p>
            <span className="text-sm">+62 811 1571 88</span>
            <span className="text-sm">admin@goumrah.id</span>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-white py-5 font-light text-white">
          <div className="flex flex-col gap-1 text-xs">
            <span>Nomor Izin PPIU</span>
            <span className="text-base font-bold">27052 2003 8774 0007</span>
            <span>Tahun 2024</span>
          </div>

          <span className="text-sm">
            &copy; 2024 goumrah.id - PT Kabar Haji Indonesia. All Rights
            Reserved
          </span>

          <div className="flex gap-4">
            <Link href="https://www.instagram.com/goumrah.id/" title="Instagram">
              <InstagramIcon className="!size-6" />
            </Link>

            <Link href="https://www.facebook.com/share/15cxke61MA/" title="Facebook">
              <FacebookIcon className="!size-6" />
            </Link>

            <Link href="https://www.tiktok.com/@goumrah.id" title="Tiktok">
              <TikTokIcon className="!size-6" />
            </Link>

            <Link href="https://www.linkedin.com/company/pt-kabar-haji-indonesia" title="Linkedin">
              <LinkedInIcon className="!size-6" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
