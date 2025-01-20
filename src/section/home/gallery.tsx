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
    <Section id="gallery">
      <SectionHeader>
        <SectionSubTitle>#EpicMoment</SectionSubTitle>
        <SectionTitle className="text-primary">
          Abadikan Moment Tak Terlupakan Bersama{" "}
          <span className="font-normal">go</span>umrah.id
        </SectionTitle>
      </SectionHeader>
      <SectionContent className="scrollbar-hide flex max-w-full gap-x-4 overflow-x-auto px-6">
        {galleryData.map((data) => (
          <Card imageUrl={data.imageUrl} alt={data.alt} key={data.alt} />
        ))}
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
    <div className="relative aspect-[9/16] h-auto w-5/12 flex-none overflow-hidden rounded-lg">
      <Image src={imageUrl} alt={alt} fill sizes="44vw" quality={100} />
    </div>
  );
};

export default GallerySection;
