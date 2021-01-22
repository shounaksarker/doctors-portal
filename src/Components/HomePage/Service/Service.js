import React from 'react';
import { Card } from 'react-bootstrap';
import './Service.css';
import dental from "../../../img/001-dental.png";
import tooth1 from "../../../img/tooth (1).png";
import tooth from "../../../img/tooth.png";
import dent from "../../../img/dent.png";

const Service = () => {
    return (
        <main className='services containerr'>
            <div className='service-title'>
                <h4>OUR SERVICES</h4>
                <h1>Services We Provide</h1>
            </div>

            <section className='row'>
                <div className='col-md-4 .d-md-flex .d-lg-flex'>
                    <Card className='cardd'>
                        <Card.Img className='cardd-img' src={dental} />
                        <Card.Body>
                            <Card.Title>Fluoride Treatment</Card.Title>
                            <Card.Text className='px-md-5'>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-md-4 .d-md-flex .d-lg-flex'>
                    <Card className='cardd'>
                        <Card.Img className='cardd-img' src={tooth1} />
                        <Card.Body>
                            <Card.Title>Cavity Filling</Card.Title>
                            <Card.Text className='px-md-5'>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-md-4 .d-md-flex .d-lg-flex'>
                    <Card className='cardd'>
                        <Card.Img className='cardd-img' src={tooth} />
                        <Card.Body>
                            <Card.Title>Teath Whitening</Card.Title>
                            <Card.Text className='px-md-5'>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </section>

            <section>
                <div className="row dental-care offset-md-1">
                    <div className="col-md-4">
                        <img src={dent} alt=" dent" />
                    </div>
                    <div className="col-md-8 dental-care-text">
                        <h1>Exceptional Dental <br />Care, On Your Terms</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum corporis maxime excepturi nesciunt vitae dolorem eius perspiciatis magnam repellendus maiores provident molestiae labore quibusdam temporibus dolor illo optio ea minima eaque, iure id placeat odit nam ipsa? Magni sapiente hic illo! Similique omnis rerum modi saepe repellat illum amet aut. Magni sapiente hic illo! Similique omnis rerum modi saepe repellat illum amet aut. Magni sapiente hic illo! Similique omnis rerum modi saepe repellat illum amet aut.Magni sapiente hic illo! Similique omnis rerum modi saepe repellat illum amet aut.</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default Service;