import { Section, SectionContent } from "@/components/layout/section";
import { UmrahPackage } from "@/types/package-details";
import { HeaderComponent } from "./section-component/header-component";

const HeaderSection = ({
  packageData,
  durationDays,
}: {
  packageData: UmrahPackage;
  durationDays: string;
}) => {

  return (
    <Section className="py-0">
      <SectionContent className="space-y-4 py-4 text-primary-foreground">
        <HeaderComponent
          packageData={packageData}
          durationDays={durationDays}
        />

        {/* --- Button: Order This Package  */}
        {/* <div className="px-4">
          <ButtonWhatsApp consultUrl={packageData.consult_url} />
        </div> */}
      </SectionContent>
    </Section>
  );
};

export default HeaderSection;
