import { Section, SectionContent, SectionHeader } from "@/components/layout/section"

const IntellectualPropertRightsSection = () => {
    return (
        <Section
            id="hak-kekayaan-intelektual"
            className="pt-10 pb-5 px-4"
        >
            <SectionHeader className="px-0">
                <span className="text-neutral-foreground text-lg font-bold tracking-wide leading-6">
                    HAK KEKAYAAN INTELEKTUAL
                </span>
            </SectionHeader>

            <SectionContent>
                <div className="mt-4 space-y-3 text-neutral-foreground text-sm leading-6">
                    <p>
                        GO UMRAH, KABAR UMRAH, GO HAJI, KABAR HAJI
                    </p>
                </div>
            </SectionContent>
        </Section>
    )
}

export default IntellectualPropertRightsSection;