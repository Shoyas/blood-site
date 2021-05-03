import React from 'react';
import './GetInvolvedTwo.css';
import image_two from '../../../asset/image/mt-1802-content-bg02.jpg';

const GetInvolvedTwo = () => {
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-5 offset-1 header-tag-two container-fluid">
                        <h6>GET INVOLVED</h6>
                        <h4>Ways to help</h4>
                        <div className="text-underline-two mb-2"></div>
                        <i>
                            Blood Center is public donation center with blood donation members in the <br/> changing health care system. Founded in 1978, Blood Center is one of the <br/> nation’s oldest and largest nonprofit transfusion medicine organizations. We <br/> provide a blood and volunteer services across the US. With our national footprint, <br/> deep community roots and specialized services, we are the thread that <br/> connects people and resources together to fuel progress in transfusion <br/> medicine.
                        </i>
                        <div className="row">
                            <div className="col-md-6">
                                <ul>
                                    <li><i>Inspiring people to give blood</i></li>
                                    <li><i>Specialist blood donors and clinical supervision.</i></li>
                                    <li><i>Producing a safe and ready blood supply</i></li>
                                    
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul>
                                    <li><i>Increasing communication with our members.</i></li>
                                    <li><i>High quality assessment, diagnosis and treatment.</i></li>
                                    <li><i>Offering specialized patient services and pharmaceuticals</i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={image_two} alt="" srcset=""/>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default GetInvolvedTwo;