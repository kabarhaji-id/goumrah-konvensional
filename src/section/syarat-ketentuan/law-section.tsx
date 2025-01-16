import { Section, SectionContent, SectionHeader } from "@/components/layout/section"

const LawSection = () => {
    return (
        <Section
            id="hukum-yang-mengatur"
            className="pt-10 pb-5 px-4"
        >
            <SectionHeader className="px-0">
                <span className="text-neutral-foreground text-lg font-bold tracking-wide leading-6">
                    HUKUM YANG MENGATUR
                </span>
            </SectionHeader>

            <SectionContent>
                <div className="mt-4 space-y-3 text-neutral-foreground text-sm leading-6">
                    <p>
                        Ketentuan ini (dan setiap dan semua perselisihan yang timbul dari atau sehubungan
                        dengan Ketentuan ini (termasuk dugaan pelanggaran atau tantangan terhadap
                        keabsahan atau keberlakuan Ketentuan ini)) akan diatur oleh dan ditafsirkan hanya
                        sesuai dengan Hukum Republik Indonesia.
                    </p>
                </div>
            </SectionContent>
        </Section>
    )
}

export default LawSection;