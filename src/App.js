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

// function App() {
//     // const dispatch = useDispatch();
//     const loading = useSelector((state) => state.loading);
//     console.log(loading);
//     // const searchResult = () => dispatch(fetchResults());

//     return (
//         <>
//             <Routes>
//                 <Route index element={<Login />} />
//                 <Route path="home" element={<Home />} />
//                 <Route path="numplayers" element={<NumPlayers />} />
//                 <Route path="category" element={<Category />} />
//                 <Route path="difficulty" element={<Difficulty />} />
//                 <Route path="quiz" element={<Quiz />} />
//                 <Route path="finish" element={<Finish />} />
//                 <Route path="register" element={<Register />} />
//             </Routes>
//             {/* <button onClick={searchResult}></button>

//             {/* {loading ? (
//                 <h2>Loading...</h2>
//             ) : (
//                 <>
//                     <h1>Quiz game</h1>
//                     <button onClick={searchResult}>Search results</button>
//                 </>
//             )} */}
//         </>
//     );
// }


import io from "socket.io-client";
const serverEndpoint = "http://localhost:3000/";

function App() {
    let state = { socket: null };
    
    const socket = io(serverEndpoint);

    socket.on('connect', () => {console.log('Connected with id'+socket.id)})

    socket.on('admin-message', msg => console.log(msg));
    
    
    socket.emit('message', 'this is the message')

    


    console.log('socket' + socket)
    console.log(socket)
    
    

    return (
            <div id="App">Hi</div>
        );
}








export default App;
