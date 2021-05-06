import React from 'react';
import './SupportUsVolunteer.css';
import { useForm } from "react-hook-form";
import { Button } from 'react-bootstrap';

const SupportUsVolunteer = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const volunteerRegisterInfoSubmit = volunteerData => console.log(volunteerData);
    console.log(watch("example"));
    return (
        <div className="container container-fluid mt-5 mb-5">        
            <div className="row">
                <div className="col-md-6 mt-5 support-volunteer">
                    <h2>Become a Volunteer</h2>
                    <i><strong>
                    Volunteers are playing a vital role in helping our center save lives. Those who are willing and has the desire to help those in need. If you are young, active and ready to change the world for the better, we look forward to seeing you in our volunteer family. We are always looking for your help. Join our team today
                    </strong></i>
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
                        <textarea placeholder="Message" className="input-design" type="text" rows="4" cols="50" {...register("message", { required: true })}></textarea>
                        {errors.exampleRequired && <span>Message is required</span>}
                        <br/>
                        <br/>
                        <Button className="button-glow" variant="danger" type="submit">Join Today</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SupportUsVolunteer;