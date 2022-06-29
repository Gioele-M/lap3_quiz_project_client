import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

import socket from "../../actions/socket";

const HostRequestHandler = (props) => {

    const roomNumber = props.room


    let resultsAreIn = false

    let results

    console.log("now it's true")
    results = useSelector((state) => state.results)
    console.log(results)


    if(results.length !== 0){

        console.log("Now the results are in")
        console.log(results)

        resultsAreIn = true



        // SEND REQUEST TO SERVER TO GET DATA THERE; SERVER WILL RESPOND TO ALL GUESTS !!!!

        socket.emit('startGame', results, roomNumber, (t)=>{console.log(t)})

    }
    

    

    return(
        
        <div>Working on it...Room ID {roomNumber}... {resultsAreIn ? 'done' : 'not done'}</div>

        
    )
}


export default HostRequestHandler
