import React from 'react';
import { Link } from 'react-router-dom';
import doctor from "../../../img/doctor.png";
import './AppointmentSection.css';

const AppointmentSection = () => {
    return (

        <section className='appointment-section'>
            <div className='containerr'>
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt="doctor" />
                    </div>
                    <div className="col-md-7 text-white py-5">
                        <h5>APPOINTMENT</h5>
                        <h1 className="my-4">Make an appointment <br />Today</h1>
                        <p className='my-3'>It us a long established fact that a reader will be distractedy the readable content of a page when looking at its</p>
                        <Link className='appointment-btn' to='/appointment'>Learn More</Link>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default AppointmentSection;