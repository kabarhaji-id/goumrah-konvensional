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

const CardData: CardProps[] = [
  { title: "Pelayanan Terbaik", Icon: PelayananTerbaikCIcon },
  { title: "Pemesanan Mudah", Icon: PemesananMudahCIcon },
  { title: "Biaya Transparan", Icon: BiayaTransparanCIcon },
  { title: "Terpercaya", Icon: TerpercayaCIcon },
  { title: "Pembayaran Aman", Icon: PembayaranAmanCIconfrom },
];

const WhyChooseUsSection = () => {
  return (
    <Section className="bg-gradient-to-br from-foreground to-primary pb-12">
      <SectionHeader>
        <SectionSubTitle className="text-accent">
          Dapatkan Kelebihannya
        </SectionSubTitle>
        <SectionTitle className="text-background">
          Berangkat Umrah Bersama goumrah.id
        </SectionTitle>
      </SectionHeader>
      <SectionContent className="scrollbar-hide flex max-w-full gap-x-4 overflow-x-auto px-6">
        {CardData.map((data) => (
          <Card title={data.title} Icon={data.Icon} key={data.title} />
        ))}
      </SectionContent>
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
    <div className="relative flex flex-none basis-5/12 flex-col items-center space-y-3 overflow-hidden rounded-lg border border-background/30 p-3 pt-6 backdrop-blur-lg">
      <div className="glassmorphism absolute inset-0 -z-10 opacity-20" />
      <Icon />
      <p className="text-center text-base font-bold leading-normal tracking-wide text-background">
        {title}
      </p>
    </div>
  );
};

export default WhyChooseUsSection;
