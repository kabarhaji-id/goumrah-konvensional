import Image from "next/image";
import React from "react";
import LogoDark from "@/public/image/logo-main.svg"
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="flex h-fit w-full flex-col gap-4 pb-3">
      {/* <section className="flex h-fit w-full max-w-screen-sm flex-col bg-hero bg-cover bg-bottom"> */}
      <div className="relative">
        <Image
          alt="Background Logo"
          src="/assets/image/hero-bg.png"
          title="Background"
          width={150}
          height={32}
          loading="eager"
          className="absolute top-0 z-0 w-full object-cover"
        />
      </div>

      <header className="mt-7 flex h-fit w-full items-center justify-center py-3">
        <LogoDark />
      </header>

      <div className="z-10 flex flex-col items-center gap-2 text-primary-foreground">
        <h1 className="text-center text-[32px] font-bold leading-[140%] tracking-[0.5px]">
          Rumah ke Makkah
          <br />
          Hanya Satu Langkah
        </h1>

        <p className="italic">
          #bikin<b>tenang</b>
        </p>

      </div>
    </section>
  );
};

export default HeroSection;
