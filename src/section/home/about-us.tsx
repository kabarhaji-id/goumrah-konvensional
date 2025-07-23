import Image from "next/image";
import React from "react";

const AboutUsSection = () => {
  return (
    <>
      {/* <section className="flex items-center gap-4 px-6 pt-4">
        <Image
          src={"/assets/image/guarantee.png"}
          alt="100% Guarantee"
          title ="100% Guarantee"
          width={360}
          height={300}
          className="h-[160px] w-[137px]"
          quality={70}
          priority
        />
        <p className="grow text-lg font-bold leading-[130%] tracking-normal text-primary-foreground">
          Jaminan <span className="text-primary">100% Hotel</span> &{" "}
          <span className="text-primary">Maskapai </span>
          Sesuai Pesanan
        </p>
      </section> */}
      <section
        id="about-us"
        className="flex flex-col items-center gap-2 px-6 py-4"
      >
        <h2 className="text-center text-md font-semibold leading-[130%] tracking-normal text-primary-foreground">
          Mitra perjalanan Umrah & Haji<br />Amanah dan Terpercaya
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
