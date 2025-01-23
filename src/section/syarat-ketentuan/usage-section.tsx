import {
  Section,
  SectionContent,
  SectionHeader,
} from "@/components/layout/section";

const UsageSection = () => {
  return (
    <Section id="penggunaan" className="px-4 pb-5 pt-10">
      <SectionHeader className="px-0">
        <span className="text-lg font-bold leading-6 tracking-wide text-neutral-foreground">
          PENGGUNAAN
        </span>
      </SectionHeader>

      <SectionContent className="">
        <ol className="list-decimal space-y-1 pl-4 text-sm leading-6 text-neutral-foreground">
          <li>
            Website ini dan Layanan yang tersedia di dalamnya hanya dapat
            digunakan untuk keperluan pribadi dan non-komersial serta selalu
            tunduk pada syarat dan ketentuan yang berlaku saat itu dalam Syarat
            dan Ketentuan Penggunaan GoUmrah.
          </li>
          <li>
            Website ini serta produk, teknologi, dan proses yang terdapat atau
            terkandung di dalamnya dimiliki oleh Kami atau pihak ketiga yang
            memberikan hak kepada Kami. Kecuali untuk penggunaan yang secara
            tegas diizinkan dalam Syarat dan Ketentuan Penggunaan GoUmrah ini,
            Anda tidak memiliki atau menerima hak lain apa pun atas Website ini,
            termasuk segala data, informasi, dan konten di dalamnya
          </li>
          <li>
            Dengan menggunakan Website ini atau Layanan yang tersedia di
            dalamnya, Anda setuju untuk tidak mengunduh, menayangkan, atau
            mentransmisikan dengan cara apa pun, serta tidak membuat konten apa
            pun tersedia untuk umum yang tidak konsisten dengan penggunaan yang
            diizinkan dalam Syarat dan Ketentuan Penggunaan GoUmrah ini.
          </li>
          <li>
            Dalam Website ini mungkin terdapat tautan (link) ke website yang
            dikelola oleh pihak ketiga (&quot;Situs Eksternal&quot;). Situs
            Eksternal disediakan hanya untuk referensi dan kenyamanan saja.
            GoUmrah tidak mengoperasikan, mengendalikan, atau mendukung dalam
            bentuk apa pun Situs Eksternal yang bersangkutan ataupun
            konten/isinya. Anda bertanggung jawab penuh atas penggunaan Situs
            Eksternal tersebut dan dianjurkan untuk mempelajari syarat dan
            ketentuan dari Situs Eksternal itu secara seksama.
          </li>
          <li>
            Layanan yang tersedia dalam Website ini secara umum menggunakan
            <span className="mx-1 font-semibold">
              sistem re-marketing dan sistem cookies
            </span>
            yang memungkinkan pihak ketiga (termasuk namun tidak terbatas pada
            Google) mengakses dan menggunakan data kunjungan dalam sistem
            cookies Website ini untuk menampilkan dan menayangkan kembali iklan
            GoUmrah melalui internet.
          </li>
          <li>
            Anda tidak boleh membuat tautan, melakukan screen capture, atau data
            crawling ke Website tanpa persetujuan tertulis sebelumnya dari
            GoUmrah. Hal-hal tersebut dianggap sebagai pelanggaran hak milik
            intelektual GoUmrah.
          </li>
        </ol>

        <div className="mt-4 space-y-4 text-sm leading-6 text-neutral-foreground">
          <p>
            GoUmrah menyediakan dan menyelenggarakan sistem dan fasilitas
            pemesanan online secara terpadu (&quot;Layanan&quot;), yang dapat
            melayani pemesanan PAKET untuk perjalanan Umrah
            (&quot;Produk&quot;). Layanan ini memungkinkan Anda untuk mencari
            informasi atas Produk yang Anda inginkan, serta melakukan pemesanan
            dan pembelian, sekaligus melakukan pembayaran secara online dan aman
            melalui berbagai sistem dan fasilitas pembayaran yang tersedia.
          </p>
          <p>
            Layanan Kami secara umum tersedia secara online selama dua puluh
            empat jam sehari dan tujuh hari dalam seminggu, kecuali dalam hal
            adanya perbaikan, peningkatan, atau pemeliharaan pada Website Kami.
          </p>
        </div>

        <div className="mt-4 space-y-4 text-sm leading-6 text-neutral-foreground">
          <p>
            Anda tidak diperbolehkan untuk menjual kembali Produk Kami,
            menggunakan, menyalin, mengawasi, menampilkan, mengunduh, atau
            mereproduksi konten atau informasi, perangkat lunak, atau Layanan
            apa pun yang tersedia di Website Kami untuk kegiatan atau tujuan
            komersial apapun tanpa persetujuan tertulis dari Kami sebelumnya.
          </p>
          <p>
            Anda dapat menggunakan Website dan Layanan yang tersedia untuk
            membuat pemesanan yang sah. Anda tidak diperbolehkan untuk membuat
            pemesanan untuk tujuan spekulasi, tidak benar, atau melanggar hukum.
            Jika Kami menemukan atau sewajarnya menduga bahwa pemesanan yang
            Anda buat ternyata tidak sah, maka Kami berhak untuk membatalkan
            pemesanan Anda.
          </p>
          <p>
            Anda juga menjamin bahwa data dan informasi yang Anda berikan kepada
            Kami, baik sehubungan dengan pemesanan maupun pendaftaran pada
            GoUmrah, adalah data dan informasi yang akurat, terkini, dan
            lengkap. Untuk ketentuan penggunaan data dan informasi yang Anda
            berikan, silakan merujuk pada Kebijakan Penggunaan Data.
          </p>
        </div>
      </SectionContent>
    </Section>
  );
};

export default UsageSection;
