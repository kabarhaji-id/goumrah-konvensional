import { Section, SectionContent, SectionHeader } from "@/components/layout/section"

const AgentTerms = () => {
    return (
        <Section
            id="ketentuan-keagenan-referral"
            className="pt-10 pb-5 px-4"
        >
            <SectionHeader className="px-0">
                <span className="text-neutral-foreground text-lg font-bold tracking-wide leading-6">
                    KETENTUAN KEAGENAN
                </span>
            </SectionHeader>

            <SectionContent>
                <div className="mt-4 space-y-3 text-neutral-foreground text-sm leading-6">
                    <p>
                        Dengan mendaftar sebagai agen, Anda setuju untuk mematuhi seluruh ketentuan yang berlaku,
                        termasuk penggunaan kode referral secara etis dan legal, menerima komisi hanya atas transaksi
                        yang sah dan memenuhi syarat, serta memahami bahwa pelanggaran atau penyalahgunaan dapat
                        mengakibatkan pemutusan keagenan tanpa pemberitahuan. Komisi diberikan berdasarkan kebijakan
                        perusahaan, dengan pencairan sesuai jadwal dan metode yang telah ditentukan. Perusahaan berhak
                        mengubah ketentuan ini sewaktu-waktu, dan Anda dianggap setuju dengan perubahan yang ada jika
                        tetap melanjutkan keagenan.
                    </p>
                    <p>
                        Ketentuan berikutnya, akan diatur dalam Perjanjian Keagenan yang akan diberikan kepada Agen
                    </p>
                </div>
            </SectionContent>
        </Section>
    )
}

export default AgentTerms;