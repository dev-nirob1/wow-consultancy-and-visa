import React from 'react';
import Hero from '../components/front/section/hero';
import WhyStydyinKorea from '../components/front/section/Benifits';
import CtaSection from '../components/front/section/CtaSection';

const Home = () => {
  return (
    <div>
      <Hero/>
      <WhyStydyinKorea/>
      <CtaSection/>
    </div>
  );
};

export default Home;