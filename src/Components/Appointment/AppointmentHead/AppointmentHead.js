import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import chair from '../../../img/chair.png';
import Menubar from '../../HomePage/Menubar/Menubar';
import './AppointmentHead.css'

const AppointmentHead = (props) => {
    const handleDateChange = props.handleDateChange;
    return (
        <main className='appoinment-head pb-5'>
            <Menubar></Menubar>
            <div className="containerr">
                <div className="row d-flex justify-content-between">
                    <div className='col-md-4'>
                        <h1 className='mb-5'>Appointment</h1>
                        <Calendar
                            onChange={handleDateChange}
                            value={new Date()}
                        />
                    </div>
                    <div className='col-md-6 d-none d-md-block'>
                        <img className='w-100' src={chair} alt='chair'/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AppointmentHead;