import AllServices from '@/app/components/front/section/AllServices';
import ServicesOverview from '@/app/components/front/section/ServicesOverview';
import React from 'react';

const ServicesPage = () => {
    return (
        <div>
            <ServicesOverview />
            <AllServices/>
        </div>
    );
};

export default ServicesPage;