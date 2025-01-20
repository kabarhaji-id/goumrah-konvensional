import { Section, SectionContent, SectionHeader } from "@/components/layout/section"

const SecuritySection = () => {
    return (
        <Section
            id="keamanan"
            className="pt-10 pb-5 px-4"
        >
            <SectionHeader className="px-0">
                <span className="text-neutral-foreground text-lg font-bold tracking-wide leading-6">
                    KEAMANAN
                </span>
            </SectionHeader>

            <SectionContent>
                <div className="mt-4 space-y-3 text-neutral-foreground text-sm leading-6">
                    <p>
                        Pada saat Anda membuat pemesanan atau mengakses informasi Akun Anda, Anda akan
                        menggunakan akses Secure Server Layer (SSL) yang akan mengenkripsi informasi yang Anda
                        kirimkan melalui Website ini.
                    </p>
                    <p>
                        Walaupun GoUmrah akan menggunakan upaya terbaik untuk memastikan keamanannya, GoUmrah
                        tidak bisa menjamin seberapa kuat atau efektifnya enkripsi ini dan GoUmrah tidak bertanggung jawab
                        atas masalah yang terjadi akibat pengaksesan tanpa izin dari informasi yang Anda sediakan.
                    </p>
                    <p>
                        Anda wajib memastikan bahwa perangkat atau device yang digunakan untuk login menggunakan
                        akun GoUmrah Anda berada di bawah penguasaan Anda. Untuk itu, Anda membebaskan Kami dari
                        segala kerugian yang timbul dan mungkin timbul akibat kelalaian Anda sehubungan dengan
                        perangkat atau device yang Anda gunakan.
                    </p>
                    <p>
                        Anda menyadari bahwa kerahasiaan akun GoUmrah Anda merupakan tanggung jawab Anda
                        sepenuhnya. Untuk itu, Kami menyarankan Anda untuk mengganti secara berkala password yang
                        Anda gunakan untuk akun GoUmrah Anda.
                    </p>
                </div>
            </SectionContent>
        </Section>
    )
}

export default SecuritySection;