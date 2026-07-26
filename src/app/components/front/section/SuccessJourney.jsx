// components/SuccessJourney.jsx
"use client";

import { useState } from "react";
import SectionHeader from "../common/SectionHeader";
import GalleryCard from "../widget/GalleryCard";
const categories = [
  "All",
  "Our Activities",
  "Visa Success",
  "Student Life in Korea",
];

const gallery = [
  {
    image: "/gallery/visa-success/visa-success-1.jpg",
    caption: "Visa Approved — Ready for Korea!",
    category: "Visa Success",
  },
  {
    image: "/gallery/visa-success/visa-success-2.jpg",
    caption: "University Admission Confirmed",
    category: "Visa Success",
  },
  {
    image: "/gallery/visa-success/visa-success-1.jpg",
    caption: "D-2 Student Visa in Hand",
    category: "Visa Success",
  },
  {
    image: "/gallery/student-life/student-life-1.jpg",
    caption: "Exploring the Campus",
    category: "Student Life in Korea",
  },
  {
    image: "/gallery/student-life/student-life-2.jpg",
    caption: "Life at a Korean University",
    category: "Student Life in Korea",
  },
  {
    image: "/gallery/student-life/student-life-3.jpg",
    caption: "Making Memories in Korea",
    category: "Student Life in Korea",
  },
  {
    image: "/gallery/student-life/student-life-4.jpg",
    caption: "Making Memories in Korea",
    category: "Student Life in Korea",
  },
  {
    image: "/gallery/activities/activities-1.jpg",
    caption: "University Counseling Session",
    category: "Our Activities",
  },
  {
    image: "/gallery/activities/activities-2.jpg",
    caption: "Student Seminar & Workshop",
    category: "Our Activities",
  },
  {
    image: "/gallery/activities/activities-3.jpg",
    caption: "Team Collaboration",
    category: "Our Activities",
  },
  {
    image: "/gallery/activities/activities-4.jpg",
    caption: "Team Collaboration",
    category: "Our Activities",
  },
  {
    image: "/gallery/activities/activities-5.jpg",
    caption: "Team Collaboration",
    category: "Our Activities",
  },
  {
    image: "/gallery/activities/activities-6.jpg",
    caption: "Team Collaboration",
    category: "Our Activities",
  },
  {
    image: "/gallery/activities/activities-7.jpg",
    caption: "Team Collaboration",
    category: "Our Activities",
  },
  {
    image: "/gallery/activities/activities-8.jpg",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item, i) => (
            <GalleryCard key={i} image={item.image} caption={item.caption} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessJourney;
