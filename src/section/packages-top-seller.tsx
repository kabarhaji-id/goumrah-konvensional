import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Section,
  SectionContent,
  SectionHeader,
  SectionSubTitle,
  SectionTitle,
} from "@/components/ui/section";

import WhatsAppCIcon from "@/assets/icons/whatsapp.svg";

const PackagesData: CardProps[] = [
  {
    imageUrl: "/assets/image/packages-umrah/package-1.png",
  },
  {
    imageUrl: "/assets/image/packages-umrah/package-2.png",
  },
];

const PackagesTopSellerSection = () => {
  return (
    <Section className="relative z-0 bg-accent pt-12">
      <div className="absolute top-0 -z-10 h-20 w-full bg-gradient-to-b from-white to-accent" />
      <div className="absolute bottom-0 -z-10 h-24 w-full bg-gradient-to-t from-white to-accent" />
      <SectionHeader>
        <SectionSubTitle>Pilihan Terbaik Untuk Kamu</SectionSubTitle>
        <SectionTitle className="text-center">
          Nikmati Pengalaman Ibadah Terbaik Bersama Kami
        </SectionTitle>
      </SectionHeader>

      <SectionContent className="space-y-8 px-0">
        <div className="flex gap-x-4 overflow-x-auto px-6">
          {PackagesData.map((data, i) => (
            <Card imageUrl={data.imageUrl} key={i} />
          ))}
        </div>

        <div className="px-6">
          <Button size="lg" className="w-full">
            Hubungi Kami <WhatsAppCIcon className="!size-6" />
          </Button>
        </div>
      </SectionContent>
    </Section>
  );
};

interface CardProps {
  imageUrl: string | StaticImport;
}

const Card = ({ imageUrl }: CardProps) => {
  return (
    <div className="relative aspect-[9/16] h-auto w-10/12 flex-none overflow-hidden rounded-lg">
      <Image
        src={imageUrl}
        alt="Paket Umrah 1"
        fill
        quality={100}
        sizes="50vw"
        className="object-cover"
      />
    </div>
  );
};

export default PackagesTopSellerSection;
