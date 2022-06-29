const initialState = {
    results: [],
    quiz: [],
    loading: false,
    user: '',
    players: 0,
    amount: 0,
    category: 0,
    categoryDesc: "",
    difficulty: "",
    playerOneScore: 0,
    playerTwoScore: 0,
    playerThreeScore: 0,
    playerFourScore: 0,
    mode: ""
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

        case 'LOAD RANKING QUESTIONS':
            console.log('state', state);
            return {
                ...state,
                results: action.payload,
                loading: false,
                error: false,
            };
        case 'SET MODE':
            return { ...state, mode: action.payload };
        case 'SET USER':
            return { ...state, user: action.payload };
        case 'SET DIFFICULTY':
            return { ...state, difficulty: action.payload };
        case 'SET CATEGORY':
            return { ...state, category: action.payload };
        case 'SET CATEGORY DESCRIPTION':
            return { ...state, categoryDesc: action.payload };
        case 'SET AMOUNT':
            return { ...state, amount: action.payload };
        case 'SET PLAYERS':
            return { ...state, players: action.payload };
        case 'SET PLAYER ONE SCORE':
            return { ...state, playerOneScore: action.payload };
        case 'SET PLAYER TWO SCORE':
            return { ...state, playerTwoScore: action.payload };
        case 'SET PLAYER THREE SCORE':
            return { ...state, playerThreeScore: action.payload };
        case 'SET PLAYER FOUR SCORE':
            return { ...state, playerFourScore: action.payload };
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
