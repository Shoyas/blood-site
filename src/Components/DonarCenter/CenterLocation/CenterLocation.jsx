import React from 'react';
import './CenterLocation.css';
import imageOne from '../../asset/image/mt-1802-donor_center-img01.jpg';
import imageTwo from '../../asset/image/mt-1802-donor_center-img02.jpg';
import imageThree from '../../asset/image/mt-1802-donor_center-img03.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faLocationArrow, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';


const CenterLocation = () => {
    return (
        <>
            <div className="container center-tag mt-5 mb-5">
                    <h2>Location of centers</h2>
                    <div className="header-line"></div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="location-card">
                                <img src={imageOne} alt="" srcset=""/>
                                <div className="location-card-content">
                                    <h3>Miami Donor Centre</h3>
                                    <i><FontAwesomeIcon style={{color: '#ff0000'}} icon={faLocationArrow} /> 325 SE. 1nd Court Ft. Lauderdale FL 33301</i> 
                                    <br/>
                                    <i><FontAwesomeIcon style={{color: '#ff0000'}} icon={faPhone} /> Phone: +880123456789</i>
                                    <br/>
                                    <i><FontAwesomeIcon style={{color: '#ff0000'}} icon={faMailBulk} /> Email: bloodSite1@gmail.com</i>
                                    <br/>
                                    <i><FontAwesomeIcon style={{color: '#ff0000'}} icon={faCalendar} /> Open Every Day: 8:00 am - 22:00 pm</i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="location-card">
                                <img src={imageTwo} alt="" srcset=""/>
                                <div className="location-card-content">
                                    <h3>Central Donor Center</h3>
                                    <i><FontAwesomeIcon style={{color: '#ff0000'}} icon={faLocationArrow} /> 325 SE. 1nd Court Ft. Lauderdale FL 33301</i> 
                                    <br/>
                                    <i><FontAwesomeIcon style={{color: '#ff0000'}} icon={faPhone} /> Phone: +880123456789</i>
                                    <br/>
                                    <i><FontAwesomeIcon style={{color: '#ff0000'}} icon={faMailBulk} /> Email: bloodSite1@gmail.com</i>
                                    <br/>
                                    <i><FontAwesomeIcon style={{color: '#ff0000'}} icon={faCalendar} /> Open Every Day: 8:00 am - 22:00 pm</i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="location-card">
                                <img src={imageThree} alt="" srcset=""/>
                                <div className="location-card-content">
                                    <h3>Palm Donor Center</h3>
                                    <i><FontAwesomeIcon style={{color: '#ff0000'}} icon={faLocationArrow} /> 325 SE. 1nd Court Ft. Lauderdale FL 33301</i> 
                                    <br/>
                                    <i><FontAwesomeIcon style={{color: '#ff0000'}} icon={faPhone} /> Phone: +880123456789</i>
                                    <br/>
                                    <i><FontAwesomeIcon style={{color: '#ff0000'}} icon={faMailBulk} /> Email: bloodSite1@gmail.com</i>
                                    <br/>
                                    <i><FontAwesomeIcon style={{color: '#ff0000'}} icon={faCalendar} /> Open Every Day: 8:00 am - 22:00 pm</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default CenterLocation;