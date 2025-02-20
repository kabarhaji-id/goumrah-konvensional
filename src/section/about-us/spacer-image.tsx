import Image from "next/image";
export const SpacerSection: React.FC = () => {
  return (
    <section className="flex justify-center items-center mx-auto w-full max-w-screen bg-white">
      <Image
        src="/assets/image/spacer-bg.png"
        alt="Responsive Image"
        width={430}
        height={90}
        className="w-full"
        priority quality={70}
      />
    </section>
  );
};