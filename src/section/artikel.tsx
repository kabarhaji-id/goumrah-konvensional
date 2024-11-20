import { Button } from "@/components/ui/button";
import {
  Section,
  SectionContent,
  SectionHeader,
  SectionSubTitle,
  SectionTitle,
} from "@/components/ui/section";
import React from "react";

const ArtikelSection = () => {
  return (
    <Section id="article">
      <SectionHeader>
        <SectionSubTitle>Artikel</SectionSubTitle>
        <SectionTitle>
          Informasi Terkini dan Terpercaya Seputar Umrah Haji
        </SectionTitle>
      </SectionHeader>
      <SectionContent className="space-y-8">
        <div className="space-y-4">
          <Card />
          <Card />
          <Card />
        </div>

        <Button className="w-full" variant="outline">
          Baca artikel lainnya
        </Button>
      </SectionContent>
    </Section>
  );
};

const Card = () => {
  return (
    <article className="flex w-full">
      <div className="aspect-square w-4/12 bg-black" />
      <div className="flex flex-1 flex-col items-start justify-between p-3">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="bg-primary px-1 py-0.5 text-xs text-white">
              Wisata Religi
            </p>
            <p className="text-xs">15 Nov 2024</p>
          </div>
          <h3 className="line-clamp-2 text-sm">
            Ini 5 hal yang perlu dipersiapkan sebelum menunaikan ibadah umrah
          </h3>
        </div>
        <p className="text-xs">kabarhaji.id</p>
      </div>
    </article>
  );
};

export default ArtikelSection;
