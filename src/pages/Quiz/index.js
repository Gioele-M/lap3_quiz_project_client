import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { QuizForm } from '../../components';
import axios from 'axios';

const Quiz = () => {
    let navigate = useNavigate();

    const username = useSelector((state) => state.user);
    const playOneScore = useSelector((state) => state.playOneScore);
    const amount = useSelector((state) => state.amount);
    const gameMode = useSelector((state) => state.mode);
    // const username = "Adam10"
    // const playOneScore = 10
    // const amount = 10
    const finishGame = () => {

        // Check game mode
        // let gameMode = 'online' || 'rank'


        console.log(gameMode)
        const sendScores = async (username, correct, total) => {
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
        if(gameMode === 'online'){
            //Navigate to score page for online
            navigate('/finishonline')
        }else{
            navigate('/finish')
        }
        if(gameMode === "rank"){
            sendScores(username, playOneScore, amount)
        }
    //send results to server
    //navigate to score page
    //check game mode
    //if rank, send highscore to server
    //if online, navigate to diff page
    }

    

 
    


    return (
        <>
            <h1>Quiz</h1>
            <QuizForm />
            <button onClick={finishGame}>Finish quiz</button>
        </>
    );
};

export default Quiz;
