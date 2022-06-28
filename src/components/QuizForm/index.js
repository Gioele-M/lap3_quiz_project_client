import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { fetchResults } from '../../actions';
import styles from './index.module.css';

const QuizForm = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const dispatch = useDispatch();
    const error = useSelector((state) => state.error);
    const results = useSelector((state) => state.results);

    // const getResults = () => dispatch(fetchResults());
    // useEffect(() => {
    //     getResults();
    // }, []);

    const handleAnswerButtonClick = (correct_answer) => {
        if (correct_answer) {
            setScore(score + 1);
            alert(
                `This is the correct answer!!! You have now ${score} correct answers out of ${results.length} questions!`
            );
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < results.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

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
                        <button onClick={() => handleAnswerButtonClick()}>
                            {results[currentQuestion].correct_answer}
                        </button>
                        {results &&
                            results[currentQuestion].incorrect_answers.map(
                                (incorrect_answer) => {
                                    return (
                                        <button
                                            onClick={() =>
                                                handleAnswerButtonClick()
                                            }
                                        >
                                            {incorrect_answer}
                                        </button>
                                    );
                                }
                            )}
                    </div>
                </>
            )}
        </>
    );
};

export default QuizForm;
