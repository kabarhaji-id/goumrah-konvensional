import { cn } from "@/lib/utils";
import Image from "next/image";

const getSkytrax = (type: string, rating: string, open: boolean) => {
  if (type === "Full Service" && rating === "5") {
    return (
      <Image
        src="/assets/skytrax/skytrax-full_service-5.png"
        alt="skytrax-5"
        className={cn("absolute right-3", open ? "top-[136px]" : "top-3")}
        width={52}
        height={52}
        priority quality={50}
      />
    );
  }

  if (type === "Full Service" && rating === "4") {
    return (
      <Image
        src="/assets/skytrax/skytrax-full_service-4.png"
        alt="skytrax-4"
        className={cn("absolute right-3", open ? "top-[136px]" : "top-3")}
        width={52}
        height={52}
        priority quality={50}
      />
    );
  }

  if (type === "Full Service" && rating === "3") {
    return (
      <Image
        src="/assets/skytrax/skytrax-full_service-3.png"
        alt="skytrax-3"
        className={cn("absolute right-3", open ? "top-[136px]" : "top-3")}
        width={52}
        height={52}
        priority quality={50}
      />
    );
  }

  if (type === "Low Cost" && rating === "4") {
    return (
      <Image
        src="/assets/skytrax/skytrax-low_cost-4.png"
        alt="skytrax-4"
        className={cn("absolute right-3", open ? "top-[136px]" : "top-3")}
        width={52}
        height={52}
      />
    );
  }

  if (type === "Low Cost" && rating === "3") {
    return (
      <Image
        src="/assets/skytrax/skytrax-low_cost-3.png"
        alt="skytrax-3"
        className={cn("absolute right-3", open ? "top-[136px]" : "top-3")}
        width={52}
        height={52}
      />
    );
  }
};

export { getSkytrax };
