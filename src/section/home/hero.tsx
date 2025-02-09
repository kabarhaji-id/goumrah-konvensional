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
        />
      </div>

      <header className="mt-7 flex h-fit w-full items-center justify-center py-3">
        <Image
          alt="goumrah.id logo"
          src="/assets/image/logo-main.svg"
          width={150}
          height={32}
          blurDataURL="/assets/image/logo-main.svg"
        />
      </header>

      <div className="z-10 flex flex-col items-center gap-2 text-primary-foreground">
        <h2 className="text-center text-[32px] font-bold leading-[140%] tracking-[0.5px]">
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

      {/* <Button
        className="absolute bottom-40 left-1/2 z-10 h-11 w-[351px] -translate-x-1/2 px-5 py-1"
        asChild
      >
        <Link href="#recommendedPackages">
          <p className="whitespace-nowrap text-base font-semibold leading-[150%] tracking-wide">
            Jelajahi Berbagai Paket Umrah Kami
          </p>
          <ChevronDown className="!size-5 animate-bounce duration-1000" />
        </Link>
      </Button> */}

      {/* <Image
        src="/assets/image/hero-img.png"
        alt="Hero's Image"
        className="absolute bottom-10 z-30 w-full"
        width={412}
        height={732}
      /> */}

      {/* <span className="absolute bottom-10 z-40 h-60 w-full bg-gradient-to-t from-white to-white/0" /> */}
    </section>
  );
};

export default HeroSection;
