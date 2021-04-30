import React from 'react';
import './GetInvolvedOne.css';
import { Button } from 'react-bootstrap';

const GetInvolvedOne = () => {
    return (
        <>
            <div className="main-content container-fluid">
                <div className="header-tag">
                    <h6>GET INVOLVED</h6>
                    <h4>Ways to help</h4>
                    <div className="text-underline"></div>   
                </div>
                <div className="row">
                    <div className="col-md-4 card-one">
                        <div className="card-tag">
                            <h2>Donate Blood</h2>
                            <p>Donate blood today. Help save lives.</p>
                            <Button className="button-glow" variant="danger">Learn More</Button>
                        </div>
                    </div>
                    <div className="col-md-4 card-two">
                        <div className="card-tag">
                            <h2>Volunteer Team</h2>
                            <p>We are always looking for your help.</p>
                            <Button className="button-glow" variant="danger">Be a Volunteer</Button>
                        </div>
                    </div>
                    <div className="col-md-4 card-three">
                        <div className="card-tag">
                            <h2>Donate Money</h2>
                            <p>Your financial gift can help people who need it most.</p>
                            <Button className="button-glow" variant="danger">Donate Now</Button>
                        </div>
                    </div>
                    
                </div>
            </div> 
        </>
    );
};

export default GetInvolvedOne;