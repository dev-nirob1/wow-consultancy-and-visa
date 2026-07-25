// components/TestimonialCard.jsx
import Image from "next/image";
import { FaStar } from "react-icons/fa6";

const TestimonialCard = ({ quote, name, university, image }) => {
  return (
    <div className="bg-white rounded-xl border border-dark/20 p-8">
      <div className="flex items-center gap-4">
        <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0">
          <Image src={image} alt={name} fill sizes="56px" className="object-cover" />
        </div>
        <div>
          <h6>{name}</h6>
          <p className="text-sm text-primary">{university}</p>
        </div>
      </div>

      <div className="flex gap-1 text-yellow-500 mt-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar key={i} className="text-sm" />
        ))}
      </div>

      <p className="text-dark/70 mt-4">{quote}</p>
    </div>
  );
};

export default TestimonialCard;