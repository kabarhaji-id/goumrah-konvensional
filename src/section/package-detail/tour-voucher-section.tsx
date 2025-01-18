import {
  Section,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from "@/components/layout/section";
import { CustomSwiper } from "@/components/layout/swiper";
import { Button } from "@/components/ui/button";
import { priceToLocale } from "@/lib/utils";
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
            <CityCard
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

const CityCard = ({
  title,
  category,
  price,
  places,
  imageUrl,
}: {
  title: string;
  category: string;
  price: number;
  places: string[];
  imageUrl: string;
}) => {
  return (
    <div className="relative h-[177px] w-[314px] overflow-hidden rounded-md shadow-md">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>{" "}
      </div>
      <div className="relative z-10 flex h-full flex-col justify-between p-4 text-white">
        <div className="flex justify-between gap-4">
          <div>
            <h3 className="text-[11px] font-normal">{category}</h3>
            <h2 className="text-base font-bold leading-6">{title}</h2>
          </div>
          <span className="flex-shrink-0 text-xl font-bold leading-[26px]">
            {priceToLocale(price)}
          </span>
        </div>

        <div className="flex space-x-2">
          {places.map((place, index) => (
            <Button
              variant="outline"
              key={index}
              className="h-fit rounded-full border border-white bg-transparent px-1 py-0.5 text-[11px] font-medium"
            >
              {place}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourVoucherSection;
