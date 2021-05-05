import React from 'react';
import './ContactAppointment.css';
import { Button } from 'react-bootstrap';


const ContactAppointment = () => {
    return (
        <>
           <div className="contactAppointment-area mt-5">
                <div className="tag-line"></div>
                <div className="donar-tag">
                    <h2>Call us (+88) 0123456789</h2>
                    <i><strong>or click the link below to book your appointment</strong></i>
                </div>
                <Button className="button-glow" variant="danger">Make An Appointment</Button>
           </div>
        </>
    );
};

export default ContactAppointment;