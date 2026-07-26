import PageHero from "@/app/components/front/common/PageHero";
import AllServices from "@/app/components/front/section/AllServices";
import CtaSection from "@/app/components/front/section/CtaSection";
import ServicesOverview from "@/app/components/front/section/ServicesOverview";
import React from "react";

const ServicesPage = () => {
  return (
    <>
      <PageHero
        title="Our Services"
        description="Complete support for every stage of your study abroad journey."
      />
      <ServicesOverview />
      <AllServices />
      <CtaSection />
    </>
  );
};

export default ServicesPage;
