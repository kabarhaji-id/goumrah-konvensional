import * as React from "react";
import Image from 'next/image'

interface ImageProps {
  src: string;
  alt: string;
  height: number;
  width: number;
  className: string;
  loading?: "lazy" | "eager";
}

const GalleryImage: React.FC<ImageProps> = ({src, alt,height, width, className,loading = "lazy"}) => (
  <Image
    src={src}
    width={width}
    height={height}
    alt={alt}
    loading={loading}
    className={className}
  />
);

const galleryImages: ImageProps[] = [
  {
    src: "/assets/image/kabaah.png",
    alt: "Gallery image 1",
    height: 262,
    width: 177,
    className: "object-contain shrink-0 self-stretch my-auto rounded-xl aspect-[0.68]"
  },
  {
    src: "/assets/image/tour-group.png",
    alt: "Gallery image 2",
    height: 152,
    width: 205,
    className: "object-contain rounded-xl aspect-[1.35]"
  },
  {
    src: "/assets/image/madinah-umbrella.png",
    alt: "Gallery image 3",
    height: 95,
    width: 205,
    className: "object-contain mt-4 rounded-xl aspect-[2.16]"
  }
];

const ImageGallery: React.FC = () => {
  return (
    <section
      className="flex gap-4 items-center px-4 bg-white shadow-lg p-8 py-4"
      role="region"
      aria-label="Image gallery"
    >
      <GalleryImage {...galleryImages[0]} />
      <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0">
        <GalleryImage {...galleryImages[1]} />
        <GalleryImage {...galleryImages[2]} />
      </div>
    </section>
  );
};

export default ImageGallery;
