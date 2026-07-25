import React from 'react';
import Hero from '../components/front/section/hero';
import WhyStydyinKorea from '../components/front/section/Benifits';
import CtaSection from '../components/front/section/CtaSection';
import FaqSection from '../components/front/section/FaqSection';

const Home = () => {
  return (
    <div>
      <Hero />
      <WhyStydyinKorea />
      <FaqSection />
      <CtaSection />
    </div>
  );
};

export default Home;