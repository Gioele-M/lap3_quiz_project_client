import React from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {
    let navigate = useNavigate();
    return (
        <>
            <h1>Login or register</h1>
            <button onClick={()=>navigate("/home")}>Go to home</button>
        </>
    )
}

export default Login;