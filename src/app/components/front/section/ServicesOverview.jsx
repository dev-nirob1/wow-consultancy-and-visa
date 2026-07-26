// components/ServicesOverview.jsx
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

const highlights = [
  "Personalized Guidance",
  "Trusted University Network",
  "Complete Visa Assistance",
  "End-to-End Support",
];

const ServicesOverview = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center gap-8">
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src="/why-choose-us.avif"
              alt="Student consultation session"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <h2>
              We Simplify Your Journey From <span className="text-primary">Admission to Visa</span>
            </h2>
            <p className="mt-4">
              Our team handles every step of your study abroad process, so you can focus on preparing for your new academic journey with confidence.
            </p>

            <ul className="flex flex-col gap-4 mt-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                    <FaCheck className="text-xs" />
                  </span>
                  <span className="font-medium text-dark">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;