import AllServices from '@/app/components/front/section/AllServices';
import CtaSection from '@/app/components/front/section/CtaSection';
import ServicesOverview from '@/app/components/front/section/ServicesOverview';
import React from 'react';

const ServicesPage = () => {
    return (
        <>
            <ServicesOverview />
            <AllServices/>
            <CtaSection/>
        </>
    );
};

export default ServicesPage;