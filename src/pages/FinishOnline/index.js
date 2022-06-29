import React from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';


import socket from '../../actions/socket';

const FinishOnline = () => {
    let navigate = useNavigate();

    const playerScore = useSelector((state) => state.playerOneScore);
    const questionsAmount = useSelector((state) => state.amount);

    // USE EFFECT??

    // This will send (... , loggedUser, result)
    socket.emit('finishGame', 'Game is completed yay')

    // Socket.emit score and amount + player name (useEffect?)

    // think how to pass the room to this

    // set localstate?



    // Listen to how many players completed the quiz

    socket.on('playerHasCompleted', msg=>{
        console.log(msg)
    })




    console.log(playerScore, questionsAmount)

    return (
        <>
            <h1>Game finished online</h1>
            <button onClick={()=>navigate("/home")}>Home</button>
        </>
    )
}

export default FinishOnline;





/// Send message to socket -> socket stores all scores -> sends back scores once all scores are in
