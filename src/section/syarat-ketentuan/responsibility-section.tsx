import {
  Section,
  SectionContent,
  SectionHeader,
} from "@/components/layout/section";

const ResponsibilitySection = () => {
  return (
    <Section id="tanggung-jawab" className="px-4 pb-5 pt-10">
      <SectionHeader className="px-0">
        <span className="text-lg font-bold leading-6 tracking-wide text-neutral-foreground">
          TANGGUNG JAWAB
        </span>
      </SectionHeader>

            <SectionContent>
                <div className="mt-4 space-y-2 text-neutral-foreground text-sm leading-6">
                    <p>
                        PT. Kabar Haji Indonesia tidak bertanggung jawab atas kejadian-kejadian berikut:
                    </p>
                    <ul className="pl-10 space-y-1 list-disc text-neutral-foreground text-sm leading-6">
                        <li>
                            Kecelakaan, kehilangan koper, dan keterlambatan tibanya koper akibat tindakan pihak
                            maskapai penerbangan, hotel, dan alat pengangkutan lainnya.
                        </li>
                        <li>
                            Bilamana kehilangan koper terjadi bukan akibat tindakan pihak-pihak tersebut di atas, maka
                            standar penggantian didasarkan pada ketentuan maskapai penerbangan yang digunakan dan
                            berdasarkan peraturan asuransi perjalanan.
                        </li>
                        <li>
                            Kehilangan barang, penahanan, titipan barang (bonded baggages) di bandara maupun di
                            hotel.
                        </li>
                        <li>
                            Biaya terkait karantina, pemogokan, force majeure, badai, banjir, kerusuhan, dan bencana
                            alam lainnya
                        </li>
                        <li>
                            Sebab-sebab lain yang berada di luar kemampuan GoUmrah.
                        </li>
                    </ul>
                </div>

                <div className="mt-4 space-y-3 text-neutral-foreground text-sm leading-6">
                    <p>
                        Dalam keadaan force majeure / terpaksa / tidak teratasi karena bencana alam, kerusuhan, suasana
                        mencekam, dan lain-lain, GoUmrah berhak tanpa pemberitahuan terlebih dahulu mengubah rencana
                        perjalanan, baik susunan maupun jadwalnya. Perubahan tersebut dilakukan demi kepentingan dan
                        keamanan jamaah serta kelancaran perjalanan. Dalam hal ini tidak ada pengembalian uang atas
                        layanan yang tidak digunakan.
                    </p>
                    <p>
                        Pemandu Perjalanan GoUmrah berhak meminta jamaah untuk keluar dari rombongan apabila jamaah
                        yang bersangkutan mencoba membuat kerusuhan / kekacauan terhadap rombongan atau dianggap
                        dapat merugikan negara-negara yang dikunjungi. Dalam hal demikian, jamaah tersebut harus
                        mengatur perjalanan selanjutnya sendiri dan tidak dapat menuntut kembali uangnya dalam bentuk
                        apapun atas layanan-layanan yang belum / tidak digunakan.
                    </p>
                    <p>
                        GoUmrah hanya bertindak sebagai agen / perantara dari sarana angkutan dan penyedia pelayanan
                        lainnya. Semua tiket yang dikeluarkan terikat pada peraturan setiap perusahaan angkutan dan semua
                        syarat serta kondisi yang berlaku adalah pada waktu sarana-sarana angkutan dan pelayanan itu
                        ditawarkan atau disediakan.
                    </p>
                    <p>
                        Pengeluaran dan penerimaan dari tiket-tiket tersebut akan dianggap sebagai persetujuan atau kondisi
                        lebih lanjut di mana GoUmrah tidak bertanggung jawab atau tidak dapat dituntut dalam segala hal
                        yang berhubungan dengan sarana angkutan atau sarana pelayanan lainnya. Segala langkah
                        kebijaksanaan dan keputusan yang diambil atau diputuskan oleh GoUmrah sebagai Penyelenggara
                        Perjalanan, merupakan keputusan mutlak dan tidak dapat diganggu gugat.
                    </p>
                </div>
            </SectionContent>
        </Section>
    )
}

export default ResponsibilitySection;