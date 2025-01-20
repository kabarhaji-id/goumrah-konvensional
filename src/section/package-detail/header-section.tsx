import ButtonWhatsApp from "./section-component/button-whatsapp";

import { Section, SectionContent } from "@/components/layout/section";
import { Separator } from "@/components/ui/separator";
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
      <SectionContent className="space-y-4 px-4 py-4 text-primary-foreground">
        <HeaderComponent
          packageData={packageData}
          durationDays={durationDays}
        />

        {/* --- Button: Order This Package  */}
        <ButtonWhatsApp orderUrl={packageData.order_url} />
      </SectionContent>
    </Section>
  );
};

export default HeaderSection;
