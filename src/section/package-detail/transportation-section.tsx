import React from "react";

import CustomBusIcon from "@/public/icons/bx_bus.svg";

import {
  Section,
  SectionContent,
  SectionHeader,
  SectionTitle,
} from "@/components/layout/section";
import { BusDetail, PackageCategory } from "@/types/package-details";
import TransportationCard from "./section-component/transportation-card";

const TransportationSection = ({
  dataTransportation,
  category,
}: {
  dataTransportation: BusDetail;
  category: PackageCategory;
}) => {
  return (
    <Section className="pb-3 pt-1">
      <SectionHeader className="mb-2">
        <div className="flex items-center gap-2">
          <CustomBusIcon />
          <SectionTitle className="text-sm font-semibold leading-6 tracking-wide text-primary">
            Transportasi
          </SectionTitle>
        </div>
      </SectionHeader>

      <SectionContent className="mx-0 space-y-2 px-4">
        <TransportationCard data={dataTransportation} category={category} />
      </SectionContent>
    </Section>
  );
};

export default TransportationSection;
