// components/FaqItem.jsx
"use client";

import { FaPlus, FaMinus } from "react-icons/fa6";

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="bg-white border border-dark/20 rounded-xl overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
      >
        <span className="font-medium text-dark">{question}</span>
        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
          {isOpen ? <FaMinus className="text-sm" /> : <FaPlus className="text-sm" />}
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-dark/70">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;