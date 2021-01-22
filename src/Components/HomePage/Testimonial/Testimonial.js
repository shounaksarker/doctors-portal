import React from 'react';
import { Card } from 'react-bootstrap';
import patient1 from '../../../img/Ellipse 1.png';
import patient2 from '../../../img/Ellipse 2.png';
import patient3 from '../../../img/Ellipse 3.png';
import './Testimonial.css'

const Testimonial = () => {
    return (
        <section className='testimonial'>
            <div className='containerr'>
                <div className='testimonial-heading ofset-md-1'>
                    <h5>Testimonial</h5>
                    <h1>What Our Patient <br /> Says</h1>
                </div>

                <div className='row'>
                    <div className='col-md-4'>
                        <Card className='cardd mb-2 mb-md-0'>
                            <Card.Body>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fugiat placeat soluta in a accusantium reiciendis, voluptate voluptatum facilis similique accusamus ad. Cumque, molestiae consequatur?
                            </Card.Text>
                                <Card.Footer className='d-flex  align-items-center'>
                                    <img className='mx-3' src={patient1} alt="pppp" />
                                    <div className=''>
                                        <h5>Winson Harry</h5>
                                        <p>California</p>
                                    </div>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='col-md-4'>
                        <Card className='cardd mb-2 mb-md-0'>
                            <Card.Body>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fugiat placeat soluta in a accusantium reiciendis, voluptate voluptatum facilis similique accusamus ad. Cumque, molestiae consequatur?
                            </Card.Text>
                                <Card.Footer className='d-flex  align-items-center'>
                                    <img className='mx-3' src={patient2} alt="pppp" />
                                    <div className=''>
                                        <h5>Jack Ketlin</h5>
                                        <p>Alaska</p>
                                    </div>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='col-md-4'>
                        <Card className='cardd mb-2 mb-md-0'>
                            <Card.Body>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fugiat placeat soluta in a accusantium reiciendis, voluptate voluptatum facilis similique accusamus ad. Cumque, molestiae consequatur?
                            </Card.Text>
                                <Card.Footer className='d-flex  align-items-center'>
                                    <img className='mx-3' src={patient3} alt="pppp" />
                                    <div className=''>
                                        <h5>Evan Lee</h5>
                                        <p>Florida</p>
                                    </div>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                    </div>
                </div>   
            </div> {/* Cointainerr end */}
        </section>     
    );
};

export default Testimonial;