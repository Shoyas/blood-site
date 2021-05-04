import React from 'react';
import './BloodRequirement.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from '../../asset/image/mt-1802-content-bg02.jpg';

const BloodRequirement = () => {
    
    return (
        <div className="container-fluid bloodRequire-area">
            <div className="row">
                <div className="col-md-5 offset-1 bloodRequire-tag">
                    <h4>Requirements by blood <br/> donation type</h4>
                    <div className="text-underline mb-2"></div>
                    <p><strong>
                    These are some of the requirements donors must meet to be eligible to donate blood based on their donation type. 
                    </strong></p>
                    <h5>Blood Donation</h5>
                    <ul>
                        <li><i>Donation frequency: Every 56 days*</i></li>
                        <li><i>You must be in good health and feeling well**</i></li>
                        <li><i>You must be at least 16 years old in most states</i></li>
                        <li><i>You must weigh at least 110 lbs</i></li>
                    </ul>
                    <p><strong>
                    If you have any questions regarding your eligibility, please email us at <a href="mailto:bloodSite1@gmail.com">bloodSite1@gmail.com</a>
                    </strong></p>
                    <Button className="button-glow mt-4" variant="danger">Make An Appointment</Button>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={image} alt="" srcset=""/>
                </div>
            </div>
        </div>
    );
};

export default BloodRequirement;