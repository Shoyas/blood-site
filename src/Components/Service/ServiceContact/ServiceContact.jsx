import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                <Button className="button-glow" variant="danger">
                    <Link to="/contact" className="nav-link nav-button">Contact Us</Link>
                </Button>
           </div>
        </>
    );
};

export default ServiceContact;