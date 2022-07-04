import React from 'react';

import { SignUp } from '../../components';
import brain from "../../Images/brain.png";

const Register = () => {
    return (
        <>
            <div className="register">
                <div className="loginLogo">
                    <div className="loginBrainDiv">
                        <img src={brain} className="loginBrain" alt="Brain logo"/>
                    </div>
                    <h1 className="loginDumbfounded">Dumbfounded?</h1>    
                </div>
                <SignUp />
            </div> 
        </>
    )
};

export default Register;
