import React from 'react';
import AppointmentCard from '../AppointmentCard/AppointmentCard';
import './TakeAppointment.css';

const TakeAppointment = (props) => {
    const date = props.date;
    const appointmentData = [
        {
            id: 1,
            title: 'Teeth Orthodontics',
            schedule: '8:00 AM - 9:00 AM',
            seat: 10
        },
        {
            id: 2,
            title: 'Cosmetic Dentistry',
            schedule: '10:05 AM - 11:30 AM',
            seat: 8
        },
        {
            id: 3,
            title: 'Teeth Cleaning',
            schedule: '5:00 PM - 6:30 PM',
            seat: 5
        },
        {
            id: 4,
            title: 'Cavity Protection',
            schedule: '7:00 AM - 8:30 AM',
            seat: 3
        },
        {
            id: 5,
            title: 'Teeth Filling',
            schedule: '8:00 AM - 9:00 AM',
            seat: 9
        },
        {
            id: 6,
            title: 'Teeth Scaling',
            schedule: '8:30 AM - 9:00 AM',
            seat: 7
        }
    ];
    return (
        <main className='containerr text-center takeAppointment my-5'>
            <h2 className='mb-5'>Available Appointment on {date}</h2>
            <div className='row'>
                {
                    appointmentData.map(info => <AppointmentCard info={info} key={info.id} date={date}></AppointmentCard>)
                }
            </div>
        </main>
    );
};

export default TakeAppointment;