"use client";

import moment from "moment";
import "moment/locale/id";
import { useRouter } from "next/navigation";
import Image from "next/image";

import GoldAccent from "@/public/patterns/gold-accent.svg";
import SilverAccent from "@/public/patterns/silver-accent.svg";
import PlatinumAccent from "@/public/patterns/platinum-accent.svg";

import CustomSunMoonIcon from "@/public/icons/tabler_sun-moon.svg";
import CustomVacationIcon from "@/public/icons/custom-vacation.svg";
import CustomPercentWavyIcon from "@/public/icons/percent-wavy.svg";
import CustomKaabaIcon from "@/public/icons/la_kaaba.svg";
import CustomAirplaneIcon from "@/public/icons/bi_airplane.svg";
import IconWhite from "@/public/image/icon-white.svg";
import CustomFastTrainIcon from "@/public/icons/material-symbols_train-rounded.svg";
import CustomMaskapaiIcon from "@/public/icons/custom-icon/icon-maskapai.svg";

import { Chip } from "./chip";
import { Button } from "@/components/ui/buttons/button";
import { CalendarDaysIcon, HotelIcon, PlaneIcon, RepeatIcon, Share2Icon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMosque } from "react-icons/md";
import { cn, priceToLocale } from "@/lib/utils";
import { UmrahPackage } from "@/types/package-details";
import { useEffect, useMemo, useState } from "react";
import { NavigatorConnection } from "@/types/navigator-connection";
import { Skeleton } from "./skeleton-loader";
import { Rating } from "./helper/getRating";

