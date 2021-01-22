import React, { useEffect, useState } from 'react';
import Sidebar from '../Dashbord/Sidebar/Sidebar';

const AllPatient = () => {
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        fetch('https://doctors-portal-snk.herokuapp.com/appointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])


    return (
        <main className='row container-fluid'>
            <div className="main-bg col-md-2">
            <Sidebar></Sidebar>
            </div>

            <div className="col-md-10">
                <h3 className='mb-3 p-4 head-color'>All Patient</h3>
                <table className="table">
                    <thead className="thead-dark">
                        <tr className='text-center'>
                            <th scope="col">Serial</th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Weight</th>
                            <th scope="col">Contact No</th>
                            <th scope="col">Email</th>
                            <th scope="col">Appointment date</th>
                            <th scope="col">Appointment Schedule</th>
                            <th scope="col">appointment On</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((x, index) =>
                                <tr key={index} className='text-center'>
                                    <td>{index + 1}</td>
                                    <td>{x.name}</td>
                                    <td>{x.age}</td>
                                    <td>{x.weight}</td>
                                    <td>{x.phone}</td>
                                    <td>{x.email}</td>
                                    <td>{x.appointmentDate}</td>
                                    <td>{x.schedule}</td>
                                    <td>{x.title}</td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>

            </div>
        </main>
    );
};

export default AllPatient;