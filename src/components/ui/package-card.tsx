"use client";

import moment from "moment";
import "moment/locale/id";
import { useRouter } from "next/navigation";
import Image from "next/image";

import CustomSunMoonIcon from "@/public/icons/tabler_sun-moon.svg";
import CustomVacationIcon from "@/public/icons/custom-vacation.svg";
import CustomAirplaneIcon from "@/public/icons/bi_airplane.svg";
import IconWhite from "@/public/image/icon-white.svg";
import CustomFastTrainIcon from "@/public/icons/material-symbols_train-rounded.svg";
import IconNabawi from "@/public/icons/nabawi.svg";
import IconKabaa from "@/public/icons/kabaa.svg";

import { motion } from "motion/react";
import { Chip } from "./chip";
import { Button } from "@/components/ui/buttons/button";
import { CalendarDaysIcon, HotelIcon, PlaneIcon, RepeatIcon, Share2Icon } from "lucide-react";
import { cn, priceToLocale } from "@/lib/utils";
import { PackageCategory, UmrahPackage } from "@/types/package-details";
import { useEffect, useMemo, useState } from "react";
import { NavigatorConnection } from "@/types/navigator-connection";
import { Skeleton } from "./skeleton-loader";
import { Rating } from "./helper/getRating";
import { Tooltip } from "react-tooltip";

import dynamic from "next/dynamic";
import { ShareDialog } from "@/components/ui/share-dialog";

interface PackageCardImageProps {
  data: UmrahPackage;
}

