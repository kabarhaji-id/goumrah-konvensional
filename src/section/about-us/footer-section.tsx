import Image from "next/image";
import Link from "next/link";

import {
  Section,
} from "../../components/ui/section";

import InstagramIcon from "@/public/icons/instagram.svg";
import LinkedInIcon from "@/public/icons/linkedin.svg";
import TikTokIcon from "@/public/icons/tiktok.svg";
import FacebookIcon from "@/public/icons/facebook.svg";
import NewsletterSubscription from "./newsletter-section";

interface FooterProps {
  withCSbanner?: boolean;
}

const FooterSections = ({ withCSbanner = false }: FooterProps) => {
  return (
    <>
      {withCSbanner && (
        <Section className="relative z-0 flex max-w-screen-sm flex-col gap-4 space-y-0 bg-accent">
          <div className="absolute right-0 top-0 -z-20 h-full w-full bg-teal bg-right-top" />
          <NewsletterSubscription />
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
            <h3 className="text-xl font-medium leading-6">Head Office</h3>
            <span className="w-full max-w-[269px] text-sm">
              JL. GM Ainul Yakin ADAH 35A Kalibata Kec. Pancoran, Kota Jakarta
              Selatan, Daerah Khusus Ibukota Jakarta 12740
            </span>
          </div>

          <div className="flex flex-col gap-2.5">
            <h3 className="text-xl font-medium leading-6">Customer Service</h3>
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

export default FooterSections;
