import React, { useEffect, useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import AppointmentByDate from './AppointmentByDate/AppointmentByDate';
import Sidebar from './Sidebar/Sidebar';

const Dashbord = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointment, setAppointment] = useState([]);

    const handleDateChange = (date) => {
        const dateString = date.toDateString()
        setSelectedDate(dateString);
    }
    useEffect( () =>{
        fetch('https://doctors-portal-snk.herokuapp.com/appointmentByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ dateString:selectedDate })
        })
            .then(res => res.json())
            .then(data => setAppointment(data))
            .catch(err => console.log(err))
    } ,[selectedDate])

    return (
        <main className='row container-fluid'>
            <div className="main-bg col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-5 p-5">
                <h5 className='text-center main-color mb-5'>Appointment</h5>
                <Calendar className='py-5 shadow-lg'
                    onChange={handleDateChange}
                    value={new Date()}
                />
            </div>
            <div className="col-md-5 p-5">
                <AppointmentByDate key={appointment._id} appointment={appointment} datee={selectedDate}></AppointmentByDate>
            </div>
        </main>
    );
};

export default Dashbord;