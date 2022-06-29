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

    

    
    
    socket.on('connect', () => {console.log('Connected with id'+socket.id)})
    
    socket.on('admin-message', msg => console.log(msg));
    
    
    
    
    const [roomCode, setRoomCode] = useState('')

    const [hostOrGuest, setHostOrGuest] = useState('')
    

    const [playersConnected, setPlayersConnected] = useState(0)


    const [startGame, setStartGame] = useState(false)
    
    
    //Listen to how many users are in the room
    socket.on('responseJoinRoom', (msg) => {
        setPlayersConnected(msg)
        console.log(msg)
    
    })



    function onCreateRoom(){

        socket.emit('message', 'Create room')

        
        socket.on('responseCreateRoom', (msg) => {

            setRoomCode(msg)
            console.log(msg)
        
        })

        setPlayersConnected(1)

        setHostOrGuest('host')
        
    }


    function onJoinRoom(){

        


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

        console.log(e.target.innerText)

        // IF STARTED ROOM
        // Get ranking questions from state and send it to server

        if(hostOrGuest == 'host'){
            const getRankingQuestions = () => dispatch(fetchRankingQuestions());

            getRankingQuestions()
            setStartGame(true)
            

            // Get questions from reducer
            // const question = returnQuestions()
            
        
        }else if(hostOrGuest == 'guest'){

            alert('Let the host start the game')

        }else{
            return
        }

        //Socket situation to let all users know to go ahead





        //IF NOT STARTED ROOM
        // get ranking questions from server and set it in state



        // dispatch({
        //     type: 'LOAD RANKING QUESTIONS',
        //     payload: results,
        // });

    }

    
    //Socket on listen to message start game, if it is then redirect to /quiz

    


    // function returnQuestions(){
    //     ;
    //     return results
    // }

    
    return (
        <>
            
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

                <div>
                    <button onClick={onStartGame}>Start game</button>
                </div>


                <div>
                    People in the room {playersConnected}
                </div>

                { startGame ? <HostRequestHandler room={roomCode} /> : ''}

            </div>
            {/* <button onClick={()=>navigate("/numplayers")}>Go to game setup</button> */}
        </>
    )
}

export default OnlineWaitingRoom;
