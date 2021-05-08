import React from 'react';
import './ContactBody.css';
import { useForm } from "react-hook-form";
import { Button } from 'react-bootstrap';

const ContactBody = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const contactRegisterInfoSubmit = volunteerData => console.log(volunteerData);
    console.log(watch("example"));
    return (
        <div className="container-fluid mt-5 mb-5">
            <div className="row">
                <div className="col-md-6">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3636.6278614979333!2d89.00710391536933!3d24.28972537387492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc1a2e72db0757%3A0xfc1a32911db39651!2sBangladesh%20Army%20University%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sbd!4v1620363057982!5m2!1sen!2sbd" className="map-area" allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div className="col-md-6">
                    <form onSubmit={handleSubmit(contactRegisterInfoSubmit)} className="mt-5">
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
                        <Button className="button-glow" variant="danger" type="submit">Send</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactBody;