import React, { useState } from 'react';
import AppointmentHead from './AppointmentHead/AppointmentHead';
import TakeAppointment from './TakeAppointment/TakeAppointment';
import Footer from '../HomePage/Footer/Footer'

const Appointment = () => {
    const d = new Date()
    const [selectedDate, setSelectedDate] = useState(d.toDateString());
    const handleDateChange = (date) =>{
        setSelectedDate(date.toDateString())
    }

    return (
        <div>
            <AppointmentHead handleDateChange = {handleDateChange}></AppointmentHead>
            <TakeAppointment date={selectedDate}></TakeAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;