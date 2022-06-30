import axios from 'axios';
import { decode } from 'html-entities';

const loading = ({ amount, category, difficulty }) => ({
    type: 'LOADING',
    payload: { category: category, amount: amount, difficulty: difficulty },
});

console.log('loading', loading);

export const fetchResults = (amount, category, difficulty) => {
    return async (dispatch) => {
        dispatch(
            loading({
                amount: amount,
                category: category,
                difficulty: difficulty,
            })
        );
        try {
            const { data } = await axios.get(
                `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
            );
            const results = data.results;
            console.log('Before', results);
            for (let i = 0; i < results.length; i++) {
                let instance = results[i];
                let newQuestion = decode(instance.question);
                instance.question = newQuestion;
                let newCorrectAnswer = decode(instance.correct_answer);
                instance.correct_answer = newCorrectAnswer;
                for (let j = 0; j < results[i].incorrect_answers.length; j++) {
                    let array = results[i].incorrect_answers[j];
                    let newWrongAnswer = decode(array.incorrect_answer);
                    instance.incorrect_answer = newWrongAnswer;
                }
            }
            console.log('AFTER', results);
            // const rawresultsToString = JSON.stringify(results);
            // console.log('RAW RESULTS', rawresultsToString);
            // const decodedStringResults = decode(rawresultsToString);
            // console.log('DECODED', decodedStringResults);
            // console.log(typeof decodedStringResults);
            // const decodedResults = JSON.parse(decodedStringResults);
            // console.log(decodedResults);

            dispatch({
                type: 'LOAD_RESULTS',
                payload: results,
            });
        } catch (err) {
            dispatch({
                type: 'SET_ERROR',
                payload: err,
            });
            console.warn(err.message);
        }
    };
};

export const fetchRankingQuestions = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(
                'https://opentdb.com/api.php?amount=10&difficulty=hard&type=multiple'
            );
            let results = data.results;
            console.log(results);
            dispatch({
                type: 'LOAD RANKING QUESTIONS',
                payload: results,
            });
        } catch (err) {
            dispatch({
                type: 'SET_ERROR',
                payload: err,
            });
            console.warn(err.message);
        }
    };
};
