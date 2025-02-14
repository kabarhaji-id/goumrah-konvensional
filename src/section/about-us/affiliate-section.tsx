"use client";

import Image from  "next/image"
import React from "react";

import Marquee from "react-fast-marquee";
interface Affiliate {
  name: string;
  logo: string;
  width: number;
  height: number;
}

const affiliates: Affiliate[] = [
  { name: "Kementerian Agama", logo: "/assets/image/afiliate-logo/kemenag.png", width: 84, height: 66 },
  { name: "Sistem Pengawasan Umrah", logo: "/assets/image/afiliate-logo/siskopatuh.png", width: 84, height: 66 },
  { name: "Komite Akreditasi Nasional", logo: "/assets/image/afiliate-logo/kan.png", width: 84, height: 66 },
  { name: "5 Pasti", logo: "/assets/image/afiliate-logo/5-pasti.png", width: 84, height: 66 },
  { name: "Himpunan Penyelenggara Umrah dan Haji", logo: "/assets/image/afiliate-logo/himpuh-logo.png", width: 84, height: 66 },
  { name: "Association of The Indonesian Tours and Travel Agencies", logo: "/assets/image/afiliate-logo/asita.png", width: 84, height: 66 },
  { name: "Badan Nasional Sertifikasi Profesi", logo: "/assets/image/afiliate-logo/bnsp.png", width: 84, height: 66 },
  { name: "Garuda Indonesia", logo: "/assets/image/afiliate-logo/garuda-indonesia.png", width: 84, height: 66 },
  { name: "Lion Air", logo: "/assets/image/afiliate-logo/lion-air.png", width: 84, height: 66 },
];

const AffiliatesAboutSection = () => {
  return (
      <section className="relative flex flex-col gap-6 overflow-hidden bg-opacity-30 pb-6 pt-2">
        <h2 className="w-full px-6 text-center text-base font-semibold tracking-wide text-primary">
          Afiliasi goumrah.id
        </h2>
        <Marquee speed={30} gradient={true} gradientWidth={50}>
          {affiliates.map((affiliate) => (
              <div key={affiliate.name} className="mx-6">
                <Image
                    src={affiliate.logo}
                    alt={`Logo ${affiliate.name}`}
                    title={affiliate.name}
                    loading="eager"
                    width={affiliate.width}
                    height={affiliate.height}
                    className="h-auto max-w-xs sm:max-w-sm bg-blend-luminosity grayscale"
                />
              </div>
          ))}
        </Marquee>
      </section>
  );
};

export default AffiliatesAboutSection;
