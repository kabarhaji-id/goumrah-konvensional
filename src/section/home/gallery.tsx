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
    imageUrl: "/assets/image/gallery/image-1.png",
    alt: "Image 1",
  },
  {
    imageUrl: "/assets/image/gallery/image-2.png",
    alt: "Image 2",
  },
  {
    imageUrl: "/assets/image/gallery/image-3.png",
    alt: "Image 3",
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
    <div className="relative aspect-[9/16] h-[270px] w-full flex-none overflow-hidden rounded-lg md:h-[370px]">
      <Image src={imageUrl} alt={alt} fill sizes="44vw" quality={100} />
    </div>
  );
};

export default GallerySection;
