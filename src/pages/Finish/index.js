import React from 'react'
import { useNavigate } from "react-router-dom";

const Finish = () => {
    let navigate = useNavigate();
    return (
        <>
            <h1>Game finished</h1>
            <button onClick={()=>navigate("/home")}>Home</button>
        </>
    )
}

export default Finish;