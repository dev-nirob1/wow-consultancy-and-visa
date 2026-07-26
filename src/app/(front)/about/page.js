import PageHero from "@/app/components/front/common/PageHero";
import CtaSection from "@/app/components/front/section/CtaSection";
import Founder from "@/app/components/front/section/Founder";
import SuccessJourney from "@/app/components/front/section/SuccessJourney";
import Team from "@/app/components/front/section/Team";
import WhoWeAre from "@/app/components/front/section/WhoWeAre";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageHero
        title="About Us"
        description="Based in Busan, South Korea, guiding students through every step of their study abroad journey."
      />
      <WhoWeAre />
      <Founder />
      <Team />
      <SuccessJourney />
      <CtaSection />
    </>
  );
};

export default AboutPage;
