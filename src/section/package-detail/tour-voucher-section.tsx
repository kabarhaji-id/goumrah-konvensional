import Image from "next/image";

import { CustomSwiper } from "@/components/layout/swiper";
import {
  Section,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from "@/components/layout/section";
import { Images } from "@/types/new";

const TourVoucherSection = ({ dataAddOns }: { dataAddOns: Images[] }) => {
  // const dummyTourVoucher = [
  //   "/assets/images/dummy-voucher-wisata-1.png",
  //   "/assets/images/dummy-voucher-wisata-2.png",
  //   "/assets/images/dummy-voucher-wisata-3.png",
  // ];

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
        {/* NOTE: Change this later */}
        <CustomSwiper maxWidth={314} className="pb-1">
          {dataAddOns.map((item, index) => (
            <Image
              key={index}
              width={800}
              height={800}
              src={item.src}
              alt={`image-${index}`}
              className="h-44 w-full"
            />
          ))}
        </CustomSwiper>

        {/* {dataAddOns.length > 0
                    ? <CustomSwiper maxWidth={314} className="pb-1">
                        {dataAddOns.map((item, index) => (
                            <div key={index} className="w-[314px] h-[177px] rounded-[14px] overflow-hidden">
                                {item.cityTour?.images[0].id
                                    ? <Image
                                        width={400}
                                        height={300}
                                        src={`${item.cityTour?.images[0].id}"/assets/images/dummy-voucher.png"`}
                                        alt={item.cityTour.images[0].alt}
                                        className="w-full object-bottom"
                                    />
                                    : <Image
                                        width={400}
                                        height={300}
                                        src={`/assets/images/dummy-voucher.png`}
                                        alt="voucher-"
                                        className="w-full object-bottom"
                                    />
                                }
                                <div className="w-full absolute top-0 left-0 px-4 py-3 flex items-center justify-between text-white ">
                                    <div className="tracking-wide">
                                        <span className="text-[11px] leading-4">
                                            {item.category.name}
                                        </span>
                                        <span></span>
                                        <h6 className="text-lg font-bold leading-[22px]">
                                            {item.name}
                                        </h6>
                                    </div>

                                    <h6 className="text-[22px] font-bold leading-[26px]">
                                        {priceToLocale(item.price)}
                                    </h6>
                                </div>

                                <div className="w-full absolute bottom-0 left-0 px-4 pb-5 flex items-center gap-1.5 text-white ">
                                    <Badge variant="outline" className="rounded-full text-white text-[11px] px-1.5 py-0.5">
                                        {item.category.name}
                                    </Badge>
                                </div>
                            </div>
                        ))}
                    </CustomSwiper>
                    : <span className="my-8 text-sm flex justify-center font-semibold text-neutral-foreground/50">
                        Tidak ada voucher wisata
                    </span>
                } */}
      </SectionContent>
    </Section>
  );
};

export default TourVoucherSection;
