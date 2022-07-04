import React from 'react';

import { LoginComponent } from '../../components';
import brain from "../../Images/brain.png";

const Login = () => {
    
    return (
        <>
            <div className="login">
                <div className="loginLogo">
                <div className="loginBrainDiv">
                    <img src={brain} className="loginBrain" alt="Brain logo"/>
                </div>
                <h1 className="loginDumbfounded">Dumbfounded?</h1>    
                </div>
                <LoginComponent />
            </div>       
        </>
     )
};

export default Login;
