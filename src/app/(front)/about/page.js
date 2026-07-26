import CtaSection from '@/app/components/front/section/CtaSection';
import Founder from '@/app/components/front/section/Founder';
import Team from '@/app/components/front/section/Team';
import WhoWeAre from '@/app/components/front/section/WhoWeAre';
import React from 'react';

const AboutPage = () => {
    return (
        <>
            <WhoWeAre />
            <Founder />
            <Team />
            <CtaSection />
        </>
    );
};

export default AboutPage;