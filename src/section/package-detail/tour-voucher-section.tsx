import TourVoucherCard from "./section-component/tour-voucher-card";

import {
  Section,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from "@/components/layout/section";
import { CustomSwiper } from "@/components/layout/swiper";
import { AddOnsDetail } from "@/types/package-details";

const TourVoucherSection = ({ dataAddOns }: { dataAddOns: AddOnsDetail[] }) => {
  return (
    <Section className="pb-5 pt-0">
      <SectionHeader className="mb-3 px-4">
        <SectionTitle className="flex items-center">
          Voucher Wisata
        </SectionTitle>

        <SectionDescription className="text-sm font-normal leading-5 tracking-wide">
          Bikin perjalanan kamu makin seru dengan berbagai wisata yang bisa kamu
          tambahkan ke paketmu. Kamu bisa tambahkan layanan ini di halaman
          pemesanan nanti. Mulai dari Rp 500 rb-an aja!
        </SectionDescription>
      </SectionHeader>

      <SectionContent>
        <CustomSwiper maxWidth={314} className="pb-1">
          {dataAddOns.map((item, index) => (
            <TourVoucherCard
              key={index}
              title={item.title}
              category={item.category}
              price={item.price}
              places={item.places}
              imageUrl={item.imageUrl}
            />
          ))}
        </CustomSwiper>
      </SectionContent>
    </Section>
  );
};

export default TourVoucherSection;
