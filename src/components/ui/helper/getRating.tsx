import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";

export const Rating = ({
  totalStars,
  className,
}: {
  totalStars: number;
  className: string;
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
    case 1:
      return "1";
    case 2:
      return "2";
    case 3:
      return "3";
    case 4:
      return "4";
    case 5:
      return "5";
    default:
      return null;
  }
};
