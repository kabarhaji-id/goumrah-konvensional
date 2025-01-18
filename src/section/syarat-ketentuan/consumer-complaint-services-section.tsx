import { Section, SectionContent, SectionHeader } from "@/components/layout/section"

const ConsumerComplaintServicesSection = () => {
    return (
        <Section
            id="umum"
            className="pt-10 pb-40 px-4"
        >
            <SectionHeader className="px-0">
                <span className="text-neutral-foreground text-lg font-bold tracking-wide leading-6">
                    LAYANAN PENGADUAN KONSUMEN
                </span>
            </SectionHeader>

            <SectionContent>
                <div className="mt-4 space-y-3 text-neutral-foreground text-sm leading-6">
                    <p>
                        Jika Anda memiliki keluhan atau terkait dengan Situs ini maka Anda dapat menghubungi
                        nomor berikut ini:
                    </p>
                    <p>
                        Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga, Kementerian Perdagangan Republik
                        Indonesia
                    </p>
                    <p>
                        WhatsApp No: +62xxx - xxxx - xxxx
                    </p>
                </div>
            </SectionContent>
        </Section>
    )
}

export default ConsumerComplaintServicesSection;