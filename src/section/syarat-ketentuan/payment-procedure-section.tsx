import { Section, SectionContent, SectionHeader } from "@/components/layout/section"

const PaymentProcedureSection = () => {
    return (
        <Section
            id="detail-prosedur-pembayaran"
            className="pt-10 pb-5 px-4"
        >
            <SectionHeader className="px-0">
                <span className="text-neutral-foreground text-lg font-bold tracking-wide leading-6">
                    DETAIL DAN PROSEDUR PEMBAYARAN
                </span>
            </SectionHeader>

            <SectionContent>
                <div className="mt-4 space-y-3 text-neutral-foreground text-sm leading-6">
                    <p>
                        Pelunasan atas harga pembelian merupakan syarat untuk melakukan pembelian. Kami menerima
                        pembayaran dengan sistem pembayaran menggunakan Virtual Account Bank Mandiri, BSI, BRI, dan
                        BNI, serta metode pembayaran lainnya yang tercantum di Website Kami.
                    </p>
                    <p>
                        Untuk melindungi dan mengenkripsi informasi pembayaran Anda, Kami menggunakan teknologi
                        &quot;Secure Socket Layer (SSL)&quot;.
                    </p>
                    <p>
                        Jika terjadi kasus penipuan atau penyalahgunaan sistem pembayaran oleh pihak ketiga, segera
                        laporkan kejadian tersebut kepada Kami dan bank terkait untuk penanganan lebih lanjut sesuai
                        prosedur dan aturan yang berlaku.
                    </p>
                </div>

                <div className="mt-4 space-y-2 text-neutral-foreground text-sm leading-6">
                    <p>
                        Anda wajib memperhatikan secara teliti instruksi pembayaran yang Kami berikan. Kekeliruan
                        pembayaran yang Anda lakukan, seperti:
                    </p>
                    <ol className="pl-4 space-y-1 list-decimal text-neutral-foreground text-sm leading-6">
                        <li>
                            Pengisian nomor rekening atau nomor Virtual Account yang salah untuk setiap pemesanan
                            yang Anda lakukan; dan/atau
                        </li>
                        <li>
                            Kesalahan dalam nominal pembayaran atas pemesanan Anda, yang mengakibatkan dana
                            Anda berpindah ke rekening atau Virtual Account yang tidak sesuai dengan instruksi
                            pembayaran yang Kami berikan atau terdebetnya rekening bank Anda sejumlah nilai nominal
                            yang tidak sesuai dengan instruksi pembayaran yang Kami berikan, sehingga mengakibatkan
                            tidak terkonfirmasinya pesanan Anda.
                        </li>
                    </ol>
                </div>

                <div className="mt-4 space-y-2 text-neutral-foreground text-sm leading-6">
                    <p>
                        Dalam kasus ini, Anda menyetujui bahwa Kami tidak memiliki kewajiban untuk melakukan
                        pengembalian dana kepada Anda akibat dari kekeliruan atau kelalaian yang Anda lakukan sendiri
                        dengan tidak mengikuti instruksi pembayaran yang telah Kami berikan. Oleh karena itu, kerugian
                        tersebut menjadi risiko dan tanggung jawab Anda sepenuhnya. Selain itu, kekeliruan pembayaran
                        sebagaimana disebutkan di atas tidak dapat dianggap sebagai pembayaran yang sah atas pesanan
                        Anda, sehingga Anda harus melakukan pembayaran sesuai dengan instruksi pembayaran yang telah
                        Kami berikan untuk mendapatkan konfirmasi terhadap pesanan yang Anda lakukan.
                    </p>

                    <p>
                        Kami menyediakan fleksibilitas dalam metode pembayaran dengan pilihan sebagai berikut:
                    </p>

                    <ol className="pl-4 space-y-1 list-decimal text-neutral-foreground text-sm leading-6">
                        <li>
                            Pembayaran dalam dua tahap, yaitu pembayaran uang muka (DP) dan pelunasan
                        </li>
                        <li>
                            Pembayaran bertahap dengan metode TopUp, yang memungkinkan pembayaran dilakukan
                            dalam 3 hingga 10 kali transaksi, dengan minimal TopUp per transaksi sebesar Rp 500.000,
                            dan seluruh pembayaran harus dilunasi 60 hari sebelum waktu keberangkatan.

                        </li>
                    </ol>

                    <p>
                        Atas setiap pemesanan yang dapat Kami konfirmasi, Kami akan mengirimkan Surat Konfirmasi via
                        email atau Whatsapp yang berisi uraian produk dan pemesanan yang Anda buat serta konfirmasi
                        pembayaran. Anda bertanggung jawab untuk mencetak dan menjaga informasi yang tertera pada
                        Surat Konfirmasi tersebut. Surat Konfirmasi ini merupakan dokumen yang sangat penting dan Anda
                        wajib membawa cetakan dari Surat Konfirmasi ini pada saat Anda akan menggunakan atau
                        mengambil Produk yang Anda beli. Kami atau Mitra Kami berhak untuk menolak memberikan Produk
                        atau pelayanan jika Anda tidak dapat membuktikan bahwa Anda telah secara sah melakukan
                        pemesanan dan pelunasan, dan Anda membebaskan GoUmrah dari segala tanggung jawab dan
                        kerugian dalam bentuk apapun.
                    </p>
                </div>
            </SectionContent>
        </Section>
    )
}

export default PaymentProcedureSection;