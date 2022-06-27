import React from 'react'
import { useNavigate } from "react-router-dom";

const Difficulty = () => {
    let navigate = useNavigate();
    return (
        <>
            <h1>Select your difficulty</h1>
            <button onClick={()=>navigate("/category")}>Go back</button>
            <button onClick={()=>navigate("/quiz")}>Confirm selections</button>
        </>
    )
}

export default Difficulty;