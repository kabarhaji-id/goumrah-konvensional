import Link from "next/link";
import CustomSunMoonIcon from "/src/assets/icons/tabler_sun-moon.svg";
import CustomVacationIcon from "/src/assets/icons/custom-vacation.svg";
import CustomFastTrainIcon from "/src/assets/icons/material-symbols_train-rounded.svg";
import CustomKaabaIcon from "/src/assets/icons/la_kaaba.svg";
import WhatsAppIcon from "/src/assets/icons/whatsapp.svg";
import ReceiptIcon from "/src/assets/icons/fluent_receipt-money-16-regular.svg";

import { Section, SectionContent } from "@/components/layout/section";
import { Chip } from "@/components/ui/chip";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { UmrahPackage } from "@/types/package-details";

const HeaderSection = ({
  packageData,
  durationDays,
}: {
  packageData: UmrahPackage;
  durationDays: string;
}) => {
  return (
    <Section className="py-0">
      <SectionContent className="space-y-5 px-4 pb-5 pt-4 text-primary-foreground">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            {/* --- Duration Days */}
            <Chip variant="default" className="overflow-hidden">
              <div className="w-full bg-primary-accent p-1">
                <CustomSunMoonIcon className="h-4 w-4 stroke-primary" />
              </div>
              <span className="py-1 pl-1 pr-1.5 text-xs font-semibold leading-4 tracking-wide text-primary">
                {durationDays} Hari
              </span>
            </Chip>

            {/* --- Package Type */}
            <Chip variant="default" className="overflow-hidden">
              <div className="w-full bg-primary-accent p-1">
                {packageData.type === "Plus" ? (
                  <CustomVacationIcon className="h-4 w-4" fill="#1B8386" />
                ) : (
                  <CustomKaabaIcon className="h-4 w-4" fill="#1B8386" />
                )}
              </div>
              <span className="py-1 pl-1 pr-1.5 text-xs font-semibold leading-4 tracking-wide text-primary">
                {packageData.type === "Plus" ? "Plus Wisata" : "Reguler"}
              </span>
            </Chip>

            {/* --- Fast Train? */}
            {packageData.isFastTrain && (
              <Chip variant="default" className="overflow-hidden">
                <div className="w-full bg-primary-accent p-1">
                  <CustomFastTrainIcon className="h-4 w-4" fill="#1B8386" />
                </div>
                <span className="py-1 pl-1 pr-1.5 text-xs font-semibold leading-4 tracking-wide text-primary">
                  Kereta Cepat
                </span>
              </Chip>
            )}
          </div>

          <div className="flex flex-col gap-2">
            {/* --- Title */}
            <h3 className="text-xl font-semibold leading-[130%] tracking-[0.5px]">
              {packageData.tagline}
            </h3>

            {/* --- Fast Train? */}
            {packageData.isFastTrain && (
              <p className="text-sm font-medium leading-[150%] tracking-wide text-primary">
                Lebih Nyaman dengan Kereta Cepat
              </p>
            )}

            {/* --- Days */}
            <p className="flex gap-1 text-xs text-neutral-foreground">
              <span>3 hari Madinah</span>·<span>4 hari Madinah</span>
            </p>

            {/* --- Early Payment (DP) */}
            <div className="flex items-center gap-1">
              <ReceiptIcon className="h-4 w-4" fill="#EF4444" />
              <p className="text-xs leading-4 text-destructive">
                Pembayaran Awal (DP) :
                <span className="pl-0.5 font-extrabold">Rp 5 Juta</span>
              </p>
            </div>
          </div>
        </div>

        {/* --- Button: Order This Package  */}
        <Separator />

        <Button className="h-11 w-full py-1 shadow-custom-md">
          <Link href={packageData.order_url}>
            <p className="text-base font-semibold leading-[150%] tracking-wide">
              Pesan Paket Umrah Ini
            </p>
          </Link>
          <WhatsAppIcon />
        </Button>
      </SectionContent>
    </Section>
  );
};

export default HeaderSection;
