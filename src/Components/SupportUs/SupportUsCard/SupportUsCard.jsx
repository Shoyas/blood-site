import React from 'react';
import './SupportUsCard.css';
import imageOne from '../../asset/image/mt-1802-home-img03.jpg';
import imageTwo from '../../asset/image/mt-1802-home-img02.jpg';
import imageThree from '../../asset/image/mt-1802-home-img06.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faLocationArrow, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';

const SupportUsCard = () => {
    return (
        <>
            <div className="container center-tag mt-5 mb-5">
                    <h2>Support Us</h2>
                    <div className="header-line"></div>
                    <p><strong>Donating funds to help advance our research, pouring juice for blood donors, or hosting a blood drive at your organization are all ways that you can get involved.</strong></p>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="support-location-card">
                                <img src={imageOne} alt="" srcset=""/>
                                <div className="support-location-card-content">
                                    <h3>Donate Funds</h3>
                                    <i>Your financial gift can help a thousand</i>
                                    <i>children who struggle from illnesses. Your gift</i>
                                    <i>can provide the necessary medicine,</i>
                                    <i>treatment, and other essentials.</i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="location-card">
                                <img src={imageTwo} alt="" srcset=""/>
                                <div className="support-location-card-content">
                                    <h3>Become a Volunteer</h3>
                                    <i>Volunteers are playing a vital role in helping</i>
                                    <i>our center save lives. We are always looking for</i>
                                    <i>your help. Join our team today</i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="location-card">
                                <img src={imageThree} alt="" srcset=""/>
                                <div className="support-location-card-content">
                                    <h3>Host a Blood Drive</h3>
                                    <i>Inspiring others to give blood by hosting a</i>
                                    <i>blood drive is a rewarding way to benefit your</i>
                                    <i>community.</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default SupportUsCard;