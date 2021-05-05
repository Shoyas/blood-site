import React from 'react';
import './BloodInform.css';
import image from '../../asset/image/mt-1802-slider-img01.jpg';


const BloodInform = () => {
    return (
        <div className="container-fluid bloodRequire-area">
            <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid" src={image} alt="" srcset=""/>
                </div>
                <div className="col-md-5 offset-1 bloodRequire-tag">
                    
                    <ul>
                        <li><i>Donation frequency: Every 56 days*</i></li>
                        <li><i>You must be in good health and feeling well**</i></li>
                        <li><i>You must be at least 16 years old in most states</i></li>
                        <li><i>You must weigh at least 110 lbs</i></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BloodInform;