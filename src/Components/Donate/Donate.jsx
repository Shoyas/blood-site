import React from 'react';
import Footer from '../SharedComponents/Footer/Footer';
import Navigation from '../SharedComponents/Navigation/Navigation';
import DonateWithPayWay from './DonateWithPayWay/DonateWithPayWay';

const Donate = () => {
    return (
        <>
            <Navigation/>
            <DonateWithPayWay/>   
            <Footer/>
        </>
    );
};

export default Donate;