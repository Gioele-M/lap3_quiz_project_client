import React from "react";

import socket from '../../actions/socket'

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchRankingQuestions } from "../../actions";


import { HostRequestHandler } from "../../components";



const OnlineWaitingRoom = () => {
    
    let navigate = useNavigate();
    const dispatch = useDispatch()

    socket.off('connect').on('connect', () => {console.log('Connected with id'+socket.id)})
    
    socket.off('admin-message').on('admin-message', msg => console.log(msg));
    
    
    const [roomCode, setRoomCode] = useState('')
    const [hostOrGuest, setHostOrGuest] = useState('')
    const [playersConnected, setPlayersConnected] = useState(0)
    const [startGame, setStartGame] = useState(false)
    //Listen to how many users are in the room
    socket.off('responseJoinRoom').on('responseJoinRoom', (msg) => {
        setPlayersConnected(msg)
        console.log(msg)
    })

    function onCreateRoom(){
        socket.emit('message', 'Create room')
        socket.off('responseCreateRoom').on('responseCreateRoom', (msg) => {
            setRoomCode(msg)
            console.log(msg)
        })
        setPlayersConnected(1)
        setHostOrGuest('host')
    }

    function onFormSumbit(e){
        e.preventDefault()
        let toJoin = e.target[0].value
        console.log(e.target[0].value)
        setRoomCode(toJoin)
        socket.emit('message', 'Join room', toJoin)
        setHostOrGuest('guest')
    }
    
    function onStartGame(e){
        // console.log(e.target.innerText)
        if(hostOrGuest == 'host'){
            const getRankingQuestions = () => dispatch(fetchRankingQuestions());
            getRankingQuestions()
            setStartGame(true)
        }else if(hostOrGuest == 'guest'){
            alert('Let the host start the game')
        }else{
            return
        }
    }

    socket.off('serverAuthToStartGame').on('serverAuthToStartGame', (msg) => {
        console.log(msg)
        dispatch({
            type: 'LOAD RANKING QUESTIONS',
            payload: msg
        });
        const goToQuiz = () => {navigate('/quiz')}
        setTimeout(goToQuiz, 3000)
    })

    return (
        <>
            <div className="socketGame">
                <h2 className="socketHeader">Socket Game</h2>
                <div className="createRoom">
                    <div className="createButton" onClick={onCreateRoom}>
                        Create Room
                    </div>
                    <p>
                        Room Code: {roomCode}
                    </p>
                </div>
                <div className="joinRoom">
                    <div>
                        Join Room
                        <form className="roomForm" onSubmit={onFormSumbit}>
                            <input type='text'></input>
                            <button type='submit'>Enter</button>
                        </form>
                    </div>
                </div>
                <div className="startGame">
                    <button onClick={onStartGame}>Start Game</button>
                </div>
                <div className="peopleRoom">
                    People in the room {playersConnected}
                </div>
                { startGame ? <HostRequestHandler room={roomCode} /> : ''}
            </div>
            <button className='homeButton' onClick={()=>navigate("/home")}>Home</button>
        </>
    )
}

export default OnlineWaitingRoom;
