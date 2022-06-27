import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchResults } from '../src/actions';

function App() {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading);
    console.log(loading);
    const searchResult = () => dispatch(fetchResults());

    return (
        <>
            {loading ? (
                <h2>Loading...</h2>
            ) : (
                <>
                    <h1>Quiz game</h1>
                    <button onClick={searchResult}>Search results</button>
                </>
            )}
        </>
    );
}

export default App;
