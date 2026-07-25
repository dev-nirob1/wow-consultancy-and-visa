import React from 'react';
import Hero from '../components/front/section/hero';
import WhyStydyinKorea from '../components/front/section/Benifits';
import CtaSection from '../components/front/section/CtaSection';
import FaqSection from '../components/front/section/FaqSection';
import Testimonials from '../components/front/section/Testimonials';
import PartnerUniversities from '../components/front/section/PartnerUniversities';
import StudyProcess from '../components/front/section/StudyProcess';
import WhyChooseUs from '../components/front/section/WhyChooseUs';

const Home = () => {
  return (
    <div>
      <Hero />
      <WhyStydyinKorea />
      <WhyChooseUs/>
      <StudyProcess/>
      <PartnerUniversities />
      <Testimonials />
      <FaqSection />
      <CtaSection />
    </div>
  );
};

export default Home;