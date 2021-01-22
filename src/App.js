import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/HomePage/Home';
import Appointment from './Components/Appointment/Appointment';
import AllPatient from './Components/AllPatient/AllPatient';
import Dashbord from './Components/Dashbord/Dashbord';
import Prescription from './Components/Dashbord/Prescription/Prescription';
import Setting from './Components/Dashbord/Setting/Setting';
import AddDoctor from './Components/Dashbord/AddDoctor/AddDoctor';
import Login from './Components/Login/Login';
import SignUp from './Components/Login/SignUp';
import PrivateRoute from './Components/Login/PrivateRoute';
import NoMatch from './Components/NoMatch/NoMatch';

export const userContext = createContext();

function App() {
  const [user, setUser] = useState({
    success : '',
    error : false
  });
  return (
    <userContext.Provider value={[user, setUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path='/appointment'>
            <Appointment></Appointment>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/sign/up'>
            <SignUp></SignUp>
          </Route>
          <PrivateRoute path='/dash-bord'>
            <Dashbord></Dashbord>
          </PrivateRoute>
          <PrivateRoute path='/dashbord/appointment'>
            <Dashbord></Dashbord>
          </PrivateRoute>
          <PrivateRoute path='/dashbord/allPatient'>
            <AllPatient></AllPatient>
          </PrivateRoute>
          <PrivateRoute path='/dashbord/prescription'>
            <Prescription></Prescription>
          </PrivateRoute>
          <PrivateRoute path='/dashbord/addDoctor'>
            <AddDoctor></AddDoctor>
          </PrivateRoute>
          <PrivateRoute path='/dashbord/setting'>
            <Setting></Setting>
          </PrivateRoute>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
