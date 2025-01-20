import {
  Section,
  SectionContent,
  SectionHeader,
} from "@/components/layout/section";

const IntroductionSection = () => {
  return (
    <Section className="px-4 pb-5 pt-20">
      <SectionHeader className="mb-6 px-0">
        <h1 className="text-xl font-bold leading-6 tracking-wide text-neutral-foreground">
          Syarat dan Ketentuan
        </h1>
      </SectionHeader>

      <SectionContent>
        <div className="space-y-3 text-sm leading-6 text-neutral-foreground">
          <p>
            Terima kasih telah mengunjungi Website Kami,
            <span className="ml-0 font-semibold text-primary">
              www.goumrah.id
            </span>
          </p>
          <p>
            Kami berharap kunjungan Anda memberikan manfaat dan kenyamanan dalam
            mengakses serta menggunakan semua layanan yang tersedia di Website
            Kami. Kami senantiasa berupaya untuk memperbaiki dan meningkatkan
            kualitas pelayanan Kami.
          </p>
          <p>
            Kami sangat menghargai setiap kritik, saran, dan masukan dari Anda.
            Silakan sampaikan kepada Kami melalui email di
            <span className="mx-1 font-semibold">admin@goumrah.com</span>
            atau telepon di
            <span className="mx-1 font-semibold">0811157188</span>
          </p>

          <p>
            Website ini dimiliki, dioperasikan, dan diselenggarakan oleh PT.
            Kabar Haji Indonesia (“Kami” atau “GoUmrah”), sebuah perseroan
            terbatas yang berdiri atas dasar hukum Republik Indonesia. Website
            dan Layanan Kami tersedia secara online melalui Website:
            www.goumrah.id atau berbagai akses, media, perangkat, dan platform
            lainnya, baik yang sudah atau akan tersedia di kemudian hari
          </p>
        </div>
      </SectionContent>
    </Section>
  );
};

export default IntroductionSection;
