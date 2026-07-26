// components/AllServices.jsx
import ServiceDetailCard from "../widget/ServiceDetailCard";

const services = [
  {
    title: "University Admissions",
    description:
      "Navigating global university applications can be overwhelming. Our seasoned admission strategists analyze your academic profile to match you with top-tier universities worldwide. We help craft compelling personal statements and perfectly optimized applications.",
    image: "/services/admission.jpg",
    highlights: [
      "Strategic Profile Assessment",
      "Shortlisting Best-Fit Institutions",
      "SOP and Essay Editing",
      "Direct Application Tracking",
    ],
  },
  {
    title: "Visa Guidance & Processing",
    description:
      "A single mistake can derail your study abroad dream. Our dedicated visa specialists are highly trained to ensure your strict compliance with international student visa regulations for seamless approvals.",
    image: "/services/visa-assistance.jpg",
    highlights: [
      "Complex Document Preparation",
      "Financial File Assessment",
      "Confidence-Building Mock Interviews",
      "Embassy Appointment Scheduling",
    ],
  },
  {
    title: "Scholarship Assistance",
    description:
      "Quality education should be accessible. Our financial advisors are experts at identifying and securing partial to fully-funded international scholarships, grants, and university-specific bursaries.",
    image: "/services/scholarship-guidance.jpg",
    highlights: [
      "Global Scholarship Database Matching",
      "Grant Application Storytelling",
      "Financial Aid Negotiation",
      "Corporate Sponsorship Guidance",
    ],
  },
  {
    title: "Document Support",
    description:
      "Ensure every required document is complete, accurate, and ready for submission. We review, verify, and prepare your paperwork so nothing holds back your application.",
    image: "/services/document-support.jpg",
    highlights: [
      "Document Checklist",
      "SOP Review",
      "Translation Support",
      "Final Verification",
    ],
  },
  {
    title: "Pre-Departure & Accommodation",
    description:
      "Your journey doesn't end with a visa. We provide comprehensive pre-departure briefings covering cultural adjustments, packing essentials, and banking, plus help securing safe student housing.",
    image: "/services/pre-departure.jpg",
    highlights: [
      "On-Campus & Off-Campus Housing",
      "Flight Booking Assistance",
      "Cultural Orientation Sessions",
      "Airport Pickup Coordination",
    ],
  },
];

const AllServices = () => {
  return (
    <section className="py-16">
      <div className="container flex flex-col gap-12">
        {services.map((service, index) => (
          <ServiceDetailCard
            key={service.title}
            title={service.title}
            description={service.description}
            image={service.image}
            highlights={service.highlights}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default AllServices;
