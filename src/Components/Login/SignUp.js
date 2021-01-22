import React, { useState } from 'react';
import Menubar from '../HomePage/Menubar/Menubar';
import firebaseConfig from './firebase.config';
import firebase from "firebase/app";
import "firebase/auth";
import './Login.css'


const SignUp = () => {
    const [newUser, setNewUser] = useState({
        success : false,
        error : false,
        email : '',
        password : ''
    });
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleblur = (e) => {
        const user = { ...newUser };
        user[e.target.name] = e.target.value;
        setNewUser(user)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then((result) => {
             const user = {...newUser}
             user.success = true;
             user.email = '';
             user.password = '';
             console.log(newUser);
        })
        .catch((error) => {
            var errorMessage = error.message;
            newUser.error = errorMessage;
        });
    }

    

    return (
        <main>
            <Menubar></Menubar>
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <div className="fadeIn first">
                        <h3 className="main-color">Sign Up</h3>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <input type="email" id="signup" onBlur={handleblur} className="fadeIn second" name="email" placeholder="Email" />
                        <input type="password" id="password" onBlur={handleblur} className="fadeIn third" name="password" placeholder="Password" />
                        <input type="submit" className="fadeIn fourth main-button" value="Sign Up" />
                    </form>
                </div>
            </div>
        </main>
    );
};

export default SignUp;