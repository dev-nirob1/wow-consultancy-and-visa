import CtaSection from '@/app/components/front/section/CtaSection';
import Founder from '@/app/components/front/section/Founder';
import WhoWeAre from '@/app/components/front/section/WhoWeAre';
import React from 'react';

const AboutPage = () => {
    return (
        <>
            <WhoWeAre />
            <Founder />
            <CtaSection />
        </>
    );
};

export default AboutPage;