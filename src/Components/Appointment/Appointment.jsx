import React from 'react';
import Footer from '../SharedComponents/Footer/Footer';
import Navigation from '../SharedComponents/Navigation/Navigation';
import AppointmentBody from './AppointmentBody/AppointmentBody';
import AppointmentHeader from './AppointmentHeader/AppointmentHeader';

const Appointment = () => {
    return (
        <>
            <Navigation/>
            <AppointmentHeader/>
            <AppointmentBody/>
            <Footer/>
        </>
    );
};

export default Appointment;