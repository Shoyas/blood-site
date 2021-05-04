import React from 'react';
import Footer from '../SharedComponents/Footer/Footer';
import Navigation from '../SharedComponents/Navigation/Navigation';
import DonateBloodBody from './DonateBloodBody/DonateBloodBody';
import DonateBloodHeader from './DonateBloodHeader/DonateBloodHeader';

const DonateBlood = () => {
    return (
        <>
            <Navigation />
            <DonateBloodHeader />   
            <DonateBloodBody />
            <Footer />
        </>
    );
};

export default DonateBlood;