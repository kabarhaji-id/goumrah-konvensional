import { Section, SectionContent, SectionHeader } from "@/components/layout/section"

const DataUsagePolicySection = () => {
    return (
        <Section
            id="kebijakan-penggunaan-data"
            className="pt-10 pb-5 px-4"
        >
            <SectionHeader className="px-0">
                <span className="text-neutral-foreground text-lg font-bold tracking-wide leading-6">
                    KEBIJAKAN PENGGUNAAN DATA
                </span>
            </SectionHeader>

            <SectionContent>
                <div className="mt-4 space-y-3 text-neutral-foreground text-sm leading-6">
                    <p>
                        Kami menganggap privasi Anda sebagai hal yang penting. Pada saat Anda membuat pemesanan di
                        GoUmrah, Kami akan mencatat dan menyimpan informasi serta data pribadi Anda. Pada prinsipnya,
                        data Anda akan Kami gunakan untuk menyediakan Produk dan memberi Layanan kepada Anda.
                        Kami akan menyimpan setiap data yang Anda berikan dari waktu ke waktu, atau yang Kami
                        kumpulkan dari penggunaan Produk dan Layanan Kami. Data pribadi Anda yang ada pada Kami
                        dapat Kami gunakan untuk keperluan akuntansi, tagihan, audit, verifikasi kredit atau pembayaran,
                        serta keperluan keamanan, administrasi dan legal, poin reward atau bentuk sejenisnya, pengujian,
                        pemeliharaan, dan pengembangan sistem, hubungan pelanggan, promosi, dan membantu Kami di
                        kemudian hari dalam memberi pelayanan kepada Anda.
                    </p>
                    <p>
                        Sehubungan dengan itu, Kami dapat mengungkapkan data Anda kepada grup perusahaan di mana
                        GoUmrah tergabung, Mitra penyedia Produk, perusahaan lain yang merupakan rekanan dari
                        GoUmrah, perusahaan pemroses data yang terikat kontrak dengan Kami, agen perjalanan, badan
                        pemerintah, dan badan peradilan yang berwenang di yurisdiksi manapun.
                    </p>
                </div>
            </SectionContent>
        </Section>
    )
}

export default DataUsagePolicySection;