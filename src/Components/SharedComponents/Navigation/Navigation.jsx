import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from '../../asset/image/mt-1802-logo02.png';

const Navigation = () => {
    return (
        <>
        {/* style={{marginBottom: '5.6%'}} */}
            <div style={{marginBottom: '5.6%'}}>
                <Navbar expand="lg" bg="light" variant="light" fixed="top">
                    <Navbar.Brand>
                        <Link className="nav-link d-flex" to="/">
                            <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src={logo} alt="" srcset=""/>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link>
                                <Link className="nav-link" to="/home">Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className="nav-link" to="/donateBlood">Donate Blood</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className="nav-link" to="/donarLocation">Donar Location</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className="nav-link" to="/appointment">Appointment</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className="nav-link" to="/services">Services</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className="nav-link" to="/aboutUs">About Us</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className="nav-link" to="/contactUs">Contact Us</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    );
};

export default Navigation;