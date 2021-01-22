import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import "./AppointmentCard.css"

const AppointmentCard = (props) => {
    const {title, schedule, seat} = props.info;
    const date = props.date

    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal() {
        setModalIsOpen(true);
      }
      function closeModal(){
        setModalIsOpen(false);
      }

    return (
        <main className="col-md-4 appointment-card">
            <Card className="my-3">
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <div>
                        <h4 className="text-dark">{schedule}</h4>
                        <p className="text-muted">{seat} space available</p>
                    </div>
                    <button onClick={openModal} className="py-2">Book Appointment</button>
                </Card.Body>
            </Card>

            <AppointmentForm modalIsOpen={modalIsOpen} schedule={schedule} closeModal={closeModal} date={date} title={title}></AppointmentForm>
        </main>
    );
};

export default AppointmentCard;