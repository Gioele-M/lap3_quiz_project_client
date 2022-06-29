import React from "react";
import io from "socket.io-client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";



const OnlineWaitingRoom = () => {
    


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

            </div>
            {/* <button onClick={()=>navigate("/numplayers")}>Go to game setup</button> */}
        </>
    )
}

export default OnlineWaitingRoom;
