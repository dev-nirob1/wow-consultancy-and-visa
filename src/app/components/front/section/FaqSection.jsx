// components/Faq.jsx
"use client";

import { useState } from "react";
import SectionHeader from "../common/SectionHeader";
import FaqItem from "../widget/FaqItem";

const faqs = [
  {
    question: "Do I need TOPIK to study in South Korea?",
    answer:
      "It depends on the university and program. Some accept English-taught programs without TOPIK, while others require TOPIK level 3 or above for Korean-taught courses. We help you find programs matching your current level.",
  },
  {
    question: "How long does the admission process take?",
    answer:
      "On average, the full process takes 3 to 6 months, covering university selection, application submission, admission decision, and visa processing.",
  },
  {
    question: "Can I apply for scholarships?",
    answer:
      "Yes, many universities and the Korean government offer scholarships for international students covering tuition, and sometimes living expenses. We guide you through eligible options.",
  },
  {
    question: "Can international students work part-time?",
    answer:
      "Yes, international students on a D-2 visa can work part-time with proper permission after completing one or two semesters, depending on visa conditions.",
  },
  {
    question: "What documents are required for admission?",
    answer:
      "Typically you'll need academic transcripts, certificates, a passport copy, a statement of purpose, recommendation letters, and financial proof. Requirements vary slightly by university.",
  },
  {
    question: "Do you provide complete visa assistance?",
    answer:
      "Yes, we handle end-to-end visa support including document preparation, application submission, and interview guidance for a smooth approval process.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="container">
        <SectionHeader
          subTitle="FAQ"
          title="Frequently Asked Questions"
          highlight="Questions"
          description="Find answers to common questions about studying and applying for a visa in South Korea."
          className="mb-12"
        />

        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
