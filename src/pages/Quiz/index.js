import React from 'react';
import { useNavigate } from 'react-router-dom';

import { QuizForm } from '../../components';

const Quiz = () => {
    let navigate = useNavigate();

    const finishGame = () => {
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
            <button onClick={() => navigate('/finish')}>Finish quiz</button>
        </>
    );
};

export default Quiz;