function PackageCardImage({ data }: PackageCardImageProps) {
  const [borderDirection, setBorderDirection] = useState<"top" | "left" | "bottom" | "right">("top");

  const borderBackgrounds = useMemo(() => {
    let mainColor: string, blurColor: string;
    switch (data.category) {
      case "Silver":
        mainColor = "#1B8386";
        blurColor = "#61B3B6";
        break;
      case "Gold":
        mainColor = "#CA9822";
        blurColor = "#E6CA69";
        break;
      case "Platinum":
        mainColor = "#242424";
        blurColor = "#686868";
        break;
      default:
        throw "never";
    }

    return {
      "top": `radial-gradient(80% 80% at 0% 0%, ${mainColor} 0%, ${blurColor} 50%, rgba(255, 255, 255, 0) 100%)`,
      "left": `radial-gradient(80% 80% at 0% 100%, ${mainColor} 0%, ${blurColor} 50%, rgba(255, 255, 255, 0) 100%)`,
      "bottom":
        `radial-gradient(80% 80% at 100% 100%, ${mainColor} 0%, ${blurColor} 50%, rgba(255, 255, 255, 0) 100%)`,
      "right":
        `radial-gradient(80% 80% at 100% 0%, ${mainColor} 0%, ${blurColor} 50%, rgba(255, 255, 255, 0) 100%)`,
    } as const
  }, [data.category]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBorderDirection((prevBorderDirection) => {
        const directions = ["top", "left", "bottom", "right"] as const;
        const currentIndex = directions.indexOf(prevBorderDirection);
        return directions[(currentIndex + 1) % directions.length];
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative aspect-[4/3] flex items-center justify-center rounded-2xl"
    >
      <Image
        src={data.thumbnail}
        alt={`Paket ${data.type} ${data.title} ${data.category}`}
        title={`Paket ${data.type} ${data.title} ${data.category}`}
        width={942}
        height={708}
        loading="eager"
        className="absolute object-cover object-center z-0 rounded-b-2xl"
        priority
        quality={70}
      />
      <Image
        src={data.thumbnail}
        alt={`Paket ${data.type} ${data.title} ${data.category}`}
        title={`Paket ${data.type} ${data.title} ${data.category}`}
        width={942}
        height={708}
        loading="eager"
        className="object-cover object-center z-20 rounded-b-2xl"
        style={{
          clipPath: "inset(4px 4px 4px 4px round 16px)",
        }}
        priority
        quality={70}
      />
      <motion.div
        className="flex-none inset-0 overflow-hidden absolute z-10 rounded-b-2xl"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{
          background: borderBackgrounds[borderDirection],
        }}
        animate={{
          background: borderBackgrounds[borderDirection],
        }}
        transition={{
          ease: "linear",
          duration: 1,
        }}
      />
    </div>
  )
}

interface PackageCardProps {
  data: UmrahPackage;
  size?: "default" | "sm" | "xs";
  source?: string;
  className?: string;
}

const PackageCard = ({
  data,
  size = "default",
  className,
}: PackageCardProps) => {
  moment.locale("id");
  const whatsappLink = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';
  const [isLoading, setIsLoading] = useState(true);
  const [networkSpeed, setNetworkSpeed] = useState("good");
  const router = useRouter();

  const departureDate = useMemo(() => {
    return (
      data.departure_date.find(
        (departureDate) => departureDate.status === "active",
      ) ?? data.departure_date[0]
    );
  }, [data.departure_date]);

  const handlePackageDetailClick = async () => {
    if (typeof window !== "undefined") {
      router.push(`/umrah/${data.id}`);
    }
  };

  useEffect(() => {
    if ("connection" in navigator) {
      const connection = (navigator as NavigatorConnection).connection;
      if (connection) {
        setNetworkSpeed(connection.effectiveType);
      }
    }

    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    if (networkSpeed === "4g" || networkSpeed === "wifi") {
      clearTimeout(loadingTimeout);
      setIsLoading(false);
    }

    return () => clearTimeout(loadingTimeout);
  }, [networkSpeed]);

  return (
    <div
      onClick={handlePackageDetailClick}
      className={cn(
        "flex h-full w-full flex-col overflow-hidden rounded-2xl !bg-white tracking-wide shadow-lg border-4",
        className,
      )}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {isLoading ? (
          <Skeleton className="aspect-[4/3] h-full rounded-2xl" />
        ) : (
          <PackageCardImage data={data} />
        )}
        <div className="absolute top-0 flex w-full items-end justify-end p-4">
          <div className="relative z-20 flex gap-5">
            <ShareDialog dataPackage={
              data
            }>
              <div className="cursor-pointer rounded-full bg-white p-2.5 shadow-custom-sm">
                <Share2Icon className="h-4 w-4 stroke-neutral-foreground" />
              </div>
            </ShareDialog>
          </div>
        </div>
      </div>
      <div className="flex !h-full w-full flex-col gap-3 bg-white p-3 pt-1.5">
        <div className="space-y-1">
          {isLoading ? (
            <Skeleton className="h-6 w-64 mb-2" />
          ) : (
            <div
              className="whitespace-nowrap text-sm leading-normal tracking-[-0.30px] text-primary-foreground xs:text-[17px] mb-2">
              <h2 className="font-bold text-xl">{data.title}</h2>
            </div>
          )}

          <div className="flex items-center gap-2 flex-wrap">
            {/* Start of features */}
            {isLoading ? (
              <Skeleton className="mb-2 h-[22px] w-16" />
            ) : (
              <>
                {data.category === "Silver" && (
                  <div id="feature-class" className="flex items-center justify-center whitespace-nowrap text-xs font-display font-semibold rounded-[8px] text-white h-fit bg-gradient-to-tr from-[#1B8386] to-[#61B3B6] p-1">
                    <div className="p-1">
                      <IconWhite className="h-4 w-4 stroke-white" />
                    </div>
                    <span className="h-6 py-0.5 pl-0.5 pr-1.5 text-xs font-bold leading-[18px] tracking-wider">
                      Paket Silver
                    </span>
                  </div>
                )}
                {data.category === "Gold" && (
                  <div id="feature-class" className="flex items-center justify-center whitespace-nowrap text-xs font-display font-semibold rounded-[8px] text-white h-fit bg-gradient-to-tr from-[#CA9822] to-[#E6CA69] p-1">
                    <div className="p-1">
                      <IconWhite className="h-4 w-4 stroke-white" />
                    </div>
                    <span className="h-6 py-0.5 pl-0.5 pr-1.5 text-xs font-bold leading-[18px] tracking-wider">
                      Paket Gold
                    </span>
                  </div>
                )}
                {data.category === "Platinum" && (
                  <div id="feature-class" className="flex items-center justify-center whitespace-nowrap text-xs font-display font-semibold rounded-[8px] text-white h-fit bg-gradient-to-tr from-[#242424] to-[#686868] p-1">
                    <div className="p-1">
                      <IconWhite className="h-4 w-4 stroke-white" />
                    </div>
                    <span className="h-6 py-0.5 pl-0.5 pr-1.5 text-xs font-bold leading-[18px] tracking-wider">
                      Paket Platinum
                    </span>
                  </div>
                )}
                <Tooltip anchorSelect="#feature-class">Kelas Paket</Tooltip>
              </>
            )}

            {isLoading ? (
              <Skeleton className="mb-2 h-[22px] w-16" />
            ) : (
              <>
                <Chip id="feature-departure-date" variant="default" className="overflow-hidden border-[3px]">
                  <div className="w-full bg-primary-accent p-1">
                    <CalendarDaysIcon className="h-4 w-4 stroke-primary" />
                  </div>
                  <span className="py-0.5 pl-1 pr-1.5 text-xs font-semibold leading-[18px] text-neutral-foreground">
                    {moment(departureDate.date).format("DD MMM YYYY")}
                  </span>
                </Chip>
                <Tooltip anchorSelect="#feature-departure-date">Tanggal Keberangkatan</Tooltip>
              </>
            )}

            {isLoading ? (
              <Skeleton className="mb-2 h-[22px] w-16" />
            ) : (
              <>
                <Chip id="feature-duration" variant="default" className="overflow-hidden border-[3px]">
                  <div className="w-full bg-primary-accent p-1">
                    <CustomSunMoonIcon className="h-4 w-4 stroke-primary" />
                  </div>
                  <span className="py-0.5 pl-1 pr-1.5 text-xs font-semibold leading-[18px] text-neutral-foreground">
                    {data.duration}
                  </span>
                </Chip>
                <Tooltip anchorSelect="#feature-duration">Durasi</Tooltip>
              </>
            )}

            {isLoading ? (
              <Skeleton className="mb-2 h-[22px] w-20" />
            ) : (
              <>
                <Chip id="feature-type" variant="default" className="overflow-hidden border-[3px]">
                  <div className="w-full bg-primary-accent p-1">
                    {data.type === "Plus" ? (
                      <CustomVacationIcon
                        className="h-4 w-4"
                        fill="#1B8386"
                      />
                    ) : (
                      <RepeatIcon
                        className="h-4 w-4"
                        stroke="#1B8386"
                      />
                    )}
                  </div>
                  <span className="py-0.5 pl-1 pr-1.5 text-xs font-semibold leading-[18px] text-neutral-foreground">
                    {data.type === "Plus" ? "Plus Wisata" : data.type}
                  </span>
                </Chip>
                <Tooltip anchorSelect="#feature-type">Tipe Paket</Tooltip>
              </>
            )}

            {isLoading ? (
              <Skeleton className="mb-2 h-[22px] w-20" />
            ) : (
              <>
                <Chip id="feature-flight-type" variant="default" className="overflow-hidden border-[3px]">
                  <div className="w-full bg-primary-accent p-1">
                    {data.flight_details.departure_flight.transit ? (
                      <CustomAirplaneIcon
                        className="h-4 w-4 rotate-90"
                        fill="#1B8386"
                      />
                    ) : (
                      <CustomAirplaneIcon
                        className="h-4 w-4"
                        fill="#1B8386"
                      />
                    )}
                  </div>
                  <span className="py-0.5 pl-1 pr-1.5 text-xs font-semibold leading-[18px] text-neutral-foreground">
                    {data.flight_details.departure_flight.transit ? `Transit ${data.flight_details.departure_flight.transit.airport_city_departure}` : "Langsung"}
                  </span>
                </Chip>
                <Tooltip anchorSelect="#feature-flight-type">Jenis Penerbangan</Tooltip>
              </>
            )}

            {isLoading ? (
              <Skeleton className="mb-2 h-[22px] w-20" />
            ) : (
              <>
                <Chip id="feature-madinah-hotel" variant="default" className="overflow-hidden border-[3px]">
                  <div className="w-full bg-primary-accent p-1">
                    <IconNabawi className="h-4 w-4 fill-[#1B8386]" />
                  </div>
                  <span className="py-0.5 pl-1 pr-1.5 text-xs font-semibold leading-[18px] text-neutral-foreground">
                    <Rating className="gap-0" totalStars={data.hotel_details.madinah.star_rating} />
                  </span>
                </Chip>
                <Tooltip anchorSelect="#feature-madinah-hotel">Hotel Madinah</Tooltip>
              </>
            )}

            {isLoading ? (
              <Skeleton className="mb-2 h-[22px] w-20" />
            ) : (
              <>
                <Chip id="feature-makkah-hotel" variant="default" className="overflow-hidden border-[3px]">
                  <div className="w-full bg-primary-accent p-1">
                    <IconKabaa className="h-4 w-4 fill-[#1B8386]" />
                  </div>
                  <span className="py-0.5 pl-1 pr-1.5 text-xs font-semibold leading-[18px] text-neutral-foreground">
                    <Rating className="gap-0" totalStars={data.hotel_details.makkah.star_rating} />
                  </span>
                </Chip>
                <Tooltip anchorSelect="#feature-makkah-hotel">Hotel Makkah</Tooltip>
              </>
            )}

            {/* --- Fast Train? */}
            {data.isFastTrain &&
              (isLoading ? (
                <Skeleton className="mb-2 h-[22px] w-[110px] rounded-[8px]" />
              ) : (
                <>
                  <Chip id="feature-fast-train" variant="default" className="overflow-hidden border-[3px]">
                    <div className="w-full bg-primary-accent p-1">
                      <CustomFastTrainIcon
                        className="h-4 w-4"
                        fill="#1B8386"
                      />
                    </div>
                    <span className="py-0.5 pl-1 pr-1.5 text-xs font-semibold leading-[18px] text-neutral-foreground">
                      Kereta Cepat
                    </span>
                  </Chip>
                  <Tooltip anchorSelect="#feature-fast-train">Menggunakan Kereta Cepat</Tooltip>
                </>
              ))}
          </div>

          <div className="space-y-2">
            <div
              className="relative space-y-2 text-[13px] leading-[18px] tracking-tight text-neutral-foreground opacity-80">
              {/* --- Departure Date
                  {isLoading ? (
                    <Skeleton className="h-[18px] w-56" />
                  ) : (
                    <div className="flex items-center gap-2">
                      <CalendarDaysIcon className="h-4 w-4 stroke-neutral-foreground" />
                      <span className="text-neutral-foreground text-sm font-bold tracking-wide">
                        {moment(departureDate.date).format("DD MMMM YYYY")}
                      </span>
                      {data.departure_date.length > 1 ? (
                        <span className="text-neutral-foreground font-semibold text-sm leading-[18px] tracking-wide opacity-60">
                          +{data.departure_date.length - 6} tanggal lainnya
                        </span>
                      ) : (
                        <></>
                      )}
                    </div>
                  )} */}

              {/* --- Flight */}
              {isLoading ? (
                <Skeleton className="h-6 w-52" />
              ) : (
                <div className="flex items-start gap-1 text-[13px] leading-[18px] tracking-wide">
                  <div className="flex items-center gap-1 font-medium">
                    <div className="w-6 flex items-center gap-1">
                      <PlaneIcon
                        className="h-5 w-5 stroke-[#1B8386] rotate-45 mr-1"
                      />
                      {/* <Image
                            width={70}
                            height={60}
                            src={data.flight_details.departure_flight.airline_logo}
                            alt={`logo-${data.flight_details.departure_flight.airline}`}
                            className="h-6 w-auto"
                          /> */}
                    </div>
                    {/* <Image
                          src="/assets/icons/custom-icon/icon-maskapai.svg"
                          alt="Maskapai"
                          width={38}
                          height={24}
                          className="w-[45px] h-[28px] flex flex-shrink-0"
                        /> */}
                    <div className="ml-0.5 flex w-[70px] justify-between">
                      <p className="text-sm font-medium">Maskapai</p>
                    </div>
                    <span className="text-sm">:</span>
                  </div>
                  <span className="text-sm font-bold leading-[18px] tracking-wide whitespace-nowrap mt-0.5">
                    {data.flight_details.departure_flight.airline}
                  </span>
                </div>
              )}

              {/* --- Madinah Hotel's Rating */}
              {isLoading ? (
                <Skeleton className="h-6 w-56" />
              ) : (
                <div className="flex items-start gap-1 text-[13px] leading-[18px] tracking-wide">
                  <div className="flex items-center gap-1 font-medium">
                    <div className="w-6 flex items-center gap-1">
                      <HotelIcon className="w-5 h-5 stroke-[#1B8386] mr-1" />
                    </div>
                    {/* <Rating2
                          starsRating={data.hotel_details.madinah.star_rating}
                        /> */}
                    <div className="ml-0.5 flex w-[68px] justify-between">
                      <p className="text-sm font-medium">Madinah</p>
                    </div>
                    <span className="text-sm">:</span>
                  </div>
                  <span className="text-sm font-bold leading-[18px] tracking-wide whitespace-nowrap mt-0.5">
                    {data.hotel_details.madinah.hotel_name}
                  </span>
                </div>
              )}

              {/* --- Makkah Hotel's Rating */}
              {isLoading ? (
                <Skeleton className="h-6 w-60" />
              ) : (
                <div className="flex items-start gap-1 text-[13px] leading-[18px] tracking-wide">
                  <div className="flex flex-shrink-0 items-center gap-1 font-medium">
                    <div className="w-6 flex items-center gap-1">
                      <HotelIcon className="w-5 h-5 stroke-[#1B8386] mr-1" />
                    </div>
                    {/* <Rating2
                          starsRating={data.hotel_details.makkah.star_rating}
                        /> */}
                    <div className="ml-0.5 flex w-[68px] justify-between">
                      <p className="w-[60px] text-sm font-medium">Makkah</p>
                    </div>
                    <span className="text-sm">:</span>
                  </div>
                  <span className="text-sm font-bold leading-[18px] tracking-wide whitespace-nowrap mt-0.5">
                    {data.hotel_details.makkah.hotel_name}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {isLoading ? (
            <Skeleton className="h-6 w-36" />
          ) : (
            <div className="flex flex-1 flex-col gap-1.5 text-primary-foreground px-1">
              <span className="block text-xs text-neutral-600 font-medium">Mulai dari:</span>
              <div className="flex justify items-center gap-1 xs:gap-2 justify-between">
                {/* --- Normal Price */}
                <p className="flex-shrink-0 text-sm font-extrabold xs:text-lg">
                  {data.quadFinalPrice
                    ? priceToLocale(data.quadFinalPrice)
                    : priceToLocale(data.quadPrice)}
                </p>

                <Button
                  variant="primary"
                  size="default"
                  className="h-11 w-fit px-5 rounded-xl text-sm font-medium flex items-center gap-2"
                  onClick={handlePackageDetailClick}
                >
                  Lihat Paket
                </Button>

                {/* --- Discount Price
                    {data.quadFinalPrice &&
                      data.quadPrice !== data.quadFinalPrice && (
                        <div className="flex flex-shrink-0 items-center gap-1">
                          <CustomPercentWavyIcon
                            className="h-3 w-3 xs:h-4 xs:w-4"
                            stroke="#EF4444"
                          />
                          <span className="text-[11px] leading-5 text-destructive line-through opacity-80 xs:text-sm">
                            {priceToLocale(data.quadPrice)}
                          </span>
                        </div>
                      )} */}
              </div>
            </div>
          )}

          {/* {isLoading ? (
                <Skeleton className="h-9 w-full rounded-[14px]" />
              ) : (
                <div className="flex w-full gap-2 items-center justify-start">
                  <Button
                    variant="primary"
                    size="default"
                    className="h-11 basis-1/2 px-4 rounded-xl text-sm font-medium flex items-center gap-2"
                    onClick={handlePackageDetailClick}
                  >
                    Lihat Rincian Paket
                  </Button>

                  <Button
                    variant="primary"
                    size="default"
                    className="h-11 basis-1/2 px-4 rounded-xl text-sm font-medium"
                    icon={<FaWhatsapp />} // Add WhatsApp icon
                    onClick={(event) => {
                      event.stopPropagation(); // Prevents the click from affecting the Link
                      handleConsult(`Paket ${data.type} ${data.title} ${data.category}`);
                    }}
                  >
                    Pilih Paket
                </div>
                  </Button>
                  */}
        </div>
      </div>
    </div>
  );
};


export default dynamic(() => Promise.resolve(PackageCard), { ssr: false });
