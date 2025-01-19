import Image from "next/image";

import { CustomSwiper } from "@/components/layout/swiper";
import {
  Section,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from "@/components/layout/section";

const AdditionalServices = () => {
  return (
    <Section className="pb-2 pt-0">
      <SectionHeader className="mb-3 px-4">
        <SectionTitle className="flex items-center">
          Layanan Tambahan
        </SectionTitle>

        <SectionDescription className="text-sm font-normal leading-5 tracking-wide">
          Goumrah sediakan layanan administrasi untuk mempermudah proses ibadah
          kamu. Kamu bisa tambahkan layanan ini di halaman pemesanan nanti.
        </SectionDescription>
      </SectionHeader>

      <SectionContent>
        <CustomSwiper maxWidth={314} slidesClass="pb-3">
          <div className="flex overflow-hidden rounded-[14px] shadow-custom-md">
            <div className="relative w-[215px] overflow-hidden bg-primary px-4 py-4">
              <div className="z-10 flex flex-col gap-4 tracking-wide text-white">
                <div>
                  <span className="w-full text-[11px]">
                    Layanan Pembuatan/Perpanjang
                  </span>
                  <h6 className="font-bold leading-[22px]">Paspor</h6>
                </div>

                <span className="text-xs leading-4">+ Rp 850.000</span>
              </div>

              <Image
                width={79}
                height={42}
                src="/assets/patterns/goumrah-bottom-right.svg"
                alt="pattern-b"
                className="absolute bottom-0 right-0"
              />
            </div>

            <div className="w-[99px] flex-shrink-0 overflow-hidden">
              <Image
                width={99}
                height={110}
                src="/assets/image/additional-services/passport.png"
                alt="passport"
                className="h-full w-[99px]"
              />
            </div>
          </div>

          <div className="flex w-[314px] overflow-hidden rounded-[14px] shadow-custom-md">
            <div className="relative w-[314px] overflow-hidden bg-primary px-4 py-4">
              <div className="z-10 flex flex-col gap-4 tracking-wide text-white">
                <div className="w-full">
                  <span className="w-full flex-shrink-0 text-[11px] leading-4">
                    Layanan Bantuan{" "}
                  </span>
                  <h6 className="font-bold leading-[22px]">
                    Vaksinasi Meningitis
                  </h6>
                </div>

                <span className="text-xs leading-4">+ Rp 400.000</span>
              </div>

              <Image
                width={79}
                height={42}
                src="/assets/patterns/goumrah-bottom-right.svg"
                alt="pattern-b"
                className="absolute bottom-0 right-0"
              />
            </div>

            <div className="w-[99px] flex-shrink-0 overflow-hidden">
              <Image
                width={99}
                height={110}
                src="/assets/image/additional-services/vaccine.png"
                alt="vaccine"
                className="h-full w-[99px]"
              />
            </div>
          </div>
        </CustomSwiper>
      </SectionContent>
    </Section>
  );
};

export default AdditionalServices;
