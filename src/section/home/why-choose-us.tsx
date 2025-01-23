import {
  Section,
  SectionContent,
  SectionHeader,
  SectionSubTitle,
  SectionTitle,
} from "@/components/ui/section";

import BiayaTransparanCIcon from "@/public/icons/biaya-transparan.svg";
import PelayananTerbaikCIcon from "@/public/icons/pelayanan-terbaik.svg";
import PemesananMudahCIcon from "@/public/icons/pemesanan-mudah.svg";
import PembayaranAmanCIconfrom from "@/public/icons/pembayaran-aman.svg";
import TerpercayaCIcon from "@/public/icons/terpercaya.svg";
import { CustomSwiper } from "@/components/layout/swiper";

const CardData: CardProps[] = [
  { title: "Pelayanan Terbaik", Icon: PelayananTerbaikCIcon },
  { title: "Pemesanan Mudah", Icon: PemesananMudahCIcon },
  { title: "Biaya Transparan", Icon: BiayaTransparanCIcon },
  { title: "Terpercaya", Icon: TerpercayaCIcon },
  { title: "Pembayaran Aman", Icon: PembayaranAmanCIconfrom },
];

const WhyChooseUsSection = () => {
  return (
    <Section className="relative bg-gradient-to-b from-foreground to-primary py-0">
      <span
        className="absolute -top-[399px] z-0 h-[400px] w-full bg-primary-foreground"
        style={{
          background:
            "linear-gradient(0deg, rgba(0,38,38,1) 11%, rgba(11,71,71,1) 36%, rgba(89,130,130,1) 66%, rgba(162,185,185,1) 86%, rgba(255,255,255,1) 100%)",
        }}
      />

      <SectionHeader className="!mt-0">
        <SectionSubTitle className="text-accent">
          Dapatkan Kelebihannya
        </SectionSubTitle>
        <SectionTitle className="text-background">
          Berangkat Umrah Bersama goumrah.id
        </SectionTitle>
      </SectionHeader>
      <SectionContent className="!mt-6 flex max-w-full p-0">
        <CustomSwiper padding={4}>
          {CardData.map((data) => (
            <Card title={data.title} Icon={data.Icon} key={data.title} />
          ))}
        </CustomSwiper>
      </SectionContent>

      <span
        className="absolute -bottom-[499px] z-0 h-[500px] w-full bg-primary"
        style={{
          background:
            "linear-gradient(180deg, rgba(27,131,134,1) 0%, rgba(83,162,164,1) 34%, rgba(139,192,193,1) 59%, rgba(255,255,255,1) 100%)",
        }}
      />
    </Section>
  );
};

interface CardProps {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: any;
}

const Card = ({ title, Icon }: CardProps) => {
  return (
    <div className="h-hug relative flex min-h-[152px] w-[127px] flex-col items-center gap-3 overflow-hidden rounded-lg border border-background/30 px-3 pb-3 pt-4 backdrop-blur-lg">
      <div className="glassmorphism absolute inset-0 -z-10 opacity-20" />
      <Icon />
      <p className="text-center text-base font-bold leading-normal tracking-wide text-background">
        {title}
      </p>
    </div>
  );
};

export default WhyChooseUsSection;
