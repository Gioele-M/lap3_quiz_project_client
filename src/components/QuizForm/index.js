// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// import styles from './index.module.css';

// const QuizForm = () => {
//     const [results, setResults] = useState(['']);

//     useEffect(() => {
//         const category_number = 18;
//         try {
//             async function getArray() {
//                 const { data } = await axios.get(
//                     `https://opentdb.com/api.php?amount=10&category=${category_number}&difficulty=easy`
//                 );

//                 setResults(data.results);
//             }
//             getArray();
//         } catch (err) {
//             console.log(err);
//         }
//     }, []);

//     const [currentQuestion, setCurrentQuestion] = useState(0);
//     const [showScore, setShowScore] = useState(false);
//     const [score, setScore] = useState(0);
//     console.log(score);

//     const handleAnswerButtonClick = (correct_answer) => {
//         if (correct_answer) {
//             setScore(score + 1);
//         }
//         const nextQuestion = currentQuestion + 1;
//         if (nextQuestion < results.length) {
//             setCurrentQuestion(nextQuestion);
//         } else {
//             setShowScore(true);
//         }
//     };
//     console.log(data);
//     console.log(data.results[currentQuestion].correct_answer);
//     return (
//         <div>{results}</div>
//             results && (
//                 <div className={styles.quizForm}>
//                     {showScore ? (
//                         <div className={styles.scoreSection}>
//                             You scored {score} out of {results.length}
//                         </div>
//                     ) : (
//                         <>
//                             <div className={styles.questionSection}>
//                                 <div className={styles.questionCount}>
//                                     <span>
//                                         {currentQuestion + 1}/{results.length}
//                                     </span>
//                                 </div>
//                                 <div className={styles.questionText}>
//                                     {results[currentQuestion].question}
//                                 </div>
//                             </div>
//                             <div className={styles.answerSection}>
//                                 {results[currentQuestion].correct_answer}
//                                 <button onClick={() => handleAnswerButtonClick()}>
//                                     {results[currentQuestion].correct_answer}
//                                 </button>
//                                 {results &&
//                                     results[currentQuestion].incorrect_answers.map(
//                                         (incorrect_answer) => {
//                                             return (
//                                                 <button
//                                                     onClick={() =>
//                                                         handleAnswerButtonClick()
//                                                     }
//                                                 >
//                                                     {incorrect_answer}
//                                                 </button>
//                                             );
//                                         }
//                                     )}
//                             </div>
//                         </>
//                     )}
//                 </div>
//             )
//     );
// };

// export default QuizForm;
