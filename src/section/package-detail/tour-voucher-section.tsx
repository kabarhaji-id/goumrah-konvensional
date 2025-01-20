import TourVoucherCard from "./section-component/tour-voucher-card";
import CustomVoucherIcon from "@/public/icons/mingcute_ticket-line.svg";

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
    <Section className="pb-4 pt-0">
      <SectionHeader className="mb-3 px-4">
        <div className="flex items-center gap-2.5">
          <CustomVoucherIcon />
          <SectionTitle className="flex items-center text-primary">
            Voucher Wisata
          </SectionTitle>
        </div>

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
