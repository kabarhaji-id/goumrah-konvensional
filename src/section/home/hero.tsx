import Image from "next/image";
import React from "react";
import LogoDark from "@/public/image/logo-main.svg";

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
    </section>
  );
};

export default HeroSection;
