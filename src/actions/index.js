import axios from 'axios';

export const Hello = () => {
    console.log('Hello');
};

Hello();

// const loading = (number_of_questions, category_number, difficulty_level) => ({
//     type: 'LOADING',
//     payload: { number_of_questions, category_number, difficulty_level },
// });

const loading = ({category, type, difficulty}) => ({
    type: 'LOAD_RESULTS',
    payload: { category: category, type: type, difficulty: difficulty},
});

export const fetchResults = () => {


    return async (dispatch) => {
        try {
            const { data } = await axios.get(
                `https://opentdb.com/api.php?amount=10&category=18&difficulty=easy`
            );
            let results = data.results;
            console.log(results);
            // let something = { category: data.category, type: data.type, difficulty: data.difficulty}
            dispatch({
                type: 'LOAD_RESULTS',
                payload: results
            });
        } catch (err) {
            dispatch({
                type: 'ERROR',
                payload: err,
            });
            console.warn(err.message)
        }
    };
};

// fetchResults();
// console.log(fetchResults());
