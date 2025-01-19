import GoUmrahTopAccent from "/public/assets/patterns/goumrah-primary-top-right.svg";
import GoUmrahBottomAccent from "/public/assets/patterns/goumrah-primary-bottom-left.svg";

import {
  ChevronRightIcon,
  CircleCheckBigIcon,
  InfoIcon,
  XIcon,
} from "lucide-react";
import {
  Section,
  SectionContent,
  SectionHeader,
  SectionTitle,
} from "@/components/layout/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion/accordion";
import { TermsConditionList } from "../syarat-ketentuan/list-of-content";
import Link from "next/link";

const ProductCoverageSection = () => {
  return (
    <Section className="px-4 pb-5 pt-0">
      <SectionHeader className="mb-3 px-0">
        <SectionTitle className="leading-6 tracking-wide">
          Perjalanan Nyaman, Semua Transparan
        </SectionTitle>
      </SectionHeader>

      <SectionContent className="border-subtle relative rounded-[14px] border bg-primary-background bg-[url('/assets/patterns/wave-line-white.svg')]">
        <GoUmrahTopAccent className="absolute right-0" />

        <div className="flex flex-col gap-2 p-4">
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
            <li>Asuransi Perjalanan</li>
            <li>Pendampingan oleh tour leader</li>
          </ul>
        </div>

        <div className="mx-4 space-y-1 rounded-[10px] border border-primary px-4 py-2">
          <div className="flex gap-1">
            <InfoIcon className="h-5 w-5 stroke-primary" />
            <span className="text-sm font-semibold leading-5 text-primary">
              Biaya Perlengkapan
            </span>
          </div>

          <p className="text-xs leading-4 tracking-wide text-neutral-foreground">
            Biaya perlengkapan sebesar Rp 1.000.000 untuk setiap jamaah
          </p>
        </div>

        <div className="flex flex-col gap-2 p-4">
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

        <GoUmrahBottomAccent className="absolute bottom-0" />
      </SectionContent>

      <Accordion
        type="single"
        collapsible
        className="border-subtle mt-2 w-full items-center rounded-[14px] rounded-b-xl border bg-white shadow-custom-sm"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger
            className="flex justify-between px-4 py-3 text-sm font-medium leading-[21px] text-primary-foreground"
            variant="primary"
          >
            <span className="text-sm font-semibold leading-5">
              Pahami sebelum kamu berangkat
            </span>
          </AccordionTrigger>

          <AccordionContent className="px-4">
            <div className="mt-2 flex flex-col gap-4">
              {TermsConditionList.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={`/syarat-ketentuan${item.link}`}
                    target="_blank"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs leading-4 tracking-wide">
                        {item.title}
                      </span>
                      <ChevronRightIcon className="h-4 w-4 stroke-primary" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Section>
  );
};

export default ProductCoverageSection;
