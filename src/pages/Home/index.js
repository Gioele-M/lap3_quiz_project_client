import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { HighscoreModal } from '../../components'


const Home = () => {
    const [hsModalVisibility, setHsModalVisibility] = useState('hidden')
    const [hsUsernames, setHsUsernames] = useState([
        {username: "bob123", quizzes: 10, points: 12},
        {username: "tina123", quizzes: 9, points: 9},
        {username: "louise123", quizzes: 8, points: 9},
        {username: "gene123", quizzes: 7, points: 6},
        {username: "linda123", quizzes: 6, points: 5},
        {username: "teddy456", quizzes: 5, points: 5},
        {username: "mort456", quizzes: 4, points: 4},
        {username: "jimmy666", quizzes: 1, points: 1}
    ])
    
    const openHsModal = () => {
        setHsModalVisibility('visible')
    }

    let navigate = useNavigate();
    
    return (
        <>
            <div className="highscores" onClick={openHsModal}>
                <h2>Highscores</h2>
            </div>
            <HighscoreModal hsModalVisibility={hsModalVisibility} hsUsernames={hsUsernames} setHsModalVisibility={setHsModalVisibility}/>
            <h1>Dumbfounded</h1>
            <div className="localGame" onClick={()=>navigate("/numplayers")}>
                <h2>Local game</h2>
            </div>
            <div className="onlineGame">
                <h2>Online game</h2>
            </div>
            {/* <button onClick={()=>navigate("/numplayers")}>Go to game setup</button> */}
        </>
    )
}

export default Home;