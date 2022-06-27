import React from 'react';
<<<<<<< HEAD
import { useDispatch, useSelector } from 'react-redux';
import { fetchResults } from './actions';

function App() {
    const dispatch = useDispatch();
    const error = useSelector((state) => state.error);

    const fetchQuestions = () => {
        dispatch(fetchResults());
    };
=======
import { useDispatch } from 'react-redux';

import { fetchResults } from "../src/actions";

function App() {
    const dispatch = useDispatch();
    const searchResult = () => dispatch(fetchResults());
>>>>>>> main

    return (
        <>
            <h1>Quiz game</h1>
<<<<<<< HEAD
            <button onClick={fetchQuestions}>lol</button>
=======
            <button onClick={searchResult}></button>
>>>>>>> main
        </>
    );
}

export default App;
