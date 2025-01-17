import { Section, SectionContent, SectionHeader } from "@/components/layout/section"

const ProhibitionSection = () => {
    return (
        <Section
            id="larangan"
            className="pt-10 pb-5 px-4"
        >
            <SectionHeader className="px-0">
                <span className="text-neutral-foreground text-lg font-bold tracking-wide leading-6">
                    LARANGAN
                </span>
            </SectionHeader>

            <SectionContent>
                <div className="mt-4 text-neutral-foreground text-sm leading-6">
                    <p>
                        Jamaah dilarang keras membawa barang-barang yang dilarang seperti:
                    </p>

                    <ul className="pl-10 space-y-0 list-disc text-neutral-foreground text-sm leading-6">
                        <li>
                            Narkotika dan psikotropika
                        </li>
                        <li>
                            Senjata api
                        </li>
                        <li>
                            Barang-barang terlarang lainnya
                        </li>
                    </ul>

                    <div className="mt-4 space-y-3 text-neutral-foreground text-sm leading-6">
                        <p>
                            <span className="font-bold">
                                LARANGAN OVERSTAY
                            </span>
                            <br />
                            Jamaah dilarang keras melakukan overstay. Pihak jamaah bersedia menanggung segala pembayaran
                            atau sanksi yang berkaitan dengan kebijakan pemerintah Arab Saudi mengenai kelebihan izin tinggal.
                            Kami sepenuhnya lepas tangan dan tidak bertanggung jawab atas segala konsekuensi yang timbul
                            akibat pelanggaran ini.
                        </p>
                    </div>
                </div>
            </SectionContent>
        </Section>
    )
}

export default ProhibitionSection;