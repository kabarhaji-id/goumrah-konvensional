import {
  Section,
  SectionContent,
  SectionHeader,
  SectionTitle,
} from "@/components/layout/section";
import { CustomSwiper } from "@/components/layout/swiper";
import { PackageCardCompact } from "@/components/ui/card/package-card-compact";
import { Separator } from "@/components/ui/separator";
import { dataPackages } from "@/data/packages";

const OtherPackagesSection = async ({ packageId }: { packageId: string }) => {
  const filteredPackages = dataPackages.filter((p) => p.slug !== packageId);

  if (filteredPackages.length > 0) {
    return (
      <>
        <div className="px-4">
          <Separator />
        </div>

        <Section className="pb-6 pt-5">
          <SectionHeader className="mb-3">
            <SectionTitle className="leading-6 tracking-wide">
              Paket Menarik Serupa
            </SectionTitle>
          </SectionHeader>
          <SectionContent>
            <CustomSwiper maxWidth={299} slidesClass="pb-4">
              {filteredPackages.map((data, index: number) => (
                <PackageCardCompact key={index} dataPackage={data} />
              ))}
            </CustomSwiper>
          </SectionContent>
        </Section>
      </>
    );
  }
};

export default OtherPackagesSection;
