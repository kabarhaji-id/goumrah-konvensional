import Image from "next/image";
import React from "react";

const AboutUsSection = () => {
  return (
    <>
      <section className="flex items-center gap-4 p-6">
        <Image
          src={"/assets/image/guarantee.png"}
          alt="100% Guarantee"
          width={360}
          height={300}
          className="h-[160px] w-[137px]"
          quality={100}
        />
        <p className="grow text-lg font-bold leading-[130%] tracking-normal text-primary-foreground">
          Terpercaya <span className="text-primary">100%</span> jaminan{" "}
          <span className="text-primary">pesawat</span>
          dan <span className="text-primary">hotel</span> sama seperti yang{" "}
          <span className="text-primary">dipesan</span>
        </p>
      </section>
      <section
        id="about-us"
        className="flex flex-col items-center gap-10 px-6 py-10"
      >
        <div className="relative mx-auto aspect-square h-80 w-80">
          <span className="absolute z-0 size-full rounded-br-[50%] rounded-tl-[50%] bg-primary/40 blur-[50px]" />
          <Image
            src={"/assets/image/about-img.png"}
            alt="About Us"
            width={412}
            height={421}
            className="absolute z-10 size-full"
            quality={100}
          />
        </div>
        <h2 className="text-center text-2xl font-semibold leading-[130%] tracking-normal text-primary-foreground">
          Mitra perjalanan Umrah & Haji Terpercaya Selama 18 Tahun
        </h2>
        <p className="text-center text-base leading-[150%] tracking-wide text-primary-foreground/75">
          <b className="text-primary">“</b>Dengan pengalaman 18 tahun di bidang
          Umrah dan Haji, kami berkomitmen untuk menghadirkan pengalaman yang
          nyaman, aman, dan penuh makna bagi setiap jamaah.
          <b className="text-primary">”</b>
        </p>
      </section>
    </>
  );
};

export default AboutUsSection;
