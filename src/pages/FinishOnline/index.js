import React from 'react'
import { useNavigate } from "react-router-dom";

const FinishOnline = () => {
    let navigate = useNavigate();
    return (
        <>
            <h1>Game finished online</h1>
            <button onClick={()=>navigate("/home")}>Home</button>
        </>
    )
}

export default FinishOnline;
