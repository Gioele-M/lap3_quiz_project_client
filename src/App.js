import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
    Login,
    Home,
    NumPlayers,
    Category,
    Difficulty,
    Quiz,
    Finish,
    Register,
} from './pages';
// import { fetchResults } from '../src/actions';

import './pages/Home/style.css';
import './pages/NumPlayers/style.css';
import './pages/Difficulty/style.css';
import './pages/Category/style.css';
import './components/HighscoreModal/style.css';

function App() {
    const user = useSelector((state) => state.user);

    return (
        <>
            {/* {user && ( */}
                <Routes>
                    <Route index element={<Login />} />
                    <Route path="home" element={<Home />} />
                    <Route path="numplayers" element={<NumPlayers />} />
                    <Route path="category" element={<Category />} />
                    <Route path="difficulty" element={<Difficulty />} />
                    <Route path="quiz" element={<Quiz />} />
                    <Route path="finish" element={<Finish />} />
                    <Route path="register" element={<Register />} />
                </Routes>
            {/* // )} */}
            {/* {!user && (
                <Routes>
                    <Route index element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            )} */}
        </>
    );
}
export default App;
