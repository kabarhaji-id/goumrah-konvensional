import { Section, SectionContent, SectionHeader } from "@/components/layout/section"

const ProductPrice = () => {
    return (
        <Section
            id="harga-produk"
            className="pt-10 pb-5 px-4"
        >
            <SectionHeader className="px-0">
                <span className="text-neutral-foreground text-lg font-bold tracking-wide leading-6">
                    HARGA PRODUK
                </span>
            </SectionHeader>

            <SectionContent>
                <div className="mt-4 space-y-3 text-neutral-foreground text-sm leading-6">
                    <p>
                        Kami selalu berupaya untuk menyediakan harga terbaik bagi Produk yang dapat Anda pesan. Harga
                        yang tertera mungkin memiliki syarat dan ketentuan khusus, sehingga Anda perlu memeriksa dan
                        memahami syarat serta ketentuan khusus yang berlaku terhadap harga atau tarif tertentu sebelum
                        melakukan pemesanan. Anda juga perlu memeriksa dan memahami ketentuan mengenai pembatalan
                        dan pengembalian dana yang secara khusus berlaku untuk Produk dan/atau harga tertentu.
                    </p>
                    <p>
                        Harga yang tercantum belum termasuk pajak, pungutan, biaya, dan ongkos lainnya yang akan kami
                        uraikan secara tegas di Website atau Surat Konfirmasi dari Kami. Terkadang harga yang kami peroleh
                        dari Mitra kami dalam mata uang negara lain, dan kami berupaya mengonversi harga tersebut ke
                        dalam mata uang Rupiah dengan kurs konversi terbaik yang dapat kami peroleh.
                    </p>
                    <p>
                        Untuk produk-produk tertentu, kami juga memberikan jaminan harga terbaik bagi Anda. Harap Anda
                        mempelajari kebijakan kami terkait jaminan harga terbaik ini. Jika Anda menemukan harga yang lebih
                        rendah di layanan online lain di internet, harap informasikan kepada kami melalui email
                        ([cs@GoUmrah.com]) dan kami akan berupaya menyamakan harga/tarif kami dengan harga/tarif lebih
                        rendah yang Anda temukan.
                    </p>
                    <p>
                        Harga produk di GoUmrah sangat erat kaitannya dengan kurs dollar. Jika kurs dollar mengalami
                        perubahan yang signifikan, maka syarat dan ketentuan terkait harga akan diperbarui dan disesuaikan.
                    </p>
                    <p>
                        GoUmrah berhak untuk mengubah harga suatu produk setiap saat tanpa pemberitahuan sebelumnya.
                        Namun, produk yang sudah dibeli oleh Anda dan untuk produk mana Anda sudah menerima Surat
                        Konfirmasi tidak akan mengalami perubahan harga.
                    </p>
                </div>
            </SectionContent>
        </Section>
    )
}

export default ProductPrice;