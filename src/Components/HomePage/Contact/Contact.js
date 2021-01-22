import React from 'react';
import { Form } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact">
            <section className="containerr">
                <div className='py-5 my-4 text-center text-white'>
                    <h5>CONTACT US</h5>
                    <h1>Always Connect with us</h1>
                </div>
                <div className="col-md-7 col-sm-12 mx-auto">
                    <Form className="pb-5 text-center">
                        <Form.Group controlId="emailmail">
                            <Form.Control type="email" placeholder="Email *" />
                        </Form.Group>

                        <Form.Group controlId="subject">
                            <Form.Control type="text" placeholder="Subject *" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Control as="textarea" rows="4" placeholder="Message" />
                        </Form.Group>
                        <button>Submit</button>
                    </Form>
                </div>
            </section>
        </div>
    );
};

export default Contact;