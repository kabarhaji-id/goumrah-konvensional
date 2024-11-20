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

import WhatsAppCIcon from "@assets/icons/whatsapp.svg";

const PackagesData: CardProps[] = [
  {
    imageUrl: "/assets/image/packages-umrah/package-3.png",
  },
  {
    imageUrl: "/assets/image/packages-umrah/package-4.png",
  },
];

const PackagesSection = () => {
  return (
    <Section className="relative z-0 bg-accent pt-12">
      <div className="absolute top-0 -z-10 h-20 w-full bg-gradient-to-b from-white to-accent" />

      <SectionHeader>
        <SectionSubTitle>Sambut Panggilan-Nya</SectionSubTitle>
        <SectionTitle>
          Paket Umrah Ideal, Dikelola Oleh Tenaga Profesional
        </SectionTitle>
      </SectionHeader>

      <SectionContent className="space-y-8 px-0">
        <div className="flex gap-x-4 overflow-x-auto px-6">
          {PackagesData.map((data, i) => (
            <Card key={i} imageUrl={data.imageUrl} />
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
    <div className="relative aspect-[4/5] h-auto w-10/12 flex-none overflow-hidden rounded-lg">
      <Image
        src={imageUrl}
        alt="Paket Umrah 1"
        fill
        quality={75}
        sizes="50vw"
        className="object-cover"
      />
    </div>
  );
};

export default PackagesSection;
