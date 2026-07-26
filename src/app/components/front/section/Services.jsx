// components/Services.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaGraduationCap,
  FaPassport,
  FaSackDollar,
  FaFileLines,
  FaPlane,
} from "react-icons/fa6";
import SectionHeader from "../common/SectionHeader";

const services = [
  {
    icon: FaGraduationCap,
    title: "University Admission",
    description:
      "Find the right university and program based on your academic goals.",
    image: "/services/admission.jpg",
  },
  {
    icon: FaPassport,
    title: "Visa Assistance",
    description: "Complete guidance throughout your student visa application.",
    image: "/services/visa-assistance.jpg",
  },
  {
    icon: FaSackDollar,
    title: "Scholarship Guidance",
    description:
      "Explore scholarship opportunities and financial support options.",
    image: "/services/scholarship-guidance.jpg",
  },
  {
    icon: FaFileLines,
    title: "Document Support",
    description: "Prepare and review all required application documents.",
    image: "/services/document-support.jpg",
  },
  {
    icon: FaPlane,
    title: "Pre-Departure Support",
    description: "Get ready for your new life and studies in South Korea.",
    image: "/services/pre-departure.jpg",
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <section className="py-16">
      <div className="container">
        <SectionHeader
          subTitle="Our Services"
          title="What We Offer"
          className="mb-12"
        />

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            {services.map((service, index) => {
              const isActive = index === activeIndex;
              const Icon = service.icon;

              return (
                <button
                  key={service.title}
                  onClick={() => setActiveIndex(index)}
                  className={`flex items-center gap-4 text-left rounded-xl border p-5 transition-colors duration-300 ${
                    isActive
                      ? "bg-primary/5 border-primary"
                      : "bg-white border-dark/10 hover:border-primary/40"
                  }`}
                >
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-xl text-xl shrink-0 transition-colors duration-300 ${
                      isActive
                        ? "bg-primary text-white"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    <Icon />
                  </div>
                  <h3 className={isActive ? "text-primary" : ""}>
                    {service.title}
                  </h3>
                </button>
              );
            })}
          </div>

          <div className="relative w-full aspect-1/1 rounded-2xl overflow-hidden">
            <Image
              key={activeService.image}
              src={activeService.image}
              alt={activeService.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover animate-[fadeIn_0.4s_ease-in-out]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div
              key={activeService.title}
              className="absolute bottom-0 left-0 right-0 p-6 animate-[fadeIn_0.4s_ease-in-out]"
            >
              <h3 className="text-white">{activeService.title}</h3>
              <p className="mt-2 text-white/80">{activeService.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
