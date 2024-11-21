"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Section,
  SectionContent,
  SectionHeader,
  SectionSubTitle,
  SectionTitle,
} from "@/components/ui/section";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import WhatsAppCIcon from "@/assets/icons/whatsapp.svg";
import Link from "next/link";

const PackagesData: CardProps[] = [
  {
    imageUrl: "/assets/image/packages-umrah/package-3.png",
  },
  {
    imageUrl: "/assets/image/packages-umrah/package-4.png",
  },
];

const PackagesSection = () => {
  return (
    <Section className="relative z-0 bg-accent pt-12">
      <div className="absolute top-0 -z-10 h-20 w-full bg-gradient-to-b from-white to-accent" />

      <SectionHeader>
        <SectionSubTitle>Sambut Panggilan-Nya</SectionSubTitle>
        <SectionTitle>
          Paket Umrah Ideal, Dikelola Oleh Tenaga Profesional
        </SectionTitle>
      </SectionHeader>

      <SectionContent className="space-y-8 px-0">
        <Swiper spaceBetween={16} slidesPerView={"auto"} className="!px-6">
          {PackagesData.map((data, i) => (
            <SwiperSlide
              key={i}
              className="aspect-[4/5] h-auto !w-10/12"
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
                "https://wa.me/6285161390739?text=Assalamu'alaikum%20Warahmatullahi%20Wabarakatuh.%20Saya%20tertarik%20dengan%20paket%20*Umrah%20Plus%20Thaif*%20yang%20saya%20lihat%20di%20website%20Anda.%20Boleh%20saya%20tahu%20lebih%20lanjut%20tentang%20jadwal%2C%20fasilitas%2C%20dan%20biayanya%3F%20Terima%20kasih!"
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
        "https://wa.me/6285161390739?text=Assalamu'alaikum%20Warahmatullahi%20Wabarakatuh.%20Saya%20tertarik%20dengan%20paket%20*Umrah%20Plus%20Thaif*%20yang%20saya%20lihat%20di%20website%20Anda.%20Boleh%20saya%20tahu%20lebih%20lanjut%20tentang%20jadwal%2C%20fasilitas%2C%20dan%20biayanya%3F%20Terima%20kasih!"
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

export default PackagesSection;
