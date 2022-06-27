import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { Login, Home, NumPlayers, Category, Difficulty, Quiz, Finish } from './pages'



function App() {
    return (
        <Routes>
            <Route index element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="numplayers" element={<NumPlayers />} />
            <Route path="category" element={< Category/>} />
            <Route path="difficulty" element={<Difficulty />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="finish" element={<Finish />} />
        </Routes>
    )
}

export default App;
