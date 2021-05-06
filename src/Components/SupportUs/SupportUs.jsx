import React from 'react';
import Footer from '../SharedComponents/Footer/Footer';
import Navigation from '../SharedComponents/Navigation/Navigation';
import SupportUsCard from './SupportUsCard/SupportUsCard';
import SupportUsFinancial from './SupportUsFinantial/SupportUsFinancial';
import SupportUsHeader from './SupportUsHeader/SupportUsHeader';
import SupportUsVolunteer from './SupportUsVolunteer/SupportUsVolunteer';

const SupportUs = () => {
    return (
        <>
            <Navigation/>
            <SupportUsHeader/>   
            <SupportUsCard/>
            <SupportUsFinancial/>
            <SupportUsVolunteer/>
            <Footer/>

        </>
    );
};

export default SupportUs;