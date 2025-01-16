import Image from "next/image";
import {
  Section,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from "@/components/layout/section";
import { CustomSwiper } from "@/components/layout/swiper";

interface Images {
  id: string;
  src: string;
  category?: string;
}

const TourVoucherSection = ({ dataAddOns }: { dataAddOns: Images[] }) => {
  return (
    <Section className="pb-5">
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
            <Image
              key={index}
              width={314}
              height={177}
              src={item.src}
              alt={`image-${index}`}
              className="aspect-video h-44 w-full rounded-[14px] object-cover"
            />
          ))}
        </CustomSwiper>
      </SectionContent>
    </Section>
  );
};

export default TourVoucherSection;
