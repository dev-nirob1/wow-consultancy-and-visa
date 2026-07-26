// components/StudentSuccess.jsx
import Image from "next/image";
import SectionHeader from "../common/SectionHeader";

const universities = [
  { name: "Seoul National University", logo: "/visa-success/student-1.jpg" },
  { name: "Yonsei University", logo: "/visa-success/student-2.jpg" },
  { name: "Korea University", logo: "/visa-success/student-3.jpg" },
  { name: "Hanyang University", logo: "/visa-success/student-4.jpg" },
  { name: "Sungkyunkwan University", logo: "/visa-success/student-5.jpg" },
  { name: "Kyung Hee University", logo: "/visa-success/student-6.jpg" },
  { name: "Ewha Womans University", logo: "/visa-success/student-7.jpg" },
  { name: "Pusan National University", logo: "/visa-success/student-8.jpg" },
];

const StudentSuccess = () => {
  return (
    <section className="py-16">
      <div className="container">
        <SectionHeader
          subTitle="Our Students"
          title="Student Success Stories"
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
              className="relative w-60  aspect-[4/5] mx-6 shrink-0"
            >
              <Image
                src={uni.logo}
                alt={uni.name}
                fill
                sizes="240px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentSuccess;
