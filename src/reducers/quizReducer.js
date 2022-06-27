const initialState = {
    results: [],
    loading: false,
};

const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_RESULTS':
            console.log('state', state);
            return {
                ...state,
                results: action.payload,
                error: false,
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload,
                loading: false,
                results: [],
            };
        default:
            return state;
    }
};

export default quizReducer;
