import { Section, SectionContent, SectionHeader } from "@/components/layout/section"

const CompensationSection = () => {
    return (
        <Section
            id="ganti-rugi"
            className="pt-10 pb-5 px-4"
        >
            <SectionHeader className="px-0">
                <span className="text-neutral-foreground text-lg font-bold tracking-wide leading-6">
                    GANTI RUGI
                </span>
            </SectionHeader>

            <SectionContent>
                <div className="mt-4 space-y-2 text-neutral-foreground text-sm leading-6">
                    <p>
                        Anda dengan ini setuju untuk mengganti kerugian dan tidak menyalahkan GoUmrah serta
                        karyawannya, afiliasi, staf, dan mitra, dari dan terhadap setiap dan semua klaim, tuntutan, kewajiban,
                        kerusakan, atau kerugian termasuk biaya hukum, yang timbul sebagai akibat dari klaim pihak ketiga
                        sehubungan dengan:
                    </p>
                    <ol className="pl-4 space-y-1 list-[lowerr-roman] text-neutral-foreground text-sm leading-6">
                        <li>
                            Penggunaan Anda terhadap Situs;
                        </li>
                        <li>
                            Konten yang diberikan, disediakan, atau diakses melalui Situs ini;
                        </li>
                        <li>
                            Pelanggaran Anda terhadap Syarat dan Ketentuan ini;
                        </li>
                        <li>
                            Pelanggaran hak atau kewajiban lainnya; dan/atau
                        </li>
                        <li>
                            Setiap tindakan atau kelalaian oleh Anda, baik lalai, melanggar hukum, atau lainnya.
                        </li>
                    </ol>
                </div>
            </SectionContent>
        </Section>
    )
}

export default CompensationSection;