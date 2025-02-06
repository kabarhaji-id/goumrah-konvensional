import Image from 'next/image';

export const SpacerSection: React.FC = () => {
  return (
    <section className="flex justify-center items-center">
      <Image
        loading="lazy"
        src="/assets/image/spacer-bg.png"
        alt="Responsive Image"
        width={700} // Provide the original image width
        height={475} // Provide the original image height
        sizes="(max-width: 768px) 100vw, 700px" // Adjust sizes as needed
        className="object-contain w-full aspect- max-w-[430px]"
      />
    </section>
  );
};