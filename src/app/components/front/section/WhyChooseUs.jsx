// components/WhyChooseUs.jsx
import Image from "next/image";
import {
  FaUserGraduate,
  FaPassport,
  FaHandsHolding,
  FaAward,
} from "react-icons/fa6";
import SectionHeader from "../common/SectionHeader";
import WhyChooseUsItem from "../widget/WhyChooseUsItem";

const reasons = [
  {
    icon: FaUserGraduate,
    title: "Expert Counselors",
    description:
      "Certified consultants with years of experience guiding students to top universities.",
  },
  {
    icon: FaPassport,
    title: "High Visa Success Rate",
    description:
      "Proven track record of successful student visa approvals for South Korea.",
  },
  {
    icon: FaHandsHolding,
    title: "End-to-End Support",
    description:
      "From university selection to landing in Korea, we're with you every step.",
  },
  {
    icon: FaAward,
    title: "Trusted by Thousands",
    description:
      "A growing community of students who achieved their study abroad dreams with us.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-light">
      <div className="container">
        <SectionHeader
          subTitle="Why Choose Us"
          title="Your Success Is Our Priority"
          className="mb-12"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="relative">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/why-choose-us.jpg"
                alt="Students who studied abroad with our guidance"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-8 -right-4 sm:right-4 bg-white rounded-lg border border-dark/10 shadow-lg px-8 py-6 text-center">
              <span className="block text-4xl font-heading font-bold text-primary">
                98%
              </span>
              <span className="text-sm font-semibold">Visa Success Rate</span>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {reasons.map((reason) => (
              <WhyChooseUsItem key={reason.title} {...reason} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
