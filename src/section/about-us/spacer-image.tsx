export const SpacerSection: React.FC = () => {
  return (
    <section className="flex justify-center items-center mx-auto w-full max-w-screen bg-white">
      <img
        loading="lazy"
        src="/assets/image/spacer-bg.png"
        alt="Responsive Image"
        className="object-contain w-full"
      />
    </section>
  );
};