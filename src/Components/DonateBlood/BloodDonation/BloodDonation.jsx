import React from 'react';
import './BloodDonation.css';
import image from '../../asset/image/mt-1802-home-img06.jpg';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BloodDonation = () => {
    
    return (
        <div className="container-fluid bloodDonation-area">
            <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid" src={image} alt="" srcset=""/>
                </div>
                <div className="col-md-6">
                    <h1>Blood Donor’s Guide</h1>
                    <p><strong>
                    If you are new to blood donation, download our free donor's guide. There are we answer the most frequently asked questions. Learn the truth about the blood donation process and how you can help patients.
                    </strong></p>
                    <Button className="button-glow mt-4" variant="danger">Download</Button>
                </div>
            </div>
            
        </div>
    );
};

export default BloodDonation;