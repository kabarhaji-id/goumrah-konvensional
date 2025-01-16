import { Section, SectionContent, SectionHeader } from "@/components/layout/section"

const GeneralSection = () => {
    return (
        <Section
            id="umum"
            className="pt-10 pb-5 px-4"
        >
            <SectionHeader className="px-0">
                <span className="text-neutral-foreground text-lg font-bold tracking-wide leading-6">
                    UMUM
                </span>
            </SectionHeader>

            <SectionContent>
                <ol className="pl-4 space-y-1 list-decimal text-neutral-foreground text-sm leading-6">
                    <li>
                        Dengan mengakses dan menggunakan Website dan Layanan Kami, Anda menyatakan telah membaca, memahami, dan menyetujui Syarat dan Ketentuan Penggunaan GoUmrah ini. Jika Anda tidak dapat menyetujui Syarat dan Ketentuan Penggunaan GoUmrah ini, baik secara keseluruhan ataupun sebagian, Anda tidak diperbolehkan untuk mengakses Website ini ataupun menggunakan Layanan yang Kami sediakan.

                    </li>
                    <li>
                        Syarat dan Ketentuan Penggunaan GoUmrah ini terdiri atas (i) syarat dan ketentuan umum
                        yang berlaku untuk setiap akses dan Layanan yang tersedia pada Website, dan (ii) syarat
                        dan ketentuan khusus yang mengatur lebih lanjut penggunaan produk atau Layanan tertentu.
                        Dalam hal terdapat perbedaan atau pertentangan antara syarat dan ketentuan umum dan
                        syarat dan ketentuan khusus, maka yang berlaku adalah syarat dan ketentuan khusus.
                    </li>
                    <li>
                        Kami berhak untuk mengubah, memodifikasi, menambah, menghapus, atau mengoreksi
                        (&quot;perubahan&quot;) Syarat dan Ketentuan Penggunaan ini setiap saat dan perubahan tersebut
                        akan berlaku sejak saat diumumkan atau pada waktu lain yang ditetapkan oleh Kami. Kami
                        menganjurkan Anda untuk mengunjungi Website Kami secara berkala agar dapat mengetahui
                        adanya perubahan tersebut.
                    </li>
                    <li>
                        Jika terdapat kesalahan informasi yang tercantum dalam Website, Anda menyetujui bahwa
                        Kami, dengan kebijaksanaan penuh, dapat melakukan tindakan berikut dengan atau tanpa
                        pemberitahuan sebelumnya kepada Anda:
                        <ul className="pl-10 list-disc">
                            <li>
                                Menyesuaikan atau mengoreksi kesalahan informasi tersebut;
                            </li>
                            <li>
                                Mengubah, menunda, atau membatalkan sebagian atau seluruh transaksi yang telah Anda lakukan sehubungan dengan informasi yang ditampilkan dalam Website;
                                dan/atau
                            </li>
                            <li>
                                Melakukan tindakan lain yang dianggap perlu oleh Kami.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Syarat dan Ketentuan ini dapat diperbarui, ditambahkan, atau dikurangi sesuai dengan perkembangan Website dan peraturan perundang-undangan dari waktu ke waktu. Syarat dan Ketentuan ini berlaku menggantikan semua versi sebelumnya sejak pertama kali Website ini
                        beroperasi.
                    </li>
                </ol>
            </SectionContent>
        </Section>
    )
}

export default GeneralSection;