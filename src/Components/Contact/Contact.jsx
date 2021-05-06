import React from 'react';
import Footer from '../SharedComponents/Footer/Footer';
import Navigation from '../SharedComponents/Navigation/Navigation';
import ContactBody from './ContactBody/ContactBody';

const Contact = () => {
    return (
        <>
          <Navigation/>
          <ContactBody/>
          <Footer/>  
        </>
    );
};

export default Contact;