import dynamic from "next/dynamic";
import { ShareDialog } from "@/components/ui/share-dialog";
import { dataPackages } from "@/data/packages";

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

  const handleConsult = (packageTitle: string) => {
    const fullUrl = `${window.location.origin}/umrah/${data.id}`;
    const message = `${fullUrl}\n\nAssalamualaikum Wr Wb, saya tertarik dengan paket [*${packageTitle}*. Bisa saya dapatkan informasi lebih lanjut?`;
    const whatsappURL = `${whatsappLink}${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

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
    <>

      {size === "default" && (
        <div
          onClick={handlePackageDetailClick}
          className={cn(
            "flex h-full w-full flex-col overflow-hidden rounded-[14px] !bg-white tracking-wide shadow-lg border",
            className,
          )}
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[10px]">
            {isLoading ? (
              <Skeleton className="aspect-[4/3] h-full rounded-[14px]" />
            ) : (
              <Image
                src={data.thumbnail}
                alt={`Paket ${data.type} ${data.title} ${data.category}`}
                title={`Paket ${data.type} ${data.title} ${data.category}`}
                width={942}
                height={708}
                loading="eager"
                className="aspect-[4/3] h-full rounded-[14px] object-cover"
                priority quality={70}
              />
            )}
            {/* <div className="absolute top-0 flex w-full p-4">
              {data.category === "Silver" && (
                <div className="bg-primary px-2.5 py-1.5 text-white font-semibold rounded-lg shadow tracking-wider">Silver</div>
              )}
              {data.category === "Gold" && (
                <div className="bg-gradient-to-tr from-[#CA9822] to-[#E6CA69] px-2.5 py-1.5 text-white font-semibold rounded-lg shadow tracking-wider">Gold</div>
              )}
              {data.category === "Platinum" && (
                <div className="bg-[#242424] px-2.5 py-1.5 text-white font-semibold rounded-lg shadow tracking-wider">Platinum</div>
              )}
              {data.category === "Silver" && (
                <SilverAccent className="w-[100%]" />
              )}
              {data.category === "Gold" && <GoldAccent className="w-[100%]" />}
              {data.category === "Platinum" && (
                <PlatinumAccent className="w-[100%]" />
              )}
            </div> */}
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
                      <div className="flex items-center justify-center whitespace-nowrap text-xs font-display font-semibold rounded-[8px] text-white h-fit bg-gradient-to-tr from-[#1B8386] to-[#61B3B6] p-1">
                        <div className="p-1">
                          <IconWhite className="h-4 w-4 stroke-white" />
                        </div>
                        <span className="h-6 py-0.5 pl-0.5 pr-1.5 text-xs font-bold leading-[18px] tracking-wider">
                          Paket Silver
                        </span>
                      </div>
                    )}
                    {data.category === "Gold" && (
                      <div className="flex items-center justify-center whitespace-nowrap text-xs font-display font-semibold rounded-[8px] text-white h-fit bg-gradient-to-tr from-[#CA9822] to-[#E6CA69] p-1">
                        <div className="p-1">
                          <IconWhite className="h-4 w-4 stroke-white" />
                        </div>
                        <span className="h-6 py-0.5 pl-0.5 pr-1.5 text-xs font-bold leading-[18px] tracking-wider">
                          Paket Gold
                        </span>
                      </div>
                    )}
                    {data.category === "Platinum" && (
                      <div className="flex items-center justify-center whitespace-nowrap text-xs font-display font-semibold rounded-[8px] text-white h-fit bg-gradient-to-tr from-[#242424] to-[#686868] p-1">
                        <div className="p-1">
                          <IconWhite className="h-4 w-4 stroke-white" />
                        </div>
                        <span className="h-6 py-0.5 pl-0.5 pr-1.5 text-xs font-bold leading-[18px] tracking-wider">
                          Paket Platinum
                        </span>
                      </div>
                    )}
                  </>
                )}

                {isLoading ? (
                  <Skeleton className="mb-2 h-[22px] w-16" />
                ) : (
                  <Chip variant="default" className="overflow-hidden border-[3px]">
                    <div className="w-full bg-primary-accent p-1">
                      <CalendarDaysIcon className="h-4 w-4 stroke-primary" />
                    </div>
                    <span className="py-0.5 pl-1 pr-1.5 text-xs font-semibold leading-[18px] text-neutral-foreground">
                      {moment(departureDate.date).format("DD MMM YYYY")}
                    </span>
                  </Chip>
                )}

                {isLoading ? (
                  <Skeleton className="mb-2 h-[22px] w-16" />
                ) : (
                  <Chip variant="default" className="overflow-hidden border-[3px]">
                    <div className="w-full bg-primary-accent p-1">
                      <CustomSunMoonIcon className="h-4 w-4 stroke-primary" />
                    </div>
                    <span className="py-0.5 pl-1 pr-1.5 text-xs font-semibold leading-[18px] text-neutral-foreground">
                      {data.duration}
                    </span>
                  </Chip>
                )}

                {isLoading ? (
                  <Skeleton className="mb-2 h-[22px] w-20" />
                ) : (
                  <Chip variant="default" className="overflow-hidden border-[3px]">
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
                )}

                {isLoading ? (
                  <Skeleton className="mb-2 h-[22px] w-20" />
                ) : (
                  <Chip variant="default" className="overflow-hidden border-[3px]">
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
                )}

                {isLoading ? (
                  <Skeleton className="mb-2 h-[22px] w-20" />
                ) : (
                  <Chip variant="default" className="overflow-hidden border-[3px]">
                    <div className="w-full bg-primary-accent p-1">
                      <MdOutlineMosque
                        className="h-4 w-4 fill-[#1B8386]"
                      />
                    </div>
                    <span className="py-0.5 pl-1 pr-1.5 text-xs font-semibold leading-[18px] text-neutral-foreground">
                      <Rating className="gap-0" totalStars={data.hotel_details.madinah.star_rating} />
                    </span>
                  </Chip>
                )}

                {isLoading ? (
                  <Skeleton className="mb-2 h-[22px] w-20" />
                ) : (
                  <Chip variant="default" className="overflow-hidden border-[3px]">
                    <div className="w-full bg-primary-accent px-1 py-0.5">
                      <CustomKaabaIcon className="h-5 w-5" fill="#1B8386" />
                    </div>
                    <span className="py-0.5 pl-1 pr-1.5 text-xs font-semibold leading-[18px] text-neutral-foreground">
                      <Rating className="gap-0" totalStars={data.hotel_details.makkah.star_rating} />
                    </span>
                  </Chip>
                )}

                {/* --- Fast Train? */}
                {data.isFastTrain &&
                  (isLoading ? (
                    <Skeleton className="mb-2 h-[22px] w-[110px] rounded-[8px]" />
                  ) : (
                    <Chip variant="default" className="overflow-hidden border-[3px]">
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
        </div >
      )}


    </>



  );
};


export default dynamic(() => Promise.resolve(PackageCard), { ssr: false });
