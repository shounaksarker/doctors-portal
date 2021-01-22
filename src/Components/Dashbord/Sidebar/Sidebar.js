import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import './sidebar.css'

const Sidebar = () => {
    const cog = <FontAwesomeIcon icon={faCog} />
    // const signOutAlt = <FontAwesomeIcon icon={faSignOutAlt} />
    const calendar = <FontAwesomeIcon icon={faCalendar} />
    const home = <FontAwesomeIcon icon={faHome} />
    const gripHorizontal = <FontAwesomeIcon icon={faGripHorizontal} />
    const UserPlus = <FontAwesomeIcon icon={faUserPlus} />
    const user = <FontAwesomeIcon icon={faUsers} />
    return (
        <div className='sidebar d-flex flex-column' style={{height: '100vh'}}>
            <ul className='list-unstyled p-5 position-fixed'>
                <li>
                    <Link to='/dash-bord' className='text-white'>
                        {
                            <h5>{gripHorizontal} Dashboard</h5>
                        }
                    </Link>
                </li>
                <li>
                    <Link to='/dashbord/appointment' className='text-white'>
                        {
                            <h5>{calendar} Appointment</h5>
                        }
                    </Link>
                </li>
                <li>
                    <Link to='/dashbord/allPatient' className='text-white'>
                        {
                            <h5>{user} Patient</h5>
                        }
                    </Link>
                </li>
                <li>
                    <Link to='/dashbord/prescription' className='text-white'>
                        {
                            <h5>{home} Prescriptions</h5>
                        }
                    </Link>
                </li>
                <li>
                    <Link to='/dashbord/addDoctor' className='text-white'>
                        {
                            <h5>{UserPlus} Add Doctor</h5>
                        }
                    </Link>
                </li>
                <li>
                    <Link to='/dashbord/setting' className='text-white'>
                        {
                            <h5>{cog} Setting</h5>
                        }
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;