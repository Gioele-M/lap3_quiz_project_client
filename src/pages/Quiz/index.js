import React, { useState } from 'react';
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

    const finishGame = () => {

        const sendScores = async (username, correct, total) => {
            await axios.patch(
                "https://red-devils-quiz.herokuapp.com/leaderboard",
                JSON.stringify({ username, correct, total }),
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );
        }
    if(gameMode === "rank"){
        sendScores(username, playerOneScore, amount)
    }
    dispatch({
        type: 'LOAD_RESULTS',
        payload: [],
    });
        if(gameMode === 'online'){
            navigate('/finishonline')
        }else{
            navigate('/finish')
        }
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
