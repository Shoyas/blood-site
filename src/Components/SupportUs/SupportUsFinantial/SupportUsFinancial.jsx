import React from 'react';
import './SupportUsFinancial.css';
import image from '../../asset/image/mt-1802-support-img04.jpg';
import { Button } from 'react-bootstrap';


const SupportUsFinancial = () => {
    return (
        <>
            <div className="supportUs-financial">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 supportUs-center-tag">
                            <h2>Financial Donation</h2>
                            <div className="supportUs-header-line"></div>
                            <p><strong>Please join our charitable partners by making a financial gift. You can provide general support or designate your gift to a specific area. Your financial gift can help to save thousand lives who struggle from illnesses. Your gift can provide the necessary medicine, treatment, and other essentials.  Financial donation can be made online, by phone, or mail.</strong></p>
                            <div className="support-image">
                                <img className="img-fluid" src={image} alt="" srcset=""/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="supportUs-center-tag mt-5">
                                <h2>How to Give</h2>
                                <div className="supportUs-header-line"></div>
                                <h6>Monthly Giving</h6>
                                <p>Monthly Giving is the best way to ensure our organization has a steady stream of funds helping more patients in need. For as little as $5 a month you can help us save more lives each year.</p>
                                <Button className="button-glow mt-4" variant="danger">Donate</Button>
                            </div>
                            <div className="supportUs-center-tag mt-5">
                                <h6>Support for Urgent Cases</h6>
                                <p>We provide fast, competent support for urgent cases. We organize direct on-site support when necessary. We personally monitor all repairs.Your little giving can be very important for a person who needs.</p>
                                <Button className="button-glow mt-4" variant="danger">Donate</Button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SupportUsFinancial;