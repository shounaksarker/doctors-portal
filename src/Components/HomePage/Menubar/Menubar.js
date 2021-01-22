import React from 'react';
import { Link } from 'react-router-dom';

import './Menubar.css'

const Menubar = (props) => {
    const navMenu = {
        color: props.color
    }
    return (
        <div className='menubar containerr'>
            <nav className="navbar navbar-expand-lg navbar-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar nav ml-auto menu-ul">
                        <li className="mr-5">
                            <Link className="menu-item" to="/">Home</Link>
                        </li>
                        <li className="mr-5">
                            <Link className="menu-item" to="/about">About</Link>
                        </li>
                        <li className="mr-5">
                            <Link className="menu-item" to="/service">Dental Service</Link>
                        </li>
                        <li className="mr-5">
                            <Link className="menu-item" style={navMenu} to="/reviews">Reviews</Link>
                        </li>
                        <li className="mr-5">
                            <Link className="menu-item" style={navMenu} to="blog">Blog</Link>
                        </li>
                        <li className="">
                            <Link className="menu-item" style={navMenu} to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Menubar;