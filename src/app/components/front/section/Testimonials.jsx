// components/Testimonials.jsx
"use client";

import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import SectionHeader from "../common/SectionHeader";
import TestimonialCard from "../widget/TestimonialCard";

const testimonials = [
  {
    name: "Rafiul Islam",
    university: "Seoul University",
    image: "/testimonials/rafiul.avif",
    quote:
      "Wow Consultancy made the entire process stress-free. From choosing the right university to getting my visa approved, they guided me every step of the way.",
  },
  {
    name: "Tasnia Ahmed",
    university: "Busan University",
    image: "/testimonials/tasnia.avif",
    quote:
      "I was confused about which university to choose, but their counselors helped me find the perfect fit within my budget and career goals.",
  },
  {
    name: "Mahin Chowdhury",
    university: "Daejeon University",
    image: "/testimonials/mahin.avif",
    quote:
      "Professional, honest, and always available to answer my questions. My visa got approved on the first attempt thanks to their preparation.",
  },
  {
    name: "Nusrat Jahan",
    university: "Incheon University",
    image: "/testimonials/nusrat.avif",
    quote:
      "Best decision I made was reaching out to them. They handled my documents, application, and even helped me prepare for my visa interview.",
  },
];

const Testimonials = () => {
  const [perView, setPerView] = useState(1);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const updatePerView = () => {
      setPerView(window.innerWidth >= 768 ? 2 : 1);
    };

    updatePerView();
    window.addEventListener("resize", updatePerView);
    return () => window.removeEventListener("resize", updatePerView);
  }, []);

  useEffect(() => {
    setPage(0);
  }, [perView]);

  const totalPages = Math.ceil(testimonials.length / perView);

  const handlePrev = () => {
    setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16">
      <div className="container">
        <SectionHeader
          subTitle="Testimonials"
          title="What Our Students Say"
          highlight="Students Say"
          className="mb-12"
        />

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div
                key={pageIndex}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 shrink-0 w-full"
              >
                {testimonials
                  .slice(pageIndex * perView, pageIndex * perView + perView)
                  .map((item) => (
                    <TestimonialCard key={item.name} {...item} />
                  ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={handlePrev}
            aria-label="Previous testimonials"
            className="w-11 h-11 flex items-center justify-center rounded-full border border-dark/20 text-dark hover:bg-primary hover:text-white hover:border-primary transition-colors duration-200"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next testimonials"
            className="w-11 h-11 flex items-center justify-center rounded-full border border-dark/20 text-dark hover:bg-primary hover:text-white hover:border-primary transition-colors duration-200"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
