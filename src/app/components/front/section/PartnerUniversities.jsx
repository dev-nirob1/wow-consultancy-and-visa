// components/PartnerUniversities.jsx
import Image from "next/image";
import SectionHeader from "../common/SectionHeader";

const universities = [
  { name: "Seoul National University", logo: "/logo.png" },
  { name: "Yonsei University", logo: "/logo.png" },
  { name: "Korea University", logo: "/logo.png" },
  { name: "Hanyang University", logo: "/logo.png" },
  { name: "Sungkyunkwan University", logo: "/logo.png" },
  { name: "Kyung Hee University", logo: "/logo.png" },
  { name: "Ewha Womans University", logo: "/logo.png" },
  { name: "Pusan National University", logo: "/logo.png" },
];

const PartnerUniversities = () => {
  return (
    <section className="py-16">
      <div className="container">
        <SectionHeader
          subTitle="Our Partners"
          title="Partner Universities"
          highlight="Universities"
          className="mb-12"
        />
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex w-max animate-marquee">
          {[...universities, ...universities].map((uni, index) => (
            <div
              key={`${uni.name}-${index}`}
              className="flex items-center justify-center w-40 h-20 mx-8 shrink-0 relative grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={uni.logo}
                alt={uni.name}
                fill
                sizes="160px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerUniversities;
