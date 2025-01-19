"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Section, SectionContent, SectionHeader, SectionSubTitle, SectionTitle } from "@/components/ui/section";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import WhatsAppCIcon from "@/assets/icons/whatsapp.svg";
import Link from "next/link";

const PackagesData: CardProps[] = [
  {
    imageUrl: "/assets/image/packages-umrah/package-1.png"
  },
  {
    imageUrl: "/assets/image/packages-umrah/package-2.png"
  }
];

const PackagesTopSellerSection = () => {
  return (
    <Section className="relative z-0 bg-accent pt-12" id="umrah-package">
      <div className="absolute top-0 -z-10 h-20 w-full bg-gradient-to-b from-white to-accent" />
      <div className="absolute bottom-0 -z-10 h-24 w-full bg-gradient-to-t from-white to-accent" />
      <SectionHeader>
        <SectionSubTitle>Pilihan Terbaik Untuk Kamu</SectionSubTitle>
        <SectionTitle className="text-center">
          Nikmati Pengalaman Ibadah Terbaik Bersama Kami
        </SectionTitle>
      </SectionHeader>

      <SectionContent className="space-y-8 px-0">
        <Swiper spaceBetween={16} slidesPerView={"auto"} className="!px-6">
          {PackagesData.map((data, i) => (
            <SwiperSlide
              key={i}
              className="aspect-[9/16] h-auto !w-10/12"
              style={{ marginRight: 16 }}
            >
              <Card imageUrl={data.imageUrl} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="px-6">
          <Button size="lg" className="w-full" asChild>
            <Link
              href={
                `${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}${encodeURIComponent("Assalamu'alaikum Warahmatullahi Wabarakatuh. Saya tertarik dengan paket *Umrah Plus Thaif* yang saya lihat di website Anda. Boleh saya tahu lebih lanjut tentang jadwal, fasilitas, dan biayanya? Terima kasih!")}`
              }
              target="_blank"
            >
              Hubungi Kami <WhatsAppCIcon className="!size-6" />
            </Link>
          </Button>
        </div>
      </SectionContent>
    </Section>
  );
};

interface CardProps {
  imageUrl: string | StaticImport;
}

const Card = ({ imageUrl }: CardProps) => {
  return (
    <Link
      href={
        `${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}${encodeURIComponent("Assalamu'alaikum Warahmatullahi Wabarakatuh. Saya tertarik dengan paket *Umrah Plus Thaif* yang saya lihat di website Anda. Boleh saya tahu lebih lanjut tentang jadwal, fasilitas, dan biayanya? Terima kasih!")}`
      }
      target="_blank"
    >
      <div className="relative h-full w-full flex-none overflow-hidden rounded-lg">
        <Image
          src={imageUrl}
          alt="Paket Umrah 1"
          fill
          quality={100}
          sizes="50vw"
          className="object-cover"
        />
      </div>
    </Link>
  );
};

export default PackagesTopSellerSection;
