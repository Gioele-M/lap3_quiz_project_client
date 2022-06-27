import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Login, Home, NumPlayers, Category, Difficulty, Quiz, Finish } from './pages'
import { fetchResults } from "../src/actions";

function App() {
    const dispatch = useDispatch();
    const searchResult = () => dispatch(fetchResults());

    return (
        <>
            <Routes>
                <Route index element={<Login />} />
                <Route path="home" element={<Home />} />
                <Route path="numplayers" element={<NumPlayers />} />
                <Route path="category" element={< Category/>} />
                <Route path="difficulty" element={<Difficulty />} />
                <Route path="quiz" element={<Quiz />} />
                <Route path="finish" element={<Finish />} />
                
            </Routes>
            <button onClick={searchResult}></button>
        </>
        
    );
}
export default App;
