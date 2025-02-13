import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="flex h-fit w-full flex-col gap-4 pb-3">
      {/* <section className="flex h-fit w-full max-w-screen-sm flex-col bg-hero bg-cover bg-bottom"> */}
      <div className="relative">
        <Image
          alt="goumrah.id logo"
          src="/assets/image/hero-bg.png"
          width={150}
          height={32}
          className="absolute top-0 z-0 w-full object-cover"
          priority
        />
      </div>

      <header className="mt-7 flex h-fit w-full items-center justify-center py-3">
        <Image
          alt="goumrah.id logo"
          src="/assets/image/logo-main.svg"
          width={150}
          height={32}
          blurDataURL="/assets/image/logo-main.svg"
          priority
        />
      </header>

      <div className="z-10 flex flex-col items-center gap-2 text-primary-foreground">
        <h1 className="text-center text-[32px] font-bold leading-[140%] tracking-[0.5px]">
          Rumah ke Makkah
          <br />
          Hanya Satu Langkah
        </h1>
        <h2 className="text-center text-lg font-medium leading-[140%] tracking-wide text-primary-foreground/75">
          Wujudkan perjalanan Umrah impian
          <br />
          Anda dengan mudah dan terpercaya,
          <br />
          dari mana saja, kapan saja.
        </h2>
        <p className="italic">
          #bikin<b>tenang</b>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
