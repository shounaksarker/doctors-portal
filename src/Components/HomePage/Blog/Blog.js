import React from 'react';
import { Card } from 'react-bootstrap';
import './Blog.css';
import patient1 from '../../../img/Ellipse 1.png';
import patient2 from '../../../img/Ellipse 2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

const Blog = () => {
    const arrow = <FontAwesomeIcon icon={faLongArrowAltRight} />
    return (
        <section id='blog' className='testimonial'> {/* css are coming from --- testimonial.css --- */}
            <div className='containerr'>
                <div className='testimonial-heading ofset-md-1 text-center'>
                    <h5>Our Blog</h5>
                    <h1>From Our Blog News</h1>
                </div>

                <div className='row'>
                    <div className='col-md-4'>
                        <Card className='cardd bg-gradiant'>
                            <Card.Body>
                                <Card.Footer className='d-flex align-items-center'>
                                    <div>
                                        <h5 className='text-white'>Dr. Parker</h5>
                                        <p className='text-white'>15 Dec 2020</p>
                                    </div>
                                </Card.Footer>
                                <div className='card-text'>
                                    <p className=' h4 text-white'>Check at least a doctor in a year for your teeth</p>
                                    <p className='arrow text-white'>{arrow}</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='col-md-4'>
                        <Card className='cardd'>
                            <Card.Body>
                                <Card.Footer className='d-flex  align-items-center'>
                                    <img className='mx-3' src={patient1} alt="pppp" />
                                    <div>
                                        <h5>Dr. Stark</h5>
                                        <p>16 Dec 2020</p>
                                    </div>
                                </Card.Footer>
                                <div className='card-text'>
                                    <p className="h4">2 times of brush in a day can keep you healthy</p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fugiat placeat soluta in a accusantium reiciendis
                                </div>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='col-md-4'>
                        <Card className='cardd'>
                            <Card.Body>
                                <Card.Footer className='d-flex  align-items-center'>
                                    <img className='mx-3' src={patient2} alt="pppp" />
                                    <div>
                                        <h5>Dr. Loki</h5>
                                        <p>16 Dec 2020</p>
                                    </div>
                                </Card.Footer>
                                <div className='card-text'>
                                <p className='h4'>The tooth cancer is taking a challenge</p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fugiat placeat soluta in a accusantium reiciendis
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div> {/* Cointainerr end */}
        </section>
    );
};

export default Blog;