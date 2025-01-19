import { Section, SectionContent } from "@/components/layout/section"
import Link from "next/link";

export const TermsConditionList = [
    {
        title: "Umum",
        link: "#umum",
    },
    {
        title: "Penggunaan",
        link: "#penggunaan",
    },
    {
        title: "Pemesanan / Pembelian Produk Umrah",
        link: "#pemesanan-pembelian-produk-umrah",
    },
    {
        title: "Ketentuan Keagenan/Referral",
        link: "#ketentuan-keagenan-referral",
    },
    {
        title: "Syarat dan Ketentuan",
        link: "#syarat-dan-ketentuan",
    },
    {
        title: "Harga Produk",
        link: "#harga-produk",
    },
    {
        title: "Detail dan Prosedur Pembayaran",
        link: "#detail-prosedur-pembayaran",
    },
    {
        title: "Perubahan dan Pembatalan",
        link: "#perubahan-dan-pembatalan",
    },
    {
        title: "Keamanan",
        link: "#keamanan",
    },
    {
        title: "Kebijakan Penggunaan Data",
        link: "#kebijakan-penggunaan-data",
    },
    {
        title: "Hak dan Kewajiban",
        link: "#hak-dan-kewajiban",
    },
    {
        title: "Tanggung Jawab",
        link: "#tanggung-jawab",
    },
    {
        title: "Hak Kekayaan Intelektual",
        link: "#hak-kekayaan-intelektual",
    },
    {
        title: "Hukum yang Mengatur",
        link: "#hukum-yang-mengatur",
    },
    {
        title: "Ganti Rugi",
        link: "#ganti-rugi",
    },
    {
        title: "Force Majeur",
        link: "#force-majeur",
    },
    {
        title: "Larangan",
        link: "#larangan",
    },
];

const ListOfContent = () => {

    return (
        <Section className="pt-0 pb-5 px-4">
            <SectionContent>
                <div className="flex flex-col space-y-2 text-neutral-foreground font-medium text-sm">
                    {TermsConditionList.map((item, index) => {
                        return (
                            <LinkListContent
                                key={index}
                                title={item.title}
                                url={item.link}
                                number={index + 1}
                            />
                        )
                    })}
                </div>
            </SectionContent>
        </Section>
    )
}

const LinkListContent = ({
    title,
    url,
    number,
}: {
    title: string;
    url: string;
    number: number;
}) => {
    return (
        <Link href={`syarat-ketentuan${url}`}>
            <p className="text-sm space-x-2">
                <span className="">
                    {number}.
                </span>
                <span className="text-primary hover:underline">
                    {title}
                </span>
            </p>
        </Link>
    )
}

export default ListOfContent;