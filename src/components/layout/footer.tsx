import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";
import {
  Section,
  SectionContent,
  SectionHeader,
  SectionSubTitle,
} from "../ui/section";

import WhatsAppCIcon from "@/assets/icons/whatsapp.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
import LinkedInIcon from "@/assets/icons/linkedin.svg";

const Footer = () => {
  return (
    <>
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
              href={
                "https://wa.me/628111845788?text=Assalamu'alaikum%20Warahmatullahi%20Wabarakatuh.%20Saya%20tertarik%20dengan%20paket%20*Umrah%20Plus%20Thaif*%20yang%20saya%20lihat%20di%20website%20Anda.%20Boleh%20saya%20tahu%20lebih%20lanjut%20tentang%20jadwal%2C%20fasilitas%2C%20dan%20biayanya%3F%20Terima%20kasih!"
              }
              target="_blank"
            >
              Hubungi Kami <WhatsAppCIcon className="!size-6" />
            </Link>
          </Button>
        </SectionContent>
      </Section>
      <footer className="relative">
        <div className="z-0 -mt-4 flex flex-col gap-3 rounded-t-3xl bg-primary px-6 py-8">
          <Image
            alt="goumrah.id logo"
            src="/assets/image/logo-white.svg"
            width={150}
            height={32}
            className="h-[32px] w-[150px]"
          />

          <div className="flex flex-col gap-8 font-light">
            <div className="flex flex-col gap-4 text-sm text-white">
              <h6 className="text-base font-bold">
                Tentang&nbsp;
                <span className="font-light">Kami</span>
              </h6>
              <Link href="#about-us">Tentang</Link>
              <Link href="#gallery">Galeri</Link>
              <Link href="#article">Artikel</Link>
            </div>

            <div className="flex flex-col gap-4 text-sm text-white">
              <h6 className="text-base font-bold">
                Layanan&nbsp;
                <span className="font-light">Kami</span>
              </h6>
              <Link href="">Umrah Silver</Link>
              <Link href="">Umrah Gold</Link>
              <Link href="">Umrah Platinum</Link>
              <Link href="">Umrah Luxury</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 bg-primary px-6 py-3 font-light text-white">
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-medium">Office</h3>
            <span className="text-sm">
              JALAN GM AINUL YAKIN 35 AB, KELURAHAN KALIBATA, KECAMATAN
              PANCORAN, KOTA ADM. JAKARTA SELATAN, DKI JAKARTA
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-medium">Customer Service</h3>
            <span className="text-sm">+6281234567890</span>
            <span className="text-sm">info@goumrah.id</span>
          </div>

          <p className="text-xs font-light leading-5">
            Selamat datang di Goumrah.id, mitra terpercaya Anda dalam perjalanan
            umrah dan haji lebih dari 18 tahun. Kami telah berkomitmen untuk
            memberikan pengalaman ibadah yang aman, nyaman, dan memenuhi harapan
            spiritual jamaah kami di seluruh Indonesia.
            <br />
            <br /> Dengan pengalaman dan dedikasi yang kuat, Goumrah.id telah
            menjadi pilihan utama bagi ribuan jamaah yang mencari layanan umrah
            dan haji yang profesional dan terpercaya.
            <br />
            <br />
            Terima kasih telah memilih Goumrah.id sebagai sahabat perjalanan
            ibadah Anda. Bersama kami, wujudkan perjalanan ibadah yang berkesan
            dan penuh makna. <br />
            <br />
            Goumrah.id - Dari Hati Untuk Jamaah.
          </p>
        </div>

        <div className="flex flex-col gap-5 border-t border-white bg-primary px-6 py-5 font-light text-white">
          <Image
            alt="goumrah.id logo"
            src="/assets/image/logo-white.svg"
            width={150}
            height={32}
            className="h-[32px] w-[150px]"
          />

          <div className="flex flex-col gap-1 text-xs">
            <span>Nomor Izin PPIU</span>
            <span className="text-base font-bold">2705 2200 3877 40007</span>
            <span>Tahun 2024</span>
          </div>

          <span className="text-sm">
            © 2024 goumrah.id - PT Kabar Haji Indonesia.
            <br />
            All Rights Reserved
          </span>

          <div className="flex gap-4">
            <InstagramIcon className="!size-6" />
            <LinkedInIcon className="!size-6" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
