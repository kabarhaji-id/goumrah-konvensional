import Image from "next/image";
import React from "react";

import {
  Section,
  SectionContent,
  SectionHeader,
  SectionSubTitle,
} from "@/components/ui/section";

const afiliasiData: LogoAfiliasiProps[] = [
  {
    imageUrl: "/assets/image/afiliate-logo/himpuh-logo.png",
    title: "himpuh",
    width: 34,
    height: 40,
  },
  {
    imageUrl: "/assets/image/afiliate-logo/iata.png",
    title: "iata",
    width: 59,
    height: 40,
  },
  {
    imageUrl: "/assets/image/afiliate-logo/kan.png",
    title: "kan",
    width: 85,
    height: 36,
  },
  {
    imageUrl: "/assets/image/afiliate-logo/5-pasti.png",
    title: "5-pasti",
    width: 38,
    height: 40,
  },
  {
    imageUrl: "/assets/image/afiliate-logo/asita.png",
    title: "asita",
    width: 56,
    height: 40,
  },
  {
    imageUrl: "/assets/image/afiliate-logo/siskopatuh.png",
    title: "siskopatuh",
    width: 90,
    height: 40,
  },
  {
    imageUrl: "/assets/image/afiliate-logo/kemenag.png",
    title: "kemenag",
    width: 51,
    height: 40,
  },
];

const AfiliasiSection = () => {
  return (
    <Section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-y-visible bg-[url('/assets/image/afiliate-bg.png')] bg-center" />
      <SectionHeader>
        <SectionSubTitle>Afiliasi goumrah.id</SectionSubTitle>
      </SectionHeader>
      <SectionContent className="inline-flex w-full gap-x-16 overflow-auto">
        {afiliasiData.map((data) => (
          <LogoAfiliasi
            key={data.title}
            imageUrl={data.imageUrl}
            title={data.title}
            width={data.width}
            height={data.height}
          />
        ))}
      </SectionContent>
    </Section>
  );
};

interface LogoAfiliasiProps {
  imageUrl: string;
  title: string;
  width: number;
  height: number;
}

const LogoAfiliasi = ({
  imageUrl,
  title,
  width,
  height,
}: LogoAfiliasiProps) => {
  return (
    <Image
      src={imageUrl}
      alt={title}
      height={height}
      width={width}
      className={`h-[${height}px] w-[${width}px] flex-none`}
      quality={100}
    />
  );
};

export default AfiliasiSection;
