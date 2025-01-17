import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative flex h-[732px] flex-col bg-hero bg-cover bg-bottom sm:h-[960px]">
      <header className="absolute top-0 z-10 flex h-14 w-full items-center justify-center px-4 py-3">
        <Image
          alt="goumrah.id logo"
          src="/assets/image/logo-main.svg"
          width={150}
          height={32}
          blurDataURL="/assets/image/logo-main.svg"
        />
      </header>

      <div className="absolute left-1/2 top-28 z-10 flex w-[343px] -translate-x-1/2 flex-col items-center gap-2 text-primary-foreground">
        <h2 className="text-center text-3xl font-bold leading-[130%] tracking-normal">
          Rumah ke Makkah
          <br />
          Hanya Satu Langkah
        </h2>
        <p className="text-center text-lg font-medium leading-[140%] tracking-wide text-primary-foreground/75">
          Wujudkan perjalanan Umrah impian
          <br />
          Anda dengan mudah dan terpercaya,
          <br />
          dari mana saja, kapan saja.
        </p>
        <p className="italic">
          #bikin<b>tenang</b>
        </p>
      </div>

      <Button
        className="absolute bottom-10 left-1/2 z-10 h-11 w-[351px] -translate-x-1/2 px-5 py-1"
        asChild
      >
        <Link href="#umrah-package">
          <p className="whitespace-nowrap text-base font-semibold leading-[150%] tracking-wide">
            Jelajahi Berbagai Paket Umrah Kami
          </p>
          <ChevronDown className="!size-5 animate-bounce duration-1000" />
        </Link>
      </Button>

      <Image
        src="/assets/image/hero-img.png"
        alt="Hero's Image"
        className="absolute bottom-0 z-0 w-full"
        width={412}
        height={732}
      />

      <span className="absolute bottom-0 z-0 h-44 w-full bg-gradient-to-b from-white/0 to-accent" />
    </section>
  );
};

export default HeroSection;
