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
            const rawresultsToString = JSON.stringify(results);
            const decodedStringResults = decode(rawresultsToString);
            const decodedResults = JSON.parse(decodedStringResults);

            dispatch({
                type: 'LOAD_RESULTS',
                payload: decodedResults,
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
