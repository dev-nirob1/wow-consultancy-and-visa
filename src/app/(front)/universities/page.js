import PageHero from "@/app/components/front/common/PageHero";
import SectionHeader from "@/app/components/front/common/SectionHeader";
import CtaSection from "@/app/components/front/section/CtaSection";
import UniversityCard from "@/app/components/front/widget/UniversityCard";

const universities = [
  {
    logo: "/universities/snu.avif",
    name: "Seoul National University",
    location: "Seoul, South Korea",
    programs: ["Engineering", "Business", "Medicine"],
    href: "/universities/seoul-national-university",
  },
  {
    logo: "/universities/yonsei.png",
    name: "Yonsei University",
    location: "Seoul, South Korea",
    programs: ["Business", "Liberal Arts", "IT"],
    href: "/universities/yonsei-university",
  },
  {
    logo: "/universities/korea-university.png",
    name: "Korea University",
    location: "Seoul, South Korea",
    programs: ["Law", "Business", "Engineering"],
    href: "/universities/korea-university",
  },
  {
    logo: "/universities/hanyang.jpg",
    name: "Hanyang University",
    location: "Seoul, South Korea",
    programs: ["Engineering", "Architecture"],
    href: "/universities/hanyang-university",
  },
  {
    logo: "/universities/skku.avif",
    name: "Sungkyunkwan University",
    location: "Seoul, South Korea",
    programs: ["Business", "Computer Science"],
    href: "/universities/sungkyunkwan-university",
  },
  {
    logo: "/universities/kyunghee.avif",
    name: "Kyung Hee University",
    location: "Seoul, South Korea",
    programs: ["Hospitality", "Medicine", "Arts"],
    href: "/universities/kyung-hee-university",
  },
  {
    logo: "/universities/ewha.avif",
    name: "Ewha Womans University",
    location: "Seoul, South Korea",
    programs: ["Liberal Arts", "Social Science"],
    href: "/universities/ewha-womans-university",
  },
  {
    logo: "/universities/pusan.avif",
    name: "Pusan National University",
    location: "Busan, South Korea",
    programs: ["Engineering", "Marine Science"],
    href: "/universities/pusan-national-university",
  },
  {
    logo: "/universities/inha.avif",
    name: "Inha University",
    location: "Incheon, South Korea",
    programs: ["Engineering", "Logistics"],
    href: "/universities/inha-university",
  },
  {
    logo: "/universities/chung-ang.avif",
    name: "Chung-Ang University",
    location: "Seoul, South Korea",
    programs: ["Media", "Business", "Film"],
    href: "/universities/chung-ang-university",
  },
  {
    logo: "/universities/knu.avif",
    name: "Kyungpook National University",
    location: "Daegu, South Korea",
    programs: ["Engineering", "Agriculture"],
    href: "/universities/kyungpook-national-university",
  },
  {
    logo: "/universities/gist.avif",
    name: "GIST",
    location: "Gwangju, South Korea",
    programs: ["Science", "Technology", "Research"],
    href: "/universities/gist",
  },
];

const UniversitiesPage = () => {
  return (
    <>
      <PageHero
        title="Universities"
        description="Explore top-ranked universities across South Korea and find the right program to match your academic goals."
      />
      <section className="py-16">
        <div className="container">
          <SectionHeader
            subTitle="Our Partners"
            title="Partner Universities"
            className="mb-12"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {universities.map((university) => (
              <UniversityCard key={university.name} {...university} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
};

export default UniversitiesPage;
