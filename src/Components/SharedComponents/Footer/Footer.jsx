import React from 'react';
import './Footer.css';
import logo from '../../asset/image/mt-1802-logo02.png';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";


const Footer = () => {
    let date = new Date();
    return (
        <div className="footer-background">
            <div className="container container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <Link className="nav-link d-flex logo-side" to="/">
                            <img className="img-fluid" src={logo} alt="Blood Center" srcset=""/>
                            <h4>Blood Center</h4>
                        </Link>
                        <i className="mt-5 logo-paragraph">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                        </i>
                        
                    </div>
                    <div className="col-md-4">
                        <div className="tag-heading">
                            <h3>Information</h3>
                        </div>
                        <Link className="nav-link menu-item" to="/home"><ul>
                            <li><strong className="menu-tag">Home</strong></li>
                        </ul></Link>
                        <Link className="nav-link menu-item"  to="/donateBlood"><ul>
                            <li><strong className="menu-tag">Donate Blood</strong></li>
                        </ul></Link>
                        <Link className="nav-link menu-item"  to="/donarLocation"><ul>
                            <li><strong className="menu-tag">Donor center locations</strong></li>
                        </ul></Link>
                        <Link className="nav-link menu-item" to="/appointment"><ul>
                            <li><strong className="menu-tag">Appointment</strong></li>
                        </ul></Link>
                        <Link className="nav-link menu-item" to="/services"><ul>
                            <li><strong className="menu-tag">Services</strong></li>
                        </ul></Link>
                        <Link className="nav-link menu-item" to="/supportUs"><ul>
                            <li><strong className="menu-tag">Support us</strong></li>
                        </ul></Link>
                        <Link className="nav-link menu-item" to="/about"><ul>
                            <li><strong className="menu-tag">About Us</strong></li>
                        </ul></Link>
                        <Link className="nav-link menu-item" to="/contact"><ul>
                            <li><strong className="menu-tag">Contact Us</strong></li>
                        </ul></Link>
                    </div>
                    <div className="col-md-4">
                        <div className="tag-heading">
                            <h3>Contact Us</h3>
                            <i className="mt-5 logo-paragraph">
                            Bangladesdh Army University of Engineering & Technology (BAUET), Qadirabad Cantoment, Doyarampur, Natore.
                            <br/>
                            <br/>
                            Phone: +880123456789
                            <Link className="nav-link menu-item">bloodSite1@gmail.com</Link>
                            </i>
                        </div>
                        <div className="tag-heading mt-5">
                            <h3>Social Media</h3>
                            <i className="mt-5 logo-paragraph">
                                View our social media profiles
                            </i>
                            <div className="social-media d-flex">
                                <Link className="nav-link media-item" to="#"><FaFacebookF/></Link>
                                <Link className="nav-link media-item" to="#"><AiOutlineTwitter /></Link>
                                <Link className="nav-link media-item" to="#"><FaGooglePlusG /></Link>
                                <Link className="nav-link media-item" to="#"><FaLinkedinIn /></Link>
                                <Link className="nav-link media-item" to="#"><AiOutlineInstagram /></Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div>
                    <small><strong  className="copy-right-tag">@{date.getFullYear()} All rights reserved.</strong></small>
                </div>
            </div>
        </div>
    );
};

export default Footer;