import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import chair from '../../../img/chair.png';
import './DIsplay.css';
import { Link } from 'react-router-dom';

const Display = () => {
    const location = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const clock = <FontAwesomeIcon icon={faClock} />
    const phone = <FontAwesomeIcon icon={faPhoneAlt} />

    return (
        <div className='containerr'>
            <main>
                <section className="row">
                    <div className="col-md-4 offset-md-1" >
                        <h1 className="your-new-smile">Your New Smile <br />Starts Here</h1>
                        <p className="smile-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquid repellat facere illum voluptatibus. Tempora quae aspernatur reiciendis, commodi hic velit minus quas? Aliquam ex inventore beatae obcaecati est qui.</p>
                        <Link to='/appointment' className='appointment-btn'>GET APPOINTMENT</Link>
                    </div>
                    <div className="col-md-7 d-none d-md-block">
                        <img src={chair} alt="chair" className='image' />
                    </div>
                </section>

                <section className="row box3">
                    <div className="col-md-3 box mr-md-3">
                        <div className="row">
                            <div className="col-md-4 clock">
                                {clock}
                            </div>
                            <div className="col-md-8">
                                <div>
                                    <h5>Opeening hour</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 box mr-md-3">
                        <div className="row">
                            <div className="col-md-4 clock">
                                {location}
                            </div>
                            <div className="col-md-8">
                                <div className="text-side">
                                    <h5>Visit Our Location</h5>
                                    <p>Brooklyn, NY 10036, USA</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 box mr-md-3">
                        <div className="row">
                            <div className="col-md-4 clock">
                                {phone}
                            </div>
                            <div className="col-md-8">
                                <div className="text-side">
                                    <h5>Contact Us Now</h5>
                                    <p>+000 123 456789</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

            </main>
        </div>
    );
};

export default Display;