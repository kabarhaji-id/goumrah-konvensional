import { CustomSwiper } from "@/components/layout/swiper";
import {
  Section,
  SectionContent,
  SectionHeader,
  SectionSubTitle,
  SectionTitle,
} from "@/components/ui/section";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

const galleryData: CardProps[] = [
  {
    imageUrl: "/assets/image/gallery/epic-moment-1.jpeg",
    alt: "EpicMoment1",
  },
  {
    imageUrl: "/assets/image/gallery/epic-moment-2.jpeg",
    alt: "EpicMoment2",
  },
  {
    imageUrl: "/assets/image/gallery/epic-moment-3.jpeg",
    alt: "EpicMoment2",
  },
  {
    imageUrl: "/assets/image/gallery/epic-moment-4.jpeg",
    alt: "EpicMoment2",
  },
  {
    imageUrl: "/assets/image/gallery/epic-moment-5.jpeg",
    alt: "EpicMoment2",
  },
  {
    imageUrl: "/assets/image/gallery/epic-moment-6.jpeg",
    alt: "EpicMoment2",
  },
  {
    imageUrl: "/assets/image/gallery/epic-moment-7.jpeg",
    alt: "EpicMoment2",
  },
];

const GallerySection = () => {
  return (
    <Section id="gallery" className="pt-6">
      <SectionHeader>
        <SectionSubTitle className="z-20 text-white">
          #EpicMoment
        </SectionSubTitle>
        <SectionTitle className="z-20 text-white">
          Abadikan Moment Tak Terlupakan Bersama{" "}
          <span className="font-normal">go</span>umrah.id
        </SectionTitle>
      </SectionHeader>
      <SectionContent className="flex max-w-full px-0">
        <CustomSwiper padding={4} gap={10}>
          {galleryData.map((data) => (
            <Card imageUrl={data.imageUrl} alt={data.alt} key={data.alt} />
          ))}
        </CustomSwiper>
      </SectionContent>
    </Section>
  );
};

interface CardProps {
  imageUrl: string | StaticImport;
  alt: string;
}

const Card = ({ imageUrl, alt }: CardProps) => {
  return (
    <div className="relative aspect-[9/16] h-[200px] w-full flex-none overflow-hidden rounded-lg xsm:h-[300px]">
      <Image
        src={imageUrl}
        alt={alt}
        loading="lazy"
        sizes="44vw"
        fill
        quality={100}
        className="object-cover"
      />
    </div>
  );
};

export default GallerySection;
