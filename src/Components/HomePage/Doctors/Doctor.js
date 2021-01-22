import { Card } from 'react-bootstrap';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import './Doctors.css'

const Doctor = (props) => {
    const phoneIcon = <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
    const { name, img, mobile } = props.doct;
    return (
        <div className='col-md-4 dctr'>
            <Card.Img src={img} alt={name} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {phoneIcon} {mobile}
                </Card.Text>
            </Card.Body>
        </div>
    );
};

export default Doctor;