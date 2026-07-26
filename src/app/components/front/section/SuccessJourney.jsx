// components/SuccessJourney.jsx
"use client";

import { useState } from "react";
import SectionHeader from "../common/SectionHeader";
import GalleryCard from "../widget/GalleryCard";
const categories = ["All", "Visa Success", "Our Activities"];

const gallery = [
  {
    image: "/team/profile-1.avif",
    caption: "Student Visa Approved",
    category: "Visa Success",
  },
  {
    image: "/team/profile-2.avif",
    caption: "Successful Admission",
    category: "Visa Success",
  },
  {
    image: "/team/profile-3.avif",
    caption: "Beginning a New Journey",
    category: "Visa Success",
  },
  {
    image: "/team/profile-4.avif",
    caption: "University Counseling Session",
    category: "Our Activities",
  },
  {
    image: "/team/profile-5.avif",
    caption: "Student Seminar & Workshop",
    category: "Our Activities",
  },
  {
    image: "/team/profile-6.avif",
    caption: "Team Collaboration",
    category: "Our Activities",
  },
];

const SuccessJourney = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredGallery =
    activeCategory === "All"
      ? gallery
      : gallery.filter((item) => item.category === activeCategory);

  return (
    <section className="py-16 bg-light">
      <div className="container">
        <SectionHeader
          subTitle="Our Gallery"
          title="Our Success Journey"
          className="mb-12"
        />

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-sm font-medium px-5 py-2.5 rounded-md transition-colors duration-200 ${
                  isActive
                    ? "bg-primary text-white"
                    : "bg-white border border-dark/20 text-dark hover:border-primary hover:text-primary"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <GalleryCard
              key={item.caption}
              image={item.image}
              caption={item.caption}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessJourney;
