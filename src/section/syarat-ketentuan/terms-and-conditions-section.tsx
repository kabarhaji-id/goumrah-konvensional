import {
  Section,
  SectionContent,
  SectionHeader,
} from "@/components/layout/section";

const TermsAndConditionSection = () => {
  return (
    <Section id="syarat-dan-ketentuan" className="px-4 pb-5 pt-10">
      <SectionHeader className="px-0">
        <span className="text-lg font-bold leading-6 tracking-wide text-neutral-foreground">
          SYARAT DAN KETENTUAN
        </span>
      </SectionHeader>

      <SectionContent>
        <ol className="list-decimal space-y-1 pl-4 text-sm leading-6 text-neutral-foreground">
          <li>
            Pendaftaran harus disertai pembayaran uang muka sebesar Rp 7.000.000
            / Jamaah untuk paket Umrah.
          </li>
          <li>
            Pelunasan pembayaran maksimal dilakukan 60 hari sebelum
            keberangkatan berlaku untuk semua paket.
          </li>
          <li>
            Pendaftaran yang dilakukan 30 hari sebelum keberangkatan tidak dapat
            dilakukan
          </li>
          <li>
            Pendaftaran yang dilakukan pada saat pameran/acara promosi lainnya
            mengikuti ketentuan pameran/acara promosi tersebut.
          </li>
        </ol>

        <div className="mt-4 space-y-2 text-sm leading-6 text-neutral-foreground">
          <p>Mengumpulkan data/berkas pendukung sebagai berikut:</p>
          <ul className="list-disc space-y-1 pl-10 text-sm leading-6 text-neutral-foreground">
            <li>
              Pas foto berwarna 80% tampak muka dengan latar belakang putih 4x6
              sebanyak 1 lembar. Khusus wanita menggunakan jilbab.
            </li>
            <li>Fotokopi KTP dan KK.</li>
            <li>
              Fotokopi Akta Lahir bagi yang membawa anak atau belum memiliki
              KTP.
            </li>
            <li>Sertifikat Vaksin Meningitis</li>
          </ul>
        </div>

        <div className="mt-4 space-y-2 text-sm leading-6 text-neutral-foreground">
          <p>
            Pembatalan Keberangkatan Jika atas keinginan sendiri jamaah
            membatalkan keberangkatan Umrah, maka jamaah bersedia untuk:
          </p>
          <ol className="list-decimal space-y-1 pl-4 text-sm leading-6 text-neutral-foreground">
            <li>
              Lebih dari 45 hari sebelum keberangkatan: Pembatalan dikenakan
              potongan biaya lebih dari 10% dari total biaya paket dan biaya
              perlengkapan (*).
            </li>
            <li>
              Tepat 45 hari sebelum keberangkatan: Pembatalan dikenakan potongan
              sebesar harga tiket pesawat (*).
            </li>
            <li>
              44 - 30 hari sebelum keberangkatan: Pembatalan dikenakan potongan
              50% dari total biaya paket (*).
            </li>
            <li>
              29 - 8 hari sebelum keberangkatan: Pembatalan dikenakan potongan
              70% dari total biaya paket (*).
            </li>
            <li>
              7 - 4 hari sebelum keberangkatan: Pembatalan dikenakan potongan
              80% dari total biaya paket (*).
            </li>
            <li>
              3 - 0 hari sebelum keberangkatan: Pembatalan dikenakan potongan
              100% dari total biaya paket (*).
            </li>
          </ol>
        </div>

        <div className="mt-4 space-y-3 text-sm leading-6 text-neutral-foreground">
          <p>
            Pemotongan biaya pembatalan di atas juga berlaku bagi jamaah yang
            mengganti tanggal keberangkatan dan jenis tour. Ketentuan-ketentuan
            di atas dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih
            dahulu, tergantung dari kebijakan pihak maskapai, hotel, dan agen di
            luar negeri.
          </p>
          <p>
            Pengumpulan semua data/berkas paling lambat 60 sebelum
            keberangkatan.
          </p>
          <p>
            GoUmrah berhak membatalkan pendaftaran jamaah yang belum
            mengumpulkan data/berkas atau membayar uang muka atau pelunasan
            sesuai batas waktu yang telah ditentukan oleh GoUmrah
          </p>
          <p>
            Penolakan Visa seluruhnya atas wewenang kedutaan negara
            masing-masing yang bilamana permohonan visa ditolak, sedangkan tiket
            pesawat dan hotel sudah diterbitkan sebelum permohonan visa
            disetujui, karena sehubungan dengan batas waktu yang ditentukan
            perusahaan penerbangan (maskapai) dan hotel, maka pengembalian biaya
            tiket pesawat dan hotel tergantung dari kebijakan pihak maskapai dan
            hotel.
          </p>
          <p>
            Jamaah menyatakan tidak berkeberatan jika terjadi penundaan
            keberangkatan Umrah yang disebabkan oleh penolakan / penundaan /
            keterlambatan pemberian izin visa umrah dari Kedutaan Kerajaan Saudi
            Arabia / Negara lainnya.
          </p>
        </div>

        <div className="mt-4 space-y-2 text-sm leading-6 text-neutral-foreground">
          <p>
            Tanggal keberangkatan bersifat estimasi dan bisa berubah mengikuti
            ketentuan dari maskapai penerbangan, oleh karena itu GoUmrah
            mempunyai hak untuk:
          </p>

          <ul className="list-disc space-y-1 pl-10 text-sm leading-6 text-neutral-foreground">
            <li>Memindah jamaah ke tanggal-tanggal yang tersedia.</li>
            <li>Memindah jamaah ke paket lain yang tersedia.</li>
          </ul>

          <p className="mt-4">
            (*) Biaya yang telah dibayarkan oleh GoUmrah kepada penyedia layanan
            (maskapai, hotel, visa).
          </p>
        </div>
      </SectionContent>
    </Section>
  );
};

export default TermsAndConditionSection;
