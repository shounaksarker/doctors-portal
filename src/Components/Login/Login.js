import Menubar from '../HomePage/Menubar/Menubar';
import firebaseConfig from './firebase.config';
import firebase from "firebase/app";
import "firebase/auth";
import './Login.css'
import { useHistory, useLocation } from 'react-router-dom';
import { userContext } from '../../App';
import { useContext } from 'react';

const Login = () => {
    const [user, setUser] =useContext(userContext)

    // for private route
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    
    const handleblur = (e) => {
        const loggedInUser = { ...user };
        loggedInUser[e.target.name] = e.target.value;
        setUser(loggedInUser)
    }

    const emailLogin = (e) => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((result) => {
                user.success = "successfully";
                history.replace(from);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    return (
        <main className="login-section">
            <Menubar></Menubar>
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <div className="fadeIn first">
                        <h3 className="main-color">Login</h3>
                    </div>

                    <form onSubmit={emailLogin}>
                        <input type="email" name="email" onBlur={handleblur} id="login" className="fadeIn second"placeholder="Email" />
                        <input type="password" name="password" onBlur={handleblur} id="password" className="fadeIn third" placeholder="Password" />
                        <input type="submit" className="fadeIn fourth main-button" value="Log In" />
                    </form>
                    {user.success}
                    <div id="formFooter">
                        <a className="underlineHover" href="/#">Forgot Password?</a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;