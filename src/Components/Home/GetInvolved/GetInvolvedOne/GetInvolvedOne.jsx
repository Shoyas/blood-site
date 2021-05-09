import React from 'react';
import './GetInvolvedOne.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const GetInvolvedOne = () => {
    return (
        <>
            <div className="container-fluid header-tag-one">
                <h6>GET INVOLVED</h6>
                <h4>Ways to help</h4>
                <div className="text-underline-one mb-2"></div>   
                <div className="row mt-5">
                    <div className="col-md-4 card-one response-card">
                        <div className="card-tag">
                            <h2>Donate Blood</h2>
                            <p>Donate blood today. Help save lives.</p>
                            <Button className="button-glow" variant="danger">
                                <Link to="/donateBlood" className="nav-link nav-button">Learn More</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="col-md-4 card-two response-card">
                        <div className="card-tag">
                            <h2>Volunteer Team</h2>
                            <p>We are always looking for your help.</p>
                            <Button className="button-glow" variant="danger">
                                <Link to="/support" className="nav-link nav-button">Be a Volunteer</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="col-md-4 card-three response-card">
                        <div className="card-tag">
                            <h2>Donate Money</h2>
                            <p>Your financial gift can help people who need it most.</p>
                            <Button className="button-glow" variant="danger">
                                <Link to="/donate" className="nav-link nav-button">Donate Now</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default GetInvolvedOne;