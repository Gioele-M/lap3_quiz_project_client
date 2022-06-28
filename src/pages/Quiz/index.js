import React from 'react';
import { useNavigate } from 'react-router-dom';

import { QuizForm } from '../../components';

const Quiz = () => {
    let navigate = useNavigate();
    return (
        <>
            <h1>Quiz</h1>
            <QuizForm />
            <button onClick={() => navigate('/finish')}>Finish quiz</button>
        </>
    );
};

export default Quiz;
