import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { QuizForm } from '../../components';

const Quiz = () => {
    let navigate = useNavigate();

    let gameMode = useSelector(state => state.mode)

    const finishGame = () => {

        // Check game mode
        // let gameMode = 'online' || 'rank'


        console.log(gameMode)

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
            <h1>Quiz</h1>
            <QuizForm />
            <button onClick={finishGame}>Finish quiz</button>
        </>
    );
};

export default Quiz;
