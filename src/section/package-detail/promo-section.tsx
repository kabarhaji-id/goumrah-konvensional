import Image from "next/image";
import Link from "next/link";

import { Section, SectionContent } from "@/components/layout/section";
import { CustomSwiper } from "@/components/layout/swiper";
import { PromoDetail } from "@/types/packages";

const PromoSection = ({ dataPromos }: { dataPromos: PromoDetail[] }) => {
  if (dataPromos && dataPromos.length > 0) {
    return (
      <Section className={`pb-5 pt-0 ${dataPromos.length === 1 ? "px-4" : ""}`}>
        {/* <SectionTitle
          className={`mb-2 flex items-center ${dataPromos.length > 1 ? "px-4" : ""}`}
        >
          Jangan Lewatkan Promo Lainnya
        </SectionTitle> */}

        <SectionContent>
          {dataPromos.length > 1 ? (
            <CustomSwiper>
              {dataPromos.map((item, index) => (
                <Link key={index} href={item.link}>
                  <Image
                    width={361}
                    height={138}
                    src={item.imageUrl}
                    alt={`image-promo-${index}`}
                    className="h-[132px] w-[314px] rounded-[14px] object-cover"
                  />
                </Link>
              ))}
            </CustomSwiper>
          ) : (
            <Link href={dataPromos[0].link}>
              <Image
                width={361}
                height={138}
                src={dataPromos[0].imageUrl}
                alt="image-promo"
                className="h-[132px] w-full rounded-[14px] object-cover"
              />
            </Link>
          )}
        </SectionContent>
      </Section>
    );
  }
};

export default PromoSection;
