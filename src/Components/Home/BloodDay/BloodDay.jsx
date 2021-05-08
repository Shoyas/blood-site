import React, { useState } from 'react';
import './BloodDay.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faCalendar, faClock} from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form";
import { Button } from 'react-bootstrap';

const BloodDay = () => {
    let date = new Date();
    // const [currentTime, setCurrentTime] = useState(date.toLocaleTimeString());
    // const updateTime = () => {
    //     let time = new Date().toLocaleTimeString();
    //     setCurrentTime(time);
    // }
    // setInterval(updateTime, 1000);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const volunteerRegisterInfoSubmit = volunteerData => console.log(volunteerData);
    console.log(watch("example"));
    
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-6 bloodDay-image">
                        <div className="bloodDay-image-tag">
                            <h3>Donation Campaign</h3>
                            <i><strong>
                            Campaigns to encourage new donors to join and existing to continue to give blood.
                            </strong></i>
                        </div>
                    </div>
                    <div className="col-md-6 mt-5">
                        <div className="bloodDay-tag container-fluid">
                            <h2>World Blood Donors Day</h2>
                            <i><strong>
                            Every year, on 14 June, countries around the world celebrate World Blood Donor Day. The event serves to raise awareness of the need for safe blood and blood products and to thank blood donors for their life-saving gifts of blood.
                            </strong></i>
                            <div className="row">
                                <div className="col-md-6">
                                    <i><FontAwesomeIcon icon={faMap} /> Location :</i>
                                    <p><strong>
                                    Bangladesdh Army University of Engineering & Technology (BAUET), Qadirabad Cantoment, Doyarampur, Natore. 
                                    </strong></p>
                                    <i><FontAwesomeIcon icon={faCalendar} />Date :</i>
                                    <p><strong>
                                    14 June {date.getFullYear()}
                                    </strong></p>
                                    <i><FontAwesomeIcon icon={faClock} />Time :</i>
                                    <p><strong>
                                    9.00 AM - 8.00 PM
                                    </strong></p>
                                </div>
                                <div className="col-md-6">
                                    <form onSubmit={handleSubmit(volunteerRegisterInfoSubmit)} className="mt-5">
                                        <input placeholder="Name" className="input-design" {...register("name", { required: true })} />
                                        {errors.exampleRequired && <span>Name is required</span>}
                                        <br/>
                                        <br/>
                                        <input placeholder="Email" className="input-design" type="email" {...register("email", { required: true })} />
                                        {errors.exampleRequired && <span>Email is required</span>}
                                        <br/>
                                        <br/>
                                        <input placeholder="Phone" className="input-design" type="tel" {...register("phone", { required: true })} />
                                        {errors.exampleRequired && <span>Phone is required</span>}
                                        <br/>
                                        <br/>
                                        <Button className="button-glow" variant="danger" type="submit">Join Today</Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    );
};

export default BloodDay;