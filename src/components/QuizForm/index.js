import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';

// import { fetchResults } from '../../actions';
// import styles from './index.module.css';
import { CorrectAnswerModal } from '../index';
import { InCorrectAnswerModal } from '../index';
import style from './index.module.css';

const QuizForm = () => {

    const dispatch = useDispatch()
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [CAVisibility, setCAVisibility] = useState('hidden');
    const [NCAVisibility, setNCAVisibility] = useState('hidden');
    const [quiz, setQuiz] = useState([]);

    const [playerOneScore, setPlayerOneScore] = useState(0)
    const [playerTwoScore, setPlayerTwoScore] = useState(0)
    const [playerThreeScore, setPlayerThreeScore] = useState(0)
    const [playerFourScore, setPlayerFourScore] = useState(0)

    // const dispatch = useDispatch();
    // const error = useSelector((state) => state.error);
    const results = useSelector((state) => state.results);
    const loading = useSelector((state) => state.loading);

    const statePlayerOneScore = useSelector((state) => state.playerOneScore);
    console.log(statePlayerOneScore)

    // const getResults = () => dispatch(fetchResults());
    // useEffect(() => {
    //     getResults();
    // }, []);
    // const [playerTurn, setPlayerTurn] = useState(1)
    // const [questionNumber, setQuestionNumber] = useState(0)
    const players = useSelector((state) => state.players);
    // console.log(players)
    const addOnePlayer = () => {
        for (let i = 0; i < 5; i++){    
            quizQuestionArray[i].push({player: "1"})
        }
    }
    const addTwoPlayers = () => {
        for (let i = 0; i < 10; i+=2){
            quizQuestionArray[i].push({player: "1"})    
            quizQuestionArray[i+1].push({player: "2"})
        }
    }
    const addThreePlayers = () => {
        for (let i = 0; i < 15; i+=3){   
            quizQuestionArray[i].push({player: "1"})    
            quizQuestionArray[i+1].push({player: "2"}) 
            quizQuestionArray[i+2].push({player: "3"})
        }
    }  
    const addFourPlayers = () => {
        for (let i = 0; i < 20; i+=4){
            quizQuestionArray[i].push({player: "1"})    
            quizQuestionArray[i+1].push({player: "2"}) 
            quizQuestionArray[i+2].push({player: "3"})    
            quizQuestionArray[i+3].push({player: "4"})
        }
    } 
    const addPlayers = () => {
        if( !quizQuestionArray.length) {
         console.log("not ready")
        } else {
            if(players === "1") {
                addOnePlayer()
            } else if(players === "2") {
                addTwoPlayers()
            } else if(players === "3") {
                addThreePlayers()
            } else if(players === "4") {
                addFourPlayers()
            }
        } 
     }
    let quizQuestionArray = []
    const setQuizQuestion = () => {
        setQuiz(quizQuestionArray)
    }
    const resetQuizQuestion = () => {
        setQuiz([])
    }
    
    useEffect(() => {
        if (results.length) {
            console.log('results', results);
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
                const randomised = tempAnswers.sort(
                    () => Math.random() - 0.5
                );
                    const question = { question: results[i].question };
                    const quizQuestions = [question, ...randomised];
                    quizQuestionArray.push(quizQuestions)
            }            
            addPlayers()
            resetQuizQuestion()
            setQuizQuestion()
        }
    }, [results]);
    
    // console.log(quiz);

    const handleRightAnswer = (correct_answer, playerNum) => {
        if (correct_answer) {
            if(playerNum === "1"){
                console.log(playerOneScore)
                dispatch({ type: 'SET PLAYER ONE SCORE', payload: playerOneScore + 1 }) 
                setPlayerOneScore(playerOneScore + 1)
            }else if(playerNum === "2"){
                dispatch({ type: 'SET PLAYER TWO SCORE', payload: playerTwoScore + 1 })
                setPlayerTwoScore(playerTwoScore + 1)
            }else if(playerNum === "3"){
                dispatch({ type: 'SET PLAYER THREE SCORE', payload: playerThreeScore + 1 })
                setPlayerThreeScore(playerThreeScore + 1)
            }else if(playerNum === "4"){
                dispatch({ type: 'SET PLAYER FOUR SCORE', payload: playerFourScore + 1 })
                setPlayerFourScore(playerFourScore + 1)
            }
            // setScore(score + 1);
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
        console.log(playerOneScore)
        
        
        
    };
    
    // console.log(playerOneScore)
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
    }

    return (
        <>
            {loading && <h2>Loading...</h2>}
            {quiz.length && (
                <>
                    <div className={style.questionSection}>
                        <div className={style.questionCount}>
                            <p>Player {quiz[currentQuestion][5].player} it's your turn</p>
                            <span>
                                {currentQuestion + 1}/{results.length}
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
                                        <button
                                            onClick={() =>
                                                handleRightAnswer(answer.name, quiz[currentQuestion][5].player)
                                            }
                                        >
                                            {answer.name}
                                        </button>
                                    );
                                } else if (
                                    typeof answer.isCorrect === 'boolean'
                                ) {
                                    return (
                                        <button
                                            onClick={() =>
                                                handleWrongAnswer(answer.name, quiz[currentQuestion][5].player) 
                                            }
                                        >
                                            {answer.name}
                                        </button>
                                    );
                                }
                            })}
                    </div>

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
                </>
            )}
        </>
    );
};

export default QuizForm;
