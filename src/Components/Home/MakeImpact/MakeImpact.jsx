import React from 'react';
import './MakeImpact.css';
import image_one from '../../asset/image/mt-1802-content-bg01.jpg';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const MakeImpact = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid" src={image_one} alt="" srcset=""/>
                    </div>
                    <div className="col-md-6 impact-tag">
                        <h6>MAKE AN IMPACT</h6>
                        <h4>Who We Are</h4>
                        <div className="text-underline mb-2"></div>
                        <i>
                            Your financial gift can <strong style={{color: 'skyblue'}}>help a thousand <br/> children</strong> who struggle from illnesses. <br/> 
                            Your gift can provide the necessary medicine, 
                            treatment, and other essentials.
                        </i>
                        <br/>
                        <Button className="button-glow" variant="danger">
                            <Link to="/donate" className="nav-link nav-button">Donate Now</Link>
                        </Button>
                    </div>
                </div>
            </div>   
        </>
    );
};

export default MakeImpact;