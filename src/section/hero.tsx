import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative aspect-[9/16] h-auto w-full overflow-hidden">
      <div className="absolute bottom-0 h-14 w-full bg-gradient-to-t from-white to-transparent" />
      <Image
        src="/assets/image/hero-img.png"
        alt="bg-hero"
        fill
        className="bottom-0 -z-10 h-auto w-full"
        sizes="100vw"
      />
      <div className="absolute left-1/2 top-0 -z-10 h-[661px] w-[528px] -translate-x-1/2">
        <Image
          src="/assets/image/hero-bg.png"
          alt="goumrah-hero-bg"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative flex h-full flex-col justify-between px-6 pb-16 pt-20">
        <div className="space-y-2 text-center">
          <h1>
            Rumah ke Makkah <br /> Hanya Satu Langkah
          </h1>
          <p className="text-lg leading-normal">
            Wujudkan perjalanan Umrah impian Anda dengan mudah dan terpercaya,
            dari mana saja, kapan saja.
          </p>
          <p className="text-lg font-bold italic">#BikinTenang</p>
        </div>

        <Button className="capitalize" size="lg">
          Jelajahi berbagai paket umrah kami
          <ChevronDown className="!size-5" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
