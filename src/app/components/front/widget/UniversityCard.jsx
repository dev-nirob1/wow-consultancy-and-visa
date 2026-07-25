// components/UniversityCard.jsx
import Image from "next/image";
import Link from "next/link";
import { FaLocationDot, FaArrowRight } from "react-icons/fa6";

const UniversityCard = ({ logo, name, location, programs, href }) => {
  return (
    <div className="bg-white rounded-xl border border-dark/10 p-8">
      <div className="relative w-20 h-20">
        <Image src={logo} alt={name} fill sizes="64px" className="object-contain" />
      </div>

      <h3 className="mt-6">{name}</h3>

      <div className="flex items-center gap-2 mt-2 text-dark/70">
        <FaLocationDot className="text-primary text-sm" />
        <span className="text-sm">{location}</span>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {programs.map((program) => (
          <span
            key={program}
            className="text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1"
          >
            {program}
          </span>
        ))}
      </div>

      <Link
        href={href}
        className="inline-flex items-center gap-2 text-primary font-medium mt-6 hover:gap-3 transition-all duration-200"
      >
        View Details <FaArrowRight className="text-sm" />
      </Link>
    </div>
  );
};

export default UniversityCard;