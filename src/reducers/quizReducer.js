const initialState = {
    results: [],
    loading: false,
};

const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADING':
            return { ...state, searchTerms: action.payload, loading: true };
        case 'LOAD_RESULTS':
            console.log('state', state);
            return {
                ...state,
                results: action.payload,
                loading: false,
                error: false,
            };

        case 'SET ERROR':
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
