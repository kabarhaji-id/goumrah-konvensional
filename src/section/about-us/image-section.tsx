import * as React from "react";
import PriorityImage from  "@/components/ui/priority-image"

interface ImageProps {
  src: string;
  alt: string;
  loading?: "lazy" | "eager";
}

const GalleryImage: React.FC<ImageProps> = ({src, alt}) => (
  <PriorityImage
    src={src}
    alt={alt}
    width={100}
    height={100}
    className="block h-full w-full rounded-lg object-cover object-center"
  />
);

const galleryImages: ImageProps[] = [
  {
    src: "/assets/image/kabaah.png",
    alt: "Gallery image 1"
  },
  {
    src: "/assets/image/tour-group.png",
    alt: "Gallery image 2"
  },
  {
    src: "/assets/image/madinah-umbrella.png",
    alt: "Gallery image 3"
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
