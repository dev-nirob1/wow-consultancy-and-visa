"use client";
// components/ServicesOverview.jsx — Video Intro Section

import { useState } from "react";
import { FaCirclePlay, FaXmark } from "react-icons/fa6";
import Image from "next/image";
import SectionHeader from "../common/SectionHeader";

// Replace with actual YouTube video ID when available
const VIDEO_ID = "dQw4w9WgXcQ";

const ServicesOverview = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="py-16 bg-light">
        <div className="container">
          <SectionHeader
            subTitle="See How We Work"
            title="Your Dream to Study in Korea — Made Simple"
            align="center"
            className="mb-10"
          />

          {/* Video thumbnail */}
          <div
            className="group relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            {/* Thumbnail image */}
            <Image
              src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
              alt="Watch our intro video"
              fill
              sizes="(max-width: 768px) 100vw, 900px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                {/* Ripple rings */}
                <span className="absolute w-24 h-24 rounded-full bg-white/20 animate-ping" />
                <span className="absolute w-20 h-20 rounded-full bg-white/10" />
                <FaCirclePlay className="relative text-white text-7xl drop-shadow-2xl group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>

            {/* Bottom label */}
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <span className="bg-black/60 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full">
                Watch Our Story — 2 min
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Modal overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
              title="Wow Consultancy and Visa — Intro Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-xl transition-colors duration-200"
          >
            <FaXmark />
          </button>
        </div>
      )}
    </>
  );
};

export default ServicesOverview;
