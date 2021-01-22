import React from 'react';
import './AppointmentByDate.css';

const AppointmentByDate = ({ appointment, datee }) => {

    return (
        <div className='appointmentByDate shadow-lg p-5'>
            <div className='d-flex justify-content-center mb-5'>
                <h5 className='main-color'>Appointments Count : {appointment.length}</h5>

            </div>

            {!appointment.length ? <h5 className="text-center mt-5">No Schedule for Today...</h5> :
                <div>
                    <table className='table table-borderless table-hover'>
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Schedule</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                appointment.map(x =>
                                    <tr key={x._id}>
                                        <td>{x.name}</td>
                                        <td>{x.schedule}</td>
                                        <td>
                                            <select className="main-button">
                                                <option>Not visited</option>
                                                <option style={{ color: 'green' }}>visited</option>
                                                <option style={{ color: 'red' }}>Cancelled</option>
                                            </select>
                                        </td>
                                    </tr>
                                )}

                        </tbody>
                    </table>
                </div>
            }

        </div>
    );
};

export default AppointmentByDate;