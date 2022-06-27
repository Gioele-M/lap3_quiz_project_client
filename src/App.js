import React from 'react';
import { useDispatch } from 'react-redux';

import { fetchResults } from '../src/actions';

function App() {
    const dispatch = useDispatch();
    const searchResult = () => dispatch(fetchResults());

    return (
        <>
            <h1>Quiz game</h1>
            <button onClick={searchResult}></button>
        </>
    );
}

export default App;
