import { Section, SectionContent, SectionTitle } from "@/components/ui/section";
import React from "react";

const AboutUs = () => {
  return (
    <Section className="py-6">
      <SectionContent>
        <div className="mb-16 flex items-center gap-x-4">
          <div className="h-[180px] w-[150px] flex-none bg-primary" />
          <p className="text-lg font-bold">
            Terpercaya 100% jaminan pesawat dan hotel sama seperti yang dipesan
          </p>
        </div>
        <div className="mx-auto mb-10 aspect-square h-auto w-full max-w-[320px] bg-primary" />
        <SectionTitle className="mb-6">
          Mitra Perjalanan Umrah & Haji Terpercaya Selama 20 Tahun
        </SectionTitle>
        <p className="mx-auto max-w-[330px] text-justify">
          “Dengan pengalaman 18 tahun di bidang Umrah dan Haji, kami berkomitmen
          untuk menghadirkan pengalaman yang nyaman, aman, dan penuh makna bagi
          setiap jamaah.”
        </p>
      </SectionContent>
    </Section>
  );
};

export default AboutUs;
