import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import './AppointmentForm.css';

const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root')


const AppointmentForm = ({ modalIsOpen,schedule, closeModal, date, title }) => {
    const { register, handleSubmit } = useForm();

    const submitAppointment = (info) => {
        info.title = title;
        info.schedule = schedule
        info.appointmentDate = date;
        info.date = new Date();

        fetch('https://doctors-portal-snk.herokuapp.com/addAppointment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    closeModal();
                    alert('Appointment successfully submitted')
                }
                else { alert('Appointment Unsuccessful') }
            })
    }


    return (
        <div className='appointment-form'>
            <Modal
                isOpen={modalIsOpen}
                style={modalStyles}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <h2 className="text-center head-color">{title}</h2>
                <p className="text-secondary text-center"><small>ON {date}</small></p>
                <form onSubmit={handleSubmit(submitAppointment)}>
                    <div className="form-group">
                        <input name='name' type="text" className="form-control" ref={register({ required: true })} aria-describedby="emailHelp" placeholder="Your Name *" required />
                    </div>
                    <div className="form-group">
                        <input name='phone' type="tel" className="form-control" ref={register({ required: true })} placeholder="Phone Number *" required />
                    </div>
                    <div className="form-group">
                        <input name='email' type="email" className="form-control" ref={register({ required: true })} placeholder="Email *" required />
                    </div>
                    <div className="form-group">
                        <select name='gender' ref={register({ required: true })} className="form-control" placeholder="Gender *" required >
                            <option disabled={true} value="Not set">Select Gender *</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Not set">Other</option>
                        </select>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-6 mb-2 mb-md-0">
                            <input name='age' type="number" className="form-control" ref={register({ required: true })} placeholder="Age *" required />
                        </div>
                        <div className="col-md-6">
                            <input name='weight' type="number" className="form-control" ref={register({ required: true })} placeholder="Weight" />
                        </div>
                    </div>
                    <button type='submit' className='send-btn'>Send</button>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;