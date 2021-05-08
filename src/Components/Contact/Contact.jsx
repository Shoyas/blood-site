import React from 'react';
import Footer from '../SharedComponents/Footer/Footer';
import Navigation from '../SharedComponents/Navigation/Navigation';
import ContactBody from './ContactBody/ContactBody';
import ContactHeader from './ContactHeader/ContactHeader';

const Contact = () => {
    return (
        <>
          <Navigation/>
          <ContactHeader/>
          <ContactBody/>
          <Footer/>  
        </>
    );
};

export default Contact;