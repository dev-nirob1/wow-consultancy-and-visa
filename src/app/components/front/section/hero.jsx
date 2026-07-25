import Image from "next/image";
import { FaCheck, FaStar } from "react-icons/fa6";

const highlights = [
  { label: "Top Universities" },
  { label: "Visa Success" },
  { label: "Free Consultation" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      <div className="container grid lg:grid-cols-2 items-center gap-12">
        <div>
          <h1>
            Your Trusted Path to{" "}
            <span className="text-primary">Study Abroad</span>
          </h1>
          <p className="mt-6 max-w-lg">
            We guide students through every step of the journey — from choosing
            the right university to securing your visa, so you can focus on your
            future.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="/contact"
              className="bg-primary text-white font-medium uppercase tracking-wide px-8 py-3.5 rounded-md hover:bg-primary/90 transition-colors duration-200"
            >
              Free Consultation
            </a>

            <a
              href="/services"
              className="border border-dark/20 text-dark font-medium uppercase tracking-wide px-8 py-3.5 rounded-md hover:border-primary hover:text-primary transition-colors duration-200"
            >
              Our Services
            </a>
          </div>

          <ul className="flex flex-wrap gap-x-8 gap-y-3 mt-10">
            {highlights.map((item) => (
              <li key={item.label} className="flex items-center gap-2">
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                  <FaCheck className="text-xs" />
                </span>
                <span className="font-medium text-dark">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:h-120 md:w-120 rounded-[45%_55%_60%_40%/50%_45%_55%_50%] overflow-hidden border-4 border-white shadow-xl">
            <Image
              src="/hero-image.png"
              alt="Student ready to study abroad"
              fill
              sizes="(max-width: 640px) 288px, 384px"
              className="object-cover"
            />
          </div>

          <span className="absolute top-4 left-2 w-6 h-6 rounded-full bg-primary/20 animate-pulse" />
          <span className="absolute bottom-10 left-0 text-primary text-2xl">
            <FaStar />
          </span>
          <span className="absolute bottom-0 right-8 w-8 h-8 border-2 border-primary rotate-45" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
