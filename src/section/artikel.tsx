import { Button } from "@/components/ui/button";
import {
  Section,
  SectionContent,
  SectionHeader,
  SectionSubTitle,
  SectionTitle,
} from "@/components/ui/section";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Artikel {
  imageUrl: string;
  tag: string;
  dateCreated: string;
  title: string;
  source: string;
}

const artikelData: Artikel[] = [
  {
    imageUrl: "/assets/image/artikel/artike-1.png",
    tag: "Tips Umrah",
    dateCreated: "15 Nov 2024",
    title: "Ini 5 hal yang perlu disiapkan sebelum berangkat umrah",
    source: "kabarumrah.id",
  },
  {
    imageUrl: "/assets/image/artikel/artikel-2.png",
    tag: "Wisata Religi",
    dateCreated: "15 Nov 2024",
    title: "Al Ula dinobatkan sebagai desa wisata terbaik 2022 versi UNESCO",
    source: "kabarhaji.id",
  },
  {
    imageUrl: "/assets/image/artikel/artikel-4.png",
    tag: "islamipedia",
    dateCreated: "15 Nov 2024",
    title: "Pemahaman Ilmu Fikih Menentukan Keabsahan",
    source: "kabarhaji.id",
  },
];

const ArtikelSection = () => {
  return (
    <Section className="bg-accent" id="article">
      <SectionHeader>
        <SectionSubTitle>Artikel</SectionSubTitle>
        <SectionTitle>
          Informasi Terkini dan Terpercaya Seputar Umrah Haji
        </SectionTitle>
      </SectionHeader>
      <SectionContent className="space-y-8">
        <div className="space-y-4">
          {artikelData.map((data) => (
            <Card key={data.title} artikel={data} />
          ))}
        </div>

        <Button className="w-full" variant="outline" asChild>
          <Link
            href={"https://instagram.com/goumrah.id/"}
            target="_blank"
            className="block"
          >
            Baca artikel lainnya
          </Link>
        </Button>
      </SectionContent>
    </Section>
  );
};

const Card = ({ artikel }: { artikel: Artikel }) => {
  return (
    <Link
      href={"https://instagram.com/goumrah.id/"}
      target="_blank"
      className="block"
    >
      <article className="flex w-full overflow-hidden rounded-lg shadow-md">
        <div className="relative aspect-square w-4/12">
          <Image
            src={artikel.imageUrl}
            alt={artikel.title}
            fill
            sizes="33vw"
            quality={100}
          />
        </div>
        <div className="flex flex-1 flex-col items-start justify-between bg-white p-3">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="rounded bg-primary px-1 py-0.5 text-xs text-white">
                {artikel.tag}
              </p>
              <p className="text-xs">{artikel.dateCreated}</p>
            </div>
            <h3 className="line-clamp-2 text-sm">{artikel.title}</h3>
          </div>
          <p className="text-xs">{artikel.source}</p>
        </div>
      </article>
    </Link>
  );
};

export default ArtikelSection;
