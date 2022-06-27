import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchResults } from './actions';

function App() {
    const dispatch = useDispatch();
    const error = useSelector((state) => state.error);

    const fetchQuestions = () => {
        dispatch(fetchResults());
    };

    return (
        <>
            <h1>Quiz game</h1>
            <button onClick={fetchQuestions}>lol</button>
        </>
    );
}

export default App;
