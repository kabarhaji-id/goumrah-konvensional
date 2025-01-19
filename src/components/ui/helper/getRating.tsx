import { StarIcon } from "lucide-react";

export const Rating = ({ totalStars }: { totalStars: number }) => {
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

  return <div className="flex gap-1.5">{stars}</div>;
};
