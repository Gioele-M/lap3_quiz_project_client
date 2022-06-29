import React from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const FinishOnline = () => {
    let navigate = useNavigate();

    const playerScore = useSelector((state) => state.playerOneScore);
    const questionsAmount = useSelector((state) => state.amount);


    console.log(playerScore, questionsAmount)

    return (
        <>
            <h1>Game finished online</h1>
            <button onClick={()=>navigate("/home")}>Home</button>
        </>
    )
}

export default FinishOnline;
