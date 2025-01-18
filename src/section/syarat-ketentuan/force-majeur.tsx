import { Section, SectionContent, SectionHeader } from "@/components/layout/section"

const ForceMajeurSection = () => {
    return (
        <Section
            id="force-majeur"
            className="pt-10 pb-5 px-4"
        >
            <SectionHeader className="px-0">
                <span className="text-neutral-foreground text-lg font-bold tracking-wide leading-6">
                    FORCE MAJEUR
                </span>
            </SectionHeader>

            <SectionContent>
                <div className="mt-4 space-y-3 text-neutral-foreground text-sm leading-6">
                    <p>
                        Kami tidak bertanggung jawab atas kegagalan atau keterlambatan dalam memberikan layanan yang
                        disebabkan oleh kejadian di luar kendali kami (force majeure), termasuk namun tidak terbatas pada:
                        bencana alam, kebakaran, banjir, gempa bumi, cuaca ekstrem, tindakan pemerintah, kerusuhan,
                        perang, tindakan terorisme, gangguan sistem teknologi, pandemi, atau kejadian lainnya yang berada
                        di luar kekuasaan dan kontrol kami.
                    </p>
                    <p>
                        Dalam situasi force majeure, segala kerugian, biaya tambahan, atau perubahan jadwal yang timbul
                        sepenuhnya menjadi tanggung jawab jamaah. Kami tidak akan memberikan pengembalian dana atau
                        kompensasi dalam bentuk apapun atas kejadian-kejadian tersebut.
                    </p>
                    <p>
                        Anda memahami dan menyetujui bahwa dalam kondisi force majeure, Kami lepas tangan dari segala
                        bentuk tanggung jawab dan kewajiban yang mungkin timbul.
                    </p>
                </div>
            </SectionContent>
        </Section>
    )
}

export default ForceMajeurSection;