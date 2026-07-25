// components/Benefits.jsx
import {
  FaGraduationCap,
  FaSackDollar,
  FaTrophy,
  FaBriefcase,
  FaEarthAsia,
  FaRocket,
} from "react-icons/fa6";
import Link from "next/link";
import BenefitCard from "../widget/BenifitCard";
import SectionHeader from "../common/SectionHeader";

const benefits = [
  {
    icon: FaGraduationCap,
    title: "World-Class Education",
    description: "Study at globally recognized universities with modern learning facilities.",
  },
  {
    icon: FaSackDollar,
    title: "Affordable Tuition",
    description: "Quality education at a lower cost compared to many Western countries.",
  },
  {
    icon: FaTrophy,
    title: "Scholarship Opportunities",
    description: "Access government and university scholarships for international students.",
  },
  {
    icon: FaBriefcase,
    title: "Part-Time Work",
    description: "Earn while studying through approved part-time job opportunities.",
  },
  {
    icon: FaEarthAsia,
    title: "Safe & Innovative Country",
    description: "Experience a secure environment and cutting-edge technology.",
  },
  {
    icon: FaRocket,
    title: "Global Career Prospects",
    description: "Build an international career with globally valued qualifications.",
  },
];

const Benefits = () => {
  return (
    <section className="py-16 bg-light">
      <div className="container">
        <SectionHeader
          subTitle="Why Study In Korea"
          title="Benefits of Studying Abroad"
          className="mb-12"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map(( benefit, i) => (
            <BenefitCard key={i} benifit={benefit} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Benefits;