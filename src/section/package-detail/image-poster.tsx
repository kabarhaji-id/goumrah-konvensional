import Image from "next/image";

import GoldAccent from "/public/assets/patterns/gold-accent.svg";
import SilverAccent from "/public/assets/patterns/silver-accent.svg";
import PlatinumAccent from "/public/assets/patterns/platinum-accent.svg";
import LuxuryAccent from "/public/assets/patterns/luxury-accent.svg";

const ImagePoster = async ({
  packageImage,
  packageCategory,
}: {
  packageImage: string;
  packageCategory: string;
}) => {
  return (
    <>
      <div className="relative w-full">
        <div
          className="absolute top-0 z-10 h-20 w-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 40%)",
          }}
        />

        <div>
          <Image
            src={packageImage}
            alt={`image-${packageImage}`}
            width={448}
            height={336}
            className="h-full max-h-[380px] w-full object-cover"
          />

          <div
            className="absolute bottom-0 z-10 h-14 w-full"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)",
            }}
          />
        </div>

        <div className="absolute -bottom-0 z-20 h-fit">
          {packageCategory === "Silver" && <SilverAccent className="w-full" />}
          {packageCategory === "Gold" && <GoldAccent className="w-full" />}
          {packageCategory === "Platinum" && (
            <PlatinumAccent className="w-full" />
          )}
          {packageCategory === "Luxury" && <LuxuryAccent className="w-full" />}
        </div>
      </div>
    </>
  );
};

export default ImagePoster;
