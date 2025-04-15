import GoUmrahTopAccent from "/public/assets/patterns/goumrah-primary-top-right.svg";
import GoUmrahBottomAccent from "/public/assets/patterns/goumrah-primary-bottom-left.svg";

import { CircleCheckBigIcon, InfoIcon, XIcon } from "lucide-react";
import { Section, SectionContent, SectionHeader, SectionTitle } from "@/components/layout/section";
import AccordionTermsCondition from "./section-component/accordion-terms-condition";

const ProductCoverageSection = ({
  dataImportantNotes,
}: {
  dataImportantNotes?: string[];
}) => {
  return (
    <Section className="px-4 pb-4 pt-0">
      <SectionHeader className="mb-3 px-0">
        <SectionTitle className="leading-6 tracking-wide text-primary">
          Perjalanan Nyaman, Semua Transparan
        </SectionTitle>
      </SectionHeader>

      <SectionContent className="relative rounded-[14px] border border-subtle bg-primary-background bg-[url('/assets/patterns/wave-line-white.svg')] pb-4">
        <GoUmrahTopAccent className="absolute right-0" />

        <div className="flex flex-col gap-2 px-4 pb-3 pt-4">
          <div className="flex gap-2 pl-1">
            <CircleCheckBigIcon className="h-5 w-5 stroke-primary" />
            <span className="text-sm font-semibold text-primary">
              Yang termasuk dalam paket kamu
            </span>
          </div>
          <ul className="ml-6 flex list-disc flex-col gap-1 text-xs leading-[18px] tracking-wide text-primary-foreground">
            <li>Tiket pulang-pergi</li>
            <li>Pengurusan visa umrah</li>
            <li>Makan 3x sehari</li>
            <li>Bimbingan Muthawwif</li>
            <li>Handling dan Dokumen Perjalanan</li>
            <li>Zamzam 5 Liter</li>
            <li>Asuransi Perjalanan</li>
            <li>Pendampingan oleh tour leader</li>
          </ul>
        </div>

        <div className="flex flex-col gap-2 px-4 pb-4 pt-3">
          <div className="flex gap-2 pl-1">
            <XIcon className="h-5 w-5 stroke-primary" />
            <span className="text-sm font-semibold text-primary">
              Yang belum termasuk dalam paket kamu
            </span>
          </div>
          <ul className="ml-6 flex list-disc flex-col gap-1 text-xs leading-[18px] tracking-wide text-primary-foreground">
            <li>Biaya pembuatan atau perpanjangan paspor</li>
            <li>Vaksin meningitis</li>
            <li>Belanja oleh-oleh, suvenir, atau kebutuhan pribadi lainnya</li>
            <li>Biaya Kelebihan Bagasi</li>
            <li>Trip tambahan di luar itinerary</li>
            <li>Biaya perjalanan dari rumah ke bandara</li>
          </ul>
        </div>

        <div className="mx-4 space-y-1 rounded-[10px] border border-primary px-4 py-2">
          <div className="flex gap-1">
            <InfoIcon className="h-5 w-5 stroke-primary" />
            <span className="text-sm font-semibold leading-5 text-primary">
              Biaya Lainnya
            </span>
          </div>

          <p className="flex flex-col text-xs leading-5 tracking-wide text-neutral-foreground xsm:flex-row xsm:gap-1">
            <span>Biaya perlengkapan dan handling airport</span>
            <span>sebesar +Rp 500.000 untuk setiap jamaah</span>
          </p>
        </div>

        <GoUmrahBottomAccent className="absolute bottom-0" />
      </SectionContent>

      {dataImportantNotes && dataImportantNotes?.length > 0 && (
        <ImportantNotes dataImportantNotes={dataImportantNotes} />
      )}

      <AccordionTermsCondition />
    </Section>
  );
};

const ImportantNotes = ({
  dataImportantNotes,
}: {
  dataImportantNotes: string[];
}) => {
  return (
    <div className="mt-2 rounded-[14px] border border-primary p-4">
      <h5 className="text-sm font-semibold">Hal yang perlu kamu ketahui</h5>

      <div className="ml-4 mt-2">
        <ul className="flex list-decimal flex-col gap-1 text-xs leading-[18px] tracking-wide text-primary-foreground">
          {dataImportantNotes.map((data, index) => {
            return <li key={index}>{data}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProductCoverageSection;
