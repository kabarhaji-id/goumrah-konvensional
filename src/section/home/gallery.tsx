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
    imageUrl: "/assets/image/gallery/epic-moment-1.png",
    alt: "Dalam setiap ukiran, terdapat kisah. Sentuhan tangan ini, membawa kita pada renungan yang mendalam.",
    title: "Keagungan Allah terukir dalam setiap detail.  Semoga kita selalu mengingat-Nya."
  },
  {
    imageUrl: "/assets/image/gallery/epic-moment-2.png",
    alt: "Kekuatan doa yang tak terlihat, terhubung dengan keagungan Ka'bah.",
    title: "Suasana khusyuk dan penuh harap, dipenuhi dengan semangat ibadah. Semoga kita semua selalu dirahmati."
  },
  {
    imageUrl: "/assets/image/gallery/epic-moment-3.png",
    alt: "Menjelajahi keajaiban dunia, bersama orang tersayang. Semoga perjalanan ini membawa berkah dan kenangan indah selamanya.",
    title: "Menikmati keindahan arsitektur yang menakjubkan.  Momen berharga bersama pasangan tercinta.  Semoga perjalanan ini penuh berkah."
  },
  {
    imageUrl: "/assets/image/gallery/epic-moment-4.png",
    alt: "Momen berharga di Masjidil Haram. Kehangatan persahabatan di tengah-tengah keindahan yang luar biasa. Semoga selalu dipenuhi dengan kebahagiaan.",
    title: "Menikmati keindahan Masjidil Haram, dan menemukan kekuatan dalam persaudaraan. Kebahagiaan yang tak ternilai dalam momen berharga ini."
  },
  {
    imageUrl: "/assets/image/gallery/epic-moment-5.png",
    alt: "Subhanallah! Suasana penuh khidmat dan khusyuk di Masjidil Haram. Begitu banyak orang yang beribadah di tempat suci ini. Semoga kita semua selalu diberi kesempatan untuk merasakan kedamaian dan kedekatan dengan Tuhan.",
    title:"Indah sekali! Jemaah yang berpakaian putih, beribadah di Masjidil Haram. Suasana yang begitu tenang dan penuh makna. Semoga kita semua selalu diberi kesempatan untuk merasakannya."
  },
  {
    imageUrl: "/assets/image/gallery/epic-moment-6.png",
    alt: "Langit biru cerah, terbentang luas di atas Masjidil Haram yang megah. Seorang wanita mengenakan hijab hitam berjalan dengan tenang, menikmati keindahan arsitektur yang menakjubkan.",
    title: "Suasana tenang dan khidmat menyelimuti Masjidil Haram. Wanita berhijab hitam berjalan dengan anggun, menikmati keindahan tempat suci ini."
  },
  {
    imageUrl: "/assets/image/gallery/epic-moment-7.png",
    alt: "Bayangan teduh payung-payung besar di halaman Masjidil Haram, menciptakan suasana yang sejuk dan damai. Sebuah tempat yang penuh berkah.",
    title: "Arsitektur Islam yang menakjubkan, dihiasi dengan detail yang rumit dan indah. Masjidil Haram, tempat bertemunya jiwa dan keyakinan",
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
            <Card imageUrl={data.imageUrl} alt={data.alt} title={data.title} key={data.alt} />
          ))}
        </CustomSwiper>
      </SectionContent>
    </Section>
  );
};

interface CardProps {
  imageUrl: string | StaticImport;
  alt: string;
  title: string;
}

const Card = ({ imageUrl, alt, title }: CardProps) => {
  return (
    <div className="relative aspect-[9/16] h-[200px] w-full flex-none overflow-hidden rounded-lg xsm:h-[300px]">
      <Image
        src={imageUrl}
        alt={alt}
        title={title}
        loading="eager"
        sizes="44vw"
        fill
        quality={100}
        className="object-cover"
      />
    </div>
  );
};

export default GallerySection;
