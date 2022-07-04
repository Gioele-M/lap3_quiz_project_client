import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { QuizForm } from '../../components';
import axios from 'axios';

const Quiz = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [finishGameVisibility, setFinishGameVisibility] = useState("hidden")

    
    const username = useSelector((state) => state.user);
    const playerOneScore = useSelector((state) => state.playerOneScore);
    const amount = useSelector((state) => state.amount);
    const gameMode = useSelector((state) => state.mode);
    // const username = "Adam10"
    // const playOneScore = "10"
    // const amount = "10"
    console.log(username)
    console.log(playerOneScore)
    console.log(amount)
    const finishGame = () => {

        // Check game mode
        // let gameMode = 'online' || 'rank'


        console.log(gameMode)
        const sendScores = async (username, correct, total) => {
            console.log(JSON.stringify({ username, correct, total }))
            const response  = await axios.patch(
                "https://red-devils-quiz.herokuapp.com/leaderboard",
                JSON.stringify({ username, correct, total }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    // withCredentials: true,
                }
            );
            console.log(response)
        }
        console.log("amount", amount)
    console.log("score", playerOneScore)
    console.log("name", username)
    if(gameMode === "rank"){
        sendScores(username, playerOneScore, amount)
    }
    dispatch({
        type: 'LOAD_RESULTS',
        payload: [],
    });
        if(gameMode === 'online'){
            //Navigate to score page for online
            navigate('/finishonline')
        }else{
            navigate('/finish')
        }
        
        
    //send results to server
    //navigate to score page
    //check game mode
    //if rank, send highscore to server
    //if online, navigate to diff page
    }

    

 
    


    return (
        <>
            <h1 className="quizH1">Quiz</h1>
            <QuizForm setFinishGameVisibility={setFinishGameVisibility}/>
            <div className="finishGameDiv" style={{visibility: finishGameVisibility}}>
                <h2>You have answered all the questions!</h2>
                <button onClick={finishGame} className="seeScoresButton">See scores</button>
            </div>
            
        </>
    );
};

export default Quiz;
