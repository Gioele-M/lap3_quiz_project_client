import React from 'react';

import { LoginComponent } from '../../components';
import brain from "../../Images/brain.png";

const Login = () => {
    
    return (
        <>
        <div className="login">
            <div className="loginBrainDiv">
                <img src={brain} className="loginBrain" />
            </div>
            <h1 className="loginDumbfounded">Dumbfounded?</h1>
            <LoginComponent />
        </div>      
            
        </>
     )
};

export default Login;
