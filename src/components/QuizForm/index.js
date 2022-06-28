import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchResults } from '../../actions';
import { CorrectAnswerModal } from '../index';
import { InCorrectAnswerModal } from '../index';
import styles from './index.module.css';

const QuizForm = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [CAVisibility, setCAVisibility] = useState('hidden');
    const [NCAVisibility, setNCAVisibility] = useState('hidden');

    const dispatch = useDispatch();
    const error = useSelector((state) => state.error);
    const results = useSelector((state) => state.results);

    const getResults = () => dispatch(fetchResults());
    useEffect(() => {
        getResults();
    }, []);

    const handleRightAnswer = (correct_answer) => {
        if (correct_answer) {
            setScore(score + 1);
            setCAVisibility('visible');
            console.log(CAVisibility);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < results.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    const handleWrongAnswer = (incorrect_answer) => {
        if (correct_answer) {
            setScore(score + 1);
            setCAVisibility('visible');
            console.log(CAVisibility);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < results.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    //function for incorrectanswer

    return (
        <>
            {results.length && (
                <>
                    <div className={styles.questionSection}>
                        <div className={styles.questionCount}>
                            <span>
                                {currentQuestion + 1}/{results.length}
                            </span>
                        </div>
                        <div className={styles.questionText}>
                            {results[currentQuestion].question}
                        </div>
                    </div>
                    <div className={styles.answerSection}>
                        {results[currentQuestion].correct_answer}
                        <button
                            onClick={() =>
                                handleRightAnswer(
                                    results[currentQuestion].correct_answer
                                )
                            }
                        >
                            {results[currentQuestion].correct_answer}
                        </button>
                        {results &&
                            results[currentQuestion].incorrect_answers.map(
                                (incorrect_answer) => {
                                    return (
                                        <button
                                            onClick={() => handleWrongAnswer()}
                                        >
                                            {incorrect_answer}
                                        </button>
                                    );
                                }
                            )}
                        <InCorrectAnswerModal
                            NCAVisibility={NCAVisibility}
                            setNCAVisibility={setNCAVisibility}
                        />
                    </div>
                    <CorrectAnswerModal
                        CAVisibility={CAVisibility}
                        setCAVisibility={setCAVisibility}
                    />
                </>
            )}
        </>
    );
};

export default QuizForm;
