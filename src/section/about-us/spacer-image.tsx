import Image from "next/legacy/image";
export const SpacerSection: React.FC = () => {
  return (
    <section className="flex justify-center items-center mx-auto w-full max-w-screen bg-white">
      <Image
        src="/assets/image/spacer-bg.png"
        alt="Responsive Image"
        width={430}
        height={90}
        className="object-contain w-full"
        priority
      />
    </section>
  );
};