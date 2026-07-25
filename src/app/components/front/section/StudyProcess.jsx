// components/Process.jsx
import {
  FaCommentDots,
  FaSchool,
  FaFileLines,
  FaPassport,
  FaPlane,
} from "react-icons/fa6";
import SectionHeader from "../common/SectionHeader";
import ProcessStep from "../widget/ProcessStep";

const steps = [
  {
    icon: FaCommentDots,
    number: "01",
    title: "Free Consultation",
    description: "Meet with our counselors to discuss your goals and eligibility.",
  },
  {
    icon: FaSchool,
    number: "02",
    title: "Choose University",
    description: "Select the right university and program based on your profile.",
  },
  {
    icon: FaFileLines,
    number: "03",
    title: "Submit Application",
    description: "Prepare documents and submit your application successfully.",
  },
  {
    icon: FaPassport,
    number: "04",
    title: "Visa Processing",
    description: "Receive complete guidance for your student visa application.",
  },
  {
    icon: FaPlane,
    number: "05",
    title: "Start Your Journey",
    description: "Travel to South Korea and begin your academic adventure.",
  },
];

const StudyProcess = () => {
  return (
    <section className="py-16 bg-light">
      <div className="container">
        <SectionHeader
          subTitle="Steps"
          title="Your Study Abroad Process"
          className="mb-12"
        />

        <div className="relative">
          <div className="absolute left-7 lg:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 lg:-translate-x-1/2" />

          <div className="flex flex-col gap-8">
            {steps.map((step, index) => (
              <ProcessStep key={step.number} {...step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyProcess;