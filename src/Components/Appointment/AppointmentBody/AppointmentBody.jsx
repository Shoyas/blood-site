import React, { useState } from 'react';
import './AppointmentBody.css';
import { useForm } from "react-hook-form";
import { Button } from 'react-bootstrap';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';


const AppointmentBody = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [selectedDate, setSelectedDate] = useState(new Date());
    

    const appointmentInfoSubmit = (appointmentInfo) => {
        const appointmentDate = {'date': selectedDate};
        const appointment = {...appointmentInfo,  ...appointmentDate};
        
        console.log(appointment);
        
    }
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    // console.log(selectedDate);

    return (
        <div className="container">
            <form onSubmit={handleSubmit(appointmentInfoSubmit)} className="mt-5 mb-5">
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
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <select name="gender" className="form-control" {...register("gender", { required: true })} >
                            <option disabled={false} value="Not set">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Not set">Other</option>
                        </select>
                        {errors.gender && <span className="text-danger">Gender is required</span>}
                    </div>
                    <div className="col-md-6 mb-4">
                        <input placeholder="Age" className="form-control" type="number" min="0" {...register("age", { required: true })} />
                        {errors.exampleRequired && <span>Age is required</span>}
                    </div>
                </div>
                <br/>
                <br/>
                <div className="date-form">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        // format="dd/MM/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Set appointment date"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                        'aria-label': 'change date',
                        }}
                        
                    />
                </MuiPickersUtilsProvider>
                </div>
                <br/>
                <br/>
                <Button className="button-glow" variant="danger" type="submit">Send</Button>
            </form>
            
        </div>
    );
};

export default AppointmentBody;