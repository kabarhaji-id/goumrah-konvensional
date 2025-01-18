import { Section, SectionContent, SectionHeader } from "@/components/layout/section"

const RightsAndObligationSection = () => {
    return (
        <Section
            id="hak-dan-kewajiban"
            className="pt-10 pb-5 px-4"
        >
            <SectionHeader className="px-0">
                <span className="text-neutral-foreground text-lg font-bold tracking-wide leading-6">
                    HAK DAN KEWAJIBAN
                </span>
            </SectionHeader>

            <SectionContent>
                <div className="mt-4 space-y-2 text-neutral-foreground text-sm leading-6">
                    <p>
                        GoUmrah berhak, tanpa pemberitahuan terlebih dahulu, melakukan perubahan biaya dan Paket
                        Umrah bagi jamaah yang telah melunasi biaya namun belum berangkat, sesuai kebijakan pihak
                        terkait, yaitu:
                    </p>
                    <ol className="pl-4 space-y-1 list-decimal text-neutral-foreground text-sm leading-6">
                        <li>
                            Harga Visa ditentukan oleh Kedutaan Kerajaan Saudi Arabia dan Kedutaan Negara tertentu
                            untuk Visa Umrah.
                        </li>
                        <li>
                            Ketersediaan seat pesawat dan harga tiket pesawat ditentukan oleh maskapai penerbangan.
                        </li>
                        <li>
                            Perubahan hotel dan harga hotel dari pihak hotel/agen.
                        </li>
                        <li>
                            Bagi Jamaah yang sudah menentukan kamar, apabila kamar tidak tersedia, maka akan
                            dipindahkan ke kamar yang setaraf.
                        </li>
                        <li>
                            Apabila hotel yang telah ditetapkan dalam paket ternyata penuh, maka GoUmrah berhak
                            mengganti dengan hotel lain yang setaraf sesuai dengan pertimbangan dan konfirmasinya.
                        </li>
                        <li>
                            Jamaah mengerti bahwa tidak tersedia kamar jenis triple dan quad untuk di beberapa negara
                            tertentu.
                        </li>
                    </ol>
                </div>

                <div className="mt-4 space-y-3 text-neutral-foreground text-sm leading-6">
                    <p>
                        Perubahan, perpanjangan, penambahan, atau penyimpangan rute perjalanan di luar acara atau masa
                        tour harus diminta pada saat pendaftaran atau selambat-lambatnya 1 bulan sebelum keberangkatan.
                        Konfirmasi perubahan akan diberitahukan kepada jamaah setelah mendapatkan konfirmasi dari
                        maskapai penerbangan dan hotel. Biaya perubahan dan biaya tambahan yang terkait akan menjadi
                        tanggung jawab jamaah.
                    </p>
                    <p>
                        Bagi jamaah yang tidak diizinkan masuk atau dikenakan tindakan deportasi oleh pihak imigrasi
                        negara setempat (meskipun telah memiliki visa), yang ditolak oleh perusahaan penerbangan, atau
                        dalam perjalanan mengalami sakit, kelainan jiwa, atau kecelakaan yang memaksa harus kembali atau
                        menyimpang dari perjalanan yang telah ditentukan, serta bagi mereka yang terpaksa membatalkan
                        sebagian atau hampir seluruh perjalanan setelah keberangkatan, tidak dapat menuntut pengembalian
                        uang atau bentuk pengembalian lain untuk layanan yang belum atau tidak digunakan.
                    </p>
                    <p>
                        Sehubungan dengan ketentuan keimigrasian bahwa jamaah yang hamil 6 bulan atau lebih tidak
                        diperkenankan untuk masuk ke suatu negara, jamaah yang hamil wajib melampirkan surat
                        keterangan dari dokter yang ditunjuk oleh perusahaan penerbangan. Selain itu, maskapai juga dapat
                        meminta surat dokter pada tanggal keberangkatan, sehingga tes kesehatan bagi wanita hamil harus
                        dilakukan pada hari yang sama atau sesuai kebijakan maskapai.
                    </p>
                    <p>
                        Jika jamaah telah melakukan pembayaran pendaftaran atas paket umrah yang dipilih, jamaah berhak
                        mendapatkan perlengkapan umrah.
                    </p>
                </div>

                <div className="mt-4 space-y-2 text-neutral-foreground text-sm leading-6">
                    <p>
                        Jika jamaah telah melunasi paket umrah sesuai dengan yang dipilih, jamaah berhak mendapatkan:
                    </p>
                    <ol className="pl-4 space-y-1 list-[lowerr-roman] text-neutral-foreground text-sm leading-6">
                        <li>
                            Tiket pesawat PP
                        </li>
                        <li>
                            Akomodasi penginapan hotel dan transportasi sesuai dengan paket yang dipilih.
                        </li>
                        <li>
                            Visa Umrah.
                        </li>
                        <li>
                            Tour Leader dan Mutawif selama pelaksanaan ibadah umrah.
                        </li>
                        <li>
                            Air Zam Zam 5 liter (akan didapatkan saat kepulangan di Indonesia).
                        </li>
                        <li>
                            Perlengkapan Umrah
                        </li>
                    </ol>
                </div>
            </SectionContent>
        </Section>
    )
}

export default RightsAndObligationSection;