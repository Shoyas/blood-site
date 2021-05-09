import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServiceCards.css';


const ServiceCards = () => {
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-4 service-card-one response-card">
                        <div className="service-card-tag">
                            <h2>Donation Location</h2>
                            <Button className="button-glow" variant="danger">
                                <Link to="/donateBlood" className="nav-link nav-button">Learn More</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="col-md-4 service-card-two response-card">
                        <div className="service-card-tag">
                            <h2>Eligibility Requirements</h2>
                            <Button className="button-glow" variant="danger">
                                <Link to="/donateBlood" className="nav-link nav-button">Learn More</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="col-md-4 service-card-three response-card">
                        <div className="service-card-tag">
                            <h2>The Donation Process</h2>
                            <Button className="button-glow" variant="danger">
                                <Link to="/donateBlood" className="nav-link nav-button">Learn More</Link>
                            </Button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default ServiceCards;