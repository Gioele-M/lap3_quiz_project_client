import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { CorrectAnswerModal } from '../index';
import { InCorrectAnswerModal } from '../index';
import style from './index.module.css';

const QuizForm = ({setFinishGameVisibility}) => {
    const dispatch = useDispatch();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [CAVisibility, setCAVisibility] = useState('hidden');
    const [NCAVisibility, setNCAVisibility] = useState('hidden');
    const [quiz, setQuiz] = useState([]);

    const [playerOneScore, setPlayerOneScore] = useState(0);
    const [playerTwoScore, setPlayerTwoScore] = useState(0);
    const [playerThreeScore, setPlayerThreeScore] = useState(0);
    const [playerFourScore, setPlayerFourScore] = useState(0);

    const gameMode = useSelector((state) => state.mode);

    const results = useSelector((state) => state.results);
    const loading = useSelector((state) => state.loading);
    
    const players = useSelector((state) => state.players);
    const addOnePlayer = () => {
        if(gameMode === "rank" || gameMode === "online"){
            for (let i = 0; i < 10; i++){    
                quizQuestionArray[i].push({player: "1"})
            }
        } else {
            for (let i = 0; i < 5; i++) {
                quizQuestionArray[i].push({ player: '1' });
            }
        }
    };
    const addTwoPlayers = () => {
        for (let i = 0; i < 10; i += 2) {
            quizQuestionArray[i].push({ player: '1' });
            quizQuestionArray[i + 1].push({ player: '2' });
        }
    };
    const addThreePlayers = () => {
        for (let i = 0; i < 15; i += 3) {
            quizQuestionArray[i].push({ player: '1' });
            quizQuestionArray[i + 1].push({ player: '2' });
            quizQuestionArray[i + 2].push({ player: '3' });
        }
    };
    const addFourPlayers = () => {
        for (let i = 0; i < 20; i += 4) {
            quizQuestionArray[i].push({ player: '1' });
            quizQuestionArray[i + 1].push({ player: '2' });
            quizQuestionArray[i + 2].push({ player: '3' });
            quizQuestionArray[i + 3].push({ player: '4' });
        }
    };
    const addPlayers = () => {
        if (!quizQuestionArray.length) {
            console.log('not ready');
        } else {
            if (players === '1') {
                addOnePlayer();
            } else if (players === '2') {
                addTwoPlayers();
            } else if (players === '3') {
                addThreePlayers();
            } else if (players === '4') {
                addFourPlayers();
            }
        }
    };
    let quizQuestionArray = [];
    const setQuizQuestion = () => {
        setQuiz(quizQuestionArray);
    };
    const resetQuizQuestion = () => {
        setQuiz([]);
    };

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
                const randomised = tempAnswers.sort(() => Math.random() - 0.5);
                const question = { question: results[i].question };
                const quizQuestions = [question, ...randomised];
                quizQuestionArray.push(quizQuestions);
            }
            addPlayers();
            resetQuizQuestion();
            setQuizQuestion();
        }
    }, [results]);

    const handleRightAnswer = (correct_answer, playerNum) => {
        if (correct_answer) {
            if (playerNum === '1') {
                dispatch({
                    type: 'SET PLAYER ONE SCORE',
                    payload: playerOneScore + 1,
                });
                setPlayerOneScore(playerOneScore + 1);
            } else if (playerNum === '2') {
                dispatch({
                    type: 'SET PLAYER TWO SCORE',
                    payload: playerTwoScore + 1,
                });
                setPlayerTwoScore(playerTwoScore + 1);
            } else if (playerNum === '3') {
                dispatch({
                    type: 'SET PLAYER THREE SCORE',
                    payload: playerThreeScore + 1,
                });
                setPlayerThreeScore(playerThreeScore + 1);
            } else if (playerNum === '4') {
                dispatch({
                    type: 'SET PLAYER FOUR SCORE',
                    payload: playerFourScore + 1,
                });
                setPlayerFourScore(playerFourScore + 1);
            }
            // setScore(score + 1);
            if(currentQuestion + 1 === results.length){
                setTimeout(() => {
                    setFinishGameVisibility("visible")
                }, '1500');
            }
            setCAVisibility('visible');
            setTimeout(() => {
                setCAVisibility('hidden');
            }, '1500');
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
        }, '1500');
        if(currentQuestion + 1 === results.length){
            setTimeout(() => {
                setFinishGameVisibility("visible")
            }, '1500');
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < results.length) {
            setCurrentQuestion(nextQuestion);
        }
    };

    return (
        <>
            {loading && <h2 className="loadingH2">Loading...</h2>}
            {quiz.length && (
                <div className={style.quizSection}>
                    <div
                        data-testid="quizArea"
                        className={style.questionSection}
                    >
                        <div className={style.questionCount}>
                            {(gameMode !== "rank" || gameMode !== "online") && players !== '1' && (
                                <p data-testId="playerP" className={"playerTurnInfo " + quiz[currentQuestion][5].player}>
                                    Player {quiz[currentQuestion][5].player}{' '}
                                    it's your turn
                                </p>
                            )}
                            <span className={style.questionNumber}>
                                Question {currentQuestion + 1}/{results.length}
                            </span>
                        </div>
                        <div className={style.questionText}>
                            {quiz[currentQuestion][0].question}
                        </div>
                    </div>
                    <div className={style.answerSection}>
                        {quiz.length &&
                            quiz[currentQuestion].map((answer) => {
                                if (answer.isCorrect) {
                                    return (
                                        <button className={style.answerButton}
                                            onClick={() =>
                                                handleRightAnswer(
                                                    answer.name,
                                                    quiz[currentQuestion][5]
                                                        .player
                                                )
                                            }
                                        >
                                            {answer.name}
                                        </button>
                                    );
                                } else if (
                                    typeof answer.isCorrect === 'boolean'
                                ) {
                                    return (
                                        <button className={style.answerButton}
                                            onClick={() =>
                                                handleWrongAnswer(
                                                    answer.name,
                                                    quiz[currentQuestion][5]
                                                        .player
                                                )
                                            }
                                        >
                                            {answer.name}
                                        </button>
                                    );
                                }
                            })}
                    </div>
                        <InCorrectAnswerModal
                            NCAVisibility={NCAVisibility}
                            setNCAVisibility={setNCAVisibility}
                        />
                        <CorrectAnswerModal
                            CAVisibility={CAVisibility}
                            setCAVisibility={setCAVisibility}
                        />
                </div>
            )}
        </>
    );
};

export default QuizForm;
