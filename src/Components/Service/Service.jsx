import React from 'react';
import Footer from '../SharedComponents/Footer/Footer';
import Navigation from '../SharedComponents/Navigation/Navigation';
import BiomedicalService from './BiomedicalService/BiomedicalService';
import BloodInform from './BloodInform/BloodInform';
import BloodProduct from './BloodProduct/BloodProduct';
import ServiceContact from './ServiceContact/ServiceContact';
import ServiceHeader from './ServiceHeader/ServiceHeader';

const Service = () => {
    return (
        <>
            <Navigation/>
            <ServiceHeader/>
            <BloodProduct/>
            <BloodInform/>
            <BiomedicalService/>
            <ServiceContact/>
            <Footer/>
        </>
    );
};

export default Service;