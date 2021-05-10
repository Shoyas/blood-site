import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { UserContext } from '../../../App';
import logo from '../../asset/image/mt-1802-logo02.png';
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router-dom';

const Navigation = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    
    const { from } = location.state || { from: { pathname: "/" } };

    const handleSignOut = () => {
        firebase.auth().signOut()
        .then((res) => {
            const loggedOutUser = {
                isSignedIn: false,
                newUser: false,
                name: '',
                email: '',
                password: '',
                photo: '',
                error: '',
            }
            setLoggedInUser(loggedOutUser);
            history.replace(from);
        })
        .catch((err) => {
            // An error happened.
        });
    }
    return (
        <>
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
                            <Link className="nav-link">{loggedInUser.name}</Link>
                            
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
                                <Link className="nav-link" to="/support">Support Us</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                            </Nav.Link>
                            <Nav.Link>
                                {
                                    loggedInUser.isSignedIn ?
                                    <Link className="nav-link" onClick={handleSignOut}>Sign out</Link>
                                    :
                                    <Link className="nav-link" to="/login">Login</Link>
                                }
                            </Nav.Link>
                            <Nav.Link>
                                <Link className="nav-link" to="/profile">Profile</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    );
};

export default Navigation;