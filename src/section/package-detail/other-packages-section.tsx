import {
  Section,
  SectionContent,
  SectionHeader,
  SectionTitle,
} from "@/components/layout/section";
import { CustomSwiper } from "@/components/layout/swiper";
import { PackageCardCompact } from "@/components/ui/card/package-card-compact";
import { packageDetailData } from "@/data/packages";

const OtherPackagesSection = async ({ packageId }: { packageId: string }) => {
  const filteredPackages = packageDetailData.filter((p) => p.id !== packageId);

  if (filteredPackages.length > 0) {
    return (
      <Section className="pb-4 pt-0">
        <SectionHeader className="mb-3">
          <SectionTitle className="leading-6 tracking-wide">
            Paket Menarik Serupa
          </SectionTitle>
        </SectionHeader>
        <SectionContent>
          <CustomSwiper maxWidth={299} slidesClass="pb-2">
            {filteredPackages.map((data, index: number) => (
              <PackageCardCompact key={index} dataPackage={data} />
            ))}
          </CustomSwiper>
        </SectionContent>
      </Section>
    );
  }
};

export default OtherPackagesSection;
