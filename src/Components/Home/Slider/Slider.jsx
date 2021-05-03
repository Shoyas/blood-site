import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import './Slider.css';
import slideImage1 from '../../asset/image/mt-1802-slider-img01.jpg';
import slideImage2 from '../../asset/image/mt-1802-slider-img02.jpg';


const Slider = () => {
    return (
        <>
            <Carousel className="response-slider">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slideImage1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="slider-tag">
                            <h3>Your Blood Donation Matter. <br/> Give Today!</h3>
                            <p>All types of blood are needed to help patients</p>
                            <Button className="button-glow" variant="danger">Make An Appointment</Button>
                        </div>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slideImage2}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                        <div className="slider-tag">
                            <h3>Save A Life. <br/> Donate Blood</h3>
                            <p>One point of blood can save the life</p>
                            <span className="align-content-start">
                                <Button className="button-glow" variant="danger">Donate Now</Button>
                                <Button className="button-glow" style={{marginLeft: '1%'}} variant="danger">Contact Us</Button>
                            </span>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>   
        </>
    );
};

export default Slider;