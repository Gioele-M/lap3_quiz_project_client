import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { HighScoreModal } from '../../components'
import axios from 'axios';
import io from "socket.io-client";


const Home = () => {
    const [hsModalVisibility, setHsModalVisibility] = useState('hidden')
    const [hsUsernames, setHsUsernames] = useState([
        // {username: "bob123", quizzes: 10, points: 12},
        // {username: "tina123", quizzes: 9, points: 9},
        // {username: "louise123", quizzes: 8, points: 9},
        // {username: "gene123", quizzes: 7, points: 6},
        // {username: "linda123", quizzes: 6, points: 5},
        // {username: "teddy456", quizzes: 5, points: 5},
        // {username: "mort456", quizzes: 4, points: 4},
        // {username: "jimmy666", quizzes: 1, points: 1}
    ])
    
    //fetch highscores from leaderboard
    //set usernames to results

    const fetchHighScores = async () => {
        const { data } = await axios.get("http://localhost:3001/leaderboard/leaderboard")
        console.log(data)
        setHsUsernames(data)
    }


    const openHsModal = () => {
        setHsModalVisibility('visible')
        fetchHighScores()
        
    }


    let navigate = useNavigate();
    

    
    
    const serverEndpoint = "http://localhost:3000/";
    
    
    let state = { socket: null };
    
    const socket = io(serverEndpoint);
    
    socket.on('connect', () => {console.log('Connected with id'+socket.id)})
    
    socket.on('admin-message', msg => console.log(msg));
    
    
    
    
    const [roomCode, setRoomCode] = useState('')
    
    
    

    function onCreateRoom(){

        socket.emit('message', 'Create room')

        
        socket.on('responseCreateRoom', (msg) => {

            setRoomCode(msg)
            console.log(msg)
        
        })

        socket.on('responseJoinRoom', (msg) => {

            console.log(msg)
        
        })
        

    }


    function onJoinRoom(){

        


    }
    

    
    function onFormSumbit(e){
        e.preventDefault()


        let toJoin = e.target[0].value
        console.log(e.target[0].value)


        setRoomCode(toJoin)

        socket.emit('message', 'Join room', toJoin)

        socket.on('responseJoinRoom', (msg) => {

            console.log(msg)
        
        })

    }

    
    return (
        <>
            <div className="highScores" onClick={openHsModal}>
                <h2>High Scores</h2>
            </div>
            <HighScoreModal hsModalVisibility={hsModalVisibility} hsUsernames={hsUsernames} setHsModalVisibility={setHsModalVisibility}/>
            <h1>Dumbfounded</h1>
            <div className="localGame" onClick={()=>navigate("/numplayers")}>
                <h2>Local game</h2>
            </div>
            <div className="onlineGame">
                <h2>Online game</h2>
            </div>
            <div className="socketGame">
                <h2>Socket game</h2>
                <div onClick={onCreateRoom}>
                    Create Room
                    {/* Click + p tag where to append  */}

                    <p>
                        Room code: {roomCode}
                    </p>
                </div>


                <br/>

                <div onClick={onJoinRoom}>
                    Join room
                    {/* Form + submit */}
                    <form onSubmit={onFormSumbit}>
                        <input type='text'></input>
                        <button type='submit'>Enter</button>
                    </form>
                </div>
            </div>
            {/* <button onClick={()=>navigate("/numplayers")}>Go to game setup</button> */}
        </>
    )
}

export default Home;
