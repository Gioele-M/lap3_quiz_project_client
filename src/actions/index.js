import axios from 'axios';

let amount = 20;
let category = 18;
let difficulty = 'easy';

const loading = ({ amount, category, difficulty }) => ({
    type: 'LOADING',
    payload: { category: category, amount: amount, difficulty: difficulty },
});

export const fetchResults = () => {
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
                `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`
            );
            let results = data.results;
            console.log(results);
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
