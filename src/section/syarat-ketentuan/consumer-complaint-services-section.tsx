import {
  Section,
  SectionContent,
  SectionHeader,
} from "@/components/layout/section";

const ConsumerComplaintServicesSection = () => {
  return (
    <Section id="umum" className="px-4 pb-40 pt-10">
      <SectionHeader className="px-0">
        <span className="text-lg font-bold leading-6 tracking-wide text-neutral-foreground">
          LAYANAN PENGADUAN KONSUMEN
        </span>
      </SectionHeader>

      <SectionContent>
        <div className="mt-4 space-y-3 text-sm leading-6 text-neutral-foreground">
          <p>
            Jika Anda memiliki keluhan atau terkait dengan Situs ini maka Anda
            dapat menghubungi nomor berikut ini:
          </p>
          <p>
            Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga,
            Kementerian Perdagangan Republik Indonesia
          </p>
          <p>WhatsApp No: +62-021-3858171</p>
        </div>
      </SectionContent>
    </Section>
  );
};

export default ConsumerComplaintServicesSection;
