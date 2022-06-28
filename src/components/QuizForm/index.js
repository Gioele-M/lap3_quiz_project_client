import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchResults } from '../../actions';
import { CorrectAnswerModal } from '../index';
import { InCorrectAnswerModal } from '../index';
import style from './index.module.css';

const QuizForm = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [CAVisibility, setCAVisibility] = useState('hidden');
    const [NCAVisibility, setNCAVisibility] = useState('hidden');
    const [randomAnswers, setRandomAnswers] = useState([]);

    const dispatch = useDispatch();
    const error = useSelector((state) => state.error);
    const results = useSelector((state) => state.results);

    const getResults = () => dispatch(fetchResults());

    useEffect(() => {
        getResults();
    }, []);

    useEffect(() => {
        if (results.length) {
            const correctAnswers = results.map((result) => {
                return { name: result.correct_answer, isCorrect: true };
            });
            const incorrectAnswers = results.map((result) => {
                return result.incorrect_answers.map((incorrectAnswer) => {
                    return { name: incorrectAnswer, isCorrect: false };
                });
            });
            for (let i = 0; i < correctAnswers.length; i++) {
                const tempAnswers = [correctAnswers[i], ...incorrectAnswers[i]];
                setRandomAnswers((prev) => {
                    const randomised = tempAnswers.sort(
                        () => Math.random() - 0.5
                    );
                    return [...prev, randomised];
                });
            }
            console.log('ALICE', randomAnswers);
        }
    }, [results]);

    const handleRightAnswer = (correct_answer) => {
        if (correct_answer) {
            setScore(score + 1);
            setCAVisibility('visible');
            setTimeout(() => {
                setCAVisibility('hidden');
            }, '2000');
            console.log(CAVisibility);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < results.length) {
            setCurrentQuestion(nextQuestion);
        }
    };

    const handleWrongAnswer = (incorrect_answer) => {
        if (incorrect_answer) {
            setNCAVisibility('visible');
        }
        setTimeout(() => {
            setNCAVisibility('hidden');
        }, '2000');
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < results.length) {
            setCurrentQuestion(nextQuestion);
        }
    };

    return (
        <>
            {results.length && (
                <>
                    <div className={style.questionSection}>
                        <div className={style.questionCount}>
                            <span>
                                {currentQuestion + 1}/{results.length}
                            </span>
                        </div>
                        <div className={style.questionText}>
                            {results[currentQuestion].question}
                        </div>
                    </div>
                    <div className={style.answerSection}>
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
                                            onClick={() =>
                                                handleWrongAnswer({
                                                    incorrect_answer,
                                                })
                                            }
                                        >
                                            {incorrect_answer}
                                        </button>
                                    );
                                }
                            )}
                        <div className={style.modalSection}>
                            <InCorrectAnswerModal
                                NCAVisibility={NCAVisibility}
                                setNCAVisibility={setNCAVisibility}
                            />

                            <CorrectAnswerModal
                                CAVisibility={CAVisibility}
                                setCAVisibility={setCAVisibility}
                            />
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default QuizForm;
