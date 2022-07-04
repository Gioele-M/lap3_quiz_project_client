import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import socket from "../../actions/socket";

const HostRequestHandler = (props) => {

    const roomNumber = props.room
    let resultsAreIn = false
    let results
    results = useSelector((state) => state.results)

    useEffect(() => {
        if(results.length !== 0){
            resultsAreIn = true
            let playerName = 'playerName'
            results.forEach(element => {
                element.player = playerName
            });
            socket.emit('startGame', results, roomNumber, (t)=>{console.log(t)})
        }
    },[results.length])
    
    return(
        <div>Working on it...Room ID {roomNumber}... {resultsAreIn ? 'done' : 'not done'}</div>
    )
}


export default HostRequestHandler
