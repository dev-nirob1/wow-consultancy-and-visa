// components/common/PageHero.jsx
import Image from "next/image";

const PageHero = ({ title, description }) => {
  return (
    <section className="relative h-[50vh] min-h-[500px] flex items-center">
      <Image
        src="/pagehero.jpg"
        alt="title"
        fill
        sizes="100vw"
        className="object-cover -z-10"
        priority
      />
      <div className="absolute inset-0 bg-black/40 -z-10" />

      <div className="container text-center text-white">
        <h1 className="">{title}</h1>
        {description && (
          <p className="mt-4 text-lg font-medium max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
