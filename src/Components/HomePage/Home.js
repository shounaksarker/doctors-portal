import React from 'react';
import Display from './Display/Display';
import Menubar from './Menubar/Menubar';
import "./Home.css";
import Service from './Service/Service';
import AppointmentSection from './AppoinmentSection/AppointmentSection';
import Testimonial from './Testimonial/Testimonial';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Doctors from './Doctors/Doctors';
import Footer from './Footer/Footer';

const Home = () => {
    return (
        <div className='background'>
                <Menubar color='white'></Menubar>
                <Display></Display>
                <Service></Service>
                <AppointmentSection></AppointmentSection>
                <Testimonial></Testimonial>
                <Blog></Blog>
                <Doctors></Doctors>
                <Contact></Contact>
                <Footer></Footer>
        </div>
    );
};

export default Home;