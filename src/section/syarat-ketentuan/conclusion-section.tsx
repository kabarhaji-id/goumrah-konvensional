import { Section, SectionContent } from "@/components/layout/section"

const ConclusionSection = () => {
    return (
        <Section
            id="umum"
            className="pt-4 pb-5 px-4"
        >
            <SectionContent>
                <div className="mt-4 space-y-3 text-neutral-foreground text-sm leading-6">
                    <p>
                        Dengan melakukan pembayaran Deposit untuk mengikuti acara tour GoUmrah, semua jamaah
                        dianggap mengetahui dan menyetujui semua ketentuan dalam syarat dan kondisi ini tanpa ada
                        tekanan dari pihak manapun.
                    </p>
                </div>
            </SectionContent>
        </Section>
    )
}

export default ConclusionSection;