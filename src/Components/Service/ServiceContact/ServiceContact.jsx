import React from 'react';
import { Button } from 'react-bootstrap';
import './ServiceContact.css';

const ServiceContact = () => {
    return (
        <>
           <div className="serviceContact-area mt-5">
                <div className="tag-line"></div>
                <div className="donar-tag">
                    <h2>For more information</h2>
                    <i><strong>please contact us</strong></i>
                </div>
                <Button className="button-glow" variant="danger">Contact Us</Button>
           </div>
        </>
    );
};

export default ServiceContact;