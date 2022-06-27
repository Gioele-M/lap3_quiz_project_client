import axios from 'axios';

export const Hello = () => {
    console.log('Hello');
};

Hello();

const loading = (number_of_questions, category_number, difficulty_level) => ({
    type: 'LOADING',
    payload: { number_of_questions, category_number, difficulty_level },
});

export const fetchResults = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(
                `https://opentdb.com/api.php?amount=10&category=18&difficulty=easy`
            );
            let results = data.results;
            console.log(results);
            dispatch({
                type: 'LOAD_RESULTS',
                payload: results,
            });
        } catch (err) {
            dispatch({
                type: 'ERROR',
                payload: err,
            });
        }
    };
};

fetchResults();
console.log(fetchResults);
