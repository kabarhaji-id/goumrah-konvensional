import CustomSunMoonIcon from "/src/assets/icons/tabler_sun-moon.svg";
import CustomVacationIcon from "/src/assets/icons/custom-vacation.svg";
import CustomKaabaIcon from "/src/assets/icons/la_kaaba.svg";
import WhatsAppIcon from "/src/assets/icons/whatsapp.svg";

import { StarIcon } from "lucide-react";
import { Section, SectionContent } from "@/components/layout/section";
import { Chip } from "@/components/ui/chip";
import { PackageDetails } from "@/types/package-details";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const HeaderSection = ({
  packageData,
  durationDays,
}: {
  packageData: PackageDetails;
  durationDays: string;
}) => {
  return (
    <Section className="py-0">
      <SectionContent className="space-y-5 px-4 pb-5 pt-4 text-primary-foreground">
        <div className="flex flex-col gap-4">
          {/* --- Duration Days */}
          <div className="flex gap-2">
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
          </div>

          <div className="flex flex-col gap-2">
            {/* --- Title */}
            <h3 className="text-xl font-semibold leading-[130%] tracking-[0.5px]">
              {packageData.name}
            </h3>

            {/* --- Days */}
            <p className="flex gap-1 text-xs text-neutral-foreground">
              <span>3 hari Madinah</span>·<span>4 hari Madinah</span>
            </p>

            {/* --- Rating and Reviews */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-neutral-foreground">
                {packageData.reviews?.length > 0 && (
                  <>
                    <div className="flex items-center gap-1">
                      <StarIcon
                        className="h-5 w-5"
                        fill="#f2ac30"
                        stroke="none"
                      />
                      <span className="text-status-gold text-sm font-bold leading-[18px] tracking-tighter">
                        {packageData.rating.toFixed(1)}
                      </span>
                    </div>
                    <div className="h-1 w-1 rounded-full bg-neutral-foreground" />
                  </>
                )}
                {packageData.reviews?.length > 0 ? (
                  <a href="#reviews">
                    <span className="text-sm font-semibold underline">
                      {packageData.reviews.length} ulasan
                    </span>
                  </a>
                ) : (
                  <span className="text-sm font-semibold text-neutral-foreground/50">
                    Belum ada ulasan
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* --- Button: Order This Package  */}
        <Separator />

        <Button className="h-11 w-full py-1 shadow-custom-md">
          <p className="text-base font-semibold leading-[150%] tracking-wide">
            Pesan Paket Umrah Ini
          </p>
          <WhatsAppIcon />
        </Button>
      </SectionContent>
    </Section>
  );
};

export default HeaderSection;
