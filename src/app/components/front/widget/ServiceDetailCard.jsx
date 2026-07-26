// components/sEr.jsx
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

const ServiceDetailCard = ({
  title,
  description,
  image,
  highlights,
  index,
}) => {
  const isEven = index % 2 === 0;

  return (
    <div className="flex flex-col lg:flex-row gap-8 ">
      <div className={`w-full lg:flex-1 ${isEven ? "" : "lg:order-2"}`}>
        <div className="relative w-full aspect-square rounded-xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className={`w-full lg:flex-1 ${isEven ? "" : "lg:order-1"}`}>
        <h2>{title}</h2>
        <p className="mt-6 text-dark/70">{description}</p>

        <ul className="flex flex-col gap-4 mt-6">
          {highlights.map((item) => (
            <li
              key={item}
              className="flex items-center gap-4 font-semibold text-dark bg-light border border-dark/10 rounded-lg px-4 py-3 shadow-sm"
            >
              <FaCheck className="text-secondary text-lg shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceDetailCard;
