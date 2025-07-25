import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";

import CustomHotelStars3 from "@/public/icons/custom-icon/icon-hotel-stars-3.svg";
import CustomHotelStars4 from "@/public/icons/custom-icon/icon-hotel-stars-4.svg";
import CustomHotelStars5 from "@/public/icons/custom-icon/icon-hotel-stars-5.svg";
import Image from "next/image";

export const Rating = ({
  totalStars,
  className,
}: {
  totalStars: number;
  className?: string;
}) => {
  const overallStars = 5;
  const stars = Array.from({ length: overallStars }, (_, index) => {
    return index < Math.floor(totalStars) ? (
      <StarIcon
        key={index}
        className="h-[14px] w-[14px]"
        fill="#F2AC30"
        stroke="none"
      />
    ) : (
      ""
    );
  });

  return <div className={cn("flex gap-1.5", className)}>{stars}</div>;
};

export const Rating2 = ({ starsRating }: { starsRating: number }) => {
  switch (starsRating) {
    case 3:
      return (
        <Image
          src="/assets/icons/custom-icon/icon-hotel-stars-3.svg"
          alt="Hotel Stars 3"
          width={40}
          height={24}
          className="w-[47px] h-[28px]"
        />
      )
    case 4:
      return (
        <Image
          src="/assets/icons/custom-icon/icon-hotel-stars-3.svg"
          alt="Hotel Stars 3"
          width={40}
          height={24}
          className="w-[47px] h-[28px]"
        />
      );
    case 5:
      return (
        <Image
          src="/assets/icons/custom-icon/icon-hotel-stars-3.svg"
          alt="Hotel Stars 3"
          width={40}
          height={24}
          className="w-[47px] h-[28px]"
        />
      );
    default:
      return null;
  }
};
