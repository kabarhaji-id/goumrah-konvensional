import Image from "next/image";
import {
  Section,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from "@/components/layout/section";
import { CustomSwiper } from "@/components/layout/swiper";
import { priceToLocale } from "@/lib/utils";

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
            <CityCard
              key={index}
              cityName="Kota Thaif"
              price={500000}
              places={["Kebun Buah", "Gunung Al-Hada", "Al-Ruddaf"]}
              imageUrl={item.src}
            />
          ))}

          {/* {dataAddOns.map((item, index) => (
            <Image
              key={index}
              width={314}
              height={177}
              src={item.src}
              alt={`image-${index}`}
              className="aspect-video h-44 w-full rounded-[14px] object-cover"
            />
          ))} */}
        </CustomSwiper>
      </SectionContent>
    </Section>
  );
};

const CityCard = ({
  cityName,
  price,
  places,
  imageUrl,
}: {
  cityName: string;
  price: number;
  places: string[];
  imageUrl: string;
}) => {
  return (
    <div className="relative aspect-video w-full max-w-[314px] overflow-hidden rounded-md shadow-md">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>{" "}
      </div>
      <div className="relative z-10 flex h-full flex-col justify-between p-4 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-[11px] font-normal">Wisata Kota</h3>
            <h2 className="text-lg font-bold">{cityName}</h2>
          </div>
          <span className="text-[22px] font-bold leading-[26px]">
            {priceToLocale(price)}
          </span>
        </div>

        <div className="flex space-x-2">
          {places.map((place, index) => (
            <button
              key={index}
              className="rounded-full border border-white px-1.5 py-0.5 text-[11px] font-medium"
            >
              {place}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourVoucherSection;
