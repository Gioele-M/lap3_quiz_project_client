import React from 'react'
import { useNavigate } from "react-router-dom";

const Quiz = () => {
    let navigate = useNavigate();
    return (
        <>
            <h1>Quiz</h1>
            <button onClick={()=>navigate("/finish")}>Finish quiz</button>
        </>
    )
}

export default Quiz;