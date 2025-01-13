import { Section, SectionContent, SectionTitle } from "@/components/ui/section";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <Section id="about-us" className="py-6">
      <SectionContent>
        <div className="mb-16 flex items-center gap-x-4">
          <Image
            src={"/assets/image/guarantee.png"}
            alt="100% Guarantee"
            width={360}
            height={300}
            className="h-[160px] w-[137px]"
            quality={100}
          />
          <p className="text-lg font-bold leading-snug">
            Terpercaya <span className="text-primary">100%</span> jaminan{" "}
            <span className="text-primary">pesawat</span> dan{" "}
            <span className="text-primary">hotel</span> sama seperti yang{" "}
            <span className="text-primary">dipesan</span>
          </p>
        </div>
        <div className="relative">
          <Image
            src={"/assets/image/about-img.png"}
            alt="About Us"
            width={1080}
            height={1080}
            className="mx-auto mb-10 aspect-square h-auto w-full max-w-[320px]"
            quality={100}
          />
          <div className="absolute left-1/2 top-0 -z-10 mx-auto aspect-square h-full max-h-[320px] w-full max-w-[320px] -translate-x-1/2 rounded-br-[160px] rounded-tl-[160px] bg-primary/50 blur-xl" />
        </div>
        <SectionTitle className="mb-6">
          Mitra Perjalanan Umrah & Haji Terpercaya Lebih Dari 18 Tahun
        </SectionTitle>
        <p className="mx-auto text-justify">
          “Dengan pengalaman lebih dari 18 tahun di bidang Umrah dan Haji, kami
          berkomitmen untuk menghadirkan pengalaman yang nyaman, aman, dan penuh
          makna bagi setiap jamaah.”
        </p>
      </SectionContent>
    </Section>
  );
};

export default AboutUs;
