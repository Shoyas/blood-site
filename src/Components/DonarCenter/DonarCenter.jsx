import React from 'react';
import Footer from '../SharedComponents/Footer/Footer';
import Navigation from '../SharedComponents/Navigation/Navigation';
import CenterLocation from './CenterLocation/CenterLocation';
import ContactAppointment from './ContactAppointment/ContactAppointment';
import DonarCenterHeader from './DonarCenterHeader/DonarCenterHeader';

const DonarCenter = () => {
    return (
        <>
            <Navigation/>
            <DonarCenterHeader/>
            <CenterLocation/>
            <ContactAppointment/>
            <Footer/>

        </>
    );
};

export default DonarCenter;