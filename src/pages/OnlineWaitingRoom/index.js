import React from "react";

import socket from '../../actions/socket'

import { useState } from "react";
import { useNavigate } from "react-router-dom";



const OnlineWaitingRoom = () => {
    


    let navigate = useNavigate();
    

    
    
    
    socket.on('connect', () => {console.log('Connected with id'+socket.id)})
    
    socket.on('admin-message', msg => console.log(msg));
    
    
    
    
    const [roomCode, setRoomCode] = useState('')
    

    const [playersConnected, setPlayersConnected] = useState(0)
    
    

    function onCreateRoom(){

        socket.emit('message', 'Create room')

        
        socket.on('responseCreateRoom', (msg) => {

            setRoomCode(msg)
            console.log(msg)
        
        })

        setPlayersConnected(1)

        
    }


    function onJoinRoom(){

        


    }
    

    
    function onFormSumbit(e){
        e.preventDefault()


        let toJoin = e.target[0].value
        console.log(e.target[0].value)


        setRoomCode(toJoin)

        socket.emit('message', 'Join room', toJoin)

    }
    

    //Listen to how many users are in the room
    socket.on('responseJoinRoom', (msg) => {
        setPlayersConnected(msg)
        console.log(msg)
    
    })

    function onStartGame(){

        //Socket situation to let all users know to go ahead

    }

    
    //Socket on listen to message start game, if it is then redirect to /quiz


    
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


            </div>
            {/* <button onClick={()=>navigate("/numplayers")}>Go to game setup</button> */}
        </>
    )
}

export default OnlineWaitingRoom;
