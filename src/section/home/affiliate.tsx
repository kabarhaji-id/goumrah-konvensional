"use client";

import Image from "next/image";
import React from "react";

import Marquee from "react-fast-marquee";

interface Affiliate {
  name: string;
  logo: string;
  width: number;
  height: number;
}

const affiliates: Affiliate[] = [
  {
    name: "Kementerian Agama",
    logo: "/assets/image/afiliate-logo/kemenag.png",
    width: 51,
    height: 40,
  },
  {
    name: "Sistem Pengawasan Umrah",
    logo: "/assets/image/afiliate-logo/siskopatuh.png",
    width: 90,
    height: 40,
  },
  {
    name: "Komite Akreditasi Nasional",
    logo: "/assets/image/afiliate-logo/kan.png",
    width: 85,
    height: 36,
  },
  {
    name: "5 Pasti",
    logo: "/assets/image/afiliate-logo/5-pasti.png",
    width: 38,
    height: 40,
  },
  {
    name: "Himpunan Penyelenggara Umrah dan Haji",
    logo: "/assets/image/afiliate-logo/himpuh-logo.png",
    width: 34,
    height: 40,
  },
  {
    name: "Association of The Indonesian Tours and Travel Agencies",
    logo: "/assets/image/afiliate-logo/asita.png",
    width: 56,
    height: 40,
  },
  {
    name: "Badan Nasional Sertifikasi Profesi",
    logo: "/assets/image/afiliate-logo/bnsp.png",
    width: 110,
    height: 40,
  },
  {
    name: "Garuda Indonesia",
    logo: "/assets/image/afiliate-logo/garuda-indonesia.png",
    width: 80,
    height: 40,
  },
  {
    name: "Lion Air",
    logo: "/assets/image/afiliate-logo/lion-air.png",
    width: 72,
    height: 40,
  },
];

const AffiliatesSection = () => {
  return (
    <section className="relative flex flex-col gap-8 overflow-hidden bg-opacity-30 pb-6 pt-1">
      <h2 className="w-full px-6 text-center text-base font-normal leading-[140%] tracking-wider text-primary">
        Afiliasi goumrah.id
      </h2>
      <Marquee autoFill>
        {affiliates.map((affiliate) => (
          <Image
            key={affiliate.name}
            src={affiliate.logo}
            alt={`Logo ${affiliate.name}`}
            width={affiliate.width}
            height={affiliate.height}
            className="mr-16"
            priority
          />
        ))}
      </Marquee>
    </section>
  );
};

export default AffiliatesSection;
