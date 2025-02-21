import * as React from "react";
import Image from  "next/image"

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: "lazy";

}

const GalleryImage: React.FC<ImageProps> = ({src, alt, width, height}) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    style={{ width:`${width}`, height: `${height}` }}
    loading="lazy"
    className="block h-full w-full rounded-lg object-cover object-center"
    quality={50}
  />
);

const galleryImages: ImageProps[] = [
  {
    src: "/assets/image/kabaah.png",
    alt: "Close-up Kiswah (Kain Penutup Ka’bah)",
    width: 360,
    height: 270,
  },
  {
    src: "/assets/image/tour-group.png",
    alt: "Raudhah (Area Mustajab di Masjid Nabawi)",
    width: 360,
    height: 270,
  },
  {
    src: "/assets/image/madinah-umbrella.png",
    alt: "Ziarah ke Tempat Bersejarah di Madinah",
    width: 360,
    height: 270,
  }
];

const ImageGallery: React.FC = () => {
  return (

    <section className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
      <div className="-m-1 flex flex-wrap md:-m-2">
        <div className="flex w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <GalleryImage {...galleryImages[0]} />
          </div>
        </div>
        <div className="flex w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <GalleryImage {...galleryImages[1]} />
          </div>
          <div className="w-full p-1 md:p-2">
            <GalleryImage {...galleryImages[2]} />
          </div>

        </div>
      </div>
    </section>


)
  ;
};

export default ImageGallery;
