import React from 'react';
import './BecomeDonar.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const BecomeDonar = () => {
    return (
        <>
           <div className="become-donar-area">
                <div className="tag-line"></div>
                <div className="donar-tag">
                    <h2>Become a Blood Donor</h2>
                    <i><strong>All types of blood are needed to help patients</strong></i>
                </div>
                <Button className="button-glow" variant="danger">
                    <Link to="/appointment" className="nav-link nav-button">Schedule Appointment</Link>
                </Button>
           </div>
        </>
    );
};

export default BecomeDonar;