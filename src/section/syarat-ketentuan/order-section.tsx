import { Section, SectionContent, SectionHeader } from "@/components/layout/section"

const OrderSection = () => {
    return (
        <Section
            id="pemesanan-pembelian-produk-umrah"
            className="pt-10 pb-5 px-4"
        >
            <SectionHeader className="px-0">
                <span className="text-neutral-foreground text-lg font-bold tracking-wide leading-6">
                    PEMESANAN / PEMBELIAN PRODUK UMRAH
                </span>
            </SectionHeader>

            <SectionContent className="">
                <div className="mt-4 space-y-2 text-neutral-foreground text-sm leading-6">
                    <p>
                        Pemesanan / pembelian Produk Umrah dianggap berhasil atau selesai setelah Anda melakukan
                        pelunasan pembayaran dan GoUmrah menerbitkan serta mengirimkan Surat Konfirmasi pemesanan /
                        pembelian kepada Anda. Apabila terjadi perselisihan atau permasalahan, maka data yang terdapat
                        pada GoUmrah akan menjadi acuan utama dan dianggap sah.
                        Dengan menyelesaikan pemesanan / pembelian, Anda dianggap setuju untuk menerima:

                    </p>
                    <ul className="pl-10 space-y-1 list-disc text-neutral-foreground text-sm leading-6">
                        <li>
                            Email atau Whatsapp yang akan Kami kirim tidak lama sebelum tanggal keberangkatan yang
                            Anda pesan, memberikan informasi tentang Produk yang Anda beli, dan menyediakan
                            informasi serta penawaran tertentu yang terkait dengan pemesanan dan tujuan Anda.

                        </li>
                        <li>
                            Email atau Whatsapp yang akan Kami kirim tidak lama setelah tanggal keberangkatan untuk
                            mengundang Anda melengkapi formulir ulasan pengguna Produk Kami. Selain dari konfirmasi
                            email yang menyediakan konfirmasi pemesanan dan email-email yang telah Anda pilih
                            sendiri, Kami tidak akan mengirimi Anda pemberitahuan (yang diinginkan maupun yang
                            tidak), email, atau korespondensi lebih lanjut, kecuali jika diminta secara khusus oleh Anda.
                        </li>
                    </ul>
                </div>

                <div className="mt-4 text-neutral-foreground text-sm leading-6">
                    <span className="font-bold">
                        Catatan Pemesanan Paket:
                    </span>

                    <ul className="my-2 pl-10 space-y-1 list-disc text-neutral-foreground text-sm leading-6">
                        <li>
                            Untuk pemesanan paket triple (tiga orang per kamar), Anda wajib membeli untuk 3 Jamaah
                            dan kelipatannya.
                        </li>
                        <li>
                            Untuk pemesanan paket double (dua orang per kamar), Anda wajib membeli untuk 2 Jamaah
                            dan kelipatannya.
                        </li>
                    </ul>

                    <span>
                        Dengan ketentuan ini, pemesanan dapat dilakukan sesuai dengan jenis paket yang dipilih, dan
                        memastikan kenyamanan Anda selama perjalanan umrah.
                    </span>
                </div>



            </SectionContent>
        </Section>
    )
}

export default OrderSection